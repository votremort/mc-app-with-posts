import React, { useState } from "react";
import * as SC from "./styles";
import { Container } from "../../../../components/ui/Container";
import { Typo } from "../../../../components/ui/Typo"
import { Form } from "../../../../components/ui/Form";
import { Field } from "../../../../components/ui/Field";
import { Input } from "../../../../components/ui/Input";
import { Button } from "../../../../components/ui/Button";

const DEFAULT_VALUES = {title: '', body: ''};

export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
 
  const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES);

  const onChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(formValues);

    !defaultValues && setFormValues(DEFAULT_VALUES)
  };

  const disabled = !formValues.title || !formValues.body;

  return (
    <Container>
      <Typo>{title}</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input 
            type="text" 
            name="title" 
            placeholder="Заголовок поста"
            value={formValues.title}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <SC.Textarea 
            name="body"  
            placeholder="Текст поста" 
            rows={10} cols={40}
            value={formValues.body}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>  
        <Button type="submit" disabled={disabled} text='Сохранить'/>
      </Form>
    </Container>
    
  )
}