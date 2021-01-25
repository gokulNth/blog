import React from 'react';
import LoginPage from './LoginPage';

class HeaderBanner extends React.Component {
  render() {
    const style = {
      height: 400,
      background:
        '#1abc9c url(https://blog.hootsuite.com/wp-content/uploads/2018/05/facebook-cover-photo-940x470.jpg) no-repeat fixed',
      backgroundSize: 'cover',
    };
    const styles = {
      fontSize: 32,
      color: 'white',
      textAlign: 'center',
      padding: '300px',
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
        className='navbar navbar-expand-lg navbar-light bg-light'
        id='navbar'
        style={{
          zIndex: 3,
          boxShadow: '10px 10px 20px grey',
        }}
      >
        <div className='container-fluid container'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <i className='navbar-brand' href='#'>
            Navbar
          </i>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <i className='nav-link' aria-current='page' href='#'>
                  Home
                </i>
              </li>
              <li className='nav-item'>
                <i className='nav-link' href='#'>
                  Link
                </i>
              </li>
            </ul>
            <form className='d-flex'>
              <LoginPage
                updateEmail={this.props.updateEmail && this.props.updateEmail}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export { HeaderBanner, HeaderNav };
