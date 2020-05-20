import React, { Component } from "react";
import styles from "../styles/TodoItem.module.css";

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <div styles={styles.taskcard}>
          <h6 className={styleMedia.tasktitle}>Tasks</h6>
        </div>
        <button>Delete</button>
      </div>
    );
  }
}
