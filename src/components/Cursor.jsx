import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a clickable element
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: 'rgba(212, 163, 115, 0.5)', // accent color
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: 'rgba(212, 163, 115, 0.2)',
      border: '1px solid #D4A373',
      mixBlendMode: 'normal'
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovered ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
