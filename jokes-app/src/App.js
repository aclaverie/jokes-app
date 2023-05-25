import './App.css';
import {useState} from 'react';
import JokeCard from './components/jokecard';
import Jokes from './components/jokesData';
// import Button from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);

  function showIt(){
    setIsShown(() => !isShown)
  }

  function Stage(){
    const trap = ( Jokes.map((j) => {
    return (
          <div key={j.id} className="joke-box">
            <JokeCard jokes={j} />
            <button onClick={showIt}>Show</button>
            <hr width="300px" />
          </div>
    )
        })
    )
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
