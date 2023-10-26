import { createSlice } from '@reduxjs/toolkit';
import * as api from '../utils/api';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  currentUser: null,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api.loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.currentUser = action.payload.currentUser;
        state.error = null;
      })
      .addCase(api.logoutUser.fulfilled, state => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.currentUser = null;
        state.error = null;
      })
      .addCase(api.registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.currentUser = action.payload.currentUser;
        state.error = null;
      })
      .addCase(api.loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.currentUser = null;
        state.error = action.error.message;
      })
      .addCase(api.logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(api.registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(api.getCurrentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(api.getCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(api.getCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
