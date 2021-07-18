export const initialState = {
  id: 0,
  name: '',
};

export const GET_WORKOUT_INFO = 'GET_WORKOUT_INFO';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUT_INFO:
      return { ...state, id: action.payload.id };
    default:
      return state;
  }
}

export const workoutInfo = (id) => ({
  // 액션 생성 함수
  type: GET_WORKOUT_INFO,
  payload: {
    id,
  },
});

export default reducer;
