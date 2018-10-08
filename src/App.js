import React from "react";
import Logo from "./containers/LogoContainer";
import Headings from "./containers/HeadingsContainer";
import PageContact from "./containers/PageContactContainer";
import Footer from "./components/Footer";
import PageCreateNewProject from "./containers/PageCreateNewProjectContainer";
import PageHome from "./containers/PageHomeContainer";
import PageSearch from "./containers/PageSearchContainer";

// import LandingPage from "./containers/LandingPageContainer";

// compoonentWillMount() {
//
// }

function App() {
  return (
    <div className="currentfont padbottom2">
      <Logo />
      <Headings />
      {/* <LandingPage /> */}
      <PageHome />
      <PageSearch />
      <PageContact />
      <PageCreateNewProject />
      <Footer />
    </div>
  );
}

export default App;
