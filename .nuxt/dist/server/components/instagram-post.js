exports.ids = [139];
exports.modules = {

/***/ 88:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"image\":\"/img/instagram/instagram-md-1.jpg\",\"like\":\"1K\",\"comment\":\"8\"},{\"id\":2,\"image\":\"/img/instagram/instagram-md-2.jpg\",\"like\":\"6K\",\"comment\":\"9\"},{\"id\":3,\"image\":\"/img/instagram/instagram-md-3.jpg\",\"like\":\"3K\",\"comment\":\"4\"},{\"id\":4,\"image\":\"/img/instagram/instagram-md-4.jpg\",\"like\":\"1K\",\"comment\":\"3\"},{\"id\":5,\"image\":\"/img/instagram/instagram-md-5.jpg\",\"like\":\"2K\",\"comment\":\"7\"},{\"id\":6,\"image\":\"/img/instagram/instagram-md-6.jpg\",\"like\":\"1K\",\"comment\":\"8\"}]");

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPost.vue?vue&type=template&id=3cce4e66&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"instagram-grid-wrap",class:_vm.addClass},[_vm._ssrNode((_vm._ssrList((_vm.data),function(instagram){return ("<div class=\"item-grid grid-style--1\"><a href=\"https://www.instagram.com/\" target=\"_blank\"><div class=\"thumb\"><img"+(_vm._ssrAttr("src",instagram.image))+" alt=\"instagram images\"></div> <div class=\"item-info\"><div class=\"inner\"><a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fas fa-heart\"></i>"+_vm._ssrEscape("\n                        "+_vm._s(instagram.like)+"\n                    ")+"</a> <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fas fa-comment-dots\"></i>"+_vm._ssrEscape("\n                        "+_vm._s(instagram.comment)+"\n                    ")+"</a></div></div></a></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstagramPost.vue?vue&type=template&id=3cce4e66&

// EXTERNAL MODULE: ./data/instagram.json
var instagram = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPost.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InstagramPostvue_type_script_lang_js_ = ({
  props: ['addClass'],

  data() {
    return {
      data: instagram
    };
  }

});
// CONCATENATED MODULE: ./components/InstagramPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstagramPostvue_type_script_lang_js_ = (InstagramPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InstagramPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstagramPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f175188a"
  
)

/* harmony default export */ var InstagramPost = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instagram-post.js.map