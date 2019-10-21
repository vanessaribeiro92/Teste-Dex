import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// Pages
import LoginPage from "./components/loginpage/LoginPage"
import DinamicList from "./components/dinamicpage/DinamicList"
import SignUpPage from './components/siginuppage/SignUpPage'

//Authentification
import { Auth } from "./Auth";

const PrivateRoute = ({render: Component, ...rest})=> (
  <Route {...rest}
         render={(props) => (
             Auth.isAuthenticated ? (<Component {...props} />) : (<Redirect to={{pathname: "/"}}/>)
  )}/>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <PrivateRoute path="/food" render={() => <DinamicList page="foods" title="FOODS" function="getAllFoods"/>} />
            <PrivateRoute path="/people" render={() => <DinamicList page="peoples" title="PEOPLES" function="getAllPeople"/>} />
            <PrivateRoute path="/place" render={() => <DinamicList page="places" title="PLACES" function="getAllPlaces"/>} />
            <Route render={() => <h1>404 Error</h1>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;