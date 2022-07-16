exports.ids = [89];
exports.modules = {

/***/ 231:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/events/ExpandableImage.vue?vue&type=template&id=0ff45178&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"expandable-image",class:{ expanded: _vm.expanded },on:{"click":function($event){_vm.expanded = true}}},[_vm._ssrNode(((_vm.expanded)?("<i class=\"close-button\"><svg viewBox=\"0 0 24 24\" class=\"mr-5\" style=\"width:50px;height:50px\"><path fill=\"#000000\" d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"></path></svg></i>"):("<i class=\"expand-button\"><svg viewBox=\"0 0 24 24\" style=\"width:24px;height:24px\"><path fill=\"#000000\" d=\"M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z\" class=\"opacity-50\"></path></svg></i>"))+" <img"+(_vm._ssrAttrs(_vm.$attrs))+">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/events/ExpandableImage.vue?vue&type=template&id=0ff45178&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/events/ExpandableImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ExpandableImagevue_type_script_lang_js_ = ({
  data() {
    return {
      expanded: false,
      closeButtonref: null
    };
  },

  inheritAttrs: false,
  methods: {
    closeImage(event) {
      this.expanded = false;
      event.stopPropagation();
    },

    freezeVp(e) {
      e.preventDefault();
    }

  },
  watch: {
    expanded(expanded) {
      this.$nextTick(() => {
        // Run this if when we're expanding the image
        if (expanded) {
          // Clone the entire expandable-image element
          this.cloned = this.$el.cloneNode(true); // Store a reference for the close button

          this.closeButtonRef = this.cloned.querySelector('.close-button'); // Call closeImage when the close button is clicked

          this.closeButtonRef.addEventListener('click', this.closeImage); // Add the cloned element into <body>

          document.body.appendChild(this.cloned); // Prevent the page from scrolling

          document.body.style.overflow = 'hidden';
          setTimeout(() => {
            // Show the cloned element
            this.cloned.style.opacity = 1;
          }, 0);
        } else {
          // This section will run when the image is closing
          // Hide the expanded image
          this.cloned.style.opacity = 0;
          setTimeout(() => {
            // Then, remove the click event listener from the close button
            this.closeButtonRef.removeEventListener('click', this.closeImage); // Remove the cloned element and the references

            this.cloned.remove();
            this.cloned = null;
            this.closeButtonRef = null; // Re-enable the scrolling

            document.body.style.overflow = 'auto';
          }, 250);
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/events/ExpandableImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_ExpandableImagevue_type_script_lang_js_ = (ExpandableImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/events/ExpandableImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(336)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_ExpandableImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f4000a6a"
  
)

/* harmony default export */ var ExpandableImage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=events-expandable-image.js.map