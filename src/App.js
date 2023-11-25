import React from 'react';
import { Provider } from 'react-redux';
import ToDoList from './components/ToDoList'
import store from './redux/store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
