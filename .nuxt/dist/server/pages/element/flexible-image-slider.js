exports.ids = [225,70,96,98,99,101,105,108,112,155,164,166,172];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSlider.vue?vue&type=template&id=cd3c8f4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexale-image bg_color--1",class:_vm.addClass},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"brook-element-carousel flexable-arrow flexable-dots\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_c('div',{staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/img/flexable-image-slide/flexale-1/flexable-image-4.jpg","alt":"image"}})])])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/img/flexable-image-slide/flexale-1/flexable-image-5.jpg","alt":"image"}})])])])])],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FlexibleSlider.vue?vue&type=template&id=cd3c8f4c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSlider.vue?vue&type=script&lang=js&
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
//
/* harmony default export */ var FlexibleSlidervue_type_script_lang_js_ = ({
  props: ["addClass"],

  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/FlexibleSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlexibleSlidervue_type_script_lang_js_ = (FlexibleSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FlexibleSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FlexibleSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e3b8eda"
  
)

/* harmony default export */ var FlexibleSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSliderFour.vue?vue&type=template&id=75a7199c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexableimage__wrapper"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.sliders),function(slide){return _c('div',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":slide.image,"alt":"image"}})])])])}),0),_vm._ssrNode(" <button class=\"swiper-btn swiper-btn-prev\"><i class=\"fas fa-angle-left\"></i></button> <button class=\"swiper-btn swiper-btn-next\"><i class=\"fas fa-angle-right\"></i></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FlexibleSliderFour.vue?vue&type=template&id=75a7199c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSliderFour.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FlexibleSliderFourvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        speed: 1500,
        slidesPerView: 2,
        spaceBetween: 60,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          992: {
            slidesPerView: 2,
            centeredSlides: true
          },
          768: {
            centeredSlides: false
          },
          576: {
            slidesPerView: 2,
            centeredSlides: false
          },
          300: {
            slidesPerView: 1,
            centeredSlides: false
          }
        }
      },
      sliders: [{
        id: 1,
        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-1.jpg"
      }, {
        id: 2,
        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-2.jpg"
      }, {
        id: 3,
        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-3.jpg"
      }, {
        id: 4,
        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-4.jpg"
      }, {
        id: 5,
        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-5.jpg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FlexibleSliderFour.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlexibleSliderFourvue_type_script_lang_js_ = (FlexibleSliderFourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FlexibleSliderFour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FlexibleSliderFourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00bc3159"
  
)

/* harmony default export */ var FlexibleSliderFour = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSliderThree.vue?vue&type=template&id=1b5806ed&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexale-image ptb--150 section-separator-with--border ptb-md--80 ptb-sm--60 swiper-arrow-hover"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"brook-element-carousel flexable-arrow flexable-dots\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_c('div',{staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/img/flexable-image-slide/flexale-1/flexable-small--image-5.jpg","alt":"image"}})])])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/img/flexable-image-slide/flexale-1/flexable-small--image-1.jpg","alt":"image"}})])])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/img/flexable-image-slide/flexale-1/flexable-small--image-2.jpg","alt":"image"}})])])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":"/img/flexable-image-slide/flexale-1/flexable-small--image-3.jpg","alt":"image"}})])])])]),_vm._ssrNode(" <div class=\"swiper-pagination swiper-dots-bottom\"></div> <div class=\"ht-swiper-button ht-swiper-button-prev swiper-arrow-center\"><i class=\"fas fa-angle-left\"></i></div> <div class=\"ht-swiper-button ht-swiper-button-next swiper-arrow-center\"><i class=\"fas fa-angle-right\"></i></div>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FlexibleSliderThree.vue?vue&type=template&id=1b5806ed&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSliderThree.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FlexibleSliderThreevue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.ht-swiper-button-next',
          prevEl: '.ht-swiper-button-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          768: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          },
          300: {
            slidesPerView: 1
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/FlexibleSliderThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlexibleSliderThreevue_type_script_lang_js_ = (FlexibleSliderThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FlexibleSliderThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FlexibleSliderThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ad37100a"
  
)

/* harmony default export */ var FlexibleSliderThree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/flexible-image-slider.vue?vue&type=template&id=24c7821a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_c('HeaderElement',{on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen},"toggleSearch":function($event){_vm.searchOpen = !_vm.searchOpen}}}),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen}}}),_vm._ssrNode(" "),_c('SearchPopup',{class:{'search-popup-open' : _vm.searchOpen},on:{"toggleSearch":function($event){_vm.searchOpen = !_vm.searchOpen}}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"items":_vm.items,"title":"Flexible Image Slider"}}),_vm._ssrNode(" "),_c('FlexibleSlider',{attrs:{"addClass":"ptb--150 ptb-md--80 ptb-sm--60"}}),_vm._ssrNode(" "),_c('FlexibleSliderThree'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flexale-image bg_color--1 ptb--150 swiper-custom-arrow swiper-custom-dots ptb-md--80 ptb-sm--60 move-up wow\">","</div>",[_c('FlexibleSliderFour')],1),_vm._ssrNode(" "),_c('FooterTwo')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/element/flexible-image-slider.vue?vue&type=template&id=24c7821a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/flexible-image-slider.vue?vue&type=script&lang=js&
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
/* harmony default export */ var flexible_image_slidervue_type_script_lang_js_ = ({
  components: {
    HeaderElement: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 77)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 70)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 71)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 81)),
    FlexibleSlider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 172)),
    FlexibleSliderThree: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 292)),
    FlexibleSliderFour: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 181)),
    FooterTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 72))
  },

  data() {
    return {
      navOpen: false,
      searchOpen: false,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Element',
        to: "/"
      }, {
        text: 'Flexible Image Slider',
        active: true
      }]
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },

  head() {
    return {
      title: 'Flexible Image Slider'
    };
  }

});
// CONCATENATED MODULE: ./pages/element/flexible-image-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_flexible_image_slidervue_type_script_lang_js_ = (flexible_image_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/element/flexible-image-slider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_flexible_image_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c61a8204"
  
)

/* harmony default export */ var flexible_image_slider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderElement: __webpack_require__(77).default,OffCanvasMobileMenu: __webpack_require__(70).default,SearchPopup: __webpack_require__(71).default,Breadcrumb: __webpack_require__(81).default,FlexibleSlider: __webpack_require__(172).default,FlexibleSliderThree: __webpack_require__(292).default,FlexibleSliderFour: __webpack_require__(181).default,FooterTwo: __webpack_require__(72).default})


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=67369680&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"page_nav"},[_vm._ssrNode("<ul class=\"mainmenu\">","</ul>",[_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_c('span',[_vm._v("Home")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-business"}},[_c('span',[_vm._v("Home Business")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-agency"}},[_c('span',[_vm._v("Home Creative Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-design-studio"}},[_c('span',[_vm._v("Home Design Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-digital-agency"}},[_c('span',[_vm._v("Home Digital Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-authentic-studio"}},[_c('span',[_vm._v("Home Authentic Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-agency"}},[_c('span',[_vm._v("Home Minimal Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-presentation"}},[_c('span',[_vm._v("Home Presentation")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-start-up"}},[_c('span',[_vm._v("Home Start Ups")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-freelancer"}},[_c('span',[_vm._v("Home Freelancer")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-product-landing"}},[_c('span',[_vm._v("Home Product Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-restaurant"}},[_c('span',[_vm._v("Home Restaurant")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-photo-slider-gallery"}},[_c('span',[_vm._v("Home Photo Slider Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-onepage"}},[_c('span',[_vm._v("Home Onepage")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-metro-grid"}},[_c('span',[_vm._v("Home Minimal Metro Grid")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-landing"}},[_c('span',[_vm._v("Home Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-service"}},[_c('span',[_vm._v("Home Service")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-vertical-menu"}},[_c('span',[_vm._v("Home Vertical Menu")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-corona"}},[_c('span',[_vm._v("Home Corona")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-essential"}},[_c('span',[_vm._v("Home Essential")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-indie-musician"}},[_c('span',[_vm._v("Indie Musician")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-type-hover"}},[_c('span',[_vm._v("Home Portfolio Type Hover")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-portfolio"}},[_c('span',[_vm._v("Home Creative Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-portfolio"}},[_c('span',[_vm._v("Home Minimal Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-portfolio-slide"}},[_c('span',[_vm._v("Home Portfolio Slide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-fullscreen-slider-left-vertical-header"}},[_c('span',[_vm._v("Portfolio Fullscreen Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-blog-grid"}},[_c('span',[_vm._v("Home Blog Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-masonry-gallery"}},[_c('span',[_vm._v("Home Masonry Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-foodie"}},[_c('span',[_vm._v("Home Foodie")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/about-us-01"}},[_c('span',[_vm._v("Pages")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-01"}},[_c('span',[_vm._v("About Us 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-02"}},[_c('span',[_vm._v("About Us 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-03"}},[_c('span',[_vm._v("About Us 03")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans"}},[_c('span',[_vm._v("Pricing Plans")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-classic"}},[_c('span',[_vm._v("Services Classic")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-modern"}},[_c('span',[_vm._v("Services Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-list"}},[_c('span',[_vm._v("Services List")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans-02"}},[_c('span',[_vm._v("Pricing Plans 02")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-grid"}},[_c('span',[_vm._v("Team Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-01"}},[_c('span',[_vm._v("Our Team Carousel 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-02"}},[_c('span',[_vm._v("Our Team Carousel 02")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-modern"}},[_c('span',[_vm._v("Contact Us Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-with-map"}},[_c('span',[_vm._v("Contact Us With Map")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/career"}},[_c('span',[_vm._v("Career")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_c('span',[_vm._v("Portfolio")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO SAMPLES 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_c('span',[_vm._v("Portfolio Grid Boxed")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-wide"}},[_c('span',[_vm._v("Portfolio Grid Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-with-caption"}},[_c('span',[_vm._v("Portfolio With Caption")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO SAMPLES 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-01"}},[_c('span',[_vm._v("Portfolio Grid Metro 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-02"}},[_c('span',[_vm._v("Portfolio Grid Metro 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-ajax-filter"}},[_c('span',[_vm._v("Portfolio Ajax Filter")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO DETAILS 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-filter"}},[_c('span',[_vm._v("portfolio-grid-filter")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_c('span',[_vm._v("Portfolio Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right"}},[_c('span',[_vm._v("Portfolio Details Right")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO DETAILS 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-left-wide"}},[_c('span',[_vm._v("Left Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right-wide"}},[_c('span',[_vm._v("Right Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-image-with-caption"}},[_c('span',[_vm._v("Image With Caption")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":""}},[_c('span',[_vm._v("Elements")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/team"}},[_c('span',[_vm._v("Team")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/testimonial"}},[_c('span',[_vm._v("Testimonial")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/pricing-box"}},[_c('span',[_vm._v("Pricing Box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/dividers"}},[_c('span',[_vm._v("Dividers")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/brand-logo"}},[_c('span',[_vm._v("Brand Logo Carousel")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/flexible-image-slider"}},[_c('span',[_vm._v("Flexible Image Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/carousel-slider"}},[_c('span',[_vm._v("Carousel Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/call-to-action-banner"}},[_c('span',[_vm._v("Call To Action Banner")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/tab"}},[_c('span',[_vm._v("Tab")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/gradation"}},[_c('span',[_vm._v("Gradation")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/message-box"}},[_c('span',[_vm._v("message-box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/instagram"}},[_c('span',[_vm._v("Instagram")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/icon-boxes"}},[_c('span',[_vm._v("icon-boxes")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/lists"}},[_c('span',[_vm._v("Lists")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/accordion"}},[_c('span',[_vm._v("Accordion")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/contact-subscribe"}},[_c('span',[_vm._v("Contact & subscribe forms")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-creative"}},[_c('span',[_vm._v("Blog")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-creative"}},[_c('span',[_vm._v("Blog Creative")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-standard-list"}},[_c('span',[_vm._v("Blog Standard List")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic"}},[_c('span',[_vm._v("Blog Grid Classic")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic-sidebar"}},[_c('span',[_vm._v("Blog Grid Classic Sidebar")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-standard"}},[_c('span',[_vm._v("Blog Grid Standard")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-simple"}},[_c('span',[_vm._v("Blog Grid Simple")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-modern"}},[_c('span',[_vm._v("Blog Grid Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal"}},[_c('span',[_vm._v("Blog Grid Minimal")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal-outline"}},[_c('span',[_vm._v("Blog Grid Minimal Outline")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-mesonry"}},[_c('span',[_vm._v("Blog Grid Masonry")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details"}},[_c('span',[_vm._v("Blog Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details-modern-layout"}},[_c('span',[_vm._v("Blog Details Modern Layout")])])],1)],2)],2)],2)])])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=67369680&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "eabaccca"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=9fbefdea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fixed-header',[_c('header',{staticClass:"br_header header-default header-transparent pt--15 light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"header__wrapper mr--0"},[_c('div',{staticClass:"header-left flex-20"},[_c('div',{staticClass:"logo"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook.png","alt":"Brook Logo"}})])],1)]),_vm._v(" "),_c('div',{staticClass:"header-flex-right flex-80"},[_c('div',{staticClass:"mainmenu-wrapper have-not-flex d-none d-lg-block"},[_c('Navigation')],1),_vm._v(" "),_c('div',{staticClass:"header-right have-not-flex pl--35 pl_md--5 pr_md--20 pl_sm--5 pr_sm--20"},[_c('div',{staticClass:"popup-search-wrap"},[_c('button',{staticClass:"btn-search-click",on:{"click":function($event){return _vm.$emit('toggleSearch')}}},[_c('i',{staticClass:"fa fa-search"})])]),_vm._v(" "),_c('div',{staticClass:"manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none",on:{"click":function($event){return _vm.$emit('togglenav')}}},[_c('div',[_c('i')])])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=9fbefdea&scoped=true&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(59);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/Navigation.vue + 2 modules
var Navigation = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a,
    Navigation: Navigation["default"]
  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9fbefdea",
  "600d5d14"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(60).default,Header: __webpack_require__(62).default})


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=e94b7302&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[_vm._ssrNode("<div class=\"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-5 col-xl-7 col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook.png","alt":"Brand Logo"}})])],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40\">","</div>",[_vm._ssrNode("<div class=\"footer-widget menu--about\">","</div>",[_vm._ssrNode("<h2 class=\"widgettitle\">About us</h2> "),_vm._ssrNode("<div class=\"footer-menu\">","</div>",[_vm._ssrNode("<ul class=\"ft-menu-list bk-hover\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about-us-01"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/team-grid"}},[_vm._v("Team")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/career"}},[_vm._v("Career")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/services-classic"}},[_vm._v("Services")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40\"><div class=\"footer-widget menu--contact\"><h2 class=\"widgettitle\">Contact</h2> <div class=\"footer-address bk-hover mb--20\"><p>Your address goes here <br> ana ville 10010, USA</p> <p><a href=\"mailto:info@yourdomain.com\">info@yourdomain.com</a></p> <p><a href=\"tel:0123456789\">0123456789</a></p></div> <div class=\"social-share social--transparent text-white\"><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a> <a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a> <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a> <a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fab fa-dribbble\"></i></a> <a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fab fa-pinterest\"></i></a></div></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"copyright ptb--50\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"copyright-left text-left\">","</div>",[_vm._ssrNode("<ul class=\"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-creative"}},[_vm._v("Our Blogs")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_vm._v("Latest Projects")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact Us")])],1)],2)])]),_vm._ssrNode(" <div class=\"col-md-6\"><div class=\"copyright-right text-center text-md-right\"><p>© 2022 <b>Brook</b> Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://hasthemes.com/\"><b>HasThemes</b></a></p></div></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=e94b7302&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3edaf922"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(65).default})


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=cc76cd42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-business"}},[_c('span',[_vm._v("Home Business")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-agency"}},[_c('span',[_vm._v("Home Creative Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-design-studio"}},[_c('span',[_vm._v("Home Design Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-digital-agency"}},[_c('span',[_vm._v("Home Digital Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-authentic-studio"}},[_c('span',[_vm._v("Home Authentic Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-agency"}},[_c('span',[_vm._v("Home Minimal Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-presentation"}},[_c('span',[_vm._v("Home Presentation")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-start-up"}},[_c('span',[_vm._v("Home Start Ups")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-freelancer"}},[_c('span',[_vm._v("Home Freelancer")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-product-landing"}},[_c('span',[_vm._v("Home Product Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-restaurant"}},[_c('span',[_vm._v("Home Restaurant")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-photo-slider-gallery"}},[_c('span',[_vm._v("Home Photo Slider Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-onepage"}},[_c('span',[_vm._v("Home Onepage")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-type-hover"}},[_c('span',[_vm._v("Home Portfolio Type Hover")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-landing"}},[_c('span',[_vm._v("Home Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-service"}},[_c('span',[_vm._v("Home Service")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-vertical-menu"}},[_c('span',[_vm._v("Home Vertical Menu")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-corona"}},[_c('span',[_vm._v("Home Corona")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-essential"}},[_c('span',[_vm._v("Home Essential")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-indie-musician"}},[_c('span',[_vm._v("Indie Musician")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-portfolio"}},[_c('span',[_vm._v("Home Creative Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-portfolio"}},[_c('span',[_vm._v("Home Minimal Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-portfolio-slide"}},[_c('span',[_vm._v("Home Portfolio Slide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-fullscreen-slider-left-vertical-header"}},[_c('span',[_vm._v("Portfolio Fullscreen Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-blog-grid"}},[_c('span',[_vm._v("Home Blog Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-masonry-gallery"}},[_c('span',[_vm._v("Home Masonry Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-metro-grid"}},[_c('span',[_vm._v("Home Minimal Metro Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-foodie"}},[_c('span',[_vm._v("Home Foodie")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Pages")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-01"}},[_c('span',[_vm._v("About Us 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-02"}},[_c('span',[_vm._v("About Us 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-03"}},[_c('span',[_vm._v("About Us 03")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-classic"}},[_c('span',[_vm._v("Services Classic")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-modern"}},[_c('span',[_vm._v("Services Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-list"}},[_c('span',[_vm._v("Services List")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-grid"}},[_c('span',[_vm._v("Team Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-01"}},[_c('span',[_vm._v("Our Team Carousel 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-02"}},[_c('span',[_vm._v("Our Team Carousel 02")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-modern"}},[_c('span',[_vm._v("Contact Us Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-with-map"}},[_c('span',[_vm._v("Contact Us With Map")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans"}},[_c('span',[_vm._v("Pricing Plans")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans-02"}},[_c('span',[_vm._v("Pricing Plans 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/career"}},[_c('span',[_vm._v("Career")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Portfolio")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Samples 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_c('span',[_vm._v("Portfolio Grid Boxed")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-wide"}},[_c('span',[_vm._v("Portfolio Grid Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-with-caption"}},[_c('span',[_vm._v("Portfolio With Caption")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Samples 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-01"}},[_c('span',[_vm._v("Portfolio Grid Metro 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-02"}},[_c('span',[_vm._v("Portfolio Grid Metro 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-ajax-filter"}},[_c('span',[_vm._v("Portfolio Ajax Filter")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Details 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-filter"}},[_c('span',[_vm._v("portfolio-grid-filter")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_c('span',[_vm._v("Portfolio Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right"}},[_c('span',[_vm._v("Portfolio Details Right")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Details 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-left-wide"}},[_c('span',[_vm._v("Left Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right-wide"}},[_c('span',[_vm._v("Right Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-image-with-caption"}},[_c('span',[_vm._v("Image With Caption")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Elements")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/team"}},[_c('span',[_vm._v("Team")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/testimonial"}},[_c('span',[_vm._v("Testimonial")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/pricing-box"}},[_c('span',[_vm._v("Pricing Box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/dividers"}},[_c('span',[_vm._v("Dividers")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/brand-logo"}},[_c('span',[_vm._v("Brand Logo Carousel")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/flexible-image-slider"}},[_c('span',[_vm._v("Flexible Image Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/carousel-slider"}},[_c('span',[_vm._v("Carousel Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/call-to-action-banner"}},[_c('span',[_vm._v("Call To Action Banner")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/tab"}},[_c('span',[_vm._v("Tab")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/gradation"}},[_c('span',[_vm._v("Gradation")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/message-box"}},[_c('span',[_vm._v("message-box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/instagram"}},[_c('span',[_vm._v("Instagram")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/icon-boxes"}},[_c('span',[_vm._v("icon-boxes")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/lists"}},[_c('span',[_vm._v("Lists")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/accordion"}},[_c('span',[_vm._v("Accordion")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/contact-subscribe"}},[_c('span',[_vm._v("Contact & subscribe forms")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Blogs")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-creative"}},[_c('span',[_vm._v("Blog Creative")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-standard-list"}},[_c('span',[_vm._v("Blog Standard List")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic"}},[_c('span',[_vm._v("Blog Grid Classic")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic-sidebar"}},[_c('span',[_vm._v("Blog Grid Classic Sidebar")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-standard"}},[_c('span',[_vm._v("Blog Grid Standard")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-simple"}},[_c('span',[_vm._v("Blog Grid Simple")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-modern"}},[_c('span',[_vm._v("Blog Grid Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal"}},[_c('span',[_vm._v("Blog Grid Minimal")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal-outline"}},[_c('span',[_vm._v("Blog Grid Minimal Outline")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-mesonry"}},[_c('span',[_vm._v("Blog Grid Masonry")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details"}},[_c('span',[_vm._v("Blog Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details-modern-layout"}},[_c('span',[_vm._v("Blog Details Modern Layout")])])],1)],2)],2)],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=cc76cd42&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  name: 'MobileNavMenu',

  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu === null || offcanvasMobileMenu === void 0 ? void 0 : offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9c33f8c6"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=59031510&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup-mobile-menu popup-mobile-visiable"},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"mobileheader\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook-black.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"mobile-close\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=59031510&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
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
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68))
  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "312d369e"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(68).default})


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=template&id=df19c77c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-search-popup"},[_vm._ssrNode("<div class=\"search-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"search-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook-black.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"search-close\"></button>")],2),_vm._ssrNode(" <div class=\"search-content\"><form><label><input type=\"search\" placeholder=\"Enter search keyword…\"></label> <button class=\"search-submit\"><i class=\"fa fa-search\"></i></button></form></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=template&id=df19c77c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SearchPopupvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchPopupvue_type_script_lang_js_ = (SearchPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SearchPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "093f4926"
  
)

/* harmony default export */ var SearchPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterTwo.vue?vue&type=template&id=7b8bf5e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5"},[_vm._ssrNode("<div class=\"bk-footer-inner pt--150 pb--30 pt_sm--100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"footer-widget text-var--2\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":"/img/logo/brook-white2.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <div class=\"footer-inner\"><p>Brook is a multi-purpose WordPress theme for big and small-sized businesses. Enjoy the theme's original design, functional features &amp; responsive layouts.</p></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-6 mt_mobile--40\">","</div>",[_vm._ssrNode("<div class=\"footer-widget text-var--2 menu--about\">","</div>",[_vm._ssrNode("<h2 class=\"widgettitle\">About us</h2> "),_vm._ssrNode("<div class=\"footer-menu\">","</div>",[_vm._ssrNode("<ul class=\"ft-menu-list bk-hover\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about-us-01"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/team-grid"}},[_vm._v("Team")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/career"}},[_vm._v("Career")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/services-classic"}},[_vm._v("Services")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-3 col-sm-6 mt_md--40 mt_sm--40\"><div class=\"footer-widget text-var--2 menu--contact\"><h2 class=\"widgettitle\">Contact</h2> <div class=\"footer-address\"><div class=\"bk-hover\"><p>Your address goes here <br> Vacaville 10010, USA</p> <p><a href=\"mailto:info@yourdomain.com\">info@yourdomain.com</a></p> <p><a href=\"tel:0123456789\">0123456789</a></p></div> <div class=\"social-share social--transparent text-white\"><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a> <a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a> <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a> <a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fab fa-dribbble\"></i></a> <a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fab fa-pinterest\"></i></a></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-3 col-sm-6 mt_md--40 mt_sm--40\">","</div>",[_vm._ssrNode("<div class=\"footer-widget text-var--2 menu--instagram\">","</div>",[_vm._ssrNode("<h2 class=\"widgettitle\">Instagram</h2> "),_vm._ssrNode("<div class=\"ft-instagram-list\">","</div>",[_vm._ssrNode("<div class=\"instagram-grid-wrap\">","</div>",_vm._l((_vm.instagramPosts),function(instagram){return _vm._ssrNode("<div class=\"item-grid grid-style--1\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":instagram.image,"alt":"instagram image"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item-info\">","</div>",[_vm._ssrNode("<div class=\"inner\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('i',{staticClass:"fas fa-heart"}),_vm._v("\n                                                    "+_vm._s(instagram.like)+"\n                                                ")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":""}},[_c('i',{staticClass:"fas fa-comment-dots"}),_vm._v("\n                                                    "+_vm._s(instagram.comment)+"\n                                                ")])],2)])],2)])}),0)])],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"copyright ptb--50 text-var-2\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"copyright-left text-md-left text-center\">","</div>",[_vm._ssrNode("<ul class=\"bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-creative"}},[_vm._v("Our Blogs")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_vm._v("Latest Projects")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact Us")])],1)],2)])]),_vm._ssrNode(" <div class=\"col-md-6\"><div class=\"copyright-right text-md-right text-center\"><p>© 2022 <b>Brook</b> Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://hasthemes.com/\"><b>HasThemes</b></a></p></div></div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FooterTwo.vue?vue&type=template&id=7b8bf5e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterTwo.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FooterTwovue_type_script_lang_js_ = ({
  data() {
    return {
      instagramPosts: [{
        "id": 1,
        "image": "/img/instagram/instagram-1.jpg",
        "like": "1K",
        "comment": "8"
      }, {
        "id": 2,
        "image": "/img/instagram/instagram-2.jpg",
        "like": "6K",
        "comment": "9"
      }, {
        "id": 3,
        "image": "/img/instagram/instagram-3.jpg",
        "like": "3K",
        "comment": "4"
      }, {
        "id": 4,
        "image": "/img/instagram/instagram-4.jpg",
        "like": "1K",
        "comment": "3"
      }, {
        "id": 5,
        "image": "/img/instagram/instagram-5.jpg",
        "like": "2K",
        "comment": "7"
      }, {
        "id": 6,
        "image": "/img/instagram/instagram-6.jpg",
        "like": "1K",
        "comment": "8"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FooterTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterTwovue_type_script_lang_js_ = (FooterTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FooterTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "679bbbfa"
  
)

/* harmony default export */ var FooterTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(65).default})


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderElement.vue?vue&type=template&id=95b2ad10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fixed-header',[_c('header',{staticClass:"br_header header-default header-transparent light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"header__wrapper mr--0"},[_c('div',{staticClass:"header-left flex-20"},[_c('div',{staticClass:"logo"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook-white2.png","alt":"Brook Logo"}})])],1)]),_vm._v(" "),_c('div',{staticClass:"mainmenu-wrapper d-none d-lg-block"},[_c('Navigation')],1),_vm._v(" "),_c('div',{staticClass:"header-right"},[_c('div',{staticClass:"popup-search-wrap"},[_c('button',{staticClass:"btn-search-click",on:{"click":function($event){return _vm.$emit('toggleSearch')}}},[_c('i',{staticClass:"fa fa-search"})])]),_vm._v(" "),_c('div',{staticClass:"manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none",on:{"click":function($event){return _vm.$emit('togglenav')}}},[_c('div',[_c('i')])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderElement.vue?vue&type=template&id=95b2ad10&scoped=true&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(59);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/Navigation.vue + 2 modules
var Navigation = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderElement.vue?vue&type=script&lang=js&
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


/* harmony default export */ var HeaderElementvue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a,
    Navigation: Navigation["default"]
  }
});
// CONCATENATED MODULE: ./components/HeaderElement.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderElementvue_type_script_lang_js_ = (HeaderElementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderElement.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderElementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "95b2ad10",
  "43ab6d78"
  
)

/* harmony default export */ var HeaderElement = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(60).default,Header: __webpack_require__(62).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=934b192e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb-area pt--400 pt_lg--300 pt_md--250 pt_sm--200 pb--100 bg_image--8 breadcrumb-title-bar breadcrumb-title-white",style:({ backgroundImage: "url('/img/bg/bg-image-8.jpg')" })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-inner text-center\">","</div>",[_vm._ssrNode("<h2 class=\"heading\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> "),_vm._ssrNode("<div class=\"breadcrumb-insite\">","</div>",[_c('b-breadcrumb',{staticClass:"core-breadcrumb",attrs:{"items":_vm.items}})],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=934b192e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  props: ['items', 'title']
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d8bd9fec"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=flexible-image-slider.js.map