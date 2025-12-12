import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Home";
    } else if (pathname === "/login") {
      document.title = "Login";
    } else if (pathname === "/signup") {
      document.title = "Signup";
    } else {
      document.title = "Not Found";
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

