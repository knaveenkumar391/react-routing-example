import React, { useState } from "react";
import "../Components/initialpage.css";
import Loginpage from '../Components/Login'
import RegPage from '../Components/Registrationpage'
import logo from "../Assets/login_image_login.png";


function Login() {
const [isLogin,setIsLogin]=useState(true);

const navigatePage = () => {
  setIsLogin(!isLogin);
}

// const navigateLoginPage = () => {
//   // setIsLogin(true);
//   setIsLogin(!isLogin);
// }

// const navigateRegisterPage = () => {
//   // setIsLogin(false);
//   setIsLogin(!isLogin);
// }

  return (
    <div className="login-background-mainDiv">
      <div className="login-boxDiv">
        <div className="left-part-login">
          <div className="left-part-content">
            <h2 className="left-part-headding">Tickted...</h2>
            <p className="left-part-subContent">
              Purchase your own ticket,
              <br />
              Select the date and time,
              <br />
              Pay through the application,
              <br />
              And enjoy your holiday!
              <br />
              <hr
                style={{
                  width: 150,
                  marginTop: 8,
                  marginLeft: 0,
                  marginBottom: 0,
                  color: "black",
                }}
              />
            </p>
          </div>
          <div style={{ width: "100%", height: "280px" }}>
            <img
              src={logo}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0px 0px 20px 20px",
              }}
            />
          </div>
        </div>
        <div className="right-part-login">
         {
          isLogin?<Loginpage navigateFunc={navigatePage}/>:<RegPage navigateFunc={navigatePage}/>
         } 
        </div>
      </div>
    </div>
  );
}

export default Login;
