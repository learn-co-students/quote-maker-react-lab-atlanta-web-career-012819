import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    // debugger;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {this.props.quotes.map(quote => (
                <QuoteCard
                  key={quote.id}
                  {...quote}
                  handleRemove={this.props.handleRemove}
                  handleUpvote={this.props.handleUpvote}
                  handleDownvote={this.props.handleDownvote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: id => {
      dispatch(removeQuote(id));
    },
    handleUpvote: id => {
      dispatch(upvoteQuote(id));
    },
    handleDownvote: id => {
      dispatch(downvoteQuote(id));
    }
  };
};
//add arguments to connect as needed
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes);
