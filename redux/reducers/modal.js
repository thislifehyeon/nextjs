export const initialState = false; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.
export const MODAL_OPEN = 'MODAL_OPEN';

export const ModalOpenAction = (payload) => ({
  // 액션 생성 함수
  type: MODAL_OPEN
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case MODAL_OPEN:
      return !state;
    default:
      return initialState;
  }
};

export default reducer;
