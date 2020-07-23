import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';
  
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        
    };
  }

 
  render() {
    const HomePage= () =>{
        return(
          <Home />
        );
    }
    return (
      <div>
      <Header />
      <Switch>
        <Route path="/Home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
        <Redirect to="/Home" />
      </Switch>        
      <Footer />
      </div>
    );
  }
}

export default Main;