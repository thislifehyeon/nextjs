import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import id_reducer from './id_reducer';
import user_reducer from './user_reducer';
import timer from './timer';
import routine from './routine'
import workout from './workout'
import modal from './modal'
import routineInfo from './routineInfo'
import workoutInfo from './workoutInfo'
//리듀서들을 import

//리듀서들을 import
const rootReducer = combineReducers({
  //next의 redux와 client의 redux를 합치기
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  //여러 리듀서를 하나로 합쳐줌
  id_reducer,
  user_reducer,
  timer,
  routine,
  workout,
  modal,
  routineInfo,
  workoutInfo,
});

export default rootReducer;
