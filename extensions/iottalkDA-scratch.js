"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function e(o,t,n){function r(c,l){if(!t[c]){if(!o[c]){var u="function"==typeof require&&require;if(!l&&u)return u(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+c+"'")}var i=t[c]={exports:{}};o[c][0].call(i.exports,function(e){var t=o[c][1][e];return r(t?t:e)},i,i.exports,e,o,t,n)}return t[c].exports}for(var s="function"==typeof require&&require,c=0;c<n.length;c++)r(n[c]);return r}({1:[function(e,o,t){function n(e,o,t,n){$.ajax({type:"POST",url:e+"/"+o,contentType:"application/json; charset=utf-8",data:JSON.stringify({profile:t}),success:function(e){console.log(e),console.log("register success")},error:function(e,o){console.log(e),console.log(o),console.log("register failed")},complete:function(){"function"==typeof n&&n()},dataType:"text"})}function r(e,o,t){$.ajax({type:"DELETE",url:e+"/"+o,success:function(e){console.log(e),console.log("Detach success")},error:function(e,o){console.log(e),console.log(o),console.log("Detach failed")},complete:function(){"function"==typeof t&&t()},dataType:"text"})}function s(e,o,t,n,r){$.ajax({type:"PUT",url:e+"/"+o+"/"+t,contentType:"application/json; charset=utf-8",data:JSON.stringify({data:n}),success:function(e){console.log(e),console.log("Update success")},error:function(e,o){console.log(e),console.log(o),console.log("Update failed")},complete:function(){"function"==typeof r&&r()},dataType:"text"})}function c(e,o,t,n){var r=-1;$.ajax({type:"GET",cache:!1,url:e+"/"+o+"/"+t,success:function(e){r=e,console.log(e),console.log("Get success")},error:function(e,o){console.log(e),console.log(o),console.log("Get failed")},complete:function(){"function"==typeof n&&n(r)},dataType:"text"})}window&&(window.IoTtalk={register:n,detach:r,update:s,get:c}),o.exports={register:n,detach:r,update:s,get:c}},{}],2:[function(e,o,t){var n={_shutdown:function(){},_getStatus:function(){return{status:2,msg:"Ready"}}},r={blocks:[]};o.exports={add:function(e,o,t,s){n[s]=e,r.blocks.push([o,t,s]);for(var c=r.blocks.length-1,l=4;l<arguments.length;++l)r.blocks[c].push(arguments[l])},ext:n,descriptor:r}},{}],3:[function(e,o,t){!function(o){function t(e){u.url=e}function n(e,o){if(null===u.url||null!==u.mac)return void o();u.mac=e;var t=function(){u.registered=!0,o()};c.register(u.url,e,f,t)}function r(e,o,t){if(i[e]=o,null===u.url)return void t();var n=JSON.stringify(i);c.update(u.url,u.mac,a,[n],t)}function s(e,o,t,n){if(null===u.url)return void n();var r=function(e){if("object"===("undefined"==typeof e?"undefined":_typeof(e))&&e.samples&&e.samples[0]&&e.samples[0][1]){console.log(e.samples[0][1]);var o=JSON.parse(e.samples[0][1]);console.log(o),console.log(t),n(o[t]||-1)}else n(-1)};c.get(u.url,e,o,r)}var c=e("__iottalk_api.js"),l=e("__scratchX-register.js"),u={url:null,mac:null,registered:!1},i={},a="Json_string",f={d_name:"ScratchX",dm_name:"ScratchX",is_sim:!1,df_list:[a]};l.add(t," ","set remote server as %s","setServer","url"),l.add(n,"w","register mac address as %s","register","mac"),l.add(r,"w","update %s %s","update","key","val"),l.add(s,"R","get %s %s %s","get","mac","feature","key"),l._shutdown=function(){null!==u.mac&&c.detach(u.url,u.mac)},ScratchExtensions.register("Chatroom extension",l.descriptor,l.ext)}({})},{"__iottalk_api.js":1,"__scratchX-register.js":2}]},{},[3]);