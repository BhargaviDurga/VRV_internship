import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const TeamMemberDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <h1>Team Member Dashboard</h1>
      <p>Welcome, {user?.username}!</p>
      <h2>Your Tasks</h2>
      <ul>
        <li>Task 1: Complete module documentation - Status: Pending</li>
        <li>Task 2: Bug fixes for UI components - Status: In Progress</li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TeamMemberDashboard;
