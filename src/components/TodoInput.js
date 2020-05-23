import React, { Component } from "react";
import style from "../styles/TodoInput.module.css";

export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <h3 className={style.inputtitle}>What is the Task Name?</h3>
        <div>
          <input
            value={this.props.taskName}
            onChange={(e) => {
              this.props.handleTaskNameChange(e.target.value);
            }}
            placeholder="Enter task name"
            className={style.inputBox}
          ></input>
        </div>
      </div>
    );
  }
}
