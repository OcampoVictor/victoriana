/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CornerOrnaments from './components/CornerOrnaments';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import Memories from './components/Memories';
import RSVP from './components/RSVP';
import Celebration from './components/Celebration';
import Timeline from './components/Timeline';
import DressCode from './components/DressCode';
import Lodging from './components/Lodging';
import Gifts from './components/Gifts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-serif min-h-screen flex flex-col bg-damask">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden border-[16px] border-double border-secondary/20 m-0">
        <CornerOrnaments />
        <div className="layout-container flex h-full grow flex-col">
          <Hero />
          <Countdown />
          <OurStory />
          <Memories />
          <RSVP />
          <Celebration />
          <Timeline />
          <DressCode />
          <Lodging />
          <Gifts />
          <Footer />
        </div>
      </div>
    </div>
  );
}

