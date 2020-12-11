import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Para from '../components/Paragraph';
import HowItWorks from '../components/HowItWorks';
import BgBall from '../components/BgBall';
import Welcome from '../components/Welcome';
import theme from '../../styled-theme';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Link from '../components/Link';
import JoinUs from '../components/JoinUs';
import ContactForm from '../components/ContactForm';
import CommunityImg from '../static/3D_Community.png';
import EntrepreneursImg from '../static/3D_Entrepreneurs.png';
import OrganisationsImg from '../static/3D_Organisations.png';
import SloganIllustration from '../static/Circles_Break.png';
import FireworksIllustration from '../static/Join_fireworks.png';
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

const FireworksImg = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: block;
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 10%;
    transform: translate(350%, 50%);
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
    grid-gap: 5rem;
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
  padding-top: 100%;

  --translateY: 0%;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    &.flip-order {
      order: 1;

      img {
        width: 90%;
      }
    }
  }
`;

const SectionImageBg = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 5%;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-image: linear-gradient(
    110deg,
    var(--color-blue-dark),
    var(--color-blue-light) 80%
  );
  transform: translateY(var(--translateY));

  .flip-order & {
    right: auto;
    left: 5%;
  }
`;

const SectionImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const SloganStyled = styled.div`
  position: relative;
  width: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15vmax 0;
  text-align: center;

  h3 {
    max-width: 18ch;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
  }
`;

const SloganImg = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: block;
    position: absolute;
    right: -2%;
    top: 20%;
    width: 17.5%;
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
            <SloganImg
              src={SloganIllustration}
              alt="filler illustration"
              aria-hidden="true"
            />
          </SloganStyled>
          <SectionStyled id="whatWeDo">
            <BgBall />
            <SectionImageWrapper className="parallax-combo">
              <SectionImageBg />
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
              <SectionImageBg />
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
              <SectionImageBg />
              <SectionImage
                style={{ width: '70%', left: '15%', top: '-10%' }}
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
          <JoinUs />
          <FireworksImg
            src={FireworksIllustration}
            alt="filler illustration"
            aria-hidden="true"
          />
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
