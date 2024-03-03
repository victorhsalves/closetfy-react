import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'https://ca7-backend-production.up.railway.app/graphql'
});

const api = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default api;
