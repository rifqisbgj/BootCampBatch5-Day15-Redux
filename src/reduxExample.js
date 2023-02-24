const redux = require("redux");

// create basic reducer
const rootReducer = (currentState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return currentState + 1;
    case "DECREMENT":
      return currentState - 1;
    default:
      return currentState;
  }
};

// create a store
const store = redux.createStore(rootReducer);
console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
console.log("State after increment = ", store.getState());
