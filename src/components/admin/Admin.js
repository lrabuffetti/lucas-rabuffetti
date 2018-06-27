import React from 'react';
import Login from '../admin/login/Login';

class Admin extends React.Component {

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="admin">
        <div className="my-auto">
          <h2 className="mb-5">Admin</h2>
          <Login />
        </div>
      </section>
    );
  }
}

export default Admin;