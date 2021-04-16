import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editIngredients(action) {
  try {
    yield axios.put(`/api/ingredients/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_INGREDIENTS', payload: action.payload.id });
  } catch (error) {
    console.log('Ingredient put request failed', error);
  }
}

function* editIngredientsSaga() {
  yield takeLatest('UPDATE_INGREDIENTS', editIngredients);
}

export default editIngredientsSaga;