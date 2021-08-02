import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLogin from './components/MainLogin'
import MainSignUp from './components/MainSignUp'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Navbar2 from './components/Navbar2';
import Home2 from './pages/Home2';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';


class App extends Component {

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar2 />
            <br />
          </div>
          <Switch>
            <Route exact path="/" component={Home2} />
            <Route path='/signin' component={MainLogin} />
            <Route path='/signup' component={MainSignUp} />
            <Route path='/blog' component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
          <div>
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
