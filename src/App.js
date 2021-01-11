import React from 'react';
import Article from './Components/Article';
import data from './data.json';

function App(props) {
  let { order } = props;
  return (
    <div className='row'>
      {data.all_arti.map((i) => (
        <Article key={i} order={order} data={data.Articles[i]} />
      ))}
    </div>
  );
}

export default App;
