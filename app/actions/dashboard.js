import type { dashboardStateType } from '../reducers/dashboard';

type actionType = {
  +type: string
};

export const INCREMENT_DASHBOARD = 'INCREMENT_DASHBOARD';
export const DECREMENT_DASHBOARD = 'DECREMENT_DASHBOARD';

export function increment() {
  return {
    type: INCREMENT_DASHBOARD
  };
}

export function decrement() {
  return {
    type: DECREMENT_DASHBOARD
  };
}

export function incrementIfOdd() {
  return (
    dispatch: (action: actionType) => void,
    getState: () => dashboardStateType
  ) => {
    const { dashboard } = getState();

    if (dashboard % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
