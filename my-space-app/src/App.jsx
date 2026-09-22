import './App.css'
import React from "react";
import Header from "./Header";
import Services from './Services';
import Section from './Sections';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
function App() {

  React.useEffect(() => {

    AOS.init(
      {
        duration: 1200,
        easing: "ease-in-out",
      }
    );
  }
  )
  return (
    <>
      <Header></Header>
      <Services></Services>
      <Section></Section>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </>
  );
}
export default App