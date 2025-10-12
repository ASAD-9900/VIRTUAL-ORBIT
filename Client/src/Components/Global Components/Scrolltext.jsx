import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  blurStrength = 4,
  containerClassName = '',
  textClassName = ''
}) => {
  const containerRef = useRef(null);

  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.3']
  });

  // Split text into words
  const text = typeof children === 'string' ? children : '';
  const words = text.split(/(\s+)/);

  return (
    <div ref={containerRef} className={containerClassName}>
      <p className={textClassName}>
        {words.map((word, index) => {
          // Skip rendering component for whitespace, just return the space
          if (word.match(/^\s+$/)) return <span key={index}>{word}</span>;

          // Calculate the range for each word's animation
          const totalWords = words.filter(w => !w.match(/^\s+$/)).length;
          const wordIndex = words.slice(0, index).filter(w => !w.match(/^\s+$/)).length;
          
          const start = wordIndex / totalWords;
          const end = (wordIndex + 1) / totalWords;

          return (
            <Word
              key={index}
              progress={scrollYProgress}
              range={[start, end]}
              enableBlur={enableBlur}
              baseOpacity={baseOpacity}
              blurStrength={blurStrength}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

const Word = ({ children, progress, range, enableBlur, baseOpacity, blurStrength }) => {
  // Transform opacity based on scroll progress
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  
  // Transform blur based on scroll progress
  const blur = enableBlur 
    ? useTransform(progress, range, [blurStrength, 0])
    : useTransform(progress, range, [0, 0]);

  return (
    <motion.span
      style={{
        opacity,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
      className="inline-block mr-1"
    >
      {children}
    </motion.span>
  );
};

export default ScrollReveal;
