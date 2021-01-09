import Article from './Components/Article';

function App() {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
      {[1, 2, 3, 4, 5].map((i) => (
        <Article key={i} />
      ))}
    </div>
  );
}

export default App;
