import React from 'react';
import read_more from './icons8-double-down-48.png';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { order: this.props.order, data: this.props.data };
  }
  render() {
    let { order, data } = this.state;
    let { title, content, like, comment, image } = data;
    return order === 1 ? (
      <div className='col-12'>
        <div className='card p-4 border-light box'>
          <img src={image} className='card-img-top tv' alt='blog_image' />
          <span
            style={{
              backgroundColor: 'black',
              zIndex: 2,
              width: 80,
              height: 80,
              borderRadius: 50,
              right: 0,
              position: 'absolute',
            }}
          >
            <img src={read_more} alt='read_more' style={{ margin: 16 }} />
          </span>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{content}</p>
          </div>
          <div className='card-footer'>
            Likes : {like} / Comment : {comment}
          </div>
        </div>
        <br />
      </div>
    ) : (
      (data.title.includes(1) || data.title.includes(2)) && (
        <div className='col-12'>
          <div className='card p-4 border-light'>
            <img
              src='https://i.stack.imgur.com/vhoa0.jpg'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
            </div>
          </div>
        </div>
      )
    );
  }
}
