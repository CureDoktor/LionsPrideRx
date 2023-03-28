import "../../html-code/css/bootstrap.min.css";
import "../../html-code/css/style.css";
import "../pages/terms/style.scss";
import "@/styles/globals.css";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../pages/login";
import React, { useState, useEffect, useContext } from "react";
import { AuthContextProvider } from "../../store/auth-context";

function MyApp({ Component, pageProps }) {
  const [isLogedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
  };

  const loginChange = () => {
    if (isLogedIn) {
      return (
        <AuthContextProvider>
          <Header logout={logoutHandler} header={isLogedIn} />
          <Component isLoggedIn={loginHandler} {...pageProps} />
          <Footer />
        </AuthContextProvider>
      );
    } else if (
      Component.name == "Account" ||
      Component.name == "VisitForm" ||
      Component.name == "Switch" ||
      Component.name == "Order"
    ) {
      return (
        <AuthContextProvider>
          <Header logout={loginHandler} header={isLogedIn} />
          {/* <Login isLoggedIn={loginHandler} /> */}
          <Login isLoggedIn={loginHandler} />
          {/* <Component isLoggedIn={loginHandler} {...pageProps} /> */}
          <Footer />
        </AuthContextProvider>
      );
    } else {
      return (
        <AuthContextProvider>
          <Header logout={loginHandler} header={isLogedIn} />
          <Component isLoggedIn={loginHandler} {...pageProps} />
          <Footer />
        </AuthContextProvider>
      );
    }
  };
  return loginChange();
}

export default MyApp;
