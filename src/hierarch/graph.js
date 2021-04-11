import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory"
import { WebSocketLink } from "apollo-link-ws"
import { createHttpLink } from "apollo-link-http"
import { getMainDefinition } from "apollo-utilities"
import { setContext } from "apollo-link-context"
import { split } from "apollo-link"

var hasura_address = process.env.REACT_APP_URL_HASURA
  || "assemble-public.herokuapp.com/v1/graphql"
var hasura_passcode = process.env.REACT_APP_HASURA_PASSCODE

const wsLink = new WebSocketLink({
  uri: `ws://${hasura_address}`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-access-key": hasura_passcode,
      }
    }
  },

})

const httpLink = createHttpLink({
  uri: `https://${hasura_address}`
})

const authLink = setContext((_, { headers }) => (
  { headers: {
    ...headers,
      "x-hasura-access-key": hasura_passcode,
  } }
))

const link = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
)

const graph = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
})

export default graph
