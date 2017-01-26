export function recentQuotes() {
  return {
    type: 'RECENT_QUOTES_REQUESTED'
  }
}

export function addQuote(Author, Quote, imageURL) {
  return {
    type: 'ADD_QUOTE_REQUESTED',
    Author,
    Quote,
    imageURL
  }
}
