import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useScroll } from 'react-use-gesture';

const Example = () => {
  const containersRef = useRef<HTMLDivElement[]>([]);
  const [springs, api] = useSpring(() => ({
    opacity: 0,
  }));

  const bind = useScroll(({ xy: [, y] }) => {
    containersRef.current.forEach((container, index) => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = rect.height;
      const scrollY = window.scrollY + window.innerHeight;

      if (scrollY > containerTop && scrollY < containerTop + containerHeight) {
        const progress = (scrollY - containerTop) / containerHeight;
        api.start({
          opacity: progress < 0.5 ? 1 : 0,
        });
      }
    });
  });

  return (
    <div {...bind()} style={{ height: '200vh', padding: '50px' }}>
      {[...Array(3)].map((_, index) => (
        <animated.div
          key={index}
          ref={(el) => (containersRef.current[index] = el!)}
          style={{
            ...springs,
            width: '200px',
            height: '200px',
            margin: '50px auto',
            background: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            position: 'relative',
          }}
        >
          Container {index + 1}
        </animated.div>
      ))}
    </div>
  );
};

export default Example;