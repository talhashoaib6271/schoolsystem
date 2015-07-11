!function(){"use strict";function e(e){var n=[];return angular.forEach(e.requires,function(e){-1===l.indexOf(e)&&n.push(e)}),n}function n(e){try{return angular.module(e)}catch(n){if(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)return!1}}function r(e){try{return angular.module(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+e+'" that you are trying to load does not exist. '+n.message),n}}function a(e,n,r,a){if(n){var t,i,u,l;for(t=0,i=n.length;i>t;t++)if(u=n[t],angular.isArray(u)){if(null!==e){if(!e.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);l=e[u[0]]}var s=o(u,r);if("invoke"!==u[1])s&&angular.isDefined(l)&&l[u[1]].apply(l,u[2]);else{var f=function(e){var n=c.indexOf(r+"-"+e);(-1===n||a)&&(-1===n&&c.push(r+"-"+e),angular.isDefined(l)&&l[u[1]].apply(l,u[2]))};if(angular.isFunction(u[2][0]))f(u[2][0]);else if(angular.isArray(u[2][0]))for(var d=0,g=u[2][0].length;g>d;d++)angular.isFunction(u[2][0][d])&&f(u[2][0][d])}}}}function t(e,n,r){if(n){var o,u,s,f=[];for(o=n.length-1;o>=0;o--)if(u=n[o],"string"!=typeof u&&(u=i(u)),u&&-1===d.indexOf(u)){var c=-1===l.indexOf(u);if(s=angular.module(u),c&&(l.push(u),t(e,s.requires,r)),s._runBlocks.length>0)for(g[u]=[];s._runBlocks.length>0;)g[u].push(s._runBlocks.shift());angular.isDefined(g[u])&&(c||r.rerun)&&(f=f.concat(g[u])),a(e,s._invokeQueue,u,r.reconfig),a(e,s._configBlocks,u,r.reconfig),p(c?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",u),n.pop(),d.push(u)}var h=e.getInstanceInjector();angular.forEach(f,function(e){h.invoke(e)})}}function o(e,n){var r=e[2][0],a=e[1],t=!1;angular.isUndefined(f[n])&&(f[n]={}),angular.isUndefined(f[n][a])&&(f[n][a]=[]);var o=function(e){t=!0,f[n][a].push(e),p("ocLazyLoad.componentLoaded",[n,a,e])};if(angular.isString(r)&&-1===f[n][a].indexOf(r))o(r);else{if(!angular.isObject(r))return!1;angular.forEach(r,function(e){angular.isString(e)&&-1===f[n][a].indexOf(e)&&o(e)})}return t}function i(e){var n=null;return angular.isString(e)?n=e:angular.isObject(e)&&e.hasOwnProperty("name")&&angular.isString(e.name)&&(n=e.name),n}function u(e){if(0===s.length){var n=[e],r=["ng:app","ng-app","x-ng-app","data-ng-app"],t=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,o=function(e){return e&&n.push(e)};angular.forEach(r,function(n){r[n]=!0,o(document.getElementById(n)),n=n.replace(":","\\:"),e[0].querySelectorAll&&(angular.forEach(e[0].querySelectorAll("."+n),o),angular.forEach(e[0].querySelectorAll("."+n+"\\:"),o),angular.forEach(e[0].querySelectorAll("["+n+"]"),o))}),angular.forEach(n,function(n){if(0===s.length){var a=" "+e.className+" ",o=t.exec(a);o?s.push((o[2]||"").replace(/\s+/g,",")):angular.forEach(n.attributes,function(e){0===s.length&&r[e.name]&&s.push(e.value)})}})}if(0===s.length)throw"No module found during bootstrap, unable to init ocLazyLoad";var i=function u(e){if(-1===l.indexOf(e)){l.push(e);var n=angular.module(e);a(null,n._invokeQueue,e),a(null,n._configBlocks,e),angular.forEach(n.requires,u)}};angular.forEach(s,function(e){i(e)})}var l=["ng"],s=[],f={},c=[],d=[],g={},h=angular.module("oc.lazyLoad",["ng"]),p=angular.noop;h.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(a,o,s,f,c,g){var h,m,v,y={},L={$controllerProvider:a,$compileProvider:s,$filterProvider:f,$provide:o,$injector:c,$animateProvider:g},w=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],O=!1,j=!1;u(angular.element(window.document)),this.$get=["$log","$q","$templateCache","$http","$rootElement","$rootScope","$cacheFactory","$interval",function(a,o,u,s,f,c,g,E){var $,x=g("ocLazyLoad"),b=!1,z=!1;O||(a={},a.error=angular.noop,a.warn=angular.noop,a.info=angular.noop),L.getInstanceInjector=function(){return $?$:$=f.data("$injector")||angular.injector()},p=function(e,n){j&&c.$broadcast(e,n),O&&a.info(e,n)};var P=function(e,n,r){var a,t,i=o.defer(),u=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?e+"_dc="+n:e+"&_dc="+n:e+"?_dc="+n};switch(angular.isUndefined(x.get(n))&&x.put(n,i.promise),e){case"css":a=document.createElement("link"),a.type="text/css",a.rel="stylesheet",a.href=r.cache===!1?u(n):n;break;case"js":a=document.createElement("script"),a.src=r.cache===!1?u(n):n;break;default:i.reject(new Error('Requested type "'+e+'" is not known. Could not inject "'+n+'"'))}a.onload=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||t||(a.onload=a.onreadystatechange=null,t=1,p("ocLazyLoad.fileLoaded",n),i.resolve())},a.onerror=function(){i.reject(new Error("Unable to load "+n))},a.async=r.serie?0:1;var l=w.lastChild;if(r.insertBefore){var s=angular.element(r.insertBefore);s&&s.length>0&&(l=s[0])}if(w.insertBefore(a,l),"css"==e){if(!b){var f=navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(navigator.platform)){var c=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=parseFloat([parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3]||0,10)].join("."));z=6>d}else if(f.indexOf("android")>-1){var g=parseFloat(f.slice(f.indexOf("android")+8));z=4.4>g}else if(f.indexOf("safari")>-1&&-1==f.indexOf("chrome")){var h=parseFloat(f.match(/version\/([\.\d]+)/i)[1]);z=6>h}}if(z)var m=1e3,v=E(function(){try{a.sheet.cssRules,E.cancel(v),a.onload()}catch(e){--m<=0&&a.onerror()}},20)}return i.promise};angular.isUndefined(h)&&(h=function(e,n,r){var a=[];angular.forEach(e,function(e){a.push(P("js",e,r))}),o.all(a).then(function(){n()},function(e){n(e)})},h.ocLazyLoadLoader=!0),angular.isUndefined(m)&&(m=function(e,n,r){var a=[];angular.forEach(e,function(e){a.push(P("css",e,r))}),o.all(a).then(function(){n()},function(e){n(e)})},m.ocLazyLoadLoader=!0),angular.isUndefined(v)&&(v=function(e,n,r){var a=[];return angular.forEach(e,function(e){var n=o.defer();a.push(n.promise),s.get(e,r).success(function(r){angular.isString(r)&&r.length>0&&angular.forEach(angular.element(r),function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&u.put(e.id,e.innerHTML)}),angular.isUndefined(x.get(e))&&x.put(e,!0),n.resolve()}).error(function(r){n.reject(new Error('Unable to load template file "'+e+'": '+r))})}),o.all(a).then(function(){n()},function(e){n(e)})},v.ocLazyLoadLoader=!0);var D=function(e,n){var r=[],t=[],i=[],u=[],l=null;angular.extend(n||{},e);var s=function(e){l=x.get(e),angular.isUndefined(l)||n.cache===!1?/\.(css|less)[^\.]*$/.test(e)&&-1===r.indexOf(e)?r.push(e):/\.(htm|html)[^\.]*$/.test(e)&&-1===t.indexOf(e)?t.push(e):-1===i.indexOf(e)&&i.push(e):l&&u.push(l)};if(n.serie?s(n.files.shift()):angular.forEach(n.files,function(e){s(e)}),r.length>0){var f=o.defer();m(r,function(e){angular.isDefined(e)&&m.hasOwnProperty("ocLazyLoadLoader")?(a.error(e),f.reject(e)):f.resolve()},n),u.push(f.promise)}if(t.length>0){var c=o.defer();v(t,function(e){angular.isDefined(e)&&v.hasOwnProperty("ocLazyLoadLoader")?(a.error(e),c.reject(e)):c.resolve()},n),u.push(c.promise)}if(i.length>0){var d=o.defer();h(i,function(e){angular.isDefined(e)&&h.hasOwnProperty("ocLazyLoadLoader")?(a.error(e),d.reject(e)):d.resolve()},n),u.push(d.promise)}return n.serie&&n.files.length>0?o.all(u).then(function(){return D(e,n)}):o.all(u)};return{getModuleConfig:function(e){if(!angular.isString(e))throw new Error("You need to give the name of the module to get");return y[e]?y[e]:null},setModuleConfig:function(e){if(!angular.isObject(e))throw new Error("You need to give the module config object to set");return y[e.name]=e,e},getModules:function(){return l},isLoaded:function(e){var r=function(e){var r=l.indexOf(e)>-1;return r||(r=!!n(e)),r};if(angular.isString(e)&&(e=[e]),angular.isArray(e)){var a,t;for(a=0,t=e.length;t>a;a++)if(!r(e[a]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},load:function(u,s){var f,c,g=this,h=null,p=[],m=[],v=o.defer();if(angular.isUndefined(s)&&(s={}),angular.isArray(u))return angular.forEach(u,function(e){e&&m.push(g.load(e,s))}),o.all(m).then(function(){v.resolve(u)},function(e){v.reject(e)}),v.promise;if(f=i(u),"string"==typeof u?(h=g.getModuleConfig(u),h||(h={files:[u]},f=null)):"object"==typeof u&&(h=g.setModuleConfig(u)),null===h?(c='Module "'+f+'" is not configured, cannot load.',a.error(c),v.reject(new Error(c))):angular.isDefined(h.template)&&(angular.isUndefined(h.files)&&(h.files=[]),angular.isString(h.template)?h.files.push(h.template):angular.isArray(h.template)&&h.files.concat(h.template)),p.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},angular.isDefined(f)&&n(f)&&-1!==l.indexOf(f)&&(p.push(f),angular.isUndefined(h.files)))return v.resolve(),v.promise;var y={};angular.extend(y,s,h);var w=function O(t){var u,l,s,f,c=[];if(u=i(t),null===u)return o.when();try{l=r(u)}catch(d){var h=o.defer();return a.error(d.message),h.reject(d),h.promise}return s=e(l),angular.forEach(s,function(e){if("string"==typeof e){var r=g.getModuleConfig(e);if(null===r)return void p.push(e);e=r}return n(e.name)?void("string"!=typeof t&&(f=e.files.filter(function(n){return g.getModuleConfig(e.name).files.indexOf(n)<0}),0!==f.length&&a.warn('Module "',u,'" attempted to redefine configuration for dependency. "',e.name,'"\n Additional Files Loaded:',f),c.push(D(e.files,y).then(function(){return O(e)})))):("object"==typeof e&&(e.hasOwnProperty("name")&&e.name&&(g.setModuleConfig(e),p.push(e.name)),e.hasOwnProperty("css")&&0!==e.css.length&&angular.forEach(e.css,function(e){P("css",e,y)})),void(e.hasOwnProperty("files")&&0!==e.files.length&&e.files&&c.push(D(e,y).then(function(){return O(e)}))))}),o.all(c)};return D(h,y).then(function(){null===f?v.resolve(u):(p.push(f),w(f).then(function(){try{d=[],t(L,p,y)}catch(e){return a.error(e.message),void v.reject(e)}v.resolve(u)},function(e){v.reject(e)}))},function(e){v.reject(e)}),v.promise}}}],this.config=function(e){if(angular.isDefined(e.jsLoader)||angular.isDefined(e.asyncLoader)){if(!angular.isFunction(e.jsLoader||e.asyncLoader))throw"The js loader needs to be a function";h=e.jsLoader||e.asyncLoader}if(angular.isDefined(e.cssLoader)){if(!angular.isFunction(e.cssLoader))throw"The css loader needs to be a function";m=e.cssLoader}if(angular.isDefined(e.templatesLoader)){if(!angular.isFunction(e.templatesLoader))throw"The template loader needs to be a function";v=e.templatesLoader}angular.isDefined(e.modules)&&(angular.isArray(e.modules)?angular.forEach(e.modules,function(e){y[e.name]=e}):y[e.modules.name]=e.modules),angular.isDefined(e.debug)&&(O=e.debug),angular.isDefined(e.events)&&(j=e.events)}}]),h.directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse",function(e,n,r,a){return{restrict:"A",terminal:!0,priority:1e3,compile:function(t){var o=t[0].innerHTML;return t.html(""),function(t,i,u){var l=a(u.ocLazyLoad);t.$watch(function(){return l(t)||u.ocLazyLoad},function(a){angular.isDefined(a)&&e.load(a).then(function(){r.enter(n(o)(t),null,i)})},!0)}}}}]);var m=angular.bootstrap;angular.bootstrap=function(e,n,r){return s=n.slice(),m(e,n,r)},Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),t=a.length>>>0;if(0===t)return-1;var o=+n||0;if(1/0===Math.abs(o)&&(o=0),o>=t)return-1;for(r=Math.max(o>=0?o:t-Math.abs(o),0);t>r;){if(r in a&&a[r]===e)return r;r++}return-1})}();