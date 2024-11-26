import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const Login = () => {
  const { selectedRole } = useRole();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = () => {
    try {
      dispatch(login({ username, password, role: selectedRole }));
      setError(''); // Clear any previous errors

      // Redirect to respective dashboards
      const roleToRouteMap = {
        TeamMember: '/team-member',
        TeamLead: '/team-lead',
        ProjectManager: '/project-manager',
        Admin: '/admin',
      };

      navigate(roleToRouteMap[selectedRole]);
    } catch (err) {
      setError('Invalid username, password, or role mismatch');
    }
  };

  return (
    <div>
      <h1>Login as {selectedRole}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
