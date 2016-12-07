import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodayTipList from '../layout/TodayTipList';
import TodayTipSearchToolbar from '../component/search/TodayTipSearchToolbar';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <TodayTipSearchToolbar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <TodayTipList />
        </MuiThemeProvider>
      </div>
    );
  }
}
