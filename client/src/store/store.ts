import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    posts: postReducer,
  },
});

export default store;
