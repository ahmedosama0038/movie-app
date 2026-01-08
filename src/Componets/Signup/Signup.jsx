import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup'
const viledpasswrd=  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$ /
const viledPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ /
 const singupSchema = yup.object({
  name: yup.string().required().min(3, ).max(15, ),
  email: yup.string().required().email(),
  password: yup.string().required().matches(viledpasswrd,  ),
  rePassword: yup.string().required().oneOf([yup.ref('password')]),
  phone: yup.string().required().matches(viledPhone)
 })
  
 



export default function Signup() {
    
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [rePassword, setRePassword] = useState("");
  
function  handalSubmit(values) {
  
  console.log(values);
  
}

 const formik =   useFormik({
     initialValues:{
      
      name :'',
      email: '',
      password : '',
      rePassword: '',
      phone : ''

     }, 
     validationSchema: singupSchema,
      
    onSubmit : handalSubmit
  })
console.log(formik);

//   const  navigate =  useNavigate()
//   async function getMovie(e) {
//     e.preventDefault();

//     const values = {
//       name,
//       email,
//       password,
//       rePassword,
//       phone,
//     };

//     try {
//       const res = await axios.post(
//         "https://ecommerce.routemisr.com/api/v1/auth/signup",
//         values
//       );

//       console.log("Response:", res.data);
//       if(res.data.message === "success"){
//   toast.success("Account created successfully!");
//   setTimeout(() => {
//     navigate('/login')
//   }, 3000);
// }


//     } catch (error) {
//       console.log("Error:", error.response?.data);
    
//     }
//   }

  return (
    <div className="signup-page">
      <div className="container signup-container">
        <div className="signup-box">
          <div className="signup-header">
            <h1 className="signup-title">
              <i className="bi bi-person-fill me-2"></i>Join Move App
            </h1>
            <p className="signup-subtitle">
              Create your account and start exploring
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="signup-form">
            {/* Name Input */}
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                <i className="bi bi-person me-2"></i>Full Name
              </label>
              <input
                type="text"
                className="form-control signup-input"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={ formik.values.name}
                onChange={formik.handleChange}
              />
            </div>

            {/* Email Input */}
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                <i className="bi bi-envelope me-2"></i>Email Address
              </label>
              <input
                type="email"
                className="form-control signup-input"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>

            {/* Password */}
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                <i className="bi bi-lock me-2"></i>Password
              </label>
              <input
                type="password"
                className="form-control signup-input"
                id="password"
                name="password"
                placeholder="Create a strong password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-3">
              <label htmlFor="confirm" className="form-label">
                <i className="bi bi-lock-check me-2"></i>Confirm Password
              </label>
              <input
                type="password"
                className="form-control signup-input"
                id="confirm"
                name="rePassword"
                placeholder="Confirm your password"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
              />
            </div>

            {/* Phone */}
            <div className="form-group mb-4">
              <label htmlFor="phone" className="form-label">
                <i className="bi bi-telephone me-2"></i>Phone Number
              </label>
              <input
                type="tel"
                className="form-control signup-input"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>

            <button type="submit" className="btn signup-btn w-100 mb-3">
              <i className="bi bi-check-circle me-2"></i>Create Account
            </button>

            <p className="text-center signup-footer">
              Already have an account?{" "}
              <a href="/login" className="signup-link">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
