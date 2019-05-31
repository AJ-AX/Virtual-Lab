import React from "react";
import HeadBar from '../HeadBar';
import SubmenuHeader from '../Submenu';
import { Button } from 'semantic-ui-react';
import ProblemsList from '../ProblemsList';

export default class ProblemPage extends React.Component{
    render(){
        return(
            <>
            <HeadBar breadcrumbs="true" />
            <SubmenuHeader color="#cb9100"
            showoptions="true"
            title="All Problems"
            />
            <div style={styles.body}>
                <div style={styles.border}>
                    <Button color="orange" style={styles.addbutton}>New</Button>
                    <div style={styles.list}>
                        <div style={styles.overflow}>
                            <ProblemsList />
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
        marginLeft: '33%',
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
        width: '75%'
    }
}