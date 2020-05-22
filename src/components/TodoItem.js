import React, { Component } from "react";
import styles from "../styles/TodoItem.module.css";

export default class TodoItem extends Component {
  render() {
    return (
      <li className={styles.taskcard}>
        <h6 className={styles.tasktitle}>Tasks</h6>
        <h6 className={styles.prioritytitle}> Priority: </h6>
        <button className={styles.deletebutton}>Delete</button>
      </li>
    );
  }
}
