import Article from './Components/Article';

function App() {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {[1, 2, 3, 4, 5].map((i) => (
          <Article key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
