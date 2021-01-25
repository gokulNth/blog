import React from 'react';

class Article extends React.Component {
  render() {
    let {
      data: { title, content, like, comment, image, id },
    } = this.props;
    return (
      <div className='card mb-3'>
        <img src={image} className='card-img-top tv' alt={`img_${id}`} />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <div className='card-text trunc '>
            {content}
            <div className='read-more'>&darr;</div>
          </div>
          <div className='card-text'>
            <small>
              {' '}
              <button className='btn'>Like : {like}</button>{' '}
              <button className='btn'>Comment : {comment}</button>{' '}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
