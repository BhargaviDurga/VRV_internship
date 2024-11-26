import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const ProjectManagerDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <h1>Project Manager Dashboard</h1>
      <p>Welcome, {user?.username}!</p>
      <h2>Project Progress</h2>
      <ul>
        <li>Module 1: 80% Complete</li>
        <li>Module 2: 50% Complete</li>
        <li>Module 3: Not Started</li>
      </ul>
      <h2>Generate Reports</h2>
      <button>Generate Weekly Report</button>
      <button>Generate Monthly Report</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProjectManagerDashboard;
