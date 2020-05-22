import React, { Component } from "react";
import style from "../styles/TodoList.module.css";
import TodoItem from "../components/TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul className={style.list}>
        <div>
          <TodoItem />
        </div>
      </ul>
    );
  }
}
