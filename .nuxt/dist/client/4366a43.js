(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{259:function(t){t.exports=JSON.parse('{"portfolios":[{"heading":"header 01","image":"/img/portfolio/portfolio-1/portfolio-1.jpg"}],"portfolioFeaturd":[{"id":1,"image":"/img/portfolio/portfolio-2/portfolio-01.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"},{"id":2,"image":"/img/portfolio/portfolio-2/portfolio-02.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Photography"},{"id":3,"image":"/img/portfolio/portfolio-2/portfolio-03.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Design"},{"id":4,"image":"/img/portfolio/portfolio-2/portfolio-04.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Marketing"},{"id":5,"image":"/img/portfolio/portfolio-2/portfolio-05.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"SEO"},{"id":6,"image":"/img/portfolio/portfolio-2/portfolio-06.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"}],"portfolioItems":[{"id":1,"image":"/img/portfolio/grid/caption-1.jpg","heading":"The Language of Designs","slug":"the-language-of-designs-1","category":"Design","filterClass":"creative digital"},{"id":2,"image":"/img/portfolio/grid/caption-2.jpg","heading":"B-sharp High-end Audio","slug":"b-sharp-high-end-audio-2","category":"Marketing","filterClass":"photography design"},{"id":3,"image":"/img/portfolio/grid/caption-3.jpg","heading":"Smart Sound System","slug":"smart-sound-system-3","category":"Photography","filterClass":"photography creative"},{"id":4,"image":"/img/portfolio/grid/caption-4.jpg","heading":"Awe-inspiring Projects","slug":"awe-inspiring-projects-4","category":"Life Style","filterClass":"design"},{"id":5,"image":"/img/portfolio/grid/caption-5.jpg","heading":"Gifts for Photography","slug":"gifts-for-photography-5","category":"Design","filterClass":"creative"},{"id":6,"image":"/img/portfolio/grid/caption-6.jpg","heading":"Enchanting Portrait Hacks","slug":"enchanting-portrait-hacks-6","category":"Photography","filterClass":"digital"},{"id":7,"image":"/img/portfolio/grid/caption-7.jpg","heading":"Digital Marketing Basics","slug":"digital-marketing-basics-7","category":"Design"},{"id":8,"image":"/img/portfolio/grid/caption-8.jpg","heading":"Measure Digital Progress","slug":"measure-digital-progress-8","filterClass":"digital design"},{"id":9,"image":"/img/portfolio/grid/caption-9.jpg","heading":"B-sharp High-end Audio","slug":"b-sharp-high-end-audio-9","category":"Design","filterClass":"digital"}]}')},330:function(t,o,e){"use strict";var r=e(11),l=e(331),n=e(172),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*c,"String",{padStart:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},331:function(t,o,e){var r=e(30),l=e(173),n=e(38);t.exports=function(t,o,e,c){var d=String(n(t)),f=d.length,m=void 0===e?" ":String(e),h=r(o);if(h<=f||""==m)return d;var v=h-f,y=l.call(m,Math.ceil(v/m.length));return y.length>v&&(y=y.slice(0,v)),c?y+d:d+y}},443:function(t,o,e){"use strict";e.r(o);e(12),e(32),e(33),e(330);var r=e(259),l={data:function(){return{data:r,swiperOption:{slidesPerView:"auto",spaceBetween:30,autoplay:!1,loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,o,i){var a=100/i*o,e=o.toString(),s=i.toString();return'<div class="fraction"><span class="current">'+(e=e.padStart(2,"0"))+'</span><span class="separator"> / </span><span class="total">'+(s=s.padStart(2,"0"))+'</span></div><div class="progressbar"><div class="filled" data-width="'+a+'" style="width: '+a+'% "></div></div>'}}}}}},n=e(20),component=Object(n.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"bk-portfolio-area creative-portfolio section-pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"section-title--between wow move-up"},[t._m(0),t._v(" "),e("div",{staticClass:"section-btn mt_mobile--30"},[e("n-link",{staticClass:"button-text",attrs:{to:"/"}},[e("span",[t._v("View all projects")]),t._v(" "),e("i",{staticClass:"fa fa-arrow-right"})])],1)])])])]),t._v(" "),e("div",{staticClass:"portfolio-wrapper mt--40 wow move-up"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"porfolio-swip-horizontal",staticStyle:{overflow:"hidden"}},[e("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.portfolioFeaturd,(function(o){return e("div",{key:o.i,staticClass:"portfolio portfolio_style--2 mt--30 swiper-slide"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:o.image,alt:o.alt}})]),t._v(" "),e("div",{staticClass:"portfolio-overlay"}),t._v(" "),e("div",{staticClass:"port-overlay-info"},[e("div",{staticClass:"content"},[e("h3",{staticClass:"port-title"},[t._v(t._s(o.title))]),t._v(" "),e("div",{staticClass:"category"},[t._v(t._s(o.category))])])])])})),0),t._v(" "),e("div",{staticClass:"swiper-pagination"})],1)])])])])])}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"title"},[e("h3",{staticClass:"theme-creative"},[t._v(" Featured "),e("span",[t._v("Projects")])])])}],!1,null,null,null);o.default=component.exports}}]);