import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteIngredients(action) {
  try {
    yield axios.delete(`/api/ingredients/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete ingredients failed', error);
  }
}

function* deleteIngredientsSaga() {
  yield takeLatest('DELETE_INGREDIENTS', deleteIngredients);
}

export default deleteIngredientsSaga;