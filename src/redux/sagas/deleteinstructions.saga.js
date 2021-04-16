import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteInstructions(action) {
  try {
    yield axios.delete(`/api/instructions/${action.payload.id}`, action.payload.id);
  } catch (error) {
    console.log('Delete instructions failed', error);
  }
}

function* deleteInstructionsSaga() {
  yield takeLatest('DELETE_INSTRUCTIONS', deleteInstructions);
}

export default deleteInstructionsSaga;