import React, { Component, useState } from 'react';
import Register from './views/register'
import Login from './views/login'
import Researchport from './views/faculty/regprot'
import Academicport from './views/faculty/acdport'
import Course from './views/faculty/coursefold'
import {Route, Switch} from 'react-router-dom'

function App() {
    return (
        <Switch>
            <Route path="/fac_research" component={Researchport}/>
            <Route path="/fac_acad" component={Academicport}/>
            <Route path="/fac_course" component={Course}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Login}/>
        </Switch>
    )
}

export default App