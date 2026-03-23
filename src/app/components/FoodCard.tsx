import { Star, Heart, Flame } from 'lucide-react';
import { Meal } from '../data/meals';
import { MacroChip } from './NutritionCard';
import { Link } from 'react-router';
import { useFavorites } from '../context/FavoritesContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FoodCardProps {
  meal: Meal;
  onClick?: () => void;
}

export const FoodCard = ({ meal, onClick }: FoodCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(meal.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(meal.id);
  };

  const content = (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all">
      <div className="relative">
        <ImageWithFallback
          src={meal.image}
          alt={meal.name}
          className="w-full h-40 object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 ${favorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-sm mb-1 line-clamp-1">{meal.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{meal.rating}</span>
            <span>({meal.reviews})</span>
          </div>
          <span className="text-primary">•</span>
          <span className="text-sm">${meal.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <MacroChip label={<Flame className="w-3 h-3" />} value={`${meal.nutrition.calories}`} color="calories" />
          <MacroChip label="P" value={`${meal.nutrition.protein}g`} color="protein" />
          <MacroChip label="C" value={`${meal.nutrition.carbs}g`} color="carbs" />
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <div onClick={onClick} className="cursor-pointer">
        {content}
      </div>
    );
  }

  return <Link to={`/food/${meal.id}`}>{content}</Link>;
};
