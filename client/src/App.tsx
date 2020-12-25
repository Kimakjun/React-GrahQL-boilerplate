import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'emotion-theming';
import Main from '@routes/Main';
import Global from '@theme/global';
import theme from '@theme/.';
import client from './apollo';
import '@theme/antd.less';

const App: FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
