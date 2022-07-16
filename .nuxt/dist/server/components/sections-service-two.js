exports.ids = [34,179];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemOneWithoutButton.vue?vue&type=template&id=be8680f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"service service--1 text-center mt--30"},[_vm._ssrNode("<div class=\"icons\"><i"+(_vm._ssrClass(null,_vm.service.icon))+"></i></div> <div class=\"content\"><h4>"+_vm._ssrEscape(_vm._s(_vm.service.heading))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.service.desc))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItemOneWithoutButton.vue?vue&type=template&id=be8680f4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemOneWithoutButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceItemOneWithoutButtonvue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItemOneWithoutButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemOneWithoutButtonvue_type_script_lang_js_ = (ServiceItemOneWithoutButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ServiceItemOneWithoutButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemOneWithoutButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d6f7665"
  
)

/* harmony default export */ var ServiceItemOneWithoutButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceTwo.vue?vue&type=template&id=528f5f86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brook-icon-boxes-area space_dec--100 pt_md--80 pt_sm--60"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.data.services.slice(0, 3)),function(service){return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 wow move-up\">","</div>",[_c('ServiceItemOneWithoutButton',{attrs:{"service":service}})],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/ServiceTwo.vue?vue&type=template&id=528f5f86&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ServiceTwovue_type_script_lang_js_ = ({
  components: {
    ServiceItemOneWithoutButton: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118))
  },

  data() {
    return {
      data: service
    };
  }

});
// CONCATENATED MODULE: ./components/sections/ServiceTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_ServiceTwovue_type_script_lang_js_ = (ServiceTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/ServiceTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_ServiceTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "832517e4"
  
)

/* harmony default export */ var ServiceTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItemOneWithoutButton: __webpack_require__(118).default})


/***/ }),

/***/ 91:
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[{\"id\":1,\"icon\":\"ion-ios-eye-outline\",\"image\":\"assets/bg/events.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":2,\"icon\":\"ion-ios-bookmarks-outline\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":3,\"icon\":\"ion-ios-browsers-outline\",\"heading\":\"SEO marketing\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":4,\"icon\":\"ion-ios-bell-outline\",\"heading\":\"Resource use\",\"desc\":\"We participate in knowledge and technology transfers in resource use.\"},{\"id\":5,\"icon\":\"ion-ios-infinite-outline\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":6,\"icon\":\"ion-ios-cloudy-outline\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":7,\"icon\":\"/img/service/home-creative-agency-box-image-01.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":8,\"icon\":\"/img/service/home-creative-agency-box-image-02.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":9,\"icon\":\"/img/service/home-creative-agency-box-image-03.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":10,\"icon\":\"/img/service/icon-box/icon-1.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":11,\"icon\":\"/img/service/icon-box/icon-2.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":12,\"icon\":\"/img/service/icon-box/icon-3.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":13,\"image\":\"../img/bg/menu.png\",\"heading\":\"Resource Use\",\"desc\":\"We participate in knowledge and technology transfers to promote the resource use.\"},{\"id\":14,\"image\":\"/img/service/service-3/service-2.jpg\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":15,\"image\":\"/img/service/service-3/service-3.jpg\",\"heading\":\"Digital Marketing\",\"desc\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":16,\"image\":\"/img/service/service-3/service-4.jpg\",\"heading\":\"SEO Marketing\",\"desc\":\"Our approach is to focus on growing visibility in organic search engine results.\"}],\"serviceList\":[{\"image\":\"/img/service/modern/service-list-1.jpg\",\"alt\":\"service image\",\"title\":\"Creative services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-2.jpg\",\"alt\":\"service image\",\"title\":\"Agency services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-3.jpg\",\"alt\":\"service image\",\"title\":\"Digital services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"}]}");

/***/ })

};;
//# sourceMappingURL=sections-service-two.js.map