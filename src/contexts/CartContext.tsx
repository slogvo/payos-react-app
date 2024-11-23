import { Product } from "@/assets/data/products";
import { createContext, useContext, useReducer } from "react";

interface CartItem extends Product {
  quantity: number;
  size: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; size: number } }
  | { type: "REMOVE_FROM_CART"; payload: { id: number; size: number } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { id: number; size: number; quantity: number };
    }
  | { type: "CLEAR_CART" };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1, size }],
        total: state.total + product.price,
      };
    }

    case "REMOVE_FROM_CART": {
      const { id, size } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );

      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === id && item.size === size)
        ),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (!item) return state;

      const quantityDiff = quantity - item.quantity;

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id && item.size === size ? { ...item, quantity } : item
        ),
        total: state.total + item.price * quantityDiff,
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
