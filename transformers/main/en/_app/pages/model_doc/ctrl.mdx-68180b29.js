import{S as Gc,i as Kc,s as Xc,e as a,k as l,w as b,t as n,M as Jc,c as r,d as t,m as d,a as i,x as k,h as s,b as c,F as e,g as m,y,q as C,o as w,B as L,v as Qc}from"../../chunks/vendor-6b77c823.js";import{T as $t}from"../../chunks/Tip-39098574.js";import{D as Fe}from"../../chunks/Docstring-17b815d9.js";import{C as Qe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";function Yc(J){let h,E,f,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,h,_),e(h,E),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function Zc(J){let h,E,f,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,h,_),e(h,E),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function ep(J){let h,E,f,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,h,_),e(h,E),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function tp(J){let h,E,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,P,ee,ne,F,q,be,U,he,se,V,me,ae,z,ke,H,re,ye,W,S,te,I,oe,G,Ce;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),D=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ve=n("model(inputs)"),pe=n("."),x=l(),P=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),be=n("a single Tensor with "),U=a("code"),he=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),me=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),ye=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);E=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var De=i(v);T=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);_e=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var O=i(R);Q=s(O,"This second option is useful when using "),D=r(O,"CODE",{});var qe=i(D);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(O,"CODE",{});var Ae=i(A);ve=s(Ae,"model(inputs)"),Ae.forEach(t),pe=s(O,"."),O.forEach(t),x=d(p),P=r(p,"P",{});var He=i(P);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),F=r(p,"UL",{});var N=i(F);q=r(N,"LI",{});var j=i(q);be=s(j,"a single Tensor with "),U=r(j,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),se=s(j," only and nothing else: "),V=r(j,"CODE",{});var ze=i(V);me=s(ze,"model(inputs_ids)"),ze.forEach(t),j.forEach(t),ae=d(N),z=r(N,"LI",{});var K=i(z);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ye=s(K," or "),W=r(K,"CODE",{});var je=i(W);S=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),K.forEach(t),te=d(N),I=r(N,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),N.forEach(t)},m(p,$){m(p,h,$),e(h,E),m(p,f,$),m(p,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),m(p,Y,$),m(p,R,$),e(R,Q),e(R,D),e(D,Z),e(R,Te),e(R,A),e(A,ve),e(R,pe),m(p,x,$),m(p,P,$),e(P,ee),m(p,ne,$),m(p,F,$),e(F,q),e(q,be),e(q,U),e(U,he),e(q,se),e(q,V),e(V,me),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,ye),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,Ce)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(P),p&&t(ne),p&&t(F)}}}function op(J){let h,E,f,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,h,_),e(h,E),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function np(J){let h,E,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,P,ee,ne,F,q,be,U,he,se,V,me,ae,z,ke,H,re,ye,W,S,te,I,oe,G,Ce;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),D=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ve=n("model(inputs)"),pe=n("."),x=l(),P=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),be=n("a single Tensor with "),U=a("code"),he=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),me=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),ye=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);E=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var De=i(v);T=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);_e=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var O=i(R);Q=s(O,"This second option is useful when using "),D=r(O,"CODE",{});var qe=i(D);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(O,"CODE",{});var Ae=i(A);ve=s(Ae,"model(inputs)"),Ae.forEach(t),pe=s(O,"."),O.forEach(t),x=d(p),P=r(p,"P",{});var He=i(P);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),F=r(p,"UL",{});var N=i(F);q=r(N,"LI",{});var j=i(q);be=s(j,"a single Tensor with "),U=r(j,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),se=s(j," only and nothing else: "),V=r(j,"CODE",{});var ze=i(V);me=s(ze,"model(inputs_ids)"),ze.forEach(t),j.forEach(t),ae=d(N),z=r(N,"LI",{});var K=i(z);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ye=s(K," or "),W=r(K,"CODE",{});var je=i(W);S=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),K.forEach(t),te=d(N),I=r(N,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),N.forEach(t)},m(p,$){m(p,h,$),e(h,E),m(p,f,$),m(p,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),m(p,Y,$),m(p,R,$),e(R,Q),e(R,D),e(D,Z),e(R,Te),e(R,A),e(A,ve),e(R,pe),m(p,x,$),m(p,P,$),e(P,ee),m(p,ne,$),m(p,F,$),e(F,q),e(q,be),e(q,U),e(U,he),e(q,se),e(q,V),e(V,me),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,ye),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,Ce)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(P),p&&t(ne),p&&t(F)}}}function sp(J){let h,E,f,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,h,_),e(h,E),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function ap(J){let h,E,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,P,ee,ne,F,q,be,U,he,se,V,me,ae,z,ke,H,re,ye,W,S,te,I,oe,G,Ce;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),D=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ve=n("model(inputs)"),pe=n("."),x=l(),P=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),be=n("a single Tensor with "),U=a("code"),he=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),me=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),ye=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);E=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var De=i(v);T=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);_e=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var O=i(R);Q=s(O,"This second option is useful when using "),D=r(O,"CODE",{});var qe=i(D);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(O,"CODE",{});var Ae=i(A);ve=s(Ae,"model(inputs)"),Ae.forEach(t),pe=s(O,"."),O.forEach(t),x=d(p),P=r(p,"P",{});var He=i(P);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),F=r(p,"UL",{});var N=i(F);q=r(N,"LI",{});var j=i(q);be=s(j,"a single Tensor with "),U=r(j,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),se=s(j," only and nothing else: "),V=r(j,"CODE",{});var ze=i(V);me=s(ze,"model(inputs_ids)"),ze.forEach(t),j.forEach(t),ae=d(N),z=r(N,"LI",{});var K=i(z);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ye=s(K," or "),W=r(K,"CODE",{});var je=i(W);S=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),K.forEach(t),te=d(N),I=r(N,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),N.forEach(t)},m(p,$){m(p,h,$),e(h,E),m(p,f,$),m(p,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),m(p,Y,$),m(p,R,$),e(R,Q),e(R,D),e(D,Z),e(R,Te),e(R,A),e(A,ve),e(R,pe),m(p,x,$),m(p,P,$),e(P,ee),m(p,ne,$),m(p,F,$),e(F,q),e(q,be),e(q,U),e(U,he),e(q,se),e(q,V),e(V,me),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,ye),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,Ce)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(P),p&&t(ne),p&&t(F)}}}function rp(J){let h,E,f,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){m(T,h,_),e(h,E),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function ip(J){let h,E,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,P,ee,ne,F,q,be,U,he,se,V,me,ae,z,ke,H,re,ye,W,S,te,I,oe,G,Ce,p,$,ie,De,ue,O,qe,Ae,He,N,j,We,ze,K,Be,je,we,Ue,En,ua,fa,Yo,Fn,ga,_a,Rs,Ye,Ta,Gt,va,ba,Kt,ka,ya,Ms,ct,Rt,qn,Xt,Ca,zn,wa,Es,Le,Jt,La,Je,$a,Zo,Ra,Ma,en,Ea,Fa,Qt,qa,za,ja,pt,xa,tn,Pa,Sa,on,Ia,Oa,Na,jn,Da,Aa,Yt,Fs,ht,Mt,xn,Zt,Ha,Pn,Wa,qs,Oe,eo,Ba,Sn,Ua,Va,to,Ga,nn,Ka,Xa,Ja,sn,oo,zs,mt,Et,In,no,Qa,On,Ya,js,$e,so,Za,Nn,er,tr,ao,or,an,nr,sr,ar,ro,rr,io,ir,lr,dr,xe,lo,cr,ut,pr,rn,hr,mr,Dn,ur,fr,gr,Ft,_r,An,Tr,vr,co,xs,ft,qt,Hn,po,br,Wn,kr,Ps,Re,ho,yr,Bn,Cr,wr,mo,Lr,ln,$r,Rr,Mr,uo,Er,fo,Fr,qr,zr,Pe,go,jr,gt,xr,dn,Pr,Sr,Un,Ir,Or,Nr,zt,Dr,Vn,Ar,Hr,_o,Ss,_t,jt,Gn,To,Wr,Kn,Br,Is,Me,vo,Ur,Ee,Vr,cn,Gr,Kr,Xn,Xr,Jr,Jn,Qr,Yr,Qn,Zr,ei,Yn,ti,oi,ni,bo,si,pn,ai,ri,ii,ko,li,yo,di,ci,pi,B,Co,hi,Tt,mi,hn,ui,fi,Zn,gi,_i,Ti,xt,vi,es,bi,ki,wo,yi,Lo,Ci,ts,wi,Li,$o,$i,Ro,Os,vt,Pt,os,Mo,Ri,ns,Mi,Ns,de,Eo,Ei,ss,Fi,qi,Fo,zi,mn,ji,xi,Pi,qo,Si,zo,Ii,Oi,Ni,St,Di,Se,jo,Ai,bt,Hi,un,Wi,Bi,as,Ui,Vi,Gi,It,Ki,rs,Xi,Ji,xo,Ds,kt,Ot,is,Po,Qi,ls,Yi,As,ce,So,Zi,ds,el,tl,Io,ol,fn,nl,sl,al,Oo,rl,No,il,ll,dl,Nt,cl,Ie,Do,pl,yt,hl,gn,ml,ul,cs,fl,gl,_l,Dt,Tl,ps,vl,bl,Ao,Hs,Ct,At,hs,Ho,kl,ms,yl,Ws,X,Wo,Cl,us,wl,Ll,_n,Tn,$l,Rl,Ml,Ne,El,fs,Fl,ql,gs,zl,jl,_s,xl,Pl,Ts,Sl,Il,Ol,Bo,Nl,vn,Dl,Al,Hl,Uo,Wl,Vo,Bl,Ul,Vl,Ht,Gl,fe,Go,Kl,wt,Xl,bn,Jl,Ql,vs,Yl,Zl,ed,Wt,td,bs,od,nd,Ko,sd,Xo,Bs;return T=new dt({}),Z=new dt({}),Xt=new dt({}),Jt=new Fe({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/configuration_ctrl.py#L26"}}),Yt=new Qe({props:{code:`from transformers import CTRLModel, CTRLConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new dt({}),eo=new Fe({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L119"}}),oo=new Fe({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new dt({}),so=new Fe({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L319"}}),lo=new Fe({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L352",returnDescription:`
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

# CTRL was trained with control codes as the first token
inputs = tokenizer("Opinion My dog is cute", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1280</span>]`}}),po=new dt({}),ho=new Fe({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L509"}}),go=new Fe({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L531",returnDescription:`
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

# CTRL was trained with control codes as the first token
inputs = tokenizer("Wikipedia The llama is", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

sequence_ids = model.generate(inputs["input_ids"])
sequences = tokenizer.batch_decode(sequence_ids)
sequences

outputs = model(**inputs, labels=inputs["input_ids"])
round(outputs.loss.item(), 2)

list(outputs.logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Wikipedia The llama is&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = tokenizer.batch_decode(sequence_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences
[<span class="hljs-string">&#x27;Wikipedia The llama is a member of the family Bovidae. It is native to the Andes of Peru,&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">9.21</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(outputs.logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">246534</span>]`}}),To=new dt({}),vo=new Fe({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L647"}}),Co=new Fe({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L657",returnDescription:`
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
`}}),xt=new $t({props:{$$slots:{default:[ep]},$$scope:{ctx:J}}}),wo=new Qe({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl")

# CTRL was trained with control codes as the first token
inputs = tokenizer("Opinion My dog is cute", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),Lo=new Qe({props:{code:`import torch

torch.manual_seed(42)
# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">42</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.35</span>`}}),$o=new Qe({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification")

# CTRL was trained with control codes as the first token
inputs = tokenizer("Opinion My dog is cute", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),Ro=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Mo=new dt({}),Eo=new Fe({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L516"}}),St=new $t({props:{$$slots:{default:[tp]},$$scope:{ctx:J}}}),jo=new Fe({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L521",returnDescription:`
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
`}}),It=new $t({props:{$$slots:{default:[op]},$$scope:{ctx:J}}}),xo=new Qe({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Po=new dt({}),So=new Fe({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L610"}}),Nt=new $t({props:{$$slots:{default:[np]},$$scope:{ctx:J}}}),Do=new Fe({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L631",returnDescription:`
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
`}}),Dt=new $t({props:{$$slots:{default:[sp]},$$scope:{ctx:J}}}),Ao=new Qe({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ho=new dt({}),Wo=new Fe({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L727"}}),Ht=new $t({props:{$$slots:{default:[ap]},$$scope:{ctx:J}}}),Go=new Fe({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L742",returnDescription:`
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
`}}),Wt=new $t({props:{$$slots:{default:[rp]},$$scope:{ctx:J}}}),Ko=new Qe({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
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
`}}),{c(){h=a("meta"),E=l(),f=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),M=a("span"),_e=n("CTRL"),Y=l(),R=a("h2"),Q=a("a"),D=a("span"),b(Z.$$.fragment),Te=l(),A=a("span"),ve=n("Overview"),pe=l(),x=a("p"),P=n("CTRL model was proposed in "),ee=a("a"),ne=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),be=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),he=l(),se=a("p"),V=n("The abstract from the paper is the following:"),me=l(),ae=a("p"),z=a("em"),ke=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),re=a("p"),ye=n("Tips:"),W=l(),S=a("ul"),te=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=a("a"),G=n("original implementation"),Ce=n(` for
more information.`),p=l(),$=a("li"),ie=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),De=l(),ue=a("li"),O=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),qe=a("em"),Ae=n("run_generation.py"),He=n(" example script."),N=l(),j=a("li"),We=n("The PyTorch models can take the "),ze=a("code"),K=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),je=a("code"),we=n("past"),Ue=n(" as input. Using the "),En=a("code"),ua=n("past_key_values"),fa=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Yo=a("a"),Fn=a("code"),ga=n("forward"),_a=n(`
method for more information on the usage of this argument.`),Rs=l(),Ye=a("p"),Ta=n("This model was contributed by "),Gt=a("a"),va=n("keskarnitishr"),ba=n(`. The original code can be found
`),Kt=a("a"),ka=n("here"),ya=n("."),Ms=l(),ct=a("h2"),Rt=a("a"),qn=a("span"),b(Xt.$$.fragment),Ca=l(),zn=a("span"),wa=n("CTRLConfig"),Es=l(),Le=a("div"),b(Jt.$$.fragment),La=l(),Je=a("p"),$a=n("This is the configuration class to store the configuration of a "),Zo=a("a"),Ra=n("CTRLModel"),Ma=n(" or a "),en=a("a"),Ea=n("TFCTRLModel"),Fa=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),qa=n("ctrl"),za=n(" architecture from SalesForce."),ja=l(),pt=a("p"),xa=n("Configuration objects inherit from "),tn=a("a"),Pa=n("PretrainedConfig"),Sa=n(` and can be used to control the model outputs. Read the
documentation from `),on=a("a"),Ia=n("PretrainedConfig"),Oa=n(" for more information."),Na=l(),jn=a("p"),Da=n("Examples:"),Aa=l(),b(Yt.$$.fragment),Fs=l(),ht=a("h2"),Mt=a("a"),xn=a("span"),b(Zt.$$.fragment),Ha=l(),Pn=a("span"),Wa=n("CTRLTokenizer"),qs=l(),Oe=a("div"),b(eo.$$.fragment),Ba=l(),Sn=a("p"),Ua=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Va=l(),to=a("p"),Ga=n("This tokenizer inherits from "),nn=a("a"),Ka=n("PreTrainedTokenizer"),Xa=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ja=l(),sn=a("div"),b(oo.$$.fragment),zs=l(),mt=a("h2"),Et=a("a"),In=a("span"),b(no.$$.fragment),Qa=l(),On=a("span"),Ya=n("CTRLModel"),js=l(),$e=a("div"),b(so.$$.fragment),Za=l(),Nn=a("p"),er=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),tr=l(),ao=a("p"),or=n("This model inherits from "),an=a("a"),nr=n("PreTrainedModel"),sr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar=l(),ro=a("p"),rr=n("This model is also a PyTorch "),io=a("a"),ir=n("torch.nn.Module"),lr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=l(),xe=a("div"),b(lo.$$.fragment),cr=l(),ut=a("p"),pr=n("The "),rn=a("a"),hr=n("CTRLModel"),mr=n(" forward method, overrides the "),Dn=a("code"),ur=n("__call__"),fr=n(" special method."),gr=l(),b(Ft.$$.fragment),_r=l(),An=a("p"),Tr=n("Example:"),vr=l(),b(co.$$.fragment),xs=l(),ft=a("h2"),qt=a("a"),Hn=a("span"),b(po.$$.fragment),br=l(),Wn=a("span"),kr=n("CTRLLMHeadModel"),Ps=l(),Re=a("div"),b(ho.$$.fragment),yr=l(),Bn=a("p"),Cr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),wr=l(),mo=a("p"),Lr=n("This model inherits from "),ln=a("a"),$r=n("PreTrainedModel"),Rr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr=l(),uo=a("p"),Er=n("This model is also a PyTorch "),fo=a("a"),Fr=n("torch.nn.Module"),qr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=l(),Pe=a("div"),b(go.$$.fragment),jr=l(),gt=a("p"),xr=n("The "),dn=a("a"),Pr=n("CTRLLMHeadModel"),Sr=n(" forward method, overrides the "),Un=a("code"),Ir=n("__call__"),Or=n(" special method."),Nr=l(),b(zt.$$.fragment),Dr=l(),Vn=a("p"),Ar=n("Example:"),Hr=l(),b(_o.$$.fragment),Ss=l(),_t=a("h2"),jt=a("a"),Gn=a("span"),b(To.$$.fragment),Wr=l(),Kn=a("span"),Br=n("CTRLForSequenceClassification"),Is=l(),Me=a("div"),b(vo.$$.fragment),Ur=l(),Ee=a("p"),Vr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),cn=a("a"),Gr=n("CTRLForSequenceClassification"),Kr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Xn=a("code"),Xr=n("pad_token_id"),Jr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Jn=a("code"),Qr=n("pad_token_id"),Yr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Qn=a("code"),Zr=n("inputs_embeds"),ei=n(" are passed instead of "),Yn=a("code"),ti=n("input_ids"),oi=n(`, it does the same (take the last
value in each row of the batch).`),ni=l(),bo=a("p"),si=n("This model inherits from "),pn=a("a"),ai=n("PreTrainedModel"),ri=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=l(),ko=a("p"),li=n("This model is also a PyTorch "),yo=a("a"),di=n("torch.nn.Module"),ci=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=l(),B=a("div"),b(Co.$$.fragment),hi=l(),Tt=a("p"),mi=n("The "),hn=a("a"),ui=n("CTRLForSequenceClassification"),fi=n(" forward method, overrides the "),Zn=a("code"),gi=n("__call__"),_i=n(" special method."),Ti=l(),b(xt.$$.fragment),vi=l(),es=a("p"),bi=n("Example of single-label classification:"),ki=l(),b(wo.$$.fragment),yi=l(),b(Lo.$$.fragment),Ci=l(),ts=a("p"),wi=n("Example of multi-label classification:"),Li=l(),b($o.$$.fragment),$i=l(),b(Ro.$$.fragment),Os=l(),vt=a("h2"),Pt=a("a"),os=a("span"),b(Mo.$$.fragment),Ri=l(),ns=a("span"),Mi=n("TFCTRLModel"),Ns=l(),de=a("div"),b(Eo.$$.fragment),Ei=l(),ss=a("p"),Fi=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),qi=l(),Fo=a("p"),zi=n("This model inherits from "),mn=a("a"),ji=n("TFPreTrainedModel"),xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pi=l(),qo=a("p"),Si=n("This model is also a "),zo=a("a"),Ii=n("tf.keras.Model"),Oi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ni=l(),b(St.$$.fragment),Di=l(),Se=a("div"),b(jo.$$.fragment),Ai=l(),bt=a("p"),Hi=n("The "),un=a("a"),Wi=n("TFCTRLModel"),Bi=n(" forward method, overrides the "),as=a("code"),Ui=n("__call__"),Vi=n(" special method."),Gi=l(),b(It.$$.fragment),Ki=l(),rs=a("p"),Xi=n("Example:"),Ji=l(),b(xo.$$.fragment),Ds=l(),kt=a("h2"),Ot=a("a"),is=a("span"),b(Po.$$.fragment),Qi=l(),ls=a("span"),Yi=n("TFCTRLLMHeadModel"),As=l(),ce=a("div"),b(So.$$.fragment),Zi=l(),ds=a("p"),el=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tl=l(),Io=a("p"),ol=n("This model inherits from "),fn=a("a"),nl=n("TFPreTrainedModel"),sl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),al=l(),Oo=a("p"),rl=n("This model is also a "),No=a("a"),il=n("tf.keras.Model"),ll=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dl=l(),b(Nt.$$.fragment),cl=l(),Ie=a("div"),b(Do.$$.fragment),pl=l(),yt=a("p"),hl=n("The "),gn=a("a"),ml=n("TFCTRLLMHeadModel"),ul=n(" forward method, overrides the "),cs=a("code"),fl=n("__call__"),gl=n(" special method."),_l=l(),b(Dt.$$.fragment),Tl=l(),ps=a("p"),vl=n("Example:"),bl=l(),b(Ao.$$.fragment),Hs=l(),Ct=a("h2"),At=a("a"),hs=a("span"),b(Ho.$$.fragment),kl=l(),ms=a("span"),yl=n("TFCTRLForSequenceClassification"),Ws=l(),X=a("div"),b(Wo.$$.fragment),Cl=l(),us=a("p"),wl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),Ll=l(),_n=a("p"),Tn=a("a"),$l=n("TFCTRLForSequenceClassification"),Rl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Ml=l(),Ne=a("p"),El=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),fs=a("code"),Fl=n("pad_token_id"),ql=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),gs=a("code"),zl=n("pad_token_id"),jl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),_s=a("code"),xl=n("inputs_embeds"),Pl=n(" are passed instead of "),Ts=a("code"),Sl=n("input_ids"),Il=n(`, it does the same (take the last value in
each row of the batch).`),Ol=l(),Bo=a("p"),Nl=n("This model inherits from "),vn=a("a"),Dl=n("TFPreTrainedModel"),Al=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=l(),Uo=a("p"),Wl=n("This model is also a "),Vo=a("a"),Bl=n("tf.keras.Model"),Ul=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl=l(),b(Ht.$$.fragment),Gl=l(),fe=a("div"),b(Go.$$.fragment),Kl=l(),wt=a("p"),Xl=n("The "),bn=a("a"),Jl=n("TFCTRLForSequenceClassification"),Ql=n(" forward method, overrides the "),vs=a("code"),Yl=n("__call__"),Zl=n(" special method."),ed=l(),b(Wt.$$.fragment),td=l(),bs=a("p"),od=n("Example:"),nd=l(),b(Ko.$$.fragment),sd=l(),b(Xo.$$.fragment),this.h()},l(o){const u=Jc('[data-svelte="svelte-1phssyn"]',document.head);h=r(u,"META",{name:!0,content:!0}),u.forEach(t),E=d(o),f=r(o,"H1",{class:!0});var Jo=i(f);g=r(Jo,"A",{id:!0,class:!0,href:!0});var ks=i(g);v=r(ks,"SPAN",{});var ys=i(v);k(T.$$.fragment,ys),ys.forEach(t),ks.forEach(t),_=d(Jo),M=r(Jo,"SPAN",{});var Cs=i(M);_e=s(Cs,"CTRL"),Cs.forEach(t),Jo.forEach(t),Y=d(o),R=r(o,"H2",{class:!0});var Qo=i(R);Q=r(Qo,"A",{id:!0,class:!0,href:!0});var ws=i(Q);D=r(ws,"SPAN",{});var Ls=i(D);k(Z.$$.fragment,Ls),Ls.forEach(t),ws.forEach(t),Te=d(Qo),A=r(Qo,"SPAN",{});var $s=i(A);ve=s($s,"Overview"),$s.forEach(t),Qo.forEach(t),pe=d(o),x=r(o,"P",{});var Lt=i(x);P=s(Lt,"CTRL model was proposed in "),ee=r(Lt,"A",{href:!0,rel:!0});var rd=i(ee);ne=s(rd,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),rd.forEach(t),F=s(Lt," by Nitish Shirish Keskar"),q=r(Lt,"EM",{});var id=i(q);be=s(id,", Bryan McCann"),id.forEach(t),U=s(Lt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Lt.forEach(t),he=d(o),se=r(o,"P",{});var ld=i(se);V=s(ld,"The abstract from the paper is the following:"),ld.forEach(t),me=d(o),ae=r(o,"P",{});var dd=i(ae);z=r(dd,"EM",{});var cd=i(z);ke=s(cd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),cd.forEach(t),dd.forEach(t),H=d(o),re=r(o,"P",{});var pd=i(re);ye=s(pd,"Tips:"),pd.forEach(t),W=d(o),S=r(o,"UL",{});var Bt=i(S);te=r(Bt,"LI",{});var Us=i(te);I=s(Us,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=r(Us,"A",{href:!0,rel:!0});var hd=i(oe);G=s(hd,"original implementation"),hd.forEach(t),Ce=s(Us,` for
more information.`),Us.forEach(t),p=d(Bt),$=r(Bt,"LI",{});var md=i($);ie=s(md,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),md.forEach(t),De=d(Bt),ue=r(Bt,"LI",{});var Vs=i(ue);O=s(Vs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),qe=r(Vs,"EM",{});var ud=i(qe);Ae=s(ud,"run_generation.py"),ud.forEach(t),He=s(Vs," example script."),Vs.forEach(t),N=d(Bt),j=r(Bt,"LI",{});var Ze=i(j);We=s(Ze,"The PyTorch models can take the "),ze=r(Ze,"CODE",{});var fd=i(ze);K=s(fd,"past_key_values"),fd.forEach(t),Be=s(Ze,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),je=r(Ze,"CODE",{});var gd=i(je);we=s(gd,"past"),gd.forEach(t),Ue=s(Ze," as input. Using the "),En=r(Ze,"CODE",{});var _d=i(En);ua=s(_d,"past_key_values"),_d.forEach(t),fa=s(Ze,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Yo=r(Ze,"A",{href:!0});var Td=i(Yo);Fn=r(Td,"CODE",{});var vd=i(Fn);ga=s(vd,"forward"),vd.forEach(t),Td.forEach(t),_a=s(Ze,`
method for more information on the usage of this argument.`),Ze.forEach(t),Bt.forEach(t),Rs=d(o),Ye=r(o,"P",{});var kn=i(Ye);Ta=s(kn,"This model was contributed by "),Gt=r(kn,"A",{href:!0,rel:!0});var bd=i(Gt);va=s(bd,"keskarnitishr"),bd.forEach(t),ba=s(kn,`. The original code can be found
`),Kt=r(kn,"A",{href:!0,rel:!0});var kd=i(Kt);ka=s(kd,"here"),kd.forEach(t),ya=s(kn,"."),kn.forEach(t),Ms=d(o),ct=r(o,"H2",{class:!0});var Gs=i(ct);Rt=r(Gs,"A",{id:!0,class:!0,href:!0});var yd=i(Rt);qn=r(yd,"SPAN",{});var Cd=i(qn);k(Xt.$$.fragment,Cd),Cd.forEach(t),yd.forEach(t),Ca=d(Gs),zn=r(Gs,"SPAN",{});var wd=i(zn);wa=s(wd,"CTRLConfig"),wd.forEach(t),Gs.forEach(t),Es=d(o),Le=r(o,"DIV",{class:!0});var et=i(Le);k(Jt.$$.fragment,et),La=d(et),Je=r(et,"P",{});var Ut=i(Je);$a=s(Ut,"This is the configuration class to store the configuration of a "),Zo=r(Ut,"A",{href:!0});var Ld=i(Zo);Ra=s(Ld,"CTRLModel"),Ld.forEach(t),Ma=s(Ut," or a "),en=r(Ut,"A",{href:!0});var $d=i(en);Ea=s($d,"TFCTRLModel"),$d.forEach(t),Fa=s(Ut,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Ut,"A",{href:!0,rel:!0});var Rd=i(Qt);qa=s(Rd,"ctrl"),Rd.forEach(t),za=s(Ut," architecture from SalesForce."),Ut.forEach(t),ja=d(et),pt=r(et,"P",{});var yn=i(pt);xa=s(yn,"Configuration objects inherit from "),tn=r(yn,"A",{href:!0});var Md=i(tn);Pa=s(Md,"PretrainedConfig"),Md.forEach(t),Sa=s(yn,` and can be used to control the model outputs. Read the
documentation from `),on=r(yn,"A",{href:!0});var Ed=i(on);Ia=s(Ed,"PretrainedConfig"),Ed.forEach(t),Oa=s(yn," for more information."),yn.forEach(t),Na=d(et),jn=r(et,"P",{});var Fd=i(jn);Da=s(Fd,"Examples:"),Fd.forEach(t),Aa=d(et),k(Yt.$$.fragment,et),et.forEach(t),Fs=d(o),ht=r(o,"H2",{class:!0});var Ks=i(ht);Mt=r(Ks,"A",{id:!0,class:!0,href:!0});var qd=i(Mt);xn=r(qd,"SPAN",{});var zd=i(xn);k(Zt.$$.fragment,zd),zd.forEach(t),qd.forEach(t),Ha=d(Ks),Pn=r(Ks,"SPAN",{});var jd=i(Pn);Wa=s(jd,"CTRLTokenizer"),jd.forEach(t),Ks.forEach(t),qs=d(o),Oe=r(o,"DIV",{class:!0});var Vt=i(Oe);k(eo.$$.fragment,Vt),Ba=d(Vt),Sn=r(Vt,"P",{});var xd=i(Sn);Ua=s(xd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),xd.forEach(t),Va=d(Vt),to=r(Vt,"P",{});var Xs=i(to);Ga=s(Xs,"This tokenizer inherits from "),nn=r(Xs,"A",{href:!0});var Pd=i(nn);Ka=s(Pd,"PreTrainedTokenizer"),Pd.forEach(t),Xa=s(Xs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xs.forEach(t),Ja=d(Vt),sn=r(Vt,"DIV",{class:!0});var Sd=i(sn);k(oo.$$.fragment,Sd),Sd.forEach(t),Vt.forEach(t),zs=d(o),mt=r(o,"H2",{class:!0});var Js=i(mt);Et=r(Js,"A",{id:!0,class:!0,href:!0});var Id=i(Et);In=r(Id,"SPAN",{});var Od=i(In);k(no.$$.fragment,Od),Od.forEach(t),Id.forEach(t),Qa=d(Js),On=r(Js,"SPAN",{});var Nd=i(On);Ya=s(Nd,"CTRLModel"),Nd.forEach(t),Js.forEach(t),js=d(o),$e=r(o,"DIV",{class:!0});var tt=i($e);k(so.$$.fragment,tt),Za=d(tt),Nn=r(tt,"P",{});var Dd=i(Nn);er=s(Dd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Dd.forEach(t),tr=d(tt),ao=r(tt,"P",{});var Qs=i(ao);or=s(Qs,"This model inherits from "),an=r(Qs,"A",{href:!0});var Ad=i(an);nr=s(Ad,"PreTrainedModel"),Ad.forEach(t),sr=s(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qs.forEach(t),ar=d(tt),ro=r(tt,"P",{});var Ys=i(ro);rr=s(Ys,"This model is also a PyTorch "),io=r(Ys,"A",{href:!0,rel:!0});var Hd=i(io);ir=s(Hd,"torch.nn.Module"),Hd.forEach(t),lr=s(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),dr=d(tt),xe=r(tt,"DIV",{class:!0});var ot=i(xe);k(lo.$$.fragment,ot),cr=d(ot),ut=r(ot,"P",{});var Cn=i(ut);pr=s(Cn,"The "),rn=r(Cn,"A",{href:!0});var Wd=i(rn);hr=s(Wd,"CTRLModel"),Wd.forEach(t),mr=s(Cn," forward method, overrides the "),Dn=r(Cn,"CODE",{});var Bd=i(Dn);ur=s(Bd,"__call__"),Bd.forEach(t),fr=s(Cn," special method."),Cn.forEach(t),gr=d(ot),k(Ft.$$.fragment,ot),_r=d(ot),An=r(ot,"P",{});var Ud=i(An);Tr=s(Ud,"Example:"),Ud.forEach(t),vr=d(ot),k(co.$$.fragment,ot),ot.forEach(t),tt.forEach(t),xs=d(o),ft=r(o,"H2",{class:!0});var Zs=i(ft);qt=r(Zs,"A",{id:!0,class:!0,href:!0});var Vd=i(qt);Hn=r(Vd,"SPAN",{});var Gd=i(Hn);k(po.$$.fragment,Gd),Gd.forEach(t),Vd.forEach(t),br=d(Zs),Wn=r(Zs,"SPAN",{});var Kd=i(Wn);kr=s(Kd,"CTRLLMHeadModel"),Kd.forEach(t),Zs.forEach(t),Ps=d(o),Re=r(o,"DIV",{class:!0});var nt=i(Re);k(ho.$$.fragment,nt),yr=d(nt),Bn=r(nt,"P",{});var Xd=i(Bn);Cr=s(Xd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xd.forEach(t),wr=d(nt),mo=r(nt,"P",{});var ea=i(mo);Lr=s(ea,"This model inherits from "),ln=r(ea,"A",{href:!0});var Jd=i(ln);$r=s(Jd,"PreTrainedModel"),Jd.forEach(t),Rr=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),Mr=d(nt),uo=r(nt,"P",{});var ta=i(uo);Er=s(ta,"This model is also a PyTorch "),fo=r(ta,"A",{href:!0,rel:!0});var Qd=i(fo);Fr=s(Qd,"torch.nn.Module"),Qd.forEach(t),qr=s(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(t),zr=d(nt),Pe=r(nt,"DIV",{class:!0});var st=i(Pe);k(go.$$.fragment,st),jr=d(st),gt=r(st,"P",{});var wn=i(gt);xr=s(wn,"The "),dn=r(wn,"A",{href:!0});var Yd=i(dn);Pr=s(Yd,"CTRLLMHeadModel"),Yd.forEach(t),Sr=s(wn," forward method, overrides the "),Un=r(wn,"CODE",{});var Zd=i(Un);Ir=s(Zd,"__call__"),Zd.forEach(t),Or=s(wn," special method."),wn.forEach(t),Nr=d(st),k(zt.$$.fragment,st),Dr=d(st),Vn=r(st,"P",{});var ec=i(Vn);Ar=s(ec,"Example:"),ec.forEach(t),Hr=d(st),k(_o.$$.fragment,st),st.forEach(t),nt.forEach(t),Ss=d(o),_t=r(o,"H2",{class:!0});var oa=i(_t);jt=r(oa,"A",{id:!0,class:!0,href:!0});var tc=i(jt);Gn=r(tc,"SPAN",{});var oc=i(Gn);k(To.$$.fragment,oc),oc.forEach(t),tc.forEach(t),Wr=d(oa),Kn=r(oa,"SPAN",{});var nc=i(Kn);Br=s(nc,"CTRLForSequenceClassification"),nc.forEach(t),oa.forEach(t),Is=d(o),Me=r(o,"DIV",{class:!0});var at=i(Me);k(vo.$$.fragment,at),Ur=d(at),Ee=r(at,"P",{});var Ve=i(Ee);Vr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),cn=r(Ve,"A",{href:!0});var sc=i(cn);Gr=s(sc,"CTRLForSequenceClassification"),sc.forEach(t),Kr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Xn=r(Ve,"CODE",{});var ac=i(Xn);Xr=s(ac,"pad_token_id"),ac.forEach(t),Jr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Jn=r(Ve,"CODE",{});var rc=i(Jn);Qr=s(rc,"pad_token_id"),rc.forEach(t),Yr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Qn=r(Ve,"CODE",{});var ic=i(Qn);Zr=s(ic,"inputs_embeds"),ic.forEach(t),ei=s(Ve," are passed instead of "),Yn=r(Ve,"CODE",{});var lc=i(Yn);ti=s(lc,"input_ids"),lc.forEach(t),oi=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),ni=d(at),bo=r(at,"P",{});var na=i(bo);si=s(na,"This model inherits from "),pn=r(na,"A",{href:!0});var dc=i(pn);ai=s(dc,"PreTrainedModel"),dc.forEach(t),ri=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(t),ii=d(at),ko=r(at,"P",{});var sa=i(ko);li=s(sa,"This model is also a PyTorch "),yo=r(sa,"A",{href:!0,rel:!0});var cc=i(yo);di=s(cc,"torch.nn.Module"),cc.forEach(t),ci=s(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(t),pi=d(at),B=r(at,"DIV",{class:!0});var le=i(B);k(Co.$$.fragment,le),hi=d(le),Tt=r(le,"P",{});var Ln=i(Tt);mi=s(Ln,"The "),hn=r(Ln,"A",{href:!0});var pc=i(hn);ui=s(pc,"CTRLForSequenceClassification"),pc.forEach(t),fi=s(Ln," forward method, overrides the "),Zn=r(Ln,"CODE",{});var hc=i(Zn);gi=s(hc,"__call__"),hc.forEach(t),_i=s(Ln," special method."),Ln.forEach(t),Ti=d(le),k(xt.$$.fragment,le),vi=d(le),es=r(le,"P",{});var mc=i(es);bi=s(mc,"Example of single-label classification:"),mc.forEach(t),ki=d(le),k(wo.$$.fragment,le),yi=d(le),k(Lo.$$.fragment,le),Ci=d(le),ts=r(le,"P",{});var uc=i(ts);wi=s(uc,"Example of multi-label classification:"),uc.forEach(t),Li=d(le),k($o.$$.fragment,le),$i=d(le),k(Ro.$$.fragment,le),le.forEach(t),at.forEach(t),Os=d(o),vt=r(o,"H2",{class:!0});var aa=i(vt);Pt=r(aa,"A",{id:!0,class:!0,href:!0});var fc=i(Pt);os=r(fc,"SPAN",{});var gc=i(os);k(Mo.$$.fragment,gc),gc.forEach(t),fc.forEach(t),Ri=d(aa),ns=r(aa,"SPAN",{});var _c=i(ns);Mi=s(_c,"TFCTRLModel"),_c.forEach(t),aa.forEach(t),Ns=d(o),de=r(o,"DIV",{class:!0});var Ge=i(de);k(Eo.$$.fragment,Ge),Ei=d(Ge),ss=r(Ge,"P",{});var Tc=i(ss);Fi=s(Tc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Tc.forEach(t),qi=d(Ge),Fo=r(Ge,"P",{});var ra=i(Fo);zi=s(ra,"This model inherits from "),mn=r(ra,"A",{href:!0});var vc=i(mn);ji=s(vc,"TFPreTrainedModel"),vc.forEach(t),xi=s(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),Pi=d(Ge),qo=r(Ge,"P",{});var ia=i(qo);Si=s(ia,"This model is also a "),zo=r(ia,"A",{href:!0,rel:!0});var bc=i(zo);Ii=s(bc,"tf.keras.Model"),bc.forEach(t),Oi=s(ia,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ia.forEach(t),Ni=d(Ge),k(St.$$.fragment,Ge),Di=d(Ge),Se=r(Ge,"DIV",{class:!0});var rt=i(Se);k(jo.$$.fragment,rt),Ai=d(rt),bt=r(rt,"P",{});var $n=i(bt);Hi=s($n,"The "),un=r($n,"A",{href:!0});var kc=i(un);Wi=s(kc,"TFCTRLModel"),kc.forEach(t),Bi=s($n," forward method, overrides the "),as=r($n,"CODE",{});var yc=i(as);Ui=s(yc,"__call__"),yc.forEach(t),Vi=s($n," special method."),$n.forEach(t),Gi=d(rt),k(It.$$.fragment,rt),Ki=d(rt),rs=r(rt,"P",{});var Cc=i(rs);Xi=s(Cc,"Example:"),Cc.forEach(t),Ji=d(rt),k(xo.$$.fragment,rt),rt.forEach(t),Ge.forEach(t),Ds=d(o),kt=r(o,"H2",{class:!0});var la=i(kt);Ot=r(la,"A",{id:!0,class:!0,href:!0});var wc=i(Ot);is=r(wc,"SPAN",{});var Lc=i(is);k(Po.$$.fragment,Lc),Lc.forEach(t),wc.forEach(t),Qi=d(la),ls=r(la,"SPAN",{});var $c=i(ls);Yi=s($c,"TFCTRLLMHeadModel"),$c.forEach(t),la.forEach(t),As=d(o),ce=r(o,"DIV",{class:!0});var Ke=i(ce);k(So.$$.fragment,Ke),Zi=d(Ke),ds=r(Ke,"P",{});var Rc=i(ds);el=s(Rc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Rc.forEach(t),tl=d(Ke),Io=r(Ke,"P",{});var da=i(Io);ol=s(da,"This model inherits from "),fn=r(da,"A",{href:!0});var Mc=i(fn);nl=s(Mc,"TFPreTrainedModel"),Mc.forEach(t),sl=s(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(t),al=d(Ke),Oo=r(Ke,"P",{});var ca=i(Oo);rl=s(ca,"This model is also a "),No=r(ca,"A",{href:!0,rel:!0});var Ec=i(No);il=s(Ec,"tf.keras.Model"),Ec.forEach(t),ll=s(ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ca.forEach(t),dl=d(Ke),k(Nt.$$.fragment,Ke),cl=d(Ke),Ie=r(Ke,"DIV",{class:!0});var it=i(Ie);k(Do.$$.fragment,it),pl=d(it),yt=r(it,"P",{});var Rn=i(yt);hl=s(Rn,"The "),gn=r(Rn,"A",{href:!0});var Fc=i(gn);ml=s(Fc,"TFCTRLLMHeadModel"),Fc.forEach(t),ul=s(Rn," forward method, overrides the "),cs=r(Rn,"CODE",{});var qc=i(cs);fl=s(qc,"__call__"),qc.forEach(t),gl=s(Rn," special method."),Rn.forEach(t),_l=d(it),k(Dt.$$.fragment,it),Tl=d(it),ps=r(it,"P",{});var zc=i(ps);vl=s(zc,"Example:"),zc.forEach(t),bl=d(it),k(Ao.$$.fragment,it),it.forEach(t),Ke.forEach(t),Hs=d(o),Ct=r(o,"H2",{class:!0});var pa=i(Ct);At=r(pa,"A",{id:!0,class:!0,href:!0});var jc=i(At);hs=r(jc,"SPAN",{});var xc=i(hs);k(Ho.$$.fragment,xc),xc.forEach(t),jc.forEach(t),kl=d(pa),ms=r(pa,"SPAN",{});var Pc=i(ms);yl=s(Pc,"TFCTRLForSequenceClassification"),Pc.forEach(t),pa.forEach(t),Ws=d(o),X=r(o,"DIV",{class:!0});var ge=i(X);k(Wo.$$.fragment,ge),Cl=d(ge),us=r(ge,"P",{});var Sc=i(us);wl=s(Sc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),Sc.forEach(t),Ll=d(ge),_n=r(ge,"P",{});var ad=i(_n);Tn=r(ad,"A",{href:!0});var Ic=i(Tn);$l=s(Ic,"TFCTRLForSequenceClassification"),Ic.forEach(t),Rl=s(ad,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),ad.forEach(t),Ml=d(ge),Ne=r(ge,"P",{});var lt=i(Ne);El=s(lt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),fs=r(lt,"CODE",{});var Oc=i(fs);Fl=s(Oc,"pad_token_id"),Oc.forEach(t),ql=s(lt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),gs=r(lt,"CODE",{});var Nc=i(gs);zl=s(Nc,"pad_token_id"),Nc.forEach(t),jl=s(lt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),_s=r(lt,"CODE",{});var Dc=i(_s);xl=s(Dc,"inputs_embeds"),Dc.forEach(t),Pl=s(lt," are passed instead of "),Ts=r(lt,"CODE",{});var Ac=i(Ts);Sl=s(Ac,"input_ids"),Ac.forEach(t),Il=s(lt,`, it does the same (take the last value in
each row of the batch).`),lt.forEach(t),Ol=d(ge),Bo=r(ge,"P",{});var ha=i(Bo);Nl=s(ha,"This model inherits from "),vn=r(ha,"A",{href:!0});var Hc=i(vn);Dl=s(Hc,"TFPreTrainedModel"),Hc.forEach(t),Al=s(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(t),Hl=d(ge),Uo=r(ge,"P",{});var ma=i(Uo);Wl=s(ma,"This model is also a "),Vo=r(ma,"A",{href:!0,rel:!0});var Wc=i(Vo);Bl=s(Wc,"tf.keras.Model"),Wc.forEach(t),Ul=s(ma,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ma.forEach(t),Vl=d(ge),k(Ht.$$.fragment,ge),Gl=d(ge),fe=r(ge,"DIV",{class:!0});var Xe=i(fe);k(Go.$$.fragment,Xe),Kl=d(Xe),wt=r(Xe,"P",{});var Mn=i(wt);Xl=s(Mn,"The "),bn=r(Mn,"A",{href:!0});var Bc=i(bn);Jl=s(Bc,"TFCTRLForSequenceClassification"),Bc.forEach(t),Ql=s(Mn," forward method, overrides the "),vs=r(Mn,"CODE",{});var Uc=i(vs);Yl=s(Uc,"__call__"),Uc.forEach(t),Zl=s(Mn," special method."),Mn.forEach(t),ed=d(Xe),k(Wt.$$.fragment,Xe),td=d(Xe),bs=r(Xe,"P",{});var Vc=i(bs);od=s(Vc,"Example:"),Vc.forEach(t),nd=d(Xe),k(Ko.$$.fragment,Xe),sd=d(Xe),k(Xo.$$.fragment,Xe),Xe.forEach(t),ge.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(lp)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(f,"class","relative group"),c(Q,"id","overview"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#overview"),c(R,"class","relative group"),c(ee,"href","https://arxiv.org/abs/1909.05858"),c(ee,"rel","nofollow"),c(oe,"href","https://github.com/salesforce/ctrl"),c(oe,"rel","nofollow"),c(Yo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Rt,"id","transformers.CTRLConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLConfig"),c(ct,"class","relative group"),c(Zo,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),c(en,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(tn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(on,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mt,"id","transformers.CTRLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLTokenizer"),c(ht,"class","relative group"),c(nn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Et,"id","transformers.CTRLModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLModel"),c(mt,"class","relative group"),c(an,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(rn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qt,"id","transformers.CTRLLMHeadModel"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(ln,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(dn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jt,"id","transformers.CTRLForSequenceClassification"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.CTRLForSequenceClassification"),c(_t,"class","relative group"),c(cn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(hn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pt,"id","transformers.TFCTRLModel"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.TFCTRLModel"),c(vt,"class","relative group"),c(mn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zo,"rel","nofollow"),c(un,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ot,"id","transformers.TFCTRLLMHeadModel"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFCTRLLMHeadModel"),c(kt,"class","relative group"),c(fn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(No,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(No,"rel","nofollow"),c(gn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(At,"id","transformers.TFCTRLForSequenceClassification"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFCTRLForSequenceClassification"),c(Ct,"class","relative group"),c(Tn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vo,"rel","nofollow"),c(bn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,h),m(o,E,u),m(o,f,u),e(f,g),e(g,v),y(T,v,null),e(f,_),e(f,M),e(M,_e),m(o,Y,u),m(o,R,u),e(R,Q),e(Q,D),y(Z,D,null),e(R,Te),e(R,A),e(A,ve),m(o,pe,u),m(o,x,u),e(x,P),e(x,ee),e(ee,ne),e(x,F),e(x,q),e(q,be),e(x,U),m(o,he,u),m(o,se,u),e(se,V),m(o,me,u),m(o,ae,u),e(ae,z),e(z,ke),m(o,H,u),m(o,re,u),e(re,ye),m(o,W,u),m(o,S,u),e(S,te),e(te,I),e(te,oe),e(oe,G),e(te,Ce),e(S,p),e(S,$),e($,ie),e(S,De),e(S,ue),e(ue,O),e(ue,qe),e(qe,Ae),e(ue,He),e(S,N),e(S,j),e(j,We),e(j,ze),e(ze,K),e(j,Be),e(j,je),e(je,we),e(j,Ue),e(j,En),e(En,ua),e(j,fa),e(j,Yo),e(Yo,Fn),e(Fn,ga),e(j,_a),m(o,Rs,u),m(o,Ye,u),e(Ye,Ta),e(Ye,Gt),e(Gt,va),e(Ye,ba),e(Ye,Kt),e(Kt,ka),e(Ye,ya),m(o,Ms,u),m(o,ct,u),e(ct,Rt),e(Rt,qn),y(Xt,qn,null),e(ct,Ca),e(ct,zn),e(zn,wa),m(o,Es,u),m(o,Le,u),y(Jt,Le,null),e(Le,La),e(Le,Je),e(Je,$a),e(Je,Zo),e(Zo,Ra),e(Je,Ma),e(Je,en),e(en,Ea),e(Je,Fa),e(Je,Qt),e(Qt,qa),e(Je,za),e(Le,ja),e(Le,pt),e(pt,xa),e(pt,tn),e(tn,Pa),e(pt,Sa),e(pt,on),e(on,Ia),e(pt,Oa),e(Le,Na),e(Le,jn),e(jn,Da),e(Le,Aa),y(Yt,Le,null),m(o,Fs,u),m(o,ht,u),e(ht,Mt),e(Mt,xn),y(Zt,xn,null),e(ht,Ha),e(ht,Pn),e(Pn,Wa),m(o,qs,u),m(o,Oe,u),y(eo,Oe,null),e(Oe,Ba),e(Oe,Sn),e(Sn,Ua),e(Oe,Va),e(Oe,to),e(to,Ga),e(to,nn),e(nn,Ka),e(to,Xa),e(Oe,Ja),e(Oe,sn),y(oo,sn,null),m(o,zs,u),m(o,mt,u),e(mt,Et),e(Et,In),y(no,In,null),e(mt,Qa),e(mt,On),e(On,Ya),m(o,js,u),m(o,$e,u),y(so,$e,null),e($e,Za),e($e,Nn),e(Nn,er),e($e,tr),e($e,ao),e(ao,or),e(ao,an),e(an,nr),e(ao,sr),e($e,ar),e($e,ro),e(ro,rr),e(ro,io),e(io,ir),e(ro,lr),e($e,dr),e($e,xe),y(lo,xe,null),e(xe,cr),e(xe,ut),e(ut,pr),e(ut,rn),e(rn,hr),e(ut,mr),e(ut,Dn),e(Dn,ur),e(ut,fr),e(xe,gr),y(Ft,xe,null),e(xe,_r),e(xe,An),e(An,Tr),e(xe,vr),y(co,xe,null),m(o,xs,u),m(o,ft,u),e(ft,qt),e(qt,Hn),y(po,Hn,null),e(ft,br),e(ft,Wn),e(Wn,kr),m(o,Ps,u),m(o,Re,u),y(ho,Re,null),e(Re,yr),e(Re,Bn),e(Bn,Cr),e(Re,wr),e(Re,mo),e(mo,Lr),e(mo,ln),e(ln,$r),e(mo,Rr),e(Re,Mr),e(Re,uo),e(uo,Er),e(uo,fo),e(fo,Fr),e(uo,qr),e(Re,zr),e(Re,Pe),y(go,Pe,null),e(Pe,jr),e(Pe,gt),e(gt,xr),e(gt,dn),e(dn,Pr),e(gt,Sr),e(gt,Un),e(Un,Ir),e(gt,Or),e(Pe,Nr),y(zt,Pe,null),e(Pe,Dr),e(Pe,Vn),e(Vn,Ar),e(Pe,Hr),y(_o,Pe,null),m(o,Ss,u),m(o,_t,u),e(_t,jt),e(jt,Gn),y(To,Gn,null),e(_t,Wr),e(_t,Kn),e(Kn,Br),m(o,Is,u),m(o,Me,u),y(vo,Me,null),e(Me,Ur),e(Me,Ee),e(Ee,Vr),e(Ee,cn),e(cn,Gr),e(Ee,Kr),e(Ee,Xn),e(Xn,Xr),e(Ee,Jr),e(Ee,Jn),e(Jn,Qr),e(Ee,Yr),e(Ee,Qn),e(Qn,Zr),e(Ee,ei),e(Ee,Yn),e(Yn,ti),e(Ee,oi),e(Me,ni),e(Me,bo),e(bo,si),e(bo,pn),e(pn,ai),e(bo,ri),e(Me,ii),e(Me,ko),e(ko,li),e(ko,yo),e(yo,di),e(ko,ci),e(Me,pi),e(Me,B),y(Co,B,null),e(B,hi),e(B,Tt),e(Tt,mi),e(Tt,hn),e(hn,ui),e(Tt,fi),e(Tt,Zn),e(Zn,gi),e(Tt,_i),e(B,Ti),y(xt,B,null),e(B,vi),e(B,es),e(es,bi),e(B,ki),y(wo,B,null),e(B,yi),y(Lo,B,null),e(B,Ci),e(B,ts),e(ts,wi),e(B,Li),y($o,B,null),e(B,$i),y(Ro,B,null),m(o,Os,u),m(o,vt,u),e(vt,Pt),e(Pt,os),y(Mo,os,null),e(vt,Ri),e(vt,ns),e(ns,Mi),m(o,Ns,u),m(o,de,u),y(Eo,de,null),e(de,Ei),e(de,ss),e(ss,Fi),e(de,qi),e(de,Fo),e(Fo,zi),e(Fo,mn),e(mn,ji),e(Fo,xi),e(de,Pi),e(de,qo),e(qo,Si),e(qo,zo),e(zo,Ii),e(qo,Oi),e(de,Ni),y(St,de,null),e(de,Di),e(de,Se),y(jo,Se,null),e(Se,Ai),e(Se,bt),e(bt,Hi),e(bt,un),e(un,Wi),e(bt,Bi),e(bt,as),e(as,Ui),e(bt,Vi),e(Se,Gi),y(It,Se,null),e(Se,Ki),e(Se,rs),e(rs,Xi),e(Se,Ji),y(xo,Se,null),m(o,Ds,u),m(o,kt,u),e(kt,Ot),e(Ot,is),y(Po,is,null),e(kt,Qi),e(kt,ls),e(ls,Yi),m(o,As,u),m(o,ce,u),y(So,ce,null),e(ce,Zi),e(ce,ds),e(ds,el),e(ce,tl),e(ce,Io),e(Io,ol),e(Io,fn),e(fn,nl),e(Io,sl),e(ce,al),e(ce,Oo),e(Oo,rl),e(Oo,No),e(No,il),e(Oo,ll),e(ce,dl),y(Nt,ce,null),e(ce,cl),e(ce,Ie),y(Do,Ie,null),e(Ie,pl),e(Ie,yt),e(yt,hl),e(yt,gn),e(gn,ml),e(yt,ul),e(yt,cs),e(cs,fl),e(yt,gl),e(Ie,_l),y(Dt,Ie,null),e(Ie,Tl),e(Ie,ps),e(ps,vl),e(Ie,bl),y(Ao,Ie,null),m(o,Hs,u),m(o,Ct,u),e(Ct,At),e(At,hs),y(Ho,hs,null),e(Ct,kl),e(Ct,ms),e(ms,yl),m(o,Ws,u),m(o,X,u),y(Wo,X,null),e(X,Cl),e(X,us),e(us,wl),e(X,Ll),e(X,_n),e(_n,Tn),e(Tn,$l),e(_n,Rl),e(X,Ml),e(X,Ne),e(Ne,El),e(Ne,fs),e(fs,Fl),e(Ne,ql),e(Ne,gs),e(gs,zl),e(Ne,jl),e(Ne,_s),e(_s,xl),e(Ne,Pl),e(Ne,Ts),e(Ts,Sl),e(Ne,Il),e(X,Ol),e(X,Bo),e(Bo,Nl),e(Bo,vn),e(vn,Dl),e(Bo,Al),e(X,Hl),e(X,Uo),e(Uo,Wl),e(Uo,Vo),e(Vo,Bl),e(Uo,Ul),e(X,Vl),y(Ht,X,null),e(X,Gl),e(X,fe),y(Go,fe,null),e(fe,Kl),e(fe,wt),e(wt,Xl),e(wt,bn),e(bn,Jl),e(wt,Ql),e(wt,vs),e(vs,Yl),e(wt,Zl),e(fe,ed),y(Wt,fe,null),e(fe,td),e(fe,bs),e(bs,od),e(fe,nd),y(Ko,fe,null),e(fe,sd),y(Xo,fe,null),Bs=!0},p(o,[u]){const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:o}),Ft.$set(Jo);const ks={};u&2&&(ks.$$scope={dirty:u,ctx:o}),zt.$set(ks);const ys={};u&2&&(ys.$$scope={dirty:u,ctx:o}),xt.$set(ys);const Cs={};u&2&&(Cs.$$scope={dirty:u,ctx:o}),St.$set(Cs);const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:o}),It.$set(Qo);const ws={};u&2&&(ws.$$scope={dirty:u,ctx:o}),Nt.$set(ws);const Ls={};u&2&&(Ls.$$scope={dirty:u,ctx:o}),Dt.$set(Ls);const $s={};u&2&&($s.$$scope={dirty:u,ctx:o}),Ht.$set($s);const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:o}),Wt.$set(Lt)},i(o){Bs||(C(T.$$.fragment,o),C(Z.$$.fragment,o),C(Xt.$$.fragment,o),C(Jt.$$.fragment,o),C(Yt.$$.fragment,o),C(Zt.$$.fragment,o),C(eo.$$.fragment,o),C(oo.$$.fragment,o),C(no.$$.fragment,o),C(so.$$.fragment,o),C(lo.$$.fragment,o),C(Ft.$$.fragment,o),C(co.$$.fragment,o),C(po.$$.fragment,o),C(ho.$$.fragment,o),C(go.$$.fragment,o),C(zt.$$.fragment,o),C(_o.$$.fragment,o),C(To.$$.fragment,o),C(vo.$$.fragment,o),C(Co.$$.fragment,o),C(xt.$$.fragment,o),C(wo.$$.fragment,o),C(Lo.$$.fragment,o),C($o.$$.fragment,o),C(Ro.$$.fragment,o),C(Mo.$$.fragment,o),C(Eo.$$.fragment,o),C(St.$$.fragment,o),C(jo.$$.fragment,o),C(It.$$.fragment,o),C(xo.$$.fragment,o),C(Po.$$.fragment,o),C(So.$$.fragment,o),C(Nt.$$.fragment,o),C(Do.$$.fragment,o),C(Dt.$$.fragment,o),C(Ao.$$.fragment,o),C(Ho.$$.fragment,o),C(Wo.$$.fragment,o),C(Ht.$$.fragment,o),C(Go.$$.fragment,o),C(Wt.$$.fragment,o),C(Ko.$$.fragment,o),C(Xo.$$.fragment,o),Bs=!0)},o(o){w(T.$$.fragment,o),w(Z.$$.fragment,o),w(Xt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(lo.$$.fragment,o),w(Ft.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(go.$$.fragment,o),w(zt.$$.fragment,o),w(_o.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(Co.$$.fragment,o),w(xt.$$.fragment,o),w(wo.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Ro.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(St.$$.fragment,o),w(jo.$$.fragment,o),w(It.$$.fragment,o),w(xo.$$.fragment,o),w(Po.$$.fragment,o),w(So.$$.fragment,o),w(Nt.$$.fragment,o),w(Do.$$.fragment,o),w(Dt.$$.fragment,o),w(Ao.$$.fragment,o),w(Ho.$$.fragment,o),w(Wo.$$.fragment,o),w(Ht.$$.fragment,o),w(Go.$$.fragment,o),w(Wt.$$.fragment,o),w(Ko.$$.fragment,o),w(Xo.$$.fragment,o),Bs=!1},d(o){t(h),o&&t(E),o&&t(f),L(T),o&&t(Y),o&&t(R),L(Z),o&&t(pe),o&&t(x),o&&t(he),o&&t(se),o&&t(me),o&&t(ae),o&&t(H),o&&t(re),o&&t(W),o&&t(S),o&&t(Rs),o&&t(Ye),o&&t(Ms),o&&t(ct),L(Xt),o&&t(Es),o&&t(Le),L(Jt),L(Yt),o&&t(Fs),o&&t(ht),L(Zt),o&&t(qs),o&&t(Oe),L(eo),L(oo),o&&t(zs),o&&t(mt),L(no),o&&t(js),o&&t($e),L(so),L(lo),L(Ft),L(co),o&&t(xs),o&&t(ft),L(po),o&&t(Ps),o&&t(Re),L(ho),L(go),L(zt),L(_o),o&&t(Ss),o&&t(_t),L(To),o&&t(Is),o&&t(Me),L(vo),L(Co),L(xt),L(wo),L(Lo),L($o),L(Ro),o&&t(Os),o&&t(vt),L(Mo),o&&t(Ns),o&&t(de),L(Eo),L(St),L(jo),L(It),L(xo),o&&t(Ds),o&&t(kt),L(Po),o&&t(As),o&&t(ce),L(So),L(Nt),L(Do),L(Dt),L(Ao),o&&t(Hs),o&&t(Ct),L(Ho),o&&t(Ws),o&&t(X),L(Wo),L(Ht),L(Go),L(Wt),L(Ko),L(Xo)}}}const lp={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function dp(J){return Qc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fp extends Gc{constructor(h){super();Kc(this,h,dp,ip,Xc,{})}}export{fp as default,lp as metadata};
