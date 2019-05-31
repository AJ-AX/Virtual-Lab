import React from "react";
import Button from '@material-ui/core/Button';

import MenuImage from '../assets/menu.png';
import DeleteImage from '../assets/delete.png';
import DownloadImage from '../assets/download.png';
import EditImage from '../assets/edit.png';

export default class SubmenuHeader extends React.Component{
    render(){
        //var ColorStyle = Object.assign(styles.bar);
        //ColorStyle.backgroundColor = this.props.color;
        return(
            <div style={{width: '100%',
            position: 'fixed',
            height: '8%',
            top: '8%',
            alignItems: 'center',
            backgroundColor: this.props.color
            }}>
                <Button style={styles.title}>{this.props.title}</Button>
                { this.props.showoptions == "true" &&
                <div style={styles.actions}>
                    <div style={styles.icons}>
                        <Button style={styles.buttonwrapper}>
                            <img src={DownloadImage} alt="DownloadImage" style={styles.buttonimg} />
                        </Button>
                        <Button style={styles.buttonwrapper}>
                            <img src={EditImage} alt="EditImage" style={styles.buttonimg} />
                        </Button>
                        <Button style={styles.buttonwrapper}>
                            <img src={DeleteImage} alt="DeleteImage" style={styles.buttonimg} />
                        </Button>
                        <Button style={styles.buttonwrapper}>
                            <img src={MenuImage} alt="MenuImage" style={styles.buttonimg} />
                        </Button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

const styles = {
    bar: {
        width: '100%',
        position: 'fixed',
        height:'8%',
        top: '8%',
        alignItems: 'center',
    },
    title: {
        color: "white",
        fontFamily: '\'Roboto\', sans-serif',
        height: '100%',
        fontSize: '15px'
    },
    actions: {
        float: "right",
    },
    buttonwrapper: {
        height: '100%',
    },
    buttonimg: {
        position: 'relative',
        maxHeight: 'auto',
        maxWidth: '40px'
    }
}