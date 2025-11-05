import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, usersAPI } from '@/lib/api';
import { toast } from 'sonner';

interface User {
    _id: string;
    name: string;
    email: string;
    balance: number;
    apiKey?: string;
    referralCode: string;
    referralEarnings: number;
    referralStats?: {
        count: number;
        totalEarnings: number;
    };
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, referralCode?: string) => Promise<void>;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            refreshUser();
        } else {
            setLoading(false);
        }
    }, []);

    const refreshUser = async () => {
        try {
            const response = await usersAPI.getProfile();
            setUser(response.data);
        } catch (error: any) {
            console.error('Failed to fetch user:', error);
            localStorage.removeItem('token');
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await authAPI.login({ email, password });
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
            toast.success('Login successful!');
        } catch (error: any) {
            toast.error(error.message || 'Login failed');
            throw error;
        }
    };

    const register = async (name: string, email: string, password: string, referralCode?: string) => {
        try {
            const response = await authAPI.register({ name, email, password, referralCode });
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
            toast.success('Registration successful!');
        } catch (error: any) {
            toast.error(error.message || 'Registration failed');
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        toast.success('Logged out successfully');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
