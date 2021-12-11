import './registration.css';
import React, { useState } from 'react';
import registerController from '../../controller/register-controller';

const Registration=()=>{
    const [userregistrationdata,setUserRegistrationData] = useState({
        firstname:"",
        lastname:"",
        mobileno:"",
        email:"",
        password:""
    });
    const handleinput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistrationData({...userregistrationdata,[name]:value})
    }
    const validate_number=()=>
    {
        
    }
    const validate_email=()=>
    {
        
    }
    const cal_passrange=()=>
    {
        
    }
	const runQuery=()=>{
		registerController.addNewUser(userregistrationdata.firstname,userregistrationdata.lastname,
			userregistrationdata.mobileno,userregistrationdata.email,userregistrationdata.password);
	}
    return (
        <div className="makemeworkatcenter">
			<form>
				<div className="centerblock">
					<div>
						<h1 align= "center" className="heading">Welcome Admin!</h1>
						<p align= "center">Registration</p>
					</div>
                    <div className="Centeredform">
                        <div className="splitinput">
					     	<div className= "splitinput1">
					     		<input type="text" onChange={handleinput} value={'M Shahrose'} name="firstname" id="firstname" placeholder="First name"/>
					    	</div>
					    	<div className= "splitinput2">
					     		<input type="text" onChange={handleinput} value={'Khan'} name="lastname" id="lastname" placeholder="Last name"/>
					    	</div>
					    </div>
					    <div className="otherinputs">
					     	<input onChange={handleinput} value={'03004475205'} type="text" onBlur={validate_number} name="mobileno" id="mobileno" placeholder="Phone number" className="Remaining"/>
				    	</div>
					    <div className="otherinputs">
				     		<input onChange={handleinput} value={'shahrosekhan@nu.edu.pk'}type="text" onBlur={validate_email} name="email" id="email" placeholder="Email" className="Remaining"/>
				    	</div>
				    	<div className="otherinputs">
					     		<input onChange={handleinput} value={'sk1234'} type="password" onKeyUp={cal_passrange} name="password" id="password" placeholder="Password Here..." className="Remaining"/>
				    	</div>
				    	<div style={{height:1, marginTop:'auto', marginBottom:'auto'}}>
				    		<button type="button" onClick={runQuery} name="button" >Create account</button>
				    	</div>
				    	<div style={{float:'right'}}>
					    	<p>
					    		<span className="passrange" style={{backgroundColor:'gray', color:'black', margin:0, paddingRight:1, paddingLeft:2}}>
					    			low
					    		</span>
					    		<span className="passrange" style={{backgroundColor:'gray', color:'black', margin:0, paddingRight:1, paddingLeft:2}}>
					    			medium
					    		</span>
				    			<span className="passrange" style={{backgroundColor:'gray', color:'black', margin:0, paddingRight:1, paddingLeft:2}}>
				    				strong
					    		</span>
					    	</p>
					    </div>
                    </div>
				</div>
			</form>
		</div>
    )
};
export default Registration;