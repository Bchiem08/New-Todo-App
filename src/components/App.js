import React from "react";
import style from "../styles/App.module.css";
import TodoList from "../components/TodoList.js";
import TodoInput from "../components/TodoInput.js";
import PriorityDropDown from "../components/Priority.js";

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
    // newList = [...this.state.list, NewTask]
    // this.setState((prevState)=>{
    //   return {
    //     list: newList,
    //     currentPriority: 5,
    //     task: ""
    //   }
    // })
    // console.log(this.state);
    // console.log(NewTask);
  }

  render() {
    return (
      <div>
        <div className={style.app}>
          <h1 className={style.title}>#TODO List</h1>
          <TodoInput />
          <TodoList />
          <PriorityDropDown
            handleCurrentPriorityChange={this.handleCurrentPriorityChange}
          />
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
