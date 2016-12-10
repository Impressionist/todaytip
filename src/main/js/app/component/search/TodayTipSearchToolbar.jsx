import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';

export default class TodayTipSearchToolbar extends React.Component {

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
    return (
      <Toolbar>
        <ToolbarGroup>
          <AutoComplete
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            fullWidth
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}