import React from 'react';
import { connect } from 'react-redux';
import Infinite from 'react-infinite';
import { GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { getTips } from '../../services/tip/tip';

class TodayTipList extends React.Component {

  componentWillMount() {
    this.setState({ page: 0, elements: [] });
  }

  componentDidMount() {
    this.updateTips(this.state.page);
  }

  handleInfiniteLoad = () => {
    const currentPage = this.state.page;
    const nextPage = currentPage + 1;
    if (this.props.totalPages > nextPage) {
      this.setState({ page: nextPage });
      this.updateTips(nextPage);
    }
  };

  async updateTips(page) {
    await this.props.getTips(page);
    await this.buildElements();
  }

  buildElements = () => {
    const currentElement = this.state.elements;
    const newElement = this.props.tips.map(tip => this.renderElements(tip));
    this.setState({ elements: currentElement.concat(newElement) });
  };

  elementInfiniteLoad = () => (
    <div className="infinite-list-item">
      Loading...
    </div>
  );

  renderElements = (tip) => {
    const defaultImage = 'images/tip.jpg';
    return (
      <GridTile
        key={tip.id}
        title={tip.title}
        subtitle={<span>by <b>{tip.writer}</b></span>}
        style={{ height: 180 }}
      >
        <a href={tip.link} target="_blank">
          <img src={tip.image || defaultImage} alt={tip.title} style={{ width: '100%', height: 180 }} />
        </a>
      </GridTile>
    );
  };

  render() {
    return (
      <div>
        <Subheader>Today Tip</Subheader>
        <Infinite
          elementHeight={180}
          infiniteLoadBeginEdgeOffset={30}
          useWindowAsScrollContainer
          onInfiniteLoad={this.handleInfiniteLoad}
          loadingSpinnerDelegate={this.elementInfiniteLoad()}
          isInfiniteLoading={this.props.isLoading}
        >
          {this.state.elements}
        </Infinite>
      </div>
    );
  }
}

TodayTipList.propTypes = {
  tips: React.PropTypes.array,
  totalPages: React.PropTypes.number,
  isLoading: React.PropTypes.bool,
  getTips: React.PropTypes.func,
};

export default connect(state => ({ tips: state.tip.tips,
  totalPages: state.tip.totalPages,
  isLoading: state.progress.isLoading })
  , { getTips })(TodayTipList);
