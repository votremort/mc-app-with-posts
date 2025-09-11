import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${props => props.attentStyle ? '#ff7575' : '#6ec0eb'};
  color: ${props => props.attentStyle ? 'white' : 'black'};
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
   &:hover {
    background-color: ${props => (
      props.attentStyle
        ? 'red' 
        : '#4a759dff' 
    )};
  }

   &:disabled{
    opacity: 0.5;
    cursor: default;
  }
`