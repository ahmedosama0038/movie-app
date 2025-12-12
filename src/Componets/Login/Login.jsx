import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {



 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  
  const  navigate =  useNavigate()
  async function handleSubmit(e) {
    e.preventDefault();

    const values = {
     
      email,
      password,
    
      
      
    };

    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      console.log("Response:", res.data);
      if(res.data.message === "success"){
  toast.success("Account created successfully! Redirecting to Home...");
  setTimeout(() => {
    navigate('/')
  }, 3000);
}


    } catch (error) {
      console.log("Error:", error.response?.data);
    
    }
  }



  return (
    <div className="login-page">
      <div className="container login-container">
        <div className="login-box">
          <div className="login-header">
            <h1 className="login-title">
              <i className="bi bi-box-arrow-in-right me-2"></i>Welcome Back
            </h1>
            <p className="login-subtitle">Sign in to your Move App account</p>
          </div>

          <form className="login-form"  onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                <i className="bi bi-envelope me-2"></i>Email Address
              </label>
              <input
                type="email"
                className="form-control login-input"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>
                   setEmail(e.target.value)
                }
              />
            </div>

            {/* Password Input */}
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">
                <i className="bi bi-lock me-2"></i>Password
              </label>
              <input
                type="password"
                className="form-control login-input"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>
                   setPassword(e.target.value)
                }
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <label className="form-check-label login-remember">
                <input type="checkbox" className="form-check-input" />
                <span className="ms-2">Remember me</span>
              </label>
              <a href="#" className="login-forgot">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn login-btn w-100 mb-3">
              <i className="bi bi-box-arrow-in-right me-2"></i>Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-center login-footer">
              Don't have an account?{" "}
              <a href="/signup" className="login-link">
                Create one here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
