import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editInstructions(action) {
  try {
    yield axios.put(`/api/instructions/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_INSTRUCTIONS', payload: action.payload.id });
  } catch (error) {
    console.log('Instructions put request failed', error);
  }
}

function* editInstructionsSaga() {
  yield takeLatest('UPDATE_INSTRUCTIONS', editInstructions);
}

export default editInstructionsSaga;