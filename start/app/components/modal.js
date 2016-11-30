import React from "react";
import {render} from "react-dom";
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

/*export default Class Modal extends React.Component{
  render(){
    return (
      <div><span>val</span></div>
    )
  }
}*/

export default function(props){
   return (
      <div><Title>chairman </Title><span>{props.sayInfo} {props.name},do you konw the story?</span></div>
  )
}