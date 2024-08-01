import { configureStore } from '@reduxjs/toolkit';

import signinReducer from './slices/index.jsx';



const store = configureStore({
  reducer: {
    signinSlice: signinReducer,
   
  },
 
});

export default store;