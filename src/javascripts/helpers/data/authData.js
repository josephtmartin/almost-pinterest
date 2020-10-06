import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../../components/navbar';
import auth from '../../components/auth';
import userData from './userData';
import view from '../../components/views/viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      navbar.myNavbar(currentUser);
      view.viewListener('boards-link', user.uid);
      $('#navbar-logout-button').removeClass('hide');
      $('#auth').addClass('hide');
      $('#app').html('');
    } else {
      auth.loginButton();
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
