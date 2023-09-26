import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
  authState: { token: string | null; authenticated: boolean | null };
  onRegister: (email: string, password: string) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
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

  const register = async (email: string, password: string) => {
    try {
      return await axios.post(
        "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api/register",
        {
          email,
          password,
          userName: "test",
          isOrganization: false,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(
        "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api/login",
        {
          email,
          password,
        }
      );
      //console.log(JSON.stringify(result));
      const cookie = result.headers["set-cookie"][0];
      const token = cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("token="))
        ?.split("=")[1];
      setAuthState({
        token: token || null,
        authenticated: true,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await SecureStore.setItemAsync("token", token || "");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
    });
    console.log("logout");
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};