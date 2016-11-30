import React from "react";
import {render} from "react-dom";
import styled from 'styled-components';
import Button from './Button';

const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
 &:hover{
    background:tomato;
  }
`;

export default function(props){
    return (
      <TomatoButton onClick={props.alertInfo}>This is tomato!</TomatoButton>
    );
};