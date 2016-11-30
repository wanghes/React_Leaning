import styled from "styled-components";

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition:all .3s linear;
  cursor:pointer;
  &:hover{
    background:palevioletred;
    color:#fff;
  }
`;


export default Button;