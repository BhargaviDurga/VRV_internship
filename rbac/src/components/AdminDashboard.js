import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const users = useSelector((state) => state.auth.users); // Fetch all users

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>You have full control over the system:</p>
      <ul>
        <li>View all users' login details.</li>
        <li>Manage project managers, team leads, and team members.</li>
        <li>Access all project details, tasks, and upcoming projects.</li>
        <li>Create, read, update, and delete any data.</li>
      </ul>
      <h2>All Users</h2>
      <table>
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
