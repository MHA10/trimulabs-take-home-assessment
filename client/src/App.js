import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Jobs from "./Components/Jobs/Jobs";

// apollo client with required uri
const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Jobs />
    </ApolloProvider>
  );
}

export default App;
