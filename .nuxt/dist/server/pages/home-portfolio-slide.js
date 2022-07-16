exports.ids = [257,101,108,116,132,155,164,166,167];
exports.modules = {

/***/ 221:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderPortfolioSlider.vue?vue&type=template&id=3dded126&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fixed-header',[_c('header',{staticClass:"br_header header-default header-portfolio-slide position-from--top black-logo--version haeder-fixed-width header-mega-menu clearfix"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"header__wrapper ptb--40 ptb-sm--20 justify-content-between mr--0"},[_c('div',{staticClass:"header-left"},[_c('div',{staticClass:"simple-logo"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/simple-dark-logo2.png","alt":"Brand Logo"}})])],1)]),_vm._v(" "),_c('div',{staticClass:"header-right"},[_c('div',{staticClass:"manu-hamber hamberger-trigger black-version d-none d-xl-block",on:{"click":function($event){return _vm.$emit('toggleFullpageMenu')}}},[_c('div',[_c('i')])]),_vm._v(" "),_c('div',{staticClass:"manu-hamber popup-mobile-click black-version d-block d-xl-none",on:{"click":function($event){return _vm.$emit('togglenav')}}},[_c('div',[_c('i')])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderPortfolioSlider.vue?vue&type=template&id=3dded126&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(59);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderPortfolioSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HeaderPortfolioSlidervue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a
  }
});
// CONCATENATED MODULE: ./components/HeaderPortfolioSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderPortfolioSlidervue_type_script_lang_js_ = (HeaderPortfolioSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderPortfolioSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderPortfolioSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f9cfdf76"
  
)

/* harmony default export */ var HeaderPortfolioSlider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(62).default})


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroPortfolioSlide.vue?vue&type=template&id=758d8003&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-portfolio-slide"},[_vm._ssrNode("<div class=\"portfolio-slide-activation swiper-dot-vertical-center\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.sliders),function(slide){return _c('div',{key:slide.id,staticClass:"swiper-slide single-portfolio-slide pl--100 plr_sm--10 pl_md--50"},[_c('div',{staticClass:"fullscreen d-flex align-items-center bg_image--45",style:({ backgroundImage: ("url(" + (slide.coverImage) + ")") })},[_c('div',{staticClass:"inner"},[_c('div',{staticClass:"info"},[_c('h3',{staticClass:"heading heading-h3 text-white"},[_c('n-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_vm._v("\n                                    "+_vm._s(slide.title)+"\n                                ")])],1),_vm._v(" "),_c('div',{staticClass:"category"},[_c('n-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_vm._v(_vm._s(slide.category))])],1),_vm._v(" "),_c('div',{staticClass:"slide-btn"},[_c('n-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_vm._v("View Project")])],1)])])])])}),0),_vm._ssrNode(" <div class=\"swiper-pagination\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroPortfolioSlide.vue?vue&type=template&id=758d8003&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroPortfolioSlide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroPortfolioSlidevue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      sliders: [{
        id: 1,
        title: "B-sharp High-end Audio",
        category: "Design",
        coverImage: "/img/bg/bg-image-45.jpg"
      }, {
        id: 2,
        title: "Enchanting Portrait Hacks",
        category: "Digital",
        coverImage: "/img/bg/bg-image-46.jpg"
      }, {
        id: 3,
        title: "Digital Marketing Basics",
        category: "Design",
        coverImage: "/img/bg/bg-image-47.jpg"
      }, {
        id: 4,
        title: "Measure Digital Progress",
        category: "Life Style",
        coverImage: "/img/bg/bg-image-48.jpg"
      }, {
        id: 5,
        title: "Graphic Design Decoding",
        category: "Digital",
        coverImage: "/img/bg/bg-image-46.jpg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/HeroPortfolioSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroPortfolioSlidevue_type_script_lang_js_ = (HeroPortfolioSlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroPortfolioSlide.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroPortfolioSlidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "322db62c"
  
)

/* harmony default export */ var HeroPortfolioSlide = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_portfolio_slide_vue_vue_type_style_index_0_id_4182824b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_portfolio_slide_vue_vue_type_style_index_0_id_4182824b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_portfolio_slide_vue_vue_type_style_index_0_id_4182824b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_portfolio_slide_vue_vue_type_style_index_0_id_4182824b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_portfolio_slide_vue_vue_type_style_index_0_id_4182824b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-portfolio-slide.vue?vue&type=template&id=4182824b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('HeaderPortfolioSlider',{on:{"toggleFullpageMenu":function($event){_vm.fullpageOpen = !_vm.fullpageOpen},"togglenav":function($event){_vm.navOpen = !_vm.navOpen}}}),_vm._ssrNode(" "),_c('OffcanvasMenu',{class:{'is-visiable' : _vm.fullpageOpen},on:{"toggleFullpageMenu":function($event){_vm.fullpageOpen = !_vm.fullpageOpen}}}),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen}}}),_vm._ssrNode(" "),_c('HeroPortfolioSlide'),_vm._ssrNode(" <footer id=\"bk-footer\" class=\"page-footer bg_color--1 plr--100 plr_md--90 plr_sm--10\" data-v-4182824b><div class=\"copyright ptb--50\" data-v-4182824b><div class=\"container-fluid pl--5 pr--5\" data-v-4182824b><div class=\"row align-items-center row--0\" data-v-4182824b><div class=\"col-md-6\" data-v-4182824b><div class=\"copyright-left\" data-v-4182824b><ul class=\"social-icon social-text text-md-left text-center text-dark second-font\" data-v-4182824b><li class=\"facebook\" data-v-4182824b><a href=\"https://www.facebook.com/\" target=\"_blank\" class=\"link\" data-v-4182824b><span class=\"color-dark\" data-v-4182824b>Facebook</span></a></li> <li class=\"twitter\" data-v-4182824b><a href=\"https://twitter.com/\" target=\"_blank\" class=\"link\" data-v-4182824b><span class=\"color-dark\" data-v-4182824b>Twitter</span></a></li> <li class=\"instagram\" data-v-4182824b><a href=\"https://www.instagram.com/\" target=\"_blank\" class=\"link\" data-v-4182824b><span class=\"color-dark\" data-v-4182824b>Instagram</span></a></li></ul></div></div> <div class=\"col-md-6\" data-v-4182824b><div class=\"copyright-right text-md-right text-center mt_sm--10\" data-v-4182824b><p class=\"color-dark\" data-v-4182824b>© 2022 <b data-v-4182824b>Brook</b> Made with <i class=\"fa fa-heart text-danger\" data-v-4182824b></i> by <b data-v-4182824b>HasThemes</b></p></div></div></div></div></div></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home-portfolio-slide.vue?vue&type=template&id=4182824b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-portfolio-slide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home_portfolio_slidevue_type_script_lang_js_ = ({
  components: {
    HeaderPortfolioSlider: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 282)),
    HeroPortfolioSlide: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 283)),
    OffcanvasMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 85)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 70))
  },

  data() {
    return {
      fullpageOpen: false,
      navOpen: false
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-2');
  },

  head() {
    return {
      title: 'Home Portfolio Slider'
    };
  }

});
// CONCATENATED MODULE: ./pages/home-portfolio-slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_portfolio_slidevue_type_script_lang_js_ = (home_portfolio_slidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home-portfolio-slide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(326)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_portfolio_slidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4182824b",
  "1e9f6505"
  
)

/* harmony default export */ var home_portfolio_slide = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderPortfolioSlider: __webpack_require__(282).default,OffcanvasMenu: __webpack_require__(85).default,OffCanvasMobileMenu: __webpack_require__(70).default,HeroPortfolioSlide: __webpack_require__(283).default,Footer: __webpack_require__(65).default})


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

/***/ 80:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasMenu_vue_vue_type_style_index_0_id_1d402e2d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasMenu_vue_vue_type_style_index_0_id_1d402e2d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasMenu_vue_vue_type_style_index_0_id_1d402e2d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasMenu_vue_vue_type_style_index_0_id_1d402e2d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffcanvasMenu_vue_vue_type_style_index_0_id_1d402e2d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffcanvasMenu.vue?vue&type=template&id=1d402e2d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"open-hamberger-wrapper d-none d-lg-block",style:({ backgroundImage: "url('/img/bg/bg-image-54.jpg')" }),attrs:{"id":"popup-fullscreen-menu"}},[_vm._ssrNode("<div class=\"page-close light-version\" data-v-1d402e2d></div> "),_vm._ssrNode("<div class=\"header-default light-logo--version poss_relative\" data-v-1d402e2d>","</div>",[_vm._ssrNode("<div class=\"mainmenu-wrapper\" data-v-1d402e2d>","</div>",[_c('Navigation')],1)]),_vm._ssrNode(" <div class=\"row hamberger-search\" data-v-1d402e2d><div class=\"col-12\" data-v-1d402e2d><form data-v-1d402e2d><div class=\"input-box\" data-v-1d402e2d><input type=\"text\" placeholder=\"Enter search keyword…\" data-v-1d402e2d> <button data-v-1d402e2d><i class=\"fa fa-search\" data-v-1d402e2d></i></button></div></form></div></div> <div class=\"offcanvas-extra-info mt--150\" data-v-1d402e2d><div class=\"row align-items-end\" data-v-1d402e2d><div class=\"col-lg-6\" data-v-1d402e2d><div class=\"info\" data-v-1d402e2d><div class=\"bk-hover mb--40\" data-v-1d402e2d><h5 class=\"heading heading-h5 text-white\" data-v-1d402e2d>Connect</h5> <div class=\"bkseparator--20\" data-v-1d402e2d></div> <p class=\"bk_pra font-16\" data-v-1d402e2d>4801 E Colfax <br data-v-1d402e2d> Denver, CO 80220</p> <p class=\"bk_pra font-16\" data-v-1d402e2d><a href=\"mailto:info@yourdomain.com\" data-v-1d402e2d>info@fifteenltd.com</a></p></div> <ul class=\"social-icon text-left tooltip-layout icon-size-large\" data-v-1d402e2d><li class=\"instagram\" data-v-1d402e2d><a href=\"https://www.instagram.com/fifteenltd/\" target=\"_blank\" aria-label=\"Instagram\" class=\"link hint--bounce hint--top hint--white\" data-v-1d402e2d><i class=\"fab fa-instagram\" data-v-1d402e2d></i></a></li></ul></div></div> <div class=\"col-lg-6\" data-v-1d402e2d><div class=\"copyright-right text-right\" data-v-1d402e2d><p class=\"bk_pra font-16\" data-v-1d402e2d>\n            © 2022 <b class=\"text-white\" data-v-1d402e2d>Handcrafted</b> with <i class=\"fa fa-heart text-danger\" data-v-1d402e2d></i> by <a href=\"https://froconicdesign.com/\" data-v-1d402e2d><b data-v-1d402e2d>Froconic Design</b></a></p></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffcanvasMenu.vue?vue&type=template&id=1d402e2d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffcanvasMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffcanvasMenuvue_type_script_lang_js_ = ({
  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 60))
  }
});
// CONCATENATED MODULE: ./components/OffcanvasMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffcanvasMenuvue_type_script_lang_js_ = (OffcanvasMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/OffcanvasMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffcanvasMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1d402e2d",
  "fe804062"
  
)

/* harmony default export */ var OffcanvasMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(60).default})


/***/ })

};;
//# sourceMappingURL=home-portfolio-slide.js.map