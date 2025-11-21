import { useContext, useEffect } from 'react';
import './App.css';
import { MainContext } from './contexts/MainContext';
import Login from './auth/Login';

function App() {
  const context = useContext(MainContext);

  useEffect(() => {
    document.title = "Clicky";
  }, []);

  if (!context) return null;
  const { user } = context;

  if (!user) return <Login />;

  return (
    <div className="app">
      <h1>Welcome, {user.email}</h1>
    </div>
  );
}

export default App;
