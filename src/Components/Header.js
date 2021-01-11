import React from 'react';

export default class Header extends React.Component {
  render() {
    const style = {
      align: 'center',
      fontSize: 32,
      height: 400,
      backgroundColor: 'blue',
      // transform: 'skewY(-10deg) scale(2)',
    };
    return (
      <div style={style}>
        <div style={{ position: 'fixed' }}>Header</div>
      </div>
    );
  }
}
