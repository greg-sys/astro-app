import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import AstroYantra from './components/astroYantra';

class App extends Component {

  state = {
    counters: [
        { id: 1, count: 4 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log('app - constructor');
  }

  componentDidMount() {
    // can add Ajax Call to get data from server here
    console.log('app - mounted');
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].count++;
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.count = 0;
        return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div class="leftcolumn">
            <AstroYantra symbols="Thai" />
          </div>
          <div class="column">
              <h1>Welcome to my Home Page!</h1>
              Here is my astrological yantra in two forms. These diagrams show the positions of the planets in the sidereal zodiac signs. Aries is at the top, and the signs proceed through Taurus, Gemini, and so on going counterclockwise.

              The design is based on this <a href ="https://commons.wikimedia.org/wiki/File:Thai_wheel_with_detriment.svg">astrological wheel</a> from Wikimedia Commons.

              The implementation is via the <a href="https://www.astro.com/swisseph/swephinfo_e.htm">Swiss Ephemeris</a>, using the standard Lahiri ayanamsa and the true lunar nodes.
          </div>
          <div class="rightcolumn">
            <AstroYantra symbols="Western" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
