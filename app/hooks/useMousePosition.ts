import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ prevX: 0, prevY: 0 });
  const [p, setP] = useState({ x: 500, y: 500 });

  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>('.cursor')!;

    let curX = p.x;
    let curY = p.y;

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ prevX: e.clientX, prevY: e.clientY });

      curX += (position.prevX - curX) / 20;
      curY += (position.prevY - curY) / 20;

      setP({ x: curX, y: curY });

      cursor.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      cursor.style.opacity = '0.7';

      requestAnimationFrame(() => {
        updateMousePosition(e);
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  });
};

export default useMousePosition;
