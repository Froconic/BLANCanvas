exports.ids = [137];
exports.modules = {

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroVertical.vue?vue&type=template&id=41e71afc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vertical-slider-area"},[_vm._ssrNode("<div class=\"brook-element-carousel swiper-custom-arrow swiper-arrow-hover\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.sliders),function(slider){return _c('div',{key:slider.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"single-vertical-slide fullscreen bg-cover d-flex align-items-end",style:({ backgroundImage: ("url(" + (slider.bgImage) + ")") })},[_c('div',{staticClass:"slide-inner"},[_c('div',{staticClass:"info"},[_c('h2',{staticClass:"heading heading-h2 text-white"},[_c('n-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_vm._v(_vm._s(slider.heading))])],1),_vm._v(" "),_c('div',{staticClass:"category"},[_vm._v(_vm._s(slider.category))])])])])])}),0),_vm._ssrNode(" <button class=\"swiper-btn swiper-btn-prev\"><i class=\"ion ion-ios-arrow-back\"></i></button> <button class=\"swiper-btn swiper-btn-next\"><i class=\"ion ion-ios-arrow-forward\"></i></button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroVertical.vue?vue&type=template&id=41e71afc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroVertical.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroVerticalvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          1200: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          }
        }
      },
      sliders: [{
        id: 1,
        heading: "B-sharp High-end Audio",
        category: "Digital",
        bgImage: "/img/slider/vertical-slide/vertical-slide-1.jpg"
      }, {
        id: 2,
        heading: "Measure Digital Progress",
        category: "Digital",
        bgImage: "/img/slider/vertical-slide/vertical-slide-2.jpg"
      }, {
        id: 3,
        heading: "Graphic Design Decoding",
        category: "Digital",
        bgImage: "/img/slider/vertical-slide/vertical-slide-3.jpg"
      }, {
        id: 4,
        heading: "Sharing Creative Process",
        category: "Digital",
        bgImage: "/img/slider/vertical-slide/vertical-slide-4.jpg"
      }, {
        id: 5,
        heading: "Graphic Design Decoding",
        category: "Digital",
        bgImage: "/img/slider/vertical-slide/vertical-slide-5.jpg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/HeroVertical.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroVerticalvue_type_script_lang_js_ = (HeroVerticalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroVertical.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroVerticalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fb591952"
  
)

/* harmony default export */ var HeroVertical = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-vertical.js.map