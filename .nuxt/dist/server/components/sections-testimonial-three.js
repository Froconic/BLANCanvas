exports.ids = [2,189];
exports.modules = {

/***/ 132:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"Feedback from our clients.\",\"sectionSubTitle\":\"Testimonials\",\"testimonials\":[{\"id\":1,\"name\":\"Yeasin Rony\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-1.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":2,\"name\":\"Tasnim Akter\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-2.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":3,\"name\":\"Uzzal Hossain\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-3.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":4,\"name\":\"Maria\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-4.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":5,\"name\":\"Bindu\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-5.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":6,\"name\":\"Raju\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-6.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":7,\"name\":\"Harley Mills\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-7.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"}]}");

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=template&id=42fb921b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"testimonial testimonial_style--1"},[_vm._ssrNode("<div class=\"content\"><p>"+(_vm._s(_vm.testimonial.text))+"</p> <div class=\"testimonial-info\"><div class=\"post-thumbnail\"><img"+(_vm._ssrAttr("src",_vm.testimonial.thumb))+(_vm._ssrAttr("alt",_vm.testimonial.alt))+"></div> <div class=\"clint-info\"><h6>"+_vm._ssrEscape(_vm._s(_vm.testimonial.name))+"</h6> <span>"+_vm._ssrEscape(_vm._s(_vm.testimonial.position))+"</span></div></div> <div class=\"testimonial-quote\"><span class=\"fa fa-quote-right\"></span></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=template&id=42fb921b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialItemvue_type_script_lang_js_ = ({
  props: ['testimonial']
});
// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialItemvue_type_script_lang_js_ = (TestimonialItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TestimonialItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3384474a"
  
)

/* harmony default export */ var TestimonialItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TestimonialThree.vue?vue&type=template&id=50594b74&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-testimonial-area",class:_vm.addClass},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12 pb--30\">","</div>",[_vm._ssrNode("<div class=\"brook-element-carousel\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.data.testimonials),function(testimonial){return _c('div',{key:testimonial.id,staticClass:"swiper-slide"},[_c('TestimonialItem',{attrs:{"testimonial":testimonial}})],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination swiper-dots-bottom\"></div>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/TestimonialThree.vue?vue&type=template&id=50594b74&

// EXTERNAL MODULE: ./data/testimonial.json
var testimonial = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TestimonialThree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TestimonialThreevue_type_script_lang_js_ = ({
  components: {
    TestimonialItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 140))
  },
  props: ["addClass"],

  data() {
    return {
      data: testimonial,
      swiperOption: {
        spaceBetween: 20,
        autoplay: false,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          576: {
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
// CONCATENATED MODULE: ./components/sections/TestimonialThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TestimonialThreevue_type_script_lang_js_ = (TestimonialThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/TestimonialThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_TestimonialThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d435db6"
  
)

/* harmony default export */ var TestimonialThree = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TestimonialItem: __webpack_require__(140).default})


/***/ })

};;
//# sourceMappingURL=sections-testimonial-three.js.map