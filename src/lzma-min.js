//! © 2015 Nathan Rugg <nmrugg@gmail.com> | MIT
"undefined"==typeof Worker||"undefined"!=typeof location&&"file:"===location.protocol?"undefined"!=typeof global&&"undefined"!=typeof require?this.LZMA=function(n){return require(n||"./lzma_worker.js").LZMA}:"undefined"!=typeof window&&window.document?!function(){function n(n){var o;return t(n),o={compress:function(n,t,a,r,c){e.LZMA_WORKER?e.LZMA_WORKER.compress(n,t,a,r,c):setTimeout(function(){o.compress(n,t,a,r,c)},50)},decompress:function(n,t,a,r){e.LZMA_WORKER?e.LZMA_WORKER.decompress(n,t,a,r):setTimeout(function(){o.decompress(n,t,a,r)},50)}}}var e,o=this,t=function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,t.onload=function(){o.LZMA=n},document.getElementsByTagName("head")[0].appendChild(t)};"undefined"!=typeof window?e=window:global&&(e=global),o.LZMA=n}():console.log("Can't load the worker. Sorry."):this.LZMA=function(n){var e=1,o=2,t=3,a={},r=new Worker(n||"./lzma_worker.js");return r.onmessage=function(n){n.data.action===t?a[n.data.callback_num]&&"function"==typeof a[n.data.callback_num].on_progress&&a[n.data.callback_num].on_progress(n.data.result):a[n.data.callback_num]&&"function"==typeof a[n.data.callback_num].on_finish&&(a[n.data.callback_num].on_finish(n.data.result),delete a[n.data.callback_num])},r.onerror=function(n){throw Error(n.message+" ("+n.filename+":"+n.lineno+")")},function(){function n(n,e,o,t,c){var i;do i=Math.floor(1e7*Math.random());while(void 0!==a[i]);a[i]={on_finish:t,on_progress:c},r.postMessage({action:n,callback_num:i,data:e,mode:o})}return{compress:function(o,t,a,r,c){n(e,o+"",t,a,r,c)},decompress:function(e,t,a,r){n(o,e,!1,t,a,r)}}}()};