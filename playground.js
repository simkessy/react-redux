// import dependencies
const { createStore, combineReducers } = require("redux");

console.clear();

/* 
    ACTIONS / ACTION_CREATORS
*/
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

const createClaim = (name, bagOfMoney) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      bagOfMoney
    }
  };
};

/* 
    REDUCERS     
*/
// Set oldClaims default to empty array for first call with no data
const claimsHistory = (oldClaims = [], action) => {
  // We only care about CREATE_CLAIM
  if (action.type === "CREATE_CLAIM ") {
    // we don't care about it
    // you never want to modify the existing array, create a new one
    return [...oldClaims, action.payload];
  }

  return oldClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.bagOfMoney;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  } else {
    return bagOfMoney;
  }
};

// policies handling

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(r => r !== action.payload.name);
  } else {
    return listOfPolicies;
  }
};

// Reduce notes
// never modify the original data
// always return data

const ourDepartments = combineReducers({
  accounting,
  claimsHistory,
  policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 40));
store.dispatch(createClaim("Alex", 120));
store.dispatch(createClaim("Jim", 50));
store.dispatch(deletePolicy("Bob"));
//
/* 
Dispatch funcction is in the store
Store = our entire redux applications 
contains references to reducers  and state 

Has dispatch: when we make an action, data is copied and sent to each reducer 
*/

// store.dispatch(action);

// getState gets all data
store.getState();
console.log("state:", store.getState());

/* 
    Important Notes 
        action creator: create action object 
        action : how we want to change data in object
        dispatch: pass COPIES of our action object and pass to reducers 
        reducers : all run action object, modify data and return that data 
        state : latest state of application 

    - All reducers need to be combined: use 'combineReducers'
    - Each store.dispatch goes through the redux cycle 
    - We can only modify the state through store.dispatch and reducers 
    - 

 */
