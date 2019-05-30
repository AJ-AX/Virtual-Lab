import React from "react";
import HeadBar from './HeadBar';
import SubmenuHeader from './Submenu'
import { Button } from 'semantic-ui-react'
import LevelsList from './LevelsList'

export default class LevelPage extends React.Component{
    render(){
        return(
            <>
            <HeadBar breadcrumbs='true'/>
            <SubmenuHeader color="#548135" 
            showoptions="true"
            title="All Levels"
            />
            <div style={styles.body}>
                <div style={styles.border}>
                <Button color="green" style={styles.addbutton}>New</Button>
                    <div style={styles.list}>
                        <div style={styles.overflow}>
                            <LevelsList />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    body:{
        width: '50%',
        top: '16%',
        height: '84%',
        position: 'absolute',
    },
    addbutton: {
        marginTop: '6%',
        marginLeft: '13%',
    },
    border:{
        borderRight: '1%',
        borderColor: 'lightgrey'
    },
    list: {
        marginTop: '3%',
    },
    overflow: {
        overflow: 'auto',
        position: 'absolute',
        maxHeight: '82%',
    }
}