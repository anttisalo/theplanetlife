import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from 'reakit';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Title from '../components/Title';
import 'normalize.css';
import theme from '../../styled-theme';
import JoinUsForm from '../components/JoinUsForm';
import Para from '../components/Paragraph';
import HowItWorks from '../components/HowItWorks';

const MainStyled = styled.main`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 5% 0;
  background-color: var(--color-tpl-white);

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    padding-left: 9.825%;
    padding-right: 9.825%;
  }
`;

const SectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  padding: 8rem 0;
  justify-items: center;
`;

const IconStyled = styled.div`
  font-size: calc(16px + 6 * ((100vw - 320px) / 1120));
  width: 17em;
  height: 17em;
  background-color: #bcc1cb;
  border-radius: 50%;
`;

const SectionContentStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    padding-left: 3rem;
  }
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    margin-left: -3rem;
  }
`;

const SectionParagraphStyled = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 0;
`;

const ButtonStyled = styled(Button)`
  background-color: var(--color-cta-primary);
  color: var(--color-tpl-white);
  font-size: 1rem;
  line-height: var(--line-height-inline-interaction);
  padding: 2rem 5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 5rem;
  align-self: flex-start;
`;

const JoinOurMission = styled.section`
  max-width: 55rem;
  margin: 0 auto;
  padding: 8rem 0;
`;

const CircleStyled = styled.div`
  position: relative;
  width: 100%;
  background-color: #f2f4f8;
  border-radius: 50%;
  padding-top: 100%;
`;

const CircleContentStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 9rem;
  padding-right: 9rem;
  text-align: center;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero>
          <Header />
        </Hero>
        <MainStyled>
          <SectionStyled>
            <IconStyled />
            <SectionContentStyled>
              <SectionNameStyled level={5}>Community</SectionNameStyled>
              <Title level={3}>From activism to growth and action</Title>
              <SectionParagraphStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                Lucius: Mihi vero ista valde probata sunt, quod item fratri
                puto. Si de re disceptari oportet, nulla mihi tecum, Cato,
                potest esse dissensio.
              </SectionParagraphStyled>
              <ButtonStyled>Get involved</ButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <SectionStyled>
            <SectionContentStyled>
              <SectionNameStyled level={5}>Entrepreneurs</SectionNameStyled>
              <Title level={3}>Collaborating for innovation</Title>
              <SectionParagraphStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                Lucius: Mihi vero ista valde probata sunt, quod item fratri
                puto. Si de re disceptari oportet, nulla mihi tecum, Cato,
                potest esse dissensio.
              </SectionParagraphStyled>
              <ButtonStyled>Work with us</ButtonStyled>
            </SectionContentStyled>
            <IconStyled />
          </SectionStyled>
          <SectionStyled>
            <IconStyled />
            <SectionContentStyled>
              <SectionNameStyled level={5}>Organisations</SectionNameStyled>

              <Title level={3}>Enabling mechanisms for system change</Title>
              <SectionParagraphStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                Lucius: Mihi vero ista valde probata sunt, quod item fratri
                puto. Si de re disceptari oportet, nulla mihi tecum, Cato,
                potest esse dissensio.
              </SectionParagraphStyled>
              <ButtonStyled>Work with us</ButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <HowItWorks />
          <JoinOurMission>
            <CircleStyled>
              <CircleContentStyled>
                <Title level={2}>Join our mission</Title>
                <Para mb="0" mt="1.5rem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                  Lucius: Mihi vero ista valde probata sunt, quod item fratri
                  puto. Si de re disceptari oportet, nulla mihi tecum.
                </Para>
                <JoinUsForm
                  label="Your email"
                  type="email"
                  placeholder="your.email@example.com"
                  errorMessage="Please, provide an email address"
                  cta="Register"
                />
              </CircleContentStyled>
            </CircleStyled>
          </JoinOurMission>
          <SectionStyled>fdafdsa</SectionStyled>
          <SectionStyled>fdafdsa</SectionStyled>
        </MainStyled>
      </Layout>
    </ThemeProvider>
  );
}
