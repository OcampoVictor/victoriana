import { CalendarDays, Apple } from 'lucide-react';
import { motion } from 'motion/react';

export default function AddToCalendar() {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Sof%C3%ADa+y+Mateo&dates=20261012T160000Z/20261013T020000Z&details=Celebra+con+nosotros+nuestro+gran+d%C3%ADa.&location=Oaxaca+de+Ju%C3%A1rez,+M%C3%A9xico";
  const appleCalendarUrl = "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:https://boda-sofia-mateo.com%0ADTSTART:20261012T160000Z%0ADTEND:20261013T020000Z%0ASUMMARY:Boda de Sofía y Mateo%0ADESCRIPTION:Celebra con nosotros nuestro gran día.%0ALOCATION:Oaxaca de Juárez, México%0AEND:VEVENT%0AEND:VCALENDAR";

  return (
    <div className="w-full flex justify-center py-12 bg-paper border-b-2 border-secondary/20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="layout-content-container flex flex-col items-center max-w-[800px] flex-1 px-4 text-center"
      >
        <h2 className="text-primary text-5xl lg:text-7xl font-script leading-tight mb-8 text-center">Agrégalo a tu calendario</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
          <a 
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-4 px-8 bg-white border border-secondary/40 text-primary hover:bg-secondary/10 transition-colors rounded-sm shadow-sm"
          >
            <CalendarDays size={24} />
            <span className="font-display text-sm tracking-widest uppercase font-bold">Google Calendar</span>
          </a>
          <a 
            href={appleCalendarUrl}
            download="boda_sofia_mateo.ics"
            className="flex-1 flex items-center justify-center gap-3 py-4 px-8 bg-white border border-secondary/40 text-primary hover:bg-secondary/10 transition-colors rounded-sm shadow-sm"
          >
            <Apple size={24} />
            <span className="font-display text-sm tracking-widest uppercase font-bold">Apple Calendar</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
