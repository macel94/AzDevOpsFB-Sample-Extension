import React, { useContext } from 'react';
import { AuthContext } from './Auth/AuthContext';

const App: React.FC = () => {
  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Hello, {user?.name}!</h1>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default App;