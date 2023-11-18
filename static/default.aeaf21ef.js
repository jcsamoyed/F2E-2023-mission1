import{_ as T}from"./nuxt-link.eeb97853.js";import{u as F,_ as m,i as N,a as M,g as $,j as S,k as V,l as q,m as D,n as Y}from"./scrollToId.62fd0e9a.js";import{q as B,s as b,o as a,c as l,a as o,b as _,w as r,u as n,F as g,v as h,y as j,B as z,t as k,p as P,e as x,_ as w,d as f,C as E,D as A}from"./entry.48fc8c95.js";const I=i=>(P("data-v-db87b498"),i=i(),x(),i),G={class:"container"},H={class:"nav-wrapper"},J=I(()=>o("img",{src:S,alt:"黑新星"},null,-1)),K={class:"nav-content"},O={class:"nav-list"},Q=["onClick"],R={class:"social-media-wrapper"},U=["src","alt"],W=["onClick"],X={class:"sidebar-block"},Z=I(()=>o("img",{src:S,alt:"黑新星"},null,-1)),oo={class:"nav-content"},so={class:"nav-list"},to=["onClick"],eo=I(()=>o("hr",null,null,-1)),no={class:"social-media-wrapper"},ao=["src","alt"],lo=B({__name:"navbar",setup(i){const p=b([{name:"候選主張",id:"candidate-claims"},{name:"最新活動",id:"latest-events"},{name:"政策議題",id:"policy-issues"},{name:"服務信箱",id:"service-mail"}]),u=b([{name:"Facebook",logo:"logo-facebook.svg",link:"https://www.facebook.com/hexschool"},{name:"Instagram",logo:"logo-instagram.svg",link:"https://www.instagram.com/hexschool/"},{name:"YouTube",logo:"logo-youtube.svg",link:"https://www.youtube.com/@hexschool"}]),c=F(),y=()=>{c.value=!1};return(t,e)=>{const v=T,C=M;return a(),l("nav",null,[o("div",G,[o("div",H,[_(v,{to:"/",title:"首頁",onClick:e[0]||(e[0]=s=>("scrollToId"in t?t.scrollToId:n(m))("header"))},{default:r(()=>[J]),_:1}),o("div",K,[_(C,{text:"小額捐款","icon-position":"before","icon-img":"hand-coins.svg",onClick:e[1]||(e[1]=s=>("scrollToId"in t?t.scrollToId:n(m))("small-donations"))}),o("ul",O,[(a(!0),l(g,null,h(n(p),s=>(a(),l("li",{key:s.id,class:"nav-item",onClick:L=>("scrollToId"in t?t.scrollToId:n(m))(s.id)},k(s.name),9,Q))),128))])]),o("ul",R,[(a(!0),l(g,null,h(n(u),s=>(a(),l("li",{key:s.name},[_(v,{to:s.link,target:"_blank",title:s.name},{default:r(()=>[o("img",{src:("getImagePath"in t?t.getImagePath:n($))(`/assets/images/navbar/${s.logo}`),alt:s.name},null,8,U)]),_:2},1032,["to","title"])]))),128))]),o("img",{src:N,alt:"漢堡選單",class:"hamburger",onClick:e[2]||(e[2]=s=>c.value=!n(c))})]),o("div",{class:j(["sidebar-wrapper",{open:n(c)}]),onClick:z(y,["self"])},[o("div",X,[_(v,{to:"/",title:"首頁"},{default:r(()=>[Z]),_:1}),o("div",oo,[_(C,{text:"小額捐款","icon-position":"before","icon-img":"hand-coins.svg",onClick:e[3]||(e[3]=s=>("scrollToId"in t?t.scrollToId:n(m))("small-donations"))}),o("ul",so,[(a(!0),l(g,null,h(n(p),s=>(a(),l("li",{key:s.id,class:"nav-item",onClick:L=>("scrollToId"in t?t.scrollToId:n(m))(s.id)},k(s.name),9,to))),128))])]),eo,o("ul",no,[(a(!0),l(g,null,h(n(u),s=>(a(),l("li",{key:s.name},[_(v,{to:s.link,target:"_blank",title:s.name},{default:r(()=>[o("img",{src:("getImagePath"in t?t.getImagePath:n($))(`/assets/images/navbar/${s.logo}`),alt:s.name},null,8,ao),o("span",null,k(s.name),1)]),_:2},1032,["to","title"])]))),128))])])],10,W)])])}}});const io=w(lo,[["__scopeId","data-v-db87b498"]]),d=i=>(P("data-v-4ef65480"),i=i(),x(),i),co={class:"container"},_o={class:"footer-block"},ro=d(()=>o("img",{src:V,class:"logo",alt:"logo"},null,-1)),uo={class:"social-media-block"},mo=["src","alt"],go={class:"list-content"},ho={class:"list-box"},po=d(()=>o("h5",null,"快速連結",-1)),vo={class:"quick-link"},ko=["onClick"],bo={class:"list-box"},fo=d(()=>o("h5",null,"與我們聯繫",-1)),$o={class:"icon"},wo=d(()=>o("img",{src:q,alt:"地址"},null,-1)),Io={class:"icon"},yo=d(()=>o("img",{src:D,alt:"電話"},null,-1)),Co={class:"icon"},To=d(()=>o("img",{src:Y,alt:"信箱"},null,-1)),So=d(()=>o("p",null,"© 2023 黑新星 Supernova Black 版權所有。",-1)),Bo=B({__name:"footer",setup(i){const p=b([{name:"首頁",id:"header"},{name:"最新活動",id:"latest-events"},{name:"政策議題",id:"policy-issues"},{name:"小額捐款",id:"small-donations"}]),u=b([{name:"Facebook",logo:"logo-facebook.svg",link:"https://www.facebook.com/hexschool"},{name:"Instagram",logo:"logo-instagram.svg",link:"https://www.instagram.com/hexschool/"},{name:"YouTube",logo:"logo-youtube.svg",link:"https://www.youtube.com/@hexschool"}]);return(c,y)=>{const t=T;return a(),l("footer",null,[o("div",co,[o("div",_o,[ro,o("div",uo,[(a(!0),l(g,null,h(n(u),e=>(a(),E(t,{key:e.name,to:e.link,target:"_blank"},{default:r(()=>[o("img",{src:("getImagePath"in c?c.getImagePath:n($))(`/assets/images/footer/${e.logo}`),alt:e.name,class:"social-media"},null,8,mo)]),_:2},1032,["to"]))),128))]),o("div",go,[o("div",ho,[po,o("ul",vo,[(a(!0),l(g,null,h(n(p),e=>(a(),l("li",{key:e.name,onClick:v=>("scrollToId"in c?c.scrollToId:n(m))(e.id)},k(e.name),9,ko))),128))])]),o("div",bo,[fo,o("ul",null,[o("li",$o,[wo,_(t,{to:"https://www.google.com.tw/maps",target:"_blank"},{default:r(()=>[f(" 新星區閃耀大道88號 喵喵大樓3樓 ")]),_:1})]),o("li",Io,[yo,_(t,{to:"tel:(02)888-5678"},{default:r(()=>[f(" (02) 888-5678 ")]),_:1})]),o("li",Co,[To,_(t,{to:"mailto:supernova.black@gmail.com"},{default:r(()=>[f(" supernova.black@gmail.com ")]),_:1})])])])])]),So])])}}});const Po=w(Bo,[["__scopeId","data-v-4ef65480"]]),xo={};function Lo(i,p){const u=io,c=Po;return a(),l("div",null,[_(u),A(i.$slots,"default"),_(c)])}const Vo=w(xo,[["render",Lo]]);export{Vo as default};