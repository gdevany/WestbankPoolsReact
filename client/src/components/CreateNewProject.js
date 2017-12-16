import React from "react";
import AddImages from './AddImages';

class CreateNewProject extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: {
        projName: "",
        projImages: [],
        projectNamed: false,
        secBoxClicked: false,
        pword: '',
        loggedIn: false,
      }
    };
  }

  projectNameAdded = () => {
    return (
      this.setState({ projectNamed: true})
    )
  }

  checkAuth = (e) => {
    if(this.state.pword.length > 10) {
      this.setState({loggedIn: true, secBoxClicked: false});
    } else {
      alert('You shouldnt be here');
      this.setState({secBoxClicked: false});
      this.logOut();
      this.props.setPage('projects');
    }
  }

  logOut = () => {
    this.setState({loggedIn: false})
  }

  render() {
    // SIGN IN
    // ONLY SHOW WHEN secBoxClicked === true
    // Onced secret box clicked, check signIn Auth
    var signIn = "";
    if(!this.state.secBoxClicked) {
      signIn = <div></div>
    } else {
      signIn = (
        <form onSubmit={(e) => {e.preventDefault(); this.checkAuth()}}>
          <div>
            <input onChange={(e) => this.setState({pword:e.target.value})}/>
            <button type="submit">submit</button>
          </div>
        </form>
      )
    }

    // NAME NEW PROJECT
    // ONLY SHOW IF loggedIn === true
    // Input the new project name. When button is pressed, AddImages will open.
    // When project name entered, it will show in red, without input box.
    var addProjectName = "";
    if(!this.state.projectNamed === true && this.state.loggedIn === true) {
      addProjectName = (
        <div>
          <button
            className="backButton padtop3"
            onClick={ () => {
              this.props.setPage('projects');
              this.logOut();
            }}>back
          </button>
          <h1 className="padtop3">Create New Project</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.projectNameAdded();
          }}>
            <div className="padtop3">
              <input
                placeholder="Name  *required*"
                onChange={(e) => {
                  const project = {projName: e.target.value};
                  this.setState({
                    projects: Object.assign(this.state.projects,project)
                  })
                }}
              />
            </div>
            <button>Name the project</button>
          </form>
        </div>
      );
    } else if(this.state.projectNamed === true && this.state.loggedIn === true){
      addProjectName = (
        <div className="fade-bold">{this.state.projects.projName}</div>
      )
    } else addProjectName = <div></div>

    // ADD IMAGES component call
    // ONLY SHOW WHEN this.state.projectNamed === true && loggedIn === true.
    // Show addImageBox IF new project named
    var addImageBox = "";
    if(this.state.projectNamed === true && this.state.loggedIn === true) {
      addImageBox = (
      <div>
        <button
          className="backButton padtop3"
          onClick={ () => {
            this.props.setPage('projects');
            this.logOut();
          }}>click here when done
        </button>
        <AddImages project={this.state.projects.projName} />
      </div>)
      } else {
        addImageBox = <div></div>
      }
    return (
      <div>
        <div className='padtop3'>
          <div
            className="projboxx d-flex float-right"
            onClick={ () => {
              this.setState({secBoxClicked: true});
              this.props.setPage('');
            } }></div>
          <div>{signIn}</div>
          {addProjectName}
          {addImageBox}
        </div>
      </div>
    )
  }
}

export default CreateNewProject;
