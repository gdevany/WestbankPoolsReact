import {connect} from 'react-redux';
import ProjectInd from '../components/ProjectInd';

function mapStateToProps(state) {
  var projChosen = "";
  state.projects.map(p => {
    // console.log(p);
    // console.log(`p:${p.projName} state.projectChosen:${state.projectChosen}`);
    if(p.projName === state.projectChosen) {
      projChosen = p;
    }
    return projChosen;
  })

  return {
    projectInfo: projChosen,
    projectChosen: state.projectChosen,
    images: state.images,
  }
}

export default connect(mapStateToProps)(ProjectInd)
