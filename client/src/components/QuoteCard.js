import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class QuoteCard extends Component {
  render() {
    const { quote } = this.props;
    // above is same as below
    // const quote = this.props.quote
    return (
      <Card
      centered={true}
      header={quote.Author}
      meta='Description'
      />
    )
  }
}

export default QuoteCard;
