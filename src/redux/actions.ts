import { submitForm } from '../services/api';

export const UPDATE_LOADING = 'UPDATE_LOADING';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_API_RESPONSE = 'UPDATE_API_RESPONSE';
export const UPDATE_ACCEPT_CONDITIONS = 'UPDATE_ACCEPT_CONDITIONS';

export const updateLoading = (isLoading : boolean) => ({  
    type: UPDATE_LOADING,
    payload : isLoading,  
});

export const updatePassword = (password : string) => ({  
    type: UPDATE_PASSWORD,
    payload : password,  
});

export const updateApiResponse = (apiResponse : number) => ({  
    type: UPDATE_API_RESPONSE,
    payload : apiResponse,  
});

export const updateAcceptConditions = (acceptConditions: boolean) => ({
  type: UPDATE_ACCEPT_CONDITIONS,
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