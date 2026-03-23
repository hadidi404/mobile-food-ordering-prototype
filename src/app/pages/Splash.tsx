import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Leaf } from 'lucide-react';

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-teal-500 to-primary flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg">
            <Leaf className="w-12 h-12 text-primary" />
          </div>
        </div>
        <h1 className="text-white text-3xl mb-2">NutriEats</h1>
        <p className="text-teal-100 text-sm">Smart choices, healthy you</p>
      </div>
    </div>
  );
};
