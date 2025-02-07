import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';

export const useGSAP = (callback: (ctx: gsap.Context) => void, dependencies: any[] = []) => {
  const contextRef = useRef<gsap.Context>();
  
  useEffect(() => {
    contextRef.current = gsap.context(callback);
    return () => contextRef.current?.revert();
  }, dependencies);
}; 