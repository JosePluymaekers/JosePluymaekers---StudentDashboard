import React, { Component } from "react";
import reviewsData from "./reviewsData";
import ReviewTotalTable from "./ReviewTotalTable";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      reviews: reviewsData,
    };
    console.log(this.state.reviews);
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <ReviewTotalTable reviews={this.state.reviews} />
      </div>
    );
  }
}

export default Container;
