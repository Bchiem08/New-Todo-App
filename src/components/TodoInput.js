import React, { Component } from "react";
import style from "../styles/TodoInput.module.css";

export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <h3 className={style.inputtitle}>Add New Todo</h3>
        <div>
          <input placeholder="Add New TODO" className={style.inputBox}></input>
        </div>
        <button className={style.todobutton}>
          <h6 className={style.buttontitle}> Add new TODO --> </h6>
        </button>
      </div>
    );
  }
}
