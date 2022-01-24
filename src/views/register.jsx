import React, {useState } from "react";
import {Route} from 'react-router-dom';
import Register from '../views/register';
import Axios from "axios";
import Logo from "../assets/Logo.png";
import "./acdport.css";

function App() {
  const [type, setType] = useState("");
  const [usernameReg, setUserNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordReg2, setPasswordReg2] = useState("");

  const register = () =>
    Axios.post("http://localhost:3001/register", {
      type: type,
      name: usernameReg,
      email: emailReg,
      password: passwordReg,
      password2: passwordReg2,
    }).then((resp) => {
    });

  return (
    <div>
      <div className="container-fluid">
        <div className="row navbar-fixed-top">
          <nav className="navbar navbar-default header">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand logo" href="#"></a>
                <div className="navbar-text title">
                  <img className="logo" src={Logo} width="90px" height="90px" />
                  <h2>NUCES WORKSPACE</h2>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div
              className="panel panel-default login"
              id="main"
              style={{ height: 500, left: 360, top: 20 }}
            >
              <div className="panel-heading logintitle" id="sign">
                Welcome to NUCES
              </div>

              <div className="panel-body">
                <div
                  className="form-horizontal center-block"
                  role="form"
                  action="Admin1.html"
                  method="post"
                >
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <span
                        className="glyphicon glyphicon-user"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <select className="form-control"
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                    >
                      <option selected="selected" name="userrole">Select User</option>
                      <option value="Admin">Admin</option>
                      <option value="Faculty">Faculty Member</option>
                      <option value="QEC">QEC</option>
                    </select>
                  </div>
                  <br />
                  <div></div>
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <span
                        className="glyphicon glyphicon-user"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="User Name"
                      required
                      aria-describedby="sizing-addon1"
                      onChange={(e) => {
                        setUserNameReg(e.target.value);
                      }}
                    />
                  </div>

                  <br />
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <span
                        className="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                      aria-describedby="sizing-addon1"
                      onChange={(e) => {
                        setEmailReg(e.target.value);
                      }}
                    />
                  </div>

                  <br />
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <span
                        className="glyphicon glyphicon-lock"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      aria-describedby="sizing-addon1"
                      onChange={(e) => {
                        setPasswordReg(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                      <span
                        className="glyphicon glyphicon-lock"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      aria-describedby="sizing-addon1"
                      onChange={(e) => {
                        setPasswordReg2(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="buttons">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: 300, height: 50 }}
                      onClick={register}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <br />
      </div>
    </div>
  );
}

export default App;
