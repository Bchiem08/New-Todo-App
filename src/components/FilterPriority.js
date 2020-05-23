import React, { Component } from "react";
import styles from "../styles/FilterPriority.module.css";

export default class FilterPriority extends Component {
  render() {
    return (
      <select className={styles.filter}>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    );
  }
}
