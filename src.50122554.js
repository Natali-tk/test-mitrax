parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\fonts\\TTCommons-Regular.woff":[["TTCommons-Regular.e43d1576.woff","Rwjx"],"Rwjx"],"./..\\fonts\\TTCommons-DemiBold.woff":[["TTCommons-DemiBold.7f757ad1.woff","AIjC"],"AIjC"],"./..\\fonts\\TTCommons-Bold.woff":[["TTCommons-Bold.7af2693c.woff","ZepA"],"ZepA"]}],"i0CD":[function(require,module,exports) {
var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",function(){var a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open")});
},{}],"j4fM":[function(require,module,exports) {
var e={controls:document.querySelector("#tabs-1 [data-controls]"),modules:document.querySelector("#tabs-1 [data-modules]")};e.controls.addEventListener("click",function(t){if(t.preventDefault(),"A"===t.target.nodeName){var a=e.controls.querySelector(".active");if(a){a.classList.remove("active");var c=a.getAttribute("href").slice(1);e.modules.querySelector("#".concat(c)).classList.remove("active")}var r=t.target;r.classList.add("active");var o=r.getAttribute("href").slice(1);e.modules.querySelector("#".concat(o)).classList.add("active")}});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/menu"),require("./js/module");
},{"./sass/main.scss":"clu1","./js/menu":"i0CD","./js/module":"j4fM"}]},{},["Focm"], null)
//# sourceMappingURL=/test-mitrax/src.50122554.js.map