import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem("cartItems") 
  ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      //checking to see if already have item in cart then if so item is restored to its position
      const itemExists = state.cartItems.findIndex((item) => item._id === action.payload._id
      );

      if (itemExists >= 0) {
        state.cartItems[itemExists] = {
            ...state.cartItems[itemExists],
        cartQuantity: state.cartItems[itemExists].cartQuantity + 1,
    };
        toast.info(`Increased ${state.cartItems[itemExists].item} cart quantity`, {
          position: 'bottom-left',
        });
      } else {
        const existingProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(existingProduct);
        toast.success(`${action.payload.item} added to cart`, {
            position: 'bottom-left',
          });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

decreaseCart(state, action) {
      const itemExists = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemExists].cartQuantity > 1) {
        state.cartItems[itemExists].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemExists].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const toDeleteCartItem = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          state.cartItems = toDeleteCartItem;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
