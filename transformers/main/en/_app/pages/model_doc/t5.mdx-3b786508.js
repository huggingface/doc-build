import{S as uw,i as mw,s as fw,e as o,k as d,w as f,t as r,M as _w,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as p,y as g,q as T,o as v,B as k,v as gw}from"../../chunks/vendor-6b77c823.js";import{T as zt}from"../../chunks/Tip-39098574.js";import{D as M}from"../../chunks/Docstring-abef54e3.js";import{C as R}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function Tw(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function vw(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function kw(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function bw(A){let u,$,b,w,z,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,be,ue,W,Fe,ye,P,Me,H,V,me,O,Pe,fe,N,Ce,U,Oe;return{c(){u=o("p"),$=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),z=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Fe=r("model(inputs_ids)"),ye=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),O=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),N=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),Oe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);$=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);z=s(te,"LI",{});var Se=a(z);x=i(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),y=l(te),q=s(te,"LI",{});var pt=a(q);qe=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var D=a(E);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var Ge=a(S);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(D,"."),D.forEach(t),B=l(m),I=s(m,"P",{});var ht=a(I);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var L=a(F);C=s(L,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Le=a(W);Fe=i(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),ye=l(L),P=s(L,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),O=s(Z,"CODE",{});var Ae=a(O);Pe=i(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),fe=l(L),N=s(L,"LI",{});var Ie=a(N);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(Ie,"CODE",{});var ft=a(U);Oe=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,w,j),e(w,z),e(z,x),e(w,y),e(w,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,S),e(S,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,W),e(W,Fe),e(F,ye),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,O),e(O,Pe),e(F,fe),e(F,N),e(N,Ce),e(N,U),e(U,Oe)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function yw(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function ww(A){let u,$,b,w,z,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,be,ue,W,Fe,ye,P,Me,H,V,me,O,Pe,fe,N,Ce,U,Oe;return{c(){u=o("p"),$=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),z=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Fe=r("model(inputs_ids)"),ye=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),O=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),N=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),Oe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);$=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);z=s(te,"LI",{});var Se=a(z);x=i(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),y=l(te),q=s(te,"LI",{});var pt=a(q);qe=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var D=a(E);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var Ge=a(S);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(D,"."),D.forEach(t),B=l(m),I=s(m,"P",{});var ht=a(I);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var L=a(F);C=s(L,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Le=a(W);Fe=i(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),ye=l(L),P=s(L,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),O=s(Z,"CODE",{});var Ae=a(O);Pe=i(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),fe=l(L),N=s(L,"LI",{});var Ie=a(N);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(Ie,"CODE",{});var ft=a(U);Oe=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,w,j),e(w,z),e(z,x),e(w,y),e(w,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,S),e(S,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,W),e(W,Fe),e(F,ye),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,O),e(O,Pe),e(F,fe),e(F,N),e(N,Ce),e(N,U),e(U,Oe)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function xw(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function zw(A){let u,$,b,w,z,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,be,ue,W,Fe,ye,P,Me,H,V,me,O,Pe,fe,N,Ce,U,Oe;return{c(){u=o("p"),$=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),z=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Fe=r("model(inputs_ids)"),ye=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),O=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),N=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),Oe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);$=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);z=s(te,"LI",{});var Se=a(z);x=i(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),y=l(te),q=s(te,"LI",{});var pt=a(q);qe=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var D=a(E);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var Ge=a(S);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(D,"."),D.forEach(t),B=l(m),I=s(m,"P",{});var ht=a(I);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var L=a(F);C=s(L,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Le=a(W);Fe=i(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),ye=l(L),P=s(L,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),O=s(Z,"CODE",{});var Ae=a(O);Pe=i(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),fe=l(L),N=s(L,"LI",{});var Ie=a(N);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(Ie,"CODE",{});var ft=a(U);Oe=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,w,j),e(w,z),e(z,x),e(w,y),e(w,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,S),e(S,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,W),e(W,Fe),e(F,ye),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,O),e(O,Pe),e(F,fe),e(F,N),e(N,Ce),e(N,U),e(U,Oe)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function $w(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function qw(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function Ew(A){let u,$,b,w,z;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);$=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,$),e(u,b),e(b,w),e(u,z)},d(x){x&&t(u)}}}function jw(A){let u,$,b,w,z,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,be,ue,W,Fe,ye,P,Me,H,V,me,O,Pe,fe,N,Ce,U,Oe,m,j,te,Se,pt,D,Ge,ne,ht,L,Y,ut,Le,Z,mt,Ae,Ie,ft,Vl,Xa,Dp,Kl,Be,di,li,To,Sp,Gp,ci,pi,vo,Bp,Wp,hi,ui,ko,Up,Rp,mi,fi,bo,Hp,Vp,_i,Qa,yo,Kp,Yp,Yl,er,Zp,Zl,$t,gi,zn,Ti,Jp,Xp,tr,Qp,eh,th,vi,$n,ki,nh,oh,nr,sh,ah,rh,bi,qn,yi,ih,dh,or,lh,ch,Jl,En,ph,wo,hh,uh,Xl,qt,mh,xo,fh,_h,zo,gh,Th,Ql,sr,ec,Zt,jn,wi,$o,vh,xi,kh,tc,_t,bh,zi,yh,wh,$i,xh,zh,qi,$h,qh,nc,Fn,Eh,ar,jh,Fh,oc,Mn,dt,Ei,Mh,Ph,_e,Ch,ji,Oh,Lh,Fi,Ah,Ih,Mi,Nh,Dh,Pi,Sh,Gh,Ci,Bh,Wh,rr,Uh,Rh,Hh,Oi,Vh,Kh,qo,Yh,Eo,Zh,jo,Jh,Xh,Qh,ge,Li,eu,tu,Ai,nu,ou,Fo,su,re,au,Ii,ru,iu,Ni,du,lu,Di,cu,pu,Si,hu,uu,Gi,mu,fu,Bi,_u,gu,Wi,Tu,vu,ku,Jt,bu,Ui,yu,wu,Ri,xu,zu,$u,Te,qu,Hi,Eu,ju,Vi,Fu,Mu,Ki,Pu,Cu,Yi,Ou,Lu,Mo,Au,Iu,Zi,Nu,Du,Su,Po,sc,ir,Gu,ac,Et,Ji,Co,Bu,Xi,Wu,Uu,Ru,Qi,Xt,Hu,Oo,Vu,Ku,Lo,Yu,Zu,Ju,ed,Ao,Xu,td,Qu,em,rc,dr,ic,Qt,Pn,nd,Io,tm,od,nm,dc,gt,om,lr,sm,am,No,rm,im,Do,dm,lm,lc,So,cc,We,cm,sd,pm,hm,ad,um,mm,cr,fm,_m,rd,gm,Tm,pc,pr,vm,hc,Go,uc,hr,mc,en,Cn,id,Bo,km,dd,bm,fc,Tt,ym,Wo,wm,xm,ld,zm,$m,cd,qm,Em,_c,tn,On,pd,Uo,jm,hd,Fm,gc,ur,Mm,Tc,Ln,ud,nn,Pm,Ro,Cm,Om,Ho,Lm,Am,Im,md,Ne,Nm,Vo,Dm,Sm,Ko,Gm,Bm,Yo,Wm,Um,Zo,Rm,Hm,Jo,Vm,Km,vc,on,An,fd,Xo,Ym,_d,Zm,kc,wt,Qo,Jm,xt,Xm,mr,Qm,ef,fr,tf,nf,es,of,sf,af,sn,rf,_r,df,lf,gr,cf,pf,bc,an,In,gd,ts,hf,Td,uf,yc,ie,ns,mf,os,ff,ss,_f,gf,Tf,as,vf,Tr,kf,bf,yf,jt,rs,wf,vd,xf,zf,is,vr,$f,kd,qf,Ef,kr,jf,bd,Ff,Mf,Nn,ds,Pf,ls,Cf,yd,Of,Lf,Af,Dn,cs,If,wd,Nf,Df,br,ps,wc,rn,Sn,xd,hs,Sf,zd,Gf,xc,De,us,Bf,dn,Wf,$d,Uf,Rf,ms,Hf,Vf,Kf,fs,Yf,yr,Zf,Jf,Xf,Ft,_s,Qf,qd,e_,t_,gs,wr,n_,Ed,o_,s_,xr,a_,jd,r_,i_,Gn,Ts,d_,Fd,l_,zc,ln,Bn,Md,vs,c_,Pd,p_,$c,J,ks,h_,Cd,u_,m_,bs,f_,ys,__,g_,T_,ws,v_,zr,k_,b_,y_,xs,w_,zs,x_,z_,$_,Ue,$s,q_,cn,E_,$r,j_,F_,Od,M_,P_,C_,Wn,O_,Ld,L_,A_,qs,I_,Re,Es,N_,Ad,D_,S_,Id,G_,B_,Nd,W_,U_,js,R_,vt,Fs,H_,Dd,V_,K_,Sd,Y_,Z_,Ms,qc,pn,Un,Gd,Ps,J_,Bd,X_,Ec,X,Cs,Q_,Os,eg,Wd,tg,ng,og,Ls,sg,As,ag,rg,ig,Is,dg,qr,lg,cg,pg,Ns,hg,Ds,ug,mg,fg,He,Ss,_g,hn,gg,Er,Tg,vg,Ud,kg,bg,yg,Rn,wg,Rd,xg,zg,Gs,$g,Ve,Bs,qg,Hd,Eg,jg,Vd,Fg,Mg,Kd,Pg,Cg,Ws,Og,kt,Us,Lg,Yd,Ag,Ig,Zd,Ng,Dg,Rs,jc,un,Hn,Jd,Hs,Sg,Xd,Gg,Fc,Q,Vs,Bg,Qd,Wg,Ug,Ks,Rg,Ys,Hg,Vg,Kg,Zs,Yg,jr,Zg,Jg,Xg,Js,Qg,Xs,eT,tT,nT,Ke,Qs,oT,mn,sT,Fr,aT,rT,el,iT,dT,lT,Vn,cT,tl,pT,hT,ea,uT,Ye,ta,mT,nl,fT,_T,ol,gT,TT,sl,vT,kT,na,bT,bt,oa,yT,al,wT,xT,rl,zT,$T,sa,Mc,fn,Kn,il,aa,qT,dl,ET,Pc,de,ra,jT,ll,FT,MT,ia,PT,da,CT,OT,LT,la,AT,Mr,IT,NT,DT,ca,ST,pa,GT,BT,WT,Yn,UT,Ze,ha,RT,_n,HT,Pr,VT,KT,cl,YT,ZT,JT,Zn,XT,pl,QT,ev,ua,Cc,gn,Jn,hl,ma,tv,ul,nv,Oc,le,fa,ov,_a,sv,ml,av,rv,iv,ga,dv,Ta,lv,cv,pv,va,hv,Cr,uv,mv,fv,ka,_v,ba,gv,Tv,vv,Xn,kv,Je,ya,bv,Tn,yv,Or,wv,xv,fl,zv,$v,qv,Qn,Ev,_l,jv,Fv,wa,Lc,vn,eo,gl,xa,Mv,Tl,Pv,Ac,ce,za,Cv,vl,Ov,Lv,$a,Av,qa,Iv,Nv,Dv,Ea,Sv,Lr,Gv,Bv,Wv,ja,Uv,Fa,Rv,Hv,Vv,to,Kv,Xe,Ma,Yv,kn,Zv,Ar,Jv,Xv,kl,Qv,ek,tk,no,nk,bl,ok,sk,Pa,Ic,bn,oo,yl,Ca,ak,wl,rk,Nc,lt,Oa,ik,Qe,La,dk,yn,lk,xl,ck,pk,zl,hk,uk,mk,so,fk,$l,_k,gk,Aa,Tk,Mt,Ia,vk,ql,kk,bk,Na,yk,Pt,Da,wk,El,xk,zk,Sa,Dc,wn,ao,jl,Ga,$k,Fl,qk,Sc,ct,Ba,Ek,et,Wa,jk,xn,Fk,Ml,Mk,Pk,Pl,Ck,Ok,Lk,ro,Ak,Cl,Ik,Nk,Ua,Dk,Ct,Ra,Sk,Ol,Gk,Bk,Ha,Wk,Ot,Va,Uk,Ll,Rk,Hk,Ka,Gc;return x=new ve({}),se=new ve({}),$o=new ve({}),qo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Fo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Po=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# the following 2 hyperparameters are task-specific
max_source_length = 512
max_target_length = 128

# Suppose we have the following 2 training examples:
input_sequence_1 = "Welcome to NYC"
output_sequence_1 = "Bienvenue \xE0 NYC"

input_sequence_2 = "HuggingFace is a company"
output_sequence_2 = "HuggingFace est une entreprise"

# encode the inputs
task_prefix = "translate English to French: "
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence for sequence in input_sequences],
    padding="longest",
    max_length=max_source_length,
    truncation=True,
    return_tensors="pt",
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

# encode the targets
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding="longest", max_length=max_target_length, truncation=True
)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-keyword">import</span> torch

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
max_source_length = <span class="hljs-number">512</span>
max_target_length = <span class="hljs-number">128</span>

<span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-comment"># encode the inputs</span>
task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
    padding=<span class="hljs-string">&quot;longest&quot;</span>,
    max_length=max_source_length,
    truncation=<span class="hljs-literal">True</span>,
    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-comment"># encode the targets</span>
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
)
labels = target_encoding.input_ids

<span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100</span>
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-comment"># forward pass</span>
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),Io=new ve({}),So=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),Go=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# when generating, we will use the logits of right-most token to predict the next token
# so the padding should be on the left
tokenizer.padding_side = "left"
tokenizer.pad_token = tokenizer.eos_token  # to avoid an error

task_prefix = "translate English to German: "
sentences = ["The house is wonderful.", "I like to work in NYC."]  # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.']`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># when generating, we will use the logits of right-most token to predict the next token</span>
<span class="hljs-comment"># so the padding should be on the left</span>
tokenizer.padding_side = <span class="hljs-string">&quot;left&quot;</span>
tokenizer.pad_token = tokenizer.eos_token  <span class="hljs-comment"># to avoid an error</span>

task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]  <span class="hljs-comment"># use different length sentences to test batching</span>
inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

output_sequences = model.generate(
    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
)

<span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Bo=new ve({}),Uo=new ve({}),Xo=new ve({}),Qo=new M({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),ts=new ve({}),ns=new M({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),rs=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new M({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L298"}}),hs=new ve({}),us=new M({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L62",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),_s=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L165",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L191",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new ve({}),ks=new M({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1267",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$s=new M({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1343",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new zt({props:{$$slots:{default:[Tw]},$$scope:{ctx:A}}}),qs=new R({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Es=new M({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1299",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),js=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Fs=new M({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1311"}}),Ms=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Ps=new ve({}),Cs=new M({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1456",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ss=new M({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1537",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new zt({props:{$$slots:{default:[vw]},$$scope:{ctx:A}}}),Gs=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# training
input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
input_ids = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you.`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Bs=new M({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1493",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),Ws=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Us=new M({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1506"}}),Rs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Hs=new ve({}),Vs=new M({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1750",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qs=new M({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1808",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new zt({props:{$$slots:{default:[kw]},$$scope:{ctx:A}}}),ea=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5EncoderModel.from_pretrained("t5-small")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ta=new M({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1771",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),na=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),oa=new M({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1782"}}),sa=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),aa=new ve({}),ra=new M({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1135",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new zt({props:{$$slots:{default:[bw]},$$scope:{ctx:A}}}),ha=new M({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1161",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5Model.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5Model.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new zt({props:{$$slots:{default:[yw]},$$scope:{ctx:A}}}),ua=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ma=new ve({}),fa=new M({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1302",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new zt({props:{$$slots:{default:[ww]},$$scope:{ctx:A}}}),ya=new M({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1357",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5ForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5ForConditionalGeneration.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5ForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new zt({props:{$$slots:{default:[xw]},$$scope:{ctx:A}}}),wa=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5ForConditionalGeneration.from_pretrained("t5-small")

# training
inputs = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="tf").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="tf").input_ids
outputs = model(inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
inputs = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model.generate(inputs)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),xa=new ve({}),za=new M({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1670",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),to=new zt({props:{$$slots:{default:[zw]},$$scope:{ctx:A}}}),Ma=new M({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1688",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),no=new zt({props:{$$slots:{default:[$w]},$$scope:{ctx:A}}}),Pa=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5EncoderModel.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),Ca=new ve({}),Oa=new M({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1314"}}),La=new M({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L946",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new zt({props:{$$slots:{default:[qw]},$$scope:{ctx:A}}}),Aa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ia=new M({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1031",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Na=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Da=new M({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1089",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ga=new ve({}),Ba=new M({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1454"}}),Wa=new M({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L946",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new zt({props:{$$slots:{default:[Ew]},$$scope:{ctx:A}}}),Ua=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ra=new M({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1031",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ha=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Va=new M({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1457",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ka=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),$=d(),b=o("h1"),w=o("a"),z=o("span"),f(x.$$.fragment),y=d(),q=o("span"),qe=r("T5"),oe=d(),E=o("h2"),ee=o("a"),S=o("span"),f(se.$$.fragment),Ee=d(),G=o("span"),je=r("Overview"),ke=d(),B=o("p"),I=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=o("p"),K=r("The abstract from the paper is the following:"),be=d(),ue=o("p"),W=o("em"),Fe=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ye=d(),P=o("p"),Me=r("Tips:"),H=d(),V=o("ul"),me=o("li"),O=o("p"),Pe=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=o("em"),N=r("translate English to German: \u2026"),Ce=r(`,
for summarization: `),U=o("em"),Oe=r("summarize: \u2026"),m=r("."),j=d(),te=o("li"),Se=o("p"),pt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),Ge=o("li"),ne=o("p"),ht=r("See the "),L=o("a"),Y=r("training"),ut=r(", "),Le=o("a"),Z=r("inference"),mt=r(" and "),Ae=o("a"),Ie=r("scripts"),ft=r(" sections below for all details regarding usage."),Vl=d(),Xa=o("p"),Dp=r("T5 comes in different sizes:"),Kl=d(),Be=o("ul"),di=o("li"),li=o("p"),To=o("a"),Sp=r("t5-small"),Gp=d(),ci=o("li"),pi=o("p"),vo=o("a"),Bp=r("t5-base"),Wp=d(),hi=o("li"),ui=o("p"),ko=o("a"),Up=r("t5-large"),Rp=d(),mi=o("li"),fi=o("p"),bo=o("a"),Hp=r("t5-3b"),Vp=d(),_i=o("li"),Qa=o("p"),yo=o("a"),Kp=r("t5-11b"),Yp=r("."),Yl=d(),er=o("p"),Zp=r("Based on the original T5 model, Google has released some follow-up works:"),Zl=d(),$t=o("ul"),gi=o("li"),zn=o("p"),Ti=o("strong"),Jp=r("T5v1.1"),Xp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),tr=o("a"),Qp=r("here"),eh=r("."),th=d(),vi=o("li"),$n=o("p"),ki=o("strong"),nh=r("mT5"),oh=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),nr=o("a"),sh=r("here"),ah=r("."),rh=d(),bi=o("li"),qn=o("p"),yi=o("strong"),ih=r("byT5"),dh=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),or=o("a"),lh=r("here"),ch=r("."),Jl=d(),En=o("p"),ph=r("All checkpoints can be found on the "),wo=o("a"),hh=r("hub"),uh=r("."),Xl=d(),qt=o("p"),mh=r("This model was contributed by "),xo=o("a"),fh=r("thomwolf"),_h=r(". The original code can be found "),zo=o("a"),gh=r("here"),Th=r("."),Ql=d(),sr=o("a"),ec=d(),Zt=o("h2"),jn=o("a"),wi=o("span"),f($o.$$.fragment),vh=d(),xi=o("span"),kh=r("Training"),tc=d(),_t=o("p"),bh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),zi=o("code"),yh=r("input_ids"),wh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=o("code"),xh=r("decoder_input_ids"),zh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),qi=o("code"),$h=r("labels"),qh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),nc=d(),Fn=o("p"),Eh=r("One can use "),ar=o("a"),jh=r("T5ForConditionalGeneration"),Fh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),oc=d(),Mn=o("ul"),dt=o("li"),Ei=o("p"),Mh=r("Unsupervised denoising training"),Ph=d(),_e=o("p"),Ch=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=o("em"),Oh=r("a.k.a"),Lh=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=o("em"),Ah=r("real"),Ih=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=o("code"),Nh=r("<extra_id_0>"),Dh=r(`,
`),Pi=o("code"),Sh=r("<extra_id_1>"),Gh=r(", \u2026 up to "),Ci=o("code"),Bh=r("<extra_id_99>"),Wh=r(`. As a default, 100 sentinel tokens are available in
`),rr=o("a"),Uh=r("T5Tokenizer"),Rh=r("."),Hh=d(),Oi=o("p"),Vh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Kh=d(),f(qo.$$.fragment),Yh=d(),Eo=o("p"),Zh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),jo=o("a"),Jh=r("run_t5_mlm_flax.py"),Xh=r(` script in the Examples
directory.`),Qh=d(),ge=o("li"),Li=o("p"),eu=r("Supervised training"),tu=d(),Ai=o("p"),nu=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ou=d(),f(Fo.$$.fragment),su=d(),re=o("p"),au=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ii=o("code"),ru=r("input_ids"),iu=r(` (which are the
`),Ni=o("code"),du=r("input_ids"),lu=r(" of the encoded input sequence) and "),Di=o("code"),cu=r("labels"),pu=r(" (which are the "),Si=o("code"),hu=r("input_ids"),uu=r(` of the encoded
target sequence). The model will automatically create the `),Gi=o("code"),mu=r("decoder_input_ids"),fu=r(" based on the "),Bi=o("code"),_u=r("labels"),gu=r(`, by
shifting them one position to the right and prepending the `),Wi=o("code"),Tu=r("config.decoder_start_token_id"),vu=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),ku=d(),Jt=o("p"),bu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=o("code"),yu=r("max_source_length"),wu=r(" and "),Ri=o("code"),xu=r("max_target_length"),zu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),$u=d(),Te=o("p"),qu=r("In addition, we must make sure that padding token id\u2019s of the "),Hi=o("code"),Eu=r("labels"),ju=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Vi=o("code"),Fu=r("ignore_index"),Mu=r(`
of the `),Ki=o("code"),Pu=r("CrossEntropyLoss"),Cu=r(". In Flax, one can use the "),Yi=o("code"),Ou=r("decoder_attention_mask"),Lu=r(` to ignore padded tokens from
the loss (see the `),Mo=o("a"),Au=r("Flax summarization script"),Iu=r(` for details). We also pass
`),Zi=o("code"),Nu=r("attention_mask"),Du=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Su=d(),f(Po.$$.fragment),sc=d(),ir=o("p"),Gu=r("Additional training tips:"),ac=d(),Et=o("ul"),Ji=o("li"),Co=o("p"),Bu=r("T5 models need a slightly higher learning rate than the default one set in the "),Xi=o("code"),Wu=r("Trainer"),Uu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Ru=d(),Qi=o("li"),Xt=o("p"),Hu=r("According to "),Oo=o("a"),Vu=r("this forum post"),Ku=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Lo=o("a"),Yu=r("paper"),Zu=r(` for the task prefixes
used).`),Ju=d(),ed=o("li"),Ao=o("p"),Xu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),td=o("em"),Qu=r("pad_to_multiple_of"),em=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),rc=d(),dr=o("a"),ic=d(),Qt=o("h2"),Pn=o("a"),nd=o("span"),f(Io.$$.fragment),tm=d(),od=o("span"),nm=r("Inference"),dc=d(),gt=o("p"),om=r("At inference time, it is recommended to use "),lr=o("a"),sm=r("generate()"),am=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),No=o("a"),rm=r("this blog post"),im=r(` to know all the details about generating text with Transformers.
There\u2019s also `),Do=o("a"),dm=r("this blog post"),lm=r(` which explains how
generation works in general in encoder-decoder models.`),lc=d(),f(So.$$.fragment),cc=d(),We=o("p"),cm=r("Note that T5 uses the "),sd=o("code"),pm=r("pad_token_id"),hm=r(" as the "),ad=o("code"),um=r("decoder_start_token_id"),mm=r(`, so when doing generation without using
`),cr=o("a"),fm=r("generate()"),_m=r(", make sure you start it with the "),rd=o("code"),gm=r("pad_token_id"),Tm=r("."),pc=d(),pr=o("p"),vm=r("The example above only shows a single example. You can also do batched inference, like so:"),hc=d(),f(Go.$$.fragment),uc=d(),hr=o("a"),mc=d(),en=o("h2"),Cn=o("a"),id=o("span"),f(Bo.$$.fragment),km=d(),dd=o("span"),bm=r("Performance"),fc=d(),Tt=o("p"),ym=r("If you\u2019d like a faster training and inference performance, install "),Wo=o("a"),wm=r("apex"),xm=r(" and then the model will automatically use "),ld=o("code"),zm=r("apex.normalization.FusedRMSNorm"),$m=r(" instead of "),cd=o("code"),qm=r("T5LayerNorm"),Em=r(". The former uses an optimized fused kernel which is several times faster than the latter."),_c=d(),tn=o("h2"),On=o("a"),pd=o("span"),f(Uo.$$.fragment),jm=d(),hd=o("span"),Fm=r("Example scripts"),gc=d(),ur=o("p"),Mm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Tc=d(),Ln=o("ul"),ud=o("li"),nn=o("p"),Pm=r("pre-training: the "),Ro=o("a"),Cm=r("run_t5_mlm_flax.py"),Om=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Ho=o("a"),Lm=r("t5_tokenizer_model.py"),Am=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Im=d(),md=o("li"),Ne=o("p"),Nm=r("fine-tuning: T5 is supported by the official summarization scripts ("),Vo=o("a"),Dm=r("PyTorch"),Sm=r(", "),Ko=o("a"),Gm=r("Tensorflow"),Bm=r(", and "),Yo=o("a"),Wm=r("Flax"),Um=r(`) and translation scripts
(`),Zo=o("a"),Rm=r("PyTorch"),Hm=r(" and "),Jo=o("a"),Vm=r("Tensorflow"),Km=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),vc=d(),on=o("h2"),An=o("a"),fd=o("span"),f(Xo.$$.fragment),Ym=d(),_d=o("span"),Zm=r("T5Config"),kc=d(),wt=o("div"),f(Qo.$$.fragment),Jm=d(),xt=o("p"),Xm=r("This is the configuration class to store the configuration of a "),mr=o("a"),Qm=r("T5Model"),ef=r(" or a "),fr=o("a"),tf=r("TFT5Model"),nf=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),es=o("a"),of=r("t5-small"),sf=r(" architecture."),af=d(),sn=o("p"),rf=r("Configuration objects inherit from "),_r=o("a"),df=r("PretrainedConfig"),lf=r(` and can be used to control the model outputs. Read the
documentation from `),gr=o("a"),cf=r("PretrainedConfig"),pf=r(" for more information."),bc=d(),an=o("h2"),In=o("a"),gd=o("span"),f(ts.$$.fragment),hf=d(),Td=o("span"),uf=r("T5Tokenizer"),yc=d(),ie=o("div"),f(ns.$$.fragment),mf=d(),os=o("p"),ff=r("Construct a T5 tokenizer. Based on "),ss=o("a"),_f=r("SentencePiece"),gf=r("."),Tf=d(),as=o("p"),vf=r("This tokenizer inherits from "),Tr=o("a"),kf=r("PreTrainedTokenizer"),bf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yf=d(),jt=o("div"),f(rs.$$.fragment),wf=d(),vd=o("p"),xf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),zf=d(),is=o("ul"),vr=o("li"),$f=r("single sequence: "),kd=o("code"),qf=r("X </s>"),Ef=d(),kr=o("li"),jf=r("pair of sequences: "),bd=o("code"),Ff=r("A </s> B </s>"),Mf=d(),Nn=o("div"),f(ds.$$.fragment),Pf=d(),ls=o("p"),Cf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yd=o("code"),Of=r("prepare_for_model"),Lf=r(" method."),Af=d(),Dn=o("div"),f(cs.$$.fragment),If=d(),wd=o("p"),Nf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Df=d(),br=o("div"),f(ps.$$.fragment),wc=d(),rn=o("h2"),Sn=o("a"),xd=o("span"),f(hs.$$.fragment),Sf=d(),zd=o("span"),Gf=r("T5TokenizerFast"),xc=d(),De=o("div"),f(us.$$.fragment),Bf=d(),dn=o("p"),Wf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),$d=o("em"),Uf=r("tokenizers"),Rf=r(` library). Based on
`),ms=o("a"),Hf=r("Unigram"),Vf=r("."),Kf=d(),fs=o("p"),Yf=r("This tokenizer inherits from "),yr=o("a"),Zf=r("PreTrainedTokenizerFast"),Jf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xf=d(),Ft=o("div"),f(_s.$$.fragment),Qf=d(),qd=o("p"),e_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),t_=d(),gs=o("ul"),wr=o("li"),n_=r("single sequence: "),Ed=o("code"),o_=r("X </s>"),s_=d(),xr=o("li"),a_=r("pair of sequences: "),jd=o("code"),r_=r("A </s> B </s>"),i_=d(),Gn=o("div"),f(Ts.$$.fragment),d_=d(),Fd=o("p"),l_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),zc=d(),ln=o("h2"),Bn=o("a"),Md=o("span"),f(vs.$$.fragment),c_=d(),Pd=o("span"),p_=r("T5Model"),$c=d(),J=o("div"),f(ks.$$.fragment),h_=d(),Cd=o("p"),u_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),m_=d(),bs=o("p"),f_=r("The T5 model was proposed in "),ys=o("a"),__=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),g_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),T_=d(),ws=o("p"),v_=r("This model inherits from "),zr=o("a"),k_=r("PreTrainedModel"),b_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),y_=d(),xs=o("p"),w_=r("This model is also a PyTorch "),zs=o("a"),x_=r("torch.nn.Module"),z_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$_=d(),Ue=o("div"),f($s.$$.fragment),q_=d(),cn=o("p"),E_=r("The "),$r=o("a"),j_=r("T5Model"),F_=r(" forward method, overrides the "),Od=o("code"),M_=r("__call__"),P_=r(" special method."),C_=d(),f(Wn.$$.fragment),O_=d(),Ld=o("p"),L_=r("Example:"),A_=d(),f(qs.$$.fragment),I_=d(),Re=o("div"),f(Es.$$.fragment),N_=d(),Ad=o("p"),D_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),S_=d(),Id=o("p"),G_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),B_=d(),Nd=o("p"),W_=r("Example:"),U_=d(),f(js.$$.fragment),R_=d(),vt=o("div"),f(Fs.$$.fragment),H_=d(),Dd=o("p"),V_=r("Moves the model to cpu from a model parallel state."),K_=d(),Sd=o("p"),Y_=r("Example:"),Z_=d(),f(Ms.$$.fragment),qc=d(),pn=o("h2"),Un=o("a"),Gd=o("span"),f(Ps.$$.fragment),J_=d(),Bd=o("span"),X_=r("T5ForConditionalGeneration"),Ec=d(),X=o("div"),f(Cs.$$.fragment),Q_=d(),Os=o("p"),eg=r("T5 Model with a "),Wd=o("code"),tg=r("language modeling"),ng=r(" head on top."),og=d(),Ls=o("p"),sg=r("The T5 model was proposed in "),As=o("a"),ag=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),rg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ig=d(),Is=o("p"),dg=r("This model inherits from "),qr=o("a"),lg=r("PreTrainedModel"),cg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=d(),Ns=o("p"),hg=r("This model is also a PyTorch "),Ds=o("a"),ug=r("torch.nn.Module"),mg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fg=d(),He=o("div"),f(Ss.$$.fragment),_g=d(),hn=o("p"),gg=r("The "),Er=o("a"),Tg=r("T5ForConditionalGeneration"),vg=r(" forward method, overrides the "),Ud=o("code"),kg=r("__call__"),bg=r(" special method."),yg=d(),f(Rn.$$.fragment),wg=d(),Rd=o("p"),xg=r("Examples:"),zg=d(),f(Gs.$$.fragment),$g=d(),Ve=o("div"),f(Bs.$$.fragment),qg=d(),Hd=o("p"),Eg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),jg=d(),Vd=o("p"),Fg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Mg=d(),Kd=o("p"),Pg=r("Example:"),Cg=d(),f(Ws.$$.fragment),Og=d(),kt=o("div"),f(Us.$$.fragment),Lg=d(),Yd=o("p"),Ag=r("Moves the model to cpu from a model parallel state."),Ig=d(),Zd=o("p"),Ng=r("Example:"),Dg=d(),f(Rs.$$.fragment),jc=d(),un=o("h2"),Hn=o("a"),Jd=o("span"),f(Hs.$$.fragment),Sg=d(),Xd=o("span"),Gg=r("T5EncoderModel"),Fc=d(),Q=o("div"),f(Vs.$$.fragment),Bg=d(),Qd=o("p"),Wg=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Ug=d(),Ks=o("p"),Rg=r("The T5 model was proposed in "),Ys=o("a"),Hg=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Vg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Kg=d(),Zs=o("p"),Yg=r("This model inherits from "),jr=o("a"),Zg=r("PreTrainedModel"),Jg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=d(),Js=o("p"),Qg=r("This model is also a PyTorch "),Xs=o("a"),eT=r("torch.nn.Module"),tT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nT=d(),Ke=o("div"),f(Qs.$$.fragment),oT=d(),mn=o("p"),sT=r("The "),Fr=o("a"),aT=r("T5EncoderModel"),rT=r(" forward method, overrides the "),el=o("code"),iT=r("__call__"),dT=r(" special method."),lT=d(),f(Vn.$$.fragment),cT=d(),tl=o("p"),pT=r("Example:"),hT=d(),f(ea.$$.fragment),uT=d(),Ye=o("div"),f(ta.$$.fragment),mT=d(),nl=o("p"),fT=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),_T=d(),ol=o("p"),gT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),TT=d(),sl=o("p"),vT=r("Example:"),kT=d(),f(na.$$.fragment),bT=d(),bt=o("div"),f(oa.$$.fragment),yT=d(),al=o("p"),wT=r("Moves the model to cpu from a model parallel state."),xT=d(),rl=o("p"),zT=r("Example:"),$T=d(),f(sa.$$.fragment),Mc=d(),fn=o("h2"),Kn=o("a"),il=o("span"),f(aa.$$.fragment),qT=d(),dl=o("span"),ET=r("TFT5Model"),Pc=d(),de=o("div"),f(ra.$$.fragment),jT=d(),ll=o("p"),FT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),MT=d(),ia=o("p"),PT=r("The T5 model was proposed in "),da=o("a"),CT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),OT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),LT=d(),la=o("p"),AT=r("This model inherits from "),Mr=o("a"),IT=r("TFPreTrainedModel"),NT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),DT=d(),ca=o("p"),ST=r("This model is also a "),pa=o("a"),GT=r("tf.keras.Model"),BT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),WT=d(),f(Yn.$$.fragment),UT=d(),Ze=o("div"),f(ha.$$.fragment),RT=d(),_n=o("p"),HT=r("The "),Pr=o("a"),VT=r("TFT5Model"),KT=r(" forward method, overrides the "),cl=o("code"),YT=r("__call__"),ZT=r(" special method."),JT=d(),f(Zn.$$.fragment),XT=d(),pl=o("p"),QT=r("Examples:"),ev=d(),f(ua.$$.fragment),Cc=d(),gn=o("h2"),Jn=o("a"),hl=o("span"),f(ma.$$.fragment),tv=d(),ul=o("span"),nv=r("TFT5ForConditionalGeneration"),Oc=d(),le=o("div"),f(fa.$$.fragment),ov=d(),_a=o("p"),sv=r("T5 Model with a "),ml=o("code"),av=r("language modeling"),rv=r(" head on top."),iv=d(),ga=o("p"),dv=r("The T5 model was proposed in "),Ta=o("a"),lv=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),cv=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),pv=d(),va=o("p"),hv=r("This model inherits from "),Cr=o("a"),uv=r("TFPreTrainedModel"),mv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fv=d(),ka=o("p"),_v=r("This model is also a "),ba=o("a"),gv=r("tf.keras.Model"),Tv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vv=d(),f(Xn.$$.fragment),kv=d(),Je=o("div"),f(ya.$$.fragment),bv=d(),Tn=o("p"),yv=r("The "),Or=o("a"),wv=r("TFT5ForConditionalGeneration"),xv=r(" forward method, overrides the "),fl=o("code"),zv=r("__call__"),$v=r(" special method."),qv=d(),f(Qn.$$.fragment),Ev=d(),_l=o("p"),jv=r("Examples:"),Fv=d(),f(wa.$$.fragment),Lc=d(),vn=o("h2"),eo=o("a"),gl=o("span"),f(xa.$$.fragment),Mv=d(),Tl=o("span"),Pv=r("TFT5EncoderModel"),Ac=d(),ce=o("div"),f(za.$$.fragment),Cv=d(),vl=o("p"),Ov=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Lv=d(),$a=o("p"),Av=r("The T5 model was proposed in "),qa=o("a"),Iv=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Nv=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Dv=d(),Ea=o("p"),Sv=r("This model inherits from "),Lr=o("a"),Gv=r("TFPreTrainedModel"),Bv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=d(),ja=o("p"),Uv=r("This model is also a "),Fa=o("a"),Rv=r("tf.keras.Model"),Hv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vv=d(),f(to.$$.fragment),Kv=d(),Xe=o("div"),f(Ma.$$.fragment),Yv=d(),kn=o("p"),Zv=r("The "),Ar=o("a"),Jv=r("TFT5EncoderModel"),Xv=r(" forward method, overrides the "),kl=o("code"),Qv=r("__call__"),ek=r(" special method."),tk=d(),f(no.$$.fragment),nk=d(),bl=o("p"),ok=r("Examples:"),sk=d(),f(Pa.$$.fragment),Ic=d(),bn=o("h2"),oo=o("a"),yl=o("span"),f(Ca.$$.fragment),ak=d(),wl=o("span"),rk=r("FlaxT5Model"),Nc=d(),lt=o("div"),f(Oa.$$.fragment),ik=d(),Qe=o("div"),f(La.$$.fragment),dk=d(),yn=o("p"),lk=r("The "),xl=o("code"),ck=r("FlaxT5PreTrainedModel"),pk=r("forward method, overrides the "),zl=o("code"),hk=r("__call__"),uk=r(" special method."),mk=d(),f(so.$$.fragment),fk=d(),$l=o("p"),_k=r("Example:"),gk=d(),f(Aa.$$.fragment),Tk=d(),Mt=o("div"),f(Ia.$$.fragment),vk=d(),ql=o("p"),kk=r("Example:"),bk=d(),f(Na.$$.fragment),yk=d(),Pt=o("div"),f(Da.$$.fragment),wk=d(),El=o("p"),xk=r("Example:"),zk=d(),f(Sa.$$.fragment),Dc=d(),wn=o("h2"),ao=o("a"),jl=o("span"),f(Ga.$$.fragment),$k=d(),Fl=o("span"),qk=r("FlaxT5ForConditionalGeneration"),Sc=d(),ct=o("div"),f(Ba.$$.fragment),Ek=d(),et=o("div"),f(Wa.$$.fragment),jk=d(),xn=o("p"),Fk=r("The "),Ml=o("code"),Mk=r("FlaxT5PreTrainedModel"),Pk=r("forward method, overrides the "),Pl=o("code"),Ck=r("__call__"),Ok=r(" special method."),Lk=d(),f(ro.$$.fragment),Ak=d(),Cl=o("p"),Ik=r("Example:"),Nk=d(),f(Ua.$$.fragment),Dk=d(),Ct=o("div"),f(Ra.$$.fragment),Sk=d(),Ol=o("p"),Gk=r("Example:"),Bk=d(),f(Ha.$$.fragment),Wk=d(),Ot=o("div"),f(Va.$$.fragment),Uk=d(),Ll=o("p"),Rk=r("Example:"),Hk=d(),f(Ka.$$.fragment),this.h()},l(n){const h=_w('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),$=l(n),b=s(n,"H1",{class:!0});var Ya=a(b);w=s(Ya,"A",{id:!0,class:!0,href:!0});var Al=a(w);z=s(Al,"SPAN",{});var Il=a(z);_(x.$$.fragment,Il),Il.forEach(t),Al.forEach(t),y=l(Ya),q=s(Ya,"SPAN",{});var Nl=a(q);qe=i(Nl,"T5"),Nl.forEach(t),Ya.forEach(t),oe=l(n),E=s(n,"H2",{class:!0});var Za=a(E);ee=s(Za,"A",{id:!0,class:!0,href:!0});var Dl=a(ee);S=s(Dl,"SPAN",{});var Sl=a(S);_(se.$$.fragment,Sl),Sl.forEach(t),Dl.forEach(t),Ee=l(Za),G=s(Za,"SPAN",{});var Gl=a(G);je=i(Gl,"Overview"),Gl.forEach(t),Za.forEach(t),ke=l(n),B=s(n,"P",{});var Ja=a(B);I=i(Ja,"The T5 model was presented in "),ae=s(Ja,"A",{href:!0,rel:!0});var Bl=a(ae);pe=i(Bl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Bl.forEach(t),F=i(Ja,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ja.forEach(t),C=l(n),he=s(n,"P",{});var Wl=a(he);K=i(Wl,"The abstract from the paper is the following:"),Wl.forEach(t),be=l(n),ue=s(n,"P",{});var Xk=a(ue);W=s(Xk,"EM",{});var Qk=a(W);Fe=i(Qk,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Qk.forEach(t),Xk.forEach(t),ye=l(n),P=s(n,"P",{});var eb=a(P);Me=i(eb,"Tips:"),eb.forEach(t),H=l(n),V=s(n,"UL",{});var Ir=a(V);me=s(Ir,"LI",{});var tb=a(me);O=s(tb,"P",{});var Nr=a(O);Pe=i(Nr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=s(Nr,"EM",{});var nb=a(fe);N=i(nb,"translate English to German: \u2026"),nb.forEach(t),Ce=i(Nr,`,
for summarization: `),U=s(Nr,"EM",{});var ob=a(U);Oe=i(ob,"summarize: \u2026"),ob.forEach(t),m=i(Nr,"."),Nr.forEach(t),tb.forEach(t),j=l(Ir),te=s(Ir,"LI",{});var sb=a(te);Se=s(sb,"P",{});var ab=a(Se);pt=i(ab,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),ab.forEach(t),sb.forEach(t),D=l(Ir),Ge=s(Ir,"LI",{});var rb=a(Ge);ne=s(rb,"P",{});var io=a(ne);ht=i(io,"See the "),L=s(io,"A",{href:!0});var ib=a(L);Y=i(ib,"training"),ib.forEach(t),ut=i(io,", "),Le=s(io,"A",{href:!0});var db=a(Le);Z=i(db,"inference"),db.forEach(t),mt=i(io," and "),Ae=s(io,"A",{href:!0});var lb=a(Ae);Ie=i(lb,"scripts"),lb.forEach(t),ft=i(io," sections below for all details regarding usage."),io.forEach(t),rb.forEach(t),Ir.forEach(t),Vl=l(n),Xa=s(n,"P",{});var cb=a(Xa);Dp=i(cb,"T5 comes in different sizes:"),cb.forEach(t),Kl=l(n),Be=s(n,"UL",{});var Lt=a(Be);di=s(Lt,"LI",{});var pb=a(di);li=s(pb,"P",{});var hb=a(li);To=s(hb,"A",{href:!0,rel:!0});var ub=a(To);Sp=i(ub,"t5-small"),ub.forEach(t),hb.forEach(t),pb.forEach(t),Gp=l(Lt),ci=s(Lt,"LI",{});var mb=a(ci);pi=s(mb,"P",{});var fb=a(pi);vo=s(fb,"A",{href:!0,rel:!0});var _b=a(vo);Bp=i(_b,"t5-base"),_b.forEach(t),fb.forEach(t),mb.forEach(t),Wp=l(Lt),hi=s(Lt,"LI",{});var gb=a(hi);ui=s(gb,"P",{});var Tb=a(ui);ko=s(Tb,"A",{href:!0,rel:!0});var vb=a(ko);Up=i(vb,"t5-large"),vb.forEach(t),Tb.forEach(t),gb.forEach(t),Rp=l(Lt),mi=s(Lt,"LI",{});var kb=a(mi);fi=s(kb,"P",{});var bb=a(fi);bo=s(bb,"A",{href:!0,rel:!0});var yb=a(bo);Hp=i(yb,"t5-3b"),yb.forEach(t),bb.forEach(t),kb.forEach(t),Vp=l(Lt),_i=s(Lt,"LI",{});var wb=a(_i);Qa=s(wb,"P",{});var Vk=a(Qa);yo=s(Vk,"A",{href:!0,rel:!0});var xb=a(yo);Kp=i(xb,"t5-11b"),xb.forEach(t),Yp=i(Vk,"."),Vk.forEach(t),wb.forEach(t),Lt.forEach(t),Yl=l(n),er=s(n,"P",{});var zb=a(er);Zp=i(zb,"Based on the original T5 model, Google has released some follow-up works:"),zb.forEach(t),Zl=l(n),$t=s(n,"UL",{});var Dr=a($t);gi=s(Dr,"LI",{});var $b=a(gi);zn=s($b,"P",{});var Ul=a(zn);Ti=s(Ul,"STRONG",{});var qb=a(Ti);Jp=i(qb,"T5v1.1"),qb.forEach(t),Xp=i(Ul,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),tr=s(Ul,"A",{href:!0});var Eb=a(tr);Qp=i(Eb,"here"),Eb.forEach(t),eh=i(Ul,"."),Ul.forEach(t),$b.forEach(t),th=l(Dr),vi=s(Dr,"LI",{});var jb=a(vi);$n=s(jb,"P",{});var Rl=a($n);ki=s(Rl,"STRONG",{});var Fb=a(ki);nh=i(Fb,"mT5"),Fb.forEach(t),oh=i(Rl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),nr=s(Rl,"A",{href:!0});var Mb=a(nr);sh=i(Mb,"here"),Mb.forEach(t),ah=i(Rl,"."),Rl.forEach(t),jb.forEach(t),rh=l(Dr),bi=s(Dr,"LI",{});var Pb=a(bi);qn=s(Pb,"P",{});var Hl=a(qn);yi=s(Hl,"STRONG",{});var Cb=a(yi);ih=i(Cb,"byT5"),Cb.forEach(t),dh=i(Hl,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),or=s(Hl,"A",{href:!0});var Ob=a(or);lh=i(Ob,"here"),Ob.forEach(t),ch=i(Hl,"."),Hl.forEach(t),Pb.forEach(t),Dr.forEach(t),Jl=l(n),En=s(n,"P",{});var Bc=a(En);ph=i(Bc,"All checkpoints can be found on the "),wo=s(Bc,"A",{href:!0,rel:!0});var Lb=a(wo);hh=i(Lb,"hub"),Lb.forEach(t),uh=i(Bc,"."),Bc.forEach(t),Xl=l(n),qt=s(n,"P",{});var Sr=a(qt);mh=i(Sr,"This model was contributed by "),xo=s(Sr,"A",{href:!0,rel:!0});var Ab=a(xo);fh=i(Ab,"thomwolf"),Ab.forEach(t),_h=i(Sr,". The original code can be found "),zo=s(Sr,"A",{href:!0,rel:!0});var Ib=a(zo);gh=i(Ib,"here"),Ib.forEach(t),Th=i(Sr,"."),Sr.forEach(t),Ql=l(n),sr=s(n,"A",{id:!0}),a(sr).forEach(t),ec=l(n),Zt=s(n,"H2",{class:!0});var Wc=a(Zt);jn=s(Wc,"A",{id:!0,class:!0,href:!0});var Nb=a(jn);wi=s(Nb,"SPAN",{});var Db=a(wi);_($o.$$.fragment,Db),Db.forEach(t),Nb.forEach(t),vh=l(Wc),xi=s(Wc,"SPAN",{});var Sb=a(xi);kh=i(Sb,"Training"),Sb.forEach(t),Wc.forEach(t),tc=l(n),_t=s(n,"P",{});var lo=a(_t);bh=i(lo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),zi=s(lo,"CODE",{});var Gb=a(zi);yh=i(Gb,"input_ids"),Gb.forEach(t),wh=i(lo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=s(lo,"CODE",{});var Bb=a($i);xh=i(Bb,"decoder_input_ids"),Bb.forEach(t),zh=i(lo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),qi=s(lo,"CODE",{});var Wb=a(qi);$h=i(Wb,"labels"),Wb.forEach(t),qh=i(lo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),lo.forEach(t),nc=l(n),Fn=s(n,"P",{});var Uc=a(Fn);Eh=i(Uc,"One can use "),ar=s(Uc,"A",{href:!0});var Ub=a(ar);jh=i(Ub,"T5ForConditionalGeneration"),Ub.forEach(t),Fh=i(Uc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Uc.forEach(t),oc=l(n),Mn=s(n,"UL",{});var Rc=a(Mn);dt=s(Rc,"LI",{});var At=a(dt);Ei=s(At,"P",{});var Rb=a(Ei);Mh=i(Rb,"Unsupervised denoising training"),Rb.forEach(t),Ph=l(At),_e=s(At,"P",{});var tt=a(_e);Ch=i(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=s(tt,"EM",{});var Hb=a(ji);Oh=i(Hb,"a.k.a"),Hb.forEach(t),Lh=i(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=s(tt,"EM",{});var Vb=a(Fi);Ah=i(Vb,"real"),Vb.forEach(t),Ih=i(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=s(tt,"CODE",{});var Kb=a(Mi);Nh=i(Kb,"<extra_id_0>"),Kb.forEach(t),Dh=i(tt,`,
`),Pi=s(tt,"CODE",{});var Yb=a(Pi);Sh=i(Yb,"<extra_id_1>"),Yb.forEach(t),Gh=i(tt,", \u2026 up to "),Ci=s(tt,"CODE",{});var Zb=a(Ci);Bh=i(Zb,"<extra_id_99>"),Zb.forEach(t),Wh=i(tt,`. As a default, 100 sentinel tokens are available in
`),rr=s(tt,"A",{href:!0});var Jb=a(rr);Uh=i(Jb,"T5Tokenizer"),Jb.forEach(t),Rh=i(tt,"."),tt.forEach(t),Hh=l(At),Oi=s(At,"P",{});var Xb=a(Oi);Vh=i(Xb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Xb.forEach(t),Kh=l(At),_(qo.$$.fragment,At),Yh=l(At),Eo=s(At,"P",{});var Hc=a(Eo);Zh=i(Hc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),jo=s(Hc,"A",{href:!0,rel:!0});var Qb=a(jo);Jh=i(Qb,"run_t5_mlm_flax.py"),Qb.forEach(t),Xh=i(Hc,` script in the Examples
directory.`),Hc.forEach(t),At.forEach(t),Qh=l(Rc),ge=s(Rc,"LI",{});var nt=a(ge);Li=s(nt,"P",{});var e5=a(Li);eu=i(e5,"Supervised training"),e5.forEach(t),tu=l(nt),Ai=s(nt,"P",{});var t5=a(Ai);nu=i(t5,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),t5.forEach(t),ou=l(nt),_(Fo.$$.fragment,nt),su=l(nt),re=s(nt,"P",{});var we=a(re);au=i(we,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ii=s(we,"CODE",{});var n5=a(Ii);ru=i(n5,"input_ids"),n5.forEach(t),iu=i(we,` (which are the
`),Ni=s(we,"CODE",{});var o5=a(Ni);du=i(o5,"input_ids"),o5.forEach(t),lu=i(we," of the encoded input sequence) and "),Di=s(we,"CODE",{});var s5=a(Di);cu=i(s5,"labels"),s5.forEach(t),pu=i(we," (which are the "),Si=s(we,"CODE",{});var a5=a(Si);hu=i(a5,"input_ids"),a5.forEach(t),uu=i(we,` of the encoded
target sequence). The model will automatically create the `),Gi=s(we,"CODE",{});var r5=a(Gi);mu=i(r5,"decoder_input_ids"),r5.forEach(t),fu=i(we," based on the "),Bi=s(we,"CODE",{});var i5=a(Bi);_u=i(i5,"labels"),i5.forEach(t),gu=i(we,`, by
shifting them one position to the right and prepending the `),Wi=s(we,"CODE",{});var d5=a(Wi);Tu=i(d5,"config.decoder_start_token_id"),d5.forEach(t),vu=i(we,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),we.forEach(t),ku=l(nt),Jt=s(nt,"P",{});var Gr=a(Jt);bu=i(Gr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=s(Gr,"CODE",{});var l5=a(Ui);yu=i(l5,"max_source_length"),l5.forEach(t),wu=i(Gr," and "),Ri=s(Gr,"CODE",{});var c5=a(Ri);xu=i(c5,"max_target_length"),c5.forEach(t),zu=i(Gr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Gr.forEach(t),$u=l(nt),Te=s(nt,"P",{});var ot=a(Te);qu=i(ot,"In addition, we must make sure that padding token id\u2019s of the "),Hi=s(ot,"CODE",{});var p5=a(Hi);Eu=i(p5,"labels"),p5.forEach(t),ju=i(ot,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Vi=s(ot,"CODE",{});var h5=a(Vi);Fu=i(h5,"ignore_index"),h5.forEach(t),Mu=i(ot,`
of the `),Ki=s(ot,"CODE",{});var u5=a(Ki);Pu=i(u5,"CrossEntropyLoss"),u5.forEach(t),Cu=i(ot,". In Flax, one can use the "),Yi=s(ot,"CODE",{});var m5=a(Yi);Ou=i(m5,"decoder_attention_mask"),m5.forEach(t),Lu=i(ot,` to ignore padded tokens from
the loss (see the `),Mo=s(ot,"A",{href:!0,rel:!0});var f5=a(Mo);Au=i(f5,"Flax summarization script"),f5.forEach(t),Iu=i(ot,` for details). We also pass
`),Zi=s(ot,"CODE",{});var _5=a(Zi);Nu=i(_5,"attention_mask"),_5.forEach(t),Du=i(ot,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),ot.forEach(t),Su=l(nt),_(Po.$$.fragment,nt),nt.forEach(t),Rc.forEach(t),sc=l(n),ir=s(n,"P",{});var g5=a(ir);Gu=i(g5,"Additional training tips:"),g5.forEach(t),ac=l(n),Et=s(n,"UL",{});var Br=a(Et);Ji=s(Br,"LI",{});var T5=a(Ji);Co=s(T5,"P",{});var Vc=a(Co);Bu=i(Vc,"T5 models need a slightly higher learning rate than the default one set in the "),Xi=s(Vc,"CODE",{});var v5=a(Xi);Wu=i(v5,"Trainer"),v5.forEach(t),Uu=i(Vc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Vc.forEach(t),T5.forEach(t),Ru=l(Br),Qi=s(Br,"LI",{});var k5=a(Qi);Xt=s(k5,"P",{});var Wr=a(Xt);Hu=i(Wr,"According to "),Oo=s(Wr,"A",{href:!0,rel:!0});var b5=a(Oo);Vu=i(b5,"this forum post"),b5.forEach(t),Ku=i(Wr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Lo=s(Wr,"A",{href:!0,rel:!0});var y5=a(Lo);Yu=i(y5,"paper"),y5.forEach(t),Zu=i(Wr,` for the task prefixes
used).`),Wr.forEach(t),k5.forEach(t),Ju=l(Br),ed=s(Br,"LI",{});var w5=a(ed);Ao=s(w5,"P",{});var Kc=a(Ao);Xu=i(Kc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),td=s(Kc,"EM",{});var x5=a(td);Qu=i(x5,"pad_to_multiple_of"),x5.forEach(t),em=i(Kc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Kc.forEach(t),w5.forEach(t),Br.forEach(t),rc=l(n),dr=s(n,"A",{id:!0}),a(dr).forEach(t),ic=l(n),Qt=s(n,"H2",{class:!0});var Yc=a(Qt);Pn=s(Yc,"A",{id:!0,class:!0,href:!0});var z5=a(Pn);nd=s(z5,"SPAN",{});var $5=a(nd);_(Io.$$.fragment,$5),$5.forEach(t),z5.forEach(t),tm=l(Yc),od=s(Yc,"SPAN",{});var q5=a(od);nm=i(q5,"Inference"),q5.forEach(t),Yc.forEach(t),dc=l(n),gt=s(n,"P",{});var co=a(gt);om=i(co,"At inference time, it is recommended to use "),lr=s(co,"A",{href:!0});var E5=a(lr);sm=i(E5,"generate()"),E5.forEach(t),am=i(co,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),No=s(co,"A",{href:!0,rel:!0});var j5=a(No);rm=i(j5,"this blog post"),j5.forEach(t),im=i(co,` to know all the details about generating text with Transformers.
There\u2019s also `),Do=s(co,"A",{href:!0,rel:!0});var F5=a(Do);dm=i(F5,"this blog post"),F5.forEach(t),lm=i(co,` which explains how
generation works in general in encoder-decoder models.`),co.forEach(t),lc=l(n),_(So.$$.fragment,n),cc=l(n),We=s(n,"P",{});var It=a(We);cm=i(It,"Note that T5 uses the "),sd=s(It,"CODE",{});var M5=a(sd);pm=i(M5,"pad_token_id"),M5.forEach(t),hm=i(It," as the "),ad=s(It,"CODE",{});var P5=a(ad);um=i(P5,"decoder_start_token_id"),P5.forEach(t),mm=i(It,`, so when doing generation without using
`),cr=s(It,"A",{href:!0});var C5=a(cr);fm=i(C5,"generate()"),C5.forEach(t),_m=i(It,", make sure you start it with the "),rd=s(It,"CODE",{});var O5=a(rd);gm=i(O5,"pad_token_id"),O5.forEach(t),Tm=i(It,"."),It.forEach(t),pc=l(n),pr=s(n,"P",{});var L5=a(pr);vm=i(L5,"The example above only shows a single example. You can also do batched inference, like so:"),L5.forEach(t),hc=l(n),_(Go.$$.fragment,n),uc=l(n),hr=s(n,"A",{id:!0}),a(hr).forEach(t),mc=l(n),en=s(n,"H2",{class:!0});var Zc=a(en);Cn=s(Zc,"A",{id:!0,class:!0,href:!0});var A5=a(Cn);id=s(A5,"SPAN",{});var I5=a(id);_(Bo.$$.fragment,I5),I5.forEach(t),A5.forEach(t),km=l(Zc),dd=s(Zc,"SPAN",{});var N5=a(dd);bm=i(N5,"Performance"),N5.forEach(t),Zc.forEach(t),fc=l(n),Tt=s(n,"P",{});var po=a(Tt);ym=i(po,"If you\u2019d like a faster training and inference performance, install "),Wo=s(po,"A",{href:!0,rel:!0});var D5=a(Wo);wm=i(D5,"apex"),D5.forEach(t),xm=i(po," and then the model will automatically use "),ld=s(po,"CODE",{});var S5=a(ld);zm=i(S5,"apex.normalization.FusedRMSNorm"),S5.forEach(t),$m=i(po," instead of "),cd=s(po,"CODE",{});var G5=a(cd);qm=i(G5,"T5LayerNorm"),G5.forEach(t),Em=i(po,". The former uses an optimized fused kernel which is several times faster than the latter."),po.forEach(t),_c=l(n),tn=s(n,"H2",{class:!0});var Jc=a(tn);On=s(Jc,"A",{id:!0,class:!0,href:!0});var B5=a(On);pd=s(B5,"SPAN",{});var W5=a(pd);_(Uo.$$.fragment,W5),W5.forEach(t),B5.forEach(t),jm=l(Jc),hd=s(Jc,"SPAN",{});var U5=a(hd);Fm=i(U5,"Example scripts"),U5.forEach(t),Jc.forEach(t),gc=l(n),ur=s(n,"P",{});var R5=a(ur);Mm=i(R5,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),R5.forEach(t),Tc=l(n),Ln=s(n,"UL",{});var Xc=a(Ln);ud=s(Xc,"LI",{});var H5=a(ud);nn=s(H5,"P",{});var Ur=a(nn);Pm=i(Ur,"pre-training: the "),Ro=s(Ur,"A",{href:!0,rel:!0});var V5=a(Ro);Cm=i(V5,"run_t5_mlm_flax.py"),V5.forEach(t),Om=i(Ur,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Ho=s(Ur,"A",{href:!0,rel:!0});var K5=a(Ho);Lm=i(K5,"t5_tokenizer_model.py"),K5.forEach(t),Am=i(Ur,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Ur.forEach(t),H5.forEach(t),Im=l(Xc),md=s(Xc,"LI",{});var Y5=a(md);Ne=s(Y5,"P",{});var yt=a(Ne);Nm=i(yt,"fine-tuning: T5 is supported by the official summarization scripts ("),Vo=s(yt,"A",{href:!0,rel:!0});var Z5=a(Vo);Dm=i(Z5,"PyTorch"),Z5.forEach(t),Sm=i(yt,", "),Ko=s(yt,"A",{href:!0,rel:!0});var J5=a(Ko);Gm=i(J5,"Tensorflow"),J5.forEach(t),Bm=i(yt,", and "),Yo=s(yt,"A",{href:!0,rel:!0});var X5=a(Yo);Wm=i(X5,"Flax"),X5.forEach(t),Um=i(yt,`) and translation scripts
(`),Zo=s(yt,"A",{href:!0,rel:!0});var Q5=a(Zo);Rm=i(Q5,"PyTorch"),Q5.forEach(t),Hm=i(yt," and "),Jo=s(yt,"A",{href:!0,rel:!0});var ey=a(Jo);Vm=i(ey,"Tensorflow"),ey.forEach(t),Km=i(yt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),yt.forEach(t),Y5.forEach(t),Xc.forEach(t),vc=l(n),on=s(n,"H2",{class:!0});var Qc=a(on);An=s(Qc,"A",{id:!0,class:!0,href:!0});var ty=a(An);fd=s(ty,"SPAN",{});var ny=a(fd);_(Xo.$$.fragment,ny),ny.forEach(t),ty.forEach(t),Ym=l(Qc),_d=s(Qc,"SPAN",{});var oy=a(_d);Zm=i(oy,"T5Config"),oy.forEach(t),Qc.forEach(t),kc=l(n),wt=s(n,"DIV",{class:!0});var Rr=a(wt);_(Qo.$$.fragment,Rr),Jm=l(Rr),xt=s(Rr,"P",{});var ho=a(xt);Xm=i(ho,"This is the configuration class to store the configuration of a "),mr=s(ho,"A",{href:!0});var sy=a(mr);Qm=i(sy,"T5Model"),sy.forEach(t),ef=i(ho," or a "),fr=s(ho,"A",{href:!0});var ay=a(fr);tf=i(ay,"TFT5Model"),ay.forEach(t),nf=i(ho,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),es=s(ho,"A",{href:!0,rel:!0});var ry=a(es);of=i(ry,"t5-small"),ry.forEach(t),sf=i(ho," architecture."),ho.forEach(t),af=l(Rr),sn=s(Rr,"P",{});var Hr=a(sn);rf=i(Hr,"Configuration objects inherit from "),_r=s(Hr,"A",{href:!0});var iy=a(_r);df=i(iy,"PretrainedConfig"),iy.forEach(t),lf=i(Hr,` and can be used to control the model outputs. Read the
documentation from `),gr=s(Hr,"A",{href:!0});var dy=a(gr);cf=i(dy,"PretrainedConfig"),dy.forEach(t),pf=i(Hr," for more information."),Hr.forEach(t),Rr.forEach(t),bc=l(n),an=s(n,"H2",{class:!0});var ep=a(an);In=s(ep,"A",{id:!0,class:!0,href:!0});var ly=a(In);gd=s(ly,"SPAN",{});var cy=a(gd);_(ts.$$.fragment,cy),cy.forEach(t),ly.forEach(t),hf=l(ep),Td=s(ep,"SPAN",{});var py=a(Td);uf=i(py,"T5Tokenizer"),py.forEach(t),ep.forEach(t),yc=l(n),ie=s(n,"DIV",{class:!0});var st=a(ie);_(ns.$$.fragment,st),mf=l(st),os=s(st,"P",{});var tp=a(os);ff=i(tp,"Construct a T5 tokenizer. Based on "),ss=s(tp,"A",{href:!0,rel:!0});var hy=a(ss);_f=i(hy,"SentencePiece"),hy.forEach(t),gf=i(tp,"."),tp.forEach(t),Tf=l(st),as=s(st,"P",{});var np=a(as);vf=i(np,"This tokenizer inherits from "),Tr=s(np,"A",{href:!0});var uy=a(Tr);kf=i(uy,"PreTrainedTokenizer"),uy.forEach(t),bf=i(np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),np.forEach(t),yf=l(st),jt=s(st,"DIV",{class:!0});var Vr=a(jt);_(rs.$$.fragment,Vr),wf=l(Vr),vd=s(Vr,"P",{});var my=a(vd);xf=i(my,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),my.forEach(t),zf=l(Vr),is=s(Vr,"UL",{});var op=a(is);vr=s(op,"LI",{});var Kk=a(vr);$f=i(Kk,"single sequence: "),kd=s(Kk,"CODE",{});var fy=a(kd);qf=i(fy,"X </s>"),fy.forEach(t),Kk.forEach(t),Ef=l(op),kr=s(op,"LI",{});var Yk=a(kr);jf=i(Yk,"pair of sequences: "),bd=s(Yk,"CODE",{});var _y=a(bd);Ff=i(_y,"A </s> B </s>"),_y.forEach(t),Yk.forEach(t),op.forEach(t),Vr.forEach(t),Mf=l(st),Nn=s(st,"DIV",{class:!0});var sp=a(Nn);_(ds.$$.fragment,sp),Pf=l(sp),ls=s(sp,"P",{});var ap=a(ls);Cf=i(ap,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yd=s(ap,"CODE",{});var gy=a(yd);Of=i(gy,"prepare_for_model"),gy.forEach(t),Lf=i(ap," method."),ap.forEach(t),sp.forEach(t),Af=l(st),Dn=s(st,"DIV",{class:!0});var rp=a(Dn);_(cs.$$.fragment,rp),If=l(rp),wd=s(rp,"P",{});var Ty=a(wd);Nf=i(Ty,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Ty.forEach(t),rp.forEach(t),Df=l(st),br=s(st,"DIV",{class:!0});var vy=a(br);_(ps.$$.fragment,vy),vy.forEach(t),st.forEach(t),wc=l(n),rn=s(n,"H2",{class:!0});var ip=a(rn);Sn=s(ip,"A",{id:!0,class:!0,href:!0});var ky=a(Sn);xd=s(ky,"SPAN",{});var by=a(xd);_(hs.$$.fragment,by),by.forEach(t),ky.forEach(t),Sf=l(ip),zd=s(ip,"SPAN",{});var yy=a(zd);Gf=i(yy,"T5TokenizerFast"),yy.forEach(t),ip.forEach(t),xc=l(n),De=s(n,"DIV",{class:!0});var Nt=a(De);_(us.$$.fragment,Nt),Bf=l(Nt),dn=s(Nt,"P",{});var Kr=a(dn);Wf=i(Kr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),$d=s(Kr,"EM",{});var wy=a($d);Uf=i(wy,"tokenizers"),wy.forEach(t),Rf=i(Kr,` library). Based on
`),ms=s(Kr,"A",{href:!0,rel:!0});var xy=a(ms);Hf=i(xy,"Unigram"),xy.forEach(t),Vf=i(Kr,"."),Kr.forEach(t),Kf=l(Nt),fs=s(Nt,"P",{});var dp=a(fs);Yf=i(dp,"This tokenizer inherits from "),yr=s(dp,"A",{href:!0});var zy=a(yr);Zf=i(zy,"PreTrainedTokenizerFast"),zy.forEach(t),Jf=i(dp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),dp.forEach(t),Xf=l(Nt),Ft=s(Nt,"DIV",{class:!0});var Yr=a(Ft);_(_s.$$.fragment,Yr),Qf=l(Yr),qd=s(Yr,"P",{});var $y=a(qd);e_=i($y,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),$y.forEach(t),t_=l(Yr),gs=s(Yr,"UL",{});var lp=a(gs);wr=s(lp,"LI",{});var Zk=a(wr);n_=i(Zk,"single sequence: "),Ed=s(Zk,"CODE",{});var qy=a(Ed);o_=i(qy,"X </s>"),qy.forEach(t),Zk.forEach(t),s_=l(lp),xr=s(lp,"LI",{});var Jk=a(xr);a_=i(Jk,"pair of sequences: "),jd=s(Jk,"CODE",{});var Ey=a(jd);r_=i(Ey,"A </s> B </s>"),Ey.forEach(t),Jk.forEach(t),lp.forEach(t),Yr.forEach(t),i_=l(Nt),Gn=s(Nt,"DIV",{class:!0});var cp=a(Gn);_(Ts.$$.fragment,cp),d_=l(cp),Fd=s(cp,"P",{});var jy=a(Fd);l_=i(jy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),jy.forEach(t),cp.forEach(t),Nt.forEach(t),zc=l(n),ln=s(n,"H2",{class:!0});var pp=a(ln);Bn=s(pp,"A",{id:!0,class:!0,href:!0});var Fy=a(Bn);Md=s(Fy,"SPAN",{});var My=a(Md);_(vs.$$.fragment,My),My.forEach(t),Fy.forEach(t),c_=l(pp),Pd=s(pp,"SPAN",{});var Py=a(Pd);p_=i(Py,"T5Model"),Py.forEach(t),pp.forEach(t),$c=l(n),J=s(n,"DIV",{class:!0});var xe=a(J);_(ks.$$.fragment,xe),h_=l(xe),Cd=s(xe,"P",{});var Cy=a(Cd);u_=i(Cy,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Cy.forEach(t),m_=l(xe),bs=s(xe,"P",{});var hp=a(bs);f_=i(hp,"The T5 model was proposed in "),ys=s(hp,"A",{href:!0,rel:!0});var Oy=a(ys);__=i(Oy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Oy.forEach(t),g_=i(hp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),hp.forEach(t),T_=l(xe),ws=s(xe,"P",{});var up=a(ws);v_=i(up,"This model inherits from "),zr=s(up,"A",{href:!0});var Ly=a(zr);k_=i(Ly,"PreTrainedModel"),Ly.forEach(t),b_=i(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),y_=l(xe),xs=s(xe,"P",{});var mp=a(xs);w_=i(mp,"This model is also a PyTorch "),zs=s(mp,"A",{href:!0,rel:!0});var Ay=a(zs);x_=i(Ay,"torch.nn.Module"),Ay.forEach(t),z_=i(mp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp.forEach(t),$_=l(xe),Ue=s(xe,"DIV",{class:!0});var Dt=a(Ue);_($s.$$.fragment,Dt),q_=l(Dt),cn=s(Dt,"P",{});var Zr=a(cn);E_=i(Zr,"The "),$r=s(Zr,"A",{href:!0});var Iy=a($r);j_=i(Iy,"T5Model"),Iy.forEach(t),F_=i(Zr," forward method, overrides the "),Od=s(Zr,"CODE",{});var Ny=a(Od);M_=i(Ny,"__call__"),Ny.forEach(t),P_=i(Zr," special method."),Zr.forEach(t),C_=l(Dt),_(Wn.$$.fragment,Dt),O_=l(Dt),Ld=s(Dt,"P",{});var Dy=a(Ld);L_=i(Dy,"Example:"),Dy.forEach(t),A_=l(Dt),_(qs.$$.fragment,Dt),Dt.forEach(t),I_=l(xe),Re=s(xe,"DIV",{class:!0});var St=a(Re);_(Es.$$.fragment,St),N_=l(St),Ad=s(St,"P",{});var Sy=a(Ad);D_=i(Sy,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Sy.forEach(t),S_=l(St),Id=s(St,"P",{});var Gy=a(Id);G_=i(Gy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Gy.forEach(t),B_=l(St),Nd=s(St,"P",{});var By=a(Nd);W_=i(By,"Example:"),By.forEach(t),U_=l(St),_(js.$$.fragment,St),St.forEach(t),R_=l(xe),vt=s(xe,"DIV",{class:!0});var uo=a(vt);_(Fs.$$.fragment,uo),H_=l(uo),Dd=s(uo,"P",{});var Wy=a(Dd);V_=i(Wy,"Moves the model to cpu from a model parallel state."),Wy.forEach(t),K_=l(uo),Sd=s(uo,"P",{});var Uy=a(Sd);Y_=i(Uy,"Example:"),Uy.forEach(t),Z_=l(uo),_(Ms.$$.fragment,uo),uo.forEach(t),xe.forEach(t),qc=l(n),pn=s(n,"H2",{class:!0});var fp=a(pn);Un=s(fp,"A",{id:!0,class:!0,href:!0});var Ry=a(Un);Gd=s(Ry,"SPAN",{});var Hy=a(Gd);_(Ps.$$.fragment,Hy),Hy.forEach(t),Ry.forEach(t),J_=l(fp),Bd=s(fp,"SPAN",{});var Vy=a(Bd);X_=i(Vy,"T5ForConditionalGeneration"),Vy.forEach(t),fp.forEach(t),Ec=l(n),X=s(n,"DIV",{class:!0});var ze=a(X);_(Cs.$$.fragment,ze),Q_=l(ze),Os=s(ze,"P",{});var _p=a(Os);eg=i(_p,"T5 Model with a "),Wd=s(_p,"CODE",{});var Ky=a(Wd);tg=i(Ky,"language modeling"),Ky.forEach(t),ng=i(_p," head on top."),_p.forEach(t),og=l(ze),Ls=s(ze,"P",{});var gp=a(Ls);sg=i(gp,"The T5 model was proposed in "),As=s(gp,"A",{href:!0,rel:!0});var Yy=a(As);ag=i(Yy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Yy.forEach(t),rg=i(gp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),gp.forEach(t),ig=l(ze),Is=s(ze,"P",{});var Tp=a(Is);dg=i(Tp,"This model inherits from "),qr=s(Tp,"A",{href:!0});var Zy=a(qr);lg=i(Zy,"PreTrainedModel"),Zy.forEach(t),cg=i(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),pg=l(ze),Ns=s(ze,"P",{});var vp=a(Ns);hg=i(vp,"This model is also a PyTorch "),Ds=s(vp,"A",{href:!0,rel:!0});var Jy=a(Ds);ug=i(Jy,"torch.nn.Module"),Jy.forEach(t),mg=i(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(t),fg=l(ze),He=s(ze,"DIV",{class:!0});var Gt=a(He);_(Ss.$$.fragment,Gt),_g=l(Gt),hn=s(Gt,"P",{});var Jr=a(hn);gg=i(Jr,"The "),Er=s(Jr,"A",{href:!0});var Xy=a(Er);Tg=i(Xy,"T5ForConditionalGeneration"),Xy.forEach(t),vg=i(Jr," forward method, overrides the "),Ud=s(Jr,"CODE",{});var Qy=a(Ud);kg=i(Qy,"__call__"),Qy.forEach(t),bg=i(Jr," special method."),Jr.forEach(t),yg=l(Gt),_(Rn.$$.fragment,Gt),wg=l(Gt),Rd=s(Gt,"P",{});var e1=a(Rd);xg=i(e1,"Examples:"),e1.forEach(t),zg=l(Gt),_(Gs.$$.fragment,Gt),Gt.forEach(t),$g=l(ze),Ve=s(ze,"DIV",{class:!0});var Bt=a(Ve);_(Bs.$$.fragment,Bt),qg=l(Bt),Hd=s(Bt,"P",{});var t1=a(Hd);Eg=i(t1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),t1.forEach(t),jg=l(Bt),Vd=s(Bt,"P",{});var n1=a(Vd);Fg=i(n1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),n1.forEach(t),Mg=l(Bt),Kd=s(Bt,"P",{});var o1=a(Kd);Pg=i(o1,"Example:"),o1.forEach(t),Cg=l(Bt),_(Ws.$$.fragment,Bt),Bt.forEach(t),Og=l(ze),kt=s(ze,"DIV",{class:!0});var mo=a(kt);_(Us.$$.fragment,mo),Lg=l(mo),Yd=s(mo,"P",{});var s1=a(Yd);Ag=i(s1,"Moves the model to cpu from a model parallel state."),s1.forEach(t),Ig=l(mo),Zd=s(mo,"P",{});var a1=a(Zd);Ng=i(a1,"Example:"),a1.forEach(t),Dg=l(mo),_(Rs.$$.fragment,mo),mo.forEach(t),ze.forEach(t),jc=l(n),un=s(n,"H2",{class:!0});var kp=a(un);Hn=s(kp,"A",{id:!0,class:!0,href:!0});var r1=a(Hn);Jd=s(r1,"SPAN",{});var i1=a(Jd);_(Hs.$$.fragment,i1),i1.forEach(t),r1.forEach(t),Sg=l(kp),Xd=s(kp,"SPAN",{});var d1=a(Xd);Gg=i(d1,"T5EncoderModel"),d1.forEach(t),kp.forEach(t),Fc=l(n),Q=s(n,"DIV",{class:!0});var $e=a(Q);_(Vs.$$.fragment,$e),Bg=l($e),Qd=s($e,"P",{});var l1=a(Qd);Wg=i(l1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),l1.forEach(t),Ug=l($e),Ks=s($e,"P",{});var bp=a(Ks);Rg=i(bp,"The T5 model was proposed in "),Ys=s(bp,"A",{href:!0,rel:!0});var c1=a(Ys);Hg=i(c1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),c1.forEach(t),Vg=i(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(t),Kg=l($e),Zs=s($e,"P",{});var yp=a(Zs);Yg=i(yp,"This model inherits from "),jr=s(yp,"A",{href:!0});var p1=a(jr);Zg=i(p1,"PreTrainedModel"),p1.forEach(t),Jg=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),Xg=l($e),Js=s($e,"P",{});var wp=a(Js);Qg=i(wp,"This model is also a PyTorch "),Xs=s(wp,"A",{href:!0,rel:!0});var h1=a(Xs);eT=i(h1,"torch.nn.Module"),h1.forEach(t),tT=i(wp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp.forEach(t),nT=l($e),Ke=s($e,"DIV",{class:!0});var Wt=a(Ke);_(Qs.$$.fragment,Wt),oT=l(Wt),mn=s(Wt,"P",{});var Xr=a(mn);sT=i(Xr,"The "),Fr=s(Xr,"A",{href:!0});var u1=a(Fr);aT=i(u1,"T5EncoderModel"),u1.forEach(t),rT=i(Xr," forward method, overrides the "),el=s(Xr,"CODE",{});var m1=a(el);iT=i(m1,"__call__"),m1.forEach(t),dT=i(Xr," special method."),Xr.forEach(t),lT=l(Wt),_(Vn.$$.fragment,Wt),cT=l(Wt),tl=s(Wt,"P",{});var f1=a(tl);pT=i(f1,"Example:"),f1.forEach(t),hT=l(Wt),_(ea.$$.fragment,Wt),Wt.forEach(t),uT=l($e),Ye=s($e,"DIV",{class:!0});var Ut=a(Ye);_(ta.$$.fragment,Ut),mT=l(Ut),nl=s(Ut,"P",{});var _1=a(nl);fT=i(_1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),_1.forEach(t),_T=l(Ut),ol=s(Ut,"P",{});var g1=a(ol);gT=i(g1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),g1.forEach(t),TT=l(Ut),sl=s(Ut,"P",{});var T1=a(sl);vT=i(T1,"Example:"),T1.forEach(t),kT=l(Ut),_(na.$$.fragment,Ut),Ut.forEach(t),bT=l($e),bt=s($e,"DIV",{class:!0});var fo=a(bt);_(oa.$$.fragment,fo),yT=l(fo),al=s(fo,"P",{});var v1=a(al);wT=i(v1,"Moves the model to cpu from a model parallel state."),v1.forEach(t),xT=l(fo),rl=s(fo,"P",{});var k1=a(rl);zT=i(k1,"Example:"),k1.forEach(t),$T=l(fo),_(sa.$$.fragment,fo),fo.forEach(t),$e.forEach(t),Mc=l(n),fn=s(n,"H2",{class:!0});var xp=a(fn);Kn=s(xp,"A",{id:!0,class:!0,href:!0});var b1=a(Kn);il=s(b1,"SPAN",{});var y1=a(il);_(aa.$$.fragment,y1),y1.forEach(t),b1.forEach(t),qT=l(xp),dl=s(xp,"SPAN",{});var w1=a(dl);ET=i(w1,"TFT5Model"),w1.forEach(t),xp.forEach(t),Pc=l(n),de=s(n,"DIV",{class:!0});var at=a(de);_(ra.$$.fragment,at),jT=l(at),ll=s(at,"P",{});var x1=a(ll);FT=i(x1,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),x1.forEach(t),MT=l(at),ia=s(at,"P",{});var zp=a(ia);PT=i(zp,"The T5 model was proposed in "),da=s(zp,"A",{href:!0,rel:!0});var z1=a(da);CT=i(z1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),z1.forEach(t),OT=i(zp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),zp.forEach(t),LT=l(at),la=s(at,"P",{});var $p=a(la);AT=i($p,"This model inherits from "),Mr=s($p,"A",{href:!0});var $1=a(Mr);IT=i($1,"TFPreTrainedModel"),$1.forEach(t),NT=i($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(t),DT=l(at),ca=s(at,"P",{});var qp=a(ca);ST=i(qp,"This model is also a "),pa=s(qp,"A",{href:!0,rel:!0});var q1=a(pa);GT=i(q1,"tf.keras.Model"),q1.forEach(t),BT=i(qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qp.forEach(t),WT=l(at),_(Yn.$$.fragment,at),UT=l(at),Ze=s(at,"DIV",{class:!0});var Rt=a(Ze);_(ha.$$.fragment,Rt),RT=l(Rt),_n=s(Rt,"P",{});var Qr=a(_n);HT=i(Qr,"The "),Pr=s(Qr,"A",{href:!0});var E1=a(Pr);VT=i(E1,"TFT5Model"),E1.forEach(t),KT=i(Qr," forward method, overrides the "),cl=s(Qr,"CODE",{});var j1=a(cl);YT=i(j1,"__call__"),j1.forEach(t),ZT=i(Qr," special method."),Qr.forEach(t),JT=l(Rt),_(Zn.$$.fragment,Rt),XT=l(Rt),pl=s(Rt,"P",{});var F1=a(pl);QT=i(F1,"Examples:"),F1.forEach(t),ev=l(Rt),_(ua.$$.fragment,Rt),Rt.forEach(t),at.forEach(t),Cc=l(n),gn=s(n,"H2",{class:!0});var Ep=a(gn);Jn=s(Ep,"A",{id:!0,class:!0,href:!0});var M1=a(Jn);hl=s(M1,"SPAN",{});var P1=a(hl);_(ma.$$.fragment,P1),P1.forEach(t),M1.forEach(t),tv=l(Ep),ul=s(Ep,"SPAN",{});var C1=a(ul);nv=i(C1,"TFT5ForConditionalGeneration"),C1.forEach(t),Ep.forEach(t),Oc=l(n),le=s(n,"DIV",{class:!0});var rt=a(le);_(fa.$$.fragment,rt),ov=l(rt),_a=s(rt,"P",{});var jp=a(_a);sv=i(jp,"T5 Model with a "),ml=s(jp,"CODE",{});var O1=a(ml);av=i(O1,"language modeling"),O1.forEach(t),rv=i(jp," head on top."),jp.forEach(t),iv=l(rt),ga=s(rt,"P",{});var Fp=a(ga);dv=i(Fp,"The T5 model was proposed in "),Ta=s(Fp,"A",{href:!0,rel:!0});var L1=a(Ta);lv=i(L1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),L1.forEach(t),cv=i(Fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Fp.forEach(t),pv=l(rt),va=s(rt,"P",{});var Mp=a(va);hv=i(Mp,"This model inherits from "),Cr=s(Mp,"A",{href:!0});var A1=a(Cr);uv=i(A1,"TFPreTrainedModel"),A1.forEach(t),mv=i(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(t),fv=l(rt),ka=s(rt,"P",{});var Pp=a(ka);_v=i(Pp,"This model is also a "),ba=s(Pp,"A",{href:!0,rel:!0});var I1=a(ba);gv=i(I1,"tf.keras.Model"),I1.forEach(t),Tv=i(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(t),vv=l(rt),_(Xn.$$.fragment,rt),kv=l(rt),Je=s(rt,"DIV",{class:!0});var Ht=a(Je);_(ya.$$.fragment,Ht),bv=l(Ht),Tn=s(Ht,"P",{});var ei=a(Tn);yv=i(ei,"The "),Or=s(ei,"A",{href:!0});var N1=a(Or);wv=i(N1,"TFT5ForConditionalGeneration"),N1.forEach(t),xv=i(ei," forward method, overrides the "),fl=s(ei,"CODE",{});var D1=a(fl);zv=i(D1,"__call__"),D1.forEach(t),$v=i(ei," special method."),ei.forEach(t),qv=l(Ht),_(Qn.$$.fragment,Ht),Ev=l(Ht),_l=s(Ht,"P",{});var S1=a(_l);jv=i(S1,"Examples:"),S1.forEach(t),Fv=l(Ht),_(wa.$$.fragment,Ht),Ht.forEach(t),rt.forEach(t),Lc=l(n),vn=s(n,"H2",{class:!0});var Cp=a(vn);eo=s(Cp,"A",{id:!0,class:!0,href:!0});var G1=a(eo);gl=s(G1,"SPAN",{});var B1=a(gl);_(xa.$$.fragment,B1),B1.forEach(t),G1.forEach(t),Mv=l(Cp),Tl=s(Cp,"SPAN",{});var W1=a(Tl);Pv=i(W1,"TFT5EncoderModel"),W1.forEach(t),Cp.forEach(t),Ac=l(n),ce=s(n,"DIV",{class:!0});var it=a(ce);_(za.$$.fragment,it),Cv=l(it),vl=s(it,"P",{});var U1=a(vl);Ov=i(U1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),U1.forEach(t),Lv=l(it),$a=s(it,"P",{});var Op=a($a);Av=i(Op,"The T5 model was proposed in "),qa=s(Op,"A",{href:!0,rel:!0});var R1=a(qa);Iv=i(R1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),R1.forEach(t),Nv=i(Op,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Op.forEach(t),Dv=l(it),Ea=s(it,"P",{});var Lp=a(Ea);Sv=i(Lp,"This model inherits from "),Lr=s(Lp,"A",{href:!0});var H1=a(Lr);Gv=i(H1,"TFPreTrainedModel"),H1.forEach(t),Bv=i(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp.forEach(t),Wv=l(it),ja=s(it,"P",{});var Ap=a(ja);Uv=i(Ap,"This model is also a "),Fa=s(Ap,"A",{href:!0,rel:!0});var V1=a(Fa);Rv=i(V1,"tf.keras.Model"),V1.forEach(t),Hv=i(Ap,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ap.forEach(t),Vv=l(it),_(to.$$.fragment,it),Kv=l(it),Xe=s(it,"DIV",{class:!0});var Vt=a(Xe);_(Ma.$$.fragment,Vt),Yv=l(Vt),kn=s(Vt,"P",{});var ti=a(kn);Zv=i(ti,"The "),Ar=s(ti,"A",{href:!0});var K1=a(Ar);Jv=i(K1,"TFT5EncoderModel"),K1.forEach(t),Xv=i(ti," forward method, overrides the "),kl=s(ti,"CODE",{});var Y1=a(kl);Qv=i(Y1,"__call__"),Y1.forEach(t),ek=i(ti," special method."),ti.forEach(t),tk=l(Vt),_(no.$$.fragment,Vt),nk=l(Vt),bl=s(Vt,"P",{});var Z1=a(bl);ok=i(Z1,"Examples:"),Z1.forEach(t),sk=l(Vt),_(Pa.$$.fragment,Vt),Vt.forEach(t),it.forEach(t),Ic=l(n),bn=s(n,"H2",{class:!0});var Ip=a(bn);oo=s(Ip,"A",{id:!0,class:!0,href:!0});var J1=a(oo);yl=s(J1,"SPAN",{});var X1=a(yl);_(Ca.$$.fragment,X1),X1.forEach(t),J1.forEach(t),ak=l(Ip),wl=s(Ip,"SPAN",{});var Q1=a(wl);rk=i(Q1,"FlaxT5Model"),Q1.forEach(t),Ip.forEach(t),Nc=l(n),lt=s(n,"DIV",{class:!0});var _o=a(lt);_(Oa.$$.fragment,_o),ik=l(_o),Qe=s(_o,"DIV",{class:!0});var Kt=a(Qe);_(La.$$.fragment,Kt),dk=l(Kt),yn=s(Kt,"P",{});var ni=a(yn);lk=i(ni,"The "),xl=s(ni,"CODE",{});var ew=a(xl);ck=i(ew,"FlaxT5PreTrainedModel"),ew.forEach(t),pk=i(ni,"forward method, overrides the "),zl=s(ni,"CODE",{});var tw=a(zl);hk=i(tw,"__call__"),tw.forEach(t),uk=i(ni," special method."),ni.forEach(t),mk=l(Kt),_(so.$$.fragment,Kt),fk=l(Kt),$l=s(Kt,"P",{});var nw=a($l);_k=i(nw,"Example:"),nw.forEach(t),gk=l(Kt),_(Aa.$$.fragment,Kt),Kt.forEach(t),Tk=l(_o),Mt=s(_o,"DIV",{class:!0});var oi=a(Mt);_(Ia.$$.fragment,oi),vk=l(oi),ql=s(oi,"P",{});var ow=a(ql);kk=i(ow,"Example:"),ow.forEach(t),bk=l(oi),_(Na.$$.fragment,oi),oi.forEach(t),yk=l(_o),Pt=s(_o,"DIV",{class:!0});var si=a(Pt);_(Da.$$.fragment,si),wk=l(si),El=s(si,"P",{});var sw=a(El);xk=i(sw,"Example:"),sw.forEach(t),zk=l(si),_(Sa.$$.fragment,si),si.forEach(t),_o.forEach(t),Dc=l(n),wn=s(n,"H2",{class:!0});var Np=a(wn);ao=s(Np,"A",{id:!0,class:!0,href:!0});var aw=a(ao);jl=s(aw,"SPAN",{});var rw=a(jl);_(Ga.$$.fragment,rw),rw.forEach(t),aw.forEach(t),$k=l(Np),Fl=s(Np,"SPAN",{});var iw=a(Fl);qk=i(iw,"FlaxT5ForConditionalGeneration"),iw.forEach(t),Np.forEach(t),Sc=l(n),ct=s(n,"DIV",{class:!0});var go=a(ct);_(Ba.$$.fragment,go),Ek=l(go),et=s(go,"DIV",{class:!0});var Yt=a(et);_(Wa.$$.fragment,Yt),jk=l(Yt),xn=s(Yt,"P",{});var ai=a(xn);Fk=i(ai,"The "),Ml=s(ai,"CODE",{});var dw=a(Ml);Mk=i(dw,"FlaxT5PreTrainedModel"),dw.forEach(t),Pk=i(ai,"forward method, overrides the "),Pl=s(ai,"CODE",{});var lw=a(Pl);Ck=i(lw,"__call__"),lw.forEach(t),Ok=i(ai," special method."),ai.forEach(t),Lk=l(Yt),_(ro.$$.fragment,Yt),Ak=l(Yt),Cl=s(Yt,"P",{});var cw=a(Cl);Ik=i(cw,"Example:"),cw.forEach(t),Nk=l(Yt),_(Ua.$$.fragment,Yt),Yt.forEach(t),Dk=l(go),Ct=s(go,"DIV",{class:!0});var ri=a(Ct);_(Ra.$$.fragment,ri),Sk=l(ri),Ol=s(ri,"P",{});var pw=a(Ol);Gk=i(pw,"Example:"),pw.forEach(t),Bk=l(ri),_(Ha.$$.fragment,ri),ri.forEach(t),Wk=l(go),Ot=s(go,"DIV",{class:!0});var ii=a(Ot);_(Va.$$.fragment,ii),Uk=l(ii),Ll=s(ii,"P",{});var hw=a(Ll);Rk=i(hw,"Example:"),hw.forEach(t),Hk=l(ii),_(Ka.$$.fragment,ii),ii.forEach(t),go.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Fw)),c(w,"id","t5"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(E,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ae,"rel","nofollow"),c(L,"href","#training"),c(Le,"href","#inference"),c(Ae,"href","#scripts"),c(To,"href","https://huggingface.co/t5-small"),c(To,"rel","nofollow"),c(vo,"href","https://huggingface.co/t5-base"),c(vo,"rel","nofollow"),c(ko,"href","https://huggingface.co/t5-large"),c(ko,"rel","nofollow"),c(bo,"href","https://huggingface.co/t5-3b"),c(bo,"rel","nofollow"),c(yo,"href","https://huggingface.co/t5-11b"),c(yo,"rel","nofollow"),c(tr,"href","t5v1.1"),c(nr,"href","mt5"),c(or,"href","byt5"),c(wo,"href","https://huggingface.co/models?search=t5"),c(wo,"rel","nofollow"),c(xo,"href","https://huggingface.co/thomwolf"),c(xo,"rel","nofollow"),c(zo,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(zo,"rel","nofollow"),c(sr,"id","training"),c(jn,"id","training"),c(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jn,"href","#training"),c(Zt,"class","relative group"),c(ar,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(rr,"href","/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer"),c(jo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),c(jo,"rel","nofollow"),c(Mo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),c(Mo,"rel","nofollow"),c(Oo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Oo,"rel","nofollow"),c(Lo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Lo,"rel","nofollow"),c(dr,"id","inference"),c(Pn,"id","inference"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#inference"),c(Qt,"class","relative group"),c(lr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(No,"href","https://huggingface.co/blog/how-to-generate"),c(No,"rel","nofollow"),c(Do,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Do,"rel","nofollow"),c(cr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(hr,"id","scripts"),c(Cn,"id","performance"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#performance"),c(en,"class","relative group"),c(Wo,"href","https://github.com/NVIDIA/apex#quick-start"),c(Wo,"rel","nofollow"),c(On,"id","example-scripts"),c(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(On,"href","#example-scripts"),c(tn,"class","relative group"),c(Ro,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Ro,"rel","nofollow"),c(Ho,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Ho,"rel","nofollow"),c(Vo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),c(Vo,"rel","nofollow"),c(Ko,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),c(Ko,"rel","nofollow"),c(Yo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),c(Yo,"rel","nofollow"),c(Zo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),c(Zo,"rel","nofollow"),c(Jo,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),c(Jo,"rel","nofollow"),c(An,"id","transformers.T5Config"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.T5Config"),c(on,"class","relative group"),c(mr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),c(fr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),c(es,"href","https://huggingface.co/t5-small"),c(es,"rel","nofollow"),c(_r,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(gr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(wt,"class","docstring"),c(In,"id","transformers.T5Tokenizer"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5Tokenizer"),c(an,"class","relative group"),c(ss,"href","https://github.com/google/sentencepiece"),c(ss,"rel","nofollow"),c(Tr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(jt,"class","docstring"),c(Nn,"class","docstring"),c(Dn,"class","docstring"),c(br,"class","docstring"),c(ie,"class","docstring"),c(Sn,"id","transformers.T5TokenizerFast"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.T5TokenizerFast"),c(rn,"class","relative group"),c(ms,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(ms,"rel","nofollow"),c(yr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ft,"class","docstring"),c(Gn,"class","docstring"),c(De,"class","docstring"),c(Bn,"id","transformers.T5Model"),c(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bn,"href","#transformers.T5Model"),c(ln,"class","relative group"),c(ys,"href","https://arxiv.org/abs/1910.10683"),c(ys,"rel","nofollow"),c(zr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zs,"rel","nofollow"),c($r,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),c(Ue,"class","docstring"),c(Re,"class","docstring"),c(vt,"class","docstring"),c(J,"class","docstring"),c(Un,"id","transformers.T5ForConditionalGeneration"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.T5ForConditionalGeneration"),c(pn,"class","relative group"),c(As,"href","https://arxiv.org/abs/1910.10683"),c(As,"rel","nofollow"),c(qr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ds,"rel","nofollow"),c(Er,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(kt,"class","docstring"),c(X,"class","docstring"),c(Hn,"id","transformers.T5EncoderModel"),c(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Hn,"href","#transformers.T5EncoderModel"),c(un,"class","relative group"),c(Ys,"href","https://arxiv.org/abs/1910.10683"),c(Ys,"rel","nofollow"),c(jr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xs,"rel","nofollow"),c(Fr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(bt,"class","docstring"),c(Q,"class","docstring"),c(Kn,"id","transformers.TFT5Model"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.TFT5Model"),c(fn,"class","relative group"),c(da,"href","https://arxiv.org/abs/1910.10683"),c(da,"rel","nofollow"),c(Mr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pa,"rel","nofollow"),c(Pr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),c(Ze,"class","docstring"),c(de,"class","docstring"),c(Jn,"id","transformers.TFT5ForConditionalGeneration"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.TFT5ForConditionalGeneration"),c(gn,"class","relative group"),c(Ta,"href","https://arxiv.org/abs/1910.10683"),c(Ta,"rel","nofollow"),c(Cr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ba,"rel","nofollow"),c(Or,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Je,"class","docstring"),c(le,"class","docstring"),c(eo,"id","transformers.TFT5EncoderModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.TFT5EncoderModel"),c(vn,"class","relative group"),c(qa,"href","https://arxiv.org/abs/1910.10683"),c(qa,"rel","nofollow"),c(Lr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fa,"rel","nofollow"),c(Ar,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(oo,"id","transformers.FlaxT5Model"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.FlaxT5Model"),c(bn,"class","relative group"),c(Qe,"class","docstring"),c(Mt,"class","docstring"),c(Pt,"class","docstring"),c(lt,"class","docstring"),c(ao,"id","transformers.FlaxT5ForConditionalGeneration"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.FlaxT5ForConditionalGeneration"),c(wn,"class","relative group"),c(et,"class","docstring"),c(Ct,"class","docstring"),c(Ot,"class","docstring"),c(ct,"class","docstring")},m(n,h){e(document.head,u),p(n,$,h),p(n,b,h),e(b,w),e(w,z),g(x,z,null),e(b,y),e(b,q),e(q,qe),p(n,oe,h),p(n,E,h),e(E,ee),e(ee,S),g(se,S,null),e(E,Ee),e(E,G),e(G,je),p(n,ke,h),p(n,B,h),e(B,I),e(B,ae),e(ae,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,be,h),p(n,ue,h),e(ue,W),e(W,Fe),p(n,ye,h),p(n,P,h),e(P,Me),p(n,H,h),p(n,V,h),e(V,me),e(me,O),e(O,Pe),e(O,fe),e(fe,N),e(O,Ce),e(O,U),e(U,Oe),e(O,m),e(V,j),e(V,te),e(te,Se),e(Se,pt),e(V,D),e(V,Ge),e(Ge,ne),e(ne,ht),e(ne,L),e(L,Y),e(ne,ut),e(ne,Le),e(Le,Z),e(ne,mt),e(ne,Ae),e(Ae,Ie),e(ne,ft),p(n,Vl,h),p(n,Xa,h),e(Xa,Dp),p(n,Kl,h),p(n,Be,h),e(Be,di),e(di,li),e(li,To),e(To,Sp),e(Be,Gp),e(Be,ci),e(ci,pi),e(pi,vo),e(vo,Bp),e(Be,Wp),e(Be,hi),e(hi,ui),e(ui,ko),e(ko,Up),e(Be,Rp),e(Be,mi),e(mi,fi),e(fi,bo),e(bo,Hp),e(Be,Vp),e(Be,_i),e(_i,Qa),e(Qa,yo),e(yo,Kp),e(Qa,Yp),p(n,Yl,h),p(n,er,h),e(er,Zp),p(n,Zl,h),p(n,$t,h),e($t,gi),e(gi,zn),e(zn,Ti),e(Ti,Jp),e(zn,Xp),e(zn,tr),e(tr,Qp),e(zn,eh),e($t,th),e($t,vi),e(vi,$n),e($n,ki),e(ki,nh),e($n,oh),e($n,nr),e(nr,sh),e($n,ah),e($t,rh),e($t,bi),e(bi,qn),e(qn,yi),e(yi,ih),e(qn,dh),e(qn,or),e(or,lh),e(qn,ch),p(n,Jl,h),p(n,En,h),e(En,ph),e(En,wo),e(wo,hh),e(En,uh),p(n,Xl,h),p(n,qt,h),e(qt,mh),e(qt,xo),e(xo,fh),e(qt,_h),e(qt,zo),e(zo,gh),e(qt,Th),p(n,Ql,h),p(n,sr,h),p(n,ec,h),p(n,Zt,h),e(Zt,jn),e(jn,wi),g($o,wi,null),e(Zt,vh),e(Zt,xi),e(xi,kh),p(n,tc,h),p(n,_t,h),e(_t,bh),e(_t,zi),e(zi,yh),e(_t,wh),e(_t,$i),e($i,xh),e(_t,zh),e(_t,qi),e(qi,$h),e(_t,qh),p(n,nc,h),p(n,Fn,h),e(Fn,Eh),e(Fn,ar),e(ar,jh),e(Fn,Fh),p(n,oc,h),p(n,Mn,h),e(Mn,dt),e(dt,Ei),e(Ei,Mh),e(dt,Ph),e(dt,_e),e(_e,Ch),e(_e,ji),e(ji,Oh),e(_e,Lh),e(_e,Fi),e(Fi,Ah),e(_e,Ih),e(_e,Mi),e(Mi,Nh),e(_e,Dh),e(_e,Pi),e(Pi,Sh),e(_e,Gh),e(_e,Ci),e(Ci,Bh),e(_e,Wh),e(_e,rr),e(rr,Uh),e(_e,Rh),e(dt,Hh),e(dt,Oi),e(Oi,Vh),e(dt,Kh),g(qo,dt,null),e(dt,Yh),e(dt,Eo),e(Eo,Zh),e(Eo,jo),e(jo,Jh),e(Eo,Xh),e(Mn,Qh),e(Mn,ge),e(ge,Li),e(Li,eu),e(ge,tu),e(ge,Ai),e(Ai,nu),e(ge,ou),g(Fo,ge,null),e(ge,su),e(ge,re),e(re,au),e(re,Ii),e(Ii,ru),e(re,iu),e(re,Ni),e(Ni,du),e(re,lu),e(re,Di),e(Di,cu),e(re,pu),e(re,Si),e(Si,hu),e(re,uu),e(re,Gi),e(Gi,mu),e(re,fu),e(re,Bi),e(Bi,_u),e(re,gu),e(re,Wi),e(Wi,Tu),e(re,vu),e(ge,ku),e(ge,Jt),e(Jt,bu),e(Jt,Ui),e(Ui,yu),e(Jt,wu),e(Jt,Ri),e(Ri,xu),e(Jt,zu),e(ge,$u),e(ge,Te),e(Te,qu),e(Te,Hi),e(Hi,Eu),e(Te,ju),e(Te,Vi),e(Vi,Fu),e(Te,Mu),e(Te,Ki),e(Ki,Pu),e(Te,Cu),e(Te,Yi),e(Yi,Ou),e(Te,Lu),e(Te,Mo),e(Mo,Au),e(Te,Iu),e(Te,Zi),e(Zi,Nu),e(Te,Du),e(ge,Su),g(Po,ge,null),p(n,sc,h),p(n,ir,h),e(ir,Gu),p(n,ac,h),p(n,Et,h),e(Et,Ji),e(Ji,Co),e(Co,Bu),e(Co,Xi),e(Xi,Wu),e(Co,Uu),e(Et,Ru),e(Et,Qi),e(Qi,Xt),e(Xt,Hu),e(Xt,Oo),e(Oo,Vu),e(Xt,Ku),e(Xt,Lo),e(Lo,Yu),e(Xt,Zu),e(Et,Ju),e(Et,ed),e(ed,Ao),e(Ao,Xu),e(Ao,td),e(td,Qu),e(Ao,em),p(n,rc,h),p(n,dr,h),p(n,ic,h),p(n,Qt,h),e(Qt,Pn),e(Pn,nd),g(Io,nd,null),e(Qt,tm),e(Qt,od),e(od,nm),p(n,dc,h),p(n,gt,h),e(gt,om),e(gt,lr),e(lr,sm),e(gt,am),e(gt,No),e(No,rm),e(gt,im),e(gt,Do),e(Do,dm),e(gt,lm),p(n,lc,h),g(So,n,h),p(n,cc,h),p(n,We,h),e(We,cm),e(We,sd),e(sd,pm),e(We,hm),e(We,ad),e(ad,um),e(We,mm),e(We,cr),e(cr,fm),e(We,_m),e(We,rd),e(rd,gm),e(We,Tm),p(n,pc,h),p(n,pr,h),e(pr,vm),p(n,hc,h),g(Go,n,h),p(n,uc,h),p(n,hr,h),p(n,mc,h),p(n,en,h),e(en,Cn),e(Cn,id),g(Bo,id,null),e(en,km),e(en,dd),e(dd,bm),p(n,fc,h),p(n,Tt,h),e(Tt,ym),e(Tt,Wo),e(Wo,wm),e(Tt,xm),e(Tt,ld),e(ld,zm),e(Tt,$m),e(Tt,cd),e(cd,qm),e(Tt,Em),p(n,_c,h),p(n,tn,h),e(tn,On),e(On,pd),g(Uo,pd,null),e(tn,jm),e(tn,hd),e(hd,Fm),p(n,gc,h),p(n,ur,h),e(ur,Mm),p(n,Tc,h),p(n,Ln,h),e(Ln,ud),e(ud,nn),e(nn,Pm),e(nn,Ro),e(Ro,Cm),e(nn,Om),e(nn,Ho),e(Ho,Lm),e(nn,Am),e(Ln,Im),e(Ln,md),e(md,Ne),e(Ne,Nm),e(Ne,Vo),e(Vo,Dm),e(Ne,Sm),e(Ne,Ko),e(Ko,Gm),e(Ne,Bm),e(Ne,Yo),e(Yo,Wm),e(Ne,Um),e(Ne,Zo),e(Zo,Rm),e(Ne,Hm),e(Ne,Jo),e(Jo,Vm),e(Ne,Km),p(n,vc,h),p(n,on,h),e(on,An),e(An,fd),g(Xo,fd,null),e(on,Ym),e(on,_d),e(_d,Zm),p(n,kc,h),p(n,wt,h),g(Qo,wt,null),e(wt,Jm),e(wt,xt),e(xt,Xm),e(xt,mr),e(mr,Qm),e(xt,ef),e(xt,fr),e(fr,tf),e(xt,nf),e(xt,es),e(es,of),e(xt,sf),e(wt,af),e(wt,sn),e(sn,rf),e(sn,_r),e(_r,df),e(sn,lf),e(sn,gr),e(gr,cf),e(sn,pf),p(n,bc,h),p(n,an,h),e(an,In),e(In,gd),g(ts,gd,null),e(an,hf),e(an,Td),e(Td,uf),p(n,yc,h),p(n,ie,h),g(ns,ie,null),e(ie,mf),e(ie,os),e(os,ff),e(os,ss),e(ss,_f),e(os,gf),e(ie,Tf),e(ie,as),e(as,vf),e(as,Tr),e(Tr,kf),e(as,bf),e(ie,yf),e(ie,jt),g(rs,jt,null),e(jt,wf),e(jt,vd),e(vd,xf),e(jt,zf),e(jt,is),e(is,vr),e(vr,$f),e(vr,kd),e(kd,qf),e(is,Ef),e(is,kr),e(kr,jf),e(kr,bd),e(bd,Ff),e(ie,Mf),e(ie,Nn),g(ds,Nn,null),e(Nn,Pf),e(Nn,ls),e(ls,Cf),e(ls,yd),e(yd,Of),e(ls,Lf),e(ie,Af),e(ie,Dn),g(cs,Dn,null),e(Dn,If),e(Dn,wd),e(wd,Nf),e(ie,Df),e(ie,br),g(ps,br,null),p(n,wc,h),p(n,rn,h),e(rn,Sn),e(Sn,xd),g(hs,xd,null),e(rn,Sf),e(rn,zd),e(zd,Gf),p(n,xc,h),p(n,De,h),g(us,De,null),e(De,Bf),e(De,dn),e(dn,Wf),e(dn,$d),e($d,Uf),e(dn,Rf),e(dn,ms),e(ms,Hf),e(dn,Vf),e(De,Kf),e(De,fs),e(fs,Yf),e(fs,yr),e(yr,Zf),e(fs,Jf),e(De,Xf),e(De,Ft),g(_s,Ft,null),e(Ft,Qf),e(Ft,qd),e(qd,e_),e(Ft,t_),e(Ft,gs),e(gs,wr),e(wr,n_),e(wr,Ed),e(Ed,o_),e(gs,s_),e(gs,xr),e(xr,a_),e(xr,jd),e(jd,r_),e(De,i_),e(De,Gn),g(Ts,Gn,null),e(Gn,d_),e(Gn,Fd),e(Fd,l_),p(n,zc,h),p(n,ln,h),e(ln,Bn),e(Bn,Md),g(vs,Md,null),e(ln,c_),e(ln,Pd),e(Pd,p_),p(n,$c,h),p(n,J,h),g(ks,J,null),e(J,h_),e(J,Cd),e(Cd,u_),e(J,m_),e(J,bs),e(bs,f_),e(bs,ys),e(ys,__),e(bs,g_),e(J,T_),e(J,ws),e(ws,v_),e(ws,zr),e(zr,k_),e(ws,b_),e(J,y_),e(J,xs),e(xs,w_),e(xs,zs),e(zs,x_),e(xs,z_),e(J,$_),e(J,Ue),g($s,Ue,null),e(Ue,q_),e(Ue,cn),e(cn,E_),e(cn,$r),e($r,j_),e(cn,F_),e(cn,Od),e(Od,M_),e(cn,P_),e(Ue,C_),g(Wn,Ue,null),e(Ue,O_),e(Ue,Ld),e(Ld,L_),e(Ue,A_),g(qs,Ue,null),e(J,I_),e(J,Re),g(Es,Re,null),e(Re,N_),e(Re,Ad),e(Ad,D_),e(Re,S_),e(Re,Id),e(Id,G_),e(Re,B_),e(Re,Nd),e(Nd,W_),e(Re,U_),g(js,Re,null),e(J,R_),e(J,vt),g(Fs,vt,null),e(vt,H_),e(vt,Dd),e(Dd,V_),e(vt,K_),e(vt,Sd),e(Sd,Y_),e(vt,Z_),g(Ms,vt,null),p(n,qc,h),p(n,pn,h),e(pn,Un),e(Un,Gd),g(Ps,Gd,null),e(pn,J_),e(pn,Bd),e(Bd,X_),p(n,Ec,h),p(n,X,h),g(Cs,X,null),e(X,Q_),e(X,Os),e(Os,eg),e(Os,Wd),e(Wd,tg),e(Os,ng),e(X,og),e(X,Ls),e(Ls,sg),e(Ls,As),e(As,ag),e(Ls,rg),e(X,ig),e(X,Is),e(Is,dg),e(Is,qr),e(qr,lg),e(Is,cg),e(X,pg),e(X,Ns),e(Ns,hg),e(Ns,Ds),e(Ds,ug),e(Ns,mg),e(X,fg),e(X,He),g(Ss,He,null),e(He,_g),e(He,hn),e(hn,gg),e(hn,Er),e(Er,Tg),e(hn,vg),e(hn,Ud),e(Ud,kg),e(hn,bg),e(He,yg),g(Rn,He,null),e(He,wg),e(He,Rd),e(Rd,xg),e(He,zg),g(Gs,He,null),e(X,$g),e(X,Ve),g(Bs,Ve,null),e(Ve,qg),e(Ve,Hd),e(Hd,Eg),e(Ve,jg),e(Ve,Vd),e(Vd,Fg),e(Ve,Mg),e(Ve,Kd),e(Kd,Pg),e(Ve,Cg),g(Ws,Ve,null),e(X,Og),e(X,kt),g(Us,kt,null),e(kt,Lg),e(kt,Yd),e(Yd,Ag),e(kt,Ig),e(kt,Zd),e(Zd,Ng),e(kt,Dg),g(Rs,kt,null),p(n,jc,h),p(n,un,h),e(un,Hn),e(Hn,Jd),g(Hs,Jd,null),e(un,Sg),e(un,Xd),e(Xd,Gg),p(n,Fc,h),p(n,Q,h),g(Vs,Q,null),e(Q,Bg),e(Q,Qd),e(Qd,Wg),e(Q,Ug),e(Q,Ks),e(Ks,Rg),e(Ks,Ys),e(Ys,Hg),e(Ks,Vg),e(Q,Kg),e(Q,Zs),e(Zs,Yg),e(Zs,jr),e(jr,Zg),e(Zs,Jg),e(Q,Xg),e(Q,Js),e(Js,Qg),e(Js,Xs),e(Xs,eT),e(Js,tT),e(Q,nT),e(Q,Ke),g(Qs,Ke,null),e(Ke,oT),e(Ke,mn),e(mn,sT),e(mn,Fr),e(Fr,aT),e(mn,rT),e(mn,el),e(el,iT),e(mn,dT),e(Ke,lT),g(Vn,Ke,null),e(Ke,cT),e(Ke,tl),e(tl,pT),e(Ke,hT),g(ea,Ke,null),e(Q,uT),e(Q,Ye),g(ta,Ye,null),e(Ye,mT),e(Ye,nl),e(nl,fT),e(Ye,_T),e(Ye,ol),e(ol,gT),e(Ye,TT),e(Ye,sl),e(sl,vT),e(Ye,kT),g(na,Ye,null),e(Q,bT),e(Q,bt),g(oa,bt,null),e(bt,yT),e(bt,al),e(al,wT),e(bt,xT),e(bt,rl),e(rl,zT),e(bt,$T),g(sa,bt,null),p(n,Mc,h),p(n,fn,h),e(fn,Kn),e(Kn,il),g(aa,il,null),e(fn,qT),e(fn,dl),e(dl,ET),p(n,Pc,h),p(n,de,h),g(ra,de,null),e(de,jT),e(de,ll),e(ll,FT),e(de,MT),e(de,ia),e(ia,PT),e(ia,da),e(da,CT),e(ia,OT),e(de,LT),e(de,la),e(la,AT),e(la,Mr),e(Mr,IT),e(la,NT),e(de,DT),e(de,ca),e(ca,ST),e(ca,pa),e(pa,GT),e(ca,BT),e(de,WT),g(Yn,de,null),e(de,UT),e(de,Ze),g(ha,Ze,null),e(Ze,RT),e(Ze,_n),e(_n,HT),e(_n,Pr),e(Pr,VT),e(_n,KT),e(_n,cl),e(cl,YT),e(_n,ZT),e(Ze,JT),g(Zn,Ze,null),e(Ze,XT),e(Ze,pl),e(pl,QT),e(Ze,ev),g(ua,Ze,null),p(n,Cc,h),p(n,gn,h),e(gn,Jn),e(Jn,hl),g(ma,hl,null),e(gn,tv),e(gn,ul),e(ul,nv),p(n,Oc,h),p(n,le,h),g(fa,le,null),e(le,ov),e(le,_a),e(_a,sv),e(_a,ml),e(ml,av),e(_a,rv),e(le,iv),e(le,ga),e(ga,dv),e(ga,Ta),e(Ta,lv),e(ga,cv),e(le,pv),e(le,va),e(va,hv),e(va,Cr),e(Cr,uv),e(va,mv),e(le,fv),e(le,ka),e(ka,_v),e(ka,ba),e(ba,gv),e(ka,Tv),e(le,vv),g(Xn,le,null),e(le,kv),e(le,Je),g(ya,Je,null),e(Je,bv),e(Je,Tn),e(Tn,yv),e(Tn,Or),e(Or,wv),e(Tn,xv),e(Tn,fl),e(fl,zv),e(Tn,$v),e(Je,qv),g(Qn,Je,null),e(Je,Ev),e(Je,_l),e(_l,jv),e(Je,Fv),g(wa,Je,null),p(n,Lc,h),p(n,vn,h),e(vn,eo),e(eo,gl),g(xa,gl,null),e(vn,Mv),e(vn,Tl),e(Tl,Pv),p(n,Ac,h),p(n,ce,h),g(za,ce,null),e(ce,Cv),e(ce,vl),e(vl,Ov),e(ce,Lv),e(ce,$a),e($a,Av),e($a,qa),e(qa,Iv),e($a,Nv),e(ce,Dv),e(ce,Ea),e(Ea,Sv),e(Ea,Lr),e(Lr,Gv),e(Ea,Bv),e(ce,Wv),e(ce,ja),e(ja,Uv),e(ja,Fa),e(Fa,Rv),e(ja,Hv),e(ce,Vv),g(to,ce,null),e(ce,Kv),e(ce,Xe),g(Ma,Xe,null),e(Xe,Yv),e(Xe,kn),e(kn,Zv),e(kn,Ar),e(Ar,Jv),e(kn,Xv),e(kn,kl),e(kl,Qv),e(kn,ek),e(Xe,tk),g(no,Xe,null),e(Xe,nk),e(Xe,bl),e(bl,ok),e(Xe,sk),g(Pa,Xe,null),p(n,Ic,h),p(n,bn,h),e(bn,oo),e(oo,yl),g(Ca,yl,null),e(bn,ak),e(bn,wl),e(wl,rk),p(n,Nc,h),p(n,lt,h),g(Oa,lt,null),e(lt,ik),e(lt,Qe),g(La,Qe,null),e(Qe,dk),e(Qe,yn),e(yn,lk),e(yn,xl),e(xl,ck),e(yn,pk),e(yn,zl),e(zl,hk),e(yn,uk),e(Qe,mk),g(so,Qe,null),e(Qe,fk),e(Qe,$l),e($l,_k),e(Qe,gk),g(Aa,Qe,null),e(lt,Tk),e(lt,Mt),g(Ia,Mt,null),e(Mt,vk),e(Mt,ql),e(ql,kk),e(Mt,bk),g(Na,Mt,null),e(lt,yk),e(lt,Pt),g(Da,Pt,null),e(Pt,wk),e(Pt,El),e(El,xk),e(Pt,zk),g(Sa,Pt,null),p(n,Dc,h),p(n,wn,h),e(wn,ao),e(ao,jl),g(Ga,jl,null),e(wn,$k),e(wn,Fl),e(Fl,qk),p(n,Sc,h),p(n,ct,h),g(Ba,ct,null),e(ct,Ek),e(ct,et),g(Wa,et,null),e(et,jk),e(et,xn),e(xn,Fk),e(xn,Ml),e(Ml,Mk),e(xn,Pk),e(xn,Pl),e(Pl,Ck),e(xn,Ok),e(et,Lk),g(ro,et,null),e(et,Ak),e(et,Cl),e(Cl,Ik),e(et,Nk),g(Ua,et,null),e(ct,Dk),e(ct,Ct),g(Ra,Ct,null),e(Ct,Sk),e(Ct,Ol),e(Ol,Gk),e(Ct,Bk),g(Ha,Ct,null),e(ct,Wk),e(ct,Ot),g(Va,Ot,null),e(Ot,Uk),e(Ot,Ll),e(Ll,Rk),e(Ot,Hk),g(Ka,Ot,null),Gc=!0},p(n,[h]){const Ya={};h&2&&(Ya.$$scope={dirty:h,ctx:n}),Wn.$set(Ya);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:n}),Rn.$set(Al);const Il={};h&2&&(Il.$$scope={dirty:h,ctx:n}),Vn.$set(Il);const Nl={};h&2&&(Nl.$$scope={dirty:h,ctx:n}),Yn.$set(Nl);const Za={};h&2&&(Za.$$scope={dirty:h,ctx:n}),Zn.$set(Za);const Dl={};h&2&&(Dl.$$scope={dirty:h,ctx:n}),Xn.$set(Dl);const Sl={};h&2&&(Sl.$$scope={dirty:h,ctx:n}),Qn.$set(Sl);const Gl={};h&2&&(Gl.$$scope={dirty:h,ctx:n}),to.$set(Gl);const Ja={};h&2&&(Ja.$$scope={dirty:h,ctx:n}),no.$set(Ja);const Bl={};h&2&&(Bl.$$scope={dirty:h,ctx:n}),so.$set(Bl);const Wl={};h&2&&(Wl.$$scope={dirty:h,ctx:n}),ro.$set(Wl)},i(n){Gc||(T(x.$$.fragment,n),T(se.$$.fragment,n),T($o.$$.fragment,n),T(qo.$$.fragment,n),T(Fo.$$.fragment,n),T(Po.$$.fragment,n),T(Io.$$.fragment,n),T(So.$$.fragment,n),T(Go.$$.fragment,n),T(Bo.$$.fragment,n),T(Uo.$$.fragment,n),T(Xo.$$.fragment,n),T(Qo.$$.fragment,n),T(ts.$$.fragment,n),T(ns.$$.fragment,n),T(rs.$$.fragment,n),T(ds.$$.fragment,n),T(cs.$$.fragment,n),T(ps.$$.fragment,n),T(hs.$$.fragment,n),T(us.$$.fragment,n),T(_s.$$.fragment,n),T(Ts.$$.fragment,n),T(vs.$$.fragment,n),T(ks.$$.fragment,n),T($s.$$.fragment,n),T(Wn.$$.fragment,n),T(qs.$$.fragment,n),T(Es.$$.fragment,n),T(js.$$.fragment,n),T(Fs.$$.fragment,n),T(Ms.$$.fragment,n),T(Ps.$$.fragment,n),T(Cs.$$.fragment,n),T(Ss.$$.fragment,n),T(Rn.$$.fragment,n),T(Gs.$$.fragment,n),T(Bs.$$.fragment,n),T(Ws.$$.fragment,n),T(Us.$$.fragment,n),T(Rs.$$.fragment,n),T(Hs.$$.fragment,n),T(Vs.$$.fragment,n),T(Qs.$$.fragment,n),T(Vn.$$.fragment,n),T(ea.$$.fragment,n),T(ta.$$.fragment,n),T(na.$$.fragment,n),T(oa.$$.fragment,n),T(sa.$$.fragment,n),T(aa.$$.fragment,n),T(ra.$$.fragment,n),T(Yn.$$.fragment,n),T(ha.$$.fragment,n),T(Zn.$$.fragment,n),T(ua.$$.fragment,n),T(ma.$$.fragment,n),T(fa.$$.fragment,n),T(Xn.$$.fragment,n),T(ya.$$.fragment,n),T(Qn.$$.fragment,n),T(wa.$$.fragment,n),T(xa.$$.fragment,n),T(za.$$.fragment,n),T(to.$$.fragment,n),T(Ma.$$.fragment,n),T(no.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(Oa.$$.fragment,n),T(La.$$.fragment,n),T(so.$$.fragment,n),T(Aa.$$.fragment,n),T(Ia.$$.fragment,n),T(Na.$$.fragment,n),T(Da.$$.fragment,n),T(Sa.$$.fragment,n),T(Ga.$$.fragment,n),T(Ba.$$.fragment,n),T(Wa.$$.fragment,n),T(ro.$$.fragment,n),T(Ua.$$.fragment,n),T(Ra.$$.fragment,n),T(Ha.$$.fragment,n),T(Va.$$.fragment,n),T(Ka.$$.fragment,n),Gc=!0)},o(n){v(x.$$.fragment,n),v(se.$$.fragment,n),v($o.$$.fragment,n),v(qo.$$.fragment,n),v(Fo.$$.fragment,n),v(Po.$$.fragment,n),v(Io.$$.fragment,n),v(So.$$.fragment,n),v(Go.$$.fragment,n),v(Bo.$$.fragment,n),v(Uo.$$.fragment,n),v(Xo.$$.fragment,n),v(Qo.$$.fragment,n),v(ts.$$.fragment,n),v(ns.$$.fragment,n),v(rs.$$.fragment,n),v(ds.$$.fragment,n),v(cs.$$.fragment,n),v(ps.$$.fragment,n),v(hs.$$.fragment,n),v(us.$$.fragment,n),v(_s.$$.fragment,n),v(Ts.$$.fragment,n),v(vs.$$.fragment,n),v(ks.$$.fragment,n),v($s.$$.fragment,n),v(Wn.$$.fragment,n),v(qs.$$.fragment,n),v(Es.$$.fragment,n),v(js.$$.fragment,n),v(Fs.$$.fragment,n),v(Ms.$$.fragment,n),v(Ps.$$.fragment,n),v(Cs.$$.fragment,n),v(Ss.$$.fragment,n),v(Rn.$$.fragment,n),v(Gs.$$.fragment,n),v(Bs.$$.fragment,n),v(Ws.$$.fragment,n),v(Us.$$.fragment,n),v(Rs.$$.fragment,n),v(Hs.$$.fragment,n),v(Vs.$$.fragment,n),v(Qs.$$.fragment,n),v(Vn.$$.fragment,n),v(ea.$$.fragment,n),v(ta.$$.fragment,n),v(na.$$.fragment,n),v(oa.$$.fragment,n),v(sa.$$.fragment,n),v(aa.$$.fragment,n),v(ra.$$.fragment,n),v(Yn.$$.fragment,n),v(ha.$$.fragment,n),v(Zn.$$.fragment,n),v(ua.$$.fragment,n),v(ma.$$.fragment,n),v(fa.$$.fragment,n),v(Xn.$$.fragment,n),v(ya.$$.fragment,n),v(Qn.$$.fragment,n),v(wa.$$.fragment,n),v(xa.$$.fragment,n),v(za.$$.fragment,n),v(to.$$.fragment,n),v(Ma.$$.fragment,n),v(no.$$.fragment,n),v(Pa.$$.fragment,n),v(Ca.$$.fragment,n),v(Oa.$$.fragment,n),v(La.$$.fragment,n),v(so.$$.fragment,n),v(Aa.$$.fragment,n),v(Ia.$$.fragment,n),v(Na.$$.fragment,n),v(Da.$$.fragment,n),v(Sa.$$.fragment,n),v(Ga.$$.fragment,n),v(Ba.$$.fragment,n),v(Wa.$$.fragment,n),v(ro.$$.fragment,n),v(Ua.$$.fragment,n),v(Ra.$$.fragment,n),v(Ha.$$.fragment,n),v(Va.$$.fragment,n),v(Ka.$$.fragment,n),Gc=!1},d(n){t(u),n&&t($),n&&t(b),k(x),n&&t(oe),n&&t(E),k(se),n&&t(ke),n&&t(B),n&&t(C),n&&t(he),n&&t(be),n&&t(ue),n&&t(ye),n&&t(P),n&&t(H),n&&t(V),n&&t(Vl),n&&t(Xa),n&&t(Kl),n&&t(Be),n&&t(Yl),n&&t(er),n&&t(Zl),n&&t($t),n&&t(Jl),n&&t(En),n&&t(Xl),n&&t(qt),n&&t(Ql),n&&t(sr),n&&t(ec),n&&t(Zt),k($o),n&&t(tc),n&&t(_t),n&&t(nc),n&&t(Fn),n&&t(oc),n&&t(Mn),k(qo),k(Fo),k(Po),n&&t(sc),n&&t(ir),n&&t(ac),n&&t(Et),n&&t(rc),n&&t(dr),n&&t(ic),n&&t(Qt),k(Io),n&&t(dc),n&&t(gt),n&&t(lc),k(So,n),n&&t(cc),n&&t(We),n&&t(pc),n&&t(pr),n&&t(hc),k(Go,n),n&&t(uc),n&&t(hr),n&&t(mc),n&&t(en),k(Bo),n&&t(fc),n&&t(Tt),n&&t(_c),n&&t(tn),k(Uo),n&&t(gc),n&&t(ur),n&&t(Tc),n&&t(Ln),n&&t(vc),n&&t(on),k(Xo),n&&t(kc),n&&t(wt),k(Qo),n&&t(bc),n&&t(an),k(ts),n&&t(yc),n&&t(ie),k(ns),k(rs),k(ds),k(cs),k(ps),n&&t(wc),n&&t(rn),k(hs),n&&t(xc),n&&t(De),k(us),k(_s),k(Ts),n&&t(zc),n&&t(ln),k(vs),n&&t($c),n&&t(J),k(ks),k($s),k(Wn),k(qs),k(Es),k(js),k(Fs),k(Ms),n&&t(qc),n&&t(pn),k(Ps),n&&t(Ec),n&&t(X),k(Cs),k(Ss),k(Rn),k(Gs),k(Bs),k(Ws),k(Us),k(Rs),n&&t(jc),n&&t(un),k(Hs),n&&t(Fc),n&&t(Q),k(Vs),k(Qs),k(Vn),k(ea),k(ta),k(na),k(oa),k(sa),n&&t(Mc),n&&t(fn),k(aa),n&&t(Pc),n&&t(de),k(ra),k(Yn),k(ha),k(Zn),k(ua),n&&t(Cc),n&&t(gn),k(ma),n&&t(Oc),n&&t(le),k(fa),k(Xn),k(ya),k(Qn),k(wa),n&&t(Lc),n&&t(vn),k(xa),n&&t(Ac),n&&t(ce),k(za),k(to),k(Ma),k(no),k(Pa),n&&t(Ic),n&&t(bn),k(Ca),n&&t(Nc),n&&t(lt),k(Oa),k(La),k(so),k(Aa),k(Ia),k(Na),k(Da),k(Sa),n&&t(Dc),n&&t(wn),k(Ga),n&&t(Sc),n&&t(ct),k(Ba),k(Wa),k(ro),k(Ua),k(Ra),k(Ha),k(Va),k(Ka)}}}const Fw={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function Mw(A){return gw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Iw extends uw{constructor(u){super();mw(this,u,Mw,jw,fw,{})}}export{Iw as default,Fw as metadata};
