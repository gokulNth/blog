import React from 'react';
import likeImg from '../Images/like.png';
import commentImg from '../Images/comments.png';
import shareImg from '../Images/share.png';

export default class OneArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
    };
  }
  render() {
    let { details } = this.state;
    return (
      <div
        className='container text-center'
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        <img src={details.image} style={{ width: '80%' }} alt='article_image' />
        <hr />
        <br />
        <h1 style={{ fontFamily: 'cursive' }} className='text-capitalize'>
          {details.title}
        </h1>
        <hr />
        <br />
        <div className='container'>
          <center className='capitalizeFirstWord'>{details.content}</center>
        </div>
        <br />
        <div className='row container'>
          <div className='col'>
            <img src={likeImg} alt='like_img' />
            <hr />
            {details.like}
          </div>
          <div className='col'>
            <img src={commentImg} alt='comment_image' />
            <hr />
            {details.comment}
          </div>
          <div className='col'>
            <img src={shareImg} alt='share_image' />
            <hr />
            Click to Copy
          </div>
        </div>
      </div>
    );
  }
}
