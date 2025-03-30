// Save token to localStorage
export const setToken = (token) => {
    localStorage.setItem('token', token);
  };
  
// Retrieve token from localStorage
export const getToken = () => {
return localStorage.getItem('token');
};
  
// Remove token on logout
// export const removeToken = () => {
// localStorage.removeItem('token');
// };
  
// // Check if user is logged in
// export const isLoggedIn = () => {
// return !!localStorage.getItem('token');
// };