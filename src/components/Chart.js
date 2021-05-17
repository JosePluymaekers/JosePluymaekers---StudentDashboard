import React from "react";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from "victory";

class Chart extends React.Component {
  render() {
    const tasks = this.props.tasks;
    console.log(tasks);

    return (
      <div>
        <h1>chart here</h1>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            style={{
              ticks: {
                fill: "transparent",
                size: 2,
                stroke: "black",
                strokeWidth: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
            }}
            tickLabelComponent={
              <VictoryLabel
                angle={() => {
                  return this.props.tasks.length < 16 ? 0 : 60;
                }}
                dx={-5.5}
                dy={-4}
                style={{
                  fontSize: 4,
                  fill: "#223243",
                }}
                textAnchor={"start"}
              />
            }
          />

          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={(x) => `${x / 1}`}
            style={{
              tickLabels: {
                fontSize: 4,
                fill: "#223243",
              },
            }}
          />
          <VictoryBar
            data={tasks}
            // data accessor for x values
            x={"task"}
            // // data accessor for y values
            y={"averageDifficulty"}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default Chart;
