import "../../html-code/css/bootstrap.min.css";
import "../pages/terms/style.scss";
import "../../styles/style.scss";
//import ErrorModal from "../../components/ErrorModal";
import Footer from "../../components/Footer";
import Head from "next/head";
import Header from "../../components/Header";
import dynamic from "next/dynamic";
import Login from "../pages/login";
import React, { useState, useEffect, useContext } from "react";
import { AuthContextProvider } from "../../store/auth-context";
import { Poppins, Short_Stack } from "next/font/google";
const ErrorModal = dynamic(() => import("../../components/ErrorModal"), {
  ssr: false,
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const shortStack = Short_Stack({
  weight: ["400"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState({
    show: true,
    title: "Ovo je Title Cure",
    message: "Ovo je porukica malenica",
  });
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

  const onSubmitModal = () => {
    setError({
      show: false,
    });
  };

  const loginChange = () => {
    if (isLogedIn) {
      return (
        <AuthContextProvider>
          <Head>
            <title>Lions Pride Rx</title>

            <link rel="icon" href="/logo.ico" />
          </Head>
          {error.show && (
            <ErrorModal
              title={error.title}
              onSubmit={onSubmitModal}
              message={error.message}
            />
          )}
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
          <Head>
            <title>Lions Pride Rx</title>
            <link rel="icon" href="/logo.ico" />
          </Head>
          {error.show && (
            <ErrorModal
              title={error.title}
              onSubmit={onSubmitModal}
              message={error.message}
            />
          )}
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
          <Head>
            <title>Lions Pride Rx</title>
            <link rel="icon" href="/logo.ico" />
          </Head>
          {error.show && (
            <ErrorModal
              title={error.title}
              onSubmit={onSubmitModal}
              message={error.message}
            />
          )}
          <Header logout={loginHandler} header={isLogedIn} />
          <Component isLoggedIn={loginHandler} {...pageProps} />
          <Footer />
        </AuthContextProvider>
      );
    }
  };
  return (
    <>
      <style jsx global>{`
        :root {
          --short-stack: ${shortStack.style.fontFamily};
        }

        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      {loginChange()}
    </>
  );
}

export default MyApp;
