import { INCREMENT_DASHBOARD, DECREMENT_DASHBOARD } from '../actions/dashboard';

export type dashboardStateType = {
  +dashboard: number
};

type actionType = {
  +type: string
};

export default function dashboard(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_DASHBOARD:
      return state + 1;
    case DECREMENT_DASHBOARD:
      return state - 1;
    default:
      return state;
  }
}
