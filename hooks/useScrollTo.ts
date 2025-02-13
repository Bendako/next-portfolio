import { useCallback, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useScrollTo = () => {
  const { toast } = useToast();

  const scrollToElement = useCallback((elementId: string) => {
    // Add a small delay to ensure the element is mounted
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        // Calculate header height - adjust this value based on your header height
        const headerHeight = 80; // assuming header height is 80px
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${elementId}" not found`);
        toast({
          title: "Navigation Error",
          description: `Couldn't find the ${elementId} section`,
          variant: "destructive",
        });
      }
    }, 100);
  }, [toast]);

  // Handle scroll restoration on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        scrollToElement(id);
      }
    }
  }, [scrollToElement]);

  return scrollToElement;
};