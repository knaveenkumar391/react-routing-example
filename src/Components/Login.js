import React, { useState } from "react";
import '../Components/login.css'
import glogo from "../Assets/images.png";
import { GoEye } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";

function Login(props) {
const {navigateFunc}=props;

const [data, setData]=useState({});
const  [apiResponseSts, setApiRepsonseSts] = useState({
  message: '',
  status: false,
})

const handleLoginClick =() =>{
// method-1  using async and await of post method
  // const response = await fetch('http://192.168.0.101:3002/api/user/login',
  // {
  //   method:'POST',
  //   headers: {
  //     'content-Type': 'application/json',
  //   },
  //   body:JSON.stringify(data)
  // })
  // const result = await response.json();
  // console.log(result);

// method-2 without async await
setApiRepsonseSts({...apiResponseSts,message: 'Loading...'})
fetch('http://192.168.0.101:3002/api/user/login',
  {
    method:'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((response) => response.json())
  .then((response) => {
    if(response.status === 'error') {
      setApiRepsonseSts({...apiResponseSts,message: response.error, status: false})
    } else if(response.status === 'ok'){
      setApiRepsonseSts({...apiResponseSts,message: 'Login Successful', status: true})
    }
    console.log('Response:',response)
  })
  .catch(err => setApiRepsonseSts({...apiResponseSts,message: 'Error in Connection', status: false}))

}

console.log('apiResponseSts: ', apiResponseSts);
  return (
    <div>
      <div className="login-header">
        <h2 style={{ marginBottom: 0 }}>Welcome Back</h2>
        <p
          style={{
            marginTop: 0,
            fontSize: 12,
            fontWeight: 650,
            opacity: 0.6,
          }}
        >
          Continue with Google or enter your details
        </p>
        <button className="headder-G-btn">
          <img src={glogo} className="g-logo"></img>
          <p className="p-logo">Login with Google</p>
        </button>
      </div>
      <div className="login-input-area">
        <p className="p-tag-input ">UserName</p>
        <input className="input-box-username" type="text" onChange={e=>setData({...data, username : e.target.value})}></input>
        <p className="input-box-error-msg">error</p>
        <p className="p-tag-input">Password</p>
        <input className="input-box-password" type="password" onChange={e=>setData({...data, password : e.target.value})} />
        <p className="input-box-error-msg red">error</p>
        <p className="forgot-pass-p-tag">Forgot password?</p>
        {/* <span class="password-toggle-icon">
          <GoEye size={20} />
        </span> */}
        
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
        {apiResponseSts.message && <p className={`input-box-error-msg login-error ${apiResponseSts.status === true ? 'green': 'red'}`}>{apiResponseSts.message}</p>}
        <div className="p-content-sign-up">
          <p style={{margin:0}}>Dosen't have an account?</p>
          <p className="sign-up-ptag" onClick={navigateFunc}>Sign up</p>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
