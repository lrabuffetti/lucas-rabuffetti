import React from 'react';
import UserPersonalProjects from '../../services/UserPersonalProjects';

class PersonalProjects extends React.Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <div className="my-auto">
          <h2 className="mb-5">Personal Projects</h2>
          <UserPersonalProjects />
        </div>
      </section>
    );
  }
}

export default PersonalProjects;