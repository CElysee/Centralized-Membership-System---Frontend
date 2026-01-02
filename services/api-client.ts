// API Client wrapper with auth token injection and error handling

import type { ApiResponse, ApiError } from '@/types';
import { auth } from '@/lib/auth';

interface RequestOptions extends RequestInit {
  requireAuth?: boolean;
  skipErrorHandling?: boolean;
}

class ApiClient {
  private baseURL: string;
  private getAuthToken: (() => string | null) | null = null;

  constructor(baseURL?: string) {
    this.baseURL = baseURL || process.env.NEXT_PUBLIC_API_URL || '';

    // Set default auth token getter using the auth module
    if (typeof window !== 'undefined') {
      this.setAuthTokenGetter(() => auth.getToken());
    }
  }

  /**
   * Set function to get auth token
   */
  setAuthTokenGetter(getter: () => string | null) {
    this.getAuthToken = getter;
  }

  /**
   * Get headers with auth token if available
   */
  private getHeaders(options: RequestOptions = {}): HeadersInit {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Merge existing headers
    if (options.headers) {
      if (options.headers instanceof Headers) {
        options.headers.forEach((value, key) => {
          headers[key] = value;
        });
      } else if (Array.isArray(options.headers)) {
        options.headers.forEach(([key, value]) => {
          headers[key] = value;
        });
      } else {
        Object.assign(headers, options.headers);
      }
    }

    // Inject auth token if required
    if (options.requireAuth !== false && this.getAuthToken) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  /**
   * Handle API errors with standardized error handling
   */
  private async handleError(response: Response): Promise<ApiError> {
    let errorData: any;

    try {
      errorData = await response.json();
    } catch {
      errorData = { message: response.statusText || 'An error occurred' };
    }

    const error: ApiError = {
      message: errorData.message || 'An error occurred',
      code: errorData.code || `HTTP_${response.status}`,
      status: response.status,
      details: errorData.details || errorData,
    };

    // Log error using error handler
    if (typeof window !== 'undefined') {
      const { errorHandler } = await import('@/lib/error-handler');
      errorHandler.captureError(new Error(error.message), {
        code: error.code,
        status: error.status,
        details: error.details,
      });
    }

    return error;
  }

  /**
   * Make API request
   */
  async request<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = this.getHeaders(options);

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      // Handle non-OK responses
      if (!response.ok) {
        const error = await this.handleError(response);
        return { error };
      }

      // Parse response
      const data = await response.json();

      return { data };
    } catch (error) {
      const apiError: ApiError = {
        message:
          error instanceof Error ? error.message : 'Network error occurred',
        code: 'NETWORK_ERROR',
      };

      // Log network error
      if (typeof window !== 'undefined') {
        const { errorHandler } = await import('@/lib/error-handler');
        errorHandler.captureError(
          error instanceof Error ? error : new Error(String(error)),
          {
            code: 'NETWORK_ERROR',
          }
        );
      }

      return { error: apiError };
    }
  }

  /**
   * GET request
   */
  async get<T = any>(
    endpoint: string,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T = any>(
    endpoint: string,
    body?: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  /**
   * PUT request
   */
  async put<T = any>(
    endpoint: string,
    body?: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  /**
   * PATCH request
   */
  async patch<T = any>(
    endpoint: string,
    body?: any,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  /**
   * DELETE request
   */
  async delete<T = any>(
    endpoint: string,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for custom instances
export default ApiClient;
