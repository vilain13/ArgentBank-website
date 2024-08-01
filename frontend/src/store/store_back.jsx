import { configureStore } from '@reduxjs/toolkit';

import signinReducer from '../reducers/signin/index.jsx';



const store = configureStore({
  reducer: {
    signin: signinReducer,
   
  },
 
});

export default store;