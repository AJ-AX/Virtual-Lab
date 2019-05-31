import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react'

export default class LevelsModal extends React.Component{
    constructor(){
        super();
        this.state = {
            currentModal: 1
        }
    }
    render(){
        if(this.state.currentModal == 1){
            return(
                <Modal 
                open={this.props.open} 
                closeOnEscape={true}
                closeOnRootNodeClick={true}
                onClose={this.props.close}
                size="large"
                >
                    <Modal.Header>Create New Level (1/2)</Modal.Header>
                        <Modal.Content>
                            <h1>Coming Soon</h1>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button primary onClick={()=>this.setState({currentModal:2})}>Continue <Icon name="chevron right" /></Button>
                        </Modal.Actions>
                </Modal>
            );
        }
        else{
            return(
                <Modal
                open={this.props.open}
                closeOnEscape={true}
                closeOnRootNodeClick={true}
                onClose={this.props.close}
                size="large"
                >
                    <Modal.Header>Create New Level (2/2)</Modal.Header>
                    <Modal.Content>
                        <h1>Coming Soon</h1>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary onClick={()=>this.setState({currentModal:1})}><Icon name="chevron left" />Return</Button>
                        <Button color="green">Submit  <Icon name="checkmark" /></Button>
                    </Modal.Actions>
                </Modal>
            )
        }
    }
}