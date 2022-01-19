import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Register from './views/register'
import Login from './views/login'
import Researchport from './views/faculty/regprot'
import Academicport from './views/faculty/acdport'
import Course from './views/faculty/coursefold'
import {Route, Switch} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/fac_research" component={Researchport}/>
            <Route path="/fac_acad" component={Academicport}/>
            <Route path="/fac_course" component={Course}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Login}/>
        </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);