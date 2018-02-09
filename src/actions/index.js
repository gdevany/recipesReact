export function setProjectChosen(proj) {
  return {
    type: "PROJECT_CHOSEN",
    value: proj
  };
}

export function setPageSelect(page) {
  return {
    type: "PAGE_SELECTED",
    value: page
  };
}

export function loadUser(user) {
  return {
    type: "USER_LOGGED_IN",
    value: user
  };
}
