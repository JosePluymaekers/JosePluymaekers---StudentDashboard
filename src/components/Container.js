import React, { Component } from "react";
import reviewsData from "./reviewsData";
import ReviewTotalTable from "./ReviewTotalTable";
import Chart from "./Chart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      reviews: reviewsData,
      tasks: [],
    };
  }

  componentDidMount() {
    let tasks = [];
    this.state.reviews.forEach((item) => {
      if (tasks.indexOf(item.task) === -1) {
        tasks.push(item.task);
      }
    });

    const updatedTasks = tasks.map((task) => {
      let difficulty = 0;
      let enjoyment = 0;
      let labels = [];

      this.state.reviews.forEach((item) => {
        if (task === item.task) {
          difficulty += parseInt(item.difficultyRating);
          enjoyment += parseInt(item.enjoymentRating);
          labels.push(item);
        }
      });
      const newObj = {
        task: task,
        averageDifficulty: difficulty / labels.length,
        averageEnjoy: enjoyment / labels.length,
        labels: labels,
      };
      return newObj;
    });
    this.setState((prevState) => {
      const updateState = { ...prevState };
      updateState.tasks = updatedTasks;
      return updateState;
    });
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <Chart tasks={this.state.tasks} />
        <ReviewTotalTable reviews={this.state.reviews} />
      </div>
    );
  }
}

export default Container;
