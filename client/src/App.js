import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchBar from "./Components/SearchBar/SearchBar";

// apollo client with required uri
const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchBar />
    </ApolloProvider>
  );
}

export default App;
