import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../slices/TaskSlice.jsx'; // Ensure the path is correct

const store = configureStore({
  reducer: taskReducer
});

export default store;