import {combineReducers} from 'redux';


function projectChosen(state = "", action){
  if(action.type === "PROJECT_CHOSEN"){
    return action.value;
  }
  return state;
}

function pageSelected(state = "", action){
  if(action.type === "PAGE_SELECTED"){
    return action.value;
  }
  return state;
}

function pages(state = [], action){
  if(action.type === "PAGES") {
    return action.type;
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
   if(action.type === "PROJECT_LIST") {
     return action.value;
   }
   return state;
 }

 function images(state="", action) {
   if(action.type === "PROJECT_IMAGES") {
     return action.value;
   }
   return state;
 }


const rootReducer = combineReducers({
  projectChosen,pages,pageSelected,loggedIn,projects,images
});
export default rootReducer;
