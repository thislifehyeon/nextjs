export const initialState = {}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.
export const LOGIN_USER = 'LOGIN_USER';

export const loginUserAction = (payload) => ({
  // 액션 생성 함수
  type: LOGIN_USER,
  payload: {
    userinfo: payload,
  },
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, action.payload.userinfo);
    default:
      return initialState;
  }
};

export default reducer;
