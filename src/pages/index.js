import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Title from '../components/Title';
import JoinUsForm from '../components/JoinUsForm';
import Para from '../components/Paragraph';
import HowItWorks from '../components/HowItWorks';
import BgBall from '../components/BgBall';
import Welcome from '../components/Welcome';
import theme from '../../styled-theme';
import Events from '../components/Events';
import Footer from '../components/Footer';
import CommunityImg from '../static/3D_Community.png';
import EntrepreneursImg from '../static/3D_Entrepreneurs.png';
import OrganisationsImg from '../static/3D_Organisations.png';
import Link from '../components/Link';
import ContactForm from '../components/ContactForm';
import eventsData from '../events/events.yaml';
import 'normalize.css';

const MainStyled = styled.main`
  position: relative;
  padding-bottom: 6rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    padding-bottom: 5rem;
  }
`;

const SectionStyled = styled.section`
  position: relative;
  max-width: 80rem;
  margin: 0 auto 6rem;
  padding: 3rem 5% 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(18.25rem - 37.5px), 1fr));
  grid-gap: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    grid-gap: 3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const SectionImageWrapper = styled.div`
  position: relative;
  padding: 2rem;
  --translateY: 0%;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    &.flip-order {
      order: 1;
    }
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 10%;
    width: 70vmin;
    height: 70vmin;
    border-radius: 50%;
    background-image: linear-gradient(
      110deg,
      var(--color-blue-dark),
      var(--color-blue-light) 80%
    );
    transform: translateY(var(--translateY));

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletPortraitUp}) {
      width: 35vmin;
      height: 35vmin;
    }

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletLandscapeUp}) {
      width: 45vmin;
      height: 45vmin;
    }
  }
`;

const SectionImage = styled.img`
  position: relative;
`;

const SloganStyled = styled.div`
  position: relative;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30vmax auto;
  padding: 0 5vmin;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    padding: 0;
    margin-top: 30vmin;
    margin-bottom: 20vmin;
  }
`;

const SectionContentStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2.5rem;
`;

const BgTransitionTitle = styled(Title)`
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }
`;

const BgTransitionPara = styled(Para)`
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }
`;

const LinkButtonStyled = styled(Link)`
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  align-self: flex-start;

  span {
    line-height: var(--line-height-interaction);
  }

  &:hover span {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  svg {
    fill: currentColor;
    height: 1.25em;
    margin-left: 1rem;
    transition: transform 150ms ease-in-out;
  }

  &:hover svg {
    transform: translateX(10px);
  }

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
    outline-offset: 2px;
  }

  .bg-blue & {
    color: var(--color-white);
  }
`;

const ButtonToggleContact = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-blue-light);
  margin-top: 3rem;
  padding: 0.5rem;
  border: 0;
  background-color: transparent;

  span {
    line-height: var(--line-height-interaction);
  }

  svg {
    fill: currentColor;
    height: 1.25em;
    margin-left: 1rem;
    transition: transform 150ms ease-in-out;
  }

  &:hover span {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &:hover svg {
    transform: translateX(10px);
  }

  .no-touch &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
    outline-offset: 2px;
  }

  .no-touch &:not(:focus-visible) {
    outline: none;
  }

  .bg-blue & {
    color: var(--color-white);
  }
`;

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

const JoinUsTitle = styled(Title)`
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }
`;

const JoinUsPara = styled(Para)`
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }
`;

const JoinUsContentStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
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

    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia('(min-width: 900px)').matches) {
      gsap.utils.toArray('.parallax-combo').forEach((container) => {
        const img = container.querySelector('img');
        const tl = gsap.timeline({
          defaults: {
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        });

        tl.to(img, { yPercent: '-25' });
        tl.to(container, { '--translateY': '-10%' });
      });
    }
  });

  const [lastActiveElement, setLastActiveElement] = useState(undefined);

  const onModalOpen = () => {
    setLastActiveElement(document.activeElement);
  };

  const onModalClose = () => {
    lastActiveElement.focus();
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleContactForm = () => {
    if (!isFormVisible) {
      onModalOpen();
    } else {
      onModalClose();
    }

    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    if (isFormVisible) {
      document.body.classList.add('contact-form-open');
    } else {
      document.body.classList.remove('contact-form-open');
    }
  }, [isFormVisible]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero>
          <Header toggleContactForm={toggleContactForm} />
        </Hero>
        <MainStyled id="main">
          <Welcome />
          <SloganStyled>
            <Title level={3} color="black">
              We bridge the gap between cause and motivation by matching
              projects to people.
            </Title>
          </SloganStyled>
          <SectionStyled id="whatWeDo">
            <BgBall />
            <SectionImageWrapper className="parallax-combo">
              <SectionImage
                src={CommunityImg}
                alt="3d illustrated person riding a rocket"
              />
            </SectionImageWrapper>
            <SectionContentStyled>
              <SectionNameStyled level={2} color="pink">
                Building a community
              </SectionNameStyled>
              <Title level={3}>From activism to growth and action</Title>
              <Para mt="1.5rem" mb="0">
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
            <SectionImageWrapper className="parallax-combo flip-order">
              <SectionImage
                src={EntrepreneursImg}
                alt="3d illustrated figures collaborating"
              />
            </SectionImageWrapper>
            <SectionContentStyled>
              <SectionNameStyled level={2} color="pink">
                Supporting entrepreneurs
              </SectionNameStyled>
              <Title level={3}>Collaborating for innovation</Title>
              <Para mt="1.5rem" mb="0">
                We provide a space for young startups and entrepreneurs to
                connect and collaborate. Incubate your idea and benefit from the
                experience of your peers. We work with people who have
                innovative ideas that address and support the needs of a
                healthier planet and society.
              </Para>
              <LinkButtonStyled
                to="https://forms.gle/XWXbYgGVUminD2qs8"
                target="_blank"
                color="blue-light"
              >
                <span>Work with us</span>
                <svg viewBox="0 0 11 18">
                  <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
                </svg>
              </LinkButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <SectionStyled style={{ paddingBottom: '30vmin' }}>
            <SectionImageWrapper className="parallax-combo">
              <SectionImage
                src={OrganisationsImg}
                alt="3d illustrated mountain climber"
              />
            </SectionImageWrapper>
            <SectionContentStyled>
              <SectionNameStyled level={2} color="pink">
                Partner with organisations
              </SectionNameStyled>

              <BgTransitionTitle level={3}>
                Enabling mechanisms for system change
              </BgTransitionTitle>
              <BgTransitionPara mt="1.5rem" mb="0">
                We support businesses to thrive in a new economy. Through hyper
                customised workshops and tailored programs we unlock the
                knowledge of our community to enable solutions that are grounded
                in research and collaboration. To explore potential partnership
                opportunities, get in touch.
              </BgTransitionPara>
              <ButtonToggleContact onClick={toggleContactForm}>
                <span>Contact us</span>
                <svg viewBox="0 0 11 18">
                  <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
                </svg>
              </ButtonToggleContact>
            </SectionContentStyled>
          </SectionStyled>
          <HowItWorks />
          <JoinOurMission id="joinOurMission">
            <JoinOurMissionWrapper>
              <JoinUsContentStyled>
                <JoinUsTitle level={3}>Join our mission</JoinUsTitle>
                <JoinUsPara mb="0" mt="1.5rem">
                  Together we can combine our forces. Are you eager to make a
                  change and contribute to a healthy planet and society?
                  Register below and stay up to date on our progress and events.
                </JoinUsPara>
                <JoinUsForm />
              </JoinUsContentStyled>
            </JoinOurMissionWrapper>
          </JoinOurMission>
        </MainStyled>
        <Events eventsData={eventsData} />
        <Footer />
      </Layout>
      {isFormVisible && (
        <ContactForm isVisible={isFormVisible} toggleForm={toggleContactForm} />
      )}
    </ThemeProvider>
  );
}
