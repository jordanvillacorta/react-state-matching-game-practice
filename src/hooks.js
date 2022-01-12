import React, { useState, useEffect, useRef } from 'react';

function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventListener('mouseenter', enter);
    refCopy.current.addEventListener('mouseleave', leave);
    return () => {

    };
  });

  return [ref, hovered];
}

export default useHover;