import {connect} from 'react-redux';
import Process from '../components/ProcessContainer';


function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,
    
  }
}
