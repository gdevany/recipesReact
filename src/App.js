import React from "react";
import Logo from "./components/Logo";
import Headings from "./components/Headings";
import PageContact from "./components/PageContact";
import Footer from "./components/Footer";
import PageCreateNewProject from "./components/PageCreateNewProject";
import PageHome from "./components/PageHome";
import PageSearch from "./components/PageSearch";
import PageTheme from "./components/PageTheme";
import AddToHomescreen from 'react-add-to-homescreen';

// import LandingPage from "./containers/LandingPageContainer";

function App(props) {
  <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
  return (
    <div className="all-themes">
      <Logo />
      <Headings />
      {/* <LandingPage /> */}
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

function handleAddToHomescreenClick() {
  alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
};

export default App;
