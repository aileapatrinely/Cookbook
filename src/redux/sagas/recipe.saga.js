import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchRecipe() {
  try {
    const response = yield axios.get('/api/recipe');
    yield put({ type: 'SET_RECIPE', payload: response.data });
  } catch (error) {
    console.log('Recipe get request failed', error);
  }
}

function* recipeSaga() {
  yield takeLatest('FETCH_RECIPE', fetchRecipe);
}

export default recipeSaga;
