import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { OrdersProvider } from './context/OrdersContext';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <OrdersProvider>
          <div className="max-w-md mx-auto bg-background min-h-screen">
            <RouterProvider router={router} />
            <Toaster position="top-center" />
          </div>
        </OrdersProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}
