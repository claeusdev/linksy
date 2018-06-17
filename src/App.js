import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './components/Courses'

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
})



const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">React and GraphQL sample application</a>
      </nav>
      <Courses />
    </div>
    
  </ApolloProvider>
)

export default App;
