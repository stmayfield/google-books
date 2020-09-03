import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Main'
import NoMatch from './pages/NoMatch'
import NewBookForm from './pages/NewBookForm'



function App() {
  return (

    <Router>
      <>
        <Switch>
          <Route exact path={['/', '/main']}>
            <Main />
          </Route>
          <Route exact path={'/add'}>
            <NewBookForm />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default App;
