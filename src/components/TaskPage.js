import React, { Component } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

class TaskPage extends Component {
  renderTaskList = () => {
    const { tasks } = this.props;
    console.log('tasks',tasks)

    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      console.log(statusTasks)
      return <TaskList key={status} status={status} tasks={statusTasks} />;
    });
  };
  render() {
    return (
      <div className="task">
        <div className="task-list">{this.renderTaskList()}</div>
      </div>
    );
  }
}

export default TaskPage;
