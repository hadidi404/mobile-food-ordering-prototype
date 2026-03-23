import { createContext, useContext, useState, ReactNode } from 'react';

export type Order = {
  id: string;
  date: string;
  items: number;
  total: number;
  calories: number;
};

const initialOrders: Order[] = [
  {
    id: '1',
    date: 'March 22, 2026',
    items: 3,
    total: 42.97,
    calories: 1800,
  },
];

const OrdersContext = createContext<{
  orders: Order[];
  addOrder: (order: Order) => void;
} | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const addOrder = (order: Order) => setOrders((prev) => [order, ...prev]);

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error('useOrders must be used within OrdersProvider');
  return ctx;
};
