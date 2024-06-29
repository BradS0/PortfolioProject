import { motion } from 'framer-motion';
import React from 'react';
import { Text } from '@chakra-ui/react';

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export function Typewriter({ text, ...rest }) {
  console.log('In function Typewriter');
  const MotionText = motion(Text);
  return (
    <MotionText
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </MotionText>
  );
}

export default Typewriter;
