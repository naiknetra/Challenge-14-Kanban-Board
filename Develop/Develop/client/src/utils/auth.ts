import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode(token) : null; // Decode the token to get user profile

    
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    return !!this.getToken(); // Returns true if the token exists, indicating the user is logged in

  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if (!token) return true; // If no token, consider it expired
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.exp < Date.now() / 1000; // Check if the token expiration time is in the past
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('id_token') || ''; // Retrieve the token from localStorage

  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // TODO: redirect to the home page
    window.location.href = '/';

  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.href = '/login';
  }
}

export default new AuthService();
