import { useState, useEffect } from "react";
import plumeriaFlowers from "@/assets/plumeria-flowers.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}





const CountdownTimer = () => {
  const weddingDate = new Date("2026-12-08T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center relative">
          <div className="relative">
            {/* Watercolor-style background circles */}
            <div className="absolute inset-0 bg-wedding-pink-soft rounded-full opacity-40 blur-sm scale-110"></div>
            <div className="absolute inset-0 bg-white rounded-full opacity-80 scale-95"></div>
            <div className="absolute inset-0 bg-wedding-pink-light rounded-full opacity-50 scale-90"></div>
            
            {/* Golden decorative elements */}
            <div className="absolute -top-3 -right-3 w-4 h-4 opacity-80">
              <div className="w-full h-full bg-wedding-gold rounded-full shadow-sm"></div>
            </div>
            <div className="absolute -top-1 -left-4 w-3 h-3 opacity-70">
              <div className="w-full h-full bg-wedding-gold rounded-full shadow-sm"></div>
            </div>
            <div className="absolute -bottom-2 -right-4 w-2 h-2 opacity-60">
              <div className="w-full h-full bg-wedding-gold rounded-full shadow-sm"></div>
            </div>
            <div className="absolute -bottom-3 -left-2 w-3 h-3 opacity-75">
              <div className="w-full h-full bg-wedding-gold rounded-full shadow-sm"></div>
            </div>
            
            {/* Main timer circle */}
            <div className="relative bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-lg border border-wedding-pink/10">
              <span className="text-2xl sm:text-3xl font-playfair font-bold text-primary">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          <span className="mt-3 text-sm sm:text-base font-inter text-muted-foreground font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;