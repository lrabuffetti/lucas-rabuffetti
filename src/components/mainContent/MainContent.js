import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Content from '../content/Content';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import About from '../about/About';

class MainContent extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/content' component={Content} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default MainContent;