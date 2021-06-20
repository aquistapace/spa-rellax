import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme/defaultTheme";
import GlobalStyles from "./styles/GlobalStyles";
import OurPhilosophy from "./pages/OurPhilosophy";
import OurServices from "./pages/OurServices";
import Newsletter from "./pages/Newsletter";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home id="home" />
      <OurPhilosophy id="about-us" />
      <Testimonials />
      <OurServices id="services" />
      <Newsletter />
      <ContactUs id="contact" />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
