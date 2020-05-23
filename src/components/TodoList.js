import React, { Component } from "react";
import style from "../styles/TodoList.module.css";
import TodoItem from "../components/TodoItem";

export default class TodoList extends Component {
  render() {
    const list = this.props.list.map((currenttask, index) => {
      return <li key={index}>{<TodoItem task={currenttask} />}</li>;
    });
    return (
      <ul className={style.list} value={this.props.list}>
        <div>{list}</div>
      </ul>
    );
  }
}
