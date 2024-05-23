Store Class;

The store acts as the hub, for storing the applications data.
Important functions include;
 constructor(reducer, initialState); Sets up the store with a reducer (for updating the state) and an initial state.
 getState(); Retrieves the state.
 dispatch(action); Alters the state based on the dispatched action and alerts subscribers.
 subscribe(listener); Permits components to keep track of changes in state.

Reducer Function;

tallyReducer; A function that takes the state and an action then generates a new state depending on the action type.

Usage;

An instance of a store is created using tallyReducer and an initial state.
A listener function is subscribed to record changes in state to the console.
Actions are dispatched to modify the state.
Finally unsubscribe from listening.

Solutions
Unfamiliar Terminology; Terms such as "reducer," "dispatch," "subscribe," and "unsubscribe" are specific to libraries like Redux used for managing states. Understanding these terms is crucial for comprehending each part of code.

Functional Programming Concepts; The tallyReducer function applies programming principles, like functions and immutability.
These ideas are important, for grasping why the code is organized as it is. They may not come naturally to someone to this.

Hidden Connections; The code doesn't spell out how the different components (like the Store class, the tallyReducer and the actions) interact. Understanding how data moves through the system requires a grasp of the principles.

My Approach, to Tackling These Obstacles
I Started with the Basics; I began by getting acquainted with the concepts of managing state.
I Traced how information flows within the code.
