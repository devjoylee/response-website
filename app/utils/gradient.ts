export const gradient = (
  prevPosition: { x: number; y: number },
  setPrevPosition: Function,
  currPosition: { x: number; y: number },
  setCurrPosition: Function
) => {
  let curX = currPosition.x;
  let curY = currPosition.y;

  const updateMousePosition = (e: MouseEvent) => {
    setPrevPosition({ x: e.clientX, y: e.clientY });

    curX += (prevPosition.x - curX) / 20;
    curY += (prevPosition.y - curY) / 20;

    setCurrPosition({ x: curX, y: curY });

    // requestAnimationFrame(() => {
    //   updateMousePosition(e);
    // });
  };

  window.addEventListener('mousemove', updateMousePosition);

  return () => {
    window.removeEventListener('mousemove', updateMousePosition);
  };
};
