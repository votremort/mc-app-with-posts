import styled from "styled-components";



export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  width: 100%;
  border: 1px solid #353333;
`

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: gray;
  color: white;
  padding: 10px 0;
  cursor: pointer;

  &:hover{
    background-color: #353333;
  }
  &:disabled{
    opacity: 0.5;
    cursor: default;
  }
`