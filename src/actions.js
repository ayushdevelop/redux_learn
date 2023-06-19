//async with dispatch

// export function addOne() {
//   return function (dispatch) {
//     dispatch({ type: "ADD_ONE", payload: 1 });
//   };
// }

// export function addTwo() {
//   return function (dispatch) {
//     dispatch({ type: "ADD_TWO", payload: 2 });
//   };
// }

//without async

export function addOne() {
  return { type: "ADD_ONE", payload: 1 };
}

export function addTwo() {
  return { type: "ADD_TWO", payload: 2 };
}

export function reset(name) {
  return { type: `@${name}/RESET` };
}
