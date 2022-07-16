exports.ids = [212,43,64,70,101,105,108,112,139,155,164,166,172];
exports.modules = {

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/category/_slug.vue?vue&type=template&id=04d8d554&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_c('HeaderElement',{on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen},"toggleSearch":function($event){_vm.searchOpen = !_vm.searchOpen}}}),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen}}}),_vm._ssrNode(" "),_c('SearchPopup',{class:{'search-popup-open' : _vm.searchOpen},on:{"toggleSearch":function($event){_vm.searchOpen = !_vm.searchOpen}}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"items":_vm.items,"title":"All Categories"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.posts),function(blog,i){return _vm._ssrNode("<div class=\"col-sm-6 move-up wow mt--30\">","</div>",[_vm._ssrNode("<div class=\"blog-grid\">","</div>",[_vm._ssrNode("<div class=\"post-thumb\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (blog.slug))}},[_c('img',{attrs:{"src":blog.image,"alt":blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-content\">","</div>",[_vm._ssrNode("<div class=\"post-inner\">","</div>",[_vm._ssrNode("<h5 class=\"heading heading-h5\">","</h5>",[_c('n-link',{attrs:{"to":("/blog/" + (blog.slug))}},[_vm._v(_vm._s(blog.title))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-meta\">","</div>",[_vm._ssrNode("<div class=\"post-date\">"+_vm._ssrEscape(_vm._s(blog.date))+"</div> "),_vm._ssrNode("<div class=\"post-category\">","</div>",_vm._l((blog.categories.slice(0, 1)),function(category,i){return _c('n-link',{key:i,attrs:{"to":("/blog/category/" + (_vm.slugify(category)))}},[_vm._v(_vm._s(category))])}),1)],2)],2)])],2)])}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"brook-pagination-wrapper text-center pt--80 pt_md--40 pt_sm--40\">","</div>",[_c('paginate',{attrs:{"page-count":4,"page-range":3,"margin-pages":2,"prev-text":'Prev',"next-text":'Next',"container-class":'brook-pagination',"page-class":'page-item'}})],1)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-4 mt_md--40 mt_sm--40 mt--30\">","</div>",[_c('BlogSidebar')],1)],2)])]),_vm._ssrNode(" "),_c('FooterTwo')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/category/_slug.vue?vue&type=template&id=04d8d554&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(76);

// EXTERNAL MODULE: ./mixins/slugify.js
var slugify = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/category/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  mixins: [slugify["a" /* slugify */]],
  components: {
    HeaderElement: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 77)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 70)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 71)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 81)),
    BlogSidebar: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 93)),
    FooterTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 72))
  },

  data() {
    return {
      data: blog,
      navOpen: false,
      searchOpen: false,
      slug: this.$route.params.slug,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Blog',
        to: "",
        active: true
      }, {
        text: this.$route.params.slug,
        active: true
      }]
    };
  },

  computed: {
    posts() {
      return this.data.blogs.filter(post => {
        var _post$categories;

        return post === null || post === void 0 ? void 0 : (_post$categories = post.categories) === null || _post$categories === void 0 ? void 0 : _post$categories.includes(this.slug.split("-").join(" "));
      });
    }

  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },

  head() {
    return {
      title: this.$route.params.slug
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/category/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var category_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/category/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0ef3c6ef"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderElement: __webpack_require__(77).default,OffCanvasMobileMenu: __webpack_require__(70).default,SearchPopup: __webpack_require__(71).default,Breadcrumb: __webpack_require__(81).default,BlogSidebar: __webpack_require__(93).default,FooterTwo: __webpack_require__(72).default})


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=67369680&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"page_nav"},[_vm._ssrNode("<ul class=\"mainmenu\">","</ul>",[_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_c('span',[_vm._v("Home")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-business"}},[_c('span',[_vm._v("Home Business")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-agency"}},[_c('span',[_vm._v("Home Creative Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-design-studio"}},[_c('span',[_vm._v("Home Design Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-digital-agency"}},[_c('span',[_vm._v("Home Digital Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-authentic-studio"}},[_c('span',[_vm._v("Home Authentic Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-agency"}},[_c('span',[_vm._v("Home Minimal Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-presentation"}},[_c('span',[_vm._v("Home Presentation")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-start-up"}},[_c('span',[_vm._v("Home Start Ups")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-freelancer"}},[_c('span',[_vm._v("Home Freelancer")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-product-landing"}},[_c('span',[_vm._v("Home Product Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-restaurant"}},[_c('span',[_vm._v("Home Restaurant")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-photo-slider-gallery"}},[_c('span',[_vm._v("Home Photo Slider Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-onepage"}},[_c('span',[_vm._v("Home Onepage")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-metro-grid"}},[_c('span',[_vm._v("Home Minimal Metro Grid")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-landing"}},[_c('span',[_vm._v("Home Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-service"}},[_c('span',[_vm._v("Home Service")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-vertical-menu"}},[_c('span',[_vm._v("Home Vertical Menu")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-corona"}},[_c('span',[_vm._v("Home Corona")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-essential"}},[_c('span',[_vm._v("Home Essential")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-indie-musician"}},[_c('span',[_vm._v("Indie Musician")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-type-hover"}},[_c('span',[_vm._v("Home Portfolio Type Hover")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            HOME SAMPLES 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-portfolio"}},[_c('span',[_vm._v("Home Creative Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-portfolio"}},[_c('span',[_vm._v("Home Minimal Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-portfolio-slide"}},[_c('span',[_vm._v("Home Portfolio Slide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-fullscreen-slider-left-vertical-header"}},[_c('span',[_vm._v("Portfolio Fullscreen Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-blog-grid"}},[_c('span',[_vm._v("Home Blog Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-masonry-gallery"}},[_c('span',[_vm._v("Home Masonry Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-foodie"}},[_c('span',[_vm._v("Home Foodie")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/about-us-01"}},[_c('span',[_vm._v("Pages")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-01"}},[_c('span',[_vm._v("About Us 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-02"}},[_c('span',[_vm._v("About Us 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-03"}},[_c('span',[_vm._v("About Us 03")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans"}},[_c('span',[_vm._v("Pricing Plans")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-classic"}},[_c('span',[_vm._v("Services Classic")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-modern"}},[_c('span',[_vm._v("Services Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-list"}},[_c('span',[_vm._v("Services List")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans-02"}},[_c('span',[_vm._v("Pricing Plans 02")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-grid"}},[_c('span',[_vm._v("Team Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-01"}},[_c('span',[_vm._v("Our Team Carousel 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-02"}},[_c('span',[_vm._v("Our Team Carousel 02")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            SAMPLE PAGES 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-modern"}},[_c('span',[_vm._v("Contact Us Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-with-map"}},[_c('span',[_vm._v("Contact Us With Map")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/career"}},[_c('span',[_vm._v("Career")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_c('span',[_vm._v("Portfolio")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO SAMPLES 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_c('span',[_vm._v("Portfolio Grid Boxed")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-wide"}},[_c('span',[_vm._v("Portfolio Grid Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-with-caption"}},[_c('span',[_vm._v("Portfolio With Caption")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO SAMPLES 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-01"}},[_c('span',[_vm._v("Portfolio Grid Metro 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-02"}},[_c('span',[_vm._v("Portfolio Grid Metro 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-ajax-filter"}},[_c('span',[_vm._v("Portfolio Ajax Filter")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO DETAILS 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-filter"}},[_c('span',[_vm._v("portfolio-grid-filter")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_c('span',[_vm._v("Portfolio Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right"}},[_c('span',[_vm._v("Portfolio Details Right")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            PORTFOLIO DETAILS 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-left-wide"}},[_c('span',[_vm._v("Left Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right-wide"}},[_c('span',[_vm._v("Right Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-image-with-caption"}},[_c('span',[_vm._v("Image With Caption")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":""}},[_c('span',[_vm._v("Elements")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/team"}},[_c('span',[_vm._v("Team")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/testimonial"}},[_c('span',[_vm._v("Testimonial")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/pricing-box"}},[_c('span',[_vm._v("Pricing Box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/dividers"}},[_c('span',[_vm._v("Dividers")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/brand-logo"}},[_c('span',[_vm._v("Brand Logo Carousel")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/flexible-image-slider"}},[_c('span',[_vm._v("Flexible Image Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/carousel-slider"}},[_c('span',[_vm._v("Carousel Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/call-to-action-banner"}},[_c('span',[_vm._v("Call To Action Banner")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/tab"}},[_c('span',[_vm._v("Tab")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/gradation"}},[_c('span',[_vm._v("Gradation")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/message-box"}},[_c('span',[_vm._v("message-box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/instagram"}},[_c('span',[_vm._v("Instagram")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            ELEMENT GROUP 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/icon-boxes"}},[_c('span',[_vm._v("icon-boxes")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/lists"}},[_c('span',[_vm._v("Lists")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/accordion"}},[_c('span',[_vm._v("Accordion")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/contact-subscribe"}},[_c('span',[_vm._v("Contact & subscribe forms")])])],1)],2)],2)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lavel-1 with--drop slide--megamenu\">","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-creative"}},[_c('span',[_vm._v("Blog")])]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"mega__width--fullscreen\">","</ul>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mega__list\">","</div>",[_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 01\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-creative"}},[_c('span',[_vm._v("Blog Creative")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-standard-list"}},[_c('span',[_vm._v("Blog Standard List")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic"}},[_c('span',[_vm._v("Blog Grid Classic")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 02\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic-sidebar"}},[_c('span',[_vm._v("Blog Grid Classic Sidebar")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-standard"}},[_c('span',[_vm._v("Blog Grid Standard")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-simple"}},[_c('span',[_vm._v("Blog Grid Simple")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 03\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-modern"}},[_c('span',[_vm._v("Blog Grid Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal"}},[_c('span',[_vm._v("Blog Grid Minimal")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal-outline"}},[_c('span',[_vm._v("Blog Grid Minimal Outline")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title\">","</li>",[_vm._ssrNode("\n                            BLOG SAMPLE 04\n                            "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-mesonry"}},[_c('span',[_vm._v("Blog Grid Masonry")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details"}},[_c('span',[_vm._v("Blog Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details-modern-layout"}},[_c('span',[_vm._v("Blog Details Modern Layout")])])],1)],2)],2)],2)])])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=67369680&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "eabaccca"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=9fbefdea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fixed-header',[_c('header',{staticClass:"br_header header-default header-transparent pt--15 light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"header__wrapper mr--0"},[_c('div',{staticClass:"header-left flex-20"},[_c('div',{staticClass:"logo"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook.png","alt":"Brook Logo"}})])],1)]),_vm._v(" "),_c('div',{staticClass:"header-flex-right flex-80"},[_c('div',{staticClass:"mainmenu-wrapper have-not-flex d-none d-lg-block"},[_c('Navigation')],1),_vm._v(" "),_c('div',{staticClass:"header-right have-not-flex pl--35 pl_md--5 pr_md--20 pl_sm--5 pr_sm--20"},[_c('div',{staticClass:"popup-search-wrap"},[_c('button',{staticClass:"btn-search-click",on:{"click":function($event){return _vm.$emit('toggleSearch')}}},[_c('i',{staticClass:"fa fa-search"})])]),_vm._v(" "),_c('div',{staticClass:"manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none",on:{"click":function($event){return _vm.$emit('togglenav')}}},[_c('div',[_c('i')])])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=9fbefdea&scoped=true&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(59);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/Navigation.vue + 2 modules
var Navigation = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a,
    Navigation: Navigation["default"]
  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9fbefdea",
  "600d5d14"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(60).default,Header: __webpack_require__(62).default})


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=e94b7302&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[_vm._ssrNode("<div class=\"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-5 col-xl-7 col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook.png","alt":"Brand Logo"}})])],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40\">","</div>",[_vm._ssrNode("<div class=\"footer-widget menu--about\">","</div>",[_vm._ssrNode("<h2 class=\"widgettitle\">About us</h2> "),_vm._ssrNode("<div class=\"footer-menu\">","</div>",[_vm._ssrNode("<ul class=\"ft-menu-list bk-hover\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about-us-01"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/team-grid"}},[_vm._v("Team")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/career"}},[_vm._v("Career")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/services-classic"}},[_vm._v("Services")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40\"><div class=\"footer-widget menu--contact\"><h2 class=\"widgettitle\">Contact</h2> <div class=\"footer-address bk-hover mb--20\"><p>Your address goes here <br> ana ville 10010, USA</p> <p><a href=\"mailto:info@yourdomain.com\">info@yourdomain.com</a></p> <p><a href=\"tel:0123456789\">0123456789</a></p></div> <div class=\"social-share social--transparent text-white\"><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a> <a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a> <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a> <a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fab fa-dribbble\"></i></a> <a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fab fa-pinterest\"></i></a></div></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"copyright ptb--50\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"copyright-left text-left\">","</div>",[_vm._ssrNode("<ul class=\"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-creative"}},[_vm._v("Our Blogs")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_vm._v("Latest Projects")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact Us")])],1)],2)])]),_vm._ssrNode(" <div class=\"col-md-6\"><div class=\"copyright-right text-center text-md-right\"><p>© 2022 <b>Brook</b> Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://hasthemes.com/\"><b>HasThemes</b></a></p></div></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=e94b7302&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3edaf922"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(65).default})


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_9fbefdea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=cc76cd42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-business"}},[_c('span',[_vm._v("Home Business")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-agency"}},[_c('span',[_vm._v("Home Creative Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-design-studio"}},[_c('span',[_vm._v("Home Design Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-digital-agency"}},[_c('span',[_vm._v("Home Digital Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-authentic-studio"}},[_c('span',[_vm._v("Home Authentic Studio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-agency"}},[_c('span',[_vm._v("Home Minimal Agency")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-presentation"}},[_c('span',[_vm._v("Home Presentation")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-start-up"}},[_c('span',[_vm._v("Home Start Ups")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-freelancer"}},[_c('span',[_vm._v("Home Freelancer")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-product-landing"}},[_c('span',[_vm._v("Home Product Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-restaurant"}},[_c('span',[_vm._v("Home Restaurant")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-photo-slider-gallery"}},[_c('span',[_vm._v("Home Photo Slider Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-onepage"}},[_c('span',[_vm._v("Home Onepage")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-type-hover"}},[_c('span',[_vm._v("Home Portfolio Type Hover")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-landing"}},[_c('span',[_vm._v("Home Landing")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-service"}},[_c('span',[_vm._v("Home Service")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-vertical-menu"}},[_c('span',[_vm._v("Home Vertical Menu")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-corona"}},[_c('span',[_vm._v("Home Corona")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-essential"}},[_c('span',[_vm._v("Home Essential")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-indie-musician"}},[_c('span',[_vm._v("Indie Musician")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Home Samples 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-creative-portfolio"}},[_c('span',[_vm._v("Home Creative Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-portfolio"}},[_c('span',[_vm._v("Home Minimal Portfolio")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-portfolio-slide"}},[_c('span',[_vm._v("Home Portfolio Slide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-fullscreen-slider-left-vertical-header"}},[_c('span',[_vm._v("Portfolio Fullscreen Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-blog-grid"}},[_c('span',[_vm._v("Home Blog Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-masonry-gallery"}},[_c('span',[_vm._v("Home Masonry Gallery")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-minimal-metro-grid"}},[_c('span',[_vm._v("Home Minimal Metro Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/home-foodie"}},[_c('span',[_vm._v("Home Foodie")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Pages")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-01"}},[_c('span',[_vm._v("About Us 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-02"}},[_c('span',[_vm._v("About Us 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about-us-03"}},[_c('span',[_vm._v("About Us 03")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-classic"}},[_c('span',[_vm._v("Services Classic")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-modern"}},[_c('span',[_vm._v("Services Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/services-list"}},[_c('span',[_vm._v("Services List")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-grid"}},[_c('span',[_vm._v("Team Grid")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-01"}},[_c('span',[_vm._v("Our Team Carousel 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/team-carousel-02"}},[_c('span',[_vm._v("Our Team Carousel 02")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Sample Pages 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-modern"}},[_c('span',[_vm._v("Contact Us Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact-us-with-map"}},[_c('span',[_vm._v("Contact Us With Map")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans"}},[_c('span',[_vm._v("Pricing Plans")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/pricing-plans-02"}},[_c('span',[_vm._v("Pricing Plans 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/career"}},[_c('span',[_vm._v("Career")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Portfolio")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Samples 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_c('span',[_vm._v("Portfolio Grid Boxed")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-wide"}},[_c('span',[_vm._v("Portfolio Grid Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-with-caption"}},[_c('span',[_vm._v("Portfolio With Caption")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Samples 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-01"}},[_c('span',[_vm._v("Portfolio Grid Metro 01")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-metro-02"}},[_c('span',[_vm._v("Portfolio Grid Metro 02")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-ajax-filter"}},[_c('span',[_vm._v("Portfolio Ajax Filter")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Details 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-grid-filter"}},[_c('span',[_vm._v("portfolio-grid-filter")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details"}},[_c('span',[_vm._v("Portfolio Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right"}},[_c('span',[_vm._v("Portfolio Details Right")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Portfolio Details 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-left-wide"}},[_c('span',[_vm._v("Left Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-right-wide"}},[_c('span',[_vm._v("Right Details - Wide")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/portfolio/portfolio-details-image-with-caption"}},[_c('span',[_vm._v("Image With Caption")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Elements")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/team"}},[_c('span',[_vm._v("Team")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/testimonial"}},[_c('span',[_vm._v("Testimonial")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/pricing-box"}},[_c('span',[_vm._v("Pricing Box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/dividers"}},[_c('span',[_vm._v("Dividers")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/brand-logo"}},[_c('span',[_vm._v("Brand Logo Carousel")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/flexible-image-slider"}},[_c('span',[_vm._v("Flexible Image Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/carousel-slider"}},[_c('span',[_vm._v("Carousel Slider")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/call-to-action-banner"}},[_c('span',[_vm._v("Call To Action Banner")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/tab"}},[_c('span',[_vm._v("Tab")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/gradation"}},[_c('span',[_vm._v("Gradation")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/message-box"}},[_c('span',[_vm._v("message-box")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/instagram"}},[_c('span',[_vm._v("Instagram")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Element Group 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/icon-boxes"}},[_c('span',[_vm._v("icon-boxes")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/lists"}},[_c('span',[_vm._v("Lists")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/accordion"}},[_c('span',[_vm._v("Accordion")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/element/contact-subscribe"}},[_c('span',[_vm._v("Contact & subscribe forms")])])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Blogs")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 01")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-creative"}},[_c('span',[_vm._v("Blog Creative")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-standard-list"}},[_c('span',[_vm._v("Blog Standard List")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic"}},[_c('span',[_vm._v("Blog Grid Classic")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 02")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-classic-sidebar"}},[_c('span',[_vm._v("Blog Grid Classic Sidebar")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-standard"}},[_c('span',[_vm._v("Blog Grid Standard")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-simple"}},[_c('span',[_vm._v("Blog Grid Simple")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 03")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-modern"}},[_c('span',[_vm._v("Blog Grid Modern")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal"}},[_c('span',[_vm._v("Blog Grid Minimal")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-minimal-outline"}},[_c('span',[_vm._v("Blog Grid Minimal Outline")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mega--title menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":""}},[_vm._v("Blog Group 04")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-grid-mesonry"}},[_c('span',[_vm._v("Blog Grid Masonry")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details"}},[_c('span',[_vm._v("Blog Details")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/blog/blog-details-modern-layout"}},[_c('span',[_vm._v("Blog Details Modern Layout")])])],1)],2)],2)],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=cc76cd42&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  name: 'MobileNavMenu',

  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu === null || offcanvasMobileMenu === void 0 ? void 0 : offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9c33f8c6"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=59031510&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup-mobile-menu popup-mobile-visiable"},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"mobileheader\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook-black.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"mobile-close\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=59031510&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68))
  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "312d369e"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(68).default})


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=template&id=df19c77c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-search-popup"},[_vm._ssrNode("<div class=\"search-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"search-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook-black.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"search-close\"></button>")],2),_vm._ssrNode(" <div class=\"search-content\"><form><label><input type=\"search\" placeholder=\"Enter search keyword…\"></label> <button class=\"search-submit\"><i class=\"fa fa-search\"></i></button></form></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=template&id=df19c77c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchPopupvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchPopupvue_type_script_lang_js_ = (SearchPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SearchPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "093f4926"
  
)

/* harmony default export */ var SearchPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterTwo.vue?vue&type=template&id=7b8bf5e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5"},[_vm._ssrNode("<div class=\"bk-footer-inner pt--150 pb--30 pt_sm--100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"footer-widget text-var--2\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":"/img/logo/brook-white2.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <div class=\"footer-inner\"><p>Brook is a multi-purpose WordPress theme for big and small-sized businesses. Enjoy the theme's original design, functional features &amp; responsive layouts.</p></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-6 mt_mobile--40\">","</div>",[_vm._ssrNode("<div class=\"footer-widget text-var--2 menu--about\">","</div>",[_vm._ssrNode("<h2 class=\"widgettitle\">About us</h2> "),_vm._ssrNode("<div class=\"footer-menu\">","</div>",[_vm._ssrNode("<ul class=\"ft-menu-list bk-hover\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about-us-01"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/team-grid"}},[_vm._v("Team")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/career"}},[_vm._v("Career")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/services-classic"}},[_vm._v("Services")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-3 col-sm-6 mt_md--40 mt_sm--40\"><div class=\"footer-widget text-var--2 menu--contact\"><h2 class=\"widgettitle\">Contact</h2> <div class=\"footer-address\"><div class=\"bk-hover\"><p>Your address goes here <br> Vacaville 10010, USA</p> <p><a href=\"mailto:info@yourdomain.com\">info@yourdomain.com</a></p> <p><a href=\"tel:0123456789\">0123456789</a></p></div> <div class=\"social-share social--transparent text-white\"><a href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a> <a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a> <a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a> <a href=\"https://dribbble.com/\" target=\"_blank\"><i class=\"fab fa-dribbble\"></i></a> <a href=\"https://www.pinterest.com/\" target=\"_blank\"><i class=\"fab fa-pinterest\"></i></a></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-3 col-sm-6 mt_md--40 mt_sm--40\">","</div>",[_vm._ssrNode("<div class=\"footer-widget text-var--2 menu--instagram\">","</div>",[_vm._ssrNode("<h2 class=\"widgettitle\">Instagram</h2> "),_vm._ssrNode("<div class=\"ft-instagram-list\">","</div>",[_vm._ssrNode("<div class=\"instagram-grid-wrap\">","</div>",_vm._l((_vm.instagramPosts),function(instagram){return _vm._ssrNode("<div class=\"item-grid grid-style--1\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":instagram.image,"alt":"instagram image"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item-info\">","</div>",[_vm._ssrNode("<div class=\"inner\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('i',{staticClass:"fas fa-heart"}),_vm._v("\n                                                    "+_vm._s(instagram.like)+"\n                                                ")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":""}},[_c('i',{staticClass:"fas fa-comment-dots"}),_vm._v("\n                                                    "+_vm._s(instagram.comment)+"\n                                                ")])],2)])],2)])}),0)])],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"copyright ptb--50 text-var-2\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"copyright-left text-md-left text-center\">","</div>",[_vm._ssrNode("<ul class=\"bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-creative"}},[_vm._v("Our Blogs")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/portfolio/portfolio-grid-boxed"}},[_vm._v("Latest Projects")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us-modern"}},[_vm._v("Contact Us")])],1)],2)])]),_vm._ssrNode(" <div class=\"col-md-6\"><div class=\"copyright-right text-md-right text-center\"><p>© 2022 <b>Brook</b> Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://hasthemes.com/\"><b>HasThemes</b></a></p></div></div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FooterTwo.vue?vue&type=template&id=7b8bf5e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FooterTwovue_type_script_lang_js_ = ({
  data() {
    return {
      instagramPosts: [{
        "id": 1,
        "image": "/img/instagram/instagram-1.jpg",
        "like": "1K",
        "comment": "8"
      }, {
        "id": 2,
        "image": "/img/instagram/instagram-2.jpg",
        "like": "6K",
        "comment": "9"
      }, {
        "id": 3,
        "image": "/img/instagram/instagram-3.jpg",
        "like": "3K",
        "comment": "4"
      }, {
        "id": 4,
        "image": "/img/instagram/instagram-4.jpg",
        "like": "1K",
        "comment": "3"
      }, {
        "id": 5,
        "image": "/img/instagram/instagram-5.jpg",
        "like": "2K",
        "comment": "7"
      }, {
        "id": 6,
        "image": "/img/instagram/instagram-6.jpg",
        "like": "1K",
        "comment": "8"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FooterTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterTwovue_type_script_lang_js_ = (FooterTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FooterTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "679bbbfa"
  
)

/* harmony default export */ var FooterTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(65).default})


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderElement_vue_vue_type_style_index_0_id_95b2ad10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionSubTitle\":\"LATEST NEWS\",\"sectionTitle\":\"From our blogs\",\"blogs\":[{\"id\":1,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-1\",\"date\":\"January 7, 2020\",\"image\":\"/img/blog/blog-1/blog-01.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"digital\"],\"tags\":[\"photography\",\"digital\"]},{\"id\":2,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-2\",\"date\":\"February 14, 2020\",\"image\":\"/img/blog/blog-1/blog-02.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":3,\"title\":\"The Most Underrated 90 Bands\",\"slug\":\"the-most-underrated-90-bands-3\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/blog-1/blog-03.jpg\",\"alt\":\"blog image\",\"categories\":[\"marketing\",\"photography\"],\"tags\":[\"marketing\",\"photography\"]},{\"id\":4,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-4\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":5,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-5\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":6,\"title\":\"What Motivates You to Work?\",\"slug\":\"what-motivates-you-to-work-6\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":7,\"title\":\"Brave Lifestyle from Ancient Lessons\",\"slug\":\"brave-lifestyle-from-ancient-lessons-7\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"portfolio\"],\"tags\":[\"life style\",\"portfolio\"]},{\"id\":8,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-8\",\"date\":\"March 26, 2020\",\"image\":\"/img/blog/grid/grid-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"digital\"],\"tags\":[\"life style\",\"digital\"]},{\"id\":9,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-9\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":10,\"title\":\"1950s up to now Pop Music Defined\",\"slug\":\"1950s-up-to-now-pop-music-defined-10\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":11,\"title\":\"The Most Underrated ’90 s Bands\",\"slug\":\"the-most-underrated-90-bands-11\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"food\"],\"tags\":[\"portfolio\",\"food\"]},{\"id\":12,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-12\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":13,\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-13\",\"date\":\"June 15, 2018\",\"image\":\"/img/blog/grid/grid-10.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"portfolio\"],\"tags\":[\"agency\",\"portfolio\"]},{\"id\":14,\"title\":\"Niche Blogs for Rising Metal Bands\",\"slug\":\"niche-blogs-for-rising-metal-bands-14\",\"date\":\"July 08, 2020\",\"image\":\"/img/blog/grid/grid-11.jpg\",\"alt\":\"blog image\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":15,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-15\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-12.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"food\"],\"tags\":[\"photography\",\"food\"]},{\"id\":16,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-16\",\"date\":\"September 16, 2019\",\"image\":\"/img/blog/grid/grid-13.jpg\",\"alt\":\"blog image\",\"categories\":[\"agency\",\"corona\"],\"tags\":[\"agency\",\"corona\"]},{\"id\":17,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-1.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-17\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"portfolio\",\"digital\"],\"tags\":[\"portfolio\",\"digital\"]},{\"id\":18,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-2.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-18\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"corona\",\"marketing\"],\"tags\":[\"corona\",\"marketing\"]},{\"id\":19,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-3.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-19\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"marketing\",\"corona\"],\"tags\":[\"marketing\",\"corona\"]},{\"id\":20,\"date\":\"May 16, 2020\",\"image\":\"/img/blog/grid/creative-4.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"slug\":\"digital-photography-tips-essentials-20\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\",\"categories\":[\"business\",\"digital\"],\"tags\":[\"business\",\"digital\"]},{\"id\":21,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-21\",\"date\":\"June 19, 2020\",\"image\":\"/img/blog/grid/mesonry-1.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"photography\"],\"tags\":[\"life style\",\"photography\"]},{\"id\":22,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-22\",\"date\":\"March 17, 2020\",\"image\":\"/img/blog/grid/mesonry-2.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":23,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-23\",\"date\":\"August 15, 2020\",\"image\":\"/img/blog/grid/mesonry-3.jpg\",\"alt\":\"blog image\",\"categories\":[\"business\",\"food\"],\"tags\":[\"business\",\"food\"]},{\"id\":24,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-24\",\"date\":\"July 18, 2020\",\"image\":\"/img/blog/grid/mesonry-4.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\",\"business\"],\"tags\":[\"food\",\"business\"]},{\"id\":25,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-25\",\"date\":\"June 15, 2020\",\"image\":\"/img/blog/grid/mesonry-5.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"corona\"],\"tags\":[\"portfolio\",\"corona\"]},{\"id\":26,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-26\",\"date\":\"April 14, 2020\",\"image\":\"/img/blog/grid/mesonry-6.jpg\",\"alt\":\"blog image\",\"categories\":[\"portfolio\",\"marketing\"],\"tags\":[\"portfolio\",\"marketing\"]},{\"id\":27,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-27\",\"date\":\"March 10, 2020\",\"image\":\"/img/blog/grid/mesonry-7.jpg\",\"alt\":\"blog image\",\"categories\":[\"food\"],\"tags\":[\"food\"]},{\"id\":28,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-28\",\"date\":\"January 07, 2020\",\"image\":\"/img/blog/grid/mesonry-8.jpg\",\"alt\":\"blog image\",\"categories\":[\"photography\",\"agency\"],\"tags\":[\"photography\",\"agency\"]},{\"id\":29,\"title\":\"Career Tips For Emerging Photographers\",\"slug\":\"career-tips-for-emerging-photographers-29\",\"date\":\"February 02, 2020\",\"image\":\"/img/blog/grid/mesonry-9.jpg\",\"alt\":\"blog image\",\"categories\":[\"life style\",\"business\"],\"tags\":[\"life style\",\"business\"]},{\"id\":30,\"title\":\"5 Signs That It Is Time to Cut Out Your Menu Item\",\"slug\":\"5-signs-that -it-is-time-to-cut-out-your-menu-item-30\",\"date\":\"February 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-01.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"food\",\"agency\"],\"tags\":[\"food\",\"agency\"]},{\"id\":31,\"title\":\"5 Unexpected Food Trends For This Summer\",\"slug\":\"5-unexpected-food-trends-for-this-summer-31\",\"date\":\"March 02, 2019\",\"image\":\"/img/restaurant/restaurant-recipe-02.jpg\",\"alt\":\"blog image\",\"author\":\"Mokhles miya\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":32,\"title\":\"Healthy Eating With Fruit And Vegetables\",\"slug\":\"healthy-eating-with-fruit-and-vegetables-32\",\"date\":\"January 02, 2020\",\"image\":\"/img/restaurant/restaurant-recipe-03.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\",\"categories\":[\"marketing\",\"business\"],\"tags\":[\"architecture\",\"business\"]}]}");

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderElement.vue?vue&type=template&id=95b2ad10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fixed-header',[_c('header',{staticClass:"br_header header-default header-transparent light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"header__wrapper mr--0"},[_c('div',{staticClass:"header-left flex-20"},[_c('div',{staticClass:"logo"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/brook-white2.png","alt":"Brook Logo"}})])],1)]),_vm._v(" "),_c('div',{staticClass:"mainmenu-wrapper d-none d-lg-block"},[_c('Navigation')],1),_vm._v(" "),_c('div',{staticClass:"header-right"},[_c('div',{staticClass:"popup-search-wrap"},[_c('button',{staticClass:"btn-search-click",on:{"click":function($event){return _vm.$emit('toggleSearch')}}},[_c('i',{staticClass:"fa fa-search"})])]),_vm._v(" "),_c('div',{staticClass:"manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none",on:{"click":function($event){return _vm.$emit('togglenav')}}},[_c('div',[_c('i')])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderElement.vue?vue&type=template&id=95b2ad10&scoped=true&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(59);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/Navigation.vue + 2 modules
var Navigation = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderElement.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var HeaderElementvue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a,
    Navigation: Navigation["default"]
  }
});
// CONCATENATED MODULE: ./components/HeaderElement.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderElementvue_type_script_lang_js_ = (HeaderElementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderElement.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderElementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "95b2ad10",
  "43ab6d78"
  
)

/* harmony default export */ var HeaderElement = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(60).default,Header: __webpack_require__(62).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=934b192e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb-area pt--400 pt_lg--300 pt_md--250 pt_sm--200 pb--100 bg_image--8 breadcrumb-title-bar breadcrumb-title-white",style:({ backgroundImage: "url('/img/bg/bg-image-8.jpg')" })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-inner text-center\">","</div>",[_vm._ssrNode("<h2 class=\"heading\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> "),_vm._ssrNode("<div class=\"breadcrumb-insite\">","</div>",[_c('b-breadcrumb',{staticClass:"core-breadcrumb",attrs:{"items":_vm.items}})],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=934b192e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  props: ['items', 'title']
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d8bd9fec"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

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
//# sourceMappingURL=_slug.js.map