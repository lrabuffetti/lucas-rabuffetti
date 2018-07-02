import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserPersonalProjects extends Component {
  constructor() {
    super();
    // user information request
    this.state = {
      personalProjects: []
    };
  }

  componentDidMount() {
    const ax = axios.create({
      baseURL: 'https://demo7092324.mockable.io/'
    });
    ax
      .get('personal-projects')
      .then(response => {
        const personalProjects = response.data.data;
        this.setState({ personalProjects });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.personalProjects.map((project, index) =>
          <div key={index} className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{project.title}</h3>
              <div className="subheading mb-3">Description</div>
              <p className="text-cap">{project.description}</p>
              <div className="subheading mb-3">Technologies:</div>
              <ul>
                {project.technologies.map((technology, index) =>
                  <li className="text-cap" key={index}>{technology}</li>
                )}
              </ul>
              <div className="subheading mb-3">Project URL</div>
              <p dangerouslySetInnerHTML={{__html: project.url}}></p>
              <div className="subheading mb-3">Github Code</div>
              <p dangerouslySetInnerHTML={{__html: project.github}}></p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserPersonalProjects;