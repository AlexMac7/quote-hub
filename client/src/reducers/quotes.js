function quotes(state = [], action) {
  switch (action.type) {
    case "RECENT_QUOTES_SUCCEEDED":
      return action.quotes;

    default:
      return state;
  }
}


export default quotes;
