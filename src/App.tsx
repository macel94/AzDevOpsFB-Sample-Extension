import React, { useState, useContext } from 'react';
import { AuthContext } from './Auth/AuthContext';
import * as SDK from 'azure-devops-extension-sdk';
// import * as WitAPI from "azure-devops-extension-api/WorkItemTracking";
import * as API from "azure-devops-extension-api";

interface Environment {
  id: string;
  name: string;
}

interface Solution {
  id: string;
  name: string;
}

const App: React.FC = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [sourceEnv, setSourceEnv] = useState<Environment | null>(null);
  const [targetEnv, setTargetEnv] = useState<Environment | null>(null);
  const [selectedSolutions, setSelectedSolutions] = useState<Solution[]>([]);

  const environments: Environment[] = [
    // Replace with your actual environments
    { id: 'env1', name: 'Development' },
    { id: 'env2', name: 'Staging' },
    { id: 'env3', name: 'Production' },
  ];

  const solutions: Solution[] = [
    // Replace with your actual solutions
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
      // // Get the WorkItemTrackingRestClient
      // const client = await API.getClient<WitAPI.WorkItemTrackingRestClient>(WitAPI.WorkItemTrackingRestClient); 

      // const projectService = await SDK.getService<API.IProjectPageService>(API.CommonServiceIds.ProjectPageService);
      // const project = await projectService.getProject();

      // // Construct the JSON payload for the Azure DevOps task
      // const taskPayload = {
      //   sourceEnvironment: sourceEnv.id,
      //   targetEnvironment: targetEnv.id,
      //   solutions: selectedSolutions.map(s => s.id),
      // };

      // // Create the work item
      // const workItem = await client.createWorkItem(
      //   [
      //     { op: "add", path: "/fields/System.Title", value: "Deployment Request" },
      //     { op: "add", path: "/fields/System.Description", value: JSON.stringify(taskPayload, null, 2) }
      //   ],
      //   project!.name,
      //   "Task"
      // );

      // console.log("Work item created:", workItem.id);
      // alert('Deployment request submitted!');

      // // Open the created work item in a new tab
      // const workItemUrl = `${project!.name}/_workitems/edit/${workItem.id}`;
      // window.open(workItemUrl, "_blank");
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

          {/* Target Environment Selection */}
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

          {/* Solution Selection */}
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

          {/* Selected Solutions Display */}
          <div>
            <h3>Selected Solutions:</h3>
            <ul>
              {selectedSolutions.map(solution => (
                <li key={solution.id}>{solution.name}</li>
              ))}
            </ul>
          </div>

          {/* Submit Button */}
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