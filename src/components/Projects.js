import './Projects.css';
import '../App.css';
import { CiGlobe } from "react-icons/ci";



function Projects() {
  return (
    <div class="project">
      <div className='projectSpotlight'>
        <h3>Project Highlight</h3>
        <h1>
          <a className="hover-2" href='https://aubornactivist.onrender.com/'>
            Auburn Activist <CiGlobe /> 
          </a>
        </h1>
        <span className='detailSpan'>
          <img alt='screenshot of auburn activist blog' src='../images/AuburnActivistSC.png'></img>
          <span className='description'>
            <p>

            Auburn Activist is a full-stack web app showcasing my diverse skills
             in development and corporate abilities. Collaborating closely with a 
             client (my fiancée), I designed and implemented the entire process. The blog
              section enables seamless blog management through robust POST requests, 
              backed by a server linked to a database. Thorough error handling enhances the user experience.
            </p>

            <p>
            Users can explore highlighted blogs, view recent entries, and filter content
             by category. The standout feature is the subscription functionality, leveraging 
             SendGrid for newsletter emails with customized HTML styles. This project demonstrates 
             proficiency in React, Express, Node.js, PSQL, and more, encapsulating my skills in a cohesive web application.
            </p>

            {/* <button class="btn-5"><span>View In Action</span></button> */}

          </span>
        </span>
      </div>
      <h2>My Projects</h2>
      <div class="projectsContainer">
        <div class="projectCard">
          <h3>ACL Grocery</h3>
          <p>As part of a team, I developed a full-stack ecommerce site that
            enabled users to purchase groceries. This involved working with
            a technology stack that included Node.js, Express, and React.js,
            as well as collaborating with my team members to ensure the
            application was delivered on time and met the project requirements.

            <br></br> *Use username:Admin password:Secret123 for admin abilities
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
