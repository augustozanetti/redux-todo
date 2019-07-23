import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import TodoList from './components/TodoList'
import Counter from './components/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <Counter />
      </div>
    </Provider>
    
  );
}

export default App;
