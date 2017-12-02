import {connect} from 'react-redux';
import Headings from '../components/Headings';


function mapStateToProps(state) {
  return{
    pages: state.pageSelected.pages,
    pageSelected: state.projects.pageSelected
  }
}

export default connect(mapStateToProps)(Headings);
