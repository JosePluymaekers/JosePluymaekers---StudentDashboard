import React from "react";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryGroup,
} from "victory";

class Chart extends React.Component {
  render() {
    const tasks = this.props.tasks;
    console.log(tasks);

    return (
      <div>
        <h1>chart here</h1>
        <VictoryChart domainPadding={0} theme={VictoryTheme.material}>
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
            standalone={false}
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
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={(x) => `${x / 1}`}
            standalone={false}
            style={{
              tickLabels: {
                fontSize: 4,
                fill: "#223243",
              },
            }}
          />
          <VictoryGroup offset={160 / tasks.length}>
            <VictoryBar data={tasks} x={"task"} y={"averageDifficulty"} />
            <VictoryBar data={tasks} x={"task"} y={"averageEnjoy"} />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}
export default Chart;
