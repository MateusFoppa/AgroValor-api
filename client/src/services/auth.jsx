let isAuthenticated = false;

export const isAuth = () => {
  isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated;
}
