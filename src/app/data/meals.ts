export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
  sodium: number;
  servingSize: string;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  nutrition: NutritionInfo;
  category: string;
  restaurantId: string;
  tags: string[];
  ingredients: string[];
  allergens: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  rating: number;
  reviews: number;
  category: string;
  deliveryTime: string;
  menuSections: MenuSection[];
}

export interface MenuSection {
  id: string;
  name: string;
  meals: string[];
}

export const meals: Meal[] = [
  {
    id: "1",
    name: "Grilled Chicken Power Bowl",
    description: "Grilled chicken breast with quinoa, roasted vegetables, and tahini dressing",
    price: 182.5,
    image: "https://images.unsplash.com/photo-1685079230208-dcced9f55eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc3NDIyNzQxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 234,
    nutrition: {
      calories: 485,
      protein: 42,
      carbs: 38,
      fat: 18,
      sugar: 6,
      sodium: 520,
      servingSize: "450g"
    },
    category: "High Protein",
    restaurantId: "1",
    tags: ["High Protein", "Low Carb", "Gluten-Free"],
    ingredients: ["Grilled chicken breast", "Quinoa", "Broccoli", "Sweet potato", "Tahini", "Lemon"],
    allergens: ["Sesame"]
  },
  {
    id: "2",
    name: "Salmon Teriyaki Bowl",
    description: "Wild-caught salmon with brown rice, edamame, and teriyaki glaze",
    price: 225,
    image: "https://images.unsplash.com/photo-1685079258536-06d8253e862c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjB0ZXJpeWFraSUyMHJpY2V8ZW58MXx8fHwxNzc0MjI2OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 412,
    nutrition: {
      calories: 542,
      protein: 38,
      carbs: 52,
      fat: 16,
      sugar: 8,
      sodium: 680,
      servingSize: "480g"
    },
    category: "Rice Meals",
    restaurantId: "1",
    tags: ["High Protein", "Omega-3"],
    ingredients: ["Wild salmon", "Brown rice", "Edamame", "Carrots", "Teriyaki sauce", "Sesame seeds"],
    allergens: ["Fish", "Soy", "Sesame"]
  },
  {
    id: "3",
    name: "Rainbow Tofu Salad",
    description: "Crispy tofu with mixed greens, rainbow vegetables, and ginger-miso dressing",
    price: 155,
    image: "https://images.unsplash.com/photo-1657195721656-8254f104f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc2FsYWQlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NDIyNzQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 189,
    nutrition: {
      calories: 324,
      protein: 18,
      carbs: 28,
      fat: 16,
      sugar: 9,
      sodium: 420,
      servingSize: "380g"
    },
    category: "Salads",
    restaurantId: "2",
    tags: ["Vegetarian", "Low Calorie", "Vegan"],
    ingredients: ["Organic tofu", "Mixed greens", "Purple cabbage", "Bell peppers", "Cucumber", "Ginger-miso dressing"],
    allergens: ["Soy"]
  },
  {
    id: "4",
    name: "Ant Bulgogi Bowl",
    description: "Korean-style marinated beef with jasmine rice, kimchi, and vegetables",
    price: 205,
    image: "https://images.unsplash.com/photo-1505216980056-a7b7b1c6e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwYnVsZ29naSUyMHJpY2V8ZW58MXx8fHwxNzc0MjI3NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 298,
    nutrition: {
      calories: 612,
      protein: 35,
      carbs: 58,
      fat: 24,
      sugar: 12,
      sodium: 890,
      servingSize: "520g"
    },
    category: "Rice Meals",
    restaurantId: "3",
    tags: ["High Protein"],
    ingredients: ["Grass-fed beef", "Jasmine rice", "Kimchi", "Spinach", "Carrots", "Bulgogi sauce"],
    allergens: ["Soy", "Garlic"]
  },
  {
    id: "5",
    name: "Berry Protein Smoothie Bowl",
    description: "Acai and mixed berries topped with granola, banana, and almond butter",
    price: 142.5,
    image: "https://images.unsplash.com/photo-1592503469196-3a7880cc2d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc21vb3RoaWUlMjBib3dsfGVufDF8fHx8MTc3NDE1NjczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 156,
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 52,
      fat: 14,
      sugar: 28,
      sodium: 85,
      servingSize: "350g"
    },
    category: "Smoothies",
    restaurantId: "4",
    tags: ["Vegetarian", "Antioxidants"],
    ingredients: ["Acai puree", "Mixed berries", "Banana", "Granola", "Almond butter", "Coconut flakes"],
    allergens: ["Nuts"]
  },
  {
    id: "6",
    name: "Hawaiian Poke Bowl",
    description: "Fresh tuna poke with sushi rice, avocado, seaweed, and ponzu sauce",
    price: 240,
    image: "https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlJTIwYm93bCUyMGZyZXNofGVufDF8fHx8MTc3NDE5OTg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 367,
    nutrition: {
      calories: 495,
      protein: 36,
      carbs: 48,
      fat: 18,
      sugar: 5,
      sodium: 720,
      servingSize: "460g"
    },
    category: "Rice Meals",
    restaurantId: "1",
    tags: ["High Protein", "Omega-3"],
    ingredients: ["Fresh tuna", "Sushi rice", "Avocado", "Edamame", "Seaweed", "Ponzu sauce"],
    allergens: ["Fish", "Soy"]
  },
  {
    id: "7",
    name: "Buddha Bowl Deluxe",
    description: "Roasted chickpeas, sweet potato, quinoa, kale, and tahini sauce",
    price: 162.5,
    image: "https://images.unsplash.com/photo-1579583722535-de76b35126c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGElMjBib3dsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MTI5NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 223,
    nutrition: {
      calories: 412,
      protein: 16,
      carbs: 62,
      fat: 12,
      sugar: 11,
      sodium: 380,
      servingSize: "420g"
    },
    category: "Vegetarian",
    restaurantId: "2",
    tags: ["Vegetarian", "Vegan", "High Fiber"],
    ingredients: ["Chickpeas", "Sweet potato", "Quinoa", "Kale", "Tahini", "Cherry tomatoes"],
    allergens: ["Sesame"]
  },
  {
    id: "8",
    name: "Quinoa Mediterranean Bowl",
    description: "Herb-roasted quinoa with falafel, hummus, and Greek salad",
    price: 177.5,
    image: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBzYWxhZCUyMGhlYWx0aHl8ZW58MXx8fHwxNzc0MjI3NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 198,
    nutrition: {
      calories: 438,
      protein: 18,
      carbs: 54,
      fat: 18,
      sugar: 7,
      sodium: 640,
      servingSize: "440g"
    },
    category: "Vegetarian",
    restaurantId: "2",
    tags: ["Vegetarian", "Vegan", "Mediterranean"],
    ingredients: ["Quinoa", "Falafel", "Hummus", "Cucumber", "Tomatoes", "Olives", "Lemon-herb dressing"],
    allergens: ["Sesame"]
  },
  {
    id: "9",
    name: "High-Protein Fitness Bowl",
    description: "Double chicken, egg whites, brown rice, and steamed broccoli",
    price: 197.5,
    image: "https://images.unsplash.com/photo-1622818426042-cc370060bf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwYm93bCUyMGZpdG5lc3N8ZW58MXx8fHwxNzc0MjI3NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 445,
    nutrition: {
      calories: 520,
      protein: 58,
      carbs: 42,
      fat: 10,
      sugar: 3,
      sodium: 480,
      servingSize: "500g"
    },
    category: "High Protein",
    restaurantId: "3",
    tags: ["High Protein", "Low Fat", "Low Carb"],
    ingredients: ["Grilled chicken breast", "Egg whites", "Brown rice", "Broccoli", "Asparagus"],
    allergens: ["Eggs"]
  },
  {
    id: "10",
    name: "Mexican Burrito Bowl",
    description: "Seasoned chicken, black beans, brown rice, salsa, and guacamole",
    price: 182.5,
    image: "https://images.unsplash.com/photo-1716392976013-66d90cac4411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJyaXRvJTIwYm93bCUyMG1leGljYW58ZW58MXx8fHwxNzc0MTk5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 312,
    nutrition: {
      calories: 562,
      protein: 32,
      carbs: 64,
      fat: 20,
      sugar: 8,
      sodium: 780,
      servingSize: "510g"
    },
    category: "Rice Meals",
    restaurantId: "3",
    tags: ["High Protein", "Spicy"],
    ingredients: ["Chicken", "Black beans", "Brown rice", "Corn", "Salsa", "Guacamole", "Cheese"],
    allergens: ["Dairy"]
  },
  {
    id: "11",
    name: "Greek Power Salad",
    description: "Grilled chicken, feta, olives, cucumbers, and Greek dressing",
    price: 167.5,
    image: "https://images.unsplash.com/photo-1563046937-430760fd897b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwbWVkaXRlcnJhbmVhbnxlbnwxfHx8fDE3NzQyMDAzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 267,
    nutrition: {
      calories: 368,
      protein: 28,
      carbs: 18,
      fat: 22,
      sugar: 7,
      sodium: 620,
      servingSize: "380g"
    },
    category: "Salads",
    restaurantId: "2",
    tags: ["High Protein", "Low Carb", "Mediterranean"],
    ingredients: ["Grilled chicken", "Feta cheese", "Kalamata olives", "Cucumber", "Tomatoes", "Red onion", "Greek dressing"],
    allergens: ["Dairy"]
  },
  {
    id: "12",
    name: "Creamy Pesto Pasta",
    description: "Whole wheat pasta with basil pesto, cherry tomatoes, and grilled chicken",
    price: 195,
    image: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGhlYWx0aHklMjBsdW5jaHxlbnwxfHx8fDE3NzQyMjc0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 201,
    nutrition: {
      calories: 578,
      protein: 28,
      carbs: 68,
      fat: 22,
      sugar: 6,
      sodium: 540,
      servingSize: "450g"
    },
    category: "Pasta",
    restaurantId: "4",
    tags: ["High Protein"],
    ingredients: ["Whole wheat pasta", "Basil pesto", "Grilled chicken", "Cherry tomatoes", "Parmesan", "Pine nuts"],
    allergens: ["Gluten", "Dairy", "Nuts"]
  },
  {
    id: "13",
    name: "Spicy Tuna Roll Bowl",
    description: "Deconstructed sushi with spicy tuna, cucumber, avocado, and sushi rice",
    price: 220,
    image: "https://images.unsplash.com/photo-1712725213572-443fe866a69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NzQyMjc0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 289,
    nutrition: {
      calories: 465,
      protein: 32,
      carbs: 56,
      fat: 14,
      sugar: 6,
      sodium: 690,
      servingSize: "420g"
    },
    category: "Rice Meals",
    restaurantId: "1",
    tags: ["High Protein", "Spicy"],
    ingredients: ["Fresh tuna", "Sushi rice", "Cucumber", "Avocado", "Nori", "Spicy mayo", "Sriracha"],
    allergens: ["Fish", "Eggs"]
  },
  {
    id: "14",
    name: "Tropical Acai Bowl",
    description: "Acai blend topped with mango, pineapple, coconut, and chia seeds",
    price: 152.5,
    image: "https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FpJTIwYm93bCUyMGJlcnJpZXN8ZW58MXx8fHwxNzc0MTU2NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 178,
    nutrition: {
      calories: 342,
      protein: 8,
      carbs: 58,
      fat: 12,
      sugar: 32,
      sodium: 45,
      servingSize: "320g"
    },
    category: "Smoothies",
    restaurantId: "4",
    tags: ["Vegetarian", "Vegan", "Antioxidants"],
    ingredients: ["Acai", "Mango", "Pineapple", "Banana", "Coconut", "Chia seeds", "Granola"],
    allergens: []
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "FreshBowl Kitchen",
    description: "Premium bowls crafted with the freshest ingredients",
    coverImage: "https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1vZGVybnxlbnwxfHx8fDE3NzQyMjc0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 1245,
    category: "Healthy Bowls",
    deliveryTime: "25-35 min",
    menuSections: [
      { id: "s1", name: "Signature Bowls", meals: ["1", "2", "6", "13"] },
      { id: "s2", name: "Protein Bowls", meals: ["9"] }
    ]
  },
  {
    id: "2",
    name: "Green Garden",
    description: "Plant-based nutrition that doesn't compromise on taste",
    coverImage: "https://images.unsplash.com/photo-1657195721656-8254f104f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc2FsYWQlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NDIyNzQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 892,
    category: "Vegetarian",
    deliveryTime: "20-30 min",
    menuSections: [
      { id: "s3", name: "Salads", meals: ["3", "11"] },
      { id: "s4", name: "Plant Bowls", meals: ["7", "8"] }
    ]
  },
  {
    id: "3",
    name: "Protein Hub",
    description: "High-protein meals for fitness enthusiasts",
    coverImage: "https://images.unsplash.com/photo-1622818426042-cc370060bf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwYm93bCUyMGZpdG5lc3N8ZW58MXx8fHwxNzc0MjI3NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 1567,
    category: "High Protein",
    deliveryTime: "30-40 min",
    menuSections: [
      { id: "s5", name: "Power Meals", meals: ["4", "9", "10"] }
    ]
  },
  {
    id: "4",
    name: "Superfood Cafe",
    description: "Nutrient-dense superfoods in every bite",
    coverImage: "https://images.unsplash.com/photo-1592503469196-3a7880cc2d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc21vb3RoaWUlMjBib3dsfGVufDF8fHx8MTc3NDE1NjczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 634,
    category: "Smoothies & Bowls",
    deliveryTime: "15-25 min",
    menuSections: [
      { id: "s6", name: "Smoothie Bowls", meals: ["5", "14"] },
      { id: "s7", name: "Pasta & More", meals: ["12"] }
    ]
  }
];

export const categories = [
  { id: "all", name: "All", icon: "Utensils" },
  { id: "high-protein", name: "High Protein", icon: "Beef" },
  { id: "low-calorie", name: "Low Calorie", icon: "Flame" },
  { id: "low-carb", name: "Low Carb", icon: "WheatOff" },
  { id: "vegetarian", name: "Vegetarian", icon: "Leaf" },
  { id: "rice-meals", name: "Rice Meals", icon: "Bowl" },
  { id: "salads", name: "Salads", icon: "Salad" },
  { id: "smoothies", name: "Smoothies", icon: "CupSoda" }
];
