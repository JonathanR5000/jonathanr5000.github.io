import React from 'react';
import '../../App.css';
import Resume from '../../JonathanRiveraResume.pdf';

function About(){
    return(
        <div class="about-container">
            <h1 class="about-heading">About Me</h1>
            <p class="about-description">A senior at Lehman College, looking into stepping into
            the world of software development. I love to be a leader who anyone can look up to, 
            and believe in themselves, that they too can suceed in life.</p>
            <a class="resume-button" src={Resume} href={Resume} target="_blank">Resume</a>
        </div>
    );
}

export default About;