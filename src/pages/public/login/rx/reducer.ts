import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  username: string;
  password: string;
  isLoggedIn: boolean;
  token: string;
}
const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  token: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state: AuthState, action: { payload: string }) => {
      state.username = action.payload;
    },
    setPassword: (state: AuthState, action: { payload: string }) => {
      state.password = action.payload;
    },
    setLoggedInState: (state: AuthState, action: { payload: boolean }) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state: AuthState, action: { payload: string }) => {
      state.token = action.payload;
    },
    setLogout: () => initialState,
  },
});

export default authSlice.reducer;

interface SetUsernameAction {
  type: string;
  payload: string;
}

interface SetPasswordAction {
  type: string;
  payload: string;
}

interface SetLoggedInStateAction {
  type: string;
  payload: boolean;
}

interface SetTokenAction {
  type: string;
  payload: string;
}

interface SetLogoutAction {}

type AuthActions =
  | SetUsernameAction
  | SetPasswordAction
  | SetLoggedInStateAction
  | SetTokenAction
  | SetLogoutAction;

export const {
  setUsername,
  setPassword,
  setLoggedInState,
  setToken,
  setLogout,
} = authSlice.actions;
