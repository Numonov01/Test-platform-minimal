import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for header

      // If at very top, set first section as active
      if (window.scrollY < 100) {
        setActiveSection(`#${sectionIds[0]}`);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const { offsetTop } = section;
          if (scrollPosition >= offsetTop) {
            setActiveSection(`#${sectionIds[i]}`);
            return;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
