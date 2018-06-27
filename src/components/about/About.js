import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>
            Not only I dedicate myself to web programming, in fact, when they ask me: "Who are you?" I always answer, a basketball player
            who enjoys playing the guitar and good times with family, friends and dog. I'm in a relationship since a couple of months with
            the most beautiful (woman?) and I'm able to support myself in everything I need.
          </p>
          <p>
            I also enjoy good books, outdoor activities and good "mates" and talking with my dad is what I sometimes need to return to Earth.
          </p>
        </div>
        <div className="my-auto">
          <img className="img-flui img-thumbnail about-img" src={require('../../assets/img/about/1.jpg')} alt="my 2 fav guitars" />
          <img className="img-fluid img-thumbnail about-img" src={require('../../assets/img/about/3.jpg')} alt="some of my guitars" />
          <img className="img-fluid img-thumbnail about-img" src={require('../../assets/img/about/4.jpg')} alt="some of my guitars" />
        </div>
        <div className="my-auto">
        <img className="img-fluid img-thumbnail about-img" src={require('../../assets/img/about/5.jpg')} alt="My basqetball team" />
          <img className="img-fluid img-thumbnail about-img" src={require('../../assets/img/about/6.jpg')} alt="My basqetball team" />
          <img className="img-fluid img-thumbnail about-img" src={require('../../assets/img/about/7.jpg')} alt="My basqetball team" />
          <img className="img-fluid img-thumbnail about-img" src={require('../../assets/img/about/8.jpg')} alt="My basqetball team" />
        </div>
      </section>
    );
  }
}

export default About;