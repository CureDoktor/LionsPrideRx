import "@/styles/globals.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../../html-code/css/bootstrap.min.css";
import "../../html-code/css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import "../../html-code/js/script";
// import "../../html-code/js/bootstrap.bundle.min.js";
//import "/styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
