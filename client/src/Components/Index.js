import React from 'react';
import HeadBar from './HeadBar';
import SRimg from '../assets/SR.jpg';

export default class IndexPage extends React.Component{
    
    render(){
        return(
            <>
                <HeadBar state="index"/>
                <img src={SRimg} style={styles.background} alt="srimg"/>
            </>
        )
    }
}

let styles = {
    background: {
        width: '100%',
        height: '92%',
        position: 'fixed',
        top: '8%'
    }
}