/**
 * insert PWA manifest JSON
 */
const metaLink = document.createElement("link");
metaLink.setAttribute("rel", "manifest");
metaLink.setAttribute(
  "href",
  "https://raw.githubusercontent.com/godismyjudge95/discord-pwa/main/pwa/pwa-manifest.json",
);
document.head.appendChild(metaLink);
