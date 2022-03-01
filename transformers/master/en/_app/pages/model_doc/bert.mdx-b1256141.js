var w8=Object.defineProperty,$8=Object.defineProperties;var F8=Object.getOwnPropertyDescriptors;var QN=Object.getOwnPropertySymbols;var x8=Object.prototype.hasOwnProperty,B8=Object.prototype.propertyIsEnumerable;var KN=(k,l,f)=>l in k?w8(k,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):k[l]=f,JN=(k,l)=>{for(var f in l||(l={}))x8.call(l,f)&&KN(k,f,l[f]);if(QN)for(var f of QN(l))B8.call(l,f)&&KN(k,f,l[f]);return k},GN=(k,l)=>$8(k,F8(l));import{S as Nr,i as Ir,s as Dr,H as E8,e as n,c as s,a as o,d as t,b as p,g as b,I as M8,J as z8,K as q8,q as $,o as F,f as Np,l as Ip,L as Dp,t as r,h as a,F as e,Q as u8,R as Cr,j as Lp,T as m8,U as VP,k as d,m as c,V as g8,W as _8,w as B,x as E,y as M,B as z,n as v8,p as b8,G as QP,X as k8,Y as y8,v as P8,E as j8,Z as C8,O as uk,P as mk,_ as N8,M as I8}from"../../chunks/vendor-a557fece.js";import{I as we}from"../../chunks/IconCopyLink-a714bc06.js";function D8(k){let l,f;const h=k[3].default,u=E8(h,k,k[2],null);return{c(){l=n("div"),u&&u.c(),this.h()},l(_){l=s(_,"DIV",{class:!0});var m=o(l);u&&u.l(m),m.forEach(t),this.h()},h(){p(l,"class","course-tip "+(k[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+k[0]+"-500 dark:before:border-"+k[0]+"-800 from-"+k[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+k[0]+"-50 text-"+k[0]+"-700 dark:text-gray-400")},m(_,m){b(_,l,m),u&&u.m(l,null),f=!0},p(_,[m]){u&&u.p&&(!f||m&4)&&M8(u,h,_,_[2],f?q8(h,_[2],m,null):z8(_[2]),null)},i(_){f||($(u,_),f=!0)},o(_){F(u,_),f=!1},d(_){_&&t(l),u&&u.d(_)}}}function L8(k,l,f){let{$$slots:h={},$$scope:u}=l,{warning:_=!1}=l;const m=_?"orange":"green";return k.$$set=g=>{"warning"in g&&f(1,_=g.warning),"$$scope"in g&&f(2,u=g.$$scope)},[m,_,u,h]}class Fe extends Nr{constructor(l){super();Ir(this,l,L8,D8,Dr,{warning:1})}}function XN(k){let l,f;return{c(){l=n("div"),this.h()},l(h){l=s(h,"DIV",{class:!0,style:!0,id:!0});var u=o(l);u.forEach(t),this.h()},h(){p(l,"class",f="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(k[0].length>1e3?"max-w-lg":"max-w-xs")),Np(l,"top",k[2]+15+"px"),Np(l,"left",k[1]+15+"px"),p(l,"id",k[3])},m(h,u){b(h,l,u),l.innerHTML=k[0]},p(h,u){u&1&&(l.innerHTML=h[0]),u&1&&f!==(f="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(h[0].length>1e3?"max-w-lg":"max-w-xs"))&&p(l,"class",f),u&4&&Np(l,"top",h[2]+15+"px"),u&2&&Np(l,"left",h[1]+15+"px"),u&8&&p(l,"id",h[3])},d(h){h&&t(l)}}}function A8(k){let l,f=k[0]&&XN(k);return{c(){f&&f.c(),l=Ip()},l(h){f&&f.l(h),l=Ip()},m(h,u){f&&f.m(h,u),b(h,l,u)},p(h,[u]){h[0]?f?f.p(h,u):(f=XN(h),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null)},i:Dp,o:Dp,d(h){f&&f.d(h),h&&t(l)}}}function S8(k,l,f){let{txt:h}=l,{x:u}=l,{y:_}=l,{id:m}=l;return k.$$set=g=>{"txt"in g&&f(0,h=g.txt),"x"in g&&f(1,u=g.x),"y"in g&&f(2,_=g.y),"id"in g&&f(3,m=g.id)},[h,u,_,m]}class O8 extends Nr{constructor(l){super();Ir(this,l,S8,A8,Dr,{txt:0,x:1,y:2,id:3})}}const YN="docstring-tooltip";function T8(k,l){let f;function h(g){m(),f=new O8({props:{txt:l,x:g.pageX,y:g.pageY,id:YN},target:document.body})}function u(g){f.$set({x:g.pageX,y:g.pageY})}function _(){f.$destroy()}function m(){var T;const g=document.getElementById(YN);g&&((T=g.parentNode)==null||T.removeChild(g))}return k.addEventListener("mouseover",h),k.addEventListener("mouseleave",_),k.addEventListener("mousemove",u),{destroy(){k.removeEventListener("mouseover",h),k.removeEventListener("mouseleave",_),k.removeEventListener("mousemove",u)}}}function ZN(k,l,f){const h=k.slice();return h[16]=l[f].title,h[7]=l[f].parametersDescription,h}function e8(k,l,f){const h=k.slice();return h[5]=l[f].anchor,h[19]=l[f].description,h}function t8(k,l,f){const h=k.slice();return h[6]=l[f].name,h[22]=l[f].val,h}function o8(k){let l,f,h=k[6]+"",u,_,m=k[22]+"",g,T,j,x,w;function q(){return k[12](k[6])}return{c(){l=n("span"),f=n("span"),u=r(h),_=n("span"),g=r(m),this.h()},l(C){l=s(C,"SPAN",{class:!0});var U=o(l);f=s(U,"SPAN",{class:!0});var re=o(f);u=a(re,h),_=s(re,"SPAN",{class:!0});var V=o(_);g=a(V,m),V.forEach(t),re.forEach(t),U.forEach(t),this.h()},h(){p(_,"class","opacity-60"),p(f,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),p(l,"class",T="comma "+(k[10][k[6]]?"cursor-pointer":"cursor-default"))},m(C,U){b(C,l,U),e(l,f),e(f,u),e(f,_),e(_,g),x||(w=[u8(j=T8.call(null,l,k[10][k[6]]||"")),Cr(l,"click",g8(_8(q)))],x=!0)},p(C,U){k=C,U&1&&h!==(h=k[6]+"")&&Lp(u,h),U&1&&m!==(m=k[22]+"")&&Lp(g,m),U&1&&T!==(T="comma "+(k[10][k[6]]?"cursor-pointer":"cursor-default"))&&p(l,"class",T),j&&m8(j.update)&&U&1&&j.update.call(null,k[10][k[6]]||"")},d(C){C&&t(l),x=!1,VP(w)}}}function n8(k){let l,f,h,u,_=h8(k[3])+"",m,g,T,j;return{c(){l=n("span"),f=r("\u2192"),h=d(),u=n("span"),this.h()},l(x){l=s(x,"SPAN",{class:!0});var w=o(l);f=a(w,"\u2192"),w.forEach(t),h=c(x),u=s(x,"SPAN",{class:!0});var q=o(u);q.forEach(t),this.h()},h(){p(l,"class","font-bold"),p(u,"class",m="rounded hover:bg-gray-400 "+(k[2]?"cursor-pointer":"cursor-default"))},m(x,w){b(x,l,w),e(l,f),b(x,h,w),b(x,u,w),u.innerHTML=_,T||(j=[u8(g=T8.call(null,u,k[2]||"")),Cr(u,"click",g8(_8(k[13])))],T=!0)},p(x,w){w&8&&_!==(_=h8(x[3])+"")&&(u.innerHTML=_),w&4&&m!==(m="rounded hover:bg-gray-400 "+(x[2]?"cursor-pointer":"cursor-default"))&&p(u,"class",m),g&&m8(g.update)&&w&4&&g.update.call(null,x[2]||"")},d(x){x&&t(l),x&&t(h),x&&t(u),T=!1,VP(j)}}}function s8(k){var j;let l,f,h,u=((j=k[7])==null?void 0:j.length)+"",_,m,g,T;return{c(){l=n("div"),f=n("button"),h=r("Expand "),_=r(u),m=r(" parameters"),this.h()},l(x){l=s(x,"DIV",{class:!0});var w=o(l);f=s(w,"BUTTON",{class:!0});var q=o(f);h=a(q,"Expand "),_=a(q,u),m=a(q," parameters"),q.forEach(t),w.forEach(t),this.h()},h(){p(f,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),p(l,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(x,w){b(x,l,w),e(l,f),e(f,h),e(f,_),e(f,m),g||(T=Cr(f,"click",k[14]),g=!0)},p(x,w){var q;w&128&&u!==(u=((q=x[7])==null?void 0:q.length)+"")&&Lp(_,u)},d(x){x&&t(l),g=!1,T()}}}function r8(k){let l,f,h,u,_,m,g=k[7],T=[];for(let x=0;x<g.length;x+=1)T[x]=a8(e8(k,g,x));const j=x=>F(T[x],1,1,()=>{T[x]=null});return{c(){l=n("p"),f=r("Parameters "),h=n("span"),u=d(),_=n("ul");for(let x=0;x<T.length;x+=1)T[x].c();this.h()},l(x){l=s(x,"P",{class:!0});var w=o(l);f=a(w,"Parameters "),h=s(w,"SPAN",{class:!0}),o(h).forEach(t),w.forEach(t),u=c(x),_=s(x,"UL",{class:!0});var q=o(_);for(let C=0;C<T.length;C+=1)T[C].l(q);q.forEach(t),this.h()},h(){p(h,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),p(l,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),p(_,"class","px-2")},m(x,w){b(x,l,w),e(l,f),e(l,h),b(x,u,w),b(x,_,w);for(let q=0;q<T.length;q+=1)T[q].m(_,null);m=!0},p(x,w){if(w&128){g=x[7];let q;for(q=0;q<g.length;q+=1){const C=e8(x,g,q);T[q]?(T[q].p(C,w),$(T[q],1)):(T[q]=a8(C),T[q].c(),$(T[q],1),T[q].m(_,null))}for(v8(),q=g.length;q<T.length;q+=1)j(q);b8()}},i(x){if(!m){for(let w=0;w<g.length;w+=1)$(T[w]);m=!0}},o(x){T=T.filter(Boolean);for(let w=0;w<T.length;w+=1)F(T[w]);m=!1},d(x){x&&t(l),x&&t(u),x&&t(_),QP(T,x)}}}function a8(k){let l,f,h,u,_,m,g,T,j,x=k[19]+"",w,q;return _=new we({props:{classNames:"text-smd"}}),{c(){l=n("li"),f=n("span"),h=n("a"),u=n("span"),B(_.$$.fragment),T=d(),j=n("span"),w=d(),this.h()},l(C){l=s(C,"LI",{class:!0});var U=o(l);f=s(U,"SPAN",{class:!0});var re=o(f);h=s(re,"A",{id:!0,class:!0,href:!0});var V=o(h);u=s(V,"SPAN",{});var le=o(u);E(_.$$.fragment,le),le.forEach(t),V.forEach(t),T=c(re),j=s(re,"SPAN",{});var ce=o(j);ce.forEach(t),re.forEach(t),w=c(U),U.forEach(t),this.h()},h(){p(h,"id",m=k[5]),p(h,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href",g=`#${k[5]}`),p(f,"class","group flex space-x-1.5 items-start"),p(l,"class","text-base !pl-4 my-3")},m(C,U){b(C,l,U),e(l,f),e(f,h),e(h,u),M(_,u,null),e(f,T),e(f,j),j.innerHTML=x,e(l,w),q=!0},p(C,U){(!q||U&128&&m!==(m=C[5]))&&p(h,"id",m),(!q||U&128&&g!==(g=`#${C[5]}`))&&p(h,"href",g),(!q||U&128)&&x!==(x=C[19]+"")&&(j.innerHTML=x)},i(C){q||($(_.$$.fragment,C),q=!0)},o(C){F(_.$$.fragment,C),q=!1},d(C){C&&t(l),z(_)}}}function i8(k){let l,f=k[1],h=[];for(let u=0;u<f.length;u+=1)h[u]=l8(ZN(k,f,u));return{c(){for(let u=0;u<h.length;u+=1)h[u].c();l=Ip()},l(u){for(let _=0;_<h.length;_+=1)h[_].l(u);l=Ip()},m(u,_){for(let m=0;m<h.length;m+=1)h[m].m(u,_);b(u,l,_)},p(u,_){if(_&2){f=u[1];let m;for(m=0;m<f.length;m+=1){const g=ZN(u,f,m);h[m]?h[m].p(g,_):(h[m]=l8(g),h[m].c(),h[m].m(l.parentNode,l))}for(;m<h.length;m+=1)h[m].d(1);h.length=f.length}},d(u){QP(h,u),u&&t(l)}}}function l8(k){let l,f=k[16]+"",h,u,_,m,g,T=k[7]+"";return{c(){l=n("p"),h=r(f),u=d(),_=n("span"),m=d(),g=n("p"),this.h()},l(j){l=s(j,"P",{class:!0});var x=o(l);h=a(x,f),u=c(x),_=s(x,"SPAN",{class:!0}),o(_).forEach(t),x.forEach(t),m=c(j),g=s(j,"P",{});var w=o(g);w.forEach(t),this.h()},h(){p(_,"class","flex-auto border-t-2 ml-3"),p(l,"class","flex items-center font-semibold")},m(j,x){b(j,l,x),e(l,h),e(l,u),e(l,_),b(j,m,x),b(j,g,x),g.innerHTML=T},p(j,x){x&2&&f!==(f=j[16]+"")&&Lp(h,f),x&2&&T!==(T=j[7]+"")&&(g.innerHTML=T)},d(j){j&&t(l),j&&t(m),j&&t(g)}}}function d8(k){let l,f,h,u,_,m,g,T,j,x=!!k[3]&&c8(k);return{c(){l=n("div"),f=n("p"),h=r("Returns"),u=d(),x&&x.c(),_=d(),m=n("span"),T=d(),j=n("p"),this.h()},l(w){l=s(w,"DIV",{class:!0,id:!0});var q=o(l);f=s(q,"P",{class:!0});var C=o(f);h=a(C,"Returns"),C.forEach(t),u=c(q),x&&x.l(q),_=c(q),m=s(q,"SPAN",{class:!0}),o(m).forEach(t),q.forEach(t),T=c(w),j=s(w,"P",{class:!0});var U=o(j);U.forEach(t),this.h()},h(){p(f,"class","text-base"),p(m,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),p(l,"class","flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800"),p(l,"id",g=`${k[5]}.returns`),p(j,"class","text-base")},m(w,q){b(w,l,q),e(l,f),e(f,h),e(l,u),x&&x.m(l,null),e(l,_),e(l,m),b(w,T,q),b(w,j,q),j.innerHTML=k[2]},p(w,q){w[3]?x?x.p(w,q):(x=c8(w),x.c(),x.m(l,_)):x&&(x.d(1),x=null),q&32&&g!==(g=`${w[5]}.returns`)&&p(l,"id",g),q&4&&(j.innerHTML=w[2])},d(w){w&&t(l),x&&x.d(),w&&t(T),w&&t(j)}}}function c8(k){let l,f;return{c(){l=new k8,f=Ip(),this.h()},l(h){l=y8(h),f=Ip(),this.h()},h(){l.a=f},m(h,u){l.m(k[3],h,u),b(h,f,u)},p(h,u){u&8&&l.p(h[3])},d(h){h&&t(f),h&&l.d()}}}function U8(k){let l,f,h,u=p8(k[6])+"",_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K;g=new we({});let he=k[0],te=[];for(let I=0;I<he.length;I+=1)te[I]=o8(t8(k,he,I));let H=k[3]&&n8(k),oe=k[9]&&s8(k),G=!!k[7]&&r8(k),O=k[1]&&i8(k),se=!!k[2]&&d8(k);return{c(){l=n("div"),f=n("span"),h=new k8,_=d(),m=n("a"),B(g.$$.fragment),j=d(),x=n("a"),w=n("span"),q=r("<"),C=d(),U=n("span"),re=r("source"),V=d(),le=n("span"),ce=r(">"),L=d(),S=n("p"),ae=n("span"),ie=r("("),N=d();for(let I=0;I<te.length;I+=1)te[I].c();A=d(),pe=n("span"),ee=r(")"),_e=d(),H&&H.c(),fe=d(),W=n("div"),oe&&oe.c(),ve=d(),G&&G.c(),ge=d(),O&&O.c(),D=d(),se&&se.c(),this.h()},l(I){l=s(I,"DIV",{});var X=o(l);f=s(X,"SPAN",{class:!0,id:!0});var v=o(f);h=y8(v),_=c(v),m=s(v,"A",{id:!0,class:!0,href:!0});var P=o(m);E(g.$$.fragment,P),P.forEach(t),j=c(v),x=s(v,"A",{class:!0,href:!0,target:!0});var Y=o(x);w=s(Y,"SPAN",{});var Ee=o(w);q=a(Ee,"<"),Ee.forEach(t),C=c(Y),U=s(Y,"SPAN",{class:!0});var ye=o(U);re=a(ye,"source"),ye.forEach(t),V=c(Y),le=s(Y,"SPAN",{});var J=o(le);ce=a(J,">"),J.forEach(t),Y.forEach(t),v.forEach(t),L=c(X),S=s(X,"P",{class:!0});var ke=o(S);ae=s(ke,"SPAN",{});var Te=o(ae);ie=a(Te,"("),Te.forEach(t),N=c(ke);for(let Z=0;Z<te.length;Z+=1)te[Z].l(ke);A=c(ke),pe=s(ke,"SPAN",{});var Me=o(pe);ee=a(Me,")"),Me.forEach(t),_e=c(ke),H&&H.l(ke),ke.forEach(t),fe=c(X),W=s(X,"DIV",{class:!0});var R=o(W);oe&&oe.l(R),ve=c(R),G&&G.l(R),ge=c(R),O&&O.l(R),D=c(R),se&&se.l(R),R.forEach(t),X.forEach(t),this.h()},h(){h.a=_,p(m,"id",k[5]),p(m,"class","header-link invisible with-hover:group-hover:visible pr-2"),p(m,"href",T="#"+k[5]),p(U,"class","hidden md:block mx-0.5 hover:!underline"),p(x,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),p(x,"href",k[4]),p(x,"target","_blank"),p(f,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),p(f,"id",k[5]),p(S,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6"),p(W,"class",ue="!mb-10 relative docstring-details "+(k[9]?"max-h-96 overflow-hidden":""))},m(I,X){b(I,l,X),e(l,f),h.m(u,f),e(f,_),e(f,m),M(g,m,null),e(f,j),e(f,x),e(x,w),e(w,q),e(x,C),e(x,U),e(U,re),e(x,V),e(x,le),e(le,ce),e(l,L),e(l,S),e(S,ae),e(ae,ie),e(S,N);for(let v=0;v<te.length;v+=1)te[v].m(S,null);e(S,A),e(S,pe),e(pe,ee),e(S,_e),H&&H.m(S,null),e(l,fe),e(l,W),oe&&oe.m(W,null),e(W,ve),G&&G.m(W,null),e(W,ge),O&&O.m(W,null),e(W,D),se&&se.m(W,null),k[15](W),K=!0},p(I,[X]){if((!K||X&64)&&u!==(u=p8(I[6])+"")&&h.p(u),(!K||X&32)&&p(m,"id",I[5]),(!K||X&32&&T!==(T="#"+I[5]))&&p(m,"href",T),(!K||X&16)&&p(x,"href",I[4]),(!K||X&32)&&p(f,"id",I[5]),X&3105){he=I[0];let v;for(v=0;v<he.length;v+=1){const P=t8(I,he,v);te[v]?te[v].p(P,X):(te[v]=o8(P),te[v].c(),te[v].m(S,A))}for(;v<te.length;v+=1)te[v].d(1);te.length=he.length}I[3]?H?H.p(I,X):(H=n8(I),H.c(),H.m(S,null)):H&&(H.d(1),H=null),I[9]?oe?oe.p(I,X):(oe=s8(I),oe.c(),oe.m(W,ve)):oe&&(oe.d(1),oe=null),I[7]?G?(G.p(I,X),X&128&&$(G,1)):(G=r8(I),G.c(),$(G,1),G.m(W,ge)):G&&(v8(),F(G,1,1,()=>{G=null}),b8()),I[1]?O?O.p(I,X):(O=i8(I),O.c(),O.m(W,D)):O&&(O.d(1),O=null),I[2]?se?se.p(I,X):(se=d8(I),se.c(),se.m(W,null)):se&&(se.d(1),se=null),(!K||X&512&&ue!==(ue="!mb-10 relative docstring-details "+(I[9]?"max-h-96 overflow-hidden":"")))&&p(W,"class",ue)},i(I){K||($(g.$$.fragment,I),$(G),K=!0)},o(I){F(g.$$.fragment,I),F(G),K=!1},d(I){I&&t(l),z(g),QP(te,I),H&&H.d(),oe&&oe.d(),G&&G.d(),O&&O.d(),se&&se.d(),k[15](null)}}}function p8(k){if(k.startsWith("class ")){const l=k.substring(6).split("."),f=l.pop();return`<span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${l.join(".")}.</span><span class="font-semibold">${f}</span></span>`}else return`<span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${k}</span>`}function h8(k){const l=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return k.replace(l,(f,h)=>`<span>${h}</span>`)}function W8(k,l,f){let{anchor:h}=l,{name:u}=l,{parameters:_=[]}=l,{parametersDescription:m}=l,{parameterGroups:g}=l,{returnDescription:T}=l,{returnType:j}=l,{source:x}=l,w,q=!1;const C=(m==null?void 0:m.reduce((L,S)=>{const{name:ae,description:ie}=S;return GN(JN({},L),{[ae]:ie})},{}))||{};P8(()=>{const{hash:L}=window.location,S=!!L&&(m==null?void 0:m.some(({anchor:ae})=>ae===L.substring(1)));f(9,q=!S&&w.clientHeight>500)});async function U(L,S){S&&(f(9,q=!1),await j8(),window.location.hash=L)}const re=L=>U(`${h}.${L}`,!!C[L]),V=()=>U(`${h}.returns`,!!T),le=()=>f(9,q=!1);function ce(L){C8[L?"unshift":"push"](()=>{w=L,f(8,w)})}return k.$$set=L=>{"anchor"in L&&f(5,h=L.anchor),"name"in L&&f(6,u=L.name),"parameters"in L&&f(0,_=L.parameters),"parametersDescription"in L&&f(7,m=L.parametersDescription),"parameterGroups"in L&&f(1,g=L.parameterGroups),"returnDescription"in L&&f(2,T=L.returnDescription),"returnType"in L&&f(3,j=L.returnType),"source"in L&&f(4,x=L.source)},[_,g,T,j,x,h,u,m,w,q,C,U,re,V,le,ce]}class Q extends Nr{constructor(l){super();Ir(this,l,W8,U8,Dr,{anchor:5,name:6,parameters:0,parametersDescription:7,parameterGroups:1,returnDescription:2,returnType:3,source:4})}}function H8(k){const l=document.createElement("textarea");document.body.appendChild(l),l.value=k,l.select(),document.execCommand("copy"),document.body.removeChild(l)}function R8(k){let l,f,h,u;return{c(){l=uk("svg"),f=uk("path"),h=uk("path"),u=uk("rect"),this.h()},l(_){l=mk(_,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var m=o(l);f=mk(m,"path",{d:!0,transform:!0}),o(f).forEach(t),h=mk(m,"path",{d:!0,transform:!0}),o(h).forEach(t),u=mk(m,"rect",{fill:!0,width:!0,height:!0}),o(u).forEach(t),m.forEach(t),this.h()},h(){p(f,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),p(f,"transform","translate(0)"),p(h,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),p(h,"transform","translate(0)"),p(u,"fill","none"),p(u,"width","32"),p(u,"height","32"),p(l,"class",k[0]),p(l,"xmlns","http://www.w3.org/2000/svg"),p(l,"aria-hidden","true"),p(l,"fill","currentColor"),p(l,"focusable","false"),p(l,"role","img"),p(l,"width","1em"),p(l,"height","1em"),p(l,"preserveAspectRatio","xMidYMid meet"),p(l,"viewBox","0 0 32 32")},m(_,m){b(_,l,m),e(l,f),e(l,h),e(l,u)},p(_,[m]){m&1&&p(l,"class",_[0])},i:Dp,o:Dp,d(_){_&&t(l)}}}function V8(k,l,f){let{classNames:h=""}=l;return k.$$set=u=>{"classNames"in u&&f(0,h=u.classNames)},[h]}class Q8 extends Nr{constructor(l){super();Ir(this,l,V8,R8,Dr,{classNames:0})}}function K8(k){let l,f,h,u,_;return{c(){l=n("div"),f=n("div"),h=d(),u=r(k[1]),this.h()},l(m){l=s(m,"DIV",{class:!0});var g=o(l);f=s(g,"DIV",{class:!0,style:!0}),o(f).forEach(t),h=c(g),u=a(g,k[1]),g.forEach(t),this.h()},h(){p(f,"class","absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-black border-4 border-t-0"),Np(f,"border-left-color","transparent"),Np(f,"border-right-color","transparent"),p(l,"class",_="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+k[2]+" "+k[0])},m(m,g){b(m,l,g),e(l,f),e(l,h),e(l,u)},p(m,[g]){g&2&&Lp(u,m[1]),g&5&&_!==(_="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+m[2]+" "+m[0])&&p(l,"class",_)},i:Dp,o:Dp,d(m){m&&t(l)}}}function J8(k,l,f){let{classNames:h=""}=l,{label:u="Copied"}=l,{position:_="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=l;return k.$$set=m=>{"classNames"in m&&f(0,h=m.classNames),"label"in m&&f(1,u=m.label),"position"in m&&f(2,_=m.position)},[h,u,_]}class G8 extends Nr{constructor(l){super();Ir(this,l,J8,K8,Dr,{classNames:0,label:1,position:2})}}function f8(k){let l,f,h;return{c(){l=n("span"),f=r(k[1]),this.h()},l(u){l=s(u,"SPAN",{class:!0});var _=o(l);f=a(_,k[1]),_.forEach(t),this.h()},h(){p(l,"class",h="ml-1.5 "+(k[2]==="text"?"underline":""))},m(u,_){b(u,l,_),e(l,f)},p(u,_){_&2&&Lp(f,u[1]),_&4&&h!==(h="ml-1.5 "+(u[2]==="text"?"underline":""))&&p(l,"class",h)},d(u){u&&t(l)}}}function X8(k){let l,f,h,u,_,m,g,T,j,x;f=new Q8({});let w=k[1]&&f8(k);return _=new G8({props:{classNames:k[4]?"opacity-100":"opacity-0"}}),{c(){l=n("button"),B(f.$$.fragment),h=d(),w&&w.c(),u=d(),B(_.$$.fragment),this.h()},l(q){l=s(q,"BUTTON",{class:!0,title:!0,type:!0});var C=o(l);E(f.$$.fragment,C),h=c(C),w&&w.l(C),u=c(C),E(_.$$.fragment,C),C.forEach(t),this.h()},h(){p(l,"class",m="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+k[0]+" "+(k[2]==="text"?"mx-0.5":"")+" "+(k[2]==="button"?"btn":"")+" "+(k[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!k[4]&&["button-clear","text"].includes(k[2])?"text-gray-600":"")+" "+(k[4]?"text-green-500":"")),p(l,"title",g=k[3]||k[1]||"Copy to clipboard"),p(l,"type","button")},m(q,C){b(q,l,C),M(f,l,null),e(l,h),w&&w.m(l,null),e(l,u),M(_,l,null),T=!0,j||(x=Cr(l,"click",k[5]),j=!0)},p(q,[C]){q[1]?w?w.p(q,C):(w=f8(q),w.c(),w.m(l,u)):w&&(w.d(1),w=null);const U={};C&16&&(U.classNames=q[4]?"opacity-100":"opacity-0"),_.$set(U),(!T||C&21&&m!==(m="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+q[0]+" "+(q[2]==="text"?"mx-0.5":"")+" "+(q[2]==="button"?"btn":"")+" "+(q[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!q[4]&&["button-clear","text"].includes(q[2])?"text-gray-600":"")+" "+(q[4]?"text-green-500":"")))&&p(l,"class",m),(!T||C&10&&g!==(g=q[3]||q[1]||"Copy to clipboard"))&&p(l,"title",g)},i(q){T||($(f.$$.fragment,q),$(_.$$.fragment,q),T=!0)},o(q){F(f.$$.fragment,q),F(_.$$.fragment,q),T=!1},d(q){q&&t(l),z(f),w&&w.d(),z(_),j=!1,x()}}}function Y8(k,l,f){let{classNames:h=""}=l,{label:u=""}=l,{style:_="text"}=l,{title:m=""}=l,{value:g}=l,T=!1,j;N8(()=>{j&&clearTimeout(j)});function x(){H8(g),f(4,T=!0),j&&clearTimeout(j),j=setTimeout(()=>{f(4,T=!1)},1e3)}return k.$$set=w=>{"classNames"in w&&f(0,h=w.classNames),"label"in w&&f(1,u=w.label),"style"in w&&f(2,_=w.style),"title"in w&&f(3,m=w.title),"value"in w&&f(6,g=w.value)},[h,u,_,m,T,x,g]}class Z8 extends Nr{constructor(l){super();Ir(this,l,Y8,X8,Dr,{classNames:0,label:1,style:2,title:3,value:6})}}function e9(k){let l,f,h,u,_,m,g,T;return h=new Z8({props:{classNames:"transition duration-200 ease-in-out "+(k[2]&&"opacity-0"),label:"code excerpt",noText:!0,value:k[0]}}),{c(){l=n("div"),f=n("div"),B(h.$$.fragment),u=d(),_=n("pre"),this.h()},l(j){l=s(j,"DIV",{class:!0});var x=o(l);f=s(x,"DIV",{class:!0});var w=o(f);E(h.$$.fragment,w),w.forEach(t),u=c(x),_=s(x,"PRE",{});var q=o(_);q.forEach(t),x.forEach(t),this.h()},h(){p(f,"class","absolute top-2.5 right-4"),p(l,"class","code-block relative")},m(j,x){b(j,l,x),e(l,f),M(h,f,null),e(l,u),e(l,_),_.innerHTML=k[1],m=!0,g||(T=[Cr(l,"mouseover",k[3]),Cr(l,"focus",k[3]),Cr(l,"mouseout",k[4]),Cr(l,"blur",k[4])],g=!0)},p(j,[x]){const w={};x&4&&(w.classNames="transition duration-200 ease-in-out "+(j[2]&&"opacity-0")),x&1&&(w.value=j[0]),h.$set(w),(!m||x&2)&&(_.innerHTML=j[1])},i(j){m||($(h.$$.fragment,j),m=!0)},o(j){F(h.$$.fragment,j),m=!1},d(j){j&&t(l),z(h),g=!1,VP(T)}}}function t9(k,l,f){let h=!0,{code:u=""}=l,{highlighted:_=""}=l;function m(){f(2,h=!1)}function g(){f(2,h=!0)}return k.$$set=T=>{"code"in T&&f(0,u=T.code),"highlighted"in T&&f(1,_=T.highlighted)},[u,_,h,m,g]}class ze extends Nr{constructor(l){super();Ir(this,l,t9,e9,Dr,{code:0,highlighted:1})}}function o9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function n9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function s9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function r9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function a9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function i9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function l9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function d9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function c9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function p9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function h9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function f9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function u9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function m9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function g9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function _9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function v9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function b9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function k9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function y9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function T9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function w9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function $9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function F9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X;return{c(){l=n("p"),f=r("TF 2.0 models accepts two formats as inputs:"),h=d(),u=n("ul"),_=n("li"),m=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),T=n("li"),j=r("having all inputs as a list, tuple or dict in the first positional arguments."),x=d(),w=n("p"),q=r("This second option is useful when using "),C=n("code"),U=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),le=r("model(inputs)"),ce=r("."),L=d(),S=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ie=d(),N=n("ul"),A=n("li"),pe=r("a single Tensor with "),ee=n("code"),_e=r("input_ids"),fe=r(" only and nothing else: "),W=n("code"),ve=r("model(inputs_ids)"),ge=d(),D=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),he=r("model([input_ids, attention_mask])"),te=r(" or "),H=n("code"),oe=r("model([input_ids, attention_mask, token_type_ids])"),G=d(),O=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),X=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=s(v,"P",{});var P=o(l);f=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),h=c(v),u=s(v,"UL",{});var Y=o(u);_=s(Y,"LI",{});var Ee=o(_);m=a(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),g=c(Y),T=s(Y,"LI",{});var ye=o(T);j=a(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),x=c(v),w=s(v,"P",{});var J=o(w);q=a(J,"This second option is useful when using "),C=s(J,"CODE",{});var ke=o(C);U=a(ke,"tf.keras.Model.fit"),ke.forEach(t),re=a(J,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(J,"CODE",{});var Te=o(V);le=a(Te,"model(inputs)"),Te.forEach(t),ce=a(J,"."),J.forEach(t),L=c(v),S=s(v,"P",{});var Me=o(S);ae=a(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ie=c(v),N=s(v,"UL",{});var R=o(N);A=s(R,"LI",{});var Z=o(A);pe=a(Z,"a single Tensor with "),ee=s(Z,"CODE",{});var $e=o(ee);_e=a($e,"input_ids"),$e.forEach(t),fe=a(Z," only and nothing else: "),W=s(Z,"CODE",{});var xe=o(W);ve=a(xe,"model(inputs_ids)"),xe.forEach(t),Z.forEach(t),ge=c(R),D=s(R,"LI",{});var ne=o(D);ue=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(ne,"CODE",{});var Be=o(K);he=a(Be,"model([input_ids, attention_mask])"),Be.forEach(t),te=a(ne," or "),H=s(ne,"CODE",{});var qe=o(H);oe=a(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),ne.forEach(t),G=c(R),O=s(R,"LI",{});var be=o(O);se=a(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(be,"CODE",{});var Pe=o(I);X=a(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),be.forEach(t),R.forEach(t)},m(v,P){b(v,l,P),e(l,f),b(v,h,P),b(v,u,P),e(u,_),e(_,m),e(u,g),e(u,T),e(T,j),b(v,x,P),b(v,w,P),e(w,q),e(w,C),e(C,U),e(w,re),e(w,V),e(V,le),e(w,ce),b(v,L,P),b(v,S,P),e(S,ae),b(v,ie,P),b(v,N,P),e(N,A),e(A,pe),e(A,ee),e(ee,_e),e(A,fe),e(A,W),e(W,ve),e(N,ge),e(N,D),e(D,ue),e(D,K),e(K,he),e(D,te),e(D,H),e(H,oe),e(N,G),e(N,O),e(O,se),e(O,I),e(I,X)},d(v){v&&t(l),v&&t(h),v&&t(u),v&&t(x),v&&t(w),v&&t(L),v&&t(S),v&&t(ie),v&&t(N)}}}function x9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function B9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function E9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function M9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function z9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function q9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function P9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function j9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function C9(k){let l,f,h,u,_;return{c(){l=n("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){l=s(m,"P",{});var g=o(l);f=a(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var T=o(h);u=a(T,"Module"),T.forEach(t),_=a(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(m,g){b(m,l,g),e(l,f),e(l,h),e(h,u),e(l,_)},d(m){m&&t(l)}}}function N9(k){let l,f,h,u,_,m,g,T,j,x,w,q,C,U,re,V,le,ce,L,S,ae,ie,N,A,pe,ee,_e,fe,W,ve,ge,D,ue,K,he,te,H,oe,G,O,se,I,X,v,P,Y,Ee,ye,J,ke,Te,Me,R,Z,$e,xe,ne,Be,qe,be,Pe,c_,ot,Lr,gk,ao,_k,xc,vk,bk,Bc,kk,yk,Ar,Tk,wk,$k,Zo,Fk,Ap,xk,Bk,Sp,Ek,Mk,zk,Op,qk,Pk,Sr,p_,en,us,Up,Or,jk,Wp,Ck,h_,je,Ur,Nk,Hp,Ik,Dk,Wr,Lk,Rp,Ak,Sk,Ok,vo,Hr,Uk,Vp,Wk,Hk,Rr,Ec,Rk,Qp,Vk,Qk,Mc,Kk,Kp,Jk,Gk,ms,Vr,Xk,Qr,Yk,Jp,Zk,ey,ty,Jt,Kr,oy,Gp,ny,sy,Jr,ry,tn,ay,Xp,iy,ly,Yp,dy,cy,py,zc,Gr,f_,on,gs,Zp,Xr,hy,eh,fy,u_,nt,Yr,uy,Zr,my,th,gy,_y,vy,ea,by,oh,ky,yy,Ty,bo,ta,wy,nh,$y,Fy,oa,qc,xy,sh,By,Ey,Pc,My,rh,zy,qy,Gt,na,Py,ah,jy,Cy,sa,Ny,nn,Iy,ih,Dy,Ly,lh,Ay,Sy,m_,sn,_s,dh,ra,Oy,ch,Uy,g_,rn,aa,Wy,ia,Hy,jc,Ry,Vy,__,an,la,Qy,da,Ky,Cc,Jy,Gy,v_,io,ca,Xy,pa,Yy,Nc,Zy,e1,t1,vs,ha,o1,ph,n1,b_,ln,bs,hh,fa,s1,fh,r1,k_,Ce,ua,a1,uh,i1,l1,ma,d1,mh,c1,p1,h1,ga,f1,_a,u1,m1,g1,va,_1,ba,v1,b1,k1,Re,y1,gh,T1,w1,_h,$1,F1,vh,x1,B1,bh,E1,M1,kh,z1,q1,yh,P1,j1,C1,ht,ka,N1,dn,I1,Ic,D1,L1,Th,A1,S1,O1,ks,U1,wh,W1,H1,ya,y_,cn,ys,$h,Ta,R1,Fh,V1,T_,st,wa,Q1,pn,K1,xh,J1,G1,Bh,X1,Y1,Z1,$a,eT,Eh,tT,oT,nT,Fa,sT,xa,rT,aT,iT,ft,Ba,lT,hn,dT,Dc,cT,pT,Mh,hT,fT,uT,Ts,mT,zh,gT,_T,Ea,w_,fn,ws,qh,Ma,vT,Ph,bT,$_,rt,za,kT,qa,yT,jh,TT,wT,$T,Pa,FT,Ch,xT,BT,ET,ja,MT,Ca,zT,qT,PT,ut,Na,jT,un,CT,Lc,NT,IT,Nh,DT,LT,AT,$s,ST,Ih,OT,UT,Ia,F_,mn,Fs,Dh,Da,WT,Lh,HT,x_,at,La,RT,Aa,VT,Ah,QT,KT,JT,Sa,GT,Sh,XT,YT,ZT,Oa,ew,Ua,tw,ow,nw,mt,Wa,sw,gn,rw,Ac,aw,iw,Oh,lw,dw,cw,xs,pw,Uh,hw,fw,Ha,B_,_n,Bs,Wh,Ra,uw,Hh,mw,E_,it,Va,gw,Qa,_w,Rh,vw,bw,kw,Ka,yw,Vh,Tw,ww,$w,Ja,Fw,Ga,xw,Bw,Ew,gt,Xa,Mw,vn,zw,Sc,qw,Pw,Qh,jw,Cw,Nw,Es,Iw,Kh,Dw,Lw,Ya,M_,bn,Ms,Jh,Za,Aw,Gh,Sw,z_,lt,ei,Ow,Xh,Uw,Ww,ti,Hw,Yh,Rw,Vw,Qw,oi,Kw,ni,Jw,Gw,Xw,He,si,Yw,kn,Zw,Oc,e0,t0,Zh,o0,n0,s0,zs,r0,ef,a0,i0,ri,l0,tf,d0,c0,ai,q_,yn,qs,of,ii,p0,nf,h0,P_,dt,li,f0,sf,u0,m0,di,g0,rf,_0,v0,b0,ci,k0,pi,y0,T0,w0,_t,hi,$0,Tn,F0,Uc,x0,B0,af,E0,M0,z0,Ps,q0,lf,P0,j0,fi,j_,wn,js,df,ui,C0,cf,N0,C_,ct,mi,I0,pf,D0,L0,gi,A0,hf,S0,O0,U0,_i,W0,vi,H0,R0,V0,vt,bi,Q0,$n,K0,Wc,J0,G0,ff,X0,Y0,Z0,Cs,e2,uf,t2,o2,ki,N_,Fn,Ns,mf,yi,n2,gf,s2,I_,pt,Ti,r2,xn,a2,_f,i2,l2,vf,d2,c2,p2,wi,h2,bf,f2,u2,m2,$i,g2,Fi,_2,v2,b2,bt,xi,k2,Bn,y2,Hc,T2,w2,kf,$2,F2,x2,Is,B2,yf,E2,M2,Bi,D_,En,Ds,Tf,Ei,z2,wf,q2,L_,Ve,Mi,P2,$f,j2,C2,zi,N2,Ff,I2,D2,L2,qi,A2,Pi,S2,O2,U2,Ls,W2,kt,ji,H2,Mn,R2,Rc,V2,Q2,xf,K2,J2,G2,As,X2,Bf,Y2,Z2,Ci,A_,zn,Ss,Ef,Ni,e$,Mf,t$,S_,Qe,Ii,o$,qn,n$,zf,s$,r$,qf,a$,i$,l$,Di,d$,Pf,c$,p$,h$,Li,f$,Ai,u$,m$,g$,Os,_$,yt,Si,v$,Pn,b$,Vc,k$,y$,jf,T$,w$,$$,Us,F$,Cf,x$,B$,Oi,O_,jn,Ws,Nf,Ui,E$,If,M$,U_,Cn,Wi,z$,et,Hi,q$,Ne,P$,Df,j$,C$,Lf,N$,I$,Af,D$,L$,Sf,A$,S$,Of,O$,U$,Uf,W$,H$,Wf,R$,V$,Q$,Ri,Vi,K$,Hf,J$,G$,X$,Qi,Y$,Rf,Z$,eF,tF,de,oF,Vf,nF,sF,Qf,rF,aF,Kf,iF,lF,Jf,dF,cF,Gf,pF,hF,Xf,fF,uF,Yf,mF,gF,Zf,_F,vF,eu,bF,kF,tu,yF,TF,ou,wF,$F,nu,FF,xF,su,BF,EF,ru,MF,zF,au,qF,PF,iu,jF,CF,lu,NF,IF,du,DF,LF,cu,AF,SF,pu,OF,UF,WF,hu,HF,RF,Ki,W_,Nn,Hs,fu,Ji,VF,uu,QF,H_,Ke,Gi,KF,Xi,JF,mu,GF,XF,YF,Yi,ZF,gu,ex,tx,ox,Zi,nx,el,sx,rx,ax,Rs,ix,Tt,tl,lx,In,dx,Qc,cx,px,_u,hx,fx,ux,Vs,mx,vu,gx,_x,ol,R_,Dn,Qs,bu,nl,vx,ku,bx,V_,Je,sl,kx,rl,yx,yu,Tx,wx,$x,al,Fx,Tu,xx,Bx,Ex,il,Mx,ll,zx,qx,Px,Ks,jx,wt,dl,Cx,Ln,Nx,Kc,Ix,Dx,wu,Lx,Ax,Sx,Js,Ox,$u,Ux,Wx,cl,Q_,An,Gs,Fu,pl,Hx,xu,Rx,K_,Ge,hl,Vx,Bu,Qx,Kx,fl,Jx,Eu,Gx,Xx,Yx,ul,Zx,ml,eB,tB,oB,Xs,nB,$t,gl,sB,Sn,rB,Jc,aB,iB,Mu,lB,dB,cB,Ys,pB,zu,hB,fB,_l,J_,On,Zs,qu,vl,uB,Pu,mB,G_,Xe,bl,gB,ju,_B,vB,kl,bB,Cu,kB,yB,TB,yl,wB,Tl,$B,FB,xB,er,BB,Ft,wl,EB,Un,MB,Gc,zB,qB,Nu,PB,jB,CB,tr,NB,Iu,IB,DB,$l,X_,Wn,or,Du,Fl,LB,Lu,AB,Y_,Ye,xl,SB,Au,OB,UB,Bl,WB,Su,HB,RB,VB,El,QB,Ml,KB,JB,GB,nr,XB,xt,zl,YB,Hn,ZB,Xc,eE,tE,Ou,oE,nE,sE,sr,rE,Uu,aE,iE,ql,Z_,Rn,rr,Wu,Pl,lE,Hu,dE,ev,Ze,jl,cE,Vn,pE,Ru,hE,fE,Vu,uE,mE,gE,Cl,_E,Qu,vE,bE,kE,Nl,yE,Il,TE,wE,$E,ar,FE,Bt,Dl,xE,Qn,BE,Yc,EE,ME,Ku,zE,qE,PE,ir,jE,Ju,CE,NE,Ll,tv,Kn,lr,Gu,Al,IE,Xu,DE,ov,Ie,Sl,LE,Yu,AE,SE,Ol,OE,Zu,UE,WE,HE,Ul,RE,Wl,VE,QE,KE,em,JE,GE,lo,tm,Hl,XE,YE,om,Rl,ZE,e4,nm,Vl,t4,o4,sm,Ql,n4,s4,Et,Kl,r4,Jn,a4,rm,i4,l4,am,d4,c4,p4,dr,h4,im,f4,u4,Jl,nv,Gn,cr,lm,Gl,m4,dm,g4,sv,De,Xl,_4,Xn,v4,cm,b4,k4,pm,y4,T4,w4,Yl,$4,hm,F4,x4,B4,Zl,E4,ed,M4,z4,q4,fm,P4,j4,co,um,td,C4,N4,mm,od,I4,D4,gm,nd,L4,A4,_m,sd,S4,O4,Mt,rd,U4,Yn,W4,vm,H4,R4,bm,V4,Q4,K4,pr,J4,km,G4,X4,ad,rv,Zn,hr,ym,id,Y4,Tm,Z4,av,Le,ld,eM,dd,tM,wm,oM,nM,sM,cd,rM,$m,aM,iM,lM,pd,dM,hd,cM,pM,hM,Fm,fM,uM,po,xm,fd,mM,gM,Bm,ud,_M,vM,Em,md,bM,kM,Mm,gd,yM,TM,zt,_d,wM,es,$M,zm,FM,xM,qm,BM,EM,MM,fr,zM,Pm,qM,PM,vd,iv,ts,ur,jm,bd,jM,Cm,CM,lv,Ae,kd,NM,yd,IM,Nm,DM,LM,AM,Td,SM,Im,OM,UM,WM,wd,HM,$d,RM,VM,QM,Dm,KM,JM,ho,Lm,Fd,GM,XM,Am,xd,YM,ZM,Sm,Bd,ez,tz,Om,Ed,oz,nz,qt,Md,sz,os,rz,Um,az,iz,Wm,lz,dz,cz,mr,pz,Hm,hz,fz,zd,dv,ns,gr,Rm,qd,uz,Vm,mz,cv,Se,Pd,gz,Qm,_z,vz,jd,bz,Km,kz,yz,Tz,Cd,wz,Nd,$z,Fz,xz,Jm,Bz,Ez,fo,Gm,Id,Mz,zz,Xm,Dd,qz,Pz,Ym,Ld,jz,Cz,Zm,Ad,Nz,Iz,Pt,Sd,Dz,ss,Lz,eg,Az,Sz,tg,Oz,Uz,Wz,_r,Hz,og,Rz,Vz,Od,pv,rs,vr,ng,Ud,Qz,sg,Kz,hv,Oe,Wd,Jz,rg,Gz,Xz,Hd,Yz,ag,Zz,eq,tq,Rd,oq,Vd,nq,sq,rq,ig,aq,iq,uo,lg,Qd,lq,dq,dg,Kd,cq,pq,cg,Jd,hq,fq,pg,Gd,uq,mq,jt,Xd,gq,as,_q,hg,vq,bq,fg,kq,yq,Tq,br,wq,ug,$q,Fq,Yd,fv,is,kr,mg,Zd,xq,gg,Bq,uv,Ue,ec,Eq,_g,Mq,zq,tc,qq,vg,Pq,jq,Cq,oc,Nq,nc,Iq,Dq,Lq,bg,Aq,Sq,mo,kg,sc,Oq,Uq,yg,rc,Wq,Hq,Tg,ac,Rq,Vq,wg,ic,Qq,Kq,Ct,lc,Jq,ls,Gq,$g,Xq,Yq,Fg,Zq,eP,tP,yr,oP,xg,nP,sP,dc,mv,ds,Tr,Bg,cc,rP,Eg,aP,gv,We,pc,iP,cs,lP,Mg,dP,cP,zg,pP,hP,fP,hc,uP,qg,mP,gP,_P,fc,vP,uc,bP,kP,yP,Pg,TP,wP,go,jg,mc,$P,FP,Cg,gc,xP,BP,Ng,_c,EP,MP,Ig,vc,zP,qP,Nt,bc,PP,ps,jP,Dg,CP,NP,Lg,IP,DP,LP,wr,AP,Ag,SP,OP,kc,_v;return m=new we({}),U=new we({}),Be=new we({}),Lr=new Q({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/configuration_bert.py#L54",parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/master/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/master/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}]}}),Sr=new ze({props:{code:`from transformers import BertModel, BertConfig

# Initializing a BERT bert-base-uncased style configuration
configuration = BertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = BertModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Or=new we({}),Ur=new Q({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L117",parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.BertTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.BertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}]}}),Hr=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L248",parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vr=new Q({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L273",parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kr=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L301",parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jr=new ze({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Gr=new Q({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L330"}}),Xr=new we({}),Yr=new Q({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert_fast.py#L117",parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.BertTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.BertTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}]}}),ta=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert_fast.py#L205",parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),na=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert_fast.py#L229",parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new ze({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),ra=new we({}),aa=new Q({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L745",parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),la=new Q({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L930",parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),ca=new Q({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L58",parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),ha=new Q({props:{name:"replace",anchor:"None",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/flax/struct.py#L120"}}),fa=new we({}),ua=new Q({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L848",parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),ka=new Q({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L887",parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`}}),ks=new Fe({props:{$$slots:{default:[o9]},$$scope:{ctx:k}}}),ya=new ze({props:{code:`from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ta=new we({}),wa=new Q({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1031",parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Ba=new Q({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1047",parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.</p>
<p>  labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
next_sentence_label (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>):
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence
pair (see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.
kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Ts=new Fe({props:{$$slots:{default:[n9]},$$scope:{ctx:k}}}),Ea=new ze({props:{code:`from transformers import BertTokenizer, BertForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),Ma=new we({}),za=new Q({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1135",parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Na=new Q({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1158",parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.</p>
<p>  encoder_hidden_states  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.
encoder_attention_mask (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be
in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code>
are ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>
past_key_values (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>):
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up
decoding.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`}}),$s=new Fe({props:{$$slots:{default:[s9]},$$scope:{ctx:k}}}),Ia=new ze({props:{code:`from transformers import BertTokenizer, BertLMHeadModel, BertConfig
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
config = BertConfig.from_pretrained("bert-base-cased")
config.is_decoder = True
model = BertLMHeadModel.from_pretrained("bert-base-cased", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertLMHeadModel, BertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),Da=new we({}),La=new Q({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1286",parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Wa=new Q({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1312",parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.MaskedLMOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),xs=new Fe({props:{$$slots:{default:[r9]},$$scope:{ctx:k}}}),Ha=new ze({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ra=new we({}),Va=new Q({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1397",parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Xa=new Q({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1407",parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.NextSentencePredictorOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Es=new Fe({props:{$$slots:{default:[a9]},$$scope:{ctx:k}}}),Ya=new ze({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),Za=new we({}),ei=new Q({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1501",parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),si=new Q({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1517",parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),zs=new Fe({props:{$$slots:{default:[i9]},$$scope:{ctx:k}}}),ri=new ze({props:{code:`from transformers import BertTokenizer, BertForSequenceClassification
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ai=new ze({props:{code:`from transformers import BertTokenizer, BertForSequenceClassification
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained("bert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ii=new we({}),li=new Q({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1603",parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),hi=new Q({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1617",parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.MultipleChoiceModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Ps=new Fe({props:{$$slots:{default:[l9]},$$scope:{ctx:k}}}),fi=new ze({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ui=new we({}),mi=new Q({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1698",parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),bi=new Q({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1716",parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.TokenClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Cs=new Fe({props:{$$slots:{default:[d9]},$$scope:{ctx:k}}}),ki=new ze({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yi=new we({}),Ti=new Q({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1783",parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),xi=new Q({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_bert.py#L1797",parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.QuestionAnsweringModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Is=new Fe({props:{$$slots:{default:[c9]},$$scope:{ctx:k}}}),Bi=new ze({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Ei=new we({}),Mi=new Q({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1057",parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Ls=new Fe({props:{$$slots:{default:[p9]},$$scope:{ctx:k}}}),ji=new Q({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1063",parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`}}),As=new Fe({props:{$$slots:{default:[h9]},$$scope:{ctx:k}}}),Ci=new ze({props:{code:`from transformers import BertTokenizer, TFBertModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertModel.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ni=new we({}),Ii=new Q({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1174",parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Os=new Fe({props:{$$slots:{default:[f9]},$$scope:{ctx:k}}}),Si=new Q({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1196",parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForPreTraining.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFBertForPreTraining.call.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.TFBertForPreTraining.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Us=new Fe({props:{$$slots:{default:[u9]},$$scope:{ctx:k}}}),Oi=new ze({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForPreTraining.from_pretrained("bert-base-uncased")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True))[
    None, :
]  # Batch size 1
outputs = model(input_ids)
prediction_scores, seq_relationship_scores = outputs[:2],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),Ui=new we({}),Wi=new Q({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1418"}}),Hi=new Q({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1455",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`}}),Ki=new ze({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertLMHeadModel.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ji=new we({}),Gi=new Q({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1308",parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Rs=new Fe({props:{$$slots:{default:[m9]},$$scope:{ctx:k}}}),tl=new Q({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1336",parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFMaskedLMOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Vs=new Fe({props:{$$slots:{default:[g9]},$$scope:{ctx:k}}}),ol=new ze({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForMaskedLM.from_pretrained("bert-base-cased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nl=new we({}),sl=new Q({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1580",parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Ks=new Fe({props:{$$slots:{default:[_9]},$$scope:{ctx:k}}}),dl=new Q({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1590",parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForNextSentencePrediction.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>next_sentence_label</code> is provided) \u2014 Next sentence prediction loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Js=new Fe({props:{$$slots:{default:[v9]},$$scope:{ctx:k}}}),cl=new ze({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="tf")

logits = model(encoding["input_ids"], token_type_ids=encoding["token_type_ids"])[0]
assert logits[0][0] < logits[0][1]  # the next sentence was random,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),pl=new we({}),hl=new Q({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1687",parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),Xs=new Fe({props:{$$slots:{default:[b9]},$$scope:{ctx:k}}}),gl=new Q({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1708",parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Ys=new Fe({props:{$$slots:{default:[k9]},$$scope:{ctx:k}}}),_l=new ze({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForSequenceClassification.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vl=new we({}),bl=new Q({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1794",parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),er=new Fe({props:{$$slots:{default:[y9]},$$scope:{ctx:k}}}),wl=new Q({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1818",parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),tr=new Fe({props:{$$slots:{default:[T9]},$$scope:{ctx:k}}}),$l=new ze({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForMultipleChoice.from_pretrained("bert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fl=new we({}),xl=new Q({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1951",parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),nr=new Fe({props:{$$slots:{default:[w9]},$$scope:{ctx:k}}}),zl=new Q({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L1978",parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFTokenClassifierOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),sr=new Fe({props:{$$slots:{default:[$9]},$$scope:{ctx:k}}}),ql=new ze({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForTokenClassification.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pl=new we({}),jl=new Q({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L2062",parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"}]}}),ar=new Fe({props:{$$slots:{default:[F9]},$$scope:{ctx:k}}}),Dl=new Q({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_tf_bert.py#L2084",parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.__call__()</code>and
<code>PreTrainedTokenizer.encode()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),ir=new Fe({props:{$$slots:{default:[x9]},$$scope:{ctx:k}}}),Ll=new ze({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForQuestionAnswering.from_pretrained("bert-base-cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Al=new we({}),Sl=new Q({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L757",parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),Kl=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),dr=new Fe({props:{$$slots:{default:[B9]},$$scope:{ctx:k}}}),Jl=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Gl=new we({}),Xl=new Q({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L830",parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),rd=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),pr=new Fe({props:{$$slots:{default:[E9]},$$scope:{ctx:k}}}),ad=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),id=new we({}),ld=new Q({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L915",parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),_d=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),fr=new Fe({props:{$$slots:{default:[M9]},$$scope:{ctx:k}}}),vd=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),bd=new we({}),kd=new Q({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L976",parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),Md=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),mr=new Fe({props:{$$slots:{default:[z9]},$$scope:{ctx:k}}}),zd=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="jax")

outputs = model(**encoding)
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),qd=new we({}),Pd=new Q({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L1074",parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),Sd=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),_r=new Fe({props:{$$slots:{default:[q9]},$$scope:{ctx:k}}}),Od=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ud=new we({}),Wd=new Q({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L1150",parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),Xd=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),br=new Fe({props:{$$slots:{default:[P9]},$$scope:{ctx:k}}}),Yd=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zd=new we({}),ec=new Q({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L1222",parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),lc=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),yr=new Fe({props:{$$slots:{default:[j9]},$$scope:{ctx:k}}}),dc=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),cc=new we({}),pc=new Q({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L1289",parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <code>from_pretrained()</code>method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <code>to_fp16()</code>and
<code>to_bf16()</code>`,name:"dtype"}]}}),bc=new Q({props:{name:"__call__",anchor:"transformers.FlaxBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/modeling_flax_bert.py#L640",parametersDescription:[{anchor:"transformers.FlaxBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <code>PreTrainedTokenizer.encode()</code>and
<code>PreTrainedTokenizer.__call__()</code>for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>ModelOutput</code>instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),wr=new Fe({props:{$$slots:{default:[C9]},$$scope:{ctx:k}}}),kc=new ze({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=n("meta"),f=d(),h=n("h1"),u=n("a"),_=n("span"),B(m.$$.fragment),g=d(),T=n("span"),j=r("BERT"),x=d(),w=n("h2"),q=n("a"),C=n("span"),B(U.$$.fragment),re=d(),V=n("span"),le=r("Overview"),ce=d(),L=n("p"),S=r("The BERT model was proposed in "),ae=n("a"),ie=r("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),N=r(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),A=d(),pe=n("p"),ee=r("The abstract from the paper is the following:"),_e=d(),fe=n("p"),W=n("em"),ve=r(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ge=d(),D=n("p"),ue=n("em"),K=r(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),he=d(),te=n("p"),H=r("Tips:"),oe=d(),G=n("ul"),O=n("li"),se=r(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),I=d(),X=n("li"),v=r(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),P=d(),Y=n("p"),Ee=r("This model was contributed by "),ye=n("a"),J=r("thomwolf"),ke=r(". The original code can be found "),Te=n("a"),Me=r("here"),R=r("."),Z=d(),$e=n("h2"),xe=n("a"),ne=n("span"),B(Be.$$.fragment),qe=d(),be=n("span"),Pe=r("BertConfig"),c_=d(),ot=n("div"),B(Lr.$$.fragment),gk=d(),ao=n("p"),_k=r("This is the configuration class to store the configuration of a "),xc=n("a"),vk=r("BertModel"),bk=r(" or a "),Bc=n("a"),kk=r("TFBertModel"),yk=r(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Ar=n("a"),Tk=r("bert-base-uncased"),wk=r(" architecture."),$k=d(),Zo=n("p"),Fk=r("Configuration objects inherit from "),Ap=n("code"),xk=r("PretrainedConfig"),Bk=r(`and can be used to control the model outputs. Read the
documentation from `),Sp=n("code"),Ek=r("PretrainedConfig"),Mk=r("for more information."),zk=d(),Op=n("p"),qk=r("Examples:"),Pk=d(),B(Sr.$$.fragment),p_=d(),en=n("h2"),us=n("a"),Up=n("span"),B(Or.$$.fragment),jk=d(),Wp=n("span"),Ck=r("BertTokenizer"),h_=d(),je=n("div"),B(Ur.$$.fragment),Nk=d(),Hp=n("p"),Ik=r("Construct a BERT tokenizer. Based on WordPiece."),Dk=d(),Wr=n("p"),Lk=r("This tokenizer inherits from "),Rp=n("code"),Ak=r("PreTrainedTokenizer"),Sk=r(`which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ok=d(),vo=n("div"),B(Hr.$$.fragment),Uk=d(),Vp=n("p"),Wk=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Hk=d(),Rr=n("ul"),Ec=n("li"),Rk=r("single sequence: "),Qp=n("code"),Vk=r("[CLS] X [SEP]"),Qk=d(),Mc=n("li"),Kk=r("pair of sequences: "),Kp=n("code"),Jk=r("[CLS] A [SEP] B [SEP]"),Gk=d(),ms=n("div"),B(Vr.$$.fragment),Xk=d(),Qr=n("p"),Yk=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jp=n("code"),Zk=r("prepare_for_model"),ey=r(" method."),ty=d(),Jt=n("div"),B(Kr.$$.fragment),oy=d(),Gp=n("p"),ny=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),sy=d(),B(Jr.$$.fragment),ry=d(),tn=n("p"),ay=r("If "),Xp=n("code"),iy=r("token_ids_1"),ly=r(" is "),Yp=n("code"),dy=r("None"),cy=r(", this method only returns the first portion of the mask (0s)."),py=d(),zc=n("div"),B(Gr.$$.fragment),f_=d(),on=n("h2"),gs=n("a"),Zp=n("span"),B(Xr.$$.fragment),hy=d(),eh=n("span"),fy=r("BertTokenizerFast"),u_=d(),nt=n("div"),B(Yr.$$.fragment),uy=d(),Zr=n("p"),my=r("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),th=n("em"),gy=r("tokenizers"),_y=r(" library). Based on WordPiece."),vy=d(),ea=n("p"),by=r("This tokenizer inherits from "),oh=n("code"),ky=r("PreTrainedTokenizerFast"),yy=r(`which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ty=d(),bo=n("div"),B(ta.$$.fragment),wy=d(),nh=n("p"),$y=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Fy=d(),oa=n("ul"),qc=n("li"),xy=r("single sequence: "),sh=n("code"),By=r("[CLS] X [SEP]"),Ey=d(),Pc=n("li"),My=r("pair of sequences: "),rh=n("code"),zy=r("[CLS] A [SEP] B [SEP]"),qy=d(),Gt=n("div"),B(na.$$.fragment),Py=d(),ah=n("p"),jy=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Cy=d(),B(sa.$$.fragment),Ny=d(),nn=n("p"),Iy=r("If "),ih=n("code"),Dy=r("token_ids_1"),Ly=r(" is "),lh=n("code"),Ay=r("None"),Sy=r(", this method only returns the first portion of the mask (0s)."),m_=d(),sn=n("h2"),_s=n("a"),dh=n("span"),B(ra.$$.fragment),Oy=d(),ch=n("span"),Uy=r("Bert specific outputs"),g_=d(),rn=n("div"),B(aa.$$.fragment),Wy=d(),ia=n("p"),Hy=r("Output type of "),jc=n("a"),Ry=r("BertForPreTraining"),Vy=r("."),__=d(),an=n("div"),B(la.$$.fragment),Qy=d(),da=n("p"),Ky=r("Output type of "),Cc=n("a"),Jy=r("TFBertForPreTraining"),Gy=r("."),v_=d(),io=n("div"),B(ca.$$.fragment),Xy=d(),pa=n("p"),Yy=r("Output type of "),Nc=n("a"),Zy=r("BertForPreTraining"),e1=r("."),t1=d(),vs=n("div"),B(ha.$$.fragment),o1=d(),ph=n("p"),n1=r("\u201CReturns a new object replacing the specified fields with new values."),b_=d(),ln=n("h2"),bs=n("a"),hh=n("span"),B(fa.$$.fragment),s1=d(),fh=n("span"),r1=r("BertModel"),k_=d(),Ce=n("div"),B(ua.$$.fragment),a1=d(),uh=n("p"),i1=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),l1=d(),ma=n("p"),d1=r("This model inherits from "),mh=n("code"),c1=r("PreTrainedModel"),p1=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h1=d(),ga=n("p"),f1=r("This model is also a PyTorch "),_a=n("a"),u1=r("torch.nn.Module"),m1=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),g1=d(),va=n("p"),_1=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ba=n("a"),v1=r(`Attention is
all you need`),b1=r(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),k1=d(),Re=n("p"),y1=r("To behave as an decoder the model needs to be initialized with the "),gh=n("code"),T1=r("is_decoder"),w1=r(` argument of the configuration set
to `),_h=n("code"),$1=r("True"),F1=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),vh=n("code"),x1=r("is_decoder"),B1=r(` argument and
`),bh=n("code"),E1=r("add_cross_attention"),M1=r(" set to "),kh=n("code"),z1=r("True"),q1=r("; an "),yh=n("code"),P1=r("encoder_hidden_states"),j1=r(" is then expected as an input to the forward pass."),C1=d(),ht=n("div"),B(ka.$$.fragment),N1=d(),dn=n("p"),I1=r("The "),Ic=n("a"),D1=r("BertModel"),L1=r(" forward method, overrides the "),Th=n("code"),A1=r("__call__"),S1=r(" special method."),O1=d(),B(ks.$$.fragment),U1=d(),wh=n("p"),W1=r("Example:"),H1=d(),B(ya.$$.fragment),y_=d(),cn=n("h2"),ys=n("a"),$h=n("span"),B(Ta.$$.fragment),R1=d(),Fh=n("span"),V1=r("BertForPreTraining"),T_=d(),st=n("div"),B(wa.$$.fragment),Q1=d(),pn=n("p"),K1=r("Bert Model with two heads on top as done during the pretraining: a "),xh=n("code"),J1=r("masked language modeling"),G1=r(" head and a "),Bh=n("code"),X1=r("next sentence prediction (classification)"),Y1=r(" head."),Z1=d(),$a=n("p"),eT=r("This model inherits from "),Eh=n("code"),tT=r("PreTrainedModel"),oT=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nT=d(),Fa=n("p"),sT=r("This model is also a PyTorch "),xa=n("a"),rT=r("torch.nn.Module"),aT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iT=d(),ft=n("div"),B(Ba.$$.fragment),lT=d(),hn=n("p"),dT=r("The "),Dc=n("a"),cT=r("BertForPreTraining"),pT=r(" forward method, overrides the "),Mh=n("code"),hT=r("__call__"),fT=r(" special method."),uT=d(),B(Ts.$$.fragment),mT=d(),zh=n("p"),gT=r("Example:"),_T=d(),B(Ea.$$.fragment),w_=d(),fn=n("h2"),ws=n("a"),qh=n("span"),B(Ma.$$.fragment),vT=d(),Ph=n("span"),bT=r("BertLMHeadModel"),$_=d(),rt=n("div"),B(za.$$.fragment),kT=d(),qa=n("p"),yT=r("Bert Model with a "),jh=n("code"),TT=r("language modeling"),wT=r(" head on top for CLM fine-tuning."),$T=d(),Pa=n("p"),FT=r("This model inherits from "),Ch=n("code"),xT=r("PreTrainedModel"),BT=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=d(),ja=n("p"),MT=r("This model is also a PyTorch "),Ca=n("a"),zT=r("torch.nn.Module"),qT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),PT=d(),ut=n("div"),B(Na.$$.fragment),jT=d(),un=n("p"),CT=r("The "),Lc=n("a"),NT=r("BertLMHeadModel"),IT=r(" forward method, overrides the "),Nh=n("code"),DT=r("__call__"),LT=r(" special method."),AT=d(),B($s.$$.fragment),ST=d(),Ih=n("p"),OT=r("Example:"),UT=d(),B(Ia.$$.fragment),F_=d(),mn=n("h2"),Fs=n("a"),Dh=n("span"),B(Da.$$.fragment),WT=d(),Lh=n("span"),HT=r("BertForMaskedLM"),x_=d(),at=n("div"),B(La.$$.fragment),RT=d(),Aa=n("p"),VT=r("Bert Model with a "),Ah=n("code"),QT=r("language modeling"),KT=r(" head on top."),JT=d(),Sa=n("p"),GT=r("This model inherits from "),Sh=n("code"),XT=r("PreTrainedModel"),YT=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ZT=d(),Oa=n("p"),ew=r("This model is also a PyTorch "),Ua=n("a"),tw=r("torch.nn.Module"),ow=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nw=d(),mt=n("div"),B(Wa.$$.fragment),sw=d(),gn=n("p"),rw=r("The "),Ac=n("a"),aw=r("BertForMaskedLM"),iw=r(" forward method, overrides the "),Oh=n("code"),lw=r("__call__"),dw=r(" special method."),cw=d(),B(xs.$$.fragment),pw=d(),Uh=n("p"),hw=r("Example:"),fw=d(),B(Ha.$$.fragment),B_=d(),_n=n("h2"),Bs=n("a"),Wh=n("span"),B(Ra.$$.fragment),uw=d(),Hh=n("span"),mw=r("BertForNextSentencePrediction"),E_=d(),it=n("div"),B(Va.$$.fragment),gw=d(),Qa=n("p"),_w=r("Bert Model with a "),Rh=n("code"),vw=r("next sentence prediction (classification)"),bw=r(" head on top."),kw=d(),Ka=n("p"),yw=r("This model inherits from "),Vh=n("code"),Tw=r("PreTrainedModel"),ww=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$w=d(),Ja=n("p"),Fw=r("This model is also a PyTorch "),Ga=n("a"),xw=r("torch.nn.Module"),Bw=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ew=d(),gt=n("div"),B(Xa.$$.fragment),Mw=d(),vn=n("p"),zw=r("The "),Sc=n("a"),qw=r("BertForNextSentencePrediction"),Pw=r(" forward method, overrides the "),Qh=n("code"),jw=r("__call__"),Cw=r(" special method."),Nw=d(),B(Es.$$.fragment),Iw=d(),Kh=n("p"),Dw=r("Example:"),Lw=d(),B(Ya.$$.fragment),M_=d(),bn=n("h2"),Ms=n("a"),Jh=n("span"),B(Za.$$.fragment),Aw=d(),Gh=n("span"),Sw=r("BertForSequenceClassification"),z_=d(),lt=n("div"),B(ei.$$.fragment),Ow=d(),Xh=n("p"),Uw=r(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ww=d(),ti=n("p"),Hw=r("This model inherits from "),Yh=n("code"),Rw=r("PreTrainedModel"),Vw=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qw=d(),oi=n("p"),Kw=r("This model is also a PyTorch "),ni=n("a"),Jw=r("torch.nn.Module"),Gw=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xw=d(),He=n("div"),B(si.$$.fragment),Yw=d(),kn=n("p"),Zw=r("The "),Oc=n("a"),e0=r("BertForSequenceClassification"),t0=r(" forward method, overrides the "),Zh=n("code"),o0=r("__call__"),n0=r(" special method."),s0=d(),B(zs.$$.fragment),r0=d(),ef=n("p"),a0=r("Example of single-label classification:"),i0=d(),B(ri.$$.fragment),l0=d(),tf=n("p"),d0=r("Example of multi-label classification:"),c0=d(),B(ai.$$.fragment),q_=d(),yn=n("h2"),qs=n("a"),of=n("span"),B(ii.$$.fragment),p0=d(),nf=n("span"),h0=r("BertForMultipleChoice"),P_=d(),dt=n("div"),B(li.$$.fragment),f0=d(),sf=n("p"),u0=r(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),m0=d(),di=n("p"),g0=r("This model inherits from "),rf=n("code"),_0=r("PreTrainedModel"),v0=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b0=d(),ci=n("p"),k0=r("This model is also a PyTorch "),pi=n("a"),y0=r("torch.nn.Module"),T0=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w0=d(),_t=n("div"),B(hi.$$.fragment),$0=d(),Tn=n("p"),F0=r("The "),Uc=n("a"),x0=r("BertForMultipleChoice"),B0=r(" forward method, overrides the "),af=n("code"),E0=r("__call__"),M0=r(" special method."),z0=d(),B(Ps.$$.fragment),q0=d(),lf=n("p"),P0=r("Example:"),j0=d(),B(fi.$$.fragment),j_=d(),wn=n("h2"),js=n("a"),df=n("span"),B(ui.$$.fragment),C0=d(),cf=n("span"),N0=r("BertForTokenClassification"),C_=d(),ct=n("div"),B(mi.$$.fragment),I0=d(),pf=n("p"),D0=r(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),L0=d(),gi=n("p"),A0=r("This model inherits from "),hf=n("code"),S0=r("PreTrainedModel"),O0=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U0=d(),_i=n("p"),W0=r("This model is also a PyTorch "),vi=n("a"),H0=r("torch.nn.Module"),R0=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),V0=d(),vt=n("div"),B(bi.$$.fragment),Q0=d(),$n=n("p"),K0=r("The "),Wc=n("a"),J0=r("BertForTokenClassification"),G0=r(" forward method, overrides the "),ff=n("code"),X0=r("__call__"),Y0=r(" special method."),Z0=d(),B(Cs.$$.fragment),e2=d(),uf=n("p"),t2=r("Example:"),o2=d(),B(ki.$$.fragment),N_=d(),Fn=n("h2"),Ns=n("a"),mf=n("span"),B(yi.$$.fragment),n2=d(),gf=n("span"),s2=r("BertForQuestionAnswering"),I_=d(),pt=n("div"),B(Ti.$$.fragment),r2=d(),xn=n("p"),a2=r(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_f=n("code"),i2=r("span start logits"),l2=r(" and "),vf=n("code"),d2=r("span end logits"),c2=r(")."),p2=d(),wi=n("p"),h2=r("This model inherits from "),bf=n("code"),f2=r("PreTrainedModel"),u2=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m2=d(),$i=n("p"),g2=r("This model is also a PyTorch "),Fi=n("a"),_2=r("torch.nn.Module"),v2=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),b2=d(),bt=n("div"),B(xi.$$.fragment),k2=d(),Bn=n("p"),y2=r("The "),Hc=n("a"),T2=r("BertForQuestionAnswering"),w2=r(" forward method, overrides the "),kf=n("code"),$2=r("__call__"),F2=r(" special method."),x2=d(),B(Is.$$.fragment),B2=d(),yf=n("p"),E2=r("Example:"),M2=d(),B(Bi.$$.fragment),D_=d(),En=n("h2"),Ds=n("a"),Tf=n("span"),B(Ei.$$.fragment),z2=d(),wf=n("span"),q2=r("TFBertModel"),L_=d(),Ve=n("div"),B(Mi.$$.fragment),P2=d(),$f=n("p"),j2=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),C2=d(),zi=n("p"),N2=r("This model inherits from "),Ff=n("code"),I2=r("TFPreTrainedModel"),D2=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),L2=d(),qi=n("p"),A2=r("This model is also a "),Pi=n("a"),S2=r("tf.keras.Model"),O2=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),U2=d(),B(Ls.$$.fragment),W2=d(),kt=n("div"),B(ji.$$.fragment),H2=d(),Mn=n("p"),R2=r("The "),Rc=n("a"),V2=r("TFBertModel"),Q2=r(" forward method, overrides the "),xf=n("code"),K2=r("__call__"),J2=r(" special method."),G2=d(),B(As.$$.fragment),X2=d(),Bf=n("p"),Y2=r("Example:"),Z2=d(),B(Ci.$$.fragment),A_=d(),zn=n("h2"),Ss=n("a"),Ef=n("span"),B(Ni.$$.fragment),e$=d(),Mf=n("span"),t$=r("TFBertForPreTraining"),S_=d(),Qe=n("div"),B(Ii.$$.fragment),o$=d(),qn=n("p"),n$=r(`Bert Model with two heads on top as done during the pretraining:
a `),zf=n("code"),s$=r("masked language modeling"),r$=r(" head and a "),qf=n("code"),a$=r("next sentence prediction (classification)"),i$=r(" head."),l$=d(),Di=n("p"),d$=r("This model inherits from "),Pf=n("code"),c$=r("TFPreTrainedModel"),p$=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h$=d(),Li=n("p"),f$=r("This model is also a "),Ai=n("a"),u$=r("tf.keras.Model"),m$=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),g$=d(),B(Os.$$.fragment),_$=d(),yt=n("div"),B(Si.$$.fragment),v$=d(),Pn=n("p"),b$=r("The "),Vc=n("a"),k$=r("TFBertForPreTraining"),y$=r(" forward method, overrides the "),jf=n("code"),T$=r("__call__"),w$=r(" special method."),$$=d(),B(Us.$$.fragment),F$=d(),Cf=n("p"),x$=r("Examples:"),B$=d(),B(Oi.$$.fragment),O_=d(),jn=n("h2"),Ws=n("a"),Nf=n("span"),B(Ui.$$.fragment),E$=d(),If=n("span"),M$=r("TFBertModelLMHeadModel"),U_=d(),Cn=n("div"),B(Wi.$$.fragment),z$=d(),et=n("div"),B(Hi.$$.fragment),q$=d(),Ne=n("p"),P$=r("encoder_hidden_states  ("),Df=n("code"),j$=r("tf.Tensor"),C$=r(" of shape "),Lf=n("code"),N$=r("(batch_size, sequence_length, hidden_size)"),I$=r(", "),Af=n("em"),D$=r("optional"),L$=r(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Sf=n("code"),A$=r("tf.Tensor"),S$=r(" of shape "),Of=n("code"),O$=r("(batch_size, sequence_length)"),U$=r(", "),Uf=n("em"),W$=r("optional"),H$=r(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Wf=n("code"),R$=r("[0, 1]"),V$=r(":"),Q$=d(),Ri=n("ul"),Vi=n("li"),K$=r("1 for tokens that are "),Hf=n("strong"),J$=r("not masked"),G$=r(","),X$=d(),Qi=n("li"),Y$=r("0 for tokens that are "),Rf=n("strong"),Z$=r("masked"),eF=r("."),tF=d(),de=n("p"),oF=r("past_key_values ("),Vf=n("code"),nF=r("Tuple[Tuple[tf.Tensor]]"),sF=r(" of length "),Qf=n("code"),rF=r("config.n_layers"),aF=r(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Kf=n("code"),iF=r("past_key_values"),lF=r(" are used, the user can optionally input only the last "),Jf=n("code"),dF=r("decoder_input_ids"),cF=r(` (those that
don\u2019t have their past key value states given to this model) of shape `),Gf=n("code"),pF=r("(batch_size, 1)"),hF=r(` instead of all
`),Xf=n("code"),fF=r("decoder_input_ids"),uF=r(" of shape "),Yf=n("code"),mF=r("(batch_size, sequence_length)"),gF=r(`.
use_cache (`),Zf=n("code"),_F=r("bool"),vF=r(", "),eu=n("em"),bF=r("optional"),kF=r(", defaults to "),tu=n("code"),yF=r("True"),TF=r(`):
If set to `),ou=n("code"),wF=r("True"),$F=r(", "),nu=n("code"),FF=r("past_key_values"),xF=r(` key value states are returned and can be used to speed up decoding (see
`),su=n("code"),BF=r("past_key_values"),EF=r("). Set to "),ru=n("code"),MF=r("False"),zF=r(" during training, "),au=n("code"),qF=r("True"),PF=r(` during generation
labels (`),iu=n("code"),jF=r("tf.Tensor"),CF=r(" or "),lu=n("code"),NF=r("np.ndarray"),IF=r(" of shape "),du=n("code"),DF=r("(batch_size, sequence_length)"),LF=r(", "),cu=n("em"),AF=r("optional"),SF=r(`):
Labels for computing the cross entropy classification loss. Indices should be in `),pu=n("code"),OF=r("[0, ..., config.vocab_size - 1]"),UF=r("."),WF=d(),hu=n("p"),HF=r("Example:"),RF=d(),B(Ki.$$.fragment),W_=d(),Nn=n("h2"),Hs=n("a"),fu=n("span"),B(Ji.$$.fragment),VF=d(),uu=n("span"),QF=r("TFBertForMaskedLM"),H_=d(),Ke=n("div"),B(Gi.$$.fragment),KF=d(),Xi=n("p"),JF=r("Bert Model with a "),mu=n("code"),GF=r("language modeling"),XF=r(" head on top."),YF=d(),Yi=n("p"),ZF=r("This model inherits from "),gu=n("code"),ex=r("TFPreTrainedModel"),tx=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ox=d(),Zi=n("p"),nx=r("This model is also a "),el=n("a"),sx=r("tf.keras.Model"),rx=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ax=d(),B(Rs.$$.fragment),ix=d(),Tt=n("div"),B(tl.$$.fragment),lx=d(),In=n("p"),dx=r("The "),Qc=n("a"),cx=r("TFBertForMaskedLM"),px=r(" forward method, overrides the "),_u=n("code"),hx=r("__call__"),fx=r(" special method."),ux=d(),B(Vs.$$.fragment),mx=d(),vu=n("p"),gx=r("Example:"),_x=d(),B(ol.$$.fragment),R_=d(),Dn=n("h2"),Qs=n("a"),bu=n("span"),B(nl.$$.fragment),vx=d(),ku=n("span"),bx=r("TFBertForNextSentencePrediction"),V_=d(),Je=n("div"),B(sl.$$.fragment),kx=d(),rl=n("p"),yx=r("Bert Model with a "),yu=n("code"),Tx=r("next sentence prediction (classification)"),wx=r(" head on top."),$x=d(),al=n("p"),Fx=r("This model inherits from "),Tu=n("code"),xx=r("TFPreTrainedModel"),Bx=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ex=d(),il=n("p"),Mx=r("This model is also a "),ll=n("a"),zx=r("tf.keras.Model"),qx=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Px=d(),B(Ks.$$.fragment),jx=d(),wt=n("div"),B(dl.$$.fragment),Cx=d(),Ln=n("p"),Nx=r("The "),Kc=n("a"),Ix=r("TFBertForNextSentencePrediction"),Dx=r(" forward method, overrides the "),wu=n("code"),Lx=r("__call__"),Ax=r(" special method."),Sx=d(),B(Js.$$.fragment),Ox=d(),$u=n("p"),Ux=r("Examples:"),Wx=d(),B(cl.$$.fragment),Q_=d(),An=n("h2"),Gs=n("a"),Fu=n("span"),B(pl.$$.fragment),Hx=d(),xu=n("span"),Rx=r("TFBertForSequenceClassification"),K_=d(),Ge=n("div"),B(hl.$$.fragment),Vx=d(),Bu=n("p"),Qx=r(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Kx=d(),fl=n("p"),Jx=r("This model inherits from "),Eu=n("code"),Gx=r("TFPreTrainedModel"),Xx=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yx=d(),ul=n("p"),Zx=r("This model is also a "),ml=n("a"),eB=r("tf.keras.Model"),tB=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oB=d(),B(Xs.$$.fragment),nB=d(),$t=n("div"),B(gl.$$.fragment),sB=d(),Sn=n("p"),rB=r("The "),Jc=n("a"),aB=r("TFBertForSequenceClassification"),iB=r(" forward method, overrides the "),Mu=n("code"),lB=r("__call__"),dB=r(" special method."),cB=d(),B(Ys.$$.fragment),pB=d(),zu=n("p"),hB=r("Example:"),fB=d(),B(_l.$$.fragment),J_=d(),On=n("h2"),Zs=n("a"),qu=n("span"),B(vl.$$.fragment),uB=d(),Pu=n("span"),mB=r("TFBertForMultipleChoice"),G_=d(),Xe=n("div"),B(bl.$$.fragment),gB=d(),ju=n("p"),_B=r(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),vB=d(),kl=n("p"),bB=r("This model inherits from "),Cu=n("code"),kB=r("TFPreTrainedModel"),yB=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),TB=d(),yl=n("p"),wB=r("This model is also a "),Tl=n("a"),$B=r("tf.keras.Model"),FB=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xB=d(),B(er.$$.fragment),BB=d(),Ft=n("div"),B(wl.$$.fragment),EB=d(),Un=n("p"),MB=r("The "),Gc=n("a"),zB=r("TFBertForMultipleChoice"),qB=r(" forward method, overrides the "),Nu=n("code"),PB=r("__call__"),jB=r(" special method."),CB=d(),B(tr.$$.fragment),NB=d(),Iu=n("p"),IB=r("Example:"),DB=d(),B($l.$$.fragment),X_=d(),Wn=n("h2"),or=n("a"),Du=n("span"),B(Fl.$$.fragment),LB=d(),Lu=n("span"),AB=r("TFBertForTokenClassification"),Y_=d(),Ye=n("div"),B(xl.$$.fragment),SB=d(),Au=n("p"),OB=r(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),UB=d(),Bl=n("p"),WB=r("This model inherits from "),Su=n("code"),HB=r("TFPreTrainedModel"),RB=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VB=d(),El=n("p"),QB=r("This model is also a "),Ml=n("a"),KB=r("tf.keras.Model"),JB=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),GB=d(),B(nr.$$.fragment),XB=d(),xt=n("div"),B(zl.$$.fragment),YB=d(),Hn=n("p"),ZB=r("The "),Xc=n("a"),eE=r("TFBertForTokenClassification"),tE=r(" forward method, overrides the "),Ou=n("code"),oE=r("__call__"),nE=r(" special method."),sE=d(),B(sr.$$.fragment),rE=d(),Uu=n("p"),aE=r("Example:"),iE=d(),B(ql.$$.fragment),Z_=d(),Rn=n("h2"),rr=n("a"),Wu=n("span"),B(Pl.$$.fragment),lE=d(),Hu=n("span"),dE=r("TFBertForQuestionAnswering"),ev=d(),Ze=n("div"),B(jl.$$.fragment),cE=d(),Vn=n("p"),pE=r(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ru=n("code"),hE=r("span start logits"),fE=r(" and "),Vu=n("code"),uE=r("span end logits"),mE=r(")."),gE=d(),Cl=n("p"),_E=r("This model inherits from "),Qu=n("code"),vE=r("TFPreTrainedModel"),bE=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kE=d(),Nl=n("p"),yE=r("This model is also a "),Il=n("a"),TE=r("tf.keras.Model"),wE=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$E=d(),B(ar.$$.fragment),FE=d(),Bt=n("div"),B(Dl.$$.fragment),xE=d(),Qn=n("p"),BE=r("The "),Yc=n("a"),EE=r("TFBertForQuestionAnswering"),ME=r(" forward method, overrides the "),Ku=n("code"),zE=r("__call__"),qE=r(" special method."),PE=d(),B(ir.$$.fragment),jE=d(),Ju=n("p"),CE=r("Example:"),NE=d(),B(Ll.$$.fragment),tv=d(),Kn=n("h2"),lr=n("a"),Gu=n("span"),B(Al.$$.fragment),IE=d(),Xu=n("span"),DE=r("FlaxBertModel"),ov=d(),Ie=n("div"),B(Sl.$$.fragment),LE=d(),Yu=n("p"),AE=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),SE=d(),Ol=n("p"),OE=r("This model inherits from "),Zu=n("code"),UE=r("FlaxPreTrainedModel"),WE=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),HE=d(),Ul=n("p"),RE=r("This model is also a Flax Linen "),Wl=n("a"),VE=r("flax.linen.Module"),QE=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),KE=d(),em=n("p"),JE=r("Finally, this model supports inherent JAX features such as:"),GE=d(),lo=n("ul"),tm=n("li"),Hl=n("a"),XE=r("Just-In-Time (JIT) compilation"),YE=d(),om=n("li"),Rl=n("a"),ZE=r("Automatic Differentiation"),e4=d(),nm=n("li"),Vl=n("a"),t4=r("Vectorization"),o4=d(),sm=n("li"),Ql=n("a"),n4=r("Parallelization"),s4=d(),Et=n("div"),B(Kl.$$.fragment),r4=d(),Jn=n("p"),a4=r("The "),rm=n("code"),i4=r("FlaxBertPreTrainedModel"),l4=r("forward method, overrides the "),am=n("code"),d4=r("__call__"),c4=r(" special method."),p4=d(),B(dr.$$.fragment),h4=d(),im=n("p"),f4=r("Example:"),u4=d(),B(Jl.$$.fragment),nv=d(),Gn=n("h2"),cr=n("a"),lm=n("span"),B(Gl.$$.fragment),m4=d(),dm=n("span"),g4=r("FlaxBertForPreTraining"),sv=d(),De=n("div"),B(Xl.$$.fragment),_4=d(),Xn=n("p"),v4=r("Bert Model with two heads on top as done during the pretraining: a "),cm=n("code"),b4=r("masked language modeling"),k4=r(" head and a "),pm=n("code"),y4=r("next sentence prediction (classification)"),T4=r(" head."),w4=d(),Yl=n("p"),$4=r("This model inherits from "),hm=n("code"),F4=r("FlaxPreTrainedModel"),x4=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),B4=d(),Zl=n("p"),E4=r("This model is also a Flax Linen "),ed=n("a"),M4=r("flax.linen.Module"),z4=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),q4=d(),fm=n("p"),P4=r("Finally, this model supports inherent JAX features such as:"),j4=d(),co=n("ul"),um=n("li"),td=n("a"),C4=r("Just-In-Time (JIT) compilation"),N4=d(),mm=n("li"),od=n("a"),I4=r("Automatic Differentiation"),D4=d(),gm=n("li"),nd=n("a"),L4=r("Vectorization"),A4=d(),_m=n("li"),sd=n("a"),S4=r("Parallelization"),O4=d(),Mt=n("div"),B(rd.$$.fragment),U4=d(),Yn=n("p"),W4=r("The "),vm=n("code"),H4=r("FlaxBertPreTrainedModel"),R4=r("forward method, overrides the "),bm=n("code"),V4=r("__call__"),Q4=r(" special method."),K4=d(),B(pr.$$.fragment),J4=d(),km=n("p"),G4=r("Example:"),X4=d(),B(ad.$$.fragment),rv=d(),Zn=n("h2"),hr=n("a"),ym=n("span"),B(id.$$.fragment),Y4=d(),Tm=n("span"),Z4=r("FlaxBertForMaskedLM"),av=d(),Le=n("div"),B(ld.$$.fragment),eM=d(),dd=n("p"),tM=r("Bert Model with a "),wm=n("code"),oM=r("language modeling"),nM=r(" head on top."),sM=d(),cd=n("p"),rM=r("This model inherits from "),$m=n("code"),aM=r("FlaxPreTrainedModel"),iM=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lM=d(),pd=n("p"),dM=r("This model is also a Flax Linen "),hd=n("a"),cM=r("flax.linen.Module"),pM=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hM=d(),Fm=n("p"),fM=r("Finally, this model supports inherent JAX features such as:"),uM=d(),po=n("ul"),xm=n("li"),fd=n("a"),mM=r("Just-In-Time (JIT) compilation"),gM=d(),Bm=n("li"),ud=n("a"),_M=r("Automatic Differentiation"),vM=d(),Em=n("li"),md=n("a"),bM=r("Vectorization"),kM=d(),Mm=n("li"),gd=n("a"),yM=r("Parallelization"),TM=d(),zt=n("div"),B(_d.$$.fragment),wM=d(),es=n("p"),$M=r("The "),zm=n("code"),FM=r("FlaxBertPreTrainedModel"),xM=r("forward method, overrides the "),qm=n("code"),BM=r("__call__"),EM=r(" special method."),MM=d(),B(fr.$$.fragment),zM=d(),Pm=n("p"),qM=r("Example:"),PM=d(),B(vd.$$.fragment),iv=d(),ts=n("h2"),ur=n("a"),jm=n("span"),B(bd.$$.fragment),jM=d(),Cm=n("span"),CM=r("FlaxBertForNextSentencePrediction"),lv=d(),Ae=n("div"),B(kd.$$.fragment),NM=d(),yd=n("p"),IM=r("Bert Model with a "),Nm=n("code"),DM=r("next sentence prediction (classification)"),LM=r(" head on top."),AM=d(),Td=n("p"),SM=r("This model inherits from "),Im=n("code"),OM=r("FlaxPreTrainedModel"),UM=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),WM=d(),wd=n("p"),HM=r("This model is also a Flax Linen "),$d=n("a"),RM=r("flax.linen.Module"),VM=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),QM=d(),Dm=n("p"),KM=r("Finally, this model supports inherent JAX features such as:"),JM=d(),ho=n("ul"),Lm=n("li"),Fd=n("a"),GM=r("Just-In-Time (JIT) compilation"),XM=d(),Am=n("li"),xd=n("a"),YM=r("Automatic Differentiation"),ZM=d(),Sm=n("li"),Bd=n("a"),ez=r("Vectorization"),tz=d(),Om=n("li"),Ed=n("a"),oz=r("Parallelization"),nz=d(),qt=n("div"),B(Md.$$.fragment),sz=d(),os=n("p"),rz=r("The "),Um=n("code"),az=r("FlaxBertPreTrainedModel"),iz=r("forward method, overrides the "),Wm=n("code"),lz=r("__call__"),dz=r(" special method."),cz=d(),B(mr.$$.fragment),pz=d(),Hm=n("p"),hz=r("Example:"),fz=d(),B(zd.$$.fragment),dv=d(),ns=n("h2"),gr=n("a"),Rm=n("span"),B(qd.$$.fragment),uz=d(),Vm=n("span"),mz=r("FlaxBertForSequenceClassification"),cv=d(),Se=n("div"),B(Pd.$$.fragment),gz=d(),Qm=n("p"),_z=r(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),vz=d(),jd=n("p"),bz=r("This model inherits from "),Km=n("code"),kz=r("FlaxPreTrainedModel"),yz=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tz=d(),Cd=n("p"),wz=r("This model is also a Flax Linen "),Nd=n("a"),$z=r("flax.linen.Module"),Fz=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xz=d(),Jm=n("p"),Bz=r("Finally, this model supports inherent JAX features such as:"),Ez=d(),fo=n("ul"),Gm=n("li"),Id=n("a"),Mz=r("Just-In-Time (JIT) compilation"),zz=d(),Xm=n("li"),Dd=n("a"),qz=r("Automatic Differentiation"),Pz=d(),Ym=n("li"),Ld=n("a"),jz=r("Vectorization"),Cz=d(),Zm=n("li"),Ad=n("a"),Nz=r("Parallelization"),Iz=d(),Pt=n("div"),B(Sd.$$.fragment),Dz=d(),ss=n("p"),Lz=r("The "),eg=n("code"),Az=r("FlaxBertPreTrainedModel"),Sz=r("forward method, overrides the "),tg=n("code"),Oz=r("__call__"),Uz=r(" special method."),Wz=d(),B(_r.$$.fragment),Hz=d(),og=n("p"),Rz=r("Example:"),Vz=d(),B(Od.$$.fragment),pv=d(),rs=n("h2"),vr=n("a"),ng=n("span"),B(Ud.$$.fragment),Qz=d(),sg=n("span"),Kz=r("FlaxBertForMultipleChoice"),hv=d(),Oe=n("div"),B(Wd.$$.fragment),Jz=d(),rg=n("p"),Gz=r(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Xz=d(),Hd=n("p"),Yz=r("This model inherits from "),ag=n("code"),Zz=r("FlaxPreTrainedModel"),eq=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tq=d(),Rd=n("p"),oq=r("This model is also a Flax Linen "),Vd=n("a"),nq=r("flax.linen.Module"),sq=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rq=d(),ig=n("p"),aq=r("Finally, this model supports inherent JAX features such as:"),iq=d(),uo=n("ul"),lg=n("li"),Qd=n("a"),lq=r("Just-In-Time (JIT) compilation"),dq=d(),dg=n("li"),Kd=n("a"),cq=r("Automatic Differentiation"),pq=d(),cg=n("li"),Jd=n("a"),hq=r("Vectorization"),fq=d(),pg=n("li"),Gd=n("a"),uq=r("Parallelization"),mq=d(),jt=n("div"),B(Xd.$$.fragment),gq=d(),as=n("p"),_q=r("The "),hg=n("code"),vq=r("FlaxBertPreTrainedModel"),bq=r("forward method, overrides the "),fg=n("code"),kq=r("__call__"),yq=r(" special method."),Tq=d(),B(br.$$.fragment),wq=d(),ug=n("p"),$q=r("Example:"),Fq=d(),B(Yd.$$.fragment),fv=d(),is=n("h2"),kr=n("a"),mg=n("span"),B(Zd.$$.fragment),xq=d(),gg=n("span"),Bq=r("FlaxBertForTokenClassification"),uv=d(),Ue=n("div"),B(ec.$$.fragment),Eq=d(),_g=n("p"),Mq=r(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zq=d(),tc=n("p"),qq=r("This model inherits from "),vg=n("code"),Pq=r("FlaxPreTrainedModel"),jq=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cq=d(),oc=n("p"),Nq=r("This model is also a Flax Linen "),nc=n("a"),Iq=r("flax.linen.Module"),Dq=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lq=d(),bg=n("p"),Aq=r("Finally, this model supports inherent JAX features such as:"),Sq=d(),mo=n("ul"),kg=n("li"),sc=n("a"),Oq=r("Just-In-Time (JIT) compilation"),Uq=d(),yg=n("li"),rc=n("a"),Wq=r("Automatic Differentiation"),Hq=d(),Tg=n("li"),ac=n("a"),Rq=r("Vectorization"),Vq=d(),wg=n("li"),ic=n("a"),Qq=r("Parallelization"),Kq=d(),Ct=n("div"),B(lc.$$.fragment),Jq=d(),ls=n("p"),Gq=r("The "),$g=n("code"),Xq=r("FlaxBertPreTrainedModel"),Yq=r("forward method, overrides the "),Fg=n("code"),Zq=r("__call__"),eP=r(" special method."),tP=d(),B(yr.$$.fragment),oP=d(),xg=n("p"),nP=r("Example:"),sP=d(),B(dc.$$.fragment),mv=d(),ds=n("h2"),Tr=n("a"),Bg=n("span"),B(cc.$$.fragment),rP=d(),Eg=n("span"),aP=r("FlaxBertForQuestionAnswering"),gv=d(),We=n("div"),B(pc.$$.fragment),iP=d(),cs=n("p"),lP=r(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mg=n("code"),dP=r("span start logits"),cP=r(" and "),zg=n("code"),pP=r("span end logits"),hP=r(")."),fP=d(),hc=n("p"),uP=r("This model inherits from "),qg=n("code"),mP=r("FlaxPreTrainedModel"),gP=r(` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_P=d(),fc=n("p"),vP=r("This model is also a Flax Linen "),uc=n("a"),bP=r("flax.linen.Module"),kP=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yP=d(),Pg=n("p"),TP=r("Finally, this model supports inherent JAX features such as:"),wP=d(),go=n("ul"),jg=n("li"),mc=n("a"),$P=r("Just-In-Time (JIT) compilation"),FP=d(),Cg=n("li"),gc=n("a"),xP=r("Automatic Differentiation"),BP=d(),Ng=n("li"),_c=n("a"),EP=r("Vectorization"),MP=d(),Ig=n("li"),vc=n("a"),zP=r("Parallelization"),qP=d(),Nt=n("div"),B(bc.$$.fragment),PP=d(),ps=n("p"),jP=r("The "),Dg=n("code"),CP=r("FlaxBertPreTrainedModel"),NP=r("forward method, overrides the "),Lg=n("code"),IP=r("__call__"),DP=r(" special method."),LP=d(),B(wr.$$.fragment),AP=d(),Ag=n("p"),SP=r("Example:"),OP=d(),B(kc.$$.fragment),this.h()},l(i){const y=I8('[data-svelte="svelte-1phssyn"]',document.head);l=s(y,"META",{name:!0,content:!0}),y.forEach(t),f=c(i),h=s(i,"H1",{class:!0});var yc=o(h);u=s(yc,"A",{id:!0,class:!0,href:!0});var Sg=o(u);_=s(Sg,"SPAN",{});var Og=o(_);E(m.$$.fragment,Og),Og.forEach(t),Sg.forEach(t),g=c(yc),T=s(yc,"SPAN",{});var Ug=o(T);j=a(Ug,"BERT"),Ug.forEach(t),yc.forEach(t),x=c(i),w=s(i,"H2",{class:!0});var Tc=o(w);q=s(Tc,"A",{id:!0,class:!0,href:!0});var Wg=o(q);C=s(Wg,"SPAN",{});var Hg=o(C);E(U.$$.fragment,Hg),Hg.forEach(t),Wg.forEach(t),re=c(Tc),V=s(Tc,"SPAN",{});var Rg=o(V);le=a(Rg,"Overview"),Rg.forEach(t),Tc.forEach(t),ce=c(i),L=s(i,"P",{});var wc=o(L);S=a(wc,"The BERT model was proposed in "),ae=s(wc,"A",{href:!0,rel:!0});var Vg=o(ae);ie=a(Vg,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),Vg.forEach(t),N=a(wc,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),wc.forEach(t),A=c(i),pe=s(i,"P",{});var Qg=o(pe);ee=a(Qg,"The abstract from the paper is the following:"),Qg.forEach(t),_e=c(i),fe=s(i,"P",{});var Kg=o(fe);W=s(Kg,"EM",{});var Jg=o(W);ve=a(Jg,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),Jg.forEach(t),Kg.forEach(t),ge=c(i),D=s(i,"P",{});var Gg=o(D);ue=s(Gg,"EM",{});var Xg=o(ue);K=a(Xg,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Xg.forEach(t),Gg.forEach(t),he=c(i),te=s(i,"P",{});var Yg=o(te);H=a(Yg,"Tips:"),Yg.forEach(t),oe=c(i),G=s(i,"UL",{});var $c=o(G);O=s($c,"LI",{});var Zg=o(O);se=a(Zg,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Zg.forEach(t),I=c($c),X=s($c,"LI",{});var e_=o(X);v=a(e_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),e_.forEach(t),$c.forEach(t),P=c(i),Y=s(i,"P",{});var hs=o(Y);Ee=a(hs,"This model was contributed by "),ye=s(hs,"A",{href:!0,rel:!0});var t_=o(ye);J=a(t_,"thomwolf"),t_.forEach(t),ke=a(hs,". The original code can be found "),Te=s(hs,"A",{href:!0,rel:!0});var o_=o(Te);Me=a(o_,"here"),o_.forEach(t),R=a(hs,"."),hs.forEach(t),Z=c(i),$e=s(i,"H2",{class:!0});var Fc=o($e);xe=s(Fc,"A",{id:!0,class:!0,href:!0});var n_=o(xe);ne=s(n_,"SPAN",{});var s_=o(ne);E(Be.$$.fragment,s_),s_.forEach(t),n_.forEach(t),qe=c(Fc),be=s(Fc,"SPAN",{});var r_=o(be);Pe=a(r_,"BertConfig"),r_.forEach(t),Fc.forEach(t),c_=c(i),ot=s(i,"DIV",{class:!0});var Kt=o(ot);E(Lr.$$.fragment,Kt),gk=c(Kt),ao=s(Kt,"P",{});var _o=o(ao);_k=a(_o,"This is the configuration class to store the configuration of a "),xc=s(_o,"A",{href:!0});var a_=o(xc);vk=a(a_,"BertModel"),a_.forEach(t),bk=a(_o," or a "),Bc=s(_o,"A",{href:!0});var i_=o(Bc);kk=a(i_,"TFBertModel"),i_.forEach(t),yk=a(_o,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Ar=s(_o,"A",{href:!0,rel:!0});var l_=o(Ar);Tk=a(l_,"bert-base-uncased"),l_.forEach(t),wk=a(_o," architecture."),_o.forEach(t),$k=c(Kt),Zo=s(Kt,"P",{});var fs=o(Zo);Fk=a(fs,"Configuration objects inherit from "),Ap=s(fs,"CODE",{});var d_=o(Ap);xk=a(d_,"PretrainedConfig"),d_.forEach(t),Bk=a(fs,`and can be used to control the model outputs. Read the
documentation from `),Sp=s(fs,"CODE",{});var KP=o(Sp);Ek=a(KP,"PretrainedConfig"),KP.forEach(t),Mk=a(fs,"for more information."),fs.forEach(t),zk=c(Kt),Op=s(Kt,"P",{});var JP=o(Op);qk=a(JP,"Examples:"),JP.forEach(t),Pk=c(Kt),E(Sr.$$.fragment,Kt),Kt.forEach(t),p_=c(i),en=s(i,"H2",{class:!0});var vv=o(en);us=s(vv,"A",{id:!0,class:!0,href:!0});var GP=o(us);Up=s(GP,"SPAN",{});var XP=o(Up);E(Or.$$.fragment,XP),XP.forEach(t),GP.forEach(t),jk=c(vv),Wp=s(vv,"SPAN",{});var YP=o(Wp);Ck=a(YP,"BertTokenizer"),YP.forEach(t),vv.forEach(t),h_=c(i),je=s(i,"DIV",{class:!0});var It=o(je);E(Ur.$$.fragment,It),Nk=c(It),Hp=s(It,"P",{});var ZP=o(Hp);Ik=a(ZP,"Construct a BERT tokenizer. Based on WordPiece."),ZP.forEach(t),Dk=c(It),Wr=s(It,"P",{});var bv=o(Wr);Lk=a(bv,"This tokenizer inherits from "),Rp=s(bv,"CODE",{});var e3=o(Rp);Ak=a(e3,"PreTrainedTokenizer"),e3.forEach(t),Sk=a(bv,`which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bv.forEach(t),Ok=c(It),vo=s(It,"DIV",{class:!0});var Zc=o(vo);E(Hr.$$.fragment,Zc),Uk=c(Zc),Vp=s(Zc,"P",{});var t3=o(Vp);Wk=a(t3,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),t3.forEach(t),Hk=c(Zc),Rr=s(Zc,"UL",{});var kv=o(Rr);Ec=s(kv,"LI",{});var UP=o(Ec);Rk=a(UP,"single sequence: "),Qp=s(UP,"CODE",{});var o3=o(Qp);Vk=a(o3,"[CLS] X [SEP]"),o3.forEach(t),UP.forEach(t),Qk=c(kv),Mc=s(kv,"LI",{});var WP=o(Mc);Kk=a(WP,"pair of sequences: "),Kp=s(WP,"CODE",{});var n3=o(Kp);Jk=a(n3,"[CLS] A [SEP] B [SEP]"),n3.forEach(t),WP.forEach(t),kv.forEach(t),Zc.forEach(t),Gk=c(It),ms=s(It,"DIV",{class:!0});var yv=o(ms);E(Vr.$$.fragment,yv),Xk=c(yv),Qr=s(yv,"P",{});var Tv=o(Qr);Yk=a(Tv,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jp=s(Tv,"CODE",{});var s3=o(Jp);Zk=a(s3,"prepare_for_model"),s3.forEach(t),ey=a(Tv," method."),Tv.forEach(t),yv.forEach(t),ty=c(It),Jt=s(It,"DIV",{class:!0});var $r=o(Jt);E(Kr.$$.fragment,$r),oy=c($r),Gp=s($r,"P",{});var r3=o(Gp);ny=a(r3,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),r3.forEach(t),sy=c($r),E(Jr.$$.fragment,$r),ry=c($r),tn=s($r,"P",{});var ep=o(tn);ay=a(ep,"If "),Xp=s(ep,"CODE",{});var a3=o(Xp);iy=a(a3,"token_ids_1"),a3.forEach(t),ly=a(ep," is "),Yp=s(ep,"CODE",{});var i3=o(Yp);dy=a(i3,"None"),i3.forEach(t),cy=a(ep,", this method only returns the first portion of the mask (0s)."),ep.forEach(t),$r.forEach(t),py=c(It),zc=s(It,"DIV",{class:!0});var l3=o(zc);E(Gr.$$.fragment,l3),l3.forEach(t),It.forEach(t),f_=c(i),on=s(i,"H2",{class:!0});var wv=o(on);gs=s(wv,"A",{id:!0,class:!0,href:!0});var d3=o(gs);Zp=s(d3,"SPAN",{});var c3=o(Zp);E(Xr.$$.fragment,c3),c3.forEach(t),d3.forEach(t),hy=c(wv),eh=s(wv,"SPAN",{});var p3=o(eh);fy=a(p3,"BertTokenizerFast"),p3.forEach(t),wv.forEach(t),u_=c(i),nt=s(i,"DIV",{class:!0});var ko=o(nt);E(Yr.$$.fragment,ko),uy=c(ko),Zr=s(ko,"P",{});var $v=o(Zr);my=a($v,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),th=s($v,"EM",{});var h3=o(th);gy=a(h3,"tokenizers"),h3.forEach(t),_y=a($v," library). Based on WordPiece."),$v.forEach(t),vy=c(ko),ea=s(ko,"P",{});var Fv=o(ea);by=a(Fv,"This tokenizer inherits from "),oh=s(Fv,"CODE",{});var f3=o(oh);ky=a(f3,"PreTrainedTokenizerFast"),f3.forEach(t),yy=a(Fv,`which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fv.forEach(t),Ty=c(ko),bo=s(ko,"DIV",{class:!0});var tp=o(bo);E(ta.$$.fragment,tp),wy=c(tp),nh=s(tp,"P",{});var u3=o(nh);$y=a(u3,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),u3.forEach(t),Fy=c(tp),oa=s(tp,"UL",{});var xv=o(oa);qc=s(xv,"LI",{});var HP=o(qc);xy=a(HP,"single sequence: "),sh=s(HP,"CODE",{});var m3=o(sh);By=a(m3,"[CLS] X [SEP]"),m3.forEach(t),HP.forEach(t),Ey=c(xv),Pc=s(xv,"LI",{});var RP=o(Pc);My=a(RP,"pair of sequences: "),rh=s(RP,"CODE",{});var g3=o(rh);zy=a(g3,"[CLS] A [SEP] B [SEP]"),g3.forEach(t),RP.forEach(t),xv.forEach(t),tp.forEach(t),qy=c(ko),Gt=s(ko,"DIV",{class:!0});var Fr=o(Gt);E(na.$$.fragment,Fr),Py=c(Fr),ah=s(Fr,"P",{});var _3=o(ah);jy=a(_3,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),_3.forEach(t),Cy=c(Fr),E(sa.$$.fragment,Fr),Ny=c(Fr),nn=s(Fr,"P",{});var op=o(nn);Iy=a(op,"If "),ih=s(op,"CODE",{});var v3=o(ih);Dy=a(v3,"token_ids_1"),v3.forEach(t),Ly=a(op," is "),lh=s(op,"CODE",{});var b3=o(lh);Ay=a(b3,"None"),b3.forEach(t),Sy=a(op,", this method only returns the first portion of the mask (0s)."),op.forEach(t),Fr.forEach(t),ko.forEach(t),m_=c(i),sn=s(i,"H2",{class:!0});var Bv=o(sn);_s=s(Bv,"A",{id:!0,class:!0,href:!0});var k3=o(_s);dh=s(k3,"SPAN",{});var y3=o(dh);E(ra.$$.fragment,y3),y3.forEach(t),k3.forEach(t),Oy=c(Bv),ch=s(Bv,"SPAN",{});var T3=o(ch);Uy=a(T3,"Bert specific outputs"),T3.forEach(t),Bv.forEach(t),g_=c(i),rn=s(i,"DIV",{class:!0});var Ev=o(rn);E(aa.$$.fragment,Ev),Wy=c(Ev),ia=s(Ev,"P",{});var Mv=o(ia);Hy=a(Mv,"Output type of "),jc=s(Mv,"A",{href:!0});var w3=o(jc);Ry=a(w3,"BertForPreTraining"),w3.forEach(t),Vy=a(Mv,"."),Mv.forEach(t),Ev.forEach(t),__=c(i),an=s(i,"DIV",{class:!0});var zv=o(an);E(la.$$.fragment,zv),Qy=c(zv),da=s(zv,"P",{});var qv=o(da);Ky=a(qv,"Output type of "),Cc=s(qv,"A",{href:!0});var $3=o(Cc);Jy=a($3,"TFBertForPreTraining"),$3.forEach(t),Gy=a(qv,"."),qv.forEach(t),zv.forEach(t),v_=c(i),io=s(i,"DIV",{class:!0});var np=o(io);E(ca.$$.fragment,np),Xy=c(np),pa=s(np,"P",{});var Pv=o(pa);Yy=a(Pv,"Output type of "),Nc=s(Pv,"A",{href:!0});var F3=o(Nc);Zy=a(F3,"BertForPreTraining"),F3.forEach(t),e1=a(Pv,"."),Pv.forEach(t),t1=c(np),vs=s(np,"DIV",{class:!0});var jv=o(vs);E(ha.$$.fragment,jv),o1=c(jv),ph=s(jv,"P",{});var x3=o(ph);n1=a(x3,"\u201CReturns a new object replacing the specified fields with new values."),x3.forEach(t),jv.forEach(t),np.forEach(t),b_=c(i),ln=s(i,"H2",{class:!0});var Cv=o(ln);bs=s(Cv,"A",{id:!0,class:!0,href:!0});var B3=o(bs);hh=s(B3,"SPAN",{});var E3=o(hh);E(fa.$$.fragment,E3),E3.forEach(t),B3.forEach(t),s1=c(Cv),fh=s(Cv,"SPAN",{});var M3=o(fh);r1=a(M3,"BertModel"),M3.forEach(t),Cv.forEach(t),k_=c(i),Ce=s(i,"DIV",{class:!0});var Dt=o(Ce);E(ua.$$.fragment,Dt),a1=c(Dt),uh=s(Dt,"P",{});var z3=o(uh);i1=a(z3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),z3.forEach(t),l1=c(Dt),ma=s(Dt,"P",{});var Nv=o(ma);d1=a(Nv,"This model inherits from "),mh=s(Nv,"CODE",{});var q3=o(mh);c1=a(q3,"PreTrainedModel"),q3.forEach(t),p1=a(Nv,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nv.forEach(t),h1=c(Dt),ga=s(Dt,"P",{});var Iv=o(ga);f1=a(Iv,"This model is also a PyTorch "),_a=s(Iv,"A",{href:!0,rel:!0});var P3=o(_a);u1=a(P3,"torch.nn.Module"),P3.forEach(t),m1=a(Iv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Iv.forEach(t),g1=c(Dt),va=s(Dt,"P",{});var Dv=o(va);_1=a(Dv,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ba=s(Dv,"A",{href:!0,rel:!0});var j3=o(ba);v1=a(j3,`Attention is
all you need`),j3.forEach(t),b1=a(Dv,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Dv.forEach(t),k1=c(Dt),Re=s(Dt,"P",{});var Lt=o(Re);y1=a(Lt,"To behave as an decoder the model needs to be initialized with the "),gh=s(Lt,"CODE",{});var C3=o(gh);T1=a(C3,"is_decoder"),C3.forEach(t),w1=a(Lt,` argument of the configuration set
to `),_h=s(Lt,"CODE",{});var N3=o(_h);$1=a(N3,"True"),N3.forEach(t),F1=a(Lt,". To be used in a Seq2Seq model, the model needs to initialized with both "),vh=s(Lt,"CODE",{});var I3=o(vh);x1=a(I3,"is_decoder"),I3.forEach(t),B1=a(Lt,` argument and
`),bh=s(Lt,"CODE",{});var D3=o(bh);E1=a(D3,"add_cross_attention"),D3.forEach(t),M1=a(Lt," set to "),kh=s(Lt,"CODE",{});var L3=o(kh);z1=a(L3,"True"),L3.forEach(t),q1=a(Lt,"; an "),yh=s(Lt,"CODE",{});var A3=o(yh);P1=a(A3,"encoder_hidden_states"),A3.forEach(t),j1=a(Lt," is then expected as an input to the forward pass."),Lt.forEach(t),C1=c(Dt),ht=s(Dt,"DIV",{class:!0});var yo=o(ht);E(ka.$$.fragment,yo),N1=c(yo),dn=s(yo,"P",{});var sp=o(dn);I1=a(sp,"The "),Ic=s(sp,"A",{href:!0});var S3=o(Ic);D1=a(S3,"BertModel"),S3.forEach(t),L1=a(sp," forward method, overrides the "),Th=s(sp,"CODE",{});var O3=o(Th);A1=a(O3,"__call__"),O3.forEach(t),S1=a(sp," special method."),sp.forEach(t),O1=c(yo),E(ks.$$.fragment,yo),U1=c(yo),wh=s(yo,"P",{});var U3=o(wh);W1=a(U3,"Example:"),U3.forEach(t),H1=c(yo),E(ya.$$.fragment,yo),yo.forEach(t),Dt.forEach(t),y_=c(i),cn=s(i,"H2",{class:!0});var Lv=o(cn);ys=s(Lv,"A",{id:!0,class:!0,href:!0});var W3=o(ys);$h=s(W3,"SPAN",{});var H3=o($h);E(Ta.$$.fragment,H3),H3.forEach(t),W3.forEach(t),R1=c(Lv),Fh=s(Lv,"SPAN",{});var R3=o(Fh);V1=a(R3,"BertForPreTraining"),R3.forEach(t),Lv.forEach(t),T_=c(i),st=s(i,"DIV",{class:!0});var To=o(st);E(wa.$$.fragment,To),Q1=c(To),pn=s(To,"P",{});var rp=o(pn);K1=a(rp,"Bert Model with two heads on top as done during the pretraining: a "),xh=s(rp,"CODE",{});var V3=o(xh);J1=a(V3,"masked language modeling"),V3.forEach(t),G1=a(rp," head and a "),Bh=s(rp,"CODE",{});var Q3=o(Bh);X1=a(Q3,"next sentence prediction (classification)"),Q3.forEach(t),Y1=a(rp," head."),rp.forEach(t),Z1=c(To),$a=s(To,"P",{});var Av=o($a);eT=a(Av,"This model inherits from "),Eh=s(Av,"CODE",{});var K3=o(Eh);tT=a(K3,"PreTrainedModel"),K3.forEach(t),oT=a(Av,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Av.forEach(t),nT=c(To),Fa=s(To,"P",{});var Sv=o(Fa);sT=a(Sv,"This model is also a PyTorch "),xa=s(Sv,"A",{href:!0,rel:!0});var J3=o(xa);rT=a(J3,"torch.nn.Module"),J3.forEach(t),aT=a(Sv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sv.forEach(t),iT=c(To),ft=s(To,"DIV",{class:!0});var wo=o(ft);E(Ba.$$.fragment,wo),lT=c(wo),hn=s(wo,"P",{});var ap=o(hn);dT=a(ap,"The "),Dc=s(ap,"A",{href:!0});var G3=o(Dc);cT=a(G3,"BertForPreTraining"),G3.forEach(t),pT=a(ap," forward method, overrides the "),Mh=s(ap,"CODE",{});var X3=o(Mh);hT=a(X3,"__call__"),X3.forEach(t),fT=a(ap," special method."),ap.forEach(t),uT=c(wo),E(Ts.$$.fragment,wo),mT=c(wo),zh=s(wo,"P",{});var Y3=o(zh);gT=a(Y3,"Example:"),Y3.forEach(t),_T=c(wo),E(Ea.$$.fragment,wo),wo.forEach(t),To.forEach(t),w_=c(i),fn=s(i,"H2",{class:!0});var Ov=o(fn);ws=s(Ov,"A",{id:!0,class:!0,href:!0});var Z3=o(ws);qh=s(Z3,"SPAN",{});var e5=o(qh);E(Ma.$$.fragment,e5),e5.forEach(t),Z3.forEach(t),vT=c(Ov),Ph=s(Ov,"SPAN",{});var t5=o(Ph);bT=a(t5,"BertLMHeadModel"),t5.forEach(t),Ov.forEach(t),$_=c(i),rt=s(i,"DIV",{class:!0});var $o=o(rt);E(za.$$.fragment,$o),kT=c($o),qa=s($o,"P",{});var Uv=o(qa);yT=a(Uv,"Bert Model with a "),jh=s(Uv,"CODE",{});var o5=o(jh);TT=a(o5,"language modeling"),o5.forEach(t),wT=a(Uv," head on top for CLM fine-tuning."),Uv.forEach(t),$T=c($o),Pa=s($o,"P",{});var Wv=o(Pa);FT=a(Wv,"This model inherits from "),Ch=s(Wv,"CODE",{});var n5=o(Ch);xT=a(n5,"PreTrainedModel"),n5.forEach(t),BT=a(Wv,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv.forEach(t),ET=c($o),ja=s($o,"P",{});var Hv=o(ja);MT=a(Hv,"This model is also a PyTorch "),Ca=s(Hv,"A",{href:!0,rel:!0});var s5=o(Ca);zT=a(s5,"torch.nn.Module"),s5.forEach(t),qT=a(Hv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hv.forEach(t),PT=c($o),ut=s($o,"DIV",{class:!0});var Fo=o(ut);E(Na.$$.fragment,Fo),jT=c(Fo),un=s(Fo,"P",{});var ip=o(un);CT=a(ip,"The "),Lc=s(ip,"A",{href:!0});var r5=o(Lc);NT=a(r5,"BertLMHeadModel"),r5.forEach(t),IT=a(ip," forward method, overrides the "),Nh=s(ip,"CODE",{});var a5=o(Nh);DT=a(a5,"__call__"),a5.forEach(t),LT=a(ip," special method."),ip.forEach(t),AT=c(Fo),E($s.$$.fragment,Fo),ST=c(Fo),Ih=s(Fo,"P",{});var i5=o(Ih);OT=a(i5,"Example:"),i5.forEach(t),UT=c(Fo),E(Ia.$$.fragment,Fo),Fo.forEach(t),$o.forEach(t),F_=c(i),mn=s(i,"H2",{class:!0});var Rv=o(mn);Fs=s(Rv,"A",{id:!0,class:!0,href:!0});var l5=o(Fs);Dh=s(l5,"SPAN",{});var d5=o(Dh);E(Da.$$.fragment,d5),d5.forEach(t),l5.forEach(t),WT=c(Rv),Lh=s(Rv,"SPAN",{});var c5=o(Lh);HT=a(c5,"BertForMaskedLM"),c5.forEach(t),Rv.forEach(t),x_=c(i),at=s(i,"DIV",{class:!0});var xo=o(at);E(La.$$.fragment,xo),RT=c(xo),Aa=s(xo,"P",{});var Vv=o(Aa);VT=a(Vv,"Bert Model with a "),Ah=s(Vv,"CODE",{});var p5=o(Ah);QT=a(p5,"language modeling"),p5.forEach(t),KT=a(Vv," head on top."),Vv.forEach(t),JT=c(xo),Sa=s(xo,"P",{});var Qv=o(Sa);GT=a(Qv,"This model inherits from "),Sh=s(Qv,"CODE",{});var h5=o(Sh);XT=a(h5,"PreTrainedModel"),h5.forEach(t),YT=a(Qv,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qv.forEach(t),ZT=c(xo),Oa=s(xo,"P",{});var Kv=o(Oa);ew=a(Kv,"This model is also a PyTorch "),Ua=s(Kv,"A",{href:!0,rel:!0});var f5=o(Ua);tw=a(f5,"torch.nn.Module"),f5.forEach(t),ow=a(Kv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kv.forEach(t),nw=c(xo),mt=s(xo,"DIV",{class:!0});var Bo=o(mt);E(Wa.$$.fragment,Bo),sw=c(Bo),gn=s(Bo,"P",{});var lp=o(gn);rw=a(lp,"The "),Ac=s(lp,"A",{href:!0});var u5=o(Ac);aw=a(u5,"BertForMaskedLM"),u5.forEach(t),iw=a(lp," forward method, overrides the "),Oh=s(lp,"CODE",{});var m5=o(Oh);lw=a(m5,"__call__"),m5.forEach(t),dw=a(lp," special method."),lp.forEach(t),cw=c(Bo),E(xs.$$.fragment,Bo),pw=c(Bo),Uh=s(Bo,"P",{});var g5=o(Uh);hw=a(g5,"Example:"),g5.forEach(t),fw=c(Bo),E(Ha.$$.fragment,Bo),Bo.forEach(t),xo.forEach(t),B_=c(i),_n=s(i,"H2",{class:!0});var Jv=o(_n);Bs=s(Jv,"A",{id:!0,class:!0,href:!0});var _5=o(Bs);Wh=s(_5,"SPAN",{});var v5=o(Wh);E(Ra.$$.fragment,v5),v5.forEach(t),_5.forEach(t),uw=c(Jv),Hh=s(Jv,"SPAN",{});var b5=o(Hh);mw=a(b5,"BertForNextSentencePrediction"),b5.forEach(t),Jv.forEach(t),E_=c(i),it=s(i,"DIV",{class:!0});var Eo=o(it);E(Va.$$.fragment,Eo),gw=c(Eo),Qa=s(Eo,"P",{});var Gv=o(Qa);_w=a(Gv,"Bert Model with a "),Rh=s(Gv,"CODE",{});var k5=o(Rh);vw=a(k5,"next sentence prediction (classification)"),k5.forEach(t),bw=a(Gv," head on top."),Gv.forEach(t),kw=c(Eo),Ka=s(Eo,"P",{});var Xv=o(Ka);yw=a(Xv,"This model inherits from "),Vh=s(Xv,"CODE",{});var y5=o(Vh);Tw=a(y5,"PreTrainedModel"),y5.forEach(t),ww=a(Xv,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv.forEach(t),$w=c(Eo),Ja=s(Eo,"P",{});var Yv=o(Ja);Fw=a(Yv,"This model is also a PyTorch "),Ga=s(Yv,"A",{href:!0,rel:!0});var T5=o(Ga);xw=a(T5,"torch.nn.Module"),T5.forEach(t),Bw=a(Yv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv.forEach(t),Ew=c(Eo),gt=s(Eo,"DIV",{class:!0});var Mo=o(gt);E(Xa.$$.fragment,Mo),Mw=c(Mo),vn=s(Mo,"P",{});var dp=o(vn);zw=a(dp,"The "),Sc=s(dp,"A",{href:!0});var w5=o(Sc);qw=a(w5,"BertForNextSentencePrediction"),w5.forEach(t),Pw=a(dp," forward method, overrides the "),Qh=s(dp,"CODE",{});var $5=o(Qh);jw=a($5,"__call__"),$5.forEach(t),Cw=a(dp," special method."),dp.forEach(t),Nw=c(Mo),E(Es.$$.fragment,Mo),Iw=c(Mo),Kh=s(Mo,"P",{});var F5=o(Kh);Dw=a(F5,"Example:"),F5.forEach(t),Lw=c(Mo),E(Ya.$$.fragment,Mo),Mo.forEach(t),Eo.forEach(t),M_=c(i),bn=s(i,"H2",{class:!0});var Zv=o(bn);Ms=s(Zv,"A",{id:!0,class:!0,href:!0});var x5=o(Ms);Jh=s(x5,"SPAN",{});var B5=o(Jh);E(Za.$$.fragment,B5),B5.forEach(t),x5.forEach(t),Aw=c(Zv),Gh=s(Zv,"SPAN",{});var E5=o(Gh);Sw=a(E5,"BertForSequenceClassification"),E5.forEach(t),Zv.forEach(t),z_=c(i),lt=s(i,"DIV",{class:!0});var zo=o(lt);E(ei.$$.fragment,zo),Ow=c(zo),Xh=s(zo,"P",{});var M5=o(Xh);Uw=a(M5,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),M5.forEach(t),Ww=c(zo),ti=s(zo,"P",{});var eb=o(ti);Hw=a(eb,"This model inherits from "),Yh=s(eb,"CODE",{});var z5=o(Yh);Rw=a(z5,"PreTrainedModel"),z5.forEach(t),Vw=a(eb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb.forEach(t),Qw=c(zo),oi=s(zo,"P",{});var tb=o(oi);Kw=a(tb,"This model is also a PyTorch "),ni=s(tb,"A",{href:!0,rel:!0});var q5=o(ni);Jw=a(q5,"torch.nn.Module"),q5.forEach(t),Gw=a(tb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tb.forEach(t),Xw=c(zo),He=s(zo,"DIV",{class:!0});var At=o(He);E(si.$$.fragment,At),Yw=c(At),kn=s(At,"P",{});var cp=o(kn);Zw=a(cp,"The "),Oc=s(cp,"A",{href:!0});var P5=o(Oc);e0=a(P5,"BertForSequenceClassification"),P5.forEach(t),t0=a(cp," forward method, overrides the "),Zh=s(cp,"CODE",{});var j5=o(Zh);o0=a(j5,"__call__"),j5.forEach(t),n0=a(cp," special method."),cp.forEach(t),s0=c(At),E(zs.$$.fragment,At),r0=c(At),ef=s(At,"P",{});var C5=o(ef);a0=a(C5,"Example of single-label classification:"),C5.forEach(t),i0=c(At),E(ri.$$.fragment,At),l0=c(At),tf=s(At,"P",{});var N5=o(tf);d0=a(N5,"Example of multi-label classification:"),N5.forEach(t),c0=c(At),E(ai.$$.fragment,At),At.forEach(t),zo.forEach(t),q_=c(i),yn=s(i,"H2",{class:!0});var ob=o(yn);qs=s(ob,"A",{id:!0,class:!0,href:!0});var I5=o(qs);of=s(I5,"SPAN",{});var D5=o(of);E(ii.$$.fragment,D5),D5.forEach(t),I5.forEach(t),p0=c(ob),nf=s(ob,"SPAN",{});var L5=o(nf);h0=a(L5,"BertForMultipleChoice"),L5.forEach(t),ob.forEach(t),P_=c(i),dt=s(i,"DIV",{class:!0});var qo=o(dt);E(li.$$.fragment,qo),f0=c(qo),sf=s(qo,"P",{});var A5=o(sf);u0=a(A5,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),A5.forEach(t),m0=c(qo),di=s(qo,"P",{});var nb=o(di);g0=a(nb,"This model inherits from "),rf=s(nb,"CODE",{});var S5=o(rf);_0=a(S5,"PreTrainedModel"),S5.forEach(t),v0=a(nb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nb.forEach(t),b0=c(qo),ci=s(qo,"P",{});var sb=o(ci);k0=a(sb,"This model is also a PyTorch "),pi=s(sb,"A",{href:!0,rel:!0});var O5=o(pi);y0=a(O5,"torch.nn.Module"),O5.forEach(t),T0=a(sb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sb.forEach(t),w0=c(qo),_t=s(qo,"DIV",{class:!0});var Po=o(_t);E(hi.$$.fragment,Po),$0=c(Po),Tn=s(Po,"P",{});var pp=o(Tn);F0=a(pp,"The "),Uc=s(pp,"A",{href:!0});var U5=o(Uc);x0=a(U5,"BertForMultipleChoice"),U5.forEach(t),B0=a(pp," forward method, overrides the "),af=s(pp,"CODE",{});var W5=o(af);E0=a(W5,"__call__"),W5.forEach(t),M0=a(pp," special method."),pp.forEach(t),z0=c(Po),E(Ps.$$.fragment,Po),q0=c(Po),lf=s(Po,"P",{});var H5=o(lf);P0=a(H5,"Example:"),H5.forEach(t),j0=c(Po),E(fi.$$.fragment,Po),Po.forEach(t),qo.forEach(t),j_=c(i),wn=s(i,"H2",{class:!0});var rb=o(wn);js=s(rb,"A",{id:!0,class:!0,href:!0});var R5=o(js);df=s(R5,"SPAN",{});var V5=o(df);E(ui.$$.fragment,V5),V5.forEach(t),R5.forEach(t),C0=c(rb),cf=s(rb,"SPAN",{});var Q5=o(cf);N0=a(Q5,"BertForTokenClassification"),Q5.forEach(t),rb.forEach(t),C_=c(i),ct=s(i,"DIV",{class:!0});var jo=o(ct);E(mi.$$.fragment,jo),I0=c(jo),pf=s(jo,"P",{});var K5=o(pf);D0=a(K5,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),K5.forEach(t),L0=c(jo),gi=s(jo,"P",{});var ab=o(gi);A0=a(ab,"This model inherits from "),hf=s(ab,"CODE",{});var J5=o(hf);S0=a(J5,"PreTrainedModel"),J5.forEach(t),O0=a(ab,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ab.forEach(t),U0=c(jo),_i=s(jo,"P",{});var ib=o(_i);W0=a(ib,"This model is also a PyTorch "),vi=s(ib,"A",{href:!0,rel:!0});var G5=o(vi);H0=a(G5,"torch.nn.Module"),G5.forEach(t),R0=a(ib,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ib.forEach(t),V0=c(jo),vt=s(jo,"DIV",{class:!0});var Co=o(vt);E(bi.$$.fragment,Co),Q0=c(Co),$n=s(Co,"P",{});var hp=o($n);K0=a(hp,"The "),Wc=s(hp,"A",{href:!0});var X5=o(Wc);J0=a(X5,"BertForTokenClassification"),X5.forEach(t),G0=a(hp," forward method, overrides the "),ff=s(hp,"CODE",{});var Y5=o(ff);X0=a(Y5,"__call__"),Y5.forEach(t),Y0=a(hp," special method."),hp.forEach(t),Z0=c(Co),E(Cs.$$.fragment,Co),e2=c(Co),uf=s(Co,"P",{});var Z5=o(uf);t2=a(Z5,"Example:"),Z5.forEach(t),o2=c(Co),E(ki.$$.fragment,Co),Co.forEach(t),jo.forEach(t),N_=c(i),Fn=s(i,"H2",{class:!0});var lb=o(Fn);Ns=s(lb,"A",{id:!0,class:!0,href:!0});var ej=o(Ns);mf=s(ej,"SPAN",{});var tj=o(mf);E(yi.$$.fragment,tj),tj.forEach(t),ej.forEach(t),n2=c(lb),gf=s(lb,"SPAN",{});var oj=o(gf);s2=a(oj,"BertForQuestionAnswering"),oj.forEach(t),lb.forEach(t),I_=c(i),pt=s(i,"DIV",{class:!0});var No=o(pt);E(Ti.$$.fragment,No),r2=c(No),xn=s(No,"P",{});var fp=o(xn);a2=a(fp,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_f=s(fp,"CODE",{});var nj=o(_f);i2=a(nj,"span start logits"),nj.forEach(t),l2=a(fp," and "),vf=s(fp,"CODE",{});var sj=o(vf);d2=a(sj,"span end logits"),sj.forEach(t),c2=a(fp,")."),fp.forEach(t),p2=c(No),wi=s(No,"P",{});var db=o(wi);h2=a(db,"This model inherits from "),bf=s(db,"CODE",{});var rj=o(bf);f2=a(rj,"PreTrainedModel"),rj.forEach(t),u2=a(db,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),db.forEach(t),m2=c(No),$i=s(No,"P",{});var cb=o($i);g2=a(cb,"This model is also a PyTorch "),Fi=s(cb,"A",{href:!0,rel:!0});var aj=o(Fi);_2=a(aj,"torch.nn.Module"),aj.forEach(t),v2=a(cb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cb.forEach(t),b2=c(No),bt=s(No,"DIV",{class:!0});var Io=o(bt);E(xi.$$.fragment,Io),k2=c(Io),Bn=s(Io,"P",{});var up=o(Bn);y2=a(up,"The "),Hc=s(up,"A",{href:!0});var ij=o(Hc);T2=a(ij,"BertForQuestionAnswering"),ij.forEach(t),w2=a(up," forward method, overrides the "),kf=s(up,"CODE",{});var lj=o(kf);$2=a(lj,"__call__"),lj.forEach(t),F2=a(up," special method."),up.forEach(t),x2=c(Io),E(Is.$$.fragment,Io),B2=c(Io),yf=s(Io,"P",{});var dj=o(yf);E2=a(dj,"Example:"),dj.forEach(t),M2=c(Io),E(Bi.$$.fragment,Io),Io.forEach(t),No.forEach(t),D_=c(i),En=s(i,"H2",{class:!0});var pb=o(En);Ds=s(pb,"A",{id:!0,class:!0,href:!0});var cj=o(Ds);Tf=s(cj,"SPAN",{});var pj=o(Tf);E(Ei.$$.fragment,pj),pj.forEach(t),cj.forEach(t),z2=c(pb),wf=s(pb,"SPAN",{});var hj=o(wf);q2=a(hj,"TFBertModel"),hj.forEach(t),pb.forEach(t),L_=c(i),Ve=s(i,"DIV",{class:!0});var Xt=o(Ve);E(Mi.$$.fragment,Xt),P2=c(Xt),$f=s(Xt,"P",{});var fj=o($f);j2=a(fj,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),fj.forEach(t),C2=c(Xt),zi=s(Xt,"P",{});var hb=o(zi);N2=a(hb,"This model inherits from "),Ff=s(hb,"CODE",{});var uj=o(Ff);I2=a(uj,"TFPreTrainedModel"),uj.forEach(t),D2=a(hb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb.forEach(t),L2=c(Xt),qi=s(Xt,"P",{});var fb=o(qi);A2=a(fb,"This model is also a "),Pi=s(fb,"A",{href:!0,rel:!0});var mj=o(Pi);S2=a(mj,"tf.keras.Model"),mj.forEach(t),O2=a(fb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fb.forEach(t),U2=c(Xt),E(Ls.$$.fragment,Xt),W2=c(Xt),kt=s(Xt,"DIV",{class:!0});var Do=o(kt);E(ji.$$.fragment,Do),H2=c(Do),Mn=s(Do,"P",{});var mp=o(Mn);R2=a(mp,"The "),Rc=s(mp,"A",{href:!0});var gj=o(Rc);V2=a(gj,"TFBertModel"),gj.forEach(t),Q2=a(mp," forward method, overrides the "),xf=s(mp,"CODE",{});var _j=o(xf);K2=a(_j,"__call__"),_j.forEach(t),J2=a(mp," special method."),mp.forEach(t),G2=c(Do),E(As.$$.fragment,Do),X2=c(Do),Bf=s(Do,"P",{});var vj=o(Bf);Y2=a(vj,"Example:"),vj.forEach(t),Z2=c(Do),E(Ci.$$.fragment,Do),Do.forEach(t),Xt.forEach(t),A_=c(i),zn=s(i,"H2",{class:!0});var ub=o(zn);Ss=s(ub,"A",{id:!0,class:!0,href:!0});var bj=o(Ss);Ef=s(bj,"SPAN",{});var kj=o(Ef);E(Ni.$$.fragment,kj),kj.forEach(t),bj.forEach(t),e$=c(ub),Mf=s(ub,"SPAN",{});var yj=o(Mf);t$=a(yj,"TFBertForPreTraining"),yj.forEach(t),ub.forEach(t),S_=c(i),Qe=s(i,"DIV",{class:!0});var Yt=o(Qe);E(Ii.$$.fragment,Yt),o$=c(Yt),qn=s(Yt,"P",{});var gp=o(qn);n$=a(gp,`Bert Model with two heads on top as done during the pretraining:
a `),zf=s(gp,"CODE",{});var Tj=o(zf);s$=a(Tj,"masked language modeling"),Tj.forEach(t),r$=a(gp," head and a "),qf=s(gp,"CODE",{});var wj=o(qf);a$=a(wj,"next sentence prediction (classification)"),wj.forEach(t),i$=a(gp," head."),gp.forEach(t),l$=c(Yt),Di=s(Yt,"P",{});var mb=o(Di);d$=a(mb,"This model inherits from "),Pf=s(mb,"CODE",{});var $j=o(Pf);c$=a($j,"TFPreTrainedModel"),$j.forEach(t),p$=a(mb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mb.forEach(t),h$=c(Yt),Li=s(Yt,"P",{});var gb=o(Li);f$=a(gb,"This model is also a "),Ai=s(gb,"A",{href:!0,rel:!0});var Fj=o(Ai);u$=a(Fj,"tf.keras.Model"),Fj.forEach(t),m$=a(gb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gb.forEach(t),g$=c(Yt),E(Os.$$.fragment,Yt),_$=c(Yt),yt=s(Yt,"DIV",{class:!0});var Lo=o(yt);E(Si.$$.fragment,Lo),v$=c(Lo),Pn=s(Lo,"P",{});var _p=o(Pn);b$=a(_p,"The "),Vc=s(_p,"A",{href:!0});var xj=o(Vc);k$=a(xj,"TFBertForPreTraining"),xj.forEach(t),y$=a(_p," forward method, overrides the "),jf=s(_p,"CODE",{});var Bj=o(jf);T$=a(Bj,"__call__"),Bj.forEach(t),w$=a(_p," special method."),_p.forEach(t),$$=c(Lo),E(Us.$$.fragment,Lo),F$=c(Lo),Cf=s(Lo,"P",{});var Ej=o(Cf);x$=a(Ej,"Examples:"),Ej.forEach(t),B$=c(Lo),E(Oi.$$.fragment,Lo),Lo.forEach(t),Yt.forEach(t),O_=c(i),jn=s(i,"H2",{class:!0});var _b=o(jn);Ws=s(_b,"A",{id:!0,class:!0,href:!0});var Mj=o(Ws);Nf=s(Mj,"SPAN",{});var zj=o(Nf);E(Ui.$$.fragment,zj),zj.forEach(t),Mj.forEach(t),E$=c(_b),If=s(_b,"SPAN",{});var qj=o(If);M$=a(qj,"TFBertModelLMHeadModel"),qj.forEach(t),_b.forEach(t),U_=c(i),Cn=s(i,"DIV",{class:!0});var vb=o(Cn);E(Wi.$$.fragment,vb),z$=c(vb),et=s(vb,"DIV",{class:!0});var Zt=o(et);E(Hi.$$.fragment,Zt),q$=c(Zt),Ne=s(Zt,"P",{});var tt=o(Ne);P$=a(tt,"encoder_hidden_states  ("),Df=s(tt,"CODE",{});var Pj=o(Df);j$=a(Pj,"tf.Tensor"),Pj.forEach(t),C$=a(tt," of shape "),Lf=s(tt,"CODE",{});var jj=o(Lf);N$=a(jj,"(batch_size, sequence_length, hidden_size)"),jj.forEach(t),I$=a(tt,", "),Af=s(tt,"EM",{});var Cj=o(Af);D$=a(Cj,"optional"),Cj.forEach(t),L$=a(tt,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Sf=s(tt,"CODE",{});var Nj=o(Sf);A$=a(Nj,"tf.Tensor"),Nj.forEach(t),S$=a(tt," of shape "),Of=s(tt,"CODE",{});var Ij=o(Of);O$=a(Ij,"(batch_size, sequence_length)"),Ij.forEach(t),U$=a(tt,", "),Uf=s(tt,"EM",{});var Dj=o(Uf);W$=a(Dj,"optional"),Dj.forEach(t),H$=a(tt,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Wf=s(tt,"CODE",{});var Lj=o(Wf);R$=a(Lj,"[0, 1]"),Lj.forEach(t),V$=a(tt,":"),tt.forEach(t),Q$=c(Zt),Ri=s(Zt,"UL",{});var bb=o(Ri);Vi=s(bb,"LI",{});var kb=o(Vi);K$=a(kb,"1 for tokens that are "),Hf=s(kb,"STRONG",{});var Aj=o(Hf);J$=a(Aj,"not masked"),Aj.forEach(t),G$=a(kb,","),kb.forEach(t),X$=c(bb),Qi=s(bb,"LI",{});var yb=o(Qi);Y$=a(yb,"0 for tokens that are "),Rf=s(yb,"STRONG",{});var Sj=o(Rf);Z$=a(Sj,"masked"),Sj.forEach(t),eF=a(yb,"."),yb.forEach(t),bb.forEach(t),tF=c(Zt),de=s(Zt,"P",{});var me=o(de);oF=a(me,"past_key_values ("),Vf=s(me,"CODE",{});var Oj=o(Vf);nF=a(Oj,"Tuple[Tuple[tf.Tensor]]"),Oj.forEach(t),sF=a(me," of length "),Qf=s(me,"CODE",{});var Uj=o(Qf);rF=a(Uj,"config.n_layers"),Uj.forEach(t),aF=a(me,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Kf=s(me,"CODE",{});var Wj=o(Kf);iF=a(Wj,"past_key_values"),Wj.forEach(t),lF=a(me," are used, the user can optionally input only the last "),Jf=s(me,"CODE",{});var Hj=o(Jf);dF=a(Hj,"decoder_input_ids"),Hj.forEach(t),cF=a(me,` (those that
don\u2019t have their past key value states given to this model) of shape `),Gf=s(me,"CODE",{});var Rj=o(Gf);pF=a(Rj,"(batch_size, 1)"),Rj.forEach(t),hF=a(me,` instead of all
`),Xf=s(me,"CODE",{});var Vj=o(Xf);fF=a(Vj,"decoder_input_ids"),Vj.forEach(t),uF=a(me," of shape "),Yf=s(me,"CODE",{});var Qj=o(Yf);mF=a(Qj,"(batch_size, sequence_length)"),Qj.forEach(t),gF=a(me,`.
use_cache (`),Zf=s(me,"CODE",{});var Kj=o(Zf);_F=a(Kj,"bool"),Kj.forEach(t),vF=a(me,", "),eu=s(me,"EM",{});var Jj=o(eu);bF=a(Jj,"optional"),Jj.forEach(t),kF=a(me,", defaults to "),tu=s(me,"CODE",{});var Gj=o(tu);yF=a(Gj,"True"),Gj.forEach(t),TF=a(me,`):
If set to `),ou=s(me,"CODE",{});var Xj=o(ou);wF=a(Xj,"True"),Xj.forEach(t),$F=a(me,", "),nu=s(me,"CODE",{});var Yj=o(nu);FF=a(Yj,"past_key_values"),Yj.forEach(t),xF=a(me,` key value states are returned and can be used to speed up decoding (see
`),su=s(me,"CODE",{});var Zj=o(su);BF=a(Zj,"past_key_values"),Zj.forEach(t),EF=a(me,"). Set to "),ru=s(me,"CODE",{});var eC=o(ru);MF=a(eC,"False"),eC.forEach(t),zF=a(me," during training, "),au=s(me,"CODE",{});var tC=o(au);qF=a(tC,"True"),tC.forEach(t),PF=a(me,` during generation
labels (`),iu=s(me,"CODE",{});var oC=o(iu);jF=a(oC,"tf.Tensor"),oC.forEach(t),CF=a(me," or "),lu=s(me,"CODE",{});var nC=o(lu);NF=a(nC,"np.ndarray"),nC.forEach(t),IF=a(me," of shape "),du=s(me,"CODE",{});var sC=o(du);DF=a(sC,"(batch_size, sequence_length)"),sC.forEach(t),LF=a(me,", "),cu=s(me,"EM",{});var rC=o(cu);AF=a(rC,"optional"),rC.forEach(t),SF=a(me,`):
Labels for computing the cross entropy classification loss. Indices should be in `),pu=s(me,"CODE",{});var aC=o(pu);OF=a(aC,"[0, ..., config.vocab_size - 1]"),aC.forEach(t),UF=a(me,"."),me.forEach(t),WF=c(Zt),hu=s(Zt,"P",{});var iC=o(hu);HF=a(iC,"Example:"),iC.forEach(t),RF=c(Zt),E(Ki.$$.fragment,Zt),Zt.forEach(t),vb.forEach(t),W_=c(i),Nn=s(i,"H2",{class:!0});var Tb=o(Nn);Hs=s(Tb,"A",{id:!0,class:!0,href:!0});var lC=o(Hs);fu=s(lC,"SPAN",{});var dC=o(fu);E(Ji.$$.fragment,dC),dC.forEach(t),lC.forEach(t),VF=c(Tb),uu=s(Tb,"SPAN",{});var cC=o(uu);QF=a(cC,"TFBertForMaskedLM"),cC.forEach(t),Tb.forEach(t),H_=c(i),Ke=s(i,"DIV",{class:!0});var eo=o(Ke);E(Gi.$$.fragment,eo),KF=c(eo),Xi=s(eo,"P",{});var wb=o(Xi);JF=a(wb,"Bert Model with a "),mu=s(wb,"CODE",{});var pC=o(mu);GF=a(pC,"language modeling"),pC.forEach(t),XF=a(wb," head on top."),wb.forEach(t),YF=c(eo),Yi=s(eo,"P",{});var $b=o(Yi);ZF=a($b,"This model inherits from "),gu=s($b,"CODE",{});var hC=o(gu);ex=a(hC,"TFPreTrainedModel"),hC.forEach(t),tx=a($b,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$b.forEach(t),ox=c(eo),Zi=s(eo,"P",{});var Fb=o(Zi);nx=a(Fb,"This model is also a "),el=s(Fb,"A",{href:!0,rel:!0});var fC=o(el);sx=a(fC,"tf.keras.Model"),fC.forEach(t),rx=a(Fb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fb.forEach(t),ax=c(eo),E(Rs.$$.fragment,eo),ix=c(eo),Tt=s(eo,"DIV",{class:!0});var Ao=o(Tt);E(tl.$$.fragment,Ao),lx=c(Ao),In=s(Ao,"P",{});var vp=o(In);dx=a(vp,"The "),Qc=s(vp,"A",{href:!0});var uC=o(Qc);cx=a(uC,"TFBertForMaskedLM"),uC.forEach(t),px=a(vp," forward method, overrides the "),_u=s(vp,"CODE",{});var mC=o(_u);hx=a(mC,"__call__"),mC.forEach(t),fx=a(vp," special method."),vp.forEach(t),ux=c(Ao),E(Vs.$$.fragment,Ao),mx=c(Ao),vu=s(Ao,"P",{});var gC=o(vu);gx=a(gC,"Example:"),gC.forEach(t),_x=c(Ao),E(ol.$$.fragment,Ao),Ao.forEach(t),eo.forEach(t),R_=c(i),Dn=s(i,"H2",{class:!0});var xb=o(Dn);Qs=s(xb,"A",{id:!0,class:!0,href:!0});var _C=o(Qs);bu=s(_C,"SPAN",{});var vC=o(bu);E(nl.$$.fragment,vC),vC.forEach(t),_C.forEach(t),vx=c(xb),ku=s(xb,"SPAN",{});var bC=o(ku);bx=a(bC,"TFBertForNextSentencePrediction"),bC.forEach(t),xb.forEach(t),V_=c(i),Je=s(i,"DIV",{class:!0});var to=o(Je);E(sl.$$.fragment,to),kx=c(to),rl=s(to,"P",{});var Bb=o(rl);yx=a(Bb,"Bert Model with a "),yu=s(Bb,"CODE",{});var kC=o(yu);Tx=a(kC,"next sentence prediction (classification)"),kC.forEach(t),wx=a(Bb," head on top."),Bb.forEach(t),$x=c(to),al=s(to,"P",{});var Eb=o(al);Fx=a(Eb,"This model inherits from "),Tu=s(Eb,"CODE",{});var yC=o(Tu);xx=a(yC,"TFPreTrainedModel"),yC.forEach(t),Bx=a(Eb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eb.forEach(t),Ex=c(to),il=s(to,"P",{});var Mb=o(il);Mx=a(Mb,"This model is also a "),ll=s(Mb,"A",{href:!0,rel:!0});var TC=o(ll);zx=a(TC,"tf.keras.Model"),TC.forEach(t),qx=a(Mb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mb.forEach(t),Px=c(to),E(Ks.$$.fragment,to),jx=c(to),wt=s(to,"DIV",{class:!0});var So=o(wt);E(dl.$$.fragment,So),Cx=c(So),Ln=s(So,"P",{});var bp=o(Ln);Nx=a(bp,"The "),Kc=s(bp,"A",{href:!0});var wC=o(Kc);Ix=a(wC,"TFBertForNextSentencePrediction"),wC.forEach(t),Dx=a(bp," forward method, overrides the "),wu=s(bp,"CODE",{});var $C=o(wu);Lx=a($C,"__call__"),$C.forEach(t),Ax=a(bp," special method."),bp.forEach(t),Sx=c(So),E(Js.$$.fragment,So),Ox=c(So),$u=s(So,"P",{});var FC=o($u);Ux=a(FC,"Examples:"),FC.forEach(t),Wx=c(So),E(cl.$$.fragment,So),So.forEach(t),to.forEach(t),Q_=c(i),An=s(i,"H2",{class:!0});var zb=o(An);Gs=s(zb,"A",{id:!0,class:!0,href:!0});var xC=o(Gs);Fu=s(xC,"SPAN",{});var BC=o(Fu);E(pl.$$.fragment,BC),BC.forEach(t),xC.forEach(t),Hx=c(zb),xu=s(zb,"SPAN",{});var EC=o(xu);Rx=a(EC,"TFBertForSequenceClassification"),EC.forEach(t),zb.forEach(t),K_=c(i),Ge=s(i,"DIV",{class:!0});var oo=o(Ge);E(hl.$$.fragment,oo),Vx=c(oo),Bu=s(oo,"P",{});var MC=o(Bu);Qx=a(MC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),MC.forEach(t),Kx=c(oo),fl=s(oo,"P",{});var qb=o(fl);Jx=a(qb,"This model inherits from "),Eu=s(qb,"CODE",{});var zC=o(Eu);Gx=a(zC,"TFPreTrainedModel"),zC.forEach(t),Xx=a(qb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qb.forEach(t),Yx=c(oo),ul=s(oo,"P",{});var Pb=o(ul);Zx=a(Pb,"This model is also a "),ml=s(Pb,"A",{href:!0,rel:!0});var qC=o(ml);eB=a(qC,"tf.keras.Model"),qC.forEach(t),tB=a(Pb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pb.forEach(t),oB=c(oo),E(Xs.$$.fragment,oo),nB=c(oo),$t=s(oo,"DIV",{class:!0});var Oo=o($t);E(gl.$$.fragment,Oo),sB=c(Oo),Sn=s(Oo,"P",{});var kp=o(Sn);rB=a(kp,"The "),Jc=s(kp,"A",{href:!0});var PC=o(Jc);aB=a(PC,"TFBertForSequenceClassification"),PC.forEach(t),iB=a(kp," forward method, overrides the "),Mu=s(kp,"CODE",{});var jC=o(Mu);lB=a(jC,"__call__"),jC.forEach(t),dB=a(kp," special method."),kp.forEach(t),cB=c(Oo),E(Ys.$$.fragment,Oo),pB=c(Oo),zu=s(Oo,"P",{});var CC=o(zu);hB=a(CC,"Example:"),CC.forEach(t),fB=c(Oo),E(_l.$$.fragment,Oo),Oo.forEach(t),oo.forEach(t),J_=c(i),On=s(i,"H2",{class:!0});var jb=o(On);Zs=s(jb,"A",{id:!0,class:!0,href:!0});var NC=o(Zs);qu=s(NC,"SPAN",{});var IC=o(qu);E(vl.$$.fragment,IC),IC.forEach(t),NC.forEach(t),uB=c(jb),Pu=s(jb,"SPAN",{});var DC=o(Pu);mB=a(DC,"TFBertForMultipleChoice"),DC.forEach(t),jb.forEach(t),G_=c(i),Xe=s(i,"DIV",{class:!0});var no=o(Xe);E(bl.$$.fragment,no),gB=c(no),ju=s(no,"P",{});var LC=o(ju);_B=a(LC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),LC.forEach(t),vB=c(no),kl=s(no,"P",{});var Cb=o(kl);bB=a(Cb,"This model inherits from "),Cu=s(Cb,"CODE",{});var AC=o(Cu);kB=a(AC,"TFPreTrainedModel"),AC.forEach(t),yB=a(Cb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb.forEach(t),TB=c(no),yl=s(no,"P",{});var Nb=o(yl);wB=a(Nb,"This model is also a "),Tl=s(Nb,"A",{href:!0,rel:!0});var SC=o(Tl);$B=a(SC,"tf.keras.Model"),SC.forEach(t),FB=a(Nb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nb.forEach(t),xB=c(no),E(er.$$.fragment,no),BB=c(no),Ft=s(no,"DIV",{class:!0});var Uo=o(Ft);E(wl.$$.fragment,Uo),EB=c(Uo),Un=s(Uo,"P",{});var yp=o(Un);MB=a(yp,"The "),Gc=s(yp,"A",{href:!0});var OC=o(Gc);zB=a(OC,"TFBertForMultipleChoice"),OC.forEach(t),qB=a(yp," forward method, overrides the "),Nu=s(yp,"CODE",{});var UC=o(Nu);PB=a(UC,"__call__"),UC.forEach(t),jB=a(yp," special method."),yp.forEach(t),CB=c(Uo),E(tr.$$.fragment,Uo),NB=c(Uo),Iu=s(Uo,"P",{});var WC=o(Iu);IB=a(WC,"Example:"),WC.forEach(t),DB=c(Uo),E($l.$$.fragment,Uo),Uo.forEach(t),no.forEach(t),X_=c(i),Wn=s(i,"H2",{class:!0});var Ib=o(Wn);or=s(Ib,"A",{id:!0,class:!0,href:!0});var HC=o(or);Du=s(HC,"SPAN",{});var RC=o(Du);E(Fl.$$.fragment,RC),RC.forEach(t),HC.forEach(t),LB=c(Ib),Lu=s(Ib,"SPAN",{});var VC=o(Lu);AB=a(VC,"TFBertForTokenClassification"),VC.forEach(t),Ib.forEach(t),Y_=c(i),Ye=s(i,"DIV",{class:!0});var so=o(Ye);E(xl.$$.fragment,so),SB=c(so),Au=s(so,"P",{});var QC=o(Au);OB=a(QC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),QC.forEach(t),UB=c(so),Bl=s(so,"P",{});var Db=o(Bl);WB=a(Db,"This model inherits from "),Su=s(Db,"CODE",{});var KC=o(Su);HB=a(KC,"TFPreTrainedModel"),KC.forEach(t),RB=a(Db,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Db.forEach(t),VB=c(so),El=s(so,"P",{});var Lb=o(El);QB=a(Lb,"This model is also a "),Ml=s(Lb,"A",{href:!0,rel:!0});var JC=o(Ml);KB=a(JC,"tf.keras.Model"),JC.forEach(t),JB=a(Lb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lb.forEach(t),GB=c(so),E(nr.$$.fragment,so),XB=c(so),xt=s(so,"DIV",{class:!0});var Wo=o(xt);E(zl.$$.fragment,Wo),YB=c(Wo),Hn=s(Wo,"P",{});var Tp=o(Hn);ZB=a(Tp,"The "),Xc=s(Tp,"A",{href:!0});var GC=o(Xc);eE=a(GC,"TFBertForTokenClassification"),GC.forEach(t),tE=a(Tp," forward method, overrides the "),Ou=s(Tp,"CODE",{});var XC=o(Ou);oE=a(XC,"__call__"),XC.forEach(t),nE=a(Tp," special method."),Tp.forEach(t),sE=c(Wo),E(sr.$$.fragment,Wo),rE=c(Wo),Uu=s(Wo,"P",{});var YC=o(Uu);aE=a(YC,"Example:"),YC.forEach(t),iE=c(Wo),E(ql.$$.fragment,Wo),Wo.forEach(t),so.forEach(t),Z_=c(i),Rn=s(i,"H2",{class:!0});var Ab=o(Rn);rr=s(Ab,"A",{id:!0,class:!0,href:!0});var ZC=o(rr);Wu=s(ZC,"SPAN",{});var e6=o(Wu);E(Pl.$$.fragment,e6),e6.forEach(t),ZC.forEach(t),lE=c(Ab),Hu=s(Ab,"SPAN",{});var t6=o(Hu);dE=a(t6,"TFBertForQuestionAnswering"),t6.forEach(t),Ab.forEach(t),ev=c(i),Ze=s(i,"DIV",{class:!0});var ro=o(Ze);E(jl.$$.fragment,ro),cE=c(ro),Vn=s(ro,"P",{});var wp=o(Vn);pE=a(wp,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ru=s(wp,"CODE",{});var o6=o(Ru);hE=a(o6,"span start logits"),o6.forEach(t),fE=a(wp," and "),Vu=s(wp,"CODE",{});var n6=o(Vu);uE=a(n6,"span end logits"),n6.forEach(t),mE=a(wp,")."),wp.forEach(t),gE=c(ro),Cl=s(ro,"P",{});var Sb=o(Cl);_E=a(Sb,"This model inherits from "),Qu=s(Sb,"CODE",{});var s6=o(Qu);vE=a(s6,"TFPreTrainedModel"),s6.forEach(t),bE=a(Sb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sb.forEach(t),kE=c(ro),Nl=s(ro,"P",{});var Ob=o(Nl);yE=a(Ob,"This model is also a "),Il=s(Ob,"A",{href:!0,rel:!0});var r6=o(Il);TE=a(r6,"tf.keras.Model"),r6.forEach(t),wE=a(Ob,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ob.forEach(t),$E=c(ro),E(ar.$$.fragment,ro),FE=c(ro),Bt=s(ro,"DIV",{class:!0});var Ho=o(Bt);E(Dl.$$.fragment,Ho),xE=c(Ho),Qn=s(Ho,"P",{});var $p=o(Qn);BE=a($p,"The "),Yc=s($p,"A",{href:!0});var a6=o(Yc);EE=a(a6,"TFBertForQuestionAnswering"),a6.forEach(t),ME=a($p," forward method, overrides the "),Ku=s($p,"CODE",{});var i6=o(Ku);zE=a(i6,"__call__"),i6.forEach(t),qE=a($p," special method."),$p.forEach(t),PE=c(Ho),E(ir.$$.fragment,Ho),jE=c(Ho),Ju=s(Ho,"P",{});var l6=o(Ju);CE=a(l6,"Example:"),l6.forEach(t),NE=c(Ho),E(Ll.$$.fragment,Ho),Ho.forEach(t),ro.forEach(t),tv=c(i),Kn=s(i,"H2",{class:!0});var Ub=o(Kn);lr=s(Ub,"A",{id:!0,class:!0,href:!0});var d6=o(lr);Gu=s(d6,"SPAN",{});var c6=o(Gu);E(Al.$$.fragment,c6),c6.forEach(t),d6.forEach(t),IE=c(Ub),Xu=s(Ub,"SPAN",{});var p6=o(Xu);DE=a(p6,"FlaxBertModel"),p6.forEach(t),Ub.forEach(t),ov=c(i),Ie=s(i,"DIV",{class:!0});var St=o(Ie);E(Sl.$$.fragment,St),LE=c(St),Yu=s(St,"P",{});var h6=o(Yu);AE=a(h6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),h6.forEach(t),SE=c(St),Ol=s(St,"P",{});var Wb=o(Ol);OE=a(Wb,"This model inherits from "),Zu=s(Wb,"CODE",{});var f6=o(Zu);UE=a(f6,"FlaxPreTrainedModel"),f6.forEach(t),WE=a(Wb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wb.forEach(t),HE=c(St),Ul=s(St,"P",{});var Hb=o(Ul);RE=a(Hb,"This model is also a Flax Linen "),Wl=s(Hb,"A",{href:!0,rel:!0});var u6=o(Wl);VE=a(u6,"flax.linen.Module"),u6.forEach(t),QE=a(Hb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hb.forEach(t),KE=c(St),em=s(St,"P",{});var m6=o(em);JE=a(m6,"Finally, this model supports inherent JAX features such as:"),m6.forEach(t),GE=c(St),lo=s(St,"UL",{});var xr=o(lo);tm=s(xr,"LI",{});var g6=o(tm);Hl=s(g6,"A",{href:!0,rel:!0});var _6=o(Hl);XE=a(_6,"Just-In-Time (JIT) compilation"),_6.forEach(t),g6.forEach(t),YE=c(xr),om=s(xr,"LI",{});var v6=o(om);Rl=s(v6,"A",{href:!0,rel:!0});var b6=o(Rl);ZE=a(b6,"Automatic Differentiation"),b6.forEach(t),v6.forEach(t),e4=c(xr),nm=s(xr,"LI",{});var k6=o(nm);Vl=s(k6,"A",{href:!0,rel:!0});var y6=o(Vl);t4=a(y6,"Vectorization"),y6.forEach(t),k6.forEach(t),o4=c(xr),sm=s(xr,"LI",{});var T6=o(sm);Ql=s(T6,"A",{href:!0,rel:!0});var w6=o(Ql);n4=a(w6,"Parallelization"),w6.forEach(t),T6.forEach(t),xr.forEach(t),s4=c(St),Et=s(St,"DIV",{class:!0});var Ro=o(Et);E(Kl.$$.fragment,Ro),r4=c(Ro),Jn=s(Ro,"P",{});var Fp=o(Jn);a4=a(Fp,"The "),rm=s(Fp,"CODE",{});var $6=o(rm);i4=a($6,"FlaxBertPreTrainedModel"),$6.forEach(t),l4=a(Fp,"forward method, overrides the "),am=s(Fp,"CODE",{});var F6=o(am);d4=a(F6,"__call__"),F6.forEach(t),c4=a(Fp," special method."),Fp.forEach(t),p4=c(Ro),E(dr.$$.fragment,Ro),h4=c(Ro),im=s(Ro,"P",{});var x6=o(im);f4=a(x6,"Example:"),x6.forEach(t),u4=c(Ro),E(Jl.$$.fragment,Ro),Ro.forEach(t),St.forEach(t),nv=c(i),Gn=s(i,"H2",{class:!0});var Rb=o(Gn);cr=s(Rb,"A",{id:!0,class:!0,href:!0});var B6=o(cr);lm=s(B6,"SPAN",{});var E6=o(lm);E(Gl.$$.fragment,E6),E6.forEach(t),B6.forEach(t),m4=c(Rb),dm=s(Rb,"SPAN",{});var M6=o(dm);g4=a(M6,"FlaxBertForPreTraining"),M6.forEach(t),Rb.forEach(t),sv=c(i),De=s(i,"DIV",{class:!0});var Ot=o(De);E(Xl.$$.fragment,Ot),_4=c(Ot),Xn=s(Ot,"P",{});var xp=o(Xn);v4=a(xp,"Bert Model with two heads on top as done during the pretraining: a "),cm=s(xp,"CODE",{});var z6=o(cm);b4=a(z6,"masked language modeling"),z6.forEach(t),k4=a(xp," head and a "),pm=s(xp,"CODE",{});var q6=o(pm);y4=a(q6,"next sentence prediction (classification)"),q6.forEach(t),T4=a(xp," head."),xp.forEach(t),w4=c(Ot),Yl=s(Ot,"P",{});var Vb=o(Yl);$4=a(Vb,"This model inherits from "),hm=s(Vb,"CODE",{});var P6=o(hm);F4=a(P6,"FlaxPreTrainedModel"),P6.forEach(t),x4=a(Vb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vb.forEach(t),B4=c(Ot),Zl=s(Ot,"P",{});var Qb=o(Zl);E4=a(Qb,"This model is also a Flax Linen "),ed=s(Qb,"A",{href:!0,rel:!0});var j6=o(ed);M4=a(j6,"flax.linen.Module"),j6.forEach(t),z4=a(Qb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qb.forEach(t),q4=c(Ot),fm=s(Ot,"P",{});var C6=o(fm);P4=a(C6,"Finally, this model supports inherent JAX features such as:"),C6.forEach(t),j4=c(Ot),co=s(Ot,"UL",{});var Br=o(co);um=s(Br,"LI",{});var N6=o(um);td=s(N6,"A",{href:!0,rel:!0});var I6=o(td);C4=a(I6,"Just-In-Time (JIT) compilation"),I6.forEach(t),N6.forEach(t),N4=c(Br),mm=s(Br,"LI",{});var D6=o(mm);od=s(D6,"A",{href:!0,rel:!0});var L6=o(od);I4=a(L6,"Automatic Differentiation"),L6.forEach(t),D6.forEach(t),D4=c(Br),gm=s(Br,"LI",{});var A6=o(gm);nd=s(A6,"A",{href:!0,rel:!0});var S6=o(nd);L4=a(S6,"Vectorization"),S6.forEach(t),A6.forEach(t),A4=c(Br),_m=s(Br,"LI",{});var O6=o(_m);sd=s(O6,"A",{href:!0,rel:!0});var U6=o(sd);S4=a(U6,"Parallelization"),U6.forEach(t),O6.forEach(t),Br.forEach(t),O4=c(Ot),Mt=s(Ot,"DIV",{class:!0});var Vo=o(Mt);E(rd.$$.fragment,Vo),U4=c(Vo),Yn=s(Vo,"P",{});var Bp=o(Yn);W4=a(Bp,"The "),vm=s(Bp,"CODE",{});var W6=o(vm);H4=a(W6,"FlaxBertPreTrainedModel"),W6.forEach(t),R4=a(Bp,"forward method, overrides the "),bm=s(Bp,"CODE",{});var H6=o(bm);V4=a(H6,"__call__"),H6.forEach(t),Q4=a(Bp," special method."),Bp.forEach(t),K4=c(Vo),E(pr.$$.fragment,Vo),J4=c(Vo),km=s(Vo,"P",{});var R6=o(km);G4=a(R6,"Example:"),R6.forEach(t),X4=c(Vo),E(ad.$$.fragment,Vo),Vo.forEach(t),Ot.forEach(t),rv=c(i),Zn=s(i,"H2",{class:!0});var Kb=o(Zn);hr=s(Kb,"A",{id:!0,class:!0,href:!0});var V6=o(hr);ym=s(V6,"SPAN",{});var Q6=o(ym);E(id.$$.fragment,Q6),Q6.forEach(t),V6.forEach(t),Y4=c(Kb),Tm=s(Kb,"SPAN",{});var K6=o(Tm);Z4=a(K6,"FlaxBertForMaskedLM"),K6.forEach(t),Kb.forEach(t),av=c(i),Le=s(i,"DIV",{class:!0});var Ut=o(Le);E(ld.$$.fragment,Ut),eM=c(Ut),dd=s(Ut,"P",{});var Jb=o(dd);tM=a(Jb,"Bert Model with a "),wm=s(Jb,"CODE",{});var J6=o(wm);oM=a(J6,"language modeling"),J6.forEach(t),nM=a(Jb," head on top."),Jb.forEach(t),sM=c(Ut),cd=s(Ut,"P",{});var Gb=o(cd);rM=a(Gb,"This model inherits from "),$m=s(Gb,"CODE",{});var G6=o($m);aM=a(G6,"FlaxPreTrainedModel"),G6.forEach(t),iM=a(Gb,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gb.forEach(t),lM=c(Ut),pd=s(Ut,"P",{});var Xb=o(pd);dM=a(Xb,"This model is also a Flax Linen "),hd=s(Xb,"A",{href:!0,rel:!0});var X6=o(hd);cM=a(X6,"flax.linen.Module"),X6.forEach(t),pM=a(Xb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xb.forEach(t),hM=c(Ut),Fm=s(Ut,"P",{});var Y6=o(Fm);fM=a(Y6,"Finally, this model supports inherent JAX features such as:"),Y6.forEach(t),uM=c(Ut),po=s(Ut,"UL",{});var Er=o(po);xm=s(Er,"LI",{});var Z6=o(xm);fd=s(Z6,"A",{href:!0,rel:!0});var e7=o(fd);mM=a(e7,"Just-In-Time (JIT) compilation"),e7.forEach(t),Z6.forEach(t),gM=c(Er),Bm=s(Er,"LI",{});var t7=o(Bm);ud=s(t7,"A",{href:!0,rel:!0});var o7=o(ud);_M=a(o7,"Automatic Differentiation"),o7.forEach(t),t7.forEach(t),vM=c(Er),Em=s(Er,"LI",{});var n7=o(Em);md=s(n7,"A",{href:!0,rel:!0});var s7=o(md);bM=a(s7,"Vectorization"),s7.forEach(t),n7.forEach(t),kM=c(Er),Mm=s(Er,"LI",{});var r7=o(Mm);gd=s(r7,"A",{href:!0,rel:!0});var a7=o(gd);yM=a(a7,"Parallelization"),a7.forEach(t),r7.forEach(t),Er.forEach(t),TM=c(Ut),zt=s(Ut,"DIV",{class:!0});var Qo=o(zt);E(_d.$$.fragment,Qo),wM=c(Qo),es=s(Qo,"P",{});var Ep=o(es);$M=a(Ep,"The "),zm=s(Ep,"CODE",{});var i7=o(zm);FM=a(i7,"FlaxBertPreTrainedModel"),i7.forEach(t),xM=a(Ep,"forward method, overrides the "),qm=s(Ep,"CODE",{});var l7=o(qm);BM=a(l7,"__call__"),l7.forEach(t),EM=a(Ep," special method."),Ep.forEach(t),MM=c(Qo),E(fr.$$.fragment,Qo),zM=c(Qo),Pm=s(Qo,"P",{});var d7=o(Pm);qM=a(d7,"Example:"),d7.forEach(t),PM=c(Qo),E(vd.$$.fragment,Qo),Qo.forEach(t),Ut.forEach(t),iv=c(i),ts=s(i,"H2",{class:!0});var Yb=o(ts);ur=s(Yb,"A",{id:!0,class:!0,href:!0});var c7=o(ur);jm=s(c7,"SPAN",{});var p7=o(jm);E(bd.$$.fragment,p7),p7.forEach(t),c7.forEach(t),jM=c(Yb),Cm=s(Yb,"SPAN",{});var h7=o(Cm);CM=a(h7,"FlaxBertForNextSentencePrediction"),h7.forEach(t),Yb.forEach(t),lv=c(i),Ae=s(i,"DIV",{class:!0});var Wt=o(Ae);E(kd.$$.fragment,Wt),NM=c(Wt),yd=s(Wt,"P",{});var Zb=o(yd);IM=a(Zb,"Bert Model with a "),Nm=s(Zb,"CODE",{});var f7=o(Nm);DM=a(f7,"next sentence prediction (classification)"),f7.forEach(t),LM=a(Zb," head on top."),Zb.forEach(t),AM=c(Wt),Td=s(Wt,"P",{});var ek=o(Td);SM=a(ek,"This model inherits from "),Im=s(ek,"CODE",{});var u7=o(Im);OM=a(u7,"FlaxPreTrainedModel"),u7.forEach(t),UM=a(ek,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ek.forEach(t),WM=c(Wt),wd=s(Wt,"P",{});var tk=o(wd);HM=a(tk,"This model is also a Flax Linen "),$d=s(tk,"A",{href:!0,rel:!0});var m7=o($d);RM=a(m7,"flax.linen.Module"),m7.forEach(t),VM=a(tk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tk.forEach(t),QM=c(Wt),Dm=s(Wt,"P",{});var g7=o(Dm);KM=a(g7,"Finally, this model supports inherent JAX features such as:"),g7.forEach(t),JM=c(Wt),ho=s(Wt,"UL",{});var Mr=o(ho);Lm=s(Mr,"LI",{});var _7=o(Lm);Fd=s(_7,"A",{href:!0,rel:!0});var v7=o(Fd);GM=a(v7,"Just-In-Time (JIT) compilation"),v7.forEach(t),_7.forEach(t),XM=c(Mr),Am=s(Mr,"LI",{});var b7=o(Am);xd=s(b7,"A",{href:!0,rel:!0});var k7=o(xd);YM=a(k7,"Automatic Differentiation"),k7.forEach(t),b7.forEach(t),ZM=c(Mr),Sm=s(Mr,"LI",{});var y7=o(Sm);Bd=s(y7,"A",{href:!0,rel:!0});var T7=o(Bd);ez=a(T7,"Vectorization"),T7.forEach(t),y7.forEach(t),tz=c(Mr),Om=s(Mr,"LI",{});var w7=o(Om);Ed=s(w7,"A",{href:!0,rel:!0});var $7=o(Ed);oz=a($7,"Parallelization"),$7.forEach(t),w7.forEach(t),Mr.forEach(t),nz=c(Wt),qt=s(Wt,"DIV",{class:!0});var Ko=o(qt);E(Md.$$.fragment,Ko),sz=c(Ko),os=s(Ko,"P",{});var Mp=o(os);rz=a(Mp,"The "),Um=s(Mp,"CODE",{});var F7=o(Um);az=a(F7,"FlaxBertPreTrainedModel"),F7.forEach(t),iz=a(Mp,"forward method, overrides the "),Wm=s(Mp,"CODE",{});var x7=o(Wm);lz=a(x7,"__call__"),x7.forEach(t),dz=a(Mp," special method."),Mp.forEach(t),cz=c(Ko),E(mr.$$.fragment,Ko),pz=c(Ko),Hm=s(Ko,"P",{});var B7=o(Hm);hz=a(B7,"Example:"),B7.forEach(t),fz=c(Ko),E(zd.$$.fragment,Ko),Ko.forEach(t),Wt.forEach(t),dv=c(i),ns=s(i,"H2",{class:!0});var ok=o(ns);gr=s(ok,"A",{id:!0,class:!0,href:!0});var E7=o(gr);Rm=s(E7,"SPAN",{});var M7=o(Rm);E(qd.$$.fragment,M7),M7.forEach(t),E7.forEach(t),uz=c(ok),Vm=s(ok,"SPAN",{});var z7=o(Vm);mz=a(z7,"FlaxBertForSequenceClassification"),z7.forEach(t),ok.forEach(t),cv=c(i),Se=s(i,"DIV",{class:!0});var Ht=o(Se);E(Pd.$$.fragment,Ht),gz=c(Ht),Qm=s(Ht,"P",{});var q7=o(Qm);_z=a(q7,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),q7.forEach(t),vz=c(Ht),jd=s(Ht,"P",{});var nk=o(jd);bz=a(nk,"This model inherits from "),Km=s(nk,"CODE",{});var P7=o(Km);kz=a(P7,"FlaxPreTrainedModel"),P7.forEach(t),yz=a(nk,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nk.forEach(t),Tz=c(Ht),Cd=s(Ht,"P",{});var sk=o(Cd);wz=a(sk,"This model is also a Flax Linen "),Nd=s(sk,"A",{href:!0,rel:!0});var j7=o(Nd);$z=a(j7,"flax.linen.Module"),j7.forEach(t),Fz=a(sk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sk.forEach(t),xz=c(Ht),Jm=s(Ht,"P",{});var C7=o(Jm);Bz=a(C7,"Finally, this model supports inherent JAX features such as:"),C7.forEach(t),Ez=c(Ht),fo=s(Ht,"UL",{});var zr=o(fo);Gm=s(zr,"LI",{});var N7=o(Gm);Id=s(N7,"A",{href:!0,rel:!0});var I7=o(Id);Mz=a(I7,"Just-In-Time (JIT) compilation"),I7.forEach(t),N7.forEach(t),zz=c(zr),Xm=s(zr,"LI",{});var D7=o(Xm);Dd=s(D7,"A",{href:!0,rel:!0});var L7=o(Dd);qz=a(L7,"Automatic Differentiation"),L7.forEach(t),D7.forEach(t),Pz=c(zr),Ym=s(zr,"LI",{});var A7=o(Ym);Ld=s(A7,"A",{href:!0,rel:!0});var S7=o(Ld);jz=a(S7,"Vectorization"),S7.forEach(t),A7.forEach(t),Cz=c(zr),Zm=s(zr,"LI",{});var O7=o(Zm);Ad=s(O7,"A",{href:!0,rel:!0});var U7=o(Ad);Nz=a(U7,"Parallelization"),U7.forEach(t),O7.forEach(t),zr.forEach(t),Iz=c(Ht),Pt=s(Ht,"DIV",{class:!0});var Jo=o(Pt);E(Sd.$$.fragment,Jo),Dz=c(Jo),ss=s(Jo,"P",{});var zp=o(ss);Lz=a(zp,"The "),eg=s(zp,"CODE",{});var W7=o(eg);Az=a(W7,"FlaxBertPreTrainedModel"),W7.forEach(t),Sz=a(zp,"forward method, overrides the "),tg=s(zp,"CODE",{});var H7=o(tg);Oz=a(H7,"__call__"),H7.forEach(t),Uz=a(zp," special method."),zp.forEach(t),Wz=c(Jo),E(_r.$$.fragment,Jo),Hz=c(Jo),og=s(Jo,"P",{});var R7=o(og);Rz=a(R7,"Example:"),R7.forEach(t),Vz=c(Jo),E(Od.$$.fragment,Jo),Jo.forEach(t),Ht.forEach(t),pv=c(i),rs=s(i,"H2",{class:!0});var rk=o(rs);vr=s(rk,"A",{id:!0,class:!0,href:!0});var V7=o(vr);ng=s(V7,"SPAN",{});var Q7=o(ng);E(Ud.$$.fragment,Q7),Q7.forEach(t),V7.forEach(t),Qz=c(rk),sg=s(rk,"SPAN",{});var K7=o(sg);Kz=a(K7,"FlaxBertForMultipleChoice"),K7.forEach(t),rk.forEach(t),hv=c(i),Oe=s(i,"DIV",{class:!0});var Rt=o(Oe);E(Wd.$$.fragment,Rt),Jz=c(Rt),rg=s(Rt,"P",{});var J7=o(rg);Gz=a(J7,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),J7.forEach(t),Xz=c(Rt),Hd=s(Rt,"P",{});var ak=o(Hd);Yz=a(ak,"This model inherits from "),ag=s(ak,"CODE",{});var G7=o(ag);Zz=a(G7,"FlaxPreTrainedModel"),G7.forEach(t),eq=a(ak,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ak.forEach(t),tq=c(Rt),Rd=s(Rt,"P",{});var ik=o(Rd);oq=a(ik,"This model is also a Flax Linen "),Vd=s(ik,"A",{href:!0,rel:!0});var X7=o(Vd);nq=a(X7,"flax.linen.Module"),X7.forEach(t),sq=a(ik,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ik.forEach(t),rq=c(Rt),ig=s(Rt,"P",{});var Y7=o(ig);aq=a(Y7,"Finally, this model supports inherent JAX features such as:"),Y7.forEach(t),iq=c(Rt),uo=s(Rt,"UL",{});var qr=o(uo);lg=s(qr,"LI",{});var Z7=o(lg);Qd=s(Z7,"A",{href:!0,rel:!0});var eN=o(Qd);lq=a(eN,"Just-In-Time (JIT) compilation"),eN.forEach(t),Z7.forEach(t),dq=c(qr),dg=s(qr,"LI",{});var tN=o(dg);Kd=s(tN,"A",{href:!0,rel:!0});var oN=o(Kd);cq=a(oN,"Automatic Differentiation"),oN.forEach(t),tN.forEach(t),pq=c(qr),cg=s(qr,"LI",{});var nN=o(cg);Jd=s(nN,"A",{href:!0,rel:!0});var sN=o(Jd);hq=a(sN,"Vectorization"),sN.forEach(t),nN.forEach(t),fq=c(qr),pg=s(qr,"LI",{});var rN=o(pg);Gd=s(rN,"A",{href:!0,rel:!0});var aN=o(Gd);uq=a(aN,"Parallelization"),aN.forEach(t),rN.forEach(t),qr.forEach(t),mq=c(Rt),jt=s(Rt,"DIV",{class:!0});var Go=o(jt);E(Xd.$$.fragment,Go),gq=c(Go),as=s(Go,"P",{});var qp=o(as);_q=a(qp,"The "),hg=s(qp,"CODE",{});var iN=o(hg);vq=a(iN,"FlaxBertPreTrainedModel"),iN.forEach(t),bq=a(qp,"forward method, overrides the "),fg=s(qp,"CODE",{});var lN=o(fg);kq=a(lN,"__call__"),lN.forEach(t),yq=a(qp," special method."),qp.forEach(t),Tq=c(Go),E(br.$$.fragment,Go),wq=c(Go),ug=s(Go,"P",{});var dN=o(ug);$q=a(dN,"Example:"),dN.forEach(t),Fq=c(Go),E(Yd.$$.fragment,Go),Go.forEach(t),Rt.forEach(t),fv=c(i),is=s(i,"H2",{class:!0});var lk=o(is);kr=s(lk,"A",{id:!0,class:!0,href:!0});var cN=o(kr);mg=s(cN,"SPAN",{});var pN=o(mg);E(Zd.$$.fragment,pN),pN.forEach(t),cN.forEach(t),xq=c(lk),gg=s(lk,"SPAN",{});var hN=o(gg);Bq=a(hN,"FlaxBertForTokenClassification"),hN.forEach(t),lk.forEach(t),uv=c(i),Ue=s(i,"DIV",{class:!0});var Vt=o(Ue);E(ec.$$.fragment,Vt),Eq=c(Vt),_g=s(Vt,"P",{});var fN=o(_g);Mq=a(fN,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fN.forEach(t),zq=c(Vt),tc=s(Vt,"P",{});var dk=o(tc);qq=a(dk,"This model inherits from "),vg=s(dk,"CODE",{});var uN=o(vg);Pq=a(uN,"FlaxPreTrainedModel"),uN.forEach(t),jq=a(dk,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dk.forEach(t),Cq=c(Vt),oc=s(Vt,"P",{});var ck=o(oc);Nq=a(ck,"This model is also a Flax Linen "),nc=s(ck,"A",{href:!0,rel:!0});var mN=o(nc);Iq=a(mN,"flax.linen.Module"),mN.forEach(t),Dq=a(ck,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ck.forEach(t),Lq=c(Vt),bg=s(Vt,"P",{});var gN=o(bg);Aq=a(gN,"Finally, this model supports inherent JAX features such as:"),gN.forEach(t),Sq=c(Vt),mo=s(Vt,"UL",{});var Pr=o(mo);kg=s(Pr,"LI",{});var _N=o(kg);sc=s(_N,"A",{href:!0,rel:!0});var vN=o(sc);Oq=a(vN,"Just-In-Time (JIT) compilation"),vN.forEach(t),_N.forEach(t),Uq=c(Pr),yg=s(Pr,"LI",{});var bN=o(yg);rc=s(bN,"A",{href:!0,rel:!0});var kN=o(rc);Wq=a(kN,"Automatic Differentiation"),kN.forEach(t),bN.forEach(t),Hq=c(Pr),Tg=s(Pr,"LI",{});var yN=o(Tg);ac=s(yN,"A",{href:!0,rel:!0});var TN=o(ac);Rq=a(TN,"Vectorization"),TN.forEach(t),yN.forEach(t),Vq=c(Pr),wg=s(Pr,"LI",{});var wN=o(wg);ic=s(wN,"A",{href:!0,rel:!0});var $N=o(ic);Qq=a($N,"Parallelization"),$N.forEach(t),wN.forEach(t),Pr.forEach(t),Kq=c(Vt),Ct=s(Vt,"DIV",{class:!0});var Xo=o(Ct);E(lc.$$.fragment,Xo),Jq=c(Xo),ls=s(Xo,"P",{});var Pp=o(ls);Gq=a(Pp,"The "),$g=s(Pp,"CODE",{});var FN=o($g);Xq=a(FN,"FlaxBertPreTrainedModel"),FN.forEach(t),Yq=a(Pp,"forward method, overrides the "),Fg=s(Pp,"CODE",{});var xN=o(Fg);Zq=a(xN,"__call__"),xN.forEach(t),eP=a(Pp," special method."),Pp.forEach(t),tP=c(Xo),E(yr.$$.fragment,Xo),oP=c(Xo),xg=s(Xo,"P",{});var BN=o(xg);nP=a(BN,"Example:"),BN.forEach(t),sP=c(Xo),E(dc.$$.fragment,Xo),Xo.forEach(t),Vt.forEach(t),mv=c(i),ds=s(i,"H2",{class:!0});var pk=o(ds);Tr=s(pk,"A",{id:!0,class:!0,href:!0});var EN=o(Tr);Bg=s(EN,"SPAN",{});var MN=o(Bg);E(cc.$$.fragment,MN),MN.forEach(t),EN.forEach(t),rP=c(pk),Eg=s(pk,"SPAN",{});var zN=o(Eg);aP=a(zN,"FlaxBertForQuestionAnswering"),zN.forEach(t),pk.forEach(t),gv=c(i),We=s(i,"DIV",{class:!0});var Qt=o(We);E(pc.$$.fragment,Qt),iP=c(Qt),cs=s(Qt,"P",{});var jp=o(cs);lP=a(jp,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mg=s(jp,"CODE",{});var qN=o(Mg);dP=a(qN,"span start logits"),qN.forEach(t),cP=a(jp," and "),zg=s(jp,"CODE",{});var PN=o(zg);pP=a(PN,"span end logits"),PN.forEach(t),hP=a(jp,")."),jp.forEach(t),fP=c(Qt),hc=s(Qt,"P",{});var hk=o(hc);uP=a(hk,"This model inherits from "),qg=s(hk,"CODE",{});var jN=o(qg);mP=a(jN,"FlaxPreTrainedModel"),jN.forEach(t),gP=a(hk,` Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hk.forEach(t),_P=c(Qt),fc=s(Qt,"P",{});var fk=o(fc);vP=a(fk,"This model is also a Flax Linen "),uc=s(fk,"A",{href:!0,rel:!0});var CN=o(uc);bP=a(CN,"flax.linen.Module"),CN.forEach(t),kP=a(fk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fk.forEach(t),yP=c(Qt),Pg=s(Qt,"P",{});var NN=o(Pg);TP=a(NN,"Finally, this model supports inherent JAX features such as:"),NN.forEach(t),wP=c(Qt),go=s(Qt,"UL",{});var jr=o(go);jg=s(jr,"LI",{});var IN=o(jg);mc=s(IN,"A",{href:!0,rel:!0});var DN=o(mc);$P=a(DN,"Just-In-Time (JIT) compilation"),DN.forEach(t),IN.forEach(t),FP=c(jr),Cg=s(jr,"LI",{});var LN=o(Cg);gc=s(LN,"A",{href:!0,rel:!0});var AN=o(gc);xP=a(AN,"Automatic Differentiation"),AN.forEach(t),LN.forEach(t),BP=c(jr),Ng=s(jr,"LI",{});var SN=o(Ng);_c=s(SN,"A",{href:!0,rel:!0});var ON=o(_c);EP=a(ON,"Vectorization"),ON.forEach(t),SN.forEach(t),MP=c(jr),Ig=s(jr,"LI",{});var UN=o(Ig);vc=s(UN,"A",{href:!0,rel:!0});var WN=o(vc);zP=a(WN,"Parallelization"),WN.forEach(t),UN.forEach(t),jr.forEach(t),qP=c(Qt),Nt=s(Qt,"DIV",{class:!0});var Yo=o(Nt);E(bc.$$.fragment,Yo),PP=c(Yo),ps=s(Yo,"P",{});var Cp=o(ps);jP=a(Cp,"The "),Dg=s(Cp,"CODE",{});var HN=o(Dg);CP=a(HN,"FlaxBertPreTrainedModel"),HN.forEach(t),NP=a(Cp,"forward method, overrides the "),Lg=s(Cp,"CODE",{});var RN=o(Lg);IP=a(RN,"__call__"),RN.forEach(t),DP=a(Cp," special method."),Cp.forEach(t),LP=c(Yo),E(wr.$$.fragment,Yo),AP=c(Yo),Ag=s(Yo,"P",{});var VN=o(Ag);SP=a(VN,"Example:"),VN.forEach(t),OP=c(Yo),E(kc.$$.fragment,Yo),Yo.forEach(t),Qt.forEach(t),this.h()},h(){p(l,"name","hf:doc:metadata"),p(l,"content",JSON.stringify(I9)),p(u,"id","bert"),p(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(u,"href","#bert"),p(h,"class","relative group"),p(q,"id","overview"),p(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(q,"href","#overview"),p(w,"class","relative group"),p(ae,"href","https://arxiv.org/abs/1810.04805"),p(ae,"rel","nofollow"),p(ye,"href","https://huggingface.co/thomwolf"),p(ye,"rel","nofollow"),p(Te,"href","https://github.com/google-research/bert"),p(Te,"rel","nofollow"),p(xe,"id","transformers.BertConfig"),p(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(xe,"href","#transformers.BertConfig"),p($e,"class","relative group"),p(xc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertModel"),p(Bc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertModel"),p(Ar,"href","https://huggingface.co/bert-base-uncased"),p(Ar,"rel","nofollow"),p(ot,"class","docstring"),p(us,"id","transformers.BertTokenizer"),p(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(us,"href","#transformers.BertTokenizer"),p(en,"class","relative group"),p(vo,"class","docstring"),p(ms,"class","docstring"),p(Jt,"class","docstring"),p(zc,"class","docstring"),p(je,"class","docstring"),p(gs,"id","transformers.BertTokenizerFast"),p(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(gs,"href","#transformers.BertTokenizerFast"),p(on,"class","relative group"),p(bo,"class","docstring"),p(Gt,"class","docstring"),p(nt,"class","docstring"),p(_s,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),p(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_s,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),p(sn,"class","relative group"),p(jc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForPreTraining"),p(rn,"class","docstring"),p(Cc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForPreTraining"),p(an,"class","docstring"),p(Nc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForPreTraining"),p(vs,"class","docstring"),p(io,"class","docstring"),p(bs,"id","transformers.BertModel"),p(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(bs,"href","#transformers.BertModel"),p(ln,"class","relative group"),p(_a,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(_a,"rel","nofollow"),p(ba,"href","https://arxiv.org/abs/1706.03762"),p(ba,"rel","nofollow"),p(Ic,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertModel"),p(ht,"class","docstring"),p(Ce,"class","docstring"),p(ys,"id","transformers.BertForPreTraining"),p(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ys,"href","#transformers.BertForPreTraining"),p(cn,"class","relative group"),p(xa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(xa,"rel","nofollow"),p(Dc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForPreTraining"),p(ft,"class","docstring"),p(st,"class","docstring"),p(ws,"id","transformers.BertLMHeadModel"),p(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ws,"href","#transformers.BertLMHeadModel"),p(fn,"class","relative group"),p(Ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ca,"rel","nofollow"),p(Lc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertLMHeadModel"),p(ut,"class","docstring"),p(rt,"class","docstring"),p(Fs,"id","transformers.BertForMaskedLM"),p(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Fs,"href","#transformers.BertForMaskedLM"),p(mn,"class","relative group"),p(Ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ua,"rel","nofollow"),p(Ac,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForMaskedLM"),p(mt,"class","docstring"),p(at,"class","docstring"),p(Bs,"id","transformers.BertForNextSentencePrediction"),p(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Bs,"href","#transformers.BertForNextSentencePrediction"),p(_n,"class","relative group"),p(Ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ga,"rel","nofollow"),p(Sc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForNextSentencePrediction"),p(gt,"class","docstring"),p(it,"class","docstring"),p(Ms,"id","transformers.BertForSequenceClassification"),p(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ms,"href","#transformers.BertForSequenceClassification"),p(bn,"class","relative group"),p(ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ni,"rel","nofollow"),p(Oc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForSequenceClassification"),p(He,"class","docstring"),p(lt,"class","docstring"),p(qs,"id","transformers.BertForMultipleChoice"),p(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qs,"href","#transformers.BertForMultipleChoice"),p(yn,"class","relative group"),p(pi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(pi,"rel","nofollow"),p(Uc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForMultipleChoice"),p(_t,"class","docstring"),p(dt,"class","docstring"),p(js,"id","transformers.BertForTokenClassification"),p(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(js,"href","#transformers.BertForTokenClassification"),p(wn,"class","relative group"),p(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(vi,"rel","nofollow"),p(Wc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForTokenClassification"),p(vt,"class","docstring"),p(ct,"class","docstring"),p(Ns,"id","transformers.BertForQuestionAnswering"),p(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ns,"href","#transformers.BertForQuestionAnswering"),p(Fn,"class","relative group"),p(Fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Fi,"rel","nofollow"),p(Hc,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertForQuestionAnswering"),p(bt,"class","docstring"),p(pt,"class","docstring"),p(Ds,"id","transformers.TFBertModel"),p(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ds,"href","#transformers.TFBertModel"),p(En,"class","relative group"),p(Pi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Pi,"rel","nofollow"),p(Rc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertModel"),p(kt,"class","docstring"),p(Ve,"class","docstring"),p(Ss,"id","transformers.TFBertForPreTraining"),p(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ss,"href","#transformers.TFBertForPreTraining"),p(zn,"class","relative group"),p(Ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Ai,"rel","nofollow"),p(Vc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForPreTraining"),p(yt,"class","docstring"),p(Qe,"class","docstring"),p(Ws,"id","transformers.TFBertLMHeadModel"),p(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ws,"href","#transformers.TFBertLMHeadModel"),p(jn,"class","relative group"),p(et,"class","docstring"),p(Cn,"class","docstring"),p(Hs,"id","transformers.TFBertForMaskedLM"),p(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Hs,"href","#transformers.TFBertForMaskedLM"),p(Nn,"class","relative group"),p(el,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(el,"rel","nofollow"),p(Qc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForMaskedLM"),p(Tt,"class","docstring"),p(Ke,"class","docstring"),p(Qs,"id","transformers.TFBertForNextSentencePrediction"),p(Qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qs,"href","#transformers.TFBertForNextSentencePrediction"),p(Dn,"class","relative group"),p(ll,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(ll,"rel","nofollow"),p(Kc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),p(wt,"class","docstring"),p(Je,"class","docstring"),p(Gs,"id","transformers.TFBertForSequenceClassification"),p(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Gs,"href","#transformers.TFBertForSequenceClassification"),p(An,"class","relative group"),p(ml,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(ml,"rel","nofollow"),p(Jc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForSequenceClassification"),p($t,"class","docstring"),p(Ge,"class","docstring"),p(Zs,"id","transformers.TFBertForMultipleChoice"),p(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Zs,"href","#transformers.TFBertForMultipleChoice"),p(On,"class","relative group"),p(Tl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Tl,"rel","nofollow"),p(Gc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForMultipleChoice"),p(Ft,"class","docstring"),p(Xe,"class","docstring"),p(or,"id","transformers.TFBertForTokenClassification"),p(or,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(or,"href","#transformers.TFBertForTokenClassification"),p(Wn,"class","relative group"),p(Ml,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Ml,"rel","nofollow"),p(Xc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForTokenClassification"),p(xt,"class","docstring"),p(Ye,"class","docstring"),p(rr,"id","transformers.TFBertForQuestionAnswering"),p(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rr,"href","#transformers.TFBertForQuestionAnswering"),p(Rn,"class","relative group"),p(Il,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Il,"rel","nofollow"),p(Yc,"href","/docs/transformers/master/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),p(Bt,"class","docstring"),p(Ze,"class","docstring"),p(lr,"id","transformers.FlaxBertModel"),p(lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(lr,"href","#transformers.FlaxBertModel"),p(Kn,"class","relative group"),p(Wl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(Wl,"rel","nofollow"),p(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Hl,"rel","nofollow"),p(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Rl,"rel","nofollow"),p(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Vl,"rel","nofollow"),p(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Ql,"rel","nofollow"),p(Et,"class","docstring"),p(Ie,"class","docstring"),p(cr,"id","transformers.FlaxBertForPreTraining"),p(cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(cr,"href","#transformers.FlaxBertForPreTraining"),p(Gn,"class","relative group"),p(ed,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(ed,"rel","nofollow"),p(td,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(td,"rel","nofollow"),p(od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(od,"rel","nofollow"),p(nd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(nd,"rel","nofollow"),p(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(sd,"rel","nofollow"),p(Mt,"class","docstring"),p(De,"class","docstring"),p(hr,"id","transformers.FlaxBertForMaskedLM"),p(hr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(hr,"href","#transformers.FlaxBertForMaskedLM"),p(Zn,"class","relative group"),p(hd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(hd,"rel","nofollow"),p(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(fd,"rel","nofollow"),p(ud,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(ud,"rel","nofollow"),p(md,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(md,"rel","nofollow"),p(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(gd,"rel","nofollow"),p(zt,"class","docstring"),p(Le,"class","docstring"),p(ur,"id","transformers.FlaxBertForNextSentencePrediction"),p(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ur,"href","#transformers.FlaxBertForNextSentencePrediction"),p(ts,"class","relative group"),p($d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p($d,"rel","nofollow"),p(Fd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Fd,"rel","nofollow"),p(xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(xd,"rel","nofollow"),p(Bd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Bd,"rel","nofollow"),p(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Ed,"rel","nofollow"),p(qt,"class","docstring"),p(Ae,"class","docstring"),p(gr,"id","transformers.FlaxBertForSequenceClassification"),p(gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(gr,"href","#transformers.FlaxBertForSequenceClassification"),p(ns,"class","relative group"),p(Nd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(Nd,"rel","nofollow"),p(Id,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Id,"rel","nofollow"),p(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Dd,"rel","nofollow"),p(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Ld,"rel","nofollow"),p(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Ad,"rel","nofollow"),p(Pt,"class","docstring"),p(Se,"class","docstring"),p(vr,"id","transformers.FlaxBertForMultipleChoice"),p(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(vr,"href","#transformers.FlaxBertForMultipleChoice"),p(rs,"class","relative group"),p(Vd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(Vd,"rel","nofollow"),p(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Qd,"rel","nofollow"),p(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Kd,"rel","nofollow"),p(Jd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Jd,"rel","nofollow"),p(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Gd,"rel","nofollow"),p(jt,"class","docstring"),p(Oe,"class","docstring"),p(kr,"id","transformers.FlaxBertForTokenClassification"),p(kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(kr,"href","#transformers.FlaxBertForTokenClassification"),p(is,"class","relative group"),p(nc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(nc,"rel","nofollow"),p(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(sc,"rel","nofollow"),p(rc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(rc,"rel","nofollow"),p(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(ac,"rel","nofollow"),p(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(ic,"rel","nofollow"),p(Ct,"class","docstring"),p(Ue,"class","docstring"),p(Tr,"id","transformers.FlaxBertForQuestionAnswering"),p(Tr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Tr,"href","#transformers.FlaxBertForQuestionAnswering"),p(ds,"class","relative group"),p(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),p(uc,"rel","nofollow"),p(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(mc,"rel","nofollow"),p(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(gc,"rel","nofollow"),p(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(_c,"rel","nofollow"),p(vc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(vc,"rel","nofollow"),p(Nt,"class","docstring"),p(We,"class","docstring")},m(i,y){e(document.head,l),b(i,f,y),b(i,h,y),e(h,u),e(u,_),M(m,_,null),e(h,g),e(h,T),e(T,j),b(i,x,y),b(i,w,y),e(w,q),e(q,C),M(U,C,null),e(w,re),e(w,V),e(V,le),b(i,ce,y),b(i,L,y),e(L,S),e(L,ae),e(ae,ie),e(L,N),b(i,A,y),b(i,pe,y),e(pe,ee),b(i,_e,y),b(i,fe,y),e(fe,W),e(W,ve),b(i,ge,y),b(i,D,y),e(D,ue),e(ue,K),b(i,he,y),b(i,te,y),e(te,H),b(i,oe,y),b(i,G,y),e(G,O),e(O,se),e(G,I),e(G,X),e(X,v),b(i,P,y),b(i,Y,y),e(Y,Ee),e(Y,ye),e(ye,J),e(Y,ke),e(Y,Te),e(Te,Me),e(Y,R),b(i,Z,y),b(i,$e,y),e($e,xe),e(xe,ne),M(Be,ne,null),e($e,qe),e($e,be),e(be,Pe),b(i,c_,y),b(i,ot,y),M(Lr,ot,null),e(ot,gk),e(ot,ao),e(ao,_k),e(ao,xc),e(xc,vk),e(ao,bk),e(ao,Bc),e(Bc,kk),e(ao,yk),e(ao,Ar),e(Ar,Tk),e(ao,wk),e(ot,$k),e(ot,Zo),e(Zo,Fk),e(Zo,Ap),e(Ap,xk),e(Zo,Bk),e(Zo,Sp),e(Sp,Ek),e(Zo,Mk),e(ot,zk),e(ot,Op),e(Op,qk),e(ot,Pk),M(Sr,ot,null),b(i,p_,y),b(i,en,y),e(en,us),e(us,Up),M(Or,Up,null),e(en,jk),e(en,Wp),e(Wp,Ck),b(i,h_,y),b(i,je,y),M(Ur,je,null),e(je,Nk),e(je,Hp),e(Hp,Ik),e(je,Dk),e(je,Wr),e(Wr,Lk),e(Wr,Rp),e(Rp,Ak),e(Wr,Sk),e(je,Ok),e(je,vo),M(Hr,vo,null),e(vo,Uk),e(vo,Vp),e(Vp,Wk),e(vo,Hk),e(vo,Rr),e(Rr,Ec),e(Ec,Rk),e(Ec,Qp),e(Qp,Vk),e(Rr,Qk),e(Rr,Mc),e(Mc,Kk),e(Mc,Kp),e(Kp,Jk),e(je,Gk),e(je,ms),M(Vr,ms,null),e(ms,Xk),e(ms,Qr),e(Qr,Yk),e(Qr,Jp),e(Jp,Zk),e(Qr,ey),e(je,ty),e(je,Jt),M(Kr,Jt,null),e(Jt,oy),e(Jt,Gp),e(Gp,ny),e(Jt,sy),M(Jr,Jt,null),e(Jt,ry),e(Jt,tn),e(tn,ay),e(tn,Xp),e(Xp,iy),e(tn,ly),e(tn,Yp),e(Yp,dy),e(tn,cy),e(je,py),e(je,zc),M(Gr,zc,null),b(i,f_,y),b(i,on,y),e(on,gs),e(gs,Zp),M(Xr,Zp,null),e(on,hy),e(on,eh),e(eh,fy),b(i,u_,y),b(i,nt,y),M(Yr,nt,null),e(nt,uy),e(nt,Zr),e(Zr,my),e(Zr,th),e(th,gy),e(Zr,_y),e(nt,vy),e(nt,ea),e(ea,by),e(ea,oh),e(oh,ky),e(ea,yy),e(nt,Ty),e(nt,bo),M(ta,bo,null),e(bo,wy),e(bo,nh),e(nh,$y),e(bo,Fy),e(bo,oa),e(oa,qc),e(qc,xy),e(qc,sh),e(sh,By),e(oa,Ey),e(oa,Pc),e(Pc,My),e(Pc,rh),e(rh,zy),e(nt,qy),e(nt,Gt),M(na,Gt,null),e(Gt,Py),e(Gt,ah),e(ah,jy),e(Gt,Cy),M(sa,Gt,null),e(Gt,Ny),e(Gt,nn),e(nn,Iy),e(nn,ih),e(ih,Dy),e(nn,Ly),e(nn,lh),e(lh,Ay),e(nn,Sy),b(i,m_,y),b(i,sn,y),e(sn,_s),e(_s,dh),M(ra,dh,null),e(sn,Oy),e(sn,ch),e(ch,Uy),b(i,g_,y),b(i,rn,y),M(aa,rn,null),e(rn,Wy),e(rn,ia),e(ia,Hy),e(ia,jc),e(jc,Ry),e(ia,Vy),b(i,__,y),b(i,an,y),M(la,an,null),e(an,Qy),e(an,da),e(da,Ky),e(da,Cc),e(Cc,Jy),e(da,Gy),b(i,v_,y),b(i,io,y),M(ca,io,null),e(io,Xy),e(io,pa),e(pa,Yy),e(pa,Nc),e(Nc,Zy),e(pa,e1),e(io,t1),e(io,vs),M(ha,vs,null),e(vs,o1),e(vs,ph),e(ph,n1),b(i,b_,y),b(i,ln,y),e(ln,bs),e(bs,hh),M(fa,hh,null),e(ln,s1),e(ln,fh),e(fh,r1),b(i,k_,y),b(i,Ce,y),M(ua,Ce,null),e(Ce,a1),e(Ce,uh),e(uh,i1),e(Ce,l1),e(Ce,ma),e(ma,d1),e(ma,mh),e(mh,c1),e(ma,p1),e(Ce,h1),e(Ce,ga),e(ga,f1),e(ga,_a),e(_a,u1),e(ga,m1),e(Ce,g1),e(Ce,va),e(va,_1),e(va,ba),e(ba,v1),e(va,b1),e(Ce,k1),e(Ce,Re),e(Re,y1),e(Re,gh),e(gh,T1),e(Re,w1),e(Re,_h),e(_h,$1),e(Re,F1),e(Re,vh),e(vh,x1),e(Re,B1),e(Re,bh),e(bh,E1),e(Re,M1),e(Re,kh),e(kh,z1),e(Re,q1),e(Re,yh),e(yh,P1),e(Re,j1),e(Ce,C1),e(Ce,ht),M(ka,ht,null),e(ht,N1),e(ht,dn),e(dn,I1),e(dn,Ic),e(Ic,D1),e(dn,L1),e(dn,Th),e(Th,A1),e(dn,S1),e(ht,O1),M(ks,ht,null),e(ht,U1),e(ht,wh),e(wh,W1),e(ht,H1),M(ya,ht,null),b(i,y_,y),b(i,cn,y),e(cn,ys),e(ys,$h),M(Ta,$h,null),e(cn,R1),e(cn,Fh),e(Fh,V1),b(i,T_,y),b(i,st,y),M(wa,st,null),e(st,Q1),e(st,pn),e(pn,K1),e(pn,xh),e(xh,J1),e(pn,G1),e(pn,Bh),e(Bh,X1),e(pn,Y1),e(st,Z1),e(st,$a),e($a,eT),e($a,Eh),e(Eh,tT),e($a,oT),e(st,nT),e(st,Fa),e(Fa,sT),e(Fa,xa),e(xa,rT),e(Fa,aT),e(st,iT),e(st,ft),M(Ba,ft,null),e(ft,lT),e(ft,hn),e(hn,dT),e(hn,Dc),e(Dc,cT),e(hn,pT),e(hn,Mh),e(Mh,hT),e(hn,fT),e(ft,uT),M(Ts,ft,null),e(ft,mT),e(ft,zh),e(zh,gT),e(ft,_T),M(Ea,ft,null),b(i,w_,y),b(i,fn,y),e(fn,ws),e(ws,qh),M(Ma,qh,null),e(fn,vT),e(fn,Ph),e(Ph,bT),b(i,$_,y),b(i,rt,y),M(za,rt,null),e(rt,kT),e(rt,qa),e(qa,yT),e(qa,jh),e(jh,TT),e(qa,wT),e(rt,$T),e(rt,Pa),e(Pa,FT),e(Pa,Ch),e(Ch,xT),e(Pa,BT),e(rt,ET),e(rt,ja),e(ja,MT),e(ja,Ca),e(Ca,zT),e(ja,qT),e(rt,PT),e(rt,ut),M(Na,ut,null),e(ut,jT),e(ut,un),e(un,CT),e(un,Lc),e(Lc,NT),e(un,IT),e(un,Nh),e(Nh,DT),e(un,LT),e(ut,AT),M($s,ut,null),e(ut,ST),e(ut,Ih),e(Ih,OT),e(ut,UT),M(Ia,ut,null),b(i,F_,y),b(i,mn,y),e(mn,Fs),e(Fs,Dh),M(Da,Dh,null),e(mn,WT),e(mn,Lh),e(Lh,HT),b(i,x_,y),b(i,at,y),M(La,at,null),e(at,RT),e(at,Aa),e(Aa,VT),e(Aa,Ah),e(Ah,QT),e(Aa,KT),e(at,JT),e(at,Sa),e(Sa,GT),e(Sa,Sh),e(Sh,XT),e(Sa,YT),e(at,ZT),e(at,Oa),e(Oa,ew),e(Oa,Ua),e(Ua,tw),e(Oa,ow),e(at,nw),e(at,mt),M(Wa,mt,null),e(mt,sw),e(mt,gn),e(gn,rw),e(gn,Ac),e(Ac,aw),e(gn,iw),e(gn,Oh),e(Oh,lw),e(gn,dw),e(mt,cw),M(xs,mt,null),e(mt,pw),e(mt,Uh),e(Uh,hw),e(mt,fw),M(Ha,mt,null),b(i,B_,y),b(i,_n,y),e(_n,Bs),e(Bs,Wh),M(Ra,Wh,null),e(_n,uw),e(_n,Hh),e(Hh,mw),b(i,E_,y),b(i,it,y),M(Va,it,null),e(it,gw),e(it,Qa),e(Qa,_w),e(Qa,Rh),e(Rh,vw),e(Qa,bw),e(it,kw),e(it,Ka),e(Ka,yw),e(Ka,Vh),e(Vh,Tw),e(Ka,ww),e(it,$w),e(it,Ja),e(Ja,Fw),e(Ja,Ga),e(Ga,xw),e(Ja,Bw),e(it,Ew),e(it,gt),M(Xa,gt,null),e(gt,Mw),e(gt,vn),e(vn,zw),e(vn,Sc),e(Sc,qw),e(vn,Pw),e(vn,Qh),e(Qh,jw),e(vn,Cw),e(gt,Nw),M(Es,gt,null),e(gt,Iw),e(gt,Kh),e(Kh,Dw),e(gt,Lw),M(Ya,gt,null),b(i,M_,y),b(i,bn,y),e(bn,Ms),e(Ms,Jh),M(Za,Jh,null),e(bn,Aw),e(bn,Gh),e(Gh,Sw),b(i,z_,y),b(i,lt,y),M(ei,lt,null),e(lt,Ow),e(lt,Xh),e(Xh,Uw),e(lt,Ww),e(lt,ti),e(ti,Hw),e(ti,Yh),e(Yh,Rw),e(ti,Vw),e(lt,Qw),e(lt,oi),e(oi,Kw),e(oi,ni),e(ni,Jw),e(oi,Gw),e(lt,Xw),e(lt,He),M(si,He,null),e(He,Yw),e(He,kn),e(kn,Zw),e(kn,Oc),e(Oc,e0),e(kn,t0),e(kn,Zh),e(Zh,o0),e(kn,n0),e(He,s0),M(zs,He,null),e(He,r0),e(He,ef),e(ef,a0),e(He,i0),M(ri,He,null),e(He,l0),e(He,tf),e(tf,d0),e(He,c0),M(ai,He,null),b(i,q_,y),b(i,yn,y),e(yn,qs),e(qs,of),M(ii,of,null),e(yn,p0),e(yn,nf),e(nf,h0),b(i,P_,y),b(i,dt,y),M(li,dt,null),e(dt,f0),e(dt,sf),e(sf,u0),e(dt,m0),e(dt,di),e(di,g0),e(di,rf),e(rf,_0),e(di,v0),e(dt,b0),e(dt,ci),e(ci,k0),e(ci,pi),e(pi,y0),e(ci,T0),e(dt,w0),e(dt,_t),M(hi,_t,null),e(_t,$0),e(_t,Tn),e(Tn,F0),e(Tn,Uc),e(Uc,x0),e(Tn,B0),e(Tn,af),e(af,E0),e(Tn,M0),e(_t,z0),M(Ps,_t,null),e(_t,q0),e(_t,lf),e(lf,P0),e(_t,j0),M(fi,_t,null),b(i,j_,y),b(i,wn,y),e(wn,js),e(js,df),M(ui,df,null),e(wn,C0),e(wn,cf),e(cf,N0),b(i,C_,y),b(i,ct,y),M(mi,ct,null),e(ct,I0),e(ct,pf),e(pf,D0),e(ct,L0),e(ct,gi),e(gi,A0),e(gi,hf),e(hf,S0),e(gi,O0),e(ct,U0),e(ct,_i),e(_i,W0),e(_i,vi),e(vi,H0),e(_i,R0),e(ct,V0),e(ct,vt),M(bi,vt,null),e(vt,Q0),e(vt,$n),e($n,K0),e($n,Wc),e(Wc,J0),e($n,G0),e($n,ff),e(ff,X0),e($n,Y0),e(vt,Z0),M(Cs,vt,null),e(vt,e2),e(vt,uf),e(uf,t2),e(vt,o2),M(ki,vt,null),b(i,N_,y),b(i,Fn,y),e(Fn,Ns),e(Ns,mf),M(yi,mf,null),e(Fn,n2),e(Fn,gf),e(gf,s2),b(i,I_,y),b(i,pt,y),M(Ti,pt,null),e(pt,r2),e(pt,xn),e(xn,a2),e(xn,_f),e(_f,i2),e(xn,l2),e(xn,vf),e(vf,d2),e(xn,c2),e(pt,p2),e(pt,wi),e(wi,h2),e(wi,bf),e(bf,f2),e(wi,u2),e(pt,m2),e(pt,$i),e($i,g2),e($i,Fi),e(Fi,_2),e($i,v2),e(pt,b2),e(pt,bt),M(xi,bt,null),e(bt,k2),e(bt,Bn),e(Bn,y2),e(Bn,Hc),e(Hc,T2),e(Bn,w2),e(Bn,kf),e(kf,$2),e(Bn,F2),e(bt,x2),M(Is,bt,null),e(bt,B2),e(bt,yf),e(yf,E2),e(bt,M2),M(Bi,bt,null),b(i,D_,y),b(i,En,y),e(En,Ds),e(Ds,Tf),M(Ei,Tf,null),e(En,z2),e(En,wf),e(wf,q2),b(i,L_,y),b(i,Ve,y),M(Mi,Ve,null),e(Ve,P2),e(Ve,$f),e($f,j2),e(Ve,C2),e(Ve,zi),e(zi,N2),e(zi,Ff),e(Ff,I2),e(zi,D2),e(Ve,L2),e(Ve,qi),e(qi,A2),e(qi,Pi),e(Pi,S2),e(qi,O2),e(Ve,U2),M(Ls,Ve,null),e(Ve,W2),e(Ve,kt),M(ji,kt,null),e(kt,H2),e(kt,Mn),e(Mn,R2),e(Mn,Rc),e(Rc,V2),e(Mn,Q2),e(Mn,xf),e(xf,K2),e(Mn,J2),e(kt,G2),M(As,kt,null),e(kt,X2),e(kt,Bf),e(Bf,Y2),e(kt,Z2),M(Ci,kt,null),b(i,A_,y),b(i,zn,y),e(zn,Ss),e(Ss,Ef),M(Ni,Ef,null),e(zn,e$),e(zn,Mf),e(Mf,t$),b(i,S_,y),b(i,Qe,y),M(Ii,Qe,null),e(Qe,o$),e(Qe,qn),e(qn,n$),e(qn,zf),e(zf,s$),e(qn,r$),e(qn,qf),e(qf,a$),e(qn,i$),e(Qe,l$),e(Qe,Di),e(Di,d$),e(Di,Pf),e(Pf,c$),e(Di,p$),e(Qe,h$),e(Qe,Li),e(Li,f$),e(Li,Ai),e(Ai,u$),e(Li,m$),e(Qe,g$),M(Os,Qe,null),e(Qe,_$),e(Qe,yt),M(Si,yt,null),e(yt,v$),e(yt,Pn),e(Pn,b$),e(Pn,Vc),e(Vc,k$),e(Pn,y$),e(Pn,jf),e(jf,T$),e(Pn,w$),e(yt,$$),M(Us,yt,null),e(yt,F$),e(yt,Cf),e(Cf,x$),e(yt,B$),M(Oi,yt,null),b(i,O_,y),b(i,jn,y),e(jn,Ws),e(Ws,Nf),M(Ui,Nf,null),e(jn,E$),e(jn,If),e(If,M$),b(i,U_,y),b(i,Cn,y),M(Wi,Cn,null),e(Cn,z$),e(Cn,et),M(Hi,et,null),e(et,q$),e(et,Ne),e(Ne,P$),e(Ne,Df),e(Df,j$),e(Ne,C$),e(Ne,Lf),e(Lf,N$),e(Ne,I$),e(Ne,Af),e(Af,D$),e(Ne,L$),e(Ne,Sf),e(Sf,A$),e(Ne,S$),e(Ne,Of),e(Of,O$),e(Ne,U$),e(Ne,Uf),e(Uf,W$),e(Ne,H$),e(Ne,Wf),e(Wf,R$),e(Ne,V$),e(et,Q$),e(et,Ri),e(Ri,Vi),e(Vi,K$),e(Vi,Hf),e(Hf,J$),e(Vi,G$),e(Ri,X$),e(Ri,Qi),e(Qi,Y$),e(Qi,Rf),e(Rf,Z$),e(Qi,eF),e(et,tF),e(et,de),e(de,oF),e(de,Vf),e(Vf,nF),e(de,sF),e(de,Qf),e(Qf,rF),e(de,aF),e(de,Kf),e(Kf,iF),e(de,lF),e(de,Jf),e(Jf,dF),e(de,cF),e(de,Gf),e(Gf,pF),e(de,hF),e(de,Xf),e(Xf,fF),e(de,uF),e(de,Yf),e(Yf,mF),e(de,gF),e(de,Zf),e(Zf,_F),e(de,vF),e(de,eu),e(eu,bF),e(de,kF),e(de,tu),e(tu,yF),e(de,TF),e(de,ou),e(ou,wF),e(de,$F),e(de,nu),e(nu,FF),e(de,xF),e(de,su),e(su,BF),e(de,EF),e(de,ru),e(ru,MF),e(de,zF),e(de,au),e(au,qF),e(de,PF),e(de,iu),e(iu,jF),e(de,CF),e(de,lu),e(lu,NF),e(de,IF),e(de,du),e(du,DF),e(de,LF),e(de,cu),e(cu,AF),e(de,SF),e(de,pu),e(pu,OF),e(de,UF),e(et,WF),e(et,hu),e(hu,HF),e(et,RF),M(Ki,et,null),b(i,W_,y),b(i,Nn,y),e(Nn,Hs),e(Hs,fu),M(Ji,fu,null),e(Nn,VF),e(Nn,uu),e(uu,QF),b(i,H_,y),b(i,Ke,y),M(Gi,Ke,null),e(Ke,KF),e(Ke,Xi),e(Xi,JF),e(Xi,mu),e(mu,GF),e(Xi,XF),e(Ke,YF),e(Ke,Yi),e(Yi,ZF),e(Yi,gu),e(gu,ex),e(Yi,tx),e(Ke,ox),e(Ke,Zi),e(Zi,nx),e(Zi,el),e(el,sx),e(Zi,rx),e(Ke,ax),M(Rs,Ke,null),e(Ke,ix),e(Ke,Tt),M(tl,Tt,null),e(Tt,lx),e(Tt,In),e(In,dx),e(In,Qc),e(Qc,cx),e(In,px),e(In,_u),e(_u,hx),e(In,fx),e(Tt,ux),M(Vs,Tt,null),e(Tt,mx),e(Tt,vu),e(vu,gx),e(Tt,_x),M(ol,Tt,null),b(i,R_,y),b(i,Dn,y),e(Dn,Qs),e(Qs,bu),M(nl,bu,null),e(Dn,vx),e(Dn,ku),e(ku,bx),b(i,V_,y),b(i,Je,y),M(sl,Je,null),e(Je,kx),e(Je,rl),e(rl,yx),e(rl,yu),e(yu,Tx),e(rl,wx),e(Je,$x),e(Je,al),e(al,Fx),e(al,Tu),e(Tu,xx),e(al,Bx),e(Je,Ex),e(Je,il),e(il,Mx),e(il,ll),e(ll,zx),e(il,qx),e(Je,Px),M(Ks,Je,null),e(Je,jx),e(Je,wt),M(dl,wt,null),e(wt,Cx),e(wt,Ln),e(Ln,Nx),e(Ln,Kc),e(Kc,Ix),e(Ln,Dx),e(Ln,wu),e(wu,Lx),e(Ln,Ax),e(wt,Sx),M(Js,wt,null),e(wt,Ox),e(wt,$u),e($u,Ux),e(wt,Wx),M(cl,wt,null),b(i,Q_,y),b(i,An,y),e(An,Gs),e(Gs,Fu),M(pl,Fu,null),e(An,Hx),e(An,xu),e(xu,Rx),b(i,K_,y),b(i,Ge,y),M(hl,Ge,null),e(Ge,Vx),e(Ge,Bu),e(Bu,Qx),e(Ge,Kx),e(Ge,fl),e(fl,Jx),e(fl,Eu),e(Eu,Gx),e(fl,Xx),e(Ge,Yx),e(Ge,ul),e(ul,Zx),e(ul,ml),e(ml,eB),e(ul,tB),e(Ge,oB),M(Xs,Ge,null),e(Ge,nB),e(Ge,$t),M(gl,$t,null),e($t,sB),e($t,Sn),e(Sn,rB),e(Sn,Jc),e(Jc,aB),e(Sn,iB),e(Sn,Mu),e(Mu,lB),e(Sn,dB),e($t,cB),M(Ys,$t,null),e($t,pB),e($t,zu),e(zu,hB),e($t,fB),M(_l,$t,null),b(i,J_,y),b(i,On,y),e(On,Zs),e(Zs,qu),M(vl,qu,null),e(On,uB),e(On,Pu),e(Pu,mB),b(i,G_,y),b(i,Xe,y),M(bl,Xe,null),e(Xe,gB),e(Xe,ju),e(ju,_B),e(Xe,vB),e(Xe,kl),e(kl,bB),e(kl,Cu),e(Cu,kB),e(kl,yB),e(Xe,TB),e(Xe,yl),e(yl,wB),e(yl,Tl),e(Tl,$B),e(yl,FB),e(Xe,xB),M(er,Xe,null),e(Xe,BB),e(Xe,Ft),M(wl,Ft,null),e(Ft,EB),e(Ft,Un),e(Un,MB),e(Un,Gc),e(Gc,zB),e(Un,qB),e(Un,Nu),e(Nu,PB),e(Un,jB),e(Ft,CB),M(tr,Ft,null),e(Ft,NB),e(Ft,Iu),e(Iu,IB),e(Ft,DB),M($l,Ft,null),b(i,X_,y),b(i,Wn,y),e(Wn,or),e(or,Du),M(Fl,Du,null),e(Wn,LB),e(Wn,Lu),e(Lu,AB),b(i,Y_,y),b(i,Ye,y),M(xl,Ye,null),e(Ye,SB),e(Ye,Au),e(Au,OB),e(Ye,UB),e(Ye,Bl),e(Bl,WB),e(Bl,Su),e(Su,HB),e(Bl,RB),e(Ye,VB),e(Ye,El),e(El,QB),e(El,Ml),e(Ml,KB),e(El,JB),e(Ye,GB),M(nr,Ye,null),e(Ye,XB),e(Ye,xt),M(zl,xt,null),e(xt,YB),e(xt,Hn),e(Hn,ZB),e(Hn,Xc),e(Xc,eE),e(Hn,tE),e(Hn,Ou),e(Ou,oE),e(Hn,nE),e(xt,sE),M(sr,xt,null),e(xt,rE),e(xt,Uu),e(Uu,aE),e(xt,iE),M(ql,xt,null),b(i,Z_,y),b(i,Rn,y),e(Rn,rr),e(rr,Wu),M(Pl,Wu,null),e(Rn,lE),e(Rn,Hu),e(Hu,dE),b(i,ev,y),b(i,Ze,y),M(jl,Ze,null),e(Ze,cE),e(Ze,Vn),e(Vn,pE),e(Vn,Ru),e(Ru,hE),e(Vn,fE),e(Vn,Vu),e(Vu,uE),e(Vn,mE),e(Ze,gE),e(Ze,Cl),e(Cl,_E),e(Cl,Qu),e(Qu,vE),e(Cl,bE),e(Ze,kE),e(Ze,Nl),e(Nl,yE),e(Nl,Il),e(Il,TE),e(Nl,wE),e(Ze,$E),M(ar,Ze,null),e(Ze,FE),e(Ze,Bt),M(Dl,Bt,null),e(Bt,xE),e(Bt,Qn),e(Qn,BE),e(Qn,Yc),e(Yc,EE),e(Qn,ME),e(Qn,Ku),e(Ku,zE),e(Qn,qE),e(Bt,PE),M(ir,Bt,null),e(Bt,jE),e(Bt,Ju),e(Ju,CE),e(Bt,NE),M(Ll,Bt,null),b(i,tv,y),b(i,Kn,y),e(Kn,lr),e(lr,Gu),M(Al,Gu,null),e(Kn,IE),e(Kn,Xu),e(Xu,DE),b(i,ov,y),b(i,Ie,y),M(Sl,Ie,null),e(Ie,LE),e(Ie,Yu),e(Yu,AE),e(Ie,SE),e(Ie,Ol),e(Ol,OE),e(Ol,Zu),e(Zu,UE),e(Ol,WE),e(Ie,HE),e(Ie,Ul),e(Ul,RE),e(Ul,Wl),e(Wl,VE),e(Ul,QE),e(Ie,KE),e(Ie,em),e(em,JE),e(Ie,GE),e(Ie,lo),e(lo,tm),e(tm,Hl),e(Hl,XE),e(lo,YE),e(lo,om),e(om,Rl),e(Rl,ZE),e(lo,e4),e(lo,nm),e(nm,Vl),e(Vl,t4),e(lo,o4),e(lo,sm),e(sm,Ql),e(Ql,n4),e(Ie,s4),e(Ie,Et),M(Kl,Et,null),e(Et,r4),e(Et,Jn),e(Jn,a4),e(Jn,rm),e(rm,i4),e(Jn,l4),e(Jn,am),e(am,d4),e(Jn,c4),e(Et,p4),M(dr,Et,null),e(Et,h4),e(Et,im),e(im,f4),e(Et,u4),M(Jl,Et,null),b(i,nv,y),b(i,Gn,y),e(Gn,cr),e(cr,lm),M(Gl,lm,null),e(Gn,m4),e(Gn,dm),e(dm,g4),b(i,sv,y),b(i,De,y),M(Xl,De,null),e(De,_4),e(De,Xn),e(Xn,v4),e(Xn,cm),e(cm,b4),e(Xn,k4),e(Xn,pm),e(pm,y4),e(Xn,T4),e(De,w4),e(De,Yl),e(Yl,$4),e(Yl,hm),e(hm,F4),e(Yl,x4),e(De,B4),e(De,Zl),e(Zl,E4),e(Zl,ed),e(ed,M4),e(Zl,z4),e(De,q4),e(De,fm),e(fm,P4),e(De,j4),e(De,co),e(co,um),e(um,td),e(td,C4),e(co,N4),e(co,mm),e(mm,od),e(od,I4),e(co,D4),e(co,gm),e(gm,nd),e(nd,L4),e(co,A4),e(co,_m),e(_m,sd),e(sd,S4),e(De,O4),e(De,Mt),M(rd,Mt,null),e(Mt,U4),e(Mt,Yn),e(Yn,W4),e(Yn,vm),e(vm,H4),e(Yn,R4),e(Yn,bm),e(bm,V4),e(Yn,Q4),e(Mt,K4),M(pr,Mt,null),e(Mt,J4),e(Mt,km),e(km,G4),e(Mt,X4),M(ad,Mt,null),b(i,rv,y),b(i,Zn,y),e(Zn,hr),e(hr,ym),M(id,ym,null),e(Zn,Y4),e(Zn,Tm),e(Tm,Z4),b(i,av,y),b(i,Le,y),M(ld,Le,null),e(Le,eM),e(Le,dd),e(dd,tM),e(dd,wm),e(wm,oM),e(dd,nM),e(Le,sM),e(Le,cd),e(cd,rM),e(cd,$m),e($m,aM),e(cd,iM),e(Le,lM),e(Le,pd),e(pd,dM),e(pd,hd),e(hd,cM),e(pd,pM),e(Le,hM),e(Le,Fm),e(Fm,fM),e(Le,uM),e(Le,po),e(po,xm),e(xm,fd),e(fd,mM),e(po,gM),e(po,Bm),e(Bm,ud),e(ud,_M),e(po,vM),e(po,Em),e(Em,md),e(md,bM),e(po,kM),e(po,Mm),e(Mm,gd),e(gd,yM),e(Le,TM),e(Le,zt),M(_d,zt,null),e(zt,wM),e(zt,es),e(es,$M),e(es,zm),e(zm,FM),e(es,xM),e(es,qm),e(qm,BM),e(es,EM),e(zt,MM),M(fr,zt,null),e(zt,zM),e(zt,Pm),e(Pm,qM),e(zt,PM),M(vd,zt,null),b(i,iv,y),b(i,ts,y),e(ts,ur),e(ur,jm),M(bd,jm,null),e(ts,jM),e(ts,Cm),e(Cm,CM),b(i,lv,y),b(i,Ae,y),M(kd,Ae,null),e(Ae,NM),e(Ae,yd),e(yd,IM),e(yd,Nm),e(Nm,DM),e(yd,LM),e(Ae,AM),e(Ae,Td),e(Td,SM),e(Td,Im),e(Im,OM),e(Td,UM),e(Ae,WM),e(Ae,wd),e(wd,HM),e(wd,$d),e($d,RM),e(wd,VM),e(Ae,QM),e(Ae,Dm),e(Dm,KM),e(Ae,JM),e(Ae,ho),e(ho,Lm),e(Lm,Fd),e(Fd,GM),e(ho,XM),e(ho,Am),e(Am,xd),e(xd,YM),e(ho,ZM),e(ho,Sm),e(Sm,Bd),e(Bd,ez),e(ho,tz),e(ho,Om),e(Om,Ed),e(Ed,oz),e(Ae,nz),e(Ae,qt),M(Md,qt,null),e(qt,sz),e(qt,os),e(os,rz),e(os,Um),e(Um,az),e(os,iz),e(os,Wm),e(Wm,lz),e(os,dz),e(qt,cz),M(mr,qt,null),e(qt,pz),e(qt,Hm),e(Hm,hz),e(qt,fz),M(zd,qt,null),b(i,dv,y),b(i,ns,y),e(ns,gr),e(gr,Rm),M(qd,Rm,null),e(ns,uz),e(ns,Vm),e(Vm,mz),b(i,cv,y),b(i,Se,y),M(Pd,Se,null),e(Se,gz),e(Se,Qm),e(Qm,_z),e(Se,vz),e(Se,jd),e(jd,bz),e(jd,Km),e(Km,kz),e(jd,yz),e(Se,Tz),e(Se,Cd),e(Cd,wz),e(Cd,Nd),e(Nd,$z),e(Cd,Fz),e(Se,xz),e(Se,Jm),e(Jm,Bz),e(Se,Ez),e(Se,fo),e(fo,Gm),e(Gm,Id),e(Id,Mz),e(fo,zz),e(fo,Xm),e(Xm,Dd),e(Dd,qz),e(fo,Pz),e(fo,Ym),e(Ym,Ld),e(Ld,jz),e(fo,Cz),e(fo,Zm),e(Zm,Ad),e(Ad,Nz),e(Se,Iz),e(Se,Pt),M(Sd,Pt,null),e(Pt,Dz),e(Pt,ss),e(ss,Lz),e(ss,eg),e(eg,Az),e(ss,Sz),e(ss,tg),e(tg,Oz),e(ss,Uz),e(Pt,Wz),M(_r,Pt,null),e(Pt,Hz),e(Pt,og),e(og,Rz),e(Pt,Vz),M(Od,Pt,null),b(i,pv,y),b(i,rs,y),e(rs,vr),e(vr,ng),M(Ud,ng,null),e(rs,Qz),e(rs,sg),e(sg,Kz),b(i,hv,y),b(i,Oe,y),M(Wd,Oe,null),e(Oe,Jz),e(Oe,rg),e(rg,Gz),e(Oe,Xz),e(Oe,Hd),e(Hd,Yz),e(Hd,ag),e(ag,Zz),e(Hd,eq),e(Oe,tq),e(Oe,Rd),e(Rd,oq),e(Rd,Vd),e(Vd,nq),e(Rd,sq),e(Oe,rq),e(Oe,ig),e(ig,aq),e(Oe,iq),e(Oe,uo),e(uo,lg),e(lg,Qd),e(Qd,lq),e(uo,dq),e(uo,dg),e(dg,Kd),e(Kd,cq),e(uo,pq),e(uo,cg),e(cg,Jd),e(Jd,hq),e(uo,fq),e(uo,pg),e(pg,Gd),e(Gd,uq),e(Oe,mq),e(Oe,jt),M(Xd,jt,null),e(jt,gq),e(jt,as),e(as,_q),e(as,hg),e(hg,vq),e(as,bq),e(as,fg),e(fg,kq),e(as,yq),e(jt,Tq),M(br,jt,null),e(jt,wq),e(jt,ug),e(ug,$q),e(jt,Fq),M(Yd,jt,null),b(i,fv,y),b(i,is,y),e(is,kr),e(kr,mg),M(Zd,mg,null),e(is,xq),e(is,gg),e(gg,Bq),b(i,uv,y),b(i,Ue,y),M(ec,Ue,null),e(Ue,Eq),e(Ue,_g),e(_g,Mq),e(Ue,zq),e(Ue,tc),e(tc,qq),e(tc,vg),e(vg,Pq),e(tc,jq),e(Ue,Cq),e(Ue,oc),e(oc,Nq),e(oc,nc),e(nc,Iq),e(oc,Dq),e(Ue,Lq),e(Ue,bg),e(bg,Aq),e(Ue,Sq),e(Ue,mo),e(mo,kg),e(kg,sc),e(sc,Oq),e(mo,Uq),e(mo,yg),e(yg,rc),e(rc,Wq),e(mo,Hq),e(mo,Tg),e(Tg,ac),e(ac,Rq),e(mo,Vq),e(mo,wg),e(wg,ic),e(ic,Qq),e(Ue,Kq),e(Ue,Ct),M(lc,Ct,null),e(Ct,Jq),e(Ct,ls),e(ls,Gq),e(ls,$g),e($g,Xq),e(ls,Yq),e(ls,Fg),e(Fg,Zq),e(ls,eP),e(Ct,tP),M(yr,Ct,null),e(Ct,oP),e(Ct,xg),e(xg,nP),e(Ct,sP),M(dc,Ct,null),b(i,mv,y),b(i,ds,y),e(ds,Tr),e(Tr,Bg),M(cc,Bg,null),e(ds,rP),e(ds,Eg),e(Eg,aP),b(i,gv,y),b(i,We,y),M(pc,We,null),e(We,iP),e(We,cs),e(cs,lP),e(cs,Mg),e(Mg,dP),e(cs,cP),e(cs,zg),e(zg,pP),e(cs,hP),e(We,fP),e(We,hc),e(hc,uP),e(hc,qg),e(qg,mP),e(hc,gP),e(We,_P),e(We,fc),e(fc,vP),e(fc,uc),e(uc,bP),e(fc,kP),e(We,yP),e(We,Pg),e(Pg,TP),e(We,wP),e(We,go),e(go,jg),e(jg,mc),e(mc,$P),e(go,FP),e(go,Cg),e(Cg,gc),e(gc,xP),e(go,BP),e(go,Ng),e(Ng,_c),e(_c,EP),e(go,MP),e(go,Ig),e(Ig,vc),e(vc,zP),e(We,qP),e(We,Nt),M(bc,Nt,null),e(Nt,PP),e(Nt,ps),e(ps,jP),e(ps,Dg),e(Dg,CP),e(ps,NP),e(ps,Lg),e(Lg,IP),e(ps,DP),e(Nt,LP),M(wr,Nt,null),e(Nt,AP),e(Nt,Ag),e(Ag,SP),e(Nt,OP),M(kc,Nt,null),_v=!0},p(i,[y]){const yc={};y&2&&(yc.$$scope={dirty:y,ctx:i}),ks.$set(yc);const Sg={};y&2&&(Sg.$$scope={dirty:y,ctx:i}),Ts.$set(Sg);const Og={};y&2&&(Og.$$scope={dirty:y,ctx:i}),$s.$set(Og);const Ug={};y&2&&(Ug.$$scope={dirty:y,ctx:i}),xs.$set(Ug);const Tc={};y&2&&(Tc.$$scope={dirty:y,ctx:i}),Es.$set(Tc);const Wg={};y&2&&(Wg.$$scope={dirty:y,ctx:i}),zs.$set(Wg);const Hg={};y&2&&(Hg.$$scope={dirty:y,ctx:i}),Ps.$set(Hg);const Rg={};y&2&&(Rg.$$scope={dirty:y,ctx:i}),Cs.$set(Rg);const wc={};y&2&&(wc.$$scope={dirty:y,ctx:i}),Is.$set(wc);const Vg={};y&2&&(Vg.$$scope={dirty:y,ctx:i}),Ls.$set(Vg);const Qg={};y&2&&(Qg.$$scope={dirty:y,ctx:i}),As.$set(Qg);const Kg={};y&2&&(Kg.$$scope={dirty:y,ctx:i}),Os.$set(Kg);const Jg={};y&2&&(Jg.$$scope={dirty:y,ctx:i}),Us.$set(Jg);const Gg={};y&2&&(Gg.$$scope={dirty:y,ctx:i}),Rs.$set(Gg);const Xg={};y&2&&(Xg.$$scope={dirty:y,ctx:i}),Vs.$set(Xg);const Yg={};y&2&&(Yg.$$scope={dirty:y,ctx:i}),Ks.$set(Yg);const $c={};y&2&&($c.$$scope={dirty:y,ctx:i}),Js.$set($c);const Zg={};y&2&&(Zg.$$scope={dirty:y,ctx:i}),Xs.$set(Zg);const e_={};y&2&&(e_.$$scope={dirty:y,ctx:i}),Ys.$set(e_);const hs={};y&2&&(hs.$$scope={dirty:y,ctx:i}),er.$set(hs);const t_={};y&2&&(t_.$$scope={dirty:y,ctx:i}),tr.$set(t_);const o_={};y&2&&(o_.$$scope={dirty:y,ctx:i}),nr.$set(o_);const Fc={};y&2&&(Fc.$$scope={dirty:y,ctx:i}),sr.$set(Fc);const n_={};y&2&&(n_.$$scope={dirty:y,ctx:i}),ar.$set(n_);const s_={};y&2&&(s_.$$scope={dirty:y,ctx:i}),ir.$set(s_);const r_={};y&2&&(r_.$$scope={dirty:y,ctx:i}),dr.$set(r_);const Kt={};y&2&&(Kt.$$scope={dirty:y,ctx:i}),pr.$set(Kt);const _o={};y&2&&(_o.$$scope={dirty:y,ctx:i}),fr.$set(_o);const a_={};y&2&&(a_.$$scope={dirty:y,ctx:i}),mr.$set(a_);const i_={};y&2&&(i_.$$scope={dirty:y,ctx:i}),_r.$set(i_);const l_={};y&2&&(l_.$$scope={dirty:y,ctx:i}),br.$set(l_);const fs={};y&2&&(fs.$$scope={dirty:y,ctx:i}),yr.$set(fs);const d_={};y&2&&(d_.$$scope={dirty:y,ctx:i}),wr.$set(d_)},i(i){_v||($(m.$$.fragment,i),$(U.$$.fragment,i),$(Be.$$.fragment,i),$(Lr.$$.fragment,i),$(Sr.$$.fragment,i),$(Or.$$.fragment,i),$(Ur.$$.fragment,i),$(Hr.$$.fragment,i),$(Vr.$$.fragment,i),$(Kr.$$.fragment,i),$(Jr.$$.fragment,i),$(Gr.$$.fragment,i),$(Xr.$$.fragment,i),$(Yr.$$.fragment,i),$(ta.$$.fragment,i),$(na.$$.fragment,i),$(sa.$$.fragment,i),$(ra.$$.fragment,i),$(aa.$$.fragment,i),$(la.$$.fragment,i),$(ca.$$.fragment,i),$(ha.$$.fragment,i),$(fa.$$.fragment,i),$(ua.$$.fragment,i),$(ka.$$.fragment,i),$(ks.$$.fragment,i),$(ya.$$.fragment,i),$(Ta.$$.fragment,i),$(wa.$$.fragment,i),$(Ba.$$.fragment,i),$(Ts.$$.fragment,i),$(Ea.$$.fragment,i),$(Ma.$$.fragment,i),$(za.$$.fragment,i),$(Na.$$.fragment,i),$($s.$$.fragment,i),$(Ia.$$.fragment,i),$(Da.$$.fragment,i),$(La.$$.fragment,i),$(Wa.$$.fragment,i),$(xs.$$.fragment,i),$(Ha.$$.fragment,i),$(Ra.$$.fragment,i),$(Va.$$.fragment,i),$(Xa.$$.fragment,i),$(Es.$$.fragment,i),$(Ya.$$.fragment,i),$(Za.$$.fragment,i),$(ei.$$.fragment,i),$(si.$$.fragment,i),$(zs.$$.fragment,i),$(ri.$$.fragment,i),$(ai.$$.fragment,i),$(ii.$$.fragment,i),$(li.$$.fragment,i),$(hi.$$.fragment,i),$(Ps.$$.fragment,i),$(fi.$$.fragment,i),$(ui.$$.fragment,i),$(mi.$$.fragment,i),$(bi.$$.fragment,i),$(Cs.$$.fragment,i),$(ki.$$.fragment,i),$(yi.$$.fragment,i),$(Ti.$$.fragment,i),$(xi.$$.fragment,i),$(Is.$$.fragment,i),$(Bi.$$.fragment,i),$(Ei.$$.fragment,i),$(Mi.$$.fragment,i),$(Ls.$$.fragment,i),$(ji.$$.fragment,i),$(As.$$.fragment,i),$(Ci.$$.fragment,i),$(Ni.$$.fragment,i),$(Ii.$$.fragment,i),$(Os.$$.fragment,i),$(Si.$$.fragment,i),$(Us.$$.fragment,i),$(Oi.$$.fragment,i),$(Ui.$$.fragment,i),$(Wi.$$.fragment,i),$(Hi.$$.fragment,i),$(Ki.$$.fragment,i),$(Ji.$$.fragment,i),$(Gi.$$.fragment,i),$(Rs.$$.fragment,i),$(tl.$$.fragment,i),$(Vs.$$.fragment,i),$(ol.$$.fragment,i),$(nl.$$.fragment,i),$(sl.$$.fragment,i),$(Ks.$$.fragment,i),$(dl.$$.fragment,i),$(Js.$$.fragment,i),$(cl.$$.fragment,i),$(pl.$$.fragment,i),$(hl.$$.fragment,i),$(Xs.$$.fragment,i),$(gl.$$.fragment,i),$(Ys.$$.fragment,i),$(_l.$$.fragment,i),$(vl.$$.fragment,i),$(bl.$$.fragment,i),$(er.$$.fragment,i),$(wl.$$.fragment,i),$(tr.$$.fragment,i),$($l.$$.fragment,i),$(Fl.$$.fragment,i),$(xl.$$.fragment,i),$(nr.$$.fragment,i),$(zl.$$.fragment,i),$(sr.$$.fragment,i),$(ql.$$.fragment,i),$(Pl.$$.fragment,i),$(jl.$$.fragment,i),$(ar.$$.fragment,i),$(Dl.$$.fragment,i),$(ir.$$.fragment,i),$(Ll.$$.fragment,i),$(Al.$$.fragment,i),$(Sl.$$.fragment,i),$(Kl.$$.fragment,i),$(dr.$$.fragment,i),$(Jl.$$.fragment,i),$(Gl.$$.fragment,i),$(Xl.$$.fragment,i),$(rd.$$.fragment,i),$(pr.$$.fragment,i),$(ad.$$.fragment,i),$(id.$$.fragment,i),$(ld.$$.fragment,i),$(_d.$$.fragment,i),$(fr.$$.fragment,i),$(vd.$$.fragment,i),$(bd.$$.fragment,i),$(kd.$$.fragment,i),$(Md.$$.fragment,i),$(mr.$$.fragment,i),$(zd.$$.fragment,i),$(qd.$$.fragment,i),$(Pd.$$.fragment,i),$(Sd.$$.fragment,i),$(_r.$$.fragment,i),$(Od.$$.fragment,i),$(Ud.$$.fragment,i),$(Wd.$$.fragment,i),$(Xd.$$.fragment,i),$(br.$$.fragment,i),$(Yd.$$.fragment,i),$(Zd.$$.fragment,i),$(ec.$$.fragment,i),$(lc.$$.fragment,i),$(yr.$$.fragment,i),$(dc.$$.fragment,i),$(cc.$$.fragment,i),$(pc.$$.fragment,i),$(bc.$$.fragment,i),$(wr.$$.fragment,i),$(kc.$$.fragment,i),_v=!0)},o(i){F(m.$$.fragment,i),F(U.$$.fragment,i),F(Be.$$.fragment,i),F(Lr.$$.fragment,i),F(Sr.$$.fragment,i),F(Or.$$.fragment,i),F(Ur.$$.fragment,i),F(Hr.$$.fragment,i),F(Vr.$$.fragment,i),F(Kr.$$.fragment,i),F(Jr.$$.fragment,i),F(Gr.$$.fragment,i),F(Xr.$$.fragment,i),F(Yr.$$.fragment,i),F(ta.$$.fragment,i),F(na.$$.fragment,i),F(sa.$$.fragment,i),F(ra.$$.fragment,i),F(aa.$$.fragment,i),F(la.$$.fragment,i),F(ca.$$.fragment,i),F(ha.$$.fragment,i),F(fa.$$.fragment,i),F(ua.$$.fragment,i),F(ka.$$.fragment,i),F(ks.$$.fragment,i),F(ya.$$.fragment,i),F(Ta.$$.fragment,i),F(wa.$$.fragment,i),F(Ba.$$.fragment,i),F(Ts.$$.fragment,i),F(Ea.$$.fragment,i),F(Ma.$$.fragment,i),F(za.$$.fragment,i),F(Na.$$.fragment,i),F($s.$$.fragment,i),F(Ia.$$.fragment,i),F(Da.$$.fragment,i),F(La.$$.fragment,i),F(Wa.$$.fragment,i),F(xs.$$.fragment,i),F(Ha.$$.fragment,i),F(Ra.$$.fragment,i),F(Va.$$.fragment,i),F(Xa.$$.fragment,i),F(Es.$$.fragment,i),F(Ya.$$.fragment,i),F(Za.$$.fragment,i),F(ei.$$.fragment,i),F(si.$$.fragment,i),F(zs.$$.fragment,i),F(ri.$$.fragment,i),F(ai.$$.fragment,i),F(ii.$$.fragment,i),F(li.$$.fragment,i),F(hi.$$.fragment,i),F(Ps.$$.fragment,i),F(fi.$$.fragment,i),F(ui.$$.fragment,i),F(mi.$$.fragment,i),F(bi.$$.fragment,i),F(Cs.$$.fragment,i),F(ki.$$.fragment,i),F(yi.$$.fragment,i),F(Ti.$$.fragment,i),F(xi.$$.fragment,i),F(Is.$$.fragment,i),F(Bi.$$.fragment,i),F(Ei.$$.fragment,i),F(Mi.$$.fragment,i),F(Ls.$$.fragment,i),F(ji.$$.fragment,i),F(As.$$.fragment,i),F(Ci.$$.fragment,i),F(Ni.$$.fragment,i),F(Ii.$$.fragment,i),F(Os.$$.fragment,i),F(Si.$$.fragment,i),F(Us.$$.fragment,i),F(Oi.$$.fragment,i),F(Ui.$$.fragment,i),F(Wi.$$.fragment,i),F(Hi.$$.fragment,i),F(Ki.$$.fragment,i),F(Ji.$$.fragment,i),F(Gi.$$.fragment,i),F(Rs.$$.fragment,i),F(tl.$$.fragment,i),F(Vs.$$.fragment,i),F(ol.$$.fragment,i),F(nl.$$.fragment,i),F(sl.$$.fragment,i),F(Ks.$$.fragment,i),F(dl.$$.fragment,i),F(Js.$$.fragment,i),F(cl.$$.fragment,i),F(pl.$$.fragment,i),F(hl.$$.fragment,i),F(Xs.$$.fragment,i),F(gl.$$.fragment,i),F(Ys.$$.fragment,i),F(_l.$$.fragment,i),F(vl.$$.fragment,i),F(bl.$$.fragment,i),F(er.$$.fragment,i),F(wl.$$.fragment,i),F(tr.$$.fragment,i),F($l.$$.fragment,i),F(Fl.$$.fragment,i),F(xl.$$.fragment,i),F(nr.$$.fragment,i),F(zl.$$.fragment,i),F(sr.$$.fragment,i),F(ql.$$.fragment,i),F(Pl.$$.fragment,i),F(jl.$$.fragment,i),F(ar.$$.fragment,i),F(Dl.$$.fragment,i),F(ir.$$.fragment,i),F(Ll.$$.fragment,i),F(Al.$$.fragment,i),F(Sl.$$.fragment,i),F(Kl.$$.fragment,i),F(dr.$$.fragment,i),F(Jl.$$.fragment,i),F(Gl.$$.fragment,i),F(Xl.$$.fragment,i),F(rd.$$.fragment,i),F(pr.$$.fragment,i),F(ad.$$.fragment,i),F(id.$$.fragment,i),F(ld.$$.fragment,i),F(_d.$$.fragment,i),F(fr.$$.fragment,i),F(vd.$$.fragment,i),F(bd.$$.fragment,i),F(kd.$$.fragment,i),F(Md.$$.fragment,i),F(mr.$$.fragment,i),F(zd.$$.fragment,i),F(qd.$$.fragment,i),F(Pd.$$.fragment,i),F(Sd.$$.fragment,i),F(_r.$$.fragment,i),F(Od.$$.fragment,i),F(Ud.$$.fragment,i),F(Wd.$$.fragment,i),F(Xd.$$.fragment,i),F(br.$$.fragment,i),F(Yd.$$.fragment,i),F(Zd.$$.fragment,i),F(ec.$$.fragment,i),F(lc.$$.fragment,i),F(yr.$$.fragment,i),F(dc.$$.fragment,i),F(cc.$$.fragment,i),F(pc.$$.fragment,i),F(bc.$$.fragment,i),F(wr.$$.fragment,i),F(kc.$$.fragment,i),_v=!1},d(i){t(l),i&&t(f),i&&t(h),z(m),i&&t(x),i&&t(w),z(U),i&&t(ce),i&&t(L),i&&t(A),i&&t(pe),i&&t(_e),i&&t(fe),i&&t(ge),i&&t(D),i&&t(he),i&&t(te),i&&t(oe),i&&t(G),i&&t(P),i&&t(Y),i&&t(Z),i&&t($e),z(Be),i&&t(c_),i&&t(ot),z(Lr),z(Sr),i&&t(p_),i&&t(en),z(Or),i&&t(h_),i&&t(je),z(Ur),z(Hr),z(Vr),z(Kr),z(Jr),z(Gr),i&&t(f_),i&&t(on),z(Xr),i&&t(u_),i&&t(nt),z(Yr),z(ta),z(na),z(sa),i&&t(m_),i&&t(sn),z(ra),i&&t(g_),i&&t(rn),z(aa),i&&t(__),i&&t(an),z(la),i&&t(v_),i&&t(io),z(ca),z(ha),i&&t(b_),i&&t(ln),z(fa),i&&t(k_),i&&t(Ce),z(ua),z(ka),z(ks),z(ya),i&&t(y_),i&&t(cn),z(Ta),i&&t(T_),i&&t(st),z(wa),z(Ba),z(Ts),z(Ea),i&&t(w_),i&&t(fn),z(Ma),i&&t($_),i&&t(rt),z(za),z(Na),z($s),z(Ia),i&&t(F_),i&&t(mn),z(Da),i&&t(x_),i&&t(at),z(La),z(Wa),z(xs),z(Ha),i&&t(B_),i&&t(_n),z(Ra),i&&t(E_),i&&t(it),z(Va),z(Xa),z(Es),z(Ya),i&&t(M_),i&&t(bn),z(Za),i&&t(z_),i&&t(lt),z(ei),z(si),z(zs),z(ri),z(ai),i&&t(q_),i&&t(yn),z(ii),i&&t(P_),i&&t(dt),z(li),z(hi),z(Ps),z(fi),i&&t(j_),i&&t(wn),z(ui),i&&t(C_),i&&t(ct),z(mi),z(bi),z(Cs),z(ki),i&&t(N_),i&&t(Fn),z(yi),i&&t(I_),i&&t(pt),z(Ti),z(xi),z(Is),z(Bi),i&&t(D_),i&&t(En),z(Ei),i&&t(L_),i&&t(Ve),z(Mi),z(Ls),z(ji),z(As),z(Ci),i&&t(A_),i&&t(zn),z(Ni),i&&t(S_),i&&t(Qe),z(Ii),z(Os),z(Si),z(Us),z(Oi),i&&t(O_),i&&t(jn),z(Ui),i&&t(U_),i&&t(Cn),z(Wi),z(Hi),z(Ki),i&&t(W_),i&&t(Nn),z(Ji),i&&t(H_),i&&t(Ke),z(Gi),z(Rs),z(tl),z(Vs),z(ol),i&&t(R_),i&&t(Dn),z(nl),i&&t(V_),i&&t(Je),z(sl),z(Ks),z(dl),z(Js),z(cl),i&&t(Q_),i&&t(An),z(pl),i&&t(K_),i&&t(Ge),z(hl),z(Xs),z(gl),z(Ys),z(_l),i&&t(J_),i&&t(On),z(vl),i&&t(G_),i&&t(Xe),z(bl),z(er),z(wl),z(tr),z($l),i&&t(X_),i&&t(Wn),z(Fl),i&&t(Y_),i&&t(Ye),z(xl),z(nr),z(zl),z(sr),z(ql),i&&t(Z_),i&&t(Rn),z(Pl),i&&t(ev),i&&t(Ze),z(jl),z(ar),z(Dl),z(ir),z(Ll),i&&t(tv),i&&t(Kn),z(Al),i&&t(ov),i&&t(Ie),z(Sl),z(Kl),z(dr),z(Jl),i&&t(nv),i&&t(Gn),z(Gl),i&&t(sv),i&&t(De),z(Xl),z(rd),z(pr),z(ad),i&&t(rv),i&&t(Zn),z(id),i&&t(av),i&&t(Le),z(ld),z(_d),z(fr),z(vd),i&&t(iv),i&&t(ts),z(bd),i&&t(lv),i&&t(Ae),z(kd),z(Md),z(mr),z(zd),i&&t(dv),i&&t(ns),z(qd),i&&t(cv),i&&t(Se),z(Pd),z(Sd),z(_r),z(Od),i&&t(pv),i&&t(rs),z(Ud),i&&t(hv),i&&t(Oe),z(Wd),z(Xd),z(br),z(Yd),i&&t(fv),i&&t(is),z(Zd),i&&t(uv),i&&t(Ue),z(ec),z(lc),z(yr),z(dc),i&&t(mv),i&&t(ds),z(cc),i&&t(gv),i&&t(We),z(pc),z(bc),z(wr),z(kc)}}}const I9={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function D9(k,l,f){let{fw:h}=l;return k.$$set=u=>{"fw"in u&&f(0,h=u.fw)},[h]}class O9 extends Nr{constructor(l){super();Ir(this,l,D9,N9,Dr,{fw:0})}}export{O9 as default,I9 as metadata};
