// Constructor to intialize the store with a reducer and an initial state
constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
}

