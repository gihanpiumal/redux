// import { createStore } from "redux";

// const reduceFn = (state = { counter: 0 }, action) => {
//   if (action.type === "INC") {
//     return { counter : state.counter + 10 };
//   }
//   if (action.type === "DEC") {
//     return { counter : state.counter - 10 };
//   }
//   if (action.type === "ADD") {
//     return { counter : state.counter + action.payload };
//   }
//   return state;
// };

// const store = createStore(reduceFn);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counerSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 10;
    },
    decrement(state, action) {
      state.counter -= 10;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counerSlice.actions;

const store = configureStore({
  reducer: counerSlice.reducer,
});

export default store;
