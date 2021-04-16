const recipeReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RECIPE':
        return action.payload;
      case 'UNSET_RECIPE':
        return [];
      default:
        return state;
    }
  };
  
  export default recipeReducer;