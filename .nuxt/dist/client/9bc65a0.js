(window.webpackJsonp=window.webpackJsonp||[]).push([[279,103,107,111,156,167,170,173],{240:function(t,e,l){},241:function(t,e,l){"use strict";l.r(e);var o=l(20),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[l("div",{staticClass:"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-5 col-xl-7 col-sm-6"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook.png",alt:"Brand Logo"}})])],1)])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40"},[l("div",{staticClass:"footer-widget menu--about"},[l("h2",{staticClass:"widgettitle"},[t._v("About us")]),t._v(" "),l("div",{staticClass:"footer-menu"},[l("ul",{staticClass:"ft-menu-list bk-hover"},[l("li",[l("n-link",{attrs:{to:"/about-us-01"}},[t._v("About Us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/team-grid"}},[t._v("Team")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/career"}},[t._v("Career")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/services-classic"}},[t._v("Services")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact")])],1)])])])]),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"copyright ptb--50"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-left text-left"},[l("ul",{staticClass:"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover"},[l("li",[l("n-link",{attrs:{to:"/blog/blog-creative"}},[t._v("Our Blogs")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[t._v("Latest Projects")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact Us")])],1)])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40"},[l("div",{staticClass:"footer-widget menu--contact"},[l("h2",{staticClass:"widgettitle"},[t._v("Contact")]),t._v(" "),l("div",{staticClass:"footer-address bk-hover mb--20"},[l("p",[t._v("Your address goes here "),l("br"),t._v(" ana ville 10010, USA")]),t._v(" "),l("p",[l("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@yourdomain.com")])]),t._v(" "),l("p",[l("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")])])]),t._v(" "),l("div",{staticClass:"social-share social--transparent text-white"},[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-facebook"})]),t._v(" "),l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-instagram"})]),t._v(" "),l("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-dribbble"})]),t._v(" "),l("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-pinterest"})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-right text-center text-md-right"},[l("p",[t._v("© 2022 "),l("b",[t._v("Brook")]),t._v(" Made with "),l("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),l("a",{attrs:{href:"https://hasthemes.com/"}},[l("b",[t._v("HasThemes")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(241).default})},242:function(t,e,l){"use strict";l.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),n=o.length,r=0;r<n;r++)o[r].addEventListener("click",(function(t){m(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){v()}));var m=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},n=(l(244),l(20)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mobile-navigation"},[l("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[l("ul",[l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-business"}},[l("span",[t._v("Home Business")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-creative-agency"}},[l("span",[t._v("Home Creative Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-design-studio"}},[l("span",[t._v("Home Design Studio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-digital-agency"}},[l("span",[t._v("Home Digital Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-authentic-studio"}},[l("span",[t._v("Home Authentic Studio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-agency"}},[l("span",[t._v("Home Minimal Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-presentation"}},[l("span",[t._v("Home Presentation")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-start-up"}},[l("span",[t._v("Home Start Ups")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-freelancer"}},[l("span",[t._v("Home Freelancer")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-product-landing"}},[l("span",[t._v("Home Product Landing")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-restaurant"}},[l("span",[t._v("Home Restaurant")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-photo-slider-gallery"}},[l("span",[t._v("Home Photo Slider Gallery")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-onepage"}},[l("span",[t._v("Home Onepage")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-type-hover"}},[l("span",[t._v("Home Portfolio Type Hover")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-landing"}},[l("span",[t._v("Home Landing")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-service"}},[l("span",[t._v("Home Service")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-vertical-menu"}},[l("span",[t._v("Home Vertical Menu")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-corona"}},[l("span",[t._v("Home Corona")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-essential"}},[l("span",[t._v("Home Essential")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-indie-musician"}},[l("span",[t._v("Indie Musician")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-creative-portfolio"}},[l("span",[t._v("Home Creative Portfolio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-portfolio"}},[l("span",[t._v("Home Minimal Portfolio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-portfolio-slide"}},[l("span",[t._v("Home Portfolio Slide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-fullscreen-slider-left-vertical-header"}},[l("span",[t._v("Portfolio Fullscreen Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-blog-grid"}},[l("span",[t._v("Home Blog Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-masonry-gallery"}},[l("span",[t._v("Home Masonry Gallery")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-metro-grid"}},[l("span",[t._v("Home Minimal Metro Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-foodie"}},[l("span",[t._v("Home Foodie")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about-us-01"}},[l("span",[t._v("About Us 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about-us-02"}},[l("span",[t._v("About Us 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about-us-03"}},[l("span",[t._v("About Us 03")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services-classic"}},[l("span",[t._v("Services Classic")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/services-modern"}},[l("span",[t._v("Services Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/services-list"}},[l("span",[t._v("Services List")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/team-grid"}},[l("span",[t._v("Team Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team-carousel-01"}},[l("span",[t._v("Our Team Carousel 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team-carousel-02"}},[l("span",[t._v("Our Team Carousel 02")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/contact-us-modern"}},[l("span",[t._v("Contact Us Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact-us-with-map"}},[l("span",[t._v("Contact Us With Map")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing-plans"}},[l("span",[t._v("Pricing Plans")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing-plans-02"}},[l("span",[t._v("Pricing Plans 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/career"}},[l("span",[t._v("Career")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[l("span",[t._v("Portfolio Grid Boxed")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-wide"}},[l("span",[t._v("Portfolio Grid Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-with-caption"}},[l("span",[t._v("Portfolio With Caption")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-01"}},[l("span",[t._v("Portfolio Grid Metro 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-02"}},[l("span",[t._v("Portfolio Grid Metro 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-ajax-filter"}},[l("span",[t._v("Portfolio Ajax Filter")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Details 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-filter"}},[l("span",[t._v("portfolio-grid-filter")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details"}},[l("span",[t._v("Portfolio Details")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right"}},[l("span",[t._v("Portfolio Details Right")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Details 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-left-wide"}},[l("span",[t._v("Left Details - Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right-wide"}},[l("span",[t._v("Right Details - Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-image-with-caption"}},[l("span",[t._v("Image With Caption")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Elements")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/team"}},[l("span",[t._v("Team")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/testimonial"}},[l("span",[t._v("Testimonial")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/pricing-box"}},[l("span",[t._v("Pricing Box")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/dividers"}},[l("span",[t._v("Dividers")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/brand-logo"}},[l("span",[t._v("Brand Logo Carousel")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/flexible-image-slider"}},[l("span",[t._v("Flexible Image Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/carousel-slider"}},[l("span",[t._v("Carousel Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/call-to-action-banner"}},[l("span",[t._v("Call To Action Banner")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/tab"}},[l("span",[t._v("Tab")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/gradation"}},[l("span",[t._v("Gradation")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/message-box"}},[l("span",[t._v("message-box")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/instagram"}},[l("span",[t._v("Instagram")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/icon-boxes"}},[l("span",[t._v("icon-boxes")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/lists"}},[l("span",[t._v("Lists")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/accordion"}},[l("span",[t._v("Accordion")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/contact-subscribe"}},[l("span",[t._v("Contact & subscribe forms")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Blogs")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-creative"}},[l("span",[t._v("Blog Creative")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-standard-list"}},[l("span",[t._v("Blog Standard List")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-classic"}},[l("span",[t._v("Blog Grid Classic")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-classic-sidebar"}},[l("span",[t._v("Blog Grid Classic Sidebar")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-standard"}},[l("span",[t._v("Blog Grid Standard")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-simple"}},[l("span",[t._v("Blog Grid Simple")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-modern"}},[l("span",[t._v("Blog Grid Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal"}},[l("span",[t._v("Blog Grid Minimal")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal-outline"}},[l("span",[t._v("Blog Grid Minimal Outline")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-mesonry"}},[l("span",[t._v("Blog Grid Masonry")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-details"}},[l("span",[t._v("Blog Details")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-details-modern-layout"}},[l("span",[t._v("Blog Details Modern Layout")])])],1)])],1)])],1)])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,l){"use strict";l(240)},245:function(t,e,l){"use strict";l.r(e);var o={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,242))}}},n=l(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"popup-mobile-menu popup-mobile-visiable"},[l("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.$emit("togglenav")}}}),t._v(" "),l("div",{staticClass:"inner"},[l("div",{staticClass:"mobileheader"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),l("button",{staticClass:"mobile-close",on:{click:function(e){return t.$emit("togglenav")}}})]),t._v(" "),l("div",{staticClass:"menu-content"},[l("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(242).default})},246:function(t,e,l){"use strict";l.r(e);var o={},n=l(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"brook-search-popup"},[l("div",{staticClass:"search-overlay",on:{click:function(e){return t.$emit("toggleSearch")}}}),t._v(" "),l("div",{staticClass:"inner"},[l("div",{staticClass:"search-header"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),l("button",{staticClass:"search-close",on:{click:function(e){return t.$emit("toggleSearch")}}})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"search-content"},[l("form",[l("label",[l("input",{attrs:{type:"search",placeholder:"Enter search keyword…"}})]),t._v(" "),l("button",{staticClass:"search-submit"},[l("i",{staticClass:"fa fa-search"})])])])}],!1,null,null,null);e.default=component.exports},247:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{instagramPosts:[{id:1,image:"/img/instagram/instagram-1.jpg",like:"1K",comment:"8"},{id:2,image:"/img/instagram/instagram-2.jpg",like:"6K",comment:"9"},{id:3,image:"/img/instagram/instagram-3.jpg",like:"3K",comment:"4"},{id:4,image:"/img/instagram/instagram-4.jpg",like:"1K",comment:"3"},{id:5,image:"/img/instagram/instagram-5.jpg",like:"2K",comment:"7"},{id:6,image:"/img/instagram/instagram-6.jpg",like:"1K",comment:"8"}]}}},n=l(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5"},[l("div",{staticClass:"bk-footer-inner pt--150 pb--30 pt_sm--100"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 col-sm-6"},[l("div",{staticClass:"footer-widget text-var--2"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:""}},[l("img",{attrs:{src:"/img/logo/brook-white2.png",alt:"brand logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-sm-6 mt_mobile--40"},[l("div",{staticClass:"footer-widget text-var--2 menu--about"},[l("h2",{staticClass:"widgettitle"},[t._v("About us")]),t._v(" "),l("div",{staticClass:"footer-menu"},[l("ul",{staticClass:"ft-menu-list bk-hover"},[l("li",[l("n-link",{attrs:{to:"/about-us-01"}},[t._v("About Us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/team-grid"}},[t._v("Team")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/career"}},[t._v("Career")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/services-classic"}},[t._v("Services")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact")])],1)])])])]),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"col-lg-3 col-sm-6 mt_md--40 mt_sm--40"},[l("div",{staticClass:"footer-widget text-var--2 menu--instagram"},[l("h2",{staticClass:"widgettitle"},[t._v("Instagram")]),t._v(" "),l("div",{staticClass:"ft-instagram-list"},[l("div",{staticClass:"instagram-grid-wrap"},t._l(t.instagramPosts,(function(e){return l("div",{key:e.id,staticClass:"item-grid grid-style--1"},[l("div",{staticClass:"thumb"},[l("n-link",{attrs:{to:""}},[l("img",{attrs:{src:e.image,alt:"instagram image"}})]),t._v(" "),l("div",{staticClass:"item-info"},[l("div",{staticClass:"inner"},[l("n-link",{attrs:{to:""}},[l("i",{staticClass:"fas fa-heart"}),t._v("\n                                                    "+t._s(e.like)+"\n                                                ")]),t._v(" "),l("n-link",{attrs:{to:""}},[l("i",{staticClass:"fas fa-comment-dots"}),t._v("\n                                                    "+t._s(e.comment)+"\n                                                ")])],1)])],1)])})),0)])])])])])]),t._v(" "),l("div",{staticClass:"copyright ptb--50 text-var-2"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-left text-md-left text-center"},[l("ul",{staticClass:"bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap"},[l("li",[l("n-link",{attrs:{to:"/blog-creative"}},[t._v("Our Blogs")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[t._v("Latest Projects")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact Us")])],1)])])]),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-inner"},[l("p",[t._v("Brook is a multi-purpose WordPress theme for big and small-sized businesses. Enjoy the theme's original design, functional features & responsive layouts.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-sm-6 mt_md--40 mt_sm--40"},[l("div",{staticClass:"footer-widget text-var--2 menu--contact"},[l("h2",{staticClass:"widgettitle"},[t._v("Contact")]),t._v(" "),l("div",{staticClass:"footer-address"},[l("div",{staticClass:"bk-hover"},[l("p",[t._v("Your address goes here "),l("br"),t._v(" Vacaville 10010, USA")]),t._v(" "),l("p",[l("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@yourdomain.com")])]),t._v(" "),l("p",[l("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")])])]),t._v(" "),l("div",{staticClass:"social-share social--transparent text-white"},[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-facebook"})]),t._v(" "),l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-instagram"})]),t._v(" "),l("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-dribbble"})]),t._v(" "),l("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-pinterest"})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-right text-md-right text-center"},[l("p",[t._v("© 2022 "),l("b",[t._v("Brook")]),t._v(" Made with "),l("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),l("a",{attrs:{href:"https://hasthemes.com/"}},[l("b",[t._v("HasThemes")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(241).default})},251:function(t,e,l){},255:function(t,e,l){"use strict";l(251)},256:function(t,e,l){"use strict";l.r(e);var o=l(249),n=l.n(o),r=l(243),c={components:{FixedHeader:n.a,Navigation:r.default},props:["addClass"]},m=(l(255),l(20)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("fixed-header",[l("header",{staticClass:"br_header header-default black-logo--version haeder-fixed-width header-mega-menu clearfix",class:t.addClass},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"header__wrapper mr--0"},[l("div",{staticClass:"header-left flex-20"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"Brook Logo"}})])],1)]),t._v(" "),l("div",{staticClass:"mainmenu-wrapper d-none d-lg-block"},[l("Navigation")],1),t._v(" "),l("div",{staticClass:"header-right"},[l("div",{staticClass:"popup-search-wrap"},[l("button",{staticClass:"btn-search-click",on:{click:function(e){return t.$emit("toggleSearch")}}},[l("i",{staticClass:"fa fa-search"})])]),t._v(" "),l("div",{staticClass:"manu-hamber popup-mobile-click d-block d-lg-none black-version d-block d-xl-none",on:{click:function(e){return t.$emit("togglenav")}}},[l("div",[l("i")])])])])])])])])])}),[],!1,null,"ec39c4f8",null);e.default=component.exports;installComponents(component,{Navigation:l(243).default,Header:l(248).default})},259:function(t){t.exports=JSON.parse('{"portfolios":[{"heading":"header 01","image":"/img/portfolio/portfolio-1/portfolio-1.jpg"}],"portfolioFeaturd":[{"id":1,"image":"/img/portfolio/portfolio-2/portfolio-01.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"},{"id":2,"image":"/img/portfolio/portfolio-2/portfolio-02.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Photography"},{"id":3,"image":"/img/portfolio/portfolio-2/portfolio-03.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Design"},{"id":4,"image":"/img/portfolio/portfolio-2/portfolio-04.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Marketing"},{"id":5,"image":"/img/portfolio/portfolio-2/portfolio-05.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"SEO"},{"id":6,"image":"/img/portfolio/portfolio-2/portfolio-06.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"}],"portfolioItems":[{"id":1,"image":"/img/portfolio/grid/caption-1.jpg","heading":"The Language of Designs","slug":"the-language-of-designs-1","category":"Design","filterClass":"creative digital"},{"id":2,"image":"/img/portfolio/grid/caption-2.jpg","heading":"B-sharp High-end Audio","slug":"b-sharp-high-end-audio-2","category":"Marketing","filterClass":"photography design"},{"id":3,"image":"/img/portfolio/grid/caption-3.jpg","heading":"Smart Sound System","slug":"smart-sound-system-3","category":"Photography","filterClass":"photography creative"},{"id":4,"image":"/img/portfolio/grid/caption-4.jpg","heading":"Awe-inspiring Projects","slug":"awe-inspiring-projects-4","category":"Life Style","filterClass":"design"},{"id":5,"image":"/img/portfolio/grid/caption-5.jpg","heading":"Gifts for Photography","slug":"gifts-for-photography-5","category":"Design","filterClass":"creative"},{"id":6,"image":"/img/portfolio/grid/caption-6.jpg","heading":"Enchanting Portrait Hacks","slug":"enchanting-portrait-hacks-6","category":"Photography","filterClass":"digital"},{"id":7,"image":"/img/portfolio/grid/caption-7.jpg","heading":"Digital Marketing Basics","slug":"digital-marketing-basics-7","category":"Design"},{"id":8,"image":"/img/portfolio/grid/caption-8.jpg","heading":"Measure Digital Progress","slug":"measure-digital-progress-8","filterClass":"digital design"},{"id":9,"image":"/img/portfolio/grid/caption-9.jpg","heading":"B-sharp High-end Audio","slug":"b-sharp-high-end-audio-9","category":"Design","filterClass":"digital"}]}')},367:function(t,e,l){"use strict";l.r(e);var o={props:["portfolio"]},n=l(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"portfolio with-caption"},[l("div",{staticClass:"thumb video-with-thumb"},[l("n-link",{attrs:{to:"/portfolio/"+t.portfolio.slug}},[l("img",{attrs:{src:t.portfolio.image,alt:t.portfolio.heading}})])],1),t._v(" "),l("div",{staticClass:"caption-bottom text-left"},[l("div",{staticClass:"info"},[l("h5",{staticClass:"heading heading-h5"},[l("n-link",{attrs:{to:"/portfolio/"+t.portfolio.slug}},[t._v("\n                    "+t._s(t.portfolio.heading)+"\n                ")])],1),t._v(" "),l("p",{staticClass:"bk_pra"},[t._v(t._s(t.portfolio.category))])])])])}),[],!1,null,null,null);e.default=component.exports},627:function(t,e,l){"use strict";l.r(e);var o=l(259),n={components:{HeaderBlack:function(){return Promise.resolve().then(l.bind(null,256))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,245))},SearchPopup:function(){return Promise.resolve().then(l.bind(null,246))},PortfolioItemCaptionBottom:function(){return Promise.resolve().then(l.bind(null,367))},FooterTwo:function(){return Promise.resolve().then(l.bind(null,247))}},data:function(){return{data:o,navOpen:!1,searchOpen:!1}},mounted:function(){document.body.classList.add("template-color-1","template-font-1")},head:function(){return{title:"Portfolio With Caption"}}},r=l(20),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main-container"},[l("HeaderBlack",{attrs:{addClass:"header-transparent"},on:{togglenav:function(e){t.navOpen=!t.navOpen},toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),l("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),l("SearchPopup",{class:{"search-popup-open":t.searchOpen},on:{toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--5"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row mtn--30"},t._l(t.data.portfolioItems,(function(t){return l("div",{key:t.id,staticClass:"col-lg-4 col-sm-6 mt--30"},[l("PortfolioItemCaptionBottom",{attrs:{portfolio:t}})],1)})),0)])]),t._v(" "),l("FooterTwo")],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"breadcaump-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcaump-title-bar"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"breadcaump-inner text-center"},[l("h1",{staticClass:"heading heading-h1"},[t._v("Portfolio With Caption")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderBlack:l(256).default,OffCanvasMobileMenu:l(245).default,SearchPopup:l(246).default,PortfolioItemCaptionBottom:l(367).default,FooterTwo:l(247).default})}}]);