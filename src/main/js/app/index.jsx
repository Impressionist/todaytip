import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const App = () => (
  <MuiThemeProvider>
    <RaisedButton label="Default" />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app')); // eslint-disable-line
