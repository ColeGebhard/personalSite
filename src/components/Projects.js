import './Projects.css';

function Projects() {
  return (
<div class="project">
  <h2>My Projects</h2>
  <div class="projectsContainer">
    <div class="projectCard">
      <h3>ACL Grocery</h3>
      <p>As part of a team, I developed a full-stack web application that
         enabled users to purchase groceries. This involved working with 
         a technology stack that included Node.js, Express, and React.js,
          as well as collaborating with my team members to ensure the
           application was delivered on time and met the project requirements.
      </p>
      <a href="https://acl-groceries.onrender.com" target="_blank" rel="noreferrer">View Project</a>
    </div>
    <div class="projectCard">
      <h3>Strangers Thing's</h3>
      <p>For one of my early projects, I created a simple web page using 
        React that allowed users to send messages, browse through posts, 
        and sell items. Since I didn't use a backend, I relied on making API 
        calls to fetch and send data. Despite some challenges, this project 
        helped me gain a better understanding of front-end development and
         gave me the confidence to tackle more complex projects in the future.
      </p>
      <a href="https://wonderful-fenglisu-dec487.netlify.app/#/" target="_blank" rel="noreferrer">View Project</a>
    </div>
  </div>
</div>

  );
}

export default Projects;
