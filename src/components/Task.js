import React from "react";

const Task = (props) => {
    // console.log(props)
  return (
    <div className="task">
      
      <div className="taskHeader">
        <div>{props.task.title}</div>
      </div>
      <div className="taskBody">{props.task.description}</div>
    </div>
  );
};

export default Task