import React from "react";
import './login.css';

function Login(){
    return(
        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="username">First Name</label>
                  <input className="form__input" type="text" id="username" placeholder="Username"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email</label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" className="registerButton" class="btn">Register</button>
          </div>
      </div>      
    );
}
export default Login;