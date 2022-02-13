import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchBar from "./Components/SearchBar/SearchBar";
import JobDetail from "./Components/JobDetail/JobDetail";

// apollo client with required uri
const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/detail/:id" element={<JobDetail />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
