import{S as iy,i as dy,s as ly,e as o,k as d,w as f,t as r,L as cy,c as s,d as t,m as l,a,x as _,h as i,b as c,J as e,g as p,y as g,q as T,o as k,B as v}from"../../chunks/vendor-9e2b328e.js";import{T as $t}from"../../chunks/Tip-76f97a76.js";import{D as P}from"../../chunks/Docstring-50fd6873.js";import{C as R}from"../../chunks/CodeBlock-88e23343.js";import{I as ke}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function py(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function hy(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function uy(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function my(L){let u,x,b,y,$,z,w,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,we,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),$=o("li"),z=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),we=d(),M=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);$=s(te,"LI",{});var Oe=a($);z=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),E=s(te,"LI",{});var lt=a(E);Ee=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ve=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ae=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var pt=a(K);be=i(pt,"input_ids"),pt.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),we=l(N),M=s(N,"LI",{});var J=a(M);Me=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(J,"CODE",{});var ht=a(H);V=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=i(J," or "),A=s(J,"CODE",{});var Le=a(A);Pe=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),J.forEach(t),fe=l(N),D=s(N,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ut=a(W);Ae=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Ie.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,y,j),e(y,$),e($,z),e(y,w),e(y,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ve),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,U),e(U,Fe),e(F,we),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(q),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function fy(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function _y(L){let u,x,b,y,$,z,w,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,we,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),$=o("li"),z=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),we=d(),M=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);$=s(te,"LI",{});var Oe=a($);z=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),E=s(te,"LI",{});var lt=a(E);Ee=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ve=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ae=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var pt=a(K);be=i(pt,"input_ids"),pt.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),we=l(N),M=s(N,"LI",{});var J=a(M);Me=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(J,"CODE",{});var ht=a(H);V=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=i(J," or "),A=s(J,"CODE",{});var Le=a(A);Pe=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),J.forEach(t),fe=l(N),D=s(N,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ut=a(W);Ae=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Ie.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,y,j),e(y,$),e($,z),e(y,w),e(y,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ve),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,U),e(U,Fe),e(F,we),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(q),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function gy(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function Ty(L){let u,x,b,y,$,z,w,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,we,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),$=o("li"),z=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),we=d(),M=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);$=s(te,"LI",{});var Oe=a($);z=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),E=s(te,"LI",{});var lt=a(E);Ee=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ve=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ae=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var pt=a(K);be=i(pt,"input_ids"),pt.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),we=l(N),M=s(N,"LI",{});var J=a(M);Me=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(J,"CODE",{});var ht=a(H);V=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=i(J," or "),A=s(J,"CODE",{});var Le=a(A);Pe=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),J.forEach(t),fe=l(N),D=s(N,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ut=a(W);Ae=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Ie.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,y,j),e(y,$),e($,z),e(y,w),e(y,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ve),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,U),e(U,Fe),e(F,we),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(q),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function ky(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function vy(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function by(L){let u,x,b,y,$;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);x=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var E=a(b);y=i(E,"Module"),E.forEach(t),$=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,x),e(u,b),e(b,y),e(u,$)},d(z){z&&t(u)}}}function wy(L){let u,x,b,y,$,z,w,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,we,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae,m,j,te,Oe,lt,S,Ge,ne,ct,N,Y,pt,Ne,J,ht,Le,Ie,ut,Wl,Va,Lp,Rl,Be,si,ai,_o,Ip,Dp,ri,ii,go,Sp,Op,di,li,To,Gp,Bp,ci,pi,ko,Up,Wp,hi,Ka,vo,Rp,Hp,Hl,Ya,Vp,Vl,xt,ui,$n,mi,Kp,Yp,Ja,Jp,Zp,Xp,fi,xn,_i,Qp,eh,Za,th,nh,oh,gi,En,Ti,sh,ah,Xa,rh,ih,Kl,qn,dh,bo,lh,ch,Yl,Et,ph,wo,hh,uh,yo,mh,fh,Jl,Qa,Zl,Jt,jn,ki,zo,_h,vi,gh,Xl,mt,Th,bi,kh,vh,wi,bh,wh,yi,yh,zh,Ql,Fn,$h,er,xh,Eh,ec,Mn,dt,zi,qh,jh,_e,Fh,$i,Mh,Ph,xi,Ch,Ah,Ei,Nh,Lh,qi,Ih,Dh,ji,Sh,Oh,tr,Gh,Bh,Uh,Fi,Wh,Rh,$o,Hh,xo,Vh,Eo,Kh,Yh,Jh,ge,Mi,Zh,Xh,Pi,Qh,eu,qo,tu,re,nu,Ci,ou,su,Ai,au,ru,Ni,iu,du,Li,lu,cu,Ii,pu,hu,Di,uu,mu,Si,fu,_u,gu,Zt,Tu,Oi,ku,vu,Gi,bu,wu,yu,Te,zu,Bi,$u,xu,Ui,Eu,qu,Wi,ju,Fu,Ri,Mu,Pu,jo,Cu,Au,Hi,Nu,Lu,Iu,Fo,tc,nr,Du,nc,qt,Vi,Mo,Su,Ki,Ou,Gu,Bu,Yi,Xt,Uu,Po,Wu,Ru,Co,Hu,Vu,Ku,Ji,Ao,Yu,Zi,Ju,Zu,oc,or,sc,Qt,Pn,Xi,No,Xu,Qi,Qu,ac,ft,em,sr,tm,nm,Lo,om,sm,Io,am,rm,rc,Do,ic,Ue,im,ed,dm,lm,td,cm,pm,ar,hm,um,nd,mm,fm,dc,rr,_m,lc,So,cc,ir,pc,en,Cn,od,Oo,gm,sd,Tm,hc,_t,km,Go,vm,bm,ad,wm,ym,rd,zm,$m,uc,tn,An,id,Bo,xm,dd,Em,mc,dr,qm,fc,Nn,ld,nn,jm,Uo,Fm,Mm,Wo,Pm,Cm,Am,cd,De,Nm,Ro,Lm,Im,Ho,Dm,Sm,Vo,Om,Gm,Ko,Bm,Um,Yo,Wm,Rm,_c,on,Ln,pd,Jo,Hm,hd,Vm,gc,bt,Zo,Km,wt,Ym,lr,Jm,Zm,cr,Xm,Qm,Xo,ef,tf,nf,sn,of,pr,sf,af,hr,rf,df,Tc,an,In,ud,Qo,lf,md,cf,kc,ie,es,pf,ts,hf,ns,uf,mf,ff,os,_f,ur,gf,Tf,kf,jt,ss,vf,fd,bf,wf,as,mr,yf,_d,zf,$f,fr,xf,gd,Ef,qf,Dn,rs,jf,is,Ff,Td,Mf,Pf,Cf,Sn,ds,Af,kd,Nf,Lf,vd,vc,rn,On,bd,ls,If,wd,Df,bc,Se,cs,Sf,dn,Of,yd,Gf,Bf,ps,Uf,Wf,Rf,hs,Hf,_r,Vf,Kf,Yf,Ft,us,Jf,zd,Zf,Xf,ms,gr,Qf,$d,e_,t_,Tr,n_,xd,o_,s_,Gn,fs,a_,Ed,r_,wc,ln,Bn,qd,_s,i_,jd,d_,yc,Z,gs,l_,Fd,c_,p_,Ts,h_,ks,u_,m_,f_,vs,__,kr,g_,T_,k_,bs,v_,ws,b_,w_,y_,We,ys,z_,cn,$_,vr,x_,E_,Md,q_,j_,F_,Un,M_,Pd,P_,C_,zs,A_,Re,$s,N_,Cd,L_,I_,Ad,D_,S_,Nd,O_,G_,xs,B_,gt,Es,U_,Ld,W_,R_,Id,H_,V_,qs,zc,pn,Wn,Dd,js,K_,Sd,Y_,$c,X,Fs,J_,Ms,Z_,Od,X_,Q_,eg,Ps,tg,Cs,ng,og,sg,As,ag,br,rg,ig,dg,Ns,lg,Ls,cg,pg,hg,He,Is,ug,hn,mg,wr,fg,_g,Gd,gg,Tg,kg,Rn,vg,Bd,bg,wg,Ds,yg,Ve,Ss,zg,Ud,$g,xg,Wd,Eg,qg,Rd,jg,Fg,Os,Mg,Tt,Gs,Pg,Hd,Cg,Ag,Vd,Ng,Lg,Bs,xc,un,Hn,Kd,Us,Ig,Yd,Dg,Ec,Q,Ws,Sg,Jd,Og,Gg,Rs,Bg,Hs,Ug,Wg,Rg,Vs,Hg,yr,Vg,Kg,Yg,Ks,Jg,Ys,Zg,Xg,Qg,Ke,Js,eT,mn,tT,zr,nT,oT,Zd,sT,aT,rT,Vn,iT,Xd,dT,lT,Zs,cT,Ye,Xs,pT,Qd,hT,uT,el,mT,fT,tl,_T,gT,Qs,TT,kt,ea,kT,nl,vT,bT,ol,wT,yT,ta,qc,fn,Kn,sl,na,zT,al,$T,jc,de,oa,xT,rl,ET,qT,sa,jT,aa,FT,MT,PT,ra,CT,$r,AT,NT,LT,ia,IT,da,DT,ST,OT,Yn,GT,Je,la,BT,_n,UT,xr,WT,RT,il,HT,VT,KT,Jn,YT,dl,JT,ZT,ca,Fc,gn,Zn,ll,pa,XT,cl,QT,Mc,le,ha,ek,ua,tk,pl,nk,ok,sk,ma,ak,fa,rk,ik,dk,_a,lk,Er,ck,pk,hk,ga,uk,Ta,mk,fk,_k,Xn,gk,Ze,ka,Tk,Tn,kk,qr,vk,bk,hl,wk,yk,zk,Qn,$k,ul,xk,Ek,va,Pc,kn,eo,ml,ba,qk,fl,jk,Cc,ce,wa,Fk,_l,Mk,Pk,ya,Ck,za,Ak,Nk,Lk,$a,Ik,jr,Dk,Sk,Ok,xa,Gk,Ea,Bk,Uk,Wk,to,Rk,Xe,qa,Hk,vn,Vk,Fr,Kk,Yk,gl,Jk,Zk,Xk,no,Qk,Tl,ev,tv,ja,Ac,bn,oo,kl,Fa,nv,vl,ov,Nc,yt,Qe,Ma,sv,wn,av,bl,rv,iv,wl,dv,lv,cv,so,pv,yl,hv,uv,Pa,mv,Mt,Ca,fv,zl,_v,gv,Aa,Tv,Pt,Na,kv,$l,vv,bv,La,Lc,yn,ao,xl,Ia,wv,El,yv,Ic,zt,et,Da,zv,zn,$v,ql,xv,Ev,jl,qv,jv,Fv,ro,Mv,Fl,Pv,Cv,Sa,Av,Ct,Oa,Nv,Ml,Lv,Iv,Ga,Dv,At,Ba,Sv,Pl,Ov,Gv,Ua,Dc;return z=new ke({}),se=new ke({}),zo=new ke({}),$o=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(input_ids=input_ids, labels=labels).loss`}}),qo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(input_ids=input_ids, labels=labels).loss`}}),Fo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),No=new ke({}),Do=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),So=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Oo=new ke({}),Bo=new ke({}),Jo=new ke({}),Zo=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Qo=new ke({}),es=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),ss=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rs=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new ke({}),cs=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),us=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L166",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/tokenization_t5_fast.py#L192",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_s=new ke({}),gs=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1264",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1340",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new $t({props:{$$slots:{default:[py]},$$scope:{ctx:L}}}),zs=new R({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),$s=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1296",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),xs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Es=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1308"}}),qs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),js=new ke({}),Fs=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1453",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Is=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1534",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new $t({props:{$$slots:{default:[hy]},$$scope:{ctx:L}}}),Ds=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Ss=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1490",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Os=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Gs=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1503"}}),Bs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Us=new ke({}),Ws=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1747",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Js=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1805",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new $t({props:{$$slots:{default:[uy]},$$scope:{ctx:L}}}),Zs=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Xs=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1768",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Qs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),ea=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_t5.py#L1779"}}),ta=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),na=new ke({}),oa=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1131",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new $t({props:{$$slots:{default:[my]},$$scope:{ctx:L}}}),la=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1157",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jn=new $t({props:{$$slots:{default:[fy]},$$scope:{ctx:L}}}),ca=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),pa=new ke({}),ha=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1300",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new $t({props:{$$slots:{default:[_y]},$$scope:{ctx:L}}}),ka=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1355",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new $t({props:{$$slots:{default:[gy]},$$scope:{ctx:L}}}),va=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),ba=new ke({}),wa=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1612",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),to=new $t({props:{$$slots:{default:[Ty]},$$scope:{ctx:L}}}),qa=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_tf_t5.py#L1630",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),no=new $t({props:{$$slots:{default:[ky]},$$scope:{ctx:L}}}),ja=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),Fa=new ke({}),Ma=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new $t({props:{$$slots:{default:[vy]},$$scope:{ctx:L}}}),Pa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ca=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Aa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Na=new P({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1095",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),La=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ia=new ke({}),Da=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new $t({props:{$$slots:{default:[by]},$$scope:{ctx:L}}}),Sa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Oa=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ga=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ba=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/t5/modeling_flax_t5.py#L1463",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ua=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),x=d(),b=o("h1"),y=o("a"),$=o("span"),f(z.$$.fragment),w=d(),E=o("span"),Ee=r("T5"),oe=d(),q=o("h2"),ee=o("a"),O=o("span"),f(se.$$.fragment),qe=d(),G=o("span"),je=r("Overview"),ve=d(),B=o("p"),I=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=o("p"),K=r("The abstract from the paper is the following:"),be=d(),ue=o("p"),U=o("em"),Fe=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),we=d(),M=o("p"),Me=r("Tips:"),H=d(),V=o("ul"),me=o("li"),A=o("p"),Pe=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=o("em"),D=r("translate English to German: \u2026"),Ce=r(`,
for summarization: `),W=o("em"),Ae=r("summarize: \u2026"),m=r("."),j=d(),te=o("li"),Oe=o("p"),lt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),S=d(),Ge=o("li"),ne=o("p"),ct=r("See the "),N=o("a"),Y=r("training"),pt=r(", "),Ne=o("a"),J=r("inference"),ht=r(" and "),Le=o("a"),Ie=r("scripts"),ut=r(" sections below for all details regarding usage."),Wl=d(),Va=o("p"),Lp=r("T5 comes in different sizes:"),Rl=d(),Be=o("ul"),si=o("li"),ai=o("p"),_o=o("a"),Ip=r("t5-small"),Dp=d(),ri=o("li"),ii=o("p"),go=o("a"),Sp=r("t5-base"),Op=d(),di=o("li"),li=o("p"),To=o("a"),Gp=r("t5-large"),Bp=d(),ci=o("li"),pi=o("p"),ko=o("a"),Up=r("t5-3b"),Wp=d(),hi=o("li"),Ka=o("p"),vo=o("a"),Rp=r("t5-11b"),Hp=r("."),Hl=d(),Ya=o("p"),Vp=r("Based on the original T5 model, Google has released some follow-up works:"),Vl=d(),xt=o("ul"),ui=o("li"),$n=o("p"),mi=o("strong"),Kp=r("T5v1.1"),Yp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ja=o("a"),Jp=r("here"),Zp=r("."),Xp=d(),fi=o("li"),xn=o("p"),_i=o("strong"),Qp=r("mT5"),eh=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Za=o("a"),th=r("here"),nh=r("."),oh=d(),gi=o("li"),En=o("p"),Ti=o("strong"),sh=r("byT5"),ah=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Xa=o("a"),rh=r("here"),ih=r("."),Kl=d(),qn=o("p"),dh=r("All checkpoints can be found on the "),bo=o("a"),lh=r("hub"),ch=r("."),Yl=d(),Et=o("p"),ph=r("This model was contributed by "),wo=o("a"),hh=r("thomwolf"),uh=r(". The original code can be found "),yo=o("a"),mh=r("here"),fh=r("."),Jl=d(),Qa=o("a"),Zl=d(),Jt=o("h2"),jn=o("a"),ki=o("span"),f(zo.$$.fragment),_h=d(),vi=o("span"),gh=r("Training"),Xl=d(),mt=o("p"),Th=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),bi=o("code"),kh=r("input_ids"),vh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),wi=o("code"),bh=r("decoder_input_ids"),wh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),yi=o("code"),yh=r("labels"),zh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Ql=d(),Fn=o("p"),$h=r("One can use "),er=o("a"),xh=r("T5ForConditionalGeneration"),Eh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),ec=d(),Mn=o("ul"),dt=o("li"),zi=o("p"),qh=r("Unsupervised denoising training"),jh=d(),_e=o("p"),Fh=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),$i=o("em"),Mh=r("a.k.a"),Ph=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),xi=o("em"),Ch=r("real"),Ah=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Ei=o("code"),Nh=r("<extra_id_0>"),Lh=r(`,
`),qi=o("code"),Ih=r("<extra_id_1>"),Dh=r(", \u2026 up to "),ji=o("code"),Sh=r("<extra_id_99>"),Oh=r(`. As a default, 100 sentinel tokens are available in
`),tr=o("a"),Gh=r("T5Tokenizer"),Bh=r("."),Uh=d(),Fi=o("p"),Wh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Rh=d(),f($o.$$.fragment),Hh=d(),xo=o("p"),Vh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Eo=o("a"),Kh=r("run_t5_mlm_flax.py"),Yh=r(` script in the Examples
directory.`),Jh=d(),ge=o("li"),Mi=o("p"),Zh=r("Supervised training"),Xh=d(),Pi=o("p"),Qh=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),eu=d(),f(qo.$$.fragment),tu=d(),re=o("p"),nu=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ci=o("code"),ou=r("input_ids"),su=r(` (which are the
`),Ai=o("code"),au=r("input_ids"),ru=r(" of the encoded input sequence) and "),Ni=o("code"),iu=r("labels"),du=r(" (which are the "),Li=o("code"),lu=r("input_ids"),cu=r(` of the encoded
target sequence). The model will automatically create the `),Ii=o("code"),pu=r("decoder_input_ids"),hu=r(" based on the "),Di=o("code"),uu=r("labels"),mu=r(`, by
shifting them one position to the right and prepending the `),Si=o("code"),fu=r("config.decoder_start_token_id"),_u=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),gu=d(),Zt=o("p"),Tu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Oi=o("code"),ku=r("max_source_length"),vu=r(" and "),Gi=o("code"),bu=r("max_target_length"),wu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),yu=d(),Te=o("p"),zu=r("In addition, we must make sure that padding token id\u2019s of the "),Bi=o("code"),$u=r("labels"),xu=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Ui=o("code"),Eu=r("ignore_index"),qu=r(`
of the `),Wi=o("code"),ju=r("CrossEntropyLoss"),Fu=r(". In Flax, one can use the "),Ri=o("code"),Mu=r("decoder_attention_mask"),Pu=r(` to ignore padded tokens from
the loss (see the `),jo=o("a"),Cu=r("Flax summarization script"),Au=r(` for details). We also pass
`),Hi=o("code"),Nu=r("attention_mask"),Lu=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Iu=d(),f(Fo.$$.fragment),tc=d(),nr=o("p"),Du=r("Additional training tips:"),nc=d(),qt=o("ul"),Vi=o("li"),Mo=o("p"),Su=r("T5 models need a slightly higher learning rate than the default one set in the "),Ki=o("code"),Ou=r("Trainer"),Gu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Bu=d(),Yi=o("li"),Xt=o("p"),Uu=r("According to "),Po=o("a"),Wu=r("this forum post"),Ru=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Co=o("a"),Hu=r("paper"),Vu=r(` for the task prefixes
used).`),Ku=d(),Ji=o("li"),Ao=o("p"),Yu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Zi=o("em"),Ju=r("pad_to_multiple_of"),Zu=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),oc=d(),or=o("a"),sc=d(),Qt=o("h2"),Pn=o("a"),Xi=o("span"),f(No.$$.fragment),Xu=d(),Qi=o("span"),Qu=r("Inference"),ac=d(),ft=o("p"),em=r("At inference time, it is recommended to use "),sr=o("a"),tm=r("generate()"),nm=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Lo=o("a"),om=r("this blog post"),sm=r(` to know all the details about generating text with Transformers.
There\u2019s also `),Io=o("a"),am=r("this blog post"),rm=r(` which explains how
generation works in general in encoder-decoder models.`),rc=d(),f(Do.$$.fragment),ic=d(),Ue=o("p"),im=r("Note that T5 uses the "),ed=o("code"),dm=r("pad_token_id"),lm=r(" as the "),td=o("code"),cm=r("decoder_start_token_id"),pm=r(`, so when doing generation without using
`),ar=o("a"),hm=r("generate()"),um=r(", make sure you start it with the "),nd=o("code"),mm=r("pad_token_id"),fm=r("."),dc=d(),rr=o("p"),_m=r("The example above only shows a single example. You can also do batched inference, like so:"),lc=d(),f(So.$$.fragment),cc=d(),ir=o("a"),pc=d(),en=o("h2"),Cn=o("a"),od=o("span"),f(Oo.$$.fragment),gm=d(),sd=o("span"),Tm=r("Performance"),hc=d(),_t=o("p"),km=r("If you\u2019d like a faster training and inference performance, install "),Go=o("a"),vm=r("apex"),bm=r(" and then the model will automatically use "),ad=o("code"),wm=r("apex.normalization.FusedRMSNorm"),ym=r(" instead of "),rd=o("code"),zm=r("T5LayerNorm"),$m=r(". The former uses an optimized fused kernel which is several times faster than the latter."),uc=d(),tn=o("h2"),An=o("a"),id=o("span"),f(Bo.$$.fragment),xm=d(),dd=o("span"),Em=r("Example scripts"),mc=d(),dr=o("p"),qm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),fc=d(),Nn=o("ul"),ld=o("li"),nn=o("p"),jm=r("pre-training: the "),Uo=o("a"),Fm=r("run_t5_mlm_flax.py"),Mm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Wo=o("a"),Pm=r("t5_tokenizer_model.py"),Cm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Am=d(),cd=o("li"),De=o("p"),Nm=r("fine-tuning: T5 is supported by the official summarization scripts ("),Ro=o("a"),Lm=r("PyTorch"),Im=r(", "),Ho=o("a"),Dm=r("Tensorflow"),Sm=r(", and "),Vo=o("a"),Om=r("Flax"),Gm=r(`) and translation scripts
(`),Ko=o("a"),Bm=r("PyTorch"),Um=r(" and "),Yo=o("a"),Wm=r("Tensorflow"),Rm=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),_c=d(),on=o("h2"),Ln=o("a"),pd=o("span"),f(Jo.$$.fragment),Hm=d(),hd=o("span"),Vm=r("T5Config"),gc=d(),bt=o("div"),f(Zo.$$.fragment),Km=d(),wt=o("p"),Ym=r("This is the configuration class to store the configuration of a "),lr=o("a"),Jm=r("T5Model"),Zm=r(" or a "),cr=o("a"),Xm=r("TFT5Model"),Qm=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Xo=o("a"),ef=r("t5-small"),tf=r(" architecture."),nf=d(),sn=o("p"),of=r("Configuration objects inherit from "),pr=o("a"),sf=r("PretrainedConfig"),af=r(` and can be used to control the model outputs. Read the
documentation from `),hr=o("a"),rf=r("PretrainedConfig"),df=r(" for more information."),Tc=d(),an=o("h2"),In=o("a"),ud=o("span"),f(Qo.$$.fragment),lf=d(),md=o("span"),cf=r("T5Tokenizer"),kc=d(),ie=o("div"),f(es.$$.fragment),pf=d(),ts=o("p"),hf=r("Construct a T5 tokenizer. Based on "),ns=o("a"),uf=r("SentencePiece"),mf=r("."),ff=d(),os=o("p"),_f=r("This tokenizer inherits from "),ur=o("a"),gf=r("PreTrainedTokenizer"),Tf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kf=d(),jt=o("div"),f(ss.$$.fragment),vf=d(),fd=o("p"),bf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),wf=d(),as=o("ul"),mr=o("li"),yf=r("single sequence: "),_d=o("code"),zf=r("X </s>"),$f=d(),fr=o("li"),xf=r("pair of sequences: "),gd=o("code"),Ef=r("A </s> B </s>"),qf=d(),Dn=o("div"),f(rs.$$.fragment),jf=d(),is=o("p"),Ff=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Td=o("code"),Mf=r("prepare_for_model"),Pf=r(" method."),Cf=d(),Sn=o("div"),f(ds.$$.fragment),Af=d(),kd=o("p"),Nf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Lf=d(),vd=o("div"),vc=d(),rn=o("h2"),On=o("a"),bd=o("span"),f(ls.$$.fragment),If=d(),wd=o("span"),Df=r("T5TokenizerFast"),bc=d(),Se=o("div"),f(cs.$$.fragment),Sf=d(),dn=o("p"),Of=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),yd=o("em"),Gf=r("tokenizers"),Bf=r(` library). Based on
`),ps=o("a"),Uf=r("Unigram"),Wf=r("."),Rf=d(),hs=o("p"),Hf=r("This tokenizer inherits from "),_r=o("a"),Vf=r("PreTrainedTokenizerFast"),Kf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yf=d(),Ft=o("div"),f(us.$$.fragment),Jf=d(),zd=o("p"),Zf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Xf=d(),ms=o("ul"),gr=o("li"),Qf=r("single sequence: "),$d=o("code"),e_=r("X </s>"),t_=d(),Tr=o("li"),n_=r("pair of sequences: "),xd=o("code"),o_=r("A </s> B </s>"),s_=d(),Gn=o("div"),f(fs.$$.fragment),a_=d(),Ed=o("p"),r_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),wc=d(),ln=o("h2"),Bn=o("a"),qd=o("span"),f(_s.$$.fragment),i_=d(),jd=o("span"),d_=r("T5Model"),yc=d(),Z=o("div"),f(gs.$$.fragment),l_=d(),Fd=o("p"),c_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),p_=d(),Ts=o("p"),h_=r("The T5 model was proposed in "),ks=o("a"),u_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),m_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),f_=d(),vs=o("p"),__=r("This model inherits from "),kr=o("a"),g_=r("PreTrainedModel"),T_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k_=d(),bs=o("p"),v_=r("This model is also a PyTorch "),ws=o("a"),b_=r("torch.nn.Module"),w_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y_=d(),We=o("div"),f(ys.$$.fragment),z_=d(),cn=o("p"),$_=r("The "),vr=o("a"),x_=r("T5Model"),E_=r(" forward method, overrides the "),Md=o("code"),q_=r("__call__"),j_=r(" special method."),F_=d(),f(Un.$$.fragment),M_=d(),Pd=o("p"),P_=r("Example:"),C_=d(),f(zs.$$.fragment),A_=d(),Re=o("div"),f($s.$$.fragment),N_=d(),Cd=o("p"),L_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),I_=d(),Ad=o("p"),D_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),S_=d(),Nd=o("p"),O_=r("Example:"),G_=d(),f(xs.$$.fragment),B_=d(),gt=o("div"),f(Es.$$.fragment),U_=d(),Ld=o("p"),W_=r("Moves the model to cpu from a model parallel state."),R_=d(),Id=o("p"),H_=r("Example:"),V_=d(),f(qs.$$.fragment),zc=d(),pn=o("h2"),Wn=o("a"),Dd=o("span"),f(js.$$.fragment),K_=d(),Sd=o("span"),Y_=r("T5ForConditionalGeneration"),$c=d(),X=o("div"),f(Fs.$$.fragment),J_=d(),Ms=o("p"),Z_=r("T5 Model with a "),Od=o("code"),X_=r("language modeling"),Q_=r(" head on top."),eg=d(),Ps=o("p"),tg=r("The T5 model was proposed in "),Cs=o("a"),ng=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),og=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),sg=d(),As=o("p"),ag=r("This model inherits from "),br=o("a"),rg=r("PreTrainedModel"),ig=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=d(),Ns=o("p"),lg=r("This model is also a PyTorch "),Ls=o("a"),cg=r("torch.nn.Module"),pg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hg=d(),He=o("div"),f(Is.$$.fragment),ug=d(),hn=o("p"),mg=r("The "),wr=o("a"),fg=r("T5ForConditionalGeneration"),_g=r(" forward method, overrides the "),Gd=o("code"),gg=r("__call__"),Tg=r(" special method."),kg=d(),f(Rn.$$.fragment),vg=d(),Bd=o("p"),bg=r("Examples:"),wg=d(),f(Ds.$$.fragment),yg=d(),Ve=o("div"),f(Ss.$$.fragment),zg=d(),Ud=o("p"),$g=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),xg=d(),Wd=o("p"),Eg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),qg=d(),Rd=o("p"),jg=r("Example:"),Fg=d(),f(Os.$$.fragment),Mg=d(),Tt=o("div"),f(Gs.$$.fragment),Pg=d(),Hd=o("p"),Cg=r("Moves the model to cpu from a model parallel state."),Ag=d(),Vd=o("p"),Ng=r("Example:"),Lg=d(),f(Bs.$$.fragment),xc=d(),un=o("h2"),Hn=o("a"),Kd=o("span"),f(Us.$$.fragment),Ig=d(),Yd=o("span"),Dg=r("T5EncoderModel"),Ec=d(),Q=o("div"),f(Ws.$$.fragment),Sg=d(),Jd=o("p"),Og=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Gg=d(),Rs=o("p"),Bg=r("The T5 model was proposed in "),Hs=o("a"),Ug=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Wg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Rg=d(),Vs=o("p"),Hg=r("This model inherits from "),yr=o("a"),Vg=r("PreTrainedModel"),Kg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yg=d(),Ks=o("p"),Jg=r("This model is also a PyTorch "),Ys=o("a"),Zg=r("torch.nn.Module"),Xg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=d(),Ke=o("div"),f(Js.$$.fragment),eT=d(),mn=o("p"),tT=r("The "),zr=o("a"),nT=r("T5EncoderModel"),oT=r(" forward method, overrides the "),Zd=o("code"),sT=r("__call__"),aT=r(" special method."),rT=d(),f(Vn.$$.fragment),iT=d(),Xd=o("p"),dT=r("Example:"),lT=d(),f(Zs.$$.fragment),cT=d(),Ye=o("div"),f(Xs.$$.fragment),pT=d(),Qd=o("p"),hT=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),uT=d(),el=o("p"),mT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),fT=d(),tl=o("p"),_T=r("Example:"),gT=d(),f(Qs.$$.fragment),TT=d(),kt=o("div"),f(ea.$$.fragment),kT=d(),nl=o("p"),vT=r("Moves the model to cpu from a model parallel state."),bT=d(),ol=o("p"),wT=r("Example:"),yT=d(),f(ta.$$.fragment),qc=d(),fn=o("h2"),Kn=o("a"),sl=o("span"),f(na.$$.fragment),zT=d(),al=o("span"),$T=r("TFT5Model"),jc=d(),de=o("div"),f(oa.$$.fragment),xT=d(),rl=o("p"),ET=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),qT=d(),sa=o("p"),jT=r("The T5 model was proposed in "),aa=o("a"),FT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),MT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),PT=d(),ra=o("p"),CT=r("This model inherits from "),$r=o("a"),AT=r("TFPreTrainedModel"),NT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LT=d(),ia=o("p"),IT=r("This model is also a "),da=o("a"),DT=r("tf.keras.Model"),ST=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),OT=d(),f(Yn.$$.fragment),GT=d(),Je=o("div"),f(la.$$.fragment),BT=d(),_n=o("p"),UT=r("The "),xr=o("a"),WT=r("TFT5Model"),RT=r(" forward method, overrides the "),il=o("code"),HT=r("__call__"),VT=r(" special method."),KT=d(),f(Jn.$$.fragment),YT=d(),dl=o("p"),JT=r("Examples:"),ZT=d(),f(ca.$$.fragment),Fc=d(),gn=o("h2"),Zn=o("a"),ll=o("span"),f(pa.$$.fragment),XT=d(),cl=o("span"),QT=r("TFT5ForConditionalGeneration"),Mc=d(),le=o("div"),f(ha.$$.fragment),ek=d(),ua=o("p"),tk=r("T5 Model with a "),pl=o("code"),nk=r("language modeling"),ok=r(" head on top."),sk=d(),ma=o("p"),ak=r("The T5 model was proposed in "),fa=o("a"),rk=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ik=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),dk=d(),_a=o("p"),lk=r("This model inherits from "),Er=o("a"),ck=r("TFPreTrainedModel"),pk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=d(),ga=o("p"),uk=r("This model is also a "),Ta=o("a"),mk=r("tf.keras.Model"),fk=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_k=d(),f(Xn.$$.fragment),gk=d(),Ze=o("div"),f(ka.$$.fragment),Tk=d(),Tn=o("p"),kk=r("The "),qr=o("a"),vk=r("TFT5ForConditionalGeneration"),bk=r(" forward method, overrides the "),hl=o("code"),wk=r("__call__"),yk=r(" special method."),zk=d(),f(Qn.$$.fragment),$k=d(),ul=o("p"),xk=r("Examples:"),Ek=d(),f(va.$$.fragment),Pc=d(),kn=o("h2"),eo=o("a"),ml=o("span"),f(ba.$$.fragment),qk=d(),fl=o("span"),jk=r("TFT5EncoderModel"),Cc=d(),ce=o("div"),f(wa.$$.fragment),Fk=d(),_l=o("p"),Mk=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Pk=d(),ya=o("p"),Ck=r("The T5 model was proposed in "),za=o("a"),Ak=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Nk=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Lk=d(),$a=o("p"),Ik=r("This model inherits from "),jr=o("a"),Dk=r("TFPreTrainedModel"),Sk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok=d(),xa=o("p"),Gk=r("This model is also a "),Ea=o("a"),Bk=r("tf.keras.Model"),Uk=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wk=d(),f(to.$$.fragment),Rk=d(),Xe=o("div"),f(qa.$$.fragment),Hk=d(),vn=o("p"),Vk=r("The "),Fr=o("a"),Kk=r("TFT5EncoderModel"),Yk=r(" forward method, overrides the "),gl=o("code"),Jk=r("__call__"),Zk=r(" special method."),Xk=d(),f(no.$$.fragment),Qk=d(),Tl=o("p"),ev=r("Examples:"),tv=d(),f(ja.$$.fragment),Ac=d(),bn=o("h2"),oo=o("a"),kl=o("span"),f(Fa.$$.fragment),nv=d(),vl=o("span"),ov=r("FlaxT5Model"),Nc=d(),yt=o("div"),Qe=o("div"),f(Ma.$$.fragment),sv=d(),wn=o("p"),av=r("The "),bl=o("code"),rv=r("FlaxT5PreTrainedModel"),iv=r("forward method, overrides the "),wl=o("code"),dv=r("__call__"),lv=r(" special method."),cv=d(),f(so.$$.fragment),pv=d(),yl=o("p"),hv=r("Example:"),uv=d(),f(Pa.$$.fragment),mv=d(),Mt=o("div"),f(Ca.$$.fragment),fv=d(),zl=o("p"),_v=r("Example:"),gv=d(),f(Aa.$$.fragment),Tv=d(),Pt=o("div"),f(Na.$$.fragment),kv=d(),$l=o("p"),vv=r("Example:"),bv=d(),f(La.$$.fragment),Lc=d(),yn=o("h2"),ao=o("a"),xl=o("span"),f(Ia.$$.fragment),wv=d(),El=o("span"),yv=r("FlaxT5ForConditionalGeneration"),Ic=d(),zt=o("div"),et=o("div"),f(Da.$$.fragment),zv=d(),zn=o("p"),$v=r("The "),ql=o("code"),xv=r("FlaxT5PreTrainedModel"),Ev=r("forward method, overrides the "),jl=o("code"),qv=r("__call__"),jv=r(" special method."),Fv=d(),f(ro.$$.fragment),Mv=d(),Fl=o("p"),Pv=r("Example:"),Cv=d(),f(Sa.$$.fragment),Av=d(),Ct=o("div"),f(Oa.$$.fragment),Nv=d(),Ml=o("p"),Lv=r("Example:"),Iv=d(),f(Ga.$$.fragment),Dv=d(),At=o("div"),f(Ba.$$.fragment),Sv=d(),Pl=o("p"),Ov=r("Example:"),Gv=d(),f(Ua.$$.fragment),this.h()},l(n){const h=cy('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(n),b=s(n,"H1",{class:!0});var Wa=a(b);y=s(Wa,"A",{id:!0,class:!0,href:!0});var Cl=a(y);$=s(Cl,"SPAN",{});var Al=a($);_(z.$$.fragment,Al),Al.forEach(t),Cl.forEach(t),w=l(Wa),E=s(Wa,"SPAN",{});var Nl=a(E);Ee=i(Nl,"T5"),Nl.forEach(t),Wa.forEach(t),oe=l(n),q=s(n,"H2",{class:!0});var Ra=a(q);ee=s(Ra,"A",{id:!0,class:!0,href:!0});var Ll=a(ee);O=s(Ll,"SPAN",{});var Il=a(O);_(se.$$.fragment,Il),Il.forEach(t),Ll.forEach(t),qe=l(Ra),G=s(Ra,"SPAN",{});var Dl=a(G);je=i(Dl,"Overview"),Dl.forEach(t),Ra.forEach(t),ve=l(n),B=s(n,"P",{});var Ha=a(B);I=i(Ha,"The T5 model was presented in "),ae=s(Ha,"A",{href:!0,rel:!0});var Sl=a(ae);pe=i(Sl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Sl.forEach(t),F=i(Ha,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ha.forEach(t),C=l(n),he=s(n,"P",{});var Ol=a(he);K=i(Ol,"The abstract from the paper is the following:"),Ol.forEach(t),be=l(n),ue=s(n,"P",{});var Vv=a(ue);U=s(Vv,"EM",{});var Kv=a(U);Fe=i(Kv,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Kv.forEach(t),Vv.forEach(t),we=l(n),M=s(n,"P",{});var Yv=a(M);Me=i(Yv,"Tips:"),Yv.forEach(t),H=l(n),V=s(n,"UL",{});var Mr=a(V);me=s(Mr,"LI",{});var Jv=a(me);A=s(Jv,"P",{});var Pr=a(A);Pe=i(Pr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=s(Pr,"EM",{});var Zv=a(fe);D=i(Zv,"translate English to German: \u2026"),Zv.forEach(t),Ce=i(Pr,`,
for summarization: `),W=s(Pr,"EM",{});var Xv=a(W);Ae=i(Xv,"summarize: \u2026"),Xv.forEach(t),m=i(Pr,"."),Pr.forEach(t),Jv.forEach(t),j=l(Mr),te=s(Mr,"LI",{});var Qv=a(te);Oe=s(Qv,"P",{});var eb=a(Oe);lt=i(eb,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),eb.forEach(t),Qv.forEach(t),S=l(Mr),Ge=s(Mr,"LI",{});var tb=a(Ge);ne=s(tb,"P",{});var io=a(ne);ct=i(io,"See the "),N=s(io,"A",{href:!0});var nb=a(N);Y=i(nb,"training"),nb.forEach(t),pt=i(io,", "),Ne=s(io,"A",{href:!0});var ob=a(Ne);J=i(ob,"inference"),ob.forEach(t),ht=i(io," and "),Le=s(io,"A",{href:!0});var sb=a(Le);Ie=i(sb,"scripts"),sb.forEach(t),ut=i(io," sections below for all details regarding usage."),io.forEach(t),tb.forEach(t),Mr.forEach(t),Wl=l(n),Va=s(n,"P",{});var ab=a(Va);Lp=i(ab,"T5 comes in different sizes:"),ab.forEach(t),Rl=l(n),Be=s(n,"UL",{});var Nt=a(Be);si=s(Nt,"LI",{});var rb=a(si);ai=s(rb,"P",{});var ib=a(ai);_o=s(ib,"A",{href:!0,rel:!0});var db=a(_o);Ip=i(db,"t5-small"),db.forEach(t),ib.forEach(t),rb.forEach(t),Dp=l(Nt),ri=s(Nt,"LI",{});var lb=a(ri);ii=s(lb,"P",{});var cb=a(ii);go=s(cb,"A",{href:!0,rel:!0});var pb=a(go);Sp=i(pb,"t5-base"),pb.forEach(t),cb.forEach(t),lb.forEach(t),Op=l(Nt),di=s(Nt,"LI",{});var hb=a(di);li=s(hb,"P",{});var ub=a(li);To=s(ub,"A",{href:!0,rel:!0});var mb=a(To);Gp=i(mb,"t5-large"),mb.forEach(t),ub.forEach(t),hb.forEach(t),Bp=l(Nt),ci=s(Nt,"LI",{});var fb=a(ci);pi=s(fb,"P",{});var _b=a(pi);ko=s(_b,"A",{href:!0,rel:!0});var gb=a(ko);Up=i(gb,"t5-3b"),gb.forEach(t),_b.forEach(t),fb.forEach(t),Wp=l(Nt),hi=s(Nt,"LI",{});var Tb=a(hi);Ka=s(Tb,"P",{});var Bv=a(Ka);vo=s(Bv,"A",{href:!0,rel:!0});var kb=a(vo);Rp=i(kb,"t5-11b"),kb.forEach(t),Hp=i(Bv,"."),Bv.forEach(t),Tb.forEach(t),Nt.forEach(t),Hl=l(n),Ya=s(n,"P",{});var vb=a(Ya);Vp=i(vb,"Based on the original T5 model, Google has released some follow-up works:"),vb.forEach(t),Vl=l(n),xt=s(n,"UL",{});var Cr=a(xt);ui=s(Cr,"LI",{});var bb=a(ui);$n=s(bb,"P",{});var Gl=a($n);mi=s(Gl,"STRONG",{});var wb=a(mi);Kp=i(wb,"T5v1.1"),wb.forEach(t),Yp=i(Gl,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ja=s(Gl,"A",{href:!0});var yb=a(Ja);Jp=i(yb,"here"),yb.forEach(t),Zp=i(Gl,"."),Gl.forEach(t),bb.forEach(t),Xp=l(Cr),fi=s(Cr,"LI",{});var zb=a(fi);xn=s(zb,"P",{});var Bl=a(xn);_i=s(Bl,"STRONG",{});var $b=a(_i);Qp=i($b,"mT5"),$b.forEach(t),eh=i(Bl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Za=s(Bl,"A",{href:!0});var xb=a(Za);th=i(xb,"here"),xb.forEach(t),nh=i(Bl,"."),Bl.forEach(t),zb.forEach(t),oh=l(Cr),gi=s(Cr,"LI",{});var Eb=a(gi);En=s(Eb,"P",{});var Ul=a(En);Ti=s(Ul,"STRONG",{});var qb=a(Ti);sh=i(qb,"byT5"),qb.forEach(t),ah=i(Ul,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Xa=s(Ul,"A",{href:!0});var jb=a(Xa);rh=i(jb,"here"),jb.forEach(t),ih=i(Ul,"."),Ul.forEach(t),Eb.forEach(t),Cr.forEach(t),Kl=l(n),qn=s(n,"P",{});var Sc=a(qn);dh=i(Sc,"All checkpoints can be found on the "),bo=s(Sc,"A",{href:!0,rel:!0});var Fb=a(bo);lh=i(Fb,"hub"),Fb.forEach(t),ch=i(Sc,"."),Sc.forEach(t),Yl=l(n),Et=s(n,"P",{});var Ar=a(Et);ph=i(Ar,"This model was contributed by "),wo=s(Ar,"A",{href:!0,rel:!0});var Mb=a(wo);hh=i(Mb,"thomwolf"),Mb.forEach(t),uh=i(Ar,". The original code can be found "),yo=s(Ar,"A",{href:!0,rel:!0});var Pb=a(yo);mh=i(Pb,"here"),Pb.forEach(t),fh=i(Ar,"."),Ar.forEach(t),Jl=l(n),Qa=s(n,"A",{id:!0}),a(Qa).forEach(t),Zl=l(n),Jt=s(n,"H2",{class:!0});var Oc=a(Jt);jn=s(Oc,"A",{id:!0,class:!0,href:!0});var Cb=a(jn);ki=s(Cb,"SPAN",{});var Ab=a(ki);_(zo.$$.fragment,Ab),Ab.forEach(t),Cb.forEach(t),_h=l(Oc),vi=s(Oc,"SPAN",{});var Nb=a(vi);gh=i(Nb,"Training"),Nb.forEach(t),Oc.forEach(t),Xl=l(n),mt=s(n,"P",{});var lo=a(mt);Th=i(lo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),bi=s(lo,"CODE",{});var Lb=a(bi);kh=i(Lb,"input_ids"),Lb.forEach(t),vh=i(lo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),wi=s(lo,"CODE",{});var Ib=a(wi);bh=i(Ib,"decoder_input_ids"),Ib.forEach(t),wh=i(lo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),yi=s(lo,"CODE",{});var Db=a(yi);yh=i(Db,"labels"),Db.forEach(t),zh=i(lo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),lo.forEach(t),Ql=l(n),Fn=s(n,"P",{});var Gc=a(Fn);$h=i(Gc,"One can use "),er=s(Gc,"A",{href:!0});var Sb=a(er);xh=i(Sb,"T5ForConditionalGeneration"),Sb.forEach(t),Eh=i(Gc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Gc.forEach(t),ec=l(n),Mn=s(n,"UL",{});var Bc=a(Mn);dt=s(Bc,"LI",{});var Lt=a(dt);zi=s(Lt,"P",{});var Ob=a(zi);qh=i(Ob,"Unsupervised denoising training"),Ob.forEach(t),jh=l(Lt),_e=s(Lt,"P",{});var tt=a(_e);Fh=i(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),$i=s(tt,"EM",{});var Gb=a($i);Mh=i(Gb,"a.k.a"),Gb.forEach(t),Ph=i(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),xi=s(tt,"EM",{});var Bb=a(xi);Ch=i(Bb,"real"),Bb.forEach(t),Ah=i(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Ei=s(tt,"CODE",{});var Ub=a(Ei);Nh=i(Ub,"<extra_id_0>"),Ub.forEach(t),Lh=i(tt,`,
`),qi=s(tt,"CODE",{});var Wb=a(qi);Ih=i(Wb,"<extra_id_1>"),Wb.forEach(t),Dh=i(tt,", \u2026 up to "),ji=s(tt,"CODE",{});var Rb=a(ji);Sh=i(Rb,"<extra_id_99>"),Rb.forEach(t),Oh=i(tt,`. As a default, 100 sentinel tokens are available in
`),tr=s(tt,"A",{href:!0});var Hb=a(tr);Gh=i(Hb,"T5Tokenizer"),Hb.forEach(t),Bh=i(tt,"."),tt.forEach(t),Uh=l(Lt),Fi=s(Lt,"P",{});var Vb=a(Fi);Wh=i(Vb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Vb.forEach(t),Rh=l(Lt),_($o.$$.fragment,Lt),Hh=l(Lt),xo=s(Lt,"P",{});var Uc=a(xo);Vh=i(Uc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Eo=s(Uc,"A",{href:!0,rel:!0});var Kb=a(Eo);Kh=i(Kb,"run_t5_mlm_flax.py"),Kb.forEach(t),Yh=i(Uc,` script in the Examples
directory.`),Uc.forEach(t),Lt.forEach(t),Jh=l(Bc),ge=s(Bc,"LI",{});var nt=a(ge);Mi=s(nt,"P",{});var Yb=a(Mi);Zh=i(Yb,"Supervised training"),Yb.forEach(t),Xh=l(nt),Pi=s(nt,"P",{});var Jb=a(Pi);Qh=i(Jb,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Jb.forEach(t),eu=l(nt),_(qo.$$.fragment,nt),tu=l(nt),re=s(nt,"P",{});var ye=a(re);nu=i(ye,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ci=s(ye,"CODE",{});var Zb=a(Ci);ou=i(Zb,"input_ids"),Zb.forEach(t),su=i(ye,` (which are the
`),Ai=s(ye,"CODE",{});var Xb=a(Ai);au=i(Xb,"input_ids"),Xb.forEach(t),ru=i(ye," of the encoded input sequence) and "),Ni=s(ye,"CODE",{});var Qb=a(Ni);iu=i(Qb,"labels"),Qb.forEach(t),du=i(ye," (which are the "),Li=s(ye,"CODE",{});var e5=a(Li);lu=i(e5,"input_ids"),e5.forEach(t),cu=i(ye,` of the encoded
target sequence). The model will automatically create the `),Ii=s(ye,"CODE",{});var t5=a(Ii);pu=i(t5,"decoder_input_ids"),t5.forEach(t),hu=i(ye," based on the "),Di=s(ye,"CODE",{});var n5=a(Di);uu=i(n5,"labels"),n5.forEach(t),mu=i(ye,`, by
shifting them one position to the right and prepending the `),Si=s(ye,"CODE",{});var o5=a(Si);fu=i(o5,"config.decoder_start_token_id"),o5.forEach(t),_u=i(ye,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),ye.forEach(t),gu=l(nt),Zt=s(nt,"P",{});var Nr=a(Zt);Tu=i(Nr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Oi=s(Nr,"CODE",{});var s5=a(Oi);ku=i(s5,"max_source_length"),s5.forEach(t),vu=i(Nr," and "),Gi=s(Nr,"CODE",{});var a5=a(Gi);bu=i(a5,"max_target_length"),a5.forEach(t),wu=i(Nr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Nr.forEach(t),yu=l(nt),Te=s(nt,"P",{});var ot=a(Te);zu=i(ot,"In addition, we must make sure that padding token id\u2019s of the "),Bi=s(ot,"CODE",{});var r5=a(Bi);$u=i(r5,"labels"),r5.forEach(t),xu=i(ot,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Ui=s(ot,"CODE",{});var i5=a(Ui);Eu=i(i5,"ignore_index"),i5.forEach(t),qu=i(ot,`
of the `),Wi=s(ot,"CODE",{});var d5=a(Wi);ju=i(d5,"CrossEntropyLoss"),d5.forEach(t),Fu=i(ot,". In Flax, one can use the "),Ri=s(ot,"CODE",{});var l5=a(Ri);Mu=i(l5,"decoder_attention_mask"),l5.forEach(t),Pu=i(ot,` to ignore padded tokens from
the loss (see the `),jo=s(ot,"A",{href:!0,rel:!0});var c5=a(jo);Cu=i(c5,"Flax summarization script"),c5.forEach(t),Au=i(ot,` for details). We also pass
`),Hi=s(ot,"CODE",{});var p5=a(Hi);Nu=i(p5,"attention_mask"),p5.forEach(t),Lu=i(ot,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),ot.forEach(t),Iu=l(nt),_(Fo.$$.fragment,nt),nt.forEach(t),Bc.forEach(t),tc=l(n),nr=s(n,"P",{});var h5=a(nr);Du=i(h5,"Additional training tips:"),h5.forEach(t),nc=l(n),qt=s(n,"UL",{});var Lr=a(qt);Vi=s(Lr,"LI",{});var u5=a(Vi);Mo=s(u5,"P",{});var Wc=a(Mo);Su=i(Wc,"T5 models need a slightly higher learning rate than the default one set in the "),Ki=s(Wc,"CODE",{});var m5=a(Ki);Ou=i(m5,"Trainer"),m5.forEach(t),Gu=i(Wc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Wc.forEach(t),u5.forEach(t),Bu=l(Lr),Yi=s(Lr,"LI",{});var f5=a(Yi);Xt=s(f5,"P",{});var Ir=a(Xt);Uu=i(Ir,"According to "),Po=s(Ir,"A",{href:!0,rel:!0});var _5=a(Po);Wu=i(_5,"this forum post"),_5.forEach(t),Ru=i(Ir,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Co=s(Ir,"A",{href:!0,rel:!0});var g5=a(Co);Hu=i(g5,"paper"),g5.forEach(t),Vu=i(Ir,` for the task prefixes
used).`),Ir.forEach(t),f5.forEach(t),Ku=l(Lr),Ji=s(Lr,"LI",{});var T5=a(Ji);Ao=s(T5,"P",{});var Rc=a(Ao);Yu=i(Rc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Zi=s(Rc,"EM",{});var k5=a(Zi);Ju=i(k5,"pad_to_multiple_of"),k5.forEach(t),Zu=i(Rc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Rc.forEach(t),T5.forEach(t),Lr.forEach(t),oc=l(n),or=s(n,"A",{id:!0}),a(or).forEach(t),sc=l(n),Qt=s(n,"H2",{class:!0});var Hc=a(Qt);Pn=s(Hc,"A",{id:!0,class:!0,href:!0});var v5=a(Pn);Xi=s(v5,"SPAN",{});var b5=a(Xi);_(No.$$.fragment,b5),b5.forEach(t),v5.forEach(t),Xu=l(Hc),Qi=s(Hc,"SPAN",{});var w5=a(Qi);Qu=i(w5,"Inference"),w5.forEach(t),Hc.forEach(t),ac=l(n),ft=s(n,"P",{});var co=a(ft);em=i(co,"At inference time, it is recommended to use "),sr=s(co,"A",{href:!0});var y5=a(sr);tm=i(y5,"generate()"),y5.forEach(t),nm=i(co,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Lo=s(co,"A",{href:!0,rel:!0});var z5=a(Lo);om=i(z5,"this blog post"),z5.forEach(t),sm=i(co,` to know all the details about generating text with Transformers.
There\u2019s also `),Io=s(co,"A",{href:!0,rel:!0});var $5=a(Io);am=i($5,"this blog post"),$5.forEach(t),rm=i(co,` which explains how
generation works in general in encoder-decoder models.`),co.forEach(t),rc=l(n),_(Do.$$.fragment,n),ic=l(n),Ue=s(n,"P",{});var It=a(Ue);im=i(It,"Note that T5 uses the "),ed=s(It,"CODE",{});var x5=a(ed);dm=i(x5,"pad_token_id"),x5.forEach(t),lm=i(It," as the "),td=s(It,"CODE",{});var E5=a(td);cm=i(E5,"decoder_start_token_id"),E5.forEach(t),pm=i(It,`, so when doing generation without using
`),ar=s(It,"A",{href:!0});var q5=a(ar);hm=i(q5,"generate()"),q5.forEach(t),um=i(It,", make sure you start it with the "),nd=s(It,"CODE",{});var j5=a(nd);mm=i(j5,"pad_token_id"),j5.forEach(t),fm=i(It,"."),It.forEach(t),dc=l(n),rr=s(n,"P",{});var F5=a(rr);_m=i(F5,"The example above only shows a single example. You can also do batched inference, like so:"),F5.forEach(t),lc=l(n),_(So.$$.fragment,n),cc=l(n),ir=s(n,"A",{id:!0}),a(ir).forEach(t),pc=l(n),en=s(n,"H2",{class:!0});var Vc=a(en);Cn=s(Vc,"A",{id:!0,class:!0,href:!0});var M5=a(Cn);od=s(M5,"SPAN",{});var P5=a(od);_(Oo.$$.fragment,P5),P5.forEach(t),M5.forEach(t),gm=l(Vc),sd=s(Vc,"SPAN",{});var C5=a(sd);Tm=i(C5,"Performance"),C5.forEach(t),Vc.forEach(t),hc=l(n),_t=s(n,"P",{});var po=a(_t);km=i(po,"If you\u2019d like a faster training and inference performance, install "),Go=s(po,"A",{href:!0,rel:!0});var A5=a(Go);vm=i(A5,"apex"),A5.forEach(t),bm=i(po," and then the model will automatically use "),ad=s(po,"CODE",{});var N5=a(ad);wm=i(N5,"apex.normalization.FusedRMSNorm"),N5.forEach(t),ym=i(po," instead of "),rd=s(po,"CODE",{});var L5=a(rd);zm=i(L5,"T5LayerNorm"),L5.forEach(t),$m=i(po,". The former uses an optimized fused kernel which is several times faster than the latter."),po.forEach(t),uc=l(n),tn=s(n,"H2",{class:!0});var Kc=a(tn);An=s(Kc,"A",{id:!0,class:!0,href:!0});var I5=a(An);id=s(I5,"SPAN",{});var D5=a(id);_(Bo.$$.fragment,D5),D5.forEach(t),I5.forEach(t),xm=l(Kc),dd=s(Kc,"SPAN",{});var S5=a(dd);Em=i(S5,"Example scripts"),S5.forEach(t),Kc.forEach(t),mc=l(n),dr=s(n,"P",{});var O5=a(dr);qm=i(O5,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),O5.forEach(t),fc=l(n),Nn=s(n,"UL",{});var Yc=a(Nn);ld=s(Yc,"LI",{});var G5=a(ld);nn=s(G5,"P",{});var Dr=a(nn);jm=i(Dr,"pre-training: the "),Uo=s(Dr,"A",{href:!0,rel:!0});var B5=a(Uo);Fm=i(B5,"run_t5_mlm_flax.py"),B5.forEach(t),Mm=i(Dr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Wo=s(Dr,"A",{href:!0,rel:!0});var U5=a(Wo);Pm=i(U5,"t5_tokenizer_model.py"),U5.forEach(t),Cm=i(Dr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Dr.forEach(t),G5.forEach(t),Am=l(Yc),cd=s(Yc,"LI",{});var W5=a(cd);De=s(W5,"P",{});var vt=a(De);Nm=i(vt,"fine-tuning: T5 is supported by the official summarization scripts ("),Ro=s(vt,"A",{href:!0,rel:!0});var R5=a(Ro);Lm=i(R5,"PyTorch"),R5.forEach(t),Im=i(vt,", "),Ho=s(vt,"A",{href:!0,rel:!0});var H5=a(Ho);Dm=i(H5,"Tensorflow"),H5.forEach(t),Sm=i(vt,", and "),Vo=s(vt,"A",{href:!0,rel:!0});var V5=a(Vo);Om=i(V5,"Flax"),V5.forEach(t),Gm=i(vt,`) and translation scripts
(`),Ko=s(vt,"A",{href:!0,rel:!0});var K5=a(Ko);Bm=i(K5,"PyTorch"),K5.forEach(t),Um=i(vt," and "),Yo=s(vt,"A",{href:!0,rel:!0});var Y5=a(Yo);Wm=i(Y5,"Tensorflow"),Y5.forEach(t),Rm=i(vt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),vt.forEach(t),W5.forEach(t),Yc.forEach(t),_c=l(n),on=s(n,"H2",{class:!0});var Jc=a(on);Ln=s(Jc,"A",{id:!0,class:!0,href:!0});var J5=a(Ln);pd=s(J5,"SPAN",{});var Z5=a(pd);_(Jo.$$.fragment,Z5),Z5.forEach(t),J5.forEach(t),Hm=l(Jc),hd=s(Jc,"SPAN",{});var X5=a(hd);Vm=i(X5,"T5Config"),X5.forEach(t),Jc.forEach(t),gc=l(n),bt=s(n,"DIV",{class:!0});var Sr=a(bt);_(Zo.$$.fragment,Sr),Km=l(Sr),wt=s(Sr,"P",{});var ho=a(wt);Ym=i(ho,"This is the configuration class to store the configuration of a "),lr=s(ho,"A",{href:!0});var Q5=a(lr);Jm=i(Q5,"T5Model"),Q5.forEach(t),Zm=i(ho," or a "),cr=s(ho,"A",{href:!0});var e1=a(cr);Xm=i(e1,"TFT5Model"),e1.forEach(t),Qm=i(ho,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Xo=s(ho,"A",{href:!0,rel:!0});var t1=a(Xo);ef=i(t1,"t5-small"),t1.forEach(t),tf=i(ho," architecture."),ho.forEach(t),nf=l(Sr),sn=s(Sr,"P",{});var Or=a(sn);of=i(Or,"Configuration objects inherit from "),pr=s(Or,"A",{href:!0});var n1=a(pr);sf=i(n1,"PretrainedConfig"),n1.forEach(t),af=i(Or,` and can be used to control the model outputs. Read the
documentation from `),hr=s(Or,"A",{href:!0});var o1=a(hr);rf=i(o1,"PretrainedConfig"),o1.forEach(t),df=i(Or," for more information."),Or.forEach(t),Sr.forEach(t),Tc=l(n),an=s(n,"H2",{class:!0});var Zc=a(an);In=s(Zc,"A",{id:!0,class:!0,href:!0});var s1=a(In);ud=s(s1,"SPAN",{});var a1=a(ud);_(Qo.$$.fragment,a1),a1.forEach(t),s1.forEach(t),lf=l(Zc),md=s(Zc,"SPAN",{});var r1=a(md);cf=i(r1,"T5Tokenizer"),r1.forEach(t),Zc.forEach(t),kc=l(n),ie=s(n,"DIV",{class:!0});var st=a(ie);_(es.$$.fragment,st),pf=l(st),ts=s(st,"P",{});var Xc=a(ts);hf=i(Xc,"Construct a T5 tokenizer. Based on "),ns=s(Xc,"A",{href:!0,rel:!0});var i1=a(ns);uf=i(i1,"SentencePiece"),i1.forEach(t),mf=i(Xc,"."),Xc.forEach(t),ff=l(st),os=s(st,"P",{});var Qc=a(os);_f=i(Qc,"This tokenizer inherits from "),ur=s(Qc,"A",{href:!0});var d1=a(ur);gf=i(d1,"PreTrainedTokenizer"),d1.forEach(t),Tf=i(Qc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qc.forEach(t),kf=l(st),jt=s(st,"DIV",{class:!0});var Gr=a(jt);_(ss.$$.fragment,Gr),vf=l(Gr),fd=s(Gr,"P",{});var l1=a(fd);bf=i(l1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),l1.forEach(t),wf=l(Gr),as=s(Gr,"UL",{});var ep=a(as);mr=s(ep,"LI",{});var Uv=a(mr);yf=i(Uv,"single sequence: "),_d=s(Uv,"CODE",{});var c1=a(_d);zf=i(c1,"X </s>"),c1.forEach(t),Uv.forEach(t),$f=l(ep),fr=s(ep,"LI",{});var Wv=a(fr);xf=i(Wv,"pair of sequences: "),gd=s(Wv,"CODE",{});var p1=a(gd);Ef=i(p1,"A </s> B </s>"),p1.forEach(t),Wv.forEach(t),ep.forEach(t),Gr.forEach(t),qf=l(st),Dn=s(st,"DIV",{class:!0});var tp=a(Dn);_(rs.$$.fragment,tp),jf=l(tp),is=s(tp,"P",{});var np=a(is);Ff=i(np,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Td=s(np,"CODE",{});var h1=a(Td);Mf=i(h1,"prepare_for_model"),h1.forEach(t),Pf=i(np," method."),np.forEach(t),tp.forEach(t),Cf=l(st),Sn=s(st,"DIV",{class:!0});var op=a(Sn);_(ds.$$.fragment,op),Af=l(op),kd=s(op,"P",{});var u1=a(kd);Nf=i(u1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),u1.forEach(t),op.forEach(t),Lf=l(st),vd=s(st,"DIV",{class:!0}),a(vd).forEach(t),st.forEach(t),vc=l(n),rn=s(n,"H2",{class:!0});var sp=a(rn);On=s(sp,"A",{id:!0,class:!0,href:!0});var m1=a(On);bd=s(m1,"SPAN",{});var f1=a(bd);_(ls.$$.fragment,f1),f1.forEach(t),m1.forEach(t),If=l(sp),wd=s(sp,"SPAN",{});var _1=a(wd);Df=i(_1,"T5TokenizerFast"),_1.forEach(t),sp.forEach(t),bc=l(n),Se=s(n,"DIV",{class:!0});var Dt=a(Se);_(cs.$$.fragment,Dt),Sf=l(Dt),dn=s(Dt,"P",{});var Br=a(dn);Of=i(Br,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),yd=s(Br,"EM",{});var g1=a(yd);Gf=i(g1,"tokenizers"),g1.forEach(t),Bf=i(Br,` library). Based on
`),ps=s(Br,"A",{href:!0,rel:!0});var T1=a(ps);Uf=i(T1,"Unigram"),T1.forEach(t),Wf=i(Br,"."),Br.forEach(t),Rf=l(Dt),hs=s(Dt,"P",{});var ap=a(hs);Hf=i(ap,"This tokenizer inherits from "),_r=s(ap,"A",{href:!0});var k1=a(_r);Vf=i(k1,"PreTrainedTokenizerFast"),k1.forEach(t),Kf=i(ap,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ap.forEach(t),Yf=l(Dt),Ft=s(Dt,"DIV",{class:!0});var Ur=a(Ft);_(us.$$.fragment,Ur),Jf=l(Ur),zd=s(Ur,"P",{});var v1=a(zd);Zf=i(v1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),v1.forEach(t),Xf=l(Ur),ms=s(Ur,"UL",{});var rp=a(ms);gr=s(rp,"LI",{});var Rv=a(gr);Qf=i(Rv,"single sequence: "),$d=s(Rv,"CODE",{});var b1=a($d);e_=i(b1,"X </s>"),b1.forEach(t),Rv.forEach(t),t_=l(rp),Tr=s(rp,"LI",{});var Hv=a(Tr);n_=i(Hv,"pair of sequences: "),xd=s(Hv,"CODE",{});var w1=a(xd);o_=i(w1,"A </s> B </s>"),w1.forEach(t),Hv.forEach(t),rp.forEach(t),Ur.forEach(t),s_=l(Dt),Gn=s(Dt,"DIV",{class:!0});var ip=a(Gn);_(fs.$$.fragment,ip),a_=l(ip),Ed=s(ip,"P",{});var y1=a(Ed);r_=i(y1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),y1.forEach(t),ip.forEach(t),Dt.forEach(t),wc=l(n),ln=s(n,"H2",{class:!0});var dp=a(ln);Bn=s(dp,"A",{id:!0,class:!0,href:!0});var z1=a(Bn);qd=s(z1,"SPAN",{});var $1=a(qd);_(_s.$$.fragment,$1),$1.forEach(t),z1.forEach(t),i_=l(dp),jd=s(dp,"SPAN",{});var x1=a(jd);d_=i(x1,"T5Model"),x1.forEach(t),dp.forEach(t),yc=l(n),Z=s(n,"DIV",{class:!0});var ze=a(Z);_(gs.$$.fragment,ze),l_=l(ze),Fd=s(ze,"P",{});var E1=a(Fd);c_=i(E1,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),E1.forEach(t),p_=l(ze),Ts=s(ze,"P",{});var lp=a(Ts);h_=i(lp,"The T5 model was proposed in "),ks=s(lp,"A",{href:!0,rel:!0});var q1=a(ks);u_=i(q1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),q1.forEach(t),m_=i(lp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),lp.forEach(t),f_=l(ze),vs=s(ze,"P",{});var cp=a(vs);__=i(cp,"This model inherits from "),kr=s(cp,"A",{href:!0});var j1=a(kr);g_=i(j1,"PreTrainedModel"),j1.forEach(t),T_=i(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),k_=l(ze),bs=s(ze,"P",{});var pp=a(bs);v_=i(pp,"This model is also a PyTorch "),ws=s(pp,"A",{href:!0,rel:!0});var F1=a(ws);b_=i(F1,"torch.nn.Module"),F1.forEach(t),w_=i(pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pp.forEach(t),y_=l(ze),We=s(ze,"DIV",{class:!0});var St=a(We);_(ys.$$.fragment,St),z_=l(St),cn=s(St,"P",{});var Wr=a(cn);$_=i(Wr,"The "),vr=s(Wr,"A",{href:!0});var M1=a(vr);x_=i(M1,"T5Model"),M1.forEach(t),E_=i(Wr," forward method, overrides the "),Md=s(Wr,"CODE",{});var P1=a(Md);q_=i(P1,"__call__"),P1.forEach(t),j_=i(Wr," special method."),Wr.forEach(t),F_=l(St),_(Un.$$.fragment,St),M_=l(St),Pd=s(St,"P",{});var C1=a(Pd);P_=i(C1,"Example:"),C1.forEach(t),C_=l(St),_(zs.$$.fragment,St),St.forEach(t),A_=l(ze),Re=s(ze,"DIV",{class:!0});var Ot=a(Re);_($s.$$.fragment,Ot),N_=l(Ot),Cd=s(Ot,"P",{});var A1=a(Cd);L_=i(A1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),A1.forEach(t),I_=l(Ot),Ad=s(Ot,"P",{});var N1=a(Ad);D_=i(N1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),N1.forEach(t),S_=l(Ot),Nd=s(Ot,"P",{});var L1=a(Nd);O_=i(L1,"Example:"),L1.forEach(t),G_=l(Ot),_(xs.$$.fragment,Ot),Ot.forEach(t),B_=l(ze),gt=s(ze,"DIV",{class:!0});var uo=a(gt);_(Es.$$.fragment,uo),U_=l(uo),Ld=s(uo,"P",{});var I1=a(Ld);W_=i(I1,"Moves the model to cpu from a model parallel state."),I1.forEach(t),R_=l(uo),Id=s(uo,"P",{});var D1=a(Id);H_=i(D1,"Example:"),D1.forEach(t),V_=l(uo),_(qs.$$.fragment,uo),uo.forEach(t),ze.forEach(t),zc=l(n),pn=s(n,"H2",{class:!0});var hp=a(pn);Wn=s(hp,"A",{id:!0,class:!0,href:!0});var S1=a(Wn);Dd=s(S1,"SPAN",{});var O1=a(Dd);_(js.$$.fragment,O1),O1.forEach(t),S1.forEach(t),K_=l(hp),Sd=s(hp,"SPAN",{});var G1=a(Sd);Y_=i(G1,"T5ForConditionalGeneration"),G1.forEach(t),hp.forEach(t),$c=l(n),X=s(n,"DIV",{class:!0});var $e=a(X);_(Fs.$$.fragment,$e),J_=l($e),Ms=s($e,"P",{});var up=a(Ms);Z_=i(up,"T5 Model with a "),Od=s(up,"CODE",{});var B1=a(Od);X_=i(B1,"language modeling"),B1.forEach(t),Q_=i(up," head on top."),up.forEach(t),eg=l($e),Ps=s($e,"P",{});var mp=a(Ps);tg=i(mp,"The T5 model was proposed in "),Cs=s(mp,"A",{href:!0,rel:!0});var U1=a(Cs);ng=i(U1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),U1.forEach(t),og=i(mp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),mp.forEach(t),sg=l($e),As=s($e,"P",{});var fp=a(As);ag=i(fp,"This model inherits from "),br=s(fp,"A",{href:!0});var W1=a(br);rg=i(W1,"PreTrainedModel"),W1.forEach(t),ig=i(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),dg=l($e),Ns=s($e,"P",{});var _p=a(Ns);lg=i(_p,"This model is also a PyTorch "),Ls=s(_p,"A",{href:!0,rel:!0});var R1=a(Ls);cg=i(R1,"torch.nn.Module"),R1.forEach(t),pg=i(_p,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p.forEach(t),hg=l($e),He=s($e,"DIV",{class:!0});var Gt=a(He);_(Is.$$.fragment,Gt),ug=l(Gt),hn=s(Gt,"P",{});var Rr=a(hn);mg=i(Rr,"The "),wr=s(Rr,"A",{href:!0});var H1=a(wr);fg=i(H1,"T5ForConditionalGeneration"),H1.forEach(t),_g=i(Rr," forward method, overrides the "),Gd=s(Rr,"CODE",{});var V1=a(Gd);gg=i(V1,"__call__"),V1.forEach(t),Tg=i(Rr," special method."),Rr.forEach(t),kg=l(Gt),_(Rn.$$.fragment,Gt),vg=l(Gt),Bd=s(Gt,"P",{});var K1=a(Bd);bg=i(K1,"Examples:"),K1.forEach(t),wg=l(Gt),_(Ds.$$.fragment,Gt),Gt.forEach(t),yg=l($e),Ve=s($e,"DIV",{class:!0});var Bt=a(Ve);_(Ss.$$.fragment,Bt),zg=l(Bt),Ud=s(Bt,"P",{});var Y1=a(Ud);$g=i(Y1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Y1.forEach(t),xg=l(Bt),Wd=s(Bt,"P",{});var J1=a(Wd);Eg=i(J1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),J1.forEach(t),qg=l(Bt),Rd=s(Bt,"P",{});var Z1=a(Rd);jg=i(Z1,"Example:"),Z1.forEach(t),Fg=l(Bt),_(Os.$$.fragment,Bt),Bt.forEach(t),Mg=l($e),Tt=s($e,"DIV",{class:!0});var mo=a(Tt);_(Gs.$$.fragment,mo),Pg=l(mo),Hd=s(mo,"P",{});var X1=a(Hd);Cg=i(X1,"Moves the model to cpu from a model parallel state."),X1.forEach(t),Ag=l(mo),Vd=s(mo,"P",{});var Q1=a(Vd);Ng=i(Q1,"Example:"),Q1.forEach(t),Lg=l(mo),_(Bs.$$.fragment,mo),mo.forEach(t),$e.forEach(t),xc=l(n),un=s(n,"H2",{class:!0});var gp=a(un);Hn=s(gp,"A",{id:!0,class:!0,href:!0});var ew=a(Hn);Kd=s(ew,"SPAN",{});var tw=a(Kd);_(Us.$$.fragment,tw),tw.forEach(t),ew.forEach(t),Ig=l(gp),Yd=s(gp,"SPAN",{});var nw=a(Yd);Dg=i(nw,"T5EncoderModel"),nw.forEach(t),gp.forEach(t),Ec=l(n),Q=s(n,"DIV",{class:!0});var xe=a(Q);_(Ws.$$.fragment,xe),Sg=l(xe),Jd=s(xe,"P",{});var ow=a(Jd);Og=i(ow,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),ow.forEach(t),Gg=l(xe),Rs=s(xe,"P",{});var Tp=a(Rs);Bg=i(Tp,"The T5 model was proposed in "),Hs=s(Tp,"A",{href:!0,rel:!0});var sw=a(Hs);Ug=i(sw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),sw.forEach(t),Wg=i(Tp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Tp.forEach(t),Rg=l(xe),Vs=s(xe,"P",{});var kp=a(Vs);Hg=i(kp,"This model inherits from "),yr=s(kp,"A",{href:!0});var aw=a(yr);Vg=i(aw,"PreTrainedModel"),aw.forEach(t),Kg=i(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),Yg=l(xe),Ks=s(xe,"P",{});var vp=a(Ks);Jg=i(vp,"This model is also a PyTorch "),Ys=s(vp,"A",{href:!0,rel:!0});var rw=a(Ys);Zg=i(rw,"torch.nn.Module"),rw.forEach(t),Xg=i(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(t),Qg=l(xe),Ke=s(xe,"DIV",{class:!0});var Ut=a(Ke);_(Js.$$.fragment,Ut),eT=l(Ut),mn=s(Ut,"P",{});var Hr=a(mn);tT=i(Hr,"The "),zr=s(Hr,"A",{href:!0});var iw=a(zr);nT=i(iw,"T5EncoderModel"),iw.forEach(t),oT=i(Hr," forward method, overrides the "),Zd=s(Hr,"CODE",{});var dw=a(Zd);sT=i(dw,"__call__"),dw.forEach(t),aT=i(Hr," special method."),Hr.forEach(t),rT=l(Ut),_(Vn.$$.fragment,Ut),iT=l(Ut),Xd=s(Ut,"P",{});var lw=a(Xd);dT=i(lw,"Example:"),lw.forEach(t),lT=l(Ut),_(Zs.$$.fragment,Ut),Ut.forEach(t),cT=l(xe),Ye=s(xe,"DIV",{class:!0});var Wt=a(Ye);_(Xs.$$.fragment,Wt),pT=l(Wt),Qd=s(Wt,"P",{});var cw=a(Qd);hT=i(cw,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),cw.forEach(t),uT=l(Wt),el=s(Wt,"P",{});var pw=a(el);mT=i(pw,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),pw.forEach(t),fT=l(Wt),tl=s(Wt,"P",{});var hw=a(tl);_T=i(hw,"Example:"),hw.forEach(t),gT=l(Wt),_(Qs.$$.fragment,Wt),Wt.forEach(t),TT=l(xe),kt=s(xe,"DIV",{class:!0});var fo=a(kt);_(ea.$$.fragment,fo),kT=l(fo),nl=s(fo,"P",{});var uw=a(nl);vT=i(uw,"Moves the model to cpu from a model parallel state."),uw.forEach(t),bT=l(fo),ol=s(fo,"P",{});var mw=a(ol);wT=i(mw,"Example:"),mw.forEach(t),yT=l(fo),_(ta.$$.fragment,fo),fo.forEach(t),xe.forEach(t),qc=l(n),fn=s(n,"H2",{class:!0});var bp=a(fn);Kn=s(bp,"A",{id:!0,class:!0,href:!0});var fw=a(Kn);sl=s(fw,"SPAN",{});var _w=a(sl);_(na.$$.fragment,_w),_w.forEach(t),fw.forEach(t),zT=l(bp),al=s(bp,"SPAN",{});var gw=a(al);$T=i(gw,"TFT5Model"),gw.forEach(t),bp.forEach(t),jc=l(n),de=s(n,"DIV",{class:!0});var at=a(de);_(oa.$$.fragment,at),xT=l(at),rl=s(at,"P",{});var Tw=a(rl);ET=i(Tw,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),Tw.forEach(t),qT=l(at),sa=s(at,"P",{});var wp=a(sa);jT=i(wp,"The T5 model was proposed in "),aa=s(wp,"A",{href:!0,rel:!0});var kw=a(aa);FT=i(kw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),kw.forEach(t),MT=i(wp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),wp.forEach(t),PT=l(at),ra=s(at,"P",{});var yp=a(ra);CT=i(yp,"This model inherits from "),$r=s(yp,"A",{href:!0});var vw=a($r);AT=i(vw,"TFPreTrainedModel"),vw.forEach(t),NT=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),LT=l(at),ia=s(at,"P",{});var zp=a(ia);IT=i(zp,"This model is also a "),da=s(zp,"A",{href:!0,rel:!0});var bw=a(da);DT=i(bw,"tf.keras.Model"),bw.forEach(t),ST=i(zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zp.forEach(t),OT=l(at),_(Yn.$$.fragment,at),GT=l(at),Je=s(at,"DIV",{class:!0});var Rt=a(Je);_(la.$$.fragment,Rt),BT=l(Rt),_n=s(Rt,"P",{});var Vr=a(_n);UT=i(Vr,"The "),xr=s(Vr,"A",{href:!0});var ww=a(xr);WT=i(ww,"TFT5Model"),ww.forEach(t),RT=i(Vr," forward method, overrides the "),il=s(Vr,"CODE",{});var yw=a(il);HT=i(yw,"__call__"),yw.forEach(t),VT=i(Vr," special method."),Vr.forEach(t),KT=l(Rt),_(Jn.$$.fragment,Rt),YT=l(Rt),dl=s(Rt,"P",{});var zw=a(dl);JT=i(zw,"Examples:"),zw.forEach(t),ZT=l(Rt),_(ca.$$.fragment,Rt),Rt.forEach(t),at.forEach(t),Fc=l(n),gn=s(n,"H2",{class:!0});var $p=a(gn);Zn=s($p,"A",{id:!0,class:!0,href:!0});var $w=a(Zn);ll=s($w,"SPAN",{});var xw=a(ll);_(pa.$$.fragment,xw),xw.forEach(t),$w.forEach(t),XT=l($p),cl=s($p,"SPAN",{});var Ew=a(cl);QT=i(Ew,"TFT5ForConditionalGeneration"),Ew.forEach(t),$p.forEach(t),Mc=l(n),le=s(n,"DIV",{class:!0});var rt=a(le);_(ha.$$.fragment,rt),ek=l(rt),ua=s(rt,"P",{});var xp=a(ua);tk=i(xp,"T5 Model with a "),pl=s(xp,"CODE",{});var qw=a(pl);nk=i(qw,"language modeling"),qw.forEach(t),ok=i(xp," head on top."),xp.forEach(t),sk=l(rt),ma=s(rt,"P",{});var Ep=a(ma);ak=i(Ep,"The T5 model was proposed in "),fa=s(Ep,"A",{href:!0,rel:!0});var jw=a(fa);rk=i(jw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),jw.forEach(t),ik=i(Ep,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ep.forEach(t),dk=l(rt),_a=s(rt,"P",{});var qp=a(_a);lk=i(qp,"This model inherits from "),Er=s(qp,"A",{href:!0});var Fw=a(Er);ck=i(Fw,"TFPreTrainedModel"),Fw.forEach(t),pk=i(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(t),hk=l(rt),ga=s(rt,"P",{});var jp=a(ga);uk=i(jp,"This model is also a "),Ta=s(jp,"A",{href:!0,rel:!0});var Mw=a(Ta);mk=i(Mw,"tf.keras.Model"),Mw.forEach(t),fk=i(jp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jp.forEach(t),_k=l(rt),_(Xn.$$.fragment,rt),gk=l(rt),Ze=s(rt,"DIV",{class:!0});var Ht=a(Ze);_(ka.$$.fragment,Ht),Tk=l(Ht),Tn=s(Ht,"P",{});var Kr=a(Tn);kk=i(Kr,"The "),qr=s(Kr,"A",{href:!0});var Pw=a(qr);vk=i(Pw,"TFT5ForConditionalGeneration"),Pw.forEach(t),bk=i(Kr," forward method, overrides the "),hl=s(Kr,"CODE",{});var Cw=a(hl);wk=i(Cw,"__call__"),Cw.forEach(t),yk=i(Kr," special method."),Kr.forEach(t),zk=l(Ht),_(Qn.$$.fragment,Ht),$k=l(Ht),ul=s(Ht,"P",{});var Aw=a(ul);xk=i(Aw,"Examples:"),Aw.forEach(t),Ek=l(Ht),_(va.$$.fragment,Ht),Ht.forEach(t),rt.forEach(t),Pc=l(n),kn=s(n,"H2",{class:!0});var Fp=a(kn);eo=s(Fp,"A",{id:!0,class:!0,href:!0});var Nw=a(eo);ml=s(Nw,"SPAN",{});var Lw=a(ml);_(ba.$$.fragment,Lw),Lw.forEach(t),Nw.forEach(t),qk=l(Fp),fl=s(Fp,"SPAN",{});var Iw=a(fl);jk=i(Iw,"TFT5EncoderModel"),Iw.forEach(t),Fp.forEach(t),Cc=l(n),ce=s(n,"DIV",{class:!0});var it=a(ce);_(wa.$$.fragment,it),Fk=l(it),_l=s(it,"P",{});var Dw=a(_l);Mk=i(Dw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Dw.forEach(t),Pk=l(it),ya=s(it,"P",{});var Mp=a(ya);Ck=i(Mp,"The T5 model was proposed in "),za=s(Mp,"A",{href:!0,rel:!0});var Sw=a(za);Ak=i(Sw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Sw.forEach(t),Nk=i(Mp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Mp.forEach(t),Lk=l(it),$a=s(it,"P",{});var Pp=a($a);Ik=i(Pp,"This model inherits from "),jr=s(Pp,"A",{href:!0});var Ow=a(jr);Dk=i(Ow,"TFPreTrainedModel"),Ow.forEach(t),Sk=i(Pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp.forEach(t),Ok=l(it),xa=s(it,"P",{});var Cp=a(xa);Gk=i(Cp,"This model is also a "),Ea=s(Cp,"A",{href:!0,rel:!0});var Gw=a(Ea);Bk=i(Gw,"tf.keras.Model"),Gw.forEach(t),Uk=i(Cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cp.forEach(t),Wk=l(it),_(to.$$.fragment,it),Rk=l(it),Xe=s(it,"DIV",{class:!0});var Vt=a(Xe);_(qa.$$.fragment,Vt),Hk=l(Vt),vn=s(Vt,"P",{});var Yr=a(vn);Vk=i(Yr,"The "),Fr=s(Yr,"A",{href:!0});var Bw=a(Fr);Kk=i(Bw,"TFT5EncoderModel"),Bw.forEach(t),Yk=i(Yr," forward method, overrides the "),gl=s(Yr,"CODE",{});var Uw=a(gl);Jk=i(Uw,"__call__"),Uw.forEach(t),Zk=i(Yr," special method."),Yr.forEach(t),Xk=l(Vt),_(no.$$.fragment,Vt),Qk=l(Vt),Tl=s(Vt,"P",{});var Ww=a(Tl);ev=i(Ww,"Examples:"),Ww.forEach(t),tv=l(Vt),_(ja.$$.fragment,Vt),Vt.forEach(t),it.forEach(t),Ac=l(n),bn=s(n,"H2",{class:!0});var Ap=a(bn);oo=s(Ap,"A",{id:!0,class:!0,href:!0});var Rw=a(oo);kl=s(Rw,"SPAN",{});var Hw=a(kl);_(Fa.$$.fragment,Hw),Hw.forEach(t),Rw.forEach(t),nv=l(Ap),vl=s(Ap,"SPAN",{});var Vw=a(vl);ov=i(Vw,"FlaxT5Model"),Vw.forEach(t),Ap.forEach(t),Nc=l(n),yt=s(n,"DIV",{class:!0});var Jr=a(yt);Qe=s(Jr,"DIV",{class:!0});var Kt=a(Qe);_(Ma.$$.fragment,Kt),sv=l(Kt),wn=s(Kt,"P",{});var Zr=a(wn);av=i(Zr,"The "),bl=s(Zr,"CODE",{});var Kw=a(bl);rv=i(Kw,"FlaxT5PreTrainedModel"),Kw.forEach(t),iv=i(Zr,"forward method, overrides the "),wl=s(Zr,"CODE",{});var Yw=a(wl);dv=i(Yw,"__call__"),Yw.forEach(t),lv=i(Zr," special method."),Zr.forEach(t),cv=l(Kt),_(so.$$.fragment,Kt),pv=l(Kt),yl=s(Kt,"P",{});var Jw=a(yl);hv=i(Jw,"Example:"),Jw.forEach(t),uv=l(Kt),_(Pa.$$.fragment,Kt),Kt.forEach(t),mv=l(Jr),Mt=s(Jr,"DIV",{class:!0});var Xr=a(Mt);_(Ca.$$.fragment,Xr),fv=l(Xr),zl=s(Xr,"P",{});var Zw=a(zl);_v=i(Zw,"Example:"),Zw.forEach(t),gv=l(Xr),_(Aa.$$.fragment,Xr),Xr.forEach(t),Tv=l(Jr),Pt=s(Jr,"DIV",{class:!0});var Qr=a(Pt);_(Na.$$.fragment,Qr),kv=l(Qr),$l=s(Qr,"P",{});var Xw=a($l);vv=i(Xw,"Example:"),Xw.forEach(t),bv=l(Qr),_(La.$$.fragment,Qr),Qr.forEach(t),Jr.forEach(t),Lc=l(n),yn=s(n,"H2",{class:!0});var Np=a(yn);ao=s(Np,"A",{id:!0,class:!0,href:!0});var Qw=a(ao);xl=s(Qw,"SPAN",{});var ey=a(xl);_(Ia.$$.fragment,ey),ey.forEach(t),Qw.forEach(t),wv=l(Np),El=s(Np,"SPAN",{});var ty=a(El);yv=i(ty,"FlaxT5ForConditionalGeneration"),ty.forEach(t),Np.forEach(t),Ic=l(n),zt=s(n,"DIV",{class:!0});var ei=a(zt);et=s(ei,"DIV",{class:!0});var Yt=a(et);_(Da.$$.fragment,Yt),zv=l(Yt),zn=s(Yt,"P",{});var ti=a(zn);$v=i(ti,"The "),ql=s(ti,"CODE",{});var ny=a(ql);xv=i(ny,"FlaxT5PreTrainedModel"),ny.forEach(t),Ev=i(ti,"forward method, overrides the "),jl=s(ti,"CODE",{});var oy=a(jl);qv=i(oy,"__call__"),oy.forEach(t),jv=i(ti," special method."),ti.forEach(t),Fv=l(Yt),_(ro.$$.fragment,Yt),Mv=l(Yt),Fl=s(Yt,"P",{});var sy=a(Fl);Pv=i(sy,"Example:"),sy.forEach(t),Cv=l(Yt),_(Sa.$$.fragment,Yt),Yt.forEach(t),Av=l(ei),Ct=s(ei,"DIV",{class:!0});var ni=a(Ct);_(Oa.$$.fragment,ni),Nv=l(ni),Ml=s(ni,"P",{});var ay=a(Ml);Lv=i(ay,"Example:"),ay.forEach(t),Iv=l(ni),_(Ga.$$.fragment,ni),ni.forEach(t),Dv=l(ei),At=s(ei,"DIV",{class:!0});var oi=a(At);_(Ba.$$.fragment,oi),Sv=l(oi),Pl=s(oi,"P",{});var ry=a(Pl);Ov=i(ry,"Example:"),ry.forEach(t),Gv=l(oi),_(Ua.$$.fragment,oi),oi.forEach(t),ei.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(yy)),c(y,"id","t5"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(q,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ae,"rel","nofollow"),c(N,"href","#training"),c(Ne,"href","#inference"),c(Le,"href","#scripts"),c(_o,"href","https://huggingface.co/t5-small"),c(_o,"rel","nofollow"),c(go,"href","https://huggingface.co/t5-base"),c(go,"rel","nofollow"),c(To,"href","https://huggingface.co/t5-large"),c(To,"rel","nofollow"),c(ko,"href","https://huggingface.co/t5-3b"),c(ko,"rel","nofollow"),c(vo,"href","https://huggingface.co/t5-11b"),c(vo,"rel","nofollow"),c(Ja,"href","t5v1.1"),c(Za,"href","mt5"),c(Xa,"href","byt5"),c(bo,"href","https://huggingface.co/models?search=t5"),c(bo,"rel","nofollow"),c(wo,"href","https://huggingface.co/thomwolf"),c(wo,"rel","nofollow"),c(yo,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(yo,"rel","nofollow"),c(Qa,"id","training"),c(jn,"id","training"),c(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jn,"href","#training"),c(Jt,"class","relative group"),c(er,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(tr,"href","/docs/transformers/master/en/model_doc/mt5#transformers.T5Tokenizer"),c(Eo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c(Eo,"rel","nofollow"),c(jo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(jo,"rel","nofollow"),c(Po,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Po,"rel","nofollow"),c(Co,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Co,"rel","nofollow"),c(or,"id","inference"),c(Pn,"id","inference"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#inference"),c(Qt,"class","relative group"),c(sr,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(Lo,"href","https://huggingface.co/blog/how-to-generate"),c(Lo,"rel","nofollow"),c(Io,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Io,"rel","nofollow"),c(ar,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(ir,"id","scripts"),c(Cn,"id","performance"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#performance"),c(en,"class","relative group"),c(Go,"href","https://github.com/NVIDIA/apex#quick-start"),c(Go,"rel","nofollow"),c(An,"id","example-scripts"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#example-scripts"),c(tn,"class","relative group"),c(Uo,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Uo,"rel","nofollow"),c(Wo,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Wo,"rel","nofollow"),c(Ro,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(Ro,"rel","nofollow"),c(Ho,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Ho,"rel","nofollow"),c(Vo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Vo,"rel","nofollow"),c(Ko,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Ko,"rel","nofollow"),c(Yo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Yo,"rel","nofollow"),c(Ln,"id","transformers.T5Config"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5Config"),c(on,"class","relative group"),c(lr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Model"),c(cr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model"),c(Xo,"href","https://huggingface.co/t5-small"),c(Xo,"rel","nofollow"),c(pr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(hr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(bt,"class","docstring"),c(In,"id","transformers.T5Tokenizer"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5Tokenizer"),c(an,"class","relative group"),c(ns,"href","https://github.com/google/sentencepiece"),c(ns,"rel","nofollow"),c(ur,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(jt,"class","docstring"),c(Dn,"class","docstring"),c(Sn,"class","docstring"),c(vd,"class","docstring"),c(ie,"class","docstring"),c(On,"id","transformers.T5TokenizerFast"),c(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(On,"href","#transformers.T5TokenizerFast"),c(rn,"class","relative group"),c(ps,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(ps,"rel","nofollow"),c(_r,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ft,"class","docstring"),c(Gn,"class","docstring"),c(Se,"class","docstring"),c(Bn,"id","transformers.T5Model"),c(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bn,"href","#transformers.T5Model"),c(ln,"class","relative group"),c(ks,"href","https://arxiv.org/abs/1910.10683"),c(ks,"rel","nofollow"),c(kr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ws,"rel","nofollow"),c(vr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5Model"),c(We,"class","docstring"),c(Re,"class","docstring"),c(gt,"class","docstring"),c(Z,"class","docstring"),c(Wn,"id","transformers.T5ForConditionalGeneration"),c(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wn,"href","#transformers.T5ForConditionalGeneration"),c(pn,"class","relative group"),c(Cs,"href","https://arxiv.org/abs/1910.10683"),c(Cs,"rel","nofollow"),c(br,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ls,"rel","nofollow"),c(wr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(Tt,"class","docstring"),c(X,"class","docstring"),c(Hn,"id","transformers.T5EncoderModel"),c(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Hn,"href","#transformers.T5EncoderModel"),c(un,"class","relative group"),c(Hs,"href","https://arxiv.org/abs/1910.10683"),c(Hs,"rel","nofollow"),c(yr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ys,"rel","nofollow"),c(zr,"href","/docs/transformers/master/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(kt,"class","docstring"),c(Q,"class","docstring"),c(Kn,"id","transformers.TFT5Model"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.TFT5Model"),c(fn,"class","relative group"),c(aa,"href","https://arxiv.org/abs/1910.10683"),c(aa,"rel","nofollow"),c($r,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(da,"rel","nofollow"),c(xr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5Model"),c(Je,"class","docstring"),c(de,"class","docstring"),c(Zn,"id","transformers.TFT5ForConditionalGeneration"),c(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zn,"href","#transformers.TFT5ForConditionalGeneration"),c(gn,"class","relative group"),c(fa,"href","https://arxiv.org/abs/1910.10683"),c(fa,"rel","nofollow"),c(Er,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ta,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ta,"rel","nofollow"),c(qr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Ze,"class","docstring"),c(le,"class","docstring"),c(eo,"id","transformers.TFT5EncoderModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.TFT5EncoderModel"),c(kn,"class","relative group"),c(za,"href","https://arxiv.org/abs/1910.10683"),c(za,"rel","nofollow"),c(jr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ea,"rel","nofollow"),c(Fr,"href","/docs/transformers/master/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(oo,"id","transformers.FlaxT5Model"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.FlaxT5Model"),c(bn,"class","relative group"),c(Qe,"class","docstring"),c(Mt,"class","docstring"),c(Pt,"class","docstring"),c(yt,"class","docstring"),c(ao,"id","transformers.FlaxT5ForConditionalGeneration"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.FlaxT5ForConditionalGeneration"),c(yn,"class","relative group"),c(et,"class","docstring"),c(Ct,"class","docstring"),c(At,"class","docstring"),c(zt,"class","docstring")},m(n,h){e(document.head,u),p(n,x,h),p(n,b,h),e(b,y),e(y,$),g(z,$,null),e(b,w),e(b,E),e(E,Ee),p(n,oe,h),p(n,q,h),e(q,ee),e(ee,O),g(se,O,null),e(q,qe),e(q,G),e(G,je),p(n,ve,h),p(n,B,h),e(B,I),e(B,ae),e(ae,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,be,h),p(n,ue,h),e(ue,U),e(U,Fe),p(n,we,h),p(n,M,h),e(M,Me),p(n,H,h),p(n,V,h),e(V,me),e(me,A),e(A,Pe),e(A,fe),e(fe,D),e(A,Ce),e(A,W),e(W,Ae),e(A,m),e(V,j),e(V,te),e(te,Oe),e(Oe,lt),e(V,S),e(V,Ge),e(Ge,ne),e(ne,ct),e(ne,N),e(N,Y),e(ne,pt),e(ne,Ne),e(Ne,J),e(ne,ht),e(ne,Le),e(Le,Ie),e(ne,ut),p(n,Wl,h),p(n,Va,h),e(Va,Lp),p(n,Rl,h),p(n,Be,h),e(Be,si),e(si,ai),e(ai,_o),e(_o,Ip),e(Be,Dp),e(Be,ri),e(ri,ii),e(ii,go),e(go,Sp),e(Be,Op),e(Be,di),e(di,li),e(li,To),e(To,Gp),e(Be,Bp),e(Be,ci),e(ci,pi),e(pi,ko),e(ko,Up),e(Be,Wp),e(Be,hi),e(hi,Ka),e(Ka,vo),e(vo,Rp),e(Ka,Hp),p(n,Hl,h),p(n,Ya,h),e(Ya,Vp),p(n,Vl,h),p(n,xt,h),e(xt,ui),e(ui,$n),e($n,mi),e(mi,Kp),e($n,Yp),e($n,Ja),e(Ja,Jp),e($n,Zp),e(xt,Xp),e(xt,fi),e(fi,xn),e(xn,_i),e(_i,Qp),e(xn,eh),e(xn,Za),e(Za,th),e(xn,nh),e(xt,oh),e(xt,gi),e(gi,En),e(En,Ti),e(Ti,sh),e(En,ah),e(En,Xa),e(Xa,rh),e(En,ih),p(n,Kl,h),p(n,qn,h),e(qn,dh),e(qn,bo),e(bo,lh),e(qn,ch),p(n,Yl,h),p(n,Et,h),e(Et,ph),e(Et,wo),e(wo,hh),e(Et,uh),e(Et,yo),e(yo,mh),e(Et,fh),p(n,Jl,h),p(n,Qa,h),p(n,Zl,h),p(n,Jt,h),e(Jt,jn),e(jn,ki),g(zo,ki,null),e(Jt,_h),e(Jt,vi),e(vi,gh),p(n,Xl,h),p(n,mt,h),e(mt,Th),e(mt,bi),e(bi,kh),e(mt,vh),e(mt,wi),e(wi,bh),e(mt,wh),e(mt,yi),e(yi,yh),e(mt,zh),p(n,Ql,h),p(n,Fn,h),e(Fn,$h),e(Fn,er),e(er,xh),e(Fn,Eh),p(n,ec,h),p(n,Mn,h),e(Mn,dt),e(dt,zi),e(zi,qh),e(dt,jh),e(dt,_e),e(_e,Fh),e(_e,$i),e($i,Mh),e(_e,Ph),e(_e,xi),e(xi,Ch),e(_e,Ah),e(_e,Ei),e(Ei,Nh),e(_e,Lh),e(_e,qi),e(qi,Ih),e(_e,Dh),e(_e,ji),e(ji,Sh),e(_e,Oh),e(_e,tr),e(tr,Gh),e(_e,Bh),e(dt,Uh),e(dt,Fi),e(Fi,Wh),e(dt,Rh),g($o,dt,null),e(dt,Hh),e(dt,xo),e(xo,Vh),e(xo,Eo),e(Eo,Kh),e(xo,Yh),e(Mn,Jh),e(Mn,ge),e(ge,Mi),e(Mi,Zh),e(ge,Xh),e(ge,Pi),e(Pi,Qh),e(ge,eu),g(qo,ge,null),e(ge,tu),e(ge,re),e(re,nu),e(re,Ci),e(Ci,ou),e(re,su),e(re,Ai),e(Ai,au),e(re,ru),e(re,Ni),e(Ni,iu),e(re,du),e(re,Li),e(Li,lu),e(re,cu),e(re,Ii),e(Ii,pu),e(re,hu),e(re,Di),e(Di,uu),e(re,mu),e(re,Si),e(Si,fu),e(re,_u),e(ge,gu),e(ge,Zt),e(Zt,Tu),e(Zt,Oi),e(Oi,ku),e(Zt,vu),e(Zt,Gi),e(Gi,bu),e(Zt,wu),e(ge,yu),e(ge,Te),e(Te,zu),e(Te,Bi),e(Bi,$u),e(Te,xu),e(Te,Ui),e(Ui,Eu),e(Te,qu),e(Te,Wi),e(Wi,ju),e(Te,Fu),e(Te,Ri),e(Ri,Mu),e(Te,Pu),e(Te,jo),e(jo,Cu),e(Te,Au),e(Te,Hi),e(Hi,Nu),e(Te,Lu),e(ge,Iu),g(Fo,ge,null),p(n,tc,h),p(n,nr,h),e(nr,Du),p(n,nc,h),p(n,qt,h),e(qt,Vi),e(Vi,Mo),e(Mo,Su),e(Mo,Ki),e(Ki,Ou),e(Mo,Gu),e(qt,Bu),e(qt,Yi),e(Yi,Xt),e(Xt,Uu),e(Xt,Po),e(Po,Wu),e(Xt,Ru),e(Xt,Co),e(Co,Hu),e(Xt,Vu),e(qt,Ku),e(qt,Ji),e(Ji,Ao),e(Ao,Yu),e(Ao,Zi),e(Zi,Ju),e(Ao,Zu),p(n,oc,h),p(n,or,h),p(n,sc,h),p(n,Qt,h),e(Qt,Pn),e(Pn,Xi),g(No,Xi,null),e(Qt,Xu),e(Qt,Qi),e(Qi,Qu),p(n,ac,h),p(n,ft,h),e(ft,em),e(ft,sr),e(sr,tm),e(ft,nm),e(ft,Lo),e(Lo,om),e(ft,sm),e(ft,Io),e(Io,am),e(ft,rm),p(n,rc,h),g(Do,n,h),p(n,ic,h),p(n,Ue,h),e(Ue,im),e(Ue,ed),e(ed,dm),e(Ue,lm),e(Ue,td),e(td,cm),e(Ue,pm),e(Ue,ar),e(ar,hm),e(Ue,um),e(Ue,nd),e(nd,mm),e(Ue,fm),p(n,dc,h),p(n,rr,h),e(rr,_m),p(n,lc,h),g(So,n,h),p(n,cc,h),p(n,ir,h),p(n,pc,h),p(n,en,h),e(en,Cn),e(Cn,od),g(Oo,od,null),e(en,gm),e(en,sd),e(sd,Tm),p(n,hc,h),p(n,_t,h),e(_t,km),e(_t,Go),e(Go,vm),e(_t,bm),e(_t,ad),e(ad,wm),e(_t,ym),e(_t,rd),e(rd,zm),e(_t,$m),p(n,uc,h),p(n,tn,h),e(tn,An),e(An,id),g(Bo,id,null),e(tn,xm),e(tn,dd),e(dd,Em),p(n,mc,h),p(n,dr,h),e(dr,qm),p(n,fc,h),p(n,Nn,h),e(Nn,ld),e(ld,nn),e(nn,jm),e(nn,Uo),e(Uo,Fm),e(nn,Mm),e(nn,Wo),e(Wo,Pm),e(nn,Cm),e(Nn,Am),e(Nn,cd),e(cd,De),e(De,Nm),e(De,Ro),e(Ro,Lm),e(De,Im),e(De,Ho),e(Ho,Dm),e(De,Sm),e(De,Vo),e(Vo,Om),e(De,Gm),e(De,Ko),e(Ko,Bm),e(De,Um),e(De,Yo),e(Yo,Wm),e(De,Rm),p(n,_c,h),p(n,on,h),e(on,Ln),e(Ln,pd),g(Jo,pd,null),e(on,Hm),e(on,hd),e(hd,Vm),p(n,gc,h),p(n,bt,h),g(Zo,bt,null),e(bt,Km),e(bt,wt),e(wt,Ym),e(wt,lr),e(lr,Jm),e(wt,Zm),e(wt,cr),e(cr,Xm),e(wt,Qm),e(wt,Xo),e(Xo,ef),e(wt,tf),e(bt,nf),e(bt,sn),e(sn,of),e(sn,pr),e(pr,sf),e(sn,af),e(sn,hr),e(hr,rf),e(sn,df),p(n,Tc,h),p(n,an,h),e(an,In),e(In,ud),g(Qo,ud,null),e(an,lf),e(an,md),e(md,cf),p(n,kc,h),p(n,ie,h),g(es,ie,null),e(ie,pf),e(ie,ts),e(ts,hf),e(ts,ns),e(ns,uf),e(ts,mf),e(ie,ff),e(ie,os),e(os,_f),e(os,ur),e(ur,gf),e(os,Tf),e(ie,kf),e(ie,jt),g(ss,jt,null),e(jt,vf),e(jt,fd),e(fd,bf),e(jt,wf),e(jt,as),e(as,mr),e(mr,yf),e(mr,_d),e(_d,zf),e(as,$f),e(as,fr),e(fr,xf),e(fr,gd),e(gd,Ef),e(ie,qf),e(ie,Dn),g(rs,Dn,null),e(Dn,jf),e(Dn,is),e(is,Ff),e(is,Td),e(Td,Mf),e(is,Pf),e(ie,Cf),e(ie,Sn),g(ds,Sn,null),e(Sn,Af),e(Sn,kd),e(kd,Nf),e(ie,Lf),e(ie,vd),p(n,vc,h),p(n,rn,h),e(rn,On),e(On,bd),g(ls,bd,null),e(rn,If),e(rn,wd),e(wd,Df),p(n,bc,h),p(n,Se,h),g(cs,Se,null),e(Se,Sf),e(Se,dn),e(dn,Of),e(dn,yd),e(yd,Gf),e(dn,Bf),e(dn,ps),e(ps,Uf),e(dn,Wf),e(Se,Rf),e(Se,hs),e(hs,Hf),e(hs,_r),e(_r,Vf),e(hs,Kf),e(Se,Yf),e(Se,Ft),g(us,Ft,null),e(Ft,Jf),e(Ft,zd),e(zd,Zf),e(Ft,Xf),e(Ft,ms),e(ms,gr),e(gr,Qf),e(gr,$d),e($d,e_),e(ms,t_),e(ms,Tr),e(Tr,n_),e(Tr,xd),e(xd,o_),e(Se,s_),e(Se,Gn),g(fs,Gn,null),e(Gn,a_),e(Gn,Ed),e(Ed,r_),p(n,wc,h),p(n,ln,h),e(ln,Bn),e(Bn,qd),g(_s,qd,null),e(ln,i_),e(ln,jd),e(jd,d_),p(n,yc,h),p(n,Z,h),g(gs,Z,null),e(Z,l_),e(Z,Fd),e(Fd,c_),e(Z,p_),e(Z,Ts),e(Ts,h_),e(Ts,ks),e(ks,u_),e(Ts,m_),e(Z,f_),e(Z,vs),e(vs,__),e(vs,kr),e(kr,g_),e(vs,T_),e(Z,k_),e(Z,bs),e(bs,v_),e(bs,ws),e(ws,b_),e(bs,w_),e(Z,y_),e(Z,We),g(ys,We,null),e(We,z_),e(We,cn),e(cn,$_),e(cn,vr),e(vr,x_),e(cn,E_),e(cn,Md),e(Md,q_),e(cn,j_),e(We,F_),g(Un,We,null),e(We,M_),e(We,Pd),e(Pd,P_),e(We,C_),g(zs,We,null),e(Z,A_),e(Z,Re),g($s,Re,null),e(Re,N_),e(Re,Cd),e(Cd,L_),e(Re,I_),e(Re,Ad),e(Ad,D_),e(Re,S_),e(Re,Nd),e(Nd,O_),e(Re,G_),g(xs,Re,null),e(Z,B_),e(Z,gt),g(Es,gt,null),e(gt,U_),e(gt,Ld),e(Ld,W_),e(gt,R_),e(gt,Id),e(Id,H_),e(gt,V_),g(qs,gt,null),p(n,zc,h),p(n,pn,h),e(pn,Wn),e(Wn,Dd),g(js,Dd,null),e(pn,K_),e(pn,Sd),e(Sd,Y_),p(n,$c,h),p(n,X,h),g(Fs,X,null),e(X,J_),e(X,Ms),e(Ms,Z_),e(Ms,Od),e(Od,X_),e(Ms,Q_),e(X,eg),e(X,Ps),e(Ps,tg),e(Ps,Cs),e(Cs,ng),e(Ps,og),e(X,sg),e(X,As),e(As,ag),e(As,br),e(br,rg),e(As,ig),e(X,dg),e(X,Ns),e(Ns,lg),e(Ns,Ls),e(Ls,cg),e(Ns,pg),e(X,hg),e(X,He),g(Is,He,null),e(He,ug),e(He,hn),e(hn,mg),e(hn,wr),e(wr,fg),e(hn,_g),e(hn,Gd),e(Gd,gg),e(hn,Tg),e(He,kg),g(Rn,He,null),e(He,vg),e(He,Bd),e(Bd,bg),e(He,wg),g(Ds,He,null),e(X,yg),e(X,Ve),g(Ss,Ve,null),e(Ve,zg),e(Ve,Ud),e(Ud,$g),e(Ve,xg),e(Ve,Wd),e(Wd,Eg),e(Ve,qg),e(Ve,Rd),e(Rd,jg),e(Ve,Fg),g(Os,Ve,null),e(X,Mg),e(X,Tt),g(Gs,Tt,null),e(Tt,Pg),e(Tt,Hd),e(Hd,Cg),e(Tt,Ag),e(Tt,Vd),e(Vd,Ng),e(Tt,Lg),g(Bs,Tt,null),p(n,xc,h),p(n,un,h),e(un,Hn),e(Hn,Kd),g(Us,Kd,null),e(un,Ig),e(un,Yd),e(Yd,Dg),p(n,Ec,h),p(n,Q,h),g(Ws,Q,null),e(Q,Sg),e(Q,Jd),e(Jd,Og),e(Q,Gg),e(Q,Rs),e(Rs,Bg),e(Rs,Hs),e(Hs,Ug),e(Rs,Wg),e(Q,Rg),e(Q,Vs),e(Vs,Hg),e(Vs,yr),e(yr,Vg),e(Vs,Kg),e(Q,Yg),e(Q,Ks),e(Ks,Jg),e(Ks,Ys),e(Ys,Zg),e(Ks,Xg),e(Q,Qg),e(Q,Ke),g(Js,Ke,null),e(Ke,eT),e(Ke,mn),e(mn,tT),e(mn,zr),e(zr,nT),e(mn,oT),e(mn,Zd),e(Zd,sT),e(mn,aT),e(Ke,rT),g(Vn,Ke,null),e(Ke,iT),e(Ke,Xd),e(Xd,dT),e(Ke,lT),g(Zs,Ke,null),e(Q,cT),e(Q,Ye),g(Xs,Ye,null),e(Ye,pT),e(Ye,Qd),e(Qd,hT),e(Ye,uT),e(Ye,el),e(el,mT),e(Ye,fT),e(Ye,tl),e(tl,_T),e(Ye,gT),g(Qs,Ye,null),e(Q,TT),e(Q,kt),g(ea,kt,null),e(kt,kT),e(kt,nl),e(nl,vT),e(kt,bT),e(kt,ol),e(ol,wT),e(kt,yT),g(ta,kt,null),p(n,qc,h),p(n,fn,h),e(fn,Kn),e(Kn,sl),g(na,sl,null),e(fn,zT),e(fn,al),e(al,$T),p(n,jc,h),p(n,de,h),g(oa,de,null),e(de,xT),e(de,rl),e(rl,ET),e(de,qT),e(de,sa),e(sa,jT),e(sa,aa),e(aa,FT),e(sa,MT),e(de,PT),e(de,ra),e(ra,CT),e(ra,$r),e($r,AT),e(ra,NT),e(de,LT),e(de,ia),e(ia,IT),e(ia,da),e(da,DT),e(ia,ST),e(de,OT),g(Yn,de,null),e(de,GT),e(de,Je),g(la,Je,null),e(Je,BT),e(Je,_n),e(_n,UT),e(_n,xr),e(xr,WT),e(_n,RT),e(_n,il),e(il,HT),e(_n,VT),e(Je,KT),g(Jn,Je,null),e(Je,YT),e(Je,dl),e(dl,JT),e(Je,ZT),g(ca,Je,null),p(n,Fc,h),p(n,gn,h),e(gn,Zn),e(Zn,ll),g(pa,ll,null),e(gn,XT),e(gn,cl),e(cl,QT),p(n,Mc,h),p(n,le,h),g(ha,le,null),e(le,ek),e(le,ua),e(ua,tk),e(ua,pl),e(pl,nk),e(ua,ok),e(le,sk),e(le,ma),e(ma,ak),e(ma,fa),e(fa,rk),e(ma,ik),e(le,dk),e(le,_a),e(_a,lk),e(_a,Er),e(Er,ck),e(_a,pk),e(le,hk),e(le,ga),e(ga,uk),e(ga,Ta),e(Ta,mk),e(ga,fk),e(le,_k),g(Xn,le,null),e(le,gk),e(le,Ze),g(ka,Ze,null),e(Ze,Tk),e(Ze,Tn),e(Tn,kk),e(Tn,qr),e(qr,vk),e(Tn,bk),e(Tn,hl),e(hl,wk),e(Tn,yk),e(Ze,zk),g(Qn,Ze,null),e(Ze,$k),e(Ze,ul),e(ul,xk),e(Ze,Ek),g(va,Ze,null),p(n,Pc,h),p(n,kn,h),e(kn,eo),e(eo,ml),g(ba,ml,null),e(kn,qk),e(kn,fl),e(fl,jk),p(n,Cc,h),p(n,ce,h),g(wa,ce,null),e(ce,Fk),e(ce,_l),e(_l,Mk),e(ce,Pk),e(ce,ya),e(ya,Ck),e(ya,za),e(za,Ak),e(ya,Nk),e(ce,Lk),e(ce,$a),e($a,Ik),e($a,jr),e(jr,Dk),e($a,Sk),e(ce,Ok),e(ce,xa),e(xa,Gk),e(xa,Ea),e(Ea,Bk),e(xa,Uk),e(ce,Wk),g(to,ce,null),e(ce,Rk),e(ce,Xe),g(qa,Xe,null),e(Xe,Hk),e(Xe,vn),e(vn,Vk),e(vn,Fr),e(Fr,Kk),e(vn,Yk),e(vn,gl),e(gl,Jk),e(vn,Zk),e(Xe,Xk),g(no,Xe,null),e(Xe,Qk),e(Xe,Tl),e(Tl,ev),e(Xe,tv),g(ja,Xe,null),p(n,Ac,h),p(n,bn,h),e(bn,oo),e(oo,kl),g(Fa,kl,null),e(bn,nv),e(bn,vl),e(vl,ov),p(n,Nc,h),p(n,yt,h),e(yt,Qe),g(Ma,Qe,null),e(Qe,sv),e(Qe,wn),e(wn,av),e(wn,bl),e(bl,rv),e(wn,iv),e(wn,wl),e(wl,dv),e(wn,lv),e(Qe,cv),g(so,Qe,null),e(Qe,pv),e(Qe,yl),e(yl,hv),e(Qe,uv),g(Pa,Qe,null),e(yt,mv),e(yt,Mt),g(Ca,Mt,null),e(Mt,fv),e(Mt,zl),e(zl,_v),e(Mt,gv),g(Aa,Mt,null),e(yt,Tv),e(yt,Pt),g(Na,Pt,null),e(Pt,kv),e(Pt,$l),e($l,vv),e(Pt,bv),g(La,Pt,null),p(n,Lc,h),p(n,yn,h),e(yn,ao),e(ao,xl),g(Ia,xl,null),e(yn,wv),e(yn,El),e(El,yv),p(n,Ic,h),p(n,zt,h),e(zt,et),g(Da,et,null),e(et,zv),e(et,zn),e(zn,$v),e(zn,ql),e(ql,xv),e(zn,Ev),e(zn,jl),e(jl,qv),e(zn,jv),e(et,Fv),g(ro,et,null),e(et,Mv),e(et,Fl),e(Fl,Pv),e(et,Cv),g(Sa,et,null),e(zt,Av),e(zt,Ct),g(Oa,Ct,null),e(Ct,Nv),e(Ct,Ml),e(Ml,Lv),e(Ct,Iv),g(Ga,Ct,null),e(zt,Dv),e(zt,At),g(Ba,At,null),e(At,Sv),e(At,Pl),e(Pl,Ov),e(At,Gv),g(Ua,At,null),Dc=!0},p(n,[h]){const Wa={};h&2&&(Wa.$$scope={dirty:h,ctx:n}),Un.$set(Wa);const Cl={};h&2&&(Cl.$$scope={dirty:h,ctx:n}),Rn.$set(Cl);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:n}),Vn.$set(Al);const Nl={};h&2&&(Nl.$$scope={dirty:h,ctx:n}),Yn.$set(Nl);const Ra={};h&2&&(Ra.$$scope={dirty:h,ctx:n}),Jn.$set(Ra);const Ll={};h&2&&(Ll.$$scope={dirty:h,ctx:n}),Xn.$set(Ll);const Il={};h&2&&(Il.$$scope={dirty:h,ctx:n}),Qn.$set(Il);const Dl={};h&2&&(Dl.$$scope={dirty:h,ctx:n}),to.$set(Dl);const Ha={};h&2&&(Ha.$$scope={dirty:h,ctx:n}),no.$set(Ha);const Sl={};h&2&&(Sl.$$scope={dirty:h,ctx:n}),so.$set(Sl);const Ol={};h&2&&(Ol.$$scope={dirty:h,ctx:n}),ro.$set(Ol)},i(n){Dc||(T(z.$$.fragment,n),T(se.$$.fragment,n),T(zo.$$.fragment,n),T($o.$$.fragment,n),T(qo.$$.fragment,n),T(Fo.$$.fragment,n),T(No.$$.fragment,n),T(Do.$$.fragment,n),T(So.$$.fragment,n),T(Oo.$$.fragment,n),T(Bo.$$.fragment,n),T(Jo.$$.fragment,n),T(Zo.$$.fragment,n),T(Qo.$$.fragment,n),T(es.$$.fragment,n),T(ss.$$.fragment,n),T(rs.$$.fragment,n),T(ds.$$.fragment,n),T(ls.$$.fragment,n),T(cs.$$.fragment,n),T(us.$$.fragment,n),T(fs.$$.fragment,n),T(_s.$$.fragment,n),T(gs.$$.fragment,n),T(ys.$$.fragment,n),T(Un.$$.fragment,n),T(zs.$$.fragment,n),T($s.$$.fragment,n),T(xs.$$.fragment,n),T(Es.$$.fragment,n),T(qs.$$.fragment,n),T(js.$$.fragment,n),T(Fs.$$.fragment,n),T(Is.$$.fragment,n),T(Rn.$$.fragment,n),T(Ds.$$.fragment,n),T(Ss.$$.fragment,n),T(Os.$$.fragment,n),T(Gs.$$.fragment,n),T(Bs.$$.fragment,n),T(Us.$$.fragment,n),T(Ws.$$.fragment,n),T(Js.$$.fragment,n),T(Vn.$$.fragment,n),T(Zs.$$.fragment,n),T(Xs.$$.fragment,n),T(Qs.$$.fragment,n),T(ea.$$.fragment,n),T(ta.$$.fragment,n),T(na.$$.fragment,n),T(oa.$$.fragment,n),T(Yn.$$.fragment,n),T(la.$$.fragment,n),T(Jn.$$.fragment,n),T(ca.$$.fragment,n),T(pa.$$.fragment,n),T(ha.$$.fragment,n),T(Xn.$$.fragment,n),T(ka.$$.fragment,n),T(Qn.$$.fragment,n),T(va.$$.fragment,n),T(ba.$$.fragment,n),T(wa.$$.fragment,n),T(to.$$.fragment,n),T(qa.$$.fragment,n),T(no.$$.fragment,n),T(ja.$$.fragment,n),T(Fa.$$.fragment,n),T(Ma.$$.fragment,n),T(so.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(Aa.$$.fragment,n),T(Na.$$.fragment,n),T(La.$$.fragment,n),T(Ia.$$.fragment,n),T(Da.$$.fragment,n),T(ro.$$.fragment,n),T(Sa.$$.fragment,n),T(Oa.$$.fragment,n),T(Ga.$$.fragment,n),T(Ba.$$.fragment,n),T(Ua.$$.fragment,n),Dc=!0)},o(n){k(z.$$.fragment,n),k(se.$$.fragment,n),k(zo.$$.fragment,n),k($o.$$.fragment,n),k(qo.$$.fragment,n),k(Fo.$$.fragment,n),k(No.$$.fragment,n),k(Do.$$.fragment,n),k(So.$$.fragment,n),k(Oo.$$.fragment,n),k(Bo.$$.fragment,n),k(Jo.$$.fragment,n),k(Zo.$$.fragment,n),k(Qo.$$.fragment,n),k(es.$$.fragment,n),k(ss.$$.fragment,n),k(rs.$$.fragment,n),k(ds.$$.fragment,n),k(ls.$$.fragment,n),k(cs.$$.fragment,n),k(us.$$.fragment,n),k(fs.$$.fragment,n),k(_s.$$.fragment,n),k(gs.$$.fragment,n),k(ys.$$.fragment,n),k(Un.$$.fragment,n),k(zs.$$.fragment,n),k($s.$$.fragment,n),k(xs.$$.fragment,n),k(Es.$$.fragment,n),k(qs.$$.fragment,n),k(js.$$.fragment,n),k(Fs.$$.fragment,n),k(Is.$$.fragment,n),k(Rn.$$.fragment,n),k(Ds.$$.fragment,n),k(Ss.$$.fragment,n),k(Os.$$.fragment,n),k(Gs.$$.fragment,n),k(Bs.$$.fragment,n),k(Us.$$.fragment,n),k(Ws.$$.fragment,n),k(Js.$$.fragment,n),k(Vn.$$.fragment,n),k(Zs.$$.fragment,n),k(Xs.$$.fragment,n),k(Qs.$$.fragment,n),k(ea.$$.fragment,n),k(ta.$$.fragment,n),k(na.$$.fragment,n),k(oa.$$.fragment,n),k(Yn.$$.fragment,n),k(la.$$.fragment,n),k(Jn.$$.fragment,n),k(ca.$$.fragment,n),k(pa.$$.fragment,n),k(ha.$$.fragment,n),k(Xn.$$.fragment,n),k(ka.$$.fragment,n),k(Qn.$$.fragment,n),k(va.$$.fragment,n),k(ba.$$.fragment,n),k(wa.$$.fragment,n),k(to.$$.fragment,n),k(qa.$$.fragment,n),k(no.$$.fragment,n),k(ja.$$.fragment,n),k(Fa.$$.fragment,n),k(Ma.$$.fragment,n),k(so.$$.fragment,n),k(Pa.$$.fragment,n),k(Ca.$$.fragment,n),k(Aa.$$.fragment,n),k(Na.$$.fragment,n),k(La.$$.fragment,n),k(Ia.$$.fragment,n),k(Da.$$.fragment,n),k(ro.$$.fragment,n),k(Sa.$$.fragment,n),k(Oa.$$.fragment,n),k(Ga.$$.fragment,n),k(Ba.$$.fragment,n),k(Ua.$$.fragment,n),Dc=!1},d(n){t(u),n&&t(x),n&&t(b),v(z),n&&t(oe),n&&t(q),v(se),n&&t(ve),n&&t(B),n&&t(C),n&&t(he),n&&t(be),n&&t(ue),n&&t(we),n&&t(M),n&&t(H),n&&t(V),n&&t(Wl),n&&t(Va),n&&t(Rl),n&&t(Be),n&&t(Hl),n&&t(Ya),n&&t(Vl),n&&t(xt),n&&t(Kl),n&&t(qn),n&&t(Yl),n&&t(Et),n&&t(Jl),n&&t(Qa),n&&t(Zl),n&&t(Jt),v(zo),n&&t(Xl),n&&t(mt),n&&t(Ql),n&&t(Fn),n&&t(ec),n&&t(Mn),v($o),v(qo),v(Fo),n&&t(tc),n&&t(nr),n&&t(nc),n&&t(qt),n&&t(oc),n&&t(or),n&&t(sc),n&&t(Qt),v(No),n&&t(ac),n&&t(ft),n&&t(rc),v(Do,n),n&&t(ic),n&&t(Ue),n&&t(dc),n&&t(rr),n&&t(lc),v(So,n),n&&t(cc),n&&t(ir),n&&t(pc),n&&t(en),v(Oo),n&&t(hc),n&&t(_t),n&&t(uc),n&&t(tn),v(Bo),n&&t(mc),n&&t(dr),n&&t(fc),n&&t(Nn),n&&t(_c),n&&t(on),v(Jo),n&&t(gc),n&&t(bt),v(Zo),n&&t(Tc),n&&t(an),v(Qo),n&&t(kc),n&&t(ie),v(es),v(ss),v(rs),v(ds),n&&t(vc),n&&t(rn),v(ls),n&&t(bc),n&&t(Se),v(cs),v(us),v(fs),n&&t(wc),n&&t(ln),v(_s),n&&t(yc),n&&t(Z),v(gs),v(ys),v(Un),v(zs),v($s),v(xs),v(Es),v(qs),n&&t(zc),n&&t(pn),v(js),n&&t($c),n&&t(X),v(Fs),v(Is),v(Rn),v(Ds),v(Ss),v(Os),v(Gs),v(Bs),n&&t(xc),n&&t(un),v(Us),n&&t(Ec),n&&t(Q),v(Ws),v(Js),v(Vn),v(Zs),v(Xs),v(Qs),v(ea),v(ta),n&&t(qc),n&&t(fn),v(na),n&&t(jc),n&&t(de),v(oa),v(Yn),v(la),v(Jn),v(ca),n&&t(Fc),n&&t(gn),v(pa),n&&t(Mc),n&&t(le),v(ha),v(Xn),v(ka),v(Qn),v(va),n&&t(Pc),n&&t(kn),v(ba),n&&t(Cc),n&&t(ce),v(wa),v(to),v(qa),v(no),v(ja),n&&t(Ac),n&&t(bn),v(Fa),n&&t(Nc),n&&t(yt),v(Ma),v(so),v(Pa),v(Ca),v(Aa),v(Na),v(La),n&&t(Lc),n&&t(yn),v(Ia),n&&t(Ic),n&&t(zt),v(Da),v(ro),v(Sa),v(Oa),v(Ga),v(Ba),v(Ua)}}}const yy={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function zy(L,u,x){let{fw:b}=u;return L.$$set=y=>{"fw"in y&&x(0,b=y.fw)},[b]}class My extends iy{constructor(u){super();dy(this,u,zy,wy,ly,{fw:0})}}export{My as default,yy as metadata};
