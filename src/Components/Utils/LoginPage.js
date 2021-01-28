import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { addUserIfNeeded, signIn, signOut } from '../Firebase/utils';
import { Link } from 'react-router-dom';
import profile from '../Images/profile.png';
import signout from '../Images/signout.png';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      popup: false,
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
    let { user, popup } = this.state;
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
          onClick={() =>
            user !== null && this.setState({ popup: !this.state.popup })
          }
        >
          {this.state.user.toUpperCase()}
        </button>
        {popup && (
          <div
            style={{
              position: 'absolute',
              marginTop: 3,
              marginLeft: 5,
              backgroundColor: 'white',
              width: '90%',
              padding: 10,
              cursor: 'pointer',
              lineHeight: 1,
              border: '1px solid black',
              borderRadius: '5px',
            }}
          >
            <center>
              <img src={profile} alt={'profile'} />{' '}
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/profile'
              >
                Profile
              </Link>
            </center>
            <hr style={{ lineHeight: 1 }} />
            <center>
              <img
                style={{ width: 20, height: 20, marginBottom: 5 }}
                src={signout}
                alt='signOut'
              />{' '}
              <span onClick={() => signOut(firebase)}>Sign Out</span>
            </center>
          </div>
        )}
      </div>
    );
  }
}

export default LoginPage;
