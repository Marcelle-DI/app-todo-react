import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TASKLIST = [
  { id: "todo-0", name: "Observe", completed: true },
  { id: "todo-1", name: "Orient", completed: false },
  { id: "todo-2", name: "Decide", completed: false },
  { id: "todo-3", name: "Act", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App  tasks={TASKLIST} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
