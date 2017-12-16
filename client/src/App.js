import React from 'react';
import './westbankstyle.css';
import AppSign from './containers/AppSignContainer';
import Logo from './components/Logo';
import Headings from './containers/HeadingsContainer';
import Projects from './containers/ProjectsContainer';
import Process from './containers/ProcessContainer';
import Faqs from './containers/FaqsContainer';
import AboutUs from './containers/AboutUsContainer';
import Contact from './containers/ContactContainer';
import Footer from './components/Footer';
// import AddImages from './components/AddImages';
import CreateNewProject from './containers/CreateNewProjectContainer';
// const clKey = 934548452896616;

// compoonentWillMount() {
//
// }

function App() {
  return (
    <div className="App currentfont padbottom2">
      <AppSign />
      <Logo />
      <Headings />
      <Projects />
      <Process />
      <Faqs />
      <AboutUs />
      <Contact />
      <Footer />
      <CreateNewProject />
    </div>
  )
}

export default App;
