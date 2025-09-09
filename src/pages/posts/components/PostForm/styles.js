import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 250px;
  margin: 50px auto;
`

export const Field = styled.div`

`

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #353333;
`

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