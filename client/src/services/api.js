export function getRecentQuotes(app) {
  const quotes = app.service('quotes');
  return quotes.find(
    {
      query: {'$sort': {'createdAt': -1}}
    }
  ).then((data, err) => data.data);
}

export function createQuote(app, Author, Quote, imageURL) {
  const quotes = app.service('quotes');
  return quotes.create({
    Author,
    Quote,
    imageURL
  }).then((data, err) => data);
}
