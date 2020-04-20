import React from "react";
//import "./style.css";

function Table() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Image</td>
          <td>John Doe</td>
          <td>999-999-9999</td>
          <td>johndoe@email.com</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
