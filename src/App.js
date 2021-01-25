import React from 'react';
import Article from './Components/Utils/Article';
import { getAllArticles } from './Components/Firebase/utils';
import { HeaderBanner, HeaderNav } from './Components/Utils/Header';
import db from './Components/Firebase/config';
import { cssScroll } from './Components/Utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: false, serverError: false };
  }
  componentDidMount() {
    cssScroll();
    getAllArticles(db)
      .then((i) => this.setState({ articles: i }))
      .catch((e) => {
        this.setState({ serverError: true });
      });
  }
  render() {
    let { articles, serverError } = this.state;
    return (
      <React.Fragment>
        <HeaderBanner />
        <HeaderNav />
        <div className='content container'>
          <div className='row'>
            {articles.length && articles.length > 0 ? (
              articles.map((i) => <Article key={i.id} data={i} />)
            ) : serverError ? (
              <h3 style={{ textAlign: 'center' }}>
                Server Error{' '}
                <div>Check your Internet or Try after some time</div>{' '}
              </h3>
            ) : (
              <div>
                <img
                  src='https://i.pinimg.com/originals/07/bf/6f/07bf6f0f7d5dd64829822e95e97f908d.gif'
                  alt='loading'
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '50%',
                  }}
                />
                <h3 style={{ textAlign: 'center' }}>Loading...</h3>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
