import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Star, Clock, Info } from 'lucide-react';
import { restaurants, meals } from '../data/meals';
import { FoodCard } from '../components/FoodCard';
import { BottomNav } from '../components/BottomNav';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Restaurant not found</p>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header Image */}
      <div className="relative">
        <ImageWithFallback
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="px-4 py-4 bg-white">
        <h1 className="text-2xl mb-2">{restaurant.name}</h1>
        <p className="text-muted-foreground text-sm mb-3">{restaurant.description}</p>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{restaurant.rating}</span>
            <span className="text-muted-foreground">({restaurant.reviews} reviews)</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>

        <div className="mt-3 flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
          <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-xs text-primary">
            All meals include detailed nutrition information to help you make informed choices
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="mt-4">
        {restaurant.menuSections.map((section) => {
          const sectionMeals = meals.filter((meal) => section.meals.includes(meal.id));
          
          return (
            <div key={section.id} className="mb-6">
              <div className="px-4 mb-3">
                <h2 className="text-lg">{section.name}</h2>
              </div>
              <div className="px-4 grid grid-cols-2 gap-3">
                {sectionMeals.map((meal) => (
                  <FoodCard key={meal.id} meal={meal} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};
