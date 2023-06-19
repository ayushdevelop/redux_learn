export function createReducer(name, initialState = 0) {
  return function (state, action) {
    switch (action.type) {
      case `${name}`:
        return state + action.payload;

      case `@${name}/RESET`:
        return initialState;

      default:
        return state ? state : initialState;
    }
  };
}
