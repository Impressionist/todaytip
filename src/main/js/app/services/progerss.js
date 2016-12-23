const initialState = {
  isLoading: false,
};

export default function reducer(state = initialState, { type }) {
  if (type.indexOf('_PENDING') > -1) {
    return { ...state, isLoading: true };
  } else if (type.indexOf('_FULFILLED') > -1) {
    return { ...state, isLoading: false };
  } else if (type.indexOf('_REJECT') > -1) {
    return { ...state, isLoading: false };
  }
  return { ...state };
}
