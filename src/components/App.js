import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, error: null }
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json#")
    .then(
      res => res.json())
    .then(
      result => {
        this.setState({ data: result });
      }
    );
  }

  render() {
    if (!this.state.data) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Table investments={this.state.data} />
        </div>
      );
    }
  }
}

export default App;
