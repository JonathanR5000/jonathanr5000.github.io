import React, { Component } from 'react';
import '../../App.css';
import Natours from '../../natours.png';
import Omnifood from '../../Omnifood.png';
import Nexter from '../../Nexter.png';
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div class="project-container">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}> Natours </CardTitle>
                    <CardText>
                        Natours is a fictional resort tour, that provides tours for customers 
                        and includes various packages that the user can choose. The website also has an option 
                        to choose the size of the group that will be participating in the tour. 
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                        <IconButton name=""></IconButton>
                    </CardMenu>
                    
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}> Omnifood </CardTitle>
                    <CardText>
                    Omnifood is a fictional food delivery company, 
                    that provides food delivery services that serve whatever the customer feels 
                    like eating such as pizza, ramen, steak, burgers, soup, dessert, and many more delishes orders. 
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                        <IconButton name=""></IconButton>
                    </CardMenu>
                    
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}> Nexter </CardTitle>
                    <CardText>
                    Nextor is a fictional real estate company, 
                    who's mission is to help you find your dream home! 
                    The purposes of the website is to practice advanceds CSS methods such as CS grid, and SASS 
                    to help better showcase each image effectively.
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                        <IconButton name=""></IconButton>
                    </CardMenu>
                    
                </Card>
            </div>
            );
        } else if (this.state.activeTab === 1){
            return(
                <div class="project-container">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}> Coming Soon! </CardTitle>
                    <CardText>
                        
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                        <IconButton name=""></IconButton>
                    </CardMenu>
                    
                </Card>
            </div>
            );
        }
}

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Java</Tab>
                </Tabs>

                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}
    {/* // <div class="project-container">

        

//     <div class="card-group">
//         <div class="card">
//             <img class="card-img-top" src={Natours} alt="Card image cap"></img>
//             <div class="card-body">
//             <h5 class="card-title">Natours</h5>
//             <p class="card-text">Natours is a fictional resort tour, that provides tours for customers 
//             and includes various packages that the user can choose. The website also has an option 
//             to choose the size of the group that will be participating in the tour. 
//             </p>
//             <a href="https://github.com/JonathanR5000/Natours" class="card-link" target="_blank">Github</a>
//             <a href="https://jonathanr5000.github.io/Natours/" class="card-link" target="_blank">Live</a>
//             </div>
//         </div>

//         <div class="card">
//             <img class="card-img-top" src={Omnifood} alt="Card image cap"></img>
//             <div class="card-body">
//             <h5 class="card-title">Omnifood</h5>
//             <p class="card-text">Omnifood is a fictional food delivery company, 
//             that provides food delivery services that serve whatever the customer feels 
//             like eating such as pizza, ramen, steak, burgers, soup, dessert, and many more delishes orders. 
//             </p>
//             <a href="https://github.com/JonathanR5000/Omnifood" class="card-link" target="_blank">Github</a>
//             <a href="https://jonathanr5000.github.io/Omnifood/" class="card-link" target="_blank">Live</a>
//             </div>
//         </div>

//             <div class="card">
//             <img class="card-img-top" src={Nexter} alt="Card image cap"></img>
//             <div class="card-body">
//             <h5 class="card-title">Nexter</h5>
//             <p class="card-text">Nextor is a fictional real estate company, 
//             who's mission is to help you find your dream home! 
//             The purposes of the website is to practice advanceds CSS methods such as CS grid, and SASS 
//             to help better showcase each image effectively.</p>
//             <a href="https://github.com/JonathanR5000/Nexter" class="card-link" target="_blank">Github</a>
//             <a href="https://jonathanr5000.github.io/Nexter/" class="card-link" target="_blank">Live</a>
//             </div>
//         </div>
//     </div>
    

// </div> */}

export default Projects;