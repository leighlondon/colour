// clock

import * as React from 'react';

class Clock extends React.Component<any, ClockState> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

interface ClockState {
  date: Date;
}

export default Clock;
