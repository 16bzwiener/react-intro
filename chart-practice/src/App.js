import logo from './logo.svg';
import './App.css';
import { TIRChart, TIRChartFunc } from './TimeInRanges'

function App() {
  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React FOREVERRRRRR
          
        </a>
        <TIRChartFunc />

        {/* <TIRChart /> */}
      </header>      
    </div>
  );
}

export default App;
