import React from 'react';
import { getTagsList } from '../Firebase/utils';

export default class RightPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }
  componentDidMount() {
    getTagsList().then((i) => this.setState({ tags: i.tags }));
  }
  render() {
    let { setTags, changeOrder } = this.props;
    return (
      <div className='row'>
        <div className='col-lg-12 col-sm-6'>
          <div className='card bg-light mb-4'>
            <div className='card-header'>Sort</div>
            <div className='card-body'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                  onChange={() => changeOrder('asc')}
                />
                <label className='form-check-label' htmlFor='exampleRadios1'>
                  Ascending
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios2'
                  value='option2'
                  onChange={() => changeOrder('desc')}
                />
                <label className='form-check-label' htmlFor='exampleRadios2'>
                  Descending
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 col-sm-6'>
          <div className='card bg-light mb-4'>
            <div className='card-header'>Tags</div>
            <div className='card-body'>
              {this.state.tags.map((tag, index) => (
                <div
                  key={index}
                  onClick={() => setTags(tag)}
                  className='badge badge-danger'
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
