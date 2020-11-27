import React from 'react';
import '../../App.css';
import Logo from '../../jonathanrivera.jpg';

function Home(){
    return(
        <div class="home-container">
            <div class="left-row">
                <h1 class="name-style">Jonathan Rivera</h1>
                <div class="text-animation">
                <p class="name-title" data-text="text-anim">Aspiring Software Developer</p>
                </div>
                <div class="about-links">
                    <a class="about-btn linkedIN" href="https://www.linkedin.com/in/jonathanrivera5000/" target="_blank"> LinkedIN </a>
                    <a class="about-btn github" href="https://github.com/JonathanR5000" target="_blank"> Github </a>
                </div>
            </div>
            <div class="right-row">
                <img src={Logo} class="App-logo"></img>
            </div>
        </div>
    );
}

export default Home;