import { Star, Clock } from 'lucide-react';
import { Restaurant } from '../data/meals';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all">
        <ImageWithFallback
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-3">
          <h3 className="text-sm mb-1">{restaurant.name}</h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
            {restaurant.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{restaurant.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <span>•</span>
            <span>{restaurant.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
