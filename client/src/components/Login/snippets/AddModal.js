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
import { addProduct } from '../../../redux/actions/productActions';
import '../Login.scss';

class AddModal extends Component{

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

  onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: this.state.name
    }
    this.props.addProduct(newProduct);
    this.toggle();
  }

  render() {
    
    return (
      <>
        <Button onClick={this.toggle}>Add product</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add product</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input onChange={this.onChange} type="text" name="name" id="item" placeholder="Add product" />
              </FormGroup>
              <Button>Agregar</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, { addProduct })(AddModal);





