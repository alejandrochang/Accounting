import React, { Component } from "react";
import "./table.css";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = { name: null, shares: null, cost: null, assets: null };
  }

  // componentDidUpdate() {
  //   if (this.props.data) {
  //     this.props.data.map(({ name, cost, issued_assets, quantity }) => {
  //       this.setState({ name: name, shares: quantity, cost: cost, assets: issued_assets });
  //     })
  //   }
  // }

  render() {
    return (
      <tr>
        <td>Name</td>
        <td></td>
        <td></td>
        <td>Shares</td>
        <td>Cost</td>
      </tr>
    )
  }
};

export default TableData;