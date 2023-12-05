import './Greeting.css';
import '../App.css';
import { FaArrowDown } from "react-icons/fa";




function Greeting() {

  return (
    <div className='greetingMain'>
      <div className="greeting">
        <h6>HELLO THERE &#128512;, I'm</h6>
        <h1>Cole</h1>
        <h2>FULL-STACK DEVELOPER</h2>
        <ul className='languages'>
          <li>React </li>
          <li>Express </li>
          <li>Git </li>
          <li>Javascript </li>
          <li>PSQL </li>
          <li>Node.js </li>
          <li>Render </li>
          <li>HTML5</li>
        </ul>
        <p className='shortBio'>Hi, my name is Nicholas "Cole" Gebhard and
          I am a hard-working and eager-to-learn individual.
          I pride myself on my ability to work well in a team
          and believe that collaboration is the key to success.
          As a Full-stack developer, I am passionate about
          building complete applications and constantly strive to
          improve my skills and knowledge.
          I am excited to take on new challenges and believe that
          every obstacle is an opportunity for growth.</p>
      </div>
      <div className='downArrow'>      
           <FaArrowDown size={60} color='black'/>
      </div>
      <div className='mtnRange'>

      </div>
    </div>
  );
}

export default Greeting;
