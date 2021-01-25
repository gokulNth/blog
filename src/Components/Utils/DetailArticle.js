import React from 'react';
import { HeaderNav } from '../../Components/Utils/Header';
// import { getArticle } from '../Firebase/utils';
import db from '../Firebase/config';
import LoadingPage from './LoadingPage';
import likeImg from '../Images/like.png';
// import commentImg from '../Images/comments.png';
import shareImg from '../Images/share.png';
import { likeArticle } from '../Firebase/utils';

export default class DetailArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: '',
      email: '',
    };
    this.updateEmail = this.updateEmail.bind(this);
  }
  updateEmail(email) {
    this.setState({ email: email });
  }
  componentDidMount() {
    var docRef = db
      .collection('article')
      .doc(this.props.match.params.article_id);
    return docRef.onSnapshot((doc) => this.setState({ details: doc.data() }));
  }
  render() {
    let { details, email } = this.state;
    return (
      <div>
        <HeaderNav updateEmail={this.updateEmail} />
        {details ? (
          <div
            className='container text-center'
            style={{ paddingTop: 100, paddingBottom: 100 }}
          >
            <img
              src={details.image}
              style={{ width: '80%' }}
              alt='article_image'
            />
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
              <div style={{ cursor: 'pointer' }} className='col'>
                <img
                  onClick={() => likeArticle(details.id, details.like, email)}
                  src={likeImg}
                  alt='like_img'
                />
                <hr />
                {details.like}
              </div>
              {/* <div className='col'>
                <img src={commentImg} alt='comment_image' />
                <hr />
                {details.comment}
              </div> */}
              <div style={{ cursor: 'pointer' }} className='col'>
                <img src={shareImg} alt='share_image' />
                <hr />
                Click to Copy
              </div>
            </div>
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
    );
  }
}
