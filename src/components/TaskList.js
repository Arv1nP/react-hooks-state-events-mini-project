import React from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";

function TaskList({ tasks, selectedTask }) {
  const filteredTasks = selectedTask==="All"?tasks: tasks.filter((task)=> task.category === selectedTask)

  return (
    <div className="tasks">
      <ul>
        {filteredTasks.map((task, index) => (
          <Task key={index} CATEGORY={task.category} TEXT={task.text} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;