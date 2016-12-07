import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TodayTipSearchInput from '../component/search/TodayTipSearchInput';

export default class TodayTipAppBar extends Component {

  state = {
    showMenu: false,
  };

  handleLeftIconButtonTouchTap = () => {
    console.log('test');
  };

  render() {
    return (
      <div>
        <AppBar
          title="TodayTip"
          iconElementRight={
            <div>
              <TodayTipSearchInput />
            </div>
          }
          onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
        />
      </div>
    );
  }
}
