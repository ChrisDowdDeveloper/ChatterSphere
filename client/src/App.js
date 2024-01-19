import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Login />}
        />
        <Route
          path='/:username/dashboard'
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
