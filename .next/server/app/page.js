"use strict";(()=>{var e={};e.id=931,e.ids=[931],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},9323:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>x,routeModule:()=>m,tree:()=>p});var s=r(67096),a=r(16132),i=r(37284),n=r.n(i),o=r(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let p=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5724)),"/home/ian/Projects/NextJs/animelist/src/app/page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,68728)),"/home/ian/Projects/NextJs/animelist/src/app/layout.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,94125)),"/home/ian/Projects/NextJs/animelist/src/app/loading.jsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,11860)),"/home/ian/Projects/NextJs/animelist/src/app/not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["/home/ian/Projects/NextJs/animelist/src/app/page.jsx"],d="/page",c={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},5724:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(4656),a=r(77596),i=r(21641),n=r(44060);let Home=async()=>{let e=await (0,n.Io)("top/anime","limit=8"),t=await (0,n.Io)("seasons/now","limit=8"),r=await (0,n.Vn)("recommendations/anime","entry");return r=(0,n._2)(r,8),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{children:[s.jsx(i.Z,{title:"Popular Anime",linkHref:"/popular/page/1",linkTitle:"see all"}),s.jsx(a.Z,{api:e})]}),(0,s.jsxs)("section",{children:[s.jsx(i.Z,{title:"Ongoing Anime",linkHref:"/seasons/now/page/1",linkTitle:"see all"}),s.jsx(a.Z,{api:t})]}),(0,s.jsxs)("section",{children:[s.jsx(i.Z,{title:"Anime Recommendation"}),s.jsx(a.Z,{api:r})]})]})},o=Home},21641:(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(4656),a=r(24353),i=r.n(a);let __WEBPACK_DEFAULT_EXPORT__=({title:e,linkTitle:t,linkHref:r})=>(0,s.jsxs)("div",{className:"p-4 flex justify-between items-end",children:[s.jsx("h2",{className:"text-xl font-bold text-a-primary",children:e}),t&&r?(0,s.jsxs)(i(),{href:r,className:"md:text-base text-sm underline  text-a-primary hover:text-a-accent  transition-all font-bold",children:[t," >>"]}):null]})}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[594,129,317,958],()=>__webpack_exec__(9323));module.exports=r})();