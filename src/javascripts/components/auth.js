import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `
  <div id="auth" class="d-flex flex-column justify-content-center" style="margin-top:100px">
    <span style="font-size: 5em; color: Tomato;" class="d-flex justify-content-center"><i class="fab fa-pinterest"></i></span>
    <h4>Welcome to Almost Pinterest</h4>
    <button id="google-auth" class="btn btn-primary btn-lg">
      <i class="fab fa-google"></i></i>oogle Login
    </button>
  </div>`;
  $('#auth').html(domString);
  $('#google-auth').on('click', signMeIn);
};

export default { loginButton };
