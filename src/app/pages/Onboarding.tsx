import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Search, BarChart3, ShoppingBag } from 'lucide-react';

const onboardingSlides = [
  {
    icon: Search,
    title: 'Discover Nutritious Meals',
    description: 'Browse hundreds of meals with complete nutrition information at your fingertips',
    color: 'bg-primary',
  },
  {
    icon: BarChart3,
    title: 'Compare & Decide',
    description: 'Make informed choices by comparing calories, macros, and nutrients side by side',
    color: 'bg-accent',
  },
  {
    icon: ShoppingBag,
    title: 'Build Smarter Orders',
    description: 'Track your total nutrition intake as you build your cart and order with confidence',
    color: 'bg-teal-600',
  },
];

export const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const slide = onboardingSlides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className={`w-24 h-24 ${slide.color} rounded-3xl flex items-center justify-center mb-8`}>
          <Icon className="w-14 h-14 text-white" />
        </div>
        <h2 className="text-2xl text-center mb-4 max-w-sm">{slide.title}</h2>
        <p className="text-muted-foreground text-center max-w-sm mb-8">
          {slide.description}
        </p>
        <div className="flex items-center gap-2 mb-12">
          {onboardingSlides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <button
          onClick={handleNext}
          className="w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          {currentSlide === onboardingSlides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight className="w-5 h-5" />
        </button>
        {currentSlide < onboardingSlides.length - 1 && (
          <button
            onClick={handleSkip}
            className="w-full text-muted-foreground py-4 rounded-xl hover:bg-muted/50 transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};
