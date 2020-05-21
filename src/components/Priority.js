import React, { Component } from "react";
import style from "../styles/priority.module.css";

export default class PriorityDropDown extends Component {
  render() {
    return (
      <label className={style.labelStyle}>
        Priority
        <select
          className={style.dropdownStyle}
          selected={5}
          onChange={(e) => {
            this.props.handleCurrentPriorityChange(e.target.value);
          }}
        >
          <option currentPriority="5">5</option>
          <option currentPriority="4">4</option>
          <option currentPriority="3">3</option>
          <option currentPriority="2">2</option>
          <option currentPriority="1">1</option>
        </select>
      </label>
    );
  }
}
