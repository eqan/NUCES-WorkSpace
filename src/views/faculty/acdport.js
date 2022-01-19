import React from 'react'
import './acdport.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Logo from '../../assets/Logo.png'

function acdport() {
    return (
        <div className="container-fluid">
            <div className="row header">

                <div className="col-md-10">
                    <img className="logo" src={Logo} width="90px" height="90px"/>
                    <h2 >NUCES WORKSPACE</h2>
                </div>

                <div className="col-md-2 ">
                    <ul className="nav nav-pills ">
                        <li className="dropdown dmenu">
                            <a href="#." className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Faculty<span className="caret"></span></a>
                            <ul className="dropdown-menu ">
                                <li><a href="/fac_acad">Change Profile</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="index.html.">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 menucontent">

                    <a href="#"><h1>Dashboard</h1></a>

                    <ul className="nav nav-pills nav-stacked">
                        <li role="presentation"><a href="/fac_research">Research Portfolio</a></li>
                        <li role="presentation"><a href="/fac_acad">Academic Portfolio</a></li>
                        <li role="presentation"><a href="/fac_course">Course Folder</a></li>
                    </ul>
                </div>
                <div className="col-md-10 maincontent" >
                    <div className="panel panel-default contentinside">
                        <div className="panel-heading">Manage Profile</div>
                        <div className="panel-body">
                            <form className="form-horizontal" action="#">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" name="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Address</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name="address" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Phone</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone No." />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="b">
                                            <button type="submit" className="btn btn-primary">Update Profile</button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="panel panel-default contentinside">
                        <div className="panel-heading">Change Password</div>
                        <div className="panel-body">
                            <form className="form-horizontal" action="#">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" name="password" placeholder="Current Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">New Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" name="newpwd" placeholder="Enter New Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Confirm New Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" name="conpwd" placeholder="Confirm New Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="b">
                                            <button type="submit" className="btn btn-primary">Update Password</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default acdport
