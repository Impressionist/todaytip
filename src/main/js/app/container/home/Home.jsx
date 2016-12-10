import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodayTipAppBar from '../layout/TodayTipAppBar';
import TodayTipList from '../layout/TodayTipList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <TodayTipAppBar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <TodayTipList />
        </MuiThemeProvider>
      </div>
    );
  }
}

