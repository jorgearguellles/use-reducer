# useReducer Hook

This section is focusing to understand the reducer concept, because it will be important to introduce Redux or when we use context API easily way.

**Section topics:**

1. useReducer Hook
2. Reducers
3. Reducer theory
4. ToDo's App
5. Local CRUD

# What is a Reducer?

- Is just a function
- Is a pure function
  - Shouldn't have secondaries effects
  - Shouldn't have async task
  - Always should return a new State.
  - Shouldn't call localStorage or sessionStorage (those are secondaries effects)
  - Shouldn't require mora than one action
- This function always should return a new State.
- Usually receive two arguments: Initial State & Action (Modified State).

**Examples:**

```js
const initialState = [
  {
    id: 1,
    todo: "Buy cake",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  return state;
};
```

If we call that function:

```js
let todos = todoReducer();
console.log(todos); // [{ id: 1, todo: 'Buy cake', done: false }]
```

## Reducer life cycle

1. State = initialState
2. Component show in screen
3. User click to add a new todo, so Screen create a action
4. That Action will send to Reducer
5. Reducer have all function that it can doit, for example:
   - Add-todo
   - Delete-todo
   - Update-todo
   - Return pre State
6. State was update
7. Then component show re render and update Screen UI.

## Intro Reducer

```js
const initialState = [
  {
    id: 1,
    todo: "buy bread",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "ADD") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "buy milk",
  done: false,
};

const action = {
  type: "ADD",
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
```
