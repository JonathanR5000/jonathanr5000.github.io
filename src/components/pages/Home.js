import React from 'react';
import '../../App.css';
import Logo from '../../jonathanrivera.jpg';

function Home(){
    return(
        <div class="container">
            <h1 class="name-style">Jonathan Rivera</h1>
            <p>Software Developer</p>
            <img src={Logo} class="App-logo"></img>
        </div>
    );
}

export default Home;