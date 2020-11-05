<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div 
        class="swiper-slide"
        v-for="movie in movies"
        :key="movie.imdbID"
      >
        <span>Slide content</span>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

export default {
  data() {
      return {
          swiper: null
      }
  },
  props: [
      'movies'
  ],
  methods: {
      onSwiper(swiper) {
          console.log(swiper)
      },
      onSlideChange() {
          console.log('slide change')
      },
      imgUrl(posterUrl) {
        return `background:url(${posterUrl} no-repeat center center fixed)`;
      }
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide'
        },
    });
    this.swiper.on('slideChange', function () {
        console.log('slide changed');
    });
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: auto;
  width: auto;
}
</style>