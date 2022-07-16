exports.ids = [27,15];
exports.modules = {

/***/ 158:
/***/ (function(module) {

module.exports = JSON.parse("{\"pricingItems\":[{\"currency\":\"$\",\"price\":\"45\",\"mark\":false,\"active\":false,\"package\":\"Basic package\",\"headings\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]},{\"currency\":\"$\",\"price\":\"60\",\"package\":\"Standard package\",\"mark\":true,\"active\":true,\"headings\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]},{\"currency\":\"$\",\"price\":\"99\",\"mark\":false,\"active\":false,\"package\":\"Premium package\",\"headings\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]}],\"pricingPlanHeading\":\"Choose your plan\",\"pricingPlanText\":\"If you are unsure which pricing plan to choose, then register for a 14-day free trial to start building your business.\",\"pricingAboutTitle\":\"About\",\"pricingAboutText\":\"We offer competitive rates and amazing pricing plans to help you find one that fits your needs and budget. If you are unsure which pricing plan to choose, don’t worry, you can always get a refund from us.\",\"pricingFeaturesTitle\":\"Features\",\"pricingFeatures\":[\"Business Architecture\",\"Cognitive Architecture\",\"Interior Architecture\",\"Landscape Architecture\",\"UI/UX designs\",\"SEO marketing\"]}");

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PricingItemStyleOne.vue?vue&type=template&id=041423c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pricing-wrap move-up wow"},[_vm._ssrNode("<div"+(_vm._ssrClass("pricing-box",{'active mtn--40': _vm.pricing.active}))+"><div class=\"header\">"+((_vm.pricing.mark)?("<div class=\"feature-mark\">Popular Choice</div>"):"<!---->")+" <div class=\"price\"><h3 class=\"currenct\">"+_vm._ssrEscape(_vm._s(_vm.pricing.currency))+"</h3> <h3 class=\"heading headin-h3\">"+_vm._ssrEscape(_vm._s(_vm.pricing.price))+"</h3></div></div> <div class=\"content\"><h5 class=\"heading heading-h5\">"+_vm._ssrEscape(_vm._s(_vm.pricing.package))+"</h5> <div class=\"bk-list--2\">"+(_vm._ssrList((_vm.pricing.headings),function(heading){return ("<div class=\"list-header with-ckeck item-available\"><div class=\"marker\"></div> <div class=\"title-wrap\"><h6 class=\"heading heading-h5\">"+_vm._ssrEscape(_vm._s(heading))+"</h6></div></div>")}))+"</div></div> <div class=\"footer mt--40\"><button class=\"brook-btn bk-btn-dark btn-sd-size btn-rounded\">Sign up</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PricingItemStyleOne.vue?vue&type=template&id=041423c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PricingItemStyleOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PricingItemStyleOnevue_type_script_lang_js_ = ({
  props: ['pricing']
});
// CONCATENATED MODULE: ./components/PricingItemStyleOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PricingItemStyleOnevue_type_script_lang_js_ = (PricingItemStyleOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/PricingItemStyleOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PricingItemStyleOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "69ae5797"
  
)

/* harmony default export */ var PricingItemStyleOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PricingOne.vue?vue&type=template&id=2431d59e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn--40\">","</div>",_vm._l((_vm.data.pricingItems),function(pricing){return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 mt--40\">","</div>",[_c('PricingItemStyleOne',{attrs:{"pricing":pricing}})],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/PricingOne.vue?vue&type=template&id=2431d59e&

// EXTERNAL MODULE: ./data/pricing.json
var pricing = __webpack_require__(158);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PricingOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PricingOnevue_type_script_lang_js_ = ({
  components: {
    PricingItemStyleOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 180))
  },

  data() {
    return {
      data: pricing
    };
  }

});
// CONCATENATED MODULE: ./components/sections/PricingOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_PricingOnevue_type_script_lang_js_ = (PricingOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/PricingOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_PricingOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0ce27612"
  
)

/* harmony default export */ var PricingOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PricingItemStyleOne: __webpack_require__(180).default})


/***/ })

};;
//# sourceMappingURL=sections-pricing-one.js.map