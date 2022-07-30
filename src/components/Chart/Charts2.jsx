// This File is just used for testing purposes of graph d3
import { Graph } from "react-d3-graph";
const data1 = {
  nodes: [
    { id: "Harry", x: 200, y: 200 },
    { id: "Sally", x: 240, y: 240 },
    { id: "Alice", x: 280, y: 280 },
  ],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const Chart2 = () => {
  return (
    <>
      <div>
        <div>
          <h5>Graph generated from the solution of algorithm</h5>
          <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={data1}
            config={myConfig}
          />
        </div>
      </div>
    </>
  );
};

export default Chart2;
