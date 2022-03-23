import{S as qf,i as zf,s as Cf,e as n,k as l,w as v,t as r,M as Pf,c as s,d as t,m as d,a,x as b,h as i,b as c,F as e,g as f,y as w,q as y,o as k,B as L,v as jf}from"../../chunks/vendor-6b77c823.js";import{T as rt}from"../../chunks/Tip-39098574.js";import{D as te}from"../../chunks/Docstring-abef54e3.js";import{C as it}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ke}from"../../chunks/IconCopyLink-7a11ce68.js";function Of(R){let m,M,u,g,$,_,T,X,I,W;return{c(){m=n("p"),M=r("TransformerXL does "),u=n("strong"),g=r("not"),$=r(" work with "),_=n("em"),T=r("torch.nn.DataParallel"),X=r(" due to a bug in PyTorch, see "),I=n("a"),W=r("issue #36035"),this.h()},l(x){m=s(x,"P",{});var C=a(m);M=i(C,"TransformerXL does "),u=s(C,"STRONG",{});var O=a(u);g=i(O,"not"),O.forEach(t),$=i(C," work with "),_=s(C,"EM",{});var K=a(_);T=i(K,"torch.nn.DataParallel"),K.forEach(t),X=i(C," due to a bug in PyTorch, see "),I=s(C,"A",{href:!0,rel:!0});var ae=a(I);W=i(ae,"issue #36035"),ae.forEach(t),C.forEach(t),this.h()},h(){c(I,"href","https://github.com/pytorch/pytorch/issues/36035"),c(I,"rel","nofollow")},m(x,C){f(x,m,C),e(m,M),e(m,u),e(u,g),e(m,$),e(m,_),e(_,T),e(m,X),e(m,I),e(I,W)},d(x){x&&t(m)}}}function Sf(R){let m,M,u,g,$;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){m=s(_,"P",{});var T=a(m);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,m,T),e(m,M),e(m,u),e(u,g),e(m,$)},d(_){_&&t(m)}}}function Nf(R){let m,M,u,g,$;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){m=s(_,"P",{});var T=a(m);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,m,T),e(m,M),e(m,u),e(u,g),e(m,$)},d(_){_&&t(m)}}}function Af(R){let m,M,u,g,$;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){m=s(_,"P",{});var T=a(m);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,m,T),e(m,M),e(m,u),e(u,g),e(m,$)},d(_){_&&t(m)}}}function Hf(R){let m,M,u,g,$,_,T,X,I,W,x,C,O,K,ae,B,Le,ge,U,N,ne,re,F,z,ie,Q,_e,le,V,$e,Te,q,xe,G,oe,fe,Z,Xe,he,A,ve,j,Me;return{c(){m=n("p"),M=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),$=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),T=l(),X=n("li"),I=r("having all inputs as a list, tuple or dict in the first positional arguments."),W=l(),x=n("p"),C=r("This second option is useful when using "),O=n("code"),K=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),Le=r("model(inputs)"),ge=r("."),U=l(),N=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=l(),F=n("ul"),z=n("li"),ie=r("a single Tensor with "),Q=n("code"),_e=r("input_ids"),le=r(" only and nothing else: "),V=n("code"),$e=r("model(inputs_ids)"),Te=l(),q=n("li"),xe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),oe=r("model([input_ids, attention_mask])"),fe=r(" or "),Z=n("code"),Xe=r("model([input_ids, attention_mask, token_type_ids])"),he=l(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),Me=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){m=s(h,"P",{});var E=a(m);M=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(h),g=s(h,"UL",{});var de=a(g);$=s(de,"LI",{});var be=a($);_=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),T=d(de),X=s(de,"LI",{});var Be=a(X);I=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),de.forEach(t),W=d(h),x=s(h,"P",{});var H=a(x);C=i(H,"This second option is useful when using "),O=s(H,"CODE",{});var Ae=a(O);K=i(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ae=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(H,"CODE",{});var me=a(B);Le=i(me,"model(inputs)"),me.forEach(t),ge=i(H,"."),H.forEach(t),U=d(h),N=s(h,"P",{});var He=a(N);ne=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),re=d(h),F=s(h,"UL",{});var P=a(F);z=s(P,"LI",{});var S=a(z);ie=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var qe=a(Q);_e=i(qe,"input_ids"),qe.forEach(t),le=i(S," only and nothing else: "),V=s(S,"CODE",{});var we=a(V);$e=i(we,"model(inputs_ids)"),we.forEach(t),S.forEach(t),Te=d(P),q=s(P,"LI",{});var J=a(q);xe=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(J,"CODE",{});var ze=a(G);oe=i(ze,"model([input_ids, attention_mask])"),ze.forEach(t),fe=i(J," or "),Z=s(J,"CODE",{});var Ue=a(Z);Xe=i(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),J.forEach(t),he=d(P),A=s(P,"LI",{});var ye=a(A);ve=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ye,"CODE",{});var D=a(j);Me=i(D,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),D.forEach(t),ye.forEach(t),P.forEach(t)},m(h,E){f(h,m,E),e(m,M),f(h,u,E),f(h,g,E),e(g,$),e($,_),e(g,T),e(g,X),e(X,I),f(h,W,E),f(h,x,E),e(x,C),e(x,O),e(O,K),e(x,ae),e(x,B),e(B,Le),e(x,ge),f(h,U,E),f(h,N,E),e(N,ne),f(h,re,E),f(h,F,E),e(F,z),e(z,ie),e(z,Q),e(Q,_e),e(z,le),e(z,V),e(V,$e),e(F,Te),e(F,q),e(q,xe),e(q,G),e(G,oe),e(q,fe),e(q,Z),e(Z,Xe),e(F,he),e(F,A),e(A,ve),e(A,j),e(j,Me)},d(h){h&&t(m),h&&t(u),h&&t(g),h&&t(W),h&&t(x),h&&t(U),h&&t(N),h&&t(re),h&&t(F)}}}function Df(R){let m,M,u,g,$;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){m=s(_,"P",{});var T=a(m);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,m,T),e(m,M),e(m,u),e(u,g),e(m,$)},d(_){_&&t(m)}}}function If(R){let m,M,u,g,$,_,T,X,I,W,x,C,O,K,ae,B,Le,ge,U,N,ne,re,F,z,ie,Q,_e,le,V,$e,Te,q,xe,G,oe,fe,Z,Xe,he,A,ve,j,Me;return{c(){m=n("p"),M=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),$=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),T=l(),X=n("li"),I=r("having all inputs as a list, tuple or dict in the first positional arguments."),W=l(),x=n("p"),C=r("This second option is useful when using "),O=n("code"),K=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),Le=r("model(inputs)"),ge=r("."),U=l(),N=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=l(),F=n("ul"),z=n("li"),ie=r("a single Tensor with "),Q=n("code"),_e=r("input_ids"),le=r(" only and nothing else: "),V=n("code"),$e=r("model(inputs_ids)"),Te=l(),q=n("li"),xe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),oe=r("model([input_ids, attention_mask])"),fe=r(" or "),Z=n("code"),Xe=r("model([input_ids, attention_mask, token_type_ids])"),he=l(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),Me=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){m=s(h,"P",{});var E=a(m);M=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(h),g=s(h,"UL",{});var de=a(g);$=s(de,"LI",{});var be=a($);_=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),T=d(de),X=s(de,"LI",{});var Be=a(X);I=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),de.forEach(t),W=d(h),x=s(h,"P",{});var H=a(x);C=i(H,"This second option is useful when using "),O=s(H,"CODE",{});var Ae=a(O);K=i(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ae=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(H,"CODE",{});var me=a(B);Le=i(me,"model(inputs)"),me.forEach(t),ge=i(H,"."),H.forEach(t),U=d(h),N=s(h,"P",{});var He=a(N);ne=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),re=d(h),F=s(h,"UL",{});var P=a(F);z=s(P,"LI",{});var S=a(z);ie=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var qe=a(Q);_e=i(qe,"input_ids"),qe.forEach(t),le=i(S," only and nothing else: "),V=s(S,"CODE",{});var we=a(V);$e=i(we,"model(inputs_ids)"),we.forEach(t),S.forEach(t),Te=d(P),q=s(P,"LI",{});var J=a(q);xe=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(J,"CODE",{});var ze=a(G);oe=i(ze,"model([input_ids, attention_mask])"),ze.forEach(t),fe=i(J," or "),Z=s(J,"CODE",{});var Ue=a(Z);Xe=i(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),J.forEach(t),he=d(P),A=s(P,"LI",{});var ye=a(A);ve=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ye,"CODE",{});var D=a(j);Me=i(D,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),D.forEach(t),ye.forEach(t),P.forEach(t)},m(h,E){f(h,m,E),e(m,M),f(h,u,E),f(h,g,E),e(g,$),e($,_),e(g,T),e(g,X),e(X,I),f(h,W,E),f(h,x,E),e(x,C),e(x,O),e(O,K),e(x,ae),e(x,B),e(B,Le),e(x,ge),f(h,U,E),f(h,N,E),e(N,ne),f(h,re,E),f(h,F,E),e(F,z),e(z,ie),e(z,Q),e(Q,_e),e(z,le),e(z,V),e(V,$e),e(F,Te),e(F,q),e(q,xe),e(q,G),e(G,oe),e(q,fe),e(q,Z),e(Z,Xe),e(F,he),e(F,A),e(A,ve),e(A,j),e(j,Me)},d(h){h&&t(m),h&&t(u),h&&t(g),h&&t(W),h&&t(x),h&&t(U),h&&t(N),h&&t(re),h&&t(F)}}}function Wf(R){let m,M,u,g,$;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){m=s(_,"P",{});var T=a(m);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,m,T),e(m,M),e(m,u),e(u,g),e(m,$)},d(_){_&&t(m)}}}function Bf(R){let m,M,u,g,$,_,T,X,I,W,x,C,O,K,ae,B,Le,ge,U,N,ne,re,F,z,ie,Q,_e,le,V,$e,Te,q,xe,G,oe,fe,Z,Xe,he,A,ve,j,Me;return{c(){m=n("p"),M=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),$=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),T=l(),X=n("li"),I=r("having all inputs as a list, tuple or dict in the first positional arguments."),W=l(),x=n("p"),C=r("This second option is useful when using "),O=n("code"),K=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),Le=r("model(inputs)"),ge=r("."),U=l(),N=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=l(),F=n("ul"),z=n("li"),ie=r("a single Tensor with "),Q=n("code"),_e=r("input_ids"),le=r(" only and nothing else: "),V=n("code"),$e=r("model(inputs_ids)"),Te=l(),q=n("li"),xe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),oe=r("model([input_ids, attention_mask])"),fe=r(" or "),Z=n("code"),Xe=r("model([input_ids, attention_mask, token_type_ids])"),he=l(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),Me=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){m=s(h,"P",{});var E=a(m);M=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(h),g=s(h,"UL",{});var de=a(g);$=s(de,"LI",{});var be=a($);_=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),T=d(de),X=s(de,"LI",{});var Be=a(X);I=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),de.forEach(t),W=d(h),x=s(h,"P",{});var H=a(x);C=i(H,"This second option is useful when using "),O=s(H,"CODE",{});var Ae=a(O);K=i(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ae=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(H,"CODE",{});var me=a(B);Le=i(me,"model(inputs)"),me.forEach(t),ge=i(H,"."),H.forEach(t),U=d(h),N=s(h,"P",{});var He=a(N);ne=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),re=d(h),F=s(h,"UL",{});var P=a(F);z=s(P,"LI",{});var S=a(z);ie=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var qe=a(Q);_e=i(qe,"input_ids"),qe.forEach(t),le=i(S," only and nothing else: "),V=s(S,"CODE",{});var we=a(V);$e=i(we,"model(inputs_ids)"),we.forEach(t),S.forEach(t),Te=d(P),q=s(P,"LI",{});var J=a(q);xe=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(J,"CODE",{});var ze=a(G);oe=i(ze,"model([input_ids, attention_mask])"),ze.forEach(t),fe=i(J," or "),Z=s(J,"CODE",{});var Ue=a(Z);Xe=i(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),J.forEach(t),he=d(P),A=s(P,"LI",{});var ye=a(A);ve=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ye,"CODE",{});var D=a(j);Me=i(D,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),D.forEach(t),ye.forEach(t),P.forEach(t)},m(h,E){f(h,m,E),e(m,M),f(h,u,E),f(h,g,E),e(g,$),e($,_),e(g,T),e(g,X),e(X,I),f(h,W,E),f(h,x,E),e(x,C),e(x,O),e(O,K),e(x,ae),e(x,B),e(B,Le),e(x,ge),f(h,U,E),f(h,N,E),e(N,ne),f(h,re,E),f(h,F,E),e(F,z),e(z,ie),e(z,Q),e(Q,_e),e(z,le),e(z,V),e(V,$e),e(F,Te),e(F,q),e(q,xe),e(q,G),e(G,oe),e(q,fe),e(q,Z),e(Z,Xe),e(F,he),e(F,A),e(A,ve),e(A,j),e(j,Me)},d(h){h&&t(m),h&&t(u),h&&t(g),h&&t(W),h&&t(x),h&&t(U),h&&t(N),h&&t(re),h&&t(F)}}}function Uf(R){let m,M,u,g,$;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){m=s(_,"P",{});var T=a(m);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,m,T),e(m,M),e(m,u),e(u,g),e(m,$)},d(_){_&&t(m)}}}function Vf(R){let m,M,u,g,$,_,T,X,I,W,x,C,O,K,ae,B,Le,ge,U,N,ne,re,F,z,ie,Q,_e,le,V,$e,Te,q,xe,G,oe,fe,Z,Xe,he,A,ve,j,Me,h,E,de,be,Be,H,Ae,me,He,P,S,qe,we,J,ze,Ue,ye,D,Kt,Ha,Ge,Da,dn,Ia,Wa,cn,Ba,Ua,Gt,Va,Ra,Ka,lt,Ga,fn,Ya,Qa,hn,Za,Ja,er,An,tr,or,Yt,Is,dt,Mt,Hn,Qt,nr,Dn,sr,Ws,De,Zt,ar,Jt,rr,eo,ir,lr,dr,to,cr,mn,fr,hr,mr,pn,oo,Bs,ct,Et,In,no,pr,Wn,ur,Us,ft,so,gr,Bn,_r,Vs,ht,ao,Tr,Un,vr,Rs,mt,ro,br,Vn,wr,Ks,pt,io,yr,Rn,kr,Gs,ut,Ft,Kn,lo,Lr,Gn,$r,Ys,Ee,co,xr,Yn,Xr,Mr,fo,Er,un,Fr,qr,zr,ho,Cr,mo,Pr,jr,Or,Ce,po,Sr,gt,Nr,gn,Ar,Hr,Qn,Dr,Ir,Wr,qt,Br,Zn,Ur,Vr,uo,Qs,_t,zt,Jn,go,Rr,es,Kr,Zs,Fe,_o,Gr,ts,Yr,Qr,To,Zr,_n,Jr,ei,ti,vo,oi,bo,ni,si,ai,Pe,wo,ri,Tt,ii,Tn,li,di,os,ci,fi,hi,Ct,mi,ns,pi,ui,yo,Js,vt,Pt,ss,ko,gi,as,_i,ea,se,Lo,Ti,rs,vi,bi,vn,bn,wi,yi,ki,Ie,Li,is,$i,xi,ls,Xi,Mi,ds,Ei,Fi,cs,qi,zi,Ci,$o,Pi,wn,ji,Oi,Si,xo,Ni,Xo,Ai,Hi,Di,Y,Mo,Ii,bt,Wi,yn,Bi,Ui,fs,Vi,Ri,Ki,jt,Gi,hs,Yi,Qi,Eo,Zi,Fo,Ji,ms,el,tl,qo,ol,zo,ta,wt,Ot,ps,Co,nl,us,sl,oa,pe,Po,al,gs,rl,il,jo,ll,kn,dl,cl,fl,Oo,hl,So,ml,pl,ul,St,gl,je,No,_l,yt,Tl,Ln,vl,bl,_s,wl,yl,kl,Nt,Ll,Ts,$l,xl,Ao,na,kt,At,vs,Ho,Xl,bs,Ml,sa,ue,Do,El,ws,Fl,ql,Io,zl,$n,Cl,Pl,jl,Wo,Ol,Bo,Sl,Nl,Al,Ht,Hl,Oe,Uo,Dl,Lt,Il,xn,Wl,Bl,ys,Ul,Vl,Rl,Dt,Kl,ks,Gl,Yl,Vo,aa,$t,It,Ls,Ro,Ql,$s,Zl,ra,ee,Ko,Jl,xs,ed,td,Xn,Mn,od,nd,sd,We,ad,Xs,rd,id,Ms,ld,dd,Es,cd,fd,Fs,hd,md,pd,Go,ud,En,gd,_d,Td,Yo,vd,Qo,bd,wd,yd,Wt,kd,Se,Zo,Ld,xt,$d,Fn,xd,Xd,qs,Md,Ed,Fd,Bt,qd,zs,zd,Cd,Jo,ia,Xt,Ut,Cs,en,Pd,Ps,jd,la,tn,on,da,nn,sn,ca;return _=new Ke({}),K=new Ke({}),me=new rt({props:{warning:!0,$$slots:{default:[Of]},$$scope:{ctx:R}}}),we=new Ke({}),Kt=new te({props:{name:"class transformers.TransfoXLConfig",anchor:"transformers.TransfoXLConfig",parameters:[{name:"vocab_size",val:" = 267735"},{name:"cutoffs",val:" = [20000, 40000, 200000]"},{name:"d_model",val:" = 1024"},{name:"d_embed",val:" = 1024"},{name:"n_head",val:" = 16"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 4096"},{name:"div_val",val:" = 4"},{name:"pre_lnorm",val:" = False"},{name:"n_layer",val:" = 18"},{name:"mem_len",val:" = 1600"},{name:"clamp_len",val:" = 1000"},{name:"same_length",val:" = True"},{name:"proj_share_all_but_first",val:" = True"},{name:"attn_type",val:" = 0"},{name:"sample_softmax",val:" = -1"},{name:"adaptive",val:" = True"},{name:"dropout",val:" = 0.1"},{name:"dropatt",val:" = 0.0"},{name:"untie_r",val:" = True"},{name:"init",val:" = 'normal'"},{name:"init_range",val:" = 0.01"},{name:"proj_init_std",val:" = 0.01"},{name:"init_std",val:" = 0.02"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"eos_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/configuration_transfo_xl.py#L29",parametersDescription:[{anchor:"transformers.TransfoXLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 267735) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLModel">TransfoXLModel</a> or <a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TFTransfoXLModel">TFTransfoXLModel</a>.`,name:"vocab_size"},{anchor:"transformers.TransfoXLConfig.cutoffs",description:`<strong>cutoffs</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[20000, 40000, 200000]</code>) &#x2014;
Cutoffs for the adaptive softmax.`,name:"cutoffs"},{anchor:"transformers.TransfoXLConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the model&#x2019;s hidden states.`,name:"d_model"},{anchor:"transformers.TransfoXLConfig.d_embed",description:`<strong>d_embed</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the embeddings`,name:"d_embed"},{anchor:"transformers.TransfoXLConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.TransfoXLConfig.d_head",description:`<strong>d_head</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the model&#x2019;s heads.`,name:"d_head"},{anchor:"transformers.TransfoXLConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Inner dimension in FF`,name:"d_inner"},{anchor:"transformers.TransfoXLConfig.div_val",description:`<strong>div_val</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Divident value for adapative input and softmax`,name:"div_val"},{anchor:"transformers.TransfoXLConfig.pre_lnorm",description:`<strong>pre_lnorm</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply LayerNorm to the input instead of the output in the blocks.`,name:"pre_lnorm"},{anchor:"transformers.TransfoXLConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 18) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.TransfoXLConfig.mem_len",description:`<strong>mem_len</strong> (<code>int</code>, <em>optional</em>, defaults to 1600) &#x2014;
Length of the retained previous heads.`,name:"mem_len"},{anchor:"transformers.TransfoXLConfig.clamp_len",description:`<strong>clamp_len</strong> (<code>int</code>, <em>optional</em>, defaults to 1000) &#x2014;
Use the same pos embeddings after clamp_len.`,name:"clamp_len"},{anchor:"transformers.TransfoXLConfig.same_length",description:`<strong>same_length</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same attn length for all tokens`,name:"same_length"},{anchor:"transformers.TransfoXLConfig.proj_share_all_but_first",description:`<strong>proj_share_all_but_first</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
True to share all but first projs, False not to share.`,name:"proj_share_all_but_first"},{anchor:"transformers.TransfoXLConfig.attn_type",description:`<strong>attn_type</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Attention type. 0 for Transformer-XL, 1 for Shaw et al, 2 for Vaswani et al, 3 for Al Rfou et al.`,name:"attn_type"},{anchor:"transformers.TransfoXLConfig.sample_softmax",description:`<strong>sample_softmax</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
Number of samples in the sampled softmax.`,name:"sample_softmax"},{anchor:"transformers.TransfoXLConfig.adaptive",description:`<strong>adaptive</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use adaptive softmax.`,name:"adaptive"},{anchor:"transformers.TransfoXLConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.TransfoXLConfig.dropatt",description:`<strong>dropatt</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"dropatt"},{anchor:"transformers.TransfoXLConfig.untie_r",description:`<strong>untie_r</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether ot not to untie relative position biases.`,name:"untie_r"},{anchor:"transformers.TransfoXLConfig.init",description:`<strong>init</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;normal&quot;</code>) &#x2014;
Parameter initializer to use.`,name:"init"},{anchor:"transformers.TransfoXLConfig.init_range",description:`<strong>init_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.01) &#x2014;
Parameters initialized by U(-init_range, init_range).`,name:"init_range"},{anchor:"transformers.TransfoXLConfig.proj_init_std",description:`<strong>proj_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.01) &#x2014;
Parameters initialized by N(0, init_std)`,name:"proj_init_std"},{anchor:"transformers.TransfoXLConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
Parameters initialized by N(0, init_std)`,name:"init_std"},{anchor:"transformers.TransfoXLConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"}]}}),Yt=new it({props:{code:`from transformers import TransfoXLConfig, TransfoXLModel

# Initializing a Transformer XL configuration
configuration = TransfoXLConfig()

# Initializing a model from the configuration
model = TransfoXLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLConfig, TransfoXLModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Transformer XL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TransfoXLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Qt=new Ke({}),Zt=new te({props:{name:"class transformers.TransfoXLTokenizer",anchor:"transformers.TransfoXLTokenizer",parameters:[{name:"special",val:" = None"},{name:"min_freq",val:" = 0"},{name:"max_size",val:" = None"},{name:"lower_case",val:" = False"},{name:"delimiter",val:" = None"},{name:"vocab_file",val:" = None"},{name:"pretrained_vocab_file",val:": str = None"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '<eos>'"},{name:"additional_special_tokens",val:" = ['<formula>']"},{name:"language",val:" = 'en'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/tokenization_transfo_xl.py#L114",parametersDescription:[{anchor:"transformers.TransfoXLTokenizer.special",description:`<strong>special</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of special tokens (to be treated by the original implementation of this tokenizer).`,name:"special"},{anchor:"transformers.TransfoXLTokenizer.min_freq",description:`<strong>min_freq</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The minimum number of times a token has to be present in order to be kept in the vocabulary (otherwise it
will be mapped to <code>unk_token</code>).`,name:"min_freq"},{anchor:"transformers.TransfoXLTokenizer.max_size",description:`<strong>max_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum size of the vocabulary. If left unset, it will default to the size of the vocabulary found
after excluding the tokens according to the <code>min_freq</code> rule.`,name:"max_size"},{anchor:"transformers.TransfoXLTokenizer.lower_case",description:`<strong>lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"lower_case"},{anchor:"transformers.TransfoXLTokenizer.delimiter",description:`<strong>delimiter</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The delimiter used between tokens.`,name:"delimiter"},{anchor:"transformers.TransfoXLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
File containing the vocabulary (from the original implementation).`,name:"vocab_file"},{anchor:"transformers.TransfoXLTokenizer.pretrained_vocab_file",description:`<strong>pretrained_vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
File containing the vocabulary as saved with the <code>save_pretrained()</code> method.`,name:"pretrained_vocab_file"},{anchor:"transformers.TransfoXLTokenizer.never_split",description:`<strong>never_split</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tokens that should never be split. If no list is specified, will simply use the existing special
tokens.`,name:"never_split"},{anchor:"transformers.TransfoXLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TransfoXLTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;eos&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.TransfoXLTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;formula&gt;&quot;]</code>) &#x2014;
A list of additional special tokens (for the HuggingFace functionality).`,name:"additional_special_tokens"},{anchor:"transformers.TransfoXLTokenizer.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;en&quot;</code>) &#x2014;
The language of this tokenizer (used for mose preprocessing).`,name:"language"}]}}),oo=new te({props:{name:"save_vocabulary",anchor:"transformers.TransfoXLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/tokenization_transfo_xl.py#L300"}}),no=new Ke({}),so=new te({props:{name:"class transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": typing.List[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L607",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),ao=new te({props:{name:"class transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput",anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput",parameters:[{name:"losses",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_scores",val:": FloatTensor = None"},{name:"mems",val:": typing.List[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L672",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.losses",description:`<strong>losses</strong> (<code>torch.FloatTensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling losses (not reduced).`,name:"losses"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.prediction_scores",description:`<strong>prediction_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).`,name:"prediction_scores"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>()</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Reduced language modeling loss.`,name:"loss"}]}}),ro=new te({props:{name:"class transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput",anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"mems",val:": typing.List[tensorflow.python.framework.ops.Tensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L701",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),io=new te({props:{name:"class transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput",anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput",parameters:[{name:"prediction_scores",val:": Tensor = None"},{name:"mems",val:": typing.List[tensorflow.python.framework.ops.Tensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L732",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.losses",description:`<strong>losses</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling losses (not reduced).`,name:"losses"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.prediction_scores",description:`<strong>prediction_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).`,name:"prediction_scores"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),lo=new Ke({}),co=new te({props:{name:"class transformers.TransfoXLModel",anchor:"transformers.TransfoXLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L771",parametersDescription:[{anchor:"transformers.TransfoXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new te({props:{name:"forward",anchor:"transformers.TransfoXLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L875",parametersDescription:[{anchor:"transformers.TransfoXLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qt=new rt({props:{$$slots:{default:[Sf]},$$scope:{ctx:R}}}),uo=new it({props:{code:`from transformers import TransfoXLTokenizer, TransfoXLModel
import torch

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),go=new Ke({}),_o=new te({props:{name:"class transformers.TransfoXLLMHeadModel",anchor:"transformers.TransfoXLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1013",parametersDescription:[{anchor:"transformers.TransfoXLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new te({props:{name:"forward",anchor:"transformers.TransfoXLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1065",parametersDescription:[{anchor:"transformers.TransfoXLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLLMHeadModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TransfoXLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>losses</strong> (<code>torch.FloatTensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling losses (not reduced).</p>
</li>
<li>
<p><strong>prediction_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>()</code>, <em>optional</em>, returned when <code>labels</code> is provided)
Reduced language modeling loss.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ct=new rt({props:{$$slots:{default:[Nf]},$$scope:{ctx:R}}}),yo=new it({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLLMHeadModel

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLLMHeadModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ko=new Ke({}),Lo=new te({props:{name:"class transformers.TransfoXLForSequenceClassification",anchor:"transformers.TransfoXLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1198",parametersDescription:[{anchor:"transformers.TransfoXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mo=new te({props:{name:"forward",anchor:"transformers.TransfoXLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1209",parametersDescription:[{anchor:"transformers.TransfoXLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLSequenceClassifierOutputWithPast</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
<p><code>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLSequenceClassifierOutputWithPast</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),jt=new rt({props:{$$slots:{default:[Af]},$$scope:{ctx:R}}}),Eo=new it({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLForSequenceClassification

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Fo=new it({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),qo=new it({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLForSequenceClassification

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),zo=new it({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Co=new Ke({}),Po=new te({props:{name:"class transformers.TFTransfoXLModel",anchor:"transformers.TFTransfoXLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L878",parametersDescription:[{anchor:"transformers.TFTransfoXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new rt({props:{$$slots:{default:[Hf]},$$scope:{ctx:R}}}),No=new te({props:{name:"call",anchor:"transformers.TFTransfoXLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L883",parametersDescription:[{anchor:"transformers.TFTransfoXLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLModel.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nt=new rt({props:{$$slots:{default:[Df]},$$scope:{ctx:R}}}),Ao=new it({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLModel
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TFTransfoXLModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ho=new Ke({}),Do=new te({props:{name:"class transformers.TFTransfoXLLMHeadModel",anchor:"transformers.TFTransfoXLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L935",parametersDescription:[{anchor:"transformers.TFTransfoXLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new rt({props:{$$slots:{default:[If]},$$scope:{ctx:R}}}),Uo=new te({props:{name:"call",anchor:"transformers.TFTransfoXLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L963",parametersDescription:[{anchor:"transformers.TFTransfoXLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>losses</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling losses (not reduced).</p>
</li>
<li>
<p><strong>prediction_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new rt({props:{$$slots:{default:[Wf]},$$scope:{ctx:R}}}),Vo=new it({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLLMHeadModel
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TFTransfoXLLMHeadModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ro=new Ke({}),Ko=new te({props:{name:"class transformers.TFTransfoXLForSequenceClassification",anchor:"transformers.TFTransfoXLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L1057",parametersDescription:[{anchor:"transformers.TFTransfoXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new rt({props:{$$slots:{default:[Bf]},$$scope:{ctx:R}}}),Zo=new te({props:{name:"call",anchor:"transformers.TFTransfoXLForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L1072",parametersDescription:[{anchor:"transformers.TFTransfoXLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLSequenceClassifierOutputWithPast</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
`,returnType:`
<p><code>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLSequenceClassifierOutputWithPast</code>or <code>tuple(tf.Tensor)</code></p>
`}}),Bt=new rt({props:{$$slots:{default:[Uf]},$$scope:{ctx:R}}}),Jo=new it({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLForSequenceClassification
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TFTransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),en=new Ke({}),on=new te({props:{name:"class transformers.AdaptiveEmbedding",anchor:"transformers.AdaptiveEmbedding",parameters:[{name:"n_token",val:""},{name:"d_embed",val:""},{name:"d_proj",val:""},{name:"cutoffs",val:""},{name:"div_val",val:" = 1"},{name:"sample_softmax",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L405"}}),sn=new te({props:{name:"class transformers.TFAdaptiveEmbedding",anchor:"transformers.TFAdaptiveEmbedding",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L343"}}),{c(){m=n("meta"),M=l(),u=n("h1"),g=n("a"),$=n("span"),v(_.$$.fragment),T=l(),X=n("span"),I=r("Transformer XL"),W=l(),x=n("h2"),C=n("a"),O=n("span"),v(K.$$.fragment),ae=l(),B=n("span"),Le=r("Overview"),ge=l(),U=n("p"),N=r("The Transformer-XL model was proposed in "),ne=n("a"),re=r("Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"),F=r(` by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan
Salakhutdinov. It\u2019s a causal (uni-directional) transformer with relative positioning (sinuso\xEFdal) embeddings which can
reuse previously computed hidden-states to attend to longer context (memory). This model also uses adaptive softmax
inputs and outputs (tied).`),z=l(),ie=n("p"),Q=r("The abstract from the paper is the following:"),_e=l(),le=n("p"),V=n("em"),$e=r(`Transformers have a potential of learning longer-term dependency, but are limited by a fixed-length context in the
setting of language modeling. We propose a novel neural architecture Transformer-XL that enables learning dependency
beyond a fixed length without disrupting temporal coherence. It consists of a segment-level recurrence mechanism and a
novel positional encoding scheme. Our method not only enables capturing longer-term dependency, but also resolves the
context fragmentation problem. As a result, Transformer-XL learns dependency that is 80% longer than RNNs and 450%
longer than vanilla Transformers, achieves better performance on both short and long sequences, and is up to 1,800+
times faster than vanilla Transformers during evaluation. Notably, we improve the state-of-the-art results of
bpc/perplexity to 0.99 on enwiki8, 1.08 on text8, 18.3 on WikiText-103, 21.8 on One Billion Word, and 54.5 on Penn
Treebank (without finetuning). When trained only on WikiText-103, Transformer-XL manages to generate reasonably
coherent, novel text articles with thousands of tokens.`),Te=l(),q=n("p"),xe=r("Tips:"),G=l(),oe=n("ul"),fe=n("li"),Z=r(`Transformer-XL uses relative sinusoidal positional embeddings. Padding can be done on the left or on the right. The
original implementation trains on SQuAD with padding on the left, therefore the padding defaults are set to left.`),Xe=l(),he=n("li"),A=r("Transformer-XL is one of the few models that has no sequence length limit."),ve=l(),j=n("p"),Me=r("This model was contributed by "),h=n("a"),E=r("thomwolf"),de=r(". The original code can be found "),be=n("a"),Be=r("here"),H=r("."),Ae=l(),v(me.$$.fragment),He=l(),P=n("h2"),S=n("a"),qe=n("span"),v(we.$$.fragment),J=l(),ze=n("span"),Ue=r("TransfoXLConfig"),ye=l(),D=n("div"),v(Kt.$$.fragment),Ha=l(),Ge=n("p"),Da=r("This is the configuration class to store the configuration of a "),dn=n("a"),Ia=r("TransfoXLModel"),Wa=r(" or a "),cn=n("a"),Ba=r("TFTransfoXLModel"),Ua=r(`. It is
used to instantiate a Transformer-XL model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the `),Gt=n("a"),Va=r(`Transformer
XL`),Ra=r(" architecture."),Ka=l(),lt=n("p"),Ga=r("Configuration objects inherit from "),fn=n("a"),Ya=r("PretrainedConfig"),Qa=r(` and can be used to control the model outputs. Read the
documentation from `),hn=n("a"),Za=r("PretrainedConfig"),Ja=r(" for more information."),er=l(),An=n("p"),tr=r("Examples:"),or=l(),v(Yt.$$.fragment),Is=l(),dt=n("h2"),Mt=n("a"),Hn=n("span"),v(Qt.$$.fragment),nr=l(),Dn=n("span"),sr=r("TransfoXLTokenizer"),Ws=l(),De=n("div"),v(Zt.$$.fragment),ar=l(),Jt=n("p"),rr=r("Construct a Transformer-XL tokenizer adapted from Vocab class in "),eo=n("a"),ir=r(`the original
code`),lr=r(`. The Transformer-XL tokenizer is a word-level tokenizer (no
sub-word tokenization).`),dr=l(),to=n("p"),cr=r("This tokenizer inherits from "),mn=n("a"),fr=r("PreTrainedTokenizer"),hr=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mr=l(),pn=n("div"),v(oo.$$.fragment),Bs=l(),ct=n("h2"),Et=n("a"),In=n("span"),v(no.$$.fragment),pr=l(),Wn=n("span"),ur=r("TransfoXL specific outputs"),Us=l(),ft=n("div"),v(so.$$.fragment),gr=l(),Bn=n("p"),_r=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Vs=l(),ht=n("div"),v(ao.$$.fragment),Tr=l(),Un=n("p"),vr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Rs=l(),mt=n("div"),v(ro.$$.fragment),br=l(),Vn=n("p"),wr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Ks=l(),pt=n("div"),v(io.$$.fragment),yr=l(),Rn=n("p"),kr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Gs=l(),ut=n("h2"),Ft=n("a"),Kn=n("span"),v(lo.$$.fragment),Lr=l(),Gn=n("span"),$r=r("TransfoXLModel"),Ys=l(),Ee=n("div"),v(co.$$.fragment),xr=l(),Yn=n("p"),Xr=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Mr=l(),fo=n("p"),Er=r("This model inherits from "),un=n("a"),Fr=r("PreTrainedModel"),qr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zr=l(),ho=n("p"),Cr=r("This model is also a PyTorch "),mo=n("a"),Pr=r("torch.nn.Module"),jr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Or=l(),Ce=n("div"),v(po.$$.fragment),Sr=l(),gt=n("p"),Nr=r("The "),gn=n("a"),Ar=r("TransfoXLModel"),Hr=r(" forward method, overrides the "),Qn=n("code"),Dr=r("__call__"),Ir=r(" special method."),Wr=l(),v(qt.$$.fragment),Br=l(),Zn=n("p"),Ur=r("Example:"),Vr=l(),v(uo.$$.fragment),Qs=l(),_t=n("h2"),zt=n("a"),Jn=n("span"),v(go.$$.fragment),Rr=l(),es=n("span"),Kr=r("TransfoXLLMHeadModel"),Zs=l(),Fe=n("div"),v(_o.$$.fragment),Gr=l(),ts=n("p"),Yr=r(`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),Qr=l(),To=n("p"),Zr=r("This model inherits from "),_n=n("a"),Jr=r("PreTrainedModel"),ei=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ti=l(),vo=n("p"),oi=r("This model is also a PyTorch "),bo=n("a"),ni=r("torch.nn.Module"),si=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ai=l(),Pe=n("div"),v(wo.$$.fragment),ri=l(),Tt=n("p"),ii=r("The "),Tn=n("a"),li=r("TransfoXLLMHeadModel"),di=r(" forward method, overrides the "),os=n("code"),ci=r("__call__"),fi=r(" special method."),hi=l(),v(Ct.$$.fragment),mi=l(),ns=n("p"),pi=r("Example:"),ui=l(),v(yo.$$.fragment),Js=l(),vt=n("h2"),Pt=n("a"),ss=n("span"),v(ko.$$.fragment),gi=l(),as=n("span"),_i=r("TransfoXLForSequenceClassification"),ea=l(),se=n("div"),v(Lo.$$.fragment),Ti=l(),rs=n("p"),vi=r("The Transformer-XL Model transformer with a sequence classification head on top (linear layer)."),bi=l(),vn=n("p"),bn=n("a"),wi=r("TransfoXLForSequenceClassification"),yi=r(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1) do.`),ki=l(),Ie=n("p"),Li=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),is=n("code"),$i=r("pad_token_id"),xi=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ls=n("code"),Xi=r("pad_token_id"),Mi=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ds=n("code"),Ei=r("inputs_embeds"),Fi=r(" are passed instead of "),cs=n("code"),qi=r("input_ids"),zi=r(`, it does the same (take the last value in
each row of the batch).`),Ci=l(),$o=n("p"),Pi=r("This model inherits from "),wn=n("a"),ji=r("PreTrainedModel"),Oi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Si=l(),xo=n("p"),Ni=r("This model is also a PyTorch "),Xo=n("a"),Ai=r("torch.nn.Module"),Hi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Di=l(),Y=n("div"),v(Mo.$$.fragment),Ii=l(),bt=n("p"),Wi=r("The "),yn=n("a"),Bi=r("TransfoXLForSequenceClassification"),Ui=r(" forward method, overrides the "),fs=n("code"),Vi=r("__call__"),Ri=r(" special method."),Ki=l(),v(jt.$$.fragment),Gi=l(),hs=n("p"),Yi=r("Example of single-label classification:"),Qi=l(),v(Eo.$$.fragment),Zi=l(),v(Fo.$$.fragment),Ji=l(),ms=n("p"),el=r("Example of multi-label classification:"),tl=l(),v(qo.$$.fragment),ol=l(),v(zo.$$.fragment),ta=l(),wt=n("h2"),Ot=n("a"),ps=n("span"),v(Co.$$.fragment),nl=l(),us=n("span"),sl=r("TFTransfoXLModel"),oa=l(),pe=n("div"),v(Po.$$.fragment),al=l(),gs=n("p"),rl=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),il=l(),jo=n("p"),ll=r("This model inherits from "),kn=n("a"),dl=r("TFPreTrainedModel"),cl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl=l(),Oo=n("p"),hl=r("This model is also a "),So=n("a"),ml=r("tf.keras.Model"),pl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul=l(),v(St.$$.fragment),gl=l(),je=n("div"),v(No.$$.fragment),_l=l(),yt=n("p"),Tl=r("The "),Ln=n("a"),vl=r("TFTransfoXLModel"),bl=r(" forward method, overrides the "),_s=n("code"),wl=r("__call__"),yl=r(" special method."),kl=l(),v(Nt.$$.fragment),Ll=l(),Ts=n("p"),$l=r("Example:"),xl=l(),v(Ao.$$.fragment),na=l(),kt=n("h2"),At=n("a"),vs=n("span"),v(Ho.$$.fragment),Xl=l(),bs=n("span"),Ml=r("TFTransfoXLLMHeadModel"),sa=l(),ue=n("div"),v(Do.$$.fragment),El=l(),ws=n("p"),Fl=r(`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),ql=l(),Io=n("p"),zl=r("This model inherits from "),$n=n("a"),Cl=r("TFPreTrainedModel"),Pl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl=l(),Wo=n("p"),Ol=r("This model is also a "),Bo=n("a"),Sl=r("tf.keras.Model"),Nl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al=l(),v(Ht.$$.fragment),Hl=l(),Oe=n("div"),v(Uo.$$.fragment),Dl=l(),Lt=n("p"),Il=r("The "),xn=n("a"),Wl=r("TFTransfoXLLMHeadModel"),Bl=r(" forward method, overrides the "),ys=n("code"),Ul=r("__call__"),Vl=r(" special method."),Rl=l(),v(Dt.$$.fragment),Kl=l(),ks=n("p"),Gl=r("Example:"),Yl=l(),v(Vo.$$.fragment),aa=l(),$t=n("h2"),It=n("a"),Ls=n("span"),v(Ro.$$.fragment),Ql=l(),$s=n("span"),Zl=r("TFTransfoXLForSequenceClassification"),ra=l(),ee=n("div"),v(Ko.$$.fragment),Jl=l(),xs=n("p"),ed=r("The Transfo XL Model transformer with a sequence classification head on top (linear layer)."),td=l(),Xn=n("p"),Mn=n("a"),od=r("TFTransfoXLForSequenceClassification"),nd=r(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1,GPT-2) do.`),sd=l(),We=n("p"),ad=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Xs=n("code"),rd=r("pad_token_id"),id=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ms=n("code"),ld=r("pad_token_id"),dd=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Es=n("code"),cd=r("inputs_embeds"),fd=r(" are passed instead of "),Fs=n("code"),hd=r("input_ids"),md=r(`, it does the same (take the last value in
each row of the batch).`),pd=l(),Go=n("p"),ud=r("This model inherits from "),En=n("a"),gd=r("TFPreTrainedModel"),_d=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td=l(),Yo=n("p"),vd=r("This model is also a "),Qo=n("a"),bd=r("tf.keras.Model"),wd=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yd=l(),v(Wt.$$.fragment),kd=l(),Se=n("div"),v(Zo.$$.fragment),Ld=l(),xt=n("p"),$d=r("The "),Fn=n("a"),xd=r("TFTransfoXLForSequenceClassification"),Xd=r(" forward method, overrides the "),qs=n("code"),Md=r("__call__"),Ed=r(" special method."),Fd=l(),v(Bt.$$.fragment),qd=l(),zs=n("p"),zd=r("Example:"),Cd=l(),v(Jo.$$.fragment),ia=l(),Xt=n("h2"),Ut=n("a"),Cs=n("span"),v(en.$$.fragment),Pd=l(),Ps=n("span"),jd=r("Internal Layers"),la=l(),tn=n("div"),v(on.$$.fragment),da=l(),nn=n("div"),v(sn.$$.fragment),this.h()},l(o){const p=Pf('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(t),M=d(o),u=s(o,"H1",{class:!0});var an=a(u);g=s(an,"A",{id:!0,class:!0,href:!0});var js=a(g);$=s(js,"SPAN",{});var Os=a($);b(_.$$.fragment,Os),Os.forEach(t),js.forEach(t),T=d(an),X=s(an,"SPAN",{});var Ss=a(X);I=i(Ss,"Transformer XL"),Ss.forEach(t),an.forEach(t),W=d(o),x=s(o,"H2",{class:!0});var rn=a(x);C=s(rn,"A",{id:!0,class:!0,href:!0});var Ns=a(C);O=s(Ns,"SPAN",{});var As=a(O);b(K.$$.fragment,As),As.forEach(t),Ns.forEach(t),ae=d(rn),B=s(rn,"SPAN",{});var Hs=a(B);Le=i(Hs,"Overview"),Hs.forEach(t),rn.forEach(t),ge=d(o),U=s(o,"P",{});var ln=a(U);N=i(ln,"The Transformer-XL model was proposed in "),ne=s(ln,"A",{href:!0,rel:!0});var Ds=a(ne);re=i(Ds,"Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"),Ds.forEach(t),F=i(ln,` by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan
Salakhutdinov. It\u2019s a causal (uni-directional) transformer with relative positioning (sinuso\xEFdal) embeddings which can
reuse previously computed hidden-states to attend to longer context (memory). This model also uses adaptive softmax
inputs and outputs (tied).`),ln.forEach(t),z=d(o),ie=s(o,"P",{});var Nd=a(ie);Q=i(Nd,"The abstract from the paper is the following:"),Nd.forEach(t),_e=d(o),le=s(o,"P",{});var Ad=a(le);V=s(Ad,"EM",{});var Hd=a(V);$e=i(Hd,`Transformers have a potential of learning longer-term dependency, but are limited by a fixed-length context in the
setting of language modeling. We propose a novel neural architecture Transformer-XL that enables learning dependency
beyond a fixed length without disrupting temporal coherence. It consists of a segment-level recurrence mechanism and a
novel positional encoding scheme. Our method not only enables capturing longer-term dependency, but also resolves the
context fragmentation problem. As a result, Transformer-XL learns dependency that is 80% longer than RNNs and 450%
longer than vanilla Transformers, achieves better performance on both short and long sequences, and is up to 1,800+
times faster than vanilla Transformers during evaluation. Notably, we improve the state-of-the-art results of
bpc/perplexity to 0.99 on enwiki8, 1.08 on text8, 18.3 on WikiText-103, 21.8 on One Billion Word, and 54.5 on Penn
Treebank (without finetuning). When trained only on WikiText-103, Transformer-XL manages to generate reasonably
coherent, novel text articles with thousands of tokens.`),Hd.forEach(t),Ad.forEach(t),Te=d(o),q=s(o,"P",{});var Dd=a(q);xe=i(Dd,"Tips:"),Dd.forEach(t),G=d(o),oe=s(o,"UL",{});var fa=a(oe);fe=s(fa,"LI",{});var Id=a(fe);Z=i(Id,`Transformer-XL uses relative sinusoidal positional embeddings. Padding can be done on the left or on the right. The
original implementation trains on SQuAD with padding on the left, therefore the padding defaults are set to left.`),Id.forEach(t),Xe=d(fa),he=s(fa,"LI",{});var Wd=a(he);A=i(Wd,"Transformer-XL is one of the few models that has no sequence length limit."),Wd.forEach(t),fa.forEach(t),ve=d(o),j=s(o,"P",{});var qn=a(j);Me=i(qn,"This model was contributed by "),h=s(qn,"A",{href:!0,rel:!0});var Bd=a(h);E=i(Bd,"thomwolf"),Bd.forEach(t),de=i(qn,". The original code can be found "),be=s(qn,"A",{href:!0,rel:!0});var Ud=a(be);Be=i(Ud,"here"),Ud.forEach(t),H=i(qn,"."),qn.forEach(t),Ae=d(o),b(me.$$.fragment,o),He=d(o),P=s(o,"H2",{class:!0});var ha=a(P);S=s(ha,"A",{id:!0,class:!0,href:!0});var Vd=a(S);qe=s(Vd,"SPAN",{});var Rd=a(qe);b(we.$$.fragment,Rd),Rd.forEach(t),Vd.forEach(t),J=d(ha),ze=s(ha,"SPAN",{});var Kd=a(ze);Ue=i(Kd,"TransfoXLConfig"),Kd.forEach(t),ha.forEach(t),ye=d(o),D=s(o,"DIV",{class:!0});var Ye=a(D);b(Kt.$$.fragment,Ye),Ha=d(Ye),Ge=s(Ye,"P",{});var Vt=a(Ge);Da=i(Vt,"This is the configuration class to store the configuration of a "),dn=s(Vt,"A",{href:!0});var Gd=a(dn);Ia=i(Gd,"TransfoXLModel"),Gd.forEach(t),Wa=i(Vt," or a "),cn=s(Vt,"A",{href:!0});var Yd=a(cn);Ba=i(Yd,"TFTransfoXLModel"),Yd.forEach(t),Ua=i(Vt,`. It is
used to instantiate a Transformer-XL model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the `),Gt=s(Vt,"A",{href:!0,rel:!0});var Qd=a(Gt);Va=i(Qd,`Transformer
XL`),Qd.forEach(t),Ra=i(Vt," architecture."),Vt.forEach(t),Ka=d(Ye),lt=s(Ye,"P",{});var zn=a(lt);Ga=i(zn,"Configuration objects inherit from "),fn=s(zn,"A",{href:!0});var Zd=a(fn);Ya=i(Zd,"PretrainedConfig"),Zd.forEach(t),Qa=i(zn,` and can be used to control the model outputs. Read the
documentation from `),hn=s(zn,"A",{href:!0});var Jd=a(hn);Za=i(Jd,"PretrainedConfig"),Jd.forEach(t),Ja=i(zn," for more information."),zn.forEach(t),er=d(Ye),An=s(Ye,"P",{});var ec=a(An);tr=i(ec,"Examples:"),ec.forEach(t),or=d(Ye),b(Yt.$$.fragment,Ye),Ye.forEach(t),Is=d(o),dt=s(o,"H2",{class:!0});var ma=a(dt);Mt=s(ma,"A",{id:!0,class:!0,href:!0});var tc=a(Mt);Hn=s(tc,"SPAN",{});var oc=a(Hn);b(Qt.$$.fragment,oc),oc.forEach(t),tc.forEach(t),nr=d(ma),Dn=s(ma,"SPAN",{});var nc=a(Dn);sr=i(nc,"TransfoXLTokenizer"),nc.forEach(t),ma.forEach(t),Ws=d(o),De=s(o,"DIV",{class:!0});var Rt=a(De);b(Zt.$$.fragment,Rt),ar=d(Rt),Jt=s(Rt,"P",{});var pa=a(Jt);rr=i(pa,"Construct a Transformer-XL tokenizer adapted from Vocab class in "),eo=s(pa,"A",{href:!0,rel:!0});var sc=a(eo);ir=i(sc,`the original
code`),sc.forEach(t),lr=i(pa,`. The Transformer-XL tokenizer is a word-level tokenizer (no
sub-word tokenization).`),pa.forEach(t),dr=d(Rt),to=s(Rt,"P",{});var ua=a(to);cr=i(ua,"This tokenizer inherits from "),mn=s(ua,"A",{href:!0});var ac=a(mn);fr=i(ac,"PreTrainedTokenizer"),ac.forEach(t),hr=i(ua,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ua.forEach(t),mr=d(Rt),pn=s(Rt,"DIV",{class:!0});var rc=a(pn);b(oo.$$.fragment,rc),rc.forEach(t),Rt.forEach(t),Bs=d(o),ct=s(o,"H2",{class:!0});var ga=a(ct);Et=s(ga,"A",{id:!0,class:!0,href:!0});var ic=a(Et);In=s(ic,"SPAN",{});var lc=a(In);b(no.$$.fragment,lc),lc.forEach(t),ic.forEach(t),pr=d(ga),Wn=s(ga,"SPAN",{});var dc=a(Wn);ur=i(dc,"TransfoXL specific outputs"),dc.forEach(t),ga.forEach(t),Us=d(o),ft=s(o,"DIV",{class:!0});var _a=a(ft);b(so.$$.fragment,_a),gr=d(_a),Bn=s(_a,"P",{});var cc=a(Bn);_r=i(cc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),cc.forEach(t),_a.forEach(t),Vs=d(o),ht=s(o,"DIV",{class:!0});var Ta=a(ht);b(ao.$$.fragment,Ta),Tr=d(Ta),Un=s(Ta,"P",{});var fc=a(Un);vr=i(fc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),fc.forEach(t),Ta.forEach(t),Rs=d(o),mt=s(o,"DIV",{class:!0});var va=a(mt);b(ro.$$.fragment,va),br=d(va),Vn=s(va,"P",{});var hc=a(Vn);wr=i(hc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),hc.forEach(t),va.forEach(t),Ks=d(o),pt=s(o,"DIV",{class:!0});var ba=a(pt);b(io.$$.fragment,ba),yr=d(ba),Rn=s(ba,"P",{});var mc=a(Rn);kr=i(mc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),mc.forEach(t),ba.forEach(t),Gs=d(o),ut=s(o,"H2",{class:!0});var wa=a(ut);Ft=s(wa,"A",{id:!0,class:!0,href:!0});var pc=a(Ft);Kn=s(pc,"SPAN",{});var uc=a(Kn);b(lo.$$.fragment,uc),uc.forEach(t),pc.forEach(t),Lr=d(wa),Gn=s(wa,"SPAN",{});var gc=a(Gn);$r=i(gc,"TransfoXLModel"),gc.forEach(t),wa.forEach(t),Ys=d(o),Ee=s(o,"DIV",{class:!0});var Qe=a(Ee);b(co.$$.fragment,Qe),xr=d(Qe),Yn=s(Qe,"P",{});var _c=a(Yn);Xr=i(_c,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),_c.forEach(t),Mr=d(Qe),fo=s(Qe,"P",{});var ya=a(fo);Er=i(ya,"This model inherits from "),un=s(ya,"A",{href:!0});var Tc=a(un);Fr=i(Tc,"PreTrainedModel"),Tc.forEach(t),qr=i(ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ya.forEach(t),zr=d(Qe),ho=s(Qe,"P",{});var ka=a(ho);Cr=i(ka,"This model is also a PyTorch "),mo=s(ka,"A",{href:!0,rel:!0});var vc=a(mo);Pr=i(vc,"torch.nn.Module"),vc.forEach(t),jr=i(ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka.forEach(t),Or=d(Qe),Ce=s(Qe,"DIV",{class:!0});var Ze=a(Ce);b(po.$$.fragment,Ze),Sr=d(Ze),gt=s(Ze,"P",{});var Cn=a(gt);Nr=i(Cn,"The "),gn=s(Cn,"A",{href:!0});var bc=a(gn);Ar=i(bc,"TransfoXLModel"),bc.forEach(t),Hr=i(Cn," forward method, overrides the "),Qn=s(Cn,"CODE",{});var wc=a(Qn);Dr=i(wc,"__call__"),wc.forEach(t),Ir=i(Cn," special method."),Cn.forEach(t),Wr=d(Ze),b(qt.$$.fragment,Ze),Br=d(Ze),Zn=s(Ze,"P",{});var yc=a(Zn);Ur=i(yc,"Example:"),yc.forEach(t),Vr=d(Ze),b(uo.$$.fragment,Ze),Ze.forEach(t),Qe.forEach(t),Qs=d(o),_t=s(o,"H2",{class:!0});var La=a(_t);zt=s(La,"A",{id:!0,class:!0,href:!0});var kc=a(zt);Jn=s(kc,"SPAN",{});var Lc=a(Jn);b(go.$$.fragment,Lc),Lc.forEach(t),kc.forEach(t),Rr=d(La),es=s(La,"SPAN",{});var $c=a(es);Kr=i($c,"TransfoXLLMHeadModel"),$c.forEach(t),La.forEach(t),Zs=d(o),Fe=s(o,"DIV",{class:!0});var Je=a(Fe);b(_o.$$.fragment,Je),Gr=d(Je),ts=s(Je,"P",{});var xc=a(ts);Yr=i(xc,`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),xc.forEach(t),Qr=d(Je),To=s(Je,"P",{});var $a=a(To);Zr=i($a,"This model inherits from "),_n=s($a,"A",{href:!0});var Xc=a(_n);Jr=i(Xc,"PreTrainedModel"),Xc.forEach(t),ei=i($a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$a.forEach(t),ti=d(Je),vo=s(Je,"P",{});var xa=a(vo);oi=i(xa,"This model is also a PyTorch "),bo=s(xa,"A",{href:!0,rel:!0});var Mc=a(bo);ni=i(Mc,"torch.nn.Module"),Mc.forEach(t),si=i(xa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xa.forEach(t),ai=d(Je),Pe=s(Je,"DIV",{class:!0});var et=a(Pe);b(wo.$$.fragment,et),ri=d(et),Tt=s(et,"P",{});var Pn=a(Tt);ii=i(Pn,"The "),Tn=s(Pn,"A",{href:!0});var Ec=a(Tn);li=i(Ec,"TransfoXLLMHeadModel"),Ec.forEach(t),di=i(Pn," forward method, overrides the "),os=s(Pn,"CODE",{});var Fc=a(os);ci=i(Fc,"__call__"),Fc.forEach(t),fi=i(Pn," special method."),Pn.forEach(t),hi=d(et),b(Ct.$$.fragment,et),mi=d(et),ns=s(et,"P",{});var qc=a(ns);pi=i(qc,"Example:"),qc.forEach(t),ui=d(et),b(yo.$$.fragment,et),et.forEach(t),Je.forEach(t),Js=d(o),vt=s(o,"H2",{class:!0});var Xa=a(vt);Pt=s(Xa,"A",{id:!0,class:!0,href:!0});var zc=a(Pt);ss=s(zc,"SPAN",{});var Cc=a(ss);b(ko.$$.fragment,Cc),Cc.forEach(t),zc.forEach(t),gi=d(Xa),as=s(Xa,"SPAN",{});var Pc=a(as);_i=i(Pc,"TransfoXLForSequenceClassification"),Pc.forEach(t),Xa.forEach(t),ea=d(o),se=s(o,"DIV",{class:!0});var Ne=a(se);b(Lo.$$.fragment,Ne),Ti=d(Ne),rs=s(Ne,"P",{});var jc=a(rs);vi=i(jc,"The Transformer-XL Model transformer with a sequence classification head on top (linear layer)."),jc.forEach(t),bi=d(Ne),vn=s(Ne,"P",{});var Od=a(vn);bn=s(Od,"A",{href:!0});var Oc=a(bn);wi=i(Oc,"TransfoXLForSequenceClassification"),Oc.forEach(t),yi=i(Od,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1) do.`),Od.forEach(t),ki=d(Ne),Ie=s(Ne,"P",{});var tt=a(Ie);Li=i(tt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),is=s(tt,"CODE",{});var Sc=a(is);$i=i(Sc,"pad_token_id"),Sc.forEach(t),xi=i(tt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ls=s(tt,"CODE",{});var Nc=a(ls);Xi=i(Nc,"pad_token_id"),Nc.forEach(t),Mi=i(tt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ds=s(tt,"CODE",{});var Ac=a(ds);Ei=i(Ac,"inputs_embeds"),Ac.forEach(t),Fi=i(tt," are passed instead of "),cs=s(tt,"CODE",{});var Hc=a(cs);qi=i(Hc,"input_ids"),Hc.forEach(t),zi=i(tt,`, it does the same (take the last value in
each row of the batch).`),tt.forEach(t),Ci=d(Ne),$o=s(Ne,"P",{});var Ma=a($o);Pi=i(Ma,"This model inherits from "),wn=s(Ma,"A",{href:!0});var Dc=a(wn);ji=i(Dc,"PreTrainedModel"),Dc.forEach(t),Oi=i(Ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ma.forEach(t),Si=d(Ne),xo=s(Ne,"P",{});var Ea=a(xo);Ni=i(Ea,"This model is also a PyTorch "),Xo=s(Ea,"A",{href:!0,rel:!0});var Ic=a(Xo);Ai=i(Ic,"torch.nn.Module"),Ic.forEach(t),Hi=i(Ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea.forEach(t),Di=d(Ne),Y=s(Ne,"DIV",{class:!0});var ce=a(Y);b(Mo.$$.fragment,ce),Ii=d(ce),bt=s(ce,"P",{});var jn=a(bt);Wi=i(jn,"The "),yn=s(jn,"A",{href:!0});var Wc=a(yn);Bi=i(Wc,"TransfoXLForSequenceClassification"),Wc.forEach(t),Ui=i(jn," forward method, overrides the "),fs=s(jn,"CODE",{});var Bc=a(fs);Vi=i(Bc,"__call__"),Bc.forEach(t),Ri=i(jn," special method."),jn.forEach(t),Ki=d(ce),b(jt.$$.fragment,ce),Gi=d(ce),hs=s(ce,"P",{});var Uc=a(hs);Yi=i(Uc,"Example of single-label classification:"),Uc.forEach(t),Qi=d(ce),b(Eo.$$.fragment,ce),Zi=d(ce),b(Fo.$$.fragment,ce),Ji=d(ce),ms=s(ce,"P",{});var Vc=a(ms);el=i(Vc,"Example of multi-label classification:"),Vc.forEach(t),tl=d(ce),b(qo.$$.fragment,ce),ol=d(ce),b(zo.$$.fragment,ce),ce.forEach(t),Ne.forEach(t),ta=d(o),wt=s(o,"H2",{class:!0});var Fa=a(wt);Ot=s(Fa,"A",{id:!0,class:!0,href:!0});var Rc=a(Ot);ps=s(Rc,"SPAN",{});var Kc=a(ps);b(Co.$$.fragment,Kc),Kc.forEach(t),Rc.forEach(t),nl=d(Fa),us=s(Fa,"SPAN",{});var Gc=a(us);sl=i(Gc,"TFTransfoXLModel"),Gc.forEach(t),Fa.forEach(t),oa=d(o),pe=s(o,"DIV",{class:!0});var Ve=a(pe);b(Po.$$.fragment,Ve),al=d(Ve),gs=s(Ve,"P",{});var Yc=a(gs);rl=i(Yc,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Yc.forEach(t),il=d(Ve),jo=s(Ve,"P",{});var qa=a(jo);ll=i(qa,"This model inherits from "),kn=s(qa,"A",{href:!0});var Qc=a(kn);dl=i(Qc,"TFPreTrainedModel"),Qc.forEach(t),cl=i(qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa.forEach(t),fl=d(Ve),Oo=s(Ve,"P",{});var za=a(Oo);hl=i(za,"This model is also a "),So=s(za,"A",{href:!0,rel:!0});var Zc=a(So);ml=i(Zc,"tf.keras.Model"),Zc.forEach(t),pl=i(za,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),za.forEach(t),ul=d(Ve),b(St.$$.fragment,Ve),gl=d(Ve),je=s(Ve,"DIV",{class:!0});var ot=a(je);b(No.$$.fragment,ot),_l=d(ot),yt=s(ot,"P",{});var On=a(yt);Tl=i(On,"The "),Ln=s(On,"A",{href:!0});var Jc=a(Ln);vl=i(Jc,"TFTransfoXLModel"),Jc.forEach(t),bl=i(On," forward method, overrides the "),_s=s(On,"CODE",{});var ef=a(_s);wl=i(ef,"__call__"),ef.forEach(t),yl=i(On," special method."),On.forEach(t),kl=d(ot),b(Nt.$$.fragment,ot),Ll=d(ot),Ts=s(ot,"P",{});var tf=a(Ts);$l=i(tf,"Example:"),tf.forEach(t),xl=d(ot),b(Ao.$$.fragment,ot),ot.forEach(t),Ve.forEach(t),na=d(o),kt=s(o,"H2",{class:!0});var Ca=a(kt);At=s(Ca,"A",{id:!0,class:!0,href:!0});var of=a(At);vs=s(of,"SPAN",{});var nf=a(vs);b(Ho.$$.fragment,nf),nf.forEach(t),of.forEach(t),Xl=d(Ca),bs=s(Ca,"SPAN",{});var sf=a(bs);Ml=i(sf,"TFTransfoXLLMHeadModel"),sf.forEach(t),Ca.forEach(t),sa=d(o),ue=s(o,"DIV",{class:!0});var Re=a(ue);b(Do.$$.fragment,Re),El=d(Re),ws=s(Re,"P",{});var af=a(ws);Fl=i(af,`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),af.forEach(t),ql=d(Re),Io=s(Re,"P",{});var Pa=a(Io);zl=i(Pa,"This model inherits from "),$n=s(Pa,"A",{href:!0});var rf=a($n);Cl=i(rf,"TFPreTrainedModel"),rf.forEach(t),Pl=i(Pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pa.forEach(t),jl=d(Re),Wo=s(Re,"P",{});var ja=a(Wo);Ol=i(ja,"This model is also a "),Bo=s(ja,"A",{href:!0,rel:!0});var lf=a(Bo);Sl=i(lf,"tf.keras.Model"),lf.forEach(t),Nl=i(ja,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ja.forEach(t),Al=d(Re),b(Ht.$$.fragment,Re),Hl=d(Re),Oe=s(Re,"DIV",{class:!0});var nt=a(Oe);b(Uo.$$.fragment,nt),Dl=d(nt),Lt=s(nt,"P",{});var Sn=a(Lt);Il=i(Sn,"The "),xn=s(Sn,"A",{href:!0});var df=a(xn);Wl=i(df,"TFTransfoXLLMHeadModel"),df.forEach(t),Bl=i(Sn," forward method, overrides the "),ys=s(Sn,"CODE",{});var cf=a(ys);Ul=i(cf,"__call__"),cf.forEach(t),Vl=i(Sn," special method."),Sn.forEach(t),Rl=d(nt),b(Dt.$$.fragment,nt),Kl=d(nt),ks=s(nt,"P",{});var ff=a(ks);Gl=i(ff,"Example:"),ff.forEach(t),Yl=d(nt),b(Vo.$$.fragment,nt),nt.forEach(t),Re.forEach(t),aa=d(o),$t=s(o,"H2",{class:!0});var Oa=a($t);It=s(Oa,"A",{id:!0,class:!0,href:!0});var hf=a(It);Ls=s(hf,"SPAN",{});var mf=a(Ls);b(Ro.$$.fragment,mf),mf.forEach(t),hf.forEach(t),Ql=d(Oa),$s=s(Oa,"SPAN",{});var pf=a($s);Zl=i(pf,"TFTransfoXLForSequenceClassification"),pf.forEach(t),Oa.forEach(t),ra=d(o),ee=s(o,"DIV",{class:!0});var ke=a(ee);b(Ko.$$.fragment,ke),Jl=d(ke),xs=s(ke,"P",{});var uf=a(xs);ed=i(uf,"The Transfo XL Model transformer with a sequence classification head on top (linear layer)."),uf.forEach(t),td=d(ke),Xn=s(ke,"P",{});var Sd=a(Xn);Mn=s(Sd,"A",{href:!0});var gf=a(Mn);od=i(gf,"TFTransfoXLForSequenceClassification"),gf.forEach(t),nd=i(Sd,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1,GPT-2) do.`),Sd.forEach(t),sd=d(ke),We=s(ke,"P",{});var st=a(We);ad=i(st,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Xs=s(st,"CODE",{});var _f=a(Xs);rd=i(_f,"pad_token_id"),_f.forEach(t),id=i(st,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ms=s(st,"CODE",{});var Tf=a(Ms);ld=i(Tf,"pad_token_id"),Tf.forEach(t),dd=i(st,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Es=s(st,"CODE",{});var vf=a(Es);cd=i(vf,"inputs_embeds"),vf.forEach(t),fd=i(st," are passed instead of "),Fs=s(st,"CODE",{});var bf=a(Fs);hd=i(bf,"input_ids"),bf.forEach(t),md=i(st,`, it does the same (take the last value in
each row of the batch).`),st.forEach(t),pd=d(ke),Go=s(ke,"P",{});var Sa=a(Go);ud=i(Sa,"This model inherits from "),En=s(Sa,"A",{href:!0});var wf=a(En);gd=i(wf,"TFPreTrainedModel"),wf.forEach(t),_d=i(Sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sa.forEach(t),Td=d(ke),Yo=s(ke,"P",{});var Na=a(Yo);vd=i(Na,"This model is also a "),Qo=s(Na,"A",{href:!0,rel:!0});var yf=a(Qo);bd=i(yf,"tf.keras.Model"),yf.forEach(t),wd=i(Na,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Na.forEach(t),yd=d(ke),b(Wt.$$.fragment,ke),kd=d(ke),Se=s(ke,"DIV",{class:!0});var at=a(Se);b(Zo.$$.fragment,at),Ld=d(at),xt=s(at,"P",{});var Nn=a(xt);$d=i(Nn,"The "),Fn=s(Nn,"A",{href:!0});var kf=a(Fn);xd=i(kf,"TFTransfoXLForSequenceClassification"),kf.forEach(t),Xd=i(Nn," forward method, overrides the "),qs=s(Nn,"CODE",{});var Lf=a(qs);Md=i(Lf,"__call__"),Lf.forEach(t),Ed=i(Nn," special method."),Nn.forEach(t),Fd=d(at),b(Bt.$$.fragment,at),qd=d(at),zs=s(at,"P",{});var $f=a(zs);zd=i($f,"Example:"),$f.forEach(t),Cd=d(at),b(Jo.$$.fragment,at),at.forEach(t),ke.forEach(t),ia=d(o),Xt=s(o,"H2",{class:!0});var Aa=a(Xt);Ut=s(Aa,"A",{id:!0,class:!0,href:!0});var xf=a(Ut);Cs=s(xf,"SPAN",{});var Xf=a(Cs);b(en.$$.fragment,Xf),Xf.forEach(t),xf.forEach(t),Pd=d(Aa),Ps=s(Aa,"SPAN",{});var Mf=a(Ps);jd=i(Mf,"Internal Layers"),Mf.forEach(t),Aa.forEach(t),la=d(o),tn=s(o,"DIV",{class:!0});var Ef=a(tn);b(on.$$.fragment,Ef),Ef.forEach(t),da=d(o),nn=s(o,"DIV",{class:!0});var Ff=a(nn);b(sn.$$.fragment,Ff),Ff.forEach(t),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(Rf)),c(g,"id","transformer-xl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#transformer-xl"),c(u,"class","relative group"),c(C,"id","overview"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#overview"),c(x,"class","relative group"),c(ne,"href","https://arxiv.org/abs/1901.02860"),c(ne,"rel","nofollow"),c(h,"href","https://huggingface.co/thomwolf"),c(h,"rel","nofollow"),c(be,"href","https://github.com/kimiyoung/transformer-xl"),c(be,"rel","nofollow"),c(S,"id","transformers.TransfoXLConfig"),c(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(S,"href","#transformers.TransfoXLConfig"),c(P,"class","relative group"),c(dn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLModel"),c(cn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TFTransfoXLModel"),c(Gt,"href","https://huggingface.co/transfo-xl-wt103"),c(Gt,"rel","nofollow"),c(fn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(hn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(D,"class","docstring"),c(Mt,"id","transformers.TransfoXLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.TransfoXLTokenizer"),c(dt,"class","relative group"),c(eo,"href","https://github.com/kimiyoung/transformer-xl"),c(eo,"rel","nofollow"),c(mn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(pn,"class","docstring"),c(De,"class","docstring"),c(Et,"id","transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"),c(ct,"class","relative group"),c(ft,"class","docstring"),c(ht,"class","docstring"),c(mt,"class","docstring"),c(pt,"class","docstring"),c(Ft,"id","transformers.TransfoXLModel"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.TransfoXLModel"),c(ut,"class","relative group"),c(un,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mo,"rel","nofollow"),c(gn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLModel"),c(Ce,"class","docstring"),c(Ee,"class","docstring"),c(zt,"id","transformers.TransfoXLLMHeadModel"),c(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zt,"href","#transformers.TransfoXLLMHeadModel"),c(_t,"class","relative group"),c(_n,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bo,"rel","nofollow"),c(Tn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLLMHeadModel"),c(Pe,"class","docstring"),c(Fe,"class","docstring"),c(Pt,"id","transformers.TransfoXLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.TransfoXLForSequenceClassification"),c(vt,"class","relative group"),c(bn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLForSequenceClassification"),c(wn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(yn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TransfoXLForSequenceClassification"),c(Y,"class","docstring"),c(se,"class","docstring"),c(Ot,"id","transformers.TFTransfoXLModel"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFTransfoXLModel"),c(wt,"class","relative group"),c(kn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(So,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(So,"rel","nofollow"),c(Ln,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TFTransfoXLModel"),c(je,"class","docstring"),c(pe,"class","docstring"),c(At,"id","transformers.TFTransfoXLLMHeadModel"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFTransfoXLLMHeadModel"),c(kt,"class","relative group"),c($n,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bo,"rel","nofollow"),c(xn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TFTransfoXLLMHeadModel"),c(Oe,"class","docstring"),c(ue,"class","docstring"),c(It,"id","transformers.TFTransfoXLForSequenceClassification"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFTransfoXLForSequenceClassification"),c($t,"class","relative group"),c(Mn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TFTransfoXLForSequenceClassification"),c(En,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qo,"rel","nofollow"),c(Fn,"href","/docs/transformers/main/en/model_doc/transfo-xl#transformers.TFTransfoXLForSequenceClassification"),c(Se,"class","docstring"),c(ee,"class","docstring"),c(Ut,"id","transformers.AdaptiveEmbedding"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.AdaptiveEmbedding"),c(Xt,"class","relative group"),c(tn,"class","docstring"),c(nn,"class","docstring")},m(o,p){e(document.head,m),f(o,M,p),f(o,u,p),e(u,g),e(g,$),w(_,$,null),e(u,T),e(u,X),e(X,I),f(o,W,p),f(o,x,p),e(x,C),e(C,O),w(K,O,null),e(x,ae),e(x,B),e(B,Le),f(o,ge,p),f(o,U,p),e(U,N),e(U,ne),e(ne,re),e(U,F),f(o,z,p),f(o,ie,p),e(ie,Q),f(o,_e,p),f(o,le,p),e(le,V),e(V,$e),f(o,Te,p),f(o,q,p),e(q,xe),f(o,G,p),f(o,oe,p),e(oe,fe),e(fe,Z),e(oe,Xe),e(oe,he),e(he,A),f(o,ve,p),f(o,j,p),e(j,Me),e(j,h),e(h,E),e(j,de),e(j,be),e(be,Be),e(j,H),f(o,Ae,p),w(me,o,p),f(o,He,p),f(o,P,p),e(P,S),e(S,qe),w(we,qe,null),e(P,J),e(P,ze),e(ze,Ue),f(o,ye,p),f(o,D,p),w(Kt,D,null),e(D,Ha),e(D,Ge),e(Ge,Da),e(Ge,dn),e(dn,Ia),e(Ge,Wa),e(Ge,cn),e(cn,Ba),e(Ge,Ua),e(Ge,Gt),e(Gt,Va),e(Ge,Ra),e(D,Ka),e(D,lt),e(lt,Ga),e(lt,fn),e(fn,Ya),e(lt,Qa),e(lt,hn),e(hn,Za),e(lt,Ja),e(D,er),e(D,An),e(An,tr),e(D,or),w(Yt,D,null),f(o,Is,p),f(o,dt,p),e(dt,Mt),e(Mt,Hn),w(Qt,Hn,null),e(dt,nr),e(dt,Dn),e(Dn,sr),f(o,Ws,p),f(o,De,p),w(Zt,De,null),e(De,ar),e(De,Jt),e(Jt,rr),e(Jt,eo),e(eo,ir),e(Jt,lr),e(De,dr),e(De,to),e(to,cr),e(to,mn),e(mn,fr),e(to,hr),e(De,mr),e(De,pn),w(oo,pn,null),f(o,Bs,p),f(o,ct,p),e(ct,Et),e(Et,In),w(no,In,null),e(ct,pr),e(ct,Wn),e(Wn,ur),f(o,Us,p),f(o,ft,p),w(so,ft,null),e(ft,gr),e(ft,Bn),e(Bn,_r),f(o,Vs,p),f(o,ht,p),w(ao,ht,null),e(ht,Tr),e(ht,Un),e(Un,vr),f(o,Rs,p),f(o,mt,p),w(ro,mt,null),e(mt,br),e(mt,Vn),e(Vn,wr),f(o,Ks,p),f(o,pt,p),w(io,pt,null),e(pt,yr),e(pt,Rn),e(Rn,kr),f(o,Gs,p),f(o,ut,p),e(ut,Ft),e(Ft,Kn),w(lo,Kn,null),e(ut,Lr),e(ut,Gn),e(Gn,$r),f(o,Ys,p),f(o,Ee,p),w(co,Ee,null),e(Ee,xr),e(Ee,Yn),e(Yn,Xr),e(Ee,Mr),e(Ee,fo),e(fo,Er),e(fo,un),e(un,Fr),e(fo,qr),e(Ee,zr),e(Ee,ho),e(ho,Cr),e(ho,mo),e(mo,Pr),e(ho,jr),e(Ee,Or),e(Ee,Ce),w(po,Ce,null),e(Ce,Sr),e(Ce,gt),e(gt,Nr),e(gt,gn),e(gn,Ar),e(gt,Hr),e(gt,Qn),e(Qn,Dr),e(gt,Ir),e(Ce,Wr),w(qt,Ce,null),e(Ce,Br),e(Ce,Zn),e(Zn,Ur),e(Ce,Vr),w(uo,Ce,null),f(o,Qs,p),f(o,_t,p),e(_t,zt),e(zt,Jn),w(go,Jn,null),e(_t,Rr),e(_t,es),e(es,Kr),f(o,Zs,p),f(o,Fe,p),w(_o,Fe,null),e(Fe,Gr),e(Fe,ts),e(ts,Yr),e(Fe,Qr),e(Fe,To),e(To,Zr),e(To,_n),e(_n,Jr),e(To,ei),e(Fe,ti),e(Fe,vo),e(vo,oi),e(vo,bo),e(bo,ni),e(vo,si),e(Fe,ai),e(Fe,Pe),w(wo,Pe,null),e(Pe,ri),e(Pe,Tt),e(Tt,ii),e(Tt,Tn),e(Tn,li),e(Tt,di),e(Tt,os),e(os,ci),e(Tt,fi),e(Pe,hi),w(Ct,Pe,null),e(Pe,mi),e(Pe,ns),e(ns,pi),e(Pe,ui),w(yo,Pe,null),f(o,Js,p),f(o,vt,p),e(vt,Pt),e(Pt,ss),w(ko,ss,null),e(vt,gi),e(vt,as),e(as,_i),f(o,ea,p),f(o,se,p),w(Lo,se,null),e(se,Ti),e(se,rs),e(rs,vi),e(se,bi),e(se,vn),e(vn,bn),e(bn,wi),e(vn,yi),e(se,ki),e(se,Ie),e(Ie,Li),e(Ie,is),e(is,$i),e(Ie,xi),e(Ie,ls),e(ls,Xi),e(Ie,Mi),e(Ie,ds),e(ds,Ei),e(Ie,Fi),e(Ie,cs),e(cs,qi),e(Ie,zi),e(se,Ci),e(se,$o),e($o,Pi),e($o,wn),e(wn,ji),e($o,Oi),e(se,Si),e(se,xo),e(xo,Ni),e(xo,Xo),e(Xo,Ai),e(xo,Hi),e(se,Di),e(se,Y),w(Mo,Y,null),e(Y,Ii),e(Y,bt),e(bt,Wi),e(bt,yn),e(yn,Bi),e(bt,Ui),e(bt,fs),e(fs,Vi),e(bt,Ri),e(Y,Ki),w(jt,Y,null),e(Y,Gi),e(Y,hs),e(hs,Yi),e(Y,Qi),w(Eo,Y,null),e(Y,Zi),w(Fo,Y,null),e(Y,Ji),e(Y,ms),e(ms,el),e(Y,tl),w(qo,Y,null),e(Y,ol),w(zo,Y,null),f(o,ta,p),f(o,wt,p),e(wt,Ot),e(Ot,ps),w(Co,ps,null),e(wt,nl),e(wt,us),e(us,sl),f(o,oa,p),f(o,pe,p),w(Po,pe,null),e(pe,al),e(pe,gs),e(gs,rl),e(pe,il),e(pe,jo),e(jo,ll),e(jo,kn),e(kn,dl),e(jo,cl),e(pe,fl),e(pe,Oo),e(Oo,hl),e(Oo,So),e(So,ml),e(Oo,pl),e(pe,ul),w(St,pe,null),e(pe,gl),e(pe,je),w(No,je,null),e(je,_l),e(je,yt),e(yt,Tl),e(yt,Ln),e(Ln,vl),e(yt,bl),e(yt,_s),e(_s,wl),e(yt,yl),e(je,kl),w(Nt,je,null),e(je,Ll),e(je,Ts),e(Ts,$l),e(je,xl),w(Ao,je,null),f(o,na,p),f(o,kt,p),e(kt,At),e(At,vs),w(Ho,vs,null),e(kt,Xl),e(kt,bs),e(bs,Ml),f(o,sa,p),f(o,ue,p),w(Do,ue,null),e(ue,El),e(ue,ws),e(ws,Fl),e(ue,ql),e(ue,Io),e(Io,zl),e(Io,$n),e($n,Cl),e(Io,Pl),e(ue,jl),e(ue,Wo),e(Wo,Ol),e(Wo,Bo),e(Bo,Sl),e(Wo,Nl),e(ue,Al),w(Ht,ue,null),e(ue,Hl),e(ue,Oe),w(Uo,Oe,null),e(Oe,Dl),e(Oe,Lt),e(Lt,Il),e(Lt,xn),e(xn,Wl),e(Lt,Bl),e(Lt,ys),e(ys,Ul),e(Lt,Vl),e(Oe,Rl),w(Dt,Oe,null),e(Oe,Kl),e(Oe,ks),e(ks,Gl),e(Oe,Yl),w(Vo,Oe,null),f(o,aa,p),f(o,$t,p),e($t,It),e(It,Ls),w(Ro,Ls,null),e($t,Ql),e($t,$s),e($s,Zl),f(o,ra,p),f(o,ee,p),w(Ko,ee,null),e(ee,Jl),e(ee,xs),e(xs,ed),e(ee,td),e(ee,Xn),e(Xn,Mn),e(Mn,od),e(Xn,nd),e(ee,sd),e(ee,We),e(We,ad),e(We,Xs),e(Xs,rd),e(We,id),e(We,Ms),e(Ms,ld),e(We,dd),e(We,Es),e(Es,cd),e(We,fd),e(We,Fs),e(Fs,hd),e(We,md),e(ee,pd),e(ee,Go),e(Go,ud),e(Go,En),e(En,gd),e(Go,_d),e(ee,Td),e(ee,Yo),e(Yo,vd),e(Yo,Qo),e(Qo,bd),e(Yo,wd),e(ee,yd),w(Wt,ee,null),e(ee,kd),e(ee,Se),w(Zo,Se,null),e(Se,Ld),e(Se,xt),e(xt,$d),e(xt,Fn),e(Fn,xd),e(xt,Xd),e(xt,qs),e(qs,Md),e(xt,Ed),e(Se,Fd),w(Bt,Se,null),e(Se,qd),e(Se,zs),e(zs,zd),e(Se,Cd),w(Jo,Se,null),f(o,ia,p),f(o,Xt,p),e(Xt,Ut),e(Ut,Cs),w(en,Cs,null),e(Xt,Pd),e(Xt,Ps),e(Ps,jd),f(o,la,p),f(o,tn,p),w(on,tn,null),f(o,da,p),f(o,nn,p),w(sn,nn,null),ca=!0},p(o,[p]){const an={};p&2&&(an.$$scope={dirty:p,ctx:o}),me.$set(an);const js={};p&2&&(js.$$scope={dirty:p,ctx:o}),qt.$set(js);const Os={};p&2&&(Os.$$scope={dirty:p,ctx:o}),Ct.$set(Os);const Ss={};p&2&&(Ss.$$scope={dirty:p,ctx:o}),jt.$set(Ss);const rn={};p&2&&(rn.$$scope={dirty:p,ctx:o}),St.$set(rn);const Ns={};p&2&&(Ns.$$scope={dirty:p,ctx:o}),Nt.$set(Ns);const As={};p&2&&(As.$$scope={dirty:p,ctx:o}),Ht.$set(As);const Hs={};p&2&&(Hs.$$scope={dirty:p,ctx:o}),Dt.$set(Hs);const ln={};p&2&&(ln.$$scope={dirty:p,ctx:o}),Wt.$set(ln);const Ds={};p&2&&(Ds.$$scope={dirty:p,ctx:o}),Bt.$set(Ds)},i(o){ca||(y(_.$$.fragment,o),y(K.$$.fragment,o),y(me.$$.fragment,o),y(we.$$.fragment,o),y(Kt.$$.fragment,o),y(Yt.$$.fragment,o),y(Qt.$$.fragment,o),y(Zt.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(po.$$.fragment,o),y(qt.$$.fragment,o),y(uo.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(wo.$$.fragment,o),y(Ct.$$.fragment,o),y(yo.$$.fragment,o),y(ko.$$.fragment,o),y(Lo.$$.fragment,o),y(Mo.$$.fragment,o),y(jt.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(qo.$$.fragment,o),y(zo.$$.fragment,o),y(Co.$$.fragment,o),y(Po.$$.fragment,o),y(St.$$.fragment,o),y(No.$$.fragment,o),y(Nt.$$.fragment,o),y(Ao.$$.fragment,o),y(Ho.$$.fragment,o),y(Do.$$.fragment,o),y(Ht.$$.fragment,o),y(Uo.$$.fragment,o),y(Dt.$$.fragment,o),y(Vo.$$.fragment,o),y(Ro.$$.fragment,o),y(Ko.$$.fragment,o),y(Wt.$$.fragment,o),y(Zo.$$.fragment,o),y(Bt.$$.fragment,o),y(Jo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),ca=!0)},o(o){k(_.$$.fragment,o),k(K.$$.fragment,o),k(me.$$.fragment,o),k(we.$$.fragment,o),k(Kt.$$.fragment,o),k(Yt.$$.fragment,o),k(Qt.$$.fragment,o),k(Zt.$$.fragment,o),k(oo.$$.fragment,o),k(no.$$.fragment,o),k(so.$$.fragment,o),k(ao.$$.fragment,o),k(ro.$$.fragment,o),k(io.$$.fragment,o),k(lo.$$.fragment,o),k(co.$$.fragment,o),k(po.$$.fragment,o),k(qt.$$.fragment,o),k(uo.$$.fragment,o),k(go.$$.fragment,o),k(_o.$$.fragment,o),k(wo.$$.fragment,o),k(Ct.$$.fragment,o),k(yo.$$.fragment,o),k(ko.$$.fragment,o),k(Lo.$$.fragment,o),k(Mo.$$.fragment,o),k(jt.$$.fragment,o),k(Eo.$$.fragment,o),k(Fo.$$.fragment,o),k(qo.$$.fragment,o),k(zo.$$.fragment,o),k(Co.$$.fragment,o),k(Po.$$.fragment,o),k(St.$$.fragment,o),k(No.$$.fragment,o),k(Nt.$$.fragment,o),k(Ao.$$.fragment,o),k(Ho.$$.fragment,o),k(Do.$$.fragment,o),k(Ht.$$.fragment,o),k(Uo.$$.fragment,o),k(Dt.$$.fragment,o),k(Vo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ko.$$.fragment,o),k(Wt.$$.fragment,o),k(Zo.$$.fragment,o),k(Bt.$$.fragment,o),k(Jo.$$.fragment,o),k(en.$$.fragment,o),k(on.$$.fragment,o),k(sn.$$.fragment,o),ca=!1},d(o){t(m),o&&t(M),o&&t(u),L(_),o&&t(W),o&&t(x),L(K),o&&t(ge),o&&t(U),o&&t(z),o&&t(ie),o&&t(_e),o&&t(le),o&&t(Te),o&&t(q),o&&t(G),o&&t(oe),o&&t(ve),o&&t(j),o&&t(Ae),L(me,o),o&&t(He),o&&t(P),L(we),o&&t(ye),o&&t(D),L(Kt),L(Yt),o&&t(Is),o&&t(dt),L(Qt),o&&t(Ws),o&&t(De),L(Zt),L(oo),o&&t(Bs),o&&t(ct),L(no),o&&t(Us),o&&t(ft),L(so),o&&t(Vs),o&&t(ht),L(ao),o&&t(Rs),o&&t(mt),L(ro),o&&t(Ks),o&&t(pt),L(io),o&&t(Gs),o&&t(ut),L(lo),o&&t(Ys),o&&t(Ee),L(co),L(po),L(qt),L(uo),o&&t(Qs),o&&t(_t),L(go),o&&t(Zs),o&&t(Fe),L(_o),L(wo),L(Ct),L(yo),o&&t(Js),o&&t(vt),L(ko),o&&t(ea),o&&t(se),L(Lo),L(Mo),L(jt),L(Eo),L(Fo),L(qo),L(zo),o&&t(ta),o&&t(wt),L(Co),o&&t(oa),o&&t(pe),L(Po),L(St),L(No),L(Nt),L(Ao),o&&t(na),o&&t(kt),L(Ho),o&&t(sa),o&&t(ue),L(Do),L(Ht),L(Uo),L(Dt),L(Vo),o&&t(aa),o&&t($t),L(Ro),o&&t(ra),o&&t(ee),L(Ko),L(Wt),L(Zo),L(Bt),L(Jo),o&&t(ia),o&&t(Xt),L(en),o&&t(la),o&&t(tn),L(on),o&&t(da),o&&t(nn),L(sn)}}}const Rf={local:"transformer-xl",sections:[{local:"overview",title:"Overview"},{local:"transformers.TransfoXLConfig",title:"TransfoXLConfig"},{local:"transformers.TransfoXLTokenizer",title:"TransfoXLTokenizer"},{local:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",title:"TransfoXL specific outputs"},{local:"transformers.TransfoXLModel",title:"TransfoXLModel"},{local:"transformers.TransfoXLLMHeadModel",title:"TransfoXLLMHeadModel"},{local:"transformers.TransfoXLForSequenceClassification",title:"TransfoXLForSequenceClassification"},{local:"transformers.TFTransfoXLModel",title:"TFTransfoXLModel"},{local:"transformers.TFTransfoXLLMHeadModel",title:"TFTransfoXLLMHeadModel"},{local:"transformers.TFTransfoXLForSequenceClassification",title:"TFTransfoXLForSequenceClassification"},{local:"transformers.AdaptiveEmbedding",title:"Internal Layers"}],title:"Transformer XL"};function Kf(R){return jf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eh extends qf{constructor(m){super();zf(this,m,Kf,Vf,Cf,{})}}export{eh as default,Rf as metadata};
