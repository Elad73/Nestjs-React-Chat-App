import { ApolloClient, InMemoryCache } from "@apollo/client";
import API_URL from "./urls";

// create a new ApolloClient instance
const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    // cache for the client to store the data
    cache: new InMemoryCache(),
});

export default client;
