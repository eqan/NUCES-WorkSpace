import React from 'react';
import Register from './views/register'
import Login from './views/login'
import Researchport from './views/faculty/regprot'
import Academicport from './views/faculty/acdport'
import Course from './views/faculty/coursefold'
import {Route, Switch} from 'react-router-dom'

function App() {
    return (
        <Switch>
            <Route exact path="/faculty/research" component={Researchport}/>
            <Route exact path="/faculty/academic" component={Academicport}/>
            <Route exact path="/faculty/course" component={Course}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
    )
}

export default App