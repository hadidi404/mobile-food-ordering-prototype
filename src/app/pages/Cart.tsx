import { useNavigate } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { MacroChip } from '../components/NutritionCard';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalPrice, totalNutrition, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="pb-20 bg-background min-h-screen">
        <div className="px-4 pt-4 pb-4 bg-white border-b border-border">
          <h1 className="text-2xl">Cart</h1>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-16">
          <div className="w-32 h-32 bg-muted/30 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-16 h-16 text-muted-foreground" />
          </div>
          <h2 className="text-xl mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground text-center mb-6 max-w-sm">
            Start adding nutritious meals to build your perfect order
          </p>
          <button
            onClick={() => navigate('/home')}
            className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Browse Meals
          </button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="pb-32 bg-background min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-4 bg-white border-b border-border sticky top-0 z-10">
        <h1 className="text-2xl mb-2">Cart</h1>
        <p className="text-sm text-muted-foreground">{totalItems} items</p>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-4 space-y-4">
        {items.map((item) => (
          <div key={item.meal.id} className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="flex gap-3 p-3">
              <ImageWithFallback
                src={item.meal.image}
                alt={item.meal.name}
                className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm mb-1 line-clamp-1">{item.meal.name}</h3>
                  <p className="text-primary mb-2">₱{item.meal.price.toLocaleString()}</p>
                
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <MacroChip 
                    label="Cal" 
                    value={item.meal.nutrition.calories * item.quantity} 
                    color="calories" 
                  />
                  <MacroChip 
                    label="P" 
                    value={`${item.meal.nutrition.protein * item.quantity}g`} 
                    color="protein" 
                  />
                </div>

                {item.customizations && item.customizations.length > 0 && (
                  <p className="text-xs text-muted-foreground mb-2">
                    + {item.customizations.join(', ')}
                  </p>
                )}

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-input-background rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(item.meal.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.meal.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.meal.id)}
                    className="w-7 h-7 flex items-center justify-center text-destructive hover:bg-destructive/10 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Nutrition Summary */}
      <div className="px-4 mb-4">
        <div className="bg-gradient-to-br from-primary/10 to-teal-50 rounded-2xl p-4 border border-primary/20">
          <h3 className="mb-3 text-primary">Total Nutrition Intake</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs text-muted-foreground mb-1">Calories</p>
              <p className="text-xl text-accent">{totalNutrition.calories}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs text-muted-foreground mb-1">Protein</p>
              <p className="text-xl text-primary">{totalNutrition.protein}g</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs text-muted-foreground mb-1">Carbs</p>
              <p className="text-xl text-amber-600">{totalNutrition.carbs}g</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs text-muted-foreground mb-1">Fat</p>
              <p className="text-xl text-rose-600">{totalNutrition.fat}g</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Stay informed about your nutritional intake
          </p>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-border p-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl text-primary">₱{totalPrice.toLocaleString()}</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
