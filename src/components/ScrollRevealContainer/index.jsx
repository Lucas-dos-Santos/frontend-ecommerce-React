import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function ScrollRevealContainer({ children }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 500,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
}

export default ScrollRevealContainer;
