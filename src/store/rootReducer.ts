import {combineReducers} from 'redux';
import {Account} from './actions';
import {globalState} from './globalState';
const reducer = combineReducers({
  Account: Account.reducer,
  GlobalState: globalState.reducer,
});

export default reducer;
