import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.setState({ provider: provider });
  }
  render() {
    let { user } = this.state;
    return user === null ? (
      <button
        type='submit'
        value='Login'
        onClick={() =>
          firebase
            .auth()
            .signInWithPopup(this.state.provider)
            .then((result) => {
              /** @type {firebase.auth.OAuthCredential} */
              this.setState({ user: result.user });
            })
            .catch((error) => {
              alert(error.errorMessage);
            })
        }
      >
        Sign In
      </button>
    ) : (
      <button>{this.state.user}</button>
    );
  }
}

export default LoginPage;
