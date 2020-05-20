import React from "react";
import style from "../styles/App.module.css";
import TodoList from "../components/TodoList.js";
import TodoInput from "../components/TodoInput.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className={style.app}>
          <h1 className={style.title}>#TODO List</h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
