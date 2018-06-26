import React, { Component } from 'react';
import axios from 'axios';

class UserData extends Component {
  constructor() {
    super();
    // user information request
    this.state = {
      personalInformation: []
    };
  }

  componentDidMount() {
    const ax = axios.create({
      baseURL: 'https://demo7092324.mockable.io/'
    });
    ax
      .get('user-data')
      .then(response => {
        const personalInformation = response.data;
        this.setState({ personalInformation });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="my-auto">
        <h1 className="mb-0">{this.state.personalInformation.name}
            <span className="text-primary">{this.state.personalInformation.secondName}</span>
        </h1>
        <div className="subheading mb-5">
          {this.state.personalInformation.direction} · {this.state.personalInformation.phoneNumber} ·
            <a href={"mailto:" + this.state.personalInformation.email}>{this.state.personalInformation.email}</a>
        </div>
        <div className="subheading mb-5">
          {this.state.personalInformation.directionSecondary} · {this.state.personalInformation.phoneNumberSecondary} ·
            <a href={"mailto:" + this.state.personalInformation.email}>{this.state.personalInformation.email}</a>
        </div>
        <p className="mb-5">{this.state.personalInformation.resume}</p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="https://twitter.com/LucasRabuffa" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/lucas-rabuffetti-49748b27/" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/lrabuffetti/" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserData;