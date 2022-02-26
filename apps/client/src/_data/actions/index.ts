export const signInAction = () => {
  return {
    type: AuthAction.SIGN_IN
  };
};

export const signOutAction = () => {
  return {
    type: AuthAction.SIGN_OUT
  };
};


export const AuthAction = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
}
