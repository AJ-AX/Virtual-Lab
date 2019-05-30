import React from 'react'
import { Header, Modal, Button, Input, Icon } from 'semantic-ui-react'

export default class SignupModal extends React.Component{
  render(){
    return(
      <Modal open={this.props.open} 
        closeOnEscape={true}
        closeOnRootNodeClick={true}
        onClose={this.props.close}
        >
        <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
            <Input icon='users' iconPosition='left' placeholder='Username' />
            <Input iconPosition='left' placeholder='Email'>
              <Icon name='at' />
              <input />
            </Input>
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
          </Modal.Content>
          <Modal.Actions>
            <Button primary>
              Sign Up <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
      </Modal>
    );
  }
}