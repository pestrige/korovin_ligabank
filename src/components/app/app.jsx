import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
