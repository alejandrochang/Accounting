import React from 'react';
// import TableRows from './TableRow';
import './table.css';

const Table = ({ investments }) => {

  const investment = investments.map(asset => {
    console.log(asset);
    return (
      <tr>
        <td>{asset.name}</td>
        <td></td>
        <td></td>
        <td>{asset.quantity}</td>
        <td>{asset.cost}</td>
      </tr>
    );
  })

  if (!investment) {
    return <div>...Loading</div>
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Investment</th>
              <th>Asset</th>
              <th>Investment Date</th>
              <th>Shares</th>
              <th>Cost</th>
              {/* {investment}; */}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;