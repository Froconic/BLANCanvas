exports.ids = [32,138];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IconBoxItemOne.vue?vue&type=template&id=6197c078&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-box text-center no-border",class:_vm.addClass},[_vm._ssrNode("<div class=\"inner\"><div class=\"icon\"><i"+(_vm._ssrClass(null,_vm.service.icon))+"></i></div> <div class=\"content\"><h5 class=\"heading heading-h5\">"+_vm._ssrEscape(_vm._s(_vm.service.heading))+"</h5> <p class=\"bk_pra\">"+_vm._ssrEscape(_vm._s(_vm.service.desc))+"</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/IconBoxItemOne.vue?vue&type=template&id=6197c078&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IconBoxItemOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var IconBoxItemOnevue_type_script_lang_js_ = ({
  props: ['service', 'addClass']
});
// CONCATENATED MODULE: ./components/IconBoxItemOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IconBoxItemOnevue_type_script_lang_js_ = (IconBoxItemOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/IconBoxItemOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IconBoxItemOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bcc34e8"
  
)

/* harmony default export */ var IconBoxItemOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceIconBoxWithTitleStleTwo.vue?vue&type=template&id=3f2ef32c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-icon-boxes-area plr--100 plr_lg--50 plr_md--50 plr_sm--5"},[_vm._ssrNode("<div class=\"ptb--150 ptb-md--80 ptb-sm--80 bg_color--15\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"brook-section-title text-center mb--20\"><h6 class=\"heading heading-h6 theme-color font-blod\">REASONS WHY</h6> <div class=\"bkseparator--40\"></div> <h2 class=\"heading heading-h2 heading-font\">We're trusted by clients</h2></div></div></div> "),_vm._ssrNode("<div class=\"row mt--30\">","</div>",_vm._l((_vm.data.services.slice(0, 3)),function(service){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 mt--40 wow move-up\">","</div>",[_c('IconBoxItemOne',{attrs:{"service":service,"addClass":"bg-transparant plr--50 plr_lg--20 plr_sm--5 plr_md--20"}})],1)}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/ServiceIconBoxWithTitleStleTwo.vue?vue&type=template&id=3f2ef32c&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceIconBoxWithTitleStleTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ServiceIconBoxWithTitleStleTwovue_type_script_lang_js_ = ({
  components: {
    IconBoxItemOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 125))
  },

  data() {
    return {
      data: service
    };
  }

});
// CONCATENATED MODULE: ./components/sections/ServiceIconBoxWithTitleStleTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_ServiceIconBoxWithTitleStleTwovue_type_script_lang_js_ = (ServiceIconBoxWithTitleStleTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/ServiceIconBoxWithTitleStleTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_ServiceIconBoxWithTitleStleTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51799998"
  
)

/* harmony default export */ var ServiceIconBoxWithTitleStleTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconBoxItemOne: __webpack_require__(125).default})


/***/ }),

/***/ 91:
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[{\"id\":1,\"icon\":\"ion-ios-eye-outline\",\"image\":\"assets/bg/events.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":2,\"icon\":\"ion-ios-bookmarks-outline\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":3,\"icon\":\"ion-ios-browsers-outline\",\"heading\":\"SEO marketing\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":4,\"icon\":\"ion-ios-bell-outline\",\"heading\":\"Resource use\",\"desc\":\"We participate in knowledge and technology transfers in resource use.\"},{\"id\":5,\"icon\":\"ion-ios-infinite-outline\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":6,\"icon\":\"ion-ios-cloudy-outline\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":7,\"icon\":\"/img/service/home-creative-agency-box-image-01.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":8,\"icon\":\"/img/service/home-creative-agency-box-image-02.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":9,\"icon\":\"/img/service/home-creative-agency-box-image-03.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":10,\"icon\":\"/img/service/icon-box/icon-1.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":11,\"icon\":\"/img/service/icon-box/icon-2.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":12,\"icon\":\"/img/service/icon-box/icon-3.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":13,\"image\":\"../img/bg/menu.png\",\"heading\":\"Resource Use\",\"desc\":\"We participate in knowledge and technology transfers to promote the resource use.\"},{\"id\":14,\"image\":\"/img/service/service-3/service-2.jpg\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":15,\"image\":\"/img/service/service-3/service-3.jpg\",\"heading\":\"Digital Marketing\",\"desc\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":16,\"image\":\"/img/service/service-3/service-4.jpg\",\"heading\":\"SEO Marketing\",\"desc\":\"Our approach is to focus on growing visibility in organic search engine results.\"}],\"serviceList\":[{\"image\":\"/img/service/modern/service-list-1.jpg\",\"alt\":\"service image\",\"title\":\"Creative services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-2.jpg\",\"alt\":\"service image\",\"title\":\"Agency services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-3.jpg\",\"alt\":\"service image\",\"title\":\"Digital services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"}]}");

/***/ })

};;
//# sourceMappingURL=sections-service-icon-box-with-title-stle-two.js.map