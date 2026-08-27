import {
    AuthState,
    LoginCredentials,
    SignUpCredentials,
    User,
} from "@/types/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<User>) => Promise<void>;
}

const STORAGE_KEY = "@smartlearn_session_user";
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStoredSession() {
      try {
        const storedUser = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to load local auth session:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadStoredSession();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const mockUser: User = {
      id: "usr_default",
      name: credentials.email.split("@")[0] || "Max",
      email: credentials.email.trim().toLowerCase(),
    };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const signUp = async (credentials: SignUpCredentials) => {
    const mockUser: User = {
      id: `usr_${Date.now()}`,
      name: credentials.name.trim(),
      email: credentials.email.trim().toLowerCase(),
    };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const updateUser = async (updates: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...updates };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: user !== null,
        login,
        signUp,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
