// Redux senza TOOLKIT
// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
//   showCounter: true,
// };

// // per evitare errori di typo possiamo creare delle costanti che corrispondano ai type:
// export const { INCREMENT, DECREMENT, INCREASE, TOGGLE } = {
//     INCREMENT: "INCREMENT",
//     DECREMENT: "DECREMENT",
//     INCREASE: "INCREASE",
//     TOGGLE: "TOGGLE"
// }

// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     // non è mai lo stato iniziale a cambiare, quello è sempre immutabile, ogni volta che vogliamo cambiare qualcosa, creiamo un nuovo oggetto, con i valori aggiornati e lo ritorniamo.
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   } else if (action.type ===  INCREASE) {
//     return { counter: state.counter + action.amount, showCounter: state.showCounter };
//   } else if (action.type === DECREMENT) {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   } else if (action.type === TOGGLE){
//     return { counter: state.counter, showCounter: !state.showCounter }
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

// Redux con TOOLKIT
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState = {
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
