import React from "react";
import Logo from "./containers/LogoContainer";
import Headings from "./containers/HeadingsContainer";
import PageContact from "./containers/PageContactContainer";
import Footer from "./components/Footer";
import PageCreateNewProject from "./containers/PageCreateNewProjectContainer";
import PageHome from "./containers/PageHomeContainer";
import PageSearch from "./containers/PageSearchContainer";

// import LandingPage from "./containers/LandingPageContainer";

function App(props) {
  if (props.theme === 'theme-light') {
    console.log('yes')
  }
  return (
    <div className={props.theme}>
      <Logo />
      <Headings />
      {/* <LandingPage /> */}
      <div className="main-container">
      <PageHome />
      <PageSearch />
      <PageContact />
      <PageCreateNewProject />
      <Footer />
      </div>
    </div>
  );
}

export default App;
