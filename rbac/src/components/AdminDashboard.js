import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const users = useSelector((state) => state.auth.users); // Fetch all users
  const currentUser = useSelector((state) => state.auth.user); // Current logged-in admin
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    role: 'TeamMember',
  });

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    // Add user logic here (if integrated with backend or Redux)
    console.log('New User:', newUser);
    alert('This functionality is a placeholder. Integration needed!');
    setNewUser({ username: '', password: '', role: 'TeamMember' }); // Reset form
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {currentUser?.username}!</p>
      
      <h2>Manage Users</h2>
      <form onSubmit={handleAddUser}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={newUser.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={newUser.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Role:
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
          >
            <option value="TeamMember">Team Member</option>
            <option value="TeamLead">Team Lead</option>
            <option value="ProjectManager">Project Manager</option>
          </select>
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>

      <h2>System Overview</h2>
      <ul>
        <li>Total Users: {users.length}</li>
        <li>Active Projects: 5</li> {/* Placeholder value */}
      </ul>
      
      <button onClick={handleLogout}>Logout</button>

      <h2>All Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
