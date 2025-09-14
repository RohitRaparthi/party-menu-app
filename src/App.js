import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

console.log(dishes)
function App() {
  const [selectedCategory, setSelectedCategory] = useState("Main Course");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Filter dishes
  const filteredDishes = dishes.filter((dish) => {
    const matchCategory =
      dish.mealType.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchVeg = vegOnly ? dish.type === "VEG" : true;
    return matchCategory && matchSearch && matchVeg;
  });

  // Build category-wise counts
  const categoryCounts = dishes.reduce((acc, dish) => {
    if (selectedDishes.includes(dish.id)) {
      const key = dish.mealType.toLowerCase(); // e.g. "main course"
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {});


  console.log()

  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentDish(null);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <h2 className="heading">Party Menu App</h2>
      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search dish for your party..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        selectedCounts={categoryCounts}
      />

      {/* Dish List */}
      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />

      {/* Bottom Summary */}
      <div className="summary-bar">
        <span className="summary-text">Total Dish Selected {selectedDishes.length}</span>
        <button disabled={selectedDishes.length === 0}>Continue</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <IngredientModal dish={currentDish} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
