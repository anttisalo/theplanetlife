import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

const LabelStyled = styled.label`
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-title);
  font-size: 1rem;
  line-height: var(--line-height-inline-interaction);
  text-align: initial;
  width: 100%;
`;

const InputStyled = styled.input.attrs({
  'aria-label': 'Email address',
})`
  padding: 2rem;
  background-color: var(--color-tpl-white);
  border: 1px solid #bcc1cb;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const ErrorStyled = styled.span`
  color: var(--color-tpl-error);
  margin-top: 0.5rem;
`;

const SubmitStyled = styled.button`
  background-color: var(--color-cta-primary);
  color: var(--color-tpl-white);
  font-size: 1rem;
  line-height: var(--line-height-inline-interaction);
  padding: 2rem 5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 3rem;
`;

export default function JoinUsForm({
  label,
  type,
  placeholder,
  errorMessage,
  cta,
}) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputStyled
        type={type}
        name="email"
        ref={register({ required: true })}
        placeholder={placeholder}
      />
      {errors.email && <ErrorStyled>{errorMessage}</ErrorStyled>}
      <SubmitStyled>{cta}</SubmitStyled>
    </FormStyled>
  );
}
