import React from "react";

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{dish.name} - Ingredients</h3>
        <ul>
          {dish.ingredients.map((ing, i) => (
            <li key={i}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default IngredientModal;
