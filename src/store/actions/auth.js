import axios from 'axios';

import * as actionType from './actionTypes';

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken: token,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7U72nF1ulF_OrSVL_rWKFlx_oI82CkwE';
    if (!isSignup) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7U72nF1ulF_OrSVL_rWKFlx_oI82CkwE';
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
