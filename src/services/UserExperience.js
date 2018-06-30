import React, { Component } from 'react';
import axios from 'axios';

class UserExperience extends Component {
  constructor() {
    super();
    // user information request
    this.state = {
      experienceInformation: []
    };
  }

  componentDidMount() {
    const ax = axios.create({
      baseURL: 'https://demo7092324.mockable.io/'
    });
    ax
      .get('work-experience')
      .then(response => {
        const experienceInformation = response.data.data;
        this.setState({ experienceInformation });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.experienceInformation.map((experience, index) =>
          <div key={index} className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{experience.title}</h3>
              <div className="subheading mb-3">{experience.company}</div>
              <p className="text-cap">{experience.description}</p>
              <div className="subheading mb-3">Technologies:</div>
              <ul>
                {experience.technologies.map((technology, index) =>
                  <li className="text-cap" key={index}>{technology}</li>
                )}
              </ul>
            </div>
            <div className="resume-date text-md-right text-cap">
              {
                experience.actual ? 
                <span className="text-primary">{experience.from} -  actual</span> : 
                <span className="text-primary">{experience.from} -  {experience.to}</span>
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserExperience;