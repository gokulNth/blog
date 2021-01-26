import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';

class HeaderBanner extends React.Component {
  render() {
    const style = {
      height: window.innerWidth < 600 ? 200 : 400,
      background:
        '#1abc9c url(https://blog.hootsuite.com/wp-content/uploads/2018/05/facebook-cover-photo-940x470.jpg) no-repeat fixed',
      backgroundSize: 'cover',
    };
    const styles = {
      fontSize: 32,
      color: 'white',
      textAlign: 'center',
      paddingTop: window.innerWidth < 600 ? 100 : 300,
    };
    return (
      <div id='coverImg' style={style}>
        <div id='headTxt' style={styles}>
          {/* <img src={png} style={{ position: 'absolute' }} alt='cover' /> */}
          Header
        </div>
      </div>
    );
  }
}

class HeaderNav extends React.Component {
  render() {
    return (
      <nav
        className='navbar navbar-light bg-light'
        id='navbar'
        style={{
          zIndex: 2,
          boxShadow: '10px 10px 20px grey',
        }}
      >
        <div className='container-fluid container'>
          <Link className='navbar-brand' to='/'>
            Navbar
          </Link>
          <div className='d-flex'>
            <LoginPage
              updateEmail={this.props.updateEmail && this.props.updateEmail}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export { HeaderBanner, HeaderNav };
