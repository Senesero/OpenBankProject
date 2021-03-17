import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { UPDATE_LOADING, UPDATE_API_RESPONSE, UPDATE_PASSWORD, UPDATE_ACCEPT_CONDITIONS} from './actions'

export interface WizardProfileState {
  isLoading: boolean;
  password: string;
  apiResponse: number;
  acceptConditions: boolean;
}

const defaultWizardState: () => WizardProfileState = () => ({
  isLoading: false,
  password: '',
  apiResponse: 0,
  acceptConditions: false,
});

const wizardReducer = (state = defaultWizardState(), action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UPDATE_API_RESPONSE:
      return {
        ...state,
        apiResponse: action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case UPDATE_ACCEPT_CONDITIONS:
      return {
        ...state,
        acceptConditions: action.payload,
      };
  }

  return state;
}

export default createStore(wizardReducer, applyMiddleware(reduxThunk))