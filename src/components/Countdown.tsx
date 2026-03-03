import { useState, useEffect } from 'react';
import { Hourglass } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-10-12T16:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div id="cuenta-regresiva" className="w-full flex justify-center py-16 lg:py-24 bg-paper border-y-4 border-double border-secondary relative overflow-hidden">
      <div className="layout-content-container flex flex-col items-center max-w-[960px] flex-1 px-4 lg:px-8 relative z-10">
        <Hourglass className="text-secondary mb-6 animate-pulse" size={64} style={{ animationDuration: '3s' }} strokeWidth={1.5} />
        <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-12 text-center">
          La Cuenta Regresiva
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-display text-secondary-dark dark:text-secondary font-bold">{timeLeft.days}</span>
            <span className="text-sm uppercase tracking-[0.3em] text-accent mt-2 font-serif border-t border-accent pt-1 w-full">Días</span>
          </div>
          <div className="w-px h-20 bg-secondary/30 hidden md:block rotate-12"></div>
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-display text-secondary-dark dark:text-secondary font-bold">{timeLeft.hours}</span>
            <span className="text-sm uppercase tracking-[0.3em] text-accent mt-2 font-serif border-t border-accent pt-1 w-full">Horas</span>
          </div>
          <div className="w-px h-20 bg-secondary/30 hidden md:block -rotate-12"></div>
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-display text-secondary-dark dark:text-secondary font-bold">{timeLeft.minutes}</span>
            <span className="text-sm uppercase tracking-[0.3em] text-accent mt-2 font-serif border-t border-accent pt-1 w-full">Minutos</span>
          </div>
          <div className="w-px h-20 bg-secondary/30 hidden md:block rotate-12"></div>
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-display text-secondary-dark dark:text-secondary font-bold">{timeLeft.seconds}</span>
            <span className="text-sm uppercase tracking-[0.3em] text-accent mt-2 font-serif border-t border-accent pt-1 w-full">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
