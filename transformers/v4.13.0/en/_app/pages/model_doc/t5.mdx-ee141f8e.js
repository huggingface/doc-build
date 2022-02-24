import{S as Vy,i as Ky,s as Yy,e as o,k as d,w as f,t as r,M as Zy,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as p,y as g,q as T,o as v,B as k}from"../../chunks/vendor-68651a14.js";import{T as xt}from"../../chunks/Tip-3fbaa85f.js";import{D as P}from"../../chunks/Docstring-d699e906.js";import{C as se}from"../../chunks/CodeBlock-b98730f5.js";import{I as pe}from"../../chunks/IconCopyLink-8ff17449.js";import"../../chunks/CopyButton-e88c769b.js";function Jy(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function Xy(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function Qy(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function e2(L){let u,z,b,y,$,x,w,E,Fe,ae,j,ee,O,re,Me,G,Pe,ve,B,I,ie,he,F,C,ue,V,ke,me,U,Ce,be,M,Ae,H,R,_e,A,Ne,ge,S,Le,W,Ie;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),$=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),ae=d(),j=o("p"),ee=r("This second option is useful when using "),O=o("code"),re=r("tf.keras.Model.fit"),Me=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),G=o("code"),Pe=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he=d(),F=o("ul"),C=o("li"),ue=r("a single Tensor with "),V=o("code"),ke=r("input_ids"),me=r(" only and nothing else: "),U=o("code"),Ce=r("model(inputs_ids)"),be=d(),M=o("li"),Ae=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),R=r("model([input_ids, attention_mask])"),_e=r(" or "),A=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=d(),S=o("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ie=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var q=a(u);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);$=s(te,"LI",{});var Ue=a($);x=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),w=l(te),E=s(te,"LI",{});var lt=a(E);Fe=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),ae=l(m),j=s(m,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),O=s(D,"CODE",{});var We=a(O);re=i(We,"tf.keras.Model.fit"),We.forEach(t),Me=i(D,` method which currently requires having all
the tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Pe=i(ne,"model(inputs)"),ne.forEach(t),ve=i(D,"."),D.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ie=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ct.forEach(t),he=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var K=a(C);ue=i(K,"a single Tensor with "),V=s(K,"CODE",{});var pt=a(V);ke=i(pt,"input_ids"),pt.forEach(t),me=i(K," only and nothing else: "),U=s(K,"CODE",{});var Se=a(U);Ce=i(Se,"model(inputs_ids)"),Se.forEach(t),K.forEach(t),be=l(N),M=s(N,"LI",{});var Y=a(M);Ae=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Y,"CODE",{});var ht=a(H);R=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),_e=i(Y," or "),A=s(Y,"CODE",{});var De=a(A);Ne=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),ge=l(N),S=s(N,"LI",{});var Oe=a(S);Le=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Oe,"CODE",{});var ut=a(W);Ie=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Oe.forEach(t),N.forEach(t)},m(m,q){p(m,u,q),e(u,z),p(m,b,q),p(m,y,q),e(y,$),e($,x),e(y,w),e(y,E),e(E,Fe),p(m,ae,q),p(m,j,q),e(j,ee),e(j,O),e(O,re),e(j,Me),e(j,G),e(G,Pe),e(j,ve),p(m,B,q),p(m,I,q),e(I,ie),p(m,he,q),p(m,F,q),e(F,C),e(C,ue),e(C,V),e(V,ke),e(C,me),e(C,U),e(U,Ce),e(F,be),e(F,M),e(M,Ae),e(M,H),e(H,R),e(M,_e),e(M,A),e(A,Ne),e(F,ge),e(F,S),e(S,Le),e(S,W),e(W,Ie)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(ae),m&&t(j),m&&t(B),m&&t(I),m&&t(he),m&&t(F)}}}function t2(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function n2(L){let u,z,b,y,$,x,w,E,Fe,ae,j,ee,O,re,Me,G,Pe,ve,B,I,ie,he,F,C,ue,V,ke,me,U,Ce,be,M,Ae,H,R,_e,A,Ne,ge,S,Le,W,Ie;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),$=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),ae=d(),j=o("p"),ee=r("This second option is useful when using "),O=o("code"),re=r("tf.keras.Model.fit"),Me=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),G=o("code"),Pe=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he=d(),F=o("ul"),C=o("li"),ue=r("a single Tensor with "),V=o("code"),ke=r("input_ids"),me=r(" only and nothing else: "),U=o("code"),Ce=r("model(inputs_ids)"),be=d(),M=o("li"),Ae=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),R=r("model([input_ids, attention_mask])"),_e=r(" or "),A=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=d(),S=o("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ie=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var q=a(u);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);$=s(te,"LI",{});var Ue=a($);x=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),w=l(te),E=s(te,"LI",{});var lt=a(E);Fe=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),ae=l(m),j=s(m,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),O=s(D,"CODE",{});var We=a(O);re=i(We,"tf.keras.Model.fit"),We.forEach(t),Me=i(D,` method which currently requires having all
the tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Pe=i(ne,"model(inputs)"),ne.forEach(t),ve=i(D,"."),D.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ie=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ct.forEach(t),he=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var K=a(C);ue=i(K,"a single Tensor with "),V=s(K,"CODE",{});var pt=a(V);ke=i(pt,"input_ids"),pt.forEach(t),me=i(K," only and nothing else: "),U=s(K,"CODE",{});var Se=a(U);Ce=i(Se,"model(inputs_ids)"),Se.forEach(t),K.forEach(t),be=l(N),M=s(N,"LI",{});var Y=a(M);Ae=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Y,"CODE",{});var ht=a(H);R=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),_e=i(Y," or "),A=s(Y,"CODE",{});var De=a(A);Ne=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),ge=l(N),S=s(N,"LI",{});var Oe=a(S);Le=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Oe,"CODE",{});var ut=a(W);Ie=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Oe.forEach(t),N.forEach(t)},m(m,q){p(m,u,q),e(u,z),p(m,b,q),p(m,y,q),e(y,$),e($,x),e(y,w),e(y,E),e(E,Fe),p(m,ae,q),p(m,j,q),e(j,ee),e(j,O),e(O,re),e(j,Me),e(j,G),e(G,Pe),e(j,ve),p(m,B,q),p(m,I,q),e(I,ie),p(m,he,q),p(m,F,q),e(F,C),e(C,ue),e(C,V),e(V,ke),e(C,me),e(C,U),e(U,Ce),e(F,be),e(F,M),e(M,Ae),e(M,H),e(H,R),e(M,_e),e(M,A),e(A,Ne),e(F,ge),e(F,S),e(S,Le),e(S,W),e(W,Ie)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(ae),m&&t(j),m&&t(B),m&&t(I),m&&t(he),m&&t(F)}}}function o2(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function s2(L){let u,z,b,y,$,x,w,E,Fe,ae,j,ee,O,re,Me,G,Pe,ve,B,I,ie,he,F,C,ue,V,ke,me,U,Ce,be,M,Ae,H,R,_e,A,Ne,ge,S,Le,W,Ie;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),$=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),ae=d(),j=o("p"),ee=r("This second option is useful when using "),O=o("code"),re=r("tf.keras.Model.fit"),Me=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),G=o("code"),Pe=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he=d(),F=o("ul"),C=o("li"),ue=r("a single Tensor with "),V=o("code"),ke=r("input_ids"),me=r(" only and nothing else: "),U=o("code"),Ce=r("model(inputs_ids)"),be=d(),M=o("li"),Ae=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),R=r("model([input_ids, attention_mask])"),_e=r(" or "),A=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=d(),S=o("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ie=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var q=a(u);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);$=s(te,"LI",{});var Ue=a($);x=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),w=l(te),E=s(te,"LI",{});var lt=a(E);Fe=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),ae=l(m),j=s(m,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),O=s(D,"CODE",{});var We=a(O);re=i(We,"tf.keras.Model.fit"),We.forEach(t),Me=i(D,` method which currently requires having all
the tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Pe=i(ne,"model(inputs)"),ne.forEach(t),ve=i(D,"."),D.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ie=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ct.forEach(t),he=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var K=a(C);ue=i(K,"a single Tensor with "),V=s(K,"CODE",{});var pt=a(V);ke=i(pt,"input_ids"),pt.forEach(t),me=i(K," only and nothing else: "),U=s(K,"CODE",{});var Se=a(U);Ce=i(Se,"model(inputs_ids)"),Se.forEach(t),K.forEach(t),be=l(N),M=s(N,"LI",{});var Y=a(M);Ae=i(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Y,"CODE",{});var ht=a(H);R=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),_e=i(Y," or "),A=s(Y,"CODE",{});var De=a(A);Ne=i(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),ge=l(N),S=s(N,"LI",{});var Oe=a(S);Le=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Oe,"CODE",{});var ut=a(W);Ie=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Oe.forEach(t),N.forEach(t)},m(m,q){p(m,u,q),e(u,z),p(m,b,q),p(m,y,q),e(y,$),e($,x),e(y,w),e(y,E),e(E,Fe),p(m,ae,q),p(m,j,q),e(j,ee),e(j,O),e(O,re),e(j,Me),e(j,G),e(G,Pe),e(j,ve),p(m,B,q),p(m,I,q),e(I,ie),p(m,he,q),p(m,F,q),e(F,C),e(C,ue),e(C,V),e(V,ke),e(C,me),e(C,U),e(U,Ce),e(F,be),e(F,M),e(M,Ae),e(M,H),e(H,R),e(M,_e),e(M,A),e(A,Ne),e(F,ge),e(F,S),e(S,Le),e(S,W),e(W,Ie)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(ae),m&&t(j),m&&t(B),m&&t(I),m&&t(he),m&&t(F)}}}function a2(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function r2(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function i2(L){let u,z,b,y,$;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=o("code"),y=r("Module"),$=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,b),e(b,y),e(u,$)},d(x){x&&t(u)}}}function d2(L){let u,z,b,y,$,x,w,E,Fe,ae,j,ee,O,re,Me,G,Pe,ve,B,I,ie,he,F,C,ue,V,ke,me,U,Ce,be,M,Ae,H,R,_e,A,Ne,ge,S,Le,W,Ie,m,q,te,Ue,lt,D,We,ne,ct,N,K,pt,Se,Y,ht,De,Oe,ut,tc,Ra,oh,nc,He,ri,ii,fo,sh,ah,di,li,_o,rh,ih,ci,pi,go,dh,lh,hi,ui,To,ch,ph,mi,Va,vo,hh,uh,oc,Ka,mh,sc,$t,fi,yn,_i,fh,_h,Ya,gh,Th,vh,gi,xn,Ti,kh,bh,Za,wh,yh,xh,vi,$n,ki,$h,zh,Ja,Eh,jh,ac,zn,qh,ko,Fh,Mh,rc,zt,Ph,bo,Ch,Ah,wo,Nh,Lh,ic,Xa,dc,Yt,En,bi,yo,Ih,wi,Sh,lc,mt,Dh,yi,Oh,Gh,xi,Bh,Uh,$i,Wh,Hh,cc,jn,Rh,Qa,Vh,Kh,pc,er,Zt,zi,Yh,Zh,Te,Jh,Ei,Xh,Qh,ji,eu,tu,qi,nu,ou,Fi,su,au,Mi,ru,iu,tr,du,lu,cu,Pi,pu,hc,xo,uc,qn,hu,$o,uu,mu,mc,nr,zo,Ci,fu,_u,Ai,gu,fc,Eo,_c,oe,Tu,Ni,vu,ku,Li,bu,wu,Ii,yu,xu,Si,$u,zu,Di,Eu,ju,Oi,qu,Fu,Gi,Mu,Pu,gc,Et,Cu,Bi,Au,Nu,Ui,Lu,Iu,Tc,fe,Su,Wi,Du,Ou,Hi,Gu,Bu,Ri,Uu,Wu,Vi,Hu,Ru,jo,Vu,Ku,Ki,Yu,Zu,vc,qo,kc,or,Ju,bc,jt,Yi,Fo,Xu,Zi,Qu,em,tm,Ji,Jt,nm,Mo,om,sm,Po,am,rm,im,Xi,Co,dm,Qi,lm,cm,wc,sr,yc,Xt,Fn,ed,Ao,pm,td,hm,xc,ft,um,ar,mm,fm,No,_m,gm,Lo,Tm,vm,$c,Io,zc,Re,km,nd,bm,wm,od,ym,xm,rr,$m,zm,sd,Em,jm,Ec,ir,qm,jc,So,qc,dr,Fc,Qt,Mn,ad,Do,Fm,rd,Mm,Mc,lr,Pm,Pc,Pn,id,en,Cm,Oo,Am,Nm,Go,Lm,Im,Sm,dd,Ge,Dm,Bo,Om,Gm,Uo,Bm,Um,Wo,Wm,Hm,Ho,Rm,Vm,Ro,Km,Ym,Cc,tn,Cn,ld,Vo,Zm,cd,Jm,Ac,kt,Ko,Xm,bt,Qm,cr,ef,tf,pr,nf,of,Yo,sf,af,rf,nn,df,hr,lf,cf,ur,pf,hf,Nc,on,An,pd,Zo,uf,hd,mf,Lc,Z,Jo,ff,Xo,_f,Qo,gf,Tf,vf,es,kf,mr,bf,wf,yf,ts,xf,ns,$f,ud,zf,Ef,jf,qf,qt,os,Ff,md,Mf,Pf,ss,fr,Cf,fd,Af,Nf,_r,Lf,_d,If,Sf,Nn,as,Df,rs,Of,gd,Gf,Bf,Uf,Ln,is,Wf,Td,Hf,Rf,vd,Ic,sn,In,kd,ds,Vf,bd,Kf,Sc,Be,ls,Yf,an,Zf,wd,Jf,Xf,cs,Qf,e_,t_,ps,n_,gr,o_,s_,a_,Ft,hs,r_,yd,i_,d_,us,Tr,l_,xd,c_,p_,vr,h_,$d,u_,m_,Sn,ms,f_,zd,__,Dc,rn,Dn,Ed,fs,g_,jd,T_,Oc,J,_s,v_,qd,k_,b_,gs,w_,Ts,y_,x_,$_,vs,z_,kr,E_,j_,q_,ks,F_,bs,M_,P_,C_,Ve,ws,A_,dn,N_,br,L_,I_,Fd,S_,D_,O_,On,G_,Md,B_,U_,ys,W_,Ke,xs,H_,Pd,R_,V_,Cd,K_,Y_,Ad,Z_,J_,$s,X_,we,zs,Q_,Nd,eg,tg,Ld,ng,og,Gn,Bn,Id,Es,sg,Sd,ag,rg,Dd,ig,dg,Od,lg,Gc,ln,Un,Gd,js,cg,Bd,pg,Bc,X,qs,hg,Fs,ug,Ud,mg,fg,_g,Ms,gg,Ps,Tg,vg,kg,Cs,bg,wr,wg,yg,xg,As,$g,Ns,zg,Eg,jg,Ye,Ls,qg,cn,Fg,yr,Mg,Pg,Wd,Cg,Ag,Ng,Wn,Lg,Hd,Ig,Sg,Is,Dg,Ze,Ss,Og,Rd,Gg,Bg,Vd,Ug,Wg,Kd,Hg,Rg,Ds,Vg,ye,Os,Kg,Yd,Yg,Zg,Zd,Jg,Xg,Hn,Rn,Jd,Gs,Qg,Xd,eT,tT,Qd,nT,oT,el,sT,Uc,pn,Vn,tl,Bs,aT,nl,rT,Wc,Q,Us,iT,ol,dT,lT,Ws,cT,Hs,pT,hT,uT,Rs,mT,xr,fT,_T,gT,Vs,TT,Ks,vT,kT,bT,Je,Ys,wT,hn,yT,$r,xT,$T,sl,zT,ET,jT,Kn,qT,al,FT,MT,Zs,PT,Xe,Js,CT,rl,AT,NT,il,LT,IT,dl,ST,DT,Xs,OT,xe,Qs,GT,ll,BT,UT,cl,WT,HT,Yn,Zn,pl,ea,RT,hl,VT,KT,ul,YT,ZT,ml,JT,Hc,un,Jn,fl,ta,XT,_l,QT,Rc,de,na,ev,gl,tv,nv,oa,ov,sa,sv,av,rv,aa,iv,zr,dv,lv,cv,ra,pv,ia,hv,uv,mv,Xn,fv,Qe,da,_v,mn,gv,Er,Tv,vv,Tl,kv,bv,wv,Qn,yv,vl,xv,$v,la,Vc,fn,eo,kl,ca,zv,bl,Ev,Kc,le,pa,jv,ha,qv,wl,Fv,Mv,Pv,ua,Cv,ma,Av,Nv,Lv,fa,Iv,jr,Sv,Dv,Ov,_a,Gv,ga,Bv,Uv,Wv,to,Hv,et,Ta,Rv,_n,Vv,qr,Kv,Yv,yl,Zv,Jv,Xv,no,Qv,xl,ek,tk,va,Yc,gn,oo,$l,ka,nk,zl,ok,Zc,ce,ba,sk,El,ak,rk,wa,ik,ya,dk,lk,ck,xa,pk,Fr,hk,uk,mk,$a,fk,za,_k,gk,Tk,so,vk,tt,Ea,kk,Tn,bk,Mr,wk,yk,jl,xk,$k,zk,ao,Ek,ql,jk,qk,ja,Jc,vn,ro,Fl,qa,Fk,Ml,Mk,Xc,wt,nt,Fa,Pk,kn,Ck,Pl,Ak,Nk,Cl,Lk,Ik,Sk,io,Dk,Al,Ok,Gk,Ma,Bk,Mt,Pa,Uk,Nl,Wk,Hk,Ca,Rk,Pt,Aa,Vk,Ll,Kk,Yk,Na,Qc,bn,lo,Il,La,Zk,Sl,Jk,ep,yt,ot,Ia,Xk,wn,Qk,Dl,e5,t5,Ol,n5,o5,s5,co,a5,Gl,r5,i5,Sa,d5,Ct,Da,l5,Bl,c5,p5,Oa,h5,At,Ga,u5,Ul,m5,f5,Ba,tp;return x=new pe({}),re=new pe({}),yo=new pe({}),xo=new se({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer('The <extra_id_0> walks in <extra_id_1> park', return_tensors='pt').input_ids
labels = tokenizer('<extra_id_0> cute dog <extra_id_1> the <extra_id_2>', return_tensors='pt').input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&#x27;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&#x27;</span>, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&#x27;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&#x27;</span>, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(<span class="hljs-attribute">input_ids</span>=input_ids, <span class="hljs-attribute">labels</span>=labels).loss`}}),Eo=new se({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer('translate English to German: The house is wonderful.', return_tensors='pt').input_ids
labels = tokenizer('Das Haus ist wunderbar.', return_tensors='pt').input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&#x27;translate English to German: The house is wonderful.&#x27;</span>, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(<span class="hljs-attribute">input_ids</span>=input_ids, <span class="hljs-attribute">labels</span>=labels).loss`}}),qo=new se({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration 
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
encoding = tokenizer([task_prefix + sequence for sequence in input_sequences], 
                     padding='longest', 
                     max_length=max_source_length, 
                     truncation=True, 
                     return_tensors="pt")
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

# encode the targets
target_encoding = tokenizer([output_sequence_1, output_sequence_2], 
                            padding='longest', 
                            max_length=max_target_length, 
                            truncation=True)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100
labels = [
           [(label if label != tokenizer.pad_token_id else -100) for label in labels_example] for labels_example in labels
] 
labels = torch.tensor(labels)

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss,`,highlighted:`from transformers <span class="hljs-built_in">import</span> T5Tokenizer, T5ForConditionalGeneration 
<span class="hljs-built_in">import</span> torch

<span class="hljs-attr">tokenizer</span> = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-attr">model</span> = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
<span class="hljs-attr">max_source_length</span> = <span class="hljs-number">512</span>
<span class="hljs-attr">max_target_length</span> = <span class="hljs-number">128</span>

<span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
<span class="hljs-attr">input_sequence_1</span> = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
<span class="hljs-attr">output_sequence_1</span> = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

<span class="hljs-attr">input_sequence_2</span> = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
<span class="hljs-attr">output_sequence_2</span> = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-comment"># encode the inputs</span>
<span class="hljs-attr">task_prefix</span> = <span class="hljs-string">&quot;translate English to French: &quot;</span>
<span class="hljs-attr">input_sequences</span> = [input_sequence_1, input_sequence_2]
<span class="hljs-attr">encoding</span> = tokenizer([task_prefix + sequence for sequence <span class="hljs-keyword">in</span> input_sequences], 
                     <span class="hljs-attr">padding=&#x27;longest&#x27;,</span> 
                     <span class="hljs-attr">max_length=max_source_length,</span> 
                     <span class="hljs-attr">truncation=True,</span> 
                     <span class="hljs-attr">return_tensors=&quot;pt&quot;)</span>
input_ids, <span class="hljs-attr">attention_mask</span> = encoding.input_ids, encoding.attention_mask

<span class="hljs-comment"># encode the targets</span>
<span class="hljs-attr">target_encoding</span> = tokenizer([output_sequence_1, output_sequence_2], 
                            <span class="hljs-attr">padding=&#x27;longest&#x27;,</span> 
                            <span class="hljs-attr">max_length=max_target_length,</span> 
                            <span class="hljs-attr">truncation=True)</span>
<span class="hljs-attr">labels</span> = target_encoding.input_ids

<span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100</span>
<span class="hljs-attr">labels</span> = [
           [(label <span class="hljs-keyword">if</span> label != tokenizer.pad_token_id <span class="hljs-keyword">else</span> -<span class="hljs-number">100</span>) for label <span class="hljs-keyword">in</span> labels_example] for labels_example <span class="hljs-keyword">in</span> labels
] 
<span class="hljs-attr">labels</span> = torch.tensor(labels)

<span class="hljs-comment"># forward pass</span>
<span class="hljs-attr">loss</span> = model(<span class="hljs-attr">input_ids=input_ids,</span> <span class="hljs-attr">attention_mask=attention_mask,</span> <span class="hljs-attr">labels=labels).loss</span>`}}),Ao=new pe({}),Io=new se({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration 

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer('translate English to German: The house is wonderful.', return_tensors='pt').input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.,`,highlighted:`<span class="hljs-keyword">from</span> transformers import T5Tokenizer, T5ForConditionalGeneration 

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&#x27;translate English to German: The house is wonderful.&#x27;</span>, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[0], <span class="hljs-attribute">skip_special_tokens</span>=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),So=new se({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# when generating, we will use the logits of right-most token to predict the next token
# so the padding should be on the left
tokenizer.padding_side = "left" 
tokenizer.pad_token = tokenizer.eos_token # to avoid an error

task_prefix = 'translate English to German: '
sentences = ['The house is wonderful.', 'I like to work in NYC.'] # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs['input_ids'],
    attention_mask=inputs['attention_mask'],
    do_sample=False, # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.'],`,highlighted:`<span class="hljs-keyword">from</span> transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># when generating, we will use the logits of right-most token to predict the next token</span>
<span class="hljs-comment"># so the padding should be on the left</span>
tokenizer.padding_side = <span class="hljs-string">&quot;left&quot;</span> 
tokenizer.pad_token = tokenizer.eos_token # <span class="hljs-keyword">to</span> avoid an <span class="hljs-built_in">error</span>

task_prefix = <span class="hljs-string">&#x27;translate English to German: &#x27;</span>
sentences = [<span class="hljs-string">&#x27;The house is wonderful.&#x27;</span>, <span class="hljs-string">&#x27;I like to work in NYC.&#x27;</span>] # use different length sentences <span class="hljs-keyword">to</span> test batching
inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&quot;pt&quot;</span>, <span class="hljs-attribute">padding</span>=<span class="hljs-literal">True</span>)

output_sequences = model.generate(
    <span class="hljs-attribute">input_ids</span>=inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>],
    <span class="hljs-attribute">attention_mask</span>=inputs[<span class="hljs-string">&#x27;attention_mask&#x27;</span>],
    <span class="hljs-attribute">do_sample</span>=<span class="hljs-literal">False</span>, # <span class="hljs-built_in">disable</span> sampling <span class="hljs-keyword">to</span> test <span class="hljs-keyword">if</span> batching affects output
)

<span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, <span class="hljs-attribute">skip_special_tokens</span>=<span class="hljs-literal">True</span>))

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Do=new pe({}),Vo=new pe({}),Ko=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/configuration_t5.py#L38",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not
set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses
the <code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Zo=new pe({}),Jo=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),os=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L219",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L159",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L197",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new pe({}),ls=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),hs=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L163",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L189",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new pe({}),_s=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1247",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ws=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1323",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>:
<em>attentions</em>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a
sequence of hidden states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new xt({props:{$$slots:{default:[Jy]},$$scope:{ctx:L}}}),ys=new se({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5Model.from_pretrained('t5-small')

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),xs=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1279",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),$s=new se({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained('t5-3b')
device_map = {0: [0, 1, 2],

1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-3b&#x27;</span>)
device_map = {<span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],

<span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
<span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
<span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>]}
model.parallelize(device_map)`}}),zs=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1291"}}),Es=new pe({}),js=new pe({}),qs=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1433",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ls=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1514",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>:
<em>attentions</em>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a
sequence of hidden states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new xt({props:{$$slots:{default:[Xy]},$$scope:{ctx:L}}}),Is=new se({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5ForConditionalGeneration.from_pretrained('t5-small')

# training
input_ids = tokenizer('The <extra_id_0> walks in <extra_id_1> park', return_tensors='pt').input_ids
labels = tokenizer('<extra_id_0> cute dog <extra_id_1> the <extra_id_2>', return_tensors='pt').input_ids
outputs = model(input_ids=input_ids, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
input_ids = tokenizer("summarize: studies have shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you.,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&#x27;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&#x27;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Ss=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1470",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Ds=new se({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained('t5-3b')
device_map = {0: [0, 1, 2],

1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-3b&#x27;</span>)
device_map = {<span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],

<span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
<span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
<span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>]}
model.parallelize(device_map)`}}),Os=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1483"}}),Gs=new pe({}),Bs=new pe({}),Us=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1724",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ys=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1782",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new xt({props:{$$slots:{default:[Qy]},$$scope:{ctx:L}}}),Zs=new se({props:{code:`from transformers import T5Tokenizer, T5EncoderModel
tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5EncoderModel.from_pretrained('t5-small')
input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Js=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1745",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Xs=new se({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained('t5-3b')
device_map = {0: [0, 1, 2],

1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-3b&#x27;</span>)
device_map = {<span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],

<span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
<span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
<span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>]}
model.parallelize(device_map)`}}),Qs=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1756"}}),ea=new pe({}),ta=new pe({}),na=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1129",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Xn=new xt({props:{$$slots:{default:[e2]},$$scope:{ctx:L}}}),da=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1155",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last
<code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.
head<em>mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, _optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new xt({props:{$$slots:{default:[t2]},$$scope:{ctx:L}}}),la=new se({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = TFT5Model.from_pretrained('t5-small')

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="tf").input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ca=new pe({}),pa=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1293",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),to=new xt({props:{$$slots:{default:[n2]},$$scope:{ctx:L}}}),Ta=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1348",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last
<code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.
head<em>mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, _optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),no=new xt({props:{$$slots:{default:[o2]},$$scope:{ctx:L}}}),va=new se({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = TFT5ForConditionalGeneration.from_pretrained('t5-small')

# training
inputs = tokenizer('The <extra_id_0> walks in <extra_id_1> park', return_tensors='tf').input_ids
labels = tokenizer('<extra_id_0> cute dog <extra_id_1> the <extra_id_2>', return_tensors='tf').input_ids
outputs = model(inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
inputs = tokenizer("summarize: studies have shown that owning a dog is good for you", return_tensors="tf").input_ids  # Batch size 1
outputs = model.generate(inputs)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&#x27;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&#x27;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),ka=new pe({}),ba=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1600",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),so=new xt({props:{$$slots:{default:[s2]},$$scope:{ctx:L}}}),Ea=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1618",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.
head<em>mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, _optional</em>):
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ao=new xt({props:{$$slots:{default:[a2]},$$scope:{ctx:L}}}),ja=new se({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = TFT5EncoderModel.from_pretrained('t5-small')

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="tf").input_ids  # Batch size 1
outputs = model(input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),qa=new pe({}),Fa=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L961",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>:
<em>attentions</em>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a
sequence of hidden states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new xt({props:{$$slots:{default:[r2]},$$scope:{ctx:L}}}),Ma=new se({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5Model.from_pretrained('t5-small')

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="np").input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pa=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1046",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ca=new se({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Aa=new P({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1103",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Na=new se({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors='np')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),La=new pe({}),Ia=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L961",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>:
<em>attentions</em>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a
sequence of hidden states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new xt({props:{$$slots:{default:[i2]},$$scope:{ctx:L}}}),Sa=new se({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors='np')

# Generate Summary
summary_ids = model.generate(inputs['input_ids']).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Da=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1046",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
detail.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oa=new se({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ga=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1467",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached
key, value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ba=new se({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors='np')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),z=d(),b=o("h1"),y=o("a"),$=o("span"),f(x.$$.fragment),w=d(),E=o("span"),Fe=r("T5"),ae=d(),j=o("h2"),ee=o("a"),O=o("span"),f(re.$$.fragment),Me=d(),G=o("span"),Pe=r("Overview"),ve=d(),B=o("p"),I=r("The T5 model was presented in "),ie=o("a"),he=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),ue=o("p"),V=r("The abstract from the paper is the following:"),ke=d(),me=o("p"),U=o("em"),Ce=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),be=d(),M=o("p"),Ae=r("Tips:"),H=d(),R=o("ul"),_e=o("li"),A=o("p"),Ne=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=o("em"),S=r("translate English to German: \u2026"),Le=r(`,
for summarization: `),W=o("em"),Ie=r("summarize: \u2026"),m=r("."),q=d(),te=o("li"),Ue=o("p"),lt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),We=o("li"),ne=o("p"),ct=r("See the "),N=o("a"),K=r("training"),pt=r(", "),Se=o("a"),Y=r("inference"),ht=r(" and "),De=o("a"),Oe=r("scripts"),ut=r(" sections below for all details regarding usage."),tc=d(),Ra=o("p"),oh=r("T5 comes in different sizes:"),nc=d(),He=o("ul"),ri=o("li"),ii=o("p"),fo=o("a"),sh=r("t5-small"),ah=d(),di=o("li"),li=o("p"),_o=o("a"),rh=r("t5-base"),ih=d(),ci=o("li"),pi=o("p"),go=o("a"),dh=r("t5-large"),lh=d(),hi=o("li"),ui=o("p"),To=o("a"),ch=r("t5-3b"),ph=d(),mi=o("li"),Va=o("p"),vo=o("a"),hh=r("t5-11b"),uh=r("."),oc=d(),Ka=o("p"),mh=r("Based on the original T5 model, Google has released some follow-up works:"),sc=d(),$t=o("ul"),fi=o("li"),yn=o("p"),_i=o("strong"),fh=r("T5v1.1"),_h=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ya=o("a"),gh=r("here"),Th=r("."),vh=d(),gi=o("li"),xn=o("p"),Ti=o("strong"),kh=r("mT5"),bh=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Za=o("a"),wh=r("here"),yh=r("."),xh=d(),vi=o("li"),$n=o("p"),ki=o("strong"),$h=r("byT5"),zh=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Ja=o("a"),Eh=r("here"),jh=r("."),ac=d(),zn=o("p"),qh=r("All checkpoints can be found on the "),ko=o("a"),Fh=r("hub"),Mh=r("."),rc=d(),zt=o("p"),Ph=r("This model was contributed by "),bo=o("a"),Ch=r("thomwolf"),Ah=r(". The original code can be found "),wo=o("a"),Nh=r("here"),Lh=r("."),ic=d(),Xa=o("a"),dc=d(),Yt=o("h2"),En=o("a"),bi=o("span"),f(yo.$$.fragment),Ih=d(),wi=o("span"),Sh=r("Training"),lc=d(),mt=o("p"),Dh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),yi=o("code"),Oh=r("input_ids"),Gh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),xi=o("code"),Bh=r("decoder_input_ids"),Uh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),$i=o("code"),Wh=r("labels"),Hh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),cc=d(),jn=o("p"),Rh=r("One can use "),Qa=o("a"),Vh=r("T5ForConditionalGeneration"),Kh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),pc=d(),er=o("ul"),Zt=o("li"),zi=o("p"),Yh=r("Unsupervised denoising training"),Zh=d(),Te=o("p"),Jh=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Ei=o("em"),Xh=r("a.k.a"),Qh=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),ji=o("em"),eu=r("real"),tu=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),qi=o("code"),nu=r("<extra_id_0>"),ou=r(`,
`),Fi=o("code"),su=r("<extra_id_1>"),au=r(", \u2026 up to "),Mi=o("code"),ru=r("<extra_id_99>"),iu=r(`. As a default, 100 sentinel tokens are available in
`),tr=o("a"),du=r("T5Tokenizer"),lu=r("."),cu=d(),Pi=o("p"),pu=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),hc=d(),f(xo.$$.fragment),uc=d(),qn=o("p"),hu=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),$o=o("a"),uu=r("run_t5_mlm_flax.py"),mu=r(` script in the Examples
directory.`),mc=d(),nr=o("ul"),zo=o("li"),Ci=o("p"),fu=r("Supervised training"),_u=d(),Ai=o("p"),gu=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),fc=d(),f(Eo.$$.fragment),_c=d(),oe=o("p"),Tu=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ni=o("code"),vu=r("input_ids"),ku=r(` (which are the
`),Li=o("code"),bu=r("input_ids"),wu=r(" of the encoded input sequence) and "),Ii=o("code"),yu=r("labels"),xu=r(" (which are the "),Si=o("code"),$u=r("input_ids"),zu=r(` of the encoded
target sequence). The model will automatically create the `),Di=o("code"),Eu=r("decoder_input_ids"),ju=r(" based on the "),Oi=o("code"),qu=r("labels"),Fu=r(`, by
shifting them one position to the right and prepending the `),Gi=o("code"),Mu=r("config.decoder_start_token_id"),Pu=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),gc=d(),Et=o("p"),Cu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Bi=o("code"),Au=r("max_source_length"),Nu=r(" and "),Ui=o("code"),Lu=r("max_target_length"),Iu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Tc=d(),fe=o("p"),Su=r("In addition, we must make sure that padding token id\u2019s of the "),Wi=o("code"),Du=r("labels"),Ou=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Hi=o("code"),Gu=r("ignore_index"),Bu=r(`
of the `),Ri=o("code"),Uu=r("CrossEntropyLoss"),Wu=r(". In Flax, one can use the "),Vi=o("code"),Hu=r("decoder_attention_mask"),Ru=r(` to ignore padded tokens from
the loss (see the `),jo=o("a"),Vu=r("Flax summarization script"),Ku=r(` for details). We also pass
`),Ki=o("code"),Yu=r("attention_mask"),Zu=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),vc=d(),f(qo.$$.fragment),kc=d(),or=o("p"),Ju=r("Additional training tips:"),bc=d(),jt=o("ul"),Yi=o("li"),Fo=o("p"),Xu=r("T5 models need a slightly higher learning rate than the default one set in the "),Zi=o("code"),Qu=r("Trainer"),em=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),tm=d(),Ji=o("li"),Jt=o("p"),nm=r("According to "),Mo=o("a"),om=r("this forum post"),sm=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Po=o("a"),am=r("paper"),rm=r(` for the task prefixes
used).`),im=d(),Xi=o("li"),Co=o("p"),dm=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Qi=o("em"),lm=r("pad_to_multiple_of"),cm=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),wc=d(),sr=o("a"),yc=d(),Xt=o("h2"),Fn=o("a"),ed=o("span"),f(Ao.$$.fragment),pm=d(),td=o("span"),hm=r("Inference"),xc=d(),ft=o("p"),um=r("At inference time, it is recommended to use "),ar=o("a"),mm=r("generate()"),fm=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),No=o("a"),_m=r("this blog post"),gm=r(` to know all the details about generating text with Transformers.
There\u2019s also `),Lo=o("a"),Tm=r("this blog post"),vm=r(` which explains how
generation works in general in encoder-decoder models.`),$c=d(),f(Io.$$.fragment),zc=d(),Re=o("p"),km=r("Note that T5 uses the "),nd=o("code"),bm=r("pad_token_id"),wm=r(" as the "),od=o("code"),ym=r("decoder_start_token_id"),xm=r(`, so when doing generation without using
`),rr=o("a"),$m=r("generate()"),zm=r(", make sure you start it with the "),sd=o("code"),Em=r("pad_token_id"),jm=r("."),Ec=d(),ir=o("p"),qm=r("The example above only shows a single example. You can also do batched inference, like so:"),jc=d(),f(So.$$.fragment),qc=d(),dr=o("a"),Fc=d(),Qt=o("h2"),Mn=o("a"),ad=o("span"),f(Do.$$.fragment),Fm=d(),rd=o("span"),Mm=r("Example scripts"),Mc=d(),lr=o("p"),Pm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Pc=d(),Pn=o("ul"),id=o("li"),en=o("p"),Cm=r("pre-training: the "),Oo=o("a"),Am=r("run_t5_mlm_flax.py"),Nm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Go=o("a"),Lm=r("t5_tokenizer_model.py"),Im=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Sm=d(),dd=o("li"),Ge=o("p"),Dm=r("fine-tuning: T5 is supported by the official summarization scripts ("),Bo=o("a"),Om=r("PyTorch"),Gm=r(", "),Uo=o("a"),Bm=r("Tensorflow"),Um=r(", and "),Wo=o("a"),Wm=r("Flax"),Hm=r(`) and translation scripts
(`),Ho=o("a"),Rm=r("PyTorch"),Vm=r(" and "),Ro=o("a"),Km=r("Tensorflow"),Ym=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),Cc=d(),tn=o("h2"),Cn=o("a"),ld=o("span"),f(Vo.$$.fragment),Zm=d(),cd=o("span"),Jm=r("T5Config"),Ac=d(),kt=o("div"),f(Ko.$$.fragment),Xm=d(),bt=o("p"),Qm=r("This is the configuration class to store the configuration of a "),cr=o("a"),ef=r("T5Model"),tf=r(` or a
`),pr=o("a"),nf=r("TFT5Model"),of=r(`. It is used to instantiate a T5 model according to the specified arguments,
defining the model architecture. Instantiating a configuration with the defaults will yield a similar configuration
to that of the T5 `),Yo=o("a"),sf=r("t5-small"),af=r(" architecture."),rf=d(),nn=o("p"),df=r("Configuration objects inherit from "),hr=o("a"),lf=r("PretrainedConfig"),cf=r(` and can be used to control the model
outputs. Read the documentation from `),ur=o("a"),pf=r("PretrainedConfig"),hf=r(" for more information."),Nc=d(),on=o("h2"),An=o("a"),pd=o("span"),f(Zo.$$.fragment),uf=d(),hd=o("span"),mf=r("T5Tokenizer"),Lc=d(),Z=o("div"),f(Jo.$$.fragment),ff=d(),Xo=o("p"),_f=r("Construct a T5 tokenizer. Based on "),Qo=o("a"),gf=r("SentencePiece"),Tf=r("."),vf=d(),es=o("p"),kf=r("This tokenizer inherits from "),mr=o("a"),bf=r("PreTrainedTokenizer"),wf=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),yf=d(),ts=o("p"),xf=r(`Attributes:
sp`),ns=o("em"),$f=r("model ("),ud=o("code"),zf=r("SentencePieceProcessor"),Ef=r(`):
The _SentencePiece`),jf=r(" processor that is used for every conversion (string, tokens and IDs)."),qf=d(),qt=o("div"),f(os.$$.fragment),Ff=d(),md=o("p"),Mf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Pf=d(),ss=o("ul"),fr=o("li"),Cf=r("single sequence: "),fd=o("code"),Af=r("X </s>"),Nf=d(),_r=o("li"),Lf=r("pair of sequences: "),_d=o("code"),If=r("A </s> B </s>"),Sf=d(),Nn=o("div"),f(as.$$.fragment),Df=d(),rs=o("p"),Of=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gd=o("code"),Gf=r("prepare_for_model"),Bf=r(" method."),Uf=d(),Ln=o("div"),f(is.$$.fragment),Wf=d(),Td=o("p"),Hf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Rf=d(),vd=o("div"),Ic=d(),sn=o("h2"),In=o("a"),kd=o("span"),f(ds.$$.fragment),Vf=d(),bd=o("span"),Kf=r("T5TokenizerFast"),Sc=d(),Be=o("div"),f(ls.$$.fragment),Yf=d(),an=o("p"),Zf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),wd=o("em"),Jf=r("tokenizers"),Xf=r(" library). Based on "),cs=o("a"),Qf=r("Unigram"),e_=r("."),t_=d(),ps=o("p"),n_=r("This tokenizer inherits from "),gr=o("a"),o_=r("PreTrainedTokenizerFast"),s_=r(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),a_=d(),Ft=o("div"),f(hs.$$.fragment),r_=d(),yd=o("p"),i_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),d_=d(),us=o("ul"),Tr=o("li"),l_=r("single sequence: "),xd=o("code"),c_=r("X </s>"),p_=d(),vr=o("li"),h_=r("pair of sequences: "),$d=o("code"),u_=r("A </s> B </s>"),m_=d(),Sn=o("div"),f(ms.$$.fragment),f_=d(),zd=o("p"),__=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Dc=d(),rn=o("h2"),Dn=o("a"),Ed=o("span"),f(fs.$$.fragment),g_=d(),jd=o("span"),T_=r("T5Model"),Oc=d(),J=o("div"),f(_s.$$.fragment),v_=d(),qd=o("p"),k_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),b_=d(),gs=o("p"),w_=r("The T5 model was proposed in "),Ts=o("a"),y_=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),x_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),$_=d(),vs=o("p"),z_=r("This model inherits from "),kr=o("a"),E_=r("PreTrainedModel"),j_=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),q_=d(),ks=o("p"),F_=r("This model is also a PyTorch "),bs=o("a"),M_=r("torch.nn.Module"),P_=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),C_=d(),Ve=o("div"),f(ws.$$.fragment),A_=d(),dn=o("p"),N_=r("The "),br=o("a"),L_=r("T5Model"),I_=r(" forward method, overrides the "),Fd=o("code"),S_=r("__call__"),D_=r(" special method."),O_=d(),f(On.$$.fragment),G_=d(),Md=o("p"),B_=r("Example:"),U_=d(),f(ys.$$.fragment),W_=d(),Ke=o("div"),f(xs.$$.fragment),H_=d(),Pd=o("p"),R_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),V_=d(),Cd=o("p"),K_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Y_=d(),Ad=o("p"),Z_=r("Example:"),J_=d(),f($s.$$.fragment),X_=d(),we=o("div"),f(zs.$$.fragment),Q_=d(),Nd=o("p"),eg=r("Moves the model to cpu from a model parallel state."),tg=d(),Ld=o("p"),ng=r("Example::"),og=d(),Gn=o("h1"),Bn=o("a"),Id=o("span"),f(Es.$$.fragment),sg=d(),Sd=o("span"),ag=r("On a 4 GPU machine with t5-3b:"),rg=d(),Dd=o("p"),ig=r(`model = T5ForConditionalGeneration.from_pretrained(\u2018t5-3b\u2019)
device_map = {0: [0, 1, 2],`),dg=d(),Od=o("p"),lg=r(`1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`),Gc=d(),ln=o("h2"),Un=o("a"),Gd=o("span"),f(js.$$.fragment),cg=d(),Bd=o("span"),pg=r("T5ForConditionalGeneration"),Bc=d(),X=o("div"),f(qs.$$.fragment),hg=d(),Fs=o("p"),ug=r("T5 Model with a "),Ud=o("em"),mg=r("language modeling"),fg=r(" head on top."),_g=d(),Ms=o("p"),gg=r("The T5 model was proposed in "),Ps=o("a"),Tg=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),vg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),kg=d(),Cs=o("p"),bg=r("This model inherits from "),wr=o("a"),wg=r("PreTrainedModel"),yg=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),xg=d(),As=o("p"),$g=r("This model is also a PyTorch "),Ns=o("a"),zg=r("torch.nn.Module"),Eg=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),jg=d(),Ye=o("div"),f(Ls.$$.fragment),qg=d(),cn=o("p"),Fg=r("The "),yr=o("a"),Mg=r("T5ForConditionalGeneration"),Pg=r(" forward method, overrides the "),Wd=o("code"),Cg=r("__call__"),Ag=r(" special method."),Ng=d(),f(Wn.$$.fragment),Lg=d(),Hd=o("p"),Ig=r("Examples:"),Sg=d(),f(Is.$$.fragment),Dg=d(),Ze=o("div"),f(Ss.$$.fragment),Og=d(),Rd=o("p"),Gg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Bg=d(),Vd=o("p"),Ug=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Wg=d(),Kd=o("p"),Hg=r("Example:"),Rg=d(),f(Ds.$$.fragment),Vg=d(),ye=o("div"),f(Os.$$.fragment),Kg=d(),Yd=o("p"),Yg=r("Moves the model to cpu from a model parallel state."),Zg=d(),Zd=o("p"),Jg=r("Example::"),Xg=d(),Hn=o("h1"),Rn=o("a"),Jd=o("span"),f(Gs.$$.fragment),Qg=d(),Xd=o("span"),eT=r("On a 4 GPU machine with t5-3b:"),tT=d(),Qd=o("p"),nT=r(`model = T5ForConditionalGeneration.from_pretrained(\u2018t5-3b\u2019)
device_map = {0: [0, 1, 2],`),oT=d(),el=o("p"),sT=r(`1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`),Uc=d(),pn=o("h2"),Vn=o("a"),tl=o("span"),f(Bs.$$.fragment),aT=d(),nl=o("span"),rT=r("T5EncoderModel"),Wc=d(),Q=o("div"),f(Us.$$.fragment),iT=d(),ol=o("p"),dT=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),lT=d(),Ws=o("p"),cT=r("The T5 model was proposed in "),Hs=o("a"),pT=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),hT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),uT=d(),Rs=o("p"),mT=r("This model inherits from "),xr=o("a"),fT=r("PreTrainedModel"),_T=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),gT=d(),Vs=o("p"),TT=r("This model is also a PyTorch "),Ks=o("a"),vT=r("torch.nn.Module"),kT=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),bT=d(),Je=o("div"),f(Ys.$$.fragment),wT=d(),hn=o("p"),yT=r("The "),$r=o("a"),xT=r("T5EncoderModel"),$T=r(" forward method, overrides the "),sl=o("code"),zT=r("__call__"),ET=r(" special method."),jT=d(),f(Kn.$$.fragment),qT=d(),al=o("p"),FT=r("Example:"),MT=d(),f(Zs.$$.fragment),PT=d(),Xe=o("div"),f(Js.$$.fragment),CT=d(),rl=o("p"),AT=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),NT=d(),il=o("p"),LT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),IT=d(),dl=o("p"),ST=r("Example:"),DT=d(),f(Xs.$$.fragment),OT=d(),xe=o("div"),f(Qs.$$.fragment),GT=d(),ll=o("p"),BT=r("Moves the model to cpu from a model parallel state."),UT=d(),cl=o("p"),WT=r("Example::"),HT=d(),Yn=o("h1"),Zn=o("a"),pl=o("span"),f(ea.$$.fragment),RT=d(),hl=o("span"),VT=r("On a 4 GPU machine with t5-3b:"),KT=d(),ul=o("p"),YT=r(`model = T5ForConditionalGeneration.from_pretrained(\u2018t5-3b\u2019)
device_map = {0: [0, 1, 2],`),ZT=d(),ml=o("p"),JT=r(`1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`),Hc=d(),un=o("h2"),Jn=o("a"),fl=o("span"),f(ta.$$.fragment),XT=d(),_l=o("span"),QT=r("TFT5Model"),Rc=d(),de=o("div"),f(na.$$.fragment),ev=d(),gl=o("p"),tv=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),nv=d(),oa=o("p"),ov=r("The T5 model was proposed in "),sa=o("a"),sv=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),av=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),rv=d(),aa=o("p"),iv=r("This model inherits from "),zr=o("a"),dv=r("TFPreTrainedModel"),lv=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),cv=d(),ra=o("p"),pv=r("This model is also a "),ia=o("a"),hv=r("tf.keras.Model"),uv=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),mv=d(),f(Xn.$$.fragment),fv=d(),Qe=o("div"),f(da.$$.fragment),_v=d(),mn=o("p"),gv=r("The "),Er=o("a"),Tv=r("TFT5Model"),vv=r(" forward method, overrides the "),Tl=o("code"),kv=r("__call__"),bv=r(" special method."),wv=d(),f(Qn.$$.fragment),yv=d(),vl=o("p"),xv=r("Examples:"),$v=d(),f(la.$$.fragment),Vc=d(),fn=o("h2"),eo=o("a"),kl=o("span"),f(ca.$$.fragment),zv=d(),bl=o("span"),Ev=r("TFT5ForConditionalGeneration"),Kc=d(),le=o("div"),f(pa.$$.fragment),jv=d(),ha=o("p"),qv=r("T5 Model with a "),wl=o("em"),Fv=r("language modeling"),Mv=r(" head on top."),Pv=d(),ua=o("p"),Cv=r("The T5 model was proposed in "),ma=o("a"),Av=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Nv=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Lv=d(),fa=o("p"),Iv=r("This model inherits from "),jr=o("a"),Sv=r("TFPreTrainedModel"),Dv=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ov=d(),_a=o("p"),Gv=r("This model is also a "),ga=o("a"),Bv=r("tf.keras.Model"),Uv=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Wv=d(),f(to.$$.fragment),Hv=d(),et=o("div"),f(Ta.$$.fragment),Rv=d(),_n=o("p"),Vv=r("The "),qr=o("a"),Kv=r("TFT5ForConditionalGeneration"),Yv=r(" forward method, overrides the "),yl=o("code"),Zv=r("__call__"),Jv=r(" special method."),Xv=d(),f(no.$$.fragment),Qv=d(),xl=o("p"),ek=r("Examples:"),tk=d(),f(va.$$.fragment),Yc=d(),gn=o("h2"),oo=o("a"),$l=o("span"),f(ka.$$.fragment),nk=d(),zl=o("span"),ok=r("TFT5EncoderModel"),Zc=d(),ce=o("div"),f(ba.$$.fragment),sk=d(),El=o("p"),ak=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),rk=d(),wa=o("p"),ik=r("The T5 model was proposed in "),ya=o("a"),dk=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),lk=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),ck=d(),xa=o("p"),pk=r("This model inherits from "),Fr=o("a"),hk=r("TFPreTrainedModel"),uk=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),mk=d(),$a=o("p"),fk=r("This model is also a "),za=o("a"),_k=r("tf.keras.Model"),gk=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Tk=d(),f(so.$$.fragment),vk=d(),tt=o("div"),f(Ea.$$.fragment),kk=d(),Tn=o("p"),bk=r("The "),Mr=o("a"),wk=r("TFT5EncoderModel"),yk=r(" forward method, overrides the "),jl=o("code"),xk=r("__call__"),$k=r(" special method."),zk=d(),f(ao.$$.fragment),Ek=d(),ql=o("p"),jk=r("Examples:"),qk=d(),f(ja.$$.fragment),Jc=d(),vn=o("h2"),ro=o("a"),Fl=o("span"),f(qa.$$.fragment),Fk=d(),Ml=o("span"),Mk=r("FlaxT5Model"),Xc=d(),wt=o("div"),nt=o("div"),f(Fa.$$.fragment),Pk=d(),kn=o("p"),Ck=r("The "),Pl=o("code"),Ak=r("FlaxT5PreTrainedModel"),Nk=r(" forward method, overrides the "),Cl=o("code"),Lk=r("__call__"),Ik=r(" special method."),Sk=d(),f(io.$$.fragment),Dk=d(),Al=o("p"),Ok=r("Example:"),Gk=d(),f(Ma.$$.fragment),Bk=d(),Mt=o("div"),f(Pa.$$.fragment),Uk=d(),Nl=o("p"),Wk=r("Example:"),Hk=d(),f(Ca.$$.fragment),Rk=d(),Pt=o("div"),f(Aa.$$.fragment),Vk=d(),Ll=o("p"),Kk=r("Example:"),Yk=d(),f(Na.$$.fragment),Qc=d(),bn=o("h2"),lo=o("a"),Il=o("span"),f(La.$$.fragment),Zk=d(),Sl=o("span"),Jk=r("FlaxT5ForConditionalGeneration"),ep=d(),yt=o("div"),ot=o("div"),f(Ia.$$.fragment),Xk=d(),wn=o("p"),Qk=r("The "),Dl=o("code"),e5=r("FlaxT5PreTrainedModel"),t5=r(" forward method, overrides the "),Ol=o("code"),n5=r("__call__"),o5=r(" special method."),s5=d(),f(co.$$.fragment),a5=d(),Gl=o("p"),r5=r("Example:"),i5=d(),f(Sa.$$.fragment),d5=d(),Ct=o("div"),f(Da.$$.fragment),l5=d(),Bl=o("p"),c5=r("Example:"),p5=d(),f(Oa.$$.fragment),h5=d(),At=o("div"),f(Ga.$$.fragment),u5=d(),Ul=o("p"),m5=r("Example:"),f5=d(),f(Ba.$$.fragment),this.h()},l(n){const h=Zy('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),z=l(n),b=s(n,"H1",{class:!0});var Ua=a(b);y=s(Ua,"A",{id:!0,class:!0,href:!0});var Wl=a(y);$=s(Wl,"SPAN",{});var Hl=a($);_(x.$$.fragment,Hl),Hl.forEach(t),Wl.forEach(t),w=l(Ua),E=s(Ua,"SPAN",{});var Rl=a(E);Fe=i(Rl,"T5"),Rl.forEach(t),Ua.forEach(t),ae=l(n),j=s(n,"H2",{class:!0});var Wa=a(j);ee=s(Wa,"A",{id:!0,class:!0,href:!0});var Vl=a(ee);O=s(Vl,"SPAN",{});var Kl=a(O);_(re.$$.fragment,Kl),Kl.forEach(t),Vl.forEach(t),Me=l(Wa),G=s(Wa,"SPAN",{});var Yl=a(G);Pe=i(Yl,"Overview"),Yl.forEach(t),Wa.forEach(t),ve=l(n),B=s(n,"P",{});var Ha=a(B);I=i(Ha,"The T5 model was presented in "),ie=s(Ha,"A",{href:!0,rel:!0});var Zl=a(ie);he=i(Zl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Zl.forEach(t),F=i(Ha,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ha.forEach(t),C=l(n),ue=s(n,"P",{});var Jl=a(ue);V=i(Jl,"The abstract from the paper is the following:"),Jl.forEach(t),ke=l(n),me=s(n,"P",{});var b5=a(me);U=s(b5,"EM",{});var w5=a(U);Ce=i(w5,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),w5.forEach(t),b5.forEach(t),be=l(n),M=s(n,"P",{});var y5=a(M);Ae=i(y5,"Tips:"),y5.forEach(t),H=l(n),R=s(n,"UL",{});var Pr=a(R);_e=s(Pr,"LI",{});var x5=a(_e);A=s(x5,"P",{});var Cr=a(A);Ne=i(Cr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=s(Cr,"EM",{});var $5=a(ge);S=i($5,"translate English to German: \u2026"),$5.forEach(t),Le=i(Cr,`,
for summarization: `),W=s(Cr,"EM",{});var z5=a(W);Ie=i(z5,"summarize: \u2026"),z5.forEach(t),m=i(Cr,"."),Cr.forEach(t),x5.forEach(t),q=l(Pr),te=s(Pr,"LI",{});var E5=a(te);Ue=s(E5,"P",{});var j5=a(Ue);lt=i(j5,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),j5.forEach(t),E5.forEach(t),D=l(Pr),We=s(Pr,"LI",{});var q5=a(We);ne=s(q5,"P",{});var po=a(ne);ct=i(po,"See the "),N=s(po,"A",{href:!0});var F5=a(N);K=i(F5,"training"),F5.forEach(t),pt=i(po,", "),Se=s(po,"A",{href:!0});var M5=a(Se);Y=i(M5,"inference"),M5.forEach(t),ht=i(po," and "),De=s(po,"A",{href:!0});var P5=a(De);Oe=i(P5,"scripts"),P5.forEach(t),ut=i(po," sections below for all details regarding usage."),po.forEach(t),q5.forEach(t),Pr.forEach(t),tc=l(n),Ra=s(n,"P",{});var C5=a(Ra);oh=i(C5,"T5 comes in different sizes:"),C5.forEach(t),nc=l(n),He=s(n,"UL",{});var Nt=a(He);ri=s(Nt,"LI",{});var A5=a(ri);ii=s(A5,"P",{});var N5=a(ii);fo=s(N5,"A",{href:!0,rel:!0});var L5=a(fo);sh=i(L5,"t5-small"),L5.forEach(t),N5.forEach(t),A5.forEach(t),ah=l(Nt),di=s(Nt,"LI",{});var I5=a(di);li=s(I5,"P",{});var S5=a(li);_o=s(S5,"A",{href:!0,rel:!0});var D5=a(_o);rh=i(D5,"t5-base"),D5.forEach(t),S5.forEach(t),I5.forEach(t),ih=l(Nt),ci=s(Nt,"LI",{});var O5=a(ci);pi=s(O5,"P",{});var G5=a(pi);go=s(G5,"A",{href:!0,rel:!0});var B5=a(go);dh=i(B5,"t5-large"),B5.forEach(t),G5.forEach(t),O5.forEach(t),lh=l(Nt),hi=s(Nt,"LI",{});var U5=a(hi);ui=s(U5,"P",{});var W5=a(ui);To=s(W5,"A",{href:!0,rel:!0});var H5=a(To);ch=i(H5,"t5-3b"),H5.forEach(t),W5.forEach(t),U5.forEach(t),ph=l(Nt),mi=s(Nt,"LI",{});var R5=a(mi);Va=s(R5,"P",{});var _5=a(Va);vo=s(_5,"A",{href:!0,rel:!0});var V5=a(vo);hh=i(V5,"t5-11b"),V5.forEach(t),uh=i(_5,"."),_5.forEach(t),R5.forEach(t),Nt.forEach(t),oc=l(n),Ka=s(n,"P",{});var K5=a(Ka);mh=i(K5,"Based on the original T5 model, Google has released some follow-up works:"),K5.forEach(t),sc=l(n),$t=s(n,"UL",{});var Ar=a($t);fi=s(Ar,"LI",{});var Y5=a(fi);yn=s(Y5,"P",{});var Xl=a(yn);_i=s(Xl,"STRONG",{});var Z5=a(_i);fh=i(Z5,"T5v1.1"),Z5.forEach(t),_h=i(Xl,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ya=s(Xl,"A",{href:!0});var J5=a(Ya);gh=i(J5,"here"),J5.forEach(t),Th=i(Xl,"."),Xl.forEach(t),Y5.forEach(t),vh=l(Ar),gi=s(Ar,"LI",{});var X5=a(gi);xn=s(X5,"P",{});var Ql=a(xn);Ti=s(Ql,"STRONG",{});var Q5=a(Ti);kh=i(Q5,"mT5"),Q5.forEach(t),bh=i(Ql,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Za=s(Ql,"A",{href:!0});var eb=a(Za);wh=i(eb,"here"),eb.forEach(t),yh=i(Ql,"."),Ql.forEach(t),X5.forEach(t),xh=l(Ar),vi=s(Ar,"LI",{});var tb=a(vi);$n=s(tb,"P",{});var ec=a($n);ki=s(ec,"STRONG",{});var nb=a(ki);$h=i(nb,"byT5"),nb.forEach(t),zh=i(ec,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Ja=s(ec,"A",{href:!0});var ob=a(Ja);Eh=i(ob,"here"),ob.forEach(t),jh=i(ec,"."),ec.forEach(t),tb.forEach(t),Ar.forEach(t),ac=l(n),zn=s(n,"P",{});var np=a(zn);qh=i(np,"All checkpoints can be found on the "),ko=s(np,"A",{href:!0,rel:!0});var sb=a(ko);Fh=i(sb,"hub"),sb.forEach(t),Mh=i(np,"."),np.forEach(t),rc=l(n),zt=s(n,"P",{});var Nr=a(zt);Ph=i(Nr,"This model was contributed by "),bo=s(Nr,"A",{href:!0,rel:!0});var ab=a(bo);Ch=i(ab,"thomwolf"),ab.forEach(t),Ah=i(Nr,". The original code can be found "),wo=s(Nr,"A",{href:!0,rel:!0});var rb=a(wo);Nh=i(rb,"here"),rb.forEach(t),Lh=i(Nr,"."),Nr.forEach(t),ic=l(n),Xa=s(n,"A",{id:!0}),a(Xa).forEach(t),dc=l(n),Yt=s(n,"H2",{class:!0});var op=a(Yt);En=s(op,"A",{id:!0,class:!0,href:!0});var ib=a(En);bi=s(ib,"SPAN",{});var db=a(bi);_(yo.$$.fragment,db),db.forEach(t),ib.forEach(t),Ih=l(op),wi=s(op,"SPAN",{});var lb=a(wi);Sh=i(lb,"Training"),lb.forEach(t),op.forEach(t),lc=l(n),mt=s(n,"P",{});var ho=a(mt);Dh=i(ho,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),yi=s(ho,"CODE",{});var cb=a(yi);Oh=i(cb,"input_ids"),cb.forEach(t),Gh=i(ho,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),xi=s(ho,"CODE",{});var pb=a(xi);Bh=i(pb,"decoder_input_ids"),pb.forEach(t),Uh=i(ho,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),$i=s(ho,"CODE",{});var hb=a($i);Wh=i(hb,"labels"),hb.forEach(t),Hh=i(ho,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),ho.forEach(t),cc=l(n),jn=s(n,"P",{});var sp=a(jn);Rh=i(sp,"One can use "),Qa=s(sp,"A",{href:!0});var ub=a(Qa);Vh=i(ub,"T5ForConditionalGeneration"),ub.forEach(t),Kh=i(sp,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),sp.forEach(t),pc=l(n),er=s(n,"UL",{});var mb=a(er);Zt=s(mb,"LI",{});var Lr=a(Zt);zi=s(Lr,"P",{});var fb=a(zi);Yh=i(fb,"Unsupervised denoising training"),fb.forEach(t),Zh=l(Lr),Te=s(Lr,"P",{});var st=a(Te);Jh=i(st,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Ei=s(st,"EM",{});var _b=a(Ei);Xh=i(_b,"a.k.a"),_b.forEach(t),Qh=i(st,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),ji=s(st,"EM",{});var gb=a(ji);eu=i(gb,"real"),gb.forEach(t),tu=i(st,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),qi=s(st,"CODE",{});var Tb=a(qi);nu=i(Tb,"<extra_id_0>"),Tb.forEach(t),ou=i(st,`,
`),Fi=s(st,"CODE",{});var vb=a(Fi);su=i(vb,"<extra_id_1>"),vb.forEach(t),au=i(st,", \u2026 up to "),Mi=s(st,"CODE",{});var kb=a(Mi);ru=i(kb,"<extra_id_99>"),kb.forEach(t),iu=i(st,`. As a default, 100 sentinel tokens are available in
`),tr=s(st,"A",{href:!0});var bb=a(tr);du=i(bb,"T5Tokenizer"),bb.forEach(t),lu=i(st,"."),st.forEach(t),cu=l(Lr),Pi=s(Lr,"P",{});var wb=a(Pi);pu=i(wb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),wb.forEach(t),Lr.forEach(t),mb.forEach(t),hc=l(n),_(xo.$$.fragment,n),uc=l(n),qn=s(n,"P",{});var ap=a(qn);hu=i(ap,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),$o=s(ap,"A",{href:!0,rel:!0});var yb=a($o);uu=i(yb,"run_t5_mlm_flax.py"),yb.forEach(t),mu=i(ap,` script in the Examples
directory.`),ap.forEach(t),mc=l(n),nr=s(n,"UL",{});var xb=a(nr);zo=s(xb,"LI",{});var rp=a(zo);Ci=s(rp,"P",{});var $b=a(Ci);fu=i($b,"Supervised training"),$b.forEach(t),_u=l(rp),Ai=s(rp,"P",{});var zb=a(Ai);gu=i(zb,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),zb.forEach(t),rp.forEach(t),xb.forEach(t),fc=l(n),_(Eo.$$.fragment,n),_c=l(n),oe=s(n,"P",{});var $e=a(oe);Tu=i($e,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ni=s($e,"CODE",{});var Eb=a(Ni);vu=i(Eb,"input_ids"),Eb.forEach(t),ku=i($e,` (which are the
`),Li=s($e,"CODE",{});var jb=a(Li);bu=i(jb,"input_ids"),jb.forEach(t),wu=i($e," of the encoded input sequence) and "),Ii=s($e,"CODE",{});var qb=a(Ii);yu=i(qb,"labels"),qb.forEach(t),xu=i($e," (which are the "),Si=s($e,"CODE",{});var Fb=a(Si);$u=i(Fb,"input_ids"),Fb.forEach(t),zu=i($e,` of the encoded
target sequence). The model will automatically create the `),Di=s($e,"CODE",{});var Mb=a(Di);Eu=i(Mb,"decoder_input_ids"),Mb.forEach(t),ju=i($e," based on the "),Oi=s($e,"CODE",{});var Pb=a(Oi);qu=i(Pb,"labels"),Pb.forEach(t),Fu=i($e,`, by
shifting them one position to the right and prepending the `),Gi=s($e,"CODE",{});var Cb=a(Gi);Mu=i(Cb,"config.decoder_start_token_id"),Cb.forEach(t),Pu=i($e,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),$e.forEach(t),gc=l(n),Et=s(n,"P",{});var Ir=a(Et);Cu=i(Ir,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Bi=s(Ir,"CODE",{});var Ab=a(Bi);Au=i(Ab,"max_source_length"),Ab.forEach(t),Nu=i(Ir," and "),Ui=s(Ir,"CODE",{});var Nb=a(Ui);Lu=i(Nb,"max_target_length"),Nb.forEach(t),Iu=i(Ir,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Ir.forEach(t),Tc=l(n),fe=s(n,"P",{});var at=a(fe);Su=i(at,"In addition, we must make sure that padding token id\u2019s of the "),Wi=s(at,"CODE",{});var Lb=a(Wi);Du=i(Lb,"labels"),Lb.forEach(t),Ou=i(at,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Hi=s(at,"CODE",{});var Ib=a(Hi);Gu=i(Ib,"ignore_index"),Ib.forEach(t),Bu=i(at,`
of the `),Ri=s(at,"CODE",{});var Sb=a(Ri);Uu=i(Sb,"CrossEntropyLoss"),Sb.forEach(t),Wu=i(at,". In Flax, one can use the "),Vi=s(at,"CODE",{});var Db=a(Vi);Hu=i(Db,"decoder_attention_mask"),Db.forEach(t),Ru=i(at,` to ignore padded tokens from
the loss (see the `),jo=s(at,"A",{href:!0,rel:!0});var Ob=a(jo);Vu=i(Ob,"Flax summarization script"),Ob.forEach(t),Ku=i(at,` for details). We also pass
`),Ki=s(at,"CODE",{});var Gb=a(Ki);Yu=i(Gb,"attention_mask"),Gb.forEach(t),Zu=i(at,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),at.forEach(t),vc=l(n),_(qo.$$.fragment,n),kc=l(n),or=s(n,"P",{});var Bb=a(or);Ju=i(Bb,"Additional training tips:"),Bb.forEach(t),bc=l(n),jt=s(n,"UL",{});var Sr=a(jt);Yi=s(Sr,"LI",{});var Ub=a(Yi);Fo=s(Ub,"P",{});var ip=a(Fo);Xu=i(ip,"T5 models need a slightly higher learning rate than the default one set in the "),Zi=s(ip,"CODE",{});var Wb=a(Zi);Qu=i(Wb,"Trainer"),Wb.forEach(t),em=i(ip,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),ip.forEach(t),Ub.forEach(t),tm=l(Sr),Ji=s(Sr,"LI",{});var Hb=a(Ji);Jt=s(Hb,"P",{});var Dr=a(Jt);nm=i(Dr,"According to "),Mo=s(Dr,"A",{href:!0,rel:!0});var Rb=a(Mo);om=i(Rb,"this forum post"),Rb.forEach(t),sm=i(Dr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Po=s(Dr,"A",{href:!0,rel:!0});var Vb=a(Po);am=i(Vb,"paper"),Vb.forEach(t),rm=i(Dr,` for the task prefixes
used).`),Dr.forEach(t),Hb.forEach(t),im=l(Sr),Xi=s(Sr,"LI",{});var Kb=a(Xi);Co=s(Kb,"P",{});var dp=a(Co);dm=i(dp,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Qi=s(dp,"EM",{});var Yb=a(Qi);lm=i(Yb,"pad_to_multiple_of"),Yb.forEach(t),cm=i(dp,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),dp.forEach(t),Kb.forEach(t),Sr.forEach(t),wc=l(n),sr=s(n,"A",{id:!0}),a(sr).forEach(t),yc=l(n),Xt=s(n,"H2",{class:!0});var lp=a(Xt);Fn=s(lp,"A",{id:!0,class:!0,href:!0});var Zb=a(Fn);ed=s(Zb,"SPAN",{});var Jb=a(ed);_(Ao.$$.fragment,Jb),Jb.forEach(t),Zb.forEach(t),pm=l(lp),td=s(lp,"SPAN",{});var Xb=a(td);hm=i(Xb,"Inference"),Xb.forEach(t),lp.forEach(t),xc=l(n),ft=s(n,"P",{});var uo=a(ft);um=i(uo,"At inference time, it is recommended to use "),ar=s(uo,"A",{href:!0});var Qb=a(ar);mm=i(Qb,"generate()"),Qb.forEach(t),fm=i(uo,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),No=s(uo,"A",{href:!0,rel:!0});var e1=a(No);_m=i(e1,"this blog post"),e1.forEach(t),gm=i(uo,` to know all the details about generating text with Transformers.
There\u2019s also `),Lo=s(uo,"A",{href:!0,rel:!0});var t1=a(Lo);Tm=i(t1,"this blog post"),t1.forEach(t),vm=i(uo,` which explains how
generation works in general in encoder-decoder models.`),uo.forEach(t),$c=l(n),_(Io.$$.fragment,n),zc=l(n),Re=s(n,"P",{});var Lt=a(Re);km=i(Lt,"Note that T5 uses the "),nd=s(Lt,"CODE",{});var n1=a(nd);bm=i(n1,"pad_token_id"),n1.forEach(t),wm=i(Lt," as the "),od=s(Lt,"CODE",{});var o1=a(od);ym=i(o1,"decoder_start_token_id"),o1.forEach(t),xm=i(Lt,`, so when doing generation without using
`),rr=s(Lt,"A",{href:!0});var s1=a(rr);$m=i(s1,"generate()"),s1.forEach(t),zm=i(Lt,", make sure you start it with the "),sd=s(Lt,"CODE",{});var a1=a(sd);Em=i(a1,"pad_token_id"),a1.forEach(t),jm=i(Lt,"."),Lt.forEach(t),Ec=l(n),ir=s(n,"P",{});var r1=a(ir);qm=i(r1,"The example above only shows a single example. You can also do batched inference, like so:"),r1.forEach(t),jc=l(n),_(So.$$.fragment,n),qc=l(n),dr=s(n,"A",{id:!0}),a(dr).forEach(t),Fc=l(n),Qt=s(n,"H2",{class:!0});var cp=a(Qt);Mn=s(cp,"A",{id:!0,class:!0,href:!0});var i1=a(Mn);ad=s(i1,"SPAN",{});var d1=a(ad);_(Do.$$.fragment,d1),d1.forEach(t),i1.forEach(t),Fm=l(cp),rd=s(cp,"SPAN",{});var l1=a(rd);Mm=i(l1,"Example scripts"),l1.forEach(t),cp.forEach(t),Mc=l(n),lr=s(n,"P",{});var c1=a(lr);Pm=i(c1,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),c1.forEach(t),Pc=l(n),Pn=s(n,"UL",{});var pp=a(Pn);id=s(pp,"LI",{});var p1=a(id);en=s(p1,"P",{});var Or=a(en);Cm=i(Or,"pre-training: the "),Oo=s(Or,"A",{href:!0,rel:!0});var h1=a(Oo);Am=i(h1,"run_t5_mlm_flax.py"),h1.forEach(t),Nm=i(Or,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Go=s(Or,"A",{href:!0,rel:!0});var u1=a(Go);Lm=i(u1,"t5_tokenizer_model.py"),u1.forEach(t),Im=i(Or,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Or.forEach(t),p1.forEach(t),Sm=l(pp),dd=s(pp,"LI",{});var m1=a(dd);Ge=s(m1,"P",{});var _t=a(Ge);Dm=i(_t,"fine-tuning: T5 is supported by the official summarization scripts ("),Bo=s(_t,"A",{href:!0,rel:!0});var f1=a(Bo);Om=i(f1,"PyTorch"),f1.forEach(t),Gm=i(_t,", "),Uo=s(_t,"A",{href:!0,rel:!0});var _1=a(Uo);Bm=i(_1,"Tensorflow"),_1.forEach(t),Um=i(_t,", and "),Wo=s(_t,"A",{href:!0,rel:!0});var g1=a(Wo);Wm=i(g1,"Flax"),g1.forEach(t),Hm=i(_t,`) and translation scripts
(`),Ho=s(_t,"A",{href:!0,rel:!0});var T1=a(Ho);Rm=i(T1,"PyTorch"),T1.forEach(t),Vm=i(_t," and "),Ro=s(_t,"A",{href:!0,rel:!0});var v1=a(Ro);Km=i(v1,"Tensorflow"),v1.forEach(t),Ym=i(_t,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),_t.forEach(t),m1.forEach(t),pp.forEach(t),Cc=l(n),tn=s(n,"H2",{class:!0});var hp=a(tn);Cn=s(hp,"A",{id:!0,class:!0,href:!0});var k1=a(Cn);ld=s(k1,"SPAN",{});var b1=a(ld);_(Vo.$$.fragment,b1),b1.forEach(t),k1.forEach(t),Zm=l(hp),cd=s(hp,"SPAN",{});var w1=a(cd);Jm=i(w1,"T5Config"),w1.forEach(t),hp.forEach(t),Ac=l(n),kt=s(n,"DIV",{class:!0});var Gr=a(kt);_(Ko.$$.fragment,Gr),Xm=l(Gr),bt=s(Gr,"P",{});var mo=a(bt);Qm=i(mo,"This is the configuration class to store the configuration of a "),cr=s(mo,"A",{href:!0});var y1=a(cr);ef=i(y1,"T5Model"),y1.forEach(t),tf=i(mo,` or a
`),pr=s(mo,"A",{href:!0});var x1=a(pr);nf=i(x1,"TFT5Model"),x1.forEach(t),of=i(mo,`. It is used to instantiate a T5 model according to the specified arguments,
defining the model architecture. Instantiating a configuration with the defaults will yield a similar configuration
to that of the T5 `),Yo=s(mo,"A",{href:!0,rel:!0});var $1=a(Yo);sf=i($1,"t5-small"),$1.forEach(t),af=i(mo," architecture."),mo.forEach(t),rf=l(Gr),nn=s(Gr,"P",{});var Br=a(nn);df=i(Br,"Configuration objects inherit from "),hr=s(Br,"A",{href:!0});var z1=a(hr);lf=i(z1,"PretrainedConfig"),z1.forEach(t),cf=i(Br,` and can be used to control the model
outputs. Read the documentation from `),ur=s(Br,"A",{href:!0});var E1=a(ur);pf=i(E1,"PretrainedConfig"),E1.forEach(t),hf=i(Br," for more information."),Br.forEach(t),Gr.forEach(t),Nc=l(n),on=s(n,"H2",{class:!0});var up=a(on);An=s(up,"A",{id:!0,class:!0,href:!0});var j1=a(An);pd=s(j1,"SPAN",{});var q1=a(pd);_(Zo.$$.fragment,q1),q1.forEach(t),j1.forEach(t),uf=l(up),hd=s(up,"SPAN",{});var F1=a(hd);mf=i(F1,"T5Tokenizer"),F1.forEach(t),up.forEach(t),Lc=l(n),Z=s(n,"DIV",{class:!0});var ze=a(Z);_(Jo.$$.fragment,ze),ff=l(ze),Xo=s(ze,"P",{});var mp=a(Xo);_f=i(mp,"Construct a T5 tokenizer. Based on "),Qo=s(mp,"A",{href:!0,rel:!0});var M1=a(Qo);gf=i(M1,"SentencePiece"),M1.forEach(t),Tf=i(mp,"."),mp.forEach(t),vf=l(ze),es=s(ze,"P",{});var fp=a(es);kf=i(fp,"This tokenizer inherits from "),mr=s(fp,"A",{href:!0});var P1=a(mr);bf=i(P1,"PreTrainedTokenizer"),P1.forEach(t),wf=i(fp,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),fp.forEach(t),yf=l(ze),ts=s(ze,"P",{});var _p=a(ts);xf=i(_p,`Attributes:
sp`),ns=s(_p,"EM",{});var gp=a(ns);$f=i(gp,"model ("),ud=s(gp,"CODE",{});var C1=a(ud);zf=i(C1,"SentencePieceProcessor"),C1.forEach(t),Ef=i(gp,`):
The _SentencePiece`),gp.forEach(t),jf=i(_p," processor that is used for every conversion (string, tokens and IDs)."),_p.forEach(t),qf=l(ze),qt=s(ze,"DIV",{class:!0});var Ur=a(qt);_(os.$$.fragment,Ur),Ff=l(Ur),md=s(Ur,"P",{});var A1=a(md);Mf=i(A1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),A1.forEach(t),Pf=l(Ur),ss=s(Ur,"UL",{});var Tp=a(ss);fr=s(Tp,"LI",{});var g5=a(fr);Cf=i(g5,"single sequence: "),fd=s(g5,"CODE",{});var N1=a(fd);Af=i(N1,"X </s>"),N1.forEach(t),g5.forEach(t),Nf=l(Tp),_r=s(Tp,"LI",{});var T5=a(_r);Lf=i(T5,"pair of sequences: "),_d=s(T5,"CODE",{});var L1=a(_d);If=i(L1,"A </s> B </s>"),L1.forEach(t),T5.forEach(t),Tp.forEach(t),Ur.forEach(t),Sf=l(ze),Nn=s(ze,"DIV",{class:!0});var vp=a(Nn);_(as.$$.fragment,vp),Df=l(vp),rs=s(vp,"P",{});var kp=a(rs);Of=i(kp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gd=s(kp,"CODE",{});var I1=a(gd);Gf=i(I1,"prepare_for_model"),I1.forEach(t),Bf=i(kp," method."),kp.forEach(t),vp.forEach(t),Uf=l(ze),Ln=s(ze,"DIV",{class:!0});var bp=a(Ln);_(is.$$.fragment,bp),Wf=l(bp),Td=s(bp,"P",{});var S1=a(Td);Hf=i(S1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),S1.forEach(t),bp.forEach(t),Rf=l(ze),vd=s(ze,"DIV",{class:!0}),a(vd).forEach(t),ze.forEach(t),Ic=l(n),sn=s(n,"H2",{class:!0});var wp=a(sn);In=s(wp,"A",{id:!0,class:!0,href:!0});var D1=a(In);kd=s(D1,"SPAN",{});var O1=a(kd);_(ds.$$.fragment,O1),O1.forEach(t),D1.forEach(t),Vf=l(wp),bd=s(wp,"SPAN",{});var G1=a(bd);Kf=i(G1,"T5TokenizerFast"),G1.forEach(t),wp.forEach(t),Sc=l(n),Be=s(n,"DIV",{class:!0});var It=a(Be);_(ls.$$.fragment,It),Yf=l(It),an=s(It,"P",{});var Wr=a(an);Zf=i(Wr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),wd=s(Wr,"EM",{});var B1=a(wd);Jf=i(B1,"tokenizers"),B1.forEach(t),Xf=i(Wr," library). Based on "),cs=s(Wr,"A",{href:!0,rel:!0});var U1=a(cs);Qf=i(U1,"Unigram"),U1.forEach(t),e_=i(Wr,"."),Wr.forEach(t),t_=l(It),ps=s(It,"P",{});var yp=a(ps);n_=i(yp,"This tokenizer inherits from "),gr=s(yp,"A",{href:!0});var W1=a(gr);o_=i(W1,"PreTrainedTokenizerFast"),W1.forEach(t),s_=i(yp,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),yp.forEach(t),a_=l(It),Ft=s(It,"DIV",{class:!0});var Hr=a(Ft);_(hs.$$.fragment,Hr),r_=l(Hr),yd=s(Hr,"P",{});var H1=a(yd);i_=i(H1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),H1.forEach(t),d_=l(Hr),us=s(Hr,"UL",{});var xp=a(us);Tr=s(xp,"LI",{});var v5=a(Tr);l_=i(v5,"single sequence: "),xd=s(v5,"CODE",{});var R1=a(xd);c_=i(R1,"X </s>"),R1.forEach(t),v5.forEach(t),p_=l(xp),vr=s(xp,"LI",{});var k5=a(vr);h_=i(k5,"pair of sequences: "),$d=s(k5,"CODE",{});var V1=a($d);u_=i(V1,"A </s> B </s>"),V1.forEach(t),k5.forEach(t),xp.forEach(t),Hr.forEach(t),m_=l(It),Sn=s(It,"DIV",{class:!0});var $p=a(Sn);_(ms.$$.fragment,$p),f_=l($p),zd=s($p,"P",{});var K1=a(zd);__=i(K1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),K1.forEach(t),$p.forEach(t),It.forEach(t),Dc=l(n),rn=s(n,"H2",{class:!0});var zp=a(rn);Dn=s(zp,"A",{id:!0,class:!0,href:!0});var Y1=a(Dn);Ed=s(Y1,"SPAN",{});var Z1=a(Ed);_(fs.$$.fragment,Z1),Z1.forEach(t),Y1.forEach(t),g_=l(zp),jd=s(zp,"SPAN",{});var J1=a(jd);T_=i(J1,"T5Model"),J1.forEach(t),zp.forEach(t),Oc=l(n),J=s(n,"DIV",{class:!0});var Ee=a(J);_(_s.$$.fragment,Ee),v_=l(Ee),qd=s(Ee,"P",{});var X1=a(qd);k_=i(X1,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),X1.forEach(t),b_=l(Ee),gs=s(Ee,"P",{});var Ep=a(gs);w_=i(Ep,"The T5 model was proposed in "),Ts=s(Ep,"A",{href:!0,rel:!0});var Q1=a(Ts);y_=i(Q1,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Q1.forEach(t),x_=i(Ep,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Ep.forEach(t),$_=l(Ee),vs=s(Ee,"P",{});var jp=a(vs);z_=i(jp,"This model inherits from "),kr=s(jp,"A",{href:!0});var ew=a(kr);E_=i(ew,"PreTrainedModel"),ew.forEach(t),j_=i(jp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),jp.forEach(t),q_=l(Ee),ks=s(Ee,"P",{});var qp=a(ks);F_=i(qp,"This model is also a PyTorch "),bs=s(qp,"A",{href:!0,rel:!0});var tw=a(bs);M_=i(tw,"torch.nn.Module"),tw.forEach(t),P_=i(qp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),qp.forEach(t),C_=l(Ee),Ve=s(Ee,"DIV",{class:!0});var St=a(Ve);_(ws.$$.fragment,St),A_=l(St),dn=s(St,"P",{});var Rr=a(dn);N_=i(Rr,"The "),br=s(Rr,"A",{href:!0});var nw=a(br);L_=i(nw,"T5Model"),nw.forEach(t),I_=i(Rr," forward method, overrides the "),Fd=s(Rr,"CODE",{});var ow=a(Fd);S_=i(ow,"__call__"),ow.forEach(t),D_=i(Rr," special method."),Rr.forEach(t),O_=l(St),_(On.$$.fragment,St),G_=l(St),Md=s(St,"P",{});var sw=a(Md);B_=i(sw,"Example:"),sw.forEach(t),U_=l(St),_(ys.$$.fragment,St),St.forEach(t),W_=l(Ee),Ke=s(Ee,"DIV",{class:!0});var Dt=a(Ke);_(xs.$$.fragment,Dt),H_=l(Dt),Pd=s(Dt,"P",{});var aw=a(Pd);R_=i(aw,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),aw.forEach(t),V_=l(Dt),Cd=s(Dt,"P",{});var rw=a(Cd);K_=i(rw,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),rw.forEach(t),Y_=l(Dt),Ad=s(Dt,"P",{});var iw=a(Ad);Z_=i(iw,"Example:"),iw.forEach(t),J_=l(Dt),_($s.$$.fragment,Dt),Dt.forEach(t),X_=l(Ee),we=s(Ee,"DIV",{class:!0});var gt=a(we);_(zs.$$.fragment,gt),Q_=l(gt),Nd=s(gt,"P",{});var dw=a(Nd);eg=i(dw,"Moves the model to cpu from a model parallel state."),dw.forEach(t),tg=l(gt),Ld=s(gt,"P",{});var lw=a(Ld);ng=i(lw,"Example::"),lw.forEach(t),og=l(gt),Gn=s(gt,"H1",{class:!0});var Fp=a(Gn);Bn=s(Fp,"A",{id:!0,class:!0,href:!0});var cw=a(Bn);Id=s(cw,"SPAN",{});var pw=a(Id);_(Es.$$.fragment,pw),pw.forEach(t),cw.forEach(t),sg=l(Fp),Sd=s(Fp,"SPAN",{});var hw=a(Sd);ag=i(hw,"On a 4 GPU machine with t5-3b:"),hw.forEach(t),Fp.forEach(t),rg=l(gt),Dd=s(gt,"P",{});var uw=a(Dd);ig=i(uw,`model = T5ForConditionalGeneration.from_pretrained(\u2018t5-3b\u2019)
device_map = {0: [0, 1, 2],`),uw.forEach(t),dg=l(gt),Od=s(gt,"P",{});var mw=a(Od);lg=i(mw,`1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`),mw.forEach(t),gt.forEach(t),Ee.forEach(t),Gc=l(n),ln=s(n,"H2",{class:!0});var Mp=a(ln);Un=s(Mp,"A",{id:!0,class:!0,href:!0});var fw=a(Un);Gd=s(fw,"SPAN",{});var _w=a(Gd);_(js.$$.fragment,_w),_w.forEach(t),fw.forEach(t),cg=l(Mp),Bd=s(Mp,"SPAN",{});var gw=a(Bd);pg=i(gw,"T5ForConditionalGeneration"),gw.forEach(t),Mp.forEach(t),Bc=l(n),X=s(n,"DIV",{class:!0});var je=a(X);_(qs.$$.fragment,je),hg=l(je),Fs=s(je,"P",{});var Pp=a(Fs);ug=i(Pp,"T5 Model with a "),Ud=s(Pp,"EM",{});var Tw=a(Ud);mg=i(Tw,"language modeling"),Tw.forEach(t),fg=i(Pp," head on top."),Pp.forEach(t),_g=l(je),Ms=s(je,"P",{});var Cp=a(Ms);gg=i(Cp,"The T5 model was proposed in "),Ps=s(Cp,"A",{href:!0,rel:!0});var vw=a(Ps);Tg=i(vw,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),vw.forEach(t),vg=i(Cp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Cp.forEach(t),kg=l(je),Cs=s(je,"P",{});var Ap=a(Cs);bg=i(Ap,"This model inherits from "),wr=s(Ap,"A",{href:!0});var kw=a(wr);wg=i(kw,"PreTrainedModel"),kw.forEach(t),yg=i(Ap,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ap.forEach(t),xg=l(je),As=s(je,"P",{});var Np=a(As);$g=i(Np,"This model is also a PyTorch "),Ns=s(Np,"A",{href:!0,rel:!0});var bw=a(Ns);zg=i(bw,"torch.nn.Module"),bw.forEach(t),Eg=i(Np,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Np.forEach(t),jg=l(je),Ye=s(je,"DIV",{class:!0});var Ot=a(Ye);_(Ls.$$.fragment,Ot),qg=l(Ot),cn=s(Ot,"P",{});var Vr=a(cn);Fg=i(Vr,"The "),yr=s(Vr,"A",{href:!0});var ww=a(yr);Mg=i(ww,"T5ForConditionalGeneration"),ww.forEach(t),Pg=i(Vr," forward method, overrides the "),Wd=s(Vr,"CODE",{});var yw=a(Wd);Cg=i(yw,"__call__"),yw.forEach(t),Ag=i(Vr," special method."),Vr.forEach(t),Ng=l(Ot),_(Wn.$$.fragment,Ot),Lg=l(Ot),Hd=s(Ot,"P",{});var xw=a(Hd);Ig=i(xw,"Examples:"),xw.forEach(t),Sg=l(Ot),_(Is.$$.fragment,Ot),Ot.forEach(t),Dg=l(je),Ze=s(je,"DIV",{class:!0});var Gt=a(Ze);_(Ss.$$.fragment,Gt),Og=l(Gt),Rd=s(Gt,"P",{});var $w=a(Rd);Gg=i($w,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),$w.forEach(t),Bg=l(Gt),Vd=s(Gt,"P",{});var zw=a(Vd);Ug=i(zw,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),zw.forEach(t),Wg=l(Gt),Kd=s(Gt,"P",{});var Ew=a(Kd);Hg=i(Ew,"Example:"),Ew.forEach(t),Rg=l(Gt),_(Ds.$$.fragment,Gt),Gt.forEach(t),Vg=l(je),ye=s(je,"DIV",{class:!0});var Tt=a(ye);_(Os.$$.fragment,Tt),Kg=l(Tt),Yd=s(Tt,"P",{});var jw=a(Yd);Yg=i(jw,"Moves the model to cpu from a model parallel state."),jw.forEach(t),Zg=l(Tt),Zd=s(Tt,"P",{});var qw=a(Zd);Jg=i(qw,"Example::"),qw.forEach(t),Xg=l(Tt),Hn=s(Tt,"H1",{class:!0});var Lp=a(Hn);Rn=s(Lp,"A",{id:!0,class:!0,href:!0});var Fw=a(Rn);Jd=s(Fw,"SPAN",{});var Mw=a(Jd);_(Gs.$$.fragment,Mw),Mw.forEach(t),Fw.forEach(t),Qg=l(Lp),Xd=s(Lp,"SPAN",{});var Pw=a(Xd);eT=i(Pw,"On a 4 GPU machine with t5-3b:"),Pw.forEach(t),Lp.forEach(t),tT=l(Tt),Qd=s(Tt,"P",{});var Cw=a(Qd);nT=i(Cw,`model = T5ForConditionalGeneration.from_pretrained(\u2018t5-3b\u2019)
device_map = {0: [0, 1, 2],`),Cw.forEach(t),oT=l(Tt),el=s(Tt,"P",{});var Aw=a(el);sT=i(Aw,`1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`),Aw.forEach(t),Tt.forEach(t),je.forEach(t),Uc=l(n),pn=s(n,"H2",{class:!0});var Ip=a(pn);Vn=s(Ip,"A",{id:!0,class:!0,href:!0});var Nw=a(Vn);tl=s(Nw,"SPAN",{});var Lw=a(tl);_(Bs.$$.fragment,Lw),Lw.forEach(t),Nw.forEach(t),aT=l(Ip),nl=s(Ip,"SPAN",{});var Iw=a(nl);rT=i(Iw,"T5EncoderModel"),Iw.forEach(t),Ip.forEach(t),Wc=l(n),Q=s(n,"DIV",{class:!0});var qe=a(Q);_(Us.$$.fragment,qe),iT=l(qe),ol=s(qe,"P",{});var Sw=a(ol);dT=i(Sw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Sw.forEach(t),lT=l(qe),Ws=s(qe,"P",{});var Sp=a(Ws);cT=i(Sp,"The T5 model was proposed in "),Hs=s(Sp,"A",{href:!0,rel:!0});var Dw=a(Hs);pT=i(Dw,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Dw.forEach(t),hT=i(Sp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Sp.forEach(t),uT=l(qe),Rs=s(qe,"P",{});var Dp=a(Rs);mT=i(Dp,"This model inherits from "),xr=s(Dp,"A",{href:!0});var Ow=a(xr);fT=i(Ow,"PreTrainedModel"),Ow.forEach(t),_T=i(Dp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Dp.forEach(t),gT=l(qe),Vs=s(qe,"P",{});var Op=a(Vs);TT=i(Op,"This model is also a PyTorch "),Ks=s(Op,"A",{href:!0,rel:!0});var Gw=a(Ks);vT=i(Gw,"torch.nn.Module"),Gw.forEach(t),kT=i(Op,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Op.forEach(t),bT=l(qe),Je=s(qe,"DIV",{class:!0});var Bt=a(Je);_(Ys.$$.fragment,Bt),wT=l(Bt),hn=s(Bt,"P",{});var Kr=a(hn);yT=i(Kr,"The "),$r=s(Kr,"A",{href:!0});var Bw=a($r);xT=i(Bw,"T5EncoderModel"),Bw.forEach(t),$T=i(Kr," forward method, overrides the "),sl=s(Kr,"CODE",{});var Uw=a(sl);zT=i(Uw,"__call__"),Uw.forEach(t),ET=i(Kr," special method."),Kr.forEach(t),jT=l(Bt),_(Kn.$$.fragment,Bt),qT=l(Bt),al=s(Bt,"P",{});var Ww=a(al);FT=i(Ww,"Example:"),Ww.forEach(t),MT=l(Bt),_(Zs.$$.fragment,Bt),Bt.forEach(t),PT=l(qe),Xe=s(qe,"DIV",{class:!0});var Ut=a(Xe);_(Js.$$.fragment,Ut),CT=l(Ut),rl=s(Ut,"P",{});var Hw=a(rl);AT=i(Hw,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Hw.forEach(t),NT=l(Ut),il=s(Ut,"P",{});var Rw=a(il);LT=i(Rw,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Rw.forEach(t),IT=l(Ut),dl=s(Ut,"P",{});var Vw=a(dl);ST=i(Vw,"Example:"),Vw.forEach(t),DT=l(Ut),_(Xs.$$.fragment,Ut),Ut.forEach(t),OT=l(qe),xe=s(qe,"DIV",{class:!0});var vt=a(xe);_(Qs.$$.fragment,vt),GT=l(vt),ll=s(vt,"P",{});var Kw=a(ll);BT=i(Kw,"Moves the model to cpu from a model parallel state."),Kw.forEach(t),UT=l(vt),cl=s(vt,"P",{});var Yw=a(cl);WT=i(Yw,"Example::"),Yw.forEach(t),HT=l(vt),Yn=s(vt,"H1",{class:!0});var Gp=a(Yn);Zn=s(Gp,"A",{id:!0,class:!0,href:!0});var Zw=a(Zn);pl=s(Zw,"SPAN",{});var Jw=a(pl);_(ea.$$.fragment,Jw),Jw.forEach(t),Zw.forEach(t),RT=l(Gp),hl=s(Gp,"SPAN",{});var Xw=a(hl);VT=i(Xw,"On a 4 GPU machine with t5-3b:"),Xw.forEach(t),Gp.forEach(t),KT=l(vt),ul=s(vt,"P",{});var Qw=a(ul);YT=i(Qw,`model = T5ForConditionalGeneration.from_pretrained(\u2018t5-3b\u2019)
device_map = {0: [0, 1, 2],`),Qw.forEach(t),ZT=l(vt),ml=s(vt,"P",{});var ey=a(ml);JT=i(ey,`1: [3, 4, 5, 6, 7, 8, 9],
2: [10, 11, 12, 13, 14, 15, 16],
3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`),ey.forEach(t),vt.forEach(t),qe.forEach(t),Hc=l(n),un=s(n,"H2",{class:!0});var Bp=a(un);Jn=s(Bp,"A",{id:!0,class:!0,href:!0});var ty=a(Jn);fl=s(ty,"SPAN",{});var ny=a(fl);_(ta.$$.fragment,ny),ny.forEach(t),ty.forEach(t),XT=l(Bp),_l=s(Bp,"SPAN",{});var oy=a(_l);QT=i(oy,"TFT5Model"),oy.forEach(t),Bp.forEach(t),Rc=l(n),de=s(n,"DIV",{class:!0});var rt=a(de);_(na.$$.fragment,rt),ev=l(rt),gl=s(rt,"P",{});var sy=a(gl);tv=i(sy,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),sy.forEach(t),nv=l(rt),oa=s(rt,"P",{});var Up=a(oa);ov=i(Up,"The T5 model was proposed in "),sa=s(Up,"A",{href:!0,rel:!0});var ay=a(sa);sv=i(ay,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),ay.forEach(t),av=i(Up,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Up.forEach(t),rv=l(rt),aa=s(rt,"P",{});var Wp=a(aa);iv=i(Wp,"This model inherits from "),zr=s(Wp,"A",{href:!0});var ry=a(zr);dv=i(ry,"TFPreTrainedModel"),ry.forEach(t),lv=i(Wp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wp.forEach(t),cv=l(rt),ra=s(rt,"P",{});var Hp=a(ra);pv=i(Hp,"This model is also a "),ia=s(Hp,"A",{href:!0,rel:!0});var iy=a(ia);hv=i(iy,"tf.keras.Model"),iy.forEach(t),uv=i(Hp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Hp.forEach(t),mv=l(rt),_(Xn.$$.fragment,rt),fv=l(rt),Qe=s(rt,"DIV",{class:!0});var Wt=a(Qe);_(da.$$.fragment,Wt),_v=l(Wt),mn=s(Wt,"P",{});var Yr=a(mn);gv=i(Yr,"The "),Er=s(Yr,"A",{href:!0});var dy=a(Er);Tv=i(dy,"TFT5Model"),dy.forEach(t),vv=i(Yr," forward method, overrides the "),Tl=s(Yr,"CODE",{});var ly=a(Tl);kv=i(ly,"__call__"),ly.forEach(t),bv=i(Yr," special method."),Yr.forEach(t),wv=l(Wt),_(Qn.$$.fragment,Wt),yv=l(Wt),vl=s(Wt,"P",{});var cy=a(vl);xv=i(cy,"Examples:"),cy.forEach(t),$v=l(Wt),_(la.$$.fragment,Wt),Wt.forEach(t),rt.forEach(t),Vc=l(n),fn=s(n,"H2",{class:!0});var Rp=a(fn);eo=s(Rp,"A",{id:!0,class:!0,href:!0});var py=a(eo);kl=s(py,"SPAN",{});var hy=a(kl);_(ca.$$.fragment,hy),hy.forEach(t),py.forEach(t),zv=l(Rp),bl=s(Rp,"SPAN",{});var uy=a(bl);Ev=i(uy,"TFT5ForConditionalGeneration"),uy.forEach(t),Rp.forEach(t),Kc=l(n),le=s(n,"DIV",{class:!0});var it=a(le);_(pa.$$.fragment,it),jv=l(it),ha=s(it,"P",{});var Vp=a(ha);qv=i(Vp,"T5 Model with a "),wl=s(Vp,"EM",{});var my=a(wl);Fv=i(my,"language modeling"),my.forEach(t),Mv=i(Vp," head on top."),Vp.forEach(t),Pv=l(it),ua=s(it,"P",{});var Kp=a(ua);Cv=i(Kp,"The T5 model was proposed in "),ma=s(Kp,"A",{href:!0,rel:!0});var fy=a(ma);Av=i(fy,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),fy.forEach(t),Nv=i(Kp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Kp.forEach(t),Lv=l(it),fa=s(it,"P",{});var Yp=a(fa);Iv=i(Yp,"This model inherits from "),jr=s(Yp,"A",{href:!0});var _y=a(jr);Sv=i(_y,"TFPreTrainedModel"),_y.forEach(t),Dv=i(Yp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Yp.forEach(t),Ov=l(it),_a=s(it,"P",{});var Zp=a(_a);Gv=i(Zp,"This model is also a "),ga=s(Zp,"A",{href:!0,rel:!0});var gy=a(ga);Bv=i(gy,"tf.keras.Model"),gy.forEach(t),Uv=i(Zp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Zp.forEach(t),Wv=l(it),_(to.$$.fragment,it),Hv=l(it),et=s(it,"DIV",{class:!0});var Ht=a(et);_(Ta.$$.fragment,Ht),Rv=l(Ht),_n=s(Ht,"P",{});var Zr=a(_n);Vv=i(Zr,"The "),qr=s(Zr,"A",{href:!0});var Ty=a(qr);Kv=i(Ty,"TFT5ForConditionalGeneration"),Ty.forEach(t),Yv=i(Zr," forward method, overrides the "),yl=s(Zr,"CODE",{});var vy=a(yl);Zv=i(vy,"__call__"),vy.forEach(t),Jv=i(Zr," special method."),Zr.forEach(t),Xv=l(Ht),_(no.$$.fragment,Ht),Qv=l(Ht),xl=s(Ht,"P",{});var ky=a(xl);ek=i(ky,"Examples:"),ky.forEach(t),tk=l(Ht),_(va.$$.fragment,Ht),Ht.forEach(t),it.forEach(t),Yc=l(n),gn=s(n,"H2",{class:!0});var Jp=a(gn);oo=s(Jp,"A",{id:!0,class:!0,href:!0});var by=a(oo);$l=s(by,"SPAN",{});var wy=a($l);_(ka.$$.fragment,wy),wy.forEach(t),by.forEach(t),nk=l(Jp),zl=s(Jp,"SPAN",{});var yy=a(zl);ok=i(yy,"TFT5EncoderModel"),yy.forEach(t),Jp.forEach(t),Zc=l(n),ce=s(n,"DIV",{class:!0});var dt=a(ce);_(ba.$$.fragment,dt),sk=l(dt),El=s(dt,"P",{});var xy=a(El);ak=i(xy,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),xy.forEach(t),rk=l(dt),wa=s(dt,"P",{});var Xp=a(wa);ik=i(Xp,"The T5 model was proposed in "),ya=s(Xp,"A",{href:!0,rel:!0});var $y=a(ya);dk=i($y,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),$y.forEach(t),lk=i(Xp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Xp.forEach(t),ck=l(dt),xa=s(dt,"P",{});var Qp=a(xa);pk=i(Qp,"This model inherits from "),Fr=s(Qp,"A",{href:!0});var zy=a(Fr);hk=i(zy,"TFPreTrainedModel"),zy.forEach(t),uk=i(Qp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Qp.forEach(t),mk=l(dt),$a=s(dt,"P",{});var eh=a($a);fk=i(eh,"This model is also a "),za=s(eh,"A",{href:!0,rel:!0});var Ey=a(za);_k=i(Ey,"tf.keras.Model"),Ey.forEach(t),gk=i(eh,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),eh.forEach(t),Tk=l(dt),_(so.$$.fragment,dt),vk=l(dt),tt=s(dt,"DIV",{class:!0});var Rt=a(tt);_(Ea.$$.fragment,Rt),kk=l(Rt),Tn=s(Rt,"P",{});var Jr=a(Tn);bk=i(Jr,"The "),Mr=s(Jr,"A",{href:!0});var jy=a(Mr);wk=i(jy,"TFT5EncoderModel"),jy.forEach(t),yk=i(Jr," forward method, overrides the "),jl=s(Jr,"CODE",{});var qy=a(jl);xk=i(qy,"__call__"),qy.forEach(t),$k=i(Jr," special method."),Jr.forEach(t),zk=l(Rt),_(ao.$$.fragment,Rt),Ek=l(Rt),ql=s(Rt,"P",{});var Fy=a(ql);jk=i(Fy,"Examples:"),Fy.forEach(t),qk=l(Rt),_(ja.$$.fragment,Rt),Rt.forEach(t),dt.forEach(t),Jc=l(n),vn=s(n,"H2",{class:!0});var th=a(vn);ro=s(th,"A",{id:!0,class:!0,href:!0});var My=a(ro);Fl=s(My,"SPAN",{});var Py=a(Fl);_(qa.$$.fragment,Py),Py.forEach(t),My.forEach(t),Fk=l(th),Ml=s(th,"SPAN",{});var Cy=a(Ml);Mk=i(Cy,"FlaxT5Model"),Cy.forEach(t),th.forEach(t),Xc=l(n),wt=s(n,"DIV",{class:!0});var Xr=a(wt);nt=s(Xr,"DIV",{class:!0});var Vt=a(nt);_(Fa.$$.fragment,Vt),Pk=l(Vt),kn=s(Vt,"P",{});var Qr=a(kn);Ck=i(Qr,"The "),Pl=s(Qr,"CODE",{});var Ay=a(Pl);Ak=i(Ay,"FlaxT5PreTrainedModel"),Ay.forEach(t),Nk=i(Qr," forward method, overrides the "),Cl=s(Qr,"CODE",{});var Ny=a(Cl);Lk=i(Ny,"__call__"),Ny.forEach(t),Ik=i(Qr," special method."),Qr.forEach(t),Sk=l(Vt),_(io.$$.fragment,Vt),Dk=l(Vt),Al=s(Vt,"P",{});var Ly=a(Al);Ok=i(Ly,"Example:"),Ly.forEach(t),Gk=l(Vt),_(Ma.$$.fragment,Vt),Vt.forEach(t),Bk=l(Xr),Mt=s(Xr,"DIV",{class:!0});var ei=a(Mt);_(Pa.$$.fragment,ei),Uk=l(ei),Nl=s(ei,"P",{});var Iy=a(Nl);Wk=i(Iy,"Example:"),Iy.forEach(t),Hk=l(ei),_(Ca.$$.fragment,ei),ei.forEach(t),Rk=l(Xr),Pt=s(Xr,"DIV",{class:!0});var ti=a(Pt);_(Aa.$$.fragment,ti),Vk=l(ti),Ll=s(ti,"P",{});var Sy=a(Ll);Kk=i(Sy,"Example:"),Sy.forEach(t),Yk=l(ti),_(Na.$$.fragment,ti),ti.forEach(t),Xr.forEach(t),Qc=l(n),bn=s(n,"H2",{class:!0});var nh=a(bn);lo=s(nh,"A",{id:!0,class:!0,href:!0});var Dy=a(lo);Il=s(Dy,"SPAN",{});var Oy=a(Il);_(La.$$.fragment,Oy),Oy.forEach(t),Dy.forEach(t),Zk=l(nh),Sl=s(nh,"SPAN",{});var Gy=a(Sl);Jk=i(Gy,"FlaxT5ForConditionalGeneration"),Gy.forEach(t),nh.forEach(t),ep=l(n),yt=s(n,"DIV",{class:!0});var ni=a(yt);ot=s(ni,"DIV",{class:!0});var Kt=a(ot);_(Ia.$$.fragment,Kt),Xk=l(Kt),wn=s(Kt,"P",{});var oi=a(wn);Qk=i(oi,"The "),Dl=s(oi,"CODE",{});var By=a(Dl);e5=i(By,"FlaxT5PreTrainedModel"),By.forEach(t),t5=i(oi," forward method, overrides the "),Ol=s(oi,"CODE",{});var Uy=a(Ol);n5=i(Uy,"__call__"),Uy.forEach(t),o5=i(oi," special method."),oi.forEach(t),s5=l(Kt),_(co.$$.fragment,Kt),a5=l(Kt),Gl=s(Kt,"P",{});var Wy=a(Gl);r5=i(Wy,"Example:"),Wy.forEach(t),i5=l(Kt),_(Sa.$$.fragment,Kt),Kt.forEach(t),d5=l(ni),Ct=s(ni,"DIV",{class:!0});var si=a(Ct);_(Da.$$.fragment,si),l5=l(si),Bl=s(si,"P",{});var Hy=a(Bl);c5=i(Hy,"Example:"),Hy.forEach(t),p5=l(si),_(Oa.$$.fragment,si),si.forEach(t),h5=l(ni),At=s(ni,"DIV",{class:!0});var ai=a(At);_(Ga.$$.fragment,ai),u5=l(ai),Ul=s(ai,"P",{});var Ry=a(Ul);m5=i(Ry,"Example:"),Ry.forEach(t),f5=l(ai),_(Ba.$$.fragment,ai),ai.forEach(t),ni.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(l2)),c(y,"id","t5"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(j,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ie,"rel","nofollow"),c(N,"href","/docs/transformers/master/en/model_doc/t5#training"),c(Se,"href","/docs/transformers/master/en/model_doc/t5#inference"),c(De,"href","/docs/transformers/master/en/model_doc/t5#scripts"),c(fo,"href","https://huggingface.co/t5-small"),c(fo,"rel","nofollow"),c(_o,"href","https://huggingface.co/t5-base"),c(_o,"rel","nofollow"),c(go,"href","https://huggingface.co/t5-large"),c(go,"rel","nofollow"),c(To,"href","https://huggingface.co/t5-3b"),c(To,"rel","nofollow"),c(vo,"href","https://huggingface.co/t5-11b"),c(vo,"rel","nofollow"),c(Ya,"href","/docs/transformers/master/en/t5v1.1"),c(Za,"href","/docs/transformers/master/en/mt5"),c(Ja,"href","/docs/transformers/master/en/byt5"),c(ko,"href","https://huggingface.co/models?search=t5"),c(ko,"rel","nofollow"),c(bo,"href","https://huggingface.co/thomwolf"),c(bo,"rel","nofollow"),c(wo,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(wo,"rel","nofollow"),c(Xa,"id","training"),c(En,"id","training"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#training"),c(Yt,"class","relative group"),c(Qa,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(tr,"href","/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer"),c($o,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c($o,"rel","nofollow"),c(jo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(jo,"rel","nofollow"),c(Mo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Mo,"rel","nofollow"),c(Po,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Po,"rel","nofollow"),c(sr,"id","inference"),c(Fn,"id","inference"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#inference"),c(Xt,"class","relative group"),c(ar,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(No,"href","https://huggingface.co/blog/how-to-generate"),c(No,"rel","nofollow"),c(Lo,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Lo,"rel","nofollow"),c(rr,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(dr,"id","scripts"),c(Mn,"id","example-scripts"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#example-scripts"),c(Qt,"class","relative group"),c(Oo,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Oo,"rel","nofollow"),c(Go,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Go,"rel","nofollow"),c(Bo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(Bo,"rel","nofollow"),c(Uo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Uo,"rel","nofollow"),c(Wo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Wo,"rel","nofollow"),c(Ho,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Ho,"rel","nofollow"),c(Ro,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Ro,"rel","nofollow"),c(Cn,"id","transformers.T5Config"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#transformers.T5Config"),c(tn,"class","relative group"),c(cr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Model"),c(pr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model"),c(Yo,"href","https://huggingface.co/t5-small"),c(Yo,"rel","nofollow"),c(hr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ur,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(kt,"class","docstring"),c(An,"id","transformers.T5Tokenizer"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.T5Tokenizer"),c(on,"class","relative group"),c(Qo,"href","https://github.com/google/sentencepiece"),c(Qo,"rel","nofollow"),c(mr,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(qt,"class","docstring"),c(Nn,"class","docstring"),c(Ln,"class","docstring"),c(vd,"class","docstring"),c(Z,"class","docstring"),c(In,"id","transformers.T5TokenizerFast"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5TokenizerFast"),c(sn,"class","relative group"),c(cs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(cs,"rel","nofollow"),c(gr,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ft,"class","docstring"),c(Sn,"class","docstring"),c(Be,"class","docstring"),c(Dn,"id","transformers.T5Model"),c(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dn,"href","#transformers.T5Model"),c(rn,"class","relative group"),c(Ts,"href","https://arxiv.org/abs/1910.10683"),c(Ts,"rel","nofollow"),c(kr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bs,"rel","nofollow"),c(br,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Model"),c(Ve,"class","docstring"),c(Ke,"class","docstring"),c(Bn,"id","on-a-4-gpu-machine-with-t5-3b:"),c(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bn,"href","#on-a-4-gpu-machine-with-t5-3b:"),c(Gn,"class","relative group"),c(we,"class","docstring"),c(J,"class","docstring"),c(Un,"id","transformers.T5ForConditionalGeneration"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.T5ForConditionalGeneration"),c(ln,"class","relative group"),c(Ps,"href","https://arxiv.org/abs/1910.10683"),c(Ps,"rel","nofollow"),c(wr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ns,"rel","nofollow"),c(yr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(Ye,"class","docstring"),c(Ze,"class","docstring"),c(Rn,"id","on-a-4-gpu-machine-with-t5-3b:"),c(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rn,"href","#on-a-4-gpu-machine-with-t5-3b:"),c(Hn,"class","relative group"),c(ye,"class","docstring"),c(X,"class","docstring"),c(Vn,"id","transformers.T5EncoderModel"),c(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vn,"href","#transformers.T5EncoderModel"),c(pn,"class","relative group"),c(Hs,"href","https://arxiv.org/abs/1910.10683"),c(Hs,"rel","nofollow"),c(xr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ks,"rel","nofollow"),c($r,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5EncoderModel"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Zn,"id","on-a-4-gpu-machine-with-t5-3b:"),c(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zn,"href","#on-a-4-gpu-machine-with-t5-3b:"),c(Yn,"class","relative group"),c(xe,"class","docstring"),c(Q,"class","docstring"),c(Jn,"id","transformers.TFT5Model"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.TFT5Model"),c(un,"class","relative group"),c(sa,"href","https://arxiv.org/abs/1910.10683"),c(sa,"rel","nofollow"),c(zr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ia,"rel","nofollow"),c(Er,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model"),c(Qe,"class","docstring"),c(de,"class","docstring"),c(eo,"id","transformers.TFT5ForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.TFT5ForConditionalGeneration"),c(fn,"class","relative group"),c(ma,"href","https://arxiv.org/abs/1910.10683"),c(ma,"rel","nofollow"),c(jr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ga,"rel","nofollow"),c(qr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(et,"class","docstring"),c(le,"class","docstring"),c(oo,"id","transformers.TFT5EncoderModel"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.TFT5EncoderModel"),c(gn,"class","relative group"),c(ya,"href","https://arxiv.org/abs/1910.10683"),c(ya,"rel","nofollow"),c(Fr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(za,"rel","nofollow"),c(Mr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5EncoderModel"),c(tt,"class","docstring"),c(ce,"class","docstring"),c(ro,"id","transformers.FlaxT5Model"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.FlaxT5Model"),c(vn,"class","relative group"),c(nt,"class","docstring"),c(Mt,"class","docstring"),c(Pt,"class","docstring"),c(wt,"class","docstring"),c(lo,"id","transformers.FlaxT5ForConditionalGeneration"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.FlaxT5ForConditionalGeneration"),c(bn,"class","relative group"),c(ot,"class","docstring"),c(Ct,"class","docstring"),c(At,"class","docstring"),c(yt,"class","docstring")},m(n,h){e(document.head,u),p(n,z,h),p(n,b,h),e(b,y),e(y,$),g(x,$,null),e(b,w),e(b,E),e(E,Fe),p(n,ae,h),p(n,j,h),e(j,ee),e(ee,O),g(re,O,null),e(j,Me),e(j,G),e(G,Pe),p(n,ve,h),p(n,B,h),e(B,I),e(B,ie),e(ie,he),e(B,F),p(n,C,h),p(n,ue,h),e(ue,V),p(n,ke,h),p(n,me,h),e(me,U),e(U,Ce),p(n,be,h),p(n,M,h),e(M,Ae),p(n,H,h),p(n,R,h),e(R,_e),e(_e,A),e(A,Ne),e(A,ge),e(ge,S),e(A,Le),e(A,W),e(W,Ie),e(A,m),e(R,q),e(R,te),e(te,Ue),e(Ue,lt),e(R,D),e(R,We),e(We,ne),e(ne,ct),e(ne,N),e(N,K),e(ne,pt),e(ne,Se),e(Se,Y),e(ne,ht),e(ne,De),e(De,Oe),e(ne,ut),p(n,tc,h),p(n,Ra,h),e(Ra,oh),p(n,nc,h),p(n,He,h),e(He,ri),e(ri,ii),e(ii,fo),e(fo,sh),e(He,ah),e(He,di),e(di,li),e(li,_o),e(_o,rh),e(He,ih),e(He,ci),e(ci,pi),e(pi,go),e(go,dh),e(He,lh),e(He,hi),e(hi,ui),e(ui,To),e(To,ch),e(He,ph),e(He,mi),e(mi,Va),e(Va,vo),e(vo,hh),e(Va,uh),p(n,oc,h),p(n,Ka,h),e(Ka,mh),p(n,sc,h),p(n,$t,h),e($t,fi),e(fi,yn),e(yn,_i),e(_i,fh),e(yn,_h),e(yn,Ya),e(Ya,gh),e(yn,Th),e($t,vh),e($t,gi),e(gi,xn),e(xn,Ti),e(Ti,kh),e(xn,bh),e(xn,Za),e(Za,wh),e(xn,yh),e($t,xh),e($t,vi),e(vi,$n),e($n,ki),e(ki,$h),e($n,zh),e($n,Ja),e(Ja,Eh),e($n,jh),p(n,ac,h),p(n,zn,h),e(zn,qh),e(zn,ko),e(ko,Fh),e(zn,Mh),p(n,rc,h),p(n,zt,h),e(zt,Ph),e(zt,bo),e(bo,Ch),e(zt,Ah),e(zt,wo),e(wo,Nh),e(zt,Lh),p(n,ic,h),p(n,Xa,h),p(n,dc,h),p(n,Yt,h),e(Yt,En),e(En,bi),g(yo,bi,null),e(Yt,Ih),e(Yt,wi),e(wi,Sh),p(n,lc,h),p(n,mt,h),e(mt,Dh),e(mt,yi),e(yi,Oh),e(mt,Gh),e(mt,xi),e(xi,Bh),e(mt,Uh),e(mt,$i),e($i,Wh),e(mt,Hh),p(n,cc,h),p(n,jn,h),e(jn,Rh),e(jn,Qa),e(Qa,Vh),e(jn,Kh),p(n,pc,h),p(n,er,h),e(er,Zt),e(Zt,zi),e(zi,Yh),e(Zt,Zh),e(Zt,Te),e(Te,Jh),e(Te,Ei),e(Ei,Xh),e(Te,Qh),e(Te,ji),e(ji,eu),e(Te,tu),e(Te,qi),e(qi,nu),e(Te,ou),e(Te,Fi),e(Fi,su),e(Te,au),e(Te,Mi),e(Mi,ru),e(Te,iu),e(Te,tr),e(tr,du),e(Te,lu),e(Zt,cu),e(Zt,Pi),e(Pi,pu),p(n,hc,h),g(xo,n,h),p(n,uc,h),p(n,qn,h),e(qn,hu),e(qn,$o),e($o,uu),e(qn,mu),p(n,mc,h),p(n,nr,h),e(nr,zo),e(zo,Ci),e(Ci,fu),e(zo,_u),e(zo,Ai),e(Ai,gu),p(n,fc,h),g(Eo,n,h),p(n,_c,h),p(n,oe,h),e(oe,Tu),e(oe,Ni),e(Ni,vu),e(oe,ku),e(oe,Li),e(Li,bu),e(oe,wu),e(oe,Ii),e(Ii,yu),e(oe,xu),e(oe,Si),e(Si,$u),e(oe,zu),e(oe,Di),e(Di,Eu),e(oe,ju),e(oe,Oi),e(Oi,qu),e(oe,Fu),e(oe,Gi),e(Gi,Mu),e(oe,Pu),p(n,gc,h),p(n,Et,h),e(Et,Cu),e(Et,Bi),e(Bi,Au),e(Et,Nu),e(Et,Ui),e(Ui,Lu),e(Et,Iu),p(n,Tc,h),p(n,fe,h),e(fe,Su),e(fe,Wi),e(Wi,Du),e(fe,Ou),e(fe,Hi),e(Hi,Gu),e(fe,Bu),e(fe,Ri),e(Ri,Uu),e(fe,Wu),e(fe,Vi),e(Vi,Hu),e(fe,Ru),e(fe,jo),e(jo,Vu),e(fe,Ku),e(fe,Ki),e(Ki,Yu),e(fe,Zu),p(n,vc,h),g(qo,n,h),p(n,kc,h),p(n,or,h),e(or,Ju),p(n,bc,h),p(n,jt,h),e(jt,Yi),e(Yi,Fo),e(Fo,Xu),e(Fo,Zi),e(Zi,Qu),e(Fo,em),e(jt,tm),e(jt,Ji),e(Ji,Jt),e(Jt,nm),e(Jt,Mo),e(Mo,om),e(Jt,sm),e(Jt,Po),e(Po,am),e(Jt,rm),e(jt,im),e(jt,Xi),e(Xi,Co),e(Co,dm),e(Co,Qi),e(Qi,lm),e(Co,cm),p(n,wc,h),p(n,sr,h),p(n,yc,h),p(n,Xt,h),e(Xt,Fn),e(Fn,ed),g(Ao,ed,null),e(Xt,pm),e(Xt,td),e(td,hm),p(n,xc,h),p(n,ft,h),e(ft,um),e(ft,ar),e(ar,mm),e(ft,fm),e(ft,No),e(No,_m),e(ft,gm),e(ft,Lo),e(Lo,Tm),e(ft,vm),p(n,$c,h),g(Io,n,h),p(n,zc,h),p(n,Re,h),e(Re,km),e(Re,nd),e(nd,bm),e(Re,wm),e(Re,od),e(od,ym),e(Re,xm),e(Re,rr),e(rr,$m),e(Re,zm),e(Re,sd),e(sd,Em),e(Re,jm),p(n,Ec,h),p(n,ir,h),e(ir,qm),p(n,jc,h),g(So,n,h),p(n,qc,h),p(n,dr,h),p(n,Fc,h),p(n,Qt,h),e(Qt,Mn),e(Mn,ad),g(Do,ad,null),e(Qt,Fm),e(Qt,rd),e(rd,Mm),p(n,Mc,h),p(n,lr,h),e(lr,Pm),p(n,Pc,h),p(n,Pn,h),e(Pn,id),e(id,en),e(en,Cm),e(en,Oo),e(Oo,Am),e(en,Nm),e(en,Go),e(Go,Lm),e(en,Im),e(Pn,Sm),e(Pn,dd),e(dd,Ge),e(Ge,Dm),e(Ge,Bo),e(Bo,Om),e(Ge,Gm),e(Ge,Uo),e(Uo,Bm),e(Ge,Um),e(Ge,Wo),e(Wo,Wm),e(Ge,Hm),e(Ge,Ho),e(Ho,Rm),e(Ge,Vm),e(Ge,Ro),e(Ro,Km),e(Ge,Ym),p(n,Cc,h),p(n,tn,h),e(tn,Cn),e(Cn,ld),g(Vo,ld,null),e(tn,Zm),e(tn,cd),e(cd,Jm),p(n,Ac,h),p(n,kt,h),g(Ko,kt,null),e(kt,Xm),e(kt,bt),e(bt,Qm),e(bt,cr),e(cr,ef),e(bt,tf),e(bt,pr),e(pr,nf),e(bt,of),e(bt,Yo),e(Yo,sf),e(bt,af),e(kt,rf),e(kt,nn),e(nn,df),e(nn,hr),e(hr,lf),e(nn,cf),e(nn,ur),e(ur,pf),e(nn,hf),p(n,Nc,h),p(n,on,h),e(on,An),e(An,pd),g(Zo,pd,null),e(on,uf),e(on,hd),e(hd,mf),p(n,Lc,h),p(n,Z,h),g(Jo,Z,null),e(Z,ff),e(Z,Xo),e(Xo,_f),e(Xo,Qo),e(Qo,gf),e(Xo,Tf),e(Z,vf),e(Z,es),e(es,kf),e(es,mr),e(mr,bf),e(es,wf),e(Z,yf),e(Z,ts),e(ts,xf),e(ts,ns),e(ns,$f),e(ns,ud),e(ud,zf),e(ns,Ef),e(ts,jf),e(Z,qf),e(Z,qt),g(os,qt,null),e(qt,Ff),e(qt,md),e(md,Mf),e(qt,Pf),e(qt,ss),e(ss,fr),e(fr,Cf),e(fr,fd),e(fd,Af),e(ss,Nf),e(ss,_r),e(_r,Lf),e(_r,_d),e(_d,If),e(Z,Sf),e(Z,Nn),g(as,Nn,null),e(Nn,Df),e(Nn,rs),e(rs,Of),e(rs,gd),e(gd,Gf),e(rs,Bf),e(Z,Uf),e(Z,Ln),g(is,Ln,null),e(Ln,Wf),e(Ln,Td),e(Td,Hf),e(Z,Rf),e(Z,vd),p(n,Ic,h),p(n,sn,h),e(sn,In),e(In,kd),g(ds,kd,null),e(sn,Vf),e(sn,bd),e(bd,Kf),p(n,Sc,h),p(n,Be,h),g(ls,Be,null),e(Be,Yf),e(Be,an),e(an,Zf),e(an,wd),e(wd,Jf),e(an,Xf),e(an,cs),e(cs,Qf),e(an,e_),e(Be,t_),e(Be,ps),e(ps,n_),e(ps,gr),e(gr,o_),e(ps,s_),e(Be,a_),e(Be,Ft),g(hs,Ft,null),e(Ft,r_),e(Ft,yd),e(yd,i_),e(Ft,d_),e(Ft,us),e(us,Tr),e(Tr,l_),e(Tr,xd),e(xd,c_),e(us,p_),e(us,vr),e(vr,h_),e(vr,$d),e($d,u_),e(Be,m_),e(Be,Sn),g(ms,Sn,null),e(Sn,f_),e(Sn,zd),e(zd,__),p(n,Dc,h),p(n,rn,h),e(rn,Dn),e(Dn,Ed),g(fs,Ed,null),e(rn,g_),e(rn,jd),e(jd,T_),p(n,Oc,h),p(n,J,h),g(_s,J,null),e(J,v_),e(J,qd),e(qd,k_),e(J,b_),e(J,gs),e(gs,w_),e(gs,Ts),e(Ts,y_),e(gs,x_),e(J,$_),e(J,vs),e(vs,z_),e(vs,kr),e(kr,E_),e(vs,j_),e(J,q_),e(J,ks),e(ks,F_),e(ks,bs),e(bs,M_),e(ks,P_),e(J,C_),e(J,Ve),g(ws,Ve,null),e(Ve,A_),e(Ve,dn),e(dn,N_),e(dn,br),e(br,L_),e(dn,I_),e(dn,Fd),e(Fd,S_),e(dn,D_),e(Ve,O_),g(On,Ve,null),e(Ve,G_),e(Ve,Md),e(Md,B_),e(Ve,U_),g(ys,Ve,null),e(J,W_),e(J,Ke),g(xs,Ke,null),e(Ke,H_),e(Ke,Pd),e(Pd,R_),e(Ke,V_),e(Ke,Cd),e(Cd,K_),e(Ke,Y_),e(Ke,Ad),e(Ad,Z_),e(Ke,J_),g($s,Ke,null),e(J,X_),e(J,we),g(zs,we,null),e(we,Q_),e(we,Nd),e(Nd,eg),e(we,tg),e(we,Ld),e(Ld,ng),e(we,og),e(we,Gn),e(Gn,Bn),e(Bn,Id),g(Es,Id,null),e(Gn,sg),e(Gn,Sd),e(Sd,ag),e(we,rg),e(we,Dd),e(Dd,ig),e(we,dg),e(we,Od),e(Od,lg),p(n,Gc,h),p(n,ln,h),e(ln,Un),e(Un,Gd),g(js,Gd,null),e(ln,cg),e(ln,Bd),e(Bd,pg),p(n,Bc,h),p(n,X,h),g(qs,X,null),e(X,hg),e(X,Fs),e(Fs,ug),e(Fs,Ud),e(Ud,mg),e(Fs,fg),e(X,_g),e(X,Ms),e(Ms,gg),e(Ms,Ps),e(Ps,Tg),e(Ms,vg),e(X,kg),e(X,Cs),e(Cs,bg),e(Cs,wr),e(wr,wg),e(Cs,yg),e(X,xg),e(X,As),e(As,$g),e(As,Ns),e(Ns,zg),e(As,Eg),e(X,jg),e(X,Ye),g(Ls,Ye,null),e(Ye,qg),e(Ye,cn),e(cn,Fg),e(cn,yr),e(yr,Mg),e(cn,Pg),e(cn,Wd),e(Wd,Cg),e(cn,Ag),e(Ye,Ng),g(Wn,Ye,null),e(Ye,Lg),e(Ye,Hd),e(Hd,Ig),e(Ye,Sg),g(Is,Ye,null),e(X,Dg),e(X,Ze),g(Ss,Ze,null),e(Ze,Og),e(Ze,Rd),e(Rd,Gg),e(Ze,Bg),e(Ze,Vd),e(Vd,Ug),e(Ze,Wg),e(Ze,Kd),e(Kd,Hg),e(Ze,Rg),g(Ds,Ze,null),e(X,Vg),e(X,ye),g(Os,ye,null),e(ye,Kg),e(ye,Yd),e(Yd,Yg),e(ye,Zg),e(ye,Zd),e(Zd,Jg),e(ye,Xg),e(ye,Hn),e(Hn,Rn),e(Rn,Jd),g(Gs,Jd,null),e(Hn,Qg),e(Hn,Xd),e(Xd,eT),e(ye,tT),e(ye,Qd),e(Qd,nT),e(ye,oT),e(ye,el),e(el,sT),p(n,Uc,h),p(n,pn,h),e(pn,Vn),e(Vn,tl),g(Bs,tl,null),e(pn,aT),e(pn,nl),e(nl,rT),p(n,Wc,h),p(n,Q,h),g(Us,Q,null),e(Q,iT),e(Q,ol),e(ol,dT),e(Q,lT),e(Q,Ws),e(Ws,cT),e(Ws,Hs),e(Hs,pT),e(Ws,hT),e(Q,uT),e(Q,Rs),e(Rs,mT),e(Rs,xr),e(xr,fT),e(Rs,_T),e(Q,gT),e(Q,Vs),e(Vs,TT),e(Vs,Ks),e(Ks,vT),e(Vs,kT),e(Q,bT),e(Q,Je),g(Ys,Je,null),e(Je,wT),e(Je,hn),e(hn,yT),e(hn,$r),e($r,xT),e(hn,$T),e(hn,sl),e(sl,zT),e(hn,ET),e(Je,jT),g(Kn,Je,null),e(Je,qT),e(Je,al),e(al,FT),e(Je,MT),g(Zs,Je,null),e(Q,PT),e(Q,Xe),g(Js,Xe,null),e(Xe,CT),e(Xe,rl),e(rl,AT),e(Xe,NT),e(Xe,il),e(il,LT),e(Xe,IT),e(Xe,dl),e(dl,ST),e(Xe,DT),g(Xs,Xe,null),e(Q,OT),e(Q,xe),g(Qs,xe,null),e(xe,GT),e(xe,ll),e(ll,BT),e(xe,UT),e(xe,cl),e(cl,WT),e(xe,HT),e(xe,Yn),e(Yn,Zn),e(Zn,pl),g(ea,pl,null),e(Yn,RT),e(Yn,hl),e(hl,VT),e(xe,KT),e(xe,ul),e(ul,YT),e(xe,ZT),e(xe,ml),e(ml,JT),p(n,Hc,h),p(n,un,h),e(un,Jn),e(Jn,fl),g(ta,fl,null),e(un,XT),e(un,_l),e(_l,QT),p(n,Rc,h),p(n,de,h),g(na,de,null),e(de,ev),e(de,gl),e(gl,tv),e(de,nv),e(de,oa),e(oa,ov),e(oa,sa),e(sa,sv),e(oa,av),e(de,rv),e(de,aa),e(aa,iv),e(aa,zr),e(zr,dv),e(aa,lv),e(de,cv),e(de,ra),e(ra,pv),e(ra,ia),e(ia,hv),e(ra,uv),e(de,mv),g(Xn,de,null),e(de,fv),e(de,Qe),g(da,Qe,null),e(Qe,_v),e(Qe,mn),e(mn,gv),e(mn,Er),e(Er,Tv),e(mn,vv),e(mn,Tl),e(Tl,kv),e(mn,bv),e(Qe,wv),g(Qn,Qe,null),e(Qe,yv),e(Qe,vl),e(vl,xv),e(Qe,$v),g(la,Qe,null),p(n,Vc,h),p(n,fn,h),e(fn,eo),e(eo,kl),g(ca,kl,null),e(fn,zv),e(fn,bl),e(bl,Ev),p(n,Kc,h),p(n,le,h),g(pa,le,null),e(le,jv),e(le,ha),e(ha,qv),e(ha,wl),e(wl,Fv),e(ha,Mv),e(le,Pv),e(le,ua),e(ua,Cv),e(ua,ma),e(ma,Av),e(ua,Nv),e(le,Lv),e(le,fa),e(fa,Iv),e(fa,jr),e(jr,Sv),e(fa,Dv),e(le,Ov),e(le,_a),e(_a,Gv),e(_a,ga),e(ga,Bv),e(_a,Uv),e(le,Wv),g(to,le,null),e(le,Hv),e(le,et),g(Ta,et,null),e(et,Rv),e(et,_n),e(_n,Vv),e(_n,qr),e(qr,Kv),e(_n,Yv),e(_n,yl),e(yl,Zv),e(_n,Jv),e(et,Xv),g(no,et,null),e(et,Qv),e(et,xl),e(xl,ek),e(et,tk),g(va,et,null),p(n,Yc,h),p(n,gn,h),e(gn,oo),e(oo,$l),g(ka,$l,null),e(gn,nk),e(gn,zl),e(zl,ok),p(n,Zc,h),p(n,ce,h),g(ba,ce,null),e(ce,sk),e(ce,El),e(El,ak),e(ce,rk),e(ce,wa),e(wa,ik),e(wa,ya),e(ya,dk),e(wa,lk),e(ce,ck),e(ce,xa),e(xa,pk),e(xa,Fr),e(Fr,hk),e(xa,uk),e(ce,mk),e(ce,$a),e($a,fk),e($a,za),e(za,_k),e($a,gk),e(ce,Tk),g(so,ce,null),e(ce,vk),e(ce,tt),g(Ea,tt,null),e(tt,kk),e(tt,Tn),e(Tn,bk),e(Tn,Mr),e(Mr,wk),e(Tn,yk),e(Tn,jl),e(jl,xk),e(Tn,$k),e(tt,zk),g(ao,tt,null),e(tt,Ek),e(tt,ql),e(ql,jk),e(tt,qk),g(ja,tt,null),p(n,Jc,h),p(n,vn,h),e(vn,ro),e(ro,Fl),g(qa,Fl,null),e(vn,Fk),e(vn,Ml),e(Ml,Mk),p(n,Xc,h),p(n,wt,h),e(wt,nt),g(Fa,nt,null),e(nt,Pk),e(nt,kn),e(kn,Ck),e(kn,Pl),e(Pl,Ak),e(kn,Nk),e(kn,Cl),e(Cl,Lk),e(kn,Ik),e(nt,Sk),g(io,nt,null),e(nt,Dk),e(nt,Al),e(Al,Ok),e(nt,Gk),g(Ma,nt,null),e(wt,Bk),e(wt,Mt),g(Pa,Mt,null),e(Mt,Uk),e(Mt,Nl),e(Nl,Wk),e(Mt,Hk),g(Ca,Mt,null),e(wt,Rk),e(wt,Pt),g(Aa,Pt,null),e(Pt,Vk),e(Pt,Ll),e(Ll,Kk),e(Pt,Yk),g(Na,Pt,null),p(n,Qc,h),p(n,bn,h),e(bn,lo),e(lo,Il),g(La,Il,null),e(bn,Zk),e(bn,Sl),e(Sl,Jk),p(n,ep,h),p(n,yt,h),e(yt,ot),g(Ia,ot,null),e(ot,Xk),e(ot,wn),e(wn,Qk),e(wn,Dl),e(Dl,e5),e(wn,t5),e(wn,Ol),e(Ol,n5),e(wn,o5),e(ot,s5),g(co,ot,null),e(ot,a5),e(ot,Gl),e(Gl,r5),e(ot,i5),g(Sa,ot,null),e(yt,d5),e(yt,Ct),g(Da,Ct,null),e(Ct,l5),e(Ct,Bl),e(Bl,c5),e(Ct,p5),g(Oa,Ct,null),e(yt,h5),e(yt,At),g(Ga,At,null),e(At,u5),e(At,Ul),e(Ul,m5),e(At,f5),g(Ba,At,null),tp=!0},p(n,[h]){const Ua={};h&2&&(Ua.$$scope={dirty:h,ctx:n}),On.$set(Ua);const Wl={};h&2&&(Wl.$$scope={dirty:h,ctx:n}),Wn.$set(Wl);const Hl={};h&2&&(Hl.$$scope={dirty:h,ctx:n}),Kn.$set(Hl);const Rl={};h&2&&(Rl.$$scope={dirty:h,ctx:n}),Xn.$set(Rl);const Wa={};h&2&&(Wa.$$scope={dirty:h,ctx:n}),Qn.$set(Wa);const Vl={};h&2&&(Vl.$$scope={dirty:h,ctx:n}),to.$set(Vl);const Kl={};h&2&&(Kl.$$scope={dirty:h,ctx:n}),no.$set(Kl);const Yl={};h&2&&(Yl.$$scope={dirty:h,ctx:n}),so.$set(Yl);const Ha={};h&2&&(Ha.$$scope={dirty:h,ctx:n}),ao.$set(Ha);const Zl={};h&2&&(Zl.$$scope={dirty:h,ctx:n}),io.$set(Zl);const Jl={};h&2&&(Jl.$$scope={dirty:h,ctx:n}),co.$set(Jl)},i(n){tp||(T(x.$$.fragment,n),T(re.$$.fragment,n),T(yo.$$.fragment,n),T(xo.$$.fragment,n),T(Eo.$$.fragment,n),T(qo.$$.fragment,n),T(Ao.$$.fragment,n),T(Io.$$.fragment,n),T(So.$$.fragment,n),T(Do.$$.fragment,n),T(Vo.$$.fragment,n),T(Ko.$$.fragment,n),T(Zo.$$.fragment,n),T(Jo.$$.fragment,n),T(os.$$.fragment,n),T(as.$$.fragment,n),T(is.$$.fragment,n),T(ds.$$.fragment,n),T(ls.$$.fragment,n),T(hs.$$.fragment,n),T(ms.$$.fragment,n),T(fs.$$.fragment,n),T(_s.$$.fragment,n),T(ws.$$.fragment,n),T(On.$$.fragment,n),T(ys.$$.fragment,n),T(xs.$$.fragment,n),T($s.$$.fragment,n),T(zs.$$.fragment,n),T(Es.$$.fragment,n),T(js.$$.fragment,n),T(qs.$$.fragment,n),T(Ls.$$.fragment,n),T(Wn.$$.fragment,n),T(Is.$$.fragment,n),T(Ss.$$.fragment,n),T(Ds.$$.fragment,n),T(Os.$$.fragment,n),T(Gs.$$.fragment,n),T(Bs.$$.fragment,n),T(Us.$$.fragment,n),T(Ys.$$.fragment,n),T(Kn.$$.fragment,n),T(Zs.$$.fragment,n),T(Js.$$.fragment,n),T(Xs.$$.fragment,n),T(Qs.$$.fragment,n),T(ea.$$.fragment,n),T(ta.$$.fragment,n),T(na.$$.fragment,n),T(Xn.$$.fragment,n),T(da.$$.fragment,n),T(Qn.$$.fragment,n),T(la.$$.fragment,n),T(ca.$$.fragment,n),T(pa.$$.fragment,n),T(to.$$.fragment,n),T(Ta.$$.fragment,n),T(no.$$.fragment,n),T(va.$$.fragment,n),T(ka.$$.fragment,n),T(ba.$$.fragment,n),T(so.$$.fragment,n),T(Ea.$$.fragment,n),T(ao.$$.fragment,n),T(ja.$$.fragment,n),T(qa.$$.fragment,n),T(Fa.$$.fragment,n),T(io.$$.fragment,n),T(Ma.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(Aa.$$.fragment,n),T(Na.$$.fragment,n),T(La.$$.fragment,n),T(Ia.$$.fragment,n),T(co.$$.fragment,n),T(Sa.$$.fragment,n),T(Da.$$.fragment,n),T(Oa.$$.fragment,n),T(Ga.$$.fragment,n),T(Ba.$$.fragment,n),tp=!0)},o(n){v(x.$$.fragment,n),v(re.$$.fragment,n),v(yo.$$.fragment,n),v(xo.$$.fragment,n),v(Eo.$$.fragment,n),v(qo.$$.fragment,n),v(Ao.$$.fragment,n),v(Io.$$.fragment,n),v(So.$$.fragment,n),v(Do.$$.fragment,n),v(Vo.$$.fragment,n),v(Ko.$$.fragment,n),v(Zo.$$.fragment,n),v(Jo.$$.fragment,n),v(os.$$.fragment,n),v(as.$$.fragment,n),v(is.$$.fragment,n),v(ds.$$.fragment,n),v(ls.$$.fragment,n),v(hs.$$.fragment,n),v(ms.$$.fragment,n),v(fs.$$.fragment,n),v(_s.$$.fragment,n),v(ws.$$.fragment,n),v(On.$$.fragment,n),v(ys.$$.fragment,n),v(xs.$$.fragment,n),v($s.$$.fragment,n),v(zs.$$.fragment,n),v(Es.$$.fragment,n),v(js.$$.fragment,n),v(qs.$$.fragment,n),v(Ls.$$.fragment,n),v(Wn.$$.fragment,n),v(Is.$$.fragment,n),v(Ss.$$.fragment,n),v(Ds.$$.fragment,n),v(Os.$$.fragment,n),v(Gs.$$.fragment,n),v(Bs.$$.fragment,n),v(Us.$$.fragment,n),v(Ys.$$.fragment,n),v(Kn.$$.fragment,n),v(Zs.$$.fragment,n),v(Js.$$.fragment,n),v(Xs.$$.fragment,n),v(Qs.$$.fragment,n),v(ea.$$.fragment,n),v(ta.$$.fragment,n),v(na.$$.fragment,n),v(Xn.$$.fragment,n),v(da.$$.fragment,n),v(Qn.$$.fragment,n),v(la.$$.fragment,n),v(ca.$$.fragment,n),v(pa.$$.fragment,n),v(to.$$.fragment,n),v(Ta.$$.fragment,n),v(no.$$.fragment,n),v(va.$$.fragment,n),v(ka.$$.fragment,n),v(ba.$$.fragment,n),v(so.$$.fragment,n),v(Ea.$$.fragment,n),v(ao.$$.fragment,n),v(ja.$$.fragment,n),v(qa.$$.fragment,n),v(Fa.$$.fragment,n),v(io.$$.fragment,n),v(Ma.$$.fragment,n),v(Pa.$$.fragment,n),v(Ca.$$.fragment,n),v(Aa.$$.fragment,n),v(Na.$$.fragment,n),v(La.$$.fragment,n),v(Ia.$$.fragment,n),v(co.$$.fragment,n),v(Sa.$$.fragment,n),v(Da.$$.fragment,n),v(Oa.$$.fragment,n),v(Ga.$$.fragment,n),v(Ba.$$.fragment,n),tp=!1},d(n){t(u),n&&t(z),n&&t(b),k(x),n&&t(ae),n&&t(j),k(re),n&&t(ve),n&&t(B),n&&t(C),n&&t(ue),n&&t(ke),n&&t(me),n&&t(be),n&&t(M),n&&t(H),n&&t(R),n&&t(tc),n&&t(Ra),n&&t(nc),n&&t(He),n&&t(oc),n&&t(Ka),n&&t(sc),n&&t($t),n&&t(ac),n&&t(zn),n&&t(rc),n&&t(zt),n&&t(ic),n&&t(Xa),n&&t(dc),n&&t(Yt),k(yo),n&&t(lc),n&&t(mt),n&&t(cc),n&&t(jn),n&&t(pc),n&&t(er),n&&t(hc),k(xo,n),n&&t(uc),n&&t(qn),n&&t(mc),n&&t(nr),n&&t(fc),k(Eo,n),n&&t(_c),n&&t(oe),n&&t(gc),n&&t(Et),n&&t(Tc),n&&t(fe),n&&t(vc),k(qo,n),n&&t(kc),n&&t(or),n&&t(bc),n&&t(jt),n&&t(wc),n&&t(sr),n&&t(yc),n&&t(Xt),k(Ao),n&&t(xc),n&&t(ft),n&&t($c),k(Io,n),n&&t(zc),n&&t(Re),n&&t(Ec),n&&t(ir),n&&t(jc),k(So,n),n&&t(qc),n&&t(dr),n&&t(Fc),n&&t(Qt),k(Do),n&&t(Mc),n&&t(lr),n&&t(Pc),n&&t(Pn),n&&t(Cc),n&&t(tn),k(Vo),n&&t(Ac),n&&t(kt),k(Ko),n&&t(Nc),n&&t(on),k(Zo),n&&t(Lc),n&&t(Z),k(Jo),k(os),k(as),k(is),n&&t(Ic),n&&t(sn),k(ds),n&&t(Sc),n&&t(Be),k(ls),k(hs),k(ms),n&&t(Dc),n&&t(rn),k(fs),n&&t(Oc),n&&t(J),k(_s),k(ws),k(On),k(ys),k(xs),k($s),k(zs),k(Es),n&&t(Gc),n&&t(ln),k(js),n&&t(Bc),n&&t(X),k(qs),k(Ls),k(Wn),k(Is),k(Ss),k(Ds),k(Os),k(Gs),n&&t(Uc),n&&t(pn),k(Bs),n&&t(Wc),n&&t(Q),k(Us),k(Ys),k(Kn),k(Zs),k(Js),k(Xs),k(Qs),k(ea),n&&t(Hc),n&&t(un),k(ta),n&&t(Rc),n&&t(de),k(na),k(Xn),k(da),k(Qn),k(la),n&&t(Vc),n&&t(fn),k(ca),n&&t(Kc),n&&t(le),k(pa),k(to),k(Ta),k(no),k(va),n&&t(Yc),n&&t(gn),k(ka),n&&t(Zc),n&&t(ce),k(ba),k(so),k(Ea),k(ao),k(ja),n&&t(Jc),n&&t(vn),k(qa),n&&t(Xc),n&&t(wt),k(Fa),k(io),k(Ma),k(Pa),k(Ca),k(Aa),k(Na),n&&t(Qc),n&&t(bn),k(La),n&&t(ep),n&&t(yt),k(Ia),k(co),k(Sa),k(Da),k(Oa),k(Ga),k(Ba)}}}const l2={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function c2(L,u,z){let{fw:b}=u;return L.$$set=y=>{"fw"in y&&z(0,b=y.fw)},[b]}class g2 extends Vy{constructor(u){super();Ky(this,u,c2,d2,Yy,{fw:0})}}export{g2 as default,l2 as metadata};
