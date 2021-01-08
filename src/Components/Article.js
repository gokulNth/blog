import React from 'react';

export default class Article extends React.Component {
  render() {
    return (
      //   <div className='col'>
      <div className='card p-2'>
        <img
          src='https://i.stack.imgur.com/vhoa0.jpg'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
      //   </div>
    );
  }
}
