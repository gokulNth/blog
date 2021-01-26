import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { addUserIfNeeded, signIn, signOut } from '../Firebase/utils';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.setState({ user: 'loading' });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.displayName });
        addUserIfNeeded(user.displayName, user.email);
        this.props.updateEmail && this.props.updateEmail(user.email);
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    let { user } = this.state;
    return user === null ? (
      <button
        type='button'
        onClick={() => signIn(firebase)}
        className='btn btn-primary'
      >
        Sign In
      </button>
    ) : user === 'loading' ? (
      <button className='btn btn-primary' type='button' disabled>
        <span
          className='spinner-border spinner-border-sm'
          role='status'
          aria-hidden='true'
        ></span>
        {'  '}
        Loading...
      </button>
    ) : (
      <div className='dropdown'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={() => {
            let a = window.confirm('Are you sure you want to sign out');
            if (a) {
              signOut(firebase);
            }
          }}
        >
          {this.state.user.toUpperCase()}
        </button>
      </div>
    );
  }
}

export default LoginPage;
