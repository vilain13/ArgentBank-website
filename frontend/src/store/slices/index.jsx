import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
  token: null,
  isEditing: false,
  newUserName: null,
};

const signinSlice = createSlice({
  name: 'signinSlice',
  initialState,
  reducers: {
    signinSuccess: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.newUserName = action.payload.userName;
    },

    signout: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
      state.token = null; // Réinitialise le token
      state.isEditing = false;
      state.newUserName = null;
    },
  
    startEditing : (state) => {
      state.isEditing = true;
    },

    cancelEditing : (state) => {
      state.isEditing = false;
      state.newUserName = state.userName; // remplace la modification annulée par le userName actuel
    },

    updateNewUserName : (state, action) => {
      state.newUserName = action.payload;
    },

    updateUserName: (state, action) => {
      state.userName = action.payload; // Met à jour userName avec la nouvelle valeur
    }
}
});


export const {signinSuccess, signout, startEditing, cancelEditing, updateNewUserName, updateUserName} = signinSlice.actions;
  
export default signinSlice.reducer;
  
