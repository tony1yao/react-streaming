import { AuthAction } from "../actions";

const INITIAL_STATE = { isSignedIn : null };

export default (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case AuthAction.SIGN_IN:
      return {...state, isSignedIn: true};
    case AuthAction.SIGN_OUT:
      return {...state, isSignedIn: false};
    default:
      return state;
  }
};
