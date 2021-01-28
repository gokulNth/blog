import React from 'react';
import Article from './Components/Utils/Article';
import { getAllArticles } from './Components/Firebase/utils';
import { HeaderBanner, HeaderNav } from './Components/Utils/Header';
import { cssScroll, TagsList } from './Components/Utils/utils';
import LoadingPage from './Components/Utils/LoadingPage';
import ServerError from './Components/Utils/ServerError';
import RightPanel from './Components/Utils/RightPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: false,
      serverError: false,
      tags: [],
      order: 'asc',
    };
    this.removeTags = this.removeTags.bind(this);
    this.setTags = this.setTags.bind(this);
    this.getData = this.getData.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }
  componentDidMount() {
    cssScroll();
    this.getData(this.state.tags);
  }
  changeOrder(order) {
    this.setState({ order });
  }
  getData(tags, order) {
    getAllArticles(tags, order)
      .then((i) => this.setState({ articles: i }))
      .catch(() => {
        this.setState({ serverError: true });
      });
  }
  setTags(tag) {
    let { tags } = this.state;
    let newList = [...tags, tag];
    !tags.includes(tag) && this.setState({ tags: newList });
    this.getData(newList);
  }
  removeTags(tag) {
    let newList = this.state.tags.filter((t) => t !== tag);
    this.setState({ tags: newList });
    this.getData(newList);
  }
  render() {
    let { articles, serverError, tags } = this.state;
    return (
      <React.Fragment>
        <HeaderBanner />
        <HeaderNav />
        <div className='content'>
          {tags.length > 0 && (
            <div className='tagContainer container'>
              Tags : <TagsList tags={tags} removeTags={this.removeTags} />
            </div>
          )}
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10 col-12'>
                <div className='row' style={{ paddingBottom: 30 }}>
                  {articles.length && articles.length > 0 ? (
                    articles.map((i) => (
                      <Article key={i.id} data={i} setTags={this.setTags} />
                    ))
                  ) : serverError ? (
                    <ServerError />
                  ) : (
                    <LoadingPage />
                  )}
                </div>
              </div>
              <div className='col-lg-2 col-12'>
                <RightPanel
                  setTags={this.setTags}
                  changeOrder={this.changeOrder}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
