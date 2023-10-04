import React from "react";
import { useState } from "react";

function Task({CATEGORY, TEXT}) {
  const [toDelete, setToDelete] = useState(false)

  function handleDelete(){
    setToDelete((toDelete)=>!toDelete)
  }

  return toDelete? null : (
    <div className="task">
      <div className="label">{CATEGORY}</div>
      <div className="text">{TEXT}</div>
      <button  onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
