export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (taskName) => ({
  type: ADD_TASK,
  payload: taskName,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const updateTask = (index, newTaskName) => ({
  type: UPDATE_TASK,
  payload: { index, newTaskName },
});
