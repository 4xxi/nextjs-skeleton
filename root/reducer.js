import { combineReducers } from 'redux';
import { featureReducer } from 'features/Feature';

export default combineReducers({
  feature: featureReducer,
});
