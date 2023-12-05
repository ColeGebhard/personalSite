import './About.css';
import '../App.css';


function About() {
    return (
        <div className="about">
            <h1>About me</h1>
            <div className='imgAndBio'>
                <img src='../images/linkedInPhoto.jpg'
                    alt='self while skiing'
                />
                <div>
                    <p>Before I delve into the nitty-gritty, allow me to introduce myself and share a glimpse of my life beyond coding. I am an avid skier, constantly challenging myself in various aspects of the sport, from backcountry adventures to park skiing. Winter times hold a special place in my heart, and the ability to find flexible remote work played a significant role in my decision to embark on this coding journey (though I didn't anticipate loving it this much).</p>

                    <p>Outside the winter months, I relish the fresh air of the Rocky Mountains. I go on hikes, mountain bike, and ride my BMX around—of course, always with a helmet to protect the money maker.</p>

                    <p>I don't embark on these activities alone; I have an amazing fiancée who not only serves as my adventure buddy but also makes for the best office mate. Joining us are our two dogs, Adler and Samara—a border collie and golden retriever, opposites in many ways but getting along just right.</p>

                    <p>I hope this snippet provides a glimpse into the fact that I am not just another name on a screen; I am a human looking to make a mark in the coding world. Fun fact: I also like to doodle, although hiring me for graphic design might not be the best idea—at least not yet.</p>

                </div>
            </div>
            <img src='../images/coverWithLines.png'
                alt='mountain landscape'
                id='mtnLandscape' />
        </div>

    );
}

export default About;
