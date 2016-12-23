import tipApis from './tipApis';

export const UPDATE_TIPS_FULFILLED = 'tips/UPDATE_ROLES_FULFILLED';
export const UPDATE_TIPS = 'tips/UPDATE_ROLES';

const initialState = {
  totalPages: 0,
  tips: [],
};

export function getTips(page) {
  return async(dispatch, getState, { http }) => await dispatch({
    type: UPDATE_TIPS,
    payload: http.request(tipApis.findAll(page)),
  });
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_TIPS_FULFILLED:
      return { ...state, tips: payload.data.contents, totalPages: payload.data.totalPages };
    default:
      return state;
  }
}
