import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './app'
import ContactDetails from './components/contact-details';

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/contacts/:contactId" component={ContactDetails} />
        </Switch>
      </div>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
