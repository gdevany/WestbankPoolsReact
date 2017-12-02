import {connect} from 'react-redux';
import Headings from '../components/Headings';
import {setPageSelect} from '../actions';


function mapStateToProps(state) {
  return{
    pages: state.pages,
    pageSelected: state.pageSelected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: (page) => {
      dispatch(setPageSelect(page))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Headings);
