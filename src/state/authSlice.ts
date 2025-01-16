import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../interfaces/User';


interface AuthState {
  isAuthenticated: boolean;
  userData: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.userData = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.userData = null;
    },
  },
});

export const {
  startLoading,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
