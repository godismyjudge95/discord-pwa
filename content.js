/**
 * insert PWA manifest JSON
 */
const metaLink = document.createElement("link");
metaLink.setAttribute("rel", "manifest");
metaLink.setAttribute("href", chrome.runtime.getURL("pwa/pwa-manifest.json"));
document.head.appendChild(metaLink);
