import React from 'react';
import '../../App.css';
import Logo from '../../jonathanrivera.jpg';

function Home(){
    return(
        <div class="container">
            <div class="left-row">
                <h1 class="name-style">Jonathan Rivera</h1>
                <p class="name-title">Inspiring Software Developer</p>
            </div>
            <div class="right-row">
                <img src={Logo} class="App-logo"></img>
            </div>
        </div>
    );
}

export default Home;