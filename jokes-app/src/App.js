import './App.css';
import JokeCard from './components/jokecard';
import Jokes from './components/jokesData';

function App() {
  

  function Stage(){
    const trap = ( Jokes.map((j) => {
      return (
        <div key={j.id} className="joke-box">
          <JokeCard jokes={j} />
          <hr width="300px" style={{marginTop: "25px"}} />
        </div>
      );
    }))
    return trap;
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/pun_joke_logo.png'}
                  alt="Render Logo" width="200px" />
          </div>
          <div className="App-title">
            
          </div>
        </div>
        <div className="head-right">
          React Project - 7<br />
          React Conditional Rendering
        </div>
      </header>
      <main className="container">
        <Stage />
      </main>
      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
