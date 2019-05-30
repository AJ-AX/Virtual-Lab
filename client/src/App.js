import React from 'react';
import IndexPage from './Components/Index';
import LevelPage from './Components/Levels';
import InstructorView from './Components/InstructorView';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      page: "Index",
    }
  }
  render(){
    if(this.state.page == "Index"){
      return (
        <>
        <IndexPage />
        </>
      );
    }
    else if(this.state.page == "Workpage"){
      return(
        <LevelPage />
      )
    }
    else if(this.state.page == "InstructorView"){
      return(
        <InstructorView />
      )
    }
  }
}

