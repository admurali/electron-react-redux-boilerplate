import { SWITCH_PLOT } from '../actions/dashboard';

type actionType = {
  +type: string
};

const plot1 = [
  {
    x: [1, 2, 3],
    y: [2, 6, 3],
    type: 'scatter',
    mode: 'lines+points',
    marker: { color: 'red' },
  },
  { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
];

const plot2 = [
  {
    x: [1, 2, 3],
    y: [2, 6, 3],
    type: 'bar',
    mode: 'lines+points',
    marker: { color: 'red' },
  },
  { type: 'scatter', x: [1, 2, 3], y: [2, 5, 3] },
];


export const initialState = {
  type: 0,
  data: plot1,
};

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case SWITCH_PLOT:
      return {
        ...state,
        type: (state.type === 0) ? 1 : 0,
        data: (state.type === 0) ? plot2 : plot1,
      };
    default:
      return {
        ...state,
        type: initialState.type,
        data: initialState.data,
      };
  }
};
