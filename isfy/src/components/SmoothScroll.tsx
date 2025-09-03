import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  children, 
  className = '', 
  style = {} 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrolling) {
        container.style.scrollBehavior = 'smooth';
        isScrolling = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        container.style.scrollBehavior = 'auto';
        isScrolling = false;
      }, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{
        scrollBehavior: 'smooth',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
