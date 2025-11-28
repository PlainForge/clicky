import { useContext, useEffect } from 'react';
import './App.css';
import { MainContext } from './contexts/MainContext';
import Login from './auth/Login';
import { authService } from './lib/firebaseService';
import { LogOut } from 'lucide-react';
import Loading from './components/Loading';

function App() {
  const context = useContext(MainContext);

  useEffect(() => {
    document.title = "Clicky";
  }, []);

  if (!context) return null;
  const { user, loading } = context;

  if (loading) return <Loading />
  if (!user) return <Login />;

  return (
    <div className="app">
      <h1>Welcome, {user.email}</h1>
      <button onClick={authService.logout}><LogOut /></button>
    </div>
  );
}

export default App;
