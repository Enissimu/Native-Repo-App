import { NativeRouter } from "react-router-native";
import Main from "./src/Main";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/createClient";
import AuthStorage from "./src/utils/authStorage";
import AuthContext from "./src/hooks/useAutharization";
import { useEffect } from "react";

const newAuth = new AuthStorage("currentUser");
const apolloCliento = createApolloClient(newAuth);

const App = () => {
  useEffect(() => {
    newAuth.removeAccessToken();
  }, []);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloCliento}>
          <AuthContext.Provider value={newAuth}>
            <Main />
          </AuthContext.Provider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style="auto"> </StatusBar>
    </>
  );
};

export default App;
