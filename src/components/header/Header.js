import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../navItem/NavItem';

class Header extends Component {
    constructor(props) {
        super(props);
        this.navigationItems = {
            items: [
                {
                    link: '/lucas-rabuffetti/',
                    name: 'home'
                },
                {
                    link: '/lucas-rabuffetti/experience',
                    name: 'experience'
                },
                {
                    link: '/lucas-rabuffetti/content',
                    name: 'education'
                },
                {
                    link: '/lucas-rabuffetti/skills',
                    name: 'skills'
                },
                {
                    link: '/lucas-rabuffetti/about',
                    name: 'about me'
                }
            ]
        }
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <Link className="navbar-brand js-scroll-trigger" to='/lucas-rabuffetti'>
                        <span className="d-block d-lg-none">Lucas Rabuffetti CV</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('../../assets/img/profile.png')} alt="" />
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            {this.navigationItems.items.map((item, i) => <NavItem key={i} data={item} />)}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
