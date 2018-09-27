import React from "react";
import "./westbankstyle.css";
import Logo from "./containers/LogoContainer";
import Headings from "./containers/HeadingsContainer";
import Process from "./containers/ProcessContainer";
import AboutUs from "./containers/AboutUsContainer";
import PageContact from "./containers/PageContactContainer";
import Footer from "./components/Footer";
import PageCreateNewProject from "./containers/PageCreateNewProjectContainer";
import PageHome from "./containers/PageHomeContainer";
// import LandingPage from "./containers/LandingPageContainer";

// compoonentWillMount() {
//
// }

function App() {
  return (
    <div className="App currentfont padbottom2">
      <Logo />
      <Headings />
      {/* <LandingPage /> */}
      <PageHome />
      <Process />
      <AboutUs />
      <PageContact />
      <PageCreateNewProject />
      <Footer />
    </div>
  );
}

export default App;
