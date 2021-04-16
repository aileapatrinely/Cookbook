import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editRecipe(action) {
  try {
    yield axios.put(`/api/recipe/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_RECIPE', payload: action.payload.id });
  } catch (error) {
    console.log('Recipe edit request failed', error);
  }
}

function* editRecipeSaga() {
  yield takeLatest('UPDATE_RECIPE', editRecipe);
}

export default editRecipeSaga;