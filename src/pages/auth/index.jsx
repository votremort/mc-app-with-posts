import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

export const AuthPage = () => {

  const [formValues, setFormValues] = useState({ email: '', password: '',});
  const disabled = !formValues.email || !formValues.password;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try{
      const users = JSON.parse(localStorage.getItem('users'));

      if (!users) {
        alert('Данный пользователь не зарегистрирован');
        return
      }

      const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)
      
      if (!currentUser) {
        alert('Данный пользователь не зарегистрирован');
        return
      }

      dispatch(login(currentUser));

      navigate('/posts');
    
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container>
      <Typo>Авторизация</Typo>
      <Form onSubmit={ onSubmit }>
        <Field>
          <Input 
            type="email" 
            name="email" 
            placeholder="Введите email"
            value={formValues.email}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input 
            type="password" 
            name="password" 
            placeholder="Введите пароль"
            value={formValues.password}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Button type="submit" disabled={disabled} text='Войти'/>
      </Form>
    </Container>

  )
}