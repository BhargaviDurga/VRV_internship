import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import TeamMemberDashboard from './components/TeamMemberDashboard';
import TeamLeadDashboard from './components/TeamLeadDashboard';
import ProjectManagerDashboard from './components/ProjectManagerDashboard';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/team-member"
          element={
            <PrivateRoute allowedRoles={['TeamMember']}>
              <TeamMemberDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/team-lead"
          element={
            <PrivateRoute allowedRoles={['TeamLead']}>
              <TeamLeadDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/project-manager"
          element={
            <PrivateRoute allowedRoles={['ProjectManager']}>
              <ProjectManagerDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={['Admin']}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
