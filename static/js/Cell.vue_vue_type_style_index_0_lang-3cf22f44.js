import{d as e,a as t,c as l}from"./vendor-fd815795.js";var a=e({props:{type:{type:String,default:"left"},align:{type:String,default:"stretch"},label:{type:String,default:""},width:{type:Number,default:0},gap:{type:Number,default:5},value:{type:[String,Number],default:""}},setup:(e,{slots:a})=>{let{type:r,label:i,value:u,gap:p,width:s,align:d}=e,f=t((()=>{let e={};return"left"===r&&(e.marginRight=p+"px",s&&(e.width=s+"px")),e})),g=t((()=>{let e={};return"right"===r&&(e.marginLeft=p+"px",s&&(e.width=s+"px")),e}));return()=>l("div",{class:"cell",flex:`justify:between align:${d}`},[l("div",{class:"cell__left "+r,style:f.value},[a.left?a.left():i]),l("div",{class:"cell__right "+r,style:g.value},[a.default?a.default():u])])}});export{a as _};
