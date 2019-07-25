import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';

import routes from '../../routes';
import Header from "../header";
import DefaultFooter from "../footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
          <Switch>
        {
            routes.map(route=> {
                return(
                    <Route exact path={route.path} component={route.component} />
                )
            })
        }
        <Redirect to="/home"/>
          </Switch>
      </Container>
        <DefaultFooter/>
    </div>
  );
}

export default App;
