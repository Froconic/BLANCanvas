(window.webpackJsonp=window.webpackJsonp||[]).push([[175,188],{273:function(t){t.exports=JSON.parse('{"teamMembers":[{"id":1,"image":"/img/team/team-1/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":2,"image":"/img/team/team-1/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":3,"image":"/img/team/team-1/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":4,"image":"/img/team/team-1/team-4.jpg","name":"Peter Parker","position":"Marketing"},{"id":5,"image":"/img/team/team-3/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":6,"image":"/img/team/team-3/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":7,"image":"/img/team/team-3/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":8,"image":"/img/team/team-2/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":9,"image":"/img/team/team-2/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":10,"image":"/img/team/team-2/team-3.jpg","name":"Kashara May","position":"Founder"}]}')},277:function(t,e,n){"use strict";n.r(e);var r={props:["teamMember"]},m=n(20),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team team__style--3"},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.teamMember.image,alt:"team Images"}}),t._v(" "),n("div",{staticClass:"overlay",style:{backgroundImage:"url("+t.teamMember.image+")"}}),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"team-info text-center"},[n("div",{staticClass:"info"},[n("h5",[t._v(t._s(t.teamMember.name))]),t._v(" "),n("span",[t._v(t._s(t.teamMember.position))])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social-icon icon-solid-rounded icon-size-medium text-center"},[n("li",{staticClass:"facebook"},[n("a",{staticClass:"link",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook"}},[n("i",{staticClass:"fab fa-facebook"})])]),t._v(" "),n("li",{staticClass:"twitter"},[n("a",{staticClass:"link",attrs:{href:"https://twitter.com/","aria-label":"Twitter"}},[n("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),n("li",{staticClass:"instagram"},[n("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram"}},[n("i",{staticClass:"fab fa-instagram"})])])])}],!1,null,null,null);e.default=component.exports},426:function(t,e,n){},534:function(t,e,n){"use strict";n(426)},664:function(t,e,n){"use strict";n.r(e);var r=n(277),m=n(273),o={components:{TeamMemberThree:r.default},data:function(){return{data:m,swiperOption:{spaceBetween:60,autoplay:!1,loop:!0,speed:1e3,navigation:{nextEl:".ht-swiper-button",prevEl:".ht-swiper-button"},breakpoints:{1499:{slidesPerView:5},768:{slidesPerView:3},480:{slidesPerView:2}}}}}},l=(n(534),n(20)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brook-team-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80 swiper-arrow-hover"},[n("div",{staticClass:"container-fluid p-0"},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"brook-element-carousel"},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.teamMembers.slice(4,7),(function(t){return n("div",{key:t.id,staticClass:"swiper-slide"},[n("TeamMemberThree",{attrs:{teamMember:t}})],1)})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ht-swiper-button ht-swiper-button-prev ht-swiper-button-triangle"},[e("i",{staticClass:"ion ion-ios-arrow-back"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ht-swiper-button ht-swiper-button-next ht-swiper-button-triangle"},[e("i",{staticClass:"ion ion-ios-arrow-forward"})])}],!1,null,"2c322bba",null);e.default=component.exports;installComponents(component,{TeamMemberThree:n(277).default})}}]);