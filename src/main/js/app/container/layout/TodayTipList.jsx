import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { getTips } from '../../services/tip/tip';

class TodayTipList extends React.Component {

  componentDidMount() {
    this.props.getTips();
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        overflowY: 'auto',
      },
    };

    const { tips } = this.props;
    const defaultImage = 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/14725693_562853750590507_6128949510153984509_n.png?oh=95c03048a0ede9d960041feceab013c9&oe=58BB3113';

    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>Today Tip</Subheader>
          {tips.map(tip => (
            <GridTile
              key={tip.id}
              title={tip.title}
              subtitle={<span>by <b>{tip.writer}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <a href={tip.link} target="_blank">
                <img src={tip.image || defaultImage} alt={tip.title} />
              </a>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

TodayTipList.propTypes = {
  tips: React.PropTypes.array,
  getTips: React.PropTypes.func,
};

export default connect(state => ({ tips: state.tip.tips }), { getTips })(TodayTipList);
