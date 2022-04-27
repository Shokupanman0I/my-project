import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={badLoopFunc}>BAD LOOP BUTTON</button>
        <button onClick={callBackHell}>CALL BACK HELL BUTTON</button>
      </header>
    </div>
  );
}

let badVar = false;
let loopNum = 0;
let badState = "bad";

let badLoopFunc = () => {

  if(!badVar)
  {
    console.log(`THE LOOP ${loopNum}`)
    loopNum++
    badLoopFunc()
  }
  else{
    return
  }

}


let callBackHell = () => {
  setTimeout(function() {
    console.log('getting worse');
    badState = "worse"
    console.log(`State: ${badState}`)
    setTimeout(function() {
      console.log('oh no');
      badState = "even worse"
      console.log(`State: ${badState}`)
      setTimeout(function() {
        console.log('AHHHHHHHHHHHHHHHHHHH');
        badState = "worst"
        console.log(`State: ${badState}`)
      }, 2000);
    }, 2000);
  }, 2000);
}

export default App;
