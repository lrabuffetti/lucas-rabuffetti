import React, { Component } from 'react';
import axios from 'axios';

class UserInfo extends Component {
  constructor() {
    super();
    // user information request
    this.state = {
      educationInformation: []
    };
  }

  componentDidMount() {
    const ax = axios.create({
      baseURL: 'https://demo7092324.mockable.io/'
    });
    ax
      .get('education')
      .then(response => {
        const educationInformation = response.data.data;
        this.setState({ educationInformation });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.educationInformation.map((education, index) =>
          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{education.name}</h3>
              <div className="subheading mb-3">{education.institution}</div>
              <div className="text-cap">{education.description}</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{education.startYear} - {education.endYear}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserInfo;