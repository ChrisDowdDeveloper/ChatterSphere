import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';

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
        <Route 
          path='/:username/:chatroomName'
          element={<Messages />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
