exports.ids = [60,9];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostFour.vue?vue&type=template&id=5aba5d74&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-grid",class:_vm.addClass},[_vm._ssrNode("<div class=\"post-thumb\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.slug))}},[_c('img',{attrs:{"src":_vm.blog.image,"alt":_vm.blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-content\">","</div>",[_vm._ssrNode("<div class=\"post-inner\">","</div>",[_vm._ssrNode("<h4 class=\"heading heading-h4\">","</h4>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.slug))}},[_vm._v("\n                    "+_vm._s(_vm.blog.title)+"\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-meta\">","</div>",[_vm._ssrNode("<div class=\"post-date\">"+_vm._ssrEscape(_vm._s(_vm.blog.date))+"</div> "),_vm._ssrNode("<div class=\"post-category\">","</div>",_vm._l((_vm.blog.categories.slice(0, 1)),function(category,i){return _c('n-link',{key:i,attrs:{"to":("/blog/category/" + (_vm.slugify(category)))}},[_vm._v(_vm._s(category))])}),1)],2),_vm._ssrNode(" <div class=\"desc mt--20\"><p class=\"bk_pra\">"+_vm._ssrEscape(_vm._s(_vm.blog.details))+"</p></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogPostFour.vue?vue&type=template&id=5aba5d74&

// EXTERNAL MODULE: ./mixins/slugify.js
var slugify = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostFour.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogPostFourvue_type_script_lang_js_ = ({
  props: ["blog", "addClass"],
  mixins: [slugify["a" /* slugify */]]
});
// CONCATENATED MODULE: ./components/BlogPostFour.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogPostFourvue_type_script_lang_js_ = (BlogPostFourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogPostFour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostFourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d6877d22"
  
)

/* harmony default export */ var BlogPostFour = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slugify; });
const slugify = {
  methods: {
    slugify(text) {
      return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
    }

  }
};

/***/ })

};;
//# sourceMappingURL=blog-post-four.js.map