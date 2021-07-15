export const initialState = {workout:[]};

export const WORKOUT = 'WORKOUT'


export const currentWorkout = (workout) => ({
  type: WORKOUT,
  payload: { workout }
})

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case WORKOUT:
      return Object.assign({}, state, {
        workout: [...state.workout, action.payload]
      })
    default:
      return state;
  }
}


export default reducer;