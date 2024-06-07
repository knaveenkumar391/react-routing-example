import React, { useState } from "react";
import "../Components/registrationpage.css";
import { GrLinkNext } from "react-icons/gr";

function Registrationpage(props) {
  //const {navigateFunc}=props;
 const [passErrorMsg,setPassErrorMsg]=useState('');
 const [registrationError,setRegistrationError] = useState({
  message:'',
  status:false
 });
  const [regFields,setRegFields]=useState(
    {
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      confirmPassword:''
    }
  )

const submitRegister = () => {
  setPassErrorMsg('')
if(regFields.password === regFields.confirmPassword)
  {
    const postData={
      firstname:regFields.firstname,
      lastname:regFields.lastname,
      username:regFields.username,
      password:regFields.password
    } 
    fetch('http://192.168.0.101:3002/api/user/register',{
      method:'POST',
      body:JSON.stringify(postData),
      headers:{
        'content-Type': 'application/json',
      }
    })
    .then((response)=>response.json())
    .then((response)=>{
      if(response.status === 'ok')
        {
          setRegistrationError({...registrationError, message : `Registration Successful ${response.data.createdAt}`,status:true})
        }
        else if(response.status === 'error'){
          setRegistrationError({...registrationError, message : response.error ,status:false})
        }
    })
    .catch(()=>setRegistrationError({...registrationError, message :'Connection Timed Out',status:false}))
  
  }else{
    setPassErrorMsg('Password Didn\'t Match')
  }

}
const regBtnDesabled=()=>{
  if(regFields.firstname!=='' && regFields.lastname!==''&& regFields.password!=='' && regFields.confirmPassword!=='' && regFields.username!=='')
    {
      return false;
    }
    else
    {
      return true;
    }
}

  
  return (
    <div>
      <div className="reg-login-header">
        <h2 style={{ margin: 0 }}>User Registration</h2>
      </div>

      <div className="reg-login-input-area">
        <p className="reg-p-tag-input">First Name</p>
        <input className="reg-input-box-username" type="text" onChange={(e)=>setRegFields({...regFields,firstname:e.target.value})}></input>
        <p className="reg-input-box-error-msg">error</p>
        <p className="reg-p-tag-input">Last Name</p>
        <input className="reg-input-box-username" type="text" onChange={(e)=>setRegFields({...regFields,lastname:e.target.value})}></input>
        <p className="reg-input-box-error-msg">error</p>
        <p className="reg-p-tag-input">New Password</p>
        <input className="reg-input-box-password" type="password" onChange={(e)=>setRegFields({...regFields,password:e.target.value})}/>
        <p className="reg-input-box-error-msg">error</p>
        <p className="reg-p-tag-input">Confirm Password</p>
        <input className="reg-input-box-password" type="password" onChange={(e)=>setRegFields({...regFields,confirmPassword:e.target.value})} />
        <p className="reg-input-box-error-msg">{passErrorMsg}</p>
        <p className="reg-p-tag-input">User Name</p>
        <input className="reg-input-box-username" type="text" onChange={(e)=>setRegFields({...regFields,username:e.target.value})}/>
        <p className="reg-input-box-error-msg">error</p>
        <button className="reg-login-btn" onClick={submitRegister} disabled={regBtnDesabled()}>Register</button>
        {registrationError.message && <p className={`reg-input-box-error-msg reg-error ${registrationError.status?'green':'red'}`}>{registrationError.message}</p>}
        <div className="reg-p-content-sign-up">
          <p style={{margin:0}}>Alredy have an account?</p>
          <p className="reg-sign-up-ptag" onClick={props.navigateFunc}>
            login here..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registrationpage;
