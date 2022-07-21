import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
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
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;

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










// import { createSlice } from "@reduxjs/toolkit";
// import data from "../../data";

// const cartSlice = createSlice({
//   name: "post",
//   initialState: {
//     items: data,
//     totalAmount: 0,
//     totalCount: 0,
//   },

//   reducers: {
//     getCartTotal: (state, action) => {
//       let { totalAmount, totalCount } = state.items.reduce(
//         (cartTotal, cartItem) => {
//           const { price, amount } = cartItem;
//           const itemTotal = price * amount;

//           cartTotal.totalAmount += itemTotal;
//           cartTotal.totalCount += amount;
//           return cartTotal;
//         },
//         {
//           totalAmount: 0,
//           totalCount: 0,
//         }
//       );
//       state.totalAmount = parseInt(totalAmount.toFixed(2));
//       state.totalCount = totalCount;
//     },
//     remove: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     increase: (state, action) => {
//       state.items = state.items.map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, amount: item.amount + 1 };
//         }
//         return item;
//       });
//     },
//     decrease: (state, action) => {
//       state.items = state.items
//         .map((item) => {
//           if (item.id === action.payload) {
//             return { ...item, amount: item.amount - 1 };
//           }
//           return item;
//         })
//         .filter((item) => item.amount !== 0);
//     },
//     clearCart: (state, action) => {
//       state.items = [];
//     },
//     getCartItems: (state) => {
//       state.items = data;
//     },
//   },
// });

// export const {
//   getCartTotal,
//   remove,
//   increase,
//   decrease,
//   clearCart,
//   getCartItems,
// } = cartSlice.actions;

// export default cartSlice.reducer;













// // import { createSlice } from "@reduxjs/toolkit";
// // import { toast } from "react-toastify";

// // const initialState = {
// //   cartItems: localStorage.getItem("cartItems")
// //     ? JSON.parse(localStorage.getItem("cartItems"))
// //     : [],
// //   cartTotalQuantity: 0,
// //   cartTotalAmount: 0,
// // };

// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// //   reducers: {
// //     addToCart(state, action) {
// //       const existingIndex = state.cartItems.findIndex(
// //         (item) => item._id === action.payload._id
// //       );

// //       if (existingIndex >= 0) {
// //         state.cartItems[existingIndex] = {
// //           ...state.cartItems[existingIndex],
// //           cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
// //         };
// //         toast.info("Increased product quantity", {
// //           position: "bottom-left",
// //         });
// //       } else {
// //         let tempProductItem = { ...action.payload, cartQuantity: 1 };
// //         state.cartItems.push(tempProductItem);
// //         toast.success("Product added to cart", {
// //           position: "bottom-left",
// //         });
// //       }
// //       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
// //     },
// //     decreaseCart(state, action) {
// //       const itemIndex = state.cartItems.findIndex(
// //         (item) => item._id === action.payload._id
// //       );

// //       if (state.cartItems[itemIndex].cartQuantity > 1) {
// //         state.cartItems[itemIndex].cartQuantity -= 1;

// //         toast.info("Decreased product quantity", {
// //           position: "bottom-left",
// //         });
// //       } else if (state.cartItems[itemIndex].cartQuantity === 1) {
// //         const nextCartItems = state.cartItems.filter(
// //           (item) => item._id !== action.payload._id
// //         );

// //         state.cartItems = nextCartItems;

// //         toast.error("Product removed from cart", {
// //           position: "bottom-left",
// //         });
// //       }

// //       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
// //     },
// //     removeFromCart(state, action) {
// //       state.cartItems.map((cartItem) => {
// //         if (cartItem._id === action.payload._id) {
// //           const nextCartItems = state.cartItems.filter(
// //             (item) => item._id !== cartItem._id
// //           );

// //           state.cartItems = nextCartItems;

// //           toast.error("Product removed from cart", {
// //             position: "bottom-left",
// //           });
// //         }
// //         localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
// //         return state;
// //       });
// //     },
// //     getTotals(state, action) {
// //       let { total, quantity } = state.cartItems.reduce(
// //         (cartTotal, cartItem) => {
// //           const { price, cartQuantity } = cartItem;
// //           const itemTotal = price * cartQuantity;

// //           cartTotal.total += itemTotal;
// //           cartTotal.quantity += cartQuantity;

// //           return cartTotal;
// //         },
// //         {
// //           total: 0,
// //           quantity: 0,
// //         }
// //       );
// //       total = parseFloat(total.toFixed(2));
// //       state.cartTotalQuantity = quantity;
// //       state.cartTotalAmount = total;
// //     },
// //     clearCart(state, action) {
// //       state.cartItems = [];
// //       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
// //       toast.error("Cart cleared", { position: "bottom-left" });
// //     },
// //   },
// // });

// // export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
// //   cartSlice.actions;

// // export default cartSlice.reducer;
