if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const s=e=>n(e,d),o={module:{uri:d},exports:r,require:s};i[d]=Promise.all(c.map((e=>o[e]||s(e)))).then((e=>(f(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"5f57f2821fa5996c41baa0bc390768fb"},{url:"946.bundle.js",revision:"8745ccc6b5c6ed422e370428457db4bb"},{url:"app.webmanifest",revision:"7f3075ef6ec8f705dc9636fe6d37e6a1"},{url:"app~309f7e27.bundle.js",revision:"b211ac8cfb61527a37efc84d4bcea2f0"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~49ea73a0.bundle.js",revision:"71ff0dd71535dd91c7b451d7881a67d7"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~61a228d7.bundle.js",revision:"2bcfb4656aaf22864896e7d8de41faea"},{url:"app~ca0940c6.bundle.js",revision:"2f4dd7447fff9f8c9ed9f758b3240333"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"c7d57cac9ac798c50c8f33ceb65aa477"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"1a8440e272558448c3be9db464287959"},{url:"icons/icon-128x128.png",revision:"da28864e4470cb35d3af7c07ea37ab42"},{url:"icons/icon-144x144.png",revision:"76f7c2cd5bd490a9de088c195c3ce0c9"},{url:"icons/icon-152x152.png",revision:"2f108d7db2b2feda386b13547a0164db"},{url:"icons/icon-192x192.png",revision:"93238b3396fbade1d378f504a2884dd4"},{url:"icons/icon-384x384.png",revision:"736f720c10389677db67c047f5bdff4d"},{url:"icons/icon-512x512.png",revision:"c7962cc69310bdf2ee446f92637e61e9"},{url:"icons/icon-72x72.png",revision:"f0377b2f271451a4816515bf78aa2e05"},{url:"icons/icon-96x96.png",revision:"456c951f055c58c52749156d7d4491b0"},{url:"index.html",revision:"2f86fb9ff497d364ba024aee6c2931c8"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
