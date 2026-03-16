import { GlobalStyles } from "./components/styles/GlobalStyles";
import Navbar from "./components/nav-bar/NavBar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import About from "./components/about-page/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { useWebViewMessageListener } from "./components/hooks/useWebViewMessageListener";

const App: React.FC = () => {
  const receivedData = useWebViewMessageListener();

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />

      {/* Floating popup for native response */}
      {receivedData && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#0a192f",
            color: "white",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            maxWidth: "300px",
            zIndex: 9999,
          }}
        >
          <strong>Message from Native:</strong>
          <pre style={{ margin: 0, fontSize: "0.9rem" }}>
            {typeof receivedData === "string"
              ? receivedData
              : JSON.stringify(receivedData, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};
 export default App;