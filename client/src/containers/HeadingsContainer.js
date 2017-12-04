import {connect} from 'react-redux';
import Headings from '../components/Headings';
import {setPageSelect, setProjectChosen, setViewerList} from '../actions';


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
    },
    setProjChosen: (proj) => {
      dispatch(setProjectChosen(proj))
    },
    setViewerList: (l) => {
      dispatch(setViewerList(l))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Headings);
