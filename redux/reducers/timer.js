export const TIMER_SET = 'TIMER_SET';
export const TIMER_RUNNING = 'TIMER_RUNNING';
export const TIMER_RESET = 'TIMER_RESET';
export const TIMER_STATUS = 'TIMER_STATUS';
export const TIMER_TASKMEMO = 'TIMER_TASKMEMO';

export const TIMER_WORKOUTSET = 'TIMER_WORKOUTSET';
export const TIMER_CURRENT = 'TIMER_CURRENT';
export const TIMER_REST = 'TIMER_REST';

export const TIMER_TOTAL = 'TIMER_TOTAL';

const initialState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  isRunning: false,
  reset: { seconds: 0, minutes: 0, hours: 0 },
  workout_cur: 0,
  workout_set: 1,
  isResting: false,
  total_time: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TIMER_SET:
      return { ...state, ...action.payload };
    case TIMER_RUNNING:
      return { ...state, isRunning: !state.isRunning };
    case TIMER_RESET:
      return { ...state, reset: action.payload.reset };
    case TIMER_WORKOUTSET:
      return { ...state, workout_set: action.payload.workout_set };
    case TIMER_CURRENT:
      return { ...state, workout_cur: action.payload.workout_cur };
    case TIMER_REST:
      return { ...state, isResting: !state.isResting };
    case TIMER_TOTAL:
      return { ...state, total_time: state.total_time + action.payload.total_time };
    default:
      return state;
  }
}

export const timerSet = (seconds, minutes, hours) => ({
  type: TIMER_SET,
  payload: {
    seconds,
    minutes,
    hours,
  },
});

export const timerRunning = () => ({
  type: TIMER_RUNNING,
});

export const timerReset = (seconds, minutes, hours) => ({
  type: TIMER_RESET,
  payload: {
    reset: {
      seconds,
      minutes,
      hours,
    },
  },
});

export const timerWorkoutSet = (workout_set) => ({
  type: TIMER_WORKOUTSET,
  payload: {
    workout_set,
  },
});

export const timerCurWorkout = (workout_cur) => ({
  type: TIMER_CURRENT,
  payload: {
    workout_cur,
  },
});

export const timerIsResting = () => ({
  type: TIMER_REST,
});

export const totalTime = (total_time) => ({
  type: TIMER_TOTAL,
  payload: {
    total_time,
  },
});
