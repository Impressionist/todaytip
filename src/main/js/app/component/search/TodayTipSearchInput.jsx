import React from 'react';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { brown50 } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';

export default class TodayTipSearchInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    const style = {
      display: 'inline',
    };

    return (
      <div style={style}>
        <Link to="search">
          <IconButton tooltip="Search">
            <SearchIcon color={brown50} />
          </IconButton>
        </Link>
        <AutoComplete
          hintText="Search"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}
