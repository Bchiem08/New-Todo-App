import React, { Component } from "react";
import styles from "../styles/TodoItem.module.css";

export default class TodoItem extends Component {
  render() {
    console.log(this.props.task);
    return (
      <div className={styles.taskcard}>
        <h6 className={styles.tasktitle} value={this.props.task.title}>
          {this.props.task.title}
        </h6>
        <h6 className={styles.prioritytitle}>
          Priority: {this.props.task.Priority}
        </h6>
        <button className={styles.deletebutton}>Delete</button>
      </div>
    );
  }
}
