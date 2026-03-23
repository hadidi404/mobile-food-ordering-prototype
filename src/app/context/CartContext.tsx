import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Meal } from '../data/meals';

interface CartItem {
  meal: Meal;
  quantity: number;
  customizations?: string[];
}

interface CartContextType {
  items: CartItem[];
  addToCart: (meal: Meal, quantity?: number, customizations?: string[]) => void;
  removeFromCart: (mealId: string) => void;
  updateQuantity: (mealId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (meal: Meal, quantity = 1, customizations?: string[]) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.meal.id === meal.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.meal.id === meal.id
            ? { ...item, quantity: item.quantity + quantity, customizations }
            : item
        );
      }
      return [...prevItems, { meal, quantity, customizations }];
    });
  };

  const removeFromCart = (mealId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.meal.id !== mealId));
  };

  const updateQuantity = (mealId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(mealId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.meal.id === mealId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.meal.price * item.quantity, 0);
  
  const totalNutrition = items.reduce(
    (totals, item) => ({
      calories: totals.calories + item.meal.nutrition.calories * item.quantity,
      protein: totals.protein + item.meal.nutrition.protein * item.quantity,
      carbs: totals.carbs + item.meal.nutrition.carbs * item.quantity,
      fat: totals.fat + item.meal.nutrition.fat * item.quantity,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        totalNutrition,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
