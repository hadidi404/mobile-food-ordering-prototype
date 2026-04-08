import { useState } from 'react';
import { Search, SlidersHorizontal, Grid3x3, List, X } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { FoodCard } from '../components/FoodCard';
import { meals } from '../data/meals';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'high-protein', label: 'High Protein' },
  { id: 'low-calorie', label: 'Low Calorie' },
  { id: 'low-carb', label: 'Low Carb' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
];

export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
      meal.tags.some(tag => tag.toLowerCase() === selectedFilter.replace('-', ' '));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="px-4 pt-4 pb-4">
          <h1 className="text-2xl mb-4">Explore</h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search meals, restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filters & View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-input-background rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="overflow-x-auto px-4 pb-3">
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-input-background text-foreground border border-border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 mt-4">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredMeals.length} meals found
        </p>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredMeals.map((meal) => (
              <FoodCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredMeals.map((meal) => (
              <div key={meal.id} className="w-full">
                <FoodCard meal={meal} />
              </div>
            ))}
          </div>
        )}

        {filteredMeals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg mb-2">No meals found</h3>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};
