import React from "react";
import style from "../styles/App.module.css";
import TodoList from "../components/TodoList.js";
import TodoInput from "../components/TodoInput.js";
import PriorityDropDown from "../components/Priority.js";
import Checkbox from "../components/Checkbox.js";
import FilterPriority from "../components/FilterPriority.js";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentPriority: 5,
      taskName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCurrentPriorityChange = this.handleCurrentPriorityChange.bind(
      this
    );
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
  }

  handleCurrentPriorityChange(priority) {
    this.setState((prevState) => {
      return {
        currentPriority: priority,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const NewTask = {
      title: this.state.taskName,
      Priority: this.state.currentPriority,
    };
    console.log(this.state);

    const newList = [...this.state.list, NewTask];
    this.setState({
      list: newList,
      currentPriority: 5,
      taskName: "",
    });
  }

  handleTaskNameChange(NewTaskName) {
    this.setState((prevState) => {
      return {
        taskName: NewTaskName,
      };
    });
  }

  render() {
    return (
      <div>
        <div className={style.app}>
          <h1 className={style.title}>#TODO List</h1>
          <TodoInput
            handleTaskNameChange={this.handleTaskNameChange}
            taskName={this.state.taskName}
          />
          <TodoList list={this.state.list} />
          <PriorityDropDown
            handleCurrentPriorityChange={this.handleCurrentPriorityChange}
            currentPriority={this.state.currentPriority}
          />
          <Checkbox />
          <FilterPriority />
        </div>
        <form>
          <button className={style.Addbutton} onClick={this.handleSubmit}>
            Add New TODO -->
          </button>
        </form>
      </div>
    );
  }
}

export default App;
