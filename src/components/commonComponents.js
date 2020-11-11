import Vue from "vue"
// 전역 Vue 인스턴스 추가
Vue.prototype.$vm = Vue

//vue custom scrollbar
// import vueCustomScrollbar from 'vue-custom-scrollbar'
// Vue.component("vueCustomScrollbar", vueCustomScrollbar)

// Vue.filter("maxLength", (str, len) => {
//   let trans = ""
//   for (let pos in str) {
//     const con = trans + str[pos]
//     if (getTextLength(con) <= len) trans = con
//   }
//   return trans
//   function getTextLength(s) {
//     var len = 0
//     for (var i = 0; i < s.length; i++) {
//       if (escape(str.charAt(i)).length == 6) {
//         len++
//       }
//       len++
//     }
//     return len
//   }
// })

// Image fallback
// Vue.directive("error", {
//   bind(el) {
//     if (!el.src) el.src = ""
//     try {
//       el.onerror = e => {
//         e.target.src =
//           "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//       }
//     } catch (e) {
//       console.log(e)
//     }
//   }
// })

//swiper 관련 function
// import VueAwesomeSwiper from "vue-awesome-swiper"
// import "swiper/dist/css/swiper.css"
// Vue.use(VueAwesomeSwiper)

//팝업관련
// import VModal from "vue-js-modal"
// Vue.use(VModal, {
//   dynamic: true,
//   injectModalsContainer: true
// })

//스크롤잠금
// import bodyScrollLock from "@/assets/js/bodyScrollLock"
// Vue.use(bodyScrollLock)

// const Base = Vue.options.components["Modal"]
// const CustomModal = Base.extend({
//   created() {
//     this.$on("opened", this.openModal)
//     this.$on("before-close", this.closeModal)
//   },
//   methods: {
//     openModal(modal) {
//       this.BSL.disableScroll(modal.name)
//     },
//     closeModal(modal) {
//       this.BSL.enableScroll(modal.name)
//     }
//   }
// })
// Vue.component("Modal", CustomModal)

//스와이퍼
const Swiper = Vue.options.components["swiper"]
const CustomSwiper = Swiper.extend({
  created() {
    const _this = this
    const isLoop = this.options.loop || false
    const useCounter = this.options.useCounter || false
    const counterOnly = this.options.counterOnly || false
    /* 200615 : s [jira/ONRI-4107] image_banner_01, 03, 13, 14 : 전체보기 기능 추가 */
    const fullBannerView = this.options.fullBannerView || false 
    let paginationWrapper, pagination, counter, currentIndex, totalLength, status, dot, maxShow, currentValue, prevValue, maxValue, step,
      isSingle, isShowBullets, isPagination3d, isInitPagination, pauseBtn, fullViewBtn 
    /* 200615 : e [jira/ONRI-4107] image_banner_01, 03, 13, 14 : 전체보기 기능 추가 */
    const initPagination = (max = 3, current = 0, prev = 0) => {
      dot = pagination.querySelectorAll('span')
      maxShow = max
      currentValue = this.swiper.realIndex || current
      prevValue = prev ? prev : currentValue
      maxValue = dot.length
      step = Math.floor(maxShow / 2)
      isSingle = this.swiper.isBeginning && this.swiper.isEnd
      if (maxShow < maxValue && maxValue > 5) {
        paginationWrapper.classList.remove('static')
        paginationWrapper.style.maxWidth = (maxShow + 2) * 14 + 'px'
      } else {
        paginationWrapper.classList.add('static')
        paginationWrapper.style.removeProperty('max-Width')
        pagination.style.removeProperty('left')
      }
      /* 200615 : s [jira/ONRI-4107] image_banner_01, 03, 13, 14 : 전체보기 기능 추가 */ 
      if ((maxValue >= 3 && useCounter) || counterOnly) { // image_banner_01,03,13,14 counter 노출 조건 변경
        isShowBullets = false
        counter.classList.add('pageCounter')
        currentIndex.classList.add('current')
        currentIndex.innerText = currentValue + 1 < 10 ? "0" + (currentValue + 1) : currentValue + 1
        totalLength.classList.add('total')
        totalLength.innerText = maxValue < 10 ? "0" + maxValue : maxValue
        counter.append(currentIndex, totalLength)
        paginationWrapper.parentNode.insertBefore(counter, paginationWrapper)
        
        if(fullBannerView) setMoreController() // 200610 더보기 및 pause 버튼 활성화
        /* 200615 : e [jira/ONRI-4107] image_banner_01, 03, 13, 14 : 전체보기 기능 추가 */ 
      } else {
        isShowBullets = true
        if (paginationWrapper.parentNode.querySelector('.pageCounter')) {
          paginationWrapper.parentNode.querySelector('.pageCounter').remove()
        }
      }

      if (this.options.loop && (this.swiper.slides.length - this.swiper.loopedSlides * 2 <= (this.options.slidesPerView || this.swiper.slidesPerViewDynamic()))) {
        isSingle = true
        this.swiper.loopDestroy()
      }

      if (isSingle) {
        this.swiper.allowTouchMove = false
        paginationWrapper.classList.add('noMorePages')
      } else {
        this.swiper.allowTouchMove = true
        paginationWrapper.classList.remove('noMorePages')
      }
      if (isShowBullets) {
        paginationWrapper.classList.remove('noBullet')
      } else {
        paginationWrapper.classList.add('noBullet')
      }
 
      setCurrentPage(currentValue)
    }
    /* 200615 : s [jira/ONRI-4107] image_banner_01, 03, 13, 14 : 전체보기 기능 추가 */ 
    // slider stop/play control 
    const pausePlay = (e) =>{
      e.stopPropagation()  
      let paused = e.target.classList.contains('play')

      if (paused) {
        e.target.classList.remove('play')
        e.target.innerText = '정지'
        this.swiper.autoplay.start()
      } else {
        e.target.classList.add('play')
        e.target.innerText = '자동 재생'
        this.swiper.autoplay.stop()
      }
    }
    // full view contents 
    // const fullView = () =>{
    //   pauseBtn.classList.add('play')
    //   pauseBtn.innerText = '자동 재생'
    //   this.swiper.autoplay.stop()
    //   this.$parent.showAllBanner(this.swiper.realIndex)
    // }
    // const setMoreController = () => {
    //   pauseBtn.classList.add('pauseBtn')
    //   fullViewBtn.classList.add('fullView')
    //   fullViewBtn.innerText = '펼쳐보기'
    //   pauseBtn.innerText = '정지'

    //   counter.prepend(pauseBtn)
    //   counter.appendChild(fullViewBtn)
    //   // 이벤트 등록
    //   pauseBtn.addEventListener('click', pausePlay)
    //   counter.addEventListener('click', fullView)
    // }
    /* 200615 : e [jira/ONRI-4107] image_banner_01, 03, 13, 14 : 전체보기 기능 추가 */ 
    // const setCurrentPage = (idxValue) => {
    //   let start, end
    //   idxValue = idxValue < 0 ? (isLoop ? maxValue - 1 : 0) : idxValue > maxValue - 1 ? (isLoop ? 0 : maxValue - 1) : idxValue
    //   currentValue = idxValue
    //   if (currentValue - prevValue == 0 || prevValue == 0) {
    //     status = 0
    //   } else if (currentValue - prevValue > 0) {
    //     status = status - 1 < -step ? -step : status - 1
    //   } else {
    //     status = status + 1 > step ? step : status + 1
    //   }

    //   start = currentValue - step + status < 0 ?
    //     0 : currentValue - step + status > maxValue - maxShow ?
    //       maxValue - maxShow : currentValue - step + status
    //   start = start <= currentValue - maxShow ? start + 1 : start
    //   end = start + maxShow - 1

    //   if (start === 0) {
    //     pagination.classList.remove('end')
    //     pagination.classList.add('start')
    //   } else if (end === maxValue - 1) {
    //     pagination.classList.remove('start')
    //     pagination.classList.add('end')
    //   } else {
    //     pagination.classList.remove('start', 'end')
    //   }

    //   if (maxShow < maxValue && maxValue > 5) {
    //     pagination.style.left = (start - 1) * -14 + 'px'
    //   }

    //   if ((maxValue > 3 && useCounter) || counterOnly) { // [jira/ONRI-4107] 200623 조건변경
    //     currentIndex.innerText = currentValue + 1 < 10 ? "0" + (currentValue + 1) : currentValue + 1
    //     totalLength.innerText = maxValue < 10 ? "0" + maxValue : maxValue
    //   }

    //   dot.forEach((el, idx) => {
    //     if (idxValue === idx) {
    //       el.classList.add('current')
    //     } else {
    //       el.classList.remove('current')
    //     }
    //     if (idx < start) {
    //       el.classList.remove('active')
    //       el.className = el.className.replace(/\s?(before|after)-\d\s?/g, " ")
    //       el.classList.add(`before-${start - idx}`)
    //     } else if (idx <= end) {
    //       el.className = el.className.replace(/\s?(before|after)-\d\s?/g, " ")
    //       el.classList.add('active')
    //     } else {
    //       el.classList.remove('active')
    //       el.className = el.className.replace(/\s?(before|after)-\d\s?/g, " ")
    //       el.classList.add(`after-${idx - end}`)
    //     }
    //   })
    //   prevValue = currentValue
    //   isInitPagination = true
    // }

    // const videoPause = (arr) => {
    //   Array.from(arr).forEach(video => {
    //     try {
    //       video.__vue__.scrollCheck()
    //     } catch {
    //       //
    //     }
    //   })
    // }

    // this.options.observer = true

    // const originalEvent = {}
    // if (this.options.on && !this.options.hash) {
    //   Object.keys(this.options.on).forEach(key => {
    //     originalEvent[key] = this.options.on[key]
    //   })
    // }

//     const customEvent = {
//       init() {
//         originalEvent.init && originalEvent.init()
//         if (!this.el) {
//           return false
//         }
//         const hash = Math.random().toString(36).replace(/^[\d|(.)]+/, "")
//         _this.options.hash = hash
//         this.el.parentNode.classList.add(hash)
//         paginationWrapper = this.el.parentNode.querySelector('.swiper-pagination')
//         isPagination3d = paginationWrapper && paginationWrapper.classList.contains('pagination3dWrapper')
//         if (isPagination3d && paginationWrapper.hasChildNodes()) {
//           pagination = paginationWrapper.firstElementChild
//           counter = document.createElement('div')
//           currentIndex = document.createElement('span')
//           totalLength = document.createElement('span')
//           fullViewBtn = document.createElement('span') // 펼쳐보기 아이콘 추가
//           pauseBtn = document.createElement('button') // pause 버튼 추가

//           _this.options.pagination = {
//             el: `.${hash} .swiper-pagination-inner`
//           }
//           this.params.pagination.el = `.${hash} .swiper-pagination-inner`
//           this.pagination.init()
//           this.pagination.render()
//           _this.$nextTick(() => {
//             initPagination()
//           })
//         } else {
//           _this.options.pagination = {
//             el: `.${hash} .swiper-pagination`
//           }
//           this.params.pagination.el = `.${hash} .swiper-pagination`
//           this.pagination.init()
//           this.pagination.render()
//         }
//         videoPause(this.el.querySelectorAll('.swiper-slide:not(.swiper-slide-active) .video-container'))
//       },
//       slideChange() {
//         originalEvent.slideChange && originalEvent.slideChange()
//         if (isPagination3d) {
//           setCurrentPage(this.realIndex)
//         }
//         this.el && videoPause(this.el.querySelectorAll('.video-container'))
//       },
//       paginationRender() {
//         originalEvent.paginationRender && originalEvent.paginationRender()
//         if (isPagination3d && isInitPagination && pagination && !pagination.querySelector('.current')) {
//           isInitPagination = false
//           initPagination()
//         }
//       }
//     }

//     if (this.options.on) {
//       Object.assign(this.options.on, customEvent)
//     } else {
//       Object.assign(this.options, {
//         on: customEvent
//       })
//     }
//     if (this.options.pagination3d !== false) {
//       Object.assign(this.options.on, {
//         observerUpdate() {
//           if (isPagination3d) {
//             if (this.params.stopPropagation) {
//               this.params.stopPropagation = false
//               return false
//             }
//             if (isLoop) {
//               this.loopDestroy()
//               if (this.params.loop && (this.slides.length - this.loopedSlides * 2 <= (_this.options.slidesPerView || _this.swiper.slidesPerViewDynamic()))) {
//                 this.params.loop = false
//               } else if (this.slides.length > 1) {
//                 this.params.loop = true
//                 this.params.stopPropagation = true
//                 this.loopCreate()
//                 this.pagination.update()
//               }
//             }
//             this.update()
//             this.slideTo(this.realIndex + (isLoop ? 1 : 0))
//             initPagination()
//           }
//         }
//       })
//     }
//   }
// })
Vue.component("swiper", CustomSwiper)