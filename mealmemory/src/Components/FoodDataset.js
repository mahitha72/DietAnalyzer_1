const foodData =[
  {
    "name": "Asparagus Cooked",
    "calories": 22,
    "totalFat": 0.2,
    "protein": 2.4,
    "carbs": 4.1,
    "saturatedFat": 0.1
  },
  {
    "name": "Avocados",
    "calories": 160,
    "totalFat": 15,
    "protein": 2,
    "carbs": 8.5,
    "saturatedFat": 0.1
  },
  {
    "name": "Bananas",
    "calories": 89,
    "totalFat": 0.3,
    "protein": 1.1,
    "carbs": 23,
    "saturatedFat": 0.1
  },
  {
    "name": "Bagels made in wheat",
    "calories": 250,
    "totalFat": 1.5,
    "protein": 10,
    "carbs": 49,
    "saturatedFat": 0.1
  },
  {
    "name": "Berries",
    "calories": 349,
    "totalFat": 0.4,
    "protein": 14,
    "carbs": 77,
    "saturatedFat": 0.1
  },
  {
    "name": "Brocolli",
    "calories": 25,
    "totalFat": 0.5,
    "protein": 3.8,
    "carbs": 3.1,
    "saturatedFat": 0.1
  },
  {
    "name": "Brown Rice",
    "calories": 362,
    "totalFat": 2.7,
    "protein": 7.5,
    "carbs": 76,
    "saturatedFat": 0.1
  },
  {
    "name": "Cauliflower",
    "calories": 32,
    "totalFat": 0.3,
    "protein": 3,
    "carbs": 6.3,
    "saturatedFat": 0.1
  },
  {
    "name": "American cheese",
    "calories": 331,
    "totalFat": 24,
    "protein": 20,
    "carbs": 8.3,
    "saturatedFat": 0.1
  },
  {
    "name": "Coffee",
    "calories": 2,
    "totalFat": 0,
    "protein": 0.3,
    "carbs": 0.2,
    "saturatedFat": 0.1
  },
  {
    "name": "Corn",
    "calories": 97,
    "totalFat": 1.4,
    "protein": 3.3,
    "carbs": 22,
    "saturatedFat": 0.1
  },
  {
    "name": "Dark chocolates",
    "calories": 556,
    "totalFat": 32,
    "protein": 5.5,
    "carbs": 60,
    "saturatedFat": 0.1
  },
  {
    "name": "Grapes",
    "calories": 93,
    "totalFat": 2.1,
    "protein": 5.6,
    "carbs": 17,
    "saturatedFat": 0.1
  },
  {
    "name": "Milk",
    "calories": 97,
    "totalFat": 6.9,
    "protein": 3.8,
    "carbs": 5.2,
    "saturatedFat": 0.1
  },
  {
    "name": "Cashew Nuts",
    "calories": 553,
    "totalFat": 44,
    "protein": 18,
    "carbs": 30,
    "saturatedFat": 0.1
  },
  {
    "name": "Onions",
    "calories": 40,
    "totalFat": 0.1,
    "protein": 1.1,
    "carbs": 9.3,
    "saturatedFat": 0.1
  },
  {
    "name": "Orange",
    "calories": 97,
    "totalFat": 0.2,
    "protein": 1.5,
    "carbs": 25,
    "saturatedFat": 0.1
  },
  {
    "name": "Pasta canned with tomato sauce",
    "calories": 71,
    "totalFat": 0.7,
    "protein": 2.2,
    "carbs": 14,
    "saturatedFat": 0.1
  },
  {
    "name": "Pears",
    "calories": 57,
    "totalFat": 0.1,
    "protein": 0.4,
    "carbs": 15,
    "saturatedFat": 0.1
  },
  {
    "name": "Peas",
    "calories": 81,
    "totalFat": 0.4,
    "protein": 5.4,
    "carbs": 14,
    "saturatedFat": 0.1
  },
  {
    "name": "Protein Powder",
    "calories": 411,
    "totalFat": 17,
    "protein": 46,
    "carbs": 19,
    "saturatedFat": 0.1
  },
  {
    "name": "Pumpkin",
    "calories": 18,
    "totalFat": 0.1,
    "protein": 0.7,
    "carbs": 4.3,
    "saturatedFat": 0.1
  },
  {
    "name": "Tuna Salad",
    "calories": 187,
    "totalFat": 9.3,
    "protein": 16,
    "carbs": 9.4,
    "saturatedFat": 0.1
  },
  {
    "name": "Tuna Fish",
    "calories": 184,
    "totalFat": 6.3,
    "protein": 30,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Peproni Pizza",
    "calories": 298,
    "totalFat": 14,
    "protein": 12,
    "carbs": 30,
    "saturatedFat": 0.1
  },
  {
    "name": "Cheese Pizza",
    "calories": 276,
    "totalFat": 11,
    "protein": 11,
    "carbs": 33,
    "saturatedFat": 0.1
  },
  {
    "name": "French Fries",
    "calories": 289,
    "totalFat": 14,
    "protein": 3.5,
    "carbs": 37,
    "saturatedFat": 0.1
  },
  {
    "name": "Chicken Burger",
    "calories": 292,
    "totalFat": 15,
    "protein": 18,
    "carbs": 20,
    "saturatedFat": 0.1
  },
  {
    "name": "Cheese Burger",
    "calories": 256,
    "totalFat": 12,
    "protein": 13,
    "carbs": 25,
    "saturatedFat": 0.1
  },
  {
    "name": "Chicken Sandwich",
    "calories": 257,
    "totalFat": 12,
    "protein": 15,
    "carbs": 23,
    "saturatedFat": 0.1
  },
  {
    "name": "Sugar Doughnuts",
    "calories": 426,
    "totalFat": 23,
    "protein": 5.2,
    "carbs": 51,
    "saturatedFat": 0.1
  },
  {
    "name": "Chocolate Doughnuts",
    "calories": 452,
    "totalFat": 25,
    "protein": 4.9,
    "carbs": 51,
    "saturatedFat": 0.1
  },
  {
    "name": "Pop Corn - Caramel",
    "calories": 381,
    "totalFat": 1.4,
    "protein": 2,
    "carbs": 90,
    "saturatedFat": 0.1
  },
  {
    "name": "Pop Corn",
    "calories": 429,
    "totalFat": 9.5,
    "protein": 13,
    "carbs": 73,
    "saturatedFat": 0.1
  },
  {
    "name": "Dosa",
    "calories": 168,
    "totalFat": 3.7,
    "protein": 4.5,
    "carbs": 29,
    "saturatedFat": 0.1
  },
  {
    "name": "Idli",
    "calories": 156,
    "totalFat": 1.7,
    "protein": 5,
    "carbs": 30.2,
    "saturatedFat": 0.1
  },
  {
    "name": "Poha",
    "calories": 130,
    "totalFat": 1.5,
    "protein": 2.6,
    "carbs": 26.9,
    "saturatedFat": 0.1
  },
  {
    "name": "Chappati",
    "calories": 297,
    "totalFat": 7.5,
    "protein": 11,
    "carbs": 46,
    "saturatedFat": 0.1
  },
  {
    "name": "Tomato",
    "calories": 16,
    "totalFat": 0.2,
    "protein": 1.2,
    "carbs": 3.2,
    "saturatedFat": 0.1
  },
  {
    "name": "Yogurt",
    "calories": 60,
    "totalFat": 4,
    "protein": 3.1,
    "carbs": 7,
    "saturatedFat": 0.1
  },
  {
    "name": "Brownie",
    "calories": 407,
    "totalFat": 6.2,
    "protein": 4.4,
    "carbs": 84,
    "saturatedFat": 0.1
  },
  {
    "name": "Noodles",
    "calories": 108,
    "totalFat": 0.2,
    "protein": 1.8,
    "carbs": 24,
    "saturatedFat": 0.1
  },
  {
    "name": "Uttapam",
    "calories": 188,
    "totalFat": 7.2,
    "protein": 4.4,
    "carbs": 26.4,
    "saturatedFat": 0.1
  },
  {
    "name": "Bhaji Pav",
    "calories": 151,
    "totalFat": 2.4,
    "protein": 9,
    "carbs": 29.3,
    "saturatedFat": 0.1
  },
  {
    "name": "Dal Makhani",
    "calories": 109,
    "totalFat": 8.5,
    "protein": 2.1,
    "carbs": 6.3,
    "saturatedFat": 0.1
  },
  {
    "name": "Almonds",
    "calories": 579,
    "totalFat": 50,
    "protein": 21,
    "carbs": 22,
    "saturatedFat": 0.1
  },
  {
    "name": "Mushrooms",
    "calories": 22,
    "totalFat": 0.3,
    "protein": 3.1,
    "carbs": 3.3,
    "saturatedFat": 0.1
  },
  {
    "name": "Egg Yolk cooked",
    "calories": 196,
    "totalFat": 15,
    "protein": 14,
    "carbs": 0.8,
    "saturatedFat": 0.1
  },
  {
    "name": "Sweet Potatoes cooked",
    "calories": 76,
    "totalFat": 0.1,
    "protein": 1.4,
    "carbs": 18,
    "saturatedFat": 0.1
  },
  {
    "name": "Boiled Potatoes",
    "calories": 87,
    "totalFat": 0.1,
    "protein": 1.9,
    "carbs": 20,
    "saturatedFat": 0.1
  },
  {
    "name": "White Rice",
    "calories": 360,
    "totalFat": 0.6,
    "protein": 6.6,
    "carbs": 79,
    "saturatedFat": 0.1
  },
  {
    "name": "Orange juice",
    "calories": 45,
    "totalFat": 0.2,
    "protein": 0.7,
    "carbs": 10,
    "saturatedFat": 0.1
  },
  {
    "name": "Greek yogurt plain",
    "calories": 73,
    "totalFat": 1.9,
    "protein": 10,
    "carbs": 3.9,
    "saturatedFat": 0.1
  },
  {
    "name": "Oat Bran Cooked",
    "calories": 40,
    "totalFat": 0.9,
    "protein": 3.2,
    "carbs": 11,
    "saturatedFat": 0.1
  },
  {
    "name": "Green Tea",
    "calories": 1,
    "totalFat": 0,
    "protein": 0.2,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Chia seeds",
    "calories": 486,
    "totalFat": 31,
    "protein": 17,
    "carbs": 42,
    "saturatedFat": 0.1
  },
  {
    "name": "Cottage cheese with vegetables",
    "calories": 95,
    "totalFat": 4.2,
    "protein": 11,
    "carbs": 3,
    "saturatedFat": 0.1
  },
  {
    "name": "Salmon",
    "calories": 127,
    "totalFat": 4.4,
    "protein": 21,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Cereals-Corn Flakes",
    "calories": 384,
    "totalFat": 0.9,
    "protein": 5.9,
    "carbs": 88,
    "saturatedFat": 0.1
  },
  {
    "name": "Beans",
    "calories": 31,
    "totalFat": 0.2,
    "protein": 1.8,
    "carbs": 7,
    "saturatedFat": 0.1
  },
  {
    "name": "Lentils",
    "calories": 101,
    "totalFat": 0.5,
    "protein": 8.8,
    "carbs": 21,
    "saturatedFat": 0.1
  },
  {
    "name": "Pasta with corn homemade",
    "calories": 126,
    "totalFat": 0.7,
    "protein": 2.6,
    "carbs": 28,
    "saturatedFat": 0.1
  },
  {
    "name": "Tea",
    "calories": 1,
    "totalFat": 0,
    "protein": 0,
    "carbs": 0.2,
    "saturatedFat": 0.1
  },
  {
    "name": "Apples",
    "calories": 52,
    "totalFat": 0.2,
    "protein": 0.3,
    "carbs": 14,
    "saturatedFat": 0.1
  },
  {
    "name": "Strawberries",
    "calories": 32,
    "totalFat": 0.3,
    "protein": 0.7,
    "carbs": 7.7,
    "saturatedFat": 0.1
  },
  {
    "name": "Quninoa",
    "calories": 120,
    "totalFat": 1.9,
    "protein": 4.4,
    "carbs": 21,
    "saturatedFat": 0.1
  },
  {
    "name": "Goat meat",
    "calories": 109,
    "totalFat": 2.3,
    "protein": 21,
    "carbs": 57,
    "saturatedFat": 0.1
  },
  {
    "name": "Rabbit meat",
    "calories": 114,
    "totalFat": 2.3,
    "protein": 22,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Chicken Strips",
    "calories": 295,
    "totalFat": 15,
    "protein": 19,
    "carbs": 22,
    "saturatedFat": 0.1
  },
  {
    "name": "Steak Fries",
    "calories": 255,
    "totalFat": 13,
    "protein": 3.3,
    "carbs": 31,
    "saturatedFat": 0.1
  },
  {
    "name": "Mexican Rice",
    "calories": 195,
    "totalFat": 4.9,
    "protein": 3.6,
    "carbs": 34,
    "saturatedFat": 0.1
  },
  {
    "name": "Fried Shrimp",
    "calories": 319,
    "totalFat": 20,
    "protein": 14,
    "carbs": 21,
    "saturatedFat": 0.1
  },
  {
    "name": "Spaghetti and meatballs",
    "calories": 170,
    "totalFat": 8.5,
    "protein": 7.8,
    "carbs": 16,
    "saturatedFat": 0.1
  },
  {
    "name": "Macroni n Cheese",
    "calories": 194,
    "totalFat": 12,
    "protein": 6.5,
    "carbs": 16,
    "saturatedFat": 0.1
  },
  {
    "name": "Pork cooked",
    "calories": 297,
    "totalFat": 21,
    "protein": 26,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Bacon cooked",
    "calories": 146,
    "totalFat": 2.8,
    "protein": 28,
    "carbs": 1.8,
    "saturatedFat": 0.1
  },
  {
    "name": "Nachos",
    "calories": 350,
    "totalFat": 22,
    "protein": 4.3,
    "carbs": 35,
    "saturatedFat": 0.1
  },
  {
    "name": "Chicken Popcorn",
    "calories": 351,
    "totalFat": 22,
    "protein": 18,
    "carbs": 21,
    "saturatedFat": 0.1
  },
  {
    "name": "Turkey cooked",
    "calories": 203,
    "totalFat": 10,
    "protein": 27,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Oyster cooked",
    "calories": 159,
    "totalFat": 4,
    "protein": 29,
    "carbs": 0,
    "saturatedFat": 0.1
  },
  {
    "name": "Beef sticks",
    "calories": 550,
    "totalFat": 50,
    "protein": 22,
    "carbs": 5.4,
    "saturatedFat": 0.1
  },
  {
    "name": "Banana Chips",
    "calories": 519,
    "totalFat": 34,
    "protein": 2.3,
    "carbs": 58,
    "saturatedFat": 0.1
  },
  {
    "name": "Honey",
    "calories": 304,
    "totalFat": 0,
    "protein": 0.3,
    "carbs": 82,
    "saturatedFat": 0.1
  },
  {
    "name": "Chocolate Icecream",
    "calories": 216,
    "totalFat": 11,
    "protein": 3.8,
    "carbs": 28,
    "saturatedFat": 0.1
  },
  {
    "name": "Vanilla Ice cream",
    "calories": 207,
    "totalFat": 11,
    "protein": 3.5,
    "carbs": 24,
    "saturatedFat": 0.1
  },
  {
    "name": "Strawberry Icecream",
    "calories": 192,
    "totalFat": 8.4,
    "protein": 3.2,
    "carbs": 28,
    "saturatedFat": 0.1
  },
  {
    "name": "Marshmallows",
    "calories": 318,
    "totalFat": 0.2,
    "protein": 1.8,
    "carbs": 81,
    "saturatedFat": 0.1
  },
  {
    "name": "Chocolate milk",
    "calories": 535,
    "totalFat": 30,
    "protein": 7.7,
    "carbs": 59,
    "saturatedFat": 0.1
  },
  {
    "name": "Rice Pudding",
    "calories": 376,
    "totalFat": 0.1,
    "protein": 2.7,
    "carbs": 91,
    "saturatedFat": 0.1
  }
];

export default foodData;