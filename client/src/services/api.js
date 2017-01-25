export function getRecentQuotes(app) {
  const quotes = app.service('quotes');
  return quotes.find(
    {
      query: {'$sort': {'createdAt': -1}}
    }
  ).then((data, err) => data.data);
}
