import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloURI,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: { fields: { repositories: relayStylePagination() } },
    Repository: { fields: { reviews: relayStylePagination() } },
  },
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessTokenObj = await authStorage.getAccessToken();
      const accessToken =
        accessTokenObj.length !== 0
          ? accessTokenObj.authenticate.accessToken
          : null;
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
