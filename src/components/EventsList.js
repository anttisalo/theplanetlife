import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Para from './Paragraph';
import Title from './Title';

function getTimeString(date) {
  const dateString = new Date(date);
  return new Intl.DateTimeFormat('us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(dateString);
}

const EventsStyled = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: flex;
    overflow-x: auto;
  }
`;

const EventCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    width: 40vw;
    flex: 1 0 auto;
    margin-right: 3vw;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    width: 33.33%;
  }
`;

const ImageAspectRatioBox = styled.div`
  height: 0;
  position: relative;
  padding-top: calc(9 / 16 * 100%);
  overflow: hidden;
`;

const ImageAspectRatioInner = styled.div`
  background-color: var(--color-gray-mid);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const EventTitle = styled.h5`
  font-family: var(--font-family-title);
  font-weight: 400;
  color: var(--color-black);
  line-height: var(--line-height-title);
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin-top: 3vw;
    margin-bottom: 2vw;
  }
`;

const EventDate = styled.span`
  font-size: 0.875rem;
  color: var(--color-gray-mid);
  text-transform: uppercase;
`;

const EventLink = styled(Link)`
  color: var(--color-text-black);
  font-size: inherit;
`;

const EventDescription = styled(Para)`
  margin-top: 0.5rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin-top: 1.5vw;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 1rem;
  }
`;

export default function EventsList({ events }) {
  return (
    <EventsStyled>
      {events.length &&
        events.map((event, i) => (
          <EventCardStyled key={`event-${i}`}>
            <ImageAspectRatioBox>
              <ImageAspectRatioInner>
                {event.event_img && (
                  <img src={event.event_img} alt={event.title} />
                )}
              </ImageAspectRatioInner>
            </ImageAspectRatioBox>
            <EventTitle>
              <EventLink to={event.event_url}>{event.title}</EventLink>
            </EventTitle>
            <EventDate>{getTimeString(event.start_date)}</EventDate>
            <EventDescription>{event.description}</EventDescription>
          </EventCardStyled>
        ))}
    </EventsStyled>
  );
}
