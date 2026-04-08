import { NutritionInfo } from '../data/meals';

interface NutritionCardProps {
  nutrition: NutritionInfo;
  className?: string;
}

export const NutritionCard = ({ nutrition, className = '' }: NutritionCardProps) => {
  return (
    <div className={`bg-card rounded-xl p-4 border border-border ${className}`}>
      <h4 className="mb-3">Nutrition Facts</h4>
      <div className="space-y-3">
        <div className="flex items-center justify-between pb-3 border-b-2 border-foreground">
          <span className="text-lg">Calories</span>
          <span className="text-lg">{nutrition.calories}</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Protein</span>
            <span>{nutrition.protein}g</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Carbs</span>
            <span>{nutrition.carbs}g</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Fat</span>
            <span>{nutrition.fat}g</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Sugar</span>
            <span>{nutrition.sugar}g</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Sodium</span>
            <span>{nutrition.sodium}mg</span>
          </div>
        </div>
        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Serving Size</span>
            <span>{nutrition.servingSize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { ReactNode } from 'react';

interface MacroChipProps {
  label: React.ReactNode;
  value: number | string;
  color?: 'protein' | 'carbs' | 'fat' | 'calories';
}

export const MacroChip = ({ label, value, color = 'protein' }: MacroChipProps) => {
  const colorClasses = {
    protein: 'bg-primary/10 text-primary border-primary/20',
    carbs: 'bg-amber-50 text-amber-700 border-amber-200',
    fat: 'bg-rose-50 text-rose-700 border-rose-200',
    calories: 'bg-accent/10 text-accent border-accent/20',
  };

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${colorClasses[color]}`}>
      <span className="opacity-75">{label}</span>
      <span>{value}</span>
    </div>
  );
};
