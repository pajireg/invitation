"use client";

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function ConfettiUi() {
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [pieces, setPieces] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: document.body.scrollHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setPieces((prev) => prev + 3);
    if (isClient) {
      const interval = setInterval(() => {
        setPieces((prev) => prev + 3);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-full pointer-events-none">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        colors={["gold", "yellow"]}
        opacity={0.5}
        gravity={0.01}
        numberOfPieces={pieces}
        drawShape={(ctx) => {
          ctx.fillRect(-5, -5, 12, 12);
        }}
      />
    </div>
  );
}