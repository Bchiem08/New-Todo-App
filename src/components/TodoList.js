import React, { Component } from "react";
import style from "../styles/TodoList.module.css";
import TodoItem from "../components/TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div className={style.list}>
        <TodoItem />
      </div>
    );
  }
}
