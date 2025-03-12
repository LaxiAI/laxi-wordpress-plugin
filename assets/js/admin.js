/*! For license information please see admin.js.LICENSE.txt */
(()=>{"use strict";var e={20:(e,t,n)=>{var r=n(594),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},206:e=>{e.exports=ReactDOM},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},338:(e,t,n)=>{var r=n(206);t.H=r.createRoot,r.hydrateRoot},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},594:e=>{e.exports=React},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},704:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,'*, ::before, ::after {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n    --tw-contain-size:  ;\n    --tw-contain-layout:  ;\n    --tw-contain-paint:  ;\n    --tw-contain-style:  ;\n}\n::backdrop {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n    --tw-contain-size:  ;\n    --tw-contain-layout:  ;\n    --tw-contain-paint:  ;\n    --tw-contain-style:  ;\n}\n.container {\n    width: 100%;\n}\n@media (min-width: 640px) {\n    .container {\n        max-width: 640px;\n    }\n}\n@media (min-width: 768px) {\n    .container {\n        max-width: 768px;\n    }\n}\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1024px;\n    }\n}\n@media (min-width: 1280px) {\n    .container {\n        max-width: 1280px;\n    }\n}\n@media (min-width: 1536px) {\n    .container {\n        max-width: 1536px;\n    }\n}\n.pointer-events-none {\n    pointer-events: none;\n}\n.block {\n    display: block;\n}\n.flex {\n    display: flex;\n}\n.inline-flex {\n    display: inline-flex;\n}\n.h-4 {\n    height: 1rem;\n}\n.h-5 {\n    height: 1.25rem;\n}\n.h-6 {\n    height: 1.5rem;\n}\n.w-11 {\n    width: 2.75rem;\n}\n.w-4 {\n    width: 1rem;\n}\n.w-5 {\n    width: 1.25rem;\n}\n.w-6 {\n    width: 1.5rem;\n}\n.flex-1 {\n    flex: 1 1 0%;\n}\n.shrink-0 {\n    flex-shrink: 0;\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.items-center {\n    align-items: center;\n}\n.justify-between {\n    justify-content: space-between;\n}\n.gap-4 {\n    gap: 1rem;\n}\n.rounded-full {\n    border-radius: 9999px;\n}\n.border-2 {\n    border-width: 2px;\n}\n.border-transparent {\n    border-color: transparent;\n}\n.bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.shadow-lg {\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ring-0 {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.transition-colors {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n\n/* Custom styles for WordPress admin integration */\n#laxi-admin-root {\n    max-width: 800px;\n    margin: 2rem auto;\n    padding: 0 1.5rem;\n}\n\n/* Brand Colors and Variables */\n:root {\n    --laxi-primary: #6D51E0;\n    --laxi-primary-dark: #6D51E0;\n    --laxi-primary-light: #6D51E0;\n    --text-primary: #1a1a1a;\n    --text-secondary: #666666;\n    --background: #f9fafb;\n    --success: #22c55e;\n    --error: #ef4444;\n    --border: #e5e7eb;\n    --disabled: #d1d5db;\n}\n\n/* Reset and Base Styles */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \'Inter\', system-ui, -apple-system, sans-serif;\n    color: var(--text-primary);\n    background: var(--background);\n    line-height: 1.5;\n}\n\n/* Header with Logo */\n.laxi-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5rem;\n    background: white;\n    border-radius: 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    margin-bottom: 2rem;\n}\n\n.laxi-logo {\n    height: 2.5rem;\n    width: auto;\n}\n\n/* Auth Button */\n.laxi-auth-button {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--laxi-primary);\n    color: white;\n    padding: 0.75rem 1.25rem;\n    border-radius: 0.5rem;\n    font-weight: 600;\n    text-decoration: none;\n    transition: all 0.2s ease;\n    border: none;\n    cursor: pointer;\n}\n\n.laxi-auth-button:hover:not(.laxi-button-disabled) {\n    background: var(--laxi-primary-dark);\n    transform: translateY(-1px);\n}\n\n.laxi-auth-button:active:not(.laxi-button-disabled) {\n    transform: translateY(0);\n}\n\n/* Disabled Button Styles */\n.laxi-button-disabled {\n    background: var(--disabled);\n    color: #9ca3af;\n    cursor: not-allowed;\n    pointer-events: none;\n    transform: none;\n    opacity: 0.7;\n}\n\n/* Step Guide */\n.step-container {\n    display: grid;\n    gap: 1rem;\n    margin: 2rem 0;\n}\n\n.step-item {\n    background: white;\n    border-radius: 1rem;\n    padding: 1.5rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    transition: all 0.2s ease;\n}\n\n.step-item:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.step-header {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.step-number {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 2rem;\n    height: 2rem;\n    background: var(--laxi-primary);\n    color: white;\n    border-radius: 50%;\n    font-weight: 600;\n}\n\n.step-title {\n    font-size: 1.125rem;\n    font-weight: 600;\n    color: var(--text-primary);\n}\n\n/* Status Indicators */\n.status-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 50%;\n}\n\n.status-complete {\n    color: var(--success);\n}\n\n.status-pending {\n    color: var(--text-secondary);\n}\n\n/* Toggle Switch Customization */\n.laxi-switch {\n    --switch-width: 3rem;\n    --switch-height: 1.75rem;\n    --switch-padding: 0.125rem;\n\n    position: relative;\n    width: var(--switch-width);\n    height: var(--switch-height);\n    background-color: var(--border);\n    border-radius: 999px;\n    transition: all 0.2s ease;\n}\n\n.laxi-switch[data-state="checked"] {\n    background-color: var(--laxi-primary);\n}\n\n.laxi-switch-thumb {\n    width: calc(var(--switch-height) - 2 * var(--switch-padding));\n    height: calc(var(--switch-height) - 2 * var(--switch-padding));\n    background-color: white;\n    border-radius: 50%;\n    transition: transform 0.2s ease;\n}\n\n.laxi-switch[data-state="checked"] .laxi-switch-thumb {\n    transform: translateX(calc(var(--switch-width) - var(--switch-height)));\n}\n\n/* Responsive Design */\n@media (max-width: 640px) {\n    #laxi-admin-root {\n        margin: 1rem;\n        padding: 0;\n    }\n\n    .laxi-header {\n        flex-direction: column;\n        gap: 1rem;\n        text-align: center;\n    }\n\n    .step-item {\n        padding: 1rem;\n    }\n}\n.focus-visible\\:outline-none:focus-visible {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.focus-visible\\:ring-2:focus-visible {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-offset-2:focus-visible {\n    --tw-ring-offset-width: 2px;\n}\n.focus-visible\\:ring-offset-white:focus-visible {\n    --tw-ring-offset-color: #fff;\n}\n.disabled\\:cursor-not-allowed:disabled {\n    cursor: not-allowed;\n}\n.disabled\\:opacity-50:disabled {\n    opacity: 0.5;\n}\n.data-\\[state\\=checked\\]\\:translate-x-5[data-state="checked"] {\n    --tw-translate-x: 1.25rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state="unchecked"] {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.data-\\[state\\=checked\\]\\:bg-blue-600[data-state="checked"] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\n}\n.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state="unchecked"] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}',""]);const s=i},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},848:(e,t,n)=>{e.exports=n(20)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(594),a=n.n(r),o=n(338);function i(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function s(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function c(...e){return t=>{let n=!1;const r=e.map((e=>{const r=s(e,t);return n||"function"!=typeof r||(n=!0),r}));if(n)return()=>{for(let t=0;t<r.length;t++){const n=r[t];"function"==typeof n?n():s(e[t],null)}}}}var l=n(848);function u(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const a=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{});return r.useMemo((()=>({[`__scope${t.scopeName}`]:a})),[a])}};return n.scopeName=t.scopeName,n}function d(e){const t=r.useRef(e);return r.useEffect((()=>{t.current=e})),r.useMemo((()=>(...e)=>t.current?.(...e)),[])}var f=Boolean(globalThis?.document)?r.useLayoutEffect:()=>{};n(206);var p=r.forwardRef(((e,t)=>{const{children:n,...a}=e,o=r.Children.toArray(n),i=o.find(m);if(i){const e=i.props.children,n=o.map((t=>t===i?r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null:t));return(0,l.jsx)(h,{...a,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,l.jsx)(h,{...a,ref:t,children:n})}));p.displayName="Slot";var h=r.forwardRef(((e,t)=>{const{children:n,...a}=e;if(r.isValidElement(n)){const e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}(n),o=function(e,t){const n={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...e)=>{o(...e),a(...e)}:a&&(n[r]=a):"style"===r?n[r]={...a,...o}:"className"===r&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props);return n.type!==r.Fragment&&(o.ref=t?c(t,e):e),r.cloneElement(n,o)}return r.Children.count(n)>1?r.Children.only(null):null}));h.displayName="SlotClone";var w=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function m(e){return r.isValidElement(e)&&e.type===w}var v=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const n=r.forwardRef(((e,n)=>{const{asChild:r,...a}=e,o=r?p:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...a,ref:n})}));return n.displayName=`Primitive.${t}`,{...e,[t]:n}}),{}),g="Switch",[b,y]=function(e,t=[]){let n=[];const a=()=>{const t=n.map((e=>r.createContext(e)));return function(n){const a=n?.[e]||t;return r.useMemo((()=>({[`__scope${e}`]:{...n,[e]:a}})),[n,a])}};return a.scopeName=e,[function(t,a){const o=r.createContext(a),i=n.length;n=[...n,a];const s=t=>{const{scope:n,children:a,...s}=t,c=n?.[e]?.[i]||o,u=r.useMemo((()=>s),Object.values(s));return(0,l.jsx)(c.Provider,{value:u,children:a})};return s.displayName=t+"Provider",[s,function(n,s){const c=s?.[e]?.[i]||o,l=r.useContext(c);if(l)return l;if(void 0!==a)return a;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},u(a,...t)]}(g),[x,k]=b(g),E=r.forwardRef(((e,t)=>{const{__scopeSwitch:n,name:a,checked:o,defaultChecked:s,required:u,disabled:f,value:p="on",onCheckedChange:h,form:w,...m}=e,[g,b]=r.useState(null),y=function(...e){return r.useCallback(c(...e),e)}(t,(e=>b(e))),k=r.useRef(!1),E=!g||w||!!g.closest("form"),[S=!1,N]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){const[a,o]=function({defaultProp:e,onChange:t}){const n=r.useState(e),[a]=n,o=r.useRef(a),i=d(t);return r.useEffect((()=>{o.current!==a&&(i(a),o.current=a)}),[a,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,s=i?e:a,c=d(n);return[s,r.useCallback((t=>{if(i){const n="function"==typeof t?t(e):t;n!==e&&c(n)}else o(t)}),[i,e,o,c])]}({prop:o,defaultProp:s,onChange:h});return(0,l.jsxs)(x,{scope:n,checked:S,disabled:f,children:[(0,l.jsx)(v.button,{type:"button",role:"switch","aria-checked":S,"aria-required":u,"data-state":C(S),"data-disabled":f?"":void 0,disabled:f,value:p,...m,ref:y,onClick:i(e.onClick,(e=>{N((e=>!e)),E&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())}))}),E&&(0,l.jsx)(j,{control:g,bubbles:!k.current,name:a,value:p,checked:S,required:u,disabled:f,form:w,style:{transform:"translateX(-100%)"}})]})}));E.displayName=g;var S="SwitchThumb",N=r.forwardRef(((e,t)=>{const{__scopeSwitch:n,...r}=e,a=k(S,n);return(0,l.jsx)(v.span,{"data-state":C(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:t})}));N.displayName=S;var j=e=>{const{control:t,checked:n,bubbles:a=!0,...o}=e,i=r.useRef(null),s=function(e){const t=r.useRef({value:e,previous:e});return r.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(n),c=function(e){const[t,n]=r.useState(void 0);return f((()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let a,o;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;a=t.inlineSize,o=t.blockSize}else a=e.offsetWidth,o=e.offsetHeight;n({width:a,height:o})}));return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)}),[e]),t}(t);return r.useEffect((()=>{const e=i.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==n&&r){const t=new Event("click",{bubbles:a});r.call(e,n),e.dispatchEvent(t)}}),[s,n,a]),(0,l.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...o,tabIndex:-1,ref:i,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function C(e){return e?"checked":"unchecked"}var _=E,L=N,O=["className"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(null,arguments)}var A=a().forwardRef((function(e,t){var n=e.className,r=void 0===n?"":n,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,O);return a().createElement(_,P({className:"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 ".concat(r)},o,{ref:t}),a().createElement(L,{className:"pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"}))}));A.displayName="Switch";var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},I=(e,t)=>{const n=(0,r.forwardRef)((({color:n="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:s,...c},l)=>{return(0,r.createElement)("svg",{ref:l,...R,width:a,height:a,stroke:n,strokeWidth:i?24*Number(o)/Number(a):o,className:`lucide lucide-${u=e,u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,...c},[...t.map((([e,t])=>(0,r.createElement)(e,t))),...(Array.isArray(s)?s:[s])||[]]);var u}));return n.displayName=`${e}`,n};const T=I("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),D=I("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),z=I("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),M=I("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function F(){F=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),s=new O(r||[]);return a(i,"_invoke",{value:j(e,n,s)}),i}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",w="completed",m={};function v(){}function g(){}function b(){}var y={};l(y,i,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(P([])));k&&k!==n&&r.call(k,i)&&(y=k);var E=b.prototype=v.prototype=Object.create(y);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(a,o,i,s){var c=d(e[a],e,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==U(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function j(t,n,r){var a=f;return function(o,i){if(a===h)throw Error("Generator is already running");if(a===w){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var c=C(s,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=w,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=d(t,n,r);if("normal"===l.type){if(a=r.done?w:p,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=w,r.method="throw",r.arg=l.arg)}}}function C(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=d(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(U(t)+" is not iterable")}return g.prototype=b,a(E,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},S(N.prototype),l(N.prototype,s,(function(){return this})),t.AsyncIterator=N,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new N(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(E),l(E,c,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}function $(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){$(o,r,a,i,s,"next",e)}function s(e){$(o,r,a,i,s,"throw",e)}i(void 0)}))}}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,s=[],c=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const G=function(){var e=B((0,r.useState)({user:!1,present:!1,design:!1,data:!1}),2),t=e[0],n=e[1],o=B((0,r.useState)(!1),2),i=o[0],s=o[1],c=function(){var e=W(F().mark((function e(){var t,r;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(laxiData.ajaxUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({action:"laxi_get_connection_status",_ajax_nonce:laxiData.nonce})});case 3:return t=e.sent,e.next=6,t.json();case 6:(r=e.sent).success&&n(r.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Failed to check status:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=W(F().mark((function e(){var t,n;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(laxiData.ajaxUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({action:"laxi_auth",_ajax_nonce:laxiData.nonce})});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).success&&n.data&&window.open(n.data,"_blank"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Failed to generate auth URL:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=W(F().mark((function e(t){var n;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(laxiData.ajaxUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({action:"laxi_toggle_chatbot",enabled:t?"1":"0",_ajax_nonce:laxiData.nonce})});case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.success&&s(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Failed to toggle chatbot:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){c();var e=setInterval(c,3e4);return function(){return clearInterval(e)}}),[]);var d=[{number:1,label:"Connect your store",description:"Link your store to enable AI-powered customer support",btnLabel:"Sign In",complete:t.user&&t.present,disabled:t.user&&t.present,onClick:l},{number:2,label:"Personalize your agent",description:"Customize how your AI assistant looks and behaves",btnLabel:"Design",complete:t.design,disabled:t.design||!t.user||!t.present,link:"".concat(laxiData.platformUrl,"/studio/design")},{number:3,label:"Train your agent",description:"Add knowledge to make your AI assistant smarter",btnLabel:"Update AI",complete:t.data,disabled:t.data||!t.design||!t.user||!t.present,link:"".concat(laxiData.platformUrl,"/studio/knowledge")}],f=Object.values(t).every((function(e){return!0===e})),p="".concat(laxiData.pluginUrl,"assets/logo.svg");return a().createElement("div",null,a().createElement("header",{className:"laxi-header"},a().createElement("img",{src:p,alt:"Laxi.ai",className:"laxi-logo"}),a().createElement("button",{onClick:l,className:"laxi-auth-button"},a().createElement(T,{className:"w-4 h-4"}),a().createElement("span",null,"Log In to Platform"))),a().createElement("div",{className:"step-container"},d.map((function(e){return a().createElement("div",{key:e.number,className:"step-item"},a().createElement("div",{className:"step-header"},a().createElement("div",{className:"step-number"},e.number),a().createElement("div",{className:"flex-1"},a().createElement("h3",{className:"step-title"},e.label),a().createElement("p",{className:"text-gray-600"},e.description)),a().createElement("div",{className:"flex items-center gap-4"},a().createElement("span",{className:"status-icon ".concat(e.complete?"status-complete":"status-pending")},e.complete?a().createElement(D,{className:"w-6 h-6"}):a().createElement(z,{className:"w-6 h-6"})),e.onClick?a().createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"laxi-auth-button ".concat(e.disabled?"laxi-button-disabled":"")},a().createElement("span",null,e.btnLabel),a().createElement(M,{className:"w-4 h-4"})):a().createElement("a",{href:e.disabled?void 0:e.link,target:"_blank",rel:"noopener noreferrer",className:"laxi-auth-button ".concat(e.disabled?"laxi-button-disabled":""),onClick:function(t){return e.disabled&&t.preventDefault()}},a().createElement("span",null,e.btnLabel),a().createElement(M,{className:"w-4 h-4"})))))}))),f&&a().createElement("div",{className:"step-item"},a().createElement("div",{className:"flex items-center justify-between"},a().createElement("div",null,a().createElement("h3",{className:"step-title"},"Enable Chatbot"),a().createElement("p",{className:"text-gray-600"},"Activate the AI assistant on your store")),a().createElement(A,{checked:i,onCheckedChange:u,className:"laxi-switch"}))))};var H=n(72),q=n.n(H),V=n(825),X=n.n(V),Z=n(659),J=n.n(Z),K=n(56),Q=n.n(K),ee=n(540),te=n.n(ee),ne=n(113),re=n.n(ne),ae=n(704),oe={};oe.styleTagTransform=re(),oe.setAttributes=Q(),oe.insert=J().bind(null,"head"),oe.domAPI=X(),oe.insertStyleElement=te(),q()(ae.A,oe),ae.A&&ae.A.locals&&ae.A.locals,document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("laxi-admin-root");e&&(0,o.H)(e).render(a().createElement(a().StrictMode,null,a().createElement(G,null)))}))})();