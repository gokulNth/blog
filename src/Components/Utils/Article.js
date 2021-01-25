import React from 'react';
import { truncate } from './utils';

class Article extends React.Component {
  render() {
    let {
      data: { title, content, like, comment, image, id },
    } = this.props;
    return (
      <div className='col-sm-12 col-md-12 col-lg-6'>
        <div className='card'>
          <img src={image} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{truncate(content)}</p>
            <button className='btn btn-primary float-right'>
              <div>Read More</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
