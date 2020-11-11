<template>
  <div class="moduleWrap">
    <div class="main_visual_area">
      <div class="main_inner_wrap">
        <swiper
          :options="swiperOption"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <!-- slides -->
            <div>
              <a href="#none">
                <img
                  src="~@/assets/img/mainvisual.jpg"
                  alt="크리니크 치크팝 어마어마 특가전 세트 구매시 다낭 항공권 증정"
                />
                <div class="txt_box">
                  <div class="flag_set">
                    <span class="reward">구매사은</span>
                  </div>
                  <div class="inner_title">
                    <span class="main_txt">크리니크 치크팝</span>
                    <span class="main_txt">어마어마 특가전</span>
                    <span class="sub_txt">세트구매시 다낭 항공권 증정</span>
                    <span class="sub_txt">항공권 증정!</span>
                    <span class="txt_num">2018.06.23 ~ 27</span>
                  </div>
                </div>
              </a>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- slides -->
            <a href="#none">
              <img
                src="~@/assets/img/mainvisual.jpg"
                alt="크리니크 치크팝 어마어마 특가전 세트 구매시 다낭 항공권 증정"
              />
              <div class="txt_box">
                <div class="flag_set">
                  <span class="reward">구매사은</span>
                </div>
                <div class="inner_title">
                  <span class="main_txt">크리니크 치크팝</span>
                  <span class="main_txt">어마어마 특가전</span>
                  <span class="sub_txt">세트구매시 다낭 항공권 증정</span>
                  <span class="sub_txt">항공권 증정!</span>
                  <span class="txt_num">2018.06.23 ~ 27</span>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <!-- slides -->
            <a href="#none">
              <img
                src="~@/assets/img/mainvisual.jpg"
                alt="크리니크 치크팝 어마어마 특가전 세트 구매시 다낭 항공권 증정"
              />
              <div class="txt_box">
                <div class="flag_set">
                  <span class="reward">구매사은</span>
                </div>
                <div class="inner_title">
                  <span class="main_txt">크리니크 치크팝</span>
                  <span class="main_txt">어마어마 특가전</span>
                  <span class="sub_txt">세트구매시 다낭 항공권 증정</span>
                  <span class="sub_txt">항공권 증정!</span>
                  <span class="txt_num">2018.06.23 ~ 27</span>
                </div>
              </div>
            </a>
          </swiper-slide>
        </swiper>

        <div class="page_counter">
          <span>20</span>
          <span>/</span>
          <span class="total_num">20</span>
          <button class="btn_overview">
            <span class="hidden_txt">펼쳐보기</span>
          </button>
        </div>
      </div>

      <div class="tabs_wrap">
        <div class="tab_menu_area">
          <div class="tabs">
            <ul>
              <li>
                <a href="#none">
                  베스트
                </a>
              </li>
              <li>
                <a href="#none">
                  핫세일
                </a>
              </li>
              <li>
                <a href="#none">
                  브랜드행사
                </a>
              </li>
              <li>
                <a href="#none">
                  신상품
                </a>
              </li>
              <li>
                <a href="#none">
                  #포포포
                </a>
              </li>
            </ul>
          </div>
          <button class="btn_more">
            <span class="hidden_txt">더보기</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "imageBanner01",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10
      }
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    }
  }
};
</script>

<style lang="scss"></style>
