import React from 'react';
import TableRow from './TableRow';
import './table.css';

const Table = ({ investments }) => {
  // console.log(props);

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
          </tr>
          <TableRow data={investments}/>
        </tbody>
      </table>
    </div>
  )
}

export default Table;