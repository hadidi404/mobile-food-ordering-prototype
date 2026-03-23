import { ChevronRight, User, Heart, Settings, HelpCircle, LogOut, ShoppingBag, Beef, Flame, WheatOff } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useNavigate } from 'react-router';
import { useOrders } from '../context/OrdersContext';
import { useFavorites } from '../context/FavoritesContext';
import { toast } from 'sonner';

const dietaryPreferences = [
  { id: 'high-protein', name: 'High Protein', icon: Beef, active: true },
  { id: 'low-calorie', name: 'Low Calorie', icon: Flame, active: false },
  { id: 'low-carb', name: 'Low Carb', icon: WheatOff, active: true },
];


export const Profile = () => {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const { favorites } = useFavorites();

  // Calculate stats from orders and favorites
  const ordersCount = orders.length;
  const favoritesCount = favorites.size;
  // Calculate avg cal/day (over last 7 days, or all orders if less)
  const now = new Date();
  const last7DaysOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    return (now.getTime() - orderDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;
  });
  const totalCalories = last7DaysOrders.reduce((sum, o) => sum + (o.calories || 0), 0);
  const avgCalPerDay = last7DaysOrders.length > 0 ? Math.round(totalCalories / 7) : 0;

  const showPrototypeToast = () => {
    toast.info('This feature does not work as this is for a prototype only.');
  };
  const menuItems = [
    { icon: ShoppingBag, label: 'Order History', action: showPrototypeToast },
    { icon: Heart, label: 'Favorites', action: () => navigate('/favorites') },
    { icon: Settings, label: 'Settings', action: showPrototypeToast },
    { icon: HelpCircle, label: 'Help & Support', action: showPrototypeToast },
  ];

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-teal-600 pt-12 pb-8 px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div className="flex-1">
            <h2 className="text-white text-xl mb-1">Guian Dela Cruz</h2>
            <p className="text-teal-100 text-sm">guian.dela.cruz@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-6 mb-6">
        <div className="bg-card rounded-2xl p-4 border border-border shadow-sm grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl text-primary mb-1">{ordersCount}</p>
            <p className="text-xs text-muted-foreground">Orders</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="text-2xl text-accent mb-1">{favoritesCount}</p>
            <p className="text-xs text-muted-foreground">Favorites</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-teal-600 mb-1">{avgCalPerDay}</p>
            <p className="text-xs text-muted-foreground">Avg Cal/Day</p>
          </div>
        </div>
      </div>

      {/* Dietary Preferences */}
      <div className="px-4 mb-6">
        <h3 className="mb-3">Dietary Preferences</h3>
        <div className="bg-card rounded-2xl p-4 border border-border">
          <div className="space-y-2">
            {dietaryPreferences.map((pref) => {
              const Icon = pref.icon;
              return (
                <div
                  key={pref.id}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    pref.active ? 'bg-primary/10' : 'bg-muted/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    pref.active ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1">{pref.name}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    pref.active ? 'border-primary bg-primary' : 'border-muted'
                  }`}>
                    {pref.active && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              );
            })}
          </div>
          <button className="w-full mt-3 text-primary text-sm text-center py-2">
            Manage Preferences
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3>Recent Orders</h3>
          <button className="text-primary text-sm">View All</button>
        </div>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {orders.slice(0, 3).map((order, index) => (
            <div
              key={order.id}
              className={`flex items-center justify-between p-4 ${
                index !== Math.min(orders.length, 3) - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div>
                <p className="text-sm mb-1">{order.date}</p>
                <p className="text-xs text-muted-foreground">{order.items} items</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary">${order.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 mb-6">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 mb-6">
        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center justify-center gap-2 py-4 bg-card border border-border rounded-xl text-destructive hover:bg-destructive/5 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};
