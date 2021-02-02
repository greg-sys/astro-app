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
          <div class="column">
            <AstroYantra moleculeScale="10" />
          </div>
          <div class="column">
            <AstroYantra moleculeScale="10" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
