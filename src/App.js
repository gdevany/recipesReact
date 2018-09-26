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
// This is manifest.json original (changed src)
// {
//   "short_name": "React App",
//   "name": "Create React App Sample",
//   "icons": [
//     {
//       "src": "WPlogo.png",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     }
//   ],
//   "start_url": "./index.html",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }
