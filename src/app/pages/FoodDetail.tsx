import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Minus, Plus, Heart, Star, AlertCircle } from 'lucide-react';
import { meals } from '../data/meals';
import { NutritionCard, MacroChip } from '../components/NutritionCard';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { BottomNav } from '../components/BottomNav';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

const customizationOptions = [
  'Extra protein',
  'Less rice',
  'Extra vegetables',
  'No sauce',
  'Spicy',
  'Less salt',
];

export const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);

  const meal = meals.find((m) => m.id === id);

  if (!meal) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Meal not found</p>
      </div>
    );
  }

  const favorited = isFavorite(meal.id);

  const handleAddToCart = () => {
    addToCart(meal, quantity, selectedCustomizations);
    toast.success(`Added ${meal.name} to cart`);
    navigate('/cart');
  };

  const toggleCustomization = (option: string) => {
    setSelectedCustomizations((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const totalNutrition = {
    ...meal.nutrition,
    calories: meal.nutrition.calories * quantity,
    protein: meal.nutrition.protein * quantity,
    carbs: meal.nutrition.carbs * quantity,
    fat: meal.nutrition.fat * quantity,
  };

  return (
    <div className="pb-32 bg-background min-h-screen">
      {/* Header Image */}
      <div className="relative">
        <ImageWithFallback
          src={meal.image}
          alt={meal.name}
          className="w-full h-72 object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => toggleFavorite(meal.id)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <Heart className={`w-5 h-5 ${favorited ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>

      <div className="px-4 py-4">
        {/* Basic Info */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-2xl flex-1">{meal.name}</h1>
            <div className="text-2xl text-primary ml-4">₱{meal.price.toLocaleString()}</div>
          </div>
          <p className="text-muted-foreground text-sm mb-3">{meal.description}</p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{meal.rating}</span>
              <span className="text-muted-foreground">({meal.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {meal.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Macros */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <MacroChip label="Cal" value={meal.nutrition.calories} color="calories" />
          <MacroChip label="Protein" value={`${meal.nutrition.protein}g`} color="protein" />
          <MacroChip label="Carbs" value={`${meal.nutrition.carbs}g`} color="carbs" />
          <MacroChip label="Fat" value={`${meal.nutrition.fat}g`} color="fat" />
        </div>

        {/* Nutrition Facts */}
        <NutritionCard nutrition={totalNutrition} className="mb-4" />

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="mb-2">Ingredients</h3>
          <div className="bg-card rounded-xl p-4 border border-border">
            <p className="text-sm text-muted-foreground">
              {meal.ingredients.join(', ')}
            </p>
          </div>
        </div>

        {/* Allergens */}
        {meal.allergens.length > 0 && (
          <div className="mb-4">
            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="text-amber-900 text-sm mb-1">Allergen Information</h4>
                <p className="text-sm text-amber-700">
                  Contains: {meal.allergens.join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Customizations */}
        <div className="mb-4">
          <h3 className="mb-3">Customizations (Optional)</h3>
          <div className="flex flex-wrap gap-2">
            {customizationOptions.map((option) => (
              <button
                key={option}
                onClick={() => toggleCustomization(option)}
                className={`px-4 py-2 rounded-xl border text-sm transition-all ${
                  selectedCustomizations.includes(option)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-card border-border'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-border p-4 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-input-background rounded-xl p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Add to Cart • ₱{(meal.price * quantity).toLocaleString()}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
