(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{261:function(t,e,l){"use strict";l.d(e,"a",(function(){return o}));l(10),l(12),l(32),l(33);var o={methods:{slugify:function(text){return null==text?void 0:text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}},306:function(t,e,l){"use strict";l.r(e);var o={mixins:[l(261).a],props:["blog","addClass","readMoreButton"]},n=l(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-grid blog-standard",class:t.addClass},[l("div",{staticClass:"post-thumb"},[l("n-link",{attrs:{to:"/blog/"+t.blog.slug}},[l("img",{attrs:{src:t.blog.image,alt:t.blog.title}})])],1),t._v(" "),l("div",{staticClass:"post-content text-center"},[l("div",{staticClass:"post-inner"},[l("div",{staticClass:"post-meta mb--10"},[l("div",{staticClass:"post-date"},[t._v("\n                    "+t._s(t.blog.date)+"\n                ")]),t._v(" "),l("div",{staticClass:"post-category"},t._l(t.blog.categories.slice(0,1),(function(e,i){return l("n-link",{key:i,attrs:{to:"/blog/category/"+t.slugify(e)}},[t._v(t._s(e))])})),1)]),t._v(" "),l("h5",{staticClass:"heading heading-h5"},[l("n-link",{attrs:{to:"/blog/"+t.blog.slug}},[t._v("\n                    "+t._s(t.blog.title)+"\n                ")])],1),t._v(" "),l("n-link",{directives:[{name:"show",rawName:"v-show",value:t.readMoreButton,expression:"readMoreButton"}],staticClass:"post-read-more",attrs:{to:"/blog/"+t.blog.slug}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);