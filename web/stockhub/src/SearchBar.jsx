import React from 'react';
import { connect } from 'react-redux';
import { fetchStockSearchData } from "./stockSearchActions";
import { TrieNode } from './trie';

const stockTrie = new TrieNode(undefined, {});

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchStockSearchData()).then(() => {
      if (!this.props.stocks) return;
      for (let i = 0; i < this.props.stocks.length; i++) {
        if (this.props.stocks[i].name) {
          stockTrie.insert(stockTrie, this.props.stocks[i].name);
        }
      }
    });
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
    stockTrie.search(stockTrie, evt.target.value);
  }

  render() {
    return (
      <div>
        <input type="search" id="stockSearch" placeholder="Facebook" value={ this.state.inputValue } onChange={ this.handleChange } />
        <div className="dropdown">
          { stockTrie.searchResult.map(
            (stock, id) => <p key={ id }>{ stock }</p>
          ) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stocks: state.stocks.items,
});

export default connect(mapStateToProps)(SearchBar);
