exports.ids = [43,139];
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

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=template&id=b8e02522&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-sidebar-container"},[_vm._ssrNode("<div class=\"blog-sidebar-wrapper\">","</div>",[_vm._ssrNode("<div class=\"bl-sidebar search\"><h5 class=\"widget-title\">Search</h5> <form class=\"inner\"><div class=\"search-box\"><input type=\"text\" placeholder=\"Enter search keyword…\"> <button><span class=\"fa fa-search\"></span></button></div></form></div> "),_vm._ssrNode("<div class=\"bl-sidebar category mt--50 wow move-up\">","</div>",[_vm._ssrNode("<h5 class=\"widget-title\">Categories</h5> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<ul class=\"category-list\">","</ul>",_vm._l((_vm.categories),function(category,i){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":("/blog/category/" + (_vm.slugify(category)))}},[_vm._v(_vm._s(category))])],1)}),0)])],2),_vm._ssrNode(" <div class=\"bl-sidebar banner mt--50 wow move-up\"><div class=\"inner\"><div class=\"thumb\"><img src=\"/img/blog/big-img/banner-image.jpg\" alt=\"banner\" class=\"w-100\"></div> <div class=\"content\"><h4 class=\"heading heading-h4 text-white\">Spot for banner</h4> <div class=\"banner-btn mt--25\"><button class=\"brook-btn bk-btn-theme btn-sd-size btn-rounded space-between\">Purchase</button></div></div></div></div> "),_vm._ssrNode("<div class=\"bl-sidebar tag mt--50 wow move-up\">","</div>",[_vm._ssrNode("<h5 class=\"widget-title\">Tags</h5> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<ul class=\"tagcloud\">","</ul>",_vm._l((_vm.tags),function(tag,i){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":("/blog/tag/" + tag)}},[_vm._v(_vm._s(tag))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bl-sidebar instagram mt--50 wow move-up\">","</div>",[_vm._ssrNode("<h5 class=\"widget-title\">Instagram</h5> "),_c('client-only',[_c('InstagramPost',{attrs:{"addClass":"instagram-grid-5 inner"}})],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=template&id=b8e02522&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogSidebarvue_type_script_lang_js_ = ({
  components: {
    InstagramPost: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 90))
  },

  data() {
    return {
      data: blog
    };
  },

  computed: {
    categories() {
      return [...new Set(this.data.blogs.map(item => item.categories).flat())];
    },

    tags() {
      return [...new Set(this.data.blogs.map(item => item.tags).flat())];
    }

  },
  methods: {
    slugify(text) {
      return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
    }

  }
});
// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSidebarvue_type_script_lang_js_ = (BlogSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d5645e3"
  
)

/* harmony default export */ var BlogSidebar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InstagramPost: __webpack_require__(90).default})


/***/ })

};;
//# sourceMappingURL=43.js.map