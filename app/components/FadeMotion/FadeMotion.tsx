'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeMotionProps {
  children: React.ReactElement | React.ReactElement[];
}

const FadeMotion = ({ children }: FadeMotionProps) => {
  const quote = 'Framer Motion is a really cool tool'.split(' ');

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeMotion;
