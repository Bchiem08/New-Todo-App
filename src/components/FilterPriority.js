import React, { Component } from "react";
import styles from "../styles/FilterPriority.module.css";

export default class FilterPriority extends Component {
  render() {
    return (
      <select className={styles.filter}>
        <option currentPriority="5">5</option>
        <option currentPriority="4">4</option>
        <option currentPriority="3">3</option>
        <option currentPriority="2">2</option>
        <option currentPriority="1">1</option>
      </select>
    );
  }
}
