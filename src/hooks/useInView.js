import { useEffect, useRef, useState } from 'react';

// Retorna [ref, isVisible]. isVisible vira true (e fica true) assim que o
// elemento referenciado entra na viewport — usado para as animações de
// "aparecer ao rolar a tela" de cada seção.
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
