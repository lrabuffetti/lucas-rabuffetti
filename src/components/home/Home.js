import React from 'react';
import UserData from '../../services/UserData';

class Home extends React.Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <UserData />
      </section>

    );
  }
}

export default Home;