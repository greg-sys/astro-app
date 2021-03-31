import React, { Component } from 'react';
import './App.css';
import AstroYantra from './components/astroYantra';
import MediaQuery from 'react-responsive';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('app - constructor');
  }

  componentDidMount() {
    // can add Ajax Call to get data from server here
    console.log('app - mounted');
  }

  render() {
    return (
      <React.Fragment>
        <main className="container">
        <MediaQuery maxWidth={1224}>
            <div class="topblock">
              <AstroYantra symbols="Thai" />
            </div>
            <div class="middleblock">
              <h1>Where are the planets?</h1>
              <div font-size="18px">
                Here are two React components rendered with Thai numerals and Western planetary symbols. These diagrams show the current positions of the planets in the sidereal zodiac signs. Aries is at the top, and the signs proceed counterclockwise through Taurus, Gemini, and so on.<br /><br />

                The design is based on this <a href ="https://commons.wikimedia.org/wiki/File:Thai_wheel_with_detriment.svg">astrological wheel</a> from Wikimedia Commons.<br /><br />

                The implementation is via the <a href="https://www.astro.com/swisseph/swephinfo_e.htm">Swiss Ephemeris</a>, using the standard Lahiri ayanamsa and the true lunar nodes.<br /><br />

                This is a project by Greg Lyon. If you would like to see the source code, please check out <a href="https://github.com/greg-sys">my GitHub page</a>.
              </div>
            </div>
            <div class="bottomblock">
              <AstroYantra symbols="Western" />
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1224}>
            <div class="leftcolumn">
              <AstroYantra symbols="Thai" />
            </div>
            <div class="column">
                <h1>Where are the planets?</h1>
                <div font-size="18px">
                  Here are two React components rendered with Thai numerals and Western planetary symbols. These diagrams show the current positions of the planets in the sidereal zodiac signs. Aries is at the top, and the signs proceed counterclockwise through Taurus, Gemini, and so on.<br /><br />

                  The design is based on this <a href ="https://commons.wikimedia.org/wiki/File:Thai_wheel_with_detriment.svg">astrological wheel</a> from Wikimedia Commons.<br /><br />

                  The implementation is via the <a href="https://www.astro.com/swisseph/swephinfo_e.htm">Swiss Ephemeris</a>, using the standard Lahiri ayanamsa and the true lunar nodes.<br /><br />

                  This is a project by Greg Lyon. If you would like to see the source code, please check out <a href="https://github.com/greg-sys">my GitHub page</a>.
                </div>
            </div>
            <div class="rightcolumn">
              <AstroYantra symbols="Western" />
            </div>
          </MediaQuery>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
