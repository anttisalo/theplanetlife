import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from 'reakit';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Title from '../components/Title';
import 'normalize.css';
import theme from '../../styled-theme';

const MainStyled = styled.main`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 5.25% 0;
  background-color: var(--color-tpl-white);

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    padding-left: 9.825%;
    padding-right: 9.825%;
  }
`;

const SectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  padding: 10rem 0;
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

const SectionNameStyled = styled.div`
  font-weight: 700;
  color: var(--color-body-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    margin-left: -3rem;
  }
`;

const SectionParagraphStyled = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 0;
`;

const ButtonStyled = styled(Button)`
  background-color: var(--color-blue-dark);
  color: var(--color-tpl-white);
  font-size: 1rem;
  line-height: var(--line-height-button);
  padding: 2rem 5rem;
  text-transform: uppercase;
  border: 0;
  margin-top: 5rem;
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
              <SectionNameStyled>Community</SectionNameStyled>
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
              <SectionNameStyled>Entrepreneurs</SectionNameStyled>
              <Title level={3}>Collaborating for innovation</Title>
              <SectionParagraphStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                Lucius: Mihi vero ista valde probata sunt, quod item fratri
                puto. Si de re disceptari oportet, nulla mihi tecum, Cato,
                potest esse dissensio.
              </SectionParagraphStyled>
              <ButtonStyled>Get involved</ButtonStyled>
            </SectionContentStyled>
            <IconStyled />
          </SectionStyled>
          <SectionStyled>
            <IconStyled />
            <SectionContentStyled>
              <SectionNameStyled>Organisations</SectionNameStyled>

              <Title level={3}>Enabling mechanisms for system change</Title>
              <SectionParagraphStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum
                Lucius: Mihi vero ista valde probata sunt, quod item fratri
                puto. Si de re disceptari oportet, nulla mihi tecum, Cato,
                potest esse dissensio.
              </SectionParagraphStyled>
              <ButtonStyled>Get involved</ButtonStyled>
            </SectionContentStyled>
          </SectionStyled>
          <SectionStyled>fdafdsa</SectionStyled>
          <SectionStyled>fdafdsa</SectionStyled>
          <SectionStyled>fdafdsa</SectionStyled>
        </MainStyled>
      </Layout>
    </ThemeProvider>
  );
}
