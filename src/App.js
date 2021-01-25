import React from 'react';
import Article from './Components/Utils/Article';
import { getAllArticles } from './Components/Firebase/utils';
import { HeaderBanner, HeaderNav } from './Components/Utils/Header';
import { cssScroll } from './Components/Utils/utils';
import LoginPage from './Components/Utils/LoginPage';
import ServerError from './Components/Utils/ServerError';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: false, serverError: false };
  }
  componentDidMount() {
    cssScroll();
    getAllArticles()
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
              <ServerError />
            ) : (
              <LoginPage />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
