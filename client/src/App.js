import React from 'react';
import IndexPage from './Components/Index';
import LevelPage from './Components/Levels';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      page: "Workpage",
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
  }
}

