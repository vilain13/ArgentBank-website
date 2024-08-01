import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthentificated: false,
  status: null,
  firstName: null,
  lastName: null,
  userName: null,
  token: null,
};

const signinSlice = createSlice({
  name: 'signinSlice',
  initialState,
  reducers: {
    signinSuccess: (state, action) => {
      state.isAuthentificated = true;
      state.status = 'succeeded';
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
    signinFailure: (state, action) => {
      state.isAuthentificated = false;
      state.status = 'failed';
    },
    signout: (state) => {
      state.isAuthentificated = false;
      state.status = 'logout';
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
      state.token = null; // Réinitialise le token
    },
    signinFormRaz : (state) => {
      state.status = null;
    }
}
});


export const {signinSuccess, signinFailure, signout, signinFormRaz} = signinSlice.actions;
  
export default signinSlice.reducer;
  
