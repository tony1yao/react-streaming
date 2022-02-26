export const signInAction = (userId: string) => {
  return {
    type: AuthAction.SIGN_IN,
    payload: userId
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
