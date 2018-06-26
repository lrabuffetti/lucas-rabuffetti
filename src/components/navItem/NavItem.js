import React from 'react';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {
  render() {
     return (
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to={this.props.data.link}>{this.props.data.name}</Link>
        </li>
     );
  }
}

export default NavItem;