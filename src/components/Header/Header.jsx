import React from "react";
import { connect } from "react-redux";

import "./Header.scss";

function Header({ productsList }) {
  return (
    <header className="header">
      <h1>
        Products <span>{productsList.length}</span>
      </h1>
    </header>
  );
}
const mapStateToProps = (state) => ({
  productsList: state.productsList,
});
export default connect(mapStateToProps)(Header);
