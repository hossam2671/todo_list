import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/todoActions';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_TASK:
      return state.map((task, index) =>
        index === action.payload.index ? action.payload.newTaskName : task
      );
    default:
      return state;
  }
};

export default todoReducer;