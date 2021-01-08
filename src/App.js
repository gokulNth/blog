import Article from './Components/Article';

function App() {
  return (
    <div className='d-flex flex-lg-nowrap flex-sm-wrap flex-wrap'>
      {[1, 2, 3, 4, 5].map((i) => (
        <Article key={i} />
      ))}
    </div>
  );
}

export default App;
