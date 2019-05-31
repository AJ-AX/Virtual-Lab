import React from "react";
import {List, Image, Dropdown} from 'semantic-ui-react';

class ListItem extends React.Component{
    render(){
        return this.props.data.map((el) => (
            <>
            <List.Item>
                {
                    !el.icon &&
                    <List.Icon name="github" size="large" verticalAlign="middle" />
                }
                {
                    el.icon &&
                    <Image avatar src={el.icon} />
                }
                <List.Content>
                    <List.Header><p contentEditable="true">{el.name}</p></List.Header>
                    <TagMenu />
                </List.Content>
            </List.Item>
            </>
        ));
    }
}

class TagMenu extends React.Component{
    state = {options}

    listAdd = (e, {value}) => {
        this.setState(prevState => ({
            options: [{text: value, value}, ...prevState.options],
        }))
    };

    handleChange = (e, { value }) => this.setState({ currentValues: value });

    render(){
        const {currentValues} = this.state;

        return (
            <Dropdown
              options={this.state.options}
              placeholder='Tags'
              search
              selection
              fluid
              multiple
              allowAdditions
              icon
              value={currentValues}
              onAddItem={this.listAdd}
              onChange={this.handleChange}
            />
        );
    }
}

export default class ProblemsList extends React.Component{
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
        margin: 'auto',
        width: '100%'
    }
}

const options = [
    { key: 'variables', text: "Variables", value: 'variables'},
    { key: 'assignments', text: "Assignments", value: 'assignments'},
    { key: 'functions', text: "Functions", value: 'functions'},
    { key: 'loops', text: "Loops", value: 'loops'},
  ]