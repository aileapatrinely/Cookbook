import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchInstructions() {
  try {
    const response = yield axios.get('/api/instructions');
    yield put({ type: 'SET_INSTRUCTIONS', payload: response.data });
  } catch (error) {
    console.log('Instructions get request failed', error);
  }
}

function* instructionsSaga() {
  yield takeLatest('FETCH_INSTRUCTIONS', fetchInstructions);
}

export default instructionsSaga;
