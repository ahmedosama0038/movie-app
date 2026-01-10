import "../Signup/Signup.css";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import FormInput from "../Ui/FormInput/FormInput";
import ErrorMessage from "../Error/ErrorMessage";
import { useState } from 'react';

const validPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

const signinSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      validPassword,
      "Password must be at least 8 characters, include uppercase, lowercase, number and symbol"
    ),
});

export default function Login() {
  
const [ApiErrLogin, setApiErrLogin] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,

    onSubmit: handalSubmit,
  });
  console.log(formik);

  const navigate = useNavigate();
  async function handalSubmit(values) {
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      console.log("Response:", res.data);
      if (res.data.message === "success") {
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log("Error:", error.response?.data);
      setApiErrLogin(error.response?.data?.message)
    }
  }

  return (
    <div className="signup-page">
      <div className="container signup-container">
        <div className="signup-box">
          <div className="signup-header">
            <h1 className="signup-title">
              <i className="bi bi-person-fill me-2"></i>Welcome Back
            </h1>
            <p className="signup-subtitle">Sign in to your Move App account</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="signup-form">
            {/* Email Input */}

            <FormInput
              label={"Email Address"}
              startIcon={"bi bi-envelope me-2"}
              type={"email"}
              placeholder={"Enter your email"}
              value={formik.values.email}
              touched={formik.touched.email}
              errors={formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name={"email"}
              id={"email"}
            />

            {/* Password */}

            <FormInput
              label="Password"
              startIcon="bi bi-lock me-2"
              type="password"
              placeholder="Create a strong password"
              value={formik.values.password}
              touched={formik.touched.password}
              errors={formik.errors.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              id="password"
            />

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
            <button
              type="submit"
              disabled={
                !(formik.isValid && formik.dirty) || formik.isSubmitting
              }
              className="btn signup-btn w-100 mb-3"
            >
              {formik.isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle me-2"></i>
                  Sign In
                </>
              )}
            </button>
          { ApiErrLogin&& <ErrorMessage message={ApiErrLogin}/>}
            <p className="text-center signup-footer">
              Don't have an account?{" "}
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
