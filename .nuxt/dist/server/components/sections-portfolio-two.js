exports.ids = [8,169];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioItemCaptionBottom.vue?vue&type=template&id=64678246&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio with-caption"},[_vm._ssrNode("<div class=\"thumb video-with-thumb\">","</div>",[_c('n-link',{attrs:{"to":("/portfolio/" + (_vm.portfolio.slug))}},[_c('img',{attrs:{"src":_vm.portfolio.image,"alt":_vm.portfolio.heading}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"caption-bottom text-left\">","</div>",[_vm._ssrNode("<div class=\"info\">","</div>",[_vm._ssrNode("<h5 class=\"heading heading-h5\">","</h5>",[_c('n-link',{attrs:{"to":("/portfolio/" + (_vm.portfolio.slug))}},[_vm._v("\n                    "+_vm._s(_vm.portfolio.heading)+"\n                ")])],1),_vm._ssrNode(" <p class=\"bk_pra\">"+_vm._ssrEscape(_vm._s(_vm.portfolio.category))+"</p>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioItemCaptionBottom.vue?vue&type=template&id=64678246&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioItemCaptionBottom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PortfolioItemCaptionBottomvue_type_script_lang_js_ = ({
  props: ["portfolio"]
});
// CONCATENATED MODULE: ./components/PortfolioItemCaptionBottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioItemCaptionBottomvue_type_script_lang_js_ = (PortfolioItemCaptionBottomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/PortfolioItemCaptionBottom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioItemCaptionBottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0ad12b7d"
  
)

/* harmony default export */ var PortfolioItemCaptionBottom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PortfolioTwo.vue?vue&type=template&id=e50ae23e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-portfolio-with-caption-area",class:_vm.addClass},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--60\"><h6 class=\"heading heading-h6 theme-color font-blod\">PORTFOLIOS</h6> <div class=\"bkseparator--40\"></div> <h2 class=\"heading heading-h2 heading-font\">Collection of the greatest works.</h2></div></div></div> "),_vm._ssrNode("<div class=\"row mtn--30\">","</div>",_vm._l((_vm.data.portfolioItems.slice(0, 6)),function(portfolio){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 mt--30\">","</div>",[_c('PortfolioItemCaptionBottom',{attrs:{"portfolio":portfolio}})],1)}),0)],2),_vm._ssrNode(" <div class=\"vc_row-separator square bottom\""+(_vm._ssrStyle(null,null, { display: (_vm.seperator) ? '' : 'none' }))+"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"90px\" fill=\"#0038E3\" height=\"90px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\"><rect x=\"33.3333%\" y=\"0\" width=\"66.6667\" height=\"66.6667\"></rect> <rect x=\"0\" y=\"66.6667%\" width=\"33.3333%\" height=\"33.3333%\"></rect></svg></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/PortfolioTwo.vue?vue&type=template&id=e50ae23e&

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PortfolioTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PortfolioTwovue_type_script_lang_js_ = ({
  props: ["addClass", "seperator"],
  components: {
    PortfolioItemCaptionBottom: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 182))
  },

  data() {
    return {
      data: portfolio
    };
  }

});
// CONCATENATED MODULE: ./components/sections/PortfolioTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_PortfolioTwovue_type_script_lang_js_ = (PortfolioTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/PortfolioTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_PortfolioTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3db74e5b"
  
)

/* harmony default export */ var PortfolioTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PortfolioItemCaptionBottom: __webpack_require__(182).default})


/***/ }),

/***/ 82:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/portfolio/grid/caption-1.jpg\",\"heading\":\"The Language of Designs\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/portfolio/grid/caption-2.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/portfolio/grid/caption-3.jpg\",\"heading\":\"Smart Sound System\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/portfolio/grid/caption-4.jpg\",\"heading\":\"Awe-inspiring Projects\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/portfolio/grid/caption-5.jpg\",\"heading\":\"Gifts for Photography\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/portfolio/grid/caption-6.jpg\",\"heading\":\"Enchanting Portrait Hacks\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/portfolio/grid/caption-7.jpg\",\"heading\":\"Digital Marketing Basics\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/portfolio/grid/caption-8.jpg\",\"heading\":\"Measure Digital Progress\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/portfolio/grid/caption-9.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=sections-portfolio-two.js.map