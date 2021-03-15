import {actionsEnums} from '../common/actionsEnums';
import { submitForm } from '../services/api';

export const updateLoading = (isLoading : boolean) => ({  
    type: actionsEnums.UPDATE_LOADING,
    payload : isLoading,  
});

export const updatePassword = (password : string) => ({  
    type: actionsEnums.UPDATE_PASSWORD,
    payload : password,  
});

export const updateApiResponse = (apiResponse : number) => ({  
    type: actionsEnums.UPDATE_API_RESPONSE,
    payload : apiResponse,  
});

export const updateAcceptConditions = (acceptConditions: boolean) => ({
  type: actionsEnums.UPDATE_ACCEPT_CONDITIONS,
  payload: acceptConditions,
})

export const apiResponseRequest = (password: string) => (dispatch) => {
  const promise = submitForm(password);

  promise.then(
    (data) => {
      dispatch(updateApiResponse(data.status))
      dispatch(updateLoading(false))
    }
  ).catch(
    (data) => {
      dispatch(updateApiResponse(data.status))
      dispatch(updateLoading(false))
    }
  )  

  return promise;
}