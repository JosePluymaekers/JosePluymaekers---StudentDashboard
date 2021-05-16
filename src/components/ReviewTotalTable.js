import React from "react";

class ReviewTotalTable extends React.Component {
  render() {
    const reviews = this.props.reviews;

    return (
      <div>
        <table>
          <tr>
            <th>first name</th>
            <th>task</th>
            <th>enjoyment</th>
            <th>difficulty</th>
          </tr>

          {reviews.map((review) => {
            return (
              <tr>
                <td>{review.firstName}</td>
                <td>{review.task}</td>
                <td>{review.enjoymentRating}</td>
                <td>{review.difficultyRating}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default ReviewTotalTable;
