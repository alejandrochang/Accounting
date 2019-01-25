import React , { Component } from "react";
import TableData from './TableData';
import "./table.css";


const TableRow = props => {
  const investments = props.data.map(company => {
    return (
      <tr>
        <td>Name</td>
        <td></td>
        <td></td>
        <td>Shares</td>
        <td>Cost</td>
      </tr>
    );
  });

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