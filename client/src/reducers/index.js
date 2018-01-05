import {combineReducers} from 'redux';

// Constants:
function pages(state = [], action){
  if(action.type === "PAGES") {
    return action.type;
  }
  return state;
}

function cloudinaryPojectFile(state = "", action){
  if(action.type === "CPF") {
    return action.type;
  }
  return state;
}

function projectMainImageTag(state = "", action){
  if(action.type === "PMIT") {
    return action.type;
  }
  return state;
}

function logo(state = "", action){
  if(action.type === "LOGO") {
    return action.type;
  }
  return state;
}

function cloudinaryFilePath(state = "", action){
  if(action.type === "CFP") {
    return action.type;
  }
  return state;
}

// Will change:
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

const rootReducer = combineReducers({
  pages,cloudinaryPojectFile,projectMainImageTag,logo,cloudinaryFilePath,
  projectChosen,pageSelected,loggedIn,projects
});
export default rootReducer;
