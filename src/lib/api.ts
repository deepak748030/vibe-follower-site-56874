const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Helper function to get auth token
const getAuthToken = (): string | null => {
    return localStorage.getItem('token');
};

// Helper function to get headers
const getHeaders = (isFormData = false): HeadersInit => {
    const headers: HeadersInit = {};

    if (!isFormData) {
        headers['Content-Type'] = 'application/json';
    }

    const token = getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
};

// Generic API call function
async function apiCall<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `${API_URL}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            ...getHeaders(),
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Request failed' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
}

// Auth APIs
export const authAPI = {
    register: (data: { name: string; email: string; password: string; referralCode?: string }) =>
        apiCall<{ success: boolean; data: { token: string; user: any } }>('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
        }),

    login: (data: { email: string; password: string }) =>
        apiCall<{ success: boolean; data: { token: string; user: any } }>('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
};

// Services APIs
export const servicesAPI = {
    getAll: (params?: { category?: string; search?: string }) => {
        const queryParams = new URLSearchParams();
        if (params?.category) queryParams.append('category', params.category);
        if (params?.search) queryParams.append('search', params.search);
        const query = queryParams.toString();
        return apiCall<{ success: boolean; data: any[] }>(`/api/services${query ? `?${query}` : ''}`);
    },

    getById: (id: string) =>
        apiCall<{ success: boolean; data: any }>(`/api/services/${id}`),
};

// Orders APIs
export const ordersAPI = {
    create: (data: { service: string; link: string; quantity: number }) =>
        apiCall<{ success: boolean; data: any; message: string }>('/api/orders', {
            method: 'POST',
            body: JSON.stringify(data),
        }),

    massCreate: (data: { orders: string }) =>
        apiCall<{ success: boolean; data: { created: any[]; failed: any[] }; message: string }>('/api/orders/mass', {
            method: 'POST',
            body: JSON.stringify(data),
        }),

    getAll: (params?: { status?: string; page?: number; limit?: number }) => {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append('status', params.status);
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        const query = queryParams.toString();
        return apiCall<{ success: boolean; data: any[]; pagination?: any }>(`/api/orders${query ? `?${query}` : ''}`);
    },

    getById: (id: string) =>
        apiCall<{ success: boolean; data: any }>(`/api/orders/${id}`),
};

// Payments APIs
export const paymentsAPI = {
    addFunds: (data: { amount: number; method: string; phone: string }) =>
        apiCall<{ success: boolean; data: any; message: string }>('/api/payments/add-funds', {
            method: 'POST',
            body: JSON.stringify(data),
        }),

    getTransactions: () =>
        apiCall<{ success: boolean; data: any[] }>('/api/payments/transactions'),
};

// Tickets APIs
export const ticketsAPI = {
    create: (data: { subject: string; category: string; message: string; priority?: string }) =>
        apiCall<{ success: boolean; data: any; message: string }>('/api/tickets', {
            method: 'POST',
            body: JSON.stringify(data),
        }),

    getAll: (params?: { status?: string }) => {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append('status', params.status);
        const query = queryParams.toString();
        return apiCall<{ success: boolean; data: any[] }>(`/api/tickets${query ? `?${query}` : ''}`);
    },

    getById: (id: string) =>
        apiCall<{ success: boolean; data: any }>(`/api/tickets/${id}`),

    addReply: (id: string, data: { message: string }) =>
        apiCall<{ success: boolean; data: any; message: string }>(`/api/tickets/${id}/reply`, {
            method: 'POST',
            body: JSON.stringify(data),
        }),
};

// Referrals APIs
export const referralsAPI = {
    getStats: () =>
        apiCall<{ success: boolean; data: any }>('/api/referrals/stats'),

    trackVisit: (code: string) =>
        apiCall<{ success: boolean }>(`/api/referrals/track/${code}`, {
            method: 'POST',
        }),
};

// Users APIs
export const usersAPI = {
    getProfile: () =>
        apiCall<{ success: boolean; data: any }>('/api/users/profile'),

    updateProfile: (data: { name?: string; email?: string; password?: string }) =>
        apiCall<{ success: boolean; data: any; message: string }>('/api/users/profile', {
            method: 'PUT',
            body: JSON.stringify(data),
        }),

    generateApiKey: () =>
        apiCall<{ success: boolean; data: { apiKey: string }; message: string }>('/api/users/api-key', {
            method: 'POST',
        }),
};

// Updates APIs
export const updatesAPI = {
    getAll: () =>
        apiCall<{ success: boolean; data: any[] }>('/api/updates'),
};

// API Key endpoint (external integration)
export const apiKeyAPI = {
    call: (data: { key: string; action: string;[key: string]: any }) =>
        apiCall<{ success: boolean;[key: string]: any }>('/api/v2', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
};
