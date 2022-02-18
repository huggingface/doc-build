import{S as Rw,i as Hw,s as Vw,e as a,k as d,w as f,t as o,L as Kw,c as r,d as t,m as l,a as i,x as _,h as s,b as c,J as e,g as p,y as g,q as T,o as v,B as k}from"../../chunks/vendor-b1433968.js";import{T as zt}from"../../chunks/Tip-c3840994.js";import{D as P}from"../../chunks/Docstring-ff504c58.js";import{C as R}from"../../chunks/CodeBlock-a320dbd7.js";import{I as qe}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Yw(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Jw(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Zw(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Xw(N){let u,$,b,y,x,z,w,q,Ee,se,E,te,O,ae,je,G,Fe,ve,B,I,re,pe,F,C,he,K,ke,ue,U,Me,be,M,Pe,H,V,me,A,Ce,fe,D,Ae,W,Le;return{c(){u=a("p"),$=o("TF 2.0 models accepts two formats as inputs:"),b=d(),y=a("ul"),x=a("li"),z=o("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),q=a("li"),Ee=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),E=a("p"),te=o("This second option is useful when using "),O=a("code"),ae=o("tf.keras.Model.fit"),je=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=a("code"),Fe=o("model(inputs)"),ve=o("."),B=d(),I=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=a("ul"),C=a("li"),he=o("a single Tensor with "),K=a("code"),ke=o("input_ids"),ue=o(" only and nothing else: "),U=a("code"),Me=o("model(inputs_ids)"),be=d(),M=a("li"),Pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),me=o(" or "),A=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var j=i(u);$=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=r(m,"UL",{});var ne=i(y);x=r(ne,"LI",{});var Ge=i(x);z=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),w=l(ne),q=r(ne,"LI",{});var lt=i(q);Ee=s(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),ne.forEach(t),se=l(m),E=r(m,"P",{});var S=i(E);te=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var Be=i(O);ae=s(Be,"tf.keras.Model.fit"),Be.forEach(t),je=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=r(S,"CODE",{});var oe=i(G);Fe=s(oe,"model(inputs)"),oe.forEach(t),ve=s(S,"."),S.forEach(t),B=l(m),I=r(m,"P",{});var ct=i(I);re=s(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=r(m,"UL",{});var L=i(F);C=r(L,"LI",{});var Y=i(C);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var pt=i(K);ke=s(pt,"input_ids"),pt.forEach(t),ue=s(Y," only and nothing else: "),U=r(Y,"CODE",{});var Ne=i(U);Me=s(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),be=l(L),M=r(L,"LI",{});var J=i(M);Pe=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(J,"CODE",{});var ht=i(H);V=s(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=s(J," or "),A=r(J,"CODE",{});var Ie=i(A);Ce=s(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),J.forEach(t),fe=l(L),D=r(L,"LI",{});var De=i(D);Ae=s(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(De,"CODE",{});var ut=i(W);Le=s(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),De.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,y,j),e(y,x),e(x,z),e(y,w),e(y,q),e(q,Ee),p(m,se,j),p(m,E,j),e(E,te),e(E,O),e(O,ae),e(E,je),e(E,G),e(G,Fe),e(E,ve),p(m,B,j),p(m,I,j),e(I,re),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ke),e(C,ue),e(C,U),e(U,Me),e(F,be),e(F,M),e(M,Pe),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Ce),e(F,fe),e(F,D),e(D,Ae),e(D,W),e(W,Le)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(se),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function Qw(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function ey(N){let u,$,b,y,x,z,w,q,Ee,se,E,te,O,ae,je,G,Fe,ve,B,I,re,pe,F,C,he,K,ke,ue,U,Me,be,M,Pe,H,V,me,A,Ce,fe,D,Ae,W,Le;return{c(){u=a("p"),$=o("TF 2.0 models accepts two formats as inputs:"),b=d(),y=a("ul"),x=a("li"),z=o("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),q=a("li"),Ee=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),E=a("p"),te=o("This second option is useful when using "),O=a("code"),ae=o("tf.keras.Model.fit"),je=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=a("code"),Fe=o("model(inputs)"),ve=o("."),B=d(),I=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=a("ul"),C=a("li"),he=o("a single Tensor with "),K=a("code"),ke=o("input_ids"),ue=o(" only and nothing else: "),U=a("code"),Me=o("model(inputs_ids)"),be=d(),M=a("li"),Pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),me=o(" or "),A=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var j=i(u);$=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=r(m,"UL",{});var ne=i(y);x=r(ne,"LI",{});var Ge=i(x);z=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),w=l(ne),q=r(ne,"LI",{});var lt=i(q);Ee=s(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),ne.forEach(t),se=l(m),E=r(m,"P",{});var S=i(E);te=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var Be=i(O);ae=s(Be,"tf.keras.Model.fit"),Be.forEach(t),je=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=r(S,"CODE",{});var oe=i(G);Fe=s(oe,"model(inputs)"),oe.forEach(t),ve=s(S,"."),S.forEach(t),B=l(m),I=r(m,"P",{});var ct=i(I);re=s(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=r(m,"UL",{});var L=i(F);C=r(L,"LI",{});var Y=i(C);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var pt=i(K);ke=s(pt,"input_ids"),pt.forEach(t),ue=s(Y," only and nothing else: "),U=r(Y,"CODE",{});var Ne=i(U);Me=s(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),be=l(L),M=r(L,"LI",{});var J=i(M);Pe=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(J,"CODE",{});var ht=i(H);V=s(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=s(J," or "),A=r(J,"CODE",{});var Ie=i(A);Ce=s(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),J.forEach(t),fe=l(L),D=r(L,"LI",{});var De=i(D);Ae=s(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(De,"CODE",{});var ut=i(W);Le=s(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),De.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,y,j),e(y,x),e(x,z),e(y,w),e(y,q),e(q,Ee),p(m,se,j),p(m,E,j),e(E,te),e(E,O),e(O,ae),e(E,je),e(E,G),e(G,Fe),e(E,ve),p(m,B,j),p(m,I,j),e(I,re),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ke),e(C,ue),e(C,U),e(U,Me),e(F,be),e(F,M),e(M,Pe),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Ce),e(F,fe),e(F,D),e(D,Ae),e(D,W),e(W,Le)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(se),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function ty(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function ny(N){let u,$,b,y,x,z,w,q,Ee,se,E,te,O,ae,je,G,Fe,ve,B,I,re,pe,F,C,he,K,ke,ue,U,Me,be,M,Pe,H,V,me,A,Ce,fe,D,Ae,W,Le;return{c(){u=a("p"),$=o("TF 2.0 models accepts two formats as inputs:"),b=d(),y=a("ul"),x=a("li"),z=o("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),q=a("li"),Ee=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),E=a("p"),te=o("This second option is useful when using "),O=a("code"),ae=o("tf.keras.Model.fit"),je=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=a("code"),Fe=o("model(inputs)"),ve=o("."),B=d(),I=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=a("ul"),C=a("li"),he=o("a single Tensor with "),K=a("code"),ke=o("input_ids"),ue=o(" only and nothing else: "),U=a("code"),Me=o("model(inputs_ids)"),be=d(),M=a("li"),Pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),me=o(" or "),A=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var j=i(u);$=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=r(m,"UL",{});var ne=i(y);x=r(ne,"LI",{});var Ge=i(x);z=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),w=l(ne),q=r(ne,"LI",{});var lt=i(q);Ee=s(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),ne.forEach(t),se=l(m),E=r(m,"P",{});var S=i(E);te=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var Be=i(O);ae=s(Be,"tf.keras.Model.fit"),Be.forEach(t),je=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=r(S,"CODE",{});var oe=i(G);Fe=s(oe,"model(inputs)"),oe.forEach(t),ve=s(S,"."),S.forEach(t),B=l(m),I=r(m,"P",{});var ct=i(I);re=s(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=r(m,"UL",{});var L=i(F);C=r(L,"LI",{});var Y=i(C);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var pt=i(K);ke=s(pt,"input_ids"),pt.forEach(t),ue=s(Y," only and nothing else: "),U=r(Y,"CODE",{});var Ne=i(U);Me=s(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),be=l(L),M=r(L,"LI",{});var J=i(M);Pe=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(J,"CODE",{});var ht=i(H);V=s(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=s(J," or "),A=r(J,"CODE",{});var Ie=i(A);Ce=s(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),J.forEach(t),fe=l(L),D=r(L,"LI",{});var De=i(D);Ae=s(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(De,"CODE",{});var ut=i(W);Le=s(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),De.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,y,j),e(y,x),e(x,z),e(y,w),e(y,q),e(q,Ee),p(m,se,j),p(m,E,j),e(E,te),e(E,O),e(O,ae),e(E,je),e(E,G),e(G,Fe),e(E,ve),p(m,B,j),p(m,I,j),e(I,re),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ke),e(C,ue),e(C,U),e(U,Me),e(F,be),e(F,M),e(M,Pe),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Ce),e(F,fe),e(F,D),e(D,Ae),e(D,W),e(W,Le)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(se),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function oy(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function sy(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function ay(N){let u,$,b,y,x;return{c(){u=a("p"),$=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=a("code"),y=o("Module"),x=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=r(z,"P",{});var w=i(u);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=r(w,"CODE",{});var q=i(b);y=s(q,"Module"),q.forEach(t),x=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function ry(N){let u,$,b,y,x,z,w,q,Ee,se,E,te,O,ae,je,G,Fe,ve,B,I,re,pe,F,C,he,K,ke,ue,U,Me,be,M,Pe,H,V,me,A,Ce,fe,D,Ae,W,Le,m,j,ne,Ge,lt,S,Be,oe,ct,L,Y,pt,Ne,J,ht,Ie,De,ut,Dl,Ba,qp,Sl,Ue,ei,ti,uo,Ep,jp,ni,oi,mo,Fp,Mp,si,ai,fo,Pp,Cp,ri,ii,_o,Ap,Lp,di,Ua,go,Np,Ip,Ol,Wa,Dp,Gl,xt,li,zn,ci,Sp,Op,Ra,Gp,Bp,Up,pi,xn,hi,Wp,Rp,Ha,Hp,Vp,Kp,ui,$n,mi,Yp,Jp,Va,Zp,Xp,Bl,qn,Qp,To,eh,th,Ul,$t,nh,vo,oh,sh,ko,ah,rh,Wl,Ka,Rl,Yt,En,fi,bo,ih,_i,dh,Hl,mt,lh,gi,ch,ph,Ti,hh,uh,vi,mh,fh,Vl,jn,_h,Ya,gh,Th,Kl,Fn,dt,ki,vh,kh,_e,bh,bi,wh,yh,wi,zh,xh,yi,$h,qh,zi,Eh,jh,xi,Fh,Mh,Ja,Ph,Ch,Ah,$i,Lh,Nh,wo,Ih,yo,Dh,zo,Sh,Oh,Gh,ge,qi,Bh,Uh,Ei,Wh,Rh,xo,Hh,ie,Vh,ji,Kh,Yh,Fi,Jh,Zh,Mi,Xh,Qh,Pi,eu,tu,Ci,nu,ou,Ai,su,au,Li,ru,iu,du,Jt,lu,Ni,cu,pu,Ii,hu,uu,mu,Te,fu,Di,_u,gu,Si,Tu,vu,Oi,ku,bu,Gi,wu,yu,$o,zu,xu,Bi,$u,qu,Eu,qo,Yl,Za,ju,Jl,qt,Ui,Eo,Fu,Wi,Mu,Pu,Cu,Ri,Zt,Au,jo,Lu,Nu,Fo,Iu,Du,Su,Hi,Mo,Ou,Vi,Gu,Bu,Zl,Xa,Xl,Xt,Mn,Ki,Po,Uu,Yi,Wu,Ql,ft,Ru,Qa,Hu,Vu,Co,Ku,Yu,Ao,Ju,Zu,ec,Lo,tc,We,Xu,Ji,Qu,em,Zi,tm,nm,er,om,sm,Xi,am,rm,nc,tr,im,oc,No,sc,nr,ac,Qt,Pn,Qi,Io,dm,ed,lm,rc,or,cm,ic,Cn,td,en,pm,Do,hm,um,So,mm,fm,_m,nd,Se,gm,Oo,Tm,vm,Go,km,bm,Bo,wm,ym,Uo,zm,xm,Wo,$m,qm,dc,tn,An,od,Ro,Em,sd,jm,lc,kt,Ho,Fm,bt,Mm,sr,Pm,Cm,ar,Am,Lm,Vo,Nm,Im,Dm,nn,Sm,rr,Om,Gm,ir,Bm,Um,cc,on,Ln,ad,Ko,Wm,rd,Rm,pc,Z,Yo,Hm,Jo,Vm,Zo,Km,Ym,Jm,Xo,Zm,dr,Xm,Qm,ef,sn,tf,id,nf,of,dd,sf,af,rf,Et,Qo,df,ld,lf,cf,es,lr,pf,cd,hf,uf,cr,mf,pd,ff,_f,Nn,ts,gf,ns,Tf,hd,vf,kf,bf,In,os,wf,ud,yf,zf,md,hc,an,Dn,fd,ss,xf,_d,$f,uc,Oe,as,qf,rn,Ef,gd,jf,Ff,rs,Mf,Pf,Cf,is,Af,pr,Lf,Nf,If,jt,ds,Df,Td,Sf,Of,ls,hr,Gf,vd,Bf,Uf,ur,Wf,kd,Rf,Hf,Sn,cs,Vf,bd,Kf,mc,dn,On,wd,ps,Yf,yd,Jf,fc,X,hs,Zf,zd,Xf,Qf,us,e_,ms,t_,n_,o_,fs,s_,mr,a_,r_,i_,_s,d_,gs,l_,c_,p_,Re,Ts,h_,ln,u_,fr,m_,f_,xd,__,g_,T_,Gn,v_,$d,k_,b_,vs,w_,He,ks,y_,qd,z_,x_,Ed,$_,q_,jd,E_,j_,bs,F_,_t,ws,M_,Fd,P_,C_,Md,A_,L_,ys,_c,cn,Bn,Pd,zs,N_,Cd,I_,gc,Q,xs,D_,$s,S_,Ad,O_,G_,B_,qs,U_,Es,W_,R_,H_,js,V_,_r,K_,Y_,J_,Fs,Z_,Ms,X_,Q_,eg,Ve,Ps,tg,pn,ng,gr,og,sg,Ld,ag,rg,ig,Un,dg,Nd,lg,cg,Cs,pg,Ke,As,hg,Id,ug,mg,Dd,fg,_g,Sd,gg,Tg,Ls,vg,gt,Ns,kg,Od,bg,wg,Gd,yg,zg,Is,Tc,hn,Wn,Bd,Ds,xg,Ud,$g,vc,ee,Ss,qg,Wd,Eg,jg,Os,Fg,Gs,Mg,Pg,Cg,Bs,Ag,Tr,Lg,Ng,Ig,Us,Dg,Ws,Sg,Og,Gg,Ye,Rs,Bg,un,Ug,vr,Wg,Rg,Rd,Hg,Vg,Kg,Rn,Yg,Hd,Jg,Zg,Hs,Xg,Je,Vs,Qg,Vd,eT,tT,Kd,nT,oT,Yd,sT,aT,Ks,rT,Tt,Ys,iT,Jd,dT,lT,Zd,cT,pT,Js,kc,mn,Hn,Xd,Zs,hT,Qd,uT,bc,de,Xs,mT,el,fT,_T,Qs,gT,ea,TT,vT,kT,ta,bT,kr,wT,yT,zT,na,xT,oa,$T,qT,ET,Vn,jT,Ze,sa,FT,fn,MT,br,PT,CT,tl,AT,LT,NT,Kn,IT,nl,DT,ST,aa,wc,_n,Yn,ol,ra,OT,sl,GT,yc,le,ia,BT,da,UT,al,WT,RT,HT,la,VT,ca,KT,YT,JT,pa,ZT,wr,XT,QT,ev,ha,tv,ua,nv,ov,sv,Jn,av,Xe,ma,rv,gn,iv,yr,dv,lv,rl,cv,pv,hv,Zn,uv,il,mv,fv,fa,zc,Tn,Xn,dl,_a,_v,ll,gv,xc,ce,ga,Tv,cl,vv,kv,Ta,bv,va,wv,yv,zv,ka,xv,zr,$v,qv,Ev,ba,jv,wa,Fv,Mv,Pv,Qn,Cv,Qe,ya,Av,vn,Lv,xr,Nv,Iv,pl,Dv,Sv,Ov,eo,Gv,hl,Bv,Uv,za,$c,kn,to,ul,xa,Wv,ml,Rv,qc,wt,et,$a,Hv,bn,Vv,fl,Kv,Yv,_l,Jv,Zv,Xv,no,Qv,gl,ek,tk,qa,nk,Ft,Ea,ok,Tl,sk,ak,ja,rk,Mt,Fa,ik,vl,dk,lk,Ma,Ec,wn,oo,kl,Pa,ck,bl,pk,jc,yt,tt,Ca,hk,yn,uk,wl,mk,fk,yl,_k,gk,Tk,so,vk,zl,kk,bk,Aa,wk,Pt,La,yk,xl,zk,xk,Na,$k,Ct,Ia,qk,$l,Ek,jk,Da,Fc;return z=new qe({}),ae=new qe({}),bo=new qe({}),wo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),xo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),qo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
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
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),Po=new qe({}),Lo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),No=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.'],`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

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

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Io=new qe({}),Ro=new qe({}),Ho=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Ko=new qe({}),Yo=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Qo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new qe({}),as=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),ds=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5_fast.py#L166",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/tokenization_t5_fast.py#L192",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new qe({}),hs=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1245",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ts=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1321",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new zt({props:{$$slots:{default:[Yw]},$$scope:{ctx:N}}}),vs=new R({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ks=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1277",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),bs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),ws=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1289"}}),ys=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),zs=new qe({}),xs=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1434",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ps=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1515",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new zt({props:{$$slots:{default:[Jw]},$$scope:{ctx:N}}}),Cs=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
# studies have shown that owning a dog is good for you.,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),As=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1471",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Ls=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Ns=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1484"}}),Is=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Ds=new qe({}),Ss=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1728",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Rs=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1786",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new zt({props:{$$slots:{default:[Zw]},$$scope:{ctx:N}}}),Hs=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5EncoderModel.from_pretrained("t5-small")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Vs=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1749",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Ks=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Ys=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_t5.py#L1760"}}),Js=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Zs=new qe({}),Xs=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_tf_t5.py#L1125",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vn=new zt({props:{$$slots:{default:[Xw]},$$scope:{ctx:N}}}),sa=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_tf_t5.py#L1151",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kn=new zt({props:{$$slots:{default:[Qw]},$$scope:{ctx:N}}}),aa=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ra=new qe({}),ia=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_tf_t5.py#L1291",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new zt({props:{$$slots:{default:[ey]},$$scope:{ctx:N}}}),ma=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_tf_t5.py#L1346",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new zt({props:{$$slots:{default:[ty]},$$scope:{ctx:N}}}),fa=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
# studies have shown that owning a dog is good for you,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),_a=new qe({}),ga=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_tf_t5.py#L1600",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qn=new zt({props:{$$slots:{default:[ny]},$$scope:{ctx:N}}}),ya=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_tf_t5.py#L1618",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),eo=new zt({props:{$$slots:{default:[oy]},$$scope:{ctx:N}}}),za=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5EncoderModel.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model(input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),xa=new qe({}),$a=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new zt({props:{$$slots:{default:[sy]},$$scope:{ctx:N}}}),qa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ea=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ja=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Fa=new P({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_flax_t5.py#L1095",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ma=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pa=new qe({}),Ca=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new zt({props:{$$slots:{default:[ay]},$$scope:{ctx:N}}}),Aa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),La=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Na=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ia=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/t5/modeling_flax_t5.py#L1463",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Da=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=a("meta"),$=d(),b=a("h1"),y=a("a"),x=a("span"),f(z.$$.fragment),w=d(),q=a("span"),Ee=o("T5"),se=d(),E=a("h2"),te=a("a"),O=a("span"),f(ae.$$.fragment),je=d(),G=a("span"),Fe=o("Overview"),ve=d(),B=a("p"),I=o("The T5 model was presented in "),re=a("a"),pe=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=a("p"),K=o("The abstract from the paper is the following:"),ke=d(),ue=a("p"),U=a("em"),Me=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),be=d(),M=a("p"),Pe=o("Tips:"),H=d(),V=a("ul"),me=a("li"),A=a("p"),Ce=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=a("em"),D=o("translate English to German: \u2026"),Ae=o(`,
for summarization: `),W=a("em"),Le=o("summarize: \u2026"),m=o("."),j=d(),ne=a("li"),Ge=a("p"),lt=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),S=d(),Be=a("li"),oe=a("p"),ct=o("See the "),L=a("a"),Y=o("training"),pt=o(", "),Ne=a("a"),J=o("inference"),ht=o(" and "),Ie=a("a"),De=o("scripts"),ut=o(" sections below for all details regarding usage."),Dl=d(),Ba=a("p"),qp=o("T5 comes in different sizes:"),Sl=d(),Ue=a("ul"),ei=a("li"),ti=a("p"),uo=a("a"),Ep=o("t5-small"),jp=d(),ni=a("li"),oi=a("p"),mo=a("a"),Fp=o("t5-base"),Mp=d(),si=a("li"),ai=a("p"),fo=a("a"),Pp=o("t5-large"),Cp=d(),ri=a("li"),ii=a("p"),_o=a("a"),Ap=o("t5-3b"),Lp=d(),di=a("li"),Ua=a("p"),go=a("a"),Np=o("t5-11b"),Ip=o("."),Ol=d(),Wa=a("p"),Dp=o("Based on the original T5 model, Google has released some follow-up works:"),Gl=d(),xt=a("ul"),li=a("li"),zn=a("p"),ci=a("strong"),Sp=o("T5v1.1"),Op=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ra=a("a"),Gp=o("here"),Bp=o("."),Up=d(),pi=a("li"),xn=a("p"),hi=a("strong"),Wp=o("mT5"),Rp=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ha=a("a"),Hp=o("here"),Vp=o("."),Kp=d(),ui=a("li"),$n=a("p"),mi=a("strong"),Yp=o("byT5"),Jp=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Va=a("a"),Zp=o("here"),Xp=o("."),Bl=d(),qn=a("p"),Qp=o("All checkpoints can be found on the "),To=a("a"),eh=o("hub"),th=o("."),Ul=d(),$t=a("p"),nh=o("This model was contributed by "),vo=a("a"),oh=o("thomwolf"),sh=o(". The original code can be found "),ko=a("a"),ah=o("here"),rh=o("."),Wl=d(),Ka=a("a"),Rl=d(),Yt=a("h2"),En=a("a"),fi=a("span"),f(bo.$$.fragment),ih=d(),_i=a("span"),dh=o("Training"),Hl=d(),mt=a("p"),lh=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),gi=a("code"),ch=o("input_ids"),ph=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ti=a("code"),hh=o("decoder_input_ids"),uh=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),vi=a("code"),mh=o("labels"),fh=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Vl=d(),jn=a("p"),_h=o("One can use "),Ya=a("a"),gh=o("T5ForConditionalGeneration"),Th=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Kl=d(),Fn=a("ul"),dt=a("li"),ki=a("p"),vh=o("Unsupervised denoising training"),kh=d(),_e=a("p"),bh=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),bi=a("em"),wh=o("a.k.a"),yh=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),wi=a("em"),zh=o("real"),xh=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),yi=a("code"),$h=o("<extra_id_0>"),qh=o(`,
`),zi=a("code"),Eh=o("<extra_id_1>"),jh=o(", \u2026 up to "),xi=a("code"),Fh=o("<extra_id_99>"),Mh=o(`. As a default, 100 sentinel tokens are available in
`),Ja=a("a"),Ph=o("T5Tokenizer"),Ch=o("."),Ah=d(),$i=a("p"),Lh=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Nh=d(),f(wo.$$.fragment),Ih=d(),yo=a("p"),Dh=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),zo=a("a"),Sh=o("run_t5_mlm_flax.py"),Oh=o(` script in the Examples
directory.`),Gh=d(),ge=a("li"),qi=a("p"),Bh=o("Supervised training"),Uh=d(),Ei=a("p"),Wh=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Rh=d(),f(xo.$$.fragment),Hh=d(),ie=a("p"),Vh=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),ji=a("code"),Kh=o("input_ids"),Yh=o(` (which are the
`),Fi=a("code"),Jh=o("input_ids"),Zh=o(" of the encoded input sequence) and "),Mi=a("code"),Xh=o("labels"),Qh=o(" (which are the "),Pi=a("code"),eu=o("input_ids"),tu=o(` of the encoded
target sequence). The model will automatically create the `),Ci=a("code"),nu=o("decoder_input_ids"),ou=o(" based on the "),Ai=a("code"),su=o("labels"),au=o(`, by
shifting them one position to the right and prepending the `),Li=a("code"),ru=o("config.decoder_start_token_id"),iu=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),du=d(),Jt=a("p"),lu=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ni=a("code"),cu=o("max_source_length"),pu=o(" and "),Ii=a("code"),hu=o("max_target_length"),uu=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),mu=d(),Te=a("p"),fu=o("In addition, we must make sure that padding token id\u2019s of the "),Di=a("code"),_u=o("labels"),gu=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Si=a("code"),Tu=o("ignore_index"),vu=o(`
of the `),Oi=a("code"),ku=o("CrossEntropyLoss"),bu=o(". In Flax, one can use the "),Gi=a("code"),wu=o("decoder_attention_mask"),yu=o(` to ignore padded tokens from
the loss (see the `),$o=a("a"),zu=o("Flax summarization script"),xu=o(` for details). We also pass
`),Bi=a("code"),$u=o("attention_mask"),qu=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Eu=d(),f(qo.$$.fragment),Yl=d(),Za=a("p"),ju=o("Additional training tips:"),Jl=d(),qt=a("ul"),Ui=a("li"),Eo=a("p"),Fu=o("T5 models need a slightly higher learning rate than the default one set in the "),Wi=a("code"),Mu=o("Trainer"),Pu=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Cu=d(),Ri=a("li"),Zt=a("p"),Au=o("According to "),jo=a("a"),Lu=o("this forum post"),Nu=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Fo=a("a"),Iu=o("paper"),Du=o(` for the task prefixes
used).`),Su=d(),Hi=a("li"),Mo=a("p"),Ou=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Vi=a("em"),Gu=o("pad_to_multiple_of"),Bu=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Zl=d(),Xa=a("a"),Xl=d(),Xt=a("h2"),Mn=a("a"),Ki=a("span"),f(Po.$$.fragment),Uu=d(),Yi=a("span"),Wu=o("Inference"),Ql=d(),ft=a("p"),Ru=o("At inference time, it is recommended to use "),Qa=a("a"),Hu=o("generate()"),Vu=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Co=a("a"),Ku=o("this blog post"),Yu=o(` to know all the details about generating text with Transformers.
There\u2019s also `),Ao=a("a"),Ju=o("this blog post"),Zu=o(` which explains how
generation works in general in encoder-decoder models.`),ec=d(),f(Lo.$$.fragment),tc=d(),We=a("p"),Xu=o("Note that T5 uses the "),Ji=a("code"),Qu=o("pad_token_id"),em=o(" as the "),Zi=a("code"),tm=o("decoder_start_token_id"),nm=o(`, so when doing generation without using
`),er=a("a"),om=o("generate()"),sm=o(", make sure you start it with the "),Xi=a("code"),am=o("pad_token_id"),rm=o("."),nc=d(),tr=a("p"),im=o("The example above only shows a single example. You can also do batched inference, like so:"),oc=d(),f(No.$$.fragment),sc=d(),nr=a("a"),ac=d(),Qt=a("h2"),Pn=a("a"),Qi=a("span"),f(Io.$$.fragment),dm=d(),ed=a("span"),lm=o("Example scripts"),rc=d(),or=a("p"),cm=o("T5 is supported by several example scripts, both for pre-training and fine-tuning."),ic=d(),Cn=a("ul"),td=a("li"),en=a("p"),pm=o("pre-training: the "),Do=a("a"),hm=o("run_t5_mlm_flax.py"),um=o(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),So=a("a"),mm=o("t5_tokenizer_model.py"),fm=o(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),_m=d(),nd=a("li"),Se=a("p"),gm=o("fine-tuning: T5 is supported by the official summarization scripts ("),Oo=a("a"),Tm=o("PyTorch"),vm=o(", "),Go=a("a"),km=o("Tensorflow"),bm=o(", and "),Bo=a("a"),wm=o("Flax"),ym=o(`) and translation scripts
(`),Uo=a("a"),zm=o("PyTorch"),xm=o(" and "),Wo=a("a"),$m=o("Tensorflow"),qm=o(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),dc=d(),tn=a("h2"),An=a("a"),od=a("span"),f(Ro.$$.fragment),Em=d(),sd=a("span"),jm=o("T5Config"),lc=d(),kt=a("div"),f(Ho.$$.fragment),Fm=d(),bt=a("p"),Mm=o("This is the configuration class to store the configuration of a "),sr=a("a"),Pm=o("T5Model"),Cm=o(" or a "),ar=a("a"),Am=o("TFT5Model"),Lm=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Vo=a("a"),Nm=o("t5-small"),Im=o(" architecture."),Dm=d(),nn=a("p"),Sm=o("Configuration objects inherit from "),rr=a("a"),Om=o("PretrainedConfig"),Gm=o(` and can be used to control the model outputs. Read the
documentation from `),ir=a("a"),Bm=o("PretrainedConfig"),Um=o(" for more information."),cc=d(),on=a("h2"),Ln=a("a"),ad=a("span"),f(Ko.$$.fragment),Wm=d(),rd=a("span"),Rm=o("T5Tokenizer"),pc=d(),Z=a("div"),f(Yo.$$.fragment),Hm=d(),Jo=a("p"),Vm=o("Construct a T5 tokenizer. Based on "),Zo=a("a"),Km=o("SentencePiece"),Ym=o("."),Jm=d(),Xo=a("p"),Zm=o("This tokenizer inherits from "),dr=a("a"),Xm=o("PreTrainedTokenizer"),Qm=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ef=d(),sn=a("p"),tf=o(`Attributes:
sp_model (`),id=a("code"),nf=o("SentencePieceProcessor"),of=o(`):
The `),dd=a("em"),sf=o("SentencePiece"),af=o(" processor that is used for every conversion (string, tokens and IDs)."),rf=d(),Et=a("div"),f(Qo.$$.fragment),df=d(),ld=a("p"),lf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),cf=d(),es=a("ul"),lr=a("li"),pf=o("single sequence: "),cd=a("code"),hf=o("X </s>"),uf=d(),cr=a("li"),mf=o("pair of sequences: "),pd=a("code"),ff=o("A </s> B </s>"),_f=d(),Nn=a("div"),f(ts.$$.fragment),gf=d(),ns=a("p"),Tf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hd=a("code"),vf=o("prepare_for_model"),kf=o(" method."),bf=d(),In=a("div"),f(os.$$.fragment),wf=d(),ud=a("p"),yf=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),zf=d(),md=a("div"),hc=d(),an=a("h2"),Dn=a("a"),fd=a("span"),f(ss.$$.fragment),xf=d(),_d=a("span"),$f=o("T5TokenizerFast"),uc=d(),Oe=a("div"),f(as.$$.fragment),qf=d(),rn=a("p"),Ef=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),gd=a("em"),jf=o("tokenizers"),Ff=o(` library). Based on
`),rs=a("a"),Mf=o("Unigram"),Pf=o("."),Cf=d(),is=a("p"),Af=o("This tokenizer inherits from "),pr=a("a"),Lf=o("PreTrainedTokenizerFast"),Nf=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),If=d(),jt=a("div"),f(ds.$$.fragment),Df=d(),Td=a("p"),Sf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Of=d(),ls=a("ul"),hr=a("li"),Gf=o("single sequence: "),vd=a("code"),Bf=o("X </s>"),Uf=d(),ur=a("li"),Wf=o("pair of sequences: "),kd=a("code"),Rf=o("A </s> B </s>"),Hf=d(),Sn=a("div"),f(cs.$$.fragment),Vf=d(),bd=a("p"),Kf=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),mc=d(),dn=a("h2"),On=a("a"),wd=a("span"),f(ps.$$.fragment),Yf=d(),yd=a("span"),Jf=o("T5Model"),fc=d(),X=a("div"),f(hs.$$.fragment),Zf=d(),zd=a("p"),Xf=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Qf=d(),us=a("p"),e_=o("The T5 model was proposed in "),ms=a("a"),t_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),n_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),o_=d(),fs=a("p"),s_=o("This model inherits from "),mr=a("a"),a_=o("PreTrainedModel"),r_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=d(),_s=a("p"),d_=o("This model is also a PyTorch "),gs=a("a"),l_=o("torch.nn.Module"),c_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=d(),Re=a("div"),f(Ts.$$.fragment),h_=d(),ln=a("p"),u_=o("The "),fr=a("a"),m_=o("T5Model"),f_=o(" forward method, overrides the "),xd=a("code"),__=o("__call__"),g_=o(" special method."),T_=d(),f(Gn.$$.fragment),v_=d(),$d=a("p"),k_=o("Example:"),b_=d(),f(vs.$$.fragment),w_=d(),He=a("div"),f(ks.$$.fragment),y_=d(),qd=a("p"),z_=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),x_=d(),Ed=a("p"),$_=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),q_=d(),jd=a("p"),E_=o("Example:"),j_=d(),f(bs.$$.fragment),F_=d(),_t=a("div"),f(ws.$$.fragment),M_=d(),Fd=a("p"),P_=o("Moves the model to cpu from a model parallel state."),C_=d(),Md=a("p"),A_=o("Example:"),L_=d(),f(ys.$$.fragment),_c=d(),cn=a("h2"),Bn=a("a"),Pd=a("span"),f(zs.$$.fragment),N_=d(),Cd=a("span"),I_=o("T5ForConditionalGeneration"),gc=d(),Q=a("div"),f(xs.$$.fragment),D_=d(),$s=a("p"),S_=o("T5 Model with a "),Ad=a("code"),O_=o("language modeling"),G_=o(" head on top."),B_=d(),qs=a("p"),U_=o("The T5 model was proposed in "),Es=a("a"),W_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),R_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),H_=d(),js=a("p"),V_=o("This model inherits from "),_r=a("a"),K_=o("PreTrainedModel"),Y_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J_=d(),Fs=a("p"),Z_=o("This model is also a PyTorch "),Ms=a("a"),X_=o("torch.nn.Module"),Q_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg=d(),Ve=a("div"),f(Ps.$$.fragment),tg=d(),pn=a("p"),ng=o("The "),gr=a("a"),og=o("T5ForConditionalGeneration"),sg=o(" forward method, overrides the "),Ld=a("code"),ag=o("__call__"),rg=o(" special method."),ig=d(),f(Un.$$.fragment),dg=d(),Nd=a("p"),lg=o("Examples:"),cg=d(),f(Cs.$$.fragment),pg=d(),Ke=a("div"),f(As.$$.fragment),hg=d(),Id=a("p"),ug=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),mg=d(),Dd=a("p"),fg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),_g=d(),Sd=a("p"),gg=o("Example:"),Tg=d(),f(Ls.$$.fragment),vg=d(),gt=a("div"),f(Ns.$$.fragment),kg=d(),Od=a("p"),bg=o("Moves the model to cpu from a model parallel state."),wg=d(),Gd=a("p"),yg=o("Example:"),zg=d(),f(Is.$$.fragment),Tc=d(),hn=a("h2"),Wn=a("a"),Bd=a("span"),f(Ds.$$.fragment),xg=d(),Ud=a("span"),$g=o("T5EncoderModel"),vc=d(),ee=a("div"),f(Ss.$$.fragment),qg=d(),Wd=a("p"),Eg=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),jg=d(),Os=a("p"),Fg=o("The T5 model was proposed in "),Gs=a("a"),Mg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Pg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Cg=d(),Bs=a("p"),Ag=o("This model inherits from "),Tr=a("a"),Lg=o("PreTrainedModel"),Ng=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=d(),Us=a("p"),Dg=o("This model is also a PyTorch "),Ws=a("a"),Sg=o("torch.nn.Module"),Og=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gg=d(),Ye=a("div"),f(Rs.$$.fragment),Bg=d(),un=a("p"),Ug=o("The "),vr=a("a"),Wg=o("T5EncoderModel"),Rg=o(" forward method, overrides the "),Rd=a("code"),Hg=o("__call__"),Vg=o(" special method."),Kg=d(),f(Rn.$$.fragment),Yg=d(),Hd=a("p"),Jg=o("Example:"),Zg=d(),f(Hs.$$.fragment),Xg=d(),Je=a("div"),f(Vs.$$.fragment),Qg=d(),Vd=a("p"),eT=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),tT=d(),Kd=a("p"),nT=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),oT=d(),Yd=a("p"),sT=o("Example:"),aT=d(),f(Ks.$$.fragment),rT=d(),Tt=a("div"),f(Ys.$$.fragment),iT=d(),Jd=a("p"),dT=o("Moves the model to cpu from a model parallel state."),lT=d(),Zd=a("p"),cT=o("Example:"),pT=d(),f(Js.$$.fragment),kc=d(),mn=a("h2"),Hn=a("a"),Xd=a("span"),f(Zs.$$.fragment),hT=d(),Qd=a("span"),uT=o("TFT5Model"),bc=d(),de=a("div"),f(Xs.$$.fragment),mT=d(),el=a("p"),fT=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),_T=d(),Qs=a("p"),gT=o("The T5 model was proposed in "),ea=a("a"),TT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),vT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),kT=d(),ta=a("p"),bT=o("This model inherits from "),kr=a("a"),wT=o("TFPreTrainedModel"),yT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zT=d(),na=a("p"),xT=o("This model is also a "),oa=a("a"),$T=o("tf.keras.Model"),qT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ET=d(),f(Vn.$$.fragment),jT=d(),Ze=a("div"),f(sa.$$.fragment),FT=d(),fn=a("p"),MT=o("The "),br=a("a"),PT=o("TFT5Model"),CT=o(" forward method, overrides the "),tl=a("code"),AT=o("__call__"),LT=o(" special method."),NT=d(),f(Kn.$$.fragment),IT=d(),nl=a("p"),DT=o("Examples:"),ST=d(),f(aa.$$.fragment),wc=d(),_n=a("h2"),Yn=a("a"),ol=a("span"),f(ra.$$.fragment),OT=d(),sl=a("span"),GT=o("TFT5ForConditionalGeneration"),yc=d(),le=a("div"),f(ia.$$.fragment),BT=d(),da=a("p"),UT=o("T5 Model with a "),al=a("code"),WT=o("language modeling"),RT=o(" head on top."),HT=d(),la=a("p"),VT=o("The T5 model was proposed in "),ca=a("a"),KT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),YT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),JT=d(),pa=a("p"),ZT=o("This model inherits from "),wr=a("a"),XT=o("TFPreTrainedModel"),QT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ev=d(),ha=a("p"),tv=o("This model is also a "),ua=a("a"),nv=o("tf.keras.Model"),ov=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sv=d(),f(Jn.$$.fragment),av=d(),Xe=a("div"),f(ma.$$.fragment),rv=d(),gn=a("p"),iv=o("The "),yr=a("a"),dv=o("TFT5ForConditionalGeneration"),lv=o(" forward method, overrides the "),rl=a("code"),cv=o("__call__"),pv=o(" special method."),hv=d(),f(Zn.$$.fragment),uv=d(),il=a("p"),mv=o("Examples:"),fv=d(),f(fa.$$.fragment),zc=d(),Tn=a("h2"),Xn=a("a"),dl=a("span"),f(_a.$$.fragment),_v=d(),ll=a("span"),gv=o("TFT5EncoderModel"),xc=d(),ce=a("div"),f(ga.$$.fragment),Tv=d(),cl=a("p"),vv=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),kv=d(),Ta=a("p"),bv=o("The T5 model was proposed in "),va=a("a"),wv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),yv=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),zv=d(),ka=a("p"),xv=o("This model inherits from "),zr=a("a"),$v=o("TFPreTrainedModel"),qv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ev=d(),ba=a("p"),jv=o("This model is also a "),wa=a("a"),Fv=o("tf.keras.Model"),Mv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pv=d(),f(Qn.$$.fragment),Cv=d(),Qe=a("div"),f(ya.$$.fragment),Av=d(),vn=a("p"),Lv=o("The "),xr=a("a"),Nv=o("TFT5EncoderModel"),Iv=o(" forward method, overrides the "),pl=a("code"),Dv=o("__call__"),Sv=o(" special method."),Ov=d(),f(eo.$$.fragment),Gv=d(),hl=a("p"),Bv=o("Examples:"),Uv=d(),f(za.$$.fragment),$c=d(),kn=a("h2"),to=a("a"),ul=a("span"),f(xa.$$.fragment),Wv=d(),ml=a("span"),Rv=o("FlaxT5Model"),qc=d(),wt=a("div"),et=a("div"),f($a.$$.fragment),Hv=d(),bn=a("p"),Vv=o("The "),fl=a("code"),Kv=o("FlaxT5PreTrainedModel"),Yv=o("forward method, overrides the "),_l=a("code"),Jv=o("__call__"),Zv=o(" special method."),Xv=d(),f(no.$$.fragment),Qv=d(),gl=a("p"),ek=o("Example:"),tk=d(),f(qa.$$.fragment),nk=d(),Ft=a("div"),f(Ea.$$.fragment),ok=d(),Tl=a("p"),sk=o("Example:"),ak=d(),f(ja.$$.fragment),rk=d(),Mt=a("div"),f(Fa.$$.fragment),ik=d(),vl=a("p"),dk=o("Example:"),lk=d(),f(Ma.$$.fragment),Ec=d(),wn=a("h2"),oo=a("a"),kl=a("span"),f(Pa.$$.fragment),ck=d(),bl=a("span"),pk=o("FlaxT5ForConditionalGeneration"),jc=d(),yt=a("div"),tt=a("div"),f(Ca.$$.fragment),hk=d(),yn=a("p"),uk=o("The "),wl=a("code"),mk=o("FlaxT5PreTrainedModel"),fk=o("forward method, overrides the "),yl=a("code"),_k=o("__call__"),gk=o(" special method."),Tk=d(),f(so.$$.fragment),vk=d(),zl=a("p"),kk=o("Example:"),bk=d(),f(Aa.$$.fragment),wk=d(),Pt=a("div"),f(La.$$.fragment),yk=d(),xl=a("p"),zk=o("Example:"),xk=d(),f(Na.$$.fragment),$k=d(),Ct=a("div"),f(Ia.$$.fragment),qk=d(),$l=a("p"),Ek=o("Example:"),jk=d(),f(Da.$$.fragment),this.h()},l(n){const h=Kw('[data-svelte="svelte-1phssyn"]',document.head);u=r(h,"META",{name:!0,content:!0}),h.forEach(t),$=l(n),b=r(n,"H1",{class:!0});var Sa=i(b);y=r(Sa,"A",{id:!0,class:!0,href:!0});var ql=i(y);x=r(ql,"SPAN",{});var El=i(x);_(z.$$.fragment,El),El.forEach(t),ql.forEach(t),w=l(Sa),q=r(Sa,"SPAN",{});var jl=i(q);Ee=s(jl,"T5"),jl.forEach(t),Sa.forEach(t),se=l(n),E=r(n,"H2",{class:!0});var Oa=i(E);te=r(Oa,"A",{id:!0,class:!0,href:!0});var Fl=i(te);O=r(Fl,"SPAN",{});var Ml=i(O);_(ae.$$.fragment,Ml),Ml.forEach(t),Fl.forEach(t),je=l(Oa),G=r(Oa,"SPAN",{});var Pl=i(G);Fe=s(Pl,"Overview"),Pl.forEach(t),Oa.forEach(t),ve=l(n),B=r(n,"P",{});var Ga=i(B);I=s(Ga,"The T5 model was presented in "),re=r(Ga,"A",{href:!0,rel:!0});var Cl=i(re);pe=s(Cl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Cl.forEach(t),F=s(Ga,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ga.forEach(t),C=l(n),he=r(n,"P",{});var Al=i(he);K=s(Al,"The abstract from the paper is the following:"),Al.forEach(t),ke=l(n),ue=r(n,"P",{});var Lk=i(ue);U=r(Lk,"EM",{});var Nk=i(U);Me=s(Nk,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Nk.forEach(t),Lk.forEach(t),be=l(n),M=r(n,"P",{});var Ik=i(M);Pe=s(Ik,"Tips:"),Ik.forEach(t),H=l(n),V=r(n,"UL",{});var $r=i(V);me=r($r,"LI",{});var Dk=i(me);A=r(Dk,"P",{});var qr=i(A);Ce=s(qr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=r(qr,"EM",{});var Sk=i(fe);D=s(Sk,"translate English to German: \u2026"),Sk.forEach(t),Ae=s(qr,`,
for summarization: `),W=r(qr,"EM",{});var Ok=i(W);Le=s(Ok,"summarize: \u2026"),Ok.forEach(t),m=s(qr,"."),qr.forEach(t),Dk.forEach(t),j=l($r),ne=r($r,"LI",{});var Gk=i(ne);Ge=r(Gk,"P",{});var Bk=i(Ge);lt=s(Bk,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Bk.forEach(t),Gk.forEach(t),S=l($r),Be=r($r,"LI",{});var Uk=i(Be);oe=r(Uk,"P",{});var ao=i(oe);ct=s(ao,"See the "),L=r(ao,"A",{href:!0});var Wk=i(L);Y=s(Wk,"training"),Wk.forEach(t),pt=s(ao,", "),Ne=r(ao,"A",{href:!0});var Rk=i(Ne);J=s(Rk,"inference"),Rk.forEach(t),ht=s(ao," and "),Ie=r(ao,"A",{href:!0});var Hk=i(Ie);De=s(Hk,"scripts"),Hk.forEach(t),ut=s(ao," sections below for all details regarding usage."),ao.forEach(t),Uk.forEach(t),$r.forEach(t),Dl=l(n),Ba=r(n,"P",{});var Vk=i(Ba);qp=s(Vk,"T5 comes in different sizes:"),Vk.forEach(t),Sl=l(n),Ue=r(n,"UL",{});var At=i(Ue);ei=r(At,"LI",{});var Kk=i(ei);ti=r(Kk,"P",{});var Yk=i(ti);uo=r(Yk,"A",{href:!0,rel:!0});var Jk=i(uo);Ep=s(Jk,"t5-small"),Jk.forEach(t),Yk.forEach(t),Kk.forEach(t),jp=l(At),ni=r(At,"LI",{});var Zk=i(ni);oi=r(Zk,"P",{});var Xk=i(oi);mo=r(Xk,"A",{href:!0,rel:!0});var Qk=i(mo);Fp=s(Qk,"t5-base"),Qk.forEach(t),Xk.forEach(t),Zk.forEach(t),Mp=l(At),si=r(At,"LI",{});var eb=i(si);ai=r(eb,"P",{});var tb=i(ai);fo=r(tb,"A",{href:!0,rel:!0});var nb=i(fo);Pp=s(nb,"t5-large"),nb.forEach(t),tb.forEach(t),eb.forEach(t),Cp=l(At),ri=r(At,"LI",{});var ob=i(ri);ii=r(ob,"P",{});var sb=i(ii);_o=r(sb,"A",{href:!0,rel:!0});var ab=i(_o);Ap=s(ab,"t5-3b"),ab.forEach(t),sb.forEach(t),ob.forEach(t),Lp=l(At),di=r(At,"LI",{});var rb=i(di);Ua=r(rb,"P",{});var Fk=i(Ua);go=r(Fk,"A",{href:!0,rel:!0});var ib=i(go);Np=s(ib,"t5-11b"),ib.forEach(t),Ip=s(Fk,"."),Fk.forEach(t),rb.forEach(t),At.forEach(t),Ol=l(n),Wa=r(n,"P",{});var db=i(Wa);Dp=s(db,"Based on the original T5 model, Google has released some follow-up works:"),db.forEach(t),Gl=l(n),xt=r(n,"UL",{});var Er=i(xt);li=r(Er,"LI",{});var lb=i(li);zn=r(lb,"P",{});var Ll=i(zn);ci=r(Ll,"STRONG",{});var cb=i(ci);Sp=s(cb,"T5v1.1"),cb.forEach(t),Op=s(Ll,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ra=r(Ll,"A",{href:!0});var pb=i(Ra);Gp=s(pb,"here"),pb.forEach(t),Bp=s(Ll,"."),Ll.forEach(t),lb.forEach(t),Up=l(Er),pi=r(Er,"LI",{});var hb=i(pi);xn=r(hb,"P",{});var Nl=i(xn);hi=r(Nl,"STRONG",{});var ub=i(hi);Wp=s(ub,"mT5"),ub.forEach(t),Rp=s(Nl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ha=r(Nl,"A",{href:!0});var mb=i(Ha);Hp=s(mb,"here"),mb.forEach(t),Vp=s(Nl,"."),Nl.forEach(t),hb.forEach(t),Kp=l(Er),ui=r(Er,"LI",{});var fb=i(ui);$n=r(fb,"P",{});var Il=i($n);mi=r(Il,"STRONG",{});var _b=i(mi);Yp=s(_b,"byT5"),_b.forEach(t),Jp=s(Il,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Va=r(Il,"A",{href:!0});var gb=i(Va);Zp=s(gb,"here"),gb.forEach(t),Xp=s(Il,"."),Il.forEach(t),fb.forEach(t),Er.forEach(t),Bl=l(n),qn=r(n,"P",{});var Mc=i(qn);Qp=s(Mc,"All checkpoints can be found on the "),To=r(Mc,"A",{href:!0,rel:!0});var Tb=i(To);eh=s(Tb,"hub"),Tb.forEach(t),th=s(Mc,"."),Mc.forEach(t),Ul=l(n),$t=r(n,"P",{});var jr=i($t);nh=s(jr,"This model was contributed by "),vo=r(jr,"A",{href:!0,rel:!0});var vb=i(vo);oh=s(vb,"thomwolf"),vb.forEach(t),sh=s(jr,". The original code can be found "),ko=r(jr,"A",{href:!0,rel:!0});var kb=i(ko);ah=s(kb,"here"),kb.forEach(t),rh=s(jr,"."),jr.forEach(t),Wl=l(n),Ka=r(n,"A",{id:!0}),i(Ka).forEach(t),Rl=l(n),Yt=r(n,"H2",{class:!0});var Pc=i(Yt);En=r(Pc,"A",{id:!0,class:!0,href:!0});var bb=i(En);fi=r(bb,"SPAN",{});var wb=i(fi);_(bo.$$.fragment,wb),wb.forEach(t),bb.forEach(t),ih=l(Pc),_i=r(Pc,"SPAN",{});var yb=i(_i);dh=s(yb,"Training"),yb.forEach(t),Pc.forEach(t),Hl=l(n),mt=r(n,"P",{});var ro=i(mt);lh=s(ro,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),gi=r(ro,"CODE",{});var zb=i(gi);ch=s(zb,"input_ids"),zb.forEach(t),ph=s(ro,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ti=r(ro,"CODE",{});var xb=i(Ti);hh=s(xb,"decoder_input_ids"),xb.forEach(t),uh=s(ro,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),vi=r(ro,"CODE",{});var $b=i(vi);mh=s($b,"labels"),$b.forEach(t),fh=s(ro,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),ro.forEach(t),Vl=l(n),jn=r(n,"P",{});var Cc=i(jn);_h=s(Cc,"One can use "),Ya=r(Cc,"A",{href:!0});var qb=i(Ya);gh=s(qb,"T5ForConditionalGeneration"),qb.forEach(t),Th=s(Cc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Cc.forEach(t),Kl=l(n),Fn=r(n,"UL",{});var Ac=i(Fn);dt=r(Ac,"LI",{});var Lt=i(dt);ki=r(Lt,"P",{});var Eb=i(ki);vh=s(Eb,"Unsupervised denoising training"),Eb.forEach(t),kh=l(Lt),_e=r(Lt,"P",{});var nt=i(_e);bh=s(nt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),bi=r(nt,"EM",{});var jb=i(bi);wh=s(jb,"a.k.a"),jb.forEach(t),yh=s(nt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),wi=r(nt,"EM",{});var Fb=i(wi);zh=s(Fb,"real"),Fb.forEach(t),xh=s(nt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),yi=r(nt,"CODE",{});var Mb=i(yi);$h=s(Mb,"<extra_id_0>"),Mb.forEach(t),qh=s(nt,`,
`),zi=r(nt,"CODE",{});var Pb=i(zi);Eh=s(Pb,"<extra_id_1>"),Pb.forEach(t),jh=s(nt,", \u2026 up to "),xi=r(nt,"CODE",{});var Cb=i(xi);Fh=s(Cb,"<extra_id_99>"),Cb.forEach(t),Mh=s(nt,`. As a default, 100 sentinel tokens are available in
`),Ja=r(nt,"A",{href:!0});var Ab=i(Ja);Ph=s(Ab,"T5Tokenizer"),Ab.forEach(t),Ch=s(nt,"."),nt.forEach(t),Ah=l(Lt),$i=r(Lt,"P",{});var Lb=i($i);Lh=s(Lb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Lb.forEach(t),Nh=l(Lt),_(wo.$$.fragment,Lt),Ih=l(Lt),yo=r(Lt,"P",{});var Lc=i(yo);Dh=s(Lc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),zo=r(Lc,"A",{href:!0,rel:!0});var Nb=i(zo);Sh=s(Nb,"run_t5_mlm_flax.py"),Nb.forEach(t),Oh=s(Lc,` script in the Examples
directory.`),Lc.forEach(t),Lt.forEach(t),Gh=l(Ac),ge=r(Ac,"LI",{});var ot=i(ge);qi=r(ot,"P",{});var Ib=i(qi);Bh=s(Ib,"Supervised training"),Ib.forEach(t),Uh=l(ot),Ei=r(ot,"P",{});var Db=i(Ei);Wh=s(Db,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Db.forEach(t),Rh=l(ot),_(xo.$$.fragment,ot),Hh=l(ot),ie=r(ot,"P",{});var we=i(ie);Vh=s(we,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),ji=r(we,"CODE",{});var Sb=i(ji);Kh=s(Sb,"input_ids"),Sb.forEach(t),Yh=s(we,` (which are the
`),Fi=r(we,"CODE",{});var Ob=i(Fi);Jh=s(Ob,"input_ids"),Ob.forEach(t),Zh=s(we," of the encoded input sequence) and "),Mi=r(we,"CODE",{});var Gb=i(Mi);Xh=s(Gb,"labels"),Gb.forEach(t),Qh=s(we," (which are the "),Pi=r(we,"CODE",{});var Bb=i(Pi);eu=s(Bb,"input_ids"),Bb.forEach(t),tu=s(we,` of the encoded
target sequence). The model will automatically create the `),Ci=r(we,"CODE",{});var Ub=i(Ci);nu=s(Ub,"decoder_input_ids"),Ub.forEach(t),ou=s(we," based on the "),Ai=r(we,"CODE",{});var Wb=i(Ai);su=s(Wb,"labels"),Wb.forEach(t),au=s(we,`, by
shifting them one position to the right and prepending the `),Li=r(we,"CODE",{});var Rb=i(Li);ru=s(Rb,"config.decoder_start_token_id"),Rb.forEach(t),iu=s(we,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),we.forEach(t),du=l(ot),Jt=r(ot,"P",{});var Fr=i(Jt);lu=s(Fr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ni=r(Fr,"CODE",{});var Hb=i(Ni);cu=s(Hb,"max_source_length"),Hb.forEach(t),pu=s(Fr," and "),Ii=r(Fr,"CODE",{});var Vb=i(Ii);hu=s(Vb,"max_target_length"),Vb.forEach(t),uu=s(Fr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Fr.forEach(t),mu=l(ot),Te=r(ot,"P",{});var st=i(Te);fu=s(st,"In addition, we must make sure that padding token id\u2019s of the "),Di=r(st,"CODE",{});var Kb=i(Di);_u=s(Kb,"labels"),Kb.forEach(t),gu=s(st,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Si=r(st,"CODE",{});var Yb=i(Si);Tu=s(Yb,"ignore_index"),Yb.forEach(t),vu=s(st,`
of the `),Oi=r(st,"CODE",{});var Jb=i(Oi);ku=s(Jb,"CrossEntropyLoss"),Jb.forEach(t),bu=s(st,". In Flax, one can use the "),Gi=r(st,"CODE",{});var Zb=i(Gi);wu=s(Zb,"decoder_attention_mask"),Zb.forEach(t),yu=s(st,` to ignore padded tokens from
the loss (see the `),$o=r(st,"A",{href:!0,rel:!0});var Xb=i($o);zu=s(Xb,"Flax summarization script"),Xb.forEach(t),xu=s(st,` for details). We also pass
`),Bi=r(st,"CODE",{});var Qb=i(Bi);$u=s(Qb,"attention_mask"),Qb.forEach(t),qu=s(st,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),st.forEach(t),Eu=l(ot),_(qo.$$.fragment,ot),ot.forEach(t),Ac.forEach(t),Yl=l(n),Za=r(n,"P",{});var e1=i(Za);ju=s(e1,"Additional training tips:"),e1.forEach(t),Jl=l(n),qt=r(n,"UL",{});var Mr=i(qt);Ui=r(Mr,"LI",{});var t1=i(Ui);Eo=r(t1,"P",{});var Nc=i(Eo);Fu=s(Nc,"T5 models need a slightly higher learning rate than the default one set in the "),Wi=r(Nc,"CODE",{});var n1=i(Wi);Mu=s(n1,"Trainer"),n1.forEach(t),Pu=s(Nc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Nc.forEach(t),t1.forEach(t),Cu=l(Mr),Ri=r(Mr,"LI",{});var o1=i(Ri);Zt=r(o1,"P",{});var Pr=i(Zt);Au=s(Pr,"According to "),jo=r(Pr,"A",{href:!0,rel:!0});var s1=i(jo);Lu=s(s1,"this forum post"),s1.forEach(t),Nu=s(Pr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Fo=r(Pr,"A",{href:!0,rel:!0});var a1=i(Fo);Iu=s(a1,"paper"),a1.forEach(t),Du=s(Pr,` for the task prefixes
used).`),Pr.forEach(t),o1.forEach(t),Su=l(Mr),Hi=r(Mr,"LI",{});var r1=i(Hi);Mo=r(r1,"P",{});var Ic=i(Mo);Ou=s(Ic,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Vi=r(Ic,"EM",{});var i1=i(Vi);Gu=s(i1,"pad_to_multiple_of"),i1.forEach(t),Bu=s(Ic,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Ic.forEach(t),r1.forEach(t),Mr.forEach(t),Zl=l(n),Xa=r(n,"A",{id:!0}),i(Xa).forEach(t),Xl=l(n),Xt=r(n,"H2",{class:!0});var Dc=i(Xt);Mn=r(Dc,"A",{id:!0,class:!0,href:!0});var d1=i(Mn);Ki=r(d1,"SPAN",{});var l1=i(Ki);_(Po.$$.fragment,l1),l1.forEach(t),d1.forEach(t),Uu=l(Dc),Yi=r(Dc,"SPAN",{});var c1=i(Yi);Wu=s(c1,"Inference"),c1.forEach(t),Dc.forEach(t),Ql=l(n),ft=r(n,"P",{});var io=i(ft);Ru=s(io,"At inference time, it is recommended to use "),Qa=r(io,"A",{href:!0});var p1=i(Qa);Hu=s(p1,"generate()"),p1.forEach(t),Vu=s(io,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Co=r(io,"A",{href:!0,rel:!0});var h1=i(Co);Ku=s(h1,"this blog post"),h1.forEach(t),Yu=s(io,` to know all the details about generating text with Transformers.
There\u2019s also `),Ao=r(io,"A",{href:!0,rel:!0});var u1=i(Ao);Ju=s(u1,"this blog post"),u1.forEach(t),Zu=s(io,` which explains how
generation works in general in encoder-decoder models.`),io.forEach(t),ec=l(n),_(Lo.$$.fragment,n),tc=l(n),We=r(n,"P",{});var Nt=i(We);Xu=s(Nt,"Note that T5 uses the "),Ji=r(Nt,"CODE",{});var m1=i(Ji);Qu=s(m1,"pad_token_id"),m1.forEach(t),em=s(Nt," as the "),Zi=r(Nt,"CODE",{});var f1=i(Zi);tm=s(f1,"decoder_start_token_id"),f1.forEach(t),nm=s(Nt,`, so when doing generation without using
`),er=r(Nt,"A",{href:!0});var _1=i(er);om=s(_1,"generate()"),_1.forEach(t),sm=s(Nt,", make sure you start it with the "),Xi=r(Nt,"CODE",{});var g1=i(Xi);am=s(g1,"pad_token_id"),g1.forEach(t),rm=s(Nt,"."),Nt.forEach(t),nc=l(n),tr=r(n,"P",{});var T1=i(tr);im=s(T1,"The example above only shows a single example. You can also do batched inference, like so:"),T1.forEach(t),oc=l(n),_(No.$$.fragment,n),sc=l(n),nr=r(n,"A",{id:!0}),i(nr).forEach(t),ac=l(n),Qt=r(n,"H2",{class:!0});var Sc=i(Qt);Pn=r(Sc,"A",{id:!0,class:!0,href:!0});var v1=i(Pn);Qi=r(v1,"SPAN",{});var k1=i(Qi);_(Io.$$.fragment,k1),k1.forEach(t),v1.forEach(t),dm=l(Sc),ed=r(Sc,"SPAN",{});var b1=i(ed);lm=s(b1,"Example scripts"),b1.forEach(t),Sc.forEach(t),rc=l(n),or=r(n,"P",{});var w1=i(or);cm=s(w1,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),w1.forEach(t),ic=l(n),Cn=r(n,"UL",{});var Oc=i(Cn);td=r(Oc,"LI",{});var y1=i(td);en=r(y1,"P",{});var Cr=i(en);pm=s(Cr,"pre-training: the "),Do=r(Cr,"A",{href:!0,rel:!0});var z1=i(Do);hm=s(z1,"run_t5_mlm_flax.py"),z1.forEach(t),um=s(Cr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),So=r(Cr,"A",{href:!0,rel:!0});var x1=i(So);mm=s(x1,"t5_tokenizer_model.py"),x1.forEach(t),fm=s(Cr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Cr.forEach(t),y1.forEach(t),_m=l(Oc),nd=r(Oc,"LI",{});var $1=i(nd);Se=r($1,"P",{});var vt=i(Se);gm=s(vt,"fine-tuning: T5 is supported by the official summarization scripts ("),Oo=r(vt,"A",{href:!0,rel:!0});var q1=i(Oo);Tm=s(q1,"PyTorch"),q1.forEach(t),vm=s(vt,", "),Go=r(vt,"A",{href:!0,rel:!0});var E1=i(Go);km=s(E1,"Tensorflow"),E1.forEach(t),bm=s(vt,", and "),Bo=r(vt,"A",{href:!0,rel:!0});var j1=i(Bo);wm=s(j1,"Flax"),j1.forEach(t),ym=s(vt,`) and translation scripts
(`),Uo=r(vt,"A",{href:!0,rel:!0});var F1=i(Uo);zm=s(F1,"PyTorch"),F1.forEach(t),xm=s(vt," and "),Wo=r(vt,"A",{href:!0,rel:!0});var M1=i(Wo);$m=s(M1,"Tensorflow"),M1.forEach(t),qm=s(vt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),vt.forEach(t),$1.forEach(t),Oc.forEach(t),dc=l(n),tn=r(n,"H2",{class:!0});var Gc=i(tn);An=r(Gc,"A",{id:!0,class:!0,href:!0});var P1=i(An);od=r(P1,"SPAN",{});var C1=i(od);_(Ro.$$.fragment,C1),C1.forEach(t),P1.forEach(t),Em=l(Gc),sd=r(Gc,"SPAN",{});var A1=i(sd);jm=s(A1,"T5Config"),A1.forEach(t),Gc.forEach(t),lc=l(n),kt=r(n,"DIV",{class:!0});var Ar=i(kt);_(Ho.$$.fragment,Ar),Fm=l(Ar),bt=r(Ar,"P",{});var lo=i(bt);Mm=s(lo,"This is the configuration class to store the configuration of a "),sr=r(lo,"A",{href:!0});var L1=i(sr);Pm=s(L1,"T5Model"),L1.forEach(t),Cm=s(lo," or a "),ar=r(lo,"A",{href:!0});var N1=i(ar);Am=s(N1,"TFT5Model"),N1.forEach(t),Lm=s(lo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Vo=r(lo,"A",{href:!0,rel:!0});var I1=i(Vo);Nm=s(I1,"t5-small"),I1.forEach(t),Im=s(lo," architecture."),lo.forEach(t),Dm=l(Ar),nn=r(Ar,"P",{});var Lr=i(nn);Sm=s(Lr,"Configuration objects inherit from "),rr=r(Lr,"A",{href:!0});var D1=i(rr);Om=s(D1,"PretrainedConfig"),D1.forEach(t),Gm=s(Lr,` and can be used to control the model outputs. Read the
documentation from `),ir=r(Lr,"A",{href:!0});var S1=i(ir);Bm=s(S1,"PretrainedConfig"),S1.forEach(t),Um=s(Lr," for more information."),Lr.forEach(t),Ar.forEach(t),cc=l(n),on=r(n,"H2",{class:!0});var Bc=i(on);Ln=r(Bc,"A",{id:!0,class:!0,href:!0});var O1=i(Ln);ad=r(O1,"SPAN",{});var G1=i(ad);_(Ko.$$.fragment,G1),G1.forEach(t),O1.forEach(t),Wm=l(Bc),rd=r(Bc,"SPAN",{});var B1=i(rd);Rm=s(B1,"T5Tokenizer"),B1.forEach(t),Bc.forEach(t),pc=l(n),Z=r(n,"DIV",{class:!0});var ye=i(Z);_(Yo.$$.fragment,ye),Hm=l(ye),Jo=r(ye,"P",{});var Uc=i(Jo);Vm=s(Uc,"Construct a T5 tokenizer. Based on "),Zo=r(Uc,"A",{href:!0,rel:!0});var U1=i(Zo);Km=s(U1,"SentencePiece"),U1.forEach(t),Ym=s(Uc,"."),Uc.forEach(t),Jm=l(ye),Xo=r(ye,"P",{});var Wc=i(Xo);Zm=s(Wc,"This tokenizer inherits from "),dr=r(Wc,"A",{href:!0});var W1=i(dr);Xm=s(W1,"PreTrainedTokenizer"),W1.forEach(t),Qm=s(Wc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Wc.forEach(t),ef=l(ye),sn=r(ye,"P",{});var Nr=i(sn);tf=s(Nr,`Attributes:
sp_model (`),id=r(Nr,"CODE",{});var R1=i(id);nf=s(R1,"SentencePieceProcessor"),R1.forEach(t),of=s(Nr,`):
The `),dd=r(Nr,"EM",{});var H1=i(dd);sf=s(H1,"SentencePiece"),H1.forEach(t),af=s(Nr," processor that is used for every conversion (string, tokens and IDs)."),Nr.forEach(t),rf=l(ye),Et=r(ye,"DIV",{class:!0});var Ir=i(Et);_(Qo.$$.fragment,Ir),df=l(Ir),ld=r(Ir,"P",{});var V1=i(ld);lf=s(V1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),V1.forEach(t),cf=l(Ir),es=r(Ir,"UL",{});var Rc=i(es);lr=r(Rc,"LI",{});var Mk=i(lr);pf=s(Mk,"single sequence: "),cd=r(Mk,"CODE",{});var K1=i(cd);hf=s(K1,"X </s>"),K1.forEach(t),Mk.forEach(t),uf=l(Rc),cr=r(Rc,"LI",{});var Pk=i(cr);mf=s(Pk,"pair of sequences: "),pd=r(Pk,"CODE",{});var Y1=i(pd);ff=s(Y1,"A </s> B </s>"),Y1.forEach(t),Pk.forEach(t),Rc.forEach(t),Ir.forEach(t),_f=l(ye),Nn=r(ye,"DIV",{class:!0});var Hc=i(Nn);_(ts.$$.fragment,Hc),gf=l(Hc),ns=r(Hc,"P",{});var Vc=i(ns);Tf=s(Vc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hd=r(Vc,"CODE",{});var J1=i(hd);vf=s(J1,"prepare_for_model"),J1.forEach(t),kf=s(Vc," method."),Vc.forEach(t),Hc.forEach(t),bf=l(ye),In=r(ye,"DIV",{class:!0});var Kc=i(In);_(os.$$.fragment,Kc),wf=l(Kc),ud=r(Kc,"P",{});var Z1=i(ud);yf=s(Z1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Z1.forEach(t),Kc.forEach(t),zf=l(ye),md=r(ye,"DIV",{class:!0}),i(md).forEach(t),ye.forEach(t),hc=l(n),an=r(n,"H2",{class:!0});var Yc=i(an);Dn=r(Yc,"A",{id:!0,class:!0,href:!0});var X1=i(Dn);fd=r(X1,"SPAN",{});var Q1=i(fd);_(ss.$$.fragment,Q1),Q1.forEach(t),X1.forEach(t),xf=l(Yc),_d=r(Yc,"SPAN",{});var e5=i(_d);$f=s(e5,"T5TokenizerFast"),e5.forEach(t),Yc.forEach(t),uc=l(n),Oe=r(n,"DIV",{class:!0});var It=i(Oe);_(as.$$.fragment,It),qf=l(It),rn=r(It,"P",{});var Dr=i(rn);Ef=s(Dr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),gd=r(Dr,"EM",{});var t5=i(gd);jf=s(t5,"tokenizers"),t5.forEach(t),Ff=s(Dr,` library). Based on
`),rs=r(Dr,"A",{href:!0,rel:!0});var n5=i(rs);Mf=s(n5,"Unigram"),n5.forEach(t),Pf=s(Dr,"."),Dr.forEach(t),Cf=l(It),is=r(It,"P",{});var Jc=i(is);Af=s(Jc,"This tokenizer inherits from "),pr=r(Jc,"A",{href:!0});var o5=i(pr);Lf=s(o5,"PreTrainedTokenizerFast"),o5.forEach(t),Nf=s(Jc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Jc.forEach(t),If=l(It),jt=r(It,"DIV",{class:!0});var Sr=i(jt);_(ds.$$.fragment,Sr),Df=l(Sr),Td=r(Sr,"P",{});var s5=i(Td);Sf=s(s5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),s5.forEach(t),Of=l(Sr),ls=r(Sr,"UL",{});var Zc=i(ls);hr=r(Zc,"LI",{});var Ck=i(hr);Gf=s(Ck,"single sequence: "),vd=r(Ck,"CODE",{});var a5=i(vd);Bf=s(a5,"X </s>"),a5.forEach(t),Ck.forEach(t),Uf=l(Zc),ur=r(Zc,"LI",{});var Ak=i(ur);Wf=s(Ak,"pair of sequences: "),kd=r(Ak,"CODE",{});var r5=i(kd);Rf=s(r5,"A </s> B </s>"),r5.forEach(t),Ak.forEach(t),Zc.forEach(t),Sr.forEach(t),Hf=l(It),Sn=r(It,"DIV",{class:!0});var Xc=i(Sn);_(cs.$$.fragment,Xc),Vf=l(Xc),bd=r(Xc,"P",{});var i5=i(bd);Kf=s(i5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),i5.forEach(t),Xc.forEach(t),It.forEach(t),mc=l(n),dn=r(n,"H2",{class:!0});var Qc=i(dn);On=r(Qc,"A",{id:!0,class:!0,href:!0});var d5=i(On);wd=r(d5,"SPAN",{});var l5=i(wd);_(ps.$$.fragment,l5),l5.forEach(t),d5.forEach(t),Yf=l(Qc),yd=r(Qc,"SPAN",{});var c5=i(yd);Jf=s(c5,"T5Model"),c5.forEach(t),Qc.forEach(t),fc=l(n),X=r(n,"DIV",{class:!0});var ze=i(X);_(hs.$$.fragment,ze),Zf=l(ze),zd=r(ze,"P",{});var p5=i(zd);Xf=s(p5,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),p5.forEach(t),Qf=l(ze),us=r(ze,"P",{});var ep=i(us);e_=s(ep,"The T5 model was proposed in "),ms=r(ep,"A",{href:!0,rel:!0});var h5=i(ms);t_=s(h5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),h5.forEach(t),n_=s(ep,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ep.forEach(t),o_=l(ze),fs=r(ze,"P",{});var tp=i(fs);s_=s(tp,"This model inherits from "),mr=r(tp,"A",{href:!0});var u5=i(mr);a_=s(u5,"PreTrainedModel"),u5.forEach(t),r_=s(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(t),i_=l(ze),_s=r(ze,"P",{});var np=i(_s);d_=s(np,"This model is also a PyTorch "),gs=r(np,"A",{href:!0,rel:!0});var m5=i(gs);l_=s(m5,"torch.nn.Module"),m5.forEach(t),c_=s(np,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),np.forEach(t),p_=l(ze),Re=r(ze,"DIV",{class:!0});var Dt=i(Re);_(Ts.$$.fragment,Dt),h_=l(Dt),ln=r(Dt,"P",{});var Or=i(ln);u_=s(Or,"The "),fr=r(Or,"A",{href:!0});var f5=i(fr);m_=s(f5,"T5Model"),f5.forEach(t),f_=s(Or," forward method, overrides the "),xd=r(Or,"CODE",{});var _5=i(xd);__=s(_5,"__call__"),_5.forEach(t),g_=s(Or," special method."),Or.forEach(t),T_=l(Dt),_(Gn.$$.fragment,Dt),v_=l(Dt),$d=r(Dt,"P",{});var g5=i($d);k_=s(g5,"Example:"),g5.forEach(t),b_=l(Dt),_(vs.$$.fragment,Dt),Dt.forEach(t),w_=l(ze),He=r(ze,"DIV",{class:!0});var St=i(He);_(ks.$$.fragment,St),y_=l(St),qd=r(St,"P",{});var T5=i(qd);z_=s(T5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),T5.forEach(t),x_=l(St),Ed=r(St,"P",{});var v5=i(Ed);$_=s(v5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),v5.forEach(t),q_=l(St),jd=r(St,"P",{});var k5=i(jd);E_=s(k5,"Example:"),k5.forEach(t),j_=l(St),_(bs.$$.fragment,St),St.forEach(t),F_=l(ze),_t=r(ze,"DIV",{class:!0});var co=i(_t);_(ws.$$.fragment,co),M_=l(co),Fd=r(co,"P",{});var b5=i(Fd);P_=s(b5,"Moves the model to cpu from a model parallel state."),b5.forEach(t),C_=l(co),Md=r(co,"P",{});var w5=i(Md);A_=s(w5,"Example:"),w5.forEach(t),L_=l(co),_(ys.$$.fragment,co),co.forEach(t),ze.forEach(t),_c=l(n),cn=r(n,"H2",{class:!0});var op=i(cn);Bn=r(op,"A",{id:!0,class:!0,href:!0});var y5=i(Bn);Pd=r(y5,"SPAN",{});var z5=i(Pd);_(zs.$$.fragment,z5),z5.forEach(t),y5.forEach(t),N_=l(op),Cd=r(op,"SPAN",{});var x5=i(Cd);I_=s(x5,"T5ForConditionalGeneration"),x5.forEach(t),op.forEach(t),gc=l(n),Q=r(n,"DIV",{class:!0});var xe=i(Q);_(xs.$$.fragment,xe),D_=l(xe),$s=r(xe,"P",{});var sp=i($s);S_=s(sp,"T5 Model with a "),Ad=r(sp,"CODE",{});var $5=i(Ad);O_=s($5,"language modeling"),$5.forEach(t),G_=s(sp," head on top."),sp.forEach(t),B_=l(xe),qs=r(xe,"P",{});var ap=i(qs);U_=s(ap,"The T5 model was proposed in "),Es=r(ap,"A",{href:!0,rel:!0});var q5=i(Es);W_=s(q5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),q5.forEach(t),R_=s(ap,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ap.forEach(t),H_=l(xe),js=r(xe,"P",{});var rp=i(js);V_=s(rp,"This model inherits from "),_r=r(rp,"A",{href:!0});var E5=i(_r);K_=s(E5,"PreTrainedModel"),E5.forEach(t),Y_=s(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),J_=l(xe),Fs=r(xe,"P",{});var ip=i(Fs);Z_=s(ip,"This model is also a PyTorch "),Ms=r(ip,"A",{href:!0,rel:!0});var j5=i(Ms);X_=s(j5,"torch.nn.Module"),j5.forEach(t),Q_=s(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),eg=l(xe),Ve=r(xe,"DIV",{class:!0});var Ot=i(Ve);_(Ps.$$.fragment,Ot),tg=l(Ot),pn=r(Ot,"P",{});var Gr=i(pn);ng=s(Gr,"The "),gr=r(Gr,"A",{href:!0});var F5=i(gr);og=s(F5,"T5ForConditionalGeneration"),F5.forEach(t),sg=s(Gr," forward method, overrides the "),Ld=r(Gr,"CODE",{});var M5=i(Ld);ag=s(M5,"__call__"),M5.forEach(t),rg=s(Gr," special method."),Gr.forEach(t),ig=l(Ot),_(Un.$$.fragment,Ot),dg=l(Ot),Nd=r(Ot,"P",{});var P5=i(Nd);lg=s(P5,"Examples:"),P5.forEach(t),cg=l(Ot),_(Cs.$$.fragment,Ot),Ot.forEach(t),pg=l(xe),Ke=r(xe,"DIV",{class:!0});var Gt=i(Ke);_(As.$$.fragment,Gt),hg=l(Gt),Id=r(Gt,"P",{});var C5=i(Id);ug=s(C5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),C5.forEach(t),mg=l(Gt),Dd=r(Gt,"P",{});var A5=i(Dd);fg=s(A5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),A5.forEach(t),_g=l(Gt),Sd=r(Gt,"P",{});var L5=i(Sd);gg=s(L5,"Example:"),L5.forEach(t),Tg=l(Gt),_(Ls.$$.fragment,Gt),Gt.forEach(t),vg=l(xe),gt=r(xe,"DIV",{class:!0});var po=i(gt);_(Ns.$$.fragment,po),kg=l(po),Od=r(po,"P",{});var N5=i(Od);bg=s(N5,"Moves the model to cpu from a model parallel state."),N5.forEach(t),wg=l(po),Gd=r(po,"P",{});var I5=i(Gd);yg=s(I5,"Example:"),I5.forEach(t),zg=l(po),_(Is.$$.fragment,po),po.forEach(t),xe.forEach(t),Tc=l(n),hn=r(n,"H2",{class:!0});var dp=i(hn);Wn=r(dp,"A",{id:!0,class:!0,href:!0});var D5=i(Wn);Bd=r(D5,"SPAN",{});var S5=i(Bd);_(Ds.$$.fragment,S5),S5.forEach(t),D5.forEach(t),xg=l(dp),Ud=r(dp,"SPAN",{});var O5=i(Ud);$g=s(O5,"T5EncoderModel"),O5.forEach(t),dp.forEach(t),vc=l(n),ee=r(n,"DIV",{class:!0});var $e=i(ee);_(Ss.$$.fragment,$e),qg=l($e),Wd=r($e,"P",{});var G5=i(Wd);Eg=s(G5,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),G5.forEach(t),jg=l($e),Os=r($e,"P",{});var lp=i(Os);Fg=s(lp,"The T5 model was proposed in "),Gs=r(lp,"A",{href:!0,rel:!0});var B5=i(Gs);Mg=s(B5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),B5.forEach(t),Pg=s(lp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),lp.forEach(t),Cg=l($e),Bs=r($e,"P",{});var cp=i(Bs);Ag=s(cp,"This model inherits from "),Tr=r(cp,"A",{href:!0});var U5=i(Tr);Lg=s(U5,"PreTrainedModel"),U5.forEach(t),Ng=s(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),Ig=l($e),Us=r($e,"P",{});var pp=i(Us);Dg=s(pp,"This model is also a PyTorch "),Ws=r(pp,"A",{href:!0,rel:!0});var W5=i(Ws);Sg=s(W5,"torch.nn.Module"),W5.forEach(t),Og=s(pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pp.forEach(t),Gg=l($e),Ye=r($e,"DIV",{class:!0});var Bt=i(Ye);_(Rs.$$.fragment,Bt),Bg=l(Bt),un=r(Bt,"P",{});var Br=i(un);Ug=s(Br,"The "),vr=r(Br,"A",{href:!0});var R5=i(vr);Wg=s(R5,"T5EncoderModel"),R5.forEach(t),Rg=s(Br," forward method, overrides the "),Rd=r(Br,"CODE",{});var H5=i(Rd);Hg=s(H5,"__call__"),H5.forEach(t),Vg=s(Br," special method."),Br.forEach(t),Kg=l(Bt),_(Rn.$$.fragment,Bt),Yg=l(Bt),Hd=r(Bt,"P",{});var V5=i(Hd);Jg=s(V5,"Example:"),V5.forEach(t),Zg=l(Bt),_(Hs.$$.fragment,Bt),Bt.forEach(t),Xg=l($e),Je=r($e,"DIV",{class:!0});var Ut=i(Je);_(Vs.$$.fragment,Ut),Qg=l(Ut),Vd=r(Ut,"P",{});var K5=i(Vd);eT=s(K5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),K5.forEach(t),tT=l(Ut),Kd=r(Ut,"P",{});var Y5=i(Kd);nT=s(Y5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Y5.forEach(t),oT=l(Ut),Yd=r(Ut,"P",{});var J5=i(Yd);sT=s(J5,"Example:"),J5.forEach(t),aT=l(Ut),_(Ks.$$.fragment,Ut),Ut.forEach(t),rT=l($e),Tt=r($e,"DIV",{class:!0});var ho=i(Tt);_(Ys.$$.fragment,ho),iT=l(ho),Jd=r(ho,"P",{});var Z5=i(Jd);dT=s(Z5,"Moves the model to cpu from a model parallel state."),Z5.forEach(t),lT=l(ho),Zd=r(ho,"P",{});var X5=i(Zd);cT=s(X5,"Example:"),X5.forEach(t),pT=l(ho),_(Js.$$.fragment,ho),ho.forEach(t),$e.forEach(t),kc=l(n),mn=r(n,"H2",{class:!0});var hp=i(mn);Hn=r(hp,"A",{id:!0,class:!0,href:!0});var Q5=i(Hn);Xd=r(Q5,"SPAN",{});var ew=i(Xd);_(Zs.$$.fragment,ew),ew.forEach(t),Q5.forEach(t),hT=l(hp),Qd=r(hp,"SPAN",{});var tw=i(Qd);uT=s(tw,"TFT5Model"),tw.forEach(t),hp.forEach(t),bc=l(n),de=r(n,"DIV",{class:!0});var at=i(de);_(Xs.$$.fragment,at),mT=l(at),el=r(at,"P",{});var nw=i(el);fT=s(nw,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),nw.forEach(t),_T=l(at),Qs=r(at,"P",{});var up=i(Qs);gT=s(up,"The T5 model was proposed in "),ea=r(up,"A",{href:!0,rel:!0});var ow=i(ea);TT=s(ow,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ow.forEach(t),vT=s(up,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),up.forEach(t),kT=l(at),ta=r(at,"P",{});var mp=i(ta);bT=s(mp,"This model inherits from "),kr=r(mp,"A",{href:!0});var sw=i(kr);wT=s(sw,"TFPreTrainedModel"),sw.forEach(t),yT=s(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(t),zT=l(at),na=r(at,"P",{});var fp=i(na);xT=s(fp,"This model is also a "),oa=r(fp,"A",{href:!0,rel:!0});var aw=i(oa);$T=s(aw,"tf.keras.Model"),aw.forEach(t),qT=s(fp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fp.forEach(t),ET=l(at),_(Vn.$$.fragment,at),jT=l(at),Ze=r(at,"DIV",{class:!0});var Wt=i(Ze);_(sa.$$.fragment,Wt),FT=l(Wt),fn=r(Wt,"P",{});var Ur=i(fn);MT=s(Ur,"The "),br=r(Ur,"A",{href:!0});var rw=i(br);PT=s(rw,"TFT5Model"),rw.forEach(t),CT=s(Ur," forward method, overrides the "),tl=r(Ur,"CODE",{});var iw=i(tl);AT=s(iw,"__call__"),iw.forEach(t),LT=s(Ur," special method."),Ur.forEach(t),NT=l(Wt),_(Kn.$$.fragment,Wt),IT=l(Wt),nl=r(Wt,"P",{});var dw=i(nl);DT=s(dw,"Examples:"),dw.forEach(t),ST=l(Wt),_(aa.$$.fragment,Wt),Wt.forEach(t),at.forEach(t),wc=l(n),_n=r(n,"H2",{class:!0});var _p=i(_n);Yn=r(_p,"A",{id:!0,class:!0,href:!0});var lw=i(Yn);ol=r(lw,"SPAN",{});var cw=i(ol);_(ra.$$.fragment,cw),cw.forEach(t),lw.forEach(t),OT=l(_p),sl=r(_p,"SPAN",{});var pw=i(sl);GT=s(pw,"TFT5ForConditionalGeneration"),pw.forEach(t),_p.forEach(t),yc=l(n),le=r(n,"DIV",{class:!0});var rt=i(le);_(ia.$$.fragment,rt),BT=l(rt),da=r(rt,"P",{});var gp=i(da);UT=s(gp,"T5 Model with a "),al=r(gp,"CODE",{});var hw=i(al);WT=s(hw,"language modeling"),hw.forEach(t),RT=s(gp," head on top."),gp.forEach(t),HT=l(rt),la=r(rt,"P",{});var Tp=i(la);VT=s(Tp,"The T5 model was proposed in "),ca=r(Tp,"A",{href:!0,rel:!0});var uw=i(ca);KT=s(uw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),uw.forEach(t),YT=s(Tp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Tp.forEach(t),JT=l(rt),pa=r(rt,"P",{});var vp=i(pa);ZT=s(vp,"This model inherits from "),wr=r(vp,"A",{href:!0});var mw=i(wr);XT=s(mw,"TFPreTrainedModel"),mw.forEach(t),QT=s(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(t),ev=l(rt),ha=r(rt,"P",{});var kp=i(ha);tv=s(kp,"This model is also a "),ua=r(kp,"A",{href:!0,rel:!0});var fw=i(ua);nv=s(fw,"tf.keras.Model"),fw.forEach(t),ov=s(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),sv=l(rt),_(Jn.$$.fragment,rt),av=l(rt),Xe=r(rt,"DIV",{class:!0});var Rt=i(Xe);_(ma.$$.fragment,Rt),rv=l(Rt),gn=r(Rt,"P",{});var Wr=i(gn);iv=s(Wr,"The "),yr=r(Wr,"A",{href:!0});var _w=i(yr);dv=s(_w,"TFT5ForConditionalGeneration"),_w.forEach(t),lv=s(Wr," forward method, overrides the "),rl=r(Wr,"CODE",{});var gw=i(rl);cv=s(gw,"__call__"),gw.forEach(t),pv=s(Wr," special method."),Wr.forEach(t),hv=l(Rt),_(Zn.$$.fragment,Rt),uv=l(Rt),il=r(Rt,"P",{});var Tw=i(il);mv=s(Tw,"Examples:"),Tw.forEach(t),fv=l(Rt),_(fa.$$.fragment,Rt),Rt.forEach(t),rt.forEach(t),zc=l(n),Tn=r(n,"H2",{class:!0});var bp=i(Tn);Xn=r(bp,"A",{id:!0,class:!0,href:!0});var vw=i(Xn);dl=r(vw,"SPAN",{});var kw=i(dl);_(_a.$$.fragment,kw),kw.forEach(t),vw.forEach(t),_v=l(bp),ll=r(bp,"SPAN",{});var bw=i(ll);gv=s(bw,"TFT5EncoderModel"),bw.forEach(t),bp.forEach(t),xc=l(n),ce=r(n,"DIV",{class:!0});var it=i(ce);_(ga.$$.fragment,it),Tv=l(it),cl=r(it,"P",{});var ww=i(cl);vv=s(ww,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),ww.forEach(t),kv=l(it),Ta=r(it,"P",{});var wp=i(Ta);bv=s(wp,"The T5 model was proposed in "),va=r(wp,"A",{href:!0,rel:!0});var yw=i(va);wv=s(yw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),yw.forEach(t),yv=s(wp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),wp.forEach(t),zv=l(it),ka=r(it,"P",{});var yp=i(ka);xv=s(yp,"This model inherits from "),zr=r(yp,"A",{href:!0});var zw=i(zr);$v=s(zw,"TFPreTrainedModel"),zw.forEach(t),qv=s(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),Ev=l(it),ba=r(it,"P",{});var zp=i(ba);jv=s(zp,"This model is also a "),wa=r(zp,"A",{href:!0,rel:!0});var xw=i(wa);Fv=s(xw,"tf.keras.Model"),xw.forEach(t),Mv=s(zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zp.forEach(t),Pv=l(it),_(Qn.$$.fragment,it),Cv=l(it),Qe=r(it,"DIV",{class:!0});var Ht=i(Qe);_(ya.$$.fragment,Ht),Av=l(Ht),vn=r(Ht,"P",{});var Rr=i(vn);Lv=s(Rr,"The "),xr=r(Rr,"A",{href:!0});var $w=i(xr);Nv=s($w,"TFT5EncoderModel"),$w.forEach(t),Iv=s(Rr," forward method, overrides the "),pl=r(Rr,"CODE",{});var qw=i(pl);Dv=s(qw,"__call__"),qw.forEach(t),Sv=s(Rr," special method."),Rr.forEach(t),Ov=l(Ht),_(eo.$$.fragment,Ht),Gv=l(Ht),hl=r(Ht,"P",{});var Ew=i(hl);Bv=s(Ew,"Examples:"),Ew.forEach(t),Uv=l(Ht),_(za.$$.fragment,Ht),Ht.forEach(t),it.forEach(t),$c=l(n),kn=r(n,"H2",{class:!0});var xp=i(kn);to=r(xp,"A",{id:!0,class:!0,href:!0});var jw=i(to);ul=r(jw,"SPAN",{});var Fw=i(ul);_(xa.$$.fragment,Fw),Fw.forEach(t),jw.forEach(t),Wv=l(xp),ml=r(xp,"SPAN",{});var Mw=i(ml);Rv=s(Mw,"FlaxT5Model"),Mw.forEach(t),xp.forEach(t),qc=l(n),wt=r(n,"DIV",{class:!0});var Hr=i(wt);et=r(Hr,"DIV",{class:!0});var Vt=i(et);_($a.$$.fragment,Vt),Hv=l(Vt),bn=r(Vt,"P",{});var Vr=i(bn);Vv=s(Vr,"The "),fl=r(Vr,"CODE",{});var Pw=i(fl);Kv=s(Pw,"FlaxT5PreTrainedModel"),Pw.forEach(t),Yv=s(Vr,"forward method, overrides the "),_l=r(Vr,"CODE",{});var Cw=i(_l);Jv=s(Cw,"__call__"),Cw.forEach(t),Zv=s(Vr," special method."),Vr.forEach(t),Xv=l(Vt),_(no.$$.fragment,Vt),Qv=l(Vt),gl=r(Vt,"P",{});var Aw=i(gl);ek=s(Aw,"Example:"),Aw.forEach(t),tk=l(Vt),_(qa.$$.fragment,Vt),Vt.forEach(t),nk=l(Hr),Ft=r(Hr,"DIV",{class:!0});var Kr=i(Ft);_(Ea.$$.fragment,Kr),ok=l(Kr),Tl=r(Kr,"P",{});var Lw=i(Tl);sk=s(Lw,"Example:"),Lw.forEach(t),ak=l(Kr),_(ja.$$.fragment,Kr),Kr.forEach(t),rk=l(Hr),Mt=r(Hr,"DIV",{class:!0});var Yr=i(Mt);_(Fa.$$.fragment,Yr),ik=l(Yr),vl=r(Yr,"P",{});var Nw=i(vl);dk=s(Nw,"Example:"),Nw.forEach(t),lk=l(Yr),_(Ma.$$.fragment,Yr),Yr.forEach(t),Hr.forEach(t),Ec=l(n),wn=r(n,"H2",{class:!0});var $p=i(wn);oo=r($p,"A",{id:!0,class:!0,href:!0});var Iw=i(oo);kl=r(Iw,"SPAN",{});var Dw=i(kl);_(Pa.$$.fragment,Dw),Dw.forEach(t),Iw.forEach(t),ck=l($p),bl=r($p,"SPAN",{});var Sw=i(bl);pk=s(Sw,"FlaxT5ForConditionalGeneration"),Sw.forEach(t),$p.forEach(t),jc=l(n),yt=r(n,"DIV",{class:!0});var Jr=i(yt);tt=r(Jr,"DIV",{class:!0});var Kt=i(tt);_(Ca.$$.fragment,Kt),hk=l(Kt),yn=r(Kt,"P",{});var Zr=i(yn);uk=s(Zr,"The "),wl=r(Zr,"CODE",{});var Ow=i(wl);mk=s(Ow,"FlaxT5PreTrainedModel"),Ow.forEach(t),fk=s(Zr,"forward method, overrides the "),yl=r(Zr,"CODE",{});var Gw=i(yl);_k=s(Gw,"__call__"),Gw.forEach(t),gk=s(Zr," special method."),Zr.forEach(t),Tk=l(Kt),_(so.$$.fragment,Kt),vk=l(Kt),zl=r(Kt,"P",{});var Bw=i(zl);kk=s(Bw,"Example:"),Bw.forEach(t),bk=l(Kt),_(Aa.$$.fragment,Kt),Kt.forEach(t),wk=l(Jr),Pt=r(Jr,"DIV",{class:!0});var Xr=i(Pt);_(La.$$.fragment,Xr),yk=l(Xr),xl=r(Xr,"P",{});var Uw=i(xl);zk=s(Uw,"Example:"),Uw.forEach(t),xk=l(Xr),_(Na.$$.fragment,Xr),Xr.forEach(t),$k=l(Jr),Ct=r(Jr,"DIV",{class:!0});var Qr=i(Ct);_(Ia.$$.fragment,Qr),qk=l(Qr),$l=r(Qr,"P",{});var Ww=i($l);Ek=s(Ww,"Example:"),Ww.forEach(t),jk=l(Qr),_(Da.$$.fragment,Qr),Qr.forEach(t),Jr.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(iy)),c(y,"id","t5"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#t5"),c(b,"class","relative group"),c(te,"id","overview"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#overview"),c(E,"class","relative group"),c(re,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(re,"rel","nofollow"),c(L,"href","#training"),c(Ne,"href","#inference"),c(Ie,"href","#scripts"),c(uo,"href","https://huggingface.co/t5-small"),c(uo,"rel","nofollow"),c(mo,"href","https://huggingface.co/t5-base"),c(mo,"rel","nofollow"),c(fo,"href","https://huggingface.co/t5-large"),c(fo,"rel","nofollow"),c(_o,"href","https://huggingface.co/t5-3b"),c(_o,"rel","nofollow"),c(go,"href","https://huggingface.co/t5-11b"),c(go,"rel","nofollow"),c(Ra,"href","t5v1.1"),c(Ha,"href","mt5"),c(Va,"href","byt5"),c(To,"href","https://huggingface.co/models?search=t5"),c(To,"rel","nofollow"),c(vo,"href","https://huggingface.co/thomwolf"),c(vo,"rel","nofollow"),c(ko,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(ko,"rel","nofollow"),c(Ka,"id","training"),c(En,"id","training"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#training"),c(Yt,"class","relative group"),c(Ya,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(Ja,"href","/docs/transformers/v4.16.2/en/model_doc/mt5#transformers.T5Tokenizer"),c(zo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c(zo,"rel","nofollow"),c($o,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c($o,"rel","nofollow"),c(jo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(jo,"rel","nofollow"),c(Fo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Fo,"rel","nofollow"),c(Xa,"id","inference"),c(Mn,"id","inference"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#inference"),c(Xt,"class","relative group"),c(Qa,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(Co,"href","https://huggingface.co/blog/how-to-generate"),c(Co,"rel","nofollow"),c(Ao,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Ao,"rel","nofollow"),c(er,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(nr,"id","scripts"),c(Pn,"id","example-scripts"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#example-scripts"),c(Qt,"class","relative group"),c(Do,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Do,"rel","nofollow"),c(So,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(So,"rel","nofollow"),c(Oo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(Oo,"rel","nofollow"),c(Go,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Go,"rel","nofollow"),c(Bo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Bo,"rel","nofollow"),c(Uo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Uo,"rel","nofollow"),c(Wo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Wo,"rel","nofollow"),c(An,"id","transformers.T5Config"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.T5Config"),c(tn,"class","relative group"),c(sr,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Model"),c(ar,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.TFT5Model"),c(Vo,"href","https://huggingface.co/t5-small"),c(Vo,"rel","nofollow"),c(rr,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(ir,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(kt,"class","docstring"),c(Ln,"id","transformers.T5Tokenizer"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5Tokenizer"),c(on,"class","relative group"),c(Zo,"href","https://github.com/google/sentencepiece"),c(Zo,"rel","nofollow"),c(dr,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Et,"class","docstring"),c(Nn,"class","docstring"),c(In,"class","docstring"),c(md,"class","docstring"),c(Z,"class","docstring"),c(Dn,"id","transformers.T5TokenizerFast"),c(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dn,"href","#transformers.T5TokenizerFast"),c(an,"class","relative group"),c(rs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(rs,"rel","nofollow"),c(pr,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(jt,"class","docstring"),c(Sn,"class","docstring"),c(Oe,"class","docstring"),c(On,"id","transformers.T5Model"),c(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(On,"href","#transformers.T5Model"),c(dn,"class","relative group"),c(ms,"href","https://arxiv.org/abs/1910.10683"),c(ms,"rel","nofollow"),c(mr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(gs,"rel","nofollow"),c(fr,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5Model"),c(Re,"class","docstring"),c(He,"class","docstring"),c(_t,"class","docstring"),c(X,"class","docstring"),c(Bn,"id","transformers.T5ForConditionalGeneration"),c(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bn,"href","#transformers.T5ForConditionalGeneration"),c(cn,"class","relative group"),c(Es,"href","https://arxiv.org/abs/1910.10683"),c(Es,"rel","nofollow"),c(_r,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ms,"rel","nofollow"),c(gr,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(Ve,"class","docstring"),c(Ke,"class","docstring"),c(gt,"class","docstring"),c(Q,"class","docstring"),c(Wn,"id","transformers.T5EncoderModel"),c(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wn,"href","#transformers.T5EncoderModel"),c(hn,"class","relative group"),c(Gs,"href","https://arxiv.org/abs/1910.10683"),c(Gs,"rel","nofollow"),c(Tr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ws,"rel","nofollow"),c(vr,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.T5EncoderModel"),c(Ye,"class","docstring"),c(Je,"class","docstring"),c(Tt,"class","docstring"),c(ee,"class","docstring"),c(Hn,"id","transformers.TFT5Model"),c(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Hn,"href","#transformers.TFT5Model"),c(mn,"class","relative group"),c(ea,"href","https://arxiv.org/abs/1910.10683"),c(ea,"rel","nofollow"),c(kr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(oa,"rel","nofollow"),c(br,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.TFT5Model"),c(Ze,"class","docstring"),c(de,"class","docstring"),c(Yn,"id","transformers.TFT5ForConditionalGeneration"),c(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yn,"href","#transformers.TFT5ForConditionalGeneration"),c(_n,"class","relative group"),c(ca,"href","https://arxiv.org/abs/1910.10683"),c(ca,"rel","nofollow"),c(wr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ua,"rel","nofollow"),c(yr,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Xe,"class","docstring"),c(le,"class","docstring"),c(Xn,"id","transformers.TFT5EncoderModel"),c(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xn,"href","#transformers.TFT5EncoderModel"),c(Tn,"class","relative group"),c(va,"href","https://arxiv.org/abs/1910.10683"),c(va,"rel","nofollow"),c(zr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wa,"rel","nofollow"),c(xr,"href","/docs/transformers/v4.16.2/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Qe,"class","docstring"),c(ce,"class","docstring"),c(to,"id","transformers.FlaxT5Model"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxT5Model"),c(kn,"class","relative group"),c(et,"class","docstring"),c(Ft,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(oo,"id","transformers.FlaxT5ForConditionalGeneration"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.FlaxT5ForConditionalGeneration"),c(wn,"class","relative group"),c(tt,"class","docstring"),c(Pt,"class","docstring"),c(Ct,"class","docstring"),c(yt,"class","docstring")},m(n,h){e(document.head,u),p(n,$,h),p(n,b,h),e(b,y),e(y,x),g(z,x,null),e(b,w),e(b,q),e(q,Ee),p(n,se,h),p(n,E,h),e(E,te),e(te,O),g(ae,O,null),e(E,je),e(E,G),e(G,Fe),p(n,ve,h),p(n,B,h),e(B,I),e(B,re),e(re,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,ke,h),p(n,ue,h),e(ue,U),e(U,Me),p(n,be,h),p(n,M,h),e(M,Pe),p(n,H,h),p(n,V,h),e(V,me),e(me,A),e(A,Ce),e(A,fe),e(fe,D),e(A,Ae),e(A,W),e(W,Le),e(A,m),e(V,j),e(V,ne),e(ne,Ge),e(Ge,lt),e(V,S),e(V,Be),e(Be,oe),e(oe,ct),e(oe,L),e(L,Y),e(oe,pt),e(oe,Ne),e(Ne,J),e(oe,ht),e(oe,Ie),e(Ie,De),e(oe,ut),p(n,Dl,h),p(n,Ba,h),e(Ba,qp),p(n,Sl,h),p(n,Ue,h),e(Ue,ei),e(ei,ti),e(ti,uo),e(uo,Ep),e(Ue,jp),e(Ue,ni),e(ni,oi),e(oi,mo),e(mo,Fp),e(Ue,Mp),e(Ue,si),e(si,ai),e(ai,fo),e(fo,Pp),e(Ue,Cp),e(Ue,ri),e(ri,ii),e(ii,_o),e(_o,Ap),e(Ue,Lp),e(Ue,di),e(di,Ua),e(Ua,go),e(go,Np),e(Ua,Ip),p(n,Ol,h),p(n,Wa,h),e(Wa,Dp),p(n,Gl,h),p(n,xt,h),e(xt,li),e(li,zn),e(zn,ci),e(ci,Sp),e(zn,Op),e(zn,Ra),e(Ra,Gp),e(zn,Bp),e(xt,Up),e(xt,pi),e(pi,xn),e(xn,hi),e(hi,Wp),e(xn,Rp),e(xn,Ha),e(Ha,Hp),e(xn,Vp),e(xt,Kp),e(xt,ui),e(ui,$n),e($n,mi),e(mi,Yp),e($n,Jp),e($n,Va),e(Va,Zp),e($n,Xp),p(n,Bl,h),p(n,qn,h),e(qn,Qp),e(qn,To),e(To,eh),e(qn,th),p(n,Ul,h),p(n,$t,h),e($t,nh),e($t,vo),e(vo,oh),e($t,sh),e($t,ko),e(ko,ah),e($t,rh),p(n,Wl,h),p(n,Ka,h),p(n,Rl,h),p(n,Yt,h),e(Yt,En),e(En,fi),g(bo,fi,null),e(Yt,ih),e(Yt,_i),e(_i,dh),p(n,Hl,h),p(n,mt,h),e(mt,lh),e(mt,gi),e(gi,ch),e(mt,ph),e(mt,Ti),e(Ti,hh),e(mt,uh),e(mt,vi),e(vi,mh),e(mt,fh),p(n,Vl,h),p(n,jn,h),e(jn,_h),e(jn,Ya),e(Ya,gh),e(jn,Th),p(n,Kl,h),p(n,Fn,h),e(Fn,dt),e(dt,ki),e(ki,vh),e(dt,kh),e(dt,_e),e(_e,bh),e(_e,bi),e(bi,wh),e(_e,yh),e(_e,wi),e(wi,zh),e(_e,xh),e(_e,yi),e(yi,$h),e(_e,qh),e(_e,zi),e(zi,Eh),e(_e,jh),e(_e,xi),e(xi,Fh),e(_e,Mh),e(_e,Ja),e(Ja,Ph),e(_e,Ch),e(dt,Ah),e(dt,$i),e($i,Lh),e(dt,Nh),g(wo,dt,null),e(dt,Ih),e(dt,yo),e(yo,Dh),e(yo,zo),e(zo,Sh),e(yo,Oh),e(Fn,Gh),e(Fn,ge),e(ge,qi),e(qi,Bh),e(ge,Uh),e(ge,Ei),e(Ei,Wh),e(ge,Rh),g(xo,ge,null),e(ge,Hh),e(ge,ie),e(ie,Vh),e(ie,ji),e(ji,Kh),e(ie,Yh),e(ie,Fi),e(Fi,Jh),e(ie,Zh),e(ie,Mi),e(Mi,Xh),e(ie,Qh),e(ie,Pi),e(Pi,eu),e(ie,tu),e(ie,Ci),e(Ci,nu),e(ie,ou),e(ie,Ai),e(Ai,su),e(ie,au),e(ie,Li),e(Li,ru),e(ie,iu),e(ge,du),e(ge,Jt),e(Jt,lu),e(Jt,Ni),e(Ni,cu),e(Jt,pu),e(Jt,Ii),e(Ii,hu),e(Jt,uu),e(ge,mu),e(ge,Te),e(Te,fu),e(Te,Di),e(Di,_u),e(Te,gu),e(Te,Si),e(Si,Tu),e(Te,vu),e(Te,Oi),e(Oi,ku),e(Te,bu),e(Te,Gi),e(Gi,wu),e(Te,yu),e(Te,$o),e($o,zu),e(Te,xu),e(Te,Bi),e(Bi,$u),e(Te,qu),e(ge,Eu),g(qo,ge,null),p(n,Yl,h),p(n,Za,h),e(Za,ju),p(n,Jl,h),p(n,qt,h),e(qt,Ui),e(Ui,Eo),e(Eo,Fu),e(Eo,Wi),e(Wi,Mu),e(Eo,Pu),e(qt,Cu),e(qt,Ri),e(Ri,Zt),e(Zt,Au),e(Zt,jo),e(jo,Lu),e(Zt,Nu),e(Zt,Fo),e(Fo,Iu),e(Zt,Du),e(qt,Su),e(qt,Hi),e(Hi,Mo),e(Mo,Ou),e(Mo,Vi),e(Vi,Gu),e(Mo,Bu),p(n,Zl,h),p(n,Xa,h),p(n,Xl,h),p(n,Xt,h),e(Xt,Mn),e(Mn,Ki),g(Po,Ki,null),e(Xt,Uu),e(Xt,Yi),e(Yi,Wu),p(n,Ql,h),p(n,ft,h),e(ft,Ru),e(ft,Qa),e(Qa,Hu),e(ft,Vu),e(ft,Co),e(Co,Ku),e(ft,Yu),e(ft,Ao),e(Ao,Ju),e(ft,Zu),p(n,ec,h),g(Lo,n,h),p(n,tc,h),p(n,We,h),e(We,Xu),e(We,Ji),e(Ji,Qu),e(We,em),e(We,Zi),e(Zi,tm),e(We,nm),e(We,er),e(er,om),e(We,sm),e(We,Xi),e(Xi,am),e(We,rm),p(n,nc,h),p(n,tr,h),e(tr,im),p(n,oc,h),g(No,n,h),p(n,sc,h),p(n,nr,h),p(n,ac,h),p(n,Qt,h),e(Qt,Pn),e(Pn,Qi),g(Io,Qi,null),e(Qt,dm),e(Qt,ed),e(ed,lm),p(n,rc,h),p(n,or,h),e(or,cm),p(n,ic,h),p(n,Cn,h),e(Cn,td),e(td,en),e(en,pm),e(en,Do),e(Do,hm),e(en,um),e(en,So),e(So,mm),e(en,fm),e(Cn,_m),e(Cn,nd),e(nd,Se),e(Se,gm),e(Se,Oo),e(Oo,Tm),e(Se,vm),e(Se,Go),e(Go,km),e(Se,bm),e(Se,Bo),e(Bo,wm),e(Se,ym),e(Se,Uo),e(Uo,zm),e(Se,xm),e(Se,Wo),e(Wo,$m),e(Se,qm),p(n,dc,h),p(n,tn,h),e(tn,An),e(An,od),g(Ro,od,null),e(tn,Em),e(tn,sd),e(sd,jm),p(n,lc,h),p(n,kt,h),g(Ho,kt,null),e(kt,Fm),e(kt,bt),e(bt,Mm),e(bt,sr),e(sr,Pm),e(bt,Cm),e(bt,ar),e(ar,Am),e(bt,Lm),e(bt,Vo),e(Vo,Nm),e(bt,Im),e(kt,Dm),e(kt,nn),e(nn,Sm),e(nn,rr),e(rr,Om),e(nn,Gm),e(nn,ir),e(ir,Bm),e(nn,Um),p(n,cc,h),p(n,on,h),e(on,Ln),e(Ln,ad),g(Ko,ad,null),e(on,Wm),e(on,rd),e(rd,Rm),p(n,pc,h),p(n,Z,h),g(Yo,Z,null),e(Z,Hm),e(Z,Jo),e(Jo,Vm),e(Jo,Zo),e(Zo,Km),e(Jo,Ym),e(Z,Jm),e(Z,Xo),e(Xo,Zm),e(Xo,dr),e(dr,Xm),e(Xo,Qm),e(Z,ef),e(Z,sn),e(sn,tf),e(sn,id),e(id,nf),e(sn,of),e(sn,dd),e(dd,sf),e(sn,af),e(Z,rf),e(Z,Et),g(Qo,Et,null),e(Et,df),e(Et,ld),e(ld,lf),e(Et,cf),e(Et,es),e(es,lr),e(lr,pf),e(lr,cd),e(cd,hf),e(es,uf),e(es,cr),e(cr,mf),e(cr,pd),e(pd,ff),e(Z,_f),e(Z,Nn),g(ts,Nn,null),e(Nn,gf),e(Nn,ns),e(ns,Tf),e(ns,hd),e(hd,vf),e(ns,kf),e(Z,bf),e(Z,In),g(os,In,null),e(In,wf),e(In,ud),e(ud,yf),e(Z,zf),e(Z,md),p(n,hc,h),p(n,an,h),e(an,Dn),e(Dn,fd),g(ss,fd,null),e(an,xf),e(an,_d),e(_d,$f),p(n,uc,h),p(n,Oe,h),g(as,Oe,null),e(Oe,qf),e(Oe,rn),e(rn,Ef),e(rn,gd),e(gd,jf),e(rn,Ff),e(rn,rs),e(rs,Mf),e(rn,Pf),e(Oe,Cf),e(Oe,is),e(is,Af),e(is,pr),e(pr,Lf),e(is,Nf),e(Oe,If),e(Oe,jt),g(ds,jt,null),e(jt,Df),e(jt,Td),e(Td,Sf),e(jt,Of),e(jt,ls),e(ls,hr),e(hr,Gf),e(hr,vd),e(vd,Bf),e(ls,Uf),e(ls,ur),e(ur,Wf),e(ur,kd),e(kd,Rf),e(Oe,Hf),e(Oe,Sn),g(cs,Sn,null),e(Sn,Vf),e(Sn,bd),e(bd,Kf),p(n,mc,h),p(n,dn,h),e(dn,On),e(On,wd),g(ps,wd,null),e(dn,Yf),e(dn,yd),e(yd,Jf),p(n,fc,h),p(n,X,h),g(hs,X,null),e(X,Zf),e(X,zd),e(zd,Xf),e(X,Qf),e(X,us),e(us,e_),e(us,ms),e(ms,t_),e(us,n_),e(X,o_),e(X,fs),e(fs,s_),e(fs,mr),e(mr,a_),e(fs,r_),e(X,i_),e(X,_s),e(_s,d_),e(_s,gs),e(gs,l_),e(_s,c_),e(X,p_),e(X,Re),g(Ts,Re,null),e(Re,h_),e(Re,ln),e(ln,u_),e(ln,fr),e(fr,m_),e(ln,f_),e(ln,xd),e(xd,__),e(ln,g_),e(Re,T_),g(Gn,Re,null),e(Re,v_),e(Re,$d),e($d,k_),e(Re,b_),g(vs,Re,null),e(X,w_),e(X,He),g(ks,He,null),e(He,y_),e(He,qd),e(qd,z_),e(He,x_),e(He,Ed),e(Ed,$_),e(He,q_),e(He,jd),e(jd,E_),e(He,j_),g(bs,He,null),e(X,F_),e(X,_t),g(ws,_t,null),e(_t,M_),e(_t,Fd),e(Fd,P_),e(_t,C_),e(_t,Md),e(Md,A_),e(_t,L_),g(ys,_t,null),p(n,_c,h),p(n,cn,h),e(cn,Bn),e(Bn,Pd),g(zs,Pd,null),e(cn,N_),e(cn,Cd),e(Cd,I_),p(n,gc,h),p(n,Q,h),g(xs,Q,null),e(Q,D_),e(Q,$s),e($s,S_),e($s,Ad),e(Ad,O_),e($s,G_),e(Q,B_),e(Q,qs),e(qs,U_),e(qs,Es),e(Es,W_),e(qs,R_),e(Q,H_),e(Q,js),e(js,V_),e(js,_r),e(_r,K_),e(js,Y_),e(Q,J_),e(Q,Fs),e(Fs,Z_),e(Fs,Ms),e(Ms,X_),e(Fs,Q_),e(Q,eg),e(Q,Ve),g(Ps,Ve,null),e(Ve,tg),e(Ve,pn),e(pn,ng),e(pn,gr),e(gr,og),e(pn,sg),e(pn,Ld),e(Ld,ag),e(pn,rg),e(Ve,ig),g(Un,Ve,null),e(Ve,dg),e(Ve,Nd),e(Nd,lg),e(Ve,cg),g(Cs,Ve,null),e(Q,pg),e(Q,Ke),g(As,Ke,null),e(Ke,hg),e(Ke,Id),e(Id,ug),e(Ke,mg),e(Ke,Dd),e(Dd,fg),e(Ke,_g),e(Ke,Sd),e(Sd,gg),e(Ke,Tg),g(Ls,Ke,null),e(Q,vg),e(Q,gt),g(Ns,gt,null),e(gt,kg),e(gt,Od),e(Od,bg),e(gt,wg),e(gt,Gd),e(Gd,yg),e(gt,zg),g(Is,gt,null),p(n,Tc,h),p(n,hn,h),e(hn,Wn),e(Wn,Bd),g(Ds,Bd,null),e(hn,xg),e(hn,Ud),e(Ud,$g),p(n,vc,h),p(n,ee,h),g(Ss,ee,null),e(ee,qg),e(ee,Wd),e(Wd,Eg),e(ee,jg),e(ee,Os),e(Os,Fg),e(Os,Gs),e(Gs,Mg),e(Os,Pg),e(ee,Cg),e(ee,Bs),e(Bs,Ag),e(Bs,Tr),e(Tr,Lg),e(Bs,Ng),e(ee,Ig),e(ee,Us),e(Us,Dg),e(Us,Ws),e(Ws,Sg),e(Us,Og),e(ee,Gg),e(ee,Ye),g(Rs,Ye,null),e(Ye,Bg),e(Ye,un),e(un,Ug),e(un,vr),e(vr,Wg),e(un,Rg),e(un,Rd),e(Rd,Hg),e(un,Vg),e(Ye,Kg),g(Rn,Ye,null),e(Ye,Yg),e(Ye,Hd),e(Hd,Jg),e(Ye,Zg),g(Hs,Ye,null),e(ee,Xg),e(ee,Je),g(Vs,Je,null),e(Je,Qg),e(Je,Vd),e(Vd,eT),e(Je,tT),e(Je,Kd),e(Kd,nT),e(Je,oT),e(Je,Yd),e(Yd,sT),e(Je,aT),g(Ks,Je,null),e(ee,rT),e(ee,Tt),g(Ys,Tt,null),e(Tt,iT),e(Tt,Jd),e(Jd,dT),e(Tt,lT),e(Tt,Zd),e(Zd,cT),e(Tt,pT),g(Js,Tt,null),p(n,kc,h),p(n,mn,h),e(mn,Hn),e(Hn,Xd),g(Zs,Xd,null),e(mn,hT),e(mn,Qd),e(Qd,uT),p(n,bc,h),p(n,de,h),g(Xs,de,null),e(de,mT),e(de,el),e(el,fT),e(de,_T),e(de,Qs),e(Qs,gT),e(Qs,ea),e(ea,TT),e(Qs,vT),e(de,kT),e(de,ta),e(ta,bT),e(ta,kr),e(kr,wT),e(ta,yT),e(de,zT),e(de,na),e(na,xT),e(na,oa),e(oa,$T),e(na,qT),e(de,ET),g(Vn,de,null),e(de,jT),e(de,Ze),g(sa,Ze,null),e(Ze,FT),e(Ze,fn),e(fn,MT),e(fn,br),e(br,PT),e(fn,CT),e(fn,tl),e(tl,AT),e(fn,LT),e(Ze,NT),g(Kn,Ze,null),e(Ze,IT),e(Ze,nl),e(nl,DT),e(Ze,ST),g(aa,Ze,null),p(n,wc,h),p(n,_n,h),e(_n,Yn),e(Yn,ol),g(ra,ol,null),e(_n,OT),e(_n,sl),e(sl,GT),p(n,yc,h),p(n,le,h),g(ia,le,null),e(le,BT),e(le,da),e(da,UT),e(da,al),e(al,WT),e(da,RT),e(le,HT),e(le,la),e(la,VT),e(la,ca),e(ca,KT),e(la,YT),e(le,JT),e(le,pa),e(pa,ZT),e(pa,wr),e(wr,XT),e(pa,QT),e(le,ev),e(le,ha),e(ha,tv),e(ha,ua),e(ua,nv),e(ha,ov),e(le,sv),g(Jn,le,null),e(le,av),e(le,Xe),g(ma,Xe,null),e(Xe,rv),e(Xe,gn),e(gn,iv),e(gn,yr),e(yr,dv),e(gn,lv),e(gn,rl),e(rl,cv),e(gn,pv),e(Xe,hv),g(Zn,Xe,null),e(Xe,uv),e(Xe,il),e(il,mv),e(Xe,fv),g(fa,Xe,null),p(n,zc,h),p(n,Tn,h),e(Tn,Xn),e(Xn,dl),g(_a,dl,null),e(Tn,_v),e(Tn,ll),e(ll,gv),p(n,xc,h),p(n,ce,h),g(ga,ce,null),e(ce,Tv),e(ce,cl),e(cl,vv),e(ce,kv),e(ce,Ta),e(Ta,bv),e(Ta,va),e(va,wv),e(Ta,yv),e(ce,zv),e(ce,ka),e(ka,xv),e(ka,zr),e(zr,$v),e(ka,qv),e(ce,Ev),e(ce,ba),e(ba,jv),e(ba,wa),e(wa,Fv),e(ba,Mv),e(ce,Pv),g(Qn,ce,null),e(ce,Cv),e(ce,Qe),g(ya,Qe,null),e(Qe,Av),e(Qe,vn),e(vn,Lv),e(vn,xr),e(xr,Nv),e(vn,Iv),e(vn,pl),e(pl,Dv),e(vn,Sv),e(Qe,Ov),g(eo,Qe,null),e(Qe,Gv),e(Qe,hl),e(hl,Bv),e(Qe,Uv),g(za,Qe,null),p(n,$c,h),p(n,kn,h),e(kn,to),e(to,ul),g(xa,ul,null),e(kn,Wv),e(kn,ml),e(ml,Rv),p(n,qc,h),p(n,wt,h),e(wt,et),g($a,et,null),e(et,Hv),e(et,bn),e(bn,Vv),e(bn,fl),e(fl,Kv),e(bn,Yv),e(bn,_l),e(_l,Jv),e(bn,Zv),e(et,Xv),g(no,et,null),e(et,Qv),e(et,gl),e(gl,ek),e(et,tk),g(qa,et,null),e(wt,nk),e(wt,Ft),g(Ea,Ft,null),e(Ft,ok),e(Ft,Tl),e(Tl,sk),e(Ft,ak),g(ja,Ft,null),e(wt,rk),e(wt,Mt),g(Fa,Mt,null),e(Mt,ik),e(Mt,vl),e(vl,dk),e(Mt,lk),g(Ma,Mt,null),p(n,Ec,h),p(n,wn,h),e(wn,oo),e(oo,kl),g(Pa,kl,null),e(wn,ck),e(wn,bl),e(bl,pk),p(n,jc,h),p(n,yt,h),e(yt,tt),g(Ca,tt,null),e(tt,hk),e(tt,yn),e(yn,uk),e(yn,wl),e(wl,mk),e(yn,fk),e(yn,yl),e(yl,_k),e(yn,gk),e(tt,Tk),g(so,tt,null),e(tt,vk),e(tt,zl),e(zl,kk),e(tt,bk),g(Aa,tt,null),e(yt,wk),e(yt,Pt),g(La,Pt,null),e(Pt,yk),e(Pt,xl),e(xl,zk),e(Pt,xk),g(Na,Pt,null),e(yt,$k),e(yt,Ct),g(Ia,Ct,null),e(Ct,qk),e(Ct,$l),e($l,Ek),e(Ct,jk),g(Da,Ct,null),Fc=!0},p(n,[h]){const Sa={};h&2&&(Sa.$$scope={dirty:h,ctx:n}),Gn.$set(Sa);const ql={};h&2&&(ql.$$scope={dirty:h,ctx:n}),Un.$set(ql);const El={};h&2&&(El.$$scope={dirty:h,ctx:n}),Rn.$set(El);const jl={};h&2&&(jl.$$scope={dirty:h,ctx:n}),Vn.$set(jl);const Oa={};h&2&&(Oa.$$scope={dirty:h,ctx:n}),Kn.$set(Oa);const Fl={};h&2&&(Fl.$$scope={dirty:h,ctx:n}),Jn.$set(Fl);const Ml={};h&2&&(Ml.$$scope={dirty:h,ctx:n}),Zn.$set(Ml);const Pl={};h&2&&(Pl.$$scope={dirty:h,ctx:n}),Qn.$set(Pl);const Ga={};h&2&&(Ga.$$scope={dirty:h,ctx:n}),eo.$set(Ga);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:n}),no.$set(Cl);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:n}),so.$set(Al)},i(n){Fc||(T(z.$$.fragment,n),T(ae.$$.fragment,n),T(bo.$$.fragment,n),T(wo.$$.fragment,n),T(xo.$$.fragment,n),T(qo.$$.fragment,n),T(Po.$$.fragment,n),T(Lo.$$.fragment,n),T(No.$$.fragment,n),T(Io.$$.fragment,n),T(Ro.$$.fragment,n),T(Ho.$$.fragment,n),T(Ko.$$.fragment,n),T(Yo.$$.fragment,n),T(Qo.$$.fragment,n),T(ts.$$.fragment,n),T(os.$$.fragment,n),T(ss.$$.fragment,n),T(as.$$.fragment,n),T(ds.$$.fragment,n),T(cs.$$.fragment,n),T(ps.$$.fragment,n),T(hs.$$.fragment,n),T(Ts.$$.fragment,n),T(Gn.$$.fragment,n),T(vs.$$.fragment,n),T(ks.$$.fragment,n),T(bs.$$.fragment,n),T(ws.$$.fragment,n),T(ys.$$.fragment,n),T(zs.$$.fragment,n),T(xs.$$.fragment,n),T(Ps.$$.fragment,n),T(Un.$$.fragment,n),T(Cs.$$.fragment,n),T(As.$$.fragment,n),T(Ls.$$.fragment,n),T(Ns.$$.fragment,n),T(Is.$$.fragment,n),T(Ds.$$.fragment,n),T(Ss.$$.fragment,n),T(Rs.$$.fragment,n),T(Rn.$$.fragment,n),T(Hs.$$.fragment,n),T(Vs.$$.fragment,n),T(Ks.$$.fragment,n),T(Ys.$$.fragment,n),T(Js.$$.fragment,n),T(Zs.$$.fragment,n),T(Xs.$$.fragment,n),T(Vn.$$.fragment,n),T(sa.$$.fragment,n),T(Kn.$$.fragment,n),T(aa.$$.fragment,n),T(ra.$$.fragment,n),T(ia.$$.fragment,n),T(Jn.$$.fragment,n),T(ma.$$.fragment,n),T(Zn.$$.fragment,n),T(fa.$$.fragment,n),T(_a.$$.fragment,n),T(ga.$$.fragment,n),T(Qn.$$.fragment,n),T(ya.$$.fragment,n),T(eo.$$.fragment,n),T(za.$$.fragment,n),T(xa.$$.fragment,n),T($a.$$.fragment,n),T(no.$$.fragment,n),T(qa.$$.fragment,n),T(Ea.$$.fragment,n),T(ja.$$.fragment,n),T(Fa.$$.fragment,n),T(Ma.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(so.$$.fragment,n),T(Aa.$$.fragment,n),T(La.$$.fragment,n),T(Na.$$.fragment,n),T(Ia.$$.fragment,n),T(Da.$$.fragment,n),Fc=!0)},o(n){v(z.$$.fragment,n),v(ae.$$.fragment,n),v(bo.$$.fragment,n),v(wo.$$.fragment,n),v(xo.$$.fragment,n),v(qo.$$.fragment,n),v(Po.$$.fragment,n),v(Lo.$$.fragment,n),v(No.$$.fragment,n),v(Io.$$.fragment,n),v(Ro.$$.fragment,n),v(Ho.$$.fragment,n),v(Ko.$$.fragment,n),v(Yo.$$.fragment,n),v(Qo.$$.fragment,n),v(ts.$$.fragment,n),v(os.$$.fragment,n),v(ss.$$.fragment,n),v(as.$$.fragment,n),v(ds.$$.fragment,n),v(cs.$$.fragment,n),v(ps.$$.fragment,n),v(hs.$$.fragment,n),v(Ts.$$.fragment,n),v(Gn.$$.fragment,n),v(vs.$$.fragment,n),v(ks.$$.fragment,n),v(bs.$$.fragment,n),v(ws.$$.fragment,n),v(ys.$$.fragment,n),v(zs.$$.fragment,n),v(xs.$$.fragment,n),v(Ps.$$.fragment,n),v(Un.$$.fragment,n),v(Cs.$$.fragment,n),v(As.$$.fragment,n),v(Ls.$$.fragment,n),v(Ns.$$.fragment,n),v(Is.$$.fragment,n),v(Ds.$$.fragment,n),v(Ss.$$.fragment,n),v(Rs.$$.fragment,n),v(Rn.$$.fragment,n),v(Hs.$$.fragment,n),v(Vs.$$.fragment,n),v(Ks.$$.fragment,n),v(Ys.$$.fragment,n),v(Js.$$.fragment,n),v(Zs.$$.fragment,n),v(Xs.$$.fragment,n),v(Vn.$$.fragment,n),v(sa.$$.fragment,n),v(Kn.$$.fragment,n),v(aa.$$.fragment,n),v(ra.$$.fragment,n),v(ia.$$.fragment,n),v(Jn.$$.fragment,n),v(ma.$$.fragment,n),v(Zn.$$.fragment,n),v(fa.$$.fragment,n),v(_a.$$.fragment,n),v(ga.$$.fragment,n),v(Qn.$$.fragment,n),v(ya.$$.fragment,n),v(eo.$$.fragment,n),v(za.$$.fragment,n),v(xa.$$.fragment,n),v($a.$$.fragment,n),v(no.$$.fragment,n),v(qa.$$.fragment,n),v(Ea.$$.fragment,n),v(ja.$$.fragment,n),v(Fa.$$.fragment,n),v(Ma.$$.fragment,n),v(Pa.$$.fragment,n),v(Ca.$$.fragment,n),v(so.$$.fragment,n),v(Aa.$$.fragment,n),v(La.$$.fragment,n),v(Na.$$.fragment,n),v(Ia.$$.fragment,n),v(Da.$$.fragment,n),Fc=!1},d(n){t(u),n&&t($),n&&t(b),k(z),n&&t(se),n&&t(E),k(ae),n&&t(ve),n&&t(B),n&&t(C),n&&t(he),n&&t(ke),n&&t(ue),n&&t(be),n&&t(M),n&&t(H),n&&t(V),n&&t(Dl),n&&t(Ba),n&&t(Sl),n&&t(Ue),n&&t(Ol),n&&t(Wa),n&&t(Gl),n&&t(xt),n&&t(Bl),n&&t(qn),n&&t(Ul),n&&t($t),n&&t(Wl),n&&t(Ka),n&&t(Rl),n&&t(Yt),k(bo),n&&t(Hl),n&&t(mt),n&&t(Vl),n&&t(jn),n&&t(Kl),n&&t(Fn),k(wo),k(xo),k(qo),n&&t(Yl),n&&t(Za),n&&t(Jl),n&&t(qt),n&&t(Zl),n&&t(Xa),n&&t(Xl),n&&t(Xt),k(Po),n&&t(Ql),n&&t(ft),n&&t(ec),k(Lo,n),n&&t(tc),n&&t(We),n&&t(nc),n&&t(tr),n&&t(oc),k(No,n),n&&t(sc),n&&t(nr),n&&t(ac),n&&t(Qt),k(Io),n&&t(rc),n&&t(or),n&&t(ic),n&&t(Cn),n&&t(dc),n&&t(tn),k(Ro),n&&t(lc),n&&t(kt),k(Ho),n&&t(cc),n&&t(on),k(Ko),n&&t(pc),n&&t(Z),k(Yo),k(Qo),k(ts),k(os),n&&t(hc),n&&t(an),k(ss),n&&t(uc),n&&t(Oe),k(as),k(ds),k(cs),n&&t(mc),n&&t(dn),k(ps),n&&t(fc),n&&t(X),k(hs),k(Ts),k(Gn),k(vs),k(ks),k(bs),k(ws),k(ys),n&&t(_c),n&&t(cn),k(zs),n&&t(gc),n&&t(Q),k(xs),k(Ps),k(Un),k(Cs),k(As),k(Ls),k(Ns),k(Is),n&&t(Tc),n&&t(hn),k(Ds),n&&t(vc),n&&t(ee),k(Ss),k(Rs),k(Rn),k(Hs),k(Vs),k(Ks),k(Ys),k(Js),n&&t(kc),n&&t(mn),k(Zs),n&&t(bc),n&&t(de),k(Xs),k(Vn),k(sa),k(Kn),k(aa),n&&t(wc),n&&t(_n),k(ra),n&&t(yc),n&&t(le),k(ia),k(Jn),k(ma),k(Zn),k(fa),n&&t(zc),n&&t(Tn),k(_a),n&&t(xc),n&&t(ce),k(ga),k(Qn),k(ya),k(eo),k(za),n&&t($c),n&&t(kn),k(xa),n&&t(qc),n&&t(wt),k($a),k(no),k(qa),k(Ea),k(ja),k(Fa),k(Ma),n&&t(Ec),n&&t(wn),k(Pa),n&&t(jc),n&&t(yt),k(Ca),k(so),k(Aa),k(La),k(Na),k(Ia),k(Da)}}}const iy={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function dy(N,u,$){let{fw:b}=u;return N.$$set=y=>{"fw"in y&&$(0,b=y.fw)},[b]}class fy extends Rw{constructor(u){super();Hw(this,u,dy,ry,Vw,{fw:0})}}export{fy as default,iy as metadata};
