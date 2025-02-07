import { useEffect } from 'react';
import { ScrollTrigger } from '@/utils/gsap';

export const useScrollTrigger = (config: ScrollTrigger.StaticVars) => {
  useEffect(() => {
    const st = ScrollTrigger.create(config);
    return () => st.kill();
  }, [config]);
}; 