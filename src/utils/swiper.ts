// lib/swiper.ts
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Autoplay, 
  Navigation, 
  Pagination, 
  A11y, 
  EffectCards, 
  Scrollbar 
} from 'swiper/modules';

// Register modules with Swiper (keeping original pattern)
SwiperClass.use([Autoplay, Navigation, Pagination, A11y, EffectCards, Scrollbar]);

// Import only the CSS you need
import 'swiper/css/bundle';

// Re-export everything exactly as original
export { 
  Swiper, 
  SwiperSlide,
  SwiperClass,
  // Export modules for type definitions only
  Autoplay, 
  Navigation, 
  Pagination, 
  A11y, 
  EffectCards, 
  Scrollbar 
};