import { combineReducers} from 'redux';
import { wizardReducer, WizardProfileState } from './wizardProfile';

export interface State {
  wizardReducer : WizardProfileState;
};

export const reducers = combineReducers<State>({
  wizardReducer
});