import './Greeting.css';

function Greeting() {
  return (
    <div className="greeting">
      <h6>HELLO THERE &#128512;, I'm</h6>
      <h1>Cole</h1>
      <h2>FULL-STACK DEVELOPER</h2>
      <ul className='languages'>
        <li>React &#x2022;</li>
        <li>Express &#x2022;</li>
        <li>Git &#x2022;</li>
        <li>Javascript &#x2022;</li>
        <li>PSQL &#x2022;</li>
        <li>Node.js &#x2022;</li>
        <li>Render &#x2022;</li>
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
  );
}

export default Greeting;
