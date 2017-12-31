import {connect} from 'react-redux';
import {setProjectChosen, setViewerList} from '../actions';
import LoadProjects from '../components/LoadProjects';


function mapStateToProps(state) {
  return {
    projects: state.projects,
    images: state.images,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProjChosen: (proj) => {
      dispatch(setProjectChosen(proj))
    },
    setViewerList: (l) => {
      dispatch(setViewerList(l))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadProjects);
