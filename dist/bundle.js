!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.InlineStyledElements=t():n.InlineStyledElements=t()}(window,(function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=9)}([function(n,t,e){var o=e(1),r=e(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,t,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function l(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},o=[],r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],C=e[s]||0,u="".concat(s," ").concat(C);e[s]=C+1;var c=l(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(a[c].references++,a[c].updater(d)):a.push({identifier:u,updater:m(d,t),references:1}),o.push(u)}return o}function C(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,c=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function d(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=c(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,p=0;function m(n,t){var e,o,r;if(t.singleton){var i=p++;e=g||(g=C(t)),o=d.bind(null,e,i,!1),r=d.bind(null,e,i,!0)}else e=C(t),o=f.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=l(e[o]);a[r].references--}for(var i=s(n,t),C=0;C<e.length;C++){var u=l(e[C]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,".info-icon,\n.question-icon,\n.d-icon,\n.external-link-icon {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 18px;\n    height: 18px;\n    margin-bottom: -3px;\n    text-indent: 100%;\n    position: relative;\n    display: inline-block;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: 100% auto;\n}\n\n.info-icon {\n    background-image: url(\"data:image/svg+xml,%3Csvg width='17px' height='17px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(0.727037,0,0,0.727037,1.641,9.79485)'%3E%3Cg transform='matrix(16.5054,0,0,16.5054,6.92537,4.92018)'%3E%3Cpath d='M0.243,-0.513L0.243,0L0.062,0L0.062,-0.513L0.243,-0.513ZM0.05,-0.71C0.05,-0.724 0.053,-0.737 0.058,-0.75C0.063,-0.762 0.071,-0.773 0.08,-0.782C0.089,-0.791 0.1,-0.799 0.113,-0.804C0.125,-0.809 0.138,-0.812 0.152,-0.812C0.166,-0.812 0.179,-0.809 0.192,-0.804C0.204,-0.799 0.215,-0.791 0.224,-0.782C0.233,-0.773 0.241,-0.762 0.246,-0.75C0.251,-0.737 0.254,-0.724 0.254,-0.71C0.254,-0.696 0.251,-0.683 0.246,-0.671C0.241,-0.658 0.233,-0.647 0.224,-0.638C0.215,-0.629 0.204,-0.621 0.192,-0.616C0.179,-0.611 0.166,-0.608 0.152,-0.608C0.138,-0.608 0.125,-0.611 0.113,-0.616C0.1,-0.621 0.089,-0.629 0.08,-0.638C0.071,-0.647 0.063,-0.658 0.058,-0.671C0.053,-0.683 0.05,-0.696 0.05,-0.71Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3C/g%3E%3Cg transform='matrix(1.28371,0,0,1.28371,-2.83947,-1.15368)'%3E%3Cpath d='M8.833,1.431C12.194,1.431 14.923,4.159 14.923,7.52C14.923,10.881 12.194,13.61 8.833,13.61C5.472,13.61 2.744,10.881 2.744,7.52C2.744,4.159 5.472,1.431 8.833,1.431ZM8.833,2.599C11.549,2.599 13.754,4.804 13.754,7.52C13.754,10.236 11.549,12.441 8.833,12.441C6.117,12.441 3.912,10.236 3.912,7.52C3.912,4.804 6.117,2.599 8.833,2.599Z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n}\n\n.question-icon {\n    background-image: url(\"data:image/svg+xml,%3Csvg width='17px' height='17px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(0.727037,0,0,0.727037,-0.200998,9.44685)'%3E%3Cg transform='matrix(16.5054,0,0,16.5054,6.92537,4.92018)'%3E%3Cpath d='M0.208,-0.253L0.208,-0.448C0.216,-0.447 0.223,-0.446 0.23,-0.445C0.237,-0.444 0.243,-0.443 0.249,-0.443C0.267,-0.443 0.284,-0.446 0.3,-0.451C0.316,-0.456 0.33,-0.462 0.342,-0.471C0.353,-0.48 0.362,-0.49 0.369,-0.503C0.376,-0.515 0.379,-0.528 0.379,-0.543C0.379,-0.563 0.372,-0.58 0.359,-0.595C0.346,-0.61 0.328,-0.617 0.305,-0.617C0.284,-0.617 0.268,-0.61 0.256,-0.596C0.243,-0.582 0.237,-0.564 0.237,-0.541L0.038,-0.541C0.038,-0.575 0.045,-0.606 0.059,-0.635C0.072,-0.663 0.091,-0.688 0.116,-0.709C0.14,-0.729 0.169,-0.746 0.202,-0.758C0.235,-0.769 0.27,-0.775 0.309,-0.775C0.348,-0.775 0.384,-0.769 0.417,-0.756C0.449,-0.743 0.477,-0.725 0.5,-0.703C0.523,-0.681 0.541,-0.656 0.554,-0.627C0.567,-0.598 0.573,-0.569 0.573,-0.538C0.573,-0.438 0.513,-0.367 0.392,-0.325L0.392,-0.253L0.208,-0.253ZM0.188,-0.096C0.188,-0.112 0.191,-0.127 0.197,-0.142C0.203,-0.156 0.211,-0.168 0.222,-0.179C0.233,-0.19 0.245,-0.198 0.26,-0.204C0.274,-0.21 0.289,-0.213 0.305,-0.213C0.321,-0.213 0.336,-0.21 0.351,-0.204C0.365,-0.198 0.377,-0.19 0.388,-0.179C0.399,-0.168 0.407,-0.156 0.413,-0.142C0.419,-0.127 0.422,-0.112 0.422,-0.096C0.422,-0.08 0.419,-0.065 0.413,-0.051C0.407,-0.036 0.399,-0.024 0.388,-0.013C0.377,-0.002 0.365,0.006 0.351,0.012C0.336,0.018 0.321,0.021 0.305,0.021C0.289,0.021 0.274,0.018 0.26,0.012C0.245,0.006 0.233,-0.002 0.222,-0.013C0.211,-0.024 0.203,-0.036 0.197,-0.051C0.191,-0.065 0.188,-0.08 0.188,-0.096Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3C/g%3E%3Cg transform='matrix(1.28371,0,0,1.28371,-2.83947,-1.15368)'%3E%3Cpath d='M8.833,1.431C12.194,1.431 14.923,4.159 14.923,7.52C14.923,10.881 12.194,13.61 8.833,13.61C5.472,13.61 2.744,10.881 2.744,7.52C2.744,4.159 5.472,1.431 8.833,1.431ZM8.833,2.599C11.549,2.599 13.754,4.804 13.754,7.52C13.754,10.236 11.549,12.441 8.833,12.441C6.117,12.441 3.912,10.236 3.912,7.52C3.912,4.804 6.117,2.599 8.833,2.599Z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n}\n\n.d-icon {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17px' height='17px' viewBox='0 0 17 17' version='1.1' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(0.727037,0,0,0.727037,-0.936665,9.44685)'%3E%3Cg transform='matrix(16.5054,0,0,16.5054,6.92537,4.92018)'%3E%3Cpath d='M0.275,-0.166L0.32,-0.166C0.354,-0.166 0.384,-0.171 0.411,-0.182C0.438,-0.193 0.46,-0.207 0.479,-0.226C0.497,-0.245 0.511,-0.267 0.521,-0.293C0.53,-0.318 0.535,-0.346 0.535,-0.377C0.535,-0.407 0.53,-0.435 0.52,-0.461C0.51,-0.487 0.496,-0.509 0.478,-0.528C0.459,-0.547 0.437,-0.561 0.41,-0.572C0.383,-0.583 0.353,-0.588 0.32,-0.588L0.275,-0.588L0.275,-0.166ZM0.079,-0.754L0.369,-0.754C0.42,-0.754 0.468,-0.744 0.514,-0.723C0.559,-0.702 0.598,-0.675 0.632,-0.641C0.665,-0.606 0.692,-0.566 0.711,-0.521C0.73,-0.475 0.74,-0.427 0.74,-0.377C0.74,-0.328 0.731,-0.28 0.712,-0.235C0.693,-0.189 0.666,-0.149 0.633,-0.114C0.599,-0.079 0.56,-0.052 0.515,-0.031C0.47,-0.01 0.421,0 0.369,0L0.079,0L0.079,-0.754Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3C/g%3E%3Cg transform='matrix(1.28371,0,0,1.28371,-2.83947,-1.15368)'%3E%3Cpath d='M8.833,1.431C12.194,1.431 14.923,4.159 14.923,7.52C14.923,10.881 12.194,13.61 8.833,13.61C5.472,13.61 2.744,10.881 2.744,7.52C2.744,4.159 5.472,1.431 8.833,1.431ZM8.833,2.599C11.549,2.599 13.754,4.804 13.754,7.52C13.754,10.236 11.549,12.441 8.833,12.441C6.117,12.441 3.912,10.236 3.912,7.52C3.912,4.804 6.117,2.599 8.833,2.599Z'/%3E%3C/g%3E%3C/svg%3E%0A\");\n}\n\n.external-link-icon {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17px' height='17px' viewBox='0 0 17 17' version='1.1' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cpath d='M16.245,9.566C15.724,13.377 12.453,16.317 8.5,16.317C4.186,16.317 0.683,12.814 0.683,8.5C0.683,4.186 4.186,0.683 8.5,0.683C9.391,0.683 10.246,0.832 11.045,1.107L11.045,2.718C10.266,2.375 9.405,2.184 8.5,2.184C5.015,2.184 2.186,5.013 2.186,8.498C2.186,11.983 5.015,14.812 8.5,14.812C10.607,14.812 12.475,13.778 13.622,12.189L16.245,9.566Z'/%3E%3Cg transform='matrix(0.246421,0,0,0.246421,-1.60479,-3.26758)'%3E%3Cpath d='M74.9,38.9L62.2,51.6C61.8,52 61.3,52.2 60.7,52.2C60.4,52.2 60.2,52.1 59.9,52C59,51.6 58.6,51 58.6,50L58.6,43.7L53.3,43.7C46.2,43.7 41.4,45.1 38.8,48C36.2,51 35.4,56.2 36.4,63.6C36.5,64.1 36.2,64.5 35.7,64.7C35.5,64.7 35.4,64.8 35.3,64.8C34.9,64.8 34.7,64.7 34.4,64.4C34.2,64.1 33.9,63.7 33.7,63.4C33.5,63.1 33,62.3 32.4,61.1C31.8,60 31.2,58.9 30.8,57.8C30.3,56.7 29.9,55.5 29.5,54C29.1,52.5 28.9,51.2 28.9,50C28.9,48.9 28.9,47.9 29,47C29.1,46.1 29.2,45.1 29.5,44C29.7,42.9 30,42 30.4,41.1C30.8,40.2 31.3,39.3 32,38.4C32.7,37.5 33.4,36.7 34.3,36C35.2,35.3 36.2,34.6 37.4,34C38.6,33.4 40,32.8 41.5,32.4C43,32 44.8,31.6 46.8,31.4C48.8,31.2 51,31 53.3,31L58.6,31L58.6,24.7C58.6,23.8 59,23.1 59.9,22.7C60.2,22.6 60.5,22.5 60.7,22.5C61.3,22.5 61.8,22.7 62.2,23.1L74.9,35.8C75.3,36.2 75.5,36.7 75.5,37.3C75.5,37.9 75.3,38.5 74.9,38.9Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3C/svg%3E%0A\");\n}\n\n.inline-button {\n    color: #0066C2;\n    font-weight: bold;\n    font-variant: small-caps;\n}\n.inline-button:after {\n    content: \"\\BB\";\n    margin-left: 3px;\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([r]).join("\n")}var a,l,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t,e){"use strict";e.r(t),t.default='<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(0.727037,0,0,0.727037,1.641,9.79485)">\n        <g transform="matrix(16.5054,0,0,16.5054,6.92537,4.92018)">\n            <path d="M0.243,-0.513L0.243,0L0.062,0L0.062,-0.513L0.243,-0.513ZM0.05,-0.71C0.05,-0.724 0.053,-0.737 0.058,-0.75C0.063,-0.762 0.071,-0.773 0.08,-0.782C0.089,-0.791 0.1,-0.799 0.113,-0.804C0.125,-0.809 0.138,-0.812 0.152,-0.812C0.166,-0.812 0.179,-0.809 0.192,-0.804C0.204,-0.799 0.215,-0.791 0.224,-0.782C0.233,-0.773 0.241,-0.762 0.246,-0.75C0.251,-0.737 0.254,-0.724 0.254,-0.71C0.254,-0.696 0.251,-0.683 0.246,-0.671C0.241,-0.658 0.233,-0.647 0.224,-0.638C0.215,-0.629 0.204,-0.621 0.192,-0.616C0.179,-0.611 0.166,-0.608 0.152,-0.608C0.138,-0.608 0.125,-0.611 0.113,-0.616C0.1,-0.621 0.089,-0.629 0.08,-0.638C0.071,-0.647 0.063,-0.658 0.058,-0.671C0.053,-0.683 0.05,-0.696 0.05,-0.71Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n    <g transform="matrix(1.28371,0,0,1.28371,-2.83947,-1.15368)">\n        <path d="M8.833,1.431C12.194,1.431 14.923,4.159 14.923,7.52C14.923,10.881 12.194,13.61 8.833,13.61C5.472,13.61 2.744,10.881 2.744,7.52C2.744,4.159 5.472,1.431 8.833,1.431ZM8.833,2.599C11.549,2.599 13.754,4.804 13.754,7.52C13.754,10.236 11.549,12.441 8.833,12.441C6.117,12.441 3.912,10.236 3.912,7.52C3.912,4.804 6.117,2.599 8.833,2.599Z"/>\n    </g>\n</svg>\n'},function(n,t,e){"use strict";e.r(t),t.default='<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(0.727037,0,0,0.727037,-0.200998,9.44685)">\n        <g transform="matrix(16.5054,0,0,16.5054,6.92537,4.92018)">\n            <path d="M0.208,-0.253L0.208,-0.448C0.216,-0.447 0.223,-0.446 0.23,-0.445C0.237,-0.444 0.243,-0.443 0.249,-0.443C0.267,-0.443 0.284,-0.446 0.3,-0.451C0.316,-0.456 0.33,-0.462 0.342,-0.471C0.353,-0.48 0.362,-0.49 0.369,-0.503C0.376,-0.515 0.379,-0.528 0.379,-0.543C0.379,-0.563 0.372,-0.58 0.359,-0.595C0.346,-0.61 0.328,-0.617 0.305,-0.617C0.284,-0.617 0.268,-0.61 0.256,-0.596C0.243,-0.582 0.237,-0.564 0.237,-0.541L0.038,-0.541C0.038,-0.575 0.045,-0.606 0.059,-0.635C0.072,-0.663 0.091,-0.688 0.116,-0.709C0.14,-0.729 0.169,-0.746 0.202,-0.758C0.235,-0.769 0.27,-0.775 0.309,-0.775C0.348,-0.775 0.384,-0.769 0.417,-0.756C0.449,-0.743 0.477,-0.725 0.5,-0.703C0.523,-0.681 0.541,-0.656 0.554,-0.627C0.567,-0.598 0.573,-0.569 0.573,-0.538C0.573,-0.438 0.513,-0.367 0.392,-0.325L0.392,-0.253L0.208,-0.253ZM0.188,-0.096C0.188,-0.112 0.191,-0.127 0.197,-0.142C0.203,-0.156 0.211,-0.168 0.222,-0.179C0.233,-0.19 0.245,-0.198 0.26,-0.204C0.274,-0.21 0.289,-0.213 0.305,-0.213C0.321,-0.213 0.336,-0.21 0.351,-0.204C0.365,-0.198 0.377,-0.19 0.388,-0.179C0.399,-0.168 0.407,-0.156 0.413,-0.142C0.419,-0.127 0.422,-0.112 0.422,-0.096C0.422,-0.08 0.419,-0.065 0.413,-0.051C0.407,-0.036 0.399,-0.024 0.388,-0.013C0.377,-0.002 0.365,0.006 0.351,0.012C0.336,0.018 0.321,0.021 0.305,0.021C0.289,0.021 0.274,0.018 0.26,0.012C0.245,0.006 0.233,-0.002 0.222,-0.013C0.211,-0.024 0.203,-0.036 0.197,-0.051C0.191,-0.065 0.188,-0.08 0.188,-0.096Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n    <g transform="matrix(1.28371,0,0,1.28371,-2.83947,-1.15368)">\n        <path d="M8.833,1.431C12.194,1.431 14.923,4.159 14.923,7.52C14.923,10.881 12.194,13.61 8.833,13.61C5.472,13.61 2.744,10.881 2.744,7.52C2.744,4.159 5.472,1.431 8.833,1.431ZM8.833,2.599C11.549,2.599 13.754,4.804 13.754,7.52C13.754,10.236 11.549,12.441 8.833,12.441C6.117,12.441 3.912,10.236 3.912,7.52C3.912,4.804 6.117,2.599 8.833,2.599Z"/>\n    </g>\n</svg>\n'},function(n,t,e){"use strict";e.r(t),t.default='<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(0.727037,0,0,0.727037,-0.936665,9.44685)">\n        <g transform="matrix(16.5054,0,0,16.5054,6.92537,4.92018)">\n            <path d="M0.275,-0.166L0.32,-0.166C0.354,-0.166 0.384,-0.171 0.411,-0.182C0.438,-0.193 0.46,-0.207 0.479,-0.226C0.497,-0.245 0.511,-0.267 0.521,-0.293C0.53,-0.318 0.535,-0.346 0.535,-0.377C0.535,-0.407 0.53,-0.435 0.52,-0.461C0.51,-0.487 0.496,-0.509 0.478,-0.528C0.459,-0.547 0.437,-0.561 0.41,-0.572C0.383,-0.583 0.353,-0.588 0.32,-0.588L0.275,-0.588L0.275,-0.166ZM0.079,-0.754L0.369,-0.754C0.42,-0.754 0.468,-0.744 0.514,-0.723C0.559,-0.702 0.598,-0.675 0.632,-0.641C0.665,-0.606 0.692,-0.566 0.711,-0.521C0.73,-0.475 0.74,-0.427 0.74,-0.377C0.74,-0.328 0.731,-0.28 0.712,-0.235C0.693,-0.189 0.666,-0.149 0.633,-0.114C0.599,-0.079 0.56,-0.052 0.515,-0.031C0.47,-0.01 0.421,0 0.369,0L0.079,0L0.079,-0.754Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n    <g transform="matrix(1.28371,0,0,1.28371,-2.83947,-1.15368)">\n        <path d="M8.833,1.431C12.194,1.431 14.923,4.159 14.923,7.52C14.923,10.881 12.194,13.61 8.833,13.61C5.472,13.61 2.744,10.881 2.744,7.52C2.744,4.159 5.472,1.431 8.833,1.431ZM8.833,2.599C11.549,2.599 13.754,4.804 13.754,7.52C13.754,10.236 11.549,12.441 8.833,12.441C6.117,12.441 3.912,10.236 3.912,7.52C3.912,4.804 6.117,2.599 8.833,2.599Z"/>\n    </g>\n</svg>\n'},function(n,t,e){"use strict";e.r(t),t.default='<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <path d="M16.245,9.566C15.724,13.377 12.453,16.317 8.5,16.317C4.186,16.317 0.683,12.814 0.683,8.5C0.683,4.186 4.186,0.683 8.5,0.683C9.391,0.683 10.246,0.832 11.045,1.107L11.045,2.718C10.266,2.375 9.405,2.184 8.5,2.184C5.015,2.184 2.186,5.013 2.186,8.498C2.186,11.983 5.015,14.812 8.5,14.812C10.607,14.812 12.475,13.778 13.622,12.189L16.245,9.566Z"/>\n    <g transform="matrix(0.246421,0,0,0.246421,-1.60479,-3.26758)">\n        <path d="M74.9,38.9L62.2,51.6C61.8,52 61.3,52.2 60.7,52.2C60.4,52.2 60.2,52.1 59.9,52C59,51.6 58.6,51 58.6,50L58.6,43.7L53.3,43.7C46.2,43.7 41.4,45.1 38.8,48C36.2,51 35.4,56.2 36.4,63.6C36.5,64.1 36.2,64.5 35.7,64.7C35.5,64.7 35.4,64.8 35.3,64.8C34.9,64.8 34.7,64.7 34.4,64.4C34.2,64.1 33.9,63.7 33.7,63.4C33.5,63.1 33,62.3 32.4,61.1C31.8,60 31.2,58.9 30.8,57.8C30.3,56.7 29.9,55.5 29.5,54C29.1,52.5 28.9,51.2 28.9,50C28.9,48.9 28.9,47.9 29,47C29.1,46.1 29.2,45.1 29.5,44C29.7,42.9 30,42 30.4,41.1C30.8,40.2 31.3,39.3 32,38.4C32.7,37.5 33.4,36.7 34.3,36C35.2,35.3 36.2,34.6 37.4,34C38.6,33.4 40,32.8 41.5,32.4C43,32 44.8,31.6 46.8,31.4C48.8,31.2 51,31 53.3,31L58.6,31L58.6,24.7C58.6,23.8 59,23.1 59.9,22.7C60.2,22.6 60.5,22.5 60.7,22.5C61.3,22.5 61.8,22.7 62.2,23.1L74.9,35.8C75.3,36.2 75.5,36.7 75.5,37.3C75.5,37.9 75.3,38.5 74.9,38.9Z" style="fill-rule:nonzero;"/>\n    </g>\n</svg>\n'},function(n,t,e){"use strict";e.r(t),t.default='<svg width="40px" height="17px" viewBox="0 0 40 17" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:2;">\n    <g transform="matrix(1.036,0,0,1.35571,-0.766036,-3.59938)">\n        <path d="M37.951,6.308C37.951,4.864 36.416,3.692 34.527,3.692L5.562,3.692C3.673,3.692 2.138,4.864 2.138,6.308L2.138,11.541C2.138,12.985 3.673,14.158 5.562,14.158L34.527,14.158C36.416,14.158 37.951,12.985 37.951,11.541L37.951,6.308Z" style="fill:none;stroke:black;stroke-opacity:0.48;stroke-width:0.69px;stroke-dasharray:0.69,1.38,0,0;"/>\n    </g>\n    <g transform="matrix(1.00463,0,0,1.00463,-2.99336,7.94206)">\n        <g transform="matrix(11.5792,0,0,11.5792,6.92537,4.92018)">\n            <path d="M0.409,0L0.053,0L0.053,-0.754L0.256,-0.754L0.256,-0.181L0.409,-0.181L0.409,0Z" style="fill-rule:nonzero;"/>\n        </g>\n        <g transform="matrix(11.5792,0,0,11.5792,11.7538,4.92018)">\n            <rect x="0.053" y="-0.754" width="0.204" height="0.754" style="fill-rule:nonzero;"/>\n        </g>\n        <g transform="matrix(11.5792,0,0,11.5792,15.3327,4.92018)">\n            <path d="M0.053,0L0.053,-0.754L0.247,-0.754L0.349,-0.489C0.355,-0.474 0.361,-0.456 0.368,-0.436C0.375,-0.415 0.383,-0.392 0.391,-0.366L0.412,-0.299C0.405,-0.365 0.399,-0.421 0.395,-0.467C0.391,-0.514 0.389,-0.553 0.389,-0.584L0.389,-0.754L0.583,-0.754L0.583,0L0.389,0L0.287,-0.277C0.276,-0.307 0.266,-0.335 0.258,-0.361C0.249,-0.386 0.241,-0.411 0.235,-0.435C0.239,-0.382 0.242,-0.335 0.244,-0.296C0.246,-0.257 0.247,-0.222 0.247,-0.192L0.247,0L0.053,0Z" style="fill-rule:nonzero;"/>\n        </g>\n        <g transform="matrix(11.5792,0,0,11.5792,22.6997,4.92018)">\n            <path d="M0.606,0L0.386,0L0.251,-0.348L0.256,0L0.053,0L0.053,-0.754L0.256,-0.754L0.251,-0.431L0.371,-0.754L0.586,-0.754L0.423,-0.39L0.606,0Z" style="fill-rule:nonzero;"/>\n        </g>\n        <g transform="matrix(12.6233,0,0,12.6233,31.0563,4.01852)">\n            <path d="M0.423,-0.258L0.297,-0.435L0.397,-0.503L0.569,-0.258L0.397,-0.012L0.294,-0.084L0.423,-0.258ZM0.174,-0.258L0.048,-0.435L0.148,-0.503L0.32,-0.258L0.148,-0.012L0.045,-0.084L0.174,-0.258Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n</svg>\n'},function(n,t,e){"use strict";function o(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function r(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}e.r(t),e.d(t,"InfoIcon",(function(){return a})),e.d(t,"QuestionIcon",(function(){return l})),e.d(t,"DIcon",(function(){return s})),e.d(t,"ExternalLinkIcon",(function(){return C})),e.d(t,"InlineButton",(function(){return u}));var i=function(n){var t=n.toolClass,e=n.toolTag,o=n.toolIcon;return function(){function n(t){var o=t.api;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.api=o,this.button=null,this.tag=e,this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return r(n,null,[{key:"CSS",get:function(){return t}}]),r(n,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(n){if(n){var e=this.api.selection.findParentTag(this.tag,t);e?this.unwrap(e):this.wrap(n)}}},{key:"wrap",value:function(n){var e=document.createElement(this.tag);e.classList.add(t),e.appendChild(n.extractContents()),n.insertNode(e),this.api.selection.expandToTag(e)}},{key:"unwrap",value:function(n){this.api.selection.expandToTag(n);var t=window.getSelection(),e=t.getRangeAt(0),o=e.extractContents();n.parentNode.removeChild(n),e.insertNode(o),t.removeAllRanges(),t.addRange(e)}},{key:"checkState",value:function(){var n=this.api.selection.findParentTag(this.tag,t);this.button.classList.toggle(this.iconClasses.active,!!n)}},{key:"toolboxIcon",get:function(){return o}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{span:{class:!0}}}}]),n}()};e(0).toString();var a=i({toolClass:"info-icon",toolTag:"SPAN",toolIcon:e(4).default}),l=i({toolClass:"question-icon",toolTag:"SPAN",toolIcon:e(5).default}),s=i({toolClass:"d-icon",toolTag:"SPAN",toolIcon:e(6).default}),C=i({toolClass:"external-link-icon",toolTag:"SPAN",toolIcon:e(7).default}),u=i({toolClass:"inline-button",toolTag:"SPAN",toolIcon:e(8).default})}])}));