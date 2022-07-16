exports.ids = [146];
exports.modules = {

/***/ 165:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexibleSliderFour_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexibleSliderFour_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexibleSliderFour_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexibleSliderFour_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexibleSliderFour_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/FlexibleSliderFour.vue?vue&type=template&id=49fed6fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexableimage__wrapper"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.sliders),function(slide){return _c('div',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"has-center-content"},[_c('div',{staticClass:"has-centerinner"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":slide.image,"alt":slide.alt}})]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"bkseparator--30"}),_vm._v(" "),_c('h1',{staticClass:"heading heading-h1 line-height-1-39"},[_c('n-link',{staticClass:"accent text-white",attrs:{"to":"/events"}},[_vm._v("\n                  "+_vm._s(slide.title)+"\n                ")])],1),_vm._v(" "),_c('h6',[_vm._v(_vm._s(slide.date))]),_vm._v(" "),_c('h6',[_vm._v(_vm._s(slide.time))]),_vm._v(" "),_c('h6',[_vm._v(_vm._s(slide.location))]),_vm._v(" "),_c('h6',[_vm._v(_vm._s(slide.price))]),_vm._v(" "),_c('h6',[_vm._v(_vm._s(slide.details))]),_vm._v(" "),_c('div',{staticClass:"bkseparator--55"})])])])])])}),0),_vm._ssrNode(" <button class=\"swiper-btn swiper-btn-prev\"><i class=\"fas fa-angle-left\"></i></button> <button class=\"swiper-btn swiper-btn-next\"><i class=\"fas fa-angle-right\"></i></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/FlexibleSliderFour.vue?vue&type=template&id=49fed6fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/FlexibleSliderFour.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        speed: 5500,
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
        title: 'House Party',
        category: 'Open Mic',
        image: "/img/events/house-party.png",
        date: 'July 16th, 2022',
        time: '6:00-9:00 PM',
        location: 'Quince Coffee House | 1447 Quince St, Denver, CO 80220',
        price: 'Donation',
        details: 'Open Mic, Music, Yard Games & more'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/landing/FlexibleSliderFour.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_FlexibleSliderFourvue_type_script_lang_js_ = (FlexibleSliderFourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/FlexibleSliderFour.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_FlexibleSliderFourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3a4f3c84"
  
)

/* harmony default export */ var FlexibleSliderFour = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-flexible-slider-four.js.map