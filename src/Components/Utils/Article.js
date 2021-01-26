import React from 'react';
import { Link } from 'react-router-dom';
import { truncate } from './utils';

class Article extends React.Component {
  render() {
    let {
      data: { title, content, image, id },
    } = this.props;
    return (
      <>
        <div
          className='col-sm-12 col-md-12 col-lg-6'
          style={{ paddingTop: 20 }}
        >
          <div className='card'>
            <img src={image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{truncate(content)}</p>
              <Link className='btn btn-primary' to={`/${id}`}>
                <div>Read More</div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className='col-sm-12 col-md-12 col-lg-6'
          style={{ paddingTop: 20 }}
        >
          <div className='card'>
            <img src={image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{truncate(content)}</p>
              <Link className='btn btn-primary' to={`/${id}`}>
                <div>Read More</div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Article;
