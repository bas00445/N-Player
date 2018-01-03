const filterType = 'all';

export default (state = filterType, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filterType;
    }; break;

    default:
      return state;
  }
};