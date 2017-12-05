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
    </div>
  )
}

export default App;
