import React, { Component } from 'react';
import QuoteList from './QuoteList';

import { Divider } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Divider />
        <QuoteList {...this.props} />
      </div>
    );
  }
}

export default Home;
