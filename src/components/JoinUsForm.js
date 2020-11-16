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

const InputStyled = styled.input.attrs({
  'aria-label': 'Email address',
})`
  padding: 2rem;
  background-color: var(--color-white);
  border: 1px solid #bcc1cb;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const ErrorStyled = styled.span`
  color: var(--color-error);
  margin-top: 0.5rem;
`;

const SubmitStyled = styled.button`
  width: 100%;
  background-color: var(--color-cta-primary);
  color: var(--color-white);
  font-size: 1rem;
  line-height: var(--line-height-inline-interaction);
  padding: 2rem 5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 1rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 3rem;
    width: auto;
  }
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
