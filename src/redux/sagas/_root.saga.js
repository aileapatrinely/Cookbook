import { all, join } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import recipeSaga from './recipe.saga';
import ingredientsSaga from './ingredients.saga';
import instructionsSaga from './instructions.saga';
import editRecipeSaga from './editrecipe.saga';
import editIngredientsSaga from './editingredients.saga';
import editInstructionsSaga from './editinstructions.saga';
import deleteRecipeSaga from './deleterecipe.saga';
import deleteIngredientsSaga from './deleteingredients.saga';
import deleteInstructionsSaga from './deleteinstructions.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
    yield all([
      loginSaga(),
      registrationSaga(),
      userSaga(),
      recipeSaga(),
      ingredientsSaga(),
      instructionsSaga(),
      editRecipeSaga(),
      editIngredientsSaga(),
      editInstructionsSaga(),
      deleteRecipeSaga(),
      deleteIngredientsSaga(),
      deleteInstructionsSaga(),
    ]);
  }