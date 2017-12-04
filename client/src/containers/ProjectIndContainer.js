import {connect} from 'react-redux';
import ProjectInd from '../components/ProjectInd';
import {setProjectChosen, setViewerList} from '../actions';

function mapStateToProps(state) {
  var projChosen = "";
  state.projects.map(p => {
    if(p.projName === state.projectChosen) {
      projChosen = p;
    }
    return projChosen;
  })

  return {
    projectInfo: projChosen,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    images: state.images,
    viewerList: state.viewerList
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

export default connect(mapStateToProps,mapDispatchToProps)(ProjectInd)
