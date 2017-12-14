import React from "react";
import AddImages from './AddImages';

class CreateNewProject extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: {
        projName: "",
        projImages: []
      }
    };
  }

  addProjMainImage = (projName) => {
    <button
      onClick={() => <AddImages projectName={this.state.projects.projName}/>}
      >Add Project Main Image
    </button>
  }

  render() {

    var viewAddProjectMain = (
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
    );

    var viewAddProjectImages = "";
    if(this.state.projects.projName === '') {
        viewAddProjectImages = <div></div>
      } else {
        viewAddProjectImages = <div>Hi</div>
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
