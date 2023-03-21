// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dvt3I":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1d384e6efe5eb245";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5IjmB":[function(require,module,exports) {
var _recipe = require("./addRecipe/recipe");
var _showRecipe = require("./showRecipe/showRecipe");
var _addSchedule = require("./addSchedule/addSchedule");
var _showSchedule = require("./showSchedule/showSchedule");
// name form
const formElement = document.querySelector(".app-content__main--first-entry_wrapper__form");
const formInputElement = document.querySelector(".app-content__main--first-entry_wrapper__form--input");
const userNameElement = document.querySelector(".app-header__user-name");
const registerPanelElement = document.querySelector(".app-content__main--first-entry");
const localUserName = localStorage.getItem("username");
const hideRegisterPanel = ()=>{
    registerPanelElement.style.display = "none";
};
const displayUserName = (text)=>{
    userNameElement.innerText = text;
};
const setUserName = (userName)=>{
    localStorage.setItem("username", userName);
};
if (localUserName) {
    hideRegisterPanel();
    displayUserName(localUserName);
} else {
    const onSubmitForm = (e)=>{
        e.preventDefault();
        const name = formInputElement.value;
        displayUserName(name);
        setUserName(name);
        hideRegisterPanel();
    };
    formElement.addEventListener("submit", onSubmitForm);
}
//ZAMYKANIE PASKÓW INFORMACYJNYCH Z PRZESUNĘCIEM PRZYCISKÓW NA ŚRODEK
//ZMIENNIE / ELEMENTY
const appContentNotificationsContainer = document.querySelector(".app-content__main--notifications-container");
const appContentMainContainer = document.querySelector(".app-content__main--container");
// TABLICA Z BOXAMI: INFO, ALERT I CHECK
const notificationsBoxes = [
    ...appContentNotificationsContainer.children
];
let counter = 0;
function removeElement(parent) {
    parent.remove();
    counter++;
    getRemoveAllElement(counter);
}
notificationsBoxes.forEach((el)=>{
    el.querySelector("a").addEventListener("click", function() {
        const parent = this;
        removeElement(parent.parentElement);
    });
});
function getRemoveAllElement(counter) {
    if (counter === notificationsBoxes.length) return appContentNotificationsContainer.style.display = "none", appContentMainContainer.style.justifyContent = "center", appContentMainContainer.style.gap = "30px";
}
// schedule - new schedule button
const weekPlanElement = document.querySelector(".app-content__main--new-plan");
const addScheduleButton = document.querySelector(".app-content__main--btn-add-plan");
addScheduleButton.addEventListener("click", function(event) {
    event.preventDefault();
    weekPlanElement.style.display = "flex";
});
const addRecepieButton = document.querySelector(".app-content__main--btn-add-receipt");
const addRecipieElement = document.querySelector(".add-recipe__container");
addRecepieButton.addEventListener("click", function(event) {
    event.preventDefault();
    addRecipieElement.style.display = "block";
});
const countRecepiesElement = document.querySelector(".notify-recipes-count");
const getRecipiesLength = function() {
    if (localStorage.getItem("recipe")) {
        const count = JSON.parse(localStorage.getItem("recipe")).length;
        if (count === 1) return "1 przepis";
        else if (count < 5) return count + " przepisy";
        else return count + " przepis\xf3w";
    } else return "0 przepis\xf3w";
};
countRecepiesElement.innerText = getRecipiesLength();
// TWÓJ PLAN
const schedules = JSON.parse(localStorage.getItem("schedules")) || [];
const countElement = document.querySelector(".app-content__main--week-plan-counter");
let currentIndex = 0;
const showCurrentSchedule = function(index) {
    schedules[index].schedule.forEach((element)=>{
        const keys = Object.keys(element).slice(1);
        keys.forEach((key)=>{
            document.querySelector(`.${element.day}-${key}`).innerText = element[key];
        });
    });
    countElement.innerText = schedules[index].numberOfWeek + ".";
};
showCurrentSchedule(currentIndex);
const prevCalendarButton = document.querySelector(".app-content__main--week-plan-buttons-prev");
const nextCalendarButton = document.querySelector(".app-content__main--week-plan-buttons-next");
nextCalendarButton?.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentIndex < schedules.length - 1) {
        console.log(schedules[currentIndex + 1]);
        currentIndex++;
        showCurrentSchedule(currentIndex);
    }
});
prevCalendarButton?.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentIndex !== 0) {
        currentIndex--;
        showCurrentSchedule(currentIndex);
    }
});

},{"./addRecipe/recipe":"ee1WW","./showRecipe/showRecipe":"9iudM","./addSchedule/addSchedule":"aDANQ","./showSchedule/showSchedule":"7rZGE"}],"ee1WW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uuid = require("uuid");
var _recipe = require("./recipe");
parcelHelpers.exportAll(_recipe, exports);
const btnSave = document.querySelector("#add-recipe--btn");
const inputTitle = document.querySelector("#recipe__title");
const inputDescription = document.querySelector("#recipe__description");
const instruction = document.querySelector("#instruction");
const btnPlusInstruction = document.querySelector("#plus--instruction");
const btnPlusEditInstruction = document.querySelector("#plus--edit--instruction");
const listInstructions = document.querySelector(".steps-list__instruction");
const listIngredients = document.querySelector(".steps-list__ingredients");
const inputIngredient = document.querySelector("#ingredient");
const btnPlusIngredient = document.querySelector("#plus--ingredient");
const btnPlusEditIngredient = document.querySelector("#plus--edit--ingredient");
const addRecipieWrapper = document.querySelector(".add-recipe__container");
const addRecipieButton = document.querySelector(".recipes__container .icon__plus");
const arrayWithEditsBtns = [];
const finalRecipe = [];
/// syantax
function syntaxCreateInstructionElement(input, list) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = input.value;
    span.setAttribute("id", (0, _uuid.v4)());
    input.value = "";
    const btnEdit = document.createElement("span");
    btnEdit.classList = "fas fa-edit";
    const btnDelete = document.createElement("span");
    btnDelete.classList = "fas fa-trash-alt";
    li.append(span, btnEdit, btnDelete);
    list.append(li);
}
/////////////
////delete btn
function listenerForAllDeleteBtns() {
    const allButtonsDelete = document.querySelectorAll(".fa-trash-alt");
    allButtonsDelete.forEach((btn)=>{
        btn.addEventListener("click", function() {
            const parentElement = btn.parentElement;
            parentElement.remove();
        });
    });
}
/////////////
/////edit
function swapButtonsEditAndAdd(btnEdit, btnAdd, input, unfreezeInput) {
    btnEdit.style.display = "inline";
    btnAdd.style.display = "none";
    btnEdit.addEventListener("click", ()=>{
        input.value = "";
        input.blur();
        btnEdit.style.display = "none";
        btnAdd.style.display = "inline";
        unfreezeInput.removeAttribute("disabled");
        return arrayWithEditsBtns.splice(0, arrayWithEditsBtns.length);
    });
}
let text;
function getRightIdEdit(e, designateInput) {
    const textLi = document.getElementById(e.target.parentElement.firstChild.id);
    const input = e.target.parentElement.parentElement.parentElement.children[2];
    if (arrayWithEditsBtns.length > 1) arrayWithEditsBtns.shift();
    arrayWithEditsBtns.push(textLi);
    if (input.type === "textarea") {
        inputIngredient.setAttribute("disabled", "true");
        inputIngredient.value = "";
        instruction.focus();
        instruction.removeAttribute("disabled");
    } else {
        instruction.value = "";
        instruction.setAttribute("disabled", "true");
        inputIngredient.focus();
        inputIngredient.removeAttribute("disabled");
    }
    input.value = arrayWithEditsBtns[arrayWithEditsBtns.length - 1].textContent;
    input.addEventListener("keyup", (e)=>{
        if (!arrayWithEditsBtns[arrayWithEditsBtns.length - 1]) return false;
        arrayWithEditsBtns[arrayWithEditsBtns.length - 1].textContent = e.target.value;
    });
    if (designateInput) return swapButtonsEditAndAdd(btnPlusEditIngredient, btnPlusIngredient, inputIngredient, instruction);
    return swapButtonsEditAndAdd(btnPlusEditInstruction, btnPlusInstruction, instruction, inputIngredient);
}
/////////////////////////
function listenerForAllEditBtns(designateInput) {
    const allButtonsEdit = document.querySelectorAll(".fa-edit");
    allButtonsEdit.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const event = e;
            getRightIdEdit(event, designateInput);
        });
    });
}
//////
btnPlusInstruction?.addEventListener("click", ()=>{
    if (instruction.value === "") return instruction.style.borderColor = "red";
    instruction.style.borderColor = "black";
    syntaxCreateInstructionElement(instruction, listInstructions);
    listenerForAllDeleteBtns();
    listenerForAllEditBtns();
});
btnPlusIngredient?.addEventListener("click", ()=>{
    if (inputIngredient.value === "") return inputIngredient.style.borderColor = "red";
    instruction.style.borderColor = "black";
    syntaxCreateInstructionElement(inputIngredient, listIngredients);
    listenerForAllDeleteBtns();
    listenerForAllEditBtns(true);
});
function isEmpty(arrayInstructions, arrayIngredients) {
    if (inputTitle.value !== "" && inputDescription.value !== "" && arrayInstructions.length !== 0 && arrayIngredients.length !== 0) return true;
}
const arrayWithRecipe = [];
btnSave?.addEventListener("click", ()=>{
    const arrayInstructions = document.querySelectorAll(".steps-list__instruction li");
    const arrayIngredients = document.querySelectorAll(".steps-list__ingredients li");
    if (!isEmpty(arrayInstructions, arrayIngredients)) return alert("complete each field");
    const arrayOfInstruction = [];
    const arrayOfIngredients = [];
    arrayInstructions.forEach((el)=>arrayOfInstruction.push(el.firstChild.textContent));
    arrayIngredients.forEach((el)=>arrayOfIngredients.push(el.firstChild.textContent));
    const recipe = {
        id: (0, _uuid.v4)(),
        title: inputTitle.value,
        description: inputDescription.value,
        instruction: arrayOfInstruction,
        ingredient: arrayOfIngredients
    };
    const allRecipes = localStorage.getItem("recipe");
    if (!allRecipes) {
        arrayWithRecipe.push(recipe);
        localStorage.setItem("recipe", JSON.stringify(arrayWithRecipe));
    } else {
        arrayWithRecipe.length = 0;
        JSON.parse(allRecipes).forEach((el)=>arrayWithRecipe.push(el));
        arrayWithRecipe.push(recipe);
        localStorage.setItem("recipe", JSON.stringify(arrayWithRecipe));
    }
    addRecipieWrapper.style.display = "none";
    window.location.reload();
});
addRecipieButton?.addEventListener("click", function() {
    addRecipieWrapper.style.display = "block";
});

},{"uuid":"j4KJi","./recipe":"ee1WW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9iudM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _showRecipe = require("./showRecipe");
parcelHelpers.exportAll(_showRecipe, exports);
const olList = document.querySelector(".recipe__list .ol__list");
const arrayWithRecipes = JSON.parse(localStorage.getItem("recipe"));
function removeRecipe(id) {
    arrayWithRecipes.forEach((el)=>{
        if (el.id === id) arrayWithRecipes.splice(arrayWithRecipes.indexOf(el), 1);
    });
    localStorage.setItem("recipe", JSON.stringify(arrayWithRecipes));
}
function deleteLi(trashIconBtn) {
    trashIconBtn.forEach((btn)=>{
        btn.addEventListener("click", function() {
            const li = this.parentElement.parentElement;
            li.remove();
            removeRecipe(li.id);
        });
    });
}
function editPlace(element) {
    const mainRecipeText = element.parentElement.parentElement.firstChild;
    const recipeText = element.parentElement.parentElement.firstChild.nextSibling;
    const id = element.parentElement.parentElement.id;
    mainRecipeText.addEventListener("keyup", (e)=>{
        arrayWithRecipes.forEach((el, index)=>{
            if (el.id === id) arrayWithRecipes.splice(index, 1, {
                title: e.target.value,
                description: recipeText.value,
                ingredient: el.ingredient,
                instruction: el.instruction,
                id: el.id
            });
        });
        localStorage.setItem("recipe", JSON.stringify(arrayWithRecipes));
    });
    recipeText.addEventListener("keyup", (e)=>{
        arrayWithRecipes.forEach((el, index)=>{
            if (el.id === id) arrayWithRecipes.splice(index, 1, {
                title: mainRecipeText.value,
                description: e.target.value,
                ingredient: el.ingredient,
                instruction: el.instruction,
                id: el.id
            });
        });
        localStorage.setItem("recipe", JSON.stringify(arrayWithRecipes));
    });
}
function editRecipe(editBtns) {
    editBtns.forEach((element)=>{
        element.addEventListener("click", function() {
            const edit = this.parentElement.parentElement;
            const title = edit.getElementsByClassName("main__recipe--text")[0];
            const description = edit.getElementsByClassName("recipe__text")[0];
            description.removeAttribute("disabled");
            description.style.overflow = "auto";
            title.removeAttribute("disabled");
            title.style.overflow = "auto";
            title.focus();
        });
        element.addEventListener("click", function() {
            const element = this;
            editPlace(element);
        });
    });
}
let counter = 0;
function newLiElement(el) {
    const li = document.createElement("li");
    li.classList = "parent__element";
    li.setAttribute("id", el.id);
    const title = document.createElement("textarea");
    title.className = "main__recipe--text";
    title.textContent = el.title;
    title.setAttribute("disabled", true);
    const description = document.createElement("textarea");
    description.className = "recipe__text";
    description.textContent = el.description;
    description.setAttribute("disabled", true);
    const parentBtns = document.createElement("div");
    parentBtns.classList = "recipe__icons";
    const trashBtn = document.createElement("i");
    trashBtn.style.color = "rgb(189, 73, 50)";
    trashBtn.classList = "fas fa-trash-alt";
    const editBtn = document.createElement("i");
    editBtn.style.color = "rgb(255, 176, 59)";
    editBtn.classList = "fas fa-edit";
    parentBtns.append(editBtn, trashBtn);
    li.append(title, description, parentBtns);
    olList?.append(li);
    counter--;
    if (counter === 0) {
        console.log(counter);
        const trashIconBtn = document.querySelectorAll(".recipe__list .fa-trash-alt");
        deleteLi(trashIconBtn);
        const mainRecipeText = document.querySelectorAll(".main__recipe--text");
        const recipeText = document.querySelectorAll(".recipe__text");
        const editBtns = document.querySelectorAll(".fa-edit");
        editRecipe(editBtns);
    }
}
counter += arrayWithRecipes?.length;
arrayWithRecipes?.forEach((el)=>{
    newLiElement(el);
});

},{"./showRecipe":"9iudM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDANQ":[function(require,module,exports) {
const localStorageRecipes = JSON.parse(localStorage.getItem("recipe")) || [];
const recipesNames = localStorageRecipes.map((element)=>element.title);
const selectElements = document.querySelectorAll("select[name=dish]");
const saveButton = document.querySelector(".app-content__main--new-plan_wrapper_title_button");
const nameElement = document.querySelector(".app-content__main--new-plan_wrapper_specification_description .input_name");
const descriptionElement = document.querySelector(".app-content__main--new-plan_wrapper_specification_description .input_description");
const numberOfWeekElement = document.querySelector(".app-content__main--new-plan_wrapper_specification_description .input_week");
const newScheduleElement = document.querySelector(".app-content__main--new-plan");
selectElements.forEach((select)=>{
    recipesNames.forEach((name)=>{
        const option = document.createElement("option");
        option.innerText = name;
        option.value = name;
        select.append(option);
    });
});
const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];
const defaultSchedule = {
    title: "",
    description: "",
    numberOfWeek: 0,
    schedule: daysOfWeek.map((day)=>{
        return {
            day: day,
            breakfast: "",
            secondBreakfast: "",
            soup: "",
            main: "",
            dinner: ""
        };
    })
};
saveButton?.addEventListener("click", function() {
    const newSchedule = defaultSchedule;
    newSchedule.title = nameElement.value;
    newSchedule.description = descriptionElement.value;
    newSchedule.numberOfWeek = numberOfWeekElement.value;
    newSchedule.schedule = daysOfWeek.map((day)=>{
        return {
            day: day,
            breakfast: document.querySelector(`select[id=breakfast_${day}]`).value,
            secondBreakfast: document.querySelector(`select[id=sec_breakfast_${day}]`).value,
            soup: document.querySelector(`select[id=soup_${day}]`).value,
            main: document.querySelector(`select[id=main_${day}]`).value,
            dinner: document.querySelector(`select[id=supper_${day}]`).value
        };
    });
    const schedulesLocalstorage = JSON.parse(localStorage.getItem("schedules"));
    if (schedulesLocalstorage) localStorage.setItem("schedules", JSON.stringify([
        ...schedulesLocalstorage,
        newSchedule
    ]));
    else localStorage.setItem("schedules", JSON.stringify([
        newSchedule
    ]));
    newScheduleElement.style.display = "none";
    window.location.reload();
});

},{}],"7rZGE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _showSchedule = require("./showSchedule");
parcelHelpers.exportAll(_showSchedule, exports);
const olList = document.querySelector(".schedule__list .ol__list");
const arrayWithSchedules = JSON.parse(localStorage.getItem("schedules")) || [];
const weekPlanElement = document.querySelector(".app-content__main--new-plan");
const addButton = document.querySelector(".schedules__main--container .icon__plus");
arrayWithSchedules.forEach((schedule, index)=>{
    const li = document.createElement("li");
    li.classList = "parent__element";
    li.setAttribute("id", `schedule_${index}`);
    const title = document.createElement("textarea");
    title.className = "main__schedule--text";
    title.textContent = schedule.title;
    title.setAttribute("disabled", true);
    const description = document.createElement("textarea");
    description.className = "schedule__text";
    description.textContent = schedule.description;
    description.setAttribute("disabled", true);
    const numberOfWeek = document.createElement("textarea");
    numberOfWeek.className = "schedule__week";
    numberOfWeek.textContent = schedule.numberOfWeek;
    numberOfWeek.setAttribute("disabled", true);
    const parentBtns = document.createElement("div");
    parentBtns.classList = "schedule__icons";
    const trashBtn = document.createElement("i");
    trashBtn.style.color = "rgb(189, 73, 50)";
    trashBtn.classList = "fas fa-trash-alt";
    trashBtn.addEventListener("click", ()=>{
        const newArray = [
            ...arrayWithSchedules
        ].filter((element, newIndex)=>index !== newIndex);
        localStorage.setItem("schedules", JSON.stringify(newArray));
        window.location.reload();
    });
    parentBtns.append(trashBtn);
    li.append(title, description, numberOfWeek, parentBtns);
    olList?.append(li);
});
addButton?.addEventListener("click", function() {
    weekPlanElement.style.display = "flex";
});

},{"./showSchedule":"7rZGE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dvt3I","5IjmB"], "5IjmB", "parcelRequire3403")

//# sourceMappingURL=app.fe5eb245.js.map
