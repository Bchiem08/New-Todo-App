import React from "react";
import styles from "../styles/Checkbox.module.css";

export default class CheckBox extends React.Component {
  state = { checked: false };

  CheckPriority = (e) => this.setState({ checked: e.target.checked });

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.CheckPriority}
          className={styles.box}
        ></input>
        <label className={styles.checkboxtitle}>Filter on Priority</label>
      </div>
    );
  }
}
