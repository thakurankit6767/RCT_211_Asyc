import * as types from "./actionTypes";

const initState = {
  isActive: false,
  token: "",
  isAuthLoding: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoding: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isAuthLoding: false,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isAuthLoding: false,
      };
    default:
      return state;
  }
};
