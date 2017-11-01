import { USER_ACTIONS } from '../consts/action_types';
import { CANDIDATE } from '../consts/default_state';
import fire from '../config/firebase';

export default (state = CANDIDATE, action) => {
  let newState = {...state};
  switch (action.type) {
    case USER_ACTIONS.LOGIN: {
      let ref = fire.database().ref("/").child("users");
      ref.orderByChild("email")
        .equalTo(action.credentials.email)
        .on("child_added", snapshot => {
          let user = snapshot.val();
          if (user.password === action.credentials.password) {
            newState.session_status = {
              ...newState.session_status,
              isLoggingIn: false,
              isLoggedIn: true,
            };
            newState.person_info = {
              ...newState.person_info,
              name: user.name.split(' ')[0], //First name
              surname: user.name.split(' ')[1], //Last Name
              email: user.email,
              role:user.role
            }
            console.log(newState.person_info.name);
          }
          else {
            alert("NOOO");
          }
      });
      break;
    }
    case USER_ACTIONS.LOGGING_IN: {
      newState.session_status = {
        ...newState.session_status,
        isLoggingIn: true
      }
      break;
    }
    case USER_ACTIONS.LOGGED_IN: {
      if (newState.session_status.isLoggedIn) {
        newState.session_status = {
          ...newState.session_status,
          isLoggingIn: false,
          isLoggedIn: true,
        }
      }
      break;
    }
    case USER_ACTIONS.LOGOUT:
      break;
    case USER_ACTIONS.LOGGING_OUT:
      break
    case USER_ACTIONS.LOGGED_OUT:
      break
    case USER_ACTIONS.SIGNUP:
      break;
    case USER_ACTIONS.SIGNING_UP:
      break;
    default:
      return newState;
  }
  return newState;
}