import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

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
  padding: 1.375rem 1rem;
  background-color: var(--color-white);
  border: 1px solid #bcc1cb;
  width: 100%;
  border-radius: 0;
  box-shadow: none;

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.5);
    outline-offset: 2px;
  }
`;

const ErrorStyled = styled.span`
  color: var(--color-error);
  max-width: 100%;
`;

const SuccessStyled = styled.span`
  color: var(--color-green-mid);
`;

const SubmitStyled = styled.button`
  width: 100%;
  background-color: var(--color-blue-light);
  color: var(--color-white);
  font-size: 1rem;
  line-height: var(--line-height-inline-interaction);
  padding: 1.5rem 3.5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 1rem;
  cursor: pointer;

  .no-touch &:hover {
    background-color: var(--color-blue-dark);
  }

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.5);
    outline-offset: 2px;
  }

  .no-touch &:not(:focus-visible) {
    outline: none;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 2.5rem;
    width: auto;
  }
`;

export default function JoinUsForm() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        if (data.result !== 'success') {
          throw data.msg;
        }

        setSuccessMsg(data.msg);
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  };

  const handleChange = (e) => {
    if (errorMsg.length || successMsg.length) {
      setErrorMsg('');
      setSuccessMsg('');
    }

    setEmail(e.target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="email"
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={handleChange}
      />
      {errorMsg && (
        <ErrorStyled dangerouslySetInnerHTML={{ __html: errorMsg }} />
      )}
      {successMsg && <SuccessStyled>{successMsg}</SuccessStyled>}
      <SubmitStyled>Subscribe</SubmitStyled>
    </FormStyled>
  );
}
