/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-1c36ad41af91d0ac7016.js"
  },
  {
    "url": "styles.831923b903ff6bd55d46.css"
  },
  {
    "url": "styles-b3cece111d132aac5ea7.js"
  },
  {
    "url": "commons-3a58bbee996911d492b4.js"
  },
  {
    "url": "app-21a57d2c008a54416097.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c5f58849c2f4732d93c1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ad2e3d8962995aa3190ccfed73bd6bbf"
  },
  {
    "url": "google-fonts/s/assistant/v4/2sDcZGJYnIjSi6H75xkzamW5.woff2",
    "revision": "b9bf6f46eee2f0426ef118a3b6ca7b2b"
  },
  {
    "url": "google-fonts/s/assistant/v4/2sDZZGJYnIjSi6H75xk7t0GsBp0Y.woff2",
    "revision": "33686f6f4e20543189a6e340e99df672"
  },
  {
    "url": "google-fonts/s/secularone/v4/8QINdiTajsj_87rMuMdKyqDgOOg.woff2",
    "revision": "0b924c8bb5d37fa79d29252e2359e001"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
  },
  {
    "url": "manifest.json",
    "revision": "229126f283bc94907f4916a0e9ab657a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8b4735b9eb6fa3853598f07fda50e5dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-21a57d2c008a54416097.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
