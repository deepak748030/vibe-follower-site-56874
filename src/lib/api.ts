const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
console.log("----------------", API_URL)
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
        apiCall<{ success: boolean; token: string; user: any }>('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
        }),

    login: (data: { email: string; password: string }) =>
        apiCall<{ success: boolean; token: string; user: any }>('/api/auth/login', {
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
        return apiCall<any>(`/api/services${query ? `?${query}` : ''}`).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.services ?? [],
        }));
    },

    getById: (id: string) =>
        apiCall<any>(`/api/services/${id}`).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.service ?? body,
        })),
};

// Orders APIs
export const ordersAPI = {
    create: (data: { service: string; link: string; quantity: number }) =>
        apiCall<any>('/api/orders', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.order ?? body,
            message: body?.message ?? 'Order created',
        })),

    massCreate: (data: { orders: string }) =>
        apiCall<any>('/api/orders/mass', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? { created: body?.created ?? [], failed: body?.failed ?? [] },
            message: body?.message ?? 'Mass order processed',
        })),

    getAll: (params?: { status?: string; page?: number; limit?: number }) => {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append('status', params.status);
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        const query = queryParams.toString();
        return apiCall<any>(`/api/orders${query ? `?${query}` : ''}`).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.orders ?? [],
            pagination: body?.pagination ?? {
                totalPages: body?.totalPages,
                currentPage: body?.currentPage,
                total: body?.total,
            },
        }));
    },

    getById: (id: string) =>
        apiCall<any>(`/api/orders/${id}`).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.order ?? body,
        })),
};

// Payments APIs
export const paymentsAPI = {
    addFunds: (data: { amount: number; method: string; phone: string }) =>
        apiCall<any>('/api/payments/add-funds', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body,
            message: body?.message ?? 'Payment initiated',
        })),

    getTransactions: () =>
        apiCall<any>('/api/payments/transactions').then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.transactions ?? [],
            pagination: body?.pagination ?? {
                totalPages: body?.totalPages,
                currentPage: body?.currentPage,
                total: body?.total,
            },
        })),
};

// Tickets APIs
export const ticketsAPI = {
    create: (data: { subject: string; category: string; message: string; priority?: string }) =>
        apiCall<any>('/api/tickets', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.ticket ?? body,
            message: body?.message ?? 'Ticket created',
        })),

    getAll: (params?: { status?: string }) => {
        const queryParams = new URLSearchParams();
        if (params?.status) queryParams.append('status', params.status);
        const query = queryParams.toString();
        return apiCall<any>(`/api/tickets${query ? `?${query}` : ''}`).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.tickets ?? [],
        }));
    },

    getById: (id: string) =>
        apiCall<any>(`/api/tickets/${id}`).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.ticket ?? body,
        })),

    addReply: (id: string, data: { message: string }) =>
        apiCall<any>(`/api/tickets/${id}/reply`, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body,
            message: body?.message ?? 'Reply added',
        })),
};

// Referrals APIs
export const referralsAPI = {
    getStats: () =>
        apiCall<any>('/api/referrals/stats').then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.stats ?? body,
        })),

    trackVisit: (code: string) =>
        apiCall<{ success: boolean }>(`/api/referrals/track/${code}`, {
            method: 'POST',
        }),
};

// Users APIs
export const usersAPI = {
    getProfile: () =>
        apiCall<any>('/api/users/profile').then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.user ?? body,
        })),

    updateProfile: (data: { name?: string; email?: string; password?: string }) =>
        apiCall<any>('/api/users/profile', {
            method: 'PUT',
            body: JSON.stringify(data),
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.user ?? body,
            message: body?.message ?? 'Profile updated',
        })),

    generateApiKey: () =>
        apiCall<any>('/api/users/api-key', {
            method: 'POST',
        }).then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? { apiKey: body?.apiKey },
            message: body?.message ?? 'API key generated',
        })),
};

// Updates APIs
export const updatesAPI = {
    getAll: () =>
        apiCall<any>('/api/updates').then((body) => ({
            success: body?.success ?? true,
            data: body?.data ?? body?.updates ?? [],
        })),
};

// API Key endpoint (external integration)
export const apiKeyAPI = {
    call: (data: { key: string; action: string;[key: string]: any }) =>
        apiCall<{ success: boolean;[key: string]: any }>('/api/v2', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
};
