import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import FormInput from "../Ui/FormInput/FormInput";
import ErrorMessage from "../Error/ErrorMessage";

const validPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

const validPhone = /^[+]?[0-9]{10,15}$/;

const signupSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be less than 15 characters"),

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

  rePassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(validPhone, "Invalid phone number"),
});

export default function Signup() {
  const [ApiErr, setApiErr] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: signupSchema,

    onSubmit: handalSubmit,
  });
  console.log(formik);

  const navigate = useNavigate();
  async function handalSubmit(values) {
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      console.log("Response:", res.data);
      if (res.data.message === "success") {
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.log("Error:", error.response?.data);
      setApiErr(error.response.data.error)
    }
  }

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

            <FormInput
              label={"Full Name"}
              startIcon={"bi bi-person me-2"}
              type={"text"}
              placeholder={"Enter your full name"}
              value={formik.values.name}
              touched={formik.touched.name}
              errors={formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name={"name"}
              id={"name"}
            />

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

            {/* Confirm Password */}

            <FormInput
              label={"Confirm Password"}
              startIcon={"bi bi-lock me-2"}
              type={"Password"}
              placeholder={"Confirm your password"}
              value={formik.values.rePassword}
              touched={formik.touched.rePassword}
              errors={formik.errors.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name={"rePassword"}
              id={"confirm"}
            />

            {/* Phone */}

            <FormInput
              label={"Phone Number"}
              startIcon={"bi bi-telephone me-2"}
              type={"tel"}
              placeholder={"Enter your phone number"}
              value={formik.values.phone}
              touched={formik.touched.phone}
              errors={formik.errors.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name={"phone"}
              id={"phone"}
            />
{  ApiErr&& <ErrorMessage message={ApiErr}/>}
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
                  Create Account
                </>
              )}
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
