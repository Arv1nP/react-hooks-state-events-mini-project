import React, { useState } from "react";

function CategoryFilter({ CATEGORIES, onCategorySelect }) {
  const [categorySelect, setCategorySelect] = useState("All");
  
  
  function handleFilterClick(e) {
    const selectedCategory = e.target.className;
    setCategorySelect(selectedCategory === "selected" ? "All" : selectedCategory);
    onCategorySelect(selectedCategory)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category, index) => (
        <button
          key={index}
          onClick={handleFilterClick}
          className={categorySelect === category ? "selected" : category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;






