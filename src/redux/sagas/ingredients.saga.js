import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchIngredients() {
  try {
    const response = yield axios.get('/api/ingredients');
    yield put({ type: 'SET_INGREDIENTS', payload: response.data });
  } catch (error) {
    console.log('Ingredients get request failed', error);
  }
}

function* ingredientsSaga() {
  yield takeLatest('FETCH_INGREDIENTS', fetchIngredients);
}

export default ingredientsSaga;
