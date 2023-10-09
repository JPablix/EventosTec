// Imports
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { authRoutes } from "../api/routes/routes";
interface AuthProps {
  authState: { token: string | null; authenticated: boolean | null };
  onRegister: (
    email: string,
    password: string,
    userName: string,
    isOrganization: boolean
  ) => Promise<boolean>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const { loginRoute, logoutRoute, registerRoute } = authRoutes;
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      console.log("token is:", token);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const onRegister = async ( 
    email: string,
    password: string,
    userName: string,
    isOrganization: boolean
  ) => {
    try {
      const result = await axios.post(registerRoute,{
          email,
          password,
          userName,
          isOrganization,
        }
      );
    } catch (error: any) {
      console.log(error);
      return false;
    }
  };

  const onLogin = async (email: string, password: string) => {
    try {
      const result = await axios.post(loginRoute,{
          email,
          password,
        }
      );
      const cookie = result.headers["set-cookie"]?.[0] ?? "";
      const token = cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("token="))
        ?.split("=")[1];
      setAuthState({
        token: token || null,
        authenticated: true,
      });
      await SecureStore.setItemAsync("token", token || "");
      return result;
    } catch (error: any) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    await axios.post(logoutRoute, {});
    await SecureStore.deleteItemAsync("token");
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister,
    onLogin,
    onLogout,
    authState,
  };
  return (
  <AuthContext.Provider value={value as AuthProps}>
    {children}
  </AuthContext.Provider>
  );
};