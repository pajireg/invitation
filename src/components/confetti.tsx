"use client";

import React, { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function ConfettiUi() {
  const { width, height } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Confetti
        width={width}
        height={height}
        colors={["gold", "yellow"]}
        opacity={0.5}
        gravity={0.01}
        numberOfPieces={10}
        drawShape={(ctx) => {
          ctx.fillRect(-5, -5, 12, 12);
        }}
      />
    </div>
  );
}
