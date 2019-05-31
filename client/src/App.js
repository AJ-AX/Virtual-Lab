import React from 'react';
import IndexPage from './Components/Pages/Index';
import LevelPage from './Components/Pages/Levels';
import InstructorView from './Components/Pages/InstructorView';
import ProblemPage from './Components/Pages/Problems';

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
    else if(this.state.page =="Problems"){
      return(
        <ProblemPage />
      );
    }
  }
}

