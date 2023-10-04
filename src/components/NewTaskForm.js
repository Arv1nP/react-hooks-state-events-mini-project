import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoriesWanted = categories.slice(1)
  console.log(categoriesWanted)
  const [formInput, setFormInput] = useState({
    text: "",
    category: categoriesWanted[0] // Set the default category to the first option
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new task object with the form input values
    const newTask = {
      text: formInput.text,
      category: formInput.category
    };
    // Call the onTaskFormSubmit callback with the new task object
    onTaskFormSubmit(newTask);
    // Reset the form inputs after submission
    setFormInput({ ...formInput, text: "" });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formInput.text}
          onChange={handleInput}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formInput.category}
          onChange={handleInput}
        >
          {categoriesWanted.map((category, index) => (
            <option className={category} key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;