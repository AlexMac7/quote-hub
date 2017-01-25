import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import QuoteCard from './QuoteCard';

class QuoteList extends Component {
  constructor(props) {
    super(props);

    this.props.recentQuotes();
  }

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={5}>
          {this.props.quotes.map((quote, i) => <QuoteCard {...this.props} key={i} quote={quote} />)}
        </Card.Group>
      </div>
    );
  }
}

export default QuoteList;
