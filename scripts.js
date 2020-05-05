(function(b,a){function g(c){a.pushNotifications?a.pushNotifications.getUserToken(c):c(null)}function h(c,a,e){g(function(b){if(b)try{e||(e=[]),k(e)||e.push({name:"pushToken",value:b})}catch(g){}b=JSON.stringify({params:e,eventTypeKey:c,keyValue:a});d(b)})}function k(c){try{var a=!1;c.forEach(function(c){c.name&&"pushToken"===c.name&&(a=!0)});return a}catch(b){return!1}}function d(c){var a=new XMLHttpRequest;a.onerror=function(){};a.open("POST","https://esputnik.com/api/v1/event",!0);a.withCredentials=!0;
a.setRequestHeader("Authorization","Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0NTI0ZWZhYTJkYzI2MGRmYTM4YTE1NDBlMWFiYmU1MWNhYTk2NjQ5Mjg0ZmZhOTQwM2FiNDk3MzljODA0MzAwNjRlZGIxM2M0NWExYTQzMzJhMDg3MGQ5ZDU2YThlNTU1N2IwYjIwNzRmMjIzM2ZiZTY3MjM5YzU3MjU3YmU0MWE1Y2ZhZTI4MjQzMTNmMGRmMDczYmEyN2I2ODk0NTE1MDE4ZGVjOTE5YzEzNjM1NmJmIn0.zCVTxrLzv8UXm0ZqZc6_nHr91zfxdXCHCmpp6Tal4MGLHcXbjFdBvIn6r5zaghl4Msl3ir2_jIyVSLTVHvxrAA");a.setRequestHeader("Content-Type","application/json");a.send(c)}b.__es_sdk?a=b.__es_sdk:b.__es_sdk=a;a.pushOn=function(c){a.pushNotifications?a.pushNotifications.init(c):console.log("Push module unavailable")};a.sendEvent=function(c,a,b){h(c,a,b)};a.getPushToken=g;a.getPushContactId=function(c){a.pushNotifications?a.pushNotifications.getUserPushSubscriptionContactId(c):c(null)};a.onWebPushSubscriptionChange=function(c){if(a.pushNotifications)a.pushNotifications.onSubscriptionChange(c,
!0)}})(this,this.__es_sdk||{});
(function(B,p){function n(){try{R()?(w.c(function(){if("safari"===f.userAgent.name.toLowerCase()&&R()&&"default"===window.safari.pushNotification.permission(d.main.apnWebsitePushId).permission){var a={};a.domainId=d.main.APPLICATION_ID;a.userAgent=f.userAgent.name;a.userAgentVersion=f.userAgent.version;a.userAgentLanguage=window.navigator.F||window.navigator.language;a.OS=f.platform;a.subscriptionPage=window.location.href;window.safari.pushNotification.requestPermission(d.main.apnSubscriptionServiceUrl,
d.main.apnWebsitePushId,a,ga);w.close()}},S),w.show()):!f.b||f.b&&d.main.IS_SHOW_CUSTOM_POP_OVER_DIALOG_FOR_SPECIAL_HTTPS?ha():f.b&&!d.main.IS_SHOW_CUSTOM_POP_OVER_DIALOG_FOR_SPECIAL_HTTPS?ia.D():c.error("[registerController()] NO ACTIONS !!!")}catch(a){c.log("[registerController()] handle error ",a)}}function R(){return"safari"in window&&"pushNotification"in window.safari}function T(a){c.log("[init()] Started..");var b=d.urls,e=C;a&&a["service-worker"]&&a["service-worker"].relUrl?e=a:c.log("Custom service worker script url is not provided, use default");
b.SERVICE_WORKER_URL_HTTPS=e["service-worker"].relUrl;b=d.subscription;e=C;a&&a["service-worker"]&&a["service-worker"].scope?e=a:c.log("Custom service worker scope is not provided, use default");b.serviceWorkerScope=e["service-worker"].scope;c.log("Configuration: ");c.log("Target Domain: ",d.main.targetDomain);c.log("Proxy Domain: ",d.main.proxyDomain);c.log("Application ID: ",d.main.APPLICATION_ID);c.log("Notifications Service: ",d.main.notificationsService);c.log("Apple Push Notification Website Push ID: ",
d.main.apnWebsitePushId);c.log("Show Subscription IFrame Result [s]: ",d.subscription.timeSuccessShow);c.log("Timeout on ignore prompt: ",d.subscription.timeoutIgnorePopover);c.log("Timeout on block prompt: ",d.subscription.timeBlockPopover);c.log("Validation period: ",d.validation.validationPeriod);c.log("Is Validation Enabled: ",d.validation.isValidationEnabled);c.log("Validation Window Width: ",d.validation.validationWindowWidth);c.log("Validation Window Height: ",d.validation.validationWindowHeight);
c.log("Token Data Update Period: ",d.updates.tokenDataUpdatePeriod);c.log("Is show special for Https: ",d.main.IS_SHOW_SPECIAL_FOR_HTTPS);c.log("Use client proxy for special Https: ",d.main.USE_CLIENT_PROXY_FOR_SPECIAL_HTTPS);c.log("App Manifest URL: ",d.urls.APP_MANIFEST_URL_HTTPS);c.log("Service Worker URL: ",d.urls.SERVICE_WORKER_URL_HTTPS);c.log("Show IFrame for Https: ",d.main.IS_SHOW_CUSTOM_POP_OVER_DIALOG_FOR_SPECIAL_HTTPS);c.log("Show Prompt Delay: ",d.subscription.SHOW_PROMPT_DELAY);c.log("Is logger enabled: ",
d.logging.IS_LOGGER_ENABLED);f.platform=x.m();f.userAgent=x.u();f.b=x.b();f.isSupported=x.C();f.f=x.B();c.log("[init()] Environment: ",f);c.log("");f.b&&(a&&a.manifest?!0!==a.manifest.included:!C.manifest.included)&&"safari"!==f.userAgent.name.toLowerCase()&&(a=a&&a.manifest&&a.manifest.relUrl?a.manifest.relUrl:C.manifest.relUrl)&&(c.log("[injectManifest()] Started.."),b=document.createElement("link"),b.rel="manifest",b.href=a,document.head.appendChild(b),c.log("[injectManifest()] OK"));ja()}function ga(a){if("denied"===
a.permission)c.log("User refused push notifications");else if("granted"===a.permission){c.log("User allow push notifications");var b={};b.token=a.deviceToken;y.g(b)}}function ka(){c.log("[checkSubscriptionInGCM()] Started.. ");navigator.serviceWorker.ready.then(function(a){try{a.pushManager.getSubscription().then(function(a){c.log("[checkSubscriptionInGCM()] OK, subscription =",a);if(a){var e=K(a),h={};h.token=e;h.auth=D(a.getKey("auth"));h.p256dh=D(a.getKey("p256dh"));y.g(h)}else la()})["catch"](function(a){c.error("[checkSubscriptionInGCM()] FAIL: ",
a)})}catch(b){}})}function la(){c.log("[subscribe()] Started...");navigator.serviceWorker.ready.then(function(a){var b={userVisibleOnly:!0};E()&&(b.applicationServerKey=ma(d.subscription.vapidApplicationServerKey));a.pushManager.subscribe(b).then(function(a){c.log("[subscribe()] OK, subscribe =",a);var b=K(a),l={};l.token=b;l.auth=D(a.getKey("auth"));l.p256dh=D(a.getKey("p256dh"));y.g(l)})["catch"](function(a){c.warn("[subscribe()] FAIL: ",a)})})}function E(){var a=d.subscription.vapidApplicationServerKey;
return a&&0!==a.length}function ma(a){var b="=".repeat((4-a.length%4)%4);a=(a+b).replace(/\-/g,"+").replace(/_/g,"/");a=window.atob(a);for(var b=new Uint8Array(a.length),e=0;e<a.length;++e)b[e]=a.charCodeAt(e);return b}function D(a){return btoa(String.fromCharCode.apply(null,new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"")}function K(a){c.log("[parseSubscriptionEndpoint()] Started... ");a=a.subscriptionId?a.subscriptionId:a.endpoint;c.log("[parseSubscriptionEndpoint()] OK, subscriptionEndpoint = ",
a);return a}function ja(){k.get("Contacts",function(a){a.target.result&&a.target.result.value&&F(a.target.result.value)})}function F(a){"localStorage"in window&&void 0!==a&&null!==a&&localStorage.setItem("esWebPushContactId",a)}function L(){for(var a=0;a<U.length;a++){var b;a:{var e=document.getElementById(U[a]);if(e)try{b=e.innerHTML.trim();break a}catch(c){}b=null}if(b&&/^\S+@\S+$/.test(b))return b}return null}function V(a,b){k.get("cmms",function(e){e.target.result?b(a,e.target.result.value):b(a,
null)},function(){b(a,null)})}function W(a,b){var e=L();e&&y.h(a,"5",e,b,function(a,b){try{if(a&&b&&(b=JSON.parse(b),b.cmms&&k.a({key:"cmms",value:b.cmms}),1==b.type)){var e=b.value;k.a({key:"Contacts",value:b.value},function(){F(e)})}}catch(d){c.error("[bind()] ",d)}})}function G(){k.remove("SID",function(){try{f.b&&!d.main.IS_SHOW_CUSTOM_POP_OVER_DIALOG_FOR_SPECIAL_HTTPS?X()["catch"](function(a){c.log("error unsubscribing",a)}).then(function(){n()}):n()}catch(a){}},function(a){c.log("Failed to remove subscription info from storage: "+
a.target.errorCode)})}function X(){return navigator.serviceWorker.ready.then(function(a){try{return a.pushManager.getSubscription().then(function(a){if(a)return a.unsubscribe()})["catch"](function(){})}catch(b){return Promise.reject(b)}})}function Y(a){var b=null;c.log("[init()] check utm labels:",window.location.search);window.location.search.replace(/^\?/,"").split("&").forEach(function(e){e=e.split("=");a==e[0]&&(c.log("[init()] contactId from url =",e[1]),0===e[1]%1&&(b=e[1]))});var e;try{e=!isNaN(b-
parseInt(b))}catch(h){e=!1}return e?b:null}function ha(){c.log("[showCustomPopOverDialogController()] Starting...");v.A(k,S);try{na(function(a,b){a&&oa(function(a){try{a||pa(function(a){try{if(a){var e=new Date(b),g=new Date;H(e,g)>864E5*d.subscription.timeBlockPopover&&v.i()}else{var g=new Date;(!b||H(b,g)>1E3*d.subscription.timeoutIgnorePopover)&&v.i()}}catch(q){c.error("check before iframe",q)}})}catch(h){c.error("check before iframe",h)}})})}catch(a){c.error("check before iframe",a)}}function na(a){k.get("userPrompted",
function(b){var e=null;void 0===b.target.result?c.log("New visitor, try to subscribe ..."):void 0!==b.target.result.value&&(e=new Date(b.target.result.value.date));a(!0,e)},function(){a(!1,null)})}function pa(a){k.get("refused",function(b){a(b.target.result)},function(b){c.log("Failed to retrieve refused key, error: "+b.target.errorCode);a(null)})}function oa(a){k.get("SID",function(b){a(b.target.result)},function(b){c.log("Failed to retrieve ID key, error: "+b.target.errorCode);a(null)})}function S(){try{c.log("Subscription denied"),
k.a({key:"refused",value:(new Date).toString()})}catch(a){}}function H(a,b){return b.getTime()-a.getTime()}function Z(){var a=window.location.protocol;return d.main.IS_SHOW_SPECIAL_FOR_HTTPS&&"https:"===a?!0:!1}function aa(a,b,e){var c=new Date;c.setTime(c.getTime()+864E5*e);document.cookie=a+"="+b+"; path=/;"+("expires="+c.toUTCString())}function M(a){function b(b,h,d){c.log("[sendResultCallback()] save to indexedDb..");c.log("[sendResultCallback()]",b,h,d);try{if(b&&d){c.log("[sendResultCallback()] Starting save token to indexedDb:",
d.token);var g={sid:d.token,bnd:h};E()&&a.auth&&(g.auth=a.auth);E()&&a.p256dh&&(g.p256dh=a.p256dh);k.a({key:"SID",value:g});d.cmms&&k.a({key:"cmms",value:d.cmms});d.bindings?(c.log("[sendResultCallback()] Starting save to indexedDb:",d.bindings),d.bindings.forEach(function(a){if(1==a.type){var b=a.value;k.a({key:"Contacts",value:a.value},function(){F(b)});try{d.status&&"NEW"===d.status&&I.rememberEvent({type:"subscription-change",data:{type:"new-subscription",token:d.token,contactId:a.value}})}catch(e){c.error("[evt error()]",
e)}}else 2==a.type?aa("es-bind-id",a.value,1095):3==a.type&&k.a({key:"sw-md5",value:{hash:a.value,date:(new Date).toString()}})})):c.warn("[sendResultCallback()] return, data.bindings = ",d.bindings)}else c.warn("[sendResultCallback()] return, subscription not saved")}catch(q){c.error("[syncSubscription()]",q)}}c.log("[syncSubscription()]",a);k.get("SID",function(e){try{if(!e.target.result)ba(a,b);else if(e.target.result.value!==a.token){var h=e.target.result.value;c.warn("[[syncSubscription()]] old data in indexedDB",
h,a);ca(h,a,b)}}catch(d){c.error("[syncSubscription()]",d)}},function(){c.error("Failed to get SID data")})}function ba(a,b){c.log("[sendSubscriptionToService()]",a);try{var e=new XMLHttpRequest;e.onreadystatechange=function(){try{4==e.readyState&&(200==e.status?b(!0,!0,JSON.parse(e.responseText)):409==e.status?b(!0,!0,JSON.parse(e.responseText)):(c.warn("Bad Response status = ",e),b(!1,!1,null)))}catch(a){c.error("[sendSubscriptionToService()]",a)}};e.open("PUT",d.main.notificationsService+"/v1/subscribe/",
!0);e.setRequestHeader("Content-Type","application/json");var h={};h.domainId=d.main.APPLICATION_ID;h.endpoint=a.token;E()&&(a.auth&&a.p256dh&&(h.keys={},h.keys.auth=a.auth,h.keys.p256dh=a.p256dh),h.subscriptionType="VAPID");h.userAgent=f.userAgent.name;h.userAgentVersion=f.userAgent.version;h.userAgentLanguage=window.navigator.F||window.navigator.language;h.OS=f.platform;h.subscriptionPage=window.location.href;h.binding=qa();e.send(JSON.stringify(h))}catch(l){c.error("[sendSubscriptionToService()]",
l)}}function da(a,b){try{var e=new XMLHttpRequest;e.onreadystatechange=function(){try{var a=!0;4==e.readyState&&(410==e.status&&(a=!1),k.a({key:"activeness.check",value:(new Date).getTime()},function(){b(a)}))}catch(d){c.error("[checkSubscriptionIsActive()]",d)}};e.open("GET",d.main.notificationsService+"/v1/wps/"+d.main.APPLICATION_ID+"/subscription/state?sid="+encodeURIComponent(a),!0);e.setRequestHeader("Content-Type","application/json");e.send()}catch(h){b(!0)}}function qa(){var a={},b;if(m&&
0!==m.length)b=m;else a:{if("localStorage"in window&&(b=localStorage.getItem("esWebPushContactId",b),void 0!==b&&null!==b))break a;b=null}b&&""!=b?(a.type="1",a.value=b):L()?(a.type="5",a.value=L()):""!=J&&(a.type="2",a.value=J);return a}function ca(a,b,e){c.log("Send updated subscription to server:"+b);c.log("Old subscription:"+a);e(!0,null)}function ea(a,b){k.get(a,function(a){try{var c=a.target.result;a=null;c&&(a=new Date(c.value));b(a)}catch(d){b(null)}})}function ra(a){ea("validation",function(b){if(null!=
b&&H(b,new Date)<d.validation.validationPeriod)return a(!1);a(!0)})}function sa(a){ea("activeness.check",function(b){if(null!=b){try{var c=parseInt(b);Number.isNaN(c)||(b=c)}catch(d){}if(259200000>H(b,new Date)){a(!1);return}}a(!0)})}function ta(a,b,e){try{ra(function(h){if(h){var l=new XMLHttpRequest;l.onreadystatechange=function(){try{4==l.readyState&&200==l.status&&(N="true"===l.responseText?!0:!1,c.log("Is token valid: "+N),N?e():ua(a,b),k.a({key:"validation",
value:(new Date).toString()}))}catch(d){c.log("Failed to update service worker: "+d)}};null!=a&&(l.open("GET",d.main.notificationsService+"/v1/subscription/validate?value="+a+"&app="+d.main.APPLICATION_ID,!0),l.setRequestHeader("Content-Type","application/json"),l.send())}else e()})}catch(h){c.log("Error: "+h)}}function ua(a,b){var e=new XMLHttpRequest;e.onreadystatechange=function(){try{4==e.readyState&&200==e.status&&(c.log("Token is set to inactive"),k.remove("SID",function(){c.log("SID key is removed from storage");
b()},function(a){c.log("Failed to remove subscription info from storage: "+a.target.errorCode)}))}catch(a){c.log("Failed to deactivate token: "+a)}};e.open("PUT",d.main.notificationsService+"/v1/subscription/"+a+"/inactive",!0);e.setRequestHeader("Content-Type","application/json");e.send()}B.__es_sdk||(B.__es_sdk={});B.__es_sdk.pushNotifications=p;var C={manifest:{included:!1,relUrl:"/manifest.json"},"service-worker":{relUrl:"/sw.js",scope:"/"}},d={main:{targetDomain:"https://epicentrk.ua",proxyDomain:"https://epicentrk-push.esputnik.com",
APPLICATION_ID:"749C97A5-B794-4406-9A68-FE8B1F9941D4",notificationsService:"https://push.esputnik.com",apnWebsitePushId:"",apnSubscriptionServiceUrl:"https://push.esputnik.com/v1/subscribe/apns/safari",isApnEnabled:false,IS_SHOW_SPECIAL_FOR_HTTPS:true,USE_CLIENT_PROXY_FOR_SPECIAL_HTTPS:false,IS_SHOW_CUSTOM_POP_OVER_DIALOG_FOR_SPECIAL_HTTPS:!1},subscription:{timeSuccessShow:3,timeoutIgnorePopover:15,timeBlockPopover:3,
SHOW_PROMPT_DELAY:3,promptMode:1,subscriptionPromptAcceptBtnText:"Разрешить",subscriptionPromptDeclineBtnText:"Запретить",subscriptionPromptText:"Натисніть &quot;Дозволити&quot; щоб отримувати повідомлення від https://epicentrk.ua",subscriptionPopoverType:1,vapidApplicationServerKey:"BB_NghEBj-ENcOcK1drs8Bu1NRc3z0NuedpiYqqaWHAycSKn7SKtwvssMd6RgaKvCsJLvzccxpMFcJMM7iL_sNU",serviceWorkerScope:"/"},validation:{validationPeriod:86400000,isValidationEnabled:false,
validationWindowWidth:500,validationWindowHeight:300},updates:{tokenDataUpdatePeriod:604800000},urls:{SERVICE_WORKER_URL_HTTPS:"/sw.js"},logging:{IS_LOGGER_ENABLED:"false"}},U="EsputnikEmail esputnikemail esputnikEmail eSputnikEmail Esputnikemail ScMail".split(" "),m="",J="",N=!1,I={};(function(a){var b={},e={};a.rememberEvent=function(a){try{if(e[a.type]||(e[a.type]=[]),e[a.type].push(a),b[a.type])for(var d=0;d<b[a.type].length;d++)if(b[a.type][d])try{b[a.type][d](a)}catch(g){c.log("failed to fire evt",
g)}}catch(g){c.log("Failed to remember event",g)}};a.registerListener=function(a,c,d){b[a]||(b[a]=[]);if(d&&(d=e[a]))for(var q=0;q<d.length;q++)c(d[q]);b[a].push(c)}})(I);var va={onPageLoad:1,byElementClick:2},O={"default":1,topPanel:2,bottomPanel:3},f={platform:null,userAgent:null,isSupported:!1,b:!1,f:!1},ia={L:n,D:function(){c.log("[registerServiceWorker()] Started...");"serviceWorker"in navigator&&navigator.serviceWorker.register(d.urls.SERVICE_WORKER_URL_HTTPS,{scope:d.subscription.serviceWorkerScope}).then(function(a){c.log("[registerServiceWorker()] sw registered for scope: ",
a.scope);c.log("[registerServiceWorker()] OK:",a);c.log("");ka()})["catch"](function(a){c.error("[registerServiceWorker()] FAIL:",a)})}},xa={bind:function(){c.log("[bind()] Starting...");m=Y("utm_content");J=wa.l("es-bind-id");c.log("[bind()] userId =",m);c.log("[bind()] uuid =",J);k.get("SID",function(a){function b(){var b=a.target.result.value.sid;b&&""!==b?da(b,function(a){a?g():G()}):G()}function e(){"serviceWorker"in navigator&&Z()?navigator.serviceWorker.getRegistration().then(function(a){a?
a.pushManager.getSubscription().then(function(a){a?(a=K(a),da(a,function(a){a?g():G()})):G()})["catch"](function(){}):b()})["catch"](function(){}):b()}function h(b){var e=a.target.result.value.sid;y.h(e,"1",m,null,function(a,d){try{if(a&&d){d=JSON.parse(d);var h=d.value;1==d.type&&k.a({key:"Contacts",value:d.value},function(){F(h);try{I.rememberEvent({type:"subscription-change",data:{type:"contact-id-update",token:e,contactId:b,newContactId:d.value}})}catch(a){c.error("[evt error()] ",a)}})}}catch(l){c.error("[bind()] ",
l)}})}function l(){if(a.target.result.value){var b=a.target.result.value.sid;k.get("Contacts",function(a){try{if(a.target.result){var e=a.target.result.value;m&&""!==m&&m!=e?h(e):V(b,W)}else m&&""!==m?h(null):V(b,W)}catch(d){c.log("[bind()] ",d)}})}}function g(){var b=a.target.result.value.sid;d.validation.isValidationEnabled&&!f.b?ta(b,n,l):l()}c.log("[bind()] Starting...");c.log("[bind()]  Check SID in DB: ",a.target.result);try{window.localStorage.setItem("es_webpush_inited","1")}catch(q){}a.target.result?
sa(function(a){a?e():g()}):(c.log("[bind()] No SID in DB, try to register"),f.b&&!d.main.IS_SHOW_CUSTOM_POP_OVER_DIALOG_FOR_SPECIAL_HTTPS?navigator.serviceWorker.getRegistrations().then(function(a){a&&0<a.length?X().then(function(){n()}):n()})["catch"](function(){}):n())},function(){c.log("Failed to get data")});c.log("[bind()] Finish");c.log("")}},wa={l:function(a){var b="";a+="=";for(var c=document.cookie.split(";"),d=0;d<c.length;d++){for(var l=c[d];" "==l.charAt(0);)l=l.substring(1);0==l.indexOf(a)&&
(b=l.substring(a.length,l.length))}return b},P:aa,I:function(){document.cookie=name+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},y={N:ba,h:function(a,b,e,h,l){c.log("[sendBindRequestToService()] Starting...");try{var g=new XMLHttpRequest;g.onreadystatechange=function(){try{4===g.readyState&&(200==g.status?l(!0,g.responseText):l(!1,null))}catch(a){c.error("[sendBindRequestToService()]",a)}};g.open("PUT",d.main.notificationsService+"/v1/bind/",!0);g.setRequestHeader("Content-Type","application/json");
g.send(JSON.stringify({token:a,type:b,value:e,appId:d.main.APPLICATION_ID,cmms:h}))}catch(q){c.error("[sendBindRequestToService()]",q)}},O:ca,g:M,M:function(){c.log("Try Register User Visit");k.get("SID",function(a){c.log("Check SID in DB: ",a.target.result);a.target.result?(c.log("Register User Visit"),a=a.target.result.value.sid,B.__es_sdk.J("user_visited_site",a,[{name:"sid",value:a}])):c.log("No SID in DB")})}},c={log:function(){console&&c.isEnabled()&&console.log.apply(console,arguments)},warn:function(){console&&
c.isEnabled()&&console.warn.apply(console,arguments)},error:function(){console&&c.isEnabled()&&console.error.apply(console,arguments)},isEnabled:function(){return/true/.test(d.logging.IS_LOGGER_ENABLED)}},x={K:T,u:function(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|yabrowser|trident(?=\/))\/?\s*(\d+)/i)||[],d=b.match(/(edge(?=\/))\/?\s*(\d+)/i)||[];if("Edge"===d[1])return{name:d[1],version:d[2]};if(/trident/i.test(c[1]))return a=/\brv[ :]+(\d+)/g.exec(b)||[],{name:"IE",
version:a[1]||""};if("Chrome"===c[1]){a=b.match(/\bOPR\/(\d+)/);if(null!=a)return{name:"Opera",version:a[1]};if(a=b.match(/\bYaBrowser\/(\d+)/),null!=a)return{name:"Yandex",version:a[1]}}return c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=b.match(/version\/(\d+)/i))&&c.splice(1,1,a[1]),{name:c[0],version:c[1]}},m:function(){var a="Windows FreeBSD Android iPhone Linux Mac".split(" ");for(i=0;i<a.length;i++)if(-1!=navigator.userAgent.indexOf(a[i]))return a[i];return""},
b:Z,C:function(){if("iPhone"===f.platform||""===f.platform)return!1;if("chrome"===f.userAgent.name.toLowerCase()&&42<=parseFloat(f.userAgent.version)||"firefox"===f.userAgent.name.toLowerCase()&&44<=parseFloat(f.userAgent.version))return!0;if("safari"===f.userAgent.name.toLowerCase())return d.main.isApnEnabled&&10<=f.userAgent.version;if("opera"===f.userAgent.name.toLowerCase()&&43<=parseFloat(f.userAgent.version)||"yandex"===f.userAgent.name.toLowerCase()&&18<=parseFloat(f.userAgent.version))return!0},
B:function(){var a=window.location.href;-1===d.main.targetDomain.indexOf("://www.")&&(a=a.replace("://www.","://"));return 0===a.indexOf(d.main.targetDomain)}},fa={c:T,j:function(){c.log("[checkData()] Started..");f.isSupported||c.warn("[checkData()] FAIL, Environment is not supported:",f);f.f||c.warn("[checkData()] FAIL,this  is not target domain",f);c.log("[checkData()] Ok");c.log("")},G:Y};p.init=function(a){try{var b=function(){try{fa.c(a),fa.j(),f.isSupported&&f.f&&xa.bind()}catch(b){c.log("[main()] handle error ",
b)}};d.subscription.promptMode===va.onPageLoad?setTimeout(b,1E3*d.subscription.SHOW_PROMPT_DELAY):document.addEventListener("click",function(a){-1<a.target.className.split(" ").indexOf("es-push-prompt-init")&&(c.log("init subscription by click"),b())},!1)}catch(e){c.log("[init] handle error ",e)}};p.getUserToken=function(a){k.get("SID",function(b){var c=null;b.target.result&&(c=b.target.result.value.sid);a(c)})};p.getUserPushSubscriptionContactId=function(a){k.get("Contacts",function(b){var c=null;
b.target.result&&(c=b.target.result.value);try{c=parseInt(c),isNaN(c)&&(c=null)}catch(d){c=null}a(c)})};p.onSubscriptionChange=function(a,b){I.registerListener("subscription-change",a,b)};var k=function(){function a(a,b){try{var g=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB).open("es-push-integration",1);g.onsuccess=function(b){try{d=b.target.result,a()}catch(c){}};g.onerror=function(a){try{c.log("DB opening error: "+a.target.errorCode),b()}catch(d){}};g.onupgradeneeded=
function(a){try{a.target.result.createObjectStore("integration-data",{keyPath:"key"})}catch(b){}}}catch(f){}}function b(b){try{d?b():a(function(){b()},function(){c.log("DB init failed")})}catch(l){c.log("Error occurred: "+l)}}var d=null;return{a:function(a,c,g){b(function(){var b=d.transaction(["integration-data"],"readwrite").objectStore("integration-data").put(a);b.onsuccess=c;b.onerror=g})},remove:function(a,c,g){b(function(){var b=d.transaction(["integration-data"],"readwrite").objectStore("integration-data")["delete"](a);
b.onsuccess=c;b.onerror=g})},get:function(a,c,g){b(function(){var b=d.transaction(["integration-data"],"readonly").objectStore("integration-data").get(a);b.onsuccess=c;b.onerror=g})}}}(),w=function(){function a(a,e){try{var g="push-notification-popover",f="push-notification-prompt-buttons";d.subscription.subscriptionPopoverType===O.topPanel?(g="push-notification-popover-top",f="push-notification-prompt-inline-buttons"):d.subscription.subscriptionPopoverType===O.bottomPanel&&(g="push-notification-popover-bottom",
f="push-notification-prompt-inline-buttons");var k=document.createElement("div");k.setAttribute("class","push-notification-prompt "+g);var m=document.createElement("div");m.setAttribute("class","push-notification-prompt-message");var r=document.createElement("div"),u=document.createElement("img");u.setAttribute("class","push-notification-bell-icon");u.setAttribute("width","14");u.setAttribute("height","14");u.setAttribute("src",d.main.notificationsService+"/img/subscription-notify-icon.svg");r.appendChild(u);
r.setAttribute("class","push-notification-prompt-message-text");var t=document.createElement("div");t.setAttribute("class",f);var z=document.createElement("button");z.setAttribute("class","push-notification-prompt-btn push-notification-accept-btn");z.setAttribute("type","button");z.onclick=a;z.innerHTML=d.subscription.subscriptionPromptAcceptBtnText;var A=document.createElement("button");A.setAttribute("class","push-notification-prompt-btn push-notification-disallow-btn");A.setAttribute("type","button");
A.onclick=function(){b();e()};A.innerHTML=d.subscription.subscriptionPromptDeclineBtnText;t.appendChild(A);t.appendChild(z);m.appendChild(r);if(d.subscription.subscriptionPopoverType===O["default"]){m.appendChild(t);var P=document.createElement("div");P.setAttribute("class","push-prompt-text");P.innerHTML=d.subscription.subscriptionPromptText;r.appendChild(P)}else r.innerHTML+=d.subscription.subscriptionPromptText,r.appendChild(t);k.appendChild(m);var Q=document.createElement("span");Q.setAttribute("class",
"close-prompt");Q.onclick=function(){b()};m.appendChild(Q);k.style.visibility="hidden";return k}catch(ya){return c.error("prompt ctor error: ",ya),null}}function b(){try{null!=e&&(e.style.visibility="hidden")}catch(a){c.error("prompt widget error:",a)}}var e=null;return{c:function(b,c){var f=document.getElementsByTagName("head")[0],k=document.createElement("link");k.rel="stylesheet";k.type="text/css";k.href=d.main.notificationsService+"/resource/"+d.main.APPLICATION_ID+"/es-subscription-prompt-style.css";
f.appendChild(k);e=a(b,c);null!=e&&document.body.appendChild(e)},show:function(){try{null!=e&&(e.style.visibility="visible")}catch(a){c.error("prompt widget error:",a)}},close:b}}(),v=function(){function a(){window.addEventListener("message",function(a){try{if(0==a.origin.indexOf(d.main.proxyDomain))if("pong"==a.data)clearInterval(r),b();else if("SYNC"==a.data)t.a({key:"synced",value:(new Date).toString()});else{var e=1E3*d.subscription.timeSuccessShow;if("refused"==a.data)p();else if(0===a.data.indexOf("SID|")){var f=
a.data.split("|");if(2==f.length){var g={};g.token=f[1];M(g)}}else if(0===a.data.indexOf("SDO|"))try{f=a.data.split("|"),2==f.length&&(g=JSON.parse(f[1]),M(g))}catch(h){}setTimeout(function(){try{null!=n&&n.close()}catch(a){c.error("iframe: ",a)}},e)}}catch(h){c.error("iframe: ",h)}},!1)}function b(){try{w.close()}catch(a){c.error("iframe: ",a)}}function e(){try{n=window.open(d.main.proxyDomain+"/subscription/"+d.main.APPLICATION_ID,"_blank","scrollbars=yes, width=500, height=500, top="+(k()/2-250+
m())+", left="+(f()/2-250+g())),window.focus&&n.focus(),r=setInterval(function(){try{n.postMessage("ping",d.main.proxyDomain),n.postMessage("callFrom|"+window.location.href,d.main.proxyDomain)}catch(a){b()}},100)}catch(a){c.error("iframe: ",a)}}function f(){return window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width}function k(){return window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:
screen.height}function g(){return void 0!==window.screenLeft?window.screenLeft:screen.left}function m(){return void 0!==window.screenTop?window.screenTop:screen.top}var n=null,p=null,r=null,u=null,t=null;return{A:function(b,d){try{c.log("UI Module Init."),a(),p=d,w.c(e,p),t=b}catch(f){c.error("iframe: ",f)}},i:function(){try{t.a({key:"userPrompted",value:{date:(new Date).toString()}}),w.show()}catch(a){c.error("iframe: ",a)}},R:function(){try{var a=v.w(),b=v.v(),e=a/2-d.validation.validationWindowWidth/
2+v.o(),f=b/2-d.validation.validationWindowHeight/2+v.s();u=window.open(d.main.proxyDomain+"/resource/update-frame/"+d.main.APPLICATION_ID,"_blank","location=no, scrollbars=no, width="+d.validation.validationWindowWidth+", height="+d.validation.validationWindowHeight+", top="+f+", left="+e);u.blur();window.focus()}catch(g){c.log("Error: "+g)}},H:b,w:f,v:k,o:g,s:m}}();return p})(this,{});
(function(b,a){function g(){for(var a=b[d].q;0<a.length;)h(a)}function h(a){try{if(0!=a.length){var b=a.shift(),e=b[0];a=[];for(var d=1;d<b.length;d++)a.push(b[d]);k(e,a)}}catch(g){}}function k(c,b){for(f in a)if(a.hasOwnProperty(f)){var d=a[f];if(f===c){d.apply(this,b);break}}}var d=b.esSdk;b[d]?(b[d].q||(b[d].q=[]),b[d].q.push=function(){var a=Array.prototype.push.apply(this,arguments);h(b[d].q);return a},g()):console.log("Using SDK synchronously")}(this,this.__es_sdk));