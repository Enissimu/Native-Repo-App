import { useContext, createContext } from "react";

const AuthContext = createContext();

export const useAuthorization = () => {
  return useContext(AuthContext);
};
export default AuthContext;
