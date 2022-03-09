import{S as Sw,i as Ow,s as Gw,e as o,k as d,w as f,t as r,R as Bw,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as p,y as g,q as T,o as k,B as v}from"../../chunks/vendor-9daddcfa.js";import{T as $t}from"../../chunks/Tip-c0a70391.js";import{D as M}from"../../chunks/Docstring-ea6f8b76.js";import{C as R}from"../../chunks/CodeBlock-37b92346.js";import{I as xe}from"../../chunks/IconCopyLink-a413fd1b.js";import"../../chunks/CopyButton-6099fd9d.js";function Uw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Ww(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Rw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Hw(I){let u,x,b,y,z,$,w,E,Ee,oe,q,ee,O,se,qe,G,je,ke,B,L,ae,pe,F,C,he,K,ve,ue,U,Fe,be,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),z=o("li"),$=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),L=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),ve=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),be=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);z=s(te,"LI",{});var Oe=a(z);$=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),E=s(te,"LI",{});var pt=a(E);Ee=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(S,"."),S.forEach(t),B=l(m),L=s(m,"P",{});var ht=a(L);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);ve=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),be=l(N),P=s(N,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Ie=a(A);Pe=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),fe=l(N),D=s(N,"LI",{});var Le=a(D);Ce=i(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Le,"CODE",{});var ft=a(W);Ae=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Le.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,y,j),e(y,z),e(z,$),e(y,w),e(y,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ke),p(m,B,j),p(m,L,j),e(L,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,be),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(q),m&&t(B),m&&t(L),m&&t(pe),m&&t(F)}}}function Vw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Kw(I){let u,x,b,y,z,$,w,E,Ee,oe,q,ee,O,se,qe,G,je,ke,B,L,ae,pe,F,C,he,K,ve,ue,U,Fe,be,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),z=o("li"),$=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),L=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),ve=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),be=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);z=s(te,"LI",{});var Oe=a(z);$=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),E=s(te,"LI",{});var pt=a(E);Ee=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(S,"."),S.forEach(t),B=l(m),L=s(m,"P",{});var ht=a(L);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);ve=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),be=l(N),P=s(N,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Ie=a(A);Pe=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),fe=l(N),D=s(N,"LI",{});var Le=a(D);Ce=i(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Le,"CODE",{});var ft=a(W);Ae=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Le.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,y,j),e(y,z),e(z,$),e(y,w),e(y,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ke),p(m,B,j),p(m,L,j),e(L,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,be),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(q),m&&t(B),m&&t(L),m&&t(pe),m&&t(F)}}}function Yw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Zw(I){let u,x,b,y,z,$,w,E,Ee,oe,q,ee,O,se,qe,G,je,ke,B,L,ae,pe,F,C,he,K,ve,ue,U,Fe,be,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),z=o("li"),$=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),L=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),ve=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),be=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);z=s(te,"LI",{});var Oe=a(z);$=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),E=s(te,"LI",{});var pt=a(E);Ee=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(S,"."),S.forEach(t),B=l(m),L=s(m,"P",{});var ht=a(L);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);ve=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),be=l(N),P=s(N,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Ie=a(A);Pe=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),fe=l(N),D=s(N,"LI",{});var Le=a(D);Ce=i(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Le,"CODE",{});var ft=a(W);Ae=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Le.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,y,j),e(y,z),e(z,$),e(y,w),e(y,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ke),p(m,B,j),p(m,L,j),e(L,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,be),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(q),m&&t(B),m&&t(L),m&&t(pe),m&&t(F)}}}function Jw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Xw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function Qw(I){let u,x,b,y,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),z=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m($,w){p($,u,w),e(u,x),e(u,b),e(b,y),e(u,z)},d($){$&&t(u)}}}function ey(I){let u,x,b,y,z,$,w,E,Ee,oe,q,ee,O,se,qe,G,je,ke,B,L,ae,pe,F,C,he,K,ve,ue,U,Fe,be,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae,m,j,te,Oe,pt,S,Ge,ne,ht,N,Y,ut,Ne,Z,mt,Ie,Le,ft,Ll,Ha,xp,Dl,Be,ni,oi,mo,Ep,qp,si,ai,fo,jp,Fp,ri,ii,_o,Mp,Pp,di,li,go,Cp,Ap,ci,Va,To,Np,Ip,Sl,Ka,Lp,Ol,zt,pi,yn,hi,Dp,Sp,Ya,Op,Gp,Bp,ui,$n,mi,Up,Wp,Za,Rp,Hp,Vp,fi,zn,_i,Kp,Yp,Ja,Zp,Jp,Gl,xn,Xp,ko,Qp,eh,Bl,xt,th,vo,nh,oh,bo,sh,ah,Ul,Xa,Wl,Yt,En,gi,wo,rh,Ti,ih,Rl,_t,dh,ki,lh,ch,vi,ph,hh,bi,uh,mh,Hl,qn,fh,Qa,_h,gh,Vl,jn,dt,wi,Th,kh,_e,vh,yi,bh,wh,$i,yh,$h,zi,zh,xh,xi,Eh,qh,Ei,jh,Fh,er,Mh,Ph,Ch,qi,Ah,Nh,yo,Ih,$o,Lh,zo,Dh,Sh,Oh,ge,ji,Gh,Bh,Fi,Uh,Wh,xo,Rh,re,Hh,Mi,Vh,Kh,Pi,Yh,Zh,Ci,Jh,Xh,Ai,Qh,eu,Ni,tu,nu,Ii,ou,su,Li,au,ru,iu,Zt,du,Di,lu,cu,Si,pu,hu,uu,Te,mu,Oi,fu,_u,Gi,gu,Tu,Bi,ku,vu,Ui,bu,wu,Eo,yu,$u,Wi,zu,xu,Eu,qo,Kl,tr,qu,Yl,Et,Ri,jo,ju,Hi,Fu,Mu,Pu,Vi,Jt,Cu,Fo,Au,Nu,Mo,Iu,Lu,Du,Ki,Po,Su,Yi,Ou,Gu,Zl,nr,Jl,Xt,Fn,Zi,Co,Bu,Ji,Uu,Xl,gt,Wu,or,Ru,Hu,Ao,Vu,Ku,No,Yu,Zu,Ql,Io,ec,Ue,Ju,Xi,Xu,Qu,Qi,em,tm,sr,nm,om,ed,sm,am,tc,ar,rm,nc,Lo,oc,rr,sc,Qt,Mn,td,Do,im,nd,dm,ac,ir,lm,rc,Pn,od,en,cm,So,pm,hm,Oo,um,mm,fm,sd,De,_m,Go,gm,Tm,Bo,km,vm,Uo,bm,wm,Wo,ym,$m,Ro,zm,xm,ic,tn,Cn,ad,Ho,Em,rd,qm,dc,wt,Vo,jm,yt,Fm,dr,Mm,Pm,lr,Cm,Am,Ko,Nm,Im,Lm,nn,Dm,cr,Sm,Om,pr,Gm,Bm,lc,on,An,id,Yo,Um,dd,Wm,cc,ie,Zo,Rm,Jo,Hm,Xo,Vm,Km,Ym,Qo,Zm,hr,Jm,Xm,Qm,qt,es,ef,ld,tf,nf,ts,ur,of,cd,sf,af,mr,rf,pd,df,lf,Nn,ns,cf,os,pf,hd,hf,uf,mf,In,ss,ff,ud,_f,gf,fr,as,pc,sn,Ln,md,rs,Tf,fd,kf,hc,Se,is,vf,an,bf,_d,wf,yf,ds,$f,zf,xf,ls,Ef,_r,qf,jf,Ff,jt,cs,Mf,gd,Pf,Cf,ps,gr,Af,Td,Nf,If,Tr,Lf,kd,Df,Sf,Dn,hs,Of,vd,Gf,uc,rn,Sn,bd,us,Bf,wd,Uf,mc,J,ms,Wf,yd,Rf,Hf,fs,Vf,_s,Kf,Yf,Zf,gs,Jf,kr,Xf,Qf,e_,Ts,t_,ks,n_,o_,s_,We,vs,a_,dn,r_,vr,i_,d_,$d,l_,c_,p_,On,h_,zd,u_,m_,bs,f_,Re,ws,__,xd,g_,T_,Ed,k_,v_,qd,b_,w_,ys,y_,Tt,$s,$_,jd,z_,x_,Fd,E_,q_,zs,fc,ln,Gn,Md,xs,j_,Pd,F_,_c,X,Es,M_,qs,P_,Cd,C_,A_,N_,js,I_,Fs,L_,D_,S_,Ms,O_,br,G_,B_,U_,Ps,W_,Cs,R_,H_,V_,He,As,K_,cn,Y_,wr,Z_,J_,Ad,X_,Q_,eg,Bn,tg,Nd,ng,og,Ns,sg,Ve,Is,ag,Id,rg,ig,Ld,dg,lg,Dd,cg,pg,Ls,hg,kt,Ds,ug,Sd,mg,fg,Od,_g,gg,Ss,gc,pn,Un,Gd,Os,Tg,Bd,kg,Tc,Q,Gs,vg,Ud,bg,wg,Bs,yg,Us,$g,zg,xg,Ws,Eg,yr,qg,jg,Fg,Rs,Mg,Hs,Pg,Cg,Ag,Ke,Vs,Ng,hn,Ig,$r,Lg,Dg,Wd,Sg,Og,Gg,Wn,Bg,Rd,Ug,Wg,Ks,Rg,Ye,Ys,Hg,Hd,Vg,Kg,Vd,Yg,Zg,Kd,Jg,Xg,Zs,Qg,vt,Js,eT,Yd,tT,nT,Zd,oT,sT,Xs,kc,un,Rn,Jd,Qs,aT,Xd,rT,vc,de,ea,iT,Qd,dT,lT,ta,cT,na,pT,hT,uT,oa,mT,zr,fT,_T,gT,sa,TT,aa,kT,vT,bT,Hn,wT,Ze,ra,yT,mn,$T,xr,zT,xT,el,ET,qT,jT,Vn,FT,tl,MT,PT,ia,bc,fn,Kn,nl,da,CT,ol,AT,wc,le,la,NT,ca,IT,sl,LT,DT,ST,pa,OT,ha,GT,BT,UT,ua,WT,Er,RT,HT,VT,ma,KT,fa,YT,ZT,JT,Yn,XT,Je,_a,QT,_n,ek,qr,tk,nk,al,ok,sk,ak,Zn,rk,rl,ik,dk,ga,yc,gn,Jn,il,Ta,lk,dl,ck,$c,ce,ka,pk,ll,hk,uk,va,mk,ba,fk,_k,gk,wa,Tk,jr,kk,vk,bk,ya,wk,$a,yk,$k,zk,Xn,xk,Xe,za,Ek,Tn,qk,Fr,jk,Fk,cl,Mk,Pk,Ck,Qn,Ak,pl,Nk,Ik,xa,zc,kn,eo,hl,Ea,Lk,ul,Dk,xc,lt,qa,Sk,Qe,ja,Ok,vn,Gk,ml,Bk,Uk,fl,Wk,Rk,Hk,to,Vk,_l,Kk,Yk,Fa,Zk,Ft,Ma,Jk,gl,Xk,Qk,Pa,ev,Mt,Ca,tv,Tl,nv,ov,Aa,Ec,bn,no,kl,Na,sv,vl,av,qc,ct,Ia,rv,et,La,iv,wn,dv,bl,lv,cv,wl,pv,hv,uv,oo,mv,yl,fv,_v,Da,gv,Pt,Sa,Tv,$l,kv,vv,Oa,bv,Ct,Ga,wv,zl,yv,$v,Ba,jc;return $=new xe({}),se=new xe({}),wo=new xe({}),yo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(input_ids=input_ids, labels=labels).loss`}}),xo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),Co=new xe({}),Io=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),Lo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Do=new xe({}),Ho=new xe({}),Vo=new M({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Yo=new xe({}),Zo=new M({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),es=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new M({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L298"}}),rs=new xe({}),is=new M({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),cs=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L166",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L192",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),us=new xe({}),ms=new M({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1245",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vs=new M({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1321",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
`}}),On=new $t({props:{$$slots:{default:[Uw]},$$scope:{ctx:I}}}),bs=new R({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ws=new M({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1277",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),ys=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),$s=new M({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1289"}}),zs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),xs=new xe({}),Es=new M({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1434",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),As=new M({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1515",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
`}}),Bn=new $t({props:{$$slots:{default:[Ww]},$$scope:{ctx:I}}}),Ns=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Is=new M({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1471",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Ds=new M({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1484"}}),Ss=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Os=new xe({}),Gs=new M({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1728",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vs=new M({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1786",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
`}}),Wn=new $t({props:{$$slots:{default:[Rw]},$$scope:{ctx:I}}}),Ks=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ys=new M({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1749",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Zs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Js=new M({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1760"}}),Xs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Qs=new xe({}),ea=new M({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1131",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Hn=new $t({props:{$$slots:{default:[Hw]},$$scope:{ctx:I}}}),ra=new M({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1157",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
`}}),Vn=new $t({props:{$$slots:{default:[Vw]},$$scope:{ctx:I}}}),ia=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),da=new xe({}),la=new M({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1298",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new $t({props:{$$slots:{default:[Kw]},$$scope:{ctx:I}}}),_a=new M({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1353",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
`}}),Zn=new $t({props:{$$slots:{default:[Yw]},$$scope:{ctx:I}}}),ga=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),Ta=new xe({}),ka=new M({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1608",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new $t({props:{$$slots:{default:[Zw]},$$scope:{ctx:I}}}),za=new M({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1626",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
`}}),Qn=new $t({props:{$$slots:{default:[Jw]},$$scope:{ctx:I}}}),xa=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),Ea=new xe({}),qa=new M({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1320"}}),ja=new M({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
`}}),to=new $t({props:{$$slots:{default:[Xw]},$$scope:{ctx:I}}}),Fa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ma=new M({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),Pa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ca=new M({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1095",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`}}),Aa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Na=new xe({}),Ia=new M({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1460"}}),La=new M({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config"
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
`}}),oo=new $t({props:{$$slots:{default:[Qw]},$$scope:{ctx:I}}}),Da=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Sa=new M({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),Oa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ga=new M({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1463",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
`}}),Ba=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),x=d(),b=o("h1"),y=o("a"),z=o("span"),f($.$$.fragment),w=d(),E=o("span"),Ee=r("T5"),oe=d(),q=o("h2"),ee=o("a"),O=o("span"),f(se.$$.fragment),qe=d(),G=o("span"),je=r("Overview"),ke=d(),B=o("p"),L=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=o("p"),K=r("The abstract from the paper is the following:"),ve=d(),ue=o("p"),U=o("em"),Fe=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),be=d(),P=o("p"),Me=r("Tips:"),H=d(),V=o("ul"),me=o("li"),A=o("p"),Pe=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=o("em"),D=r("translate English to German: \u2026"),Ce=r(`,
for summarization: `),W=o("em"),Ae=r("summarize: \u2026"),m=r("."),j=d(),te=o("li"),Oe=o("p"),pt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),S=d(),Ge=o("li"),ne=o("p"),ht=r("See the "),N=o("a"),Y=r("training"),ut=r(", "),Ne=o("a"),Z=r("inference"),mt=r(" and "),Ie=o("a"),Le=r("scripts"),ft=r(" sections below for all details regarding usage."),Ll=d(),Ha=o("p"),xp=r("T5 comes in different sizes:"),Dl=d(),Be=o("ul"),ni=o("li"),oi=o("p"),mo=o("a"),Ep=r("t5-small"),qp=d(),si=o("li"),ai=o("p"),fo=o("a"),jp=r("t5-base"),Fp=d(),ri=o("li"),ii=o("p"),_o=o("a"),Mp=r("t5-large"),Pp=d(),di=o("li"),li=o("p"),go=o("a"),Cp=r("t5-3b"),Ap=d(),ci=o("li"),Va=o("p"),To=o("a"),Np=r("t5-11b"),Ip=r("."),Sl=d(),Ka=o("p"),Lp=r("Based on the original T5 model, Google has released some follow-up works:"),Ol=d(),zt=o("ul"),pi=o("li"),yn=o("p"),hi=o("strong"),Dp=r("T5v1.1"),Sp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ya=o("a"),Op=r("here"),Gp=r("."),Bp=d(),ui=o("li"),$n=o("p"),mi=o("strong"),Up=r("mT5"),Wp=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Za=o("a"),Rp=r("here"),Hp=r("."),Vp=d(),fi=o("li"),zn=o("p"),_i=o("strong"),Kp=r("byT5"),Yp=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Ja=o("a"),Zp=r("here"),Jp=r("."),Gl=d(),xn=o("p"),Xp=r("All checkpoints can be found on the "),ko=o("a"),Qp=r("hub"),eh=r("."),Bl=d(),xt=o("p"),th=r("This model was contributed by "),vo=o("a"),nh=r("thomwolf"),oh=r(". The original code can be found "),bo=o("a"),sh=r("here"),ah=r("."),Ul=d(),Xa=o("a"),Wl=d(),Yt=o("h2"),En=o("a"),gi=o("span"),f(wo.$$.fragment),rh=d(),Ti=o("span"),ih=r("Training"),Rl=d(),_t=o("p"),dh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),ki=o("code"),lh=r("input_ids"),ch=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),vi=o("code"),ph=r("decoder_input_ids"),hh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),bi=o("code"),uh=r("labels"),mh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Hl=d(),qn=o("p"),fh=r("One can use "),Qa=o("a"),_h=r("T5ForConditionalGeneration"),gh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Vl=d(),jn=o("ul"),dt=o("li"),wi=o("p"),Th=r("Unsupervised denoising training"),kh=d(),_e=o("p"),vh=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),yi=o("em"),bh=r("a.k.a"),wh=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),$i=o("em"),yh=r("real"),$h=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),zi=o("code"),zh=r("<extra_id_0>"),xh=r(`,
`),xi=o("code"),Eh=r("<extra_id_1>"),qh=r(", \u2026 up to "),Ei=o("code"),jh=r("<extra_id_99>"),Fh=r(`. As a default, 100 sentinel tokens are available in
`),er=o("a"),Mh=r("T5Tokenizer"),Ph=r("."),Ch=d(),qi=o("p"),Ah=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Nh=d(),f(yo.$$.fragment),Ih=d(),$o=o("p"),Lh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),zo=o("a"),Dh=r("run_t5_mlm_flax.py"),Sh=r(` script in the Examples
directory.`),Oh=d(),ge=o("li"),ji=o("p"),Gh=r("Supervised training"),Bh=d(),Fi=o("p"),Uh=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Wh=d(),f(xo.$$.fragment),Rh=d(),re=o("p"),Hh=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Mi=o("code"),Vh=r("input_ids"),Kh=r(` (which are the
`),Pi=o("code"),Yh=r("input_ids"),Zh=r(" of the encoded input sequence) and "),Ci=o("code"),Jh=r("labels"),Xh=r(" (which are the "),Ai=o("code"),Qh=r("input_ids"),eu=r(` of the encoded
target sequence). The model will automatically create the `),Ni=o("code"),tu=r("decoder_input_ids"),nu=r(" based on the "),Ii=o("code"),ou=r("labels"),su=r(`, by
shifting them one position to the right and prepending the `),Li=o("code"),au=r("config.decoder_start_token_id"),ru=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),iu=d(),Zt=o("p"),du=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Di=o("code"),lu=r("max_source_length"),cu=r(" and "),Si=o("code"),pu=r("max_target_length"),hu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),uu=d(),Te=o("p"),mu=r("In addition, we must make sure that padding token id\u2019s of the "),Oi=o("code"),fu=r("labels"),_u=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Gi=o("code"),gu=r("ignore_index"),Tu=r(`
of the `),Bi=o("code"),ku=r("CrossEntropyLoss"),vu=r(". In Flax, one can use the "),Ui=o("code"),bu=r("decoder_attention_mask"),wu=r(` to ignore padded tokens from
the loss (see the `),Eo=o("a"),yu=r("Flax summarization script"),$u=r(` for details). We also pass
`),Wi=o("code"),zu=r("attention_mask"),xu=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Eu=d(),f(qo.$$.fragment),Kl=d(),tr=o("p"),qu=r("Additional training tips:"),Yl=d(),Et=o("ul"),Ri=o("li"),jo=o("p"),ju=r("T5 models need a slightly higher learning rate than the default one set in the "),Hi=o("code"),Fu=r("Trainer"),Mu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Pu=d(),Vi=o("li"),Jt=o("p"),Cu=r("According to "),Fo=o("a"),Au=r("this forum post"),Nu=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Mo=o("a"),Iu=r("paper"),Lu=r(` for the task prefixes
used).`),Du=d(),Ki=o("li"),Po=o("p"),Su=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Yi=o("em"),Ou=r("pad_to_multiple_of"),Gu=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Zl=d(),nr=o("a"),Jl=d(),Xt=o("h2"),Fn=o("a"),Zi=o("span"),f(Co.$$.fragment),Bu=d(),Ji=o("span"),Uu=r("Inference"),Xl=d(),gt=o("p"),Wu=r("At inference time, it is recommended to use "),or=o("a"),Ru=r("generate()"),Hu=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Ao=o("a"),Vu=r("this blog post"),Ku=r(` to know all the details about generating text with Transformers.
There\u2019s also `),No=o("a"),Yu=r("this blog post"),Zu=r(` which explains how
generation works in general in encoder-decoder models.`),Ql=d(),f(Io.$$.fragment),ec=d(),Ue=o("p"),Ju=r("Note that T5 uses the "),Xi=o("code"),Xu=r("pad_token_id"),Qu=r(" as the "),Qi=o("code"),em=r("decoder_start_token_id"),tm=r(`, so when doing generation without using
`),sr=o("a"),nm=r("generate()"),om=r(", make sure you start it with the "),ed=o("code"),sm=r("pad_token_id"),am=r("."),tc=d(),ar=o("p"),rm=r("The example above only shows a single example. You can also do batched inference, like so:"),nc=d(),f(Lo.$$.fragment),oc=d(),rr=o("a"),sc=d(),Qt=o("h2"),Mn=o("a"),td=o("span"),f(Do.$$.fragment),im=d(),nd=o("span"),dm=r("Example scripts"),ac=d(),ir=o("p"),lm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),rc=d(),Pn=o("ul"),od=o("li"),en=o("p"),cm=r("pre-training: the "),So=o("a"),pm=r("run_t5_mlm_flax.py"),hm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Oo=o("a"),um=r("t5_tokenizer_model.py"),mm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),fm=d(),sd=o("li"),De=o("p"),_m=r("fine-tuning: T5 is supported by the official summarization scripts ("),Go=o("a"),gm=r("PyTorch"),Tm=r(", "),Bo=o("a"),km=r("Tensorflow"),vm=r(", and "),Uo=o("a"),bm=r("Flax"),wm=r(`) and translation scripts
(`),Wo=o("a"),ym=r("PyTorch"),$m=r(" and "),Ro=o("a"),zm=r("Tensorflow"),xm=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),ic=d(),tn=o("h2"),Cn=o("a"),ad=o("span"),f(Ho.$$.fragment),Em=d(),rd=o("span"),qm=r("T5Config"),dc=d(),wt=o("div"),f(Vo.$$.fragment),jm=d(),yt=o("p"),Fm=r("This is the configuration class to store the configuration of a "),dr=o("a"),Mm=r("T5Model"),Pm=r(" or a "),lr=o("a"),Cm=r("TFT5Model"),Am=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Ko=o("a"),Nm=r("t5-small"),Im=r(" architecture."),Lm=d(),nn=o("p"),Dm=r("Configuration objects inherit from "),cr=o("a"),Sm=r("PretrainedConfig"),Om=r(` and can be used to control the model outputs. Read the
documentation from `),pr=o("a"),Gm=r("PretrainedConfig"),Bm=r(" for more information."),lc=d(),on=o("h2"),An=o("a"),id=o("span"),f(Yo.$$.fragment),Um=d(),dd=o("span"),Wm=r("T5Tokenizer"),cc=d(),ie=o("div"),f(Zo.$$.fragment),Rm=d(),Jo=o("p"),Hm=r("Construct a T5 tokenizer. Based on "),Xo=o("a"),Vm=r("SentencePiece"),Km=r("."),Ym=d(),Qo=o("p"),Zm=r("This tokenizer inherits from "),hr=o("a"),Jm=r("PreTrainedTokenizer"),Xm=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qm=d(),qt=o("div"),f(es.$$.fragment),ef=d(),ld=o("p"),tf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),nf=d(),ts=o("ul"),ur=o("li"),of=r("single sequence: "),cd=o("code"),sf=r("X </s>"),af=d(),mr=o("li"),rf=r("pair of sequences: "),pd=o("code"),df=r("A </s> B </s>"),lf=d(),Nn=o("div"),f(ns.$$.fragment),cf=d(),os=o("p"),pf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hd=o("code"),hf=r("prepare_for_model"),uf=r(" method."),mf=d(),In=o("div"),f(ss.$$.fragment),ff=d(),ud=o("p"),_f=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),gf=d(),fr=o("div"),f(as.$$.fragment),pc=d(),sn=o("h2"),Ln=o("a"),md=o("span"),f(rs.$$.fragment),Tf=d(),fd=o("span"),kf=r("T5TokenizerFast"),hc=d(),Se=o("div"),f(is.$$.fragment),vf=d(),an=o("p"),bf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),_d=o("em"),wf=r("tokenizers"),yf=r(` library). Based on
`),ds=o("a"),$f=r("Unigram"),zf=r("."),xf=d(),ls=o("p"),Ef=r("This tokenizer inherits from "),_r=o("a"),qf=r("PreTrainedTokenizerFast"),jf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ff=d(),jt=o("div"),f(cs.$$.fragment),Mf=d(),gd=o("p"),Pf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Cf=d(),ps=o("ul"),gr=o("li"),Af=r("single sequence: "),Td=o("code"),Nf=r("X </s>"),If=d(),Tr=o("li"),Lf=r("pair of sequences: "),kd=o("code"),Df=r("A </s> B </s>"),Sf=d(),Dn=o("div"),f(hs.$$.fragment),Of=d(),vd=o("p"),Gf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),uc=d(),rn=o("h2"),Sn=o("a"),bd=o("span"),f(us.$$.fragment),Bf=d(),wd=o("span"),Uf=r("T5Model"),mc=d(),J=o("div"),f(ms.$$.fragment),Wf=d(),yd=o("p"),Rf=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Hf=d(),fs=o("p"),Vf=r("The T5 model was proposed in "),_s=o("a"),Kf=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Yf=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Zf=d(),gs=o("p"),Jf=r("This model inherits from "),kr=o("a"),Xf=r("PreTrainedModel"),Qf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),e_=d(),Ts=o("p"),t_=r("This model is also a PyTorch "),ks=o("a"),n_=r("torch.nn.Module"),o_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),s_=d(),We=o("div"),f(vs.$$.fragment),a_=d(),dn=o("p"),r_=r("The "),vr=o("a"),i_=r("T5Model"),d_=r(" forward method, overrides the "),$d=o("code"),l_=r("__call__"),c_=r(" special method."),p_=d(),f(On.$$.fragment),h_=d(),zd=o("p"),u_=r("Example:"),m_=d(),f(bs.$$.fragment),f_=d(),Re=o("div"),f(ws.$$.fragment),__=d(),xd=o("p"),g_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),T_=d(),Ed=o("p"),k_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),v_=d(),qd=o("p"),b_=r("Example:"),w_=d(),f(ys.$$.fragment),y_=d(),Tt=o("div"),f($s.$$.fragment),$_=d(),jd=o("p"),z_=r("Moves the model to cpu from a model parallel state."),x_=d(),Fd=o("p"),E_=r("Example:"),q_=d(),f(zs.$$.fragment),fc=d(),ln=o("h2"),Gn=o("a"),Md=o("span"),f(xs.$$.fragment),j_=d(),Pd=o("span"),F_=r("T5ForConditionalGeneration"),_c=d(),X=o("div"),f(Es.$$.fragment),M_=d(),qs=o("p"),P_=r("T5 Model with a "),Cd=o("code"),C_=r("language modeling"),A_=r(" head on top."),N_=d(),js=o("p"),I_=r("The T5 model was proposed in "),Fs=o("a"),L_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),D_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),S_=d(),Ms=o("p"),O_=r("This model inherits from "),br=o("a"),G_=r("PreTrainedModel"),B_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_=d(),Ps=o("p"),W_=r("This model is also a PyTorch "),Cs=o("a"),R_=r("torch.nn.Module"),H_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),V_=d(),He=o("div"),f(As.$$.fragment),K_=d(),cn=o("p"),Y_=r("The "),wr=o("a"),Z_=r("T5ForConditionalGeneration"),J_=r(" forward method, overrides the "),Ad=o("code"),X_=r("__call__"),Q_=r(" special method."),eg=d(),f(Bn.$$.fragment),tg=d(),Nd=o("p"),ng=r("Examples:"),og=d(),f(Ns.$$.fragment),sg=d(),Ve=o("div"),f(Is.$$.fragment),ag=d(),Id=o("p"),rg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),ig=d(),Ld=o("p"),dg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),lg=d(),Dd=o("p"),cg=r("Example:"),pg=d(),f(Ls.$$.fragment),hg=d(),kt=o("div"),f(Ds.$$.fragment),ug=d(),Sd=o("p"),mg=r("Moves the model to cpu from a model parallel state."),fg=d(),Od=o("p"),_g=r("Example:"),gg=d(),f(Ss.$$.fragment),gc=d(),pn=o("h2"),Un=o("a"),Gd=o("span"),f(Os.$$.fragment),Tg=d(),Bd=o("span"),kg=r("T5EncoderModel"),Tc=d(),Q=o("div"),f(Gs.$$.fragment),vg=d(),Ud=o("p"),bg=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),wg=d(),Bs=o("p"),yg=r("The T5 model was proposed in "),Us=o("a"),$g=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),zg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),xg=d(),Ws=o("p"),Eg=r("This model inherits from "),yr=o("a"),qg=r("PreTrainedModel"),jg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fg=d(),Rs=o("p"),Mg=r("This model is also a PyTorch "),Hs=o("a"),Pg=r("torch.nn.Module"),Cg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=d(),Ke=o("div"),f(Vs.$$.fragment),Ng=d(),hn=o("p"),Ig=r("The "),$r=o("a"),Lg=r("T5EncoderModel"),Dg=r(" forward method, overrides the "),Wd=o("code"),Sg=r("__call__"),Og=r(" special method."),Gg=d(),f(Wn.$$.fragment),Bg=d(),Rd=o("p"),Ug=r("Example:"),Wg=d(),f(Ks.$$.fragment),Rg=d(),Ye=o("div"),f(Ys.$$.fragment),Hg=d(),Hd=o("p"),Vg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Kg=d(),Vd=o("p"),Yg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Zg=d(),Kd=o("p"),Jg=r("Example:"),Xg=d(),f(Zs.$$.fragment),Qg=d(),vt=o("div"),f(Js.$$.fragment),eT=d(),Yd=o("p"),tT=r("Moves the model to cpu from a model parallel state."),nT=d(),Zd=o("p"),oT=r("Example:"),sT=d(),f(Xs.$$.fragment),kc=d(),un=o("h2"),Rn=o("a"),Jd=o("span"),f(Qs.$$.fragment),aT=d(),Xd=o("span"),rT=r("TFT5Model"),vc=d(),de=o("div"),f(ea.$$.fragment),iT=d(),Qd=o("p"),dT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),lT=d(),ta=o("p"),cT=r("The T5 model was proposed in "),na=o("a"),pT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),hT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),uT=d(),oa=o("p"),mT=r("This model inherits from "),zr=o("a"),fT=r("TFPreTrainedModel"),_T=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT=d(),sa=o("p"),TT=r("This model is also a "),aa=o("a"),kT=r("tf.keras.Model"),vT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=d(),f(Hn.$$.fragment),wT=d(),Ze=o("div"),f(ra.$$.fragment),yT=d(),mn=o("p"),$T=r("The "),xr=o("a"),zT=r("TFT5Model"),xT=r(" forward method, overrides the "),el=o("code"),ET=r("__call__"),qT=r(" special method."),jT=d(),f(Vn.$$.fragment),FT=d(),tl=o("p"),MT=r("Examples:"),PT=d(),f(ia.$$.fragment),bc=d(),fn=o("h2"),Kn=o("a"),nl=o("span"),f(da.$$.fragment),CT=d(),ol=o("span"),AT=r("TFT5ForConditionalGeneration"),wc=d(),le=o("div"),f(la.$$.fragment),NT=d(),ca=o("p"),IT=r("T5 Model with a "),sl=o("code"),LT=r("language modeling"),DT=r(" head on top."),ST=d(),pa=o("p"),OT=r("The T5 model was proposed in "),ha=o("a"),GT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),BT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),UT=d(),ua=o("p"),WT=r("This model inherits from "),Er=o("a"),RT=r("TFPreTrainedModel"),HT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VT=d(),ma=o("p"),KT=r("This model is also a "),fa=o("a"),YT=r("tf.keras.Model"),ZT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),JT=d(),f(Yn.$$.fragment),XT=d(),Je=o("div"),f(_a.$$.fragment),QT=d(),_n=o("p"),ek=r("The "),qr=o("a"),tk=r("TFT5ForConditionalGeneration"),nk=r(" forward method, overrides the "),al=o("code"),ok=r("__call__"),sk=r(" special method."),ak=d(),f(Zn.$$.fragment),rk=d(),rl=o("p"),ik=r("Examples:"),dk=d(),f(ga.$$.fragment),yc=d(),gn=o("h2"),Jn=o("a"),il=o("span"),f(Ta.$$.fragment),lk=d(),dl=o("span"),ck=r("TFT5EncoderModel"),$c=d(),ce=o("div"),f(ka.$$.fragment),pk=d(),ll=o("p"),hk=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),uk=d(),va=o("p"),mk=r("The T5 model was proposed in "),ba=o("a"),fk=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),_k=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),gk=d(),wa=o("p"),Tk=r("This model inherits from "),jr=o("a"),kk=r("TFPreTrainedModel"),vk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bk=d(),ya=o("p"),wk=r("This model is also a "),$a=o("a"),yk=r("tf.keras.Model"),$k=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zk=d(),f(Xn.$$.fragment),xk=d(),Xe=o("div"),f(za.$$.fragment),Ek=d(),Tn=o("p"),qk=r("The "),Fr=o("a"),jk=r("TFT5EncoderModel"),Fk=r(" forward method, overrides the "),cl=o("code"),Mk=r("__call__"),Pk=r(" special method."),Ck=d(),f(Qn.$$.fragment),Ak=d(),pl=o("p"),Nk=r("Examples:"),Ik=d(),f(xa.$$.fragment),zc=d(),kn=o("h2"),eo=o("a"),hl=o("span"),f(Ea.$$.fragment),Lk=d(),ul=o("span"),Dk=r("FlaxT5Model"),xc=d(),lt=o("div"),f(qa.$$.fragment),Sk=d(),Qe=o("div"),f(ja.$$.fragment),Ok=d(),vn=o("p"),Gk=r("The "),ml=o("code"),Bk=r("FlaxT5PreTrainedModel"),Uk=r("forward method, overrides the "),fl=o("code"),Wk=r("__call__"),Rk=r(" special method."),Hk=d(),f(to.$$.fragment),Vk=d(),_l=o("p"),Kk=r("Example:"),Yk=d(),f(Fa.$$.fragment),Zk=d(),Ft=o("div"),f(Ma.$$.fragment),Jk=d(),gl=o("p"),Xk=r("Example:"),Qk=d(),f(Pa.$$.fragment),ev=d(),Mt=o("div"),f(Ca.$$.fragment),tv=d(),Tl=o("p"),nv=r("Example:"),ov=d(),f(Aa.$$.fragment),Ec=d(),bn=o("h2"),no=o("a"),kl=o("span"),f(Na.$$.fragment),sv=d(),vl=o("span"),av=r("FlaxT5ForConditionalGeneration"),qc=d(),ct=o("div"),f(Ia.$$.fragment),rv=d(),et=o("div"),f(La.$$.fragment),iv=d(),wn=o("p"),dv=r("The "),bl=o("code"),lv=r("FlaxT5PreTrainedModel"),cv=r("forward method, overrides the "),wl=o("code"),pv=r("__call__"),hv=r(" special method."),uv=d(),f(oo.$$.fragment),mv=d(),yl=o("p"),fv=r("Example:"),_v=d(),f(Da.$$.fragment),gv=d(),Pt=o("div"),f(Sa.$$.fragment),Tv=d(),$l=o("p"),kv=r("Example:"),vv=d(),f(Oa.$$.fragment),bv=d(),Ct=o("div"),f(Ga.$$.fragment),wv=d(),zl=o("p"),yv=r("Example:"),$v=d(),f(Ba.$$.fragment),this.h()},l(n){const h=Bw('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(n),b=s(n,"H1",{class:!0});var Ua=a(b);y=s(Ua,"A",{id:!0,class:!0,href:!0});var xl=a(y);z=s(xl,"SPAN",{});var El=a(z);_($.$$.fragment,El),El.forEach(t),xl.forEach(t),w=l(Ua),E=s(Ua,"SPAN",{});var ql=a(E);Ee=i(ql,"T5"),ql.forEach(t),Ua.forEach(t),oe=l(n),q=s(n,"H2",{class:!0});var Wa=a(q);ee=s(Wa,"A",{id:!0,class:!0,href:!0});var jl=a(ee);O=s(jl,"SPAN",{});var Fl=a(O);_(se.$$.fragment,Fl),Fl.forEach(t),jl.forEach(t),qe=l(Wa),G=s(Wa,"SPAN",{});var Ml=a(G);je=i(Ml,"Overview"),Ml.forEach(t),Wa.forEach(t),ke=l(n),B=s(n,"P",{});var Ra=a(B);L=i(Ra,"The T5 model was presented in "),ae=s(Ra,"A",{href:!0,rel:!0});var Pl=a(ae);pe=i(Pl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Pl.forEach(t),F=i(Ra,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ra.forEach(t),C=l(n),he=s(n,"P",{});var Cl=a(he);K=i(Cl,"The abstract from the paper is the following:"),Cl.forEach(t),ve=l(n),ue=s(n,"P",{});var Fv=a(ue);U=s(Fv,"EM",{});var Mv=a(U);Fe=i(Mv,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Mv.forEach(t),Fv.forEach(t),be=l(n),P=s(n,"P",{});var Pv=a(P);Me=i(Pv,"Tips:"),Pv.forEach(t),H=l(n),V=s(n,"UL",{});var Mr=a(V);me=s(Mr,"LI",{});var Cv=a(me);A=s(Cv,"P",{});var Pr=a(A);Pe=i(Pr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=s(Pr,"EM",{});var Av=a(fe);D=i(Av,"translate English to German: \u2026"),Av.forEach(t),Ce=i(Pr,`,
for summarization: `),W=s(Pr,"EM",{});var Nv=a(W);Ae=i(Nv,"summarize: \u2026"),Nv.forEach(t),m=i(Pr,"."),Pr.forEach(t),Cv.forEach(t),j=l(Mr),te=s(Mr,"LI",{});var Iv=a(te);Oe=s(Iv,"P",{});var Lv=a(Oe);pt=i(Lv,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Lv.forEach(t),Iv.forEach(t),S=l(Mr),Ge=s(Mr,"LI",{});var Dv=a(Ge);ne=s(Dv,"P",{});var so=a(ne);ht=i(so,"See the "),N=s(so,"A",{href:!0});var Sv=a(N);Y=i(Sv,"training"),Sv.forEach(t),ut=i(so,", "),Ne=s(so,"A",{href:!0});var Ov=a(Ne);Z=i(Ov,"inference"),Ov.forEach(t),mt=i(so," and "),Ie=s(so,"A",{href:!0});var Gv=a(Ie);Le=i(Gv,"scripts"),Gv.forEach(t),ft=i(so," sections below for all details regarding usage."),so.forEach(t),Dv.forEach(t),Mr.forEach(t),Ll=l(n),Ha=s(n,"P",{});var Bv=a(Ha);xp=i(Bv,"T5 comes in different sizes:"),Bv.forEach(t),Dl=l(n),Be=s(n,"UL",{});var At=a(Be);ni=s(At,"LI",{});var Uv=a(ni);oi=s(Uv,"P",{});var Wv=a(oi);mo=s(Wv,"A",{href:!0,rel:!0});var Rv=a(mo);Ep=i(Rv,"t5-small"),Rv.forEach(t),Wv.forEach(t),Uv.forEach(t),qp=l(At),si=s(At,"LI",{});var Hv=a(si);ai=s(Hv,"P",{});var Vv=a(ai);fo=s(Vv,"A",{href:!0,rel:!0});var Kv=a(fo);jp=i(Kv,"t5-base"),Kv.forEach(t),Vv.forEach(t),Hv.forEach(t),Fp=l(At),ri=s(At,"LI",{});var Yv=a(ri);ii=s(Yv,"P",{});var Zv=a(ii);_o=s(Zv,"A",{href:!0,rel:!0});var Jv=a(_o);Mp=i(Jv,"t5-large"),Jv.forEach(t),Zv.forEach(t),Yv.forEach(t),Pp=l(At),di=s(At,"LI",{});var Xv=a(di);li=s(Xv,"P",{});var Qv=a(li);go=s(Qv,"A",{href:!0,rel:!0});var eb=a(go);Cp=i(eb,"t5-3b"),eb.forEach(t),Qv.forEach(t),Xv.forEach(t),Ap=l(At),ci=s(At,"LI",{});var tb=a(ci);Va=s(tb,"P",{});var zv=a(Va);To=s(zv,"A",{href:!0,rel:!0});var nb=a(To);Np=i(nb,"t5-11b"),nb.forEach(t),Ip=i(zv,"."),zv.forEach(t),tb.forEach(t),At.forEach(t),Sl=l(n),Ka=s(n,"P",{});var ob=a(Ka);Lp=i(ob,"Based on the original T5 model, Google has released some follow-up works:"),ob.forEach(t),Ol=l(n),zt=s(n,"UL",{});var Cr=a(zt);pi=s(Cr,"LI",{});var sb=a(pi);yn=s(sb,"P",{});var Al=a(yn);hi=s(Al,"STRONG",{});var ab=a(hi);Dp=i(ab,"T5v1.1"),ab.forEach(t),Sp=i(Al,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ya=s(Al,"A",{href:!0});var rb=a(Ya);Op=i(rb,"here"),rb.forEach(t),Gp=i(Al,"."),Al.forEach(t),sb.forEach(t),Bp=l(Cr),ui=s(Cr,"LI",{});var ib=a(ui);$n=s(ib,"P",{});var Nl=a($n);mi=s(Nl,"STRONG",{});var db=a(mi);Up=i(db,"mT5"),db.forEach(t),Wp=i(Nl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Za=s(Nl,"A",{href:!0});var lb=a(Za);Rp=i(lb,"here"),lb.forEach(t),Hp=i(Nl,"."),Nl.forEach(t),ib.forEach(t),Vp=l(Cr),fi=s(Cr,"LI",{});var cb=a(fi);zn=s(cb,"P",{});var Il=a(zn);_i=s(Il,"STRONG",{});var pb=a(_i);Kp=i(pb,"byT5"),pb.forEach(t),Yp=i(Il,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Ja=s(Il,"A",{href:!0});var hb=a(Ja);Zp=i(hb,"here"),hb.forEach(t),Jp=i(Il,"."),Il.forEach(t),cb.forEach(t),Cr.forEach(t),Gl=l(n),xn=s(n,"P",{});var Fc=a(xn);Xp=i(Fc,"All checkpoints can be found on the "),ko=s(Fc,"A",{href:!0,rel:!0});var ub=a(ko);Qp=i(ub,"hub"),ub.forEach(t),eh=i(Fc,"."),Fc.forEach(t),Bl=l(n),xt=s(n,"P",{});var Ar=a(xt);th=i(Ar,"This model was contributed by "),vo=s(Ar,"A",{href:!0,rel:!0});var mb=a(vo);nh=i(mb,"thomwolf"),mb.forEach(t),oh=i(Ar,". The original code can be found "),bo=s(Ar,"A",{href:!0,rel:!0});var fb=a(bo);sh=i(fb,"here"),fb.forEach(t),ah=i(Ar,"."),Ar.forEach(t),Ul=l(n),Xa=s(n,"A",{id:!0}),a(Xa).forEach(t),Wl=l(n),Yt=s(n,"H2",{class:!0});var Mc=a(Yt);En=s(Mc,"A",{id:!0,class:!0,href:!0});var _b=a(En);gi=s(_b,"SPAN",{});var gb=a(gi);_(wo.$$.fragment,gb),gb.forEach(t),_b.forEach(t),rh=l(Mc),Ti=s(Mc,"SPAN",{});var Tb=a(Ti);ih=i(Tb,"Training"),Tb.forEach(t),Mc.forEach(t),Rl=l(n),_t=s(n,"P",{});var ao=a(_t);dh=i(ao,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),ki=s(ao,"CODE",{});var kb=a(ki);lh=i(kb,"input_ids"),kb.forEach(t),ch=i(ao,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),vi=s(ao,"CODE",{});var vb=a(vi);ph=i(vb,"decoder_input_ids"),vb.forEach(t),hh=i(ao,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),bi=s(ao,"CODE",{});var bb=a(bi);uh=i(bb,"labels"),bb.forEach(t),mh=i(ao,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),ao.forEach(t),Hl=l(n),qn=s(n,"P",{});var Pc=a(qn);fh=i(Pc,"One can use "),Qa=s(Pc,"A",{href:!0});var wb=a(Qa);_h=i(wb,"T5ForConditionalGeneration"),wb.forEach(t),gh=i(Pc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Pc.forEach(t),Vl=l(n),jn=s(n,"UL",{});var Cc=a(jn);dt=s(Cc,"LI",{});var Nt=a(dt);wi=s(Nt,"P",{});var yb=a(wi);Th=i(yb,"Unsupervised denoising training"),yb.forEach(t),kh=l(Nt),_e=s(Nt,"P",{});var tt=a(_e);vh=i(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),yi=s(tt,"EM",{});var $b=a(yi);bh=i($b,"a.k.a"),$b.forEach(t),wh=i(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),$i=s(tt,"EM",{});var zb=a($i);yh=i(zb,"real"),zb.forEach(t),$h=i(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),zi=s(tt,"CODE",{});var xb=a(zi);zh=i(xb,"<extra_id_0>"),xb.forEach(t),xh=i(tt,`,
`),xi=s(tt,"CODE",{});var Eb=a(xi);Eh=i(Eb,"<extra_id_1>"),Eb.forEach(t),qh=i(tt,", \u2026 up to "),Ei=s(tt,"CODE",{});var qb=a(Ei);jh=i(qb,"<extra_id_99>"),qb.forEach(t),Fh=i(tt,`. As a default, 100 sentinel tokens are available in
`),er=s(tt,"A",{href:!0});var jb=a(er);Mh=i(jb,"T5Tokenizer"),jb.forEach(t),Ph=i(tt,"."),tt.forEach(t),Ch=l(Nt),qi=s(Nt,"P",{});var Fb=a(qi);Ah=i(Fb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Fb.forEach(t),Nh=l(Nt),_(yo.$$.fragment,Nt),Ih=l(Nt),$o=s(Nt,"P",{});var Ac=a($o);Lh=i(Ac,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),zo=s(Ac,"A",{href:!0,rel:!0});var Mb=a(zo);Dh=i(Mb,"run_t5_mlm_flax.py"),Mb.forEach(t),Sh=i(Ac,` script in the Examples
directory.`),Ac.forEach(t),Nt.forEach(t),Oh=l(Cc),ge=s(Cc,"LI",{});var nt=a(ge);ji=s(nt,"P",{});var Pb=a(ji);Gh=i(Pb,"Supervised training"),Pb.forEach(t),Bh=l(nt),Fi=s(nt,"P",{});var Cb=a(Fi);Uh=i(Cb,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Cb.forEach(t),Wh=l(nt),_(xo.$$.fragment,nt),Rh=l(nt),re=s(nt,"P",{});var we=a(re);Hh=i(we,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Mi=s(we,"CODE",{});var Ab=a(Mi);Vh=i(Ab,"input_ids"),Ab.forEach(t),Kh=i(we,` (which are the
`),Pi=s(we,"CODE",{});var Nb=a(Pi);Yh=i(Nb,"input_ids"),Nb.forEach(t),Zh=i(we," of the encoded input sequence) and "),Ci=s(we,"CODE",{});var Ib=a(Ci);Jh=i(Ib,"labels"),Ib.forEach(t),Xh=i(we," (which are the "),Ai=s(we,"CODE",{});var Lb=a(Ai);Qh=i(Lb,"input_ids"),Lb.forEach(t),eu=i(we,` of the encoded
target sequence). The model will automatically create the `),Ni=s(we,"CODE",{});var Db=a(Ni);tu=i(Db,"decoder_input_ids"),Db.forEach(t),nu=i(we," based on the "),Ii=s(we,"CODE",{});var Sb=a(Ii);ou=i(Sb,"labels"),Sb.forEach(t),su=i(we,`, by
shifting them one position to the right and prepending the `),Li=s(we,"CODE",{});var Ob=a(Li);au=i(Ob,"config.decoder_start_token_id"),Ob.forEach(t),ru=i(we,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),we.forEach(t),iu=l(nt),Zt=s(nt,"P",{});var Nr=a(Zt);du=i(Nr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Di=s(Nr,"CODE",{});var Gb=a(Di);lu=i(Gb,"max_source_length"),Gb.forEach(t),cu=i(Nr," and "),Si=s(Nr,"CODE",{});var Bb=a(Si);pu=i(Bb,"max_target_length"),Bb.forEach(t),hu=i(Nr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Nr.forEach(t),uu=l(nt),Te=s(nt,"P",{});var ot=a(Te);mu=i(ot,"In addition, we must make sure that padding token id\u2019s of the "),Oi=s(ot,"CODE",{});var Ub=a(Oi);fu=i(Ub,"labels"),Ub.forEach(t),_u=i(ot,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Gi=s(ot,"CODE",{});var Wb=a(Gi);gu=i(Wb,"ignore_index"),Wb.forEach(t),Tu=i(ot,`
of the `),Bi=s(ot,"CODE",{});var Rb=a(Bi);ku=i(Rb,"CrossEntropyLoss"),Rb.forEach(t),vu=i(ot,". In Flax, one can use the "),Ui=s(ot,"CODE",{});var Hb=a(Ui);bu=i(Hb,"decoder_attention_mask"),Hb.forEach(t),wu=i(ot,` to ignore padded tokens from
the loss (see the `),Eo=s(ot,"A",{href:!0,rel:!0});var Vb=a(Eo);yu=i(Vb,"Flax summarization script"),Vb.forEach(t),$u=i(ot,` for details). We also pass
`),Wi=s(ot,"CODE",{});var Kb=a(Wi);zu=i(Kb,"attention_mask"),Kb.forEach(t),xu=i(ot,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),ot.forEach(t),Eu=l(nt),_(qo.$$.fragment,nt),nt.forEach(t),Cc.forEach(t),Kl=l(n),tr=s(n,"P",{});var Yb=a(tr);qu=i(Yb,"Additional training tips:"),Yb.forEach(t),Yl=l(n),Et=s(n,"UL",{});var Ir=a(Et);Ri=s(Ir,"LI",{});var Zb=a(Ri);jo=s(Zb,"P",{});var Nc=a(jo);ju=i(Nc,"T5 models need a slightly higher learning rate than the default one set in the "),Hi=s(Nc,"CODE",{});var Jb=a(Hi);Fu=i(Jb,"Trainer"),Jb.forEach(t),Mu=i(Nc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Nc.forEach(t),Zb.forEach(t),Pu=l(Ir),Vi=s(Ir,"LI",{});var Xb=a(Vi);Jt=s(Xb,"P",{});var Lr=a(Jt);Cu=i(Lr,"According to "),Fo=s(Lr,"A",{href:!0,rel:!0});var Qb=a(Fo);Au=i(Qb,"this forum post"),Qb.forEach(t),Nu=i(Lr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Mo=s(Lr,"A",{href:!0,rel:!0});var e5=a(Mo);Iu=i(e5,"paper"),e5.forEach(t),Lu=i(Lr,` for the task prefixes
used).`),Lr.forEach(t),Xb.forEach(t),Du=l(Ir),Ki=s(Ir,"LI",{});var t5=a(Ki);Po=s(t5,"P",{});var Ic=a(Po);Su=i(Ic,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Yi=s(Ic,"EM",{});var n5=a(Yi);Ou=i(n5,"pad_to_multiple_of"),n5.forEach(t),Gu=i(Ic,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Ic.forEach(t),t5.forEach(t),Ir.forEach(t),Zl=l(n),nr=s(n,"A",{id:!0}),a(nr).forEach(t),Jl=l(n),Xt=s(n,"H2",{class:!0});var Lc=a(Xt);Fn=s(Lc,"A",{id:!0,class:!0,href:!0});var o5=a(Fn);Zi=s(o5,"SPAN",{});var s5=a(Zi);_(Co.$$.fragment,s5),s5.forEach(t),o5.forEach(t),Bu=l(Lc),Ji=s(Lc,"SPAN",{});var a5=a(Ji);Uu=i(a5,"Inference"),a5.forEach(t),Lc.forEach(t),Xl=l(n),gt=s(n,"P",{});var ro=a(gt);Wu=i(ro,"At inference time, it is recommended to use "),or=s(ro,"A",{href:!0});var r5=a(or);Ru=i(r5,"generate()"),r5.forEach(t),Hu=i(ro,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Ao=s(ro,"A",{href:!0,rel:!0});var i5=a(Ao);Vu=i(i5,"this blog post"),i5.forEach(t),Ku=i(ro,` to know all the details about generating text with Transformers.
There\u2019s also `),No=s(ro,"A",{href:!0,rel:!0});var d5=a(No);Yu=i(d5,"this blog post"),d5.forEach(t),Zu=i(ro,` which explains how
generation works in general in encoder-decoder models.`),ro.forEach(t),Ql=l(n),_(Io.$$.fragment,n),ec=l(n),Ue=s(n,"P",{});var It=a(Ue);Ju=i(It,"Note that T5 uses the "),Xi=s(It,"CODE",{});var l5=a(Xi);Xu=i(l5,"pad_token_id"),l5.forEach(t),Qu=i(It," as the "),Qi=s(It,"CODE",{});var c5=a(Qi);em=i(c5,"decoder_start_token_id"),c5.forEach(t),tm=i(It,`, so when doing generation without using
`),sr=s(It,"A",{href:!0});var p5=a(sr);nm=i(p5,"generate()"),p5.forEach(t),om=i(It,", make sure you start it with the "),ed=s(It,"CODE",{});var h5=a(ed);sm=i(h5,"pad_token_id"),h5.forEach(t),am=i(It,"."),It.forEach(t),tc=l(n),ar=s(n,"P",{});var u5=a(ar);rm=i(u5,"The example above only shows a single example. You can also do batched inference, like so:"),u5.forEach(t),nc=l(n),_(Lo.$$.fragment,n),oc=l(n),rr=s(n,"A",{id:!0}),a(rr).forEach(t),sc=l(n),Qt=s(n,"H2",{class:!0});var Dc=a(Qt);Mn=s(Dc,"A",{id:!0,class:!0,href:!0});var m5=a(Mn);td=s(m5,"SPAN",{});var f5=a(td);_(Do.$$.fragment,f5),f5.forEach(t),m5.forEach(t),im=l(Dc),nd=s(Dc,"SPAN",{});var _5=a(nd);dm=i(_5,"Example scripts"),_5.forEach(t),Dc.forEach(t),ac=l(n),ir=s(n,"P",{});var g5=a(ir);lm=i(g5,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),g5.forEach(t),rc=l(n),Pn=s(n,"UL",{});var Sc=a(Pn);od=s(Sc,"LI",{});var T5=a(od);en=s(T5,"P",{});var Dr=a(en);cm=i(Dr,"pre-training: the "),So=s(Dr,"A",{href:!0,rel:!0});var k5=a(So);pm=i(k5,"run_t5_mlm_flax.py"),k5.forEach(t),hm=i(Dr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Oo=s(Dr,"A",{href:!0,rel:!0});var v5=a(Oo);um=i(v5,"t5_tokenizer_model.py"),v5.forEach(t),mm=i(Dr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Dr.forEach(t),T5.forEach(t),fm=l(Sc),sd=s(Sc,"LI",{});var b5=a(sd);De=s(b5,"P",{});var bt=a(De);_m=i(bt,"fine-tuning: T5 is supported by the official summarization scripts ("),Go=s(bt,"A",{href:!0,rel:!0});var w5=a(Go);gm=i(w5,"PyTorch"),w5.forEach(t),Tm=i(bt,", "),Bo=s(bt,"A",{href:!0,rel:!0});var y5=a(Bo);km=i(y5,"Tensorflow"),y5.forEach(t),vm=i(bt,", and "),Uo=s(bt,"A",{href:!0,rel:!0});var $5=a(Uo);bm=i($5,"Flax"),$5.forEach(t),wm=i(bt,`) and translation scripts
(`),Wo=s(bt,"A",{href:!0,rel:!0});var z5=a(Wo);ym=i(z5,"PyTorch"),z5.forEach(t),$m=i(bt," and "),Ro=s(bt,"A",{href:!0,rel:!0});var x5=a(Ro);zm=i(x5,"Tensorflow"),x5.forEach(t),xm=i(bt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),bt.forEach(t),b5.forEach(t),Sc.forEach(t),ic=l(n),tn=s(n,"H2",{class:!0});var Oc=a(tn);Cn=s(Oc,"A",{id:!0,class:!0,href:!0});var E5=a(Cn);ad=s(E5,"SPAN",{});var q5=a(ad);_(Ho.$$.fragment,q5),q5.forEach(t),E5.forEach(t),Em=l(Oc),rd=s(Oc,"SPAN",{});var j5=a(rd);qm=i(j5,"T5Config"),j5.forEach(t),Oc.forEach(t),dc=l(n),wt=s(n,"DIV",{class:!0});var Sr=a(wt);_(Vo.$$.fragment,Sr),jm=l(Sr),yt=s(Sr,"P",{});var io=a(yt);Fm=i(io,"This is the configuration class to store the configuration of a "),dr=s(io,"A",{href:!0});var F5=a(dr);Mm=i(F5,"T5Model"),F5.forEach(t),Pm=i(io," or a "),lr=s(io,"A",{href:!0});var M5=a(lr);Cm=i(M5,"TFT5Model"),M5.forEach(t),Am=i(io,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Ko=s(io,"A",{href:!0,rel:!0});var P5=a(Ko);Nm=i(P5,"t5-small"),P5.forEach(t),Im=i(io," architecture."),io.forEach(t),Lm=l(Sr),nn=s(Sr,"P",{});var Or=a(nn);Dm=i(Or,"Configuration objects inherit from "),cr=s(Or,"A",{href:!0});var C5=a(cr);Sm=i(C5,"PretrainedConfig"),C5.forEach(t),Om=i(Or,` and can be used to control the model outputs. Read the
documentation from `),pr=s(Or,"A",{href:!0});var A5=a(pr);Gm=i(A5,"PretrainedConfig"),A5.forEach(t),Bm=i(Or," for more information."),Or.forEach(t),Sr.forEach(t),lc=l(n),on=s(n,"H2",{class:!0});var Gc=a(on);An=s(Gc,"A",{id:!0,class:!0,href:!0});var N5=a(An);id=s(N5,"SPAN",{});var I5=a(id);_(Yo.$$.fragment,I5),I5.forEach(t),N5.forEach(t),Um=l(Gc),dd=s(Gc,"SPAN",{});var L5=a(dd);Wm=i(L5,"T5Tokenizer"),L5.forEach(t),Gc.forEach(t),cc=l(n),ie=s(n,"DIV",{class:!0});var st=a(ie);_(Zo.$$.fragment,st),Rm=l(st),Jo=s(st,"P",{});var Bc=a(Jo);Hm=i(Bc,"Construct a T5 tokenizer. Based on "),Xo=s(Bc,"A",{href:!0,rel:!0});var D5=a(Xo);Vm=i(D5,"SentencePiece"),D5.forEach(t),Km=i(Bc,"."),Bc.forEach(t),Ym=l(st),Qo=s(st,"P",{});var Uc=a(Qo);Zm=i(Uc,"This tokenizer inherits from "),hr=s(Uc,"A",{href:!0});var S5=a(hr);Jm=i(S5,"PreTrainedTokenizer"),S5.forEach(t),Xm=i(Uc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Uc.forEach(t),Qm=l(st),qt=s(st,"DIV",{class:!0});var Gr=a(qt);_(es.$$.fragment,Gr),ef=l(Gr),ld=s(Gr,"P",{});var O5=a(ld);tf=i(O5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),O5.forEach(t),nf=l(Gr),ts=s(Gr,"UL",{});var Wc=a(ts);ur=s(Wc,"LI",{});var xv=a(ur);of=i(xv,"single sequence: "),cd=s(xv,"CODE",{});var G5=a(cd);sf=i(G5,"X </s>"),G5.forEach(t),xv.forEach(t),af=l(Wc),mr=s(Wc,"LI",{});var Ev=a(mr);rf=i(Ev,"pair of sequences: "),pd=s(Ev,"CODE",{});var B5=a(pd);df=i(B5,"A </s> B </s>"),B5.forEach(t),Ev.forEach(t),Wc.forEach(t),Gr.forEach(t),lf=l(st),Nn=s(st,"DIV",{class:!0});var Rc=a(Nn);_(ns.$$.fragment,Rc),cf=l(Rc),os=s(Rc,"P",{});var Hc=a(os);pf=i(Hc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hd=s(Hc,"CODE",{});var U5=a(hd);hf=i(U5,"prepare_for_model"),U5.forEach(t),uf=i(Hc," method."),Hc.forEach(t),Rc.forEach(t),mf=l(st),In=s(st,"DIV",{class:!0});var Vc=a(In);_(ss.$$.fragment,Vc),ff=l(Vc),ud=s(Vc,"P",{});var W5=a(ud);_f=i(W5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),W5.forEach(t),Vc.forEach(t),gf=l(st),fr=s(st,"DIV",{class:!0});var R5=a(fr);_(as.$$.fragment,R5),R5.forEach(t),st.forEach(t),pc=l(n),sn=s(n,"H2",{class:!0});var Kc=a(sn);Ln=s(Kc,"A",{id:!0,class:!0,href:!0});var H5=a(Ln);md=s(H5,"SPAN",{});var V5=a(md);_(rs.$$.fragment,V5),V5.forEach(t),H5.forEach(t),Tf=l(Kc),fd=s(Kc,"SPAN",{});var K5=a(fd);kf=i(K5,"T5TokenizerFast"),K5.forEach(t),Kc.forEach(t),hc=l(n),Se=s(n,"DIV",{class:!0});var Lt=a(Se);_(is.$$.fragment,Lt),vf=l(Lt),an=s(Lt,"P",{});var Br=a(an);bf=i(Br,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),_d=s(Br,"EM",{});var Y5=a(_d);wf=i(Y5,"tokenizers"),Y5.forEach(t),yf=i(Br,` library). Based on
`),ds=s(Br,"A",{href:!0,rel:!0});var Z5=a(ds);$f=i(Z5,"Unigram"),Z5.forEach(t),zf=i(Br,"."),Br.forEach(t),xf=l(Lt),ls=s(Lt,"P",{});var Yc=a(ls);Ef=i(Yc,"This tokenizer inherits from "),_r=s(Yc,"A",{href:!0});var J5=a(_r);qf=i(J5,"PreTrainedTokenizerFast"),J5.forEach(t),jf=i(Yc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yc.forEach(t),Ff=l(Lt),jt=s(Lt,"DIV",{class:!0});var Ur=a(jt);_(cs.$$.fragment,Ur),Mf=l(Ur),gd=s(Ur,"P",{});var X5=a(gd);Pf=i(X5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),X5.forEach(t),Cf=l(Ur),ps=s(Ur,"UL",{});var Zc=a(ps);gr=s(Zc,"LI",{});var qv=a(gr);Af=i(qv,"single sequence: "),Td=s(qv,"CODE",{});var Q5=a(Td);Nf=i(Q5,"X </s>"),Q5.forEach(t),qv.forEach(t),If=l(Zc),Tr=s(Zc,"LI",{});var jv=a(Tr);Lf=i(jv,"pair of sequences: "),kd=s(jv,"CODE",{});var e1=a(kd);Df=i(e1,"A </s> B </s>"),e1.forEach(t),jv.forEach(t),Zc.forEach(t),Ur.forEach(t),Sf=l(Lt),Dn=s(Lt,"DIV",{class:!0});var Jc=a(Dn);_(hs.$$.fragment,Jc),Of=l(Jc),vd=s(Jc,"P",{});var t1=a(vd);Gf=i(t1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),t1.forEach(t),Jc.forEach(t),Lt.forEach(t),uc=l(n),rn=s(n,"H2",{class:!0});var Xc=a(rn);Sn=s(Xc,"A",{id:!0,class:!0,href:!0});var n1=a(Sn);bd=s(n1,"SPAN",{});var o1=a(bd);_(us.$$.fragment,o1),o1.forEach(t),n1.forEach(t),Bf=l(Xc),wd=s(Xc,"SPAN",{});var s1=a(wd);Uf=i(s1,"T5Model"),s1.forEach(t),Xc.forEach(t),mc=l(n),J=s(n,"DIV",{class:!0});var ye=a(J);_(ms.$$.fragment,ye),Wf=l(ye),yd=s(ye,"P",{});var a1=a(yd);Rf=i(a1,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),a1.forEach(t),Hf=l(ye),fs=s(ye,"P",{});var Qc=a(fs);Vf=i(Qc,"The T5 model was proposed in "),_s=s(Qc,"A",{href:!0,rel:!0});var r1=a(_s);Kf=i(r1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),r1.forEach(t),Yf=i(Qc,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Qc.forEach(t),Zf=l(ye),gs=s(ye,"P",{});var ep=a(gs);Jf=i(ep,"This model inherits from "),kr=s(ep,"A",{href:!0});var i1=a(kr);Xf=i(i1,"PreTrainedModel"),i1.forEach(t),Qf=i(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),e_=l(ye),Ts=s(ye,"P",{});var tp=a(Ts);t_=i(tp,"This model is also a PyTorch "),ks=s(tp,"A",{href:!0,rel:!0});var d1=a(ks);n_=i(d1,"torch.nn.Module"),d1.forEach(t),o_=i(tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp.forEach(t),s_=l(ye),We=s(ye,"DIV",{class:!0});var Dt=a(We);_(vs.$$.fragment,Dt),a_=l(Dt),dn=s(Dt,"P",{});var Wr=a(dn);r_=i(Wr,"The "),vr=s(Wr,"A",{href:!0});var l1=a(vr);i_=i(l1,"T5Model"),l1.forEach(t),d_=i(Wr," forward method, overrides the "),$d=s(Wr,"CODE",{});var c1=a($d);l_=i(c1,"__call__"),c1.forEach(t),c_=i(Wr," special method."),Wr.forEach(t),p_=l(Dt),_(On.$$.fragment,Dt),h_=l(Dt),zd=s(Dt,"P",{});var p1=a(zd);u_=i(p1,"Example:"),p1.forEach(t),m_=l(Dt),_(bs.$$.fragment,Dt),Dt.forEach(t),f_=l(ye),Re=s(ye,"DIV",{class:!0});var St=a(Re);_(ws.$$.fragment,St),__=l(St),xd=s(St,"P",{});var h1=a(xd);g_=i(h1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),h1.forEach(t),T_=l(St),Ed=s(St,"P",{});var u1=a(Ed);k_=i(u1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),u1.forEach(t),v_=l(St),qd=s(St,"P",{});var m1=a(qd);b_=i(m1,"Example:"),m1.forEach(t),w_=l(St),_(ys.$$.fragment,St),St.forEach(t),y_=l(ye),Tt=s(ye,"DIV",{class:!0});var lo=a(Tt);_($s.$$.fragment,lo),$_=l(lo),jd=s(lo,"P",{});var f1=a(jd);z_=i(f1,"Moves the model to cpu from a model parallel state."),f1.forEach(t),x_=l(lo),Fd=s(lo,"P",{});var _1=a(Fd);E_=i(_1,"Example:"),_1.forEach(t),q_=l(lo),_(zs.$$.fragment,lo),lo.forEach(t),ye.forEach(t),fc=l(n),ln=s(n,"H2",{class:!0});var np=a(ln);Gn=s(np,"A",{id:!0,class:!0,href:!0});var g1=a(Gn);Md=s(g1,"SPAN",{});var T1=a(Md);_(xs.$$.fragment,T1),T1.forEach(t),g1.forEach(t),j_=l(np),Pd=s(np,"SPAN",{});var k1=a(Pd);F_=i(k1,"T5ForConditionalGeneration"),k1.forEach(t),np.forEach(t),_c=l(n),X=s(n,"DIV",{class:!0});var $e=a(X);_(Es.$$.fragment,$e),M_=l($e),qs=s($e,"P",{});var op=a(qs);P_=i(op,"T5 Model with a "),Cd=s(op,"CODE",{});var v1=a(Cd);C_=i(v1,"language modeling"),v1.forEach(t),A_=i(op," head on top."),op.forEach(t),N_=l($e),js=s($e,"P",{});var sp=a(js);I_=i(sp,"The T5 model was proposed in "),Fs=s(sp,"A",{href:!0,rel:!0});var b1=a(Fs);L_=i(b1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),b1.forEach(t),D_=i(sp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),sp.forEach(t),S_=l($e),Ms=s($e,"P",{});var ap=a(Ms);O_=i(ap,"This model inherits from "),br=s(ap,"A",{href:!0});var w1=a(br);G_=i(w1,"PreTrainedModel"),w1.forEach(t),B_=i(ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap.forEach(t),U_=l($e),Ps=s($e,"P",{});var rp=a(Ps);W_=i(rp,"This model is also a PyTorch "),Cs=s(rp,"A",{href:!0,rel:!0});var y1=a(Cs);R_=i(y1,"torch.nn.Module"),y1.forEach(t),H_=i(rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp.forEach(t),V_=l($e),He=s($e,"DIV",{class:!0});var Ot=a(He);_(As.$$.fragment,Ot),K_=l(Ot),cn=s(Ot,"P",{});var Rr=a(cn);Y_=i(Rr,"The "),wr=s(Rr,"A",{href:!0});var $1=a(wr);Z_=i($1,"T5ForConditionalGeneration"),$1.forEach(t),J_=i(Rr," forward method, overrides the "),Ad=s(Rr,"CODE",{});var z1=a(Ad);X_=i(z1,"__call__"),z1.forEach(t),Q_=i(Rr," special method."),Rr.forEach(t),eg=l(Ot),_(Bn.$$.fragment,Ot),tg=l(Ot),Nd=s(Ot,"P",{});var x1=a(Nd);ng=i(x1,"Examples:"),x1.forEach(t),og=l(Ot),_(Ns.$$.fragment,Ot),Ot.forEach(t),sg=l($e),Ve=s($e,"DIV",{class:!0});var Gt=a(Ve);_(Is.$$.fragment,Gt),ag=l(Gt),Id=s(Gt,"P",{});var E1=a(Id);rg=i(E1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),E1.forEach(t),ig=l(Gt),Ld=s(Gt,"P",{});var q1=a(Ld);dg=i(q1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),q1.forEach(t),lg=l(Gt),Dd=s(Gt,"P",{});var j1=a(Dd);cg=i(j1,"Example:"),j1.forEach(t),pg=l(Gt),_(Ls.$$.fragment,Gt),Gt.forEach(t),hg=l($e),kt=s($e,"DIV",{class:!0});var co=a(kt);_(Ds.$$.fragment,co),ug=l(co),Sd=s(co,"P",{});var F1=a(Sd);mg=i(F1,"Moves the model to cpu from a model parallel state."),F1.forEach(t),fg=l(co),Od=s(co,"P",{});var M1=a(Od);_g=i(M1,"Example:"),M1.forEach(t),gg=l(co),_(Ss.$$.fragment,co),co.forEach(t),$e.forEach(t),gc=l(n),pn=s(n,"H2",{class:!0});var ip=a(pn);Un=s(ip,"A",{id:!0,class:!0,href:!0});var P1=a(Un);Gd=s(P1,"SPAN",{});var C1=a(Gd);_(Os.$$.fragment,C1),C1.forEach(t),P1.forEach(t),Tg=l(ip),Bd=s(ip,"SPAN",{});var A1=a(Bd);kg=i(A1,"T5EncoderModel"),A1.forEach(t),ip.forEach(t),Tc=l(n),Q=s(n,"DIV",{class:!0});var ze=a(Q);_(Gs.$$.fragment,ze),vg=l(ze),Ud=s(ze,"P",{});var N1=a(Ud);bg=i(N1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),N1.forEach(t),wg=l(ze),Bs=s(ze,"P",{});var dp=a(Bs);yg=i(dp,"The T5 model was proposed in "),Us=s(dp,"A",{href:!0,rel:!0});var I1=a(Us);$g=i(I1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),I1.forEach(t),zg=i(dp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),dp.forEach(t),xg=l(ze),Ws=s(ze,"P",{});var lp=a(Ws);Eg=i(lp,"This model inherits from "),yr=s(lp,"A",{href:!0});var L1=a(yr);qg=i(L1,"PreTrainedModel"),L1.forEach(t),jg=i(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Fg=l(ze),Rs=s(ze,"P",{});var cp=a(Rs);Mg=i(cp,"This model is also a PyTorch "),Hs=s(cp,"A",{href:!0,rel:!0});var D1=a(Hs);Pg=i(D1,"torch.nn.Module"),D1.forEach(t),Cg=i(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(t),Ag=l(ze),Ke=s(ze,"DIV",{class:!0});var Bt=a(Ke);_(Vs.$$.fragment,Bt),Ng=l(Bt),hn=s(Bt,"P",{});var Hr=a(hn);Ig=i(Hr,"The "),$r=s(Hr,"A",{href:!0});var S1=a($r);Lg=i(S1,"T5EncoderModel"),S1.forEach(t),Dg=i(Hr," forward method, overrides the "),Wd=s(Hr,"CODE",{});var O1=a(Wd);Sg=i(O1,"__call__"),O1.forEach(t),Og=i(Hr," special method."),Hr.forEach(t),Gg=l(Bt),_(Wn.$$.fragment,Bt),Bg=l(Bt),Rd=s(Bt,"P",{});var G1=a(Rd);Ug=i(G1,"Example:"),G1.forEach(t),Wg=l(Bt),_(Ks.$$.fragment,Bt),Bt.forEach(t),Rg=l(ze),Ye=s(ze,"DIV",{class:!0});var Ut=a(Ye);_(Ys.$$.fragment,Ut),Hg=l(Ut),Hd=s(Ut,"P",{});var B1=a(Hd);Vg=i(B1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),B1.forEach(t),Kg=l(Ut),Vd=s(Ut,"P",{});var U1=a(Vd);Yg=i(U1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),U1.forEach(t),Zg=l(Ut),Kd=s(Ut,"P",{});var W1=a(Kd);Jg=i(W1,"Example:"),W1.forEach(t),Xg=l(Ut),_(Zs.$$.fragment,Ut),Ut.forEach(t),Qg=l(ze),vt=s(ze,"DIV",{class:!0});var po=a(vt);_(Js.$$.fragment,po),eT=l(po),Yd=s(po,"P",{});var R1=a(Yd);tT=i(R1,"Moves the model to cpu from a model parallel state."),R1.forEach(t),nT=l(po),Zd=s(po,"P",{});var H1=a(Zd);oT=i(H1,"Example:"),H1.forEach(t),sT=l(po),_(Xs.$$.fragment,po),po.forEach(t),ze.forEach(t),kc=l(n),un=s(n,"H2",{class:!0});var pp=a(un);Rn=s(pp,"A",{id:!0,class:!0,href:!0});var V1=a(Rn);Jd=s(V1,"SPAN",{});var K1=a(Jd);_(Qs.$$.fragment,K1),K1.forEach(t),V1.forEach(t),aT=l(pp),Xd=s(pp,"SPAN",{});var Y1=a(Xd);rT=i(Y1,"TFT5Model"),Y1.forEach(t),pp.forEach(t),vc=l(n),de=s(n,"DIV",{class:!0});var at=a(de);_(ea.$$.fragment,at),iT=l(at),Qd=s(at,"P",{});var Z1=a(Qd);dT=i(Z1,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),Z1.forEach(t),lT=l(at),ta=s(at,"P",{});var hp=a(ta);cT=i(hp,"The T5 model was proposed in "),na=s(hp,"A",{href:!0,rel:!0});var J1=a(na);pT=i(J1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),J1.forEach(t),hT=i(hp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),hp.forEach(t),uT=l(at),oa=s(at,"P",{});var up=a(oa);mT=i(up,"This model inherits from "),zr=s(up,"A",{href:!0});var X1=a(zr);fT=i(X1,"TFPreTrainedModel"),X1.forEach(t),_T=i(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),gT=l(at),sa=s(at,"P",{});var mp=a(sa);TT=i(mp,"This model is also a "),aa=s(mp,"A",{href:!0,rel:!0});var Q1=a(aa);kT=i(Q1,"tf.keras.Model"),Q1.forEach(t),vT=i(mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mp.forEach(t),bT=l(at),_(Hn.$$.fragment,at),wT=l(at),Ze=s(at,"DIV",{class:!0});var Wt=a(Ze);_(ra.$$.fragment,Wt),yT=l(Wt),mn=s(Wt,"P",{});var Vr=a(mn);$T=i(Vr,"The "),xr=s(Vr,"A",{href:!0});var ew=a(xr);zT=i(ew,"TFT5Model"),ew.forEach(t),xT=i(Vr," forward method, overrides the "),el=s(Vr,"CODE",{});var tw=a(el);ET=i(tw,"__call__"),tw.forEach(t),qT=i(Vr," special method."),Vr.forEach(t),jT=l(Wt),_(Vn.$$.fragment,Wt),FT=l(Wt),tl=s(Wt,"P",{});var nw=a(tl);MT=i(nw,"Examples:"),nw.forEach(t),PT=l(Wt),_(ia.$$.fragment,Wt),Wt.forEach(t),at.forEach(t),bc=l(n),fn=s(n,"H2",{class:!0});var fp=a(fn);Kn=s(fp,"A",{id:!0,class:!0,href:!0});var ow=a(Kn);nl=s(ow,"SPAN",{});var sw=a(nl);_(da.$$.fragment,sw),sw.forEach(t),ow.forEach(t),CT=l(fp),ol=s(fp,"SPAN",{});var aw=a(ol);AT=i(aw,"TFT5ForConditionalGeneration"),aw.forEach(t),fp.forEach(t),wc=l(n),le=s(n,"DIV",{class:!0});var rt=a(le);_(la.$$.fragment,rt),NT=l(rt),ca=s(rt,"P",{});var _p=a(ca);IT=i(_p,"T5 Model with a "),sl=s(_p,"CODE",{});var rw=a(sl);LT=i(rw,"language modeling"),rw.forEach(t),DT=i(_p," head on top."),_p.forEach(t),ST=l(rt),pa=s(rt,"P",{});var gp=a(pa);OT=i(gp,"The T5 model was proposed in "),ha=s(gp,"A",{href:!0,rel:!0});var iw=a(ha);GT=i(iw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),iw.forEach(t),BT=i(gp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),gp.forEach(t),UT=l(rt),ua=s(rt,"P",{});var Tp=a(ua);WT=i(Tp,"This model inherits from "),Er=s(Tp,"A",{href:!0});var dw=a(Er);RT=i(dw,"TFPreTrainedModel"),dw.forEach(t),HT=i(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),VT=l(rt),ma=s(rt,"P",{});var kp=a(ma);KT=i(kp,"This model is also a "),fa=s(kp,"A",{href:!0,rel:!0});var lw=a(fa);YT=i(lw,"tf.keras.Model"),lw.forEach(t),ZT=i(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),JT=l(rt),_(Yn.$$.fragment,rt),XT=l(rt),Je=s(rt,"DIV",{class:!0});var Rt=a(Je);_(_a.$$.fragment,Rt),QT=l(Rt),_n=s(Rt,"P",{});var Kr=a(_n);ek=i(Kr,"The "),qr=s(Kr,"A",{href:!0});var cw=a(qr);tk=i(cw,"TFT5ForConditionalGeneration"),cw.forEach(t),nk=i(Kr," forward method, overrides the "),al=s(Kr,"CODE",{});var pw=a(al);ok=i(pw,"__call__"),pw.forEach(t),sk=i(Kr," special method."),Kr.forEach(t),ak=l(Rt),_(Zn.$$.fragment,Rt),rk=l(Rt),rl=s(Rt,"P",{});var hw=a(rl);ik=i(hw,"Examples:"),hw.forEach(t),dk=l(Rt),_(ga.$$.fragment,Rt),Rt.forEach(t),rt.forEach(t),yc=l(n),gn=s(n,"H2",{class:!0});var vp=a(gn);Jn=s(vp,"A",{id:!0,class:!0,href:!0});var uw=a(Jn);il=s(uw,"SPAN",{});var mw=a(il);_(Ta.$$.fragment,mw),mw.forEach(t),uw.forEach(t),lk=l(vp),dl=s(vp,"SPAN",{});var fw=a(dl);ck=i(fw,"TFT5EncoderModel"),fw.forEach(t),vp.forEach(t),$c=l(n),ce=s(n,"DIV",{class:!0});var it=a(ce);_(ka.$$.fragment,it),pk=l(it),ll=s(it,"P",{});var _w=a(ll);hk=i(_w,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),_w.forEach(t),uk=l(it),va=s(it,"P",{});var bp=a(va);mk=i(bp,"The T5 model was proposed in "),ba=s(bp,"A",{href:!0,rel:!0});var gw=a(ba);fk=i(gw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),gw.forEach(t),_k=i(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(t),gk=l(it),wa=s(it,"P",{});var wp=a(wa);Tk=i(wp,"This model inherits from "),jr=s(wp,"A",{href:!0});var Tw=a(jr);kk=i(Tw,"TFPreTrainedModel"),Tw.forEach(t),vk=i(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),bk=l(it),ya=s(it,"P",{});var yp=a(ya);wk=i(yp,"This model is also a "),$a=s(yp,"A",{href:!0,rel:!0});var kw=a($a);yk=i(kw,"tf.keras.Model"),kw.forEach(t),$k=i(yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yp.forEach(t),zk=l(it),_(Xn.$$.fragment,it),xk=l(it),Xe=s(it,"DIV",{class:!0});var Ht=a(Xe);_(za.$$.fragment,Ht),Ek=l(Ht),Tn=s(Ht,"P",{});var Yr=a(Tn);qk=i(Yr,"The "),Fr=s(Yr,"A",{href:!0});var vw=a(Fr);jk=i(vw,"TFT5EncoderModel"),vw.forEach(t),Fk=i(Yr," forward method, overrides the "),cl=s(Yr,"CODE",{});var bw=a(cl);Mk=i(bw,"__call__"),bw.forEach(t),Pk=i(Yr," special method."),Yr.forEach(t),Ck=l(Ht),_(Qn.$$.fragment,Ht),Ak=l(Ht),pl=s(Ht,"P",{});var ww=a(pl);Nk=i(ww,"Examples:"),ww.forEach(t),Ik=l(Ht),_(xa.$$.fragment,Ht),Ht.forEach(t),it.forEach(t),zc=l(n),kn=s(n,"H2",{class:!0});var $p=a(kn);eo=s($p,"A",{id:!0,class:!0,href:!0});var yw=a(eo);hl=s(yw,"SPAN",{});var $w=a(hl);_(Ea.$$.fragment,$w),$w.forEach(t),yw.forEach(t),Lk=l($p),ul=s($p,"SPAN",{});var zw=a(ul);Dk=i(zw,"FlaxT5Model"),zw.forEach(t),$p.forEach(t),xc=l(n),lt=s(n,"DIV",{class:!0});var ho=a(lt);_(qa.$$.fragment,ho),Sk=l(ho),Qe=s(ho,"DIV",{class:!0});var Vt=a(Qe);_(ja.$$.fragment,Vt),Ok=l(Vt),vn=s(Vt,"P",{});var Zr=a(vn);Gk=i(Zr,"The "),ml=s(Zr,"CODE",{});var xw=a(ml);Bk=i(xw,"FlaxT5PreTrainedModel"),xw.forEach(t),Uk=i(Zr,"forward method, overrides the "),fl=s(Zr,"CODE",{});var Ew=a(fl);Wk=i(Ew,"__call__"),Ew.forEach(t),Rk=i(Zr," special method."),Zr.forEach(t),Hk=l(Vt),_(to.$$.fragment,Vt),Vk=l(Vt),_l=s(Vt,"P",{});var qw=a(_l);Kk=i(qw,"Example:"),qw.forEach(t),Yk=l(Vt),_(Fa.$$.fragment,Vt),Vt.forEach(t),Zk=l(ho),Ft=s(ho,"DIV",{class:!0});var Jr=a(Ft);_(Ma.$$.fragment,Jr),Jk=l(Jr),gl=s(Jr,"P",{});var jw=a(gl);Xk=i(jw,"Example:"),jw.forEach(t),Qk=l(Jr),_(Pa.$$.fragment,Jr),Jr.forEach(t),ev=l(ho),Mt=s(ho,"DIV",{class:!0});var Xr=a(Mt);_(Ca.$$.fragment,Xr),tv=l(Xr),Tl=s(Xr,"P",{});var Fw=a(Tl);nv=i(Fw,"Example:"),Fw.forEach(t),ov=l(Xr),_(Aa.$$.fragment,Xr),Xr.forEach(t),ho.forEach(t),Ec=l(n),bn=s(n,"H2",{class:!0});var zp=a(bn);no=s(zp,"A",{id:!0,class:!0,href:!0});var Mw=a(no);kl=s(Mw,"SPAN",{});var Pw=a(kl);_(Na.$$.fragment,Pw),Pw.forEach(t),Mw.forEach(t),sv=l(zp),vl=s(zp,"SPAN",{});var Cw=a(vl);av=i(Cw,"FlaxT5ForConditionalGeneration"),Cw.forEach(t),zp.forEach(t),qc=l(n),ct=s(n,"DIV",{class:!0});var uo=a(ct);_(Ia.$$.fragment,uo),rv=l(uo),et=s(uo,"DIV",{class:!0});var Kt=a(et);_(La.$$.fragment,Kt),iv=l(Kt),wn=s(Kt,"P",{});var Qr=a(wn);dv=i(Qr,"The "),bl=s(Qr,"CODE",{});var Aw=a(bl);lv=i(Aw,"FlaxT5PreTrainedModel"),Aw.forEach(t),cv=i(Qr,"forward method, overrides the "),wl=s(Qr,"CODE",{});var Nw=a(wl);pv=i(Nw,"__call__"),Nw.forEach(t),hv=i(Qr," special method."),Qr.forEach(t),uv=l(Kt),_(oo.$$.fragment,Kt),mv=l(Kt),yl=s(Kt,"P",{});var Iw=a(yl);fv=i(Iw,"Example:"),Iw.forEach(t),_v=l(Kt),_(Da.$$.fragment,Kt),Kt.forEach(t),gv=l(uo),Pt=s(uo,"DIV",{class:!0});var ei=a(Pt);_(Sa.$$.fragment,ei),Tv=l(ei),$l=s(ei,"P",{});var Lw=a($l);kv=i(Lw,"Example:"),Lw.forEach(t),vv=l(ei),_(Oa.$$.fragment,ei),ei.forEach(t),bv=l(uo),Ct=s(uo,"DIV",{class:!0});var ti=a(Ct);_(Ga.$$.fragment,ti),wv=l(ti),zl=s(ti,"P",{});var Dw=a(zl);yv=i(Dw,"Example:"),Dw.forEach(t),$v=l(ti),_(Ba.$$.fragment,ti),ti.forEach(t),uo.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(ty)),c(y,"id","t5"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(q,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ae,"rel","nofollow"),c(N,"href","#training"),c(Ne,"href","#inference"),c(Ie,"href","#scripts"),c(mo,"href","https://huggingface.co/t5-small"),c(mo,"rel","nofollow"),c(fo,"href","https://huggingface.co/t5-base"),c(fo,"rel","nofollow"),c(_o,"href","https://huggingface.co/t5-large"),c(_o,"rel","nofollow"),c(go,"href","https://huggingface.co/t5-3b"),c(go,"rel","nofollow"),c(To,"href","https://huggingface.co/t5-11b"),c(To,"rel","nofollow"),c(Ya,"href","t5v1.1"),c(Za,"href","mt5"),c(Ja,"href","byt5"),c(ko,"href","https://huggingface.co/models?search=t5"),c(ko,"rel","nofollow"),c(vo,"href","https://huggingface.co/thomwolf"),c(vo,"rel","nofollow"),c(bo,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(bo,"rel","nofollow"),c(Xa,"id","training"),c(En,"id","training"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#training"),c(Yt,"class","relative group"),c(Qa,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(er,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Tokenizer"),c(zo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c(zo,"rel","nofollow"),c(Eo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Eo,"rel","nofollow"),c(Fo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Fo,"rel","nofollow"),c(Mo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Mo,"rel","nofollow"),c(nr,"id","inference"),c(Fn,"id","inference"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#inference"),c(Xt,"class","relative group"),c(or,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(Ao,"href","https://huggingface.co/blog/how-to-generate"),c(Ao,"rel","nofollow"),c(No,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(No,"rel","nofollow"),c(sr,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(rr,"id","scripts"),c(Mn,"id","example-scripts"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#example-scripts"),c(Qt,"class","relative group"),c(So,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(So,"rel","nofollow"),c(Oo,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Oo,"rel","nofollow"),c(Go,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(Go,"rel","nofollow"),c(Bo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Bo,"rel","nofollow"),c(Uo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Uo,"rel","nofollow"),c(Wo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Wo,"rel","nofollow"),c(Ro,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Ro,"rel","nofollow"),c(Cn,"id","transformers.T5Config"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#transformers.T5Config"),c(tn,"class","relative group"),c(dr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Model"),c(lr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model"),c(Ko,"href","https://huggingface.co/t5-small"),c(Ko,"rel","nofollow"),c(cr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(pr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(wt,"class","docstring"),c(An,"id","transformers.T5Tokenizer"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.T5Tokenizer"),c(on,"class","relative group"),c(Xo,"href","https://github.com/google/sentencepiece"),c(Xo,"rel","nofollow"),c(hr,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(qt,"class","docstring"),c(Nn,"class","docstring"),c(In,"class","docstring"),c(fr,"class","docstring"),c(ie,"class","docstring"),c(Ln,"id","transformers.T5TokenizerFast"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5TokenizerFast"),c(sn,"class","relative group"),c(ds,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(ds,"rel","nofollow"),c(_r,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(jt,"class","docstring"),c(Dn,"class","docstring"),c(Se,"class","docstring"),c(Sn,"id","transformers.T5Model"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.T5Model"),c(rn,"class","relative group"),c(_s,"href","https://arxiv.org/abs/1910.10683"),c(_s,"rel","nofollow"),c(kr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(vr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Model"),c(We,"class","docstring"),c(Re,"class","docstring"),c(Tt,"class","docstring"),c(J,"class","docstring"),c(Gn,"id","transformers.T5ForConditionalGeneration"),c(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gn,"href","#transformers.T5ForConditionalGeneration"),c(ln,"class","relative group"),c(Fs,"href","https://arxiv.org/abs/1910.10683"),c(Fs,"rel","nofollow"),c(br,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cs,"rel","nofollow"),c(wr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(kt,"class","docstring"),c(X,"class","docstring"),c(Un,"id","transformers.T5EncoderModel"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.T5EncoderModel"),c(pn,"class","relative group"),c(Us,"href","https://arxiv.org/abs/1910.10683"),c(Us,"rel","nofollow"),c(yr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Hs,"rel","nofollow"),c($r,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(vt,"class","docstring"),c(Q,"class","docstring"),c(Rn,"id","transformers.TFT5Model"),c(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rn,"href","#transformers.TFT5Model"),c(un,"class","relative group"),c(na,"href","https://arxiv.org/abs/1910.10683"),c(na,"rel","nofollow"),c(zr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(aa,"rel","nofollow"),c(xr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model"),c(Ze,"class","docstring"),c(de,"class","docstring"),c(Kn,"id","transformers.TFT5ForConditionalGeneration"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.TFT5ForConditionalGeneration"),c(fn,"class","relative group"),c(ha,"href","https://arxiv.org/abs/1910.10683"),c(ha,"rel","nofollow"),c(Er,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fa,"rel","nofollow"),c(qr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Je,"class","docstring"),c(le,"class","docstring"),c(Jn,"id","transformers.TFT5EncoderModel"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.TFT5EncoderModel"),c(gn,"class","relative group"),c(ba,"href","https://arxiv.org/abs/1910.10683"),c(ba,"rel","nofollow"),c(jr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c($a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($a,"rel","nofollow"),c(Fr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(eo,"id","transformers.FlaxT5Model"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxT5Model"),c(kn,"class","relative group"),c(Qe,"class","docstring"),c(Ft,"class","docstring"),c(Mt,"class","docstring"),c(lt,"class","docstring"),c(no,"id","transformers.FlaxT5ForConditionalGeneration"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.FlaxT5ForConditionalGeneration"),c(bn,"class","relative group"),c(et,"class","docstring"),c(Pt,"class","docstring"),c(Ct,"class","docstring"),c(ct,"class","docstring")},m(n,h){e(document.head,u),p(n,x,h),p(n,b,h),e(b,y),e(y,z),g($,z,null),e(b,w),e(b,E),e(E,Ee),p(n,oe,h),p(n,q,h),e(q,ee),e(ee,O),g(se,O,null),e(q,qe),e(q,G),e(G,je),p(n,ke,h),p(n,B,h),e(B,L),e(B,ae),e(ae,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,ve,h),p(n,ue,h),e(ue,U),e(U,Fe),p(n,be,h),p(n,P,h),e(P,Me),p(n,H,h),p(n,V,h),e(V,me),e(me,A),e(A,Pe),e(A,fe),e(fe,D),e(A,Ce),e(A,W),e(W,Ae),e(A,m),e(V,j),e(V,te),e(te,Oe),e(Oe,pt),e(V,S),e(V,Ge),e(Ge,ne),e(ne,ht),e(ne,N),e(N,Y),e(ne,ut),e(ne,Ne),e(Ne,Z),e(ne,mt),e(ne,Ie),e(Ie,Le),e(ne,ft),p(n,Ll,h),p(n,Ha,h),e(Ha,xp),p(n,Dl,h),p(n,Be,h),e(Be,ni),e(ni,oi),e(oi,mo),e(mo,Ep),e(Be,qp),e(Be,si),e(si,ai),e(ai,fo),e(fo,jp),e(Be,Fp),e(Be,ri),e(ri,ii),e(ii,_o),e(_o,Mp),e(Be,Pp),e(Be,di),e(di,li),e(li,go),e(go,Cp),e(Be,Ap),e(Be,ci),e(ci,Va),e(Va,To),e(To,Np),e(Va,Ip),p(n,Sl,h),p(n,Ka,h),e(Ka,Lp),p(n,Ol,h),p(n,zt,h),e(zt,pi),e(pi,yn),e(yn,hi),e(hi,Dp),e(yn,Sp),e(yn,Ya),e(Ya,Op),e(yn,Gp),e(zt,Bp),e(zt,ui),e(ui,$n),e($n,mi),e(mi,Up),e($n,Wp),e($n,Za),e(Za,Rp),e($n,Hp),e(zt,Vp),e(zt,fi),e(fi,zn),e(zn,_i),e(_i,Kp),e(zn,Yp),e(zn,Ja),e(Ja,Zp),e(zn,Jp),p(n,Gl,h),p(n,xn,h),e(xn,Xp),e(xn,ko),e(ko,Qp),e(xn,eh),p(n,Bl,h),p(n,xt,h),e(xt,th),e(xt,vo),e(vo,nh),e(xt,oh),e(xt,bo),e(bo,sh),e(xt,ah),p(n,Ul,h),p(n,Xa,h),p(n,Wl,h),p(n,Yt,h),e(Yt,En),e(En,gi),g(wo,gi,null),e(Yt,rh),e(Yt,Ti),e(Ti,ih),p(n,Rl,h),p(n,_t,h),e(_t,dh),e(_t,ki),e(ki,lh),e(_t,ch),e(_t,vi),e(vi,ph),e(_t,hh),e(_t,bi),e(bi,uh),e(_t,mh),p(n,Hl,h),p(n,qn,h),e(qn,fh),e(qn,Qa),e(Qa,_h),e(qn,gh),p(n,Vl,h),p(n,jn,h),e(jn,dt),e(dt,wi),e(wi,Th),e(dt,kh),e(dt,_e),e(_e,vh),e(_e,yi),e(yi,bh),e(_e,wh),e(_e,$i),e($i,yh),e(_e,$h),e(_e,zi),e(zi,zh),e(_e,xh),e(_e,xi),e(xi,Eh),e(_e,qh),e(_e,Ei),e(Ei,jh),e(_e,Fh),e(_e,er),e(er,Mh),e(_e,Ph),e(dt,Ch),e(dt,qi),e(qi,Ah),e(dt,Nh),g(yo,dt,null),e(dt,Ih),e(dt,$o),e($o,Lh),e($o,zo),e(zo,Dh),e($o,Sh),e(jn,Oh),e(jn,ge),e(ge,ji),e(ji,Gh),e(ge,Bh),e(ge,Fi),e(Fi,Uh),e(ge,Wh),g(xo,ge,null),e(ge,Rh),e(ge,re),e(re,Hh),e(re,Mi),e(Mi,Vh),e(re,Kh),e(re,Pi),e(Pi,Yh),e(re,Zh),e(re,Ci),e(Ci,Jh),e(re,Xh),e(re,Ai),e(Ai,Qh),e(re,eu),e(re,Ni),e(Ni,tu),e(re,nu),e(re,Ii),e(Ii,ou),e(re,su),e(re,Li),e(Li,au),e(re,ru),e(ge,iu),e(ge,Zt),e(Zt,du),e(Zt,Di),e(Di,lu),e(Zt,cu),e(Zt,Si),e(Si,pu),e(Zt,hu),e(ge,uu),e(ge,Te),e(Te,mu),e(Te,Oi),e(Oi,fu),e(Te,_u),e(Te,Gi),e(Gi,gu),e(Te,Tu),e(Te,Bi),e(Bi,ku),e(Te,vu),e(Te,Ui),e(Ui,bu),e(Te,wu),e(Te,Eo),e(Eo,yu),e(Te,$u),e(Te,Wi),e(Wi,zu),e(Te,xu),e(ge,Eu),g(qo,ge,null),p(n,Kl,h),p(n,tr,h),e(tr,qu),p(n,Yl,h),p(n,Et,h),e(Et,Ri),e(Ri,jo),e(jo,ju),e(jo,Hi),e(Hi,Fu),e(jo,Mu),e(Et,Pu),e(Et,Vi),e(Vi,Jt),e(Jt,Cu),e(Jt,Fo),e(Fo,Au),e(Jt,Nu),e(Jt,Mo),e(Mo,Iu),e(Jt,Lu),e(Et,Du),e(Et,Ki),e(Ki,Po),e(Po,Su),e(Po,Yi),e(Yi,Ou),e(Po,Gu),p(n,Zl,h),p(n,nr,h),p(n,Jl,h),p(n,Xt,h),e(Xt,Fn),e(Fn,Zi),g(Co,Zi,null),e(Xt,Bu),e(Xt,Ji),e(Ji,Uu),p(n,Xl,h),p(n,gt,h),e(gt,Wu),e(gt,or),e(or,Ru),e(gt,Hu),e(gt,Ao),e(Ao,Vu),e(gt,Ku),e(gt,No),e(No,Yu),e(gt,Zu),p(n,Ql,h),g(Io,n,h),p(n,ec,h),p(n,Ue,h),e(Ue,Ju),e(Ue,Xi),e(Xi,Xu),e(Ue,Qu),e(Ue,Qi),e(Qi,em),e(Ue,tm),e(Ue,sr),e(sr,nm),e(Ue,om),e(Ue,ed),e(ed,sm),e(Ue,am),p(n,tc,h),p(n,ar,h),e(ar,rm),p(n,nc,h),g(Lo,n,h),p(n,oc,h),p(n,rr,h),p(n,sc,h),p(n,Qt,h),e(Qt,Mn),e(Mn,td),g(Do,td,null),e(Qt,im),e(Qt,nd),e(nd,dm),p(n,ac,h),p(n,ir,h),e(ir,lm),p(n,rc,h),p(n,Pn,h),e(Pn,od),e(od,en),e(en,cm),e(en,So),e(So,pm),e(en,hm),e(en,Oo),e(Oo,um),e(en,mm),e(Pn,fm),e(Pn,sd),e(sd,De),e(De,_m),e(De,Go),e(Go,gm),e(De,Tm),e(De,Bo),e(Bo,km),e(De,vm),e(De,Uo),e(Uo,bm),e(De,wm),e(De,Wo),e(Wo,ym),e(De,$m),e(De,Ro),e(Ro,zm),e(De,xm),p(n,ic,h),p(n,tn,h),e(tn,Cn),e(Cn,ad),g(Ho,ad,null),e(tn,Em),e(tn,rd),e(rd,qm),p(n,dc,h),p(n,wt,h),g(Vo,wt,null),e(wt,jm),e(wt,yt),e(yt,Fm),e(yt,dr),e(dr,Mm),e(yt,Pm),e(yt,lr),e(lr,Cm),e(yt,Am),e(yt,Ko),e(Ko,Nm),e(yt,Im),e(wt,Lm),e(wt,nn),e(nn,Dm),e(nn,cr),e(cr,Sm),e(nn,Om),e(nn,pr),e(pr,Gm),e(nn,Bm),p(n,lc,h),p(n,on,h),e(on,An),e(An,id),g(Yo,id,null),e(on,Um),e(on,dd),e(dd,Wm),p(n,cc,h),p(n,ie,h),g(Zo,ie,null),e(ie,Rm),e(ie,Jo),e(Jo,Hm),e(Jo,Xo),e(Xo,Vm),e(Jo,Km),e(ie,Ym),e(ie,Qo),e(Qo,Zm),e(Qo,hr),e(hr,Jm),e(Qo,Xm),e(ie,Qm),e(ie,qt),g(es,qt,null),e(qt,ef),e(qt,ld),e(ld,tf),e(qt,nf),e(qt,ts),e(ts,ur),e(ur,of),e(ur,cd),e(cd,sf),e(ts,af),e(ts,mr),e(mr,rf),e(mr,pd),e(pd,df),e(ie,lf),e(ie,Nn),g(ns,Nn,null),e(Nn,cf),e(Nn,os),e(os,pf),e(os,hd),e(hd,hf),e(os,uf),e(ie,mf),e(ie,In),g(ss,In,null),e(In,ff),e(In,ud),e(ud,_f),e(ie,gf),e(ie,fr),g(as,fr,null),p(n,pc,h),p(n,sn,h),e(sn,Ln),e(Ln,md),g(rs,md,null),e(sn,Tf),e(sn,fd),e(fd,kf),p(n,hc,h),p(n,Se,h),g(is,Se,null),e(Se,vf),e(Se,an),e(an,bf),e(an,_d),e(_d,wf),e(an,yf),e(an,ds),e(ds,$f),e(an,zf),e(Se,xf),e(Se,ls),e(ls,Ef),e(ls,_r),e(_r,qf),e(ls,jf),e(Se,Ff),e(Se,jt),g(cs,jt,null),e(jt,Mf),e(jt,gd),e(gd,Pf),e(jt,Cf),e(jt,ps),e(ps,gr),e(gr,Af),e(gr,Td),e(Td,Nf),e(ps,If),e(ps,Tr),e(Tr,Lf),e(Tr,kd),e(kd,Df),e(Se,Sf),e(Se,Dn),g(hs,Dn,null),e(Dn,Of),e(Dn,vd),e(vd,Gf),p(n,uc,h),p(n,rn,h),e(rn,Sn),e(Sn,bd),g(us,bd,null),e(rn,Bf),e(rn,wd),e(wd,Uf),p(n,mc,h),p(n,J,h),g(ms,J,null),e(J,Wf),e(J,yd),e(yd,Rf),e(J,Hf),e(J,fs),e(fs,Vf),e(fs,_s),e(_s,Kf),e(fs,Yf),e(J,Zf),e(J,gs),e(gs,Jf),e(gs,kr),e(kr,Xf),e(gs,Qf),e(J,e_),e(J,Ts),e(Ts,t_),e(Ts,ks),e(ks,n_),e(Ts,o_),e(J,s_),e(J,We),g(vs,We,null),e(We,a_),e(We,dn),e(dn,r_),e(dn,vr),e(vr,i_),e(dn,d_),e(dn,$d),e($d,l_),e(dn,c_),e(We,p_),g(On,We,null),e(We,h_),e(We,zd),e(zd,u_),e(We,m_),g(bs,We,null),e(J,f_),e(J,Re),g(ws,Re,null),e(Re,__),e(Re,xd),e(xd,g_),e(Re,T_),e(Re,Ed),e(Ed,k_),e(Re,v_),e(Re,qd),e(qd,b_),e(Re,w_),g(ys,Re,null),e(J,y_),e(J,Tt),g($s,Tt,null),e(Tt,$_),e(Tt,jd),e(jd,z_),e(Tt,x_),e(Tt,Fd),e(Fd,E_),e(Tt,q_),g(zs,Tt,null),p(n,fc,h),p(n,ln,h),e(ln,Gn),e(Gn,Md),g(xs,Md,null),e(ln,j_),e(ln,Pd),e(Pd,F_),p(n,_c,h),p(n,X,h),g(Es,X,null),e(X,M_),e(X,qs),e(qs,P_),e(qs,Cd),e(Cd,C_),e(qs,A_),e(X,N_),e(X,js),e(js,I_),e(js,Fs),e(Fs,L_),e(js,D_),e(X,S_),e(X,Ms),e(Ms,O_),e(Ms,br),e(br,G_),e(Ms,B_),e(X,U_),e(X,Ps),e(Ps,W_),e(Ps,Cs),e(Cs,R_),e(Ps,H_),e(X,V_),e(X,He),g(As,He,null),e(He,K_),e(He,cn),e(cn,Y_),e(cn,wr),e(wr,Z_),e(cn,J_),e(cn,Ad),e(Ad,X_),e(cn,Q_),e(He,eg),g(Bn,He,null),e(He,tg),e(He,Nd),e(Nd,ng),e(He,og),g(Ns,He,null),e(X,sg),e(X,Ve),g(Is,Ve,null),e(Ve,ag),e(Ve,Id),e(Id,rg),e(Ve,ig),e(Ve,Ld),e(Ld,dg),e(Ve,lg),e(Ve,Dd),e(Dd,cg),e(Ve,pg),g(Ls,Ve,null),e(X,hg),e(X,kt),g(Ds,kt,null),e(kt,ug),e(kt,Sd),e(Sd,mg),e(kt,fg),e(kt,Od),e(Od,_g),e(kt,gg),g(Ss,kt,null),p(n,gc,h),p(n,pn,h),e(pn,Un),e(Un,Gd),g(Os,Gd,null),e(pn,Tg),e(pn,Bd),e(Bd,kg),p(n,Tc,h),p(n,Q,h),g(Gs,Q,null),e(Q,vg),e(Q,Ud),e(Ud,bg),e(Q,wg),e(Q,Bs),e(Bs,yg),e(Bs,Us),e(Us,$g),e(Bs,zg),e(Q,xg),e(Q,Ws),e(Ws,Eg),e(Ws,yr),e(yr,qg),e(Ws,jg),e(Q,Fg),e(Q,Rs),e(Rs,Mg),e(Rs,Hs),e(Hs,Pg),e(Rs,Cg),e(Q,Ag),e(Q,Ke),g(Vs,Ke,null),e(Ke,Ng),e(Ke,hn),e(hn,Ig),e(hn,$r),e($r,Lg),e(hn,Dg),e(hn,Wd),e(Wd,Sg),e(hn,Og),e(Ke,Gg),g(Wn,Ke,null),e(Ke,Bg),e(Ke,Rd),e(Rd,Ug),e(Ke,Wg),g(Ks,Ke,null),e(Q,Rg),e(Q,Ye),g(Ys,Ye,null),e(Ye,Hg),e(Ye,Hd),e(Hd,Vg),e(Ye,Kg),e(Ye,Vd),e(Vd,Yg),e(Ye,Zg),e(Ye,Kd),e(Kd,Jg),e(Ye,Xg),g(Zs,Ye,null),e(Q,Qg),e(Q,vt),g(Js,vt,null),e(vt,eT),e(vt,Yd),e(Yd,tT),e(vt,nT),e(vt,Zd),e(Zd,oT),e(vt,sT),g(Xs,vt,null),p(n,kc,h),p(n,un,h),e(un,Rn),e(Rn,Jd),g(Qs,Jd,null),e(un,aT),e(un,Xd),e(Xd,rT),p(n,vc,h),p(n,de,h),g(ea,de,null),e(de,iT),e(de,Qd),e(Qd,dT),e(de,lT),e(de,ta),e(ta,cT),e(ta,na),e(na,pT),e(ta,hT),e(de,uT),e(de,oa),e(oa,mT),e(oa,zr),e(zr,fT),e(oa,_T),e(de,gT),e(de,sa),e(sa,TT),e(sa,aa),e(aa,kT),e(sa,vT),e(de,bT),g(Hn,de,null),e(de,wT),e(de,Ze),g(ra,Ze,null),e(Ze,yT),e(Ze,mn),e(mn,$T),e(mn,xr),e(xr,zT),e(mn,xT),e(mn,el),e(el,ET),e(mn,qT),e(Ze,jT),g(Vn,Ze,null),e(Ze,FT),e(Ze,tl),e(tl,MT),e(Ze,PT),g(ia,Ze,null),p(n,bc,h),p(n,fn,h),e(fn,Kn),e(Kn,nl),g(da,nl,null),e(fn,CT),e(fn,ol),e(ol,AT),p(n,wc,h),p(n,le,h),g(la,le,null),e(le,NT),e(le,ca),e(ca,IT),e(ca,sl),e(sl,LT),e(ca,DT),e(le,ST),e(le,pa),e(pa,OT),e(pa,ha),e(ha,GT),e(pa,BT),e(le,UT),e(le,ua),e(ua,WT),e(ua,Er),e(Er,RT),e(ua,HT),e(le,VT),e(le,ma),e(ma,KT),e(ma,fa),e(fa,YT),e(ma,ZT),e(le,JT),g(Yn,le,null),e(le,XT),e(le,Je),g(_a,Je,null),e(Je,QT),e(Je,_n),e(_n,ek),e(_n,qr),e(qr,tk),e(_n,nk),e(_n,al),e(al,ok),e(_n,sk),e(Je,ak),g(Zn,Je,null),e(Je,rk),e(Je,rl),e(rl,ik),e(Je,dk),g(ga,Je,null),p(n,yc,h),p(n,gn,h),e(gn,Jn),e(Jn,il),g(Ta,il,null),e(gn,lk),e(gn,dl),e(dl,ck),p(n,$c,h),p(n,ce,h),g(ka,ce,null),e(ce,pk),e(ce,ll),e(ll,hk),e(ce,uk),e(ce,va),e(va,mk),e(va,ba),e(ba,fk),e(va,_k),e(ce,gk),e(ce,wa),e(wa,Tk),e(wa,jr),e(jr,kk),e(wa,vk),e(ce,bk),e(ce,ya),e(ya,wk),e(ya,$a),e($a,yk),e(ya,$k),e(ce,zk),g(Xn,ce,null),e(ce,xk),e(ce,Xe),g(za,Xe,null),e(Xe,Ek),e(Xe,Tn),e(Tn,qk),e(Tn,Fr),e(Fr,jk),e(Tn,Fk),e(Tn,cl),e(cl,Mk),e(Tn,Pk),e(Xe,Ck),g(Qn,Xe,null),e(Xe,Ak),e(Xe,pl),e(pl,Nk),e(Xe,Ik),g(xa,Xe,null),p(n,zc,h),p(n,kn,h),e(kn,eo),e(eo,hl),g(Ea,hl,null),e(kn,Lk),e(kn,ul),e(ul,Dk),p(n,xc,h),p(n,lt,h),g(qa,lt,null),e(lt,Sk),e(lt,Qe),g(ja,Qe,null),e(Qe,Ok),e(Qe,vn),e(vn,Gk),e(vn,ml),e(ml,Bk),e(vn,Uk),e(vn,fl),e(fl,Wk),e(vn,Rk),e(Qe,Hk),g(to,Qe,null),e(Qe,Vk),e(Qe,_l),e(_l,Kk),e(Qe,Yk),g(Fa,Qe,null),e(lt,Zk),e(lt,Ft),g(Ma,Ft,null),e(Ft,Jk),e(Ft,gl),e(gl,Xk),e(Ft,Qk),g(Pa,Ft,null),e(lt,ev),e(lt,Mt),g(Ca,Mt,null),e(Mt,tv),e(Mt,Tl),e(Tl,nv),e(Mt,ov),g(Aa,Mt,null),p(n,Ec,h),p(n,bn,h),e(bn,no),e(no,kl),g(Na,kl,null),e(bn,sv),e(bn,vl),e(vl,av),p(n,qc,h),p(n,ct,h),g(Ia,ct,null),e(ct,rv),e(ct,et),g(La,et,null),e(et,iv),e(et,wn),e(wn,dv),e(wn,bl),e(bl,lv),e(wn,cv),e(wn,wl),e(wl,pv),e(wn,hv),e(et,uv),g(oo,et,null),e(et,mv),e(et,yl),e(yl,fv),e(et,_v),g(Da,et,null),e(ct,gv),e(ct,Pt),g(Sa,Pt,null),e(Pt,Tv),e(Pt,$l),e($l,kv),e(Pt,vv),g(Oa,Pt,null),e(ct,bv),e(ct,Ct),g(Ga,Ct,null),e(Ct,wv),e(Ct,zl),e(zl,yv),e(Ct,$v),g(Ba,Ct,null),jc=!0},p(n,[h]){const Ua={};h&2&&(Ua.$$scope={dirty:h,ctx:n}),On.$set(Ua);const xl={};h&2&&(xl.$$scope={dirty:h,ctx:n}),Bn.$set(xl);const El={};h&2&&(El.$$scope={dirty:h,ctx:n}),Wn.$set(El);const ql={};h&2&&(ql.$$scope={dirty:h,ctx:n}),Hn.$set(ql);const Wa={};h&2&&(Wa.$$scope={dirty:h,ctx:n}),Vn.$set(Wa);const jl={};h&2&&(jl.$$scope={dirty:h,ctx:n}),Yn.$set(jl);const Fl={};h&2&&(Fl.$$scope={dirty:h,ctx:n}),Zn.$set(Fl);const Ml={};h&2&&(Ml.$$scope={dirty:h,ctx:n}),Xn.$set(Ml);const Ra={};h&2&&(Ra.$$scope={dirty:h,ctx:n}),Qn.$set(Ra);const Pl={};h&2&&(Pl.$$scope={dirty:h,ctx:n}),to.$set(Pl);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:n}),oo.$set(Cl)},i(n){jc||(T($.$$.fragment,n),T(se.$$.fragment,n),T(wo.$$.fragment,n),T(yo.$$.fragment,n),T(xo.$$.fragment,n),T(qo.$$.fragment,n),T(Co.$$.fragment,n),T(Io.$$.fragment,n),T(Lo.$$.fragment,n),T(Do.$$.fragment,n),T(Ho.$$.fragment,n),T(Vo.$$.fragment,n),T(Yo.$$.fragment,n),T(Zo.$$.fragment,n),T(es.$$.fragment,n),T(ns.$$.fragment,n),T(ss.$$.fragment,n),T(as.$$.fragment,n),T(rs.$$.fragment,n),T(is.$$.fragment,n),T(cs.$$.fragment,n),T(hs.$$.fragment,n),T(us.$$.fragment,n),T(ms.$$.fragment,n),T(vs.$$.fragment,n),T(On.$$.fragment,n),T(bs.$$.fragment,n),T(ws.$$.fragment,n),T(ys.$$.fragment,n),T($s.$$.fragment,n),T(zs.$$.fragment,n),T(xs.$$.fragment,n),T(Es.$$.fragment,n),T(As.$$.fragment,n),T(Bn.$$.fragment,n),T(Ns.$$.fragment,n),T(Is.$$.fragment,n),T(Ls.$$.fragment,n),T(Ds.$$.fragment,n),T(Ss.$$.fragment,n),T(Os.$$.fragment,n),T(Gs.$$.fragment,n),T(Vs.$$.fragment,n),T(Wn.$$.fragment,n),T(Ks.$$.fragment,n),T(Ys.$$.fragment,n),T(Zs.$$.fragment,n),T(Js.$$.fragment,n),T(Xs.$$.fragment,n),T(Qs.$$.fragment,n),T(ea.$$.fragment,n),T(Hn.$$.fragment,n),T(ra.$$.fragment,n),T(Vn.$$.fragment,n),T(ia.$$.fragment,n),T(da.$$.fragment,n),T(la.$$.fragment,n),T(Yn.$$.fragment,n),T(_a.$$.fragment,n),T(Zn.$$.fragment,n),T(ga.$$.fragment,n),T(Ta.$$.fragment,n),T(ka.$$.fragment,n),T(Xn.$$.fragment,n),T(za.$$.fragment,n),T(Qn.$$.fragment,n),T(xa.$$.fragment,n),T(Ea.$$.fragment,n),T(qa.$$.fragment,n),T(ja.$$.fragment,n),T(to.$$.fragment,n),T(Fa.$$.fragment,n),T(Ma.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(Aa.$$.fragment,n),T(Na.$$.fragment,n),T(Ia.$$.fragment,n),T(La.$$.fragment,n),T(oo.$$.fragment,n),T(Da.$$.fragment,n),T(Sa.$$.fragment,n),T(Oa.$$.fragment,n),T(Ga.$$.fragment,n),T(Ba.$$.fragment,n),jc=!0)},o(n){k($.$$.fragment,n),k(se.$$.fragment,n),k(wo.$$.fragment,n),k(yo.$$.fragment,n),k(xo.$$.fragment,n),k(qo.$$.fragment,n),k(Co.$$.fragment,n),k(Io.$$.fragment,n),k(Lo.$$.fragment,n),k(Do.$$.fragment,n),k(Ho.$$.fragment,n),k(Vo.$$.fragment,n),k(Yo.$$.fragment,n),k(Zo.$$.fragment,n),k(es.$$.fragment,n),k(ns.$$.fragment,n),k(ss.$$.fragment,n),k(as.$$.fragment,n),k(rs.$$.fragment,n),k(is.$$.fragment,n),k(cs.$$.fragment,n),k(hs.$$.fragment,n),k(us.$$.fragment,n),k(ms.$$.fragment,n),k(vs.$$.fragment,n),k(On.$$.fragment,n),k(bs.$$.fragment,n),k(ws.$$.fragment,n),k(ys.$$.fragment,n),k($s.$$.fragment,n),k(zs.$$.fragment,n),k(xs.$$.fragment,n),k(Es.$$.fragment,n),k(As.$$.fragment,n),k(Bn.$$.fragment,n),k(Ns.$$.fragment,n),k(Is.$$.fragment,n),k(Ls.$$.fragment,n),k(Ds.$$.fragment,n),k(Ss.$$.fragment,n),k(Os.$$.fragment,n),k(Gs.$$.fragment,n),k(Vs.$$.fragment,n),k(Wn.$$.fragment,n),k(Ks.$$.fragment,n),k(Ys.$$.fragment,n),k(Zs.$$.fragment,n),k(Js.$$.fragment,n),k(Xs.$$.fragment,n),k(Qs.$$.fragment,n),k(ea.$$.fragment,n),k(Hn.$$.fragment,n),k(ra.$$.fragment,n),k(Vn.$$.fragment,n),k(ia.$$.fragment,n),k(da.$$.fragment,n),k(la.$$.fragment,n),k(Yn.$$.fragment,n),k(_a.$$.fragment,n),k(Zn.$$.fragment,n),k(ga.$$.fragment,n),k(Ta.$$.fragment,n),k(ka.$$.fragment,n),k(Xn.$$.fragment,n),k(za.$$.fragment,n),k(Qn.$$.fragment,n),k(xa.$$.fragment,n),k(Ea.$$.fragment,n),k(qa.$$.fragment,n),k(ja.$$.fragment,n),k(to.$$.fragment,n),k(Fa.$$.fragment,n),k(Ma.$$.fragment,n),k(Pa.$$.fragment,n),k(Ca.$$.fragment,n),k(Aa.$$.fragment,n),k(Na.$$.fragment,n),k(Ia.$$.fragment,n),k(La.$$.fragment,n),k(oo.$$.fragment,n),k(Da.$$.fragment,n),k(Sa.$$.fragment,n),k(Oa.$$.fragment,n),k(Ga.$$.fragment,n),k(Ba.$$.fragment,n),jc=!1},d(n){t(u),n&&t(x),n&&t(b),v($),n&&t(oe),n&&t(q),v(se),n&&t(ke),n&&t(B),n&&t(C),n&&t(he),n&&t(ve),n&&t(ue),n&&t(be),n&&t(P),n&&t(H),n&&t(V),n&&t(Ll),n&&t(Ha),n&&t(Dl),n&&t(Be),n&&t(Sl),n&&t(Ka),n&&t(Ol),n&&t(zt),n&&t(Gl),n&&t(xn),n&&t(Bl),n&&t(xt),n&&t(Ul),n&&t(Xa),n&&t(Wl),n&&t(Yt),v(wo),n&&t(Rl),n&&t(_t),n&&t(Hl),n&&t(qn),n&&t(Vl),n&&t(jn),v(yo),v(xo),v(qo),n&&t(Kl),n&&t(tr),n&&t(Yl),n&&t(Et),n&&t(Zl),n&&t(nr),n&&t(Jl),n&&t(Xt),v(Co),n&&t(Xl),n&&t(gt),n&&t(Ql),v(Io,n),n&&t(ec),n&&t(Ue),n&&t(tc),n&&t(ar),n&&t(nc),v(Lo,n),n&&t(oc),n&&t(rr),n&&t(sc),n&&t(Qt),v(Do),n&&t(ac),n&&t(ir),n&&t(rc),n&&t(Pn),n&&t(ic),n&&t(tn),v(Ho),n&&t(dc),n&&t(wt),v(Vo),n&&t(lc),n&&t(on),v(Yo),n&&t(cc),n&&t(ie),v(Zo),v(es),v(ns),v(ss),v(as),n&&t(pc),n&&t(sn),v(rs),n&&t(hc),n&&t(Se),v(is),v(cs),v(hs),n&&t(uc),n&&t(rn),v(us),n&&t(mc),n&&t(J),v(ms),v(vs),v(On),v(bs),v(ws),v(ys),v($s),v(zs),n&&t(fc),n&&t(ln),v(xs),n&&t(_c),n&&t(X),v(Es),v(As),v(Bn),v(Ns),v(Is),v(Ls),v(Ds),v(Ss),n&&t(gc),n&&t(pn),v(Os),n&&t(Tc),n&&t(Q),v(Gs),v(Vs),v(Wn),v(Ks),v(Ys),v(Zs),v(Js),v(Xs),n&&t(kc),n&&t(un),v(Qs),n&&t(vc),n&&t(de),v(ea),v(Hn),v(ra),v(Vn),v(ia),n&&t(bc),n&&t(fn),v(da),n&&t(wc),n&&t(le),v(la),v(Yn),v(_a),v(Zn),v(ga),n&&t(yc),n&&t(gn),v(Ta),n&&t($c),n&&t(ce),v(ka),v(Xn),v(za),v(Qn),v(xa),n&&t(zc),n&&t(kn),v(Ea),n&&t(xc),n&&t(lt),v(qa),v(ja),v(to),v(Fa),v(Ma),v(Pa),v(Ca),v(Aa),n&&t(Ec),n&&t(bn),v(Na),n&&t(qc),n&&t(ct),v(Ia),v(La),v(oo),v(Da),v(Sa),v(Oa),v(Ga),v(Ba)}}}const ty={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function ny(I,u,x){let{fw:b}=u;return I.$$set=y=>{"fw"in y&&x(0,b=y.fw)},[b]}class ly extends Sw{constructor(u){super();Ow(this,u,ny,ey,Gw,{fw:0})}}export{ly as default,ty as metadata};
