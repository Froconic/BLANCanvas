exports.ids = [17,61];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostThree.vue?vue&type=template&id=79098174&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-grid blog-standard",class:_vm.addClass},[_vm._ssrNode("<div class=\"post-thumb\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.slug))}},[_c('img',{attrs:{"src":_vm.blog.image,"alt":_vm.blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-content text-center\">","</div>",[_vm._ssrNode("<div class=\"post-inner\">","</div>",[_vm._ssrNode("<div class=\"post-meta mb--10\">","</div>",[_vm._ssrNode("<div class=\"post-date\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.blog.date)+"\n                ")+"</div> "),_vm._ssrNode("<div class=\"post-category\">","</div>",_vm._l((_vm.blog.categories.slice(0, 1)),function(category,i){return _c('n-link',{key:i,attrs:{"to":("/blog/category/" + (_vm.slugify(category)))}},[_vm._v(_vm._s(category))])}),1)],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 class=\"heading heading-h5\">","</h5>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.slug))}},[_vm._v("\n                    "+_vm._s(_vm.blog.title)+"\n                ")])],1),_vm._ssrNode(" "),_c('n-link',{directives:[{name:"show",rawName:"v-show",value:(_vm.readMoreButton),expression:"readMoreButton"}],staticClass:"post-read-more",attrs:{"to":("/blog/" + (_vm.blog.slug))}})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogPostThree.vue?vue&type=template&id=79098174&

// EXTERNAL MODULE: ./mixins/slugify.js
var slugify = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPostThree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogPostThreevue_type_script_lang_js_ = ({
  mixins: [slugify["a" /* slugify */]],
  props: ["blog", "addClass", "readMoreButton"]
});
// CONCATENATED MODULE: ./components/BlogPostThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogPostThreevue_type_script_lang_js_ = (BlogPostThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogPostThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d5332ab6"
  
)

/* harmony default export */ var BlogPostThree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/BlogThree.vue?vue&type=template&id=5414725e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-blog-grid-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--80"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center\"><h3 class=\"heading heading-h3 font-large\">Sharing your thoughts everyday</h3> <div class=\"bkseparator--25\"></div> <div class=\"title-separator w--80 color-red\"></div></div></div></div> "),_vm._ssrNode("<div class=\"row mt--20\">","</div>",_vm._l((_vm.data.blogs.slice(4, 7)),function(blog){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 move-up wow mt--40\">","</div>",[_c('BlogPostThree',{attrs:{"blog":blog,"addClass":"grid-simple"}})],1)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/BlogThree.vue?vue&type=template&id=5414725e&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/BlogThree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogThreevue_type_script_lang_js_ = ({
  components: {
    BlogPostThree: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 123))
  },

  data() {
    return {
      data: blog
    };
  }

});
// CONCATENATED MODULE: ./components/sections/BlogThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_BlogThreevue_type_script_lang_js_ = (BlogThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/BlogThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_BlogThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "313f5635"
  
)

/* harmony default export */ var BlogThree = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogPostThree: __webpack_require__(123).default})


/***/ }),

/***/ 76:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionSubTitle\":\"LATEST NEWS\",\"sectionTitle\":\"From our blogs\",\"blogs\":[{\"id\":1,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-1\",\"date\":\"January 7, 2020\",\"image\":\"/img/blog/blog-1/blog-01.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"digital\"],\"tags\":[\"photography\",\"digital\"]},{\"id\":2,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-2\",\"date\":\"February 14, 2020\",\"image\":\"/img/blog/blog-1/blog-02.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":3,\"title\":\"The Most Underrated 90 Bands\",\"slug\":\"the-most-underrated-90-bands-3\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/blog-1/blog-03.jpg\",\"alt\":\"blog image\",\"categories\":[\"marketing\",\"photography\"],\"tags\":[\"marketing\",\"photography\"]},{\"id\":4,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-4\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":5,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-5\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":6,\"title\":\"What Motivates You to Work?\",\"slug\":\"what-motivates-you-to-work-6\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":7,\"title\":\"Brave Lifestyle from Ancient Lessons\",\"slug\":\"brave-lifestyle-from-ancient-lessons-7\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"portfolio\"],\"tags\":[\"life style\",\"portfolio\"]},{\"id\":8,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-8\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":9,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-9\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":10,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-10\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":11,\"title\":\"The Most Underrated ’90 s Bands\",\"slug\":\"the-most-underrated-90-bands-11\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"food\"],\"tags\":[\"portfolio\",\"food\"]},{\"id\":12,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-12\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":13,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-13\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-10.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":14,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-14\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-11.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":15,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-15\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-12.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"food\"],\"tags\":[\"photography\",\"food\"]},{\"id\":16,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-16\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-13.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"corona\"],\"tags\":[\"agency\",\"corona\"]},{\"id\":17,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-1.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-17\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"portfolio\",\"digital\"],\"tags\":[\"portfolio\",\"digital\"]},{\"id\":18,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-2.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-18\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":19,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-3.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-19\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"marketing\",\"corona\"],\"tags\":[\"marketing\",\"corona\"]},{\"id\":20,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-4.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-20\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"business\",\"digital\"],\"tags\":[\"business\",\"digital\"]},{\"id\":21,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-21\",\"date\":\"June 19, 2020\",\"image\":\"/img/blog/grid/mesonry-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":22,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-22\",\"date\":\"March 17, 2020\",\"image\":\"/img/blog/grid/mesonry-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":23,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-23\",\"date\":\"August 15, 2020\",\"image\":\"/img/blog/grid/mesonry-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"business\",\"food\"],\"tags\":[\"business\",\"food\"]},{\"id\":24,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-24\",\"date\":\"July 18, 2020\",\"image\":\"/img/blog/grid/mesonry-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\",\"business\"],\"tags\":[\"food\",\"business\"]},{\"id\":25,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-25\",\"date\":\"June 15, 2020\",\"image\":\"/img/blog/grid/mesonry-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":26,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-26\",\"date\":\"April 14, 2020\",\"image\":\"/img/blog/grid/mesonry-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"marketing\"],\"tags\":[\"portfolio\",\"marketing\"]},{\"id\":27,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-27\",\"date\":\"March 10, 2020\",\"image\":\"/img/blog/grid/mesonry-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\"],\"tags\":[\"food\"]},{\"id\":28,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-28\",\"date\":\"January 07, 2020\",\"image\":\"/img/blog/grid/mesonry-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":29,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-29\",\"date\":\"February 02, 2020\",\"image\":\"/img/blog/grid/mesonry-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"business\"],\"tags\":[\"life style\",\"business\"]},{\"id\":30,\"title\":\"5 Signs That It Is Time to Cut Out Your Menu Item\",\"slug\":\"5-signs-that -it-is-time-to-cut-out-your-menu-item-30\",\"date\":\"February 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-01.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"food\",\"agency\"],\"tags\":[\"food\",\"agency\"]},{\"id\":31,\"title\":\"5 Unexpected Food Trends For This Summer\",\"slug\":\"5-unexpected-food-trends-for-this-summer-31\",\"date\":\"March 02, 2019\",\"image\":\"/img/restaurant/restaurant-recipe-02.jpg\",\"alt\":\"blog image\",\"author\":\"Mokhles miya\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":32,\"title\":\"Healthy Eating With Fruit And Vegetables\",\"slug\":\"healthy-eating-with-fruit-and-vegetables-32\",\"date\":\"January 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-03.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"architecture\",\"business\"]}]}");

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
//# sourceMappingURL=sections-blog-three.js.map