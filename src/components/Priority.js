import React, { Component } from "react";
import style from "../styles/priority.module.css";

export default class PriorityDropDown extends Component {
  render() {
    return (
      <label className={style.labelStyle}>
        Priority
        <select
          value={this.props.currentPriority}
          className={style.dropdownStyle}
          onChange={(e) => {
            this.props.handleCurrentPriorityChange(e.target.value);
          }}
        >
          <option value={Number("5")}>5</option>
          <option value={Number("4")}>4</option>
          <option value={Number("3")}>3</option>
          <option value={Number("2")}>2</option>
          <option value={Number("1")}>1</option>
        </select>
      </label>
    );
  }
}
