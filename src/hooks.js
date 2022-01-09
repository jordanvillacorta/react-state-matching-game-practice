import React, { useState, useEffect, useRef } from 'react';

function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  return [ref, hovered];
}

export default useHover;