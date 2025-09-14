import React from "react";

function DishCard({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) {
  const dishtype = dish.type === "VEG" ? "green" : "red"
  return (
    <div className="dish-card">
      <div className="dish-info">
        <div className="dishnames">
          <div className="dish-name">{dish.name}</div>
          <div className={`${dishtype} dish-type`}>{dish.type}</div>
        </div>
        <div className="dish-desc">{dish.description}</div>
        <div
          className="dish-ingredient"
          onClick={() => onViewIngredients(dish)}
        >
          Ingredient
        </div>
      </div>

      <div className="dish-actions">
        <img src={dish.image} alt={dish.name} />
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
            Remove
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>
            Add +
          </button>
        )}
      </div>
    </div>
  );
}

export default DishCard;
