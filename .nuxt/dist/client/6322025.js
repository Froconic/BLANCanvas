(window.webpackJsonp=window.webpackJsonp||[]).push([[219,67,81,84,103,124,156,167,173],{240:function(t,e,l){},241:function(t,e,l){"use strict";l.r(e);var n=l(20),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[l("div",{staticClass:"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-5 col-xl-7 col-sm-6"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook.png",alt:"Brand Logo"}})])],1)])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40"},[l("div",{staticClass:"footer-widget menu--about"},[l("h2",{staticClass:"widgettitle"},[t._v("About us")]),t._v(" "),l("div",{staticClass:"footer-menu"},[l("ul",{staticClass:"ft-menu-list bk-hover"},[l("li",[l("n-link",{attrs:{to:"/about-us-01"}},[t._v("About Us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/team-grid"}},[t._v("Team")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/career"}},[t._v("Career")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/services-classic"}},[t._v("Services")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact")])],1)])])])]),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"copyright ptb--50"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-left text-left"},[l("ul",{staticClass:"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover"},[l("li",[l("n-link",{attrs:{to:"/blog/blog-creative"}},[t._v("Our Blogs")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[t._v("Latest Projects")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact Us")])],1)])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40"},[l("div",{staticClass:"footer-widget menu--contact"},[l("h2",{staticClass:"widgettitle"},[t._v("Contact")]),t._v(" "),l("div",{staticClass:"footer-address bk-hover mb--20"},[l("p",[t._v("Your address goes here "),l("br"),t._v(" ana ville 10010, USA")]),t._v(" "),l("p",[l("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@yourdomain.com")])]),t._v(" "),l("p",[l("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")])])]),t._v(" "),l("div",{staticClass:"social-share social--transparent text-white"},[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-facebook"})]),t._v(" "),l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-instagram"})]),t._v(" "),l("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-dribbble"})]),t._v(" "),l("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-pinterest"})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-right text-center text-md-right"},[l("p",[t._v("© 2022 "),l("b",[t._v("Brook")]),t._v(" Made with "),l("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),l("a",{attrs:{href:"https://hasthemes.com/"}},[l("b",[t._v("HasThemes")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(241).default})},242:function(t,e,l){"use strict";l.r(e);var n={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),o=n.length,r=0;r<o;r++)n[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){m()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(l(244),l(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mobile-navigation"},[l("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[l("ul",[l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-business"}},[l("span",[t._v("Home Business")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-creative-agency"}},[l("span",[t._v("Home Creative Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-design-studio"}},[l("span",[t._v("Home Design Studio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-digital-agency"}},[l("span",[t._v("Home Digital Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-authentic-studio"}},[l("span",[t._v("Home Authentic Studio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-agency"}},[l("span",[t._v("Home Minimal Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-presentation"}},[l("span",[t._v("Home Presentation")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-start-up"}},[l("span",[t._v("Home Start Ups")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-freelancer"}},[l("span",[t._v("Home Freelancer")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-product-landing"}},[l("span",[t._v("Home Product Landing")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-restaurant"}},[l("span",[t._v("Home Restaurant")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-photo-slider-gallery"}},[l("span",[t._v("Home Photo Slider Gallery")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-onepage"}},[l("span",[t._v("Home Onepage")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-type-hover"}},[l("span",[t._v("Home Portfolio Type Hover")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-landing"}},[l("span",[t._v("Home Landing")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-service"}},[l("span",[t._v("Home Service")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-vertical-menu"}},[l("span",[t._v("Home Vertical Menu")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-corona"}},[l("span",[t._v("Home Corona")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-essential"}},[l("span",[t._v("Home Essential")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-indie-musician"}},[l("span",[t._v("Indie Musician")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-creative-portfolio"}},[l("span",[t._v("Home Creative Portfolio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-portfolio"}},[l("span",[t._v("Home Minimal Portfolio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-portfolio-slide"}},[l("span",[t._v("Home Portfolio Slide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-fullscreen-slider-left-vertical-header"}},[l("span",[t._v("Portfolio Fullscreen Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-blog-grid"}},[l("span",[t._v("Home Blog Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-masonry-gallery"}},[l("span",[t._v("Home Masonry Gallery")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-metro-grid"}},[l("span",[t._v("Home Minimal Metro Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-foodie"}},[l("span",[t._v("Home Foodie")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about-us-01"}},[l("span",[t._v("About Us 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about-us-02"}},[l("span",[t._v("About Us 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about-us-03"}},[l("span",[t._v("About Us 03")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services-classic"}},[l("span",[t._v("Services Classic")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/services-modern"}},[l("span",[t._v("Services Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/services-list"}},[l("span",[t._v("Services List")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/team-grid"}},[l("span",[t._v("Team Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team-carousel-01"}},[l("span",[t._v("Our Team Carousel 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team-carousel-02"}},[l("span",[t._v("Our Team Carousel 02")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/contact-us-modern"}},[l("span",[t._v("Contact Us Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact-us-with-map"}},[l("span",[t._v("Contact Us With Map")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing-plans"}},[l("span",[t._v("Pricing Plans")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing-plans-02"}},[l("span",[t._v("Pricing Plans 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/career"}},[l("span",[t._v("Career")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[l("span",[t._v("Portfolio Grid Boxed")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-wide"}},[l("span",[t._v("Portfolio Grid Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-with-caption"}},[l("span",[t._v("Portfolio With Caption")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-01"}},[l("span",[t._v("Portfolio Grid Metro 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-02"}},[l("span",[t._v("Portfolio Grid Metro 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-ajax-filter"}},[l("span",[t._v("Portfolio Ajax Filter")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Details 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-filter"}},[l("span",[t._v("portfolio-grid-filter")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details"}},[l("span",[t._v("Portfolio Details")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right"}},[l("span",[t._v("Portfolio Details Right")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Details 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-left-wide"}},[l("span",[t._v("Left Details - Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right-wide"}},[l("span",[t._v("Right Details - Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-image-with-caption"}},[l("span",[t._v("Image With Caption")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Elements")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/team"}},[l("span",[t._v("Team")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/testimonial"}},[l("span",[t._v("Testimonial")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/pricing-box"}},[l("span",[t._v("Pricing Box")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/dividers"}},[l("span",[t._v("Dividers")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/brand-logo"}},[l("span",[t._v("Brand Logo Carousel")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/flexible-image-slider"}},[l("span",[t._v("Flexible Image Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/carousel-slider"}},[l("span",[t._v("Carousel Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/call-to-action-banner"}},[l("span",[t._v("Call To Action Banner")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/tab"}},[l("span",[t._v("Tab")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/gradation"}},[l("span",[t._v("Gradation")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/message-box"}},[l("span",[t._v("message-box")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/instagram"}},[l("span",[t._v("Instagram")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/icon-boxes"}},[l("span",[t._v("icon-boxes")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/lists"}},[l("span",[t._v("Lists")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/accordion"}},[l("span",[t._v("Accordion")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/contact-subscribe"}},[l("span",[t._v("Contact & subscribe forms")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Blogs")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-creative"}},[l("span",[t._v("Blog Creative")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-standard-list"}},[l("span",[t._v("Blog Standard List")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-classic"}},[l("span",[t._v("Blog Grid Classic")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-classic-sidebar"}},[l("span",[t._v("Blog Grid Classic Sidebar")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-standard"}},[l("span",[t._v("Blog Grid Standard")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-simple"}},[l("span",[t._v("Blog Grid Simple")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-modern"}},[l("span",[t._v("Blog Grid Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal"}},[l("span",[t._v("Blog Grid Minimal")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal-outline"}},[l("span",[t._v("Blog Grid Minimal Outline")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-mesonry"}},[l("span",[t._v("Blog Grid Masonry")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-details"}},[l("span",[t._v("Blog Details")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-details-modern-layout"}},[l("span",[t._v("Blog Details Modern Layout")])])],1)])],1)])],1)])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,l){"use strict";l(240)},245:function(t,e,l){"use strict";l.r(e);var n={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,242))}}},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"popup-mobile-menu popup-mobile-visiable"},[l("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.$emit("togglenav")}}}),t._v(" "),l("div",{staticClass:"inner"},[l("div",{staticClass:"mobileheader"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),l("button",{staticClass:"mobile-close",on:{click:function(e){return t.$emit("togglenav")}}})]),t._v(" "),l("div",{staticClass:"menu-content"},[l("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(242).default})},246:function(t,e,l){"use strict";l.r(e);var n={},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"brook-search-popup"},[l("div",{staticClass:"search-overlay",on:{click:function(e){return t.$emit("toggleSearch")}}}),t._v(" "),l("div",{staticClass:"inner"},[l("div",{staticClass:"search-header"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),l("button",{staticClass:"search-close",on:{click:function(e){return t.$emit("toggleSearch")}}})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"search-content"},[l("form",[l("label",[l("input",{attrs:{type:"search",placeholder:"Enter search keyword…"}})]),t._v(" "),l("button",{staticClass:"search-submit"},[l("i",{staticClass:"fa fa-search"})])])])}],!1,null,null,null);e.default=component.exports},265:function(t){t.exports=JSON.parse('[{"id":1,"logo":"/img/testimonial/clint-2/client-logo-01.png"},{"id":2,"logo":"/img/testimonial/clint-2/client-logo-02.png"},{"id":3,"logo":"/img/testimonial/clint-2/client-logo-03.png"},{"id":4,"logo":"/img/testimonial/clint-2/client-logo-04.png"},{"id":5,"logo":"/img/testimonial/clint-2/client-logo-05.png"},{"id":6,"logo":"/img/testimonial/clint-2/client-logo-06.png"}]')},282:function(t,e,l){},285:function(t,e,l){"use strict";l.r(e);var n=l(265),o={data:function(){return{data:n,swiperOption:{loop:!0,speed:1e3,autoplay:{delay:3e3},breakpoints:{1200:{slidesPerView:5},768:{slidesPerView:3},480:{slidesPerView:2}}}}}},r=l(20),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bk-brand-area bg_color--1 ptb--60"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"brand-wrapper"},[l("div",{staticClass:"brand__list brand-default brand-style--1"},[l("swiper",{attrs:{options:t.swiperOption}},t._l(t.data,(function(t){return l("div",{key:t.id,staticClass:"brand swiper-slide"},[l("n-link",{attrs:{to:""}},[l("img",{attrs:{src:t.logo,alt:"logo image"}})])],1)})),0)],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,l){"use strict";l(282)},302:function(t,e,l){"use strict";l.r(e);var n={name:"CurveShape"},o=(l(295),l(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"curve-shape"},[l("svg",{staticStyle:{overflow:"scroll","enable-background":"new 0 0 3841 120"},attrs:{x:"0px",y:"0px",viewBox:"0 0 3841 120","xml:space":"preserve"}},[t._t("bgcolor")],2)])}),[],!1,null,"346eb0d3",null);e.default=component.exports},327:function(t,e,l){},377:function(t,e,l){"use strict";l(327)},436:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{videos:[{src:"https://www.youtube.com/watch?v=9No-FiEInLA",thumbnail:""}],swiperOption:{spaceBetween:20,loop:!0,speed:1e3,autoplay:!1,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination-2",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'">'+(t+1)+"</span>"}}}}}},o=(l(377),l(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"slider-area hero-business position-relative"},[l("div",{staticClass:"number-dot"},[l("swiper",{attrs:{options:t.swiperOption}},[l("div",{staticClass:"hero-item bg-image swiper-slide",style:{backgroundImage:"url('/img/slider/business-slide-01.jpg')"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"hero-content-2"},[l("h3",[t._v("This is Brook "),l("span",[t._v("A full-service "),l("br"),t._v(" creative agency.")])])])])])]),t._v(" "),l("div",{staticClass:"hero-bottom-content"},[l("a",{staticClass:"scroll-more",attrs:{href:"javascript:void(0)"}},[l("h6",[t._v("Scroll for more")]),t._v(" "),l("img",{attrs:{src:"/img/slider/mouse-icon.png",alt:"icon"}})]),t._v(" "),l("client-only",[l("silent-box",{attrs:{image:t.videos[0]},scopedSlots:t._u([{key:"silentbox-item",fn:function(){return[l("div",{staticClass:"video-btn"},[l("div",{staticClass:"play__btn"},[l("div",{staticClass:"video-icon second-icon"})])])]},proxy:!0}])})],1)],1)]),t._v(" "),l("div",{staticClass:"hero-item bg-image swiper-slide",style:{backgroundImage:"url('/img/slider/business-slide-02.jpg')"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"hero-content-2"},[l("h3",[t._v("This is Brook "),l("span",[t._v("A full-service "),l("br"),t._v(" creative agency.")])])])])])]),t._v(" "),l("div",{staticClass:"hero-bottom-content"},[l("a",{staticClass:"scroll-more",attrs:{href:"#service"}},[l("h6",[t._v("Scroll for more")]),t._v(" "),l("img",{attrs:{src:"/img/slider/mouse-icon.png",alt:"icon"}})]),t._v(" "),l("client-only",[l("silent-box",{attrs:{image:t.videos[0]},scopedSlots:t._u([{key:"silentbox-item",fn:function(){return[l("div",{staticClass:"video-btn"},[l("div",{staticClass:"play__btn"},[l("div",{staticClass:"video-icon second-icon"})])])]},proxy:!0}])})],1)],1)]),t._v(" "),l("div",{staticClass:"hero-item bg-image swiper-slide",style:{backgroundImage:"url('/img/slider/business-slide-03.jpg')"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"hero-content-2"},[l("h3",[t._v("This is Brook "),l("span",[t._v("A full-service "),l("br"),t._v(" creative agency.")])])])])])]),t._v(" "),l("div",{staticClass:"hero-bottom-content"},[l("a",{staticClass:"scroll-more",attrs:{href:"#service"}},[l("h6",[t._v("Scroll for more")]),t._v(" "),l("img",{attrs:{src:"/img/slider/mouse-icon.png",alt:"icon"}})]),t._v(" "),l("client-only",[l("silent-box",{attrs:{image:t.videos[0]},scopedSlots:t._u([{key:"silentbox-item",fn:function(){return[l("div",{staticClass:"video-btn"},[l("div",{staticClass:"play__btn"},[l("div",{staticClass:"video-icon second-icon"})])])]},proxy:!0}])})],1)],1)])]),t._v(" "),l("div",{staticClass:"swiper-pagination-2"})],1)])}),[],!1,null,null,null);e.default=component.exports},437:function(t,e,l){"use strict";l.r(e);var n={},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bk-contact-area section-pb-xl bg_color--1"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-3 col-lg-3 col-12"},[l("div",{staticClass:"address-inner"},[l("div",{staticClass:"address wow move-up"},[l("h3",{staticClass:"heading"},[t._v("Visit our studio at")]),t._v(" "),l("p",[t._v("2005 Stokes Isle Apt. 896, Shop Plaza 10010, USA")])]),t._v(" "),l("div",{staticClass:"address mt--60 mb--60 wow move-up"},[l("h3",{staticClass:"heading"},[t._v("Message us")]),t._v(" "),l("p",[l("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@yourdomain.com")])]),t._v(" "),l("p",[l("a",{attrs:{href:"tel:(+68)120034509"}},[t._v("(+68) 120034509")])])]),t._v(" "),l("ul",{staticClass:"social-icon icon-size-medium text-dark text-left tooltip-layout move-up wow"},[l("li",{staticClass:"facebook"},[l("a",{staticClass:"link hint--bounce hint--top hint--theme",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook"}},[l("i",{staticClass:"fab fa-facebook"})])]),t._v(" "),l("li",{staticClass:"twitter"},[l("a",{staticClass:"link hint--bounce hint--top hint--theme",attrs:{href:"https://twitter.com/","aria-label":"Twitter"}},[l("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),l("li",{staticClass:"instagram"},[l("a",{staticClass:"link hint--bounce hint--top hint--theme",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram"}},[l("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),l("li",{staticClass:"dribbble"},[l("a",{staticClass:"link hint--bounce hint--top hint--theme",attrs:{href:"https://dribbble.com/","aria-label":"Dribbble"}},[l("i",{staticClass:"fab fa-dribbble"})])]),t._v(" "),l("li",{staticClass:"pinterest"},[l("a",{staticClass:"link hint--bounce hint--top hint--theme",attrs:{href:"https://www.pinterest.com/","aria-label":"Pinterest"}},[l("i",{staticClass:"fab fa-pinterest"})])])])])]),t._v(" "),l("div",{staticClass:"col-xl-8 offset-xl-1 col-lg-9 col-12 mt_md--40 mt_sm--40"},[l("div",{staticClass:"contact-form"},[l("form",{staticClass:"form-style--1 wow move-up"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"input-box"},[l("span",{staticClass:"form-icon far fa-user"}),t._v(" "),l("input",{attrs:{type:"text",placeholder:"Name *"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"input-box"},[l("span",{staticClass:"form-icon far fa-envelope"}),t._v(" "),l("input",{attrs:{type:"text",placeholder:"Email *"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"input-box"},[l("span",{staticClass:"form-icon fas fa-mobile-alt"}),t._v(" "),l("input",{attrs:{type:"text",placeholder:"Phone number"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"input-box"},[l("textarea",{attrs:{placeholder:"Your message"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"form-action"},[l("div",{staticClass:"form-description"},[t._v("\n                                        I’m available for commissions and collaborations, and i’m "),l("br"),t._v(" excited to hear from you about new projects\n                                    ")]),t._v(" "),l("div",{staticClass:"form-submit"},[l("input",{attrs:{type:"submit",value:"Send message"}})])])])])])])])])])])}],!1,null,null,null);e.default=component.exports},550:function(t,e,l){"use strict";l.r(e);var n={components:{Header:function(){return Promise.resolve().then(l.bind(null,248))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,245))},SearchPopup:function(){return Promise.resolve().then(l.bind(null,246))},HeroBusiness:function(){return Promise.resolve().then(l.bind(null,436))},ServiceOne:function(){return l.e(34).then(l.bind(null,662))},PortfolioOne:function(){return l.e(27).then(l.bind(null,654))},CounterUpOne:function(){return l.e(22).then(l.bind(null,648))},TeamOne:function(){return l.e(37).then(l.bind(null,538))},TestimonialOne:function(){return l.e(41).then(l.bind(null,667))},BrandLogoCarousel:function(){return Promise.resolve().then(l.bind(null,285))},BlogOne:function(){return l.e(17).then(l.bind(null,643))},CurveShape:function(){return Promise.resolve().then(l.bind(null,302))},ContactUsOne:function(){return Promise.resolve().then(l.bind(null,437))},Footer:function(){return Promise.resolve().then(l.bind(null,241))}},data:function(){return{navOpen:!1,searchOpen:!1}},mounted:function(){document.body.classList.add("template-color-1","template-font-2")},head:function(){return{title:"Home Business"}}},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main-container"},[l("Header",{on:{togglenav:function(e){t.navOpen=!t.navOpen},toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),l("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),l("SearchPopup",{class:{"search-popup-open":t.searchOpen},on:{toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),l("HeroBusiness"),t._v(" "),l("ServiceOne",{attrs:{id:"service"}}),t._v(" "),l("PortfolioOne"),t._v(" "),l("CounterUpOne"),t._v(" "),l("TeamOne"),t._v(" "),l("CurveShape",{scopedSlots:t._u([{key:"bgcolor",fn:function(){return[l("path",{staticStyle:{fill:"#f5f5f5","stroke-miterlimit":"10"},attrs:{d:"M3360.5,97.739c-242,0-480-48.375-480-48.375\n                    S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5\n                    S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"}})]},proxy:!0}])}),t._v(" "),l("TestimonialOne"),t._v(" "),l("BrandLogoCarousel"),t._v(" "),l("BlogOne"),t._v(" "),l("ContactUsOne"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(248).default,OffCanvasMobileMenu:l(245).default,SearchPopup:l(246).default,HeroBusiness:l(436).default,CurveShape:l(302).default,BrandLogoCarousel:l(285).default,ContactUsOne:l(437).default,Footer:l(241).default})}}]);