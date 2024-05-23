// Constructor to intialize the store with a reducer and an initial state
class Store {
constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
}

getState () {
    return this.state;
}

dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener = listener(this.state));
}

subscribe(listener) {
    this.listeners.push(listener);
    return() => {
        this.listeners = this.listeners.filter(l => l !== listener);
    };
}
}

// reducer function

const tallyReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 2;
        case "SUBTRACT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
};