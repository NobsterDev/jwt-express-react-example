import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom'
import * as loginActions from '../actions/Login.actions';
import { Form, Button, Card } from "react-bootstrap";

export class Login extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  login() {

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  render() {
  	return (
      <Card style={{ width: '18rem', margin: '0 auto', marginTop:'30px' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form onSubmit={this.login}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </Form.Group>
            <Button
              block
              disabled={!this.validateForm()}
              type="submit"
              variant="primary"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>      
   	);
  }
}

// map state from store to props
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))