import {connect} from 'react-redux';
import Projects from '../components/Projects';
// import {createCoupon, loadUsersCoupons} from '../actions';
// import {deleteCoupon} from '../actions';


function mapStateToProps(state) {
  return {
    projects: state.projects,
    images: state.images,
    loggedIn: state.loggedIn
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     createCoupon: (c) => {
//       dispatch(createCoupon(c))
//     },
//     loadUsersCoupons: (username) => {
//       dispatch(loadUsersCoupons(username))
//     }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Projects);
export default connect(mapStateToProps)(Projects);
