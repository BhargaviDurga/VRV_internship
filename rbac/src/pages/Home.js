import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    navigate('/login', { state: { role } });
  };

  return (
    <div>
      <h1>Welcome to the Role-Based Access Control System</h1>
      <p>Please select a role to log in:</p>
      <div>
        <button onClick={() => handleLogin('TeamMember')}>Login as Team Member</button>
        <button onClick={() => handleLogin('TeamLead')}>Login as Team Lead</button>
        <button onClick={() => handleLogin('ProjectManager')}>Login as Project Manager</button>
        <button onClick={() => handleLogin('Admin')}>Login as Admin</button>
      </div>
    </div>
  );
};

export default Home;
