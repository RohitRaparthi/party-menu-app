import React from "react";

function Filters({
  activeCategory,
  onCategoryChange,
  vegOnly,
  onVegOnlyChange,
  selectedCounts,
}) {
  const categories = ["Starter", "Main Course", "Dessert", "Sides"];

    return (
    <div className="tabs">
        {categories.map((cat) => {
        const count = selectedCounts[cat.toLowerCase()] || 0;
        return (
            <div
            key={cat}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
            >
            {cat}
            {count > 0 && <span className="badge">{count}</span>}
            </div>
        );
        })}
        <label style={{ marginLeft: "auto", fontSize: "13px" }}>
        <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
        />{" "}
        Veg Only
        </label>
    </div>
    );
}

export default Filters;
