/* eslint-disable dot-notation */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import Title from './Title';
import Para from './Paragraph';

const ContactFormStyled = styled.div`
  width: 85vw;
  max-width: 40rem;
  max-height: 65vh;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 3.5rem;
  background-color: var(--color-white);
  box-shadow: 0px 2px 9px 15px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  overflow: auto;
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  margin-top: 1rem;
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2.5rem;
`;

const InputWrapperStyled = styled.div`
  margin-top: 1.5rem;

  &.full-width {
    grid-column: span 2;
  }

  .asterisk {
    font-size: 1.25em;
    font-weight: 700;
  }

  &:last-of-type {
    display: flex;
    flex-direction: column;
  }
`;

const LabelStyled = styled.label`
  [type='checkbox'] + & {
    margin-left: 1rem;
  }
`;

const InputStyled = styled.input`
  padding: 1.375rem 1rem;
  background-color: var(--color-white);
  border: 1px solid #bcc1cb;
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  margin-top: 0.125rem;

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.5);
    outline-offset: 2px;
  }
`;

const TextareaStyled = styled.textarea`
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

const CheckBoxStyled = styled.input.attrs({
  type: 'checkbox',
})``;

const ErrorStyled = styled.span`
  color: var(--color-error);
  max-width: 100%;
`;

const SubmitStyled = styled.button`
  width: 100%;
  background-color: var(--color-blue-light);
  color: var(--color-white);
  font-size: 0.875rem;
  line-height: var(--line-height-inline-interaction);
  padding: 1.125rem 2.5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 3.25rem;

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 2.5rem;
    width: auto;
  }
`;

const ContactInterests = [
  'Presenting myself as a speaker',
  'Becoming a member of The Planet Life',
  'Write an article about The Planet Life',
  'Collaborating on a project',
  'Exploring a potential partnership',
  'Become an expert or mentor for The Planet Life community',
  'None of the above, just saying hi',
];

export default function ContactForm({ isVisible }) {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    triggerValidation,
  } = useForm();

  const onSubmit = (data) => {
    Axios.post('/functions/sendMail', data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const validateInterests = () => {
    const values = getValues({ nest: true });
    console.log('validate', values);

    return (
      values.interests.filter((v) => Boolean(v)).length >= 1 ||
      'Select at least 1.'
    );
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    console.log(name);
  };

  return (
    <ContactFormStyled hidden={!isVisible}>
      <SectionNameStyled level={2} color="pink">
        Contact form
      </SectionNameStyled>
      <Para mt="2.5rem">
        The move towards a nature-positive economy derives from creating an
        environment where people from different backgrounds and with different
        perspectives can connect and where ideas can cultivate. We love hearing
        your ideas, feedback and questions.
      </Para>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputWrapperStyled>
          <LabelStyled htmlFor="contactFormFirstName">
            First name <span className="asterisk">*</span>
          </LabelStyled>
          <InputStyled
            id="contactFormFirstName"
            type="text"
            name="fName"
            ref={register({ required: true })}
          />
          {errors.fName && <ErrorStyled>This field is required</ErrorStyled>}
        </InputWrapperStyled>
        <InputWrapperStyled>
          <LabelStyled htmlFor="contactFormLastName">
            Last name <span className="asterisk">*</span>
          </LabelStyled>
          <InputStyled
            id="contactFormLastName"
            type="text"
            name="lName"
            ref={register({ required: true })}
          />
          {errors.lName && <ErrorStyled>This field is required</ErrorStyled>}
        </InputWrapperStyled>
        <InputWrapperStyled className="full-width">
          <LabelStyled htmlFor="contactFormEmail">
            Email <span className="asterisk">*</span>
          </LabelStyled>
          <InputStyled
            id="contactFormEmail"
            type="email"
            name="email"
            placeholder="my.name@example.org"
            ref={register({ required: true })}
          />
          {errors.email && <ErrorStyled>This field is required</ErrorStyled>}
        </InputWrapperStyled>
        <InputWrapperStyled className="full-width">
          <LabelStyled htmlFor="contactFormMessage">
            Message <span className="asterisk">*</span>
          </LabelStyled>
          <TextareaStyled
            id="contactFormMessage"
            name="message"
            ref={register({ required: true })}
          />
          {errors.message && <ErrorStyled>This field is required</ErrorStyled>}
        </InputWrapperStyled>
        <InputWrapperStyled className="full-width">
          <Para>
            I'm interested in <span className="asterisk">*</span>
          </Para>
          {ContactInterests.map((interest, i) => (
            <span key={`checkbox-${i}`}>
              <CheckBoxStyled
                id={`interestBox${i}`}
                name={`interests[${i}]`}
                value={interest}
                onChange={handleCheckboxChange}
                ref={register({
                  validate: validateInterests,
                })}
              />
              <LabelStyled htmlFor={`interestBox${i}`}>{interest}</LabelStyled>
            </span>
          ))}
          {errors.interests && errors.interests[0] && (
            <ErrorStyled>{errors.interests[0].message}</ErrorStyled>
          )}
        </InputWrapperStyled>
        <SubmitStyled>Send</SubmitStyled>
      </FormStyled>
    </ContactFormStyled>
  );
}
