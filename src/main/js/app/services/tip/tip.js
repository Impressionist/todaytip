import tipApis from './tipApis';

export const UPDATE_TIPS_FULFILLED = 'tips/UPDATE_ROLES_FULFILLED';
export const UPDATE_TIPS = 'tips/UPDATE_ROLES';

const initialState = {
  tips: [],
};

export function getTips() {
  return async(dispatch, getState, { http }) => await dispatch({
    type: UPDATE_TIPS,
    payload: http.request(tipApis.findAll()),
  });
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_TIPS_FULFILLED:
      return { ...state, tips: payload.data };
    default:
      return state;
  }
}
