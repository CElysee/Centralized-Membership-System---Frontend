// Auth token management
// This is a simple implementation - replace with your actual auth solution

const AUTH_TOKEN_KEY = 'auth_token';

export const auth = {
  /**
   * Get auth token from storage
   */
  getToken: (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  /**
   * Set auth token
   */
  setToken: (token: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  },

  /**
   * Remove auth token
   */
  removeToken: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_TOKEN_KEY);
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return auth.getToken() !== null;
  },
};
