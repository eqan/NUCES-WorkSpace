import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import{Route, Switch} from 'react-router-dom'
import Researchport from './Components/faculty/regprot'
import Academicport from './Components/faculty/acdport'
import Course from './Components/faculty/coursefold'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
        <Route path="/fac_research" component={Researchport}/>
        <Route path="/fac_acad" component={Academicport}/>
        <Route path="/fac_course" component={Course}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
