import Article from './Components/Article';

function App() {
  return (
    // <div className='container'>
    <div className='d-flex flex-sm-wrap flex-md-nowrap flex-lg-nowrap'>
      {[1, 2, 3, 4, 5].map((i) => (
        <Article key={i} />
      ))}
      {/* </div> */}
    </div>
  );
}

export default App;
