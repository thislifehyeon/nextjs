export const initialState = { 
  id: null,
  name: null,
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const GET_WORKOUT_INFO = 'GET_WORKOUT_INFO'; // count 1을 증가시킬 액션 타입이다.

export const workoutInfo = (id, name) => ({
  // 액션 생성 함수
  type: GET_WORKOUT_INFO,
  payload: { id: id, name: name},
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case GET_WORKOUT_INFO:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default reducer;
