(window.webpackJsonp=window.webpackJsonp||[]).push([[253,71,103,106,119,131,155,156,167,173],{240:function(t,e,l){},241:function(t,e,l){"use strict";l.r(e);var n=l(20),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[l("div",{staticClass:"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-5 col-xl-7 col-sm-6"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook.png",alt:"Brand Logo"}})])],1)])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40"},[l("div",{staticClass:"footer-widget menu--about"},[l("h2",{staticClass:"widgettitle"},[t._v("About us")]),t._v(" "),l("div",{staticClass:"footer-menu"},[l("ul",{staticClass:"ft-menu-list bk-hover"},[l("li",[l("n-link",{attrs:{to:"/about-us-01"}},[t._v("About Us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/team-grid"}},[t._v("Team")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/career"}},[t._v("Career")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/services-classic"}},[t._v("Services")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact")])],1)])])])]),t._v(" "),t._m(0)])]),t._v(" "),l("div",{staticClass:"copyright ptb--50"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-left text-left"},[l("ul",{staticClass:"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover"},[l("li",[l("n-link",{attrs:{to:"/blog/blog-creative"}},[t._v("Our Blogs")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[t._v("Latest Projects")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact Us")])],1)])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40"},[l("div",{staticClass:"footer-widget menu--contact"},[l("h2",{staticClass:"widgettitle"},[t._v("Contact")]),t._v(" "),l("div",{staticClass:"footer-address bk-hover mb--20"},[l("p",[t._v("Your address goes here "),l("br"),t._v(" ana ville 10010, USA")]),t._v(" "),l("p",[l("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@yourdomain.com")])]),t._v(" "),l("p",[l("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")])])]),t._v(" "),l("div",{staticClass:"social-share social--transparent text-white"},[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-facebook"})]),t._v(" "),l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-instagram"})]),t._v(" "),l("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-dribbble"})]),t._v(" "),l("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-pinterest"})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-right text-center text-md-right"},[l("p",[t._v("© 2022 "),l("b",[t._v("Brook")]),t._v(" Made with "),l("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),l("a",{attrs:{href:"https://hasthemes.com/"}},[l("b",[t._v("HasThemes")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(241).default})},242:function(t,e,l){"use strict";l.r(e);var n={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),o=n.length,r=0;r<o;r++)n[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){m()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(l(244),l(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mobile-navigation"},[l("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[l("ul",[l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-business"}},[l("span",[t._v("Home Business")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-creative-agency"}},[l("span",[t._v("Home Creative Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-design-studio"}},[l("span",[t._v("Home Design Studio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-digital-agency"}},[l("span",[t._v("Home Digital Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-authentic-studio"}},[l("span",[t._v("Home Authentic Studio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-agency"}},[l("span",[t._v("Home Minimal Agency")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-presentation"}},[l("span",[t._v("Home Presentation")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-start-up"}},[l("span",[t._v("Home Start Ups")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-freelancer"}},[l("span",[t._v("Home Freelancer")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-product-landing"}},[l("span",[t._v("Home Product Landing")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-restaurant"}},[l("span",[t._v("Home Restaurant")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-photo-slider-gallery"}},[l("span",[t._v("Home Photo Slider Gallery")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-onepage"}},[l("span",[t._v("Home Onepage")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-type-hover"}},[l("span",[t._v("Home Portfolio Type Hover")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-landing"}},[l("span",[t._v("Home Landing")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-service"}},[l("span",[t._v("Home Service")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-vertical-menu"}},[l("span",[t._v("Home Vertical Menu")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-corona"}},[l("span",[t._v("Home Corona")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-essential"}},[l("span",[t._v("Home Essential")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-indie-musician"}},[l("span",[t._v("Indie Musician")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Home Samples 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/home-creative-portfolio"}},[l("span",[t._v("Home Creative Portfolio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-portfolio"}},[l("span",[t._v("Home Minimal Portfolio")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-portfolio-slide"}},[l("span",[t._v("Home Portfolio Slide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-fullscreen-slider-left-vertical-header"}},[l("span",[t._v("Portfolio Fullscreen Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-blog-grid"}},[l("span",[t._v("Home Blog Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-masonry-gallery"}},[l("span",[t._v("Home Masonry Gallery")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-minimal-metro-grid"}},[l("span",[t._v("Home Minimal Metro Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/home-foodie"}},[l("span",[t._v("Home Foodie")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about-us-01"}},[l("span",[t._v("About Us 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about-us-02"}},[l("span",[t._v("About Us 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about-us-03"}},[l("span",[t._v("About Us 03")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services-classic"}},[l("span",[t._v("Services Classic")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/services-modern"}},[l("span",[t._v("Services Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/services-list"}},[l("span",[t._v("Services List")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/team-grid"}},[l("span",[t._v("Team Grid")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team-carousel-01"}},[l("span",[t._v("Our Team Carousel 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/team-carousel-02"}},[l("span",[t._v("Our Team Carousel 02")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Sample Pages 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/contact-us-modern"}},[l("span",[t._v("Contact Us Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact-us-with-map"}},[l("span",[t._v("Contact Us With Map")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing-plans"}},[l("span",[t._v("Pricing Plans")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/pricing-plans-02"}},[l("span",[t._v("Pricing Plans 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/career"}},[l("span",[t._v("Career")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[l("span",[t._v("Portfolio Grid Boxed")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-wide"}},[l("span",[t._v("Portfolio Grid Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-with-caption"}},[l("span",[t._v("Portfolio With Caption")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-01"}},[l("span",[t._v("Portfolio Grid Metro 01")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-02"}},[l("span",[t._v("Portfolio Grid Metro 02")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-ajax-filter"}},[l("span",[t._v("Portfolio Ajax Filter")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Details 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-filter"}},[l("span",[t._v("portfolio-grid-filter")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details"}},[l("span",[t._v("Portfolio Details")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right"}},[l("span",[t._v("Portfolio Details Right")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Portfolio Details 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-left-wide"}},[l("span",[t._v("Left Details - Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right-wide"}},[l("span",[t._v("Right Details - Wide")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-image-with-caption"}},[l("span",[t._v("Image With Caption")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Elements")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/team"}},[l("span",[t._v("Team")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/testimonial"}},[l("span",[t._v("Testimonial")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/pricing-box"}},[l("span",[t._v("Pricing Box")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/dividers"}},[l("span",[t._v("Dividers")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/brand-logo"}},[l("span",[t._v("Brand Logo Carousel")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/flexible-image-slider"}},[l("span",[t._v("Flexible Image Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/carousel-slider"}},[l("span",[t._v("Carousel Slider")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/call-to-action-banner"}},[l("span",[t._v("Call To Action Banner")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/tab"}},[l("span",[t._v("Tab")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/gradation"}},[l("span",[t._v("Gradation")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/message-box"}},[l("span",[t._v("message-box")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/instagram"}},[l("span",[t._v("Instagram")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Element Group 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/element/icon-boxes"}},[l("span",[t._v("icon-boxes")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/lists"}},[l("span",[t._v("Lists")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/accordion"}},[l("span",[t._v("Accordion")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/element/contact-subscribe"}},[l("span",[t._v("Contact & subscribe forms")])])],1)])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Blogs")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 01")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-creative"}},[l("span",[t._v("Blog Creative")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-standard-list"}},[l("span",[t._v("Blog Standard List")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-classic"}},[l("span",[t._v("Blog Grid Classic")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 02")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-classic-sidebar"}},[l("span",[t._v("Blog Grid Classic Sidebar")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-standard"}},[l("span",[t._v("Blog Grid Standard")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-simple"}},[l("span",[t._v("Blog Grid Simple")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 03")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-modern"}},[l("span",[t._v("Blog Grid Modern")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal"}},[l("span",[t._v("Blog Grid Minimal")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal-outline"}},[l("span",[t._v("Blog Grid Minimal Outline")])])],1)])],1),t._v(" "),l("li",{staticClass:"mega--title menu-item-has-children"},[l("n-link",{attrs:{to:""}},[t._v("Blog Group 04")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-grid-mesonry"}},[l("span",[t._v("Blog Grid Masonry")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-details"}},[l("span",[t._v("Blog Details")])])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog/blog-details-modern-layout"}},[l("span",[t._v("Blog Details Modern Layout")])])],1)])],1)])],1)])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,l){"use strict";l(240)},245:function(t,e,l){"use strict";l.r(e);var n={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,242))}}},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"popup-mobile-menu popup-mobile-visiable"},[l("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.$emit("togglenav")}}}),t._v(" "),l("div",{staticClass:"inner"},[l("div",{staticClass:"mobileheader"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),l("button",{staticClass:"mobile-close",on:{click:function(e){return t.$emit("togglenav")}}})]),t._v(" "),l("div",{staticClass:"menu-content"},[l("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(242).default})},246:function(t,e,l){"use strict";l.r(e);var n={},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"brook-search-popup"},[l("div",{staticClass:"search-overlay",on:{click:function(e){return t.$emit("toggleSearch")}}}),t._v(" "),l("div",{staticClass:"inner"},[l("div",{staticClass:"search-header"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),l("button",{staticClass:"search-close",on:{click:function(e){return t.$emit("toggleSearch")}}})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"search-content"},[l("form",[l("label",[l("input",{attrs:{type:"search",placeholder:"Enter search keyword…"}})]),t._v(" "),l("button",{staticClass:"search-submit"},[l("i",{staticClass:"fa fa-search"})])])])}],!1,null,null,null);e.default=component.exports},257:function(t,e,l){},262:function(t,e,l){"use strict";l(257)},263:function(t,e,l){"use strict";l.r(e);var n={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,243))}}},o=(l(262),l(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"open-hamberger-wrapper d-none d-lg-block",style:{backgroundImage:"url('/img/bg/bg-image-54.jpg')"},attrs:{id:"popup-fullscreen-menu"}},[l("div",{staticClass:"page-close light-version",on:{click:function(e){return t.$emit("toggleFullpageMenu")}}}),t._v(" "),l("div",{staticClass:"header-default light-logo--version poss_relative"},[l("div",{staticClass:"mainmenu-wrapper"},[l("Navigation")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row hamberger-search"},[l("div",{staticClass:"col-12"},[l("form",[l("div",{staticClass:"input-box"},[l("input",{attrs:{type:"text",placeholder:"Enter search keyword…"}}),t._v(" "),l("button",[l("i",{staticClass:"fa fa-search"})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"offcanvas-extra-info mt--150"},[l("div",{staticClass:"row align-items-end"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"info"},[l("div",{staticClass:"bk-hover mb--40"},[l("h5",{staticClass:"heading heading-h5 text-white"},[t._v("Connect")]),t._v(" "),l("div",{staticClass:"bkseparator--20"}),t._v(" "),l("p",{staticClass:"bk_pra font-16"},[t._v("4801 E Colfax "),l("br"),t._v(" Denver, CO 80220")]),t._v(" "),l("p",{staticClass:"bk_pra font-16"},[l("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@fifteenltd.com")])])]),t._v(" "),l("ul",{staticClass:"social-icon text-left tooltip-layout icon-size-large"},[l("li",{staticClass:"instagram"},[l("a",{staticClass:"link hint--bounce hint--top hint--white",attrs:{href:"https://www.instagram.com/fifteenltd/",target:"_blank","aria-label":"Instagram"}},[l("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"copyright-right text-right"},[l("p",{staticClass:"bk_pra font-16"},[t._v("\n            © 2022 "),l("b",{staticClass:"text-white"},[t._v("Handcrafted")]),t._v(" with "),l("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),l("a",{attrs:{href:"https://froconicdesign.com/"}},[l("b",[t._v("Froconic Design")])])])])])])])}],!1,null,"1d402e2d",null);e.default=component.exports;installComponents(component,{Navigation:l(243).default})},265:function(t){t.exports=JSON.parse('[{"id":1,"logo":"/img/testimonial/clint-2/client-logo-01.png"},{"id":2,"logo":"/img/testimonial/clint-2/client-logo-02.png"},{"id":3,"logo":"/img/testimonial/clint-2/client-logo-03.png"},{"id":4,"logo":"/img/testimonial/clint-2/client-logo-04.png"},{"id":5,"logo":"/img/testimonial/clint-2/client-logo-05.png"},{"id":6,"logo":"/img/testimonial/clint-2/client-logo-06.png"}]')},304:function(t,e,l){"use strict";l.r(e);var n={},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"br_header-sidebar"},[l("div",{staticClass:"side-header-inner"},[l("div",{staticClass:"header-wrap"},[l("div",{staticClass:"header-top"},[l("div",{staticClass:"branding"},[l("n-link",{attrs:{to:""}},[l("img",{attrs:{src:"/img/logo/simple-dark-logo.png",alt:"brand logo"}})])],1),t._v(" "),l("div",{staticClass:"popop-open-menu hamberger-trigger",attrs:{id:"popop-open-menu"}},[l("div",{staticClass:"menu-icon",on:{click:function(e){return t.$emit("toggleFullpageMenu")}}},[l("i")])])]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"header-bottom"},[l("div",{staticClass:"popup-search-wrap pr_lg--30 pr_md--30 pr_sm--30"},[l("button",{staticClass:"btn-search-click",on:{click:function(e){return t.$emit("toggleSearch")}}},[l("i",{staticClass:"fa fa-search"})])]),t._v(" "),l("div",{staticClass:"manu-hamber popup-mobile-click d-block d-xl-none gray-version d-block d-xl-none",on:{click:function(e){return t.$emit("togglenav")}}},[t._m(1)])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"header-center"},[l("div",{staticClass:"header-social-neworks"},[l("div",{staticClass:"inner"},[l("a",{attrs:{href:"https://www.facebook.com/"}},[l("span",[t._v("Facebook")])]),t._v(" "),l("a",{attrs:{href:"https://twitter.com/"}},[l("span",[t._v("Twitter")])]),t._v(" "),l("a",{attrs:{href:"https://www.instagram.com/"}},[l("span",[t._v("Instagram")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(248).default})},321:function(t,e,l){"use strict";l.r(e);var n=l(265),o={data:function(){return{data:n}}},r=l(20),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"brand-wrapper"},[l("div",{staticClass:"brand__list brand-default brand-style--2"},t._l(t.data,(function(t){return l("div",{key:t.id,staticClass:"brand"},[l("n-link",{attrs:{to:""}},[l("img",{attrs:{src:t.logo,alt:"logo image"}})])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,l){},363:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{portfolios:[{id:1,heading:"B-sharp High-end Audio",category:"Design",image:"/img/portfolio/grid/metro3-1.jpg"},{id:2,heading:"B-sharp High-end Audio",category:"Design",image:"/img/portfolio/grid/metro3-2.jpg"},{id:3,heading:"B-sharp High-end Audio",category:"Design",image:"/img/portfolio/grid/metro3-3.jpg"},{id:4,heading:"B-sharp High-end Audio",category:"Design",image:"/img/portfolio/grid/metro3-4.jpg"},{id:5,heading:"B-sharp High-end Audio",category:"Design",image:"/img/portfolio/grid/metro3-5.jpg"},{id:6,heading:"B-sharp High-end Audio",category:"Design",image:"/img/portfolio/grid/metro3-6.jpg"}]}}},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"brook-portfolio-area bg_color--1 bk-masonary-wrapper"},[l("div",{staticClass:"portfolio-grid-metro3 mesonry-list"},[l("masonry",{attrs:{cols:{default:2,575:1},gutter:30}},t._l(t.portfolios,(function(e){return l("div",{key:e.id,staticClass:"portfolio portfolio_style--1 mt--30"},[l("div",{staticClass:"poss_relative"},[l("div",{staticClass:"thumb"},[l("img",{attrs:{src:e.image,alt:e.heading}})]),t._v(" "),l("div",{staticClass:"port-overlay-info with-caption position-left"},[l("div",{staticClass:"hover-action"},[l("h3",{staticClass:"post-overlay-title font-24"},[l("n-link",{attrs:{to:"/portfolio/portfolio-details"}},[t._v(t._s(e.heading))])],1),t._v(" "),l("div",{staticClass:"category"},[t._v(t._s(e.category))])])])])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,l){"use strict";l.r(e);var n=l(20),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20"},[t._m(0),t._v(" "),l("div",{staticClass:"copyright ptb--50"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-left text-md-left text-center"},[l("ul",{staticClass:"bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap"},[l("li",[l("n-link",{attrs:{to:"/blog-creative"}},[t._v("Our Blogs")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[t._v("Latest Projects")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact Us")])],1)])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bk-footer-inner pt--150 pb--100 pt_sm--80 pb_sm--40 pt_md--80 pb_md--40"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6 col-xl-6"},[l("div",{staticClass:"bk-footer-widget"},[l("h2",{staticClass:"heading heading-h2 text-white line-height-1-39"},[t._v("Start working on a "),l("br"),t._v(" new project?")])])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-xl-5 offset-xl-1"},[l("div",{staticClass:"bk-footer-widget menu--contact mt_md--30 mt_sm--30"},[l("h4",{staticClass:"heading heading-h4 text-white line-height-1-2"},[t._v("Contact us")]),t._v(" "),l("div",{staticClass:"bkseparator--35"}),t._v(" "),l("div",{staticClass:"footer-address"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-7 col-sm-6"},[l("p",{staticClass:"bk_pra line-height-1-63 text-white"},[t._v("Your address goes here "),l("br"),t._v(" Vacaville 10010, USA")]),t._v(" "),l("div",{staticClass:"social-share social--transparent text-white mt--45"},[l("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-facebook"})]),t._v(" "),l("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-instagram"})]),t._v(" "),l("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-dribbble"})]),t._v(" "),l("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[l("i",{staticClass:"fab fa-pinterest"})])])]),t._v(" "),l("div",{staticClass:"col-lg-5 col-sm-6 mt_mobile--30"},[l("p",{staticClass:"bk_pra line-height-1-63 bk-hover"},[l("a",{staticClass:"text-white",attrs:{href:"mailto:info@yourdomain.com"}},[t._v("\n                                        info@yourdomain.com\n                                    ")])]),t._v(" "),l("p",{staticClass:"bk_pra line-height-1-63 bk-hover"},[l("a",{staticClass:"text-white",attrs:{href:"tel:0123456789"}},[t._v("\n                                        0123456789\n                                    ")])])])])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"copyright-right text-md-right text-center"},[l("p",[t._v("© 2022 "),l("b",[t._v("Brook")]),t._v(" Made with "),l("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),l("a",{attrs:{href:"https://hasthemes.com/"}},[l("b",[t._v("HasThemes")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(241).default})},383:function(t,e,l){"use strict";l(337)},462:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{swiperOption:{loop:!0,speed:1e3,autoplay:{delay:5e3},effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'">'+(t+1)+"</span>"}}},sliders:[{id:1,subHeading:"art direction",heading:"Nouvelle Histories",image:"/img/slider/minimal-agency-slide-01.jpg",alt:"slider image"},{id:2,subHeading:"art direction",heading:"Isometric building",image:"/img/slider/minimal-agency-slide-02.jpg",alt:"slider image"},{id:3,subHeading:"art direction",heading:"Lighting",image:"/img/slider/minimal-agency-slide-03.jpg",alt:"slider image"}]}}},o=(l(383),l(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"hero-minimal-agency"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-12 number-dot"},[l("swiper",{attrs:{options:t.swiperOption}},t._l(t.sliders,(function(e){return l("div",{key:e.id,staticClass:"swiper-slide"},[l("div",{staticClass:"hero-content"},[l("div",{staticClass:"hero-content__image text-center"},[l("img",{staticClass:"animation_images",attrs:{src:e.image,alt:e.alt}})]),t._v(" "),l("div",{staticClass:"hero-content__text"},[l("h6",{staticClass:"sub-heading"},[t._v(t._s(e.subHeading))]),t._v(" "),l("h1",{staticClass:"heading"},[t._v(t._s(e.heading))])])])])})),0),t._v(" "),l("div",{staticClass:"swiper-pagination minimal-agency"})],1)])])])}),[],!1,null,"5f877d51",null);e.default=component.exports},567:function(t,e,l){"use strict";l.r(e);var n={components:{HeaderVerticalOffcanvas:function(){return Promise.resolve().then(l.bind(null,304))},OffcanvasMenu:function(){return Promise.resolve().then(l.bind(null,263))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,245))},SearchPopup:function(){return Promise.resolve().then(l.bind(null,246))},HeroMinimalAgency:function(){return Promise.resolve().then(l.bind(null,462))},MinimalMetroGrid:function(){return Promise.resolve().then(l.bind(null,363))},BrandLogoWithoutCarousel:function(){return Promise.resolve().then(l.bind(null,321))},FooterStyleThree:function(){return Promise.resolve().then(l.bind(null,372))}},data:function(){return{navOpen:!1,searchOpen:!1,fullpageOpen:!1}},mounted:function(){document.body.classList.add("template-color-19","template-font-4")},head:function(){return{title:"Home Minimal Agency"}}},o=l(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main-container"},[l("HeaderVerticalOffcanvas",{on:{toggleFullpageMenu:function(e){t.fullpageOpen=!t.fullpageOpen},togglenav:function(e){t.navOpen=!t.navOpen},toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),l("OffcanvasMenu",{class:{"is-visiable":t.fullpageOpen},on:{toggleFullpageMenu:function(e){t.fullpageOpen=!t.fullpageOpen}}}),t._v(" "),l("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),l("SearchPopup",{class:{"search-popup-open":t.searchOpen},on:{toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),l("div",{staticClass:"page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0"},[l("HeroMinimalAgency"),t._v(" "),l("div",{staticClass:"brook-about-area bg_image--26 ptb--130 ptb-md--80 ptb-sm--60",style:{backgroundImage:"url('/img/bg/bg-image-26.jpg')"}},[t._m(0)]),t._v(" "),l("MinimalMetroGrid",{staticClass:"pb--100 pb_md--80 pb_sm--60"}),t._v(" "),l("BrandLogoWithoutCarousel",{staticClass:"minimal-agency-brand-logo pb--100 pb_md--80 pb_sm--60"}),t._v(" "),l("FooterStyleThree")],1)],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"about-content text-center wow move-up"},[l("h6",{staticClass:"heading heading-h6 theme-color secondary-font font-blod"},[t._v("ABOUT US")]),t._v(" "),l("div",{staticClass:"bkseparator--10"}),t._v(" "),l("h2",{staticClass:"heading heading-h2 playfair-font line-height-1-62 font-400"},[t._v("A small design agency based in New "),l("br"),t._v(" York. We love to find "),l("span",{staticClass:"theme-color"},[t._v("simple solutions")]),t._v(" to "),l("br"),t._v(" complex challenges.")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderVerticalOffcanvas:l(304).default,OffcanvasMenu:l(263).default,OffCanvasMobileMenu:l(245).default,SearchPopup:l(246).default,HeroMinimalAgency:l(462).default,MinimalMetroGrid:l(363).default,BrandLogoWithoutCarousel:l(321).default,FooterStyleThree:l(372).default})}}]);