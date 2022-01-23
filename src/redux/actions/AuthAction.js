import { LOGIN_WITH_GOOGLE, LOG_OUT } from "../Types";
export const loginWithGoogle = (response, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_WITH_GOOGLE, payload: response.profileObj });
  navigate("/home");
};
export const logOut = (navigate) => async (dispatch) => {
  dispatch({ type: LOG_OUT });
  navigate("/");
};
