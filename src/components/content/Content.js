import React from 'react';
import UserInfo from '../../services/UserInformation';

class Content extends React.Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
          <UserInfo />
        </div>
      </section>
    );
  }
}

export default Content;