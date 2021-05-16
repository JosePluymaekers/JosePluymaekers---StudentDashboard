import React, { Component } from "react";
import ReviewData from "../data/data.json";

class ReviewList extends Component {
  state = {};
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>first name</th>
            <th>task</th>
            <th>enjoyment</th>
            <th>difficulty</th>
          </tr>

          {ReviewData.map((review) => {
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

export default ReviewList;
