<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for="movie in movies"
        :key="movie.imdbID"
        class="swiper-slide"
      >
        <movie-item
          :id="movie.imdbID"
          :title="movie.Title"
          :director="movie.Type"
          :year="movie.Year"
          :poster-url="movie.Poster"
        />
      </div>
    </div>
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
  </div>
</template>

<script>
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Swiper } from 'swiper';

import 'swiper/swiper-bundle.css';
import MovieItem from './MovieItem.vue';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

export default {
  components: {
    MovieItem
  },
  props: {
    movies: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      swiper: null
    };
  },
  mounted () {
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
        slideShadows: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide'
      }
    });
  },
  methods: {
    imgUrl (posterUrl) {
      return `background:url(${posterUrl} no-repeat center center fixed)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: auto;
  width: auto;
}
</style>
