exports.ids = [94];
exports.modules = {

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedProjects.vue?vue&type=template&id=93fa85d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-portfolio-area creative-portfolio section-pb-100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"section-title--between wow move-up\">","</div>",[_vm._ssrNode("<div class=\"title\"><h3 class=\"theme-creative\"> Featured <span>Projects</span></h3></div> "),_vm._ssrNode("<div class=\"section-btn mt_mobile--30\">","</div>",[_c('n-link',{staticClass:"button-text",attrs:{"to":"/"}},[_c('span',[_vm._v("View all projects")]),_vm._v(" "),_c('i',{staticClass:"fa fa-arrow-right"})])],1)],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"portfolio-wrapper mt--40 wow move-up\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"porfolio-swip-horizontal\" style=\"overflow: hidden;\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.data.portfolioFeaturd),function(portfolio){return _c('div',{key:portfolio.i,staticClass:"portfolio portfolio_style--2 mt--30 swiper-slide"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":portfolio.image,"alt":portfolio.alt}})]),_vm._v(" "),_c('div',{staticClass:"portfolio-overlay"}),_vm._v(" "),_c('div',{staticClass:"port-overlay-info"},[_c('div',{staticClass:"content"},[_c('h3',{staticClass:"port-title"},[_vm._v(_vm._s(portfolio.title))]),_vm._v(" "),_c('div',{staticClass:"category"},[_vm._v(_vm._s(portfolio.category))])])])])}),0),_vm._ssrNode(" <div class=\"swiper-pagination\"></div>")],2)])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeaturedProjects.vue?vue&type=template&id=93fa85d8&

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedProjects.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FeaturedProjectsvue_type_script_lang_js_ = ({
  data() {
    return {
      data: portfolio,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: false,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (e, t, i) {
            var a = 100 / i * t;
            var n = t.toString(),
                s = i.toString();
            return '<div class="fraction"><span class="current">' + (n = n.padStart(2, "0")) + '</span><span class="separator"> / </span><span class="total">' + (s = s.padStart(2, "0")) + "</span></div>" + '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + ' "></div></div>';
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/FeaturedProjects.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeaturedProjectsvue_type_script_lang_js_ = (FeaturedProjectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FeaturedProjects.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeaturedProjectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "40de390f"
  
)

/* harmony default export */ var FeaturedProjects = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/portfolio/grid/caption-1.jpg\",\"heading\":\"The Language of Designs\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/portfolio/grid/caption-2.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/portfolio/grid/caption-3.jpg\",\"heading\":\"Smart Sound System\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/portfolio/grid/caption-4.jpg\",\"heading\":\"Awe-inspiring Projects\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/portfolio/grid/caption-5.jpg\",\"heading\":\"Gifts for Photography\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/portfolio/grid/caption-6.jpg\",\"heading\":\"Enchanting Portrait Hacks\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/portfolio/grid/caption-7.jpg\",\"heading\":\"Digital Marketing Basics\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/portfolio/grid/caption-8.jpg\",\"heading\":\"Measure Digital Progress\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/portfolio/grid/caption-9.jpg\",\"heading\":\"B-sharp High-end Audio\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=featured-projects.js.map