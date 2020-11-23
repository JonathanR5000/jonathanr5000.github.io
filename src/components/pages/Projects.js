import React from 'react';
import '../../App.css';
import Natours from '../../natours.png';
import Omnifood from '../../Omnifood.png';
import Nexter from '../../Nexter.png';

function Projects(){
    return(
    <div class="project-container">
        <div class="card-group">
            <div class="card">
                <img class="card-img-top" src={Natours} alt="Card image cap"></img>
                <div class="card-body">
                <h5 class="card-title">Natours</h5>
                <p class="card-text">Natours is a fictional resort tour, that provides tours for customers 
                and includes various packages that the user can choose. The website also has an option 
                to choose the size of the group that will be participating in the tour. 
                The purpose of the website is to practive advanced CSS and SASS methods, 
                to better organize the code that is used to create certain parts of the website.</p>
                <a href="https://github.com/JonathanR5000/Natours" class="card-link" target="_blank">Github</a>
                <a href="https://jonathanr5000.github.io/Natours/" class="card-link" target="_blank">Live</a>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={Omnifood} alt="Card image cap"></img>
                <div class="card-body">
                <h5 class="card-title">Omnifood</h5>
                <p class="card-text">Omnifood is a fictional food delivery company, 
                that provides food delivery services that serve whatever the customer feels 
                like eating such as pizza, ramen, steak, burgers, soup, dessert, and many more delishes orders. 
                The purposes of the website is to practice the main properties of HTML and CSS, including showcases, 
                features and footers as well as responsive layout. It also includes a responsive layout 
                that uses JavaScrpit, and it also comes with a widescreen and smartphone view.</p>
                <a href="https://github.com/JonathanR5000/Omnifood" class="card-link" target="_blank">Github</a>
                <a href="https://jonathanr5000.github.io/Omnifood/" class="card-link" target="_blank">Live</a>
                </div>
            </div>

                <div class="card">
                <img class="card-img-top" src={Nexter} alt="Card image cap"></img>
                <div class="card-body">
                <h5 class="card-title">Nexter</h5>
                <p class="card-text">Nextor is a fictional real estate company, 
                who's mission is to help you find your dream home! 
                The purposes of the website is to practice advanceds CSS methods such as CS grid, and SASS 
                to help better showcase each image effectively.</p>
                <a href="https://github.com/JonathanR5000/Nexter" class="card-link" target="_blank">Github</a>
                <a href="https://jonathanr5000.github.io/Nexter/" class="card-link" target="_blank">Live</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;