import React from "react";
import "./westbankstyle.css";
import Logo from "./containers/LogoContainer";
import Headings from "./containers/HeadingsContainer";
import Process from "./containers/ProcessContainer";
import Faqs from "./containers/FaqsContainer";
import AboutUs from "./containers/AboutUsContainer";
import Contact from "./containers/ContactContainer";
import Footer from "./components/Footer";
import CreateNewProject from "./containers/CreateNewProjectContainer";
import LoadProjects from "./containers/LoadProjectsContainer";
import LandingPage from "./containers/LandingPageContainer";

// compoonentWillMount() {
//
// }

function App() {
  return (
    <div className="App currentfont padbottom2">
      <Logo />
      <Headings />
      <LandingPage />
      <LoadProjects />
      <Process />
      <Faqs />
      <AboutUs />
      <Contact />
      <CreateNewProject />
      <Footer />
    </div>
  );
}

export default App;
