import React, { useEffect } from 'react';
import './App.css';
import { Education, Greeting, Projects, Header, About} from './components';

function App() {
  // useEffect(() => {
  //   const cursor = document.getElementById("cursor");

  //   const moveCursor = (e) => {
  //     cursor.style.left = e.clientX + "px";
  //     cursor.style.top = e.clientY + "px";
  //   };

  //   document.body.addEventListener("mousemove", moveCursor);

  //   return () => {
  //     // Cleanup: remove the event listener when the component unmounts
  //     document.body.removeEventListener("mousemove", moveCursor);
  //   };
  // }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className="App">
      {/* <div className='cursor' id="cursor"></div> */}
      <Header />

      <>
        <Greeting />
        <About />
        <Projects />
        <Education />
      </>
    </div>
  );
}

export default App;
