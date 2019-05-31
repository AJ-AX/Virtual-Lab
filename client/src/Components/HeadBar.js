import React from 'react';
import img from '../assets/pure_logo.svg';
import Button from '@material-ui/core/Button';
import LoginModal from "./Modals/LoginModal";
import SignupModal from "./Modals/SignupModal";
import BreadcrumbHolder from './BreadcrumbHolder';

export default class HeadBar extends React.Component{
    constructor(){
        super();
        this.state = {
            state: 'index',
            loginOpen: false,
            signupOpen: false
        };
    }

    render(){
        return(
            <>
            <div style={styles.navBar}>
                <div style={styles.logo}>
                    <Button className="logowrapper" style={styles.logobutton}>
                    <img src={img} alt="logo" style={styles.logoimage}/>
                    </Button>
                    
                </div>
            { this.props.breadcrumbs == 'true' &&
                <div style={styles.breadcrumb}>
                    <BreadcrumbHolder />
                </div>
            }
            { this.props.state == 'index'  &&
                <div style={styles.signup}>
                    <Button color="primary" style={styles.signupbutton} onClick={() => {this.setState({signupOpen: true});}}>
                        Sign Up
                    </Button>
                </div>
            }
            { this.props.state == 'index' &&
                <div style={styles.login}>
                    <Button color="secondary" style={styles.loginbutton} onClick={() => {this.setState({loginOpen: true});}}>
                        Log In
                    </Button>
                </div>
            }
            </div>
            <LoginModal open={this.state.loginOpen} close={() => {this.setState({loginOpen:false});}}/>
            <SignupModal open={this.state.signupOpen} close={() => {this.setState({signupOpen: false});}}/>
            </>
        );
    }
}

const styles = {
    navBar: {
        height:'8%',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    logo:{
        marginTop: '0.5%',
        flex: 1,
        alignSelf: 'flex-start'
    },
    logobutton:{
        maxHeight: 'auto'
    },
    logoimage:{
        maxHeight: '100%',
        maxWidth: '100px'
    },
    signup:{
        marginLeft: 'auto',
        height: '100%',
        alignSelf: 'flex-end',
    },
    signupbutton:{
        height: '100%'
    },
    login:{
        marginLeft: 'auto',
        height: '100%',
        alignSelf: 'flex-end'
    },
    loginbutton:{
        height: '100%'
    },
    breadcrumb: {
        flex: 18,
    }
}