import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, CreditCard, Wallet, Building2, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MacroChip } from '../components/NutritionCard';

const paymentMethods = [
  { id: 'card', name: 'Credit Card', icon: CreditCard },
  { id: 'wallet', name: 'Digital Wallet', icon: Wallet },
  { id: 'bank', name: 'Bank Transfer', icon: Building2 },
];

export const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, totalNutrition, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePlaceOrder = () => {
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/home');
    }, 2500);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
            <CheckCircle2 className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-2xl mb-2">Order Placed!</h2>
          <p className="text-muted-foreground mb-4">
            Your healthy meal is being prepared
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Redirecting...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 bg-background min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-4 bg-white border-b border-border sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl">Checkout</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Order Summary */}
        <div className="bg-card rounded-2xl p-4 border border-border">
          <h3 className="mb-3">Order Summary</h3>
          <div className="space-y-2 mb-3">
            {items.map((item) => (
              <div key={item.meal.id} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.quantity}x {item.meal.name}
                </span>
                <span>₱{(item.meal.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-border space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>₱{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>₱2.99</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span>Total</span>
              <span className="text-xl text-primary">₱{(totalPrice + 2.99).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Nutrition Summary */}
        <div className="bg-gradient-to-br from-primary/10 to-teal-50 rounded-2xl p-4 border border-primary/20">
          <h3 className="mb-3 text-primary">Your Nutrition Intake</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <MacroChip label="Calories" value={totalNutrition.calories} color="calories" />
            <MacroChip label="Protein" value={`${totalNutrition.protein}g`} color="protein" />
            <MacroChip label="Carbs" value={`${totalNutrition.carbs}g`} color="carbs" />
            <MacroChip label="Fat" value={`${totalNutrition.fat}g`} color="fat" />
          </div>
        </div>

        {/* Delivery Address (Mock) */}
        <div className="bg-card rounded-2xl p-4 border border-border">
          <h3 className="mb-3">Delivery Address</h3>
          <div className="text-sm">
            <p>123 Health Street</p>
            <p className="text-muted-foreground">Downtown, District 1</p>
            <p className="text-muted-foreground">Ho Chi Minh City</p>
          </div>
          <button className="mt-3 text-primary text-sm">Change Address</button>
        </div>

        {/* Payment Method */}
        <div className="bg-card rounded-2xl p-4 border border-border">
          <h3 className="mb-3">Payment Method</h3>
          <div className="space-y-2">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                    selectedPayment === method.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:bg-muted/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedPayment === method.id ? 'bg-primary text-white' : 'bg-muted'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1 text-left">{method.name}</span>
                  {selectedPayment === method.id && (
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Details (Mock) */}
        {selectedPayment === 'card' && (
          <div className="bg-card rounded-2xl p-4 border border-border">
            <h3 className="mb-3">Card Details</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900">
            <span className="font-medium">Note:</span> This is a prototype. No actual payment will be processed.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 max-w-md mx-auto">
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition-colors"
        >
          Place Order • ₱{(totalPrice + 2.99).toLocaleString()}
        </button>
      </div>
    </div>
  );
};
