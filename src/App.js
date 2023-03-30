import './App.css';
import { 
  Education,
  Greeting,
 Projects,
 } from './components';

function App() {
  return (
    <div className="App">
      <div id='blank-area'>

      </div>
      <>
        <Greeting/>
        <Projects/>
        <Education/>
      </>
    </div>
  );
}

export default App;
