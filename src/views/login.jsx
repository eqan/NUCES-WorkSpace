import React, { Component, useState } from "react";
import Axios from "axios";
import Logo from "../assets/Logo.png";
import "./acdport.css";

function App() {
  const [usernameLog, setUserNameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const login = () =>
    Axios.post("http://localhost:3001/login", {
      name: usernameLog,
      password: passwordLog,
    }).then((resp) => {
      console.log(resp);
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
              style={{ left: 360, top: 20 }}
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
                  <br />
                  <div></div>
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
                        setUserNameLog(e.target.value);
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
                        setPasswordLog(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="buttons">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={login}
                      style={{ width: 300, height: 50 }}
                    >
                      Sign in
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
        <br />
      </div>
    </div>
  );
}

export default App;
