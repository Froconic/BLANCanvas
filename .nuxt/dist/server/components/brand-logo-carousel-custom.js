exports.ids = [66];
exports.modules = {

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarouselCustom.vue?vue&type=template&id=31acdd8b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-brand-area bg_color--1 ptb--60"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"brand-wrapper\">","</div>",[_vm._ssrNode("<div class=\"brand__list brand-default brand-style--1\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.data),function(brand){return _c('div',{key:brand.id,staticClass:"brand swiper-slide"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":brand.logo,"alt":"logo image"}})])],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination\"></div>")],2)])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BrandLogoCarouselCustom.vue?vue&type=template&id=31acdd8b&

// EXTERNAL MODULE: ./data/brandLogo.json
var brandLogo = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarouselCustom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BrandLogoCarouselCustomvue_type_script_lang_js_ = ({
  data() {
    return {
      data: brandLogo,
      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: false,
        // Responsive breakpoints
        breakpoints: {
          1200: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          }
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (e, t, i) {
            var a = 100 / i * t;
            var n = t.toString(),
                s = i.toString();
            return '<div class="fraction"><span class="current">' + (n = n.padStart(2, "0")) + '</span><span class="separator"> - </span><span class="total">' + (s = s.padStart(2, "0")) + "</span></div>";
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/BrandLogoCarouselCustom.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoCarouselCustomvue_type_script_lang_js_ = (BrandLogoCarouselCustomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BrandLogoCarouselCustom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoCarouselCustomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c09a428"
  
)

/* harmony default export */ var BrandLogoCarouselCustom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"logo\":\"/img/testimonial/clint-2/client-logo-01.png\"},{\"id\":2,\"logo\":\"/img/testimonial/clint-2/client-logo-02.png\"},{\"id\":3,\"logo\":\"/img/testimonial/clint-2/client-logo-03.png\"},{\"id\":4,\"logo\":\"/img/testimonial/clint-2/client-logo-04.png\"},{\"id\":5,\"logo\":\"/img/testimonial/clint-2/client-logo-05.png\"},{\"id\":6,\"logo\":\"/img/testimonial/clint-2/client-logo-06.png\"}]");

/***/ })

};;
//# sourceMappingURL=brand-logo-carousel-custom.js.map