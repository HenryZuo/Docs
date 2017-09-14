import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

require('../styles/draft.css');


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        <div className="landingTitle">Welcome to Docs! </div>
        <List>
          <ListItem>
            <Link to='/Login'>Login</Link>
          </ListItem>
          <ListItem>
            <Link to='/Register'>Register</Link>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Landing;
