import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Currently logged-in user
  users: [ // User database
    { username: 'teamMember1', password: 'password1', role: 'TeamMember' },
    { username: 'teamLead1', password: 'password2', role: 'TeamLead' },
    { username: 'projectManager1', password: 'password3', role: 'ProjectManager' },
    { username: 'admin', password: 'admin123', role: 'Admin' },
  ],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.user = user; // Set logged-in user
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
