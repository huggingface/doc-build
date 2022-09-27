import{S as B,i as H,s as J,e as p,k as U,w as N,t as P,M as O,c as m,d as n,m as x,a as $,x as T,h as w,b as _,G as r,g as v,y as j,q as C,o as L,B as Y,v as R}from"../chunks/vendor-hf-doc-builder.js";import{T as z}from"../chunks/Tip-hf-doc-builder.js";import{I as D}from"../chunks/IconCopyLink-hf-doc-builder.js";function F(y){let t,c,a,o,f;return{c(){t=p("p"),c=P("Note: A multi GPU setup can use the majority of the strategies described in the "),a=p("a"),o=P("single GPU section"),f=P(". You must be aware of simple techniques, though, that can be used for a better usage."),this.h()},l(s){t=m(s,"P",{});var l=$(t);c=w(l,"Note: A multi GPU setup can use the majority of the strategies described in the "),a=m(l,"A",{href:!0});var u=$(a);o=w(u,"single GPU section"),u.forEach(n),f=w(l,". You must be aware of simple techniques, though, that can be used for a better usage."),l.forEach(n),this.h()},h(){_(a,"href","./perf_infer_gpu_one")},m(s,l){v(s,t,l),r(t,c),r(t,a),r(a,o),r(t,f)},d(s){s&&n(t)}}}function K(y){let t,c,a,o,f,s,l,u,A,E,g,M,b,h,G;return s=new D({}),h=new z({props:{$$slots:{default:[F]},$$scope:{ctx:y}}}),{c(){t=p("meta"),c=U(),a=p("h1"),o=p("a"),f=p("span"),N(s.$$.fragment),l=U(),u=p("span"),A=P("Efficient Inference on a Multiple GPUs"),E=U(),g=p("p"),M=P("This document contains information on how to efficiently infer on a multiple GPUs."),b=U(),N(h.$$.fragment),this.h()},l(e){const i=O('[data-svelte="svelte-1phssyn"]',document.head);t=m(i,"META",{name:!0,content:!0}),i.forEach(n),c=x(e),a=m(e,"H1",{class:!0});var d=$(a);o=m(d,"A",{id:!0,class:!0,href:!0});var S=$(o);f=m(S,"SPAN",{});var k=$(f);T(s.$$.fragment,k),k.forEach(n),S.forEach(n),l=x(d),u=m(d,"SPAN",{});var q=$(u);A=w(q,"Efficient Inference on a Multiple GPUs"),q.forEach(n),d.forEach(n),E=x(e),g=m(e,"P",{});var I=$(g);M=w(I,"This document contains information on how to efficiently infer on a multiple GPUs."),I.forEach(n),b=x(e),T(h.$$.fragment,e),this.h()},h(){_(t,"name","hf:doc:metadata"),_(t,"content",JSON.stringify(Q)),_(o,"id","efficient-inference-on-a-multiple-gpus"),_(o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(o,"href","#efficient-inference-on-a-multiple-gpus"),_(a,"class","relative group")},m(e,i){r(document.head,t),v(e,c,i),v(e,a,i),r(a,o),r(o,f),j(s,f,null),r(a,l),r(a,u),r(u,A),v(e,E,i),v(e,g,i),r(g,M),v(e,b,i),j(h,e,i),G=!0},p(e,[i]){const d={};i&2&&(d.$$scope={dirty:i,ctx:e}),h.$set(d)},i(e){G||(C(s.$$.fragment,e),C(h.$$.fragment,e),G=!0)},o(e){L(s.$$.fragment,e),L(h.$$.fragment,e),G=!1},d(e){n(t),e&&n(c),e&&n(a),Y(s),e&&n(E),e&&n(g),e&&n(b),Y(h,e)}}}const Q={local:"efficient-inference-on-a-multiple-gpus",title:"Efficient Inference on a Multiple GPUs"};function V(y){return R(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ee extends B{constructor(t){super();H(this,t,V,K,J,{})}}export{ee as default,Q as metadata};
