import React from 'react';

class HeaderBanner extends React.Component {
  render() {
    const style = {
      align: 'center',
      fontSize: 32,
      height: 300,
      padding: 100,
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#1abc9c',
      // position: 'fixed',
    };
    return (
      <div style={style}>
        <div style={{}}>Header</div>
      </div>
    );
  }
}

class HeaderNav extends React.Component {
  render() {
    return (
      <nav
        className='navbar navbar-expand-lg navbar-light'
        id='navbar'
        style={{
          height: 100,
          backgroundColor: 'rgba(171, 255, 233,0.9)',
          zIndex: 3,
          transition: '1s ease-in-out',
        }}
      >
        <div className='container-fluid'>
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
                <i className='nav-link active' aria-current='page' href='#'>
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
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export { HeaderBanner, HeaderNav };
