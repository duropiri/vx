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

// Register modules with Swiper
SwiperClass.use([Autoplay, Navigation, Pagination, A11y, EffectCards, Scrollbar]);

// Import only the CSS you need
import 'swiper/css/bundle';

export { 
  Swiper, 
  SwiperSlide,
  // Export modules for type definitions only
  Autoplay, 
  Navigation, 
  Pagination, 
  A11y, 
  EffectCards, 
  Scrollbar 
};