import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [currPosition, setCurrPosition] = useState({ x: 500, y: 500 });

  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>('.cursor')!;

    let cursorX = currPosition.x;
    let cursorY = currPosition.y;

    const updateMousePosition = (e: MouseEvent) => {
      setPrevPosition({ x: e.clientX, y: e.clientY });

      cursorX += (prevPosition.x - cursorX) / 20;
      cursorY += (prevPosition.y - cursorY) / 20;

      setCurrPosition({ x: cursorX, y: cursorY });

      if (cursor) {
        cursor.style.transform = `translate(${Math.round(cursorX)}px, ${Math.round(cursorY)}px)`;
        cursor.style.opacity = '0.7';
      }

      requestAnimationFrame(() => {
        updateMousePosition(e);
      });
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }
  });
};

export default useMousePosition;
