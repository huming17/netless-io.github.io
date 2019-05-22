"use strict";var precacheConfig=[["/dist/apiMiddleware/RoomOperator.d.ts","305ce05ae649cd52f16664e5b1bee80c"],["/dist/apiMiddleware/UserOperator.d.ts","521e818d7c1cec52cea0dfa3dfe14356"],["/dist/apiMiddleware/index.d.ts","d2be430f44bf03e99973f97ca557e2d9"],["/dist/apiMiddleware/netlessWhiteboardApi.d.ts","db39c0314fb493e360ee5ee17d212d0b"],["/dist/appTokenConfig.d.ts","edcb8430c42312c37c2e67a6821d61d5"],["/dist/components/menu/MenuAnnexBox.d.ts","31b443cad7caa3570423bcfef240e7d2"],["/dist/components/menu/MenuBox.d.ts","c585a8c5d5283d8f53a7f70a87df2b89"],["/dist/components/menu/MenuHotKey.d.ts","51c61ca30908403886e58a8cc8671e4e"],["/dist/components/menu/MenuPPTDoc.d.ts","0351ed8b846a47cada02e93d1e0b9f63"],["/dist/components/menu/PPTDatas.d.ts","b3659301468199c2de9ae3d9388b83db"],["/dist/components/whiteboard/UserCursor.d.ts","99d06dd93f5ee9b2d1235127a03ea2d0"],["/dist/components/whiteboard/WhiteboardBottomLeft.d.ts","bdae600cf4dc1042226ae87a25486005"],["/dist/components/whiteboard/WhiteboardBottomRight.d.ts","73f7dd1a68c47881110b7962b938a35e"],["/dist/components/whiteboard/WhiteboardChat.d.ts","204957bafbb694cb4e6d310fff28742c"],["/dist/components/whiteboard/WhiteboardPerspectiveSet.d.ts","b602d0fd107545fda50a5c2785c79664"],["/dist/components/whiteboard/WhiteboardTopLeft.d.ts","74702973aa6fdb803d33e3b772c9801b"],["/dist/components/whiteboard/WhiteboardTopRight.d.ts","042aed3bcdc6811bf1c9968b5f7cf74f"],["/dist/index.d.ts","e2ebd7ddedcadeeadbf819c35985c768"],["/dist/locale/index.d.ts","aa88da3793f9e2215a90a750dca251c5"],["/dist/models/ApplianceStore.d.ts","4e266dbd6c5a5a38ad5488a728855754"],["/dist/models/ErrorPageStore.d.ts","094d2333b2dc0d5e851a55748cc29f5c"],["/dist/models/UserInfDataStore.d.ts","511ee78cdcedb37bf3e2d98abd1225e0"],["/dist/models/WhiteboardPageStore.d.ts","39f1a5efe09301a7b074867f9e140332"],["/dist/pages/AppRoutes.d.ts","20eea236c1353735dc7dea3d11540e6b"],["/dist/pages/Homepage.d.ts","b182821cb8567ec7fbc5d9677d2ec515"],["/dist/pages/LandingFooter.d.ts","4ae4640eed5154319ca6044aea5ccfd2"],["/dist/pages/PageError.d.ts","d87fd3ed6339313f22a5aa69674867a0"],["/dist/pages/PageNameInput.d.ts","f376b4b23ad44fdcf21c136e6905fd8c"],["/dist/pages/PlayerPage.d.ts","4083fe4d7aa03bb87dc1e128456ac2ba"],["/dist/pages/SwitchLanguages.d.ts","7703e6d7de1275ad873cd504dc6e8bb6"],["/dist/pages/WhiteboardCreatorPage.d.ts","32097b4316c8bad1d5da4f7e9ab3459d"],["/dist/pages/WhiteboardPage.d.ts","902fad4695921c7e22e7c277eabfeb85"],["/dist/tools/ToolBoxUpload.d.ts","9c265e88fae5ecbe3cb8b27b9b4903fd"],["/dist/tools/UploadBtn.d.ts","57863c19d7ce96cabbb167837c1f4bd6"],["/dist/tools/UploadManager.d.ts","1c0261419bc45670298749217341bd56"],["/dist/tools/WatchDisplayer.d.ts","4fc5a59abf6096ac89ac5c416a0d0fec"],["/dist/whiteUIKit/WhiteUIButton.d.ts","b745a7cfd46d0df920bbf778e873faf2"],["/dist/whiteUIKit/WhiteUIInput.d.ts","3c499678059fbdad2cafed3c3aecd2c4"],["/index.html","c295afe935a41e00245fcb0f41cccd5d"],["/static/css/main.8a1c1922.css","0e32cb858b9673821e4109e58f827f1a"],["/static/media/add.9d00b07f.svg","9d00b07fa04288b91cfaebffe6c4ecbc"],["/static/media/add_icon.a7f18a11.svg","a7f18a11897d834d7f141552f7382131"],["/static/media/annex_box.4c00b9fa.svg","4c00b9fae7e8b1a2444151b25f03351a"],["/static/media/arrow.cc5eb2c4.svg","cc5eb2c463aa56ef8b2976b9d0a218dd"],["/static/media/board.564b8c1b.svg","564b8c1b8b46294ee4221e6ca907310f"],["/static/media/board_black.6b3d6fe3.svg","6b3d6fe3630970b9e46c5e44318e91b8"],["/static/media/chat.d0c03b18.svg","d0c03b18bc52a4c4a69f963c2c876ff4"],["/static/media/close.f3b3b8ff.svg","f3b3b8ff9e2999822a6e325540674455"],["/static/media/disconnected.2240253c.svg","2240253c18b9b8377d48526647d08d5f"],["/static/media/doc_to_image.d8dc867e.svg","d8dc867e74bcd480aff740c80b5afcb7"],["/static/media/doc_to_web.997c41e5.svg","997c41e5d684a45f629cdbd5cc533e11"],["/static/media/down_cursor.7a6c4656.svg","7a6c4656ce8b718b029808914d3bbd60"],["/static/media/ellipse.fb9c5834.svg","fb9c5834799d96282214876f1cf6ab63"],["/static/media/eraser.a7fff178.svg","a7fff17832df5d3d253628315eecbd02"],["/static/media/exit_full_screen.f3a6f854.svg","f3a6f8540a5fe0c09f54ff8c38460647"],["/static/media/hand.fcd450f0.svg","fcd450f0ca5b0379874db867a29adc72"],["/static/media/home.55e77e52.svg","55e77e52fe1738d5e08f93d424e61cec"],["/static/media/image.77addf46.svg","77addf46efc133d984502078cf81d8bc"],["/static/media/left_arrow.1692b673.svg","1692b673fdc49da60713a6c596956e3a"],["/static/media/like.afad6157.svg","afad6157d5fa5ebc03e7c6e00b61ed7e"],["/static/media/like_icon.76bc429d.svg","76bc429d79295192cf6248c4ed90e913"],["/static/media/loading.15337d13.svg","15337d136aa4e40c1b602dd263148e93"],["/static/media/name_bg.e138b37c.jpg","e138b37cce7efaf04e610c2bd3e68278"],["/static/media/netless_bg.a46e2bb6.svg","a46e2bb6b6a081e9570620e01035528c"],["/static/media/netless_black.1b214727.svg","1b214727f1db7fecb52b52ca2abc2858"],["/static/media/page404.4dccc087.svg","4dccc087cb886ed03ad32e1b9c4119d4"],["/static/media/pencil.a0e6b187.svg","a0e6b1878a3998fe7f0a49aa72b6cf0f"],["/static/media/player.5298127a.svg","5298127a2f2414e22f9b672f14a68725"],["/static/media/player_begin.6dff9187.svg","6dff91879e855c1b5b8bfefa17bba108"],["/static/media/player_full_screen.853cf74a.svg","853cf74a3af227cdbf02efb9f3c07aa8"],["/static/media/player_stop.8d9cbaf0.svg","8d9cbaf059f1d479f0dbb3b099f9ace7"],["/static/media/rectangle.c465eab7.svg","c465eab7d3d6d35fe8cf51052dbed1a1"],["/static/media/right_arrow.ff2effde.svg","ff2effdecc16e2e4ed092cf4fedec39b"],["/static/media/room_not_find.ddfb9367.svg","ddfb9367bcf2aa9ec68b4fcdbd84d3e6"],["/static/media/selector.90734fee.svg","90734feef8144b4fb4187d4ea5283851"],["/static/media/text.f59fa529.svg","f59fa5295af6bae6da1d99f3a80d0257"],["/static/media/up_cursor.e3648625.svg","e364862560ed4e63fca151b0f5275503"],["/static/media/web_app.ea922225.png","ea9222252254b21f17ce8e901a2fc524"],["/static/media/whiteboard_keyboard.9a5e9795.svg","9a5e97955acc961a2ce18a10be10e382"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,d){var c=new URL(e);return d&&c.pathname.match(d)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],d=new URL(a,self.location),c=createCacheKey(d,hashParamName,t,/\.\w{8}\./);return[d.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(d){return setOfCachedUrls(d).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return d.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),d="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,d),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});