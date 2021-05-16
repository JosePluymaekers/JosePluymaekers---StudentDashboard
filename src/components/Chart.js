import React from "react";

class Chart extends React.Component {
  render() {
    const reviews = this.props.reviews;
    console.log(reviews);

    return (
      <div>
        <h1>chart here</h1>
      </div>
    );
  }
}
export default Chart;
