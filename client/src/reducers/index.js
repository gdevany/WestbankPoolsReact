import {combineReducers} from 'redux';


function category(state = [], action){
  if(action.type === "SHOW_CATEGORY"){
    return action.value;
  }
  return state;
}

function loggedIn(state="", action) {
  if(action.type === "USER_LOGGED_IN") {
    return action.value;
  }
  return state;
 }

 function projects(state="", action) {
   if(action.type === "PROJECT_SELECTED") {
     return action.value;
   }
   return state;
 }

 function images(state="", action) {
   if(action.type === "PROJECT_SELECTED") {
     return action.value;
   }
   return state;
 }


const rootReducer = combineReducers({
  category,loggedIn,projects,images
});
export default rootReducer;
