import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h4>This is Cuong and here is my first app</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
