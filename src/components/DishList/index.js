import React from "react";
import DishCard from "../DishCard";

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  // Group dishes by category (North Indian, etc.)
  const grouped = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) acc[dish.category] = [];
    acc[dish.category].push(dish);
    return acc;
  }, {});

  return (
    <div className="dishlist">
      {Object.keys(grouped).map((cat) => (
        <div key={cat} className="category">
          <div className="category-header">{cat}</div>
          <div className="dish-list">
            {grouped[cat].map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                isSelected={selectedDishes.includes(dish.id)}
                onAddDish={onAddDish}
                onRemoveDish={onRemoveDish}
                onViewIngredients={onViewIngredients}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DishList;
