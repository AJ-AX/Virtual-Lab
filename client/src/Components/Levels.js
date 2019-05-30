import React from "react";
import HeadBar from './HeadBar';
import SubmenuHeader from './Submenu'

export default class LevelPage extends React.Component{
    render(){
        return(
            <>
            <HeadBar state="index"/>
            <SubmenuHeader color="#548135" />
            </>
        )
    }
}