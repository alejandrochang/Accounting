import React from "react";
import TableData from './TableData';
import "./table.css";


const TableRow = props => {
  // const data = investments.map(company => {
  //   return (
  //     <TableRow company={company} />
  //   )
  // });

  return (
    <tr>
      <td>Name</td>
      <td></td>
      <td></td>
      <td>Shares</td>
      <td>Cost</td>
    </tr>
  );
};

export default TableRow;

// key = { image.id }

// <tr>
//   <td>Name</td>
//   <td></td>
//   <td></td>
//   <td>Shares</td>
//   <td>Cost</td>
// </tr>