const { createStore } = require("redux");
// state
const counter = 0;
const increment = 'INCREMENT';
const decrement = 'DECREMENT';

// action creators
const incrementCounter = () => {
    return {
        type: increment
    }
};

const decrementCounter = () => {
    return {
        type: decrement
    }
};

// reducer
const counterReducer = (state = { counter: counter }, action) => {
    switch (action.type) {
        case increment:
            return {
                counter: state.counter + 1
            };
        case decrement:
            return {
                counter: state.counter - 1
            };
        default:
            return state; 
    }
};

// store creation
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
