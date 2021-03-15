import { actionsEnums } from '../common/actionsEnums';

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

export const wizardReducer = (state = defaultWizardState(), action) => {
  switch (action.type) {
    case actionsEnums.UPDATE_LOADING:
      return handleUpdateLoading(state, action.payload);
    case actionsEnums.UPDATE_API_RESPONSE:
      return handleUpdateApiResponse(state, action.payload);
    case actionsEnums.UPDATE_PASSWORD:
      return handleUpdatePassword(state, action.payload);
    case actionsEnums.UPDATE_ACCEPT_CONDITIONS:
      return handleUpdateAcceptConditions(state, action.payload);
  }

  return state;
}

const handleUpdateLoading = (state: WizardProfileState, isLoading: boolean) => {
  return {
    ...state,
    isLoading,
  };
}

const handleUpdatePassword = (state: WizardProfileState, password: string) => {
  return {
    ...state,
    password,
  };
}

const handleUpdateApiResponse = (state: WizardProfileState, apiResponse: number) => {
  return {
    ...state,
    apiResponse,
  };
}

const handleUpdateAcceptConditions = (state: WizardProfileState, acceptConditions: boolean) => {
  return {
    ...state,
    acceptConditions,
  };
}