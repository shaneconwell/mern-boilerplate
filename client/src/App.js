import logo from './MERN-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link1"
          href="https://docs.mongodb.com/manual/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Mongo
        </a>
        <a
          className="App-link2"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Express
        </a>
        <a
          className="App-link3"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Node
        </a>
      </header>
    </div>
  );
}

export default App;
