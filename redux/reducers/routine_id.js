export const initialState = { routineId: 0 }; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const GET_ROUTINE_ID = 'GET_ROUTINE_ID'; // count 1을 증가시킬 액션 타입이다.

export const getRoutineId = (routineId) => ({
  // 액션 생성 함수
  type: GET_ROUTINE_ID,
  payload: { routineId: routineId },
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case GET_ROUTINE_ID:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default reducer;
