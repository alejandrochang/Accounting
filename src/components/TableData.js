import React , { Component } from "react";
import "./table.css";

class TableData extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
    this.state = { name: null, shares: null, cost: null, assets: null };
  }

  componentDidUpdate() {
    if (this.props.data) {
      this.props.data.map(({ name, cost, issued_assets, quantity }) => {
        this.setState({ name: name, shares: quantity, cost: cost, assets: issued_assets });
      })
    }
  }

  render() {
    return ( <tr>
      <td>Arcanerover</td>
      <td></td>
      <td></td>
      <td>Germany</td>
      <td>Germany</td>
    </tr>
    );
  }
};

export default TableData;

{/* <tr>
  <td>Arcanerover</td>
  <td></td>
  <td></td>
  <td>Germany</td>
  <td>Germany</td>
</tr> */}