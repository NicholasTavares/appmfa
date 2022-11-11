import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TokenProps = {
  accessToken: string;
};

type AppContextProps = {
  auth: TokenProps | null;
  setAuth: Dispatch<SetStateAction<TokenProps | null>>;
  jwt: string | false;
  setJwt: Dispatch<SetStateAction<string | false>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AppContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<TokenProps | null>(null);
  const [jwt, setJwt] = useState<string | false>(
    localStorage.getItem("jwt") || false
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, jwt, setJwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
