exports.ids = [23,93];
exports.modules = {

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureItemStyleOne.vue?vue&type=template&id=707596e0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"single-motive-speach text-white"},[_vm._ssrNode("<div class=\"icon\"><i"+(_vm._ssrClass(null,_vm.feature.icon))+"></i></div> <div class=\"content\"><h4>"+_vm._ssrEscape(_vm._s(_vm.feature.heading))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.feature.text))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeatureItemStyleOne.vue?vue&type=template&id=707596e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureItemStyleOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeatureItemStyleOnevue_type_script_lang_js_ = ({
  props: ["feature"]
});
// CONCATENATED MODULE: ./components/FeatureItemStyleOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureItemStyleOnevue_type_script_lang_js_ = (FeatureItemStyleOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FeatureItemStyleOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureItemStyleOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e485a72"
  
)

/* harmony default export */ var FeatureItemStyleOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 342:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"feature title 01\",\"features\":[{\"id\":1,\"icon\":\"ion-ios-infinite theme-color\",\"heading\":\"Digital Marketing\",\"text\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":2,\"icon\":\"ion-monitor\",\"heading\":\"UI/UX designs\",\"text\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":3,\"icon\":\"ion-ios-baseball-outline\",\"heading\":\"SEO marketing\",\"text\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":4,\"icon\":\"ion-pinpoint\",\"heading\":\"Resource use\",\"text\":\"We conduct the marketing of products & services using latest digital technologies.\"}]}");

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/FeatureStartUp.vue?vue&type=template&id=2e9a1049&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-service-area bg_color--13"},[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-7\">","</div>",[_vm._ssrNode("<div class=\"row startupservice-wrapper mtn--40\">","</div>",_vm._l((_vm.data.features),function(feature){return _vm._ssrNode("<div class=\"col-lg-6 mt--40\">","</div>",[_c('FeatureItemStyleOne',{attrs:{"feature":feature}})],1)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-5\">","</div>",[_vm._ssrNode("<div data-black-overlay=\"9\" class=\"clint-succeed bg_image--24 ptb--220 ptb-md--80 ptb-lg--80 ptb_lp--130 ptb-sm--60\""+(_vm._ssrStyle(null,{ backgroundImage: "url('/img/bg/bg-image-24.jpg')" }, null))+">","</div>",[_vm._ssrNode("<div class=\"row align-items-center plr_md--40 plr_sm--40\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4\">","</div>",[_c('client-only',[_c('silent-box',{attrs:{"image":_vm.videos[0]},scopedSlots:_vm._u([{key:"silentbox-item",fn:function(){return [_c('div',{staticClass:"video-btn"},[_c('div',{staticClass:"play__btn"},[_c('div',{staticClass:"video-icon second-icon yellow-color-2"})])])]},proxy:true}])})],1)],1),_vm._ssrNode(" <div class=\"col-lg-8\"><div class=\"content pr--30 pr_sm--0\"><h3 class=\"heading heading-h3 font-32 text-white line-height-1-88\">We help our clients succeed by delivering products that improve life, work and play.</h3></div></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/FeatureStartUp.vue?vue&type=template&id=2e9a1049&

// EXTERNAL MODULE: ./data/features.json
var features = __webpack_require__(342);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/FeatureStartUp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FeatureStartUpvue_type_script_lang_js_ = ({
  components: {
    FeatureItemStyleOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 303))
  },

  data() {
    return {
      data: features,
      videos: [{
        src: 'https://www.youtube.com/watch?v=9No-FiEInLA',
        thumbnail: ""
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/FeatureStartUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_FeatureStartUpvue_type_script_lang_js_ = (FeatureStartUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/FeatureStartUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_FeatureStartUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "743783fe"
  
)

/* harmony default export */ var FeatureStartUp = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FeatureItemStyleOne: __webpack_require__(303).default})


/***/ })

};;
//# sourceMappingURL=sections-feature-start-up.js.map