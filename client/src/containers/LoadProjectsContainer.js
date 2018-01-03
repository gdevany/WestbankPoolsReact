import {connect} from 'react-redux';
import {setProjectChosen} from '../actions';
import LoadProjects from '../components/LoadProjects';


function mapStateToProps(state) {
  return {
    projects: state.projects,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    cloudinaryPojectFile: state.cloudinaryPojectFile,
    projectMainImageTag: state.projectMainImageTag
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProjectChosen: (proj) => {
      dispatch(setProjectChosen(proj))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadProjects);
