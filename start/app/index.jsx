import React from "react";
import {render} from "react-dom";
import Modal from "./components/modal";
import index from "./css/index.less";
import TomatoButton from './components/css/input.js';

let styleInfo = {color:"red"};


class App extends React.Component{
  constructor(props){
    super(props);
    //console.log(modal);
  }
  render(){
    return (
      <div className="container">
        <h1 style={styleInfo}>hello React!</h1>
        <a className="btn">测试一下</a>
        <Modal name="wang_hes" sayInfo="hello" />
        <TomatoButton placeholder="@mxstbr" type="text" />



      </div>
    )
  }
};


const app = document.createElement("div");
document.body.appendChild(app);
render(<App/>,app);