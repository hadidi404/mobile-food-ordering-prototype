import { Heart } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { FoodCard } from '../components/FoodCard';
import { useFavorites } from '../context/FavoritesContext';
import { meals, restaurants } from '../data/meals';
import { RestaurantCard } from '../components/RestaurantCard';
import { useState } from 'react';

export const Favorites = () => {
  const { favorites } = useFavorites();
  const [activeTab, setActiveTab] = useState<'meals' | 'restaurants'>('meals');

  const favoriteMeals = meals.filter((meal) => favorites.has(meal.id));
  const favoriteRestaurants = restaurants.filter((restaurant) => favorites.has(restaurant.id));

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-4 bg-white border-b border-border sticky top-0 z-10">
        <h1 className="text-2xl mb-4">Favorites</h1>
        
        <div className="flex items-center gap-2 bg-input-background rounded-xl p-1">
          <button
            onClick={() => setActiveTab('meals')}
            className={`flex-1 py-2 rounded-lg text-sm transition-all ${
              activeTab === 'meals' ? 'bg-white shadow-sm' : ''
            }`}
          >
            Meals ({favoriteMeals.length})
          </button>
          <button
            onClick={() => setActiveTab('restaurants')}
            className={`flex-1 py-2 rounded-lg text-sm transition-all ${
              activeTab === 'restaurants' ? 'bg-white shadow-sm' : ''
            }`}
          >
            Restaurants ({favoriteRestaurants.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {activeTab === 'meals' && (
          <>
            {favoriteMeals.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-muted-foreground" />
                </div>
                <h2 className="text-xl mb-2">No favorite meals yet</h2>
                <p className="text-muted-foreground text-sm">
                  Start adding meals to your favorites by tapping the heart icon
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {favoriteMeals.map((meal) => (
                  <FoodCard key={meal.id} meal={meal} />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'restaurants' && (
          <>
            {favoriteRestaurants.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-muted-foreground" />
                </div>
                <h2 className="text-xl mb-2">No favorite restaurants yet</h2>
                <p className="text-muted-foreground text-sm">
                  Save your favorite restaurants for quick access
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {favoriteRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
};
