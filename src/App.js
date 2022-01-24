import React from 'react';
import Register from './views/register'
import Login from './views/login'
import Researchport from './views/faculty/regprot'
import Academicport from './views/faculty/acdport'
import Course from './views/faculty/coursefold'
import { Routes, Route} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route exact path="/faculty/research" element={<Researchport/>}/>
            <Route exact path="/faculty/academic" element={<Academicport/>}/>
            <Route exact path="/faculty/course" element={<Course/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App