import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainTrailer from './MainTrailer';
import Title from './Title';
import Section from './Section';

const sections = [
  { containerId: 'trendingtitle', headingId: 'trending-text', headingText: 'Trending Now', sectionId: 'trendingsection' },
  { containerId: 'newreleasestitle', headingId: 'newreleases-text', headingText: 'New Releases', sectionId: 'newreleasessection' },
  { containerId: 'continuewatchingtitle', headingId: 'continuewatching-text', headingText: 'Continue Watching', sectionId: 'continuewatchingsection' },
  { containerId: 'actionmoviestitle', headingId: 'actionmovies-text', headingText: 'Action Movies', sectionId: 'actionmoviessection' },
  { containerId: 'watchagaintitle', headingId: 'watchagain-text', headingText: 'Watch Again', sectionId: 'watchagainsection' },
  { containerId: 'animationtitle', headingId: 'animation-text', headingText: 'Animation', sectionId: 'animationsection' },
  { containerId: 'kdramastitle', headingId: 'kdramas-text', headingText: 'K-Dramas', sectionId: 'kdramassection' },
  { containerId: 'awardwinningtitle', headingId: 'awardwinning-text', headingText: 'Award Winning', sectionId: 'awardwinningsection' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainTrailer />
    {/* <Title containerId="trendingtitle" headingId="trending-text" headingText="Trending Now" />
    <Section sectionId="trendingsection" />
    <Title containerId="newreleasestitle" headingId="newreleases-text" headingText="New Releases" />
    <Section sectionId="newreleasessection" />
    <Title containerId="contineuwatchingtitle" headingId="contineuwatching-text" headingText="Continue Watching" />
    <Section sectionId="continuewatchingsection" />
    <Title containerId="actionmoviestitle" headingId="actionmovies-text" headingText="Action Movies" />
    <Section sectionId="actionmoviessection" />
    <Title containerId="watchagaintitle" headingId="watchagain-text" headingText="Watch Again" />
    <Section sectionId="watchagainsection" />
    <Title containerId="animationtitle" headingId="animation-text" headingText="Animation" />
    <Section sectionId="animationsection" />
    <Title containerId="kdramastitle" headingId="kdramas-text" headingText="K-Dramas" />
    <Section sectionId="kdramassection" />
    <Title containerId="awardwinningtitle" headingId="awardwinning-text" headingText="Award Winning" />
    <Section sectionId="awardwinningsection" /> */}
    {sections.map((section, index) => (
      <React.Fragment key={index}>
        <Title containerId={section.containerId} headingId={section.headingId} headingText={section.headingText} />
        <Section sectionId={section.sectionId} />
      </React.Fragment>
    ))}

    <Footer />

  </React.StrictMode>
);

