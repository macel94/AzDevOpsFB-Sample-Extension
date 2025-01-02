import React, { useState, useContext } from 'react';
import { AuthContext } from './Auth/AuthContext';
// import getClient from 'azure-devops-extension-api';
// import WorkItemTrackingRestClient from 'azure-devops-extension-api/WorkItemTracking';
// import Wiql from 'azure-devops-extension-api/WorkItemTracking';
// https://www.linkedin.com/pulse/build-azure-devops-extension-using-react-typescript-riccardo-gregori
import { JsonPatchDocument } from './JsonPatchDocument';
import { Solution } from './Solution';
import { Environment } from './Environment';

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
      // // Initialize the Azure DevOps SDK
      // await SDK.init();

      // const wiql: Wiql = { query: "SELECT [System.Id], FROM WorkItems WHERE [Work Item Type] = 'Bug'" };

      // // Get the WorkItemTracking client
      // const workItemClient = getClient(WorkItemTrackingRestClient);
      // const result = await workItemClient.queryByWiql(wiql);

      // Prepare the work item fields as a JSON Patch Document
      const patchDocument: JsonPatchDocument = [
        {
          op: 'add',
          path: '/fields/System.Title',
          value: `Deployment from ${sourceEnv.name} to ${targetEnv.name}`,
        },
        {
          op: 'add',
          path: '/fields/System.Description',
          value: `Deploying the following solutions: ${selectedSolutions.map(s => s.name).join(', ')}`,
        },
      ];

      // Specify the project name and work item type
      const projectName = 'YourProjectName'; // Replace with your Azure DevOps project name
      const workItemType = 'Task'; // Replace with the desired work item type

      // Create the work item
      // const createdWorkItem = await workItemClient.createWorkItem(
      //   JSON.stringify(patchDocument), // Serialize the JSON Patch Document
      //   projectName,
      //   workItemType
      // );

      // alert(`Work item created successfully with ID: ${createdWorkItem.id}`);
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
