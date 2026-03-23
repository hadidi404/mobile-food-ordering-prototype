import {
  Search,
  MapPin,
  ChevronRight,
  Flame,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { FoodCard } from "../components/FoodCard";
import { RestaurantCard } from "../components/RestaurantCard";
import { meals, restaurants, categories } from "../data/meals";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("all");
  const navigate = useNavigate();

  const featuredMeals = meals.slice(0, 6);
  const topRestaurants = restaurants;

  const filteredMeals =
    selectedCategory === "all"
      ? featuredMeals
      : featuredMeals.filter((meal) =>
          meal.tags.some(
            (tag) =>
              tag.toLowerCase() ===
              selectedCategory.replace("-", " "),
          ),
        );

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-teal-600 pt-12 pb-6 px-4 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-teal-100 text-sm mb-1">
              <MapPin className="w-4 h-4" />
              <span>Deliver to</span>
            </div>
            <h2 className="text-white text-lg">
              Downtown, District 1
            </h2>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">👤</span>
          </div>
        </div>

        {/* Search */}
        <div
          onClick={() => navigate("/explore")}
          className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer"
        >
          <Search className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground">
            Search for healthy meals...
          </span>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-accent to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm mb-2">
                <Flame className="w-4 h-4" />
                <span>Limited Time</span>
              </div>
              <h3 className="text-xl mb-2">
                25% Off First Order
              </h3>
              <p className="text-white/90 text-sm mb-3">
                Start your nutrition journey today
              </p>
              <button className="bg-white text-accent px-4 py-2 rounded-lg text-sm">
                Order Now
              </button>
            </div>
            <div className="text-5xl">🥗</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <h3 className="text-lg">Categories</h3>
        </div>
        <div className="overflow-x-auto no-scrollbar px-4">
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl border transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white border-primary"
                    : "bg-card border-border text-foreground"
                }`}
              >
                <span className="text-sm whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended For You */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg">Recommended For You</h3>
          <button
            onClick={() => navigate("/explore")}
            className="flex items-center gap-1 text-primary text-sm"
          >
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filteredMeals.map((meal) => (
            <FoodCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>

      {/* Top Restaurants */}
      <div className="mt-6 px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg">Top Restaurants</h3>
          <button className="flex items-center gap-1 text-primary text-sm">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {topRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};