import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/actions/productActions';
import PropTypes from 'prop-types';
import AddModal from './snippets/AddModal';
import UpdateModal from './snippets/UpdateModal';
import { Container, Button } from 'reactstrap';
import './Login.scss';

class Login extends Component{

  componentDidMount() {
    this.props.getProducts();
  }

  onDeleteClick = (id) => {
    this.props.deleteProduct(id);
  }

  render() {
    const { products } = this.props.product;
    return (
      <>
      <Container>
        <div className="login">
          <h3>Products</h3>
          <hr/>
          {products.map(item => (
            <div className="d-flex">
              <p>Product: {item.name}</p>
              <UpdateModal data={{ currentProduct: item }} />
              <Button onClick={ this.onDeleteClick.bind(this, item._id) }>Eliminar</Button>
            </div>          
          ))}
          <AddModal />
        </div>
      </Container>
      </>
    )
  }
}

Login.propTypes = {
  getProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(Login);

