import React from 'react'
import './coursefold.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Logo from '../../assets/Logo.png'

function coursefold() {
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
            <div className="panel-heading">Course Folder</div>
    
            <div className="panel-body">
                <ul className="nav nav-tabs doctor">
                        <li role="presentation"><a href="#doctorlist">Document List</a></li>
                        <li role="presentation"><a href="#adddoctor">Add Document</a></li>
                </ul>
               
                   <div id="doctorlist" className="switchgroup">
                       <table className="table table-bordered table-hover">
                       <tr className="active">
                               <td>File Name</td>
                               <td>Options</td>
                       </tr>
                       <tr>
                               <td>123</td>
    
                               <td>
                                <div className='but'>
                                     <button  href="#" className="btn btn-danger" ><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                                </div>
                               </td>
                       </tr>
               
                      </table>
                   </div>  
                   <div id="adddoctor" className="switchgroup">
                       <div className="panel panel-default">
                           <div className="panel-body">
                               <form className="form-horizontal" action="/action_page.php">
    
                                <div className="form-group">
                                    
                                    <div className="col-sm-4">
                                      <div className="c">
                                           <input className="btn btn-primary" type="file"  id="myFile" name="filename"/>
                                        </div>
    
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="b">
        
                                    <button type="submit" className="btn btn-primary" >upload</button>
                                   </div>
                                 </div>
    
                            </form>
                        </div>
                        </div>
                    </div>
        </div>
    </div>
            </div>
        </div>
    )
}

export default coursefold
