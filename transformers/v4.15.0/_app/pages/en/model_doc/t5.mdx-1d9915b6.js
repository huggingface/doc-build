import{S as Vw,i as Kw,s as Yw,e as o,k as d,w as f,t as a,L as Jw,c as s,d as t,m as l,a as i,x as _,h as r,b as c,J as e,g as p,y as g,q as T,o as v,B as k}from"../../../chunks/vendor-b1433968.js";import{T as bt}from"../../../chunks/Tip-c3840994.js";import{D as P}from"../../../chunks/Docstring-ff504c58.js";import{C as R}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as $e}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Zw(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function Xw(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function Qw(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function ey(N){let u,$,b,y,z,x,w,E,Ee,ae,j,te,O,re,je,G,qe,Te,B,I,ie,pe,F,C,he,K,ve,ue,U,Fe,ke,M,Me,H,V,fe,A,Pe,_e,D,Ce,W,Ae;return{c(){u=o("p"),$=a("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),z=o("li"),x=a("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=a("having all inputs as a list, tuple or dict in the first positional arguments."),ae=d(),j=o("p"),te=a("This second option is useful when using "),O=o("code"),re=a("tf.keras.Model.fit"),je=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),G=o("code"),qe=a("model(inputs)"),Te=a("."),B=d(),I=o("p"),ie=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=a("a single Tensor with "),K=o("code"),ve=a("input_ids"),ue=a(" only and nothing else: "),U=o("code"),Fe=a("model(inputs_ids)"),ke=d(),M=o("li"),Me=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=a("model([input_ids, attention_mask])"),fe=a(" or "),A=o("code"),Pe=a("model([input_ids, attention_mask, token_type_ids])"),_e=d(),D=o("li"),Ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var q=i(u);$=r(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),y=s(m,"UL",{});var ne=i(y);z=s(ne,"LI",{});var Oe=i(z);x=r(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(ne),E=s(ne,"LI",{});var rt=i(E);Ee=r(rt,"having all inputs as a list, tuple or dict in the first positional arguments."),rt.forEach(t),ne.forEach(t),ae=l(m),j=s(m,"P",{});var S=i(j);te=r(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=i(O);re=r(Ge,"tf.keras.Model.fit"),Ge.forEach(t),je=r(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var oe=i(G);qe=r(oe,"model(inputs)"),oe.forEach(t),Te=r(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var it=i(I);ie=r(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),it.forEach(t),pe=l(m),F=s(m,"UL",{});var L=i(F);C=s(L,"LI",{});var Y=i(C);he=r(Y,"a single Tensor with "),K=s(Y,"CODE",{});var dt=i(K);ve=r(dt,"input_ids"),dt.forEach(t),ue=r(Y," only and nothing else: "),U=s(Y,"CODE",{});var Le=i(U);Fe=r(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),ke=l(L),M=s(L,"LI",{});var J=i(M);Me=r(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(J,"CODE",{});var lt=i(H);V=r(lt,"model([input_ids, attention_mask])"),lt.forEach(t),fe=r(J," or "),A=s(J,"CODE",{});var Ne=i(A);Pe=r(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),J.forEach(t),_e=l(L),D=s(L,"LI",{});var Ie=i(D);Ce=r(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ct=i(W);Ae=r(ct,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ct.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,q){p(m,u,q),e(u,$),p(m,b,q),p(m,y,q),e(y,z),e(z,x),e(y,w),e(y,E),e(E,Ee),p(m,ae,q),p(m,j,q),e(j,te),e(j,O),e(O,re),e(j,je),e(j,G),e(G,qe),e(j,Te),p(m,B,q),p(m,I,q),e(I,ie),p(m,pe,q),p(m,F,q),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,ke),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,fe),e(M,A),e(A,Pe),e(F,_e),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(ae),m&&t(j),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function ty(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function ny(N){let u,$,b,y,z,x,w,E,Ee,ae,j,te,O,re,je,G,qe,Te,B,I,ie,pe,F,C,he,K,ve,ue,U,Fe,ke,M,Me,H,V,fe,A,Pe,_e,D,Ce,W,Ae;return{c(){u=o("p"),$=a("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),z=o("li"),x=a("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=a("having all inputs as a list, tuple or dict in the first positional arguments."),ae=d(),j=o("p"),te=a("This second option is useful when using "),O=o("code"),re=a("tf.keras.Model.fit"),je=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),G=o("code"),qe=a("model(inputs)"),Te=a("."),B=d(),I=o("p"),ie=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=a("a single Tensor with "),K=o("code"),ve=a("input_ids"),ue=a(" only and nothing else: "),U=o("code"),Fe=a("model(inputs_ids)"),ke=d(),M=o("li"),Me=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=a("model([input_ids, attention_mask])"),fe=a(" or "),A=o("code"),Pe=a("model([input_ids, attention_mask, token_type_ids])"),_e=d(),D=o("li"),Ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var q=i(u);$=r(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),y=s(m,"UL",{});var ne=i(y);z=s(ne,"LI",{});var Oe=i(z);x=r(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(ne),E=s(ne,"LI",{});var rt=i(E);Ee=r(rt,"having all inputs as a list, tuple or dict in the first positional arguments."),rt.forEach(t),ne.forEach(t),ae=l(m),j=s(m,"P",{});var S=i(j);te=r(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=i(O);re=r(Ge,"tf.keras.Model.fit"),Ge.forEach(t),je=r(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var oe=i(G);qe=r(oe,"model(inputs)"),oe.forEach(t),Te=r(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var it=i(I);ie=r(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),it.forEach(t),pe=l(m),F=s(m,"UL",{});var L=i(F);C=s(L,"LI",{});var Y=i(C);he=r(Y,"a single Tensor with "),K=s(Y,"CODE",{});var dt=i(K);ve=r(dt,"input_ids"),dt.forEach(t),ue=r(Y," only and nothing else: "),U=s(Y,"CODE",{});var Le=i(U);Fe=r(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),ke=l(L),M=s(L,"LI",{});var J=i(M);Me=r(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(J,"CODE",{});var lt=i(H);V=r(lt,"model([input_ids, attention_mask])"),lt.forEach(t),fe=r(J," or "),A=s(J,"CODE",{});var Ne=i(A);Pe=r(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),J.forEach(t),_e=l(L),D=s(L,"LI",{});var Ie=i(D);Ce=r(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ct=i(W);Ae=r(ct,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ct.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,q){p(m,u,q),e(u,$),p(m,b,q),p(m,y,q),e(y,z),e(z,x),e(y,w),e(y,E),e(E,Ee),p(m,ae,q),p(m,j,q),e(j,te),e(j,O),e(O,re),e(j,je),e(j,G),e(G,qe),e(j,Te),p(m,B,q),p(m,I,q),e(I,ie),p(m,pe,q),p(m,F,q),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,ke),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,fe),e(M,A),e(A,Pe),e(F,_e),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(ae),m&&t(j),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function oy(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function sy(N){let u,$,b,y,z,x,w,E,Ee,ae,j,te,O,re,je,G,qe,Te,B,I,ie,pe,F,C,he,K,ve,ue,U,Fe,ke,M,Me,H,V,fe,A,Pe,_e,D,Ce,W,Ae;return{c(){u=o("p"),$=a("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),z=o("li"),x=a("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=a("having all inputs as a list, tuple or dict in the first positional arguments."),ae=d(),j=o("p"),te=a("This second option is useful when using "),O=o("code"),re=a("tf.keras.Model.fit"),je=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),G=o("code"),qe=a("model(inputs)"),Te=a("."),B=d(),I=o("p"),ie=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=a("a single Tensor with "),K=o("code"),ve=a("input_ids"),ue=a(" only and nothing else: "),U=o("code"),Fe=a("model(inputs_ids)"),ke=d(),M=o("li"),Me=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=a("model([input_ids, attention_mask])"),fe=a(" or "),A=o("code"),Pe=a("model([input_ids, attention_mask, token_type_ids])"),_e=d(),D=o("li"),Ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var q=i(u);$=r(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),y=s(m,"UL",{});var ne=i(y);z=s(ne,"LI",{});var Oe=i(z);x=r(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(ne),E=s(ne,"LI",{});var rt=i(E);Ee=r(rt,"having all inputs as a list, tuple or dict in the first positional arguments."),rt.forEach(t),ne.forEach(t),ae=l(m),j=s(m,"P",{});var S=i(j);te=r(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=i(O);re=r(Ge,"tf.keras.Model.fit"),Ge.forEach(t),je=r(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var oe=i(G);qe=r(oe,"model(inputs)"),oe.forEach(t),Te=r(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var it=i(I);ie=r(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),it.forEach(t),pe=l(m),F=s(m,"UL",{});var L=i(F);C=s(L,"LI",{});var Y=i(C);he=r(Y,"a single Tensor with "),K=s(Y,"CODE",{});var dt=i(K);ve=r(dt,"input_ids"),dt.forEach(t),ue=r(Y," only and nothing else: "),U=s(Y,"CODE",{});var Le=i(U);Fe=r(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),ke=l(L),M=s(L,"LI",{});var J=i(M);Me=r(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(J,"CODE",{});var lt=i(H);V=r(lt,"model([input_ids, attention_mask])"),lt.forEach(t),fe=r(J," or "),A=s(J,"CODE",{});var Ne=i(A);Pe=r(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),J.forEach(t),_e=l(L),D=s(L,"LI",{});var Ie=i(D);Ce=r(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ct=i(W);Ae=r(ct,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ct.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,q){p(m,u,q),e(u,$),p(m,b,q),p(m,y,q),e(y,z),e(z,x),e(y,w),e(y,E),e(E,Ee),p(m,ae,q),p(m,j,q),e(j,te),e(j,O),e(O,re),e(j,je),e(j,G),e(G,qe),e(j,Te),p(m,B,q),p(m,I,q),e(I,ie),p(m,pe,q),p(m,F,q),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,ke),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,fe),e(M,A),e(A,Pe),e(F,_e),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(ae),m&&t(j),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function ay(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function ry(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function iy(N){let u,$,b,y,z;return{c(){u=o("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=i(u);$=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=i(b);y=r(E,"Module"),E.forEach(t),z=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,$),e(u,b),e(b,y),e(u,z)},d(x){x&&t(u)}}}function dy(N){let u,$,b,y,z,x,w,E,Ee,ae,j,te,O,re,je,G,qe,Te,B,I,ie,pe,F,C,he,K,ve,ue,U,Fe,ke,M,Me,H,V,fe,A,Pe,_e,D,Ce,W,Ae,m,q,ne,Oe,rt,S,Ge,oe,it,L,Y,dt,Le,J,lt,Ne,Ie,ct,Dl,Sa,Lp,Sl,Be,ei,ti,co,Np,Ip,ni,oi,po,Dp,Sp,si,ai,ho,Op,Gp,ri,ii,uo,Bp,Up,di,Oa,mo,Wp,Rp,Ol,Ga,Hp,Gl,wt,li,bn,ci,Vp,Kp,Ba,Yp,Jp,Zp,pi,wn,hi,Xp,Qp,Ua,eh,th,nh,ui,yn,mi,oh,sh,Wa,ah,rh,Bl,xn,ih,fo,dh,lh,Ul,yt,ch,_o,ph,hh,go,uh,mh,Wl,Ra,Rl,Ht,zn,fi,To,fh,_i,_h,Hl,pt,gh,gi,Th,vh,Ti,kh,bh,vi,wh,yh,Vl,$n,xh,Ha,zh,$h,Kl,Va,Vt,ki,Eh,jh,ge,qh,bi,Fh,Mh,wi,Ph,Ch,yi,Ah,Lh,xi,Nh,Ih,zi,Dh,Sh,Ka,Oh,Gh,Bh,$i,Uh,Yl,vo,Jl,En,Wh,ko,Rh,Hh,Zl,Ya,bo,Ei,Vh,Kh,ji,Yh,Xl,wo,Ql,se,Jh,qi,Zh,Xh,Fi,Qh,eu,Mi,tu,nu,Pi,ou,su,Ci,au,ru,Ai,iu,du,Li,lu,cu,ec,xt,pu,Ni,hu,uu,Ii,mu,fu,tc,me,_u,Di,gu,Tu,Si,vu,ku,Oi,bu,wu,Gi,yu,xu,yo,zu,$u,Bi,Eu,ju,nc,xo,oc,Ja,qu,sc,zt,Ui,zo,Fu,Wi,Mu,Pu,Cu,Ri,Kt,Au,$o,Lu,Nu,Eo,Iu,Du,Su,Hi,jo,Ou,Vi,Gu,Bu,ac,Za,rc,Yt,jn,Ki,qo,Uu,Yi,Wu,ic,ht,Ru,Xa,Hu,Vu,Fo,Ku,Yu,Mo,Ju,Zu,dc,Po,lc,Ue,Xu,Ji,Qu,em,Zi,tm,nm,Qa,om,sm,Xi,am,rm,cc,er,im,pc,Co,hc,tr,uc,Jt,qn,Qi,Ao,dm,ed,lm,mc,nr,cm,fc,Fn,td,Zt,pm,Lo,hm,um,No,mm,fm,_m,nd,De,gm,Io,Tm,vm,Do,km,bm,So,wm,ym,Oo,xm,zm,Go,$m,Em,_c,Xt,Mn,od,Bo,jm,sd,qm,gc,gt,Uo,Fm,Tt,Mm,or,Pm,Cm,sr,Am,Lm,Wo,Nm,Im,Dm,Qt,Sm,ar,Om,Gm,rr,Bm,Um,Tc,en,Pn,ad,Ro,Wm,rd,Rm,vc,Z,Ho,Hm,Vo,Vm,Ko,Km,Ym,Jm,Yo,Zm,ir,Xm,Qm,ef,tn,tf,id,nf,of,dd,sf,af,rf,$t,Jo,df,ld,lf,cf,Zo,dr,pf,cd,hf,uf,lr,mf,pd,ff,_f,Cn,Xo,gf,Qo,Tf,hd,vf,kf,bf,An,es,wf,ud,yf,xf,md,kc,nn,Ln,fd,ts,zf,_d,$f,bc,Se,ns,Ef,on,jf,gd,qf,Ff,os,Mf,Pf,Cf,ss,Af,cr,Lf,Nf,If,Et,as,Df,Td,Sf,Of,rs,pr,Gf,vd,Bf,Uf,hr,Wf,kd,Rf,Hf,Nn,is,Vf,bd,Kf,wc,sn,In,wd,ds,Yf,yd,Jf,yc,X,ls,Zf,xd,Xf,Qf,cs,e_,ps,t_,n_,o_,hs,s_,ur,a_,r_,i_,us,d_,ms,l_,c_,p_,We,fs,h_,an,u_,mr,m_,f_,zd,__,g_,T_,Dn,v_,$d,k_,b_,_s,w_,Re,gs,y_,Ed,x_,z_,jd,$_,E_,qd,j_,q_,Ts,F_,ut,vs,M_,Fd,P_,C_,Md,A_,L_,ks,xc,rn,Sn,Pd,bs,N_,Cd,I_,zc,Q,ws,D_,ys,S_,Ad,O_,G_,B_,xs,U_,zs,W_,R_,H_,$s,V_,fr,K_,Y_,J_,Es,Z_,js,X_,Q_,eg,He,qs,tg,dn,ng,_r,og,sg,Ld,ag,rg,ig,On,dg,Nd,lg,cg,Fs,pg,Ve,Ms,hg,Id,ug,mg,Dd,fg,_g,Sd,gg,Tg,Ps,vg,mt,Cs,kg,Od,bg,wg,Gd,yg,xg,As,$c,ln,Gn,Bd,Ls,zg,Ud,$g,Ec,ee,Ns,Eg,Wd,jg,qg,Is,Fg,Ds,Mg,Pg,Cg,Ss,Ag,gr,Lg,Ng,Ig,Os,Dg,Gs,Sg,Og,Gg,Ke,Bs,Bg,cn,Ug,Tr,Wg,Rg,Rd,Hg,Vg,Kg,Bn,Yg,Hd,Jg,Zg,Us,Xg,Ye,Ws,Qg,Vd,eT,tT,Kd,nT,oT,Yd,sT,aT,Rs,rT,ft,Hs,iT,Jd,dT,lT,Zd,cT,pT,Vs,jc,pn,Un,Xd,Ks,hT,Qd,uT,qc,de,Ys,mT,el,fT,_T,Js,gT,Zs,TT,vT,kT,Xs,bT,vr,wT,yT,xT,Qs,zT,ea,$T,ET,jT,Wn,qT,Je,ta,FT,hn,MT,kr,PT,CT,tl,AT,LT,NT,Rn,IT,nl,DT,ST,na,Fc,un,Hn,ol,oa,OT,sl,GT,Mc,le,sa,BT,aa,UT,al,WT,RT,HT,ra,VT,ia,KT,YT,JT,da,ZT,br,XT,QT,ev,la,tv,ca,nv,ov,sv,Vn,av,Ze,pa,rv,mn,iv,wr,dv,lv,rl,cv,pv,hv,Kn,uv,il,mv,fv,ha,Pc,fn,Yn,dl,ua,_v,ll,gv,Cc,ce,ma,Tv,cl,vv,kv,fa,bv,_a,wv,yv,xv,ga,zv,yr,$v,Ev,jv,Ta,qv,va,Fv,Mv,Pv,Jn,Cv,Xe,ka,Av,_n,Lv,xr,Nv,Iv,pl,Dv,Sv,Ov,Zn,Gv,hl,Bv,Uv,ba,Ac,gn,Xn,ul,wa,Wv,ml,Rv,Lc,vt,Qe,ya,Hv,Tn,Vv,fl,Kv,Yv,_l,Jv,Zv,Xv,Qn,Qv,gl,ek,tk,xa,nk,jt,za,ok,Tl,sk,ak,$a,rk,qt,Ea,ik,vl,dk,lk,ja,Nc,vn,eo,kl,qa,ck,bl,pk,Ic,kt,et,Fa,hk,kn,uk,wl,mk,fk,yl,_k,gk,Tk,to,vk,xl,kk,bk,Ma,wk,Ft,Pa,yk,zl,xk,zk,Ca,$k,Mt,Aa,Ek,$l,jk,qk,La,Dc;return x=new $e({}),re=new $e({}),To=new $e({}),vo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(<span class="hljs-attribute">input_ids</span>=input_ids, <span class="hljs-attribute">labels</span>=labels).loss`}}),wo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(<span class="hljs-attribute">input_ids</span>=input_ids, <span class="hljs-attribute">labels</span>=labels).loss`}}),xo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration 
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
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

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
<span class="hljs-attr">labels</span> = torch.tensor(labels)
labels[<span class="hljs-attr">labels</span> == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-comment"># forward pass</span>
<span class="hljs-attr">loss</span> = model(<span class="hljs-attr">input_ids=input_ids,</span> <span class="hljs-attr">attention_mask=attention_mask,</span> <span class="hljs-attr">labels=labels).loss</span>`}}),qo=new $e({}),Po=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration 

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
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),Co=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Ao=new $e({}),Bo=new $e({}),Uo=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Ro=new $e({}),Ho=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of
sequence. The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see <a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for SentencePiece</a> can be used, among other things, to set:</p>
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
</ul>`,name:"sp_model_kwargs"}]}}),Jo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5.py#L220",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5.py#L160",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5.py#L198",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new $e({}),ns=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of
sequence. The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see <a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),as=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5_fast.py#L164",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/tokenization_t5_fast.py#L190",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new $e({}),ls=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1245",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),fs=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1321",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new bt({props:{$$slots:{default:[Zw]},$$scope:{ctx:N}}}),_s=new R({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gs=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1277",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Ts=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),vs=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1289"}}),ks=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained('t5-3b')
device_map = {0: [0, 1, 2],

             1: [3, 4, 5, 6, 7, 8, 9],
             2: [10, 11, 12, 13, 14, 15, 16],
             3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-3b&#x27;</span>)
device_map = {<span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],

             <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
             <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
             <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>]}
model.parallelize(device_map) <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize() <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),bs=new $e({}),ws=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1432",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),qs=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1513",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new bt({props:{$$slots:{default:[Xw]},$$scope:{ctx:N}}}),Fs=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Ms=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1469",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Ps=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Cs=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1482"}}),As=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained('t5-3b')
device_map = {0: [0, 1, 2],

             1: [3, 4, 5, 6, 7, 8, 9],
             2: [10, 11, 12, 13, 14, 15, 16],
             3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-3b&#x27;</span>)
device_map = {<span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],

             <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
             <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
             <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>]}
model.parallelize(device_map) <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize() <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Ls=new $e({}),Ns=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1723",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Bs=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1781",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new bt({props:{$$slots:{default:[Qw]},$$scope:{ctx:N}}}),Us=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel
tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5EncoderModel.from_pretrained('t5-small')
input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ws=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1744",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Rs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Hs=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_t5.py#L1755"}}),Vs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained('t5-3b')
device_map = {0: [0, 1, 2],

             1: [3, 4, 5, 6, 7, 8, 9],
             2: [10, 11, 12, 13, 14, 15, 16],
             3: [17, 18, 19, 20, 21, 22, 23]}
model.parallelize(device_map) # Splits the model across several devices
model.deparallelize() # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-3b&#x27;</span>)
device_map = {<span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],

             <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
             <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
             <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>]}
model.parallelize(device_map) <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize() <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Ks=new $e({}),Ys=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_tf_t5.py#L1125",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Wn=new bt({props:{$$slots:{default:[ey]},$$scope:{ctx:N}}}),ta=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_tf_t5.py#L1151",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new bt({props:{$$slots:{default:[ty]},$$scope:{ctx:N}}}),na=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),oa=new $e({}),sa=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_tf_t5.py#L1289",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Vn=new bt({props:{$$slots:{default:[ny]},$$scope:{ctx:N}}}),pa=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_tf_t5.py#L1344",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kn=new bt({props:{$$slots:{default:[oy]},$$scope:{ctx:N}}}),ha=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),ua=new $e({}),ma=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_tf_t5.py#L1595",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Jn=new bt({props:{$$slots:{default:[sy]},$$scope:{ctx:N}}}),ka=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_tf_t5.py#L1613",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new bt({props:{$$slots:{default:[ay]},$$scope:{ctx:N}}}),ba=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = TFT5EncoderModel.from_pretrained('t5-small')

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="tf").input_ids  # Batch size 1
outputs = model(input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),wa=new $e({}),ya=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_flax_t5.py#L957",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qn=new bt({props:{$$slots:{default:[ry]},$$scope:{ctx:N}}}),xa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),za=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_flax_t5.py#L1041",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$a=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ea=new P({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_flax_t5.py#L1099",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ja=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qa=new $e({}),Fa=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_flax_t5.py#L957",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new bt({props:{$$slots:{default:[iy]},$$scope:{ctx:N}}}),Ma=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Pa=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_flax_t5.py#L1041",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ca=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = FlaxT5ForConditionalGeneration.from_pretrained('t5-small')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;t5-small&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Aa=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/t5/modeling_flax_t5.py#L1464",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),La=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),$=d(),b=o("h1"),y=o("a"),z=o("span"),f(x.$$.fragment),w=d(),E=o("span"),Ee=a("T5"),ae=d(),j=o("h2"),te=o("a"),O=o("span"),f(re.$$.fragment),je=d(),G=o("span"),qe=a("Overview"),Te=d(),B=o("p"),I=a("The T5 model was presented in "),ie=o("a"),pe=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=o("p"),K=a("The abstract from the paper is the following:"),ve=d(),ue=o("p"),U=o("em"),Fe=a(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ke=d(),M=o("p"),Me=a("Tips:"),H=d(),V=o("ul"),fe=o("li"),A=o("p"),Pe=a(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),_e=o("em"),D=a("translate English to German: \u2026"),Ce=a(`,
for summarization: `),W=o("em"),Ae=a("summarize: \u2026"),m=a("."),q=d(),ne=o("li"),Oe=o("p"),rt=a("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),S=d(),Ge=o("li"),oe=o("p"),it=a("See the "),L=o("a"),Y=a("training"),dt=a(", "),Le=o("a"),J=a("inference"),lt=a(" and "),Ne=o("a"),Ie=a("scripts"),ct=a(" sections below for all details regarding usage."),Dl=d(),Sa=o("p"),Lp=a("T5 comes in different sizes:"),Sl=d(),Be=o("ul"),ei=o("li"),ti=o("p"),co=o("a"),Np=a("t5-small"),Ip=d(),ni=o("li"),oi=o("p"),po=o("a"),Dp=a("t5-base"),Sp=d(),si=o("li"),ai=o("p"),ho=o("a"),Op=a("t5-large"),Gp=d(),ri=o("li"),ii=o("p"),uo=o("a"),Bp=a("t5-3b"),Up=d(),di=o("li"),Oa=o("p"),mo=o("a"),Wp=a("t5-11b"),Rp=a("."),Ol=d(),Ga=o("p"),Hp=a("Based on the original T5 model, Google has released some follow-up works:"),Gl=d(),wt=o("ul"),li=o("li"),bn=o("p"),ci=o("strong"),Vp=a("T5v1.1"),Kp=a(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ba=o("a"),Yp=a("here"),Jp=a("."),Zp=d(),pi=o("li"),wn=o("p"),hi=o("strong"),Xp=a("mT5"),Qp=a(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ua=o("a"),eh=a("here"),th=a("."),nh=d(),ui=o("li"),yn=o("p"),mi=o("strong"),oh=a("byT5"),sh=a(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Wa=o("a"),ah=a("here"),rh=a("."),Bl=d(),xn=o("p"),ih=a("All checkpoints can be found on the "),fo=o("a"),dh=a("hub"),lh=a("."),Ul=d(),yt=o("p"),ch=a("This model was contributed by "),_o=o("a"),ph=a("thomwolf"),hh=a(". The original code can be found "),go=o("a"),uh=a("here"),mh=a("."),Wl=d(),Ra=o("a"),Rl=d(),Ht=o("h2"),zn=o("a"),fi=o("span"),f(To.$$.fragment),fh=d(),_i=o("span"),_h=a("Training"),Hl=d(),pt=o("p"),gh=a(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),gi=o("code"),Th=a("input_ids"),vh=a(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ti=o("code"),kh=a("decoder_input_ids"),bh=a(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),vi=o("code"),wh=a("labels"),yh=a(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Vl=d(),$n=o("p"),xh=a("One can use "),Ha=o("a"),zh=a("T5ForConditionalGeneration"),$h=a(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Kl=d(),Va=o("ul"),Vt=o("li"),ki=o("p"),Eh=a("Unsupervised denoising training"),jh=d(),ge=o("p"),qh=a("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),bi=o("em"),Fh=a("a.k.a"),Mh=a(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),wi=o("em"),Ph=a("real"),Ch=a(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),yi=o("code"),Ah=a("<extra_id_0>"),Lh=a(`,
`),xi=o("code"),Nh=a("<extra_id_1>"),Ih=a(", \u2026 up to "),zi=o("code"),Dh=a("<extra_id_99>"),Sh=a(`. As a default, 100 sentinel tokens are available in
`),Ka=o("a"),Oh=a("T5Tokenizer"),Gh=a("."),Bh=d(),$i=o("p"),Uh=a(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Yl=d(),f(vo.$$.fragment),Jl=d(),En=o("p"),Wh=a("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),ko=o("a"),Rh=a("run_t5_mlm_flax.py"),Hh=a(` script in the Examples
directory.`),Zl=d(),Ya=o("ul"),bo=o("li"),Ei=o("p"),Vh=a("Supervised training"),Kh=d(),ji=o("p"),Yh=a(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Xl=d(),f(wo.$$.fragment),Ql=d(),se=o("p"),Jh=a("As you can see, only 2 inputs are required for the model in order to compute a loss: "),qi=o("code"),Zh=a("input_ids"),Xh=a(` (which are the
`),Fi=o("code"),Qh=a("input_ids"),eu=a(" of the encoded input sequence) and "),Mi=o("code"),tu=a("labels"),nu=a(" (which are the "),Pi=o("code"),ou=a("input_ids"),su=a(` of the encoded
target sequence). The model will automatically create the `),Ci=o("code"),au=a("decoder_input_ids"),ru=a(" based on the "),Ai=o("code"),iu=a("labels"),du=a(`, by
shifting them one position to the right and prepending the `),Li=o("code"),lu=a("config.decoder_start_token_id"),cu=a(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),ec=d(),xt=o("p"),pu=a(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ni=o("code"),hu=a("max_source_length"),uu=a(" and "),Ii=o("code"),mu=a("max_target_length"),fu=a(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),tc=d(),me=o("p"),_u=a("In addition, we must make sure that padding token id\u2019s of the "),Di=o("code"),gu=a("labels"),Tu=a(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Si=o("code"),vu=a("ignore_index"),ku=a(`
of the `),Oi=o("code"),bu=a("CrossEntropyLoss"),wu=a(". In Flax, one can use the "),Gi=o("code"),yu=a("decoder_attention_mask"),xu=a(` to ignore padded tokens from
the loss (see the `),yo=o("a"),zu=a("Flax summarization script"),$u=a(` for details). We also pass
`),Bi=o("code"),Eu=a("attention_mask"),ju=a(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),nc=d(),f(xo.$$.fragment),oc=d(),Ja=o("p"),qu=a("Additional training tips:"),sc=d(),zt=o("ul"),Ui=o("li"),zo=o("p"),Fu=a("T5 models need a slightly higher learning rate than the default one set in the "),Wi=o("code"),Mu=a("Trainer"),Pu=a(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Cu=d(),Ri=o("li"),Kt=o("p"),Au=a("According to "),$o=o("a"),Lu=a("this forum post"),Nu=a(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Eo=o("a"),Iu=a("paper"),Du=a(` for the task prefixes
used).`),Su=d(),Hi=o("li"),jo=o("p"),Ou=a(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Vi=o("em"),Gu=a("pad_to_multiple_of"),Bu=a(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),ac=d(),Za=o("a"),rc=d(),Yt=o("h2"),jn=o("a"),Ki=o("span"),f(qo.$$.fragment),Uu=d(),Yi=o("span"),Wu=a("Inference"),ic=d(),ht=o("p"),Ru=a("At inference time, it is recommended to use "),Xa=o("a"),Hu=a("generate()"),Vu=a(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Fo=o("a"),Ku=a("this blog post"),Yu=a(` to know all the details about generating text with Transformers.
There\u2019s also `),Mo=o("a"),Ju=a("this blog post"),Zu=a(` which explains how
generation works in general in encoder-decoder models.`),dc=d(),f(Po.$$.fragment),lc=d(),Ue=o("p"),Xu=a("Note that T5 uses the "),Ji=o("code"),Qu=a("pad_token_id"),em=a(" as the "),Zi=o("code"),tm=a("decoder_start_token_id"),nm=a(`, so when doing generation without using
`),Qa=o("a"),om=a("generate()"),sm=a(", make sure you start it with the "),Xi=o("code"),am=a("pad_token_id"),rm=a("."),cc=d(),er=o("p"),im=a("The example above only shows a single example. You can also do batched inference, like so:"),pc=d(),f(Co.$$.fragment),hc=d(),tr=o("a"),uc=d(),Jt=o("h2"),qn=o("a"),Qi=o("span"),f(Ao.$$.fragment),dm=d(),ed=o("span"),lm=a("Example scripts"),mc=d(),nr=o("p"),cm=a("T5 is supported by several example scripts, both for pre-training and fine-tuning."),fc=d(),Fn=o("ul"),td=o("li"),Zt=o("p"),pm=a("pre-training: the "),Lo=o("a"),hm=a("run_t5_mlm_flax.py"),um=a(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),No=o("a"),mm=a("t5_tokenizer_model.py"),fm=a(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),_m=d(),nd=o("li"),De=o("p"),gm=a("fine-tuning: T5 is supported by the official summarization scripts ("),Io=o("a"),Tm=a("PyTorch"),vm=a(", "),Do=o("a"),km=a("Tensorflow"),bm=a(", and "),So=o("a"),wm=a("Flax"),ym=a(`) and translation scripts
(`),Oo=o("a"),xm=a("PyTorch"),zm=a(" and "),Go=o("a"),$m=a("Tensorflow"),Em=a(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),_c=d(),Xt=o("h2"),Mn=o("a"),od=o("span"),f(Bo.$$.fragment),jm=d(),sd=o("span"),qm=a("T5Config"),gc=d(),gt=o("div"),f(Uo.$$.fragment),Fm=d(),Tt=o("p"),Mm=a("This is the configuration class to store the configuration of a "),or=o("a"),Pm=a("T5Model"),Cm=a(` or a
`),sr=o("a"),Am=a("TFT5Model"),Lm=a(`. It is used to instantiate a T5 model according to the specified arguments,
defining the model architecture. Instantiating a configuration with the defaults will yield a similar configuration
to that of the T5 `),Wo=o("a"),Nm=a("t5-small"),Im=a(" architecture."),Dm=d(),Qt=o("p"),Sm=a("Configuration objects inherit from "),ar=o("a"),Om=a("PretrainedConfig"),Gm=a(` and can be used to control the model
outputs. Read the documentation from `),rr=o("a"),Bm=a("PretrainedConfig"),Um=a(" for more information."),Tc=d(),en=o("h2"),Pn=o("a"),ad=o("span"),f(Ro.$$.fragment),Wm=d(),rd=o("span"),Rm=a("T5Tokenizer"),vc=d(),Z=o("div"),f(Ho.$$.fragment),Hm=d(),Vo=o("p"),Vm=a("Construct a T5 tokenizer. Based on "),Ko=o("a"),Km=a("SentencePiece"),Ym=a("."),Jm=d(),Yo=o("p"),Zm=a("This tokenizer inherits from "),ir=o("a"),Xm=a("PreTrainedTokenizer"),Qm=a(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),ef=d(),tn=o("p"),tf=a(`Attributes:
sp_model (`),id=o("code"),nf=a("SentencePieceProcessor"),of=a(`):
The `),dd=o("em"),sf=a("SentencePiece"),af=a(" processor that is used for every conversion (string, tokens and IDs)."),rf=d(),$t=o("div"),f(Jo.$$.fragment),df=d(),ld=o("p"),lf=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),cf=d(),Zo=o("ul"),dr=o("li"),pf=a("single sequence: "),cd=o("code"),hf=a("X </s>"),uf=d(),lr=o("li"),mf=a("pair of sequences: "),pd=o("code"),ff=a("A </s> B </s>"),_f=d(),Cn=o("div"),f(Xo.$$.fragment),gf=d(),Qo=o("p"),Tf=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hd=o("code"),vf=a("prepare_for_model"),kf=a(" method."),bf=d(),An=o("div"),f(es.$$.fragment),wf=d(),ud=o("p"),yf=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),xf=d(),md=o("div"),kc=d(),nn=o("h2"),Ln=o("a"),fd=o("span"),f(ts.$$.fragment),zf=d(),_d=o("span"),$f=a("T5TokenizerFast"),bc=d(),Se=o("div"),f(ns.$$.fragment),Ef=d(),on=o("p"),jf=a("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),gd=o("em"),qf=a("tokenizers"),Ff=a(" library). Based on "),os=o("a"),Mf=a("Unigram"),Pf=a("."),Cf=d(),ss=o("p"),Af=a("This tokenizer inherits from "),cr=o("a"),Lf=a("PreTrainedTokenizerFast"),Nf=a(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),If=d(),Et=o("div"),f(as.$$.fragment),Df=d(),Td=o("p"),Sf=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Of=d(),rs=o("ul"),pr=o("li"),Gf=a("single sequence: "),vd=o("code"),Bf=a("X </s>"),Uf=d(),hr=o("li"),Wf=a("pair of sequences: "),kd=o("code"),Rf=a("A </s> B </s>"),Hf=d(),Nn=o("div"),f(is.$$.fragment),Vf=d(),bd=o("p"),Kf=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),wc=d(),sn=o("h2"),In=o("a"),wd=o("span"),f(ds.$$.fragment),Yf=d(),yd=o("span"),Jf=a("T5Model"),yc=d(),X=o("div"),f(ls.$$.fragment),Zf=d(),xd=o("p"),Xf=a("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Qf=d(),cs=o("p"),e_=a("The T5 model was proposed in "),ps=o("a"),t_=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),n_=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),o_=d(),hs=o("p"),s_=a("This model inherits from "),ur=o("a"),a_=a("PreTrainedModel"),r_=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),i_=d(),us=o("p"),d_=a("This model is also a PyTorch "),ms=o("a"),l_=a("torch.nn.Module"),c_=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),p_=d(),We=o("div"),f(fs.$$.fragment),h_=d(),an=o("p"),u_=a("The "),mr=o("a"),m_=a("T5Model"),f_=a(" forward method, overrides the "),zd=o("code"),__=a("__call__"),g_=a(" special method."),T_=d(),f(Dn.$$.fragment),v_=d(),$d=o("p"),k_=a("Example:"),b_=d(),f(_s.$$.fragment),w_=d(),Re=o("div"),f(gs.$$.fragment),y_=d(),Ed=o("p"),x_=a("This is an experimental feature and is a subject to change at a moment\u2019s notice."),z_=d(),jd=o("p"),$_=a(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),E_=d(),qd=o("p"),j_=a("Example:"),q_=d(),f(Ts.$$.fragment),F_=d(),ut=o("div"),f(vs.$$.fragment),M_=d(),Fd=o("p"),P_=a("Moves the model to cpu from a model parallel state."),C_=d(),Md=o("p"),A_=a("Example:"),L_=d(),f(ks.$$.fragment),xc=d(),rn=o("h2"),Sn=o("a"),Pd=o("span"),f(bs.$$.fragment),N_=d(),Cd=o("span"),I_=a("T5ForConditionalGeneration"),zc=d(),Q=o("div"),f(ws.$$.fragment),D_=d(),ys=o("p"),S_=a("T5 Model with a "),Ad=o("code"),O_=a("language modeling"),G_=a(" head on top."),B_=d(),xs=o("p"),U_=a("The T5 model was proposed in "),zs=o("a"),W_=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),R_=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),H_=d(),$s=o("p"),V_=a("This model inherits from "),fr=o("a"),K_=a("PreTrainedModel"),Y_=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),J_=d(),Es=o("p"),Z_=a("This model is also a PyTorch "),js=o("a"),X_=a("torch.nn.Module"),Q_=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),eg=d(),He=o("div"),f(qs.$$.fragment),tg=d(),dn=o("p"),ng=a("The "),_r=o("a"),og=a("T5ForConditionalGeneration"),sg=a(" forward method, overrides the "),Ld=o("code"),ag=a("__call__"),rg=a(" special method."),ig=d(),f(On.$$.fragment),dg=d(),Nd=o("p"),lg=a("Examples:"),cg=d(),f(Fs.$$.fragment),pg=d(),Ve=o("div"),f(Ms.$$.fragment),hg=d(),Id=o("p"),ug=a("This is an experimental feature and is a subject to change at a moment\u2019s notice."),mg=d(),Dd=o("p"),fg=a(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),_g=d(),Sd=o("p"),gg=a("Example:"),Tg=d(),f(Ps.$$.fragment),vg=d(),mt=o("div"),f(Cs.$$.fragment),kg=d(),Od=o("p"),bg=a("Moves the model to cpu from a model parallel state."),wg=d(),Gd=o("p"),yg=a("Example:"),xg=d(),f(As.$$.fragment),$c=d(),ln=o("h2"),Gn=o("a"),Bd=o("span"),f(Ls.$$.fragment),zg=d(),Ud=o("span"),$g=a("T5EncoderModel"),Ec=d(),ee=o("div"),f(Ns.$$.fragment),Eg=d(),Wd=o("p"),jg=a("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),qg=d(),Is=o("p"),Fg=a("The T5 model was proposed in "),Ds=o("a"),Mg=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Pg=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Cg=d(),Ss=o("p"),Ag=a("This model inherits from "),gr=o("a"),Lg=a("PreTrainedModel"),Ng=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ig=d(),Os=o("p"),Dg=a("This model is also a PyTorch "),Gs=o("a"),Sg=a("torch.nn.Module"),Og=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Gg=d(),Ke=o("div"),f(Bs.$$.fragment),Bg=d(),cn=o("p"),Ug=a("The "),Tr=o("a"),Wg=a("T5EncoderModel"),Rg=a(" forward method, overrides the "),Rd=o("code"),Hg=a("__call__"),Vg=a(" special method."),Kg=d(),f(Bn.$$.fragment),Yg=d(),Hd=o("p"),Jg=a("Example:"),Zg=d(),f(Us.$$.fragment),Xg=d(),Ye=o("div"),f(Ws.$$.fragment),Qg=d(),Vd=o("p"),eT=a("This is an experimental feature and is a subject to change at a moment\u2019s notice."),tT=d(),Kd=o("p"),nT=a(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),oT=d(),Yd=o("p"),sT=a("Example:"),aT=d(),f(Rs.$$.fragment),rT=d(),ft=o("div"),f(Hs.$$.fragment),iT=d(),Jd=o("p"),dT=a("Moves the model to cpu from a model parallel state."),lT=d(),Zd=o("p"),cT=a("Example:"),pT=d(),f(Vs.$$.fragment),jc=d(),pn=o("h2"),Un=o("a"),Xd=o("span"),f(Ks.$$.fragment),hT=d(),Qd=o("span"),uT=a("TFT5Model"),qc=d(),de=o("div"),f(Ys.$$.fragment),mT=d(),el=o("p"),fT=a("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),_T=d(),Js=o("p"),gT=a("The T5 model was proposed in "),Zs=o("a"),TT=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),vT=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),kT=d(),Xs=o("p"),bT=a("This model inherits from "),vr=o("a"),wT=a("TFPreTrainedModel"),yT=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),xT=d(),Qs=o("p"),zT=a("This model is also a "),ea=o("a"),$T=a("tf.keras.Model"),ET=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),jT=d(),f(Wn.$$.fragment),qT=d(),Je=o("div"),f(ta.$$.fragment),FT=d(),hn=o("p"),MT=a("The "),kr=o("a"),PT=a("TFT5Model"),CT=a(" forward method, overrides the "),tl=o("code"),AT=a("__call__"),LT=a(" special method."),NT=d(),f(Rn.$$.fragment),IT=d(),nl=o("p"),DT=a("Examples:"),ST=d(),f(na.$$.fragment),Fc=d(),un=o("h2"),Hn=o("a"),ol=o("span"),f(oa.$$.fragment),OT=d(),sl=o("span"),GT=a("TFT5ForConditionalGeneration"),Mc=d(),le=o("div"),f(sa.$$.fragment),BT=d(),aa=o("p"),UT=a("T5 Model with a "),al=o("code"),WT=a("language modeling"),RT=a(" head on top."),HT=d(),ra=o("p"),VT=a("The T5 model was proposed in "),ia=o("a"),KT=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),YT=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),JT=d(),da=o("p"),ZT=a("This model inherits from "),br=o("a"),XT=a("TFPreTrainedModel"),QT=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ev=d(),la=o("p"),tv=a("This model is also a "),ca=o("a"),nv=a("tf.keras.Model"),ov=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),sv=d(),f(Vn.$$.fragment),av=d(),Ze=o("div"),f(pa.$$.fragment),rv=d(),mn=o("p"),iv=a("The "),wr=o("a"),dv=a("TFT5ForConditionalGeneration"),lv=a(" forward method, overrides the "),rl=o("code"),cv=a("__call__"),pv=a(" special method."),hv=d(),f(Kn.$$.fragment),uv=d(),il=o("p"),mv=a("Examples:"),fv=d(),f(ha.$$.fragment),Pc=d(),fn=o("h2"),Yn=o("a"),dl=o("span"),f(ua.$$.fragment),_v=d(),ll=o("span"),gv=a("TFT5EncoderModel"),Cc=d(),ce=o("div"),f(ma.$$.fragment),Tv=d(),cl=o("p"),vv=a("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),kv=d(),fa=o("p"),bv=a("The T5 model was proposed in "),_a=o("a"),wv=a("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),yv=a(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),xv=d(),ga=o("p"),zv=a("This model inherits from "),yr=o("a"),$v=a("TFPreTrainedModel"),Ev=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),jv=d(),Ta=o("p"),qv=a("This model is also a "),va=o("a"),Fv=a("tf.keras.Model"),Mv=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Pv=d(),f(Jn.$$.fragment),Cv=d(),Xe=o("div"),f(ka.$$.fragment),Av=d(),_n=o("p"),Lv=a("The "),xr=o("a"),Nv=a("TFT5EncoderModel"),Iv=a(" forward method, overrides the "),pl=o("code"),Dv=a("__call__"),Sv=a(" special method."),Ov=d(),f(Zn.$$.fragment),Gv=d(),hl=o("p"),Bv=a("Examples:"),Uv=d(),f(ba.$$.fragment),Ac=d(),gn=o("h2"),Xn=o("a"),ul=o("span"),f(wa.$$.fragment),Wv=d(),ml=o("span"),Rv=a("FlaxT5Model"),Lc=d(),vt=o("div"),Qe=o("div"),f(ya.$$.fragment),Hv=d(),Tn=o("p"),Vv=a("The "),fl=o("code"),Kv=a("FlaxT5PreTrainedModel"),Yv=a(" forward method, overrides the "),_l=o("code"),Jv=a("__call__"),Zv=a(" special method."),Xv=d(),f(Qn.$$.fragment),Qv=d(),gl=o("p"),ek=a("Example:"),tk=d(),f(xa.$$.fragment),nk=d(),jt=o("div"),f(za.$$.fragment),ok=d(),Tl=o("p"),sk=a("Example:"),ak=d(),f($a.$$.fragment),rk=d(),qt=o("div"),f(Ea.$$.fragment),ik=d(),vl=o("p"),dk=a("Example:"),lk=d(),f(ja.$$.fragment),Nc=d(),vn=o("h2"),eo=o("a"),kl=o("span"),f(qa.$$.fragment),ck=d(),bl=o("span"),pk=a("FlaxT5ForConditionalGeneration"),Ic=d(),kt=o("div"),et=o("div"),f(Fa.$$.fragment),hk=d(),kn=o("p"),uk=a("The "),wl=o("code"),mk=a("FlaxT5PreTrainedModel"),fk=a(" forward method, overrides the "),yl=o("code"),_k=a("__call__"),gk=a(" special method."),Tk=d(),f(to.$$.fragment),vk=d(),xl=o("p"),kk=a("Example:"),bk=d(),f(Ma.$$.fragment),wk=d(),Ft=o("div"),f(Pa.$$.fragment),yk=d(),zl=o("p"),xk=a("Example:"),zk=d(),f(Ca.$$.fragment),$k=d(),Mt=o("div"),f(Aa.$$.fragment),Ek=d(),$l=o("p"),jk=a("Example:"),qk=d(),f(La.$$.fragment),this.h()},l(n){const h=Jw('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),$=l(n),b=s(n,"H1",{class:!0});var Na=i(b);y=s(Na,"A",{id:!0,class:!0,href:!0});var El=i(y);z=s(El,"SPAN",{});var jl=i(z);_(x.$$.fragment,jl),jl.forEach(t),El.forEach(t),w=l(Na),E=s(Na,"SPAN",{});var ql=i(E);Ee=r(ql,"T5"),ql.forEach(t),Na.forEach(t),ae=l(n),j=s(n,"H2",{class:!0});var Ia=i(j);te=s(Ia,"A",{id:!0,class:!0,href:!0});var Fl=i(te);O=s(Fl,"SPAN",{});var Ml=i(O);_(re.$$.fragment,Ml),Ml.forEach(t),Fl.forEach(t),je=l(Ia),G=s(Ia,"SPAN",{});var Pl=i(G);qe=r(Pl,"Overview"),Pl.forEach(t),Ia.forEach(t),Te=l(n),B=s(n,"P",{});var Da=i(B);I=r(Da,"The T5 model was presented in "),ie=s(Da,"A",{href:!0,rel:!0});var Cl=i(ie);pe=r(Cl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Cl.forEach(t),F=r(Da,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Da.forEach(t),C=l(n),he=s(n,"P",{});var Al=i(he);K=r(Al,"The abstract from the paper is the following:"),Al.forEach(t),ve=l(n),ue=s(n,"P",{});var Lk=i(ue);U=s(Lk,"EM",{});var Nk=i(U);Fe=r(Nk,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Nk.forEach(t),Lk.forEach(t),ke=l(n),M=s(n,"P",{});var Ik=i(M);Me=r(Ik,"Tips:"),Ik.forEach(t),H=l(n),V=s(n,"UL",{});var zr=i(V);fe=s(zr,"LI",{});var Dk=i(fe);A=s(Dk,"P",{});var $r=i(A);Pe=r($r,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),_e=s($r,"EM",{});var Sk=i(_e);D=r(Sk,"translate English to German: \u2026"),Sk.forEach(t),Ce=r($r,`,
for summarization: `),W=s($r,"EM",{});var Ok=i(W);Ae=r(Ok,"summarize: \u2026"),Ok.forEach(t),m=r($r,"."),$r.forEach(t),Dk.forEach(t),q=l(zr),ne=s(zr,"LI",{});var Gk=i(ne);Oe=s(Gk,"P",{});var Bk=i(Oe);rt=r(Bk,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Bk.forEach(t),Gk.forEach(t),S=l(zr),Ge=s(zr,"LI",{});var Uk=i(Ge);oe=s(Uk,"P",{});var no=i(oe);it=r(no,"See the "),L=s(no,"A",{href:!0});var Wk=i(L);Y=r(Wk,"training"),Wk.forEach(t),dt=r(no,", "),Le=s(no,"A",{href:!0});var Rk=i(Le);J=r(Rk,"inference"),Rk.forEach(t),lt=r(no," and "),Ne=s(no,"A",{href:!0});var Hk=i(Ne);Ie=r(Hk,"scripts"),Hk.forEach(t),ct=r(no," sections below for all details regarding usage."),no.forEach(t),Uk.forEach(t),zr.forEach(t),Dl=l(n),Sa=s(n,"P",{});var Vk=i(Sa);Lp=r(Vk,"T5 comes in different sizes:"),Vk.forEach(t),Sl=l(n),Be=s(n,"UL",{});var Pt=i(Be);ei=s(Pt,"LI",{});var Kk=i(ei);ti=s(Kk,"P",{});var Yk=i(ti);co=s(Yk,"A",{href:!0,rel:!0});var Jk=i(co);Np=r(Jk,"t5-small"),Jk.forEach(t),Yk.forEach(t),Kk.forEach(t),Ip=l(Pt),ni=s(Pt,"LI",{});var Zk=i(ni);oi=s(Zk,"P",{});var Xk=i(oi);po=s(Xk,"A",{href:!0,rel:!0});var Qk=i(po);Dp=r(Qk,"t5-base"),Qk.forEach(t),Xk.forEach(t),Zk.forEach(t),Sp=l(Pt),si=s(Pt,"LI",{});var e5=i(si);ai=s(e5,"P",{});var t5=i(ai);ho=s(t5,"A",{href:!0,rel:!0});var n5=i(ho);Op=r(n5,"t5-large"),n5.forEach(t),t5.forEach(t),e5.forEach(t),Gp=l(Pt),ri=s(Pt,"LI",{});var o5=i(ri);ii=s(o5,"P",{});var s5=i(ii);uo=s(s5,"A",{href:!0,rel:!0});var a5=i(uo);Bp=r(a5,"t5-3b"),a5.forEach(t),s5.forEach(t),o5.forEach(t),Up=l(Pt),di=s(Pt,"LI",{});var r5=i(di);Oa=s(r5,"P",{});var Fk=i(Oa);mo=s(Fk,"A",{href:!0,rel:!0});var i5=i(mo);Wp=r(i5,"t5-11b"),i5.forEach(t),Rp=r(Fk,"."),Fk.forEach(t),r5.forEach(t),Pt.forEach(t),Ol=l(n),Ga=s(n,"P",{});var d5=i(Ga);Hp=r(d5,"Based on the original T5 model, Google has released some follow-up works:"),d5.forEach(t),Gl=l(n),wt=s(n,"UL",{});var Er=i(wt);li=s(Er,"LI",{});var l5=i(li);bn=s(l5,"P",{});var Ll=i(bn);ci=s(Ll,"STRONG",{});var c5=i(ci);Vp=r(c5,"T5v1.1"),c5.forEach(t),Kp=r(Ll,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ba=s(Ll,"A",{href:!0});var p5=i(Ba);Yp=r(p5,"here"),p5.forEach(t),Jp=r(Ll,"."),Ll.forEach(t),l5.forEach(t),Zp=l(Er),pi=s(Er,"LI",{});var h5=i(pi);wn=s(h5,"P",{});var Nl=i(wn);hi=s(Nl,"STRONG",{});var u5=i(hi);Xp=r(u5,"mT5"),u5.forEach(t),Qp=r(Nl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ua=s(Nl,"A",{href:!0});var m5=i(Ua);eh=r(m5,"here"),m5.forEach(t),th=r(Nl,"."),Nl.forEach(t),h5.forEach(t),nh=l(Er),ui=s(Er,"LI",{});var f5=i(ui);yn=s(f5,"P",{});var Il=i(yn);mi=s(Il,"STRONG",{});var _5=i(mi);oh=r(_5,"byT5"),_5.forEach(t),sh=r(Il,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Wa=s(Il,"A",{href:!0});var g5=i(Wa);ah=r(g5,"here"),g5.forEach(t),rh=r(Il,"."),Il.forEach(t),f5.forEach(t),Er.forEach(t),Bl=l(n),xn=s(n,"P",{});var Sc=i(xn);ih=r(Sc,"All checkpoints can be found on the "),fo=s(Sc,"A",{href:!0,rel:!0});var T5=i(fo);dh=r(T5,"hub"),T5.forEach(t),lh=r(Sc,"."),Sc.forEach(t),Ul=l(n),yt=s(n,"P",{});var jr=i(yt);ch=r(jr,"This model was contributed by "),_o=s(jr,"A",{href:!0,rel:!0});var v5=i(_o);ph=r(v5,"thomwolf"),v5.forEach(t),hh=r(jr,". The original code can be found "),go=s(jr,"A",{href:!0,rel:!0});var k5=i(go);uh=r(k5,"here"),k5.forEach(t),mh=r(jr,"."),jr.forEach(t),Wl=l(n),Ra=s(n,"A",{id:!0}),i(Ra).forEach(t),Rl=l(n),Ht=s(n,"H2",{class:!0});var Oc=i(Ht);zn=s(Oc,"A",{id:!0,class:!0,href:!0});var b5=i(zn);fi=s(b5,"SPAN",{});var w5=i(fi);_(To.$$.fragment,w5),w5.forEach(t),b5.forEach(t),fh=l(Oc),_i=s(Oc,"SPAN",{});var y5=i(_i);_h=r(y5,"Training"),y5.forEach(t),Oc.forEach(t),Hl=l(n),pt=s(n,"P",{});var oo=i(pt);gh=r(oo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),gi=s(oo,"CODE",{});var x5=i(gi);Th=r(x5,"input_ids"),x5.forEach(t),vh=r(oo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ti=s(oo,"CODE",{});var z5=i(Ti);kh=r(z5,"decoder_input_ids"),z5.forEach(t),bh=r(oo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),vi=s(oo,"CODE",{});var $5=i(vi);wh=r($5,"labels"),$5.forEach(t),yh=r(oo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),oo.forEach(t),Vl=l(n),$n=s(n,"P",{});var Gc=i($n);xh=r(Gc,"One can use "),Ha=s(Gc,"A",{href:!0});var E5=i(Ha);zh=r(E5,"T5ForConditionalGeneration"),E5.forEach(t),$h=r(Gc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Gc.forEach(t),Kl=l(n),Va=s(n,"UL",{});var j5=i(Va);Vt=s(j5,"LI",{});var qr=i(Vt);ki=s(qr,"P",{});var q5=i(ki);Eh=r(q5,"Unsupervised denoising training"),q5.forEach(t),jh=l(qr),ge=s(qr,"P",{});var tt=i(ge);qh=r(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),bi=s(tt,"EM",{});var F5=i(bi);Fh=r(F5,"a.k.a"),F5.forEach(t),Mh=r(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),wi=s(tt,"EM",{});var M5=i(wi);Ph=r(M5,"real"),M5.forEach(t),Ch=r(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),yi=s(tt,"CODE",{});var P5=i(yi);Ah=r(P5,"<extra_id_0>"),P5.forEach(t),Lh=r(tt,`,
`),xi=s(tt,"CODE",{});var C5=i(xi);Nh=r(C5,"<extra_id_1>"),C5.forEach(t),Ih=r(tt,", \u2026 up to "),zi=s(tt,"CODE",{});var A5=i(zi);Dh=r(A5,"<extra_id_99>"),A5.forEach(t),Sh=r(tt,`. As a default, 100 sentinel tokens are available in
`),Ka=s(tt,"A",{href:!0});var L5=i(Ka);Oh=r(L5,"T5Tokenizer"),L5.forEach(t),Gh=r(tt,"."),tt.forEach(t),Bh=l(qr),$i=s(qr,"P",{});var N5=i($i);Uh=r(N5,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),N5.forEach(t),qr.forEach(t),j5.forEach(t),Yl=l(n),_(vo.$$.fragment,n),Jl=l(n),En=s(n,"P",{});var Bc=i(En);Wh=r(Bc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),ko=s(Bc,"A",{href:!0,rel:!0});var I5=i(ko);Rh=r(I5,"run_t5_mlm_flax.py"),I5.forEach(t),Hh=r(Bc,` script in the Examples
directory.`),Bc.forEach(t),Zl=l(n),Ya=s(n,"UL",{});var D5=i(Ya);bo=s(D5,"LI",{});var Uc=i(bo);Ei=s(Uc,"P",{});var S5=i(Ei);Vh=r(S5,"Supervised training"),S5.forEach(t),Kh=l(Uc),ji=s(Uc,"P",{});var O5=i(ji);Yh=r(O5,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),O5.forEach(t),Uc.forEach(t),D5.forEach(t),Xl=l(n),_(wo.$$.fragment,n),Ql=l(n),se=s(n,"P",{});var be=i(se);Jh=r(be,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),qi=s(be,"CODE",{});var G5=i(qi);Zh=r(G5,"input_ids"),G5.forEach(t),Xh=r(be,` (which are the
`),Fi=s(be,"CODE",{});var B5=i(Fi);Qh=r(B5,"input_ids"),B5.forEach(t),eu=r(be," of the encoded input sequence) and "),Mi=s(be,"CODE",{});var U5=i(Mi);tu=r(U5,"labels"),U5.forEach(t),nu=r(be," (which are the "),Pi=s(be,"CODE",{});var W5=i(Pi);ou=r(W5,"input_ids"),W5.forEach(t),su=r(be,` of the encoded
target sequence). The model will automatically create the `),Ci=s(be,"CODE",{});var R5=i(Ci);au=r(R5,"decoder_input_ids"),R5.forEach(t),ru=r(be," based on the "),Ai=s(be,"CODE",{});var H5=i(Ai);iu=r(H5,"labels"),H5.forEach(t),du=r(be,`, by
shifting them one position to the right and prepending the `),Li=s(be,"CODE",{});var V5=i(Li);lu=r(V5,"config.decoder_start_token_id"),V5.forEach(t),cu=r(be,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),be.forEach(t),ec=l(n),xt=s(n,"P",{});var Fr=i(xt);pu=r(Fr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ni=s(Fr,"CODE",{});var K5=i(Ni);hu=r(K5,"max_source_length"),K5.forEach(t),uu=r(Fr," and "),Ii=s(Fr,"CODE",{});var Y5=i(Ii);mu=r(Y5,"max_target_length"),Y5.forEach(t),fu=r(Fr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Fr.forEach(t),tc=l(n),me=s(n,"P",{});var nt=i(me);_u=r(nt,"In addition, we must make sure that padding token id\u2019s of the "),Di=s(nt,"CODE",{});var J5=i(Di);gu=r(J5,"labels"),J5.forEach(t),Tu=r(nt,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Si=s(nt,"CODE",{});var Z5=i(Si);vu=r(Z5,"ignore_index"),Z5.forEach(t),ku=r(nt,`
of the `),Oi=s(nt,"CODE",{});var X5=i(Oi);bu=r(X5,"CrossEntropyLoss"),X5.forEach(t),wu=r(nt,". In Flax, one can use the "),Gi=s(nt,"CODE",{});var Q5=i(Gi);yu=r(Q5,"decoder_attention_mask"),Q5.forEach(t),xu=r(nt,` to ignore padded tokens from
the loss (see the `),yo=s(nt,"A",{href:!0,rel:!0});var eb=i(yo);zu=r(eb,"Flax summarization script"),eb.forEach(t),$u=r(nt,` for details). We also pass
`),Bi=s(nt,"CODE",{});var tb=i(Bi);Eu=r(tb,"attention_mask"),tb.forEach(t),ju=r(nt,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),nt.forEach(t),nc=l(n),_(xo.$$.fragment,n),oc=l(n),Ja=s(n,"P",{});var nb=i(Ja);qu=r(nb,"Additional training tips:"),nb.forEach(t),sc=l(n),zt=s(n,"UL",{});var Mr=i(zt);Ui=s(Mr,"LI",{});var ob=i(Ui);zo=s(ob,"P",{});var Wc=i(zo);Fu=r(Wc,"T5 models need a slightly higher learning rate than the default one set in the "),Wi=s(Wc,"CODE",{});var sb=i(Wi);Mu=r(sb,"Trainer"),sb.forEach(t),Pu=r(Wc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Wc.forEach(t),ob.forEach(t),Cu=l(Mr),Ri=s(Mr,"LI",{});var ab=i(Ri);Kt=s(ab,"P",{});var Pr=i(Kt);Au=r(Pr,"According to "),$o=s(Pr,"A",{href:!0,rel:!0});var rb=i($o);Lu=r(rb,"this forum post"),rb.forEach(t),Nu=r(Pr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Eo=s(Pr,"A",{href:!0,rel:!0});var ib=i(Eo);Iu=r(ib,"paper"),ib.forEach(t),Du=r(Pr,` for the task prefixes
used).`),Pr.forEach(t),ab.forEach(t),Su=l(Mr),Hi=s(Mr,"LI",{});var db=i(Hi);jo=s(db,"P",{});var Rc=i(jo);Ou=r(Rc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Vi=s(Rc,"EM",{});var lb=i(Vi);Gu=r(lb,"pad_to_multiple_of"),lb.forEach(t),Bu=r(Rc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Rc.forEach(t),db.forEach(t),Mr.forEach(t),ac=l(n),Za=s(n,"A",{id:!0}),i(Za).forEach(t),rc=l(n),Yt=s(n,"H2",{class:!0});var Hc=i(Yt);jn=s(Hc,"A",{id:!0,class:!0,href:!0});var cb=i(jn);Ki=s(cb,"SPAN",{});var pb=i(Ki);_(qo.$$.fragment,pb),pb.forEach(t),cb.forEach(t),Uu=l(Hc),Yi=s(Hc,"SPAN",{});var hb=i(Yi);Wu=r(hb,"Inference"),hb.forEach(t),Hc.forEach(t),ic=l(n),ht=s(n,"P",{});var so=i(ht);Ru=r(so,"At inference time, it is recommended to use "),Xa=s(so,"A",{href:!0});var ub=i(Xa);Hu=r(ub,"generate()"),ub.forEach(t),Vu=r(so,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Fo=s(so,"A",{href:!0,rel:!0});var mb=i(Fo);Ku=r(mb,"this blog post"),mb.forEach(t),Yu=r(so,` to know all the details about generating text with Transformers.
There\u2019s also `),Mo=s(so,"A",{href:!0,rel:!0});var fb=i(Mo);Ju=r(fb,"this blog post"),fb.forEach(t),Zu=r(so,` which explains how
generation works in general in encoder-decoder models.`),so.forEach(t),dc=l(n),_(Po.$$.fragment,n),lc=l(n),Ue=s(n,"P",{});var Ct=i(Ue);Xu=r(Ct,"Note that T5 uses the "),Ji=s(Ct,"CODE",{});var _b=i(Ji);Qu=r(_b,"pad_token_id"),_b.forEach(t),em=r(Ct," as the "),Zi=s(Ct,"CODE",{});var gb=i(Zi);tm=r(gb,"decoder_start_token_id"),gb.forEach(t),nm=r(Ct,`, so when doing generation without using
`),Qa=s(Ct,"A",{href:!0});var Tb=i(Qa);om=r(Tb,"generate()"),Tb.forEach(t),sm=r(Ct,", make sure you start it with the "),Xi=s(Ct,"CODE",{});var vb=i(Xi);am=r(vb,"pad_token_id"),vb.forEach(t),rm=r(Ct,"."),Ct.forEach(t),cc=l(n),er=s(n,"P",{});var kb=i(er);im=r(kb,"The example above only shows a single example. You can also do batched inference, like so:"),kb.forEach(t),pc=l(n),_(Co.$$.fragment,n),hc=l(n),tr=s(n,"A",{id:!0}),i(tr).forEach(t),uc=l(n),Jt=s(n,"H2",{class:!0});var Vc=i(Jt);qn=s(Vc,"A",{id:!0,class:!0,href:!0});var bb=i(qn);Qi=s(bb,"SPAN",{});var wb=i(Qi);_(Ao.$$.fragment,wb),wb.forEach(t),bb.forEach(t),dm=l(Vc),ed=s(Vc,"SPAN",{});var yb=i(ed);lm=r(yb,"Example scripts"),yb.forEach(t),Vc.forEach(t),mc=l(n),nr=s(n,"P",{});var xb=i(nr);cm=r(xb,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),xb.forEach(t),fc=l(n),Fn=s(n,"UL",{});var Kc=i(Fn);td=s(Kc,"LI",{});var zb=i(td);Zt=s(zb,"P",{});var Cr=i(Zt);pm=r(Cr,"pre-training: the "),Lo=s(Cr,"A",{href:!0,rel:!0});var $b=i(Lo);hm=r($b,"run_t5_mlm_flax.py"),$b.forEach(t),um=r(Cr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),No=s(Cr,"A",{href:!0,rel:!0});var Eb=i(No);mm=r(Eb,"t5_tokenizer_model.py"),Eb.forEach(t),fm=r(Cr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Cr.forEach(t),zb.forEach(t),_m=l(Kc),nd=s(Kc,"LI",{});var jb=i(nd);De=s(jb,"P",{});var _t=i(De);gm=r(_t,"fine-tuning: T5 is supported by the official summarization scripts ("),Io=s(_t,"A",{href:!0,rel:!0});var qb=i(Io);Tm=r(qb,"PyTorch"),qb.forEach(t),vm=r(_t,", "),Do=s(_t,"A",{href:!0,rel:!0});var Fb=i(Do);km=r(Fb,"Tensorflow"),Fb.forEach(t),bm=r(_t,", and "),So=s(_t,"A",{href:!0,rel:!0});var Mb=i(So);wm=r(Mb,"Flax"),Mb.forEach(t),ym=r(_t,`) and translation scripts
(`),Oo=s(_t,"A",{href:!0,rel:!0});var Pb=i(Oo);xm=r(Pb,"PyTorch"),Pb.forEach(t),zm=r(_t," and "),Go=s(_t,"A",{href:!0,rel:!0});var Cb=i(Go);$m=r(Cb,"Tensorflow"),Cb.forEach(t),Em=r(_t,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),_t.forEach(t),jb.forEach(t),Kc.forEach(t),_c=l(n),Xt=s(n,"H2",{class:!0});var Yc=i(Xt);Mn=s(Yc,"A",{id:!0,class:!0,href:!0});var Ab=i(Mn);od=s(Ab,"SPAN",{});var Lb=i(od);_(Bo.$$.fragment,Lb),Lb.forEach(t),Ab.forEach(t),jm=l(Yc),sd=s(Yc,"SPAN",{});var Nb=i(sd);qm=r(Nb,"T5Config"),Nb.forEach(t),Yc.forEach(t),gc=l(n),gt=s(n,"DIV",{class:!0});var Ar=i(gt);_(Uo.$$.fragment,Ar),Fm=l(Ar),Tt=s(Ar,"P",{});var ao=i(Tt);Mm=r(ao,"This is the configuration class to store the configuration of a "),or=s(ao,"A",{href:!0});var Ib=i(or);Pm=r(Ib,"T5Model"),Ib.forEach(t),Cm=r(ao,` or a
`),sr=s(ao,"A",{href:!0});var Db=i(sr);Am=r(Db,"TFT5Model"),Db.forEach(t),Lm=r(ao,`. It is used to instantiate a T5 model according to the specified arguments,
defining the model architecture. Instantiating a configuration with the defaults will yield a similar configuration
to that of the T5 `),Wo=s(ao,"A",{href:!0,rel:!0});var Sb=i(Wo);Nm=r(Sb,"t5-small"),Sb.forEach(t),Im=r(ao," architecture."),ao.forEach(t),Dm=l(Ar),Qt=s(Ar,"P",{});var Lr=i(Qt);Sm=r(Lr,"Configuration objects inherit from "),ar=s(Lr,"A",{href:!0});var Ob=i(ar);Om=r(Ob,"PretrainedConfig"),Ob.forEach(t),Gm=r(Lr,` and can be used to control the model
outputs. Read the documentation from `),rr=s(Lr,"A",{href:!0});var Gb=i(rr);Bm=r(Gb,"PretrainedConfig"),Gb.forEach(t),Um=r(Lr," for more information."),Lr.forEach(t),Ar.forEach(t),Tc=l(n),en=s(n,"H2",{class:!0});var Jc=i(en);Pn=s(Jc,"A",{id:!0,class:!0,href:!0});var Bb=i(Pn);ad=s(Bb,"SPAN",{});var Ub=i(ad);_(Ro.$$.fragment,Ub),Ub.forEach(t),Bb.forEach(t),Wm=l(Jc),rd=s(Jc,"SPAN",{});var Wb=i(rd);Rm=r(Wb,"T5Tokenizer"),Wb.forEach(t),Jc.forEach(t),vc=l(n),Z=s(n,"DIV",{class:!0});var we=i(Z);_(Ho.$$.fragment,we),Hm=l(we),Vo=s(we,"P",{});var Zc=i(Vo);Vm=r(Zc,"Construct a T5 tokenizer. Based on "),Ko=s(Zc,"A",{href:!0,rel:!0});var Rb=i(Ko);Km=r(Rb,"SentencePiece"),Rb.forEach(t),Ym=r(Zc,"."),Zc.forEach(t),Jm=l(we),Yo=s(we,"P",{});var Xc=i(Yo);Zm=r(Xc,"This tokenizer inherits from "),ir=s(Xc,"A",{href:!0});var Hb=i(ir);Xm=r(Hb,"PreTrainedTokenizer"),Hb.forEach(t),Qm=r(Xc,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Xc.forEach(t),ef=l(we),tn=s(we,"P",{});var Nr=i(tn);tf=r(Nr,`Attributes:
sp_model (`),id=s(Nr,"CODE",{});var Vb=i(id);nf=r(Vb,"SentencePieceProcessor"),Vb.forEach(t),of=r(Nr,`):
The `),dd=s(Nr,"EM",{});var Kb=i(dd);sf=r(Kb,"SentencePiece"),Kb.forEach(t),af=r(Nr," processor that is used for every conversion (string, tokens and IDs)."),Nr.forEach(t),rf=l(we),$t=s(we,"DIV",{class:!0});var Ir=i($t);_(Jo.$$.fragment,Ir),df=l(Ir),ld=s(Ir,"P",{});var Yb=i(ld);lf=r(Yb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Yb.forEach(t),cf=l(Ir),Zo=s(Ir,"UL",{});var Qc=i(Zo);dr=s(Qc,"LI",{});var Mk=i(dr);pf=r(Mk,"single sequence: "),cd=s(Mk,"CODE",{});var Jb=i(cd);hf=r(Jb,"X </s>"),Jb.forEach(t),Mk.forEach(t),uf=l(Qc),lr=s(Qc,"LI",{});var Pk=i(lr);mf=r(Pk,"pair of sequences: "),pd=s(Pk,"CODE",{});var Zb=i(pd);ff=r(Zb,"A </s> B </s>"),Zb.forEach(t),Pk.forEach(t),Qc.forEach(t),Ir.forEach(t),_f=l(we),Cn=s(we,"DIV",{class:!0});var ep=i(Cn);_(Xo.$$.fragment,ep),gf=l(ep),Qo=s(ep,"P",{});var tp=i(Qo);Tf=r(tp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hd=s(tp,"CODE",{});var Xb=i(hd);vf=r(Xb,"prepare_for_model"),Xb.forEach(t),kf=r(tp," method."),tp.forEach(t),ep.forEach(t),bf=l(we),An=s(we,"DIV",{class:!0});var np=i(An);_(es.$$.fragment,np),wf=l(np),ud=s(np,"P",{});var Qb=i(ud);yf=r(Qb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Qb.forEach(t),np.forEach(t),xf=l(we),md=s(we,"DIV",{class:!0}),i(md).forEach(t),we.forEach(t),kc=l(n),nn=s(n,"H2",{class:!0});var op=i(nn);Ln=s(op,"A",{id:!0,class:!0,href:!0});var e1=i(Ln);fd=s(e1,"SPAN",{});var t1=i(fd);_(ts.$$.fragment,t1),t1.forEach(t),e1.forEach(t),zf=l(op),_d=s(op,"SPAN",{});var n1=i(_d);$f=r(n1,"T5TokenizerFast"),n1.forEach(t),op.forEach(t),bc=l(n),Se=s(n,"DIV",{class:!0});var At=i(Se);_(ns.$$.fragment,At),Ef=l(At),on=s(At,"P",{});var Dr=i(on);jf=r(Dr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),gd=s(Dr,"EM",{});var o1=i(gd);qf=r(o1,"tokenizers"),o1.forEach(t),Ff=r(Dr," library). Based on "),os=s(Dr,"A",{href:!0,rel:!0});var s1=i(os);Mf=r(s1,"Unigram"),s1.forEach(t),Pf=r(Dr,"."),Dr.forEach(t),Cf=l(At),ss=s(At,"P",{});var sp=i(ss);Af=r(sp,"This tokenizer inherits from "),cr=s(sp,"A",{href:!0});var a1=i(cr);Lf=r(a1,"PreTrainedTokenizerFast"),a1.forEach(t),Nf=r(sp,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),sp.forEach(t),If=l(At),Et=s(At,"DIV",{class:!0});var Sr=i(Et);_(as.$$.fragment,Sr),Df=l(Sr),Td=s(Sr,"P",{});var r1=i(Td);Sf=r(r1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),r1.forEach(t),Of=l(Sr),rs=s(Sr,"UL",{});var ap=i(rs);pr=s(ap,"LI",{});var Ck=i(pr);Gf=r(Ck,"single sequence: "),vd=s(Ck,"CODE",{});var i1=i(vd);Bf=r(i1,"X </s>"),i1.forEach(t),Ck.forEach(t),Uf=l(ap),hr=s(ap,"LI",{});var Ak=i(hr);Wf=r(Ak,"pair of sequences: "),kd=s(Ak,"CODE",{});var d1=i(kd);Rf=r(d1,"A </s> B </s>"),d1.forEach(t),Ak.forEach(t),ap.forEach(t),Sr.forEach(t),Hf=l(At),Nn=s(At,"DIV",{class:!0});var rp=i(Nn);_(is.$$.fragment,rp),Vf=l(rp),bd=s(rp,"P",{});var l1=i(bd);Kf=r(l1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),l1.forEach(t),rp.forEach(t),At.forEach(t),wc=l(n),sn=s(n,"H2",{class:!0});var ip=i(sn);In=s(ip,"A",{id:!0,class:!0,href:!0});var c1=i(In);wd=s(c1,"SPAN",{});var p1=i(wd);_(ds.$$.fragment,p1),p1.forEach(t),c1.forEach(t),Yf=l(ip),yd=s(ip,"SPAN",{});var h1=i(yd);Jf=r(h1,"T5Model"),h1.forEach(t),ip.forEach(t),yc=l(n),X=s(n,"DIV",{class:!0});var ye=i(X);_(ls.$$.fragment,ye),Zf=l(ye),xd=s(ye,"P",{});var u1=i(xd);Xf=r(u1,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),u1.forEach(t),Qf=l(ye),cs=s(ye,"P",{});var dp=i(cs);e_=r(dp,"The T5 model was proposed in "),ps=s(dp,"A",{href:!0,rel:!0});var m1=i(ps);t_=r(m1,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),m1.forEach(t),n_=r(dp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),dp.forEach(t),o_=l(ye),hs=s(ye,"P",{});var lp=i(hs);s_=r(lp,"This model inherits from "),ur=s(lp,"A",{href:!0});var f1=i(ur);a_=r(f1,"PreTrainedModel"),f1.forEach(t),r_=r(lp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),lp.forEach(t),i_=l(ye),us=s(ye,"P",{});var cp=i(us);d_=r(cp,"This model is also a PyTorch "),ms=s(cp,"A",{href:!0,rel:!0});var _1=i(ms);l_=r(_1,"torch.nn.Module"),_1.forEach(t),c_=r(cp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),cp.forEach(t),p_=l(ye),We=s(ye,"DIV",{class:!0});var Lt=i(We);_(fs.$$.fragment,Lt),h_=l(Lt),an=s(Lt,"P",{});var Or=i(an);u_=r(Or,"The "),mr=s(Or,"A",{href:!0});var g1=i(mr);m_=r(g1,"T5Model"),g1.forEach(t),f_=r(Or," forward method, overrides the "),zd=s(Or,"CODE",{});var T1=i(zd);__=r(T1,"__call__"),T1.forEach(t),g_=r(Or," special method."),Or.forEach(t),T_=l(Lt),_(Dn.$$.fragment,Lt),v_=l(Lt),$d=s(Lt,"P",{});var v1=i($d);k_=r(v1,"Example:"),v1.forEach(t),b_=l(Lt),_(_s.$$.fragment,Lt),Lt.forEach(t),w_=l(ye),Re=s(ye,"DIV",{class:!0});var Nt=i(Re);_(gs.$$.fragment,Nt),y_=l(Nt),Ed=s(Nt,"P",{});var k1=i(Ed);x_=r(k1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),k1.forEach(t),z_=l(Nt),jd=s(Nt,"P",{});var b1=i(jd);$_=r(b1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),b1.forEach(t),E_=l(Nt),qd=s(Nt,"P",{});var w1=i(qd);j_=r(w1,"Example:"),w1.forEach(t),q_=l(Nt),_(Ts.$$.fragment,Nt),Nt.forEach(t),F_=l(ye),ut=s(ye,"DIV",{class:!0});var ro=i(ut);_(vs.$$.fragment,ro),M_=l(ro),Fd=s(ro,"P",{});var y1=i(Fd);P_=r(y1,"Moves the model to cpu from a model parallel state."),y1.forEach(t),C_=l(ro),Md=s(ro,"P",{});var x1=i(Md);A_=r(x1,"Example:"),x1.forEach(t),L_=l(ro),_(ks.$$.fragment,ro),ro.forEach(t),ye.forEach(t),xc=l(n),rn=s(n,"H2",{class:!0});var pp=i(rn);Sn=s(pp,"A",{id:!0,class:!0,href:!0});var z1=i(Sn);Pd=s(z1,"SPAN",{});var $1=i(Pd);_(bs.$$.fragment,$1),$1.forEach(t),z1.forEach(t),N_=l(pp),Cd=s(pp,"SPAN",{});var E1=i(Cd);I_=r(E1,"T5ForConditionalGeneration"),E1.forEach(t),pp.forEach(t),zc=l(n),Q=s(n,"DIV",{class:!0});var xe=i(Q);_(ws.$$.fragment,xe),D_=l(xe),ys=s(xe,"P",{});var hp=i(ys);S_=r(hp,"T5 Model with a "),Ad=s(hp,"CODE",{});var j1=i(Ad);O_=r(j1,"language modeling"),j1.forEach(t),G_=r(hp," head on top."),hp.forEach(t),B_=l(xe),xs=s(xe,"P",{});var up=i(xs);U_=r(up,"The T5 model was proposed in "),zs=s(up,"A",{href:!0,rel:!0});var q1=i(zs);W_=r(q1,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),q1.forEach(t),R_=r(up,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),up.forEach(t),H_=l(xe),$s=s(xe,"P",{});var mp=i($s);V_=r(mp,"This model inherits from "),fr=s(mp,"A",{href:!0});var F1=i(fr);K_=r(F1,"PreTrainedModel"),F1.forEach(t),Y_=r(mp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),mp.forEach(t),J_=l(xe),Es=s(xe,"P",{});var fp=i(Es);Z_=r(fp,"This model is also a PyTorch "),js=s(fp,"A",{href:!0,rel:!0});var M1=i(js);X_=r(M1,"torch.nn.Module"),M1.forEach(t),Q_=r(fp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),fp.forEach(t),eg=l(xe),He=s(xe,"DIV",{class:!0});var It=i(He);_(qs.$$.fragment,It),tg=l(It),dn=s(It,"P",{});var Gr=i(dn);ng=r(Gr,"The "),_r=s(Gr,"A",{href:!0});var P1=i(_r);og=r(P1,"T5ForConditionalGeneration"),P1.forEach(t),sg=r(Gr," forward method, overrides the "),Ld=s(Gr,"CODE",{});var C1=i(Ld);ag=r(C1,"__call__"),C1.forEach(t),rg=r(Gr," special method."),Gr.forEach(t),ig=l(It),_(On.$$.fragment,It),dg=l(It),Nd=s(It,"P",{});var A1=i(Nd);lg=r(A1,"Examples:"),A1.forEach(t),cg=l(It),_(Fs.$$.fragment,It),It.forEach(t),pg=l(xe),Ve=s(xe,"DIV",{class:!0});var Dt=i(Ve);_(Ms.$$.fragment,Dt),hg=l(Dt),Id=s(Dt,"P",{});var L1=i(Id);ug=r(L1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),L1.forEach(t),mg=l(Dt),Dd=s(Dt,"P",{});var N1=i(Dd);fg=r(N1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),N1.forEach(t),_g=l(Dt),Sd=s(Dt,"P",{});var I1=i(Sd);gg=r(I1,"Example:"),I1.forEach(t),Tg=l(Dt),_(Ps.$$.fragment,Dt),Dt.forEach(t),vg=l(xe),mt=s(xe,"DIV",{class:!0});var io=i(mt);_(Cs.$$.fragment,io),kg=l(io),Od=s(io,"P",{});var D1=i(Od);bg=r(D1,"Moves the model to cpu from a model parallel state."),D1.forEach(t),wg=l(io),Gd=s(io,"P",{});var S1=i(Gd);yg=r(S1,"Example:"),S1.forEach(t),xg=l(io),_(As.$$.fragment,io),io.forEach(t),xe.forEach(t),$c=l(n),ln=s(n,"H2",{class:!0});var _p=i(ln);Gn=s(_p,"A",{id:!0,class:!0,href:!0});var O1=i(Gn);Bd=s(O1,"SPAN",{});var G1=i(Bd);_(Ls.$$.fragment,G1),G1.forEach(t),O1.forEach(t),zg=l(_p),Ud=s(_p,"SPAN",{});var B1=i(Ud);$g=r(B1,"T5EncoderModel"),B1.forEach(t),_p.forEach(t),Ec=l(n),ee=s(n,"DIV",{class:!0});var ze=i(ee);_(Ns.$$.fragment,ze),Eg=l(ze),Wd=s(ze,"P",{});var U1=i(Wd);jg=r(U1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),U1.forEach(t),qg=l(ze),Is=s(ze,"P",{});var gp=i(Is);Fg=r(gp,"The T5 model was proposed in "),Ds=s(gp,"A",{href:!0,rel:!0});var W1=i(Ds);Mg=r(W1,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),W1.forEach(t),Pg=r(gp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),gp.forEach(t),Cg=l(ze),Ss=s(ze,"P",{});var Tp=i(Ss);Ag=r(Tp,"This model inherits from "),gr=s(Tp,"A",{href:!0});var R1=i(gr);Lg=r(R1,"PreTrainedModel"),R1.forEach(t),Ng=r(Tp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Tp.forEach(t),Ig=l(ze),Os=s(ze,"P",{});var vp=i(Os);Dg=r(vp,"This model is also a PyTorch "),Gs=s(vp,"A",{href:!0,rel:!0});var H1=i(Gs);Sg=r(H1,"torch.nn.Module"),H1.forEach(t),Og=r(vp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),vp.forEach(t),Gg=l(ze),Ke=s(ze,"DIV",{class:!0});var St=i(Ke);_(Bs.$$.fragment,St),Bg=l(St),cn=s(St,"P",{});var Br=i(cn);Ug=r(Br,"The "),Tr=s(Br,"A",{href:!0});var V1=i(Tr);Wg=r(V1,"T5EncoderModel"),V1.forEach(t),Rg=r(Br," forward method, overrides the "),Rd=s(Br,"CODE",{});var K1=i(Rd);Hg=r(K1,"__call__"),K1.forEach(t),Vg=r(Br," special method."),Br.forEach(t),Kg=l(St),_(Bn.$$.fragment,St),Yg=l(St),Hd=s(St,"P",{});var Y1=i(Hd);Jg=r(Y1,"Example:"),Y1.forEach(t),Zg=l(St),_(Us.$$.fragment,St),St.forEach(t),Xg=l(ze),Ye=s(ze,"DIV",{class:!0});var Ot=i(Ye);_(Ws.$$.fragment,Ot),Qg=l(Ot),Vd=s(Ot,"P",{});var J1=i(Vd);eT=r(J1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),J1.forEach(t),tT=l(Ot),Kd=s(Ot,"P",{});var Z1=i(Kd);nT=r(Z1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Z1.forEach(t),oT=l(Ot),Yd=s(Ot,"P",{});var X1=i(Yd);sT=r(X1,"Example:"),X1.forEach(t),aT=l(Ot),_(Rs.$$.fragment,Ot),Ot.forEach(t),rT=l(ze),ft=s(ze,"DIV",{class:!0});var lo=i(ft);_(Hs.$$.fragment,lo),iT=l(lo),Jd=s(lo,"P",{});var Q1=i(Jd);dT=r(Q1,"Moves the model to cpu from a model parallel state."),Q1.forEach(t),lT=l(lo),Zd=s(lo,"P",{});var ew=i(Zd);cT=r(ew,"Example:"),ew.forEach(t),pT=l(lo),_(Vs.$$.fragment,lo),lo.forEach(t),ze.forEach(t),jc=l(n),pn=s(n,"H2",{class:!0});var kp=i(pn);Un=s(kp,"A",{id:!0,class:!0,href:!0});var tw=i(Un);Xd=s(tw,"SPAN",{});var nw=i(Xd);_(Ks.$$.fragment,nw),nw.forEach(t),tw.forEach(t),hT=l(kp),Qd=s(kp,"SPAN",{});var ow=i(Qd);uT=r(ow,"TFT5Model"),ow.forEach(t),kp.forEach(t),qc=l(n),de=s(n,"DIV",{class:!0});var ot=i(de);_(Ys.$$.fragment,ot),mT=l(ot),el=s(ot,"P",{});var sw=i(el);fT=r(sw,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),sw.forEach(t),_T=l(ot),Js=s(ot,"P",{});var bp=i(Js);gT=r(bp,"The T5 model was proposed in "),Zs=s(bp,"A",{href:!0,rel:!0});var aw=i(Zs);TT=r(aw,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),aw.forEach(t),vT=r(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),bp.forEach(t),kT=l(ot),Xs=s(ot,"P",{});var wp=i(Xs);bT=r(wp,"This model inherits from "),vr=s(wp,"A",{href:!0});var rw=i(vr);wT=r(rw,"TFPreTrainedModel"),rw.forEach(t),yT=r(wp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),wp.forEach(t),xT=l(ot),Qs=s(ot,"P",{});var yp=i(Qs);zT=r(yp,"This model is also a "),ea=s(yp,"A",{href:!0,rel:!0});var iw=i(ea);$T=r(iw,"tf.keras.Model"),iw.forEach(t),ET=r(yp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),yp.forEach(t),jT=l(ot),_(Wn.$$.fragment,ot),qT=l(ot),Je=s(ot,"DIV",{class:!0});var Gt=i(Je);_(ta.$$.fragment,Gt),FT=l(Gt),hn=s(Gt,"P",{});var Ur=i(hn);MT=r(Ur,"The "),kr=s(Ur,"A",{href:!0});var dw=i(kr);PT=r(dw,"TFT5Model"),dw.forEach(t),CT=r(Ur," forward method, overrides the "),tl=s(Ur,"CODE",{});var lw=i(tl);AT=r(lw,"__call__"),lw.forEach(t),LT=r(Ur," special method."),Ur.forEach(t),NT=l(Gt),_(Rn.$$.fragment,Gt),IT=l(Gt),nl=s(Gt,"P",{});var cw=i(nl);DT=r(cw,"Examples:"),cw.forEach(t),ST=l(Gt),_(na.$$.fragment,Gt),Gt.forEach(t),ot.forEach(t),Fc=l(n),un=s(n,"H2",{class:!0});var xp=i(un);Hn=s(xp,"A",{id:!0,class:!0,href:!0});var pw=i(Hn);ol=s(pw,"SPAN",{});var hw=i(ol);_(oa.$$.fragment,hw),hw.forEach(t),pw.forEach(t),OT=l(xp),sl=s(xp,"SPAN",{});var uw=i(sl);GT=r(uw,"TFT5ForConditionalGeneration"),uw.forEach(t),xp.forEach(t),Mc=l(n),le=s(n,"DIV",{class:!0});var st=i(le);_(sa.$$.fragment,st),BT=l(st),aa=s(st,"P",{});var zp=i(aa);UT=r(zp,"T5 Model with a "),al=s(zp,"CODE",{});var mw=i(al);WT=r(mw,"language modeling"),mw.forEach(t),RT=r(zp," head on top."),zp.forEach(t),HT=l(st),ra=s(st,"P",{});var $p=i(ra);VT=r($p,"The T5 model was proposed in "),ia=s($p,"A",{href:!0,rel:!0});var fw=i(ia);KT=r(fw,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),fw.forEach(t),YT=r($p,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),$p.forEach(t),JT=l(st),da=s(st,"P",{});var Ep=i(da);ZT=r(Ep,"This model inherits from "),br=s(Ep,"A",{href:!0});var _w=i(br);XT=r(_w,"TFPreTrainedModel"),_w.forEach(t),QT=r(Ep,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ep.forEach(t),ev=l(st),la=s(st,"P",{});var jp=i(la);tv=r(jp,"This model is also a "),ca=s(jp,"A",{href:!0,rel:!0});var gw=i(ca);nv=r(gw,"tf.keras.Model"),gw.forEach(t),ov=r(jp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),jp.forEach(t),sv=l(st),_(Vn.$$.fragment,st),av=l(st),Ze=s(st,"DIV",{class:!0});var Bt=i(Ze);_(pa.$$.fragment,Bt),rv=l(Bt),mn=s(Bt,"P",{});var Wr=i(mn);iv=r(Wr,"The "),wr=s(Wr,"A",{href:!0});var Tw=i(wr);dv=r(Tw,"TFT5ForConditionalGeneration"),Tw.forEach(t),lv=r(Wr," forward method, overrides the "),rl=s(Wr,"CODE",{});var vw=i(rl);cv=r(vw,"__call__"),vw.forEach(t),pv=r(Wr," special method."),Wr.forEach(t),hv=l(Bt),_(Kn.$$.fragment,Bt),uv=l(Bt),il=s(Bt,"P",{});var kw=i(il);mv=r(kw,"Examples:"),kw.forEach(t),fv=l(Bt),_(ha.$$.fragment,Bt),Bt.forEach(t),st.forEach(t),Pc=l(n),fn=s(n,"H2",{class:!0});var qp=i(fn);Yn=s(qp,"A",{id:!0,class:!0,href:!0});var bw=i(Yn);dl=s(bw,"SPAN",{});var ww=i(dl);_(ua.$$.fragment,ww),ww.forEach(t),bw.forEach(t),_v=l(qp),ll=s(qp,"SPAN",{});var yw=i(ll);gv=r(yw,"TFT5EncoderModel"),yw.forEach(t),qp.forEach(t),Cc=l(n),ce=s(n,"DIV",{class:!0});var at=i(ce);_(ma.$$.fragment,at),Tv=l(at),cl=s(at,"P",{});var xw=i(cl);vv=r(xw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),xw.forEach(t),kv=l(at),fa=s(at,"P",{});var Fp=i(fa);bv=r(Fp,"The T5 model was proposed in "),_a=s(Fp,"A",{href:!0,rel:!0});var zw=i(_a);wv=r(zw,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),zw.forEach(t),yv=r(Fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a text-to-text
denoising generative setting.`),Fp.forEach(t),xv=l(at),ga=s(at,"P",{});var Mp=i(ga);zv=r(Mp,"This model inherits from "),yr=s(Mp,"A",{href:!0});var $w=i(yr);$v=r($w,"TFPreTrainedModel"),$w.forEach(t),Ev=r(Mp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Mp.forEach(t),jv=l(at),Ta=s(at,"P",{});var Pp=i(Ta);qv=r(Pp,"This model is also a "),va=s(Pp,"A",{href:!0,rel:!0});var Ew=i(va);Fv=r(Ew,"tf.keras.Model"),Ew.forEach(t),Mv=r(Pp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Pp.forEach(t),Pv=l(at),_(Jn.$$.fragment,at),Cv=l(at),Xe=s(at,"DIV",{class:!0});var Ut=i(Xe);_(ka.$$.fragment,Ut),Av=l(Ut),_n=s(Ut,"P",{});var Rr=i(_n);Lv=r(Rr,"The "),xr=s(Rr,"A",{href:!0});var jw=i(xr);Nv=r(jw,"TFT5EncoderModel"),jw.forEach(t),Iv=r(Rr," forward method, overrides the "),pl=s(Rr,"CODE",{});var qw=i(pl);Dv=r(qw,"__call__"),qw.forEach(t),Sv=r(Rr," special method."),Rr.forEach(t),Ov=l(Ut),_(Zn.$$.fragment,Ut),Gv=l(Ut),hl=s(Ut,"P",{});var Fw=i(hl);Bv=r(Fw,"Examples:"),Fw.forEach(t),Uv=l(Ut),_(ba.$$.fragment,Ut),Ut.forEach(t),at.forEach(t),Ac=l(n),gn=s(n,"H2",{class:!0});var Cp=i(gn);Xn=s(Cp,"A",{id:!0,class:!0,href:!0});var Mw=i(Xn);ul=s(Mw,"SPAN",{});var Pw=i(ul);_(wa.$$.fragment,Pw),Pw.forEach(t),Mw.forEach(t),Wv=l(Cp),ml=s(Cp,"SPAN",{});var Cw=i(ml);Rv=r(Cw,"FlaxT5Model"),Cw.forEach(t),Cp.forEach(t),Lc=l(n),vt=s(n,"DIV",{class:!0});var Hr=i(vt);Qe=s(Hr,"DIV",{class:!0});var Wt=i(Qe);_(ya.$$.fragment,Wt),Hv=l(Wt),Tn=s(Wt,"P",{});var Vr=i(Tn);Vv=r(Vr,"The "),fl=s(Vr,"CODE",{});var Aw=i(fl);Kv=r(Aw,"FlaxT5PreTrainedModel"),Aw.forEach(t),Yv=r(Vr," forward method, overrides the "),_l=s(Vr,"CODE",{});var Lw=i(_l);Jv=r(Lw,"__call__"),Lw.forEach(t),Zv=r(Vr," special method."),Vr.forEach(t),Xv=l(Wt),_(Qn.$$.fragment,Wt),Qv=l(Wt),gl=s(Wt,"P",{});var Nw=i(gl);ek=r(Nw,"Example:"),Nw.forEach(t),tk=l(Wt),_(xa.$$.fragment,Wt),Wt.forEach(t),nk=l(Hr),jt=s(Hr,"DIV",{class:!0});var Kr=i(jt);_(za.$$.fragment,Kr),ok=l(Kr),Tl=s(Kr,"P",{});var Iw=i(Tl);sk=r(Iw,"Example:"),Iw.forEach(t),ak=l(Kr),_($a.$$.fragment,Kr),Kr.forEach(t),rk=l(Hr),qt=s(Hr,"DIV",{class:!0});var Yr=i(qt);_(Ea.$$.fragment,Yr),ik=l(Yr),vl=s(Yr,"P",{});var Dw=i(vl);dk=r(Dw,"Example:"),Dw.forEach(t),lk=l(Yr),_(ja.$$.fragment,Yr),Yr.forEach(t),Hr.forEach(t),Nc=l(n),vn=s(n,"H2",{class:!0});var Ap=i(vn);eo=s(Ap,"A",{id:!0,class:!0,href:!0});var Sw=i(eo);kl=s(Sw,"SPAN",{});var Ow=i(kl);_(qa.$$.fragment,Ow),Ow.forEach(t),Sw.forEach(t),ck=l(Ap),bl=s(Ap,"SPAN",{});var Gw=i(bl);pk=r(Gw,"FlaxT5ForConditionalGeneration"),Gw.forEach(t),Ap.forEach(t),Ic=l(n),kt=s(n,"DIV",{class:!0});var Jr=i(kt);et=s(Jr,"DIV",{class:!0});var Rt=i(et);_(Fa.$$.fragment,Rt),hk=l(Rt),kn=s(Rt,"P",{});var Zr=i(kn);uk=r(Zr,"The "),wl=s(Zr,"CODE",{});var Bw=i(wl);mk=r(Bw,"FlaxT5PreTrainedModel"),Bw.forEach(t),fk=r(Zr," forward method, overrides the "),yl=s(Zr,"CODE",{});var Uw=i(yl);_k=r(Uw,"__call__"),Uw.forEach(t),gk=r(Zr," special method."),Zr.forEach(t),Tk=l(Rt),_(to.$$.fragment,Rt),vk=l(Rt),xl=s(Rt,"P",{});var Ww=i(xl);kk=r(Ww,"Example:"),Ww.forEach(t),bk=l(Rt),_(Ma.$$.fragment,Rt),Rt.forEach(t),wk=l(Jr),Ft=s(Jr,"DIV",{class:!0});var Xr=i(Ft);_(Pa.$$.fragment,Xr),yk=l(Xr),zl=s(Xr,"P",{});var Rw=i(zl);xk=r(Rw,"Example:"),Rw.forEach(t),zk=l(Xr),_(Ca.$$.fragment,Xr),Xr.forEach(t),$k=l(Jr),Mt=s(Jr,"DIV",{class:!0});var Qr=i(Mt);_(Aa.$$.fragment,Qr),Ek=l(Qr),$l=s(Qr,"P",{});var Hw=i($l);jk=r(Hw,"Example:"),Hw.forEach(t),qk=l(Qr),_(La.$$.fragment,Qr),Qr.forEach(t),Jr.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(ly)),c(y,"id","t5"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#t5"),c(b,"class","relative group"),c(te,"id","overview"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#overview"),c(j,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ie,"rel","nofollow"),c(L,"href","/docs/transformers/v4.15.0/en/model_doc/t5#training"),c(Le,"href","/docs/transformers/v4.15.0/en/model_doc/t5#inference"),c(Ne,"href","/docs/transformers/v4.15.0/en/model_doc/t5#scripts"),c(co,"href","https://huggingface.co/t5-small"),c(co,"rel","nofollow"),c(po,"href","https://huggingface.co/t5-base"),c(po,"rel","nofollow"),c(ho,"href","https://huggingface.co/t5-large"),c(ho,"rel","nofollow"),c(uo,"href","https://huggingface.co/t5-3b"),c(uo,"rel","nofollow"),c(mo,"href","https://huggingface.co/t5-11b"),c(mo,"rel","nofollow"),c(Ba,"href","/docs/transformers/v4.15.0/en/t5v1.1"),c(Ua,"href","/docs/transformers/v4.15.0/en/mt5"),c(Wa,"href","/docs/transformers/v4.15.0/en/byt5"),c(fo,"href","https://huggingface.co/models?search=t5"),c(fo,"rel","nofollow"),c(_o,"href","https://huggingface.co/thomwolf"),c(_o,"rel","nofollow"),c(go,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(go,"rel","nofollow"),c(Ra,"id","training"),c(zn,"id","training"),c(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zn,"href","#training"),c(Ht,"class","relative group"),c(Ha,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(Ka,"href","/docs/transformers/v4.15.0/en/model_doc/mt5#transformers.T5Tokenizer"),c(ko,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c(ko,"rel","nofollow"),c(yo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(yo,"rel","nofollow"),c($o,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c($o,"rel","nofollow"),c(Eo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Eo,"rel","nofollow"),c(Za,"id","inference"),c(jn,"id","inference"),c(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jn,"href","#inference"),c(Yt,"class","relative group"),c(Xa,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(Fo,"href","https://huggingface.co/blog/how-to-generate"),c(Fo,"rel","nofollow"),c(Mo,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Mo,"rel","nofollow"),c(Qa,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(tr,"id","scripts"),c(qn,"id","example-scripts"),c(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qn,"href","#example-scripts"),c(Jt,"class","relative group"),c(Lo,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Lo,"rel","nofollow"),c(No,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(No,"rel","nofollow"),c(Io,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(Io,"rel","nofollow"),c(Do,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Do,"rel","nofollow"),c(So,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(So,"rel","nofollow"),c(Oo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Oo,"rel","nofollow"),c(Go,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Go,"rel","nofollow"),c(Mn,"id","transformers.T5Config"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#transformers.T5Config"),c(Xt,"class","relative group"),c(or,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Model"),c(sr,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.TFT5Model"),c(Wo,"href","https://huggingface.co/t5-small"),c(Wo,"rel","nofollow"),c(ar,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(rr,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(gt,"class","docstring"),c(Pn,"id","transformers.T5Tokenizer"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#transformers.T5Tokenizer"),c(en,"class","relative group"),c(Ko,"href","https://github.com/google/sentencepiece"),c(Ko,"rel","nofollow"),c(ir,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c($t,"class","docstring"),c(Cn,"class","docstring"),c(An,"class","docstring"),c(md,"class","docstring"),c(Z,"class","docstring"),c(Ln,"id","transformers.T5TokenizerFast"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5TokenizerFast"),c(nn,"class","relative group"),c(os,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(os,"rel","nofollow"),c(cr,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Et,"class","docstring"),c(Nn,"class","docstring"),c(Se,"class","docstring"),c(In,"id","transformers.T5Model"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5Model"),c(sn,"class","relative group"),c(ps,"href","https://arxiv.org/abs/1910.10683"),c(ps,"rel","nofollow"),c(ur,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ms,"rel","nofollow"),c(mr,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5Model"),c(We,"class","docstring"),c(Re,"class","docstring"),c(ut,"class","docstring"),c(X,"class","docstring"),c(Sn,"id","transformers.T5ForConditionalGeneration"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.T5ForConditionalGeneration"),c(rn,"class","relative group"),c(zs,"href","https://arxiv.org/abs/1910.10683"),c(zs,"rel","nofollow"),c(fr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(js,"rel","nofollow"),c(_r,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(mt,"class","docstring"),c(Q,"class","docstring"),c(Gn,"id","transformers.T5EncoderModel"),c(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gn,"href","#transformers.T5EncoderModel"),c(ln,"class","relative group"),c(Ds,"href","https://arxiv.org/abs/1910.10683"),c(Ds,"rel","nofollow"),c(gr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gs,"rel","nofollow"),c(Tr,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(ft,"class","docstring"),c(ee,"class","docstring"),c(Un,"id","transformers.TFT5Model"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.TFT5Model"),c(pn,"class","relative group"),c(Zs,"href","https://arxiv.org/abs/1910.10683"),c(Zs,"rel","nofollow"),c(vr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ea,"rel","nofollow"),c(kr,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.TFT5Model"),c(Je,"class","docstring"),c(de,"class","docstring"),c(Hn,"id","transformers.TFT5ForConditionalGeneration"),c(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Hn,"href","#transformers.TFT5ForConditionalGeneration"),c(un,"class","relative group"),c(ia,"href","https://arxiv.org/abs/1910.10683"),c(ia,"rel","nofollow"),c(br,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ca,"rel","nofollow"),c(wr,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Ze,"class","docstring"),c(le,"class","docstring"),c(Yn,"id","transformers.TFT5EncoderModel"),c(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yn,"href","#transformers.TFT5EncoderModel"),c(fn,"class","relative group"),c(_a,"href","https://arxiv.org/abs/1910.10683"),c(_a,"rel","nofollow"),c(yr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(va,"rel","nofollow"),c(xr,"href","/docs/transformers/v4.15.0/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(Xn,"id","transformers.FlaxT5Model"),c(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xn,"href","#transformers.FlaxT5Model"),c(gn,"class","relative group"),c(Qe,"class","docstring"),c(jt,"class","docstring"),c(qt,"class","docstring"),c(vt,"class","docstring"),c(eo,"id","transformers.FlaxT5ForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxT5ForConditionalGeneration"),c(vn,"class","relative group"),c(et,"class","docstring"),c(Ft,"class","docstring"),c(Mt,"class","docstring"),c(kt,"class","docstring")},m(n,h){e(document.head,u),p(n,$,h),p(n,b,h),e(b,y),e(y,z),g(x,z,null),e(b,w),e(b,E),e(E,Ee),p(n,ae,h),p(n,j,h),e(j,te),e(te,O),g(re,O,null),e(j,je),e(j,G),e(G,qe),p(n,Te,h),p(n,B,h),e(B,I),e(B,ie),e(ie,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,ve,h),p(n,ue,h),e(ue,U),e(U,Fe),p(n,ke,h),p(n,M,h),e(M,Me),p(n,H,h),p(n,V,h),e(V,fe),e(fe,A),e(A,Pe),e(A,_e),e(_e,D),e(A,Ce),e(A,W),e(W,Ae),e(A,m),e(V,q),e(V,ne),e(ne,Oe),e(Oe,rt),e(V,S),e(V,Ge),e(Ge,oe),e(oe,it),e(oe,L),e(L,Y),e(oe,dt),e(oe,Le),e(Le,J),e(oe,lt),e(oe,Ne),e(Ne,Ie),e(oe,ct),p(n,Dl,h),p(n,Sa,h),e(Sa,Lp),p(n,Sl,h),p(n,Be,h),e(Be,ei),e(ei,ti),e(ti,co),e(co,Np),e(Be,Ip),e(Be,ni),e(ni,oi),e(oi,po),e(po,Dp),e(Be,Sp),e(Be,si),e(si,ai),e(ai,ho),e(ho,Op),e(Be,Gp),e(Be,ri),e(ri,ii),e(ii,uo),e(uo,Bp),e(Be,Up),e(Be,di),e(di,Oa),e(Oa,mo),e(mo,Wp),e(Oa,Rp),p(n,Ol,h),p(n,Ga,h),e(Ga,Hp),p(n,Gl,h),p(n,wt,h),e(wt,li),e(li,bn),e(bn,ci),e(ci,Vp),e(bn,Kp),e(bn,Ba),e(Ba,Yp),e(bn,Jp),e(wt,Zp),e(wt,pi),e(pi,wn),e(wn,hi),e(hi,Xp),e(wn,Qp),e(wn,Ua),e(Ua,eh),e(wn,th),e(wt,nh),e(wt,ui),e(ui,yn),e(yn,mi),e(mi,oh),e(yn,sh),e(yn,Wa),e(Wa,ah),e(yn,rh),p(n,Bl,h),p(n,xn,h),e(xn,ih),e(xn,fo),e(fo,dh),e(xn,lh),p(n,Ul,h),p(n,yt,h),e(yt,ch),e(yt,_o),e(_o,ph),e(yt,hh),e(yt,go),e(go,uh),e(yt,mh),p(n,Wl,h),p(n,Ra,h),p(n,Rl,h),p(n,Ht,h),e(Ht,zn),e(zn,fi),g(To,fi,null),e(Ht,fh),e(Ht,_i),e(_i,_h),p(n,Hl,h),p(n,pt,h),e(pt,gh),e(pt,gi),e(gi,Th),e(pt,vh),e(pt,Ti),e(Ti,kh),e(pt,bh),e(pt,vi),e(vi,wh),e(pt,yh),p(n,Vl,h),p(n,$n,h),e($n,xh),e($n,Ha),e(Ha,zh),e($n,$h),p(n,Kl,h),p(n,Va,h),e(Va,Vt),e(Vt,ki),e(ki,Eh),e(Vt,jh),e(Vt,ge),e(ge,qh),e(ge,bi),e(bi,Fh),e(ge,Mh),e(ge,wi),e(wi,Ph),e(ge,Ch),e(ge,yi),e(yi,Ah),e(ge,Lh),e(ge,xi),e(xi,Nh),e(ge,Ih),e(ge,zi),e(zi,Dh),e(ge,Sh),e(ge,Ka),e(Ka,Oh),e(ge,Gh),e(Vt,Bh),e(Vt,$i),e($i,Uh),p(n,Yl,h),g(vo,n,h),p(n,Jl,h),p(n,En,h),e(En,Wh),e(En,ko),e(ko,Rh),e(En,Hh),p(n,Zl,h),p(n,Ya,h),e(Ya,bo),e(bo,Ei),e(Ei,Vh),e(bo,Kh),e(bo,ji),e(ji,Yh),p(n,Xl,h),g(wo,n,h),p(n,Ql,h),p(n,se,h),e(se,Jh),e(se,qi),e(qi,Zh),e(se,Xh),e(se,Fi),e(Fi,Qh),e(se,eu),e(se,Mi),e(Mi,tu),e(se,nu),e(se,Pi),e(Pi,ou),e(se,su),e(se,Ci),e(Ci,au),e(se,ru),e(se,Ai),e(Ai,iu),e(se,du),e(se,Li),e(Li,lu),e(se,cu),p(n,ec,h),p(n,xt,h),e(xt,pu),e(xt,Ni),e(Ni,hu),e(xt,uu),e(xt,Ii),e(Ii,mu),e(xt,fu),p(n,tc,h),p(n,me,h),e(me,_u),e(me,Di),e(Di,gu),e(me,Tu),e(me,Si),e(Si,vu),e(me,ku),e(me,Oi),e(Oi,bu),e(me,wu),e(me,Gi),e(Gi,yu),e(me,xu),e(me,yo),e(yo,zu),e(me,$u),e(me,Bi),e(Bi,Eu),e(me,ju),p(n,nc,h),g(xo,n,h),p(n,oc,h),p(n,Ja,h),e(Ja,qu),p(n,sc,h),p(n,zt,h),e(zt,Ui),e(Ui,zo),e(zo,Fu),e(zo,Wi),e(Wi,Mu),e(zo,Pu),e(zt,Cu),e(zt,Ri),e(Ri,Kt),e(Kt,Au),e(Kt,$o),e($o,Lu),e(Kt,Nu),e(Kt,Eo),e(Eo,Iu),e(Kt,Du),e(zt,Su),e(zt,Hi),e(Hi,jo),e(jo,Ou),e(jo,Vi),e(Vi,Gu),e(jo,Bu),p(n,ac,h),p(n,Za,h),p(n,rc,h),p(n,Yt,h),e(Yt,jn),e(jn,Ki),g(qo,Ki,null),e(Yt,Uu),e(Yt,Yi),e(Yi,Wu),p(n,ic,h),p(n,ht,h),e(ht,Ru),e(ht,Xa),e(Xa,Hu),e(ht,Vu),e(ht,Fo),e(Fo,Ku),e(ht,Yu),e(ht,Mo),e(Mo,Ju),e(ht,Zu),p(n,dc,h),g(Po,n,h),p(n,lc,h),p(n,Ue,h),e(Ue,Xu),e(Ue,Ji),e(Ji,Qu),e(Ue,em),e(Ue,Zi),e(Zi,tm),e(Ue,nm),e(Ue,Qa),e(Qa,om),e(Ue,sm),e(Ue,Xi),e(Xi,am),e(Ue,rm),p(n,cc,h),p(n,er,h),e(er,im),p(n,pc,h),g(Co,n,h),p(n,hc,h),p(n,tr,h),p(n,uc,h),p(n,Jt,h),e(Jt,qn),e(qn,Qi),g(Ao,Qi,null),e(Jt,dm),e(Jt,ed),e(ed,lm),p(n,mc,h),p(n,nr,h),e(nr,cm),p(n,fc,h),p(n,Fn,h),e(Fn,td),e(td,Zt),e(Zt,pm),e(Zt,Lo),e(Lo,hm),e(Zt,um),e(Zt,No),e(No,mm),e(Zt,fm),e(Fn,_m),e(Fn,nd),e(nd,De),e(De,gm),e(De,Io),e(Io,Tm),e(De,vm),e(De,Do),e(Do,km),e(De,bm),e(De,So),e(So,wm),e(De,ym),e(De,Oo),e(Oo,xm),e(De,zm),e(De,Go),e(Go,$m),e(De,Em),p(n,_c,h),p(n,Xt,h),e(Xt,Mn),e(Mn,od),g(Bo,od,null),e(Xt,jm),e(Xt,sd),e(sd,qm),p(n,gc,h),p(n,gt,h),g(Uo,gt,null),e(gt,Fm),e(gt,Tt),e(Tt,Mm),e(Tt,or),e(or,Pm),e(Tt,Cm),e(Tt,sr),e(sr,Am),e(Tt,Lm),e(Tt,Wo),e(Wo,Nm),e(Tt,Im),e(gt,Dm),e(gt,Qt),e(Qt,Sm),e(Qt,ar),e(ar,Om),e(Qt,Gm),e(Qt,rr),e(rr,Bm),e(Qt,Um),p(n,Tc,h),p(n,en,h),e(en,Pn),e(Pn,ad),g(Ro,ad,null),e(en,Wm),e(en,rd),e(rd,Rm),p(n,vc,h),p(n,Z,h),g(Ho,Z,null),e(Z,Hm),e(Z,Vo),e(Vo,Vm),e(Vo,Ko),e(Ko,Km),e(Vo,Ym),e(Z,Jm),e(Z,Yo),e(Yo,Zm),e(Yo,ir),e(ir,Xm),e(Yo,Qm),e(Z,ef),e(Z,tn),e(tn,tf),e(tn,id),e(id,nf),e(tn,of),e(tn,dd),e(dd,sf),e(tn,af),e(Z,rf),e(Z,$t),g(Jo,$t,null),e($t,df),e($t,ld),e(ld,lf),e($t,cf),e($t,Zo),e(Zo,dr),e(dr,pf),e(dr,cd),e(cd,hf),e(Zo,uf),e(Zo,lr),e(lr,mf),e(lr,pd),e(pd,ff),e(Z,_f),e(Z,Cn),g(Xo,Cn,null),e(Cn,gf),e(Cn,Qo),e(Qo,Tf),e(Qo,hd),e(hd,vf),e(Qo,kf),e(Z,bf),e(Z,An),g(es,An,null),e(An,wf),e(An,ud),e(ud,yf),e(Z,xf),e(Z,md),p(n,kc,h),p(n,nn,h),e(nn,Ln),e(Ln,fd),g(ts,fd,null),e(nn,zf),e(nn,_d),e(_d,$f),p(n,bc,h),p(n,Se,h),g(ns,Se,null),e(Se,Ef),e(Se,on),e(on,jf),e(on,gd),e(gd,qf),e(on,Ff),e(on,os),e(os,Mf),e(on,Pf),e(Se,Cf),e(Se,ss),e(ss,Af),e(ss,cr),e(cr,Lf),e(ss,Nf),e(Se,If),e(Se,Et),g(as,Et,null),e(Et,Df),e(Et,Td),e(Td,Sf),e(Et,Of),e(Et,rs),e(rs,pr),e(pr,Gf),e(pr,vd),e(vd,Bf),e(rs,Uf),e(rs,hr),e(hr,Wf),e(hr,kd),e(kd,Rf),e(Se,Hf),e(Se,Nn),g(is,Nn,null),e(Nn,Vf),e(Nn,bd),e(bd,Kf),p(n,wc,h),p(n,sn,h),e(sn,In),e(In,wd),g(ds,wd,null),e(sn,Yf),e(sn,yd),e(yd,Jf),p(n,yc,h),p(n,X,h),g(ls,X,null),e(X,Zf),e(X,xd),e(xd,Xf),e(X,Qf),e(X,cs),e(cs,e_),e(cs,ps),e(ps,t_),e(cs,n_),e(X,o_),e(X,hs),e(hs,s_),e(hs,ur),e(ur,a_),e(hs,r_),e(X,i_),e(X,us),e(us,d_),e(us,ms),e(ms,l_),e(us,c_),e(X,p_),e(X,We),g(fs,We,null),e(We,h_),e(We,an),e(an,u_),e(an,mr),e(mr,m_),e(an,f_),e(an,zd),e(zd,__),e(an,g_),e(We,T_),g(Dn,We,null),e(We,v_),e(We,$d),e($d,k_),e(We,b_),g(_s,We,null),e(X,w_),e(X,Re),g(gs,Re,null),e(Re,y_),e(Re,Ed),e(Ed,x_),e(Re,z_),e(Re,jd),e(jd,$_),e(Re,E_),e(Re,qd),e(qd,j_),e(Re,q_),g(Ts,Re,null),e(X,F_),e(X,ut),g(vs,ut,null),e(ut,M_),e(ut,Fd),e(Fd,P_),e(ut,C_),e(ut,Md),e(Md,A_),e(ut,L_),g(ks,ut,null),p(n,xc,h),p(n,rn,h),e(rn,Sn),e(Sn,Pd),g(bs,Pd,null),e(rn,N_),e(rn,Cd),e(Cd,I_),p(n,zc,h),p(n,Q,h),g(ws,Q,null),e(Q,D_),e(Q,ys),e(ys,S_),e(ys,Ad),e(Ad,O_),e(ys,G_),e(Q,B_),e(Q,xs),e(xs,U_),e(xs,zs),e(zs,W_),e(xs,R_),e(Q,H_),e(Q,$s),e($s,V_),e($s,fr),e(fr,K_),e($s,Y_),e(Q,J_),e(Q,Es),e(Es,Z_),e(Es,js),e(js,X_),e(Es,Q_),e(Q,eg),e(Q,He),g(qs,He,null),e(He,tg),e(He,dn),e(dn,ng),e(dn,_r),e(_r,og),e(dn,sg),e(dn,Ld),e(Ld,ag),e(dn,rg),e(He,ig),g(On,He,null),e(He,dg),e(He,Nd),e(Nd,lg),e(He,cg),g(Fs,He,null),e(Q,pg),e(Q,Ve),g(Ms,Ve,null),e(Ve,hg),e(Ve,Id),e(Id,ug),e(Ve,mg),e(Ve,Dd),e(Dd,fg),e(Ve,_g),e(Ve,Sd),e(Sd,gg),e(Ve,Tg),g(Ps,Ve,null),e(Q,vg),e(Q,mt),g(Cs,mt,null),e(mt,kg),e(mt,Od),e(Od,bg),e(mt,wg),e(mt,Gd),e(Gd,yg),e(mt,xg),g(As,mt,null),p(n,$c,h),p(n,ln,h),e(ln,Gn),e(Gn,Bd),g(Ls,Bd,null),e(ln,zg),e(ln,Ud),e(Ud,$g),p(n,Ec,h),p(n,ee,h),g(Ns,ee,null),e(ee,Eg),e(ee,Wd),e(Wd,jg),e(ee,qg),e(ee,Is),e(Is,Fg),e(Is,Ds),e(Ds,Mg),e(Is,Pg),e(ee,Cg),e(ee,Ss),e(Ss,Ag),e(Ss,gr),e(gr,Lg),e(Ss,Ng),e(ee,Ig),e(ee,Os),e(Os,Dg),e(Os,Gs),e(Gs,Sg),e(Os,Og),e(ee,Gg),e(ee,Ke),g(Bs,Ke,null),e(Ke,Bg),e(Ke,cn),e(cn,Ug),e(cn,Tr),e(Tr,Wg),e(cn,Rg),e(cn,Rd),e(Rd,Hg),e(cn,Vg),e(Ke,Kg),g(Bn,Ke,null),e(Ke,Yg),e(Ke,Hd),e(Hd,Jg),e(Ke,Zg),g(Us,Ke,null),e(ee,Xg),e(ee,Ye),g(Ws,Ye,null),e(Ye,Qg),e(Ye,Vd),e(Vd,eT),e(Ye,tT),e(Ye,Kd),e(Kd,nT),e(Ye,oT),e(Ye,Yd),e(Yd,sT),e(Ye,aT),g(Rs,Ye,null),e(ee,rT),e(ee,ft),g(Hs,ft,null),e(ft,iT),e(ft,Jd),e(Jd,dT),e(ft,lT),e(ft,Zd),e(Zd,cT),e(ft,pT),g(Vs,ft,null),p(n,jc,h),p(n,pn,h),e(pn,Un),e(Un,Xd),g(Ks,Xd,null),e(pn,hT),e(pn,Qd),e(Qd,uT),p(n,qc,h),p(n,de,h),g(Ys,de,null),e(de,mT),e(de,el),e(el,fT),e(de,_T),e(de,Js),e(Js,gT),e(Js,Zs),e(Zs,TT),e(Js,vT),e(de,kT),e(de,Xs),e(Xs,bT),e(Xs,vr),e(vr,wT),e(Xs,yT),e(de,xT),e(de,Qs),e(Qs,zT),e(Qs,ea),e(ea,$T),e(Qs,ET),e(de,jT),g(Wn,de,null),e(de,qT),e(de,Je),g(ta,Je,null),e(Je,FT),e(Je,hn),e(hn,MT),e(hn,kr),e(kr,PT),e(hn,CT),e(hn,tl),e(tl,AT),e(hn,LT),e(Je,NT),g(Rn,Je,null),e(Je,IT),e(Je,nl),e(nl,DT),e(Je,ST),g(na,Je,null),p(n,Fc,h),p(n,un,h),e(un,Hn),e(Hn,ol),g(oa,ol,null),e(un,OT),e(un,sl),e(sl,GT),p(n,Mc,h),p(n,le,h),g(sa,le,null),e(le,BT),e(le,aa),e(aa,UT),e(aa,al),e(al,WT),e(aa,RT),e(le,HT),e(le,ra),e(ra,VT),e(ra,ia),e(ia,KT),e(ra,YT),e(le,JT),e(le,da),e(da,ZT),e(da,br),e(br,XT),e(da,QT),e(le,ev),e(le,la),e(la,tv),e(la,ca),e(ca,nv),e(la,ov),e(le,sv),g(Vn,le,null),e(le,av),e(le,Ze),g(pa,Ze,null),e(Ze,rv),e(Ze,mn),e(mn,iv),e(mn,wr),e(wr,dv),e(mn,lv),e(mn,rl),e(rl,cv),e(mn,pv),e(Ze,hv),g(Kn,Ze,null),e(Ze,uv),e(Ze,il),e(il,mv),e(Ze,fv),g(ha,Ze,null),p(n,Pc,h),p(n,fn,h),e(fn,Yn),e(Yn,dl),g(ua,dl,null),e(fn,_v),e(fn,ll),e(ll,gv),p(n,Cc,h),p(n,ce,h),g(ma,ce,null),e(ce,Tv),e(ce,cl),e(cl,vv),e(ce,kv),e(ce,fa),e(fa,bv),e(fa,_a),e(_a,wv),e(fa,yv),e(ce,xv),e(ce,ga),e(ga,zv),e(ga,yr),e(yr,$v),e(ga,Ev),e(ce,jv),e(ce,Ta),e(Ta,qv),e(Ta,va),e(va,Fv),e(Ta,Mv),e(ce,Pv),g(Jn,ce,null),e(ce,Cv),e(ce,Xe),g(ka,Xe,null),e(Xe,Av),e(Xe,_n),e(_n,Lv),e(_n,xr),e(xr,Nv),e(_n,Iv),e(_n,pl),e(pl,Dv),e(_n,Sv),e(Xe,Ov),g(Zn,Xe,null),e(Xe,Gv),e(Xe,hl),e(hl,Bv),e(Xe,Uv),g(ba,Xe,null),p(n,Ac,h),p(n,gn,h),e(gn,Xn),e(Xn,ul),g(wa,ul,null),e(gn,Wv),e(gn,ml),e(ml,Rv),p(n,Lc,h),p(n,vt,h),e(vt,Qe),g(ya,Qe,null),e(Qe,Hv),e(Qe,Tn),e(Tn,Vv),e(Tn,fl),e(fl,Kv),e(Tn,Yv),e(Tn,_l),e(_l,Jv),e(Tn,Zv),e(Qe,Xv),g(Qn,Qe,null),e(Qe,Qv),e(Qe,gl),e(gl,ek),e(Qe,tk),g(xa,Qe,null),e(vt,nk),e(vt,jt),g(za,jt,null),e(jt,ok),e(jt,Tl),e(Tl,sk),e(jt,ak),g($a,jt,null),e(vt,rk),e(vt,qt),g(Ea,qt,null),e(qt,ik),e(qt,vl),e(vl,dk),e(qt,lk),g(ja,qt,null),p(n,Nc,h),p(n,vn,h),e(vn,eo),e(eo,kl),g(qa,kl,null),e(vn,ck),e(vn,bl),e(bl,pk),p(n,Ic,h),p(n,kt,h),e(kt,et),g(Fa,et,null),e(et,hk),e(et,kn),e(kn,uk),e(kn,wl),e(wl,mk),e(kn,fk),e(kn,yl),e(yl,_k),e(kn,gk),e(et,Tk),g(to,et,null),e(et,vk),e(et,xl),e(xl,kk),e(et,bk),g(Ma,et,null),e(kt,wk),e(kt,Ft),g(Pa,Ft,null),e(Ft,yk),e(Ft,zl),e(zl,xk),e(Ft,zk),g(Ca,Ft,null),e(kt,$k),e(kt,Mt),g(Aa,Mt,null),e(Mt,Ek),e(Mt,$l),e($l,jk),e(Mt,qk),g(La,Mt,null),Dc=!0},p(n,[h]){const Na={};h&2&&(Na.$$scope={dirty:h,ctx:n}),Dn.$set(Na);const El={};h&2&&(El.$$scope={dirty:h,ctx:n}),On.$set(El);const jl={};h&2&&(jl.$$scope={dirty:h,ctx:n}),Bn.$set(jl);const ql={};h&2&&(ql.$$scope={dirty:h,ctx:n}),Wn.$set(ql);const Ia={};h&2&&(Ia.$$scope={dirty:h,ctx:n}),Rn.$set(Ia);const Fl={};h&2&&(Fl.$$scope={dirty:h,ctx:n}),Vn.$set(Fl);const Ml={};h&2&&(Ml.$$scope={dirty:h,ctx:n}),Kn.$set(Ml);const Pl={};h&2&&(Pl.$$scope={dirty:h,ctx:n}),Jn.$set(Pl);const Da={};h&2&&(Da.$$scope={dirty:h,ctx:n}),Zn.$set(Da);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:n}),Qn.$set(Cl);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:n}),to.$set(Al)},i(n){Dc||(T(x.$$.fragment,n),T(re.$$.fragment,n),T(To.$$.fragment,n),T(vo.$$.fragment,n),T(wo.$$.fragment,n),T(xo.$$.fragment,n),T(qo.$$.fragment,n),T(Po.$$.fragment,n),T(Co.$$.fragment,n),T(Ao.$$.fragment,n),T(Bo.$$.fragment,n),T(Uo.$$.fragment,n),T(Ro.$$.fragment,n),T(Ho.$$.fragment,n),T(Jo.$$.fragment,n),T(Xo.$$.fragment,n),T(es.$$.fragment,n),T(ts.$$.fragment,n),T(ns.$$.fragment,n),T(as.$$.fragment,n),T(is.$$.fragment,n),T(ds.$$.fragment,n),T(ls.$$.fragment,n),T(fs.$$.fragment,n),T(Dn.$$.fragment,n),T(_s.$$.fragment,n),T(gs.$$.fragment,n),T(Ts.$$.fragment,n),T(vs.$$.fragment,n),T(ks.$$.fragment,n),T(bs.$$.fragment,n),T(ws.$$.fragment,n),T(qs.$$.fragment,n),T(On.$$.fragment,n),T(Fs.$$.fragment,n),T(Ms.$$.fragment,n),T(Ps.$$.fragment,n),T(Cs.$$.fragment,n),T(As.$$.fragment,n),T(Ls.$$.fragment,n),T(Ns.$$.fragment,n),T(Bs.$$.fragment,n),T(Bn.$$.fragment,n),T(Us.$$.fragment,n),T(Ws.$$.fragment,n),T(Rs.$$.fragment,n),T(Hs.$$.fragment,n),T(Vs.$$.fragment,n),T(Ks.$$.fragment,n),T(Ys.$$.fragment,n),T(Wn.$$.fragment,n),T(ta.$$.fragment,n),T(Rn.$$.fragment,n),T(na.$$.fragment,n),T(oa.$$.fragment,n),T(sa.$$.fragment,n),T(Vn.$$.fragment,n),T(pa.$$.fragment,n),T(Kn.$$.fragment,n),T(ha.$$.fragment,n),T(ua.$$.fragment,n),T(ma.$$.fragment,n),T(Jn.$$.fragment,n),T(ka.$$.fragment,n),T(Zn.$$.fragment,n),T(ba.$$.fragment,n),T(wa.$$.fragment,n),T(ya.$$.fragment,n),T(Qn.$$.fragment,n),T(xa.$$.fragment,n),T(za.$$.fragment,n),T($a.$$.fragment,n),T(Ea.$$.fragment,n),T(ja.$$.fragment,n),T(qa.$$.fragment,n),T(Fa.$$.fragment,n),T(to.$$.fragment,n),T(Ma.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(Aa.$$.fragment,n),T(La.$$.fragment,n),Dc=!0)},o(n){v(x.$$.fragment,n),v(re.$$.fragment,n),v(To.$$.fragment,n),v(vo.$$.fragment,n),v(wo.$$.fragment,n),v(xo.$$.fragment,n),v(qo.$$.fragment,n),v(Po.$$.fragment,n),v(Co.$$.fragment,n),v(Ao.$$.fragment,n),v(Bo.$$.fragment,n),v(Uo.$$.fragment,n),v(Ro.$$.fragment,n),v(Ho.$$.fragment,n),v(Jo.$$.fragment,n),v(Xo.$$.fragment,n),v(es.$$.fragment,n),v(ts.$$.fragment,n),v(ns.$$.fragment,n),v(as.$$.fragment,n),v(is.$$.fragment,n),v(ds.$$.fragment,n),v(ls.$$.fragment,n),v(fs.$$.fragment,n),v(Dn.$$.fragment,n),v(_s.$$.fragment,n),v(gs.$$.fragment,n),v(Ts.$$.fragment,n),v(vs.$$.fragment,n),v(ks.$$.fragment,n),v(bs.$$.fragment,n),v(ws.$$.fragment,n),v(qs.$$.fragment,n),v(On.$$.fragment,n),v(Fs.$$.fragment,n),v(Ms.$$.fragment,n),v(Ps.$$.fragment,n),v(Cs.$$.fragment,n),v(As.$$.fragment,n),v(Ls.$$.fragment,n),v(Ns.$$.fragment,n),v(Bs.$$.fragment,n),v(Bn.$$.fragment,n),v(Us.$$.fragment,n),v(Ws.$$.fragment,n),v(Rs.$$.fragment,n),v(Hs.$$.fragment,n),v(Vs.$$.fragment,n),v(Ks.$$.fragment,n),v(Ys.$$.fragment,n),v(Wn.$$.fragment,n),v(ta.$$.fragment,n),v(Rn.$$.fragment,n),v(na.$$.fragment,n),v(oa.$$.fragment,n),v(sa.$$.fragment,n),v(Vn.$$.fragment,n),v(pa.$$.fragment,n),v(Kn.$$.fragment,n),v(ha.$$.fragment,n),v(ua.$$.fragment,n),v(ma.$$.fragment,n),v(Jn.$$.fragment,n),v(ka.$$.fragment,n),v(Zn.$$.fragment,n),v(ba.$$.fragment,n),v(wa.$$.fragment,n),v(ya.$$.fragment,n),v(Qn.$$.fragment,n),v(xa.$$.fragment,n),v(za.$$.fragment,n),v($a.$$.fragment,n),v(Ea.$$.fragment,n),v(ja.$$.fragment,n),v(qa.$$.fragment,n),v(Fa.$$.fragment,n),v(to.$$.fragment,n),v(Ma.$$.fragment,n),v(Pa.$$.fragment,n),v(Ca.$$.fragment,n),v(Aa.$$.fragment,n),v(La.$$.fragment,n),Dc=!1},d(n){t(u),n&&t($),n&&t(b),k(x),n&&t(ae),n&&t(j),k(re),n&&t(Te),n&&t(B),n&&t(C),n&&t(he),n&&t(ve),n&&t(ue),n&&t(ke),n&&t(M),n&&t(H),n&&t(V),n&&t(Dl),n&&t(Sa),n&&t(Sl),n&&t(Be),n&&t(Ol),n&&t(Ga),n&&t(Gl),n&&t(wt),n&&t(Bl),n&&t(xn),n&&t(Ul),n&&t(yt),n&&t(Wl),n&&t(Ra),n&&t(Rl),n&&t(Ht),k(To),n&&t(Hl),n&&t(pt),n&&t(Vl),n&&t($n),n&&t(Kl),n&&t(Va),n&&t(Yl),k(vo,n),n&&t(Jl),n&&t(En),n&&t(Zl),n&&t(Ya),n&&t(Xl),k(wo,n),n&&t(Ql),n&&t(se),n&&t(ec),n&&t(xt),n&&t(tc),n&&t(me),n&&t(nc),k(xo,n),n&&t(oc),n&&t(Ja),n&&t(sc),n&&t(zt),n&&t(ac),n&&t(Za),n&&t(rc),n&&t(Yt),k(qo),n&&t(ic),n&&t(ht),n&&t(dc),k(Po,n),n&&t(lc),n&&t(Ue),n&&t(cc),n&&t(er),n&&t(pc),k(Co,n),n&&t(hc),n&&t(tr),n&&t(uc),n&&t(Jt),k(Ao),n&&t(mc),n&&t(nr),n&&t(fc),n&&t(Fn),n&&t(_c),n&&t(Xt),k(Bo),n&&t(gc),n&&t(gt),k(Uo),n&&t(Tc),n&&t(en),k(Ro),n&&t(vc),n&&t(Z),k(Ho),k(Jo),k(Xo),k(es),n&&t(kc),n&&t(nn),k(ts),n&&t(bc),n&&t(Se),k(ns),k(as),k(is),n&&t(wc),n&&t(sn),k(ds),n&&t(yc),n&&t(X),k(ls),k(fs),k(Dn),k(_s),k(gs),k(Ts),k(vs),k(ks),n&&t(xc),n&&t(rn),k(bs),n&&t(zc),n&&t(Q),k(ws),k(qs),k(On),k(Fs),k(Ms),k(Ps),k(Cs),k(As),n&&t($c),n&&t(ln),k(Ls),n&&t(Ec),n&&t(ee),k(Ns),k(Bs),k(Bn),k(Us),k(Ws),k(Rs),k(Hs),k(Vs),n&&t(jc),n&&t(pn),k(Ks),n&&t(qc),n&&t(de),k(Ys),k(Wn),k(ta),k(Rn),k(na),n&&t(Fc),n&&t(un),k(oa),n&&t(Mc),n&&t(le),k(sa),k(Vn),k(pa),k(Kn),k(ha),n&&t(Pc),n&&t(fn),k(ua),n&&t(Cc),n&&t(ce),k(ma),k(Jn),k(ka),k(Zn),k(ba),n&&t(Ac),n&&t(gn),k(wa),n&&t(Lc),n&&t(vt),k(ya),k(Qn),k(xa),k(za),k($a),k(Ea),k(ja),n&&t(Nc),n&&t(vn),k(qa),n&&t(Ic),n&&t(kt),k(Fa),k(to),k(Ma),k(Pa),k(Ca),k(Aa),k(La)}}}const ly={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function cy(N,u,$){let{fw:b}=u;return N.$$set=y=>{"fw"in y&&$(0,b=y.fw)},[b]}class gy extends Vw{constructor(u){super();Kw(this,u,cy,dy,Yw,{fw:0})}}export{gy as default,ly as metadata};
