import './registration.css';
import React from 'react';

const registration=()=>{
    const validate_number=()=>
    {
        
    }
    const validate_email=()=>
    {
        
    }
    const cal_passrange=()=>
    {
        
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
                        <div class="splitinput">
					    	<div class= "splitinput1">
					    		<input type="text" name="Firstname" placeholder="First name"/>
					    	</div>
					    	<div class= "splitinput2">
					    		<input type="text" name="Lastname" placeholder="Last name"/>
					    	</div>
					    </div>
					    <div className="otherinputs">
					    	<input id="number" type="text" onBlur={validate_number} name="mobileno" placeholder="Phone number" className="Remaining"/>
				    	</div>
					    <div className="otherinputs">
				    		<input id="email" type="text" onBlur={validate_email} name="email" placeholder="Email" className="Remaining"/>
				    	</div>
				    	<div className="otherinputs">
					    		<input id="password" type="password" onKeyUp={cal_passrange} name="password" placeholder="Password Here..." className="Remaining"/>
				    	</div>
				    	<div style={{height:1, marginTop:'auto', marginBottom:'auto'}}>
				    		<button type="button" name="button" >Create account</button>
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
export default registration;