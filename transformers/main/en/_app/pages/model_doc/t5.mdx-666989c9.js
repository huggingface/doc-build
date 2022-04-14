import{S as p1,i as h1,s as u1,e as a,k as d,w as f,t as o,M as m1,c as r,d as n,m as l,a as i,x as _,h as s,b as c,F as e,g as p,y as g,q as T,o as v,B as k,v as f1}from"../../chunks/vendor-6b77c823.js";import{T as yt}from"../../chunks/Tip-39098574.js";import{D as M}from"../../chunks/Docstring-90e3aa51.js";import{C as S}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function _1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function g1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function T1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function v1(L){let u,z,b,w,$,x,y,j,ze,se,q,ee,G,ae,je,U,qe,ve,W,A,re,pe,F,P,he,K,ke,ue,R,Ee,be,C,Fe,H,V,_e,N,Me,ge,I,Ce,B,Pe;return{c(){u=a("p"),z=o("TF 2.0 models accepts two formats as inputs:"),b=d(),w=a("ul"),$=a("li"),x=o("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),j=a("li"),ze=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),q=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),je=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),qe=o("model(inputs)"),ve=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=a("ul"),P=a("li"),he=o("a single Tensor with "),K=a("code"),ke=o("input_ids"),ue=o(" only and nothing else: "),R=a("code"),Ee=o("model(inputs_ids)"),be=d(),C=a("li"),Fe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),_e=o(" or "),N=a("code"),Me=o("model([input_ids, attention_mask, token_type_ids])"),ge=d(),I=a("li"),Ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var E=i(u);z=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(n),b=l(m),w=r(m,"UL",{});var te=i(w);$=r(te,"LI",{});var De=i($);x=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(n),y=l(te),j=r(te,"LI",{});var dt=i(j);ze=s(dt,"having all inputs as a list, tuple or dict in the first positional arguments."),dt.forEach(n),te.forEach(n),se=l(m),q=r(m,"P",{});var D=i(q);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Se=i(G);ae=s(Se,"tf.keras.Model.fit"),Se.forEach(n),je=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);qe=s(ne,"model(inputs)"),ne.forEach(n),ve=s(D,"."),D.forEach(n),W=l(m),A=r(m,"P",{});var lt=i(A);re=s(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(n),pe=l(m),F=r(m,"UL",{});var O=i(F);P=r(O,"LI",{});var Y=i(P);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var ct=i(K);ke=s(ct,"input_ids"),ct.forEach(n),ue=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Ne=i(R);Ee=s(Ne,"model(inputs_ids)"),Ne.forEach(n),Y.forEach(n),be=l(O),C=r(O,"LI",{});var Z=i(C);Fe=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var pt=i(H);V=s(pt,"model([input_ids, attention_mask])"),pt.forEach(n),_e=s(Z," or "),N=r(Z,"CODE",{});var Oe=i(N);Me=s(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(n),Z.forEach(n),ge=l(O),I=r(O,"LI",{});var Le=i(I);Ce=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(Le,"CODE",{});var ht=i(B);Pe=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(n),Le.forEach(n),O.forEach(n)},m(m,E){p(m,u,E),e(u,z),p(m,b,E),p(m,w,E),e(w,$),e($,x),e(w,y),e(w,j),e(j,ze),p(m,se,E),p(m,q,E),e(q,ee),e(q,G),e(G,ae),e(q,je),e(q,U),e(U,qe),e(q,ve),p(m,W,E),p(m,A,E),e(A,re),p(m,pe,E),p(m,F,E),e(F,P),e(P,he),e(P,K),e(K,ke),e(P,ue),e(P,R),e(R,Ee),e(F,be),e(F,C),e(C,Fe),e(C,H),e(H,V),e(C,_e),e(C,N),e(N,Me),e(F,ge),e(F,I),e(I,Ce),e(I,B),e(B,Pe)},d(m){m&&n(u),m&&n(b),m&&n(w),m&&n(se),m&&n(q),m&&n(W),m&&n(A),m&&n(pe),m&&n(F)}}}function k1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function b1(L){let u,z,b,w,$,x,y,j,ze,se,q,ee,G,ae,je,U,qe,ve,W,A,re,pe,F,P,he,K,ke,ue,R,Ee,be,C,Fe,H,V,_e,N,Me,ge,I,Ce,B,Pe;return{c(){u=a("p"),z=o("TF 2.0 models accepts two formats as inputs:"),b=d(),w=a("ul"),$=a("li"),x=o("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),j=a("li"),ze=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),q=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),je=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),qe=o("model(inputs)"),ve=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=a("ul"),P=a("li"),he=o("a single Tensor with "),K=a("code"),ke=o("input_ids"),ue=o(" only and nothing else: "),R=a("code"),Ee=o("model(inputs_ids)"),be=d(),C=a("li"),Fe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),_e=o(" or "),N=a("code"),Me=o("model([input_ids, attention_mask, token_type_ids])"),ge=d(),I=a("li"),Ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var E=i(u);z=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(n),b=l(m),w=r(m,"UL",{});var te=i(w);$=r(te,"LI",{});var De=i($);x=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(n),y=l(te),j=r(te,"LI",{});var dt=i(j);ze=s(dt,"having all inputs as a list, tuple or dict in the first positional arguments."),dt.forEach(n),te.forEach(n),se=l(m),q=r(m,"P",{});var D=i(q);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Se=i(G);ae=s(Se,"tf.keras.Model.fit"),Se.forEach(n),je=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);qe=s(ne,"model(inputs)"),ne.forEach(n),ve=s(D,"."),D.forEach(n),W=l(m),A=r(m,"P",{});var lt=i(A);re=s(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(n),pe=l(m),F=r(m,"UL",{});var O=i(F);P=r(O,"LI",{});var Y=i(P);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var ct=i(K);ke=s(ct,"input_ids"),ct.forEach(n),ue=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Ne=i(R);Ee=s(Ne,"model(inputs_ids)"),Ne.forEach(n),Y.forEach(n),be=l(O),C=r(O,"LI",{});var Z=i(C);Fe=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var pt=i(H);V=s(pt,"model([input_ids, attention_mask])"),pt.forEach(n),_e=s(Z," or "),N=r(Z,"CODE",{});var Oe=i(N);Me=s(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(n),Z.forEach(n),ge=l(O),I=r(O,"LI",{});var Le=i(I);Ce=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(Le,"CODE",{});var ht=i(B);Pe=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(n),Le.forEach(n),O.forEach(n)},m(m,E){p(m,u,E),e(u,z),p(m,b,E),p(m,w,E),e(w,$),e($,x),e(w,y),e(w,j),e(j,ze),p(m,se,E),p(m,q,E),e(q,ee),e(q,G),e(G,ae),e(q,je),e(q,U),e(U,qe),e(q,ve),p(m,W,E),p(m,A,E),e(A,re),p(m,pe,E),p(m,F,E),e(F,P),e(P,he),e(P,K),e(K,ke),e(P,ue),e(P,R),e(R,Ee),e(F,be),e(F,C),e(C,Fe),e(C,H),e(H,V),e(C,_e),e(C,N),e(N,Me),e(F,ge),e(F,I),e(I,Ce),e(I,B),e(B,Pe)},d(m){m&&n(u),m&&n(b),m&&n(w),m&&n(se),m&&n(q),m&&n(W),m&&n(A),m&&n(pe),m&&n(F)}}}function y1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function w1(L){let u,z,b,w,$,x,y,j,ze,se,q,ee,G,ae,je,U,qe,ve,W,A,re,pe,F,P,he,K,ke,ue,R,Ee,be,C,Fe,H,V,_e,N,Me,ge,I,Ce,B,Pe;return{c(){u=a("p"),z=o("TF 2.0 models accepts two formats as inputs:"),b=d(),w=a("ul"),$=a("li"),x=o("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),j=a("li"),ze=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),q=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),je=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),qe=o("model(inputs)"),ve=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=a("ul"),P=a("li"),he=o("a single Tensor with "),K=a("code"),ke=o("input_ids"),ue=o(" only and nothing else: "),R=a("code"),Ee=o("model(inputs_ids)"),be=d(),C=a("li"),Fe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),_e=o(" or "),N=a("code"),Me=o("model([input_ids, attention_mask, token_type_ids])"),ge=d(),I=a("li"),Ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var E=i(u);z=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(n),b=l(m),w=r(m,"UL",{});var te=i(w);$=r(te,"LI",{});var De=i($);x=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(n),y=l(te),j=r(te,"LI",{});var dt=i(j);ze=s(dt,"having all inputs as a list, tuple or dict in the first positional arguments."),dt.forEach(n),te.forEach(n),se=l(m),q=r(m,"P",{});var D=i(q);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Se=i(G);ae=s(Se,"tf.keras.Model.fit"),Se.forEach(n),je=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);qe=s(ne,"model(inputs)"),ne.forEach(n),ve=s(D,"."),D.forEach(n),W=l(m),A=r(m,"P",{});var lt=i(A);re=s(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(n),pe=l(m),F=r(m,"UL",{});var O=i(F);P=r(O,"LI",{});var Y=i(P);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var ct=i(K);ke=s(ct,"input_ids"),ct.forEach(n),ue=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Ne=i(R);Ee=s(Ne,"model(inputs_ids)"),Ne.forEach(n),Y.forEach(n),be=l(O),C=r(O,"LI",{});var Z=i(C);Fe=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var pt=i(H);V=s(pt,"model([input_ids, attention_mask])"),pt.forEach(n),_e=s(Z," or "),N=r(Z,"CODE",{});var Oe=i(N);Me=s(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(n),Z.forEach(n),ge=l(O),I=r(O,"LI",{});var Le=i(I);Ce=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(Le,"CODE",{});var ht=i(B);Pe=s(ht,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ht.forEach(n),Le.forEach(n),O.forEach(n)},m(m,E){p(m,u,E),e(u,z),p(m,b,E),p(m,w,E),e(w,$),e($,x),e(w,y),e(w,j),e(j,ze),p(m,se,E),p(m,q,E),e(q,ee),e(q,G),e(G,ae),e(q,je),e(q,U),e(U,qe),e(q,ve),p(m,W,E),p(m,A,E),e(A,re),p(m,pe,E),p(m,F,E),e(F,P),e(P,he),e(P,K),e(K,ke),e(P,ue),e(P,R),e(R,Ee),e(F,be),e(F,C),e(C,Fe),e(C,H),e(H,V),e(C,_e),e(C,N),e(N,Me),e(F,ge),e(F,I),e(I,Ce),e(I,B),e(B,Pe)},d(m){m&&n(u),m&&n(b),m&&n(w),m&&n(se),m&&n(q),m&&n(W),m&&n(A),m&&n(pe),m&&n(F)}}}function x1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function $1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function z1(L){let u,z,b,w,$;return{c(){u=a("p"),z=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),w=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var y=i(u);z=s(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(y,"CODE",{});var j=i(b);w=s(j,"Module"),j.forEach(n),$=s(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(n)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&n(u)}}}function j1(L){let u,z,b,w,$,x,y,j,ze,se,q,ee,G,ae,je,U,qe,ve,W,A,re,pe,F,P,he,K,ke,ue,R,Ee,be,C,Fe,H,V,_e,N,Me,ge,I,Ce,B,Pe,m,E,te,De,dt,D,Se,ne,lt,O,Y,ct,Ne,Z,pt,Oe,Le,ht,Ul,Va,Kp,Wl,Ge,di,li,mo,Yp,Zp,ci,pi,fo,Jp,Xp,hi,ui,_o,Qp,eh,mi,fi,go,th,nh,_i,Ka,To,oh,sh,Rl,Ya,ah,Bl,wt,gi,kn,Ti,rh,ih,Za,dh,lh,ch,vi,bn,ki,ph,hh,Ja,uh,mh,fh,bi,yn,yi,_h,gh,Xa,Th,vh,Hl,wn,kh,vo,bh,yh,Vl,xt,wh,ko,xh,$h,bo,zh,jh,Kl,Qa,Yl,Vt,xn,wi,yo,qh,xi,Eh,Zl,ut,Fh,$i,Mh,Ch,zi,Ph,Nh,ji,Oh,Lh,Jl,$n,Ah,er,Ih,Dh,Xl,tr,qi,Sh,Ql,me,Gh,Ei,Uh,Wh,Fi,Rh,Bh,Mi,Hh,Vh,Ci,Kh,Yh,Pi,Zh,Jh,nr,Xh,Qh,ec,or,eu,tc,wo,nc,zn,tu,xo,nu,ou,oc,sr,Ni,su,sc,ar,au,ac,$o,rc,oe,ru,Oi,iu,du,Li,lu,cu,Ai,pu,hu,Ii,uu,mu,Di,fu,_u,Si,gu,Tu,Gi,vu,ku,ic,$t,bu,Ui,yu,wu,Wi,xu,$u,dc,fe,zu,Ri,ju,qu,Bi,Eu,Fu,Hi,Mu,Cu,Vi,Pu,Nu,zo,Ou,Lu,Ki,Au,Iu,lc,jo,cc,rr,Du,pc,ir,qo,Su,Yi,Gu,Uu,hc,zt,Wu,Eo,Ru,Bu,Fo,Hu,Vu,uc,jn,Ku,Zi,Yu,Zu,mc,dr,fc,Kt,qn,Ji,Mo,Ju,Xi,Xu,_c,mt,Qu,lr,em,tm,Co,nm,om,Po,sm,am,gc,No,Tc,Ue,rm,Qi,im,dm,ed,lm,cm,cr,pm,hm,td,um,mm,vc,pr,fm,kc,Oo,bc,hr,_m,yc,Lo,wc,ur,xc,Yt,En,nd,Ao,gm,od,Tm,$c,ft,vm,Io,km,bm,sd,ym,wm,ad,xm,$m,zc,Zt,Fn,rd,Do,zm,id,jm,jc,mr,qm,qc,Mn,dd,Jt,Em,So,Fm,Mm,Go,Cm,Pm,Nm,ld,Ae,Om,Uo,Lm,Am,Wo,Im,Dm,Ro,Sm,Gm,Bo,Um,Wm,Ho,Rm,Bm,Ec,Xt,Cn,cd,Vo,Hm,pd,Vm,Fc,kt,Ko,Km,bt,Ym,fr,Zm,Jm,_r,Xm,Qm,Yo,ef,tf,nf,Qt,of,gr,sf,af,Tr,rf,df,Mc,en,Pn,hd,Zo,lf,ud,cf,Cc,ie,Jo,pf,Xo,hf,Qo,uf,mf,ff,es,_f,vr,gf,Tf,vf,jt,ts,kf,md,bf,yf,ns,kr,wf,fd,xf,$f,br,zf,_d,jf,qf,Nn,os,Ef,ss,Ff,gd,Mf,Cf,Pf,On,as,Nf,Td,Of,Lf,yr,rs,Pc,tn,Ln,vd,is,Af,kd,If,Nc,Ie,ds,Df,nn,Sf,bd,Gf,Uf,ls,Wf,Rf,Bf,cs,Hf,wr,Vf,Kf,Yf,qt,ps,Zf,yd,Jf,Xf,hs,xr,Qf,wd,e_,t_,$r,n_,xd,o_,s_,An,us,a_,$d,r_,Oc,on,In,zd,ms,i_,jd,d_,Lc,J,fs,l_,qd,c_,p_,_s,h_,gs,u_,m_,f_,Ts,__,zr,g_,T_,v_,vs,k_,ks,b_,y_,w_,We,bs,x_,sn,$_,jr,z_,j_,Ed,q_,E_,F_,Dn,M_,Fd,C_,P_,ys,N_,Re,ws,O_,Md,L_,A_,Cd,I_,D_,Pd,S_,G_,xs,U_,_t,$s,W_,Nd,R_,B_,Od,H_,V_,zs,Ac,an,Sn,Ld,js,K_,Ad,Y_,Ic,X,qs,Z_,Es,J_,Id,X_,Q_,eg,Fs,tg,Ms,ng,og,sg,Cs,ag,qr,rg,ig,dg,Ps,lg,Ns,cg,pg,hg,Be,Os,ug,rn,mg,Er,fg,_g,Dd,gg,Tg,vg,Gn,kg,Sd,bg,yg,Ls,wg,He,As,xg,Gd,$g,zg,Ud,jg,qg,Wd,Eg,Fg,Is,Mg,gt,Ds,Cg,Rd,Pg,Ng,Bd,Og,Lg,Ss,Dc,dn,Un,Hd,Gs,Ag,Vd,Ig,Sc,Q,Us,Dg,Kd,Sg,Gg,Ws,Ug,Rs,Wg,Rg,Bg,Bs,Hg,Fr,Vg,Kg,Yg,Hs,Zg,Vs,Jg,Xg,Qg,Ve,Ks,eT,ln,tT,Mr,nT,oT,Yd,sT,aT,rT,Wn,iT,Zd,dT,lT,Ys,cT,Ke,Zs,pT,Jd,hT,uT,Xd,mT,fT,Qd,_T,gT,Js,TT,Tt,Xs,vT,el,kT,bT,tl,yT,wT,Qs,Gc,cn,Rn,nl,ea,xT,ol,$T,Uc,de,ta,zT,sl,jT,qT,na,ET,oa,FT,MT,CT,sa,PT,Cr,NT,OT,LT,aa,AT,ra,IT,DT,ST,Bn,GT,Ye,ia,UT,pn,WT,Pr,RT,BT,al,HT,VT,KT,Hn,YT,rl,ZT,JT,da,Wc,hn,Vn,il,la,XT,dl,QT,Rc,le,ca,ev,pa,tv,ll,nv,ov,sv,ha,av,ua,rv,iv,dv,ma,lv,Nr,cv,pv,hv,fa,uv,_a,mv,fv,_v,Kn,gv,Ze,ga,Tv,un,vv,Or,kv,bv,cl,yv,wv,xv,Yn,$v,pl,zv,jv,Ta,Bc,mn,Zn,hl,va,qv,ul,Ev,Hc,ce,ka,Fv,ml,Mv,Cv,ba,Pv,ya,Nv,Ov,Lv,wa,Av,Lr,Iv,Dv,Sv,xa,Gv,$a,Uv,Wv,Rv,Jn,Bv,Je,za,Hv,fn,Vv,Ar,Kv,Yv,fl,Zv,Jv,Xv,Xn,Qv,_l,ek,tk,ja,Vc,_n,Qn,gl,qa,nk,Tl,ok,Kc,rt,Ea,sk,Xe,Fa,ak,gn,rk,vl,ik,dk,kl,lk,ck,pk,eo,hk,bl,uk,mk,Ma,fk,Et,Ca,_k,yl,gk,Tk,Pa,vk,Ft,Na,kk,wl,bk,yk,Oa,Yc,Tn,to,xl,La,wk,$l,xk,Zc,it,Aa,$k,Qe,Ia,zk,vn,jk,zl,qk,Ek,jl,Fk,Mk,Ck,no,Pk,ql,Nk,Ok,Da,Lk,Mt,Sa,Ak,El,Ik,Dk,Ga,Sk,Ct,Ua,Gk,Fl,Uk,Wk,Wa,Jc;return x=new Te({}),ae=new Te({}),yo=new Te({}),wo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">3.7837</span>`}}),$o=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.2542</span>`}}),jo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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

# replace padding token id's of the labels by -100 so it's ignored by the loss
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>max_source_length = <span class="hljs-number">512</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>max_target_length = <span class="hljs-number">128</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode the inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequences = [input_sequence_1, input_sequence_2]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;longest&quot;</span>,
<span class="hljs-meta">... </span>    max_length=max_source_length,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode the targets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_encoding = tokenizer(
<span class="hljs-meta">... </span>    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = target_encoding.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100 so it&#x27;s ignored by the loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.188</span>`}}),Mo=new Te({}),No=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
Das Haus ist wunderbar.`}}),Oo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

task_prefix = "translate English to German: "
sentences = [
    "The house is wonderful.",
    "I like to work in NYC.",
]  # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentences = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;The house is wonderful.&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># use different length sentences to test batching</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequences = model.generate(
<span class="hljs-meta">... </span>    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))
[<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-string">&#x27;Ich arbeite gerne in NYC.&#x27;</span>]`}}),Lo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids

sequence_ids = model.generate(input_ids)
sequences = tokenizer.batch_decode(sequence_ids)
sequences`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = tokenizer.batch_decode(sequence_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences
[<span class="hljs-string">&#x27;&lt;pad&gt; &lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`}}),Ao=new Te({}),Do=new Te({}),Vo=new Te({}),Ko=new M({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/configuration_t5.py#L34"}}),Zo=new Te({}),Jo=new M({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L53"}}),ts=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L223",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L163",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L201",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rs=new M({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L298"}}),is=new Te({}),ds=new M({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L62"}}),ps=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L165",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),us=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new Te({}),fs=new M({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1268"}}),bs=new M({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1344",returnDescription:`
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),Dn=new yt({props:{$$slots:{default:[_1]},$$scope:{ctx:L}}}),ys=new S({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ws=new M({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1300"}}),xs=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),$s=new M({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1312"}}),zs=new S({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),js=new Te({}),qs=new M({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1457"}}),Os=new M({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1538",returnDescription:`
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
`}}),Gn=new yt({props:{$$slots:{default:[g1]},$$scope:{ctx:L}}}),Ls=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),As=new M({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1494"}}),Is=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Ds=new M({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1507"}}),Ss=new S({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Gs=new Te({}),Us=new M({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1751"}}),Ks=new M({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1809",returnDescription:`
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),Wn=new yt({props:{$$slots:{default:[T1]},$$scope:{ctx:L}}}),Ys=new S({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Zs=new M({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1772"}}),Js=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Xs=new M({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1783"}}),Qs=new S({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),ea=new Te({}),ta=new M({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1108"}}),Bn=new yt({props:{$$slots:{default:[v1]},$$scope:{ctx:L}}}),ia=new M({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1134",returnDescription:`
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
`}}),Hn=new yt({props:{$$slots:{default:[k1]},$$scope:{ctx:L}}}),da=new S({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),la=new Te({}),ca=new M({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1254"}}),Kn=new yt({props:{$$slots:{default:[b1]},$$scope:{ctx:L}}}),ga=new M({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1309",returnDescription:`
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
`}}),Yn=new yt({props:{$$slots:{default:[y1]},$$scope:{ctx:L}}}),Ta=new S({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),va=new Te({}),ka=new M({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1596"}}),Jn=new yt({props:{$$slots:{default:[w1]},$$scope:{ctx:L}}}),za=new M({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1618",returnDescription:`
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
`}}),Xn=new yt({props:{$$slots:{default:[x1]},$$scope:{ctx:L}}}),ja=new S({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),qa=new Te({}),Ea=new M({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1314"}}),Fa=new M({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L946",returnDescription:`
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
`}}),eo=new yt({props:{$$slots:{default:[$1]},$$scope:{ctx:L}}}),Ma=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ca=new M({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1031",returnDescription:`
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
`}}),Pa=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Na=new M({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1089",returnDescription:`
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
`}}),Oa=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),La=new Te({}),Aa=new M({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1454"}}),Ia=new M({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L946",returnDescription:`
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
`}}),no=new yt({props:{$$slots:{default:[z1]},$$scope:{ctx:L}}}),Da=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Sa=new M({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1031",returnDescription:`
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
`}}),Ga=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ua=new M({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1457",returnDescription:`
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
`}}),Wa=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=a("meta"),z=d(),b=a("h1"),w=a("a"),$=a("span"),f(x.$$.fragment),y=d(),j=a("span"),ze=o("T5"),se=d(),q=a("h2"),ee=a("a"),G=a("span"),f(ae.$$.fragment),je=d(),U=a("span"),qe=o("Overview"),ve=d(),W=a("p"),A=o("The T5 model was presented in "),re=a("a"),pe=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),P=d(),he=a("p"),K=o("The abstract from the paper is the following:"),ke=d(),ue=a("p"),R=a("em"),Ee=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),be=d(),C=a("p"),Fe=o("Tips:"),H=d(),V=a("ul"),_e=a("li"),N=a("p"),Me=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=a("em"),I=o("translate English to German: \u2026"),Ce=o(`,
for summarization: `),B=a("em"),Pe=o("summarize: \u2026"),m=o("."),E=d(),te=a("li"),De=a("p"),dt=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),Se=a("li"),ne=a("p"),lt=o("See the "),O=a("a"),Y=o("training"),ct=o(", "),Ne=a("a"),Z=o("inference"),pt=o(" and "),Oe=a("a"),Le=o("scripts"),ht=o(" sections below for all details regarding usage."),Ul=d(),Va=a("p"),Kp=o("T5 comes in different sizes:"),Wl=d(),Ge=a("ul"),di=a("li"),li=a("p"),mo=a("a"),Yp=o("t5-small"),Zp=d(),ci=a("li"),pi=a("p"),fo=a("a"),Jp=o("t5-base"),Xp=d(),hi=a("li"),ui=a("p"),_o=a("a"),Qp=o("t5-large"),eh=d(),mi=a("li"),fi=a("p"),go=a("a"),th=o("t5-3b"),nh=d(),_i=a("li"),Ka=a("p"),To=a("a"),oh=o("t5-11b"),sh=o("."),Rl=d(),Ya=a("p"),ah=o("Based on the original T5 model, Google has released some follow-up works:"),Bl=d(),wt=a("ul"),gi=a("li"),kn=a("p"),Ti=a("strong"),rh=o("T5v1.1"),ih=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Za=a("a"),dh=o("here"),lh=o("."),ch=d(),vi=a("li"),bn=a("p"),ki=a("strong"),ph=o("mT5"),hh=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ja=a("a"),uh=o("here"),mh=o("."),fh=d(),bi=a("li"),yn=a("p"),yi=a("strong"),_h=o("byT5"),gh=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Xa=a("a"),Th=o("here"),vh=o("."),Hl=d(),wn=a("p"),kh=o("All checkpoints can be found on the "),vo=a("a"),bh=o("hub"),yh=o("."),Vl=d(),xt=a("p"),wh=o("This model was contributed by "),ko=a("a"),xh=o("thomwolf"),$h=o(". The original code can be found "),bo=a("a"),zh=o("here"),jh=o("."),Kl=d(),Qa=a("a"),Yl=d(),Vt=a("h2"),xn=a("a"),wi=a("span"),f(yo.$$.fragment),qh=d(),xi=a("span"),Eh=o("Training"),Zl=d(),ut=a("p"),Fh=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),$i=a("code"),Mh=o("input_ids"),Ch=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),zi=a("code"),Ph=o("decoder_input_ids"),Nh=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),ji=a("code"),Oh=o("labels"),Lh=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Jl=d(),$n=a("p"),Ah=o("One can use "),er=a("a"),Ih=o("T5ForConditionalGeneration"),Dh=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Xl=d(),tr=a("ul"),qi=a("li"),Sh=o("Unsupervised denoising training"),Ql=d(),me=a("p"),Gh=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Ei=a("em"),Uh=o("a.k.a"),Wh=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=a("em"),Rh=o("real"),Bh=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=a("code"),Hh=o("<extra_id_0>"),Vh=o(`,
`),Ci=a("code"),Kh=o("<extra_id_1>"),Yh=o(", \u2026 up to "),Pi=a("code"),Zh=o("<extra_id_99>"),Jh=o(`. As a default, 100 sentinel tokens are available in
`),nr=a("a"),Xh=o("T5Tokenizer"),Qh=o("."),ec=d(),or=a("p"),eu=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),tc=d(),f(wo.$$.fragment),nc=d(),zn=a("p"),tu=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),xo=a("a"),nu=o("run_t5_mlm_flax.py"),ou=o(` script in the Examples
directory.`),oc=d(),sr=a("ul"),Ni=a("li"),su=o("Supervised training"),sc=d(),ar=a("p"),au=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ac=d(),f($o.$$.fragment),rc=d(),oe=a("p"),ru=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Oi=a("code"),iu=o("input_ids"),du=o(` (which are the
`),Li=a("code"),lu=o("input_ids"),cu=o(" of the encoded input sequence) and "),Ai=a("code"),pu=o("labels"),hu=o(" (which are the "),Ii=a("code"),uu=o("input_ids"),mu=o(` of the encoded
target sequence). The model will automatically create the `),Di=a("code"),fu=o("decoder_input_ids"),_u=o(" based on the "),Si=a("code"),gu=o("labels"),Tu=o(`, by
shifting them one position to the right and prepending the `),Gi=a("code"),vu=o("config.decoder_start_token_id"),ku=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),ic=d(),$t=a("p"),bu=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=a("code"),yu=o("max_source_length"),wu=o(" and "),Wi=a("code"),xu=o("max_target_length"),$u=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),dc=d(),fe=a("p"),zu=o("In addition, we must make sure that padding token id\u2019s of the "),Ri=a("code"),ju=o("labels"),qu=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Bi=a("code"),Eu=o("ignore_index"),Fu=o(`
of the `),Hi=a("code"),Mu=o("CrossEntropyLoss"),Cu=o(". In Flax, one can use the "),Vi=a("code"),Pu=o("decoder_attention_mask"),Nu=o(` to ignore padded tokens from
the loss (see the `),zo=a("a"),Ou=o("Flax summarization script"),Lu=o(` for details). We also pass
`),Ki=a("code"),Au=o("attention_mask"),Iu=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),lc=d(),f(jo.$$.fragment),cc=d(),rr=a("p"),Du=o("Additional training tips:"),pc=d(),ir=a("ul"),qo=a("li"),Su=o("T5 models need a slightly higher learning rate than the default one set in the "),Yi=a("code"),Gu=o("Trainer"),Uu=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),hc=d(),zt=a("p"),Wu=o("According to "),Eo=a("a"),Ru=o("this forum post"),Bu=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Fo=a("a"),Hu=o("paper"),Vu=o(` for the task prefixes
used).`),uc=d(),jn=a("p"),Ku=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Zi=a("em"),Yu=o("pad_to_multiple_of"),Zu=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),mc=d(),dr=a("a"),fc=d(),Kt=a("h2"),qn=a("a"),Ji=a("span"),f(Mo.$$.fragment),Ju=d(),Xi=a("span"),Xu=o("Inference"),_c=d(),mt=a("p"),Qu=o("At inference time, it is recommended to use "),lr=a("a"),em=o("generate()"),tm=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Co=a("a"),nm=o("this blog post"),om=o(` to know all the details about generating text with Transformers.
There\u2019s also `),Po=a("a"),sm=o("this blog post"),am=o(` which explains how
generation works in general in encoder-decoder models.`),gc=d(),f(No.$$.fragment),Tc=d(),Ue=a("p"),rm=o("Note that T5 uses the "),Qi=a("code"),im=o("pad_token_id"),dm=o(" as the "),ed=a("code"),lm=o("decoder_start_token_id"),cm=o(`, so when doing generation without using
`),cr=a("a"),pm=o("generate()"),hm=o(", make sure you start it with the "),td=a("code"),um=o("pad_token_id"),mm=o("."),vc=d(),pr=a("p"),fm=o("The example above only shows a single example. You can also do batched inference, like so:"),kc=d(),f(Oo.$$.fragment),bc=d(),hr=a("p"),_m=o(`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),yc=d(),f(Lo.$$.fragment),wc=d(),ur=a("a"),xc=d(),Yt=a("h2"),En=a("a"),nd=a("span"),f(Ao.$$.fragment),gm=d(),od=a("span"),Tm=o("Performance"),$c=d(),ft=a("p"),vm=o("If you\u2019d like a faster training and inference performance, install "),Io=a("a"),km=o("apex"),bm=o(" and then the model will automatically use "),sd=a("code"),ym=o("apex.normalization.FusedRMSNorm"),wm=o(" instead of "),ad=a("code"),xm=o("T5LayerNorm"),$m=o(". The former uses an optimized fused kernel which is several times faster than the latter."),zc=d(),Zt=a("h2"),Fn=a("a"),rd=a("span"),f(Do.$$.fragment),zm=d(),id=a("span"),jm=o("Example scripts"),jc=d(),mr=a("p"),qm=o("T5 is supported by several example scripts, both for pre-training and fine-tuning."),qc=d(),Mn=a("ul"),dd=a("li"),Jt=a("p"),Em=o("pre-training: the "),So=a("a"),Fm=o("run_t5_mlm_flax.py"),Mm=o(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Go=a("a"),Cm=o("t5_tokenizer_model.py"),Pm=o(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Nm=d(),ld=a("li"),Ae=a("p"),Om=o("fine-tuning: T5 is supported by the official summarization scripts ("),Uo=a("a"),Lm=o("PyTorch"),Am=o(", "),Wo=a("a"),Im=o("Tensorflow"),Dm=o(", and "),Ro=a("a"),Sm=o("Flax"),Gm=o(`) and translation scripts
(`),Bo=a("a"),Um=o("PyTorch"),Wm=o(" and "),Ho=a("a"),Rm=o("Tensorflow"),Bm=o(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),Ec=d(),Xt=a("h2"),Cn=a("a"),cd=a("span"),f(Vo.$$.fragment),Hm=d(),pd=a("span"),Vm=o("T5Config"),Fc=d(),kt=a("div"),f(Ko.$$.fragment),Km=d(),bt=a("p"),Ym=o("This is the configuration class to store the configuration of a "),fr=a("a"),Zm=o("T5Model"),Jm=o(" or a "),_r=a("a"),Xm=o("TFT5Model"),Qm=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Yo=a("a"),ef=o("t5-small"),tf=o(" architecture."),nf=d(),Qt=a("p"),of=o("Configuration objects inherit from "),gr=a("a"),sf=o("PretrainedConfig"),af=o(` and can be used to control the model outputs. Read the
documentation from `),Tr=a("a"),rf=o("PretrainedConfig"),df=o(" for more information."),Mc=d(),en=a("h2"),Pn=a("a"),hd=a("span"),f(Zo.$$.fragment),lf=d(),ud=a("span"),cf=o("T5Tokenizer"),Cc=d(),ie=a("div"),f(Jo.$$.fragment),pf=d(),Xo=a("p"),hf=o("Construct a T5 tokenizer. Based on "),Qo=a("a"),uf=o("SentencePiece"),mf=o("."),ff=d(),es=a("p"),_f=o("This tokenizer inherits from "),vr=a("a"),gf=o("PreTrainedTokenizer"),Tf=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vf=d(),jt=a("div"),f(ts.$$.fragment),kf=d(),md=a("p"),bf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),yf=d(),ns=a("ul"),kr=a("li"),wf=o("single sequence: "),fd=a("code"),xf=o("X </s>"),$f=d(),br=a("li"),zf=o("pair of sequences: "),_d=a("code"),jf=o("A </s> B </s>"),qf=d(),Nn=a("div"),f(os.$$.fragment),Ef=d(),ss=a("p"),Ff=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gd=a("code"),Mf=o("prepare_for_model"),Cf=o(" method."),Pf=d(),On=a("div"),f(as.$$.fragment),Nf=d(),Td=a("p"),Of=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Lf=d(),yr=a("div"),f(rs.$$.fragment),Pc=d(),tn=a("h2"),Ln=a("a"),vd=a("span"),f(is.$$.fragment),Af=d(),kd=a("span"),If=o("T5TokenizerFast"),Nc=d(),Ie=a("div"),f(ds.$$.fragment),Df=d(),nn=a("p"),Sf=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),bd=a("em"),Gf=o("tokenizers"),Uf=o(` library). Based on
`),ls=a("a"),Wf=o("Unigram"),Rf=o("."),Bf=d(),cs=a("p"),Hf=o("This tokenizer inherits from "),wr=a("a"),Vf=o("PreTrainedTokenizerFast"),Kf=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yf=d(),qt=a("div"),f(ps.$$.fragment),Zf=d(),yd=a("p"),Jf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Xf=d(),hs=a("ul"),xr=a("li"),Qf=o("single sequence: "),wd=a("code"),e_=o("X </s>"),t_=d(),$r=a("li"),n_=o("pair of sequences: "),xd=a("code"),o_=o("A </s> B </s>"),s_=d(),An=a("div"),f(us.$$.fragment),a_=d(),$d=a("p"),r_=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Oc=d(),on=a("h2"),In=a("a"),zd=a("span"),f(ms.$$.fragment),i_=d(),jd=a("span"),d_=o("T5Model"),Lc=d(),J=a("div"),f(fs.$$.fragment),l_=d(),qd=a("p"),c_=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),p_=d(),_s=a("p"),h_=o("The T5 model was proposed in "),gs=a("a"),u_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),m_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),f_=d(),Ts=a("p"),__=o("This model inherits from "),zr=a("a"),g_=o("PreTrainedModel"),T_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_=d(),vs=a("p"),k_=o("This model is also a PyTorch "),ks=a("a"),b_=o("torch.nn.Module"),y_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w_=d(),We=a("div"),f(bs.$$.fragment),x_=d(),sn=a("p"),$_=o("The "),jr=a("a"),z_=o("T5Model"),j_=o(" forward method, overrides the "),Ed=a("code"),q_=o("__call__"),E_=o(" special method."),F_=d(),f(Dn.$$.fragment),M_=d(),Fd=a("p"),C_=o("Example:"),P_=d(),f(ys.$$.fragment),N_=d(),Re=a("div"),f(ws.$$.fragment),O_=d(),Md=a("p"),L_=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),A_=d(),Cd=a("p"),I_=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),D_=d(),Pd=a("p"),S_=o("Example:"),G_=d(),f(xs.$$.fragment),U_=d(),_t=a("div"),f($s.$$.fragment),W_=d(),Nd=a("p"),R_=o("Moves the model to cpu from a model parallel state."),B_=d(),Od=a("p"),H_=o("Example:"),V_=d(),f(zs.$$.fragment),Ac=d(),an=a("h2"),Sn=a("a"),Ld=a("span"),f(js.$$.fragment),K_=d(),Ad=a("span"),Y_=o("T5ForConditionalGeneration"),Ic=d(),X=a("div"),f(qs.$$.fragment),Z_=d(),Es=a("p"),J_=o("T5 Model with a "),Id=a("code"),X_=o("language modeling"),Q_=o(" head on top."),eg=d(),Fs=a("p"),tg=o("The T5 model was proposed in "),Ms=a("a"),ng=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),og=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),sg=d(),Cs=a("p"),ag=o("This model inherits from "),qr=a("a"),rg=o("PreTrainedModel"),ig=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=d(),Ps=a("p"),lg=o("This model is also a PyTorch "),Ns=a("a"),cg=o("torch.nn.Module"),pg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hg=d(),Be=a("div"),f(Os.$$.fragment),ug=d(),rn=a("p"),mg=o("The "),Er=a("a"),fg=o("T5ForConditionalGeneration"),_g=o(" forward method, overrides the "),Dd=a("code"),gg=o("__call__"),Tg=o(" special method."),vg=d(),f(Gn.$$.fragment),kg=d(),Sd=a("p"),bg=o("Examples:"),yg=d(),f(Ls.$$.fragment),wg=d(),He=a("div"),f(As.$$.fragment),xg=d(),Gd=a("p"),$g=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),zg=d(),Ud=a("p"),jg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),qg=d(),Wd=a("p"),Eg=o("Example:"),Fg=d(),f(Is.$$.fragment),Mg=d(),gt=a("div"),f(Ds.$$.fragment),Cg=d(),Rd=a("p"),Pg=o("Moves the model to cpu from a model parallel state."),Ng=d(),Bd=a("p"),Og=o("Example:"),Lg=d(),f(Ss.$$.fragment),Dc=d(),dn=a("h2"),Un=a("a"),Hd=a("span"),f(Gs.$$.fragment),Ag=d(),Vd=a("span"),Ig=o("T5EncoderModel"),Sc=d(),Q=a("div"),f(Us.$$.fragment),Dg=d(),Kd=a("p"),Sg=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Gg=d(),Ws=a("p"),Ug=o("The T5 model was proposed in "),Rs=a("a"),Wg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Rg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Bg=d(),Bs=a("p"),Hg=o("This model inherits from "),Fr=a("a"),Vg=o("PreTrainedModel"),Kg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yg=d(),Hs=a("p"),Zg=o("This model is also a PyTorch "),Vs=a("a"),Jg=o("torch.nn.Module"),Xg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=d(),Ve=a("div"),f(Ks.$$.fragment),eT=d(),ln=a("p"),tT=o("The "),Mr=a("a"),nT=o("T5EncoderModel"),oT=o(" forward method, overrides the "),Yd=a("code"),sT=o("__call__"),aT=o(" special method."),rT=d(),f(Wn.$$.fragment),iT=d(),Zd=a("p"),dT=o("Example:"),lT=d(),f(Ys.$$.fragment),cT=d(),Ke=a("div"),f(Zs.$$.fragment),pT=d(),Jd=a("p"),hT=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),uT=d(),Xd=a("p"),mT=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),fT=d(),Qd=a("p"),_T=o("Example:"),gT=d(),f(Js.$$.fragment),TT=d(),Tt=a("div"),f(Xs.$$.fragment),vT=d(),el=a("p"),kT=o("Moves the model to cpu from a model parallel state."),bT=d(),tl=a("p"),yT=o("Example:"),wT=d(),f(Qs.$$.fragment),Gc=d(),cn=a("h2"),Rn=a("a"),nl=a("span"),f(ea.$$.fragment),xT=d(),ol=a("span"),$T=o("TFT5Model"),Uc=d(),de=a("div"),f(ta.$$.fragment),zT=d(),sl=a("p"),jT=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),qT=d(),na=a("p"),ET=o("The T5 model was proposed in "),oa=a("a"),FT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),MT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),CT=d(),sa=a("p"),PT=o("This model inherits from "),Cr=a("a"),NT=o("TFPreTrainedModel"),OT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LT=d(),aa=a("p"),AT=o("This model is also a "),ra=a("a"),IT=o("tf.keras.Model"),DT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=d(),f(Bn.$$.fragment),GT=d(),Ye=a("div"),f(ia.$$.fragment),UT=d(),pn=a("p"),WT=o("The "),Pr=a("a"),RT=o("TFT5Model"),BT=o(" forward method, overrides the "),al=a("code"),HT=o("__call__"),VT=o(" special method."),KT=d(),f(Hn.$$.fragment),YT=d(),rl=a("p"),ZT=o("Examples:"),JT=d(),f(da.$$.fragment),Wc=d(),hn=a("h2"),Vn=a("a"),il=a("span"),f(la.$$.fragment),XT=d(),dl=a("span"),QT=o("TFT5ForConditionalGeneration"),Rc=d(),le=a("div"),f(ca.$$.fragment),ev=d(),pa=a("p"),tv=o("T5 Model with a "),ll=a("code"),nv=o("language modeling"),ov=o(" head on top."),sv=d(),ha=a("p"),av=o("The T5 model was proposed in "),ua=a("a"),rv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),iv=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),dv=d(),ma=a("p"),lv=o("This model inherits from "),Nr=a("a"),cv=o("TFPreTrainedModel"),pv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hv=d(),fa=a("p"),uv=o("This model is also a "),_a=a("a"),mv=o("tf.keras.Model"),fv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_v=d(),f(Kn.$$.fragment),gv=d(),Ze=a("div"),f(ga.$$.fragment),Tv=d(),un=a("p"),vv=o("The "),Or=a("a"),kv=o("TFT5ForConditionalGeneration"),bv=o(" forward method, overrides the "),cl=a("code"),yv=o("__call__"),wv=o(" special method."),xv=d(),f(Yn.$$.fragment),$v=d(),pl=a("p"),zv=o("Examples:"),jv=d(),f(Ta.$$.fragment),Bc=d(),mn=a("h2"),Zn=a("a"),hl=a("span"),f(va.$$.fragment),qv=d(),ul=a("span"),Ev=o("TFT5EncoderModel"),Hc=d(),ce=a("div"),f(ka.$$.fragment),Fv=d(),ml=a("p"),Mv=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Cv=d(),ba=a("p"),Pv=o("The T5 model was proposed in "),ya=a("a"),Nv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ov=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Lv=d(),wa=a("p"),Av=o("This model inherits from "),Lr=a("a"),Iv=o("TFPreTrainedModel"),Dv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sv=d(),xa=a("p"),Gv=o("This model is also a "),$a=a("a"),Uv=o("tf.keras.Model"),Wv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rv=d(),f(Jn.$$.fragment),Bv=d(),Je=a("div"),f(za.$$.fragment),Hv=d(),fn=a("p"),Vv=o("The "),Ar=a("a"),Kv=o("TFT5EncoderModel"),Yv=o(" forward method, overrides the "),fl=a("code"),Zv=o("__call__"),Jv=o(" special method."),Xv=d(),f(Xn.$$.fragment),Qv=d(),_l=a("p"),ek=o("Examples:"),tk=d(),f(ja.$$.fragment),Vc=d(),_n=a("h2"),Qn=a("a"),gl=a("span"),f(qa.$$.fragment),nk=d(),Tl=a("span"),ok=o("FlaxT5Model"),Kc=d(),rt=a("div"),f(Ea.$$.fragment),sk=d(),Xe=a("div"),f(Fa.$$.fragment),ak=d(),gn=a("p"),rk=o("The "),vl=a("code"),ik=o("FlaxT5PreTrainedModel"),dk=o(" forward method, overrides the "),kl=a("code"),lk=o("__call__"),ck=o(" special method."),pk=d(),f(eo.$$.fragment),hk=d(),bl=a("p"),uk=o("Example:"),mk=d(),f(Ma.$$.fragment),fk=d(),Et=a("div"),f(Ca.$$.fragment),_k=d(),yl=a("p"),gk=o("Example:"),Tk=d(),f(Pa.$$.fragment),vk=d(),Ft=a("div"),f(Na.$$.fragment),kk=d(),wl=a("p"),bk=o("Example:"),yk=d(),f(Oa.$$.fragment),Yc=d(),Tn=a("h2"),to=a("a"),xl=a("span"),f(La.$$.fragment),wk=d(),$l=a("span"),xk=o("FlaxT5ForConditionalGeneration"),Zc=d(),it=a("div"),f(Aa.$$.fragment),$k=d(),Qe=a("div"),f(Ia.$$.fragment),zk=d(),vn=a("p"),jk=o("The "),zl=a("code"),qk=o("FlaxT5PreTrainedModel"),Ek=o(" forward method, overrides the "),jl=a("code"),Fk=o("__call__"),Mk=o(" special method."),Ck=d(),f(no.$$.fragment),Pk=d(),ql=a("p"),Nk=o("Example:"),Ok=d(),f(Da.$$.fragment),Lk=d(),Mt=a("div"),f(Sa.$$.fragment),Ak=d(),El=a("p"),Ik=o("Example:"),Dk=d(),f(Ga.$$.fragment),Sk=d(),Ct=a("div"),f(Ua.$$.fragment),Gk=d(),Fl=a("p"),Uk=o("Example:"),Wk=d(),f(Wa.$$.fragment),this.h()},l(t){const h=m1('[data-svelte="svelte-1phssyn"]',document.head);u=r(h,"META",{name:!0,content:!0}),h.forEach(n),z=l(t),b=r(t,"H1",{class:!0});var Ra=i(b);w=r(Ra,"A",{id:!0,class:!0,href:!0});var Ml=i(w);$=r(Ml,"SPAN",{});var Cl=i($);_(x.$$.fragment,Cl),Cl.forEach(n),Ml.forEach(n),y=l(Ra),j=r(Ra,"SPAN",{});var Pl=i(j);ze=s(Pl,"T5"),Pl.forEach(n),Ra.forEach(n),se=l(t),q=r(t,"H2",{class:!0});var Ba=i(q);ee=r(Ba,"A",{id:!0,class:!0,href:!0});var Nl=i(ee);G=r(Nl,"SPAN",{});var Ol=i(G);_(ae.$$.fragment,Ol),Ol.forEach(n),Nl.forEach(n),je=l(Ba),U=r(Ba,"SPAN",{});var Ll=i(U);qe=s(Ll,"Overview"),Ll.forEach(n),Ba.forEach(n),ve=l(t),W=r(t,"P",{});var Ha=i(W);A=s(Ha,"The T5 model was presented in "),re=r(Ha,"A",{href:!0,rel:!0});var Al=i(re);pe=s(Al,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Al.forEach(n),F=s(Ha,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ha.forEach(n),P=l(t),he=r(t,"P",{});var Il=i(he);K=s(Il,"The abstract from the paper is the following:"),Il.forEach(n),ke=l(t),ue=r(t,"P",{});var Yk=i(ue);R=r(Yk,"EM",{});var Zk=i(R);Ee=s(Zk,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Zk.forEach(n),Yk.forEach(n),be=l(t),C=r(t,"P",{});var Jk=i(C);Fe=s(Jk,"Tips:"),Jk.forEach(n),H=l(t),V=r(t,"UL",{});var Ir=i(V);_e=r(Ir,"LI",{});var Xk=i(_e);N=r(Xk,"P",{});var Dr=i(N);Me=s(Dr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=r(Dr,"EM",{});var Qk=i(ge);I=s(Qk,"translate English to German: \u2026"),Qk.forEach(n),Ce=s(Dr,`,
for summarization: `),B=r(Dr,"EM",{});var eb=i(B);Pe=s(eb,"summarize: \u2026"),eb.forEach(n),m=s(Dr,"."),Dr.forEach(n),Xk.forEach(n),E=l(Ir),te=r(Ir,"LI",{});var tb=i(te);De=r(tb,"P",{});var nb=i(De);dt=s(nb,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),nb.forEach(n),tb.forEach(n),D=l(Ir),Se=r(Ir,"LI",{});var ob=i(Se);ne=r(ob,"P",{});var oo=i(ne);lt=s(oo,"See the "),O=r(oo,"A",{href:!0});var sb=i(O);Y=s(sb,"training"),sb.forEach(n),ct=s(oo,", "),Ne=r(oo,"A",{href:!0});var ab=i(Ne);Z=s(ab,"inference"),ab.forEach(n),pt=s(oo," and "),Oe=r(oo,"A",{href:!0});var rb=i(Oe);Le=s(rb,"scripts"),rb.forEach(n),ht=s(oo," sections below for all details regarding usage."),oo.forEach(n),ob.forEach(n),Ir.forEach(n),Ul=l(t),Va=r(t,"P",{});var ib=i(Va);Kp=s(ib,"T5 comes in different sizes:"),ib.forEach(n),Wl=l(t),Ge=r(t,"UL",{});var Pt=i(Ge);di=r(Pt,"LI",{});var db=i(di);li=r(db,"P",{});var lb=i(li);mo=r(lb,"A",{href:!0,rel:!0});var cb=i(mo);Yp=s(cb,"t5-small"),cb.forEach(n),lb.forEach(n),db.forEach(n),Zp=l(Pt),ci=r(Pt,"LI",{});var pb=i(ci);pi=r(pb,"P",{});var hb=i(pi);fo=r(hb,"A",{href:!0,rel:!0});var ub=i(fo);Jp=s(ub,"t5-base"),ub.forEach(n),hb.forEach(n),pb.forEach(n),Xp=l(Pt),hi=r(Pt,"LI",{});var mb=i(hi);ui=r(mb,"P",{});var fb=i(ui);_o=r(fb,"A",{href:!0,rel:!0});var _b=i(_o);Qp=s(_b,"t5-large"),_b.forEach(n),fb.forEach(n),mb.forEach(n),eh=l(Pt),mi=r(Pt,"LI",{});var gb=i(mi);fi=r(gb,"P",{});var Tb=i(fi);go=r(Tb,"A",{href:!0,rel:!0});var vb=i(go);th=s(vb,"t5-3b"),vb.forEach(n),Tb.forEach(n),gb.forEach(n),nh=l(Pt),_i=r(Pt,"LI",{});var kb=i(_i);Ka=r(kb,"P",{});var Rk=i(Ka);To=r(Rk,"A",{href:!0,rel:!0});var bb=i(To);oh=s(bb,"t5-11b"),bb.forEach(n),sh=s(Rk,"."),Rk.forEach(n),kb.forEach(n),Pt.forEach(n),Rl=l(t),Ya=r(t,"P",{});var yb=i(Ya);ah=s(yb,"Based on the original T5 model, Google has released some follow-up works:"),yb.forEach(n),Bl=l(t),wt=r(t,"UL",{});var Sr=i(wt);gi=r(Sr,"LI",{});var wb=i(gi);kn=r(wb,"P",{});var Dl=i(kn);Ti=r(Dl,"STRONG",{});var xb=i(Ti);rh=s(xb,"T5v1.1"),xb.forEach(n),ih=s(Dl,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Za=r(Dl,"A",{href:!0});var $b=i(Za);dh=s($b,"here"),$b.forEach(n),lh=s(Dl,"."),Dl.forEach(n),wb.forEach(n),ch=l(Sr),vi=r(Sr,"LI",{});var zb=i(vi);bn=r(zb,"P",{});var Sl=i(bn);ki=r(Sl,"STRONG",{});var jb=i(ki);ph=s(jb,"mT5"),jb.forEach(n),hh=s(Sl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ja=r(Sl,"A",{href:!0});var qb=i(Ja);uh=s(qb,"here"),qb.forEach(n),mh=s(Sl,"."),Sl.forEach(n),zb.forEach(n),fh=l(Sr),bi=r(Sr,"LI",{});var Eb=i(bi);yn=r(Eb,"P",{});var Gl=i(yn);yi=r(Gl,"STRONG",{});var Fb=i(yi);_h=s(Fb,"byT5"),Fb.forEach(n),gh=s(Gl,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Xa=r(Gl,"A",{href:!0});var Mb=i(Xa);Th=s(Mb,"here"),Mb.forEach(n),vh=s(Gl,"."),Gl.forEach(n),Eb.forEach(n),Sr.forEach(n),Hl=l(t),wn=r(t,"P",{});var Xc=i(wn);kh=s(Xc,"All checkpoints can be found on the "),vo=r(Xc,"A",{href:!0,rel:!0});var Cb=i(vo);bh=s(Cb,"hub"),Cb.forEach(n),yh=s(Xc,"."),Xc.forEach(n),Vl=l(t),xt=r(t,"P",{});var Gr=i(xt);wh=s(Gr,"This model was contributed by "),ko=r(Gr,"A",{href:!0,rel:!0});var Pb=i(ko);xh=s(Pb,"thomwolf"),Pb.forEach(n),$h=s(Gr,". The original code can be found "),bo=r(Gr,"A",{href:!0,rel:!0});var Nb=i(bo);zh=s(Nb,"here"),Nb.forEach(n),jh=s(Gr,"."),Gr.forEach(n),Kl=l(t),Qa=r(t,"A",{id:!0}),i(Qa).forEach(n),Yl=l(t),Vt=r(t,"H2",{class:!0});var Qc=i(Vt);xn=r(Qc,"A",{id:!0,class:!0,href:!0});var Ob=i(xn);wi=r(Ob,"SPAN",{});var Lb=i(wi);_(yo.$$.fragment,Lb),Lb.forEach(n),Ob.forEach(n),qh=l(Qc),xi=r(Qc,"SPAN",{});var Ab=i(xi);Eh=s(Ab,"Training"),Ab.forEach(n),Qc.forEach(n),Zl=l(t),ut=r(t,"P",{});var so=i(ut);Fh=s(so,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),$i=r(so,"CODE",{});var Ib=i($i);Mh=s(Ib,"input_ids"),Ib.forEach(n),Ch=s(so,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),zi=r(so,"CODE",{});var Db=i(zi);Ph=s(Db,"decoder_input_ids"),Db.forEach(n),Nh=s(so,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),ji=r(so,"CODE",{});var Sb=i(ji);Oh=s(Sb,"labels"),Sb.forEach(n),Lh=s(so,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),so.forEach(n),Jl=l(t),$n=r(t,"P",{});var ep=i($n);Ah=s(ep,"One can use "),er=r(ep,"A",{href:!0});var Gb=i(er);Ih=s(Gb,"T5ForConditionalGeneration"),Gb.forEach(n),Dh=s(ep,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),ep.forEach(n),Xl=l(t),tr=r(t,"UL",{});var Ub=i(tr);qi=r(Ub,"LI",{});var Wb=i(qi);Sh=s(Wb,"Unsupervised denoising training"),Wb.forEach(n),Ub.forEach(n),Ql=l(t),me=r(t,"P",{});var et=i(me);Gh=s(et,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Ei=r(et,"EM",{});var Rb=i(Ei);Uh=s(Rb,"a.k.a"),Rb.forEach(n),Wh=s(et,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=r(et,"EM",{});var Bb=i(Fi);Rh=s(Bb,"real"),Bb.forEach(n),Bh=s(et,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=r(et,"CODE",{});var Hb=i(Mi);Hh=s(Hb,"<extra_id_0>"),Hb.forEach(n),Vh=s(et,`,
`),Ci=r(et,"CODE",{});var Vb=i(Ci);Kh=s(Vb,"<extra_id_1>"),Vb.forEach(n),Yh=s(et,", \u2026 up to "),Pi=r(et,"CODE",{});var Kb=i(Pi);Zh=s(Kb,"<extra_id_99>"),Kb.forEach(n),Jh=s(et,`. As a default, 100 sentinel tokens are available in
`),nr=r(et,"A",{href:!0});var Yb=i(nr);Xh=s(Yb,"T5Tokenizer"),Yb.forEach(n),Qh=s(et,"."),et.forEach(n),ec=l(t),or=r(t,"P",{});var Zb=i(or);eu=s(Zb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Zb.forEach(n),tc=l(t),_(wo.$$.fragment,t),nc=l(t),zn=r(t,"P",{});var tp=i(zn);tu=s(tp,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),xo=r(tp,"A",{href:!0,rel:!0});var Jb=i(xo);nu=s(Jb,"run_t5_mlm_flax.py"),Jb.forEach(n),ou=s(tp,` script in the Examples
directory.`),tp.forEach(n),oc=l(t),sr=r(t,"UL",{});var Xb=i(sr);Ni=r(Xb,"LI",{});var Qb=i(Ni);su=s(Qb,"Supervised training"),Qb.forEach(n),Xb.forEach(n),sc=l(t),ar=r(t,"P",{});var ey=i(ar);au=s(ey,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ey.forEach(n),ac=l(t),_($o.$$.fragment,t),rc=l(t),oe=r(t,"P",{});var ye=i(oe);ru=s(ye,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Oi=r(ye,"CODE",{});var ty=i(Oi);iu=s(ty,"input_ids"),ty.forEach(n),du=s(ye,` (which are the
`),Li=r(ye,"CODE",{});var ny=i(Li);lu=s(ny,"input_ids"),ny.forEach(n),cu=s(ye," of the encoded input sequence) and "),Ai=r(ye,"CODE",{});var oy=i(Ai);pu=s(oy,"labels"),oy.forEach(n),hu=s(ye," (which are the "),Ii=r(ye,"CODE",{});var sy=i(Ii);uu=s(sy,"input_ids"),sy.forEach(n),mu=s(ye,` of the encoded
target sequence). The model will automatically create the `),Di=r(ye,"CODE",{});var ay=i(Di);fu=s(ay,"decoder_input_ids"),ay.forEach(n),_u=s(ye," based on the "),Si=r(ye,"CODE",{});var ry=i(Si);gu=s(ry,"labels"),ry.forEach(n),Tu=s(ye,`, by
shifting them one position to the right and prepending the `),Gi=r(ye,"CODE",{});var iy=i(Gi);vu=s(iy,"config.decoder_start_token_id"),iy.forEach(n),ku=s(ye,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),ye.forEach(n),ic=l(t),$t=r(t,"P",{});var Ur=i($t);bu=s(Ur,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=r(Ur,"CODE",{});var dy=i(Ui);yu=s(dy,"max_source_length"),dy.forEach(n),wu=s(Ur," and "),Wi=r(Ur,"CODE",{});var ly=i(Wi);xu=s(ly,"max_target_length"),ly.forEach(n),$u=s(Ur,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Ur.forEach(n),dc=l(t),fe=r(t,"P",{});var tt=i(fe);zu=s(tt,"In addition, we must make sure that padding token id\u2019s of the "),Ri=r(tt,"CODE",{});var cy=i(Ri);ju=s(cy,"labels"),cy.forEach(n),qu=s(tt,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Bi=r(tt,"CODE",{});var py=i(Bi);Eu=s(py,"ignore_index"),py.forEach(n),Fu=s(tt,`
of the `),Hi=r(tt,"CODE",{});var hy=i(Hi);Mu=s(hy,"CrossEntropyLoss"),hy.forEach(n),Cu=s(tt,". In Flax, one can use the "),Vi=r(tt,"CODE",{});var uy=i(Vi);Pu=s(uy,"decoder_attention_mask"),uy.forEach(n),Nu=s(tt,` to ignore padded tokens from
the loss (see the `),zo=r(tt,"A",{href:!0,rel:!0});var my=i(zo);Ou=s(my,"Flax summarization script"),my.forEach(n),Lu=s(tt,` for details). We also pass
`),Ki=r(tt,"CODE",{});var fy=i(Ki);Au=s(fy,"attention_mask"),fy.forEach(n),Iu=s(tt,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),tt.forEach(n),lc=l(t),_(jo.$$.fragment,t),cc=l(t),rr=r(t,"P",{});var _y=i(rr);Du=s(_y,"Additional training tips:"),_y.forEach(n),pc=l(t),ir=r(t,"UL",{});var gy=i(ir);qo=r(gy,"LI",{});var np=i(qo);Su=s(np,"T5 models need a slightly higher learning rate than the default one set in the "),Yi=r(np,"CODE",{});var Ty=i(Yi);Gu=s(Ty,"Trainer"),Ty.forEach(n),Uu=s(np,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),np.forEach(n),gy.forEach(n),hc=l(t),zt=r(t,"P",{});var Wr=i(zt);Wu=s(Wr,"According to "),Eo=r(Wr,"A",{href:!0,rel:!0});var vy=i(Eo);Ru=s(vy,"this forum post"),vy.forEach(n),Bu=s(Wr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Fo=r(Wr,"A",{href:!0,rel:!0});var ky=i(Fo);Hu=s(ky,"paper"),ky.forEach(n),Vu=s(Wr,` for the task prefixes
used).`),Wr.forEach(n),uc=l(t),jn=r(t,"P",{});var op=i(jn);Ku=s(op,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Zi=r(op,"EM",{});var by=i(Zi);Yu=s(by,"pad_to_multiple_of"),by.forEach(n),Zu=s(op,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),op.forEach(n),mc=l(t),dr=r(t,"A",{id:!0}),i(dr).forEach(n),fc=l(t),Kt=r(t,"H2",{class:!0});var sp=i(Kt);qn=r(sp,"A",{id:!0,class:!0,href:!0});var yy=i(qn);Ji=r(yy,"SPAN",{});var wy=i(Ji);_(Mo.$$.fragment,wy),wy.forEach(n),yy.forEach(n),Ju=l(sp),Xi=r(sp,"SPAN",{});var xy=i(Xi);Xu=s(xy,"Inference"),xy.forEach(n),sp.forEach(n),_c=l(t),mt=r(t,"P",{});var ao=i(mt);Qu=s(ao,"At inference time, it is recommended to use "),lr=r(ao,"A",{href:!0});var $y=i(lr);em=s($y,"generate()"),$y.forEach(n),tm=s(ao,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Co=r(ao,"A",{href:!0,rel:!0});var zy=i(Co);nm=s(zy,"this blog post"),zy.forEach(n),om=s(ao,` to know all the details about generating text with Transformers.
There\u2019s also `),Po=r(ao,"A",{href:!0,rel:!0});var jy=i(Po);sm=s(jy,"this blog post"),jy.forEach(n),am=s(ao,` which explains how
generation works in general in encoder-decoder models.`),ao.forEach(n),gc=l(t),_(No.$$.fragment,t),Tc=l(t),Ue=r(t,"P",{});var Nt=i(Ue);rm=s(Nt,"Note that T5 uses the "),Qi=r(Nt,"CODE",{});var qy=i(Qi);im=s(qy,"pad_token_id"),qy.forEach(n),dm=s(Nt," as the "),ed=r(Nt,"CODE",{});var Ey=i(ed);lm=s(Ey,"decoder_start_token_id"),Ey.forEach(n),cm=s(Nt,`, so when doing generation without using
`),cr=r(Nt,"A",{href:!0});var Fy=i(cr);pm=s(Fy,"generate()"),Fy.forEach(n),hm=s(Nt,", make sure you start it with the "),td=r(Nt,"CODE",{});var My=i(td);um=s(My,"pad_token_id"),My.forEach(n),mm=s(Nt,"."),Nt.forEach(n),vc=l(t),pr=r(t,"P",{});var Cy=i(pr);fm=s(Cy,"The example above only shows a single example. You can also do batched inference, like so:"),Cy.forEach(n),kc=l(t),_(Oo.$$.fragment,t),bc=l(t),hr=r(t,"P",{});var Py=i(hr);_m=s(Py,`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Py.forEach(n),yc=l(t),_(Lo.$$.fragment,t),wc=l(t),ur=r(t,"A",{id:!0}),i(ur).forEach(n),xc=l(t),Yt=r(t,"H2",{class:!0});var ap=i(Yt);En=r(ap,"A",{id:!0,class:!0,href:!0});var Ny=i(En);nd=r(Ny,"SPAN",{});var Oy=i(nd);_(Ao.$$.fragment,Oy),Oy.forEach(n),Ny.forEach(n),gm=l(ap),od=r(ap,"SPAN",{});var Ly=i(od);Tm=s(Ly,"Performance"),Ly.forEach(n),ap.forEach(n),$c=l(t),ft=r(t,"P",{});var ro=i(ft);vm=s(ro,"If you\u2019d like a faster training and inference performance, install "),Io=r(ro,"A",{href:!0,rel:!0});var Ay=i(Io);km=s(Ay,"apex"),Ay.forEach(n),bm=s(ro," and then the model will automatically use "),sd=r(ro,"CODE",{});var Iy=i(sd);ym=s(Iy,"apex.normalization.FusedRMSNorm"),Iy.forEach(n),wm=s(ro," instead of "),ad=r(ro,"CODE",{});var Dy=i(ad);xm=s(Dy,"T5LayerNorm"),Dy.forEach(n),$m=s(ro,". The former uses an optimized fused kernel which is several times faster than the latter."),ro.forEach(n),zc=l(t),Zt=r(t,"H2",{class:!0});var rp=i(Zt);Fn=r(rp,"A",{id:!0,class:!0,href:!0});var Sy=i(Fn);rd=r(Sy,"SPAN",{});var Gy=i(rd);_(Do.$$.fragment,Gy),Gy.forEach(n),Sy.forEach(n),zm=l(rp),id=r(rp,"SPAN",{});var Uy=i(id);jm=s(Uy,"Example scripts"),Uy.forEach(n),rp.forEach(n),jc=l(t),mr=r(t,"P",{});var Wy=i(mr);qm=s(Wy,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),Wy.forEach(n),qc=l(t),Mn=r(t,"UL",{});var ip=i(Mn);dd=r(ip,"LI",{});var Ry=i(dd);Jt=r(Ry,"P",{});var Rr=i(Jt);Em=s(Rr,"pre-training: the "),So=r(Rr,"A",{href:!0,rel:!0});var By=i(So);Fm=s(By,"run_t5_mlm_flax.py"),By.forEach(n),Mm=s(Rr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Go=r(Rr,"A",{href:!0,rel:!0});var Hy=i(Go);Cm=s(Hy,"t5_tokenizer_model.py"),Hy.forEach(n),Pm=s(Rr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Rr.forEach(n),Ry.forEach(n),Nm=l(ip),ld=r(ip,"LI",{});var Vy=i(ld);Ae=r(Vy,"P",{});var vt=i(Ae);Om=s(vt,"fine-tuning: T5 is supported by the official summarization scripts ("),Uo=r(vt,"A",{href:!0,rel:!0});var Ky=i(Uo);Lm=s(Ky,"PyTorch"),Ky.forEach(n),Am=s(vt,", "),Wo=r(vt,"A",{href:!0,rel:!0});var Yy=i(Wo);Im=s(Yy,"Tensorflow"),Yy.forEach(n),Dm=s(vt,", and "),Ro=r(vt,"A",{href:!0,rel:!0});var Zy=i(Ro);Sm=s(Zy,"Flax"),Zy.forEach(n),Gm=s(vt,`) and translation scripts
(`),Bo=r(vt,"A",{href:!0,rel:!0});var Jy=i(Bo);Um=s(Jy,"PyTorch"),Jy.forEach(n),Wm=s(vt," and "),Ho=r(vt,"A",{href:!0,rel:!0});var Xy=i(Ho);Rm=s(Xy,"Tensorflow"),Xy.forEach(n),Bm=s(vt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),vt.forEach(n),Vy.forEach(n),ip.forEach(n),Ec=l(t),Xt=r(t,"H2",{class:!0});var dp=i(Xt);Cn=r(dp,"A",{id:!0,class:!0,href:!0});var Qy=i(Cn);cd=r(Qy,"SPAN",{});var e5=i(cd);_(Vo.$$.fragment,e5),e5.forEach(n),Qy.forEach(n),Hm=l(dp),pd=r(dp,"SPAN",{});var t5=i(pd);Vm=s(t5,"T5Config"),t5.forEach(n),dp.forEach(n),Fc=l(t),kt=r(t,"DIV",{class:!0});var Br=i(kt);_(Ko.$$.fragment,Br),Km=l(Br),bt=r(Br,"P",{});var io=i(bt);Ym=s(io,"This is the configuration class to store the configuration of a "),fr=r(io,"A",{href:!0});var n5=i(fr);Zm=s(n5,"T5Model"),n5.forEach(n),Jm=s(io," or a "),_r=r(io,"A",{href:!0});var o5=i(_r);Xm=s(o5,"TFT5Model"),o5.forEach(n),Qm=s(io,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Yo=r(io,"A",{href:!0,rel:!0});var s5=i(Yo);ef=s(s5,"t5-small"),s5.forEach(n),tf=s(io," architecture."),io.forEach(n),nf=l(Br),Qt=r(Br,"P",{});var Hr=i(Qt);of=s(Hr,"Configuration objects inherit from "),gr=r(Hr,"A",{href:!0});var a5=i(gr);sf=s(a5,"PretrainedConfig"),a5.forEach(n),af=s(Hr,` and can be used to control the model outputs. Read the
documentation from `),Tr=r(Hr,"A",{href:!0});var r5=i(Tr);rf=s(r5,"PretrainedConfig"),r5.forEach(n),df=s(Hr," for more information."),Hr.forEach(n),Br.forEach(n),Mc=l(t),en=r(t,"H2",{class:!0});var lp=i(en);Pn=r(lp,"A",{id:!0,class:!0,href:!0});var i5=i(Pn);hd=r(i5,"SPAN",{});var d5=i(hd);_(Zo.$$.fragment,d5),d5.forEach(n),i5.forEach(n),lf=l(lp),ud=r(lp,"SPAN",{});var l5=i(ud);cf=s(l5,"T5Tokenizer"),l5.forEach(n),lp.forEach(n),Cc=l(t),ie=r(t,"DIV",{class:!0});var nt=i(ie);_(Jo.$$.fragment,nt),pf=l(nt),Xo=r(nt,"P",{});var cp=i(Xo);hf=s(cp,"Construct a T5 tokenizer. Based on "),Qo=r(cp,"A",{href:!0,rel:!0});var c5=i(Qo);uf=s(c5,"SentencePiece"),c5.forEach(n),mf=s(cp,"."),cp.forEach(n),ff=l(nt),es=r(nt,"P",{});var pp=i(es);_f=s(pp,"This tokenizer inherits from "),vr=r(pp,"A",{href:!0});var p5=i(vr);gf=s(p5,"PreTrainedTokenizer"),p5.forEach(n),Tf=s(pp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),pp.forEach(n),vf=l(nt),jt=r(nt,"DIV",{class:!0});var Vr=i(jt);_(ts.$$.fragment,Vr),kf=l(Vr),md=r(Vr,"P",{});var h5=i(md);bf=s(h5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),h5.forEach(n),yf=l(Vr),ns=r(Vr,"UL",{});var hp=i(ns);kr=r(hp,"LI",{});var Bk=i(kr);wf=s(Bk,"single sequence: "),fd=r(Bk,"CODE",{});var u5=i(fd);xf=s(u5,"X </s>"),u5.forEach(n),Bk.forEach(n),$f=l(hp),br=r(hp,"LI",{});var Hk=i(br);zf=s(Hk,"pair of sequences: "),_d=r(Hk,"CODE",{});var m5=i(_d);jf=s(m5,"A </s> B </s>"),m5.forEach(n),Hk.forEach(n),hp.forEach(n),Vr.forEach(n),qf=l(nt),Nn=r(nt,"DIV",{class:!0});var up=i(Nn);_(os.$$.fragment,up),Ef=l(up),ss=r(up,"P",{});var mp=i(ss);Ff=s(mp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gd=r(mp,"CODE",{});var f5=i(gd);Mf=s(f5,"prepare_for_model"),f5.forEach(n),Cf=s(mp," method."),mp.forEach(n),up.forEach(n),Pf=l(nt),On=r(nt,"DIV",{class:!0});var fp=i(On);_(as.$$.fragment,fp),Nf=l(fp),Td=r(fp,"P",{});var _5=i(Td);Of=s(_5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),_5.forEach(n),fp.forEach(n),Lf=l(nt),yr=r(nt,"DIV",{class:!0});var g5=i(yr);_(rs.$$.fragment,g5),g5.forEach(n),nt.forEach(n),Pc=l(t),tn=r(t,"H2",{class:!0});var _p=i(tn);Ln=r(_p,"A",{id:!0,class:!0,href:!0});var T5=i(Ln);vd=r(T5,"SPAN",{});var v5=i(vd);_(is.$$.fragment,v5),v5.forEach(n),T5.forEach(n),Af=l(_p),kd=r(_p,"SPAN",{});var k5=i(kd);If=s(k5,"T5TokenizerFast"),k5.forEach(n),_p.forEach(n),Nc=l(t),Ie=r(t,"DIV",{class:!0});var Ot=i(Ie);_(ds.$$.fragment,Ot),Df=l(Ot),nn=r(Ot,"P",{});var Kr=i(nn);Sf=s(Kr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),bd=r(Kr,"EM",{});var b5=i(bd);Gf=s(b5,"tokenizers"),b5.forEach(n),Uf=s(Kr,` library). Based on
`),ls=r(Kr,"A",{href:!0,rel:!0});var y5=i(ls);Wf=s(y5,"Unigram"),y5.forEach(n),Rf=s(Kr,"."),Kr.forEach(n),Bf=l(Ot),cs=r(Ot,"P",{});var gp=i(cs);Hf=s(gp,"This tokenizer inherits from "),wr=r(gp,"A",{href:!0});var w5=i(wr);Vf=s(w5,"PreTrainedTokenizerFast"),w5.forEach(n),Kf=s(gp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),gp.forEach(n),Yf=l(Ot),qt=r(Ot,"DIV",{class:!0});var Yr=i(qt);_(ps.$$.fragment,Yr),Zf=l(Yr),yd=r(Yr,"P",{});var x5=i(yd);Jf=s(x5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),x5.forEach(n),Xf=l(Yr),hs=r(Yr,"UL",{});var Tp=i(hs);xr=r(Tp,"LI",{});var Vk=i(xr);Qf=s(Vk,"single sequence: "),wd=r(Vk,"CODE",{});var $5=i(wd);e_=s($5,"X </s>"),$5.forEach(n),Vk.forEach(n),t_=l(Tp),$r=r(Tp,"LI",{});var Kk=i($r);n_=s(Kk,"pair of sequences: "),xd=r(Kk,"CODE",{});var z5=i(xd);o_=s(z5,"A </s> B </s>"),z5.forEach(n),Kk.forEach(n),Tp.forEach(n),Yr.forEach(n),s_=l(Ot),An=r(Ot,"DIV",{class:!0});var vp=i(An);_(us.$$.fragment,vp),a_=l(vp),$d=r(vp,"P",{});var j5=i($d);r_=s(j5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),j5.forEach(n),vp.forEach(n),Ot.forEach(n),Oc=l(t),on=r(t,"H2",{class:!0});var kp=i(on);In=r(kp,"A",{id:!0,class:!0,href:!0});var q5=i(In);zd=r(q5,"SPAN",{});var E5=i(zd);_(ms.$$.fragment,E5),E5.forEach(n),q5.forEach(n),i_=l(kp),jd=r(kp,"SPAN",{});var F5=i(jd);d_=s(F5,"T5Model"),F5.forEach(n),kp.forEach(n),Lc=l(t),J=r(t,"DIV",{class:!0});var we=i(J);_(fs.$$.fragment,we),l_=l(we),qd=r(we,"P",{});var M5=i(qd);c_=s(M5,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),M5.forEach(n),p_=l(we),_s=r(we,"P",{});var bp=i(_s);h_=s(bp,"The T5 model was proposed in "),gs=r(bp,"A",{href:!0,rel:!0});var C5=i(gs);u_=s(C5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),C5.forEach(n),m_=s(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(n),f_=l(we),Ts=r(we,"P",{});var yp=i(Ts);__=s(yp,"This model inherits from "),zr=r(yp,"A",{href:!0});var P5=i(zr);g_=s(P5,"PreTrainedModel"),P5.forEach(n),T_=s(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(n),v_=l(we),vs=r(we,"P",{});var wp=i(vs);k_=s(wp,"This model is also a PyTorch "),ks=r(wp,"A",{href:!0,rel:!0});var N5=i(ks);b_=s(N5,"torch.nn.Module"),N5.forEach(n),y_=s(wp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp.forEach(n),w_=l(we),We=r(we,"DIV",{class:!0});var Lt=i(We);_(bs.$$.fragment,Lt),x_=l(Lt),sn=r(Lt,"P",{});var Zr=i(sn);$_=s(Zr,"The "),jr=r(Zr,"A",{href:!0});var O5=i(jr);z_=s(O5,"T5Model"),O5.forEach(n),j_=s(Zr," forward method, overrides the "),Ed=r(Zr,"CODE",{});var L5=i(Ed);q_=s(L5,"__call__"),L5.forEach(n),E_=s(Zr," special method."),Zr.forEach(n),F_=l(Lt),_(Dn.$$.fragment,Lt),M_=l(Lt),Fd=r(Lt,"P",{});var A5=i(Fd);C_=s(A5,"Example:"),A5.forEach(n),P_=l(Lt),_(ys.$$.fragment,Lt),Lt.forEach(n),N_=l(we),Re=r(we,"DIV",{class:!0});var At=i(Re);_(ws.$$.fragment,At),O_=l(At),Md=r(At,"P",{});var I5=i(Md);L_=s(I5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),I5.forEach(n),A_=l(At),Cd=r(At,"P",{});var D5=i(Cd);I_=s(D5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),D5.forEach(n),D_=l(At),Pd=r(At,"P",{});var S5=i(Pd);S_=s(S5,"Example:"),S5.forEach(n),G_=l(At),_(xs.$$.fragment,At),At.forEach(n),U_=l(we),_t=r(we,"DIV",{class:!0});var lo=i(_t);_($s.$$.fragment,lo),W_=l(lo),Nd=r(lo,"P",{});var G5=i(Nd);R_=s(G5,"Moves the model to cpu from a model parallel state."),G5.forEach(n),B_=l(lo),Od=r(lo,"P",{});var U5=i(Od);H_=s(U5,"Example:"),U5.forEach(n),V_=l(lo),_(zs.$$.fragment,lo),lo.forEach(n),we.forEach(n),Ac=l(t),an=r(t,"H2",{class:!0});var xp=i(an);Sn=r(xp,"A",{id:!0,class:!0,href:!0});var W5=i(Sn);Ld=r(W5,"SPAN",{});var R5=i(Ld);_(js.$$.fragment,R5),R5.forEach(n),W5.forEach(n),K_=l(xp),Ad=r(xp,"SPAN",{});var B5=i(Ad);Y_=s(B5,"T5ForConditionalGeneration"),B5.forEach(n),xp.forEach(n),Ic=l(t),X=r(t,"DIV",{class:!0});var xe=i(X);_(qs.$$.fragment,xe),Z_=l(xe),Es=r(xe,"P",{});var $p=i(Es);J_=s($p,"T5 Model with a "),Id=r($p,"CODE",{});var H5=i(Id);X_=s(H5,"language modeling"),H5.forEach(n),Q_=s($p," head on top."),$p.forEach(n),eg=l(xe),Fs=r(xe,"P",{});var zp=i(Fs);tg=s(zp,"The T5 model was proposed in "),Ms=r(zp,"A",{href:!0,rel:!0});var V5=i(Ms);ng=s(V5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),V5.forEach(n),og=s(zp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),zp.forEach(n),sg=l(xe),Cs=r(xe,"P",{});var jp=i(Cs);ag=s(jp,"This model inherits from "),qr=r(jp,"A",{href:!0});var K5=i(qr);rg=s(K5,"PreTrainedModel"),K5.forEach(n),ig=s(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jp.forEach(n),dg=l(xe),Ps=r(xe,"P",{});var qp=i(Ps);lg=s(qp,"This model is also a PyTorch "),Ns=r(qp,"A",{href:!0,rel:!0});var Y5=i(Ns);cg=s(Y5,"torch.nn.Module"),Y5.forEach(n),pg=s(qp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qp.forEach(n),hg=l(xe),Be=r(xe,"DIV",{class:!0});var It=i(Be);_(Os.$$.fragment,It),ug=l(It),rn=r(It,"P",{});var Jr=i(rn);mg=s(Jr,"The "),Er=r(Jr,"A",{href:!0});var Z5=i(Er);fg=s(Z5,"T5ForConditionalGeneration"),Z5.forEach(n),_g=s(Jr," forward method, overrides the "),Dd=r(Jr,"CODE",{});var J5=i(Dd);gg=s(J5,"__call__"),J5.forEach(n),Tg=s(Jr," special method."),Jr.forEach(n),vg=l(It),_(Gn.$$.fragment,It),kg=l(It),Sd=r(It,"P",{});var X5=i(Sd);bg=s(X5,"Examples:"),X5.forEach(n),yg=l(It),_(Ls.$$.fragment,It),It.forEach(n),wg=l(xe),He=r(xe,"DIV",{class:!0});var Dt=i(He);_(As.$$.fragment,Dt),xg=l(Dt),Gd=r(Dt,"P",{});var Q5=i(Gd);$g=s(Q5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Q5.forEach(n),zg=l(Dt),Ud=r(Dt,"P",{});var ew=i(Ud);jg=s(ew,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ew.forEach(n),qg=l(Dt),Wd=r(Dt,"P",{});var tw=i(Wd);Eg=s(tw,"Example:"),tw.forEach(n),Fg=l(Dt),_(Is.$$.fragment,Dt),Dt.forEach(n),Mg=l(xe),gt=r(xe,"DIV",{class:!0});var co=i(gt);_(Ds.$$.fragment,co),Cg=l(co),Rd=r(co,"P",{});var nw=i(Rd);Pg=s(nw,"Moves the model to cpu from a model parallel state."),nw.forEach(n),Ng=l(co),Bd=r(co,"P",{});var ow=i(Bd);Og=s(ow,"Example:"),ow.forEach(n),Lg=l(co),_(Ss.$$.fragment,co),co.forEach(n),xe.forEach(n),Dc=l(t),dn=r(t,"H2",{class:!0});var Ep=i(dn);Un=r(Ep,"A",{id:!0,class:!0,href:!0});var sw=i(Un);Hd=r(sw,"SPAN",{});var aw=i(Hd);_(Gs.$$.fragment,aw),aw.forEach(n),sw.forEach(n),Ag=l(Ep),Vd=r(Ep,"SPAN",{});var rw=i(Vd);Ig=s(rw,"T5EncoderModel"),rw.forEach(n),Ep.forEach(n),Sc=l(t),Q=r(t,"DIV",{class:!0});var $e=i(Q);_(Us.$$.fragment,$e),Dg=l($e),Kd=r($e,"P",{});var iw=i(Kd);Sg=s(iw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),iw.forEach(n),Gg=l($e),Ws=r($e,"P",{});var Fp=i(Ws);Ug=s(Fp,"The T5 model was proposed in "),Rs=r(Fp,"A",{href:!0,rel:!0});var dw=i(Rs);Wg=s(dw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),dw.forEach(n),Rg=s(Fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Fp.forEach(n),Bg=l($e),Bs=r($e,"P",{});var Mp=i(Bs);Hg=s(Mp,"This model inherits from "),Fr=r(Mp,"A",{href:!0});var lw=i(Fr);Vg=s(lw,"PreTrainedModel"),lw.forEach(n),Kg=s(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(n),Yg=l($e),Hs=r($e,"P",{});var Cp=i(Hs);Zg=s(Cp,"This model is also a PyTorch "),Vs=r(Cp,"A",{href:!0,rel:!0});var cw=i(Vs);Jg=s(cw,"torch.nn.Module"),cw.forEach(n),Xg=s(Cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp.forEach(n),Qg=l($e),Ve=r($e,"DIV",{class:!0});var St=i(Ve);_(Ks.$$.fragment,St),eT=l(St),ln=r(St,"P",{});var Xr=i(ln);tT=s(Xr,"The "),Mr=r(Xr,"A",{href:!0});var pw=i(Mr);nT=s(pw,"T5EncoderModel"),pw.forEach(n),oT=s(Xr," forward method, overrides the "),Yd=r(Xr,"CODE",{});var hw=i(Yd);sT=s(hw,"__call__"),hw.forEach(n),aT=s(Xr," special method."),Xr.forEach(n),rT=l(St),_(Wn.$$.fragment,St),iT=l(St),Zd=r(St,"P",{});var uw=i(Zd);dT=s(uw,"Example:"),uw.forEach(n),lT=l(St),_(Ys.$$.fragment,St),St.forEach(n),cT=l($e),Ke=r($e,"DIV",{class:!0});var Gt=i(Ke);_(Zs.$$.fragment,Gt),pT=l(Gt),Jd=r(Gt,"P",{});var mw=i(Jd);hT=s(mw,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),mw.forEach(n),uT=l(Gt),Xd=r(Gt,"P",{});var fw=i(Xd);mT=s(fw,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),fw.forEach(n),fT=l(Gt),Qd=r(Gt,"P",{});var _w=i(Qd);_T=s(_w,"Example:"),_w.forEach(n),gT=l(Gt),_(Js.$$.fragment,Gt),Gt.forEach(n),TT=l($e),Tt=r($e,"DIV",{class:!0});var po=i(Tt);_(Xs.$$.fragment,po),vT=l(po),el=r(po,"P",{});var gw=i(el);kT=s(gw,"Moves the model to cpu from a model parallel state."),gw.forEach(n),bT=l(po),tl=r(po,"P",{});var Tw=i(tl);yT=s(Tw,"Example:"),Tw.forEach(n),wT=l(po),_(Qs.$$.fragment,po),po.forEach(n),$e.forEach(n),Gc=l(t),cn=r(t,"H2",{class:!0});var Pp=i(cn);Rn=r(Pp,"A",{id:!0,class:!0,href:!0});var vw=i(Rn);nl=r(vw,"SPAN",{});var kw=i(nl);_(ea.$$.fragment,kw),kw.forEach(n),vw.forEach(n),xT=l(Pp),ol=r(Pp,"SPAN",{});var bw=i(ol);$T=s(bw,"TFT5Model"),bw.forEach(n),Pp.forEach(n),Uc=l(t),de=r(t,"DIV",{class:!0});var ot=i(de);_(ta.$$.fragment,ot),zT=l(ot),sl=r(ot,"P",{});var yw=i(sl);jT=s(yw,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),yw.forEach(n),qT=l(ot),na=r(ot,"P",{});var Np=i(na);ET=s(Np,"The T5 model was proposed in "),oa=r(Np,"A",{href:!0,rel:!0});var ww=i(oa);FT=s(ww,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ww.forEach(n),MT=s(Np,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Np.forEach(n),CT=l(ot),sa=r(ot,"P",{});var Op=i(sa);PT=s(Op,"This model inherits from "),Cr=r(Op,"A",{href:!0});var xw=i(Cr);NT=s(xw,"TFPreTrainedModel"),xw.forEach(n),OT=s(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(n),LT=l(ot),aa=r(ot,"P",{});var Lp=i(aa);AT=s(Lp,"This model is also a "),ra=r(Lp,"A",{href:!0,rel:!0});var $w=i(ra);IT=s($w,"tf.keras.Model"),$w.forEach(n),DT=s(Lp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp.forEach(n),ST=l(ot),_(Bn.$$.fragment,ot),GT=l(ot),Ye=r(ot,"DIV",{class:!0});var Ut=i(Ye);_(ia.$$.fragment,Ut),UT=l(Ut),pn=r(Ut,"P",{});var Qr=i(pn);WT=s(Qr,"The "),Pr=r(Qr,"A",{href:!0});var zw=i(Pr);RT=s(zw,"TFT5Model"),zw.forEach(n),BT=s(Qr," forward method, overrides the "),al=r(Qr,"CODE",{});var jw=i(al);HT=s(jw,"__call__"),jw.forEach(n),VT=s(Qr," special method."),Qr.forEach(n),KT=l(Ut),_(Hn.$$.fragment,Ut),YT=l(Ut),rl=r(Ut,"P",{});var qw=i(rl);ZT=s(qw,"Examples:"),qw.forEach(n),JT=l(Ut),_(da.$$.fragment,Ut),Ut.forEach(n),ot.forEach(n),Wc=l(t),hn=r(t,"H2",{class:!0});var Ap=i(hn);Vn=r(Ap,"A",{id:!0,class:!0,href:!0});var Ew=i(Vn);il=r(Ew,"SPAN",{});var Fw=i(il);_(la.$$.fragment,Fw),Fw.forEach(n),Ew.forEach(n),XT=l(Ap),dl=r(Ap,"SPAN",{});var Mw=i(dl);QT=s(Mw,"TFT5ForConditionalGeneration"),Mw.forEach(n),Ap.forEach(n),Rc=l(t),le=r(t,"DIV",{class:!0});var st=i(le);_(ca.$$.fragment,st),ev=l(st),pa=r(st,"P",{});var Ip=i(pa);tv=s(Ip,"T5 Model with a "),ll=r(Ip,"CODE",{});var Cw=i(ll);nv=s(Cw,"language modeling"),Cw.forEach(n),ov=s(Ip," head on top."),Ip.forEach(n),sv=l(st),ha=r(st,"P",{});var Dp=i(ha);av=s(Dp,"The T5 model was proposed in "),ua=r(Dp,"A",{href:!0,rel:!0});var Pw=i(ua);rv=s(Pw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Pw.forEach(n),iv=s(Dp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Dp.forEach(n),dv=l(st),ma=r(st,"P",{});var Sp=i(ma);lv=s(Sp,"This model inherits from "),Nr=r(Sp,"A",{href:!0});var Nw=i(Nr);cv=s(Nw,"TFPreTrainedModel"),Nw.forEach(n),pv=s(Sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp.forEach(n),hv=l(st),fa=r(st,"P",{});var Gp=i(fa);uv=s(Gp,"This model is also a "),_a=r(Gp,"A",{href:!0,rel:!0});var Ow=i(_a);mv=s(Ow,"tf.keras.Model"),Ow.forEach(n),fv=s(Gp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gp.forEach(n),_v=l(st),_(Kn.$$.fragment,st),gv=l(st),Ze=r(st,"DIV",{class:!0});var Wt=i(Ze);_(ga.$$.fragment,Wt),Tv=l(Wt),un=r(Wt,"P",{});var ei=i(un);vv=s(ei,"The "),Or=r(ei,"A",{href:!0});var Lw=i(Or);kv=s(Lw,"TFT5ForConditionalGeneration"),Lw.forEach(n),bv=s(ei," forward method, overrides the "),cl=r(ei,"CODE",{});var Aw=i(cl);yv=s(Aw,"__call__"),Aw.forEach(n),wv=s(ei," special method."),ei.forEach(n),xv=l(Wt),_(Yn.$$.fragment,Wt),$v=l(Wt),pl=r(Wt,"P",{});var Iw=i(pl);zv=s(Iw,"Examples:"),Iw.forEach(n),jv=l(Wt),_(Ta.$$.fragment,Wt),Wt.forEach(n),st.forEach(n),Bc=l(t),mn=r(t,"H2",{class:!0});var Up=i(mn);Zn=r(Up,"A",{id:!0,class:!0,href:!0});var Dw=i(Zn);hl=r(Dw,"SPAN",{});var Sw=i(hl);_(va.$$.fragment,Sw),Sw.forEach(n),Dw.forEach(n),qv=l(Up),ul=r(Up,"SPAN",{});var Gw=i(ul);Ev=s(Gw,"TFT5EncoderModel"),Gw.forEach(n),Up.forEach(n),Hc=l(t),ce=r(t,"DIV",{class:!0});var at=i(ce);_(ka.$$.fragment,at),Fv=l(at),ml=r(at,"P",{});var Uw=i(ml);Mv=s(Uw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Uw.forEach(n),Cv=l(at),ba=r(at,"P",{});var Wp=i(ba);Pv=s(Wp,"The T5 model was proposed in "),ya=r(Wp,"A",{href:!0,rel:!0});var Ww=i(ya);Nv=s(Ww,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ww.forEach(n),Ov=s(Wp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Wp.forEach(n),Lv=l(at),wa=r(at,"P",{});var Rp=i(wa);Av=s(Rp,"This model inherits from "),Lr=r(Rp,"A",{href:!0});var Rw=i(Lr);Iv=s(Rw,"TFPreTrainedModel"),Rw.forEach(n),Dv=s(Rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rp.forEach(n),Sv=l(at),xa=r(at,"P",{});var Bp=i(xa);Gv=s(Bp,"This model is also a "),$a=r(Bp,"A",{href:!0,rel:!0});var Bw=i($a);Uv=s(Bw,"tf.keras.Model"),Bw.forEach(n),Wv=s(Bp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bp.forEach(n),Rv=l(at),_(Jn.$$.fragment,at),Bv=l(at),Je=r(at,"DIV",{class:!0});var Rt=i(Je);_(za.$$.fragment,Rt),Hv=l(Rt),fn=r(Rt,"P",{});var ti=i(fn);Vv=s(ti,"The "),Ar=r(ti,"A",{href:!0});var Hw=i(Ar);Kv=s(Hw,"TFT5EncoderModel"),Hw.forEach(n),Yv=s(ti," forward method, overrides the "),fl=r(ti,"CODE",{});var Vw=i(fl);Zv=s(Vw,"__call__"),Vw.forEach(n),Jv=s(ti," special method."),ti.forEach(n),Xv=l(Rt),_(Xn.$$.fragment,Rt),Qv=l(Rt),_l=r(Rt,"P",{});var Kw=i(_l);ek=s(Kw,"Examples:"),Kw.forEach(n),tk=l(Rt),_(ja.$$.fragment,Rt),Rt.forEach(n),at.forEach(n),Vc=l(t),_n=r(t,"H2",{class:!0});var Hp=i(_n);Qn=r(Hp,"A",{id:!0,class:!0,href:!0});var Yw=i(Qn);gl=r(Yw,"SPAN",{});var Zw=i(gl);_(qa.$$.fragment,Zw),Zw.forEach(n),Yw.forEach(n),nk=l(Hp),Tl=r(Hp,"SPAN",{});var Jw=i(Tl);ok=s(Jw,"FlaxT5Model"),Jw.forEach(n),Hp.forEach(n),Kc=l(t),rt=r(t,"DIV",{class:!0});var ho=i(rt);_(Ea.$$.fragment,ho),sk=l(ho),Xe=r(ho,"DIV",{class:!0});var Bt=i(Xe);_(Fa.$$.fragment,Bt),ak=l(Bt),gn=r(Bt,"P",{});var ni=i(gn);rk=s(ni,"The "),vl=r(ni,"CODE",{});var Xw=i(vl);ik=s(Xw,"FlaxT5PreTrainedModel"),Xw.forEach(n),dk=s(ni," forward method, overrides the "),kl=r(ni,"CODE",{});var Qw=i(kl);lk=s(Qw,"__call__"),Qw.forEach(n),ck=s(ni," special method."),ni.forEach(n),pk=l(Bt),_(eo.$$.fragment,Bt),hk=l(Bt),bl=r(Bt,"P",{});var e1=i(bl);uk=s(e1,"Example:"),e1.forEach(n),mk=l(Bt),_(Ma.$$.fragment,Bt),Bt.forEach(n),fk=l(ho),Et=r(ho,"DIV",{class:!0});var oi=i(Et);_(Ca.$$.fragment,oi),_k=l(oi),yl=r(oi,"P",{});var t1=i(yl);gk=s(t1,"Example:"),t1.forEach(n),Tk=l(oi),_(Pa.$$.fragment,oi),oi.forEach(n),vk=l(ho),Ft=r(ho,"DIV",{class:!0});var si=i(Ft);_(Na.$$.fragment,si),kk=l(si),wl=r(si,"P",{});var n1=i(wl);bk=s(n1,"Example:"),n1.forEach(n),yk=l(si),_(Oa.$$.fragment,si),si.forEach(n),ho.forEach(n),Yc=l(t),Tn=r(t,"H2",{class:!0});var Vp=i(Tn);to=r(Vp,"A",{id:!0,class:!0,href:!0});var o1=i(to);xl=r(o1,"SPAN",{});var s1=i(xl);_(La.$$.fragment,s1),s1.forEach(n),o1.forEach(n),wk=l(Vp),$l=r(Vp,"SPAN",{});var a1=i($l);xk=s(a1,"FlaxT5ForConditionalGeneration"),a1.forEach(n),Vp.forEach(n),Zc=l(t),it=r(t,"DIV",{class:!0});var uo=i(it);_(Aa.$$.fragment,uo),$k=l(uo),Qe=r(uo,"DIV",{class:!0});var Ht=i(Qe);_(Ia.$$.fragment,Ht),zk=l(Ht),vn=r(Ht,"P",{});var ai=i(vn);jk=s(ai,"The "),zl=r(ai,"CODE",{});var r1=i(zl);qk=s(r1,"FlaxT5PreTrainedModel"),r1.forEach(n),Ek=s(ai," forward method, overrides the "),jl=r(ai,"CODE",{});var i1=i(jl);Fk=s(i1,"__call__"),i1.forEach(n),Mk=s(ai," special method."),ai.forEach(n),Ck=l(Ht),_(no.$$.fragment,Ht),Pk=l(Ht),ql=r(Ht,"P",{});var d1=i(ql);Nk=s(d1,"Example:"),d1.forEach(n),Ok=l(Ht),_(Da.$$.fragment,Ht),Ht.forEach(n),Lk=l(uo),Mt=r(uo,"DIV",{class:!0});var ri=i(Mt);_(Sa.$$.fragment,ri),Ak=l(ri),El=r(ri,"P",{});var l1=i(El);Ik=s(l1,"Example:"),l1.forEach(n),Dk=l(ri),_(Ga.$$.fragment,ri),ri.forEach(n),Sk=l(uo),Ct=r(uo,"DIV",{class:!0});var ii=i(Ct);_(Ua.$$.fragment,ii),Gk=l(ii),Fl=r(ii,"P",{});var c1=i(Fl);Uk=s(c1,"Example:"),c1.forEach(n),Wk=l(ii),_(Wa.$$.fragment,ii),ii.forEach(n),uo.forEach(n),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(q1)),c(w,"id","t5"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(q,"class","relative group"),c(re,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(re,"rel","nofollow"),c(O,"href","#training"),c(Ne,"href","#inference"),c(Oe,"href","#scripts"),c(mo,"href","https://huggingface.co/t5-small"),c(mo,"rel","nofollow"),c(fo,"href","https://huggingface.co/t5-base"),c(fo,"rel","nofollow"),c(_o,"href","https://huggingface.co/t5-large"),c(_o,"rel","nofollow"),c(go,"href","https://huggingface.co/t5-3b"),c(go,"rel","nofollow"),c(To,"href","https://huggingface.co/t5-11b"),c(To,"rel","nofollow"),c(Za,"href","t5v1.1"),c(Ja,"href","mt5"),c(Xa,"href","byt5"),c(vo,"href","https://huggingface.co/models?search=t5"),c(vo,"rel","nofollow"),c(ko,"href","https://huggingface.co/thomwolf"),c(ko,"rel","nofollow"),c(bo,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(bo,"rel","nofollow"),c(Qa,"id","training"),c(xn,"id","training"),c(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xn,"href","#training"),c(Vt,"class","relative group"),c(er,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(nr,"href","/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer"),c(xo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),c(xo,"rel","nofollow"),c(zo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),c(zo,"rel","nofollow"),c(Eo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Eo,"rel","nofollow"),c(Fo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Fo,"rel","nofollow"),c(dr,"id","inference"),c(qn,"id","inference"),c(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qn,"href","#inference"),c(Kt,"class","relative group"),c(lr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Co,"href","https://huggingface.co/blog/how-to-generate"),c(Co,"rel","nofollow"),c(Po,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Po,"rel","nofollow"),c(cr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(ur,"id","scripts"),c(En,"id","performance"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#performance"),c(Yt,"class","relative group"),c(Io,"href","https://github.com/NVIDIA/apex#quick-start"),c(Io,"rel","nofollow"),c(Fn,"id","example-scripts"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#example-scripts"),c(Zt,"class","relative group"),c(So,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(So,"rel","nofollow"),c(Go,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Go,"rel","nofollow"),c(Uo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),c(Uo,"rel","nofollow"),c(Wo,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),c(Wo,"rel","nofollow"),c(Ro,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),c(Ro,"rel","nofollow"),c(Bo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),c(Bo,"rel","nofollow"),c(Ho,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),c(Ho,"rel","nofollow"),c(Cn,"id","transformers.T5Config"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#transformers.T5Config"),c(Xt,"class","relative group"),c(fr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),c(_r,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),c(Yo,"href","https://huggingface.co/t5-small"),c(Yo,"rel","nofollow"),c(gr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Tr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(kt,"class","docstring"),c(Pn,"id","transformers.T5Tokenizer"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#transformers.T5Tokenizer"),c(en,"class","relative group"),c(Qo,"href","https://github.com/google/sentencepiece"),c(Qo,"rel","nofollow"),c(vr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(jt,"class","docstring"),c(Nn,"class","docstring"),c(On,"class","docstring"),c(yr,"class","docstring"),c(ie,"class","docstring"),c(Ln,"id","transformers.T5TokenizerFast"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5TokenizerFast"),c(tn,"class","relative group"),c(ls,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(ls,"rel","nofollow"),c(wr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(qt,"class","docstring"),c(An,"class","docstring"),c(Ie,"class","docstring"),c(In,"id","transformers.T5Model"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5Model"),c(on,"class","relative group"),c(gs,"href","https://arxiv.org/abs/1910.10683"),c(gs,"rel","nofollow"),c(zr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(jr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),c(We,"class","docstring"),c(Re,"class","docstring"),c(_t,"class","docstring"),c(J,"class","docstring"),c(Sn,"id","transformers.T5ForConditionalGeneration"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.T5ForConditionalGeneration"),c(an,"class","relative group"),c(Ms,"href","https://arxiv.org/abs/1910.10683"),c(Ms,"rel","nofollow"),c(qr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ns,"rel","nofollow"),c(Er,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(Be,"class","docstring"),c(He,"class","docstring"),c(gt,"class","docstring"),c(X,"class","docstring"),c(Un,"id","transformers.T5EncoderModel"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.T5EncoderModel"),c(dn,"class","relative group"),c(Rs,"href","https://arxiv.org/abs/1910.10683"),c(Rs,"rel","nofollow"),c(Fr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vs,"rel","nofollow"),c(Mr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5EncoderModel"),c(Ve,"class","docstring"),c(Ke,"class","docstring"),c(Tt,"class","docstring"),c(Q,"class","docstring"),c(Rn,"id","transformers.TFT5Model"),c(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rn,"href","#transformers.TFT5Model"),c(cn,"class","relative group"),c(oa,"href","https://arxiv.org/abs/1910.10683"),c(oa,"rel","nofollow"),c(Cr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ra,"rel","nofollow"),c(Pr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),c(Ye,"class","docstring"),c(de,"class","docstring"),c(Vn,"id","transformers.TFT5ForConditionalGeneration"),c(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vn,"href","#transformers.TFT5ForConditionalGeneration"),c(hn,"class","relative group"),c(ua,"href","https://arxiv.org/abs/1910.10683"),c(ua,"rel","nofollow"),c(Nr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_a,"rel","nofollow"),c(Or,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Ze,"class","docstring"),c(le,"class","docstring"),c(Zn,"id","transformers.TFT5EncoderModel"),c(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zn,"href","#transformers.TFT5EncoderModel"),c(mn,"class","relative group"),c(ya,"href","https://arxiv.org/abs/1910.10683"),c(ya,"rel","nofollow"),c(Lr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c($a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($a,"rel","nofollow"),c(Ar,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Je,"class","docstring"),c(ce,"class","docstring"),c(Qn,"id","transformers.FlaxT5Model"),c(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qn,"href","#transformers.FlaxT5Model"),c(_n,"class","relative group"),c(Xe,"class","docstring"),c(Et,"class","docstring"),c(Ft,"class","docstring"),c(rt,"class","docstring"),c(to,"id","transformers.FlaxT5ForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxT5ForConditionalGeneration"),c(Tn,"class","relative group"),c(Qe,"class","docstring"),c(Mt,"class","docstring"),c(Ct,"class","docstring"),c(it,"class","docstring")},m(t,h){e(document.head,u),p(t,z,h),p(t,b,h),e(b,w),e(w,$),g(x,$,null),e(b,y),e(b,j),e(j,ze),p(t,se,h),p(t,q,h),e(q,ee),e(ee,G),g(ae,G,null),e(q,je),e(q,U),e(U,qe),p(t,ve,h),p(t,W,h),e(W,A),e(W,re),e(re,pe),e(W,F),p(t,P,h),p(t,he,h),e(he,K),p(t,ke,h),p(t,ue,h),e(ue,R),e(R,Ee),p(t,be,h),p(t,C,h),e(C,Fe),p(t,H,h),p(t,V,h),e(V,_e),e(_e,N),e(N,Me),e(N,ge),e(ge,I),e(N,Ce),e(N,B),e(B,Pe),e(N,m),e(V,E),e(V,te),e(te,De),e(De,dt),e(V,D),e(V,Se),e(Se,ne),e(ne,lt),e(ne,O),e(O,Y),e(ne,ct),e(ne,Ne),e(Ne,Z),e(ne,pt),e(ne,Oe),e(Oe,Le),e(ne,ht),p(t,Ul,h),p(t,Va,h),e(Va,Kp),p(t,Wl,h),p(t,Ge,h),e(Ge,di),e(di,li),e(li,mo),e(mo,Yp),e(Ge,Zp),e(Ge,ci),e(ci,pi),e(pi,fo),e(fo,Jp),e(Ge,Xp),e(Ge,hi),e(hi,ui),e(ui,_o),e(_o,Qp),e(Ge,eh),e(Ge,mi),e(mi,fi),e(fi,go),e(go,th),e(Ge,nh),e(Ge,_i),e(_i,Ka),e(Ka,To),e(To,oh),e(Ka,sh),p(t,Rl,h),p(t,Ya,h),e(Ya,ah),p(t,Bl,h),p(t,wt,h),e(wt,gi),e(gi,kn),e(kn,Ti),e(Ti,rh),e(kn,ih),e(kn,Za),e(Za,dh),e(kn,lh),e(wt,ch),e(wt,vi),e(vi,bn),e(bn,ki),e(ki,ph),e(bn,hh),e(bn,Ja),e(Ja,uh),e(bn,mh),e(wt,fh),e(wt,bi),e(bi,yn),e(yn,yi),e(yi,_h),e(yn,gh),e(yn,Xa),e(Xa,Th),e(yn,vh),p(t,Hl,h),p(t,wn,h),e(wn,kh),e(wn,vo),e(vo,bh),e(wn,yh),p(t,Vl,h),p(t,xt,h),e(xt,wh),e(xt,ko),e(ko,xh),e(xt,$h),e(xt,bo),e(bo,zh),e(xt,jh),p(t,Kl,h),p(t,Qa,h),p(t,Yl,h),p(t,Vt,h),e(Vt,xn),e(xn,wi),g(yo,wi,null),e(Vt,qh),e(Vt,xi),e(xi,Eh),p(t,Zl,h),p(t,ut,h),e(ut,Fh),e(ut,$i),e($i,Mh),e(ut,Ch),e(ut,zi),e(zi,Ph),e(ut,Nh),e(ut,ji),e(ji,Oh),e(ut,Lh),p(t,Jl,h),p(t,$n,h),e($n,Ah),e($n,er),e(er,Ih),e($n,Dh),p(t,Xl,h),p(t,tr,h),e(tr,qi),e(qi,Sh),p(t,Ql,h),p(t,me,h),e(me,Gh),e(me,Ei),e(Ei,Uh),e(me,Wh),e(me,Fi),e(Fi,Rh),e(me,Bh),e(me,Mi),e(Mi,Hh),e(me,Vh),e(me,Ci),e(Ci,Kh),e(me,Yh),e(me,Pi),e(Pi,Zh),e(me,Jh),e(me,nr),e(nr,Xh),e(me,Qh),p(t,ec,h),p(t,or,h),e(or,eu),p(t,tc,h),g(wo,t,h),p(t,nc,h),p(t,zn,h),e(zn,tu),e(zn,xo),e(xo,nu),e(zn,ou),p(t,oc,h),p(t,sr,h),e(sr,Ni),e(Ni,su),p(t,sc,h),p(t,ar,h),e(ar,au),p(t,ac,h),g($o,t,h),p(t,rc,h),p(t,oe,h),e(oe,ru),e(oe,Oi),e(Oi,iu),e(oe,du),e(oe,Li),e(Li,lu),e(oe,cu),e(oe,Ai),e(Ai,pu),e(oe,hu),e(oe,Ii),e(Ii,uu),e(oe,mu),e(oe,Di),e(Di,fu),e(oe,_u),e(oe,Si),e(Si,gu),e(oe,Tu),e(oe,Gi),e(Gi,vu),e(oe,ku),p(t,ic,h),p(t,$t,h),e($t,bu),e($t,Ui),e(Ui,yu),e($t,wu),e($t,Wi),e(Wi,xu),e($t,$u),p(t,dc,h),p(t,fe,h),e(fe,zu),e(fe,Ri),e(Ri,ju),e(fe,qu),e(fe,Bi),e(Bi,Eu),e(fe,Fu),e(fe,Hi),e(Hi,Mu),e(fe,Cu),e(fe,Vi),e(Vi,Pu),e(fe,Nu),e(fe,zo),e(zo,Ou),e(fe,Lu),e(fe,Ki),e(Ki,Au),e(fe,Iu),p(t,lc,h),g(jo,t,h),p(t,cc,h),p(t,rr,h),e(rr,Du),p(t,pc,h),p(t,ir,h),e(ir,qo),e(qo,Su),e(qo,Yi),e(Yi,Gu),e(qo,Uu),p(t,hc,h),p(t,zt,h),e(zt,Wu),e(zt,Eo),e(Eo,Ru),e(zt,Bu),e(zt,Fo),e(Fo,Hu),e(zt,Vu),p(t,uc,h),p(t,jn,h),e(jn,Ku),e(jn,Zi),e(Zi,Yu),e(jn,Zu),p(t,mc,h),p(t,dr,h),p(t,fc,h),p(t,Kt,h),e(Kt,qn),e(qn,Ji),g(Mo,Ji,null),e(Kt,Ju),e(Kt,Xi),e(Xi,Xu),p(t,_c,h),p(t,mt,h),e(mt,Qu),e(mt,lr),e(lr,em),e(mt,tm),e(mt,Co),e(Co,nm),e(mt,om),e(mt,Po),e(Po,sm),e(mt,am),p(t,gc,h),g(No,t,h),p(t,Tc,h),p(t,Ue,h),e(Ue,rm),e(Ue,Qi),e(Qi,im),e(Ue,dm),e(Ue,ed),e(ed,lm),e(Ue,cm),e(Ue,cr),e(cr,pm),e(Ue,hm),e(Ue,td),e(td,um),e(Ue,mm),p(t,vc,h),p(t,pr,h),e(pr,fm),p(t,kc,h),g(Oo,t,h),p(t,bc,h),p(t,hr,h),e(hr,_m),p(t,yc,h),g(Lo,t,h),p(t,wc,h),p(t,ur,h),p(t,xc,h),p(t,Yt,h),e(Yt,En),e(En,nd),g(Ao,nd,null),e(Yt,gm),e(Yt,od),e(od,Tm),p(t,$c,h),p(t,ft,h),e(ft,vm),e(ft,Io),e(Io,km),e(ft,bm),e(ft,sd),e(sd,ym),e(ft,wm),e(ft,ad),e(ad,xm),e(ft,$m),p(t,zc,h),p(t,Zt,h),e(Zt,Fn),e(Fn,rd),g(Do,rd,null),e(Zt,zm),e(Zt,id),e(id,jm),p(t,jc,h),p(t,mr,h),e(mr,qm),p(t,qc,h),p(t,Mn,h),e(Mn,dd),e(dd,Jt),e(Jt,Em),e(Jt,So),e(So,Fm),e(Jt,Mm),e(Jt,Go),e(Go,Cm),e(Jt,Pm),e(Mn,Nm),e(Mn,ld),e(ld,Ae),e(Ae,Om),e(Ae,Uo),e(Uo,Lm),e(Ae,Am),e(Ae,Wo),e(Wo,Im),e(Ae,Dm),e(Ae,Ro),e(Ro,Sm),e(Ae,Gm),e(Ae,Bo),e(Bo,Um),e(Ae,Wm),e(Ae,Ho),e(Ho,Rm),e(Ae,Bm),p(t,Ec,h),p(t,Xt,h),e(Xt,Cn),e(Cn,cd),g(Vo,cd,null),e(Xt,Hm),e(Xt,pd),e(pd,Vm),p(t,Fc,h),p(t,kt,h),g(Ko,kt,null),e(kt,Km),e(kt,bt),e(bt,Ym),e(bt,fr),e(fr,Zm),e(bt,Jm),e(bt,_r),e(_r,Xm),e(bt,Qm),e(bt,Yo),e(Yo,ef),e(bt,tf),e(kt,nf),e(kt,Qt),e(Qt,of),e(Qt,gr),e(gr,sf),e(Qt,af),e(Qt,Tr),e(Tr,rf),e(Qt,df),p(t,Mc,h),p(t,en,h),e(en,Pn),e(Pn,hd),g(Zo,hd,null),e(en,lf),e(en,ud),e(ud,cf),p(t,Cc,h),p(t,ie,h),g(Jo,ie,null),e(ie,pf),e(ie,Xo),e(Xo,hf),e(Xo,Qo),e(Qo,uf),e(Xo,mf),e(ie,ff),e(ie,es),e(es,_f),e(es,vr),e(vr,gf),e(es,Tf),e(ie,vf),e(ie,jt),g(ts,jt,null),e(jt,kf),e(jt,md),e(md,bf),e(jt,yf),e(jt,ns),e(ns,kr),e(kr,wf),e(kr,fd),e(fd,xf),e(ns,$f),e(ns,br),e(br,zf),e(br,_d),e(_d,jf),e(ie,qf),e(ie,Nn),g(os,Nn,null),e(Nn,Ef),e(Nn,ss),e(ss,Ff),e(ss,gd),e(gd,Mf),e(ss,Cf),e(ie,Pf),e(ie,On),g(as,On,null),e(On,Nf),e(On,Td),e(Td,Of),e(ie,Lf),e(ie,yr),g(rs,yr,null),p(t,Pc,h),p(t,tn,h),e(tn,Ln),e(Ln,vd),g(is,vd,null),e(tn,Af),e(tn,kd),e(kd,If),p(t,Nc,h),p(t,Ie,h),g(ds,Ie,null),e(Ie,Df),e(Ie,nn),e(nn,Sf),e(nn,bd),e(bd,Gf),e(nn,Uf),e(nn,ls),e(ls,Wf),e(nn,Rf),e(Ie,Bf),e(Ie,cs),e(cs,Hf),e(cs,wr),e(wr,Vf),e(cs,Kf),e(Ie,Yf),e(Ie,qt),g(ps,qt,null),e(qt,Zf),e(qt,yd),e(yd,Jf),e(qt,Xf),e(qt,hs),e(hs,xr),e(xr,Qf),e(xr,wd),e(wd,e_),e(hs,t_),e(hs,$r),e($r,n_),e($r,xd),e(xd,o_),e(Ie,s_),e(Ie,An),g(us,An,null),e(An,a_),e(An,$d),e($d,r_),p(t,Oc,h),p(t,on,h),e(on,In),e(In,zd),g(ms,zd,null),e(on,i_),e(on,jd),e(jd,d_),p(t,Lc,h),p(t,J,h),g(fs,J,null),e(J,l_),e(J,qd),e(qd,c_),e(J,p_),e(J,_s),e(_s,h_),e(_s,gs),e(gs,u_),e(_s,m_),e(J,f_),e(J,Ts),e(Ts,__),e(Ts,zr),e(zr,g_),e(Ts,T_),e(J,v_),e(J,vs),e(vs,k_),e(vs,ks),e(ks,b_),e(vs,y_),e(J,w_),e(J,We),g(bs,We,null),e(We,x_),e(We,sn),e(sn,$_),e(sn,jr),e(jr,z_),e(sn,j_),e(sn,Ed),e(Ed,q_),e(sn,E_),e(We,F_),g(Dn,We,null),e(We,M_),e(We,Fd),e(Fd,C_),e(We,P_),g(ys,We,null),e(J,N_),e(J,Re),g(ws,Re,null),e(Re,O_),e(Re,Md),e(Md,L_),e(Re,A_),e(Re,Cd),e(Cd,I_),e(Re,D_),e(Re,Pd),e(Pd,S_),e(Re,G_),g(xs,Re,null),e(J,U_),e(J,_t),g($s,_t,null),e(_t,W_),e(_t,Nd),e(Nd,R_),e(_t,B_),e(_t,Od),e(Od,H_),e(_t,V_),g(zs,_t,null),p(t,Ac,h),p(t,an,h),e(an,Sn),e(Sn,Ld),g(js,Ld,null),e(an,K_),e(an,Ad),e(Ad,Y_),p(t,Ic,h),p(t,X,h),g(qs,X,null),e(X,Z_),e(X,Es),e(Es,J_),e(Es,Id),e(Id,X_),e(Es,Q_),e(X,eg),e(X,Fs),e(Fs,tg),e(Fs,Ms),e(Ms,ng),e(Fs,og),e(X,sg),e(X,Cs),e(Cs,ag),e(Cs,qr),e(qr,rg),e(Cs,ig),e(X,dg),e(X,Ps),e(Ps,lg),e(Ps,Ns),e(Ns,cg),e(Ps,pg),e(X,hg),e(X,Be),g(Os,Be,null),e(Be,ug),e(Be,rn),e(rn,mg),e(rn,Er),e(Er,fg),e(rn,_g),e(rn,Dd),e(Dd,gg),e(rn,Tg),e(Be,vg),g(Gn,Be,null),e(Be,kg),e(Be,Sd),e(Sd,bg),e(Be,yg),g(Ls,Be,null),e(X,wg),e(X,He),g(As,He,null),e(He,xg),e(He,Gd),e(Gd,$g),e(He,zg),e(He,Ud),e(Ud,jg),e(He,qg),e(He,Wd),e(Wd,Eg),e(He,Fg),g(Is,He,null),e(X,Mg),e(X,gt),g(Ds,gt,null),e(gt,Cg),e(gt,Rd),e(Rd,Pg),e(gt,Ng),e(gt,Bd),e(Bd,Og),e(gt,Lg),g(Ss,gt,null),p(t,Dc,h),p(t,dn,h),e(dn,Un),e(Un,Hd),g(Gs,Hd,null),e(dn,Ag),e(dn,Vd),e(Vd,Ig),p(t,Sc,h),p(t,Q,h),g(Us,Q,null),e(Q,Dg),e(Q,Kd),e(Kd,Sg),e(Q,Gg),e(Q,Ws),e(Ws,Ug),e(Ws,Rs),e(Rs,Wg),e(Ws,Rg),e(Q,Bg),e(Q,Bs),e(Bs,Hg),e(Bs,Fr),e(Fr,Vg),e(Bs,Kg),e(Q,Yg),e(Q,Hs),e(Hs,Zg),e(Hs,Vs),e(Vs,Jg),e(Hs,Xg),e(Q,Qg),e(Q,Ve),g(Ks,Ve,null),e(Ve,eT),e(Ve,ln),e(ln,tT),e(ln,Mr),e(Mr,nT),e(ln,oT),e(ln,Yd),e(Yd,sT),e(ln,aT),e(Ve,rT),g(Wn,Ve,null),e(Ve,iT),e(Ve,Zd),e(Zd,dT),e(Ve,lT),g(Ys,Ve,null),e(Q,cT),e(Q,Ke),g(Zs,Ke,null),e(Ke,pT),e(Ke,Jd),e(Jd,hT),e(Ke,uT),e(Ke,Xd),e(Xd,mT),e(Ke,fT),e(Ke,Qd),e(Qd,_T),e(Ke,gT),g(Js,Ke,null),e(Q,TT),e(Q,Tt),g(Xs,Tt,null),e(Tt,vT),e(Tt,el),e(el,kT),e(Tt,bT),e(Tt,tl),e(tl,yT),e(Tt,wT),g(Qs,Tt,null),p(t,Gc,h),p(t,cn,h),e(cn,Rn),e(Rn,nl),g(ea,nl,null),e(cn,xT),e(cn,ol),e(ol,$T),p(t,Uc,h),p(t,de,h),g(ta,de,null),e(de,zT),e(de,sl),e(sl,jT),e(de,qT),e(de,na),e(na,ET),e(na,oa),e(oa,FT),e(na,MT),e(de,CT),e(de,sa),e(sa,PT),e(sa,Cr),e(Cr,NT),e(sa,OT),e(de,LT),e(de,aa),e(aa,AT),e(aa,ra),e(ra,IT),e(aa,DT),e(de,ST),g(Bn,de,null),e(de,GT),e(de,Ye),g(ia,Ye,null),e(Ye,UT),e(Ye,pn),e(pn,WT),e(pn,Pr),e(Pr,RT),e(pn,BT),e(pn,al),e(al,HT),e(pn,VT),e(Ye,KT),g(Hn,Ye,null),e(Ye,YT),e(Ye,rl),e(rl,ZT),e(Ye,JT),g(da,Ye,null),p(t,Wc,h),p(t,hn,h),e(hn,Vn),e(Vn,il),g(la,il,null),e(hn,XT),e(hn,dl),e(dl,QT),p(t,Rc,h),p(t,le,h),g(ca,le,null),e(le,ev),e(le,pa),e(pa,tv),e(pa,ll),e(ll,nv),e(pa,ov),e(le,sv),e(le,ha),e(ha,av),e(ha,ua),e(ua,rv),e(ha,iv),e(le,dv),e(le,ma),e(ma,lv),e(ma,Nr),e(Nr,cv),e(ma,pv),e(le,hv),e(le,fa),e(fa,uv),e(fa,_a),e(_a,mv),e(fa,fv),e(le,_v),g(Kn,le,null),e(le,gv),e(le,Ze),g(ga,Ze,null),e(Ze,Tv),e(Ze,un),e(un,vv),e(un,Or),e(Or,kv),e(un,bv),e(un,cl),e(cl,yv),e(un,wv),e(Ze,xv),g(Yn,Ze,null),e(Ze,$v),e(Ze,pl),e(pl,zv),e(Ze,jv),g(Ta,Ze,null),p(t,Bc,h),p(t,mn,h),e(mn,Zn),e(Zn,hl),g(va,hl,null),e(mn,qv),e(mn,ul),e(ul,Ev),p(t,Hc,h),p(t,ce,h),g(ka,ce,null),e(ce,Fv),e(ce,ml),e(ml,Mv),e(ce,Cv),e(ce,ba),e(ba,Pv),e(ba,ya),e(ya,Nv),e(ba,Ov),e(ce,Lv),e(ce,wa),e(wa,Av),e(wa,Lr),e(Lr,Iv),e(wa,Dv),e(ce,Sv),e(ce,xa),e(xa,Gv),e(xa,$a),e($a,Uv),e(xa,Wv),e(ce,Rv),g(Jn,ce,null),e(ce,Bv),e(ce,Je),g(za,Je,null),e(Je,Hv),e(Je,fn),e(fn,Vv),e(fn,Ar),e(Ar,Kv),e(fn,Yv),e(fn,fl),e(fl,Zv),e(fn,Jv),e(Je,Xv),g(Xn,Je,null),e(Je,Qv),e(Je,_l),e(_l,ek),e(Je,tk),g(ja,Je,null),p(t,Vc,h),p(t,_n,h),e(_n,Qn),e(Qn,gl),g(qa,gl,null),e(_n,nk),e(_n,Tl),e(Tl,ok),p(t,Kc,h),p(t,rt,h),g(Ea,rt,null),e(rt,sk),e(rt,Xe),g(Fa,Xe,null),e(Xe,ak),e(Xe,gn),e(gn,rk),e(gn,vl),e(vl,ik),e(gn,dk),e(gn,kl),e(kl,lk),e(gn,ck),e(Xe,pk),g(eo,Xe,null),e(Xe,hk),e(Xe,bl),e(bl,uk),e(Xe,mk),g(Ma,Xe,null),e(rt,fk),e(rt,Et),g(Ca,Et,null),e(Et,_k),e(Et,yl),e(yl,gk),e(Et,Tk),g(Pa,Et,null),e(rt,vk),e(rt,Ft),g(Na,Ft,null),e(Ft,kk),e(Ft,wl),e(wl,bk),e(Ft,yk),g(Oa,Ft,null),p(t,Yc,h),p(t,Tn,h),e(Tn,to),e(to,xl),g(La,xl,null),e(Tn,wk),e(Tn,$l),e($l,xk),p(t,Zc,h),p(t,it,h),g(Aa,it,null),e(it,$k),e(it,Qe),g(Ia,Qe,null),e(Qe,zk),e(Qe,vn),e(vn,jk),e(vn,zl),e(zl,qk),e(vn,Ek),e(vn,jl),e(jl,Fk),e(vn,Mk),e(Qe,Ck),g(no,Qe,null),e(Qe,Pk),e(Qe,ql),e(ql,Nk),e(Qe,Ok),g(Da,Qe,null),e(it,Lk),e(it,Mt),g(Sa,Mt,null),e(Mt,Ak),e(Mt,El),e(El,Ik),e(Mt,Dk),g(Ga,Mt,null),e(it,Sk),e(it,Ct),g(Ua,Ct,null),e(Ct,Gk),e(Ct,Fl),e(Fl,Uk),e(Ct,Wk),g(Wa,Ct,null),Jc=!0},p(t,[h]){const Ra={};h&2&&(Ra.$$scope={dirty:h,ctx:t}),Dn.$set(Ra);const Ml={};h&2&&(Ml.$$scope={dirty:h,ctx:t}),Gn.$set(Ml);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:t}),Wn.$set(Cl);const Pl={};h&2&&(Pl.$$scope={dirty:h,ctx:t}),Bn.$set(Pl);const Ba={};h&2&&(Ba.$$scope={dirty:h,ctx:t}),Hn.$set(Ba);const Nl={};h&2&&(Nl.$$scope={dirty:h,ctx:t}),Kn.$set(Nl);const Ol={};h&2&&(Ol.$$scope={dirty:h,ctx:t}),Yn.$set(Ol);const Ll={};h&2&&(Ll.$$scope={dirty:h,ctx:t}),Jn.$set(Ll);const Ha={};h&2&&(Ha.$$scope={dirty:h,ctx:t}),Xn.$set(Ha);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:t}),eo.$set(Al);const Il={};h&2&&(Il.$$scope={dirty:h,ctx:t}),no.$set(Il)},i(t){Jc||(T(x.$$.fragment,t),T(ae.$$.fragment,t),T(yo.$$.fragment,t),T(wo.$$.fragment,t),T($o.$$.fragment,t),T(jo.$$.fragment,t),T(Mo.$$.fragment,t),T(No.$$.fragment,t),T(Oo.$$.fragment,t),T(Lo.$$.fragment,t),T(Ao.$$.fragment,t),T(Do.$$.fragment,t),T(Vo.$$.fragment,t),T(Ko.$$.fragment,t),T(Zo.$$.fragment,t),T(Jo.$$.fragment,t),T(ts.$$.fragment,t),T(os.$$.fragment,t),T(as.$$.fragment,t),T(rs.$$.fragment,t),T(is.$$.fragment,t),T(ds.$$.fragment,t),T(ps.$$.fragment,t),T(us.$$.fragment,t),T(ms.$$.fragment,t),T(fs.$$.fragment,t),T(bs.$$.fragment,t),T(Dn.$$.fragment,t),T(ys.$$.fragment,t),T(ws.$$.fragment,t),T(xs.$$.fragment,t),T($s.$$.fragment,t),T(zs.$$.fragment,t),T(js.$$.fragment,t),T(qs.$$.fragment,t),T(Os.$$.fragment,t),T(Gn.$$.fragment,t),T(Ls.$$.fragment,t),T(As.$$.fragment,t),T(Is.$$.fragment,t),T(Ds.$$.fragment,t),T(Ss.$$.fragment,t),T(Gs.$$.fragment,t),T(Us.$$.fragment,t),T(Ks.$$.fragment,t),T(Wn.$$.fragment,t),T(Ys.$$.fragment,t),T(Zs.$$.fragment,t),T(Js.$$.fragment,t),T(Xs.$$.fragment,t),T(Qs.$$.fragment,t),T(ea.$$.fragment,t),T(ta.$$.fragment,t),T(Bn.$$.fragment,t),T(ia.$$.fragment,t),T(Hn.$$.fragment,t),T(da.$$.fragment,t),T(la.$$.fragment,t),T(ca.$$.fragment,t),T(Kn.$$.fragment,t),T(ga.$$.fragment,t),T(Yn.$$.fragment,t),T(Ta.$$.fragment,t),T(va.$$.fragment,t),T(ka.$$.fragment,t),T(Jn.$$.fragment,t),T(za.$$.fragment,t),T(Xn.$$.fragment,t),T(ja.$$.fragment,t),T(qa.$$.fragment,t),T(Ea.$$.fragment,t),T(Fa.$$.fragment,t),T(eo.$$.fragment,t),T(Ma.$$.fragment,t),T(Ca.$$.fragment,t),T(Pa.$$.fragment,t),T(Na.$$.fragment,t),T(Oa.$$.fragment,t),T(La.$$.fragment,t),T(Aa.$$.fragment,t),T(Ia.$$.fragment,t),T(no.$$.fragment,t),T(Da.$$.fragment,t),T(Sa.$$.fragment,t),T(Ga.$$.fragment,t),T(Ua.$$.fragment,t),T(Wa.$$.fragment,t),Jc=!0)},o(t){v(x.$$.fragment,t),v(ae.$$.fragment,t),v(yo.$$.fragment,t),v(wo.$$.fragment,t),v($o.$$.fragment,t),v(jo.$$.fragment,t),v(Mo.$$.fragment,t),v(No.$$.fragment,t),v(Oo.$$.fragment,t),v(Lo.$$.fragment,t),v(Ao.$$.fragment,t),v(Do.$$.fragment,t),v(Vo.$$.fragment,t),v(Ko.$$.fragment,t),v(Zo.$$.fragment,t),v(Jo.$$.fragment,t),v(ts.$$.fragment,t),v(os.$$.fragment,t),v(as.$$.fragment,t),v(rs.$$.fragment,t),v(is.$$.fragment,t),v(ds.$$.fragment,t),v(ps.$$.fragment,t),v(us.$$.fragment,t),v(ms.$$.fragment,t),v(fs.$$.fragment,t),v(bs.$$.fragment,t),v(Dn.$$.fragment,t),v(ys.$$.fragment,t),v(ws.$$.fragment,t),v(xs.$$.fragment,t),v($s.$$.fragment,t),v(zs.$$.fragment,t),v(js.$$.fragment,t),v(qs.$$.fragment,t),v(Os.$$.fragment,t),v(Gn.$$.fragment,t),v(Ls.$$.fragment,t),v(As.$$.fragment,t),v(Is.$$.fragment,t),v(Ds.$$.fragment,t),v(Ss.$$.fragment,t),v(Gs.$$.fragment,t),v(Us.$$.fragment,t),v(Ks.$$.fragment,t),v(Wn.$$.fragment,t),v(Ys.$$.fragment,t),v(Zs.$$.fragment,t),v(Js.$$.fragment,t),v(Xs.$$.fragment,t),v(Qs.$$.fragment,t),v(ea.$$.fragment,t),v(ta.$$.fragment,t),v(Bn.$$.fragment,t),v(ia.$$.fragment,t),v(Hn.$$.fragment,t),v(da.$$.fragment,t),v(la.$$.fragment,t),v(ca.$$.fragment,t),v(Kn.$$.fragment,t),v(ga.$$.fragment,t),v(Yn.$$.fragment,t),v(Ta.$$.fragment,t),v(va.$$.fragment,t),v(ka.$$.fragment,t),v(Jn.$$.fragment,t),v(za.$$.fragment,t),v(Xn.$$.fragment,t),v(ja.$$.fragment,t),v(qa.$$.fragment,t),v(Ea.$$.fragment,t),v(Fa.$$.fragment,t),v(eo.$$.fragment,t),v(Ma.$$.fragment,t),v(Ca.$$.fragment,t),v(Pa.$$.fragment,t),v(Na.$$.fragment,t),v(Oa.$$.fragment,t),v(La.$$.fragment,t),v(Aa.$$.fragment,t),v(Ia.$$.fragment,t),v(no.$$.fragment,t),v(Da.$$.fragment,t),v(Sa.$$.fragment,t),v(Ga.$$.fragment,t),v(Ua.$$.fragment,t),v(Wa.$$.fragment,t),Jc=!1},d(t){n(u),t&&n(z),t&&n(b),k(x),t&&n(se),t&&n(q),k(ae),t&&n(ve),t&&n(W),t&&n(P),t&&n(he),t&&n(ke),t&&n(ue),t&&n(be),t&&n(C),t&&n(H),t&&n(V),t&&n(Ul),t&&n(Va),t&&n(Wl),t&&n(Ge),t&&n(Rl),t&&n(Ya),t&&n(Bl),t&&n(wt),t&&n(Hl),t&&n(wn),t&&n(Vl),t&&n(xt),t&&n(Kl),t&&n(Qa),t&&n(Yl),t&&n(Vt),k(yo),t&&n(Zl),t&&n(ut),t&&n(Jl),t&&n($n),t&&n(Xl),t&&n(tr),t&&n(Ql),t&&n(me),t&&n(ec),t&&n(or),t&&n(tc),k(wo,t),t&&n(nc),t&&n(zn),t&&n(oc),t&&n(sr),t&&n(sc),t&&n(ar),t&&n(ac),k($o,t),t&&n(rc),t&&n(oe),t&&n(ic),t&&n($t),t&&n(dc),t&&n(fe),t&&n(lc),k(jo,t),t&&n(cc),t&&n(rr),t&&n(pc),t&&n(ir),t&&n(hc),t&&n(zt),t&&n(uc),t&&n(jn),t&&n(mc),t&&n(dr),t&&n(fc),t&&n(Kt),k(Mo),t&&n(_c),t&&n(mt),t&&n(gc),k(No,t),t&&n(Tc),t&&n(Ue),t&&n(vc),t&&n(pr),t&&n(kc),k(Oo,t),t&&n(bc),t&&n(hr),t&&n(yc),k(Lo,t),t&&n(wc),t&&n(ur),t&&n(xc),t&&n(Yt),k(Ao),t&&n($c),t&&n(ft),t&&n(zc),t&&n(Zt),k(Do),t&&n(jc),t&&n(mr),t&&n(qc),t&&n(Mn),t&&n(Ec),t&&n(Xt),k(Vo),t&&n(Fc),t&&n(kt),k(Ko),t&&n(Mc),t&&n(en),k(Zo),t&&n(Cc),t&&n(ie),k(Jo),k(ts),k(os),k(as),k(rs),t&&n(Pc),t&&n(tn),k(is),t&&n(Nc),t&&n(Ie),k(ds),k(ps),k(us),t&&n(Oc),t&&n(on),k(ms),t&&n(Lc),t&&n(J),k(fs),k(bs),k(Dn),k(ys),k(ws),k(xs),k($s),k(zs),t&&n(Ac),t&&n(an),k(js),t&&n(Ic),t&&n(X),k(qs),k(Os),k(Gn),k(Ls),k(As),k(Is),k(Ds),k(Ss),t&&n(Dc),t&&n(dn),k(Gs),t&&n(Sc),t&&n(Q),k(Us),k(Ks),k(Wn),k(Ys),k(Zs),k(Js),k(Xs),k(Qs),t&&n(Gc),t&&n(cn),k(ea),t&&n(Uc),t&&n(de),k(ta),k(Bn),k(ia),k(Hn),k(da),t&&n(Wc),t&&n(hn),k(la),t&&n(Rc),t&&n(le),k(ca),k(Kn),k(ga),k(Yn),k(Ta),t&&n(Bc),t&&n(mn),k(va),t&&n(Hc),t&&n(ce),k(ka),k(Jn),k(za),k(Xn),k(ja),t&&n(Vc),t&&n(_n),k(qa),t&&n(Kc),t&&n(rt),k(Ea),k(Fa),k(eo),k(Ma),k(Ca),k(Pa),k(Na),k(Oa),t&&n(Yc),t&&n(Tn),k(La),t&&n(Zc),t&&n(it),k(Aa),k(Ia),k(no),k(Da),k(Sa),k(Ga),k(Ua),k(Wa)}}}const q1={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function E1(L){return f1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class O1 extends p1{constructor(u){super();h1(this,u,E1,j1,u1,{})}}export{O1 as default,q1 as metadata};
