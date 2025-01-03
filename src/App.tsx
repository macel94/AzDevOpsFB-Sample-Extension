import React, { useState, useContext } from 'react';
import { AuthContext } from './Auth/AuthContext';
// import { JsonPatchDocument } from './JsonPatchDocument';
import { Solution } from './Solution';
import { Environment } from './Environment';
// import { getService } from 'azure-devops-extension-sdk';

import { WorkItemsApi, WorkItemsCreateRequest } from './wit-client/apis/WorkItemsApi';
import { JsonPatchDocument } from './wit-client/models/JsonPatchDocument';
import { WorkItem } from './wit-client/models/WorkItem';
import { getHost } from 'azure-devops-extension-sdk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createWorkItem = async (workItem: any): Promise<WorkItem> => {
  const client = new WorkItemsApi();
  const project = await getProject();
  const organization = getHost().name;

  const patchDocument: JsonPatchDocument = [
    {
      op: 'add',
      path: '/fields/System.Title',
      value: workItem.fields['System.Title'],
    },
    {
      op: 'add',
      path: '/fields/Custom.Solutions',
      value: workItem.fields['Custom.Solutions'],
    },
    {
      op: 'add',
      path: '/fields/Custom.SourceEnvironment',
      value: workItem.fields['Custom.SourceEnvironment'],
    },
    {
      op: 'add',
      path: '/fields/Custom.TargetEnvironment',
      value: workItem.fields['Custom.TargetEnvironment'],
    },
  ];

  const request: WorkItemsCreateRequest = {
    organization: organization,
    project: project,
    type: 'Task',
    apiVersion: '7.2-preview',
    body: patchDocument,
  };

  return await client.workItemsCreate(request);
};

const getProject = (): string => {
  // Get the project name from the ID. the call is https://dev.azure.com/{organization}/_apis/projects/{projectId}?api-version=7.1
  // var projId = getHost().id;
  // fecth the proj name using organization and projId
  // var project = fetch(`https://dev.azure.com/${getHost().name}/_apis/projects/${projId}?api-version=7.1`)
  
  if (!project) {
    // take it from a mocked environment variable
    return process.env.REACT_APP_AZURE_DEVOPS_PROJECT || 'REACT_APP_AZURE_DEVOPS_PROJECT env variable not set';
  }

  return project;
};

const App: React.FC = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [sourceEnv, setSourceEnv] = useState<Environment | null>(null);
  const [targetEnv, setTargetEnv] = useState<Environment | null>(null);
  const [selectedSolutions, setSelectedSolutions] = useState<Solution[]>([]);

  const environments: Environment[] = [
    { id: 'env1', name: 'Development' },
    { id: 'env2', name: 'Staging' },
    { id: 'env3', name: 'Production' },
  ];

  const solutions: Solution[] = [
    { id: 'sol1', name: 'Solution A' },
    { id: 'sol2', name: 'Solution B' },
    { id: 'sol3', name: 'Solution C' },
  ];

  const handleSolutionSelect = (solution: Solution) => {
    if (!selectedSolutions.find(s => s.id === solution.id)) {
      setSelectedSolutions([...selectedSolutions, solution]);
    }
  };

  const handleSolutionRemove = (solution: Solution) => {
    setSelectedSolutions(selectedSolutions.filter(s => s.id !== solution.id));
  };

  const handleSubmit = async () => {
    if (!sourceEnv || !targetEnv || selectedSolutions.length === 0) {
      alert('Please select all required fields.');
      return;
    }

    try {
      const workItem = {
        fields: {
          'System.Title': `Deployment Request from ${sourceEnv.name} to ${targetEnv.name}`,
          'Custom.Solutions': selectedSolutions.map(s => s.name).join(', '),
          'Custom.SourceEnvironment': sourceEnv.name,
          'Custom.TargetEnvironment': targetEnv.name,
        },
      };

      const createdWorkItem = await createWorkItem(workItem);

      alert(`Work item created successfully with ID: ${createdWorkItem.id}`);
    } catch (error) {
      console.error('Error creating work item:', error);
      alert('Failed to submit deployment request.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Hello, {user?.name}!</h1>
          <h2>Deployment Request</h2>
          <div>
            <label htmlFor="sourceEnv">Source Environment:</label>
            <select
              id="sourceEnv"
              value={sourceEnv?.id || ''}
              onChange={e =>
                setSourceEnv(
                  environments.find(env => env.id === e.target.value) || null
                )
              }
            >
              <option value="">Select an environment</option>
              {environments.map(env => (
                <option key={env.id} value={env.id}>
                  {env.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="targetEnv">Target Environment:</label>
            <select
              id="targetEnv"
              value={targetEnv?.id || ''}
              onChange={e =>
                setTargetEnv(
                  environments.find(env => env.id === e.target.value) || null
                )
              }
            >
              <option value="">Select an environment</option>
              {environments.map(env => (
                <option key={env.id} value={env.id}>
                  {env.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="solutions">Solutions:</label>
            <ul>
              {solutions.map(solution => (
                <li key={solution.id}>
                  <input
                    type="checkbox"
                    id={solution.id}
                    checked={selectedSolutions.some(s => s.id === solution.id)}
                    onChange={() =>
                      selectedSolutions.some(s => s.id === solution.id)
                        ? handleSolutionRemove(solution)
                        : handleSolutionSelect(solution)
                    }
                  />
                  <label htmlFor={solution.id}>{solution.name}</label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Selected Solutions:</h3>
            <ul>
              {selectedSolutions.map(solution => (
                <li key={solution.id}>{solution.name}</li>
              ))}
            </ul>
          </div>

          <button onClick={handleSubmit} disabled={!sourceEnv || !targetEnv || selectedSolutions.length === 0}>
            Submit
          </button>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default App;
