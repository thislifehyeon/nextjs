export const initialState = {
  id: 0,
  name: '',
};

export const GET_WORKOUT_INFO = 'GET_WORKOUT_INFO';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUT_INFO:
      return { ...state, id: action.payload.id, name: action.payload.name };
    default:
      return state;
  }
}

export const workoutInfo = (id, name) => ({
  // 액션 생성 함수
  type: GET_WORKOUT_INFO,
  payload: {
    id,
    name,
  },
});

export default reducer;
