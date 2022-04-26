import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={badFunc}>BAD BUTTON</button>
      </header>
    </div>
  );
}

let badVar = false;
let loopNum = 0;

let badFunc = () => {

  if(!badVar)
  {
    console.log(`THE LOOP ${loopNum}`)
    loopNum++
    badFunc()
  }
  else{
    return
  }

}

export default App;
