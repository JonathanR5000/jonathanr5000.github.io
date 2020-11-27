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
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}>
                    <img class="card-img-top" src={Natours} alt="Card image cap"></img>
                    </CardTitle>
                    <CardText>
                    <h5> Natours </h5>
                        Natours is a fictional resort tour, that provides tours for customers 
                        and includes various packages that the user can choose. The website also has an option 
                        to choose the size of the group that will be participating in the tour. The purposes of 
                        the website is to practice the main properties of HTML and CSS, including showcases, 
                        features and footers as well as responsive layout.
                    </CardText>
                    <CardActions border>
                        <Button colored style={{textDecoration: 'none'}} href="https://github.com/JonathanR5000/Natours" target="_blank"> Github </Button>
                        <Button colored style={{textDecoration: 'none'}} href="https://jonathanr5000.github.io/Natours/" target="_blank"> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                    </CardMenu>
                    
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}> 
                    <img class="card-img-top" src={Omnifood} alt="Card image cap"></img>
                    </CardTitle>
                    <CardText>
                    <h5> Omnifood </h5>
                    Omnifood is a fictional food delivery company, 
                    that provides food delivery services that serve whatever the customer feels 
                    like eating such as pizza, ramen, steak, burgers, soup, dessert, and many more delishes orders.
                    The purpose of the website is to practive advanced CSS and SASS methods, to better organize 
                    the code that is used to create certain parts of the website.
                    </CardText>
                    <CardActions border>
                        <Button colored style={{textDecoration: 'none'}} href="https://github.com/JonathanR5000/Omnifood" target="_blank"> Github </Button>
                        <Button colored style={{textDecoration: 'none'}} href="https://jonathanr5000.github.io/Omnifood/" target="_blank"> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                    </CardMenu>
                    
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}>
                    <img class="card-img-top" src={Nexter} alt="Card image cap"></img>
                    </CardTitle>
                    <CardText>
                    <h5> Nexter </h5>
                    Nextor is a fictional real estate company, 
                    who's mission is to help you find your dream home! 
                    The purposes of the website is to practice advanceds CSS methods such as CS grid, and SASS 
                    to help better showcase each image effectively.
                    </CardText>
                    <CardActions border>
                        <Button colored style={{textDecoration: 'none'}} href="https://github.com/JonathanR5000/Nexter" target="_blank"> Github </Button>
                        <Button colored style={{textDecoration: 'none'}} href="https://jonathanr5000.github.io/Nexter/" target="_blank"> Live </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
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
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
                    </CardMenu>
                    
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url() center /cover'}}> Coming Soon! </CardTitle>
                    <CardText>
                        
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                    </CardActions>
                    <CardMenu style={{color: "black"}}>
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
                    <Tab style={{textDecoration: 'none'}} >HTML/CSS</Tab>
                    <Tab style={{textDecoration: 'none'}} >Java</Tab>
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
export default Projects;