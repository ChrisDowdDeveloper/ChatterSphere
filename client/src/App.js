import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import CreateAccount from './components/createAccount/CreateAccount';

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
        <Route 
          path='/createAccount'
          element={<CreateAccount />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
