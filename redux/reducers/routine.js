export const initialState = {};

export const ROUTINE = 'ROUTINE';

export const currentRoutine = (routine) => ({
  type: ROUTINE,
  payload: { result: routine },
});

export const addRoutine = (routine) => ({
  type: ADD_ROUTINE,
  payload: { result: routine },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTINE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default reducer;
