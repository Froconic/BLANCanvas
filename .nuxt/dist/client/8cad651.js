(window.webpackJsonp=window.webpackJsonp||[]).push([[244,60,70,103,104,108,125,156,167,173,186,188],{240:function(t,e,n){},241:function(t,e,n){"use strict";n.r(e);var l=n(20),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[n("div",{staticClass:"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 col-xl-7 col-sm-6"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/brook.png",alt:"Brand Logo"}})])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40"},[n("div",{staticClass:"footer-widget menu--about"},[n("h2",{staticClass:"widgettitle"},[t._v("About us")]),t._v(" "),n("div",{staticClass:"footer-menu"},[n("ul",{staticClass:"ft-menu-list bk-hover"},[n("li",[n("n-link",{attrs:{to:"/about-us-01"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/team-grid"}},[t._v("Team")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/career"}},[t._v("Career")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/services-classic"}},[t._v("Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact")])],1)])])])]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"copyright ptb--50"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"copyright-left text-left"},[n("ul",{staticClass:"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover"},[n("li",[n("n-link",{attrs:{to:"/blog/blog-creative"}},[t._v("Our Blogs")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[t._v("Latest Projects")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us-modern"}},[t._v("Contact Us")])],1)])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40"},[n("div",{staticClass:"footer-widget menu--contact"},[n("h2",{staticClass:"widgettitle"},[t._v("Contact")]),t._v(" "),n("div",{staticClass:"footer-address bk-hover mb--20"},[n("p",[t._v("Your address goes here "),n("br"),t._v(" ana ville 10010, USA")]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:info@yourdomain.com"}},[t._v("info@yourdomain.com")])]),t._v(" "),n("p",[n("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")])])]),t._v(" "),n("div",{staticClass:"social-share social--transparent text-white"},[n("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-facebook"})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-dribbble"})]),t._v(" "),n("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[n("i",{staticClass:"fab fa-pinterest"})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"copyright-right text-center text-md-right"},[n("p",[t._v("© 2022 "),n("b",[t._v("Brook")]),t._v(" Made with "),n("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),n("a",{attrs:{href:"https://hasthemes.com/"}},[n("b",[t._v("HasThemes")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(241).default})},242:function(t,e,n){"use strict";n.r(e);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,r=0;r<o;r++)l[r].addEventListener("click",(function(t){m(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){v()}));var m=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(n(244),n(20)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Home Samples 01")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/home-business"}},[n("span",[t._v("Home Business")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-creative-agency"}},[n("span",[t._v("Home Creative Agency")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-design-studio"}},[n("span",[t._v("Home Design Studio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-digital-agency"}},[n("span",[t._v("Home Digital Agency")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-authentic-studio"}},[n("span",[t._v("Home Authentic Studio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-minimal-agency"}},[n("span",[t._v("Home Minimal Agency")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-presentation"}},[n("span",[t._v("Home Presentation")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Home Samples 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/home-start-up"}},[n("span",[t._v("Home Start Ups")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-freelancer"}},[n("span",[t._v("Home Freelancer")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-product-landing"}},[n("span",[t._v("Home Product Landing")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-restaurant"}},[n("span",[t._v("Home Restaurant")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-photo-slider-gallery"}},[n("span",[t._v("Home Photo Slider Gallery")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-onepage"}},[n("span",[t._v("Home Onepage")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-type-hover"}},[n("span",[t._v("Home Portfolio Type Hover")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Home Samples 03")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/home-landing"}},[n("span",[t._v("Home Landing")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-service"}},[n("span",[t._v("Home Service")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-vertical-menu"}},[n("span",[t._v("Home Vertical Menu")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-corona"}},[n("span",[t._v("Home Corona")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-essential"}},[n("span",[t._v("Home Essential")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-indie-musician"}},[n("span",[t._v("Indie Musician")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Home Samples 04")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/home-creative-portfolio"}},[n("span",[t._v("Home Creative Portfolio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-minimal-portfolio"}},[n("span",[t._v("Home Minimal Portfolio")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-portfolio-slide"}},[n("span",[t._v("Home Portfolio Slide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-fullscreen-slider-left-vertical-header"}},[n("span",[t._v("Portfolio Fullscreen Slider")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-blog-grid"}},[n("span",[t._v("Home Blog Grid")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-masonry-gallery"}},[n("span",[t._v("Home Masonry Gallery")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-minimal-metro-grid"}},[n("span",[t._v("Home Minimal Metro Grid")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/home-foodie"}},[n("span",[t._v("Home Foodie")])])],1)])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Pages")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Sample Pages 01")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/about-us-01"}},[n("span",[t._v("About Us 01")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about-us-02"}},[n("span",[t._v("About Us 02")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about-us-03"}},[n("span",[t._v("About Us 03")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Sample Pages 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/services-classic"}},[n("span",[t._v("Services Classic")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/services-modern"}},[n("span",[t._v("Services Modern")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/services-list"}},[n("span",[t._v("Services List")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Sample Pages 03")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/team-grid"}},[n("span",[t._v("Team Grid")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/team-carousel-01"}},[n("span",[t._v("Our Team Carousel 01")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/team-carousel-02"}},[n("span",[t._v("Our Team Carousel 02")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Sample Pages 04")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/contact-us-modern"}},[n("span",[t._v("Contact Us Modern")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact-us-with-map"}},[n("span",[t._v("Contact Us With Map")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/pricing-plans"}},[n("span",[t._v("Pricing Plans")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/pricing-plans-02"}},[n("span",[t._v("Pricing Plans 02")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/career"}},[n("span",[t._v("Career")])])],1)])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[n("span",[t._v("Portfolio Grid Boxed")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-wide"}},[n("span",[t._v("Portfolio Grid Wide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-with-caption"}},[n("span",[t._v("Portfolio With Caption")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Portfolio Samples 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-01"}},[n("span",[t._v("Portfolio Grid Metro 01")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-02"}},[n("span",[t._v("Portfolio Grid Metro 02")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-ajax-filter"}},[n("span",[t._v("Portfolio Ajax Filter")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Portfolio Details 01")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-filter"}},[n("span",[t._v("portfolio-grid-filter")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details"}},[n("span",[t._v("Portfolio Details")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right"}},[n("span",[t._v("Portfolio Details Right")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Portfolio Details 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-left-wide"}},[n("span",[t._v("Left Details - Wide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right-wide"}},[n("span",[t._v("Right Details - Wide")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-image-with-caption"}},[n("span",[t._v("Image With Caption")])])],1)])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Elements")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Element Group 01")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/element/team"}},[n("span",[t._v("Team")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/testimonial"}},[n("span",[t._v("Testimonial")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/pricing-box"}},[n("span",[t._v("Pricing Box")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/dividers"}},[n("span",[t._v("Dividers")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Element Group 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/element/brand-logo"}},[n("span",[t._v("Brand Logo Carousel")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/flexible-image-slider"}},[n("span",[t._v("Flexible Image Slider")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/carousel-slider"}},[n("span",[t._v("Carousel Slider")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/call-to-action-banner"}},[n("span",[t._v("Call To Action Banner")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Element Group 03")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/element/tab"}},[n("span",[t._v("Tab")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/gradation"}},[n("span",[t._v("Gradation")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/message-box"}},[n("span",[t._v("message-box")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/instagram"}},[n("span",[t._v("Instagram")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Element Group 04")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/element/icon-boxes"}},[n("span",[t._v("icon-boxes")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/lists"}},[n("span",[t._v("Lists")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/accordion"}},[n("span",[t._v("Accordion")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/element/contact-subscribe"}},[n("span",[t._v("Contact & subscribe forms")])])],1)])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Blogs")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Blog Group 01")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-creative"}},[n("span",[t._v("Blog Creative")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-standard-list"}},[n("span",[t._v("Blog Standard List")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-classic"}},[n("span",[t._v("Blog Grid Classic")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Blog Group 02")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-classic-sidebar"}},[n("span",[t._v("Blog Grid Classic Sidebar")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-standard"}},[n("span",[t._v("Blog Grid Standard")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-simple"}},[n("span",[t._v("Blog Grid Simple")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Blog Group 03")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-modern"}},[n("span",[t._v("Blog Grid Modern")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal"}},[n("span",[t._v("Blog Grid Minimal")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal-outline"}},[n("span",[t._v("Blog Grid Minimal Outline")])])],1)])],1),t._v(" "),n("li",{staticClass:"mega--title menu-item-has-children"},[n("n-link",{attrs:{to:""}},[t._v("Blog Group 04")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-grid-mesonry"}},[n("span",[t._v("Blog Grid Masonry")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-details"}},[n("span",[t._v("Blog Details")])])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog/blog-details-modern-layout"}},[n("span",[t._v("Blog Details Modern Layout")])])],1)])],1)])],1)])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n(240)},245:function(t,e,n){"use strict";n.r(e);var l={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,242))}}},o=n(20),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable"},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.$emit("togglenav")}}}),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"mobileheader"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close",on:{click:function(e){return t.$emit("togglenav")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(242).default})},246:function(t,e,n){"use strict";n.r(e);var l={},o=n(20),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brook-search-popup"},[n("div",{staticClass:"search-overlay",on:{click:function(e){return t.$emit("toggleSearch")}}}),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"search-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/brook-black.png",alt:"brand logo"}})])],1),t._v(" "),n("button",{staticClass:"search-close",on:{click:function(e){return t.$emit("toggleSearch")}}})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-content"},[n("form",[n("label",[n("input",{attrs:{type:"search",placeholder:"Enter search keyword…"}})]),t._v(" "),n("button",{staticClass:"search-submit"},[n("i",{staticClass:"fa fa-search"})])])])}],!1,null,null,null);e.default=component.exports},265:function(t){t.exports=JSON.parse('[{"id":1,"logo":"/img/testimonial/clint-2/client-logo-01.png"},{"id":2,"logo":"/img/testimonial/clint-2/client-logo-02.png"},{"id":3,"logo":"/img/testimonial/clint-2/client-logo-03.png"},{"id":4,"logo":"/img/testimonial/clint-2/client-logo-04.png"},{"id":5,"logo":"/img/testimonial/clint-2/client-logo-05.png"},{"id":6,"logo":"/img/testimonial/clint-2/client-logo-06.png"}]')},267:function(t,e,n){},273:function(t){t.exports=JSON.parse('{"teamMembers":[{"id":1,"image":"/img/team/team-1/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":2,"image":"/img/team/team-1/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":3,"image":"/img/team/team-1/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":4,"image":"/img/team/team-1/team-4.jpg","name":"Peter Parker","position":"Marketing"},{"id":5,"image":"/img/team/team-3/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":6,"image":"/img/team/team-3/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":7,"image":"/img/team/team-3/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":8,"image":"/img/team/team-2/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":9,"image":"/img/team/team-2/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":10,"image":"/img/team/team-2/team-3.jpg","name":"Kashara May","position":"Founder"}]}')},277:function(t,e,n){"use strict";n.r(e);var l={props:["teamMember"]},o=n(20),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team team__style--3"},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.teamMember.image,alt:"team Images"}}),t._v(" "),n("div",{staticClass:"overlay",style:{backgroundImage:"url("+t.teamMember.image+")"}}),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"team-info text-center"},[n("div",{staticClass:"info"},[n("h5",[t._v(t._s(t.teamMember.name))]),t._v(" "),n("span",[t._v(t._s(t.teamMember.position))])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social-icon icon-solid-rounded icon-size-medium text-center"},[n("li",{staticClass:"facebook"},[n("a",{staticClass:"link",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook"}},[n("i",{staticClass:"fab fa-facebook"})])]),t._v(" "),n("li",{staticClass:"twitter"},[n("a",{staticClass:"link",attrs:{href:"https://twitter.com/","aria-label":"Twitter"}},[n("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),n("li",{staticClass:"instagram"},[n("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram"}},[n("i",{staticClass:"fab fa-instagram"})])])])}],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n(267)},280:function(t,e,n){"use strict";n.r(e);var l={name:"GoogleMap"},o=(n(279),n(20)),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"google-map-area",attrs:{id:"support"}},[e("GmapMap",{attrs:{center:{lat:52.4829,lng:-1.89346},zoom:15,"map-type-id":"terrain"}})],1)}),[],!1,null,"77c6e7a2",null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);var l=n(273),o={components:{TeamMemberThree:function(){return Promise.resolve().then(n.bind(null,277))}},data:function(){return{data:l,swiperOption:{spaceBetween:60,loop:!0,speed:1e3,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},breakpoints:{1499:{slidesPerView:5},768:{slidesPerView:3},480:{slidesPerView:2}}}}}},r=n(20),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid p-0"},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"brook-element-carousel swiper-custom-arrow swiper-arrow-hover"},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.teamMembers.slice(4,7),(function(t){return n("div",{key:t.id,staticClass:"swiper-slide"},[n("TeamMemberThree",{attrs:{teamMember:t}})],1)})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"swiper-btn swiper-btn-prev"},[e("i",{staticClass:"ion ion-ios-arrow-back"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"swiper-btn swiper-btn-next"},[e("i",{staticClass:"ion ion-ios-arrow-forward"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TeamMemberThree:n(277).default})},333:function(t,e,n){},371:function(t,e,n){"use strict";n.r(e);var l=n(20),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer bg_color--4 fixed-footer",attrs:{id:"page-footer-wrapper"}},[n("div",{staticClass:"copyright copyright--2 plr_sm--30"},[n("div",{staticClass:"container ptb--40"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-12"},[n("div",{staticClass:"copyright-left text-md-left text-left"},[n("p",{staticClass:"m-0"},[t._v("© 2022 "),n("b",[t._v("Brook")]),t._v(" Made with "),n("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),n("a",{attrs:{href:"https://hasthemes.com/"}},[n("b",[t._v("HasThemes")])])])])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-12"},[n("div",{staticClass:"copyright-right text-center text-sm-right"},[n("form",{staticClass:"input-box"},[n("input",{attrs:{type:"email",placeholder:"Your e-mail"}}),t._v(" "),n("button",[n("i",{staticClass:"ion-android-arrow-forward"})])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(241).default})},379:function(t,e,n){"use strict";n(333)},445:function(t,e,n){"use strict";n.r(e);var l={},o=n(20),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brook-service-area bg_color--10"},[n("div",{staticClass:"row row--0 align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-12 col-xl-6"},[n("div",{staticClass:"bext-service plr--190 plr_lg--50 plr_lp--40 plr_md--50 plr_sm--30 mt_lg--40 mb_lg--40 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40"},[n("div",{staticClass:"content"},[t._m(1),t._v(" "),n("div",{staticClass:"bkseparator--40"}),t._v(" "),n("h6",{staticClass:"heading heading-h6 font-16 line-height-1-88 font-medium body-color"},[t._v("Our quality of service assessment involves controlling and managing resources by setting priorities for specific types of clients and projects on the system.")]),t._v(" "),n("div",{staticClass:"bkseparator--60 bkseparator_lg--30 bkseparator_md--20 bkseparator_sm--20"}),t._v(" "),n("div",{staticClass:"brook-btn"},[n("n-link",{staticClass:"brook-btn bk-btn-red btn-sd-size btn-rounded space-between",attrs:{to:"/about-us-01"}},[t._v("Learn More")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 col-xl-6"},[e("div",{staticClass:"bext-service thumb text-center"},[e("img",{attrs:{src:"/img/about/about-6.jpg",alt:"images"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brook-section-title text-left"},[n("h3",{staticClass:"heading heading-h3 font-large"},[t._v("Best services save the world")]),t._v(" "),n("div",{staticClass:"bkseparator--25"}),t._v(" "),n("div",{staticClass:"title-separator w--80 color-red"})])}],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n.r(e);var l=n(265),o={data:function(){return{data:l}}},r=n(20),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bk-brand-area bg_color--1 ptb--90 ptb-md--80 ptb-sm--80"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"brand-inner"},[t._m(0),t._v(" "),n("div",{staticClass:"bkseparator--45"}),t._v(" "),n("h6",{staticClass:"heading heading-h6 font-16 line-height-1-88 font-medium body-color"},[t._v("Our quality of service assessment involves controlling and managing resources by setting priorities for specific types of clients and projects on the system.")]),t._v(" "),n("div",{staticClass:"bkseparator--35"}),t._v(" "),n("div",{staticClass:"brand-btn"},[n("n-link",{staticClass:"moredetails-btn red-color",attrs:{to:"/contact-us-modern"}},[t._v("\n                            Work with us \n                            "),n("i",{staticClass:"fa fa-arrow-right"})])],1)])]),t._v(" "),n("div",{staticClass:"col-lg-6 offset-lg-1 mt_sm--40 mt_md--40"},[n("div",{staticClass:"brand-wrapper"},[n("div",{staticClass:"brand__list brand-default brand-style--2 no-border"},t._l(t.data,(function(t){return n("div",{key:t.id,staticClass:"brand"},[n("n-link",{attrs:{to:""}},[n("img",{attrs:{src:t.logo,alt:"logo image"}})])],1)})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brook-section-title text-left"},[n("h3",{staticClass:"heading heading-h3 font-large"},[t._v("Company Clients")]),t._v(" "),n("div",{staticClass:"bkseparator--25"}),t._v(" "),n("div",{staticClass:"title-separator w--80 color-red"})])}],!1,null,null,null);e.default=component.exports},495:function(t,e,n){"use strict";n.r(e);n(379);var l=n(20),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-design-studio bg-cover",style:{backgroundImage:"url('/img/slider/design-studio-slide.jpg')"}},[t._m(0),t._v(" "),n("div",{staticClass:"checkout-content"},[n("h2",[t._v("check out our works.")]),t._v(" "),n("n-link",{staticClass:"brook-btn bk-btn-white btn-sd-size btn-rounded space-between",attrs:{to:"/portfolio/portfolio-with-caption"}},[t._v("Check Portfolio")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"hero-content"},[n("h1",{staticClass:"title"},[t._v("Websites "),n("span",[t._v("&")]),t._v(" digital platforms")]),t._v(" "),n("h3",{staticClass:"sub-title"},[t._v("Insights from the world’s top design leaders.")])])])])])}],!1,null,null,null);e.default=component.exports},558:function(t,e,n){"use strict";n.r(e);var l={components:{Header:function(){return Promise.resolve().then(n.bind(null,248))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,245))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,246))},HeroDesignStudio:function(){return Promise.resolve().then(n.bind(null,495))},OurServiceOne:function(){return n.e(25).then(n.bind(null,652))},TeamCarouselFull:function(){return Promise.resolve().then(n.bind(null,320))},BestService:function(){return Promise.resolve().then(n.bind(null,445))},BrandLogoStyleOne:function(){return Promise.resolve().then(n.bind(null,446))},TestimonialTwo:function(){return n.e(4).then(n.bind(null,669))},BlogThree:function(){return n.e(18).then(n.bind(null,644))},GoogleMap:function(){return Promise.resolve().then(n.bind(null,280))},FooterAgency:function(){return Promise.resolve().then(n.bind(null,371))}},data:function(){return{navOpen:!1,searchOpen:!1}},mounted:function(){document.body.classList.add("template-color-3","template-font-1")},head:function(){return{title:"Home Design Studio"}}},o=n(20),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("Header",{on:{togglenav:function(e){t.navOpen=!t.navOpen},toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),n("SearchPopup",{class:{"search-popup-open":t.searchOpen},on:{toggleSearch:function(e){t.searchOpen=!t.searchOpen}}}),t._v(" "),n("HeroDesignStudio"),t._v(" "),n("OurServiceOne"),t._v(" "),n("div",{staticClass:"brook-team-area bg_color--1 ptb--120 ptb-sm--80 ptb-md--80"},[t._m(0),t._v(" "),n("TeamCarouselFull")],1),t._v(" "),n("BestService"),t._v(" "),n("BrandLogoStyleOne"),t._v(" "),n("TestimonialTwo"),t._v(" "),n("BlogThree"),t._v(" "),n("GoogleMap"),t._v(" "),n("FooterAgency")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"brook-section-title text-center mb--80"},[n("h3",{staticClass:"heading heading-h3 font-large"},[t._v("Teamwork makes the dream works")]),t._v(" "),n("div",{staticClass:"bkseparator--25"}),t._v(" "),n("div",{staticClass:"title-separator w--80 color-red"})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(248).default,OffCanvasMobileMenu:n(245).default,SearchPopup:n(246).default,HeroDesignStudio:n(495).default,TeamCarouselFull:n(320).default,BestService:n(445).default,BrandLogoStyleOne:n(446).default,GoogleMap:n(280).default,FooterAgency:n(371).default})}}]);