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
          <Route exact path={process.env.PUBLIC_URL +'/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL +'/experience'} component={Experience} />
          <Route exact path={process.env.PUBLIC_URL +'/content'} component={Content} />
          <Route exact path={process.env.PUBLIC_URL +'/skills'} component={Skills} />
          <Route exact path={process.env.PUBLIC_URL +'/about'} component={About} />
        </Switch>
      </div>
    );
  }
}

export default MainContent;