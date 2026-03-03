/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Envelope from './components/Envelope';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import AddToCalendar from './components/AddToCalendar';
import Memories from './components/Memories';
import RSVP from './components/RSVP';
import Ceremony from './components/Celebration';
import Reception from './components/Reception';
import Timeline from './components/Timeline';
import DressCode from './components/DressCode';
import Lodging from './components/Lodging';
import Gifts from './components/Gifts';
import Footer from './components/Footer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      // Scroll to top when envelope is closed to ensure they start at the top
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpened]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-serif min-h-screen flex flex-col bg-damask">
      <AnimatePresence>
        {!isOpened && <Envelope onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>
      
      <Navbar />
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden border-[16px] border-double border-secondary/20 m-0">
        <div className="layout-container flex h-full grow flex-col">
          <Hero />
          <Countdown />
          <div id="historia"><OurStory /></div>
          <AddToCalendar />
          <Memories />
          <RSVP />
          <div id="ceremonia"><Ceremony /></div>
          <div id="recepcion"><Reception /></div>
          <Timeline />
          <DressCode />
          <div id="hospedaje"><Lodging /></div>
          <div id="regalos"><Gifts /></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

