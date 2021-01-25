import React from 'react';
import Article from './Components/Article';
import { getAllArticles } from './Components/Firebase/utils';
import { HeaderBanner, HeaderNav } from './Components/Header';
import db from './Components/Firebase/config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: false, serverError: false };
  }
  componentDidMount() {
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
        {articles.length && articles.length > 0 && (
          <>
            <HeaderBanner />
            <HeaderNav />
          </>
        )}
        <div className='container'>
          {articles.length && articles.length > 0 ? (
            articles.map((i, index) => (
              <div className='row content'>
                <Article key={index} data={i} />
              </div>
            ))
          ) : serverError ? (
            <h3 style={{ textAlign: 'center' }}>
              Server Error <div>Check your Internet or Try after some time</div>{' '}
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
      </React.Fragment>
    );
  }
}

export default App;
