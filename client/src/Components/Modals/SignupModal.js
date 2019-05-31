import React from 'react'
import { Label, Modal, Button, Input, Icon, Form} from 'semantic-ui-react'

export default class SignupModal extends React.Component{
  render(){
    return(
      <Modal open={this.props.open} 
        closeOnEscape={true}
        closeOnRootNodeClick={true}
        onClose={this.props.close}
        size="tiny"
        >
        <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label>Username</label>
                <Input placeholder="Username" />
              </Form.Field>
              <Form.Field required>
                <label>Email</label>
                <Input placeholder="Email" label="@simons-rock.edu" labelPosition="right" />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <Input placeholder="Password" type="password"/>
              </Form.Field>
              <Form.Field required>
                <label>Confirm Password</label>
                <Input placeholder="Confirm Password" type="password"/>
              </Form.Field>
              <Form.Checkbox label='I agree to the Terms and Conditions'/>
            </Form>
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