import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { fetchProducts } from '../redux/actions/Products.actions'

import '../styles/product.css'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    // if (!this.props.user) return <Redirect to="/login" />;
    return this.props.products ? (
        <Products products={this.props.products} />
    ) : (
      <h1>Loading</h1>
    );
  }
}

const mapStateToProps = storeState => {
  return {

    products: storeState.ProductState.products
  };
};

export default connect(mapStateToProps, {fetchProducts})(HomePage);