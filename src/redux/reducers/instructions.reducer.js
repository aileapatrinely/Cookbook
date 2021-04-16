const instructionsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_INSTRUCTIONS':
        return action.payload;
      case 'UNSET_INSTRUCTIONS':
        return [];
      default:
        return state;
    }
  };
  
  export default instructionsReducer;