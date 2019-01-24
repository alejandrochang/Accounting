import React from "react";
import "./table.css";

const TableData = props => {

  if (props.data) {
    props.data.map((investment) => {
      console.log(investment);
    })
  }

  return (
      <tr>
        <td>Arcanerover</td>
        <td></td>
        <td></td>
        <td>Germany</td>
        <td>Germany</td>
      </tr>
  );
};

export default TableData;
