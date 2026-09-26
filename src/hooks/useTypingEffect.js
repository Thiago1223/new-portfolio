import { useEffect, useState } from 'react';

// Efeito de "máquina de escrever": digita e apaga cada texto de `roles` em loop.
export function useTypingEffect(roles, { typingSpeed = 150, deletingSpeed = 50, pauseMs = 1000 } = {}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => fullText.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        setDisplayedText((prev) => fullText.substring(0, prev.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseMs]);

  return displayedText;
}
