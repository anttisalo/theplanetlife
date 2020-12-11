import React from 'react';
import styled from 'styled-components';
import JoinUsForm from './JoinUsForm';
import Para from './Paragraph';
import Title from './Title';
import JoinIllustration from '../static/Join_highlight.png';

const JoinOurMission = styled.section`
  position: relative;
  max-width: 55rem;
  min-height: 100vw;
  margin: 10% 1.5rem 0;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.aux['480Up']}) {
    margin-top: 35%;
    margin-bottom: 35%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin: 8rem auto;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    min-height: 0;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    padding-top: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      154deg,
      var(--color-gray-light) 33.99%,
      rgba(249, 251, 255, 0.5) 86.44%
    );
    z-index: 1;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletPortraitUp}) {
      width: 120%;
      padding-top: 120%;
    }

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletLandscapeUp}) {
      width: 100%;
      padding-top: 100%;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    transform: translate(-16%, 6%);
    background: linear-gradient(
      163.02deg,
      rgba(33, 214, 116, 0.6) 10.18%,
      rgba(232, 253, 242, 0.6) 106.36%
    );
    z-index: 0;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletLandscapeUp}) {
      width: 75%;
      height: 75%;
    }
  }
`;

const JoinOurMissionWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding-top: 100%;
`;

const JoinUsContentStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: translateY(-50%);
  z-index: 2;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

const JoinUsTitle = styled(Title)`
  position: relative;
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }
`;

const JoinUsBling = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: block;
    position: absolute;
    top: 10%;
    left: -5%;
    width: 15%;
    transform: translate(0, -100%);
  }
`;

const JoinUsPara = styled(Para)`
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }
`;

export default function JoinUs() {
  return (
    <JoinOurMission id="joinOurMission">
      <JoinOurMissionWrapper>
        <JoinUsContentStyled>
          <JoinUsTitle level={3}>
            <JoinUsBling
              src={JoinIllustration}
              alt="filler illustration"
              aria-hidden="true"
            />
            Join our mission
          </JoinUsTitle>
          <JoinUsPara mb="0" mt="1.5rem">
            Together we can combine our forces. Are you eager to make a change
            and contribute to a healthy planet and society? Register below and
            stay up to date on our progress and events.
          </JoinUsPara>
          <JoinUsForm />
        </JoinUsContentStyled>
      </JoinOurMissionWrapper>
    </JoinOurMission>
  );
}
