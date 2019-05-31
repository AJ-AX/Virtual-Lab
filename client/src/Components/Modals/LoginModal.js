import React from 'react'
import { Form, Modal, Button, Input, Icon } from 'semantic-ui-react'

export default class LoginModal extends React.Component{
  render(){
    return(
      <Modal open={this.props.open} 
        closeOnEscape={true}
        closeOnRootNodeClick={true}
        onClose={this.props.close}
        size="tiny"
        >
        <Modal.Header>Log In</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Username</label>
                <Input placeholder="Username" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Input placeholder="Password" type="password" />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>Forgot Password</Button>
            <Button primary>
              Log In <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
      </Modal>
    );
  }
}