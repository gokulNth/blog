import React from 'react';
import { Link } from 'react-router-dom';
import { truncate } from './utils';

class Article extends React.Component {
  render() {
    let {
      data: { title, content, image, id, tags },
      setTags,
    } = this.props;
    return (
      <>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <div className='card'>
            <img src={image} className='card-img-top tv' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{truncate(content)}</p>
              <div className='row'>
                <div className='col-4'>
                  <Link className='btn btn-primary' to={`/${id}`}>
                    <div>Read More</div>
                  </Link>
                </div>
                <div className='col-8'>
                  <span>Tags : </span>
                  {tags.map((tag, index) => (
                    <span key={index}>
                      <span
                        id={tag}
                        className='badge badge-pill badge-danger'
                        onClick={() => setTags(tag)}
                      >
                        {tag}
                      </span>
                      {'  '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Article;
