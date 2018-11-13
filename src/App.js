import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import './styles/styles.scss'

class App extends Component {
  render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/About' component={About}></Route>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
