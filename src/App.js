import Home from './components/Home';
import React ,{Component}from 'react';
export default class App extends Component{
  render(){
    return(
      <div>
        <Home welcomeMessage="Hello World"/>
      </div>
    )
  }
}