import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { updateProduct } from '../../../redux/actions/productActions';
import '../Login.scss';

class UpdateModal extends Component{

  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onUpdateClick = (product) => {
    product.name = this.state.name;
    this.props.updateProduct(product);
    this.toggle();
  }

  render() {
    let currentProduct = this.props.data.currentProduct;

    return (
      <>
        <Button onClick={this.toggle}>Edit product</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit product</ModalHeader>
          <ModalBody>
            <FormGroup>
                <Label for="name">Product: {currentProduct.name}</Label>
                <Input onChange={this.onChange} type="text" name="name" id="name" />
            </FormGroup>
            <Button onClick={ this.onUpdateClick.bind(this, currentProduct) }>Editar</Button>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { updateProduct })(UpdateModal);