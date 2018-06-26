import React from 'react';
import UserExperience from '../../services/UserExperience';

class Experience extends React.Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <UserExperience />
        </div>
      </section>
    );
  }
}

export default Experience;