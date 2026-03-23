import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-4">🍽️</div>
        <h1 className="text-3xl mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate('/home')}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};
