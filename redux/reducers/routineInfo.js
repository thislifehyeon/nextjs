export const initialState = { 
  id: null,
  name: null,
  tasks: null,
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const GET_ROUTINE_INFO = 'GET_ROUTINE_INFO'; // count 1을 증가시킬 액션 타입이다.
export const ADD_WORKOUT = 'ADD_WORKOUT'
export const DND_WORKOUT = 'DND_WORKOUT'

export const routineInfo = (id, name, tasks) => ({
  // 액션 생성 함수
  type: GET_ROUTINE_INFO,
  payload: { id: id, name: name, tasks:tasks },
});

export const addWorkoutArray = (tasks) => ({
  // 액션 생성 함수
  type: ADD_WORKOUT,
  tasks: tasks,
});

export const dndUpdate = (tasks) => ({
  // 액션 생성 함수
  type: DND_WORKOUT,
  payload: { tasks:tasks },
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case GET_ROUTINE_INFO:
      return Object.assign({}, state, action.payload);
    case ADD_WORKOUT:
      return [...state.tasks, action.payload.tasks];
    case DND_WORKOUT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default reducer;
