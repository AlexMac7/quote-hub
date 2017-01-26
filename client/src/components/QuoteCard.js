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
      image={quote.imageURL}
      header={quote.Author}
      meta='Quote'
      description={quote.Quote}
      />
    )
  }
}

export default QuoteCard;
