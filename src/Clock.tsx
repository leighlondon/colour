import * as React from "react";

class Clock extends React.Component<Clock.Props, Clock.State> {
  private timer: NodeJS.Timer;
  constructor(props: Clock.Props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export namespace Clock {
  export interface Props {}
  export interface State {
    date: Date;
  }
}

export default Clock;
