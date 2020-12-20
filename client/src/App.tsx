import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";
import Main from "./routes/Main";

const App: FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
