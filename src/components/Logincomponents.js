import React from "react";
import { useState } from "react";
import "./Logincss.css";
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {Link} from "react-router-dom";

const Logincomponents = () => {

  //yang dibawah ini const untuk setting hide/unhide password
  const [pass, setPass] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleTogglepass = () => {
    if (pass === "password") {
      setPass("text");
      setIcon(eye);
    } else {
      setPass("password");
      setIcon(eyeOff);
    }
  }

  return (
    <div>
      <div class="Loginpage">
        <div class="imgsamping"></div>
        <div class="logoipb"></div>

        <span class="Loginlms">Login LMS</span>
        <span class="Logindesc">Login untuk memulai aktivitas pembelajaran</span>

        <form action="/usersetting">
        <div class="emailadd">
        <input type="text" placeholder="Email Address" class="emailaddbox"></input>
        </div>
        {/* <input type="submit" class="emailaddbox"></input> */}

        <div class="passadd">
        <input type={pass} placeholder="Password" class="passaddbox">
        </input>

        <span class="passeye" onClick={handleTogglepass}>
        <Icon icon={icon} size={20} />
        </span>
        </div>

        <Link to="/" class="passforgot">Forgot Password?</Link>
        

        {/* <a type="submit" href="/usersetting" class="loginbtn">
        <span class="loginbtnbox"></span>
        <span class="loginbtn1">Sign In & Start Studying</span>
        </a> */}

        <input type="submit" placeholder="test" class="test" value="Sign In & Start Studying"></input>

        </form>
    </div>
    </div>
  );
};

export default Logincomponents;
