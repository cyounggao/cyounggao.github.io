import{d as e,a as t,c as l,r as a,R as r,al as o,o as u,h as i,w as s}from"./vendor-fd815795.js";import{_ as d}from"./Cell.vue_vue_type_style_index_0_lang-3cf22f44.js";import{_ as n}from"./index-b1dd9a8a.js";var p=e({props:{num:{type:Number,default:3},size:{type:Number,default:12},color:{type:String,default:""}},setup:e=>{const{num:a,size:r,color:o}=e;let u=t((()=>({backgroundColor:o,width:r+"px",height:r+"px"}))),i=[];for(let t=0;t<a;t++)i.push(l("span",{class:"loading__dot",style:u.value},null));return()=>l("div",{class:"loading"},[i])}}),v=e({props:{value:{type:String,default:""},row:{type:[Number,String],default:0},width:{type:String,default:"100%"}},setup:e=>{let{value:t,row:u,width:i}=e,s=a(!1),d=a({width:i});const n=a(""),p=e=>{n.value=e};return r((()=>{(e=>{let t=getComputedStyle(n.value).lineHeight.replace("px","")-0;getComputedStyle(n.value).height.replace("px","")-0>t*e?(s.value=!0,d.value={height:t*e+"px",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",webkitLineClamp:e,webkitBoxOrient:"vertical",cursor:"pointer",width:i}):(s.value=!1,d.value={cursor:"text",width:i})})(u)})),()=>s.value?l(o,{content:t,placement:"bottom",effect:"light","show-arrow":!1},{default:()=>[l("div",{ref:p,style:d.value},[t])]}):l("div",{ref:p,style:d.value},[t])}});const f={class:"container"};var c=n({},[["render",function(e,t){const a=d,r=v,o=p;return u(),i("div",f,[l(a,{label:"姓名：",value:"张三"}),l(a,{label:"简介："},{default:s((()=>[l(r,{value:"张三，全中国最耳熟能详的名字。这个名字太普通，所以他只能是小人物。从北京上海到每一个普通城市，都有张三这样的人存在着，可能是你，可能是你身边的朋友。无数个张三汇聚到一起，就成了“张三族”。如果你是背着生活压力的男人，你就已经成为了“张三族”的候选人。你可能是个生活平稳的中年男人，工作还算稳定，家庭还算和睦，孩子还算听话，每月数额不菲的房贷对生活还构不成太大压力，父母的身体也还算健康。中国人讲究知足常乐，知足常乐没错，可以让人常常保持放松的心态，但它同样也有害处，最大的害处就是容易让人懈怠，容易让人不思进取。平稳总是相对的，你没有意识到领导对你工作的不满是因为你的懈怠，反过来你却说认为领导实在变态；你没有注意到父母的身体一天天变差；你没有注意到温和的妻子已与你渐渐远行……小心了，如果任何一个危机爆发，你都会迅速沦为“张三族”徐峥解读“张三族”",row:"1",width:"500px"})])),_:1}),l(o)])}]]);export{c as default};
