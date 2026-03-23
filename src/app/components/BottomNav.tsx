import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useCart } from '../context/CartContext';

export const BottomNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/explore', icon: Search, label: 'Explore' },
    { path: '/cart', icon: ShoppingCart, label: 'Cart', badge: totalItems },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 max-w-md mx-auto">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {typeof item.badge === 'number' && (
                  <span
                    className={`absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center transition-all
                      ${item.badge > 0 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-400 border border-gray-300'}`}
                    style={{ opacity: 1 }}
                  >
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
