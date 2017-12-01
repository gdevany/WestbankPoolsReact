import {connect} from 'react-redux';
import ProjectInd from '../components/ProjectInd';

function mapStateToProps(state) {
  return {
    projectChosen: state.projectChosen,
    images: state.images,
  }
}

export default connect(mapStateToProps)(ProjectInd)
