import{S as B,i as H,s as J,e as u,k as b,w as N,t as A,M as O,c as p,d as a,m as E,a as d,x as T,h as M,b as h,G as l,g as _,y as j,q as C,o as L,B as Y,v as R}from"../chunks/vendor-hf-doc-builder.js";import{T as z}from"../chunks/Tip-hf-doc-builder.js";import{I as D}from"../chunks/IconCopyLink-hf-doc-builder.js";function F(v){let t,i;return{c(){t=u("p"),i=A("Note: A multi GPU setup can use the majority of the strategies described in the [single GPU section](perf infer gpu one). You must be aware of simple techniques, though, that can be used for a better usage.")},l(n){t=p(n,"P",{});var s=d(t);i=M(s,"Note: A multi GPU setup can use the majority of the strategies described in the [single GPU section](perf infer gpu one). You must be aware of simple techniques, though, that can be used for a better usage."),s.forEach(a)},m(n,s){_(n,t,s),l(t,i)},d(n){n&&a(t)}}}function K(v){let t,i,n,s,$,f,G,g,U,P,m,x,w,r,y;return f=new D({}),r=new z({props:{$$slots:{default:[F]},$$scope:{ctx:v}}}),{c(){t=u("meta"),i=b(),n=u("h1"),s=u("a"),$=u("span"),N(f.$$.fragment),G=b(),g=u("span"),U=A("Efficient Inference on a Multiple GPUs"),P=b(),m=u("p"),x=A("This document contains information on how to efficiently infer on a multiple GPUs."),w=b(),N(r.$$.fragment),this.h()},l(e){const o=O('[data-svelte="svelte-1phssyn"]',document.head);t=p(o,"META",{name:!0,content:!0}),o.forEach(a),i=E(e),n=p(e,"H1",{class:!0});var c=d(n);s=p(c,"A",{id:!0,class:!0,href:!0});var S=d(s);$=p(S,"SPAN",{});var k=d($);T(f.$$.fragment,k),k.forEach(a),S.forEach(a),G=E(c),g=p(c,"SPAN",{});var q=d(g);U=M(q,"Efficient Inference on a Multiple GPUs"),q.forEach(a),c.forEach(a),P=E(e),m=p(e,"P",{});var I=d(m);x=M(I,"This document contains information on how to efficiently infer on a multiple GPUs."),I.forEach(a),w=E(e),T(r.$$.fragment,e),this.h()},h(){h(t,"name","hf:doc:metadata"),h(t,"content",JSON.stringify(Q)),h(s,"id","efficient-inference-on-a-multiple-gpus"),h(s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(s,"href","#efficient-inference-on-a-multiple-gpus"),h(n,"class","relative group")},m(e,o){l(document.head,t),_(e,i,o),_(e,n,o),l(n,s),l(s,$),j(f,$,null),l(n,G),l(n,g),l(g,U),_(e,P,o),_(e,m,o),l(m,x),_(e,w,o),j(r,e,o),y=!0},p(e,[o]){const c={};o&2&&(c.$$scope={dirty:o,ctx:e}),r.$set(c)},i(e){y||(C(f.$$.fragment,e),C(r.$$.fragment,e),y=!0)},o(e){L(f.$$.fragment,e),L(r.$$.fragment,e),y=!1},d(e){a(t),e&&a(i),e&&a(n),Y(f),e&&a(P),e&&a(m),e&&a(w),Y(r,e)}}}const Q={local:"efficient-inference-on-a-multiple-gpus",title:"Efficient Inference on a Multiple GPUs"};function V(v){return R(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ee extends B{constructor(t){super();H(this,t,V,K,J,{})}}export{ee as default,Q as metadata};
