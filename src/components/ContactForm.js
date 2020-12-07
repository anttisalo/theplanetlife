/* eslint-disable dot-notation */
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import Title from './Title';
import Para from './Paragraph';

const ContactFormStyled = styled.div`
  width: 85vw;
  max-width: 40rem;
  max-height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  background-color: var(--color-white);
  box-shadow: 0px 2px 9px 15px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  overflow: auto;
  z-index: 9;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    max-height: 65vh;
    padding: 3.5rem;
  }
`;

const Scrim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  margin-top: 1rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2.5rem;
`;

const InputWrapperStyled = styled.div`
  margin-top: 0.5rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 1.25rem;
  }

  &.full-width {
    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletPortraitUp}) {
      grid-column: span 2;
    }
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
  color: var(--color-gray-dark);
  display: inline-block;

  [type='checkbox'] + & {
    color: var(--color-black);
    position: relative;
    padding-left: 2rem;
  }

  [type='checkbox'] + &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--color-gray-dark);
    transform: translateY(-50%);
  }

  [type='checkbox'] + &:after {
    content: '';
    position: absolute;
    left: 0.375rem;
    top: 0rem;
    width: 0.5rem;
    height: 0.875rem;
    border: solid var(--color-black);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 150ms ease-out;
  }

  [type='checkbox']:checked + &:after {
    opacity: 1;
  }

  [type='checkbox']:checked:focus + &:before,
  [type='checkbox']:not(:checked):focus + &:before {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

const InputStyled = styled.input`
  padding: 1rem;
  background-color: var(--color-white);
  border: 1px solid #bcc1cb;
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  margin-top: 0.125rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-top: 1.325rem;
    padding-bottom: 1.325rem;
  }

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

const InterestFieldTitle = styled(Para)`
  color: var(--color-gray-dark);
`;

const CheckBoxWrap = styled.div`
  margin-bottom: 0.875rem;
`;

const CheckBoxStyled = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  left: -9999px;
  visibility: hidden;
`;

const ErrorStyled = styled.span`
  display: inline-block;
  margin-top: 0.25rem;
  color: var(--color-error);
  max-width: 100%;
`;

const formSent = keyframes`
  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;

const SubmitStyled = styled.button`
  width: 100%;
  background-color: var(--color-blue-light);
  color: var(--color-white);
  font-size: 0.875rem;
  line-height: var(--line-height-inline-interaction);
  padding: 1.5rem 2.5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 3.25rem;
  transition: outline, background-color, 150ms ease-out;

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.5);
    outline-offset: 2px;
  }

  &.form-sent {
    background-color: var(--color-green-mid);
    animation: ${formSent} 300ms ease-in;

    &:focus {
      outline: 2px solid rgba(43, 30, 200, 0);
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 2.5rem;
    width: auto;
  }
`;

const ButtonCloseForm = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background-color: transparent;
  padding: 0.5rem;
  color: var(--color-black);
  font-size: 2rem;
  cursor: pointer;

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
    outline-offset: 2px;
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

export default function ContactForm({ isVisible, toggleForm }) {
  const scrimRef = useRef();
  const { register, handleSubmit, errors } = useForm();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        toggleForm();
      }, 2000);
    }
  }, [isSent]);

  const onClickOutsideHandler = (e) => {
    if (e.target === scrimRef.current) {
      toggleForm();
    }
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 27) {
      toggleForm();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress, false);
    return () => {
      document.removeEventListener('keydown', onKeyPress, false);
    };
  });

  useEffect(() => {
    document.addEventListener('click', onClickOutsideHandler);
    return () => {
      document.removeEventListener('click', onClickOutsideHandler);
    };
  });

  const defaultFormValues = {
    fName: '',
    lName: '',
    email: '',
    message: '',
  };

  const onSubmit = (data) => {
    const filterInterests = data.interests.filter(Boolean);
    const clearData = Object.assign(data, { interests: filterInterests });

    Axios.post('/api/sendMail', clearData, {
      validateStatus: (status) => status < 500,
    })
      .then((res) => {
        setIsSent(true);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <>
      <Scrim ref={scrimRef} hidden={!isVisible} />
      <ContactFormStyled hidden={!isVisible} formOpen={isVisible}>
        <ButtonCloseForm onClick={toggleForm}>
          <svg
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
          >
            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
          </svg>
        </ButtonCloseForm>
        <SectionNameStyled level={2} color="pink">
          Contact form
        </SectionNameStyled>
        <Para mt="2.5rem">
          The move towards a nature-positive economy derives from creating an
          environment where people from different backgrounds and with different
          perspectives can connect and where ideas can cultivate. We love
          hearing your ideas, feedback and questions.
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
            {errors.message && (
              <ErrorStyled>This field is required</ErrorStyled>
            )}
          </InputWrapperStyled>
          <InputWrapperStyled className="full-width">
            <InterestFieldTitle>
              I'm interested in <span className="asterisk">*</span>
            </InterestFieldTitle>
            {ContactInterests.map((interest, i) => (
              <CheckBoxWrap key={`checkbox-${i}`}>
                <CheckBoxStyled
                  id={`interestBox${i}`}
                  name={`interests[${i}]`}
                  value={interest}
                  ref={register}
                />
                <LabelStyled htmlFor={`interestBox${i}`}>
                  {interest}
                </LabelStyled>
              </CheckBoxWrap>
            ))}
          </InputWrapperStyled>
          <SubmitStyled className={isSent && 'form-sent'}>
            {isSent ? 'Thank you!' : 'Send'}
          </SubmitStyled>
        </FormStyled>
      </ContactFormStyled>
    </>
  );
}
