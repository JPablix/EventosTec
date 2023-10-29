// Imports
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { authRoutes, userRoutes } from "../api/routes/routes";
import { useErrorOutput } from "./ErrorOutput";
interface AuthProps {
  authState: { token: string | null; authenticated: boolean | null; data: any };
  onRegister: (
    email: string,
    password: string,
    userName: string,
    isOrganization: boolean
  ) => Promise<boolean>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
  onUpdateProfile: () => Promise<void>;
  onGetProfile: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const { handleError } = useErrorOutput();
  const { loginRoute, logoutRoute, registerRoute} = authRoutes;
  const { getProfileRoute } = userRoutes;
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    data: any;
  }>({
    token: null,
    authenticated: null,
    data: null,
  });

  useEffect(() => {
    const setupAxiosHeaders = async () => {
      const storedToken = await SecureStore.getItemAsync("token");
      const data = await SecureStore.getItemAsync("user");
      console.log("token is:", storedToken);
      if (storedToken) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;
        setAuthState({
          token: storedToken,
          authenticated: true,
          data: data ? JSON.parse(data) : null,
        });
      } else {
        delete axios.defaults.headers.common["Authorization"];
        setAuthState({
          token: null,
          authenticated: false,
          data: null,
        });
      }
    };
    setupAxiosHeaders();
    }, []);

  const onRegister = async (
    email: string,
    password: string,
    userName: string,
    isOrganization: boolean
  ) => {
    try {
      const result = await axios.post(registerRoute, {
        email,
        password,
        userName,
        isOrganization,
      });
      
      console.log("En try onRegister",result.data)
      return true;
    } catch (error: any) {
      handleError(error.response.data);
      return false;
    }
  };

  const onLogin = async (email: string, password: string) => {
    try {
      const result = await axios.post(loginRoute, {
        email,
        password,
      });
      const cookie = result.headers["set-cookie"]?.[0] ?? "";
      const token = cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("token="))
        ?.split("=")[1];
      setAuthState({
        token: token || null,
        authenticated: true,
        data: result.data,
      });
      await SecureStore.setItemAsync("token", token || "");
      await SecureStore.setItemAsync("user", JSON.stringify(result.data));
      return result;
    } catch (error: any) {
      handleError(error.response.data);
    }
  };

  const onLogout = async () => {
    await axios.post(logoutRoute, {});
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
      data: null,
    });
  };

  const onUpdateProfile = async () => {
    const profile = await axios.get(getProfileRoute);
    console.log("USUARIO VIEJO", await SecureStore.getItemAsync("user"));
    await SecureStore.setItemAsync("user", JSON.stringify(profile.data));
    console.log("USUARIO NUEVO", await SecureStore.getItemAsync("user"));
    handleError("User data updated");
  }
  
  const onGetProfile = async () => {
    const data = await SecureStore.getItemAsync("user");
    return data ? JSON.parse(data) : null;
  }
  

  const value = {
    onRegister,
    onLogin,  
    onLogout,
    onUpdateProfile,
    onGetProfile,
    authState,
  };
  return (
  <AuthContext.Provider value={value as unknown as AuthProps}>
    {children}
  </AuthContext.Provider>
  );
};