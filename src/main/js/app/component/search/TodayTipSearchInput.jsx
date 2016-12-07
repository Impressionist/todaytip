import React from 'react';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { brown50 } from 'material-ui/styles/colors';
import { Link } from 'react-router';

export default class TodayTipSearchInput extends React.Component {
  render() {
    return (
      <div>
        <Link to="search">
          <IconButton tooltip="Search">
            <SearchIcon color={brown50} />
          </IconButton>
        </Link>
      </div>
    );
  }
}
