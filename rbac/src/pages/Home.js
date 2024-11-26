import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const Home = () => {
  const navigate = useNavigate();
  const { setSelectedRole } = useRole();

  const handleRoleSelection = (role) => {
    setSelectedRole(role); // Save selected role
    navigate('/login');
  };

  return (
    <div>
      <h1>Select Your Role</h1>
      <button onClick={() => handleRoleSelection('TeamMember')}>Team Member</button>
      <button onClick={() => handleRoleSelection('TeamLead')}>Team Lead</button>
      <button onClick={() => handleRoleSelection('ProjectManager')}>Project Manager</button>
      <button onClick={() => handleRoleSelection('Admin')}>Admin</button>
    </div>
  );
};

export default Home;
