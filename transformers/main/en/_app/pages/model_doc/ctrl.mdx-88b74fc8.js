import{S as Gc,i as Kc,s as Xc,e as a,k as l,w as k,t as n,M as Jc,c as r,d as t,m as d,a as i,x as b,h as s,b as c,F as e,g as m,y as C,q as y,o as w,B as L,v as Qc}from"../../chunks/vendor-6b77c823.js";import{T as $t}from"../../chunks/Tip-39098574.js";import{D as Fe}from"../../chunks/Docstring-abef54e3.js";import{C as Qe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";function Yc(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Zc(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function eh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function th(J){let p,E,f,g,v,T,_,M,_e,Y,R,Q,A,Z,Te,O,ve,he,x,j,ee,ne,F,q,ke,U,pe,se,V,me,ae,z,be,H,re,Ce,W,S,te,I,oe,G,ye;return{c(){p=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),ve=n("model(inputs)"),he=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ke=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),me=n("model(inputs_ids)"),ae=l(),z=a("li"),be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),Ce=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var $=i(p);E=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(h),g=r(h,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);_e=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(h),R=r(h,"P",{});var N=i(R);Q=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var qe=i(A);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);ve=s(Oe,"model(inputs)"),Oe.forEach(t),he=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ke=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var ze=i(V);me=s(ze,"model(inputs_ids)"),ze.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var K=i(z);be=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Ce=s(K," or "),W=r(K,"CODE",{});var Pe=i(W);S=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),K.forEach(t),te=d(D),I=r(D,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),D.forEach(t)},m(h,$){m(h,p,$),e(p,E),m(h,f,$),m(h,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),m(h,Y,$),m(h,R,$),e(R,Q),e(R,A),e(A,Z),e(R,Te),e(R,O),e(O,ve),e(R,he),m(h,x,$),m(h,j,$),e(j,ee),m(h,ne,$),m(h,F,$),e(F,q),e(q,ke),e(q,U),e(U,pe),e(q,se),e(q,V),e(V,me),e(F,ae),e(F,z),e(z,be),e(z,H),e(H,re),e(z,Ce),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,ye)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Y),h&&t(R),h&&t(x),h&&t(j),h&&t(ne),h&&t(F)}}}function oh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function nh(J){let p,E,f,g,v,T,_,M,_e,Y,R,Q,A,Z,Te,O,ve,he,x,j,ee,ne,F,q,ke,U,pe,se,V,me,ae,z,be,H,re,Ce,W,S,te,I,oe,G,ye;return{c(){p=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),ve=n("model(inputs)"),he=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ke=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),me=n("model(inputs_ids)"),ae=l(),z=a("li"),be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),Ce=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var $=i(p);E=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(h),g=r(h,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);_e=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(h),R=r(h,"P",{});var N=i(R);Q=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var qe=i(A);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);ve=s(Oe,"model(inputs)"),Oe.forEach(t),he=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ke=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var ze=i(V);me=s(ze,"model(inputs_ids)"),ze.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var K=i(z);be=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Ce=s(K," or "),W=r(K,"CODE",{});var Pe=i(W);S=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),K.forEach(t),te=d(D),I=r(D,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),D.forEach(t)},m(h,$){m(h,p,$),e(p,E),m(h,f,$),m(h,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),m(h,Y,$),m(h,R,$),e(R,Q),e(R,A),e(A,Z),e(R,Te),e(R,O),e(O,ve),e(R,he),m(h,x,$),m(h,j,$),e(j,ee),m(h,ne,$),m(h,F,$),e(F,q),e(q,ke),e(q,U),e(U,pe),e(q,se),e(q,V),e(V,me),e(F,ae),e(F,z),e(z,be),e(z,H),e(H,re),e(z,Ce),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,ye)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Y),h&&t(R),h&&t(x),h&&t(j),h&&t(ne),h&&t(F)}}}function sh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function ah(J){let p,E,f,g,v,T,_,M,_e,Y,R,Q,A,Z,Te,O,ve,he,x,j,ee,ne,F,q,ke,U,pe,se,V,me,ae,z,be,H,re,Ce,W,S,te,I,oe,G,ye;return{c(){p=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),ve=n("model(inputs)"),he=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ke=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),me=n("model(inputs_ids)"),ae=l(),z=a("li"),be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),Ce=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var $=i(p);E=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(h),g=r(h,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);_e=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(h),R=r(h,"P",{});var N=i(R);Q=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var qe=i(A);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);ve=s(Oe,"model(inputs)"),Oe.forEach(t),he=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ke=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var ze=i(V);me=s(ze,"model(inputs_ids)"),ze.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var K=i(z);be=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Ce=s(K," or "),W=r(K,"CODE",{});var Pe=i(W);S=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),K.forEach(t),te=d(D),I=r(D,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),D.forEach(t)},m(h,$){m(h,p,$),e(p,E),m(h,f,$),m(h,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),m(h,Y,$),m(h,R,$),e(R,Q),e(R,A),e(A,Z),e(R,Te),e(R,O),e(O,ve),e(R,he),m(h,x,$),m(h,j,$),e(j,ee),m(h,ne,$),m(h,F,$),e(F,q),e(q,ke),e(q,U),e(U,pe),e(q,se),e(q,V),e(V,me),e(F,ae),e(F,z),e(z,be),e(z,H),e(H,re),e(z,Ce),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,ye)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Y),h&&t(R),h&&t(x),h&&t(j),h&&t(ne),h&&t(F)}}}function rh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function ih(J){let p,E,f,g,v,T,_,M,_e,Y,R,Q,A,Z,Te,O,ve,he,x,j,ee,ne,F,q,ke,U,pe,se,V,me,ae,z,be,H,re,Ce,W,S,te,I,oe,G,ye,h,$,ie,Ae,ue,N,qe,Oe,He,D,P,We,ze,K,Be,Pe,we,Ue,En,ua,fa,Yo,Fn,ga,_a,Rs,Ye,Ta,Gt,va,ka,Kt,ba,Ca,Ms,ct,Rt,qn,Xt,ya,zn,wa,Es,Le,Jt,La,Je,$a,Zo,Ra,Ma,en,Ea,Fa,Qt,qa,za,Pa,ht,xa,tn,ja,Sa,on,Ia,Na,Da,Pn,Aa,Oa,Yt,Fs,pt,Mt,xn,Zt,Ha,jn,Wa,qs,Ne,eo,Ba,Sn,Ua,Va,to,Ga,nn,Ka,Xa,Ja,sn,oo,zs,mt,Et,In,no,Qa,Nn,Ya,Ps,$e,so,Za,Dn,er,tr,ao,or,an,nr,sr,ar,ro,rr,io,ir,lr,dr,xe,lo,cr,ut,hr,rn,pr,mr,An,ur,fr,gr,Ft,_r,On,Tr,vr,co,xs,ft,qt,Hn,ho,kr,Wn,br,js,Re,po,Cr,Bn,yr,wr,mo,Lr,ln,$r,Rr,Mr,uo,Er,fo,Fr,qr,zr,je,go,Pr,gt,xr,dn,jr,Sr,Un,Ir,Nr,Dr,zt,Ar,Vn,Or,Hr,_o,Ss,_t,Pt,Gn,To,Wr,Kn,Br,Is,Me,vo,Ur,Ee,Vr,cn,Gr,Kr,Xn,Xr,Jr,Jn,Qr,Yr,Qn,Zr,ei,Yn,ti,oi,ni,ko,si,hn,ai,ri,ii,bo,li,Co,di,ci,hi,B,yo,pi,Tt,mi,pn,ui,fi,Zn,gi,_i,Ti,xt,vi,es,ki,bi,wo,Ci,Lo,yi,ts,wi,Li,$o,$i,Ro,Ns,vt,jt,os,Mo,Ri,ns,Mi,Ds,de,Eo,Ei,ss,Fi,qi,Fo,zi,mn,Pi,xi,ji,qo,Si,zo,Ii,Ni,Di,St,Ai,Se,Po,Oi,kt,Hi,un,Wi,Bi,as,Ui,Vi,Gi,It,Ki,rs,Xi,Ji,xo,As,bt,Nt,is,jo,Qi,ls,Yi,Os,ce,So,Zi,ds,el,tl,Io,ol,fn,nl,sl,al,No,rl,Do,il,ll,dl,Dt,cl,Ie,Ao,hl,Ct,pl,gn,ml,ul,cs,fl,gl,_l,At,Tl,hs,vl,kl,Oo,Hs,yt,Ot,ps,Ho,bl,ms,Cl,Ws,X,Wo,yl,us,wl,Ll,_n,Tn,$l,Rl,Ml,De,El,fs,Fl,ql,gs,zl,Pl,_s,xl,jl,Ts,Sl,Il,Nl,Bo,Dl,vn,Al,Ol,Hl,Uo,Wl,Vo,Bl,Ul,Vl,Ht,Gl,fe,Go,Kl,wt,Xl,kn,Jl,Ql,vs,Yl,Zl,ed,Wt,td,ks,od,nd,Ko,sd,Xo,Bs;return T=new dt({}),Z=new dt({}),Xt=new dt({}),Jt=new Fe({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.CTRLConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 1280) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.CTRLConfig.dff",description:`<strong>dff</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimensionality of the inner dimension of the feed forward networks (FFN).`,name:"dff"},{anchor:"transformers.CTRLConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 48) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.CTRLConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.CTRLConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.CTRLConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.CTRLConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.CTRLConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.CTRLConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CTRLConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Yt=new Qe({props:{code:`from transformers import CTRLModel, CTRLConfig

# Initializing a CTRL configuration
configuration = CTRLConfig()

# Initializing a model from the configuration
model = CTRLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLModel, CTRLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CTRL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CTRLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new dt({}),eo=new Fe({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Fe({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new dt({}),so=new Fe({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L320",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Fe({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L353",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ft=new $t({props:{$$slots:{default:[Yc]},$$scope:{ctx:J}}}),co=new Qe({props:{code:`from transformers import CTRLTokenizer, CTRLModel
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ho=new dt({}),po=new Fe({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L493",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),go=new Fe({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L515",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new $t({props:{$$slots:{default:[Zc]},$$scope:{ctx:J}}}),_o=new Qe({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLLMHeadModel

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new dt({}),vo=new Fe({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L609",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new Fe({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L619",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xt=new $t({props:{$$slots:{default:[eh]},$$scope:{ctx:J}}}),wo=new Qe({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Lo=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),$o=new Qe({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Ro=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Mo=new dt({}),Eo=new Fe({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L516",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new $t({props:{$$slots:{default:[th]},$$scope:{ctx:J}}}),Po=new Fe({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L521",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),It=new $t({props:{$$slots:{default:[oh]},$$scope:{ctx:J}}}),xo=new Qe({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),jo=new dt({}),So=new Fe({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L610",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dt=new $t({props:{$$slots:{default:[nh]},$$scope:{ctx:J}}}),Ao=new Fe({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L631",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLLMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),At=new $t({props:{$$slots:{default:[sh]},$$scope:{ctx:J}}}),Oo=new Qe({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ho=new dt({}),Wo=new Fe({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L727",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new $t({props:{$$slots:{default:[ah]},$$scope:{ctx:J}}}),Go=new Fe({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L742",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLForSequenceClassification.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new $t({props:{$$slots:{default:[rh]},$$scope:{ctx:J}}}),Ko=new Qe({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Xo=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFCTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){p=a("meta"),E=l(),f=a("h1"),g=a("a"),v=a("span"),k(T.$$.fragment),_=l(),M=a("span"),_e=n("CTRL"),Y=l(),R=a("h2"),Q=a("a"),A=a("span"),k(Z.$$.fragment),Te=l(),O=a("span"),ve=n("Overview"),he=l(),x=a("p"),j=n("CTRL model was proposed in "),ee=a("a"),ne=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),ke=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),pe=l(),se=a("p"),V=n("The abstract from the paper is the following:"),me=l(),ae=a("p"),z=a("em"),be=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),re=a("p"),Ce=n("Tips:"),W=l(),S=a("ul"),te=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=a("a"),G=n("original implementation"),ye=n(` for
more information.`),h=l(),$=a("li"),ie=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),qe=a("em"),Oe=n("run_generation.py"),He=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),ze=a("code"),K=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Pe=a("code"),we=n("past"),Ue=n(" as input. Using the "),En=a("code"),ua=n("past_key_values"),fa=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Yo=a("a"),Fn=a("code"),ga=n("forward"),_a=n(`
method for more information on the usage of this argument.`),Rs=l(),Ye=a("p"),Ta=n("This model was contributed by "),Gt=a("a"),va=n("keskarnitishr"),ka=n(`. The original code can be found
`),Kt=a("a"),ba=n("here"),Ca=n("."),Ms=l(),ct=a("h2"),Rt=a("a"),qn=a("span"),k(Xt.$$.fragment),ya=l(),zn=a("span"),wa=n("CTRLConfig"),Es=l(),Le=a("div"),k(Jt.$$.fragment),La=l(),Je=a("p"),$a=n("This is the configuration class to store the configuration of a "),Zo=a("a"),Ra=n("CTRLModel"),Ma=n(" or a "),en=a("a"),Ea=n("TFCTRLModel"),Fa=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),qa=n("ctrl"),za=n(" architecture from SalesForce."),Pa=l(),ht=a("p"),xa=n("Configuration objects inherit from "),tn=a("a"),ja=n("PretrainedConfig"),Sa=n(` and can be used to control the model outputs. Read the
documentation from `),on=a("a"),Ia=n("PretrainedConfig"),Na=n(" for more information."),Da=l(),Pn=a("p"),Aa=n("Examples:"),Oa=l(),k(Yt.$$.fragment),Fs=l(),pt=a("h2"),Mt=a("a"),xn=a("span"),k(Zt.$$.fragment),Ha=l(),jn=a("span"),Wa=n("CTRLTokenizer"),qs=l(),Ne=a("div"),k(eo.$$.fragment),Ba=l(),Sn=a("p"),Ua=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Va=l(),to=a("p"),Ga=n("This tokenizer inherits from "),nn=a("a"),Ka=n("PreTrainedTokenizer"),Xa=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ja=l(),sn=a("div"),k(oo.$$.fragment),zs=l(),mt=a("h2"),Et=a("a"),In=a("span"),k(no.$$.fragment),Qa=l(),Nn=a("span"),Ya=n("CTRLModel"),Ps=l(),$e=a("div"),k(so.$$.fragment),Za=l(),Dn=a("p"),er=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),tr=l(),ao=a("p"),or=n("This model inherits from "),an=a("a"),nr=n("PreTrainedModel"),sr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar=l(),ro=a("p"),rr=n("This model is also a PyTorch "),io=a("a"),ir=n("torch.nn.Module"),lr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=l(),xe=a("div"),k(lo.$$.fragment),cr=l(),ut=a("p"),hr=n("The "),rn=a("a"),pr=n("CTRLModel"),mr=n(" forward method, overrides the "),An=a("code"),ur=n("__call__"),fr=n(" special method."),gr=l(),k(Ft.$$.fragment),_r=l(),On=a("p"),Tr=n("Example:"),vr=l(),k(co.$$.fragment),xs=l(),ft=a("h2"),qt=a("a"),Hn=a("span"),k(ho.$$.fragment),kr=l(),Wn=a("span"),br=n("CTRLLMHeadModel"),js=l(),Re=a("div"),k(po.$$.fragment),Cr=l(),Bn=a("p"),yr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),wr=l(),mo=a("p"),Lr=n("This model inherits from "),ln=a("a"),$r=n("PreTrainedModel"),Rr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr=l(),uo=a("p"),Er=n("This model is also a PyTorch "),fo=a("a"),Fr=n("torch.nn.Module"),qr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=l(),je=a("div"),k(go.$$.fragment),Pr=l(),gt=a("p"),xr=n("The "),dn=a("a"),jr=n("CTRLLMHeadModel"),Sr=n(" forward method, overrides the "),Un=a("code"),Ir=n("__call__"),Nr=n(" special method."),Dr=l(),k(zt.$$.fragment),Ar=l(),Vn=a("p"),Or=n("Example:"),Hr=l(),k(_o.$$.fragment),Ss=l(),_t=a("h2"),Pt=a("a"),Gn=a("span"),k(To.$$.fragment),Wr=l(),Kn=a("span"),Br=n("CTRLForSequenceClassification"),Is=l(),Me=a("div"),k(vo.$$.fragment),Ur=l(),Ee=a("p"),Vr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),cn=a("a"),Gr=n("CTRLForSequenceClassification"),Kr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Xn=a("code"),Xr=n("pad_token_id"),Jr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Jn=a("code"),Qr=n("pad_token_id"),Yr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Qn=a("code"),Zr=n("inputs_embeds"),ei=n(" are passed instead of "),Yn=a("code"),ti=n("input_ids"),oi=n(`, it does the same (take the last
value in each row of the batch).`),ni=l(),ko=a("p"),si=n("This model inherits from "),hn=a("a"),ai=n("PreTrainedModel"),ri=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=l(),bo=a("p"),li=n("This model is also a PyTorch "),Co=a("a"),di=n("torch.nn.Module"),ci=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hi=l(),B=a("div"),k(yo.$$.fragment),pi=l(),Tt=a("p"),mi=n("The "),pn=a("a"),ui=n("CTRLForSequenceClassification"),fi=n(" forward method, overrides the "),Zn=a("code"),gi=n("__call__"),_i=n(" special method."),Ti=l(),k(xt.$$.fragment),vi=l(),es=a("p"),ki=n("Example of single-label classification:"),bi=l(),k(wo.$$.fragment),Ci=l(),k(Lo.$$.fragment),yi=l(),ts=a("p"),wi=n("Example of multi-label classification:"),Li=l(),k($o.$$.fragment),$i=l(),k(Ro.$$.fragment),Ns=l(),vt=a("h2"),jt=a("a"),os=a("span"),k(Mo.$$.fragment),Ri=l(),ns=a("span"),Mi=n("TFCTRLModel"),Ds=l(),de=a("div"),k(Eo.$$.fragment),Ei=l(),ss=a("p"),Fi=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),qi=l(),Fo=a("p"),zi=n("This model inherits from "),mn=a("a"),Pi=n("TFPreTrainedModel"),xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ji=l(),qo=a("p"),Si=n("This model is also a "),zo=a("a"),Ii=n("tf.keras.Model"),Ni=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Di=l(),k(St.$$.fragment),Ai=l(),Se=a("div"),k(Po.$$.fragment),Oi=l(),kt=a("p"),Hi=n("The "),un=a("a"),Wi=n("TFCTRLModel"),Bi=n(" forward method, overrides the "),as=a("code"),Ui=n("__call__"),Vi=n(" special method."),Gi=l(),k(It.$$.fragment),Ki=l(),rs=a("p"),Xi=n("Example:"),Ji=l(),k(xo.$$.fragment),As=l(),bt=a("h2"),Nt=a("a"),is=a("span"),k(jo.$$.fragment),Qi=l(),ls=a("span"),Yi=n("TFCTRLLMHeadModel"),Os=l(),ce=a("div"),k(So.$$.fragment),Zi=l(),ds=a("p"),el=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tl=l(),Io=a("p"),ol=n("This model inherits from "),fn=a("a"),nl=n("TFPreTrainedModel"),sl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),al=l(),No=a("p"),rl=n("This model is also a "),Do=a("a"),il=n("tf.keras.Model"),ll=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dl=l(),k(Dt.$$.fragment),cl=l(),Ie=a("div"),k(Ao.$$.fragment),hl=l(),Ct=a("p"),pl=n("The "),gn=a("a"),ml=n("TFCTRLLMHeadModel"),ul=n(" forward method, overrides the "),cs=a("code"),fl=n("__call__"),gl=n(" special method."),_l=l(),k(At.$$.fragment),Tl=l(),hs=a("p"),vl=n("Example:"),kl=l(),k(Oo.$$.fragment),Hs=l(),yt=a("h2"),Ot=a("a"),ps=a("span"),k(Ho.$$.fragment),bl=l(),ms=a("span"),Cl=n("TFCTRLForSequenceClassification"),Ws=l(),X=a("div"),k(Wo.$$.fragment),yl=l(),us=a("p"),wl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),Ll=l(),_n=a("p"),Tn=a("a"),$l=n("TFCTRLForSequenceClassification"),Rl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Ml=l(),De=a("p"),El=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),fs=a("code"),Fl=n("pad_token_id"),ql=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),gs=a("code"),zl=n("pad_token_id"),Pl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),_s=a("code"),xl=n("inputs_embeds"),jl=n(" are passed instead of "),Ts=a("code"),Sl=n("input_ids"),Il=n(`, it does the same (take the last value in
each row of the batch).`),Nl=l(),Bo=a("p"),Dl=n("This model inherits from "),vn=a("a"),Al=n("TFPreTrainedModel"),Ol=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=l(),Uo=a("p"),Wl=n("This model is also a "),Vo=a("a"),Bl=n("tf.keras.Model"),Ul=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl=l(),k(Ht.$$.fragment),Gl=l(),fe=a("div"),k(Go.$$.fragment),Kl=l(),wt=a("p"),Xl=n("The "),kn=a("a"),Jl=n("TFCTRLForSequenceClassification"),Ql=n(" forward method, overrides the "),vs=a("code"),Yl=n("__call__"),Zl=n(" special method."),ed=l(),k(Wt.$$.fragment),td=l(),ks=a("p"),od=n("Example:"),nd=l(),k(Ko.$$.fragment),sd=l(),k(Xo.$$.fragment),this.h()},l(o){const u=Jc('[data-svelte="svelte-1phssyn"]',document.head);p=r(u,"META",{name:!0,content:!0}),u.forEach(t),E=d(o),f=r(o,"H1",{class:!0});var Jo=i(f);g=r(Jo,"A",{id:!0,class:!0,href:!0});var bs=i(g);v=r(bs,"SPAN",{});var Cs=i(v);b(T.$$.fragment,Cs),Cs.forEach(t),bs.forEach(t),_=d(Jo),M=r(Jo,"SPAN",{});var ys=i(M);_e=s(ys,"CTRL"),ys.forEach(t),Jo.forEach(t),Y=d(o),R=r(o,"H2",{class:!0});var Qo=i(R);Q=r(Qo,"A",{id:!0,class:!0,href:!0});var ws=i(Q);A=r(ws,"SPAN",{});var Ls=i(A);b(Z.$$.fragment,Ls),Ls.forEach(t),ws.forEach(t),Te=d(Qo),O=r(Qo,"SPAN",{});var $s=i(O);ve=s($s,"Overview"),$s.forEach(t),Qo.forEach(t),he=d(o),x=r(o,"P",{});var Lt=i(x);j=s(Lt,"CTRL model was proposed in "),ee=r(Lt,"A",{href:!0,rel:!0});var rd=i(ee);ne=s(rd,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),rd.forEach(t),F=s(Lt," by Nitish Shirish Keskar"),q=r(Lt,"EM",{});var id=i(q);ke=s(id,", Bryan McCann"),id.forEach(t),U=s(Lt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Lt.forEach(t),pe=d(o),se=r(o,"P",{});var ld=i(se);V=s(ld,"The abstract from the paper is the following:"),ld.forEach(t),me=d(o),ae=r(o,"P",{});var dd=i(ae);z=r(dd,"EM",{});var cd=i(z);be=s(cd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),cd.forEach(t),dd.forEach(t),H=d(o),re=r(o,"P",{});var hd=i(re);Ce=s(hd,"Tips:"),hd.forEach(t),W=d(o),S=r(o,"UL",{});var Bt=i(S);te=r(Bt,"LI",{});var Us=i(te);I=s(Us,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=r(Us,"A",{href:!0,rel:!0});var pd=i(oe);G=s(pd,"original implementation"),pd.forEach(t),ye=s(Us,` for
more information.`),Us.forEach(t),h=d(Bt),$=r(Bt,"LI",{});var md=i($);ie=s(md,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),md.forEach(t),Ae=d(Bt),ue=r(Bt,"LI",{});var Vs=i(ue);N=s(Vs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),qe=r(Vs,"EM",{});var ud=i(qe);Oe=s(ud,"run_generation.py"),ud.forEach(t),He=s(Vs," example script."),Vs.forEach(t),D=d(Bt),P=r(Bt,"LI",{});var Ze=i(P);We=s(Ze,"The PyTorch models can take the "),ze=r(Ze,"CODE",{});var fd=i(ze);K=s(fd,"past_key_values"),fd.forEach(t),Be=s(Ze,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Pe=r(Ze,"CODE",{});var gd=i(Pe);we=s(gd,"past"),gd.forEach(t),Ue=s(Ze," as input. Using the "),En=r(Ze,"CODE",{});var _d=i(En);ua=s(_d,"past_key_values"),_d.forEach(t),fa=s(Ze,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Yo=r(Ze,"A",{href:!0});var Td=i(Yo);Fn=r(Td,"CODE",{});var vd=i(Fn);ga=s(vd,"forward"),vd.forEach(t),Td.forEach(t),_a=s(Ze,`
method for more information on the usage of this argument.`),Ze.forEach(t),Bt.forEach(t),Rs=d(o),Ye=r(o,"P",{});var bn=i(Ye);Ta=s(bn,"This model was contributed by "),Gt=r(bn,"A",{href:!0,rel:!0});var kd=i(Gt);va=s(kd,"keskarnitishr"),kd.forEach(t),ka=s(bn,`. The original code can be found
`),Kt=r(bn,"A",{href:!0,rel:!0});var bd=i(Kt);ba=s(bd,"here"),bd.forEach(t),Ca=s(bn,"."),bn.forEach(t),Ms=d(o),ct=r(o,"H2",{class:!0});var Gs=i(ct);Rt=r(Gs,"A",{id:!0,class:!0,href:!0});var Cd=i(Rt);qn=r(Cd,"SPAN",{});var yd=i(qn);b(Xt.$$.fragment,yd),yd.forEach(t),Cd.forEach(t),ya=d(Gs),zn=r(Gs,"SPAN",{});var wd=i(zn);wa=s(wd,"CTRLConfig"),wd.forEach(t),Gs.forEach(t),Es=d(o),Le=r(o,"DIV",{class:!0});var et=i(Le);b(Jt.$$.fragment,et),La=d(et),Je=r(et,"P",{});var Ut=i(Je);$a=s(Ut,"This is the configuration class to store the configuration of a "),Zo=r(Ut,"A",{href:!0});var Ld=i(Zo);Ra=s(Ld,"CTRLModel"),Ld.forEach(t),Ma=s(Ut," or a "),en=r(Ut,"A",{href:!0});var $d=i(en);Ea=s($d,"TFCTRLModel"),$d.forEach(t),Fa=s(Ut,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Ut,"A",{href:!0,rel:!0});var Rd=i(Qt);qa=s(Rd,"ctrl"),Rd.forEach(t),za=s(Ut," architecture from SalesForce."),Ut.forEach(t),Pa=d(et),ht=r(et,"P",{});var Cn=i(ht);xa=s(Cn,"Configuration objects inherit from "),tn=r(Cn,"A",{href:!0});var Md=i(tn);ja=s(Md,"PretrainedConfig"),Md.forEach(t),Sa=s(Cn,` and can be used to control the model outputs. Read the
documentation from `),on=r(Cn,"A",{href:!0});var Ed=i(on);Ia=s(Ed,"PretrainedConfig"),Ed.forEach(t),Na=s(Cn," for more information."),Cn.forEach(t),Da=d(et),Pn=r(et,"P",{});var Fd=i(Pn);Aa=s(Fd,"Examples:"),Fd.forEach(t),Oa=d(et),b(Yt.$$.fragment,et),et.forEach(t),Fs=d(o),pt=r(o,"H2",{class:!0});var Ks=i(pt);Mt=r(Ks,"A",{id:!0,class:!0,href:!0});var qd=i(Mt);xn=r(qd,"SPAN",{});var zd=i(xn);b(Zt.$$.fragment,zd),zd.forEach(t),qd.forEach(t),Ha=d(Ks),jn=r(Ks,"SPAN",{});var Pd=i(jn);Wa=s(Pd,"CTRLTokenizer"),Pd.forEach(t),Ks.forEach(t),qs=d(o),Ne=r(o,"DIV",{class:!0});var Vt=i(Ne);b(eo.$$.fragment,Vt),Ba=d(Vt),Sn=r(Vt,"P",{});var xd=i(Sn);Ua=s(xd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),xd.forEach(t),Va=d(Vt),to=r(Vt,"P",{});var Xs=i(to);Ga=s(Xs,"This tokenizer inherits from "),nn=r(Xs,"A",{href:!0});var jd=i(nn);Ka=s(jd,"PreTrainedTokenizer"),jd.forEach(t),Xa=s(Xs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xs.forEach(t),Ja=d(Vt),sn=r(Vt,"DIV",{class:!0});var Sd=i(sn);b(oo.$$.fragment,Sd),Sd.forEach(t),Vt.forEach(t),zs=d(o),mt=r(o,"H2",{class:!0});var Js=i(mt);Et=r(Js,"A",{id:!0,class:!0,href:!0});var Id=i(Et);In=r(Id,"SPAN",{});var Nd=i(In);b(no.$$.fragment,Nd),Nd.forEach(t),Id.forEach(t),Qa=d(Js),Nn=r(Js,"SPAN",{});var Dd=i(Nn);Ya=s(Dd,"CTRLModel"),Dd.forEach(t),Js.forEach(t),Ps=d(o),$e=r(o,"DIV",{class:!0});var tt=i($e);b(so.$$.fragment,tt),Za=d(tt),Dn=r(tt,"P",{});var Ad=i(Dn);er=s(Ad,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ad.forEach(t),tr=d(tt),ao=r(tt,"P",{});var Qs=i(ao);or=s(Qs,"This model inherits from "),an=r(Qs,"A",{href:!0});var Od=i(an);nr=s(Od,"PreTrainedModel"),Od.forEach(t),sr=s(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qs.forEach(t),ar=d(tt),ro=r(tt,"P",{});var Ys=i(ro);rr=s(Ys,"This model is also a PyTorch "),io=r(Ys,"A",{href:!0,rel:!0});var Hd=i(io);ir=s(Hd,"torch.nn.Module"),Hd.forEach(t),lr=s(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),dr=d(tt),xe=r(tt,"DIV",{class:!0});var ot=i(xe);b(lo.$$.fragment,ot),cr=d(ot),ut=r(ot,"P",{});var yn=i(ut);hr=s(yn,"The "),rn=r(yn,"A",{href:!0});var Wd=i(rn);pr=s(Wd,"CTRLModel"),Wd.forEach(t),mr=s(yn," forward method, overrides the "),An=r(yn,"CODE",{});var Bd=i(An);ur=s(Bd,"__call__"),Bd.forEach(t),fr=s(yn," special method."),yn.forEach(t),gr=d(ot),b(Ft.$$.fragment,ot),_r=d(ot),On=r(ot,"P",{});var Ud=i(On);Tr=s(Ud,"Example:"),Ud.forEach(t),vr=d(ot),b(co.$$.fragment,ot),ot.forEach(t),tt.forEach(t),xs=d(o),ft=r(o,"H2",{class:!0});var Zs=i(ft);qt=r(Zs,"A",{id:!0,class:!0,href:!0});var Vd=i(qt);Hn=r(Vd,"SPAN",{});var Gd=i(Hn);b(ho.$$.fragment,Gd),Gd.forEach(t),Vd.forEach(t),kr=d(Zs),Wn=r(Zs,"SPAN",{});var Kd=i(Wn);br=s(Kd,"CTRLLMHeadModel"),Kd.forEach(t),Zs.forEach(t),js=d(o),Re=r(o,"DIV",{class:!0});var nt=i(Re);b(po.$$.fragment,nt),Cr=d(nt),Bn=r(nt,"P",{});var Xd=i(Bn);yr=s(Xd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xd.forEach(t),wr=d(nt),mo=r(nt,"P",{});var ea=i(mo);Lr=s(ea,"This model inherits from "),ln=r(ea,"A",{href:!0});var Jd=i(ln);$r=s(Jd,"PreTrainedModel"),Jd.forEach(t),Rr=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),Mr=d(nt),uo=r(nt,"P",{});var ta=i(uo);Er=s(ta,"This model is also a PyTorch "),fo=r(ta,"A",{href:!0,rel:!0});var Qd=i(fo);Fr=s(Qd,"torch.nn.Module"),Qd.forEach(t),qr=s(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(t),zr=d(nt),je=r(nt,"DIV",{class:!0});var st=i(je);b(go.$$.fragment,st),Pr=d(st),gt=r(st,"P",{});var wn=i(gt);xr=s(wn,"The "),dn=r(wn,"A",{href:!0});var Yd=i(dn);jr=s(Yd,"CTRLLMHeadModel"),Yd.forEach(t),Sr=s(wn," forward method, overrides the "),Un=r(wn,"CODE",{});var Zd=i(Un);Ir=s(Zd,"__call__"),Zd.forEach(t),Nr=s(wn," special method."),wn.forEach(t),Dr=d(st),b(zt.$$.fragment,st),Ar=d(st),Vn=r(st,"P",{});var ec=i(Vn);Or=s(ec,"Example:"),ec.forEach(t),Hr=d(st),b(_o.$$.fragment,st),st.forEach(t),nt.forEach(t),Ss=d(o),_t=r(o,"H2",{class:!0});var oa=i(_t);Pt=r(oa,"A",{id:!0,class:!0,href:!0});var tc=i(Pt);Gn=r(tc,"SPAN",{});var oc=i(Gn);b(To.$$.fragment,oc),oc.forEach(t),tc.forEach(t),Wr=d(oa),Kn=r(oa,"SPAN",{});var nc=i(Kn);Br=s(nc,"CTRLForSequenceClassification"),nc.forEach(t),oa.forEach(t),Is=d(o),Me=r(o,"DIV",{class:!0});var at=i(Me);b(vo.$$.fragment,at),Ur=d(at),Ee=r(at,"P",{});var Ve=i(Ee);Vr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),cn=r(Ve,"A",{href:!0});var sc=i(cn);Gr=s(sc,"CTRLForSequenceClassification"),sc.forEach(t),Kr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Xn=r(Ve,"CODE",{});var ac=i(Xn);Xr=s(ac,"pad_token_id"),ac.forEach(t),Jr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Jn=r(Ve,"CODE",{});var rc=i(Jn);Qr=s(rc,"pad_token_id"),rc.forEach(t),Yr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Qn=r(Ve,"CODE",{});var ic=i(Qn);Zr=s(ic,"inputs_embeds"),ic.forEach(t),ei=s(Ve," are passed instead of "),Yn=r(Ve,"CODE",{});var lc=i(Yn);ti=s(lc,"input_ids"),lc.forEach(t),oi=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),ni=d(at),ko=r(at,"P",{});var na=i(ko);si=s(na,"This model inherits from "),hn=r(na,"A",{href:!0});var dc=i(hn);ai=s(dc,"PreTrainedModel"),dc.forEach(t),ri=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(t),ii=d(at),bo=r(at,"P",{});var sa=i(bo);li=s(sa,"This model is also a PyTorch "),Co=r(sa,"A",{href:!0,rel:!0});var cc=i(Co);di=s(cc,"torch.nn.Module"),cc.forEach(t),ci=s(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(t),hi=d(at),B=r(at,"DIV",{class:!0});var le=i(B);b(yo.$$.fragment,le),pi=d(le),Tt=r(le,"P",{});var Ln=i(Tt);mi=s(Ln,"The "),pn=r(Ln,"A",{href:!0});var hc=i(pn);ui=s(hc,"CTRLForSequenceClassification"),hc.forEach(t),fi=s(Ln," forward method, overrides the "),Zn=r(Ln,"CODE",{});var pc=i(Zn);gi=s(pc,"__call__"),pc.forEach(t),_i=s(Ln," special method."),Ln.forEach(t),Ti=d(le),b(xt.$$.fragment,le),vi=d(le),es=r(le,"P",{});var mc=i(es);ki=s(mc,"Example of single-label classification:"),mc.forEach(t),bi=d(le),b(wo.$$.fragment,le),Ci=d(le),b(Lo.$$.fragment,le),yi=d(le),ts=r(le,"P",{});var uc=i(ts);wi=s(uc,"Example of multi-label classification:"),uc.forEach(t),Li=d(le),b($o.$$.fragment,le),$i=d(le),b(Ro.$$.fragment,le),le.forEach(t),at.forEach(t),Ns=d(o),vt=r(o,"H2",{class:!0});var aa=i(vt);jt=r(aa,"A",{id:!0,class:!0,href:!0});var fc=i(jt);os=r(fc,"SPAN",{});var gc=i(os);b(Mo.$$.fragment,gc),gc.forEach(t),fc.forEach(t),Ri=d(aa),ns=r(aa,"SPAN",{});var _c=i(ns);Mi=s(_c,"TFCTRLModel"),_c.forEach(t),aa.forEach(t),Ds=d(o),de=r(o,"DIV",{class:!0});var Ge=i(de);b(Eo.$$.fragment,Ge),Ei=d(Ge),ss=r(Ge,"P",{});var Tc=i(ss);Fi=s(Tc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Tc.forEach(t),qi=d(Ge),Fo=r(Ge,"P",{});var ra=i(Fo);zi=s(ra,"This model inherits from "),mn=r(ra,"A",{href:!0});var vc=i(mn);Pi=s(vc,"TFPreTrainedModel"),vc.forEach(t),xi=s(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),ji=d(Ge),qo=r(Ge,"P",{});var ia=i(qo);Si=s(ia,"This model is also a "),zo=r(ia,"A",{href:!0,rel:!0});var kc=i(zo);Ii=s(kc,"tf.keras.Model"),kc.forEach(t),Ni=s(ia,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ia.forEach(t),Di=d(Ge),b(St.$$.fragment,Ge),Ai=d(Ge),Se=r(Ge,"DIV",{class:!0});var rt=i(Se);b(Po.$$.fragment,rt),Oi=d(rt),kt=r(rt,"P",{});var $n=i(kt);Hi=s($n,"The "),un=r($n,"A",{href:!0});var bc=i(un);Wi=s(bc,"TFCTRLModel"),bc.forEach(t),Bi=s($n," forward method, overrides the "),as=r($n,"CODE",{});var Cc=i(as);Ui=s(Cc,"__call__"),Cc.forEach(t),Vi=s($n," special method."),$n.forEach(t),Gi=d(rt),b(It.$$.fragment,rt),Ki=d(rt),rs=r(rt,"P",{});var yc=i(rs);Xi=s(yc,"Example:"),yc.forEach(t),Ji=d(rt),b(xo.$$.fragment,rt),rt.forEach(t),Ge.forEach(t),As=d(o),bt=r(o,"H2",{class:!0});var la=i(bt);Nt=r(la,"A",{id:!0,class:!0,href:!0});var wc=i(Nt);is=r(wc,"SPAN",{});var Lc=i(is);b(jo.$$.fragment,Lc),Lc.forEach(t),wc.forEach(t),Qi=d(la),ls=r(la,"SPAN",{});var $c=i(ls);Yi=s($c,"TFCTRLLMHeadModel"),$c.forEach(t),la.forEach(t),Os=d(o),ce=r(o,"DIV",{class:!0});var Ke=i(ce);b(So.$$.fragment,Ke),Zi=d(Ke),ds=r(Ke,"P",{});var Rc=i(ds);el=s(Rc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Rc.forEach(t),tl=d(Ke),Io=r(Ke,"P",{});var da=i(Io);ol=s(da,"This model inherits from "),fn=r(da,"A",{href:!0});var Mc=i(fn);nl=s(Mc,"TFPreTrainedModel"),Mc.forEach(t),sl=s(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(t),al=d(Ke),No=r(Ke,"P",{});var ca=i(No);rl=s(ca,"This model is also a "),Do=r(ca,"A",{href:!0,rel:!0});var Ec=i(Do);il=s(Ec,"tf.keras.Model"),Ec.forEach(t),ll=s(ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ca.forEach(t),dl=d(Ke),b(Dt.$$.fragment,Ke),cl=d(Ke),Ie=r(Ke,"DIV",{class:!0});var it=i(Ie);b(Ao.$$.fragment,it),hl=d(it),Ct=r(it,"P",{});var Rn=i(Ct);pl=s(Rn,"The "),gn=r(Rn,"A",{href:!0});var Fc=i(gn);ml=s(Fc,"TFCTRLLMHeadModel"),Fc.forEach(t),ul=s(Rn," forward method, overrides the "),cs=r(Rn,"CODE",{});var qc=i(cs);fl=s(qc,"__call__"),qc.forEach(t),gl=s(Rn," special method."),Rn.forEach(t),_l=d(it),b(At.$$.fragment,it),Tl=d(it),hs=r(it,"P",{});var zc=i(hs);vl=s(zc,"Example:"),zc.forEach(t),kl=d(it),b(Oo.$$.fragment,it),it.forEach(t),Ke.forEach(t),Hs=d(o),yt=r(o,"H2",{class:!0});var ha=i(yt);Ot=r(ha,"A",{id:!0,class:!0,href:!0});var Pc=i(Ot);ps=r(Pc,"SPAN",{});var xc=i(ps);b(Ho.$$.fragment,xc),xc.forEach(t),Pc.forEach(t),bl=d(ha),ms=r(ha,"SPAN",{});var jc=i(ms);Cl=s(jc,"TFCTRLForSequenceClassification"),jc.forEach(t),ha.forEach(t),Ws=d(o),X=r(o,"DIV",{class:!0});var ge=i(X);b(Wo.$$.fragment,ge),yl=d(ge),us=r(ge,"P",{});var Sc=i(us);wl=s(Sc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),Sc.forEach(t),Ll=d(ge),_n=r(ge,"P",{});var ad=i(_n);Tn=r(ad,"A",{href:!0});var Ic=i(Tn);$l=s(Ic,"TFCTRLForSequenceClassification"),Ic.forEach(t),Rl=s(ad,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),ad.forEach(t),Ml=d(ge),De=r(ge,"P",{});var lt=i(De);El=s(lt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),fs=r(lt,"CODE",{});var Nc=i(fs);Fl=s(Nc,"pad_token_id"),Nc.forEach(t),ql=s(lt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),gs=r(lt,"CODE",{});var Dc=i(gs);zl=s(Dc,"pad_token_id"),Dc.forEach(t),Pl=s(lt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),_s=r(lt,"CODE",{});var Ac=i(_s);xl=s(Ac,"inputs_embeds"),Ac.forEach(t),jl=s(lt," are passed instead of "),Ts=r(lt,"CODE",{});var Oc=i(Ts);Sl=s(Oc,"input_ids"),Oc.forEach(t),Il=s(lt,`, it does the same (take the last value in
each row of the batch).`),lt.forEach(t),Nl=d(ge),Bo=r(ge,"P",{});var pa=i(Bo);Dl=s(pa,"This model inherits from "),vn=r(pa,"A",{href:!0});var Hc=i(vn);Al=s(Hc,"TFPreTrainedModel"),Hc.forEach(t),Ol=s(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(t),Hl=d(ge),Uo=r(ge,"P",{});var ma=i(Uo);Wl=s(ma,"This model is also a "),Vo=r(ma,"A",{href:!0,rel:!0});var Wc=i(Vo);Bl=s(Wc,"tf.keras.Model"),Wc.forEach(t),Ul=s(ma,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ma.forEach(t),Vl=d(ge),b(Ht.$$.fragment,ge),Gl=d(ge),fe=r(ge,"DIV",{class:!0});var Xe=i(fe);b(Go.$$.fragment,Xe),Kl=d(Xe),wt=r(Xe,"P",{});var Mn=i(wt);Xl=s(Mn,"The "),kn=r(Mn,"A",{href:!0});var Bc=i(kn);Jl=s(Bc,"TFCTRLForSequenceClassification"),Bc.forEach(t),Ql=s(Mn," forward method, overrides the "),vs=r(Mn,"CODE",{});var Uc=i(vs);Yl=s(Uc,"__call__"),Uc.forEach(t),Zl=s(Mn," special method."),Mn.forEach(t),ed=d(Xe),b(Wt.$$.fragment,Xe),td=d(Xe),ks=r(Xe,"P",{});var Vc=i(ks);od=s(Vc,"Example:"),Vc.forEach(t),nd=d(Xe),b(Ko.$$.fragment,Xe),sd=d(Xe),b(Xo.$$.fragment,Xe),Xe.forEach(t),ge.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(lh)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(f,"class","relative group"),c(Q,"id","overview"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#overview"),c(R,"class","relative group"),c(ee,"href","https://arxiv.org/abs/1909.05858"),c(ee,"rel","nofollow"),c(oe,"href","https://github.com/salesforce/ctrl"),c(oe,"rel","nofollow"),c(Yo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Rt,"id","transformers.CTRLConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLConfig"),c(ct,"class","relative group"),c(Zo,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),c(en,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(tn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(on,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Le,"class","docstring"),c(Mt,"id","transformers.CTRLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLTokenizer"),c(pt,"class","relative group"),c(nn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(sn,"class","docstring"),c(Ne,"class","docstring"),c(Et,"id","transformers.CTRLModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLModel"),c(mt,"class","relative group"),c(an,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(rn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),c(xe,"class","docstring"),c($e,"class","docstring"),c(qt,"id","transformers.CTRLLMHeadModel"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(ln,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(dn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(je,"class","docstring"),c(Re,"class","docstring"),c(Pt,"id","transformers.CTRLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.CTRLForSequenceClassification"),c(_t,"class","relative group"),c(cn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(hn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Co,"rel","nofollow"),c(pn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(B,"class","docstring"),c(Me,"class","docstring"),c(jt,"id","transformers.TFCTRLModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFCTRLModel"),c(vt,"class","relative group"),c(mn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zo,"rel","nofollow"),c(un,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Se,"class","docstring"),c(de,"class","docstring"),c(Nt,"id","transformers.TFCTRLLMHeadModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFCTRLLMHeadModel"),c(bt,"class","relative group"),c(fn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Do,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Do,"rel","nofollow"),c(gn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(Ie,"class","docstring"),c(ce,"class","docstring"),c(Ot,"id","transformers.TFCTRLForSequenceClassification"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFCTRLForSequenceClassification"),c(yt,"class","relative group"),c(Tn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vo,"rel","nofollow"),c(kn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(fe,"class","docstring"),c(X,"class","docstring")},m(o,u){e(document.head,p),m(o,E,u),m(o,f,u),e(f,g),e(g,v),C(T,v,null),e(f,_),e(f,M),e(M,_e),m(o,Y,u),m(o,R,u),e(R,Q),e(Q,A),C(Z,A,null),e(R,Te),e(R,O),e(O,ve),m(o,he,u),m(o,x,u),e(x,j),e(x,ee),e(ee,ne),e(x,F),e(x,q),e(q,ke),e(x,U),m(o,pe,u),m(o,se,u),e(se,V),m(o,me,u),m(o,ae,u),e(ae,z),e(z,be),m(o,H,u),m(o,re,u),e(re,Ce),m(o,W,u),m(o,S,u),e(S,te),e(te,I),e(te,oe),e(oe,G),e(te,ye),e(S,h),e(S,$),e($,ie),e(S,Ae),e(S,ue),e(ue,N),e(ue,qe),e(qe,Oe),e(ue,He),e(S,D),e(S,P),e(P,We),e(P,ze),e(ze,K),e(P,Be),e(P,Pe),e(Pe,we),e(P,Ue),e(P,En),e(En,ua),e(P,fa),e(P,Yo),e(Yo,Fn),e(Fn,ga),e(P,_a),m(o,Rs,u),m(o,Ye,u),e(Ye,Ta),e(Ye,Gt),e(Gt,va),e(Ye,ka),e(Ye,Kt),e(Kt,ba),e(Ye,Ca),m(o,Ms,u),m(o,ct,u),e(ct,Rt),e(Rt,qn),C(Xt,qn,null),e(ct,ya),e(ct,zn),e(zn,wa),m(o,Es,u),m(o,Le,u),C(Jt,Le,null),e(Le,La),e(Le,Je),e(Je,$a),e(Je,Zo),e(Zo,Ra),e(Je,Ma),e(Je,en),e(en,Ea),e(Je,Fa),e(Je,Qt),e(Qt,qa),e(Je,za),e(Le,Pa),e(Le,ht),e(ht,xa),e(ht,tn),e(tn,ja),e(ht,Sa),e(ht,on),e(on,Ia),e(ht,Na),e(Le,Da),e(Le,Pn),e(Pn,Aa),e(Le,Oa),C(Yt,Le,null),m(o,Fs,u),m(o,pt,u),e(pt,Mt),e(Mt,xn),C(Zt,xn,null),e(pt,Ha),e(pt,jn),e(jn,Wa),m(o,qs,u),m(o,Ne,u),C(eo,Ne,null),e(Ne,Ba),e(Ne,Sn),e(Sn,Ua),e(Ne,Va),e(Ne,to),e(to,Ga),e(to,nn),e(nn,Ka),e(to,Xa),e(Ne,Ja),e(Ne,sn),C(oo,sn,null),m(o,zs,u),m(o,mt,u),e(mt,Et),e(Et,In),C(no,In,null),e(mt,Qa),e(mt,Nn),e(Nn,Ya),m(o,Ps,u),m(o,$e,u),C(so,$e,null),e($e,Za),e($e,Dn),e(Dn,er),e($e,tr),e($e,ao),e(ao,or),e(ao,an),e(an,nr),e(ao,sr),e($e,ar),e($e,ro),e(ro,rr),e(ro,io),e(io,ir),e(ro,lr),e($e,dr),e($e,xe),C(lo,xe,null),e(xe,cr),e(xe,ut),e(ut,hr),e(ut,rn),e(rn,pr),e(ut,mr),e(ut,An),e(An,ur),e(ut,fr),e(xe,gr),C(Ft,xe,null),e(xe,_r),e(xe,On),e(On,Tr),e(xe,vr),C(co,xe,null),m(o,xs,u),m(o,ft,u),e(ft,qt),e(qt,Hn),C(ho,Hn,null),e(ft,kr),e(ft,Wn),e(Wn,br),m(o,js,u),m(o,Re,u),C(po,Re,null),e(Re,Cr),e(Re,Bn),e(Bn,yr),e(Re,wr),e(Re,mo),e(mo,Lr),e(mo,ln),e(ln,$r),e(mo,Rr),e(Re,Mr),e(Re,uo),e(uo,Er),e(uo,fo),e(fo,Fr),e(uo,qr),e(Re,zr),e(Re,je),C(go,je,null),e(je,Pr),e(je,gt),e(gt,xr),e(gt,dn),e(dn,jr),e(gt,Sr),e(gt,Un),e(Un,Ir),e(gt,Nr),e(je,Dr),C(zt,je,null),e(je,Ar),e(je,Vn),e(Vn,Or),e(je,Hr),C(_o,je,null),m(o,Ss,u),m(o,_t,u),e(_t,Pt),e(Pt,Gn),C(To,Gn,null),e(_t,Wr),e(_t,Kn),e(Kn,Br),m(o,Is,u),m(o,Me,u),C(vo,Me,null),e(Me,Ur),e(Me,Ee),e(Ee,Vr),e(Ee,cn),e(cn,Gr),e(Ee,Kr),e(Ee,Xn),e(Xn,Xr),e(Ee,Jr),e(Ee,Jn),e(Jn,Qr),e(Ee,Yr),e(Ee,Qn),e(Qn,Zr),e(Ee,ei),e(Ee,Yn),e(Yn,ti),e(Ee,oi),e(Me,ni),e(Me,ko),e(ko,si),e(ko,hn),e(hn,ai),e(ko,ri),e(Me,ii),e(Me,bo),e(bo,li),e(bo,Co),e(Co,di),e(bo,ci),e(Me,hi),e(Me,B),C(yo,B,null),e(B,pi),e(B,Tt),e(Tt,mi),e(Tt,pn),e(pn,ui),e(Tt,fi),e(Tt,Zn),e(Zn,gi),e(Tt,_i),e(B,Ti),C(xt,B,null),e(B,vi),e(B,es),e(es,ki),e(B,bi),C(wo,B,null),e(B,Ci),C(Lo,B,null),e(B,yi),e(B,ts),e(ts,wi),e(B,Li),C($o,B,null),e(B,$i),C(Ro,B,null),m(o,Ns,u),m(o,vt,u),e(vt,jt),e(jt,os),C(Mo,os,null),e(vt,Ri),e(vt,ns),e(ns,Mi),m(o,Ds,u),m(o,de,u),C(Eo,de,null),e(de,Ei),e(de,ss),e(ss,Fi),e(de,qi),e(de,Fo),e(Fo,zi),e(Fo,mn),e(mn,Pi),e(Fo,xi),e(de,ji),e(de,qo),e(qo,Si),e(qo,zo),e(zo,Ii),e(qo,Ni),e(de,Di),C(St,de,null),e(de,Ai),e(de,Se),C(Po,Se,null),e(Se,Oi),e(Se,kt),e(kt,Hi),e(kt,un),e(un,Wi),e(kt,Bi),e(kt,as),e(as,Ui),e(kt,Vi),e(Se,Gi),C(It,Se,null),e(Se,Ki),e(Se,rs),e(rs,Xi),e(Se,Ji),C(xo,Se,null),m(o,As,u),m(o,bt,u),e(bt,Nt),e(Nt,is),C(jo,is,null),e(bt,Qi),e(bt,ls),e(ls,Yi),m(o,Os,u),m(o,ce,u),C(So,ce,null),e(ce,Zi),e(ce,ds),e(ds,el),e(ce,tl),e(ce,Io),e(Io,ol),e(Io,fn),e(fn,nl),e(Io,sl),e(ce,al),e(ce,No),e(No,rl),e(No,Do),e(Do,il),e(No,ll),e(ce,dl),C(Dt,ce,null),e(ce,cl),e(ce,Ie),C(Ao,Ie,null),e(Ie,hl),e(Ie,Ct),e(Ct,pl),e(Ct,gn),e(gn,ml),e(Ct,ul),e(Ct,cs),e(cs,fl),e(Ct,gl),e(Ie,_l),C(At,Ie,null),e(Ie,Tl),e(Ie,hs),e(hs,vl),e(Ie,kl),C(Oo,Ie,null),m(o,Hs,u),m(o,yt,u),e(yt,Ot),e(Ot,ps),C(Ho,ps,null),e(yt,bl),e(yt,ms),e(ms,Cl),m(o,Ws,u),m(o,X,u),C(Wo,X,null),e(X,yl),e(X,us),e(us,wl),e(X,Ll),e(X,_n),e(_n,Tn),e(Tn,$l),e(_n,Rl),e(X,Ml),e(X,De),e(De,El),e(De,fs),e(fs,Fl),e(De,ql),e(De,gs),e(gs,zl),e(De,Pl),e(De,_s),e(_s,xl),e(De,jl),e(De,Ts),e(Ts,Sl),e(De,Il),e(X,Nl),e(X,Bo),e(Bo,Dl),e(Bo,vn),e(vn,Al),e(Bo,Ol),e(X,Hl),e(X,Uo),e(Uo,Wl),e(Uo,Vo),e(Vo,Bl),e(Uo,Ul),e(X,Vl),C(Ht,X,null),e(X,Gl),e(X,fe),C(Go,fe,null),e(fe,Kl),e(fe,wt),e(wt,Xl),e(wt,kn),e(kn,Jl),e(wt,Ql),e(wt,vs),e(vs,Yl),e(wt,Zl),e(fe,ed),C(Wt,fe,null),e(fe,td),e(fe,ks),e(ks,od),e(fe,nd),C(Ko,fe,null),e(fe,sd),C(Xo,fe,null),Bs=!0},p(o,[u]){const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:o}),Ft.$set(Jo);const bs={};u&2&&(bs.$$scope={dirty:u,ctx:o}),zt.$set(bs);const Cs={};u&2&&(Cs.$$scope={dirty:u,ctx:o}),xt.$set(Cs);const ys={};u&2&&(ys.$$scope={dirty:u,ctx:o}),St.$set(ys);const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:o}),It.$set(Qo);const ws={};u&2&&(ws.$$scope={dirty:u,ctx:o}),Dt.$set(ws);const Ls={};u&2&&(Ls.$$scope={dirty:u,ctx:o}),At.$set(Ls);const $s={};u&2&&($s.$$scope={dirty:u,ctx:o}),Ht.$set($s);const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:o}),Wt.$set(Lt)},i(o){Bs||(y(T.$$.fragment,o),y(Z.$$.fragment,o),y(Xt.$$.fragment,o),y(Jt.$$.fragment,o),y(Yt.$$.fragment,o),y(Zt.$$.fragment,o),y(eo.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(lo.$$.fragment,o),y(Ft.$$.fragment,o),y(co.$$.fragment,o),y(ho.$$.fragment,o),y(po.$$.fragment,o),y(go.$$.fragment,o),y(zt.$$.fragment,o),y(_o.$$.fragment,o),y(To.$$.fragment,o),y(vo.$$.fragment,o),y(yo.$$.fragment,o),y(xt.$$.fragment,o),y(wo.$$.fragment,o),y(Lo.$$.fragment,o),y($o.$$.fragment,o),y(Ro.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(St.$$.fragment,o),y(Po.$$.fragment,o),y(It.$$.fragment,o),y(xo.$$.fragment,o),y(jo.$$.fragment,o),y(So.$$.fragment,o),y(Dt.$$.fragment,o),y(Ao.$$.fragment,o),y(At.$$.fragment,o),y(Oo.$$.fragment,o),y(Ho.$$.fragment,o),y(Wo.$$.fragment,o),y(Ht.$$.fragment,o),y(Go.$$.fragment,o),y(Wt.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),Bs=!0)},o(o){w(T.$$.fragment,o),w(Z.$$.fragment,o),w(Xt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(lo.$$.fragment,o),w(Ft.$$.fragment,o),w(co.$$.fragment,o),w(ho.$$.fragment,o),w(po.$$.fragment,o),w(go.$$.fragment,o),w(zt.$$.fragment,o),w(_o.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(yo.$$.fragment,o),w(xt.$$.fragment,o),w(wo.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Ro.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(St.$$.fragment,o),w(Po.$$.fragment,o),w(It.$$.fragment,o),w(xo.$$.fragment,o),w(jo.$$.fragment,o),w(So.$$.fragment,o),w(Dt.$$.fragment,o),w(Ao.$$.fragment,o),w(At.$$.fragment,o),w(Oo.$$.fragment,o),w(Ho.$$.fragment,o),w(Wo.$$.fragment,o),w(Ht.$$.fragment,o),w(Go.$$.fragment,o),w(Wt.$$.fragment,o),w(Ko.$$.fragment,o),w(Xo.$$.fragment,o),Bs=!1},d(o){t(p),o&&t(E),o&&t(f),L(T),o&&t(Y),o&&t(R),L(Z),o&&t(he),o&&t(x),o&&t(pe),o&&t(se),o&&t(me),o&&t(ae),o&&t(H),o&&t(re),o&&t(W),o&&t(S),o&&t(Rs),o&&t(Ye),o&&t(Ms),o&&t(ct),L(Xt),o&&t(Es),o&&t(Le),L(Jt),L(Yt),o&&t(Fs),o&&t(pt),L(Zt),o&&t(qs),o&&t(Ne),L(eo),L(oo),o&&t(zs),o&&t(mt),L(no),o&&t(Ps),o&&t($e),L(so),L(lo),L(Ft),L(co),o&&t(xs),o&&t(ft),L(ho),o&&t(js),o&&t(Re),L(po),L(go),L(zt),L(_o),o&&t(Ss),o&&t(_t),L(To),o&&t(Is),o&&t(Me),L(vo),L(yo),L(xt),L(wo),L(Lo),L($o),L(Ro),o&&t(Ns),o&&t(vt),L(Mo),o&&t(Ds),o&&t(de),L(Eo),L(St),L(Po),L(It),L(xo),o&&t(As),o&&t(bt),L(jo),o&&t(Os),o&&t(ce),L(So),L(Dt),L(Ao),L(At),L(Oo),o&&t(Hs),o&&t(yt),L(Ho),o&&t(Ws),o&&t(X),L(Wo),L(Ht),L(Go),L(Wt),L(Ko),L(Xo)}}}const lh={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function dh(J){return Qc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fh extends Gc{constructor(p){super();Kc(this,p,dh,ih,Xc,{})}}export{fh as default,lh as metadata};
