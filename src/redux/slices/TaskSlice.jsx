import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
  incompleteTasks: [],
  completedTasks: [],
  editIndex: null,
  editInputValue: '',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.incompleteTasks.push(action.payload);
    },
    deleteIncompleteTask(state, action) {
      state.incompleteTasks = state.incompleteTasks.filter((_, index) => index !== action.payload);
    },
    deleteCompleteTask(state, action) {
      state.completedTasks = state.completedTasks.filter((_, index) => index !== action.payload);
    },
    changeTaskStatus(state, action) {
      const { task, index, isCompleted } = action.payload;
      if (isCompleted) {
        state.incompleteTasks.splice(index, 1);
        state.completedTasks.push(task);
      } else {
        state.completedTasks.splice(index, 1);
        state.incompleteTasks.push(task);
      }
    },
    confirmEditTask(state, action) {
      const { index, newTask } = action.payload;
      state.incompleteTasks[index] = newTask;
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice.reducer;