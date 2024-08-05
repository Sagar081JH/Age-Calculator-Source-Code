import React from "react";

export class CurrentTime extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Current Time : {this.state.curTime}</p>
      </div>
    );
  }
}
