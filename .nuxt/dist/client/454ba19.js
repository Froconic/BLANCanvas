(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{420:function(t,n,e){},527:function(t,n,e){"use strict";e(420)},639:function(t,n,e){"use strict";e.r(n);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),n=t.querySelectorAll(".sub-menu"),e=t.querySelectorAll("a"),i=0;i<n.length;i++)n[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,c=0;c<o;c++)l[c].addEventListener("click",(function(t){v(t)}));for(var r=0;r<e.length;r++)e[r].addEventListener("click",(function(){f()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},f=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(e(527),e(20)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item"},[e("n-link",{attrs:{to:"/"}},[e("h1",[t._v("Home")])])],1),t._v(" "),e("li",{staticClass:"menu-item"},[e("n-link",{attrs:{to:"/events"}},[e("h1",[t._v("Events")])])],1),t._v(" "),e("li",{staticClass:"menu-item"},[e("n-link",{attrs:{to:"/about"}},[e("h1",[t._v("About")])])],1),t._v(" "),e("li",{staticClass:"menu-item"},[e("n-link",{attrs:{to:"#contact"}},[e("h1",[t._v("Contact")])])],1)])])])}),[],!1,null,null,null);n.default=component.exports}}]);