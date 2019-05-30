import React from 'react';
import { List, Image } from 'semantic-ui-react';

class ListItem extends React.Component{
    render(){
        return this.props.data.map((el) => (
            <List.Item>
                {
                !el.icon &&
                <List.Icon name='github' size='large' verticalAlign='middle' />
                }
                {
                el.icon &&
                <Image avatar src={el.icon} />
                }
                <List.Content>
                    <List.Header as='a'>{el.name}</List.Header>
                    <List.Description as='a'>Updated 20 Years Ago</List.Description>
                </List.Content>
            </List.Item>
        ));
    }
}

export default class LevelsList extends React.Component{
    render(){
        let data = [{
            name: "Variables",
        },{
            name: "Lists"
        },{
            name: "Functions"
        }, {
            name: "Loops"
        }];
        return(
            <List relaxed selection style={styles.list} animated celled size={"big"}>
                <ListItem data={data} />
            </List>
        );
    }
}

const styles = {
    list: {
        margin: 'auto'
    }
}