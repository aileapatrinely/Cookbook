import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteRecipe(action) {
  try {
    yield axios.delete(`/api/recipe/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete recipe failed', error);
  }
}

function* deleteRecipeSaga() {
  yield takeLatest('DELETE_RECIPE', deleteRecipe);
}

export default deleteRecipeSaga;