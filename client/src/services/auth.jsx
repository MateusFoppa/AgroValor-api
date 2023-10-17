let isAuthenticated = false;

export const setAuth = (token) => {
  isAuthenticated = !!token;
}

export const isAuth = () => {
  return isAuthenticated;
}
