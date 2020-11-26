import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Title from '../components/Title';
import JoinUsForm from '../components/JoinUsForm';
import Para from '../components/Paragraph';
import HowItWorks from '../components/HowItWorks';
import BgBall from '../components/BgBall';
import WelcomeBall from '../components/WelcomeBall';
import theme from '../../styled-theme';
import 'normalize.css';
import Events from '../components/Events';
import CommunityImg from '../static/3D_Community.png';
import EntrepreneursImg from '../static/3D_Entrepreneurs.png';
import OrganisationsImg from '../static/3D_Organisations.png';
import Link from '../components/Link';
import eventsData from '../events/events.yaml';

const MainStyled = styled.main`
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 5% 0;
`;

const SectionStyled = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(18.25rem - 37.5px), 1fr));
  grid-gap: 2rem;
  margin-bottom: 6rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    .flip-order {
      order: 1;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    grid-gap: 3rem;
    padding: 4rem 0;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    padding: 8rem 0;
  }
`;

const WelcomeStyled = styled(SectionStyled)`
  max-width: 80rem;
  margin: 3rem auto;
  padding-right: 5%;
  padding-left: 5%;
`;

const SloganStyled = styled.div`
  position: relative;
  max-width: 80rem;
  margin: 10rem auto 7rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    margin: 0 auto;
    width: 90%;
    max-width: 25rem;
  }
`;

const SectionContentStyled = styled.div`
  position: relative;
  padding-top: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4rem;
`;

const LinkButtonStyled = styled(Link)`
  background-color: transparent;
  font-weight: 500;
  line-height: var(--line-height-inline-interaction);
  padding: 2rem 4rem;
  text-transform: uppercase;
  border: 1px solid var(--color-blue-light);
  margin-top: 3rem;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 0px 0px 0px var(--color-blue-light);
  transition: box-shadow 150ms ease-in;

  &:hover svg {
    transform: translateX(5px);
  }

  .no-touch &:focus {
    outline-color: var(--color-blue-light);
  }

  svg {
    fill: currentColor;
    height: 1.25em;
    margin-left: 1rem;
    transition: transform 150ms ease-in-out;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-right: 5rem;
    padding-left: 5rem;
  }
`;

const JoinOurMission = styled.section`
  position: relative;
  max-width: 55rem;
  min-height: 100vw;
  margin: 50% auto;
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
    width: 200%;
    position: absolute;
    top: 50%;
    left: 50%;
    padding-top: 200%;
    border-radius: 50%;
    background-color: pink;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      154deg,
      var(--color-gray-light) 33.99%,
      rgba(249, 251, 255, 0.5) 86.44%
    );

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.aux['480Up']}) {
      width: 150%;
      padding-top: 150%;
    }

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
  width: 100%;
  transform: translateY(-50%);

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

export default function Home() {
  useEffect(() => {
    const touchsupport =
      // eslint-disable-next-line prettier/prettier
      ('ontouchstart' in window) ||
      window.navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0;

    if (!touchsupport) {
      document.documentElement.classList.add('no-touch');
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero>
          <Header />
        </Hero>
        <WelcomeStyled id="aboutUs">
          <WelcomeBall />
          <SectionContentStyled>
            <SectionNameStyled level={2} color="pink">
              Welcome
            </SectionNameStyled>
            <Title level={3}>
              We are a creative hub working towards a brighter future.
            </Title>
            <Para mt="1.5" mb="0">
              Our mission is to support and accelerate the ambition of climate
              solutions around the world through the spirit of community
              knowledge and sharing.
            </Para>
            <Para mt="1.5" mb="0">
              As a platform for collaborative innovation, we engage with people
              and organisations who want to build a brighter future for our
              planet and society, together.
            </Para>
            <LinkButtonStyled to="#joinOurMission" color="blue-light">
              <span>Get involved</span>
              <svg viewBox="0 0 11 18">
                <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
              </svg>
            </LinkButtonStyled>
          </SectionContentStyled>
        </WelcomeStyled>
        <SloganStyled>
          <Title level={3} color="black">
            We bridge the gap between cause and motivation by matching projects
            to people.
          </Title>
        </SloganStyled>
        <MainStyled id="main">
          <BgBall />
          <SectionStyled>
            <img
              src={CommunityImg}
              alt="3d illustrated person riding a rocket"
            />
            <SectionContentStyled>
              <SectionNameStyled level={2} color="pink">
                Building a community
              </SectionNameStyled>
              <Title level={3}>From activism to growth and action</Title>
              <Para mt="1.5" mb="0">
                Join our community and contribute to environmental projects
                tailored to your interest. We enable each individual to develop
                their personal potential and grow the opportunity to build a new
                future together. Become a member, take action and gain personal
                growth.
              </Para>
              <LinkButtonStyled to="#joinOurMission" color="blue-light">
                <span>Get involved</span>
                <svg viewBox="0 0 11 18">
                  <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
                </svg>
              </LinkButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <SectionStyled>
            <img
              className="flip-order"
              src={EntrepreneursImg}
              alt="3d illustrated figures collaborating"
            />
            <SectionContentStyled>
              <SectionNameStyled level={2} color="pink">
                Supporting entrepreneurs
              </SectionNameStyled>
              <Title level={3}>Collaborating for innovation</Title>
              <Para mt="1.5" mb="0">
                We provide a space for young startups and entrepreneurs to
                connect and collaborate. Incubate your idea and benefit from the
                experience of your peers. We work with people who have
                innovative ideas that address and support the needs of a
                healthier planet and society.
              </Para>
              <LinkButtonStyled to="#joinOurMission" color="blue-light">
                <span>Work with us</span>
                <svg viewBox="0 0 11 18">
                  <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
                </svg>
              </LinkButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <SectionStyled>
            <img src={OrganisationsImg} alt="3d illustrated mountain climber" />
            <SectionContentStyled>
              <SectionNameStyled level={2} color="pink">
                Partner with organisations
              </SectionNameStyled>

              <Title level={3}>Enabling mechanisms for system change</Title>
              <Para mt="1.5" mb="0">
                We support businesses to thrive in a new economy. Through hyper
                customised workshops and tailored programs we unlock the
                knowledge of our community to enable solutions that are grounded
                in research and collaboration. To explore potential partnership
                opportunities, get in touch.
              </Para>
              <LinkButtonStyled to="#joinOurMission" color="blue-light">
                <span>Work with us</span>
                <svg viewBox="0 0 11 18">
                  <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
                </svg>
              </LinkButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <HowItWorks />
          <JoinOurMission id="joinOurMission">
            <JoinOurMissionWrapper>
              <JoinUsContentStyled>
                <Title level={3}>Join our mission</Title>
                <Para mb="0" mt="1.5rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                  Lucius: Mihi vero ista valde probata sunt, quod item fratri
                  puto. Si de re disceptari oportet, nulla mihi tecum.
                </Para>
                <JoinUsForm />
              </JoinUsContentStyled>
            </JoinOurMissionWrapper>
          </JoinOurMission>
        </MainStyled>
        <Events eventsData={eventsData} />
      </Layout>
    </ThemeProvider>
  );
}
