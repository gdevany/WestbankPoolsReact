import React from 'react';
import './westbankstyle.css';
import AppSign from './containers/AppSignContainer';
import Logo from './components/Logo';
import Headings from './components/Headings';
import Projects from './containers/ProjectsContainer';

// compoonentWillMount() {
//   loadSubjects();
//   loadSubtopics();
//
// }

function App() {
  return (
    <div className="App currentfont">
      <AppSign />
      <Logo />
      <Headings />
      <Projects />
    </div>
  )
}

export default App;
