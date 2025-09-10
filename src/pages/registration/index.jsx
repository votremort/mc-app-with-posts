import React from "react";
import { useState } from "react";

import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({name: '', surname: '', email: '', password: '',});
  
  const disabled = !formValues.email || !formValues.password;
  const navigate = useNavigate()
  const onChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try{
      const users = JSON.parse(localStorage.getItem('users'));
      const userId = Date.now();
      const newUser = { id: userId, ...formValues }
      if (!users) {
        localStorage.setItem('users', JSON.stringify([newUser]));
        alert('Регистрация прошла успешно!');

        navigate('/auth');
        return
      }

      if (users.find((user) => user.email === formValues.email)) {
        alert('Пользователь с таким email уже существует');
        return
      }

      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users));
      alert('Регистрация прошла успешно!');

      navigate('/auth');
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Container>
      <Typo>Регистрация</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input 
            type="text" 
            name="name" 
            placeholder="Введите имя"
            value={formValues.name}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input 
            type="text" 
            name="surname" 
            placeholder="Введите фамилию"
            value={formValues.surname}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
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
        <button type="submit" disabled={disabled}>Зарегистрироваться</button>
      </Form>
    </Container>
  )
}