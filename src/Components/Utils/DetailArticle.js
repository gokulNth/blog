import React from 'react';
import { HeaderNav } from '../../Components/Utils/Header';
import { getArticle } from '../Firebase/utils';
import LoadingPage from './LoadingPage';
import OneArticle from './OneArticle';

export default class DetailArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: '',
    };
  }
  componentDidMount() {
    getArticle(this.props.match.params.article_id).then((article) =>
      this.setState({ details: article })
    );
  }
  render() {
    let { details } = this.state;
    return (
      <div>
        <HeaderNav />
        {details ? <OneArticle details={details} /> : <LoadingPage />}
      </div>
    );
  }
}
