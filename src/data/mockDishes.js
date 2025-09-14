export const dishes = [
  {
    id: 1,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    category: "North Indian",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    id: 2,
    name: "Crispy Chicken",
    description: "Golden fried chicken with tangy dip.",
    image: "https://placehold.co/300x200/FFD6D6/660000?text=Chicken",
    mealType: "STARTER",
    type: "NON-VEG",
    category: "Chinese",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Spices", quantity: "To taste" }
    ]
  },
  {
    id: 3,
    name: "Sooji Cake",
    description: "Soft semolina cake, lightly sweet.",
    image: "https://placehold.co/300x200/FFF0B3/665500?text=Sooji+Cake",
    mealType: "DESSERT",
    type: "VEG",
    category: "Desserts",
    ingredients: [
      { name: "Sooji", quantity: "200g" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Milk", quantity: "1/2 cup" }
    ]
  },
  {
    id: 4,
    name: "Butter Chicken",
    description: "Rich and creamy chicken curry with a tomato and butter base.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    category: "North Indian",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Butter", quantity: "50g" },
      { name: "Tomato puree", quantity: "200ml" },
      { name: "Cream", quantity: "100ml" },
    ]
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, grilled in a tandoor.",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    category: "North Indian" ,
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    ingredients: [
      { name: "Chicken legs", quantity: "4 pcs" },
      { name: "Yogurt", quantity: "200g" },
      { name: "Spices", quantity: "50g" },
      { name: "Lemon", quantity: "1 pc" },
    ],
  },
  {
    id: 6,
    name: "Cabbage Sabzi",
    description: "Stir-fried cabbage with Indian spices and herbs.",
    mealType: "SIDES",
    type: "VEG",
    category: "North Indian",
    image: "https://images.pexels.com/photos/357739/pexels-photo-357739.jpeg",
    ingredients: [
      { name: "Cabbage", quantity: "1 pc" },
      { name: "Onion", quantity: "1 pc" },
      { name: "Green chili", quantity: "2 pcs" },
      { name: "Oil", quantity: "2 tbsp" },
    ],
  },
  {
    id: 7,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with crunchy walnuts.",
    mealType: "DESSERT",
    type: "VEG",
    category: "Desserts",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
    ingredients: [
      { name: "Dark Chocolate", quantity: "200g" },
      { name: "Flour", quantity: "100g" },
      { name: "Sugar", quantity: "100g" },
      { name: "Butter", quantity: "50g" },
    ],
  },
  {
    id: 8,
    name: "Spring Roll",
    description: "Crispy fried rolls stuffed with vegetables.",
    mealType: "STARTER",
    type: "VEG",
    category: "Chinese",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    ingredients: [
      { name: "Spring roll sheets", quantity: "10 pcs" },
      { name: "Cabbage", quantity: "100g" },
      { name: "Carrot", quantity: "50g" },
      { name: "Oil", quantity: "for frying" },
    ]
  },
  {
    id: 9,
    name: "Prawn Fry",
    description: "Crispy and spicy prawn fry with curry leaves.",
    mealType: "STARTER",
    type: "NON-VEG",
    category: "Coastal",
    image: "https://images.pexels.com/photos/4646350/pexels-photo-4646350.jpeg",
    ingredients: [
      { name: "Prawns", quantity: "300g" },
      { name: "Pepper", quantity: "2 tsp" },
      { name: "Curry leaves", quantity: "10 pcs" },
      { name: "Oil", quantity: "2 tbsp" },
    ]
  },
  {
    id: 10,
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato masala.",
    mealType: "MAIN COURSE",
    type: "VEG",
    category: "South Indian",
    image: "https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg",
    ingredients: [
      { name: "Rice batter", quantity: "2 cups" },
      { name: "Potato", quantity: "2 pcs" },
      { name: "Onion", quantity: "1 pc" },
      { name: "Curry leaves", quantity: "5 pcs" },
    ]
  },
  {
    id: 11,
    name: "Idli Sambar",
    description: "Soft steamed idlis served with hot sambar.",
    mealType: "MAIN COURSE",
    type: "VEG",
    category: "South Indian",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    ingredients: [
      { name: "Idli batter", quantity: "2 cups" },
      { name: "Toor dal", quantity: "1 cup" },
      { name: "Tamarind", quantity: "small lemon size" },
      { name: "Drumstick", quantity: "1 pc" },
    ]
  },
  {
    id: 12,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy fried bhature.",
    mealType: "MAIN COURSE",
    type: "VEG",
    category: "North Indian",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    ingredients: [
      { name: "Chickpeas", quantity: "1 cup" },
      { name: "Flour", quantity: "2 cups" },
      { name: "Onion", quantity: "1 pc" },
      { name: "Tomato", quantity: "2 pcs" },
    ]
  },
  {
    id: 13,
    name: "Fried Rice",
    description: "Chinese-style fried rice with veggies and sauces.",
    mealType: "MAIN COURSE",
    type: "VEG",
    category: "Chinese",
    image: "https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg",
    ingredients: [
      { name: "Cooked rice", quantity: "2 cups" },
      { name: "Carrot", quantity: "1 pc" },
      { name: "Beans", quantity: "50g" },
      { name: "Soy sauce", quantity: "2 tsp" },
    ]
  },
  {
    id: 14,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with spiced chicken.",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    category: "Hyderabadi",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "100g" },
      { name: "Biryani masala", quantity: "2 tbsp" },
    ]
  },
  {
    id: 15,
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated in yogurt and spices.",
    mealType: "STARTER",
    type: "VEG",
    category: "North Indian",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "100g" },
      { name: "Spices", quantity: "2 tbsp" },
      { name: "Onion rings", quantity: "50g" },
    ]
  },
  {
    id: 16,
    name: "Fish Curry",
    description: "Tangy and spicy fish curry cooked with coconut milk.",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    category: "Coastal",
    image: "https://images.pexels.com/photos/461069/pexels-photo-461069.jpeg",
    ingredients: [
      { name: "Fish", quantity: "300g" },
      { name: "Coconut milk", quantity: "200ml" },
      { name: "Tamarind", quantity: "small lemon size" },
      { name: "Spices", quantity: "2 tbsp" },
    ]
  },
  {
    id: 17,
    name: "Samosa",
    description: "Deep-fried pastry filled with spicy potato stuffing.",
    mealType: "STARTER",
    type: "VEG",
    category: "North Indian",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    ingredients: [
      { name: "Flour", quantity: "1 cup" },
      { name: "Potato", quantity: "2 pcs" },
      { name: "Peas", quantity: "50g" },
      { name: "Oil", quantity: "for frying" },
    ]
  },
  {
    id: 18,
    name: "Gulab Jamun",
    description: "Soft milk-solid dumplings soaked in sugar syrup.",
    mealType: "DESSERT",
    type: "VEG",
    category: "Desserts",
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Flour", quantity: "2 tbsp" },
      { name: "Sugar syrup", quantity: "2 cups" },
      { name: "Cardamom", quantity: "2 pcs" },
    ]
  },
  {
    id: 19,
    name: "Rasgulla",
    description: "Bengali sweet made from chhena balls in sugar syrup.",
    mealType: "DESSERT",
    type: "VEG",
    category: "Desserts",
    image: "https://images.pexels.com/photos/248417/pexels-photo-248417.jpeg",
    ingredients: [
      { name: "Chenna", quantity: "200g" },
      { name: "Sugar syrup", quantity: "2 cups" },
      { name: "Cardamom", quantity: "2 pcs" },
    ]
  },
  {
    id: 20,
    name: "Mango Lassi",
    description: "Refreshing yogurt-based mango drink.",
    mealType: "BEVERAGE",
    type: "VEG",
    category: "Drinks",
    image: "https://images.pexels.com/photos/664828/pexels-photo-664828.jpeg",
    ingredients: [
      { name: "Mango pulp", quantity: "1 cup" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Sugar", quantity: "2 tbsp" },
      { name: "Ice cubes", quantity: "4 pcs" },
    ]
  },
  {
    id: 21,
    name: "Cold Coffee",
    description: "Chilled coffee with ice cream topping.",
    mealType: "BEVERAGE",
    type: "VEG",
    category: "Drinks",
    image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    ingredients: [
      { name: "Milk", quantity: "1 cup" },
      { name: "Instant coffee", quantity: "2 tsp" },
      { name: "Sugar", quantity: "2 tsp" },
      { name: "Ice cubes", quantity: "4 pcs" },
    ]
  },
  {
    id: 22,
    name: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in spicy Chinese gravy.",
    mealType: "MAIN COURSE",
    type: "VEG",
    category: "Chinese",
    image: "https://images.pexels.com/photos/302903/pexels-photo-302903.jpeg",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Carrot", quantity: "1 pc" },
      { name: "Corn flour", quantity: "2 tbsp" },
      { name: "Soy sauce", quantity: "1 tbsp" },
    ]
  }
];