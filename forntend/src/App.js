import React from 'react'
import{Route, Switch} from 'react-router-dom'
import Researchport from './Components/faculty/regprot'
import Academicport from './Components/faculty/acdport'
import Course from './Components/faculty/coursefold'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/fac_research" component={Researchport}/>
        <Route path="/fac_acad" component={Academicport}/>
        <Route path="/fac_course" component={Course}/>
      </Switch>
    </div>
  )
}

export default App

