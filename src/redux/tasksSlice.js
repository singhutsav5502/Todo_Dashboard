import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    todo: [
      { id: 1, name: 'Brainstorming', description: 'Brainstorming brings team members\' diverse experience into play.', priority: 'Low', comments: 12, files: 0 },
      { id: 2, name: 'Research', description: 'User research helps create optimal products.', priority: 'High', comments: 10, files: 3 },
    ],
    inProgress: [
      { id: 3, name: 'Design', description: 'Creating low fidelity wireframes.', priority: 'Medium', comments: 8, files: 2 },
    ],
    done: [
      { id: 4, name: 'Launch', description: 'Launching the first version.', priority: 'Low', comments: 15, files: 4 },
    ],
  },
  filter: "All", // "All" is set as the default filter option
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { status, task } = action.payload;
      state.tasks[status].push(task);
    },
    moveTask: (state, action) => {
      const { taskId, from, to } = action.payload;
      const taskIndex = state.tasks[from].findIndex((task) => task.id === taskId);
      if (taskIndex > -1) {
        const [task] = state.tasks[from].splice(taskIndex, 1);
        state.tasks[to].push(task);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, moveTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
