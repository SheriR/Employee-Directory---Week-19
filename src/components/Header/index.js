import React from "react";
//import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p>You can sort the directory by clicking on the column names.</p>
        <p>Or narrow the results by typing a name in the search box.</p>
      </div>
    </div>
  );
}

export default Header;
