import React from "react";
import ReactDOM from "react-dom";
import TomatoButton from "./styled-components/TomatoButton";

class App extends React.Component{
  constructor(props){
    super(props);
    this.alertInfo.bind(this);
    this.sayMes.bind(this);
    this.state = {
      mes:"My name is Haisong Wang"
    }
  }
  alertInfo(){
    alert('11')

  }
  sayMes(){
    console.log(this);
    alert("as")
  }

  render(){
    return (
      <div className="container">
        <h1 >hello React!</h1>
        <TomatoButton alertInfo={this.alertInfo} />
        <button onClick={this.sayMes}>你好</button>
      </div>
    )
  }
};


const app = document.createElement("div");
document.body.appendChild(app);
ReactDOM.render(<App/>,app);