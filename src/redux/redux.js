/**
 * Action Types
 */
const TOGGLE_REFINE = 'TOGGLE_REFINE';

/**
 * Action Creators
 */
export function toggleRefineSearch(boolean) {
  return {
    type: TOGGLE_REFINE,
    isRefineSearch: boolean,
  };
}

/**
 * Reducer
 */
const initialState = {
  isRefineSearch: false,
};

export function toggleRefineReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REFINE:
      return [
        ...state,
        action.isRefineSearch,
      ];
    default:
      return state;
  }
}
