import React, { Component } from "react";
import reviewsData from "./reviewsData";
import ReviewTotalTable from "./ReviewTotalTable";
import Chart from "./Chart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      reviews: reviewsData,
    };
    console.log(this.state.reviews);
  }

  // getAverage(rating) {
  //   for (var i = 0; i < this.state.reviews.difficultyRating.length; i++) {
  //     sum += parseInt(grades[i], 10);
  //   }
  //   var avg = sum / grades.length;
  //   return avg;
  // }

  render() {
    return (
      <div>
        <Chart reviews={this.state.reviews} />
        <ReviewTotalTable reviews={this.state.reviews} />
      </div>
    );
  }
}

export default Container;
