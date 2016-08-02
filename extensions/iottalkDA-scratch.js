"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function e(t,o,n){function s(r,i){if(!o[r]){if(!t[r]){var a="function"==typeof require&&require;if(!i&&a)return a(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+r+"'")}var u=o[r]={exports:{}};t[r][0].call(u.exports,function(e){var o=t[r][1][e];return s(o?o:e)},u,u.exports,e,t,o,n)}return o[r].exports}for(var c="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e,t,o){function n(e,t,o,n){$.ajax({type:"POST",url:e+"/"+t,contentType:"application/json; charset=utf-8",data:JSON.stringify({profile:o}),success:function(e){console.log(e),console.log("register success")},error:function(e,t){console.log(e),console.log(t),console.log("register failed")},complete:function(){"function"==typeof n&&n()},dataType:"text"})}function s(e,t,o){$.ajax({type:"DELETE",url:e+"/"+t,success:function(e){console.log(e),console.log("Detach success")},error:function(e,t){console.log(e),console.log(t),console.log("Detach failed")},complete:function(){"function"==typeof o&&o()},dataType:"text"})}function c(e,t,o,n,s){$.ajax({type:"PUT",url:e+"/"+t+"/"+o,contentType:"application/json; charset=utf-8",data:JSON.stringify({data:n}),success:function(e){console.log(e),console.log("Update success")},error:function(e,t){console.log(e),console.log(t),console.log("Update failed")},complete:function(){"function"==typeof s&&s()},dataType:"text"})}function r(e,t,o,n){var s=-1;$.ajax({type:"GET",cache:!1,url:e+"/"+t+"/"+o,success:function(e){s=JSON.parse(e),s="object"===("undefined"==typeof s?"undefined":_typeof(s))&&s.samples&&s.samples[0]&&s.samples[0][1]&&s.samples[0][1][0]?s.samples[0][1][0]:[],console.log(e),console.log("Get success")},error:function(e,t){console.log(e),console.log(t),console.log("Get failed")},complete:function(){"function"==typeof n&&n(s)},dataType:"text"})}window&&(window.IoTtalk={register:n,detach:s,update:c,get:r}),t.exports={register:n,detach:s,update:c,get:r}},{}],2:[function(e,t,o){var n={_shutdown:function(){confirm("_shutdown")},_getStatus:function(){return{status:2,msg:"Ready"}}},s={blocks:[]};t.exports={add:function(e,t,o,c){n[c]=e,s.blocks.push([t,o,c]);for(var r=s.blocks.length-1,i=4;i<arguments.length;++i)s.blocks[r].push(arguments[i])},ext:n,descriptor:s}},{}],3:[function(e,t,o){!function(t){function o(e,t,o,n){n(p[e]?p[e][t]?"object"===_typeof(p[e][t])?p[e][t][parseInt(o,10)]||p[e][t][o.toString()]||-1:p[e][t]:"device feature not exist":"device instance not exist")}function n(e,t){d="http://"+e+":"+t}function s(e,t){p[e]={profile:{d_name:e,dm_name:t,is_sim:!1,df_list:[]}}}function c(e,t){p[t]&&p[t].profile.df_list.push(e)}function r(e,t){p[e]&&""!==d?f.register(d,e,p[e].profile,t):t()}function i(e,t){f.detach(d,e,t)}function a(e,t,o,n){}function u(e,t,n,s){if(Date.now()-y<=g)o(e,t,n,s);else{y=Date.now();try{f.get(d,e,t,function(c){p[e]||(p[e]={}),p[e][t]=c,o(e,t,n,s)})}catch(c){s("js bug, plase report to github")}}}var f=e("__iottalk_api.js"),l=e("__scratchX-register.js"),d="",p={},g=200,y=Date.now();l.add(n," ","set IoTtalk server %s %s","setserver","ip","port"),l.add(s," ","create device %s by model %s","create","d_name","dm_name"),l.add(c," ","add feature %s to device %s","add","df_name","d_name"),l.add(r,"w","register device %s","register","d_name"),l.add(i,"w","detach device %s","detach","d_name"),l.add(a," ","update device %s's feature %s[%s] = %s","update","d_name","df_name","key","val"),l.add(u,"R","get device %s's feature %s[%d]","get","d_name","df_name","0"),ScratchExtensions.register("Chatroom extension",l.descriptor,l.ext)}({})},{"__iottalk_api.js":1,"__scratchX-register.js":2}]},{},[3]);