import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Content from '../content/Content';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import About from '../about/About';
import Admin from '../admin/Admin';

class MainContent extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Switch>
          <Route exact path={process.env.PUBLIC_URL +'/lucas-rabuffetti'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL +'/lucas-rabuffetti/experience'} component={Experience} />
          <Route exact path={process.env.PUBLIC_URL +'/lucas-rabuffetti/content'} component={Content} />
          <Route exact path={process.env.PUBLIC_URL +'/lucas-rabuffetti/skills'} component={Skills} />
          <Route exact path={process.env.PUBLIC_URL +'/lucas-rabuffetti/about'} component={About} />
          <Route exact path={process.env.PUBLIC_URL +'/lucas-rabuffetti/admin'} component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default MainContent;