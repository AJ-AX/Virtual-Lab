import React from "react";

export default class SubmenuHeader extends React.Component{
    render(){
        let ColorStyle = Object.assign(styles.bar);
        ColorStyle.backgroundColor = this.props.color;
        return(
            <div style={ColorStyle}>
                <h style={styles.title}>Title</h>
            </div>
        )
    }
}

const styles = {
    bar: {
        width: '100%',
        position: 'fixed',
        height:'8%',
        top: '8%'
    },
    title: {
        color: "white"
    }
}