import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <div className="taskList">
      <div className="taskListTitle">
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map((task) => {
        return(<Task key={task.id} task={task} />);
      })}
    </div>
  );
};

export default TaskList;
