import React from 'react'
import { Header, Modal, Button, Input, Icon } from 'semantic-ui-react'

export default class LoginModal extends React.Component{
  render(){
    return(
      <Modal open={this.props.open} 
        closeOnEscape={true}
        closeOnRootNodeClick={true}
        onClose={this.props.close}
        >
        <Modal.Header>Log In</Modal.Header>
          <Modal.Content>
            <Input icon='users' iconPosition='left' placeholder='Username' />
            <Input placeholder="Password" />
          </Modal.Content>
          <Modal.Actions>
            <Button negative>Forgot Password</Button>
            <Button primary>
              Sign In <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
      </Modal>
    );
  }
}