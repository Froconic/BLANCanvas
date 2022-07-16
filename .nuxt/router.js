import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49615888 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b5591aea = () => interopDefault(import('..\\pages\\about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _b53cebe8 = () => interopDefault(import('..\\pages\\about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _b520bce6 = () => interopDefault(import('..\\pages\\about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _0a5cd693 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _78ea2adb = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _4ffe5388 = () => interopDefault(import('..\\pages\\contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _63cfaa9c = () => interopDefault(import('..\\pages\\contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _5c6ee47c = () => interopDefault(import('..\\pages\\default.vue' /* webpackChunkName: "pages/default" */))
const _68472aa4 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _ca76425e = () => interopDefault(import('..\\pages\\events\\event-details.vue' /* webpackChunkName: "pages/events/event-details" */))
const _3ce088cc = () => interopDefault(import('..\\pages\\events\\_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _614c54a2 = () => interopDefault(import('..\\pages\\home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _3e95b290 = () => interopDefault(import('..\\pages\\home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _b65247f6 = () => interopDefault(import('..\\pages\\home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _465017ca = () => interopDefault(import('..\\pages\\home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _4a39c513 = () => interopDefault(import('..\\pages\\home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _31cbdb6c = () => interopDefault(import('..\\pages\\home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _64004243 = () => interopDefault(import('..\\pages\\home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _4f9b00f5 = () => interopDefault(import('..\\pages\\home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _0849803a = () => interopDefault(import('..\\pages\\home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _aac0ab28 = () => interopDefault(import('..\\pages\\home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _32c9b041 = () => interopDefault(import('..\\pages\\home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _476c6268 = () => interopDefault(import('..\\pages\\home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _1efe72fe = () => interopDefault(import('..\\pages\\home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _ae9fa79e = () => interopDefault(import('..\\pages\\home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _4b0dc31a = () => interopDefault(import('..\\pages\\home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _3b1334e2 = () => interopDefault(import('..\\pages\\home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _0386d07a = () => interopDefault(import('..\\pages\\home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _3a4d87dc = () => interopDefault(import('..\\pages\\home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _6cfdc00a = () => interopDefault(import('..\\pages\\home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _13d66f5a = () => interopDefault(import('..\\pages\\home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _20be177a = () => interopDefault(import('..\\pages\\home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _59a42420 = () => interopDefault(import('..\\pages\\home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _b647b1b4 = () => interopDefault(import('..\\pages\\home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _e32afec8 = () => interopDefault(import('..\\pages\\home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _4975c0e2 = () => interopDefault(import('..\\pages\\home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _23bbbed2 = () => interopDefault(import('..\\pages\\home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _30feb37d = () => interopDefault(import('..\\pages\\home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _91806ec4 = () => interopDefault(import('..\\pages\\pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _37723641 = () => interopDefault(import('..\\pages\\pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _e5af2b10 = () => interopDefault(import('..\\pages\\services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _508a5ea8 = () => interopDefault(import('..\\pages\\services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _091b1c29 = () => interopDefault(import('..\\pages\\services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _0469ee1a = () => interopDefault(import('..\\pages\\team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _044dbf18 = () => interopDefault(import('..\\pages\\team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _a2dea89e = () => interopDefault(import('..\\pages\\team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _5de16453 = () => interopDefault(import('..\\pages\\blog\\blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _a0a0be64 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _2643c759 = () => interopDefault(import('..\\pages\\blog\\blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _95537ca2 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _57d76c84 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _a4be8b44 = () => interopDefault(import('..\\pages\\blog\\blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _50ed1184 = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _58e4cb9a = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _d26bfbdc = () => interopDefault(import('..\\pages\\blog\\blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _8e0971b6 = () => interopDefault(import('..\\pages\\blog\\blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _dd2da820 = () => interopDefault(import('..\\pages\\blog\\blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _6b02198c = () => interopDefault(import('..\\pages\\blog\\blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _2b6779e1 = () => interopDefault(import('..\\pages\\element\\accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _7137c468 = () => interopDefault(import('..\\pages\\element\\brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _08807179 = () => interopDefault(import('..\\pages\\element\\call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _3567e2c7 = () => interopDefault(import('..\\pages\\element\\carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _3ccd0cf6 = () => interopDefault(import('..\\pages\\element\\contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _4f9d0bf1 = () => interopDefault(import('..\\pages\\element\\dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _1a80ccee = () => interopDefault(import('..\\pages\\element\\flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _32787e80 = () => interopDefault(import('..\\pages\\element\\gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _573fe79c = () => interopDefault(import('..\\pages\\element\\icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _2b1a774b = () => interopDefault(import('..\\pages\\element\\instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _407b522e = () => interopDefault(import('..\\pages\\element\\lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _75d4ae44 = () => interopDefault(import('..\\pages\\element\\message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _0739ccc6 = () => interopDefault(import('..\\pages\\element\\pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _4f8f5a6e = () => interopDefault(import('..\\pages\\element\\tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _77971bd4 = () => interopDefault(import('..\\pages\\element\\team.vue' /* webpackChunkName: "pages/element/team" */))
const _273cd978 = () => interopDefault(import('..\\pages\\element\\testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _6c42e8cd = () => interopDefault(import('..\\pages\\portfolio\\portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _627d6cca = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _472e6624 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _769d4f96 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _a588944e = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _0bdc2077 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _0f40008b = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _708cfbe7 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _acf7a138 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _acdb7236 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _60274382 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _7bf5dff2 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _3b7fb6e5 = () => interopDefault(import('..\\pages\\blog\\category\\_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _320dec27 = () => interopDefault(import('..\\pages\\blog\\tag\\_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _09ab1763 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6c2152d2 = () => interopDefault(import('..\\pages\\portfolio\\_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _6919334d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _49615888,
    name: "about"
  }, {
    path: "/about-us-01",
    component: _b5591aea,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _b53cebe8,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _b520bce6,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _0a5cd693,
    name: "career"
  }, {
    path: "/contact",
    component: _78ea2adb,
    name: "contact"
  }, {
    path: "/contact-us-modern",
    component: _4ffe5388,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _63cfaa9c,
    name: "contact-us-with-map"
  }, {
    path: "/default",
    component: _5c6ee47c,
    name: "default"
  }, {
    path: "/events",
    component: _68472aa4,
    name: "events",
    children: [{
      path: "event-details",
      component: _ca76425e,
      name: "events-event-details"
    }, {
      path: ":slug?",
      component: _3ce088cc,
      name: "events-slug"
    }]
  }, {
    path: "/home-authentic-studio",
    component: _614c54a2,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _3e95b290,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _b65247f6,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _465017ca,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _4a39c513,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _31cbdb6c,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _64004243,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _4f9b00f5,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _0849803a,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _aac0ab28,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _32c9b041,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _476c6268,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _1efe72fe,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _ae9fa79e,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _4b0dc31a,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _3b1334e2,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _0386d07a,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _3a4d87dc,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _6cfdc00a,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _13d66f5a,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _20be177a,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _59a42420,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _b647b1b4,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _e32afec8,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _4975c0e2,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _23bbbed2,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _30feb37d,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _91806ec4,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _37723641,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _e5af2b10,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _508a5ea8,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _091b1c29,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _0469ee1a,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _044dbf18,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _a2dea89e,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _5de16453,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _a0a0be64,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _2643c759,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _95537ca2,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _57d76c84,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _a4be8b44,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _50ed1184,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _58e4cb9a,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _d26bfbdc,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _8e0971b6,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _dd2da820,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _6b02198c,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _2b6779e1,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _7137c468,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _08807179,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _3567e2c7,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _3ccd0cf6,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _4f9d0bf1,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _1a80ccee,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _32787e80,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _573fe79c,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _2b1a774b,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _407b522e,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _75d4ae44,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _0739ccc6,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _4f8f5a6e,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _77971bd4,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _273cd978,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _6c42e8cd,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _627d6cca,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _472e6624,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _769d4f96,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _a588944e,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _0bdc2077,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _0f40008b,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _708cfbe7,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _acf7a138,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _acdb7236,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _60274382,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _7bf5dff2,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _3b7fb6e5,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _320dec27,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _09ab1763,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _6c2152d2,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _6919334d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
