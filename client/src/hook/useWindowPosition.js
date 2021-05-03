import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const height = window.document.getElementById(id).offsetHeight;
      console.log(height);
      console.log(window.pageYOffset);
      if (window.pageYOffset > height * 0.5) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}