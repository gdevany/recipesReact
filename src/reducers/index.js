import { combineReducers } from "redux";

// Constants:
function pages(state = [], action) {
  if (action.type === "PAGES") {
    return action.type;
  }
  return state;
}

function appSubject(state = "", action) {
  if (action.type === "APP_SUBJECT") {
    return action.type;
  }
  return state;
}

function cloudinaryPojectFile(state = "", action) {
  if (action.type === "CPF") {
    return action.type;
  }
  return state;
}

function projectMainImageTag(state = "", action) {
  if (action.type === "PMIT") {
    return action.type;
  }
  return state;
}

function logo(state = "", action) {
  if (action.type === "LOGO") {
    return action.type;
  }
  return state;
}

function cloudName(state = "", action) {
  if (action.type === "CLOUD_NAME") {
    return action.type;
  }
  return state;
}

function cloudinaryFilePath(state = "", action) {
  if (action.type === "CFP") {
    return action.type;
  }
  return state;
}

function subjects(state = [], action) {
  if (action.type === "FOOD_SUBJECTS") {
    return action.type;
  }
  return state;
}

function CLOUDINARY_UPLOAD_PRESET(state = "", action) {
  if (action.type === "CUP") {
    return action.type;
  }
  return state;
}

function CLOUDINARY_UPLOAD_URL(state = "", action) {
  if (action.type === "CUU") {
    return action.type;
  }
  return state;
}

function landingPic(state = "", action) {
  if (action.type === "LANDING_PIC") {
    return action.type;
  }
  return state;
}

// Will change:

function theme(state = "", action) {
  if (action.type === "SET_THEME") {
    return action.value
  }
  return state;
}

function projectChosen(state = "", action) {
  if (action.type === "PROJECT_CHOSEN") {
    return action.value;
  }
  return state;
}

function pageSelected(state = "", action) {
  if (action.type === "PAGE_SELECTED") {
    return action.value;
  }
  return state;
}

function loggedIn(state = "", action) {
  if (action.type === "USER_LOGGED_IN") {
    return action.value;
  }
  return state;
}

function projects(state = "", action) {
  if (action.type === "PROJECT_LIST") {
    return action.value;
  }
  return state;
}

function searchTagChosen(state = "", action) {
  if (action.type === "SEARCH_TAG_CHOSEN") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  pages,
  appSubject,
  cloudinaryPojectFile,
  projectMainImageTag,
  logo,
  cloudinaryFilePath,
  subjects,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
  landingPic,
  cloudName,
  theme,
  projectChosen,
  pageSelected,
  loggedIn,
  projects,
  searchTagChosen
});
export default rootReducer;
