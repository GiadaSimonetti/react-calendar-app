import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle'
import './NewCalendar.css';

class NewCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <div className="delivery-message-box">
        <p className="delivery-message"> Delivery dates will change for all upcoming boxes
        </p>
        <button className="btn btn-calendar btn-cancel"> {"cancel,"}
        <br />{"don't change"}
        </button>
        <button className="btn btn-calendar btn-change"> change date
        </button>
        </div>
      </div>
    );
  }
}

export default NewCalendar;
