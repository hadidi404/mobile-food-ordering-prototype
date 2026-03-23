# NutriEats - Nutrition-First Food Ordering App

## Overview
NutriEats is a high-fidelity mobile food ordering prototype that puts nutrition transparency at the forefront. Unlike traditional food delivery apps, every meal displays complete nutritional information, empowering users to make informed, healthy choices.

## Design System

### Colors
- **Primary**: Teal (#14b8a6) - Represents health and wellness
- **Accent**: Orange (#f97316) - Food & energy
- **Background**: Light gray (#f8fafb) - Clean, neutral
- **Borders**: Subtle rgba(0,0,0,0.08)

### Typography
- Clean, modern sans-serif
- Hierarchy: h1-h4 with consistent spacing
- Medium weight for emphasis

### Components
- Rounded cards (12px-16px radius)
- Soft shadows for depth
- Smooth transitions
- Macro chips with color coding:
  - Calories: Orange
  - Protein: Teal
  - Carbs: Amber
  - Fat: Rose

## App Structure

### Pages (11 Total)

1. **Splash** (`/`)
   - Logo and tagline
   - Auto-redirects to onboarding

2. **Onboarding** (`/onboarding`)
   - 3 slides explaining app features
   - Skip or Next navigation
   - "Get Started" button

3. **Login/SignUp** (`/login`)
   - Email/password authentication
   - Google and Apple sign-in options
   - Toggle between login and signup

4. **Home** (`/home`)
   - Location header
   - Search bar
   - Featured promotional banner
   - Category filters
   - Recommended meals grid
   - Top restaurants list

5. **Explore** (`/explore`)
   - Search functionality
   - Filter chips (High Protein, Low Calorie, etc.)
   - Grid/List view toggle
   - Filterable meal list

6. **Restaurant** (`/restaurant/:id`)
   - Cover image
   - Restaurant info (rating, delivery time)
   - Menu sections
   - Meal cards with nutrition

7. **Food Detail** (`/food/:id`)
   - Large food image
   - Price and rating
   - Nutrition facts card
   - Ingredients list
   - Allergen warnings
   - Customization options
   - Quantity selector
   - Add to cart

8. **Cart** (`/cart`)
   - Cart items with images
   - Quantity controls
   - Per-item nutrition
   - **Total nutrition summary** (unique feature)
   - Checkout button

9. **Checkout** (`/checkout`)
   - Order summary
   - Total nutrition intake
   - Delivery address (mock)
   - Payment method selection
   - Card details input (non-functional)
   - Place order with success animation

10. **Favorites** (`/favorites`)
    - Tabs: Meals / Restaurants
    - Saved items grid
    - Heart icon to toggle favorites

11. **Profile** (`/profile`)
    - User information
    - Order statistics
    - Dietary preferences
    - Recent orders
    - Settings menu
    - Logout

### Components

**BottomNav**
- Fixed navigation with 4 tabs
- Cart badge showing item count
- Active state highlighting

**FoodCard**
- Meal image with favorite button
- Name, price, rating
- Nutrition chips (calories, protein, carbs)
- Links to food detail page

**RestaurantCard**
- Cover image
- Name, description
- Rating and delivery time
- Links to restaurant page

**NutritionCard**
- Complete nutrition facts
- Serving size
- Structured layout

**MacroChip**
- Color-coded macro display
- Used throughout app for quick nutrition info

### Context & State Management

**CartContext**
- Add/remove/update items
- Calculate total price
- **Calculate total nutrition** (calories, protein, carbs, fat)
- Customizations support

**FavoritesContext**
- Toggle favorites
- Check favorite status
- Persistent across navigation

### Data Structure

**Meal**
- Basic info (name, price, image, rating)
- Nutrition info (all macros + sodium, sugar)
- Tags (High Protein, Vegetarian, etc.)
- Ingredients & allergens
- Category & restaurant ID

**Restaurant**
- Basic info
- Menu sections
- Delivery time

## Key Features

### Nutrition Transparency
- Every meal shows nutrition info
- Compare calories/macros at a glance
- Cart shows **total nutrition intake**
- Detailed nutrition facts on food page
- Color-coded macro chips

### Smart Filtering
- Filter by dietary needs
- Search across meals
- Category-based browsing

### User Experience
- Mobile-first design (max-width: 448px)
- Smooth animations
- Toast notifications
- Empty states with helpful messages
- Bottom navigation for easy access

### Non-Functional Elements
- Payment processing (UI only)
- Delivery tracking (not included)
- Real-time updates (static data)

## Sample Data

14 meals across 4 restaurants with realistic:
- Prices ($9.99-$16.99)
- Nutrition values (based on real food data)
- Ratings (4.6-4.9)
- Categories (Rice Meals, Salads, High Protein, etc.)

## User Flow

1. Splash → Onboarding → Login
2. Home → Browse meals/restaurants
3. Click meal → Food Detail → Add to Cart
4. Cart → Review nutrition totals → Checkout
5. Checkout → Place order → Success
6. Profile/Favorites accessible via bottom nav

## Technical Stack

- React 18
- React Router 7 (Data Mode)
- TypeScript
- Tailwind CSS v4
- Lucide Icons
- Sonner (Toast notifications)
- Context API (State management)

## Design Philosophy

**Health-First, Not Clinical**
The app balances nutrition transparency with appetizing design. Food images are vibrant, but nutrition info is always visible and easy to scan.

**Mobile-Optimized**
Every interaction is designed for touch. Large tap targets, swipeable sections, and thumb-friendly bottom navigation.

**Information Hierarchy**
Nutrition info is prominent but not overwhelming. Quick macro chips on cards, full details on demand.

## Future Enhancements (Not Implemented)

- Delivery tracking
- Real payment integration
- User authentication
- Nutrition goals/tracking
- Meal recommendations based on diet
- Social features (share meals)
- Restaurant reviews
