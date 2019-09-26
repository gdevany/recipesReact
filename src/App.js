import React from "react";
import Logo from "./components/Logo";
import Headings from "./components/Headings";
import PageContact from "./components/PageContact";
import Footer from "./components/Footer";
import PageCreateNewProject from "./components/PageCreateNewProject";
import PageHome from "./components/PageHome";
import PageSearch from "./components/PageSearch";
import PageTheme from "./components/PageTheme";
// import Temp from "./components/Temp";

// import LandingPage from "./containers/LandingPageContainer";

function App(props) {
  return (
    <div className="all-themes">
      <Logo />
      <Headings />
      {/* <LandingPage /> */}
      {/* <Temp /> */}
      <div className={props.theme}>
        <PageHome />
        <PageSearch />
        <PageContact />
        <PageCreateNewProject />
        <PageTheme />
        <Footer />
      </div>
    </div>
  );
}

export default App;
