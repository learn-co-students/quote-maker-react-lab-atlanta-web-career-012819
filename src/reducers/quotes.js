export default (state = [], action) => {
  let idx, quote;
  if (action.quoteId) {
    quote = state.find(quote => quote.id === action.quoteId);
    idx = state.indexOf(quote);
  }

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "UPVOTE_QUOTE":
      return state.map(quote =>
        quote.id === action.quoteId
          ? { ...quote, votes: quote.votes + 1 }
          : quote
      );
    case "DOWNVOTE_QUOTE": {
      if (quote.votes > 0)
        return state.map(quote =>
          quote.id === action.quoteId
            ? { ...quote, votes: quote.votes - 1 }
            : quote
        );
      else return state;
    }
    default:
      return state;
  }
};
