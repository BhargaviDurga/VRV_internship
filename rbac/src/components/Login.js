import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = () => {
    try {
      dispatch(login({ username, password }));
      setError(''); // Clear any previous errors

      // Redirect to respective dashboards
      switch (username) {
        case 'teamMember1':
          navigate('/team-member');
          break;
        case 'teamLead1':
          navigate('/team-lead');
          break;
        case 'projectManager1':
          navigate('/project-manager');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
