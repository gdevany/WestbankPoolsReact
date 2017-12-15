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
      }
    };
  }

  projectNameAdded = () => {
    return (
      this.setState({ projectNamed: true})
    )
  }
  render() {
    // Input the new project name. When button is pressed, AddImages will open.
    var addProjectName = (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.projectNameAdded();
      }}>
        <div>
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

    var addImageBox = "";

    if(!this.state.projectNamed) {
        addImageBox = <div></div>
      } else {
        addImageBox =
          <AddImages
            project={this.state.projects.projName}
            />;
      }

    return (
      <div>
        <div className='padtop3'>
          <button
            className="backButton"
            onClick={this.props.toggleShow}>back
          </button>
          <h1>Create New Project</h1>
          {addProjectName}
          {addImageBox}
        </div>
      </div>
    )
  }
}

export default CreateNewProject;
