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
        mainImageSet: false,
      }
    };
  }

  addProjMainImage = (projName) => {
    return (
      this.setState({ projectNamed: true})
    )
  }
  render() {
    var viewAddProjectMain = (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.addProjMainImage(this.state.projects.projName);
      }}>
        <div>
          <input
            placeholder="*required"
            onChange={(e) => {
              const project = {projName: e.target.value};
              this.setState({
                projects: Object.assign(this.state.projects,project)
              })
            }}
          />
        </div>
        <button>Create new project</button>
      </form>
    </div>
    );

    var viewAddProjectImages = "";
    if(!this.state.projectNamed) {
        viewAddProjectImages = <div></div>
      } else {
        if(!this.state.mainImageSet) {
          viewAddProjectImages =
            <AddImages
              project={this.state.projects.projName}
              message={'Add a main project image'}
              />
        }
        
      }


    return (
      <div>
        <div>
          <button
            className="backButton"
            onClick={this.props.toggleShow}>back
          </button>
          <h1>Create New Project</h1>
          {viewAddProjectMain}
          {viewAddProjectImages}
        </div>
      </div>
    )
  }
}

export default CreateNewProject;
