import{S as Gc,i as Kc,s as Xc,e as a,k as l,w as k,t as n,M as Jc,c as r,d as t,m as d,a as i,x as b,h as s,b as c,F as e,g as u,y,q as C,o as w,B as L,v as Qc}from"../../chunks/vendor-6b77c823.js";import{T as $t}from"../../chunks/Tip-39098574.js";import{D as Ee}from"../../chunks/Docstring-abef54e3.js";import{C as Qe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";function Yc(J){let h,F,f,g,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,F),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function Zc(J){let h,F,f,g,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,F),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function ep(J){let h,F,f,g,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,F),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function tp(J){let h,F,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,j,ee,ne,E,q,ke,U,he,se,V,ue,ae,z,be,H,re,ye,W,S,te,I,oe,G,Ce;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),D=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ve=n("model(inputs)"),pe=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),E=a("ul"),q=a("li"),ke=n("a single Tensor with "),U=a("code"),he=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),ue=n("model(inputs_ids)"),ae=l(),z=a("li"),be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),ye=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var De=i(v);T=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),_=d(ie),M=r(ie,"LI",{});var me=i(M);_e=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var O=i(R);Q=s(O,"This second option is useful when using "),D=r(O,"CODE",{});var qe=i(D);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(O,"CODE",{});var Ae=i(A);ve=s(Ae,"model(inputs)"),Ae.forEach(t),pe=s(O,"."),O.forEach(t),x=d(p),j=r(p,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),E=r(p,"UL",{});var N=i(E);q=r(N,"LI",{});var P=i(q);ke=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var ze=i(V);ue=s(ze,"model(inputs_ids)"),ze.forEach(t),P.forEach(t),ae=d(N),z=r(N,"LI",{});var K=i(z);be=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ye=s(K," or "),W=r(K,"CODE",{});var Pe=i(W);S=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),K.forEach(t),te=d(N),I=r(N,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),N.forEach(t)},m(p,$){u(p,h,$),e(h,F),u(p,f,$),u(p,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),u(p,Y,$),u(p,R,$),e(R,Q),e(R,D),e(D,Z),e(R,Te),e(R,A),e(A,ve),e(R,pe),u(p,x,$),u(p,j,$),e(j,ee),u(p,ne,$),u(p,E,$),e(E,q),e(q,ke),e(q,U),e(U,he),e(q,se),e(q,V),e(V,ue),e(E,ae),e(E,z),e(z,be),e(z,H),e(H,re),e(z,ye),e(z,W),e(W,S),e(E,te),e(E,I),e(I,oe),e(I,G),e(G,Ce)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(j),p&&t(ne),p&&t(E)}}}function op(J){let h,F,f,g,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,F),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function np(J){let h,F,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,j,ee,ne,E,q,ke,U,he,se,V,ue,ae,z,be,H,re,ye,W,S,te,I,oe,G,Ce;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),D=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ve=n("model(inputs)"),pe=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),E=a("ul"),q=a("li"),ke=n("a single Tensor with "),U=a("code"),he=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),ue=n("model(inputs_ids)"),ae=l(),z=a("li"),be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),ye=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var De=i(v);T=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),_=d(ie),M=r(ie,"LI",{});var me=i(M);_e=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var O=i(R);Q=s(O,"This second option is useful when using "),D=r(O,"CODE",{});var qe=i(D);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(O,"CODE",{});var Ae=i(A);ve=s(Ae,"model(inputs)"),Ae.forEach(t),pe=s(O,"."),O.forEach(t),x=d(p),j=r(p,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),E=r(p,"UL",{});var N=i(E);q=r(N,"LI",{});var P=i(q);ke=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var ze=i(V);ue=s(ze,"model(inputs_ids)"),ze.forEach(t),P.forEach(t),ae=d(N),z=r(N,"LI",{});var K=i(z);be=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ye=s(K," or "),W=r(K,"CODE",{});var Pe=i(W);S=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),K.forEach(t),te=d(N),I=r(N,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),N.forEach(t)},m(p,$){u(p,h,$),e(h,F),u(p,f,$),u(p,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),u(p,Y,$),u(p,R,$),e(R,Q),e(R,D),e(D,Z),e(R,Te),e(R,A),e(A,ve),e(R,pe),u(p,x,$),u(p,j,$),e(j,ee),u(p,ne,$),u(p,E,$),e(E,q),e(q,ke),e(q,U),e(U,he),e(q,se),e(q,V),e(V,ue),e(E,ae),e(E,z),e(z,be),e(z,H),e(H,re),e(z,ye),e(z,W),e(W,S),e(E,te),e(E,I),e(I,oe),e(I,G),e(G,Ce)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(j),p&&t(ne),p&&t(E)}}}function sp(J){let h,F,f,g,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,F),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function ap(J){let h,F,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,j,ee,ne,E,q,ke,U,he,se,V,ue,ae,z,be,H,re,ye,W,S,te,I,oe,G,Ce;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),_e=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),D=a("code"),Z=n("tf.keras.Model.fit"),Te=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ve=n("model(inputs)"),pe=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),E=a("ul"),q=a("li"),ke=n("a single Tensor with "),U=a("code"),he=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),ue=n("model(inputs_ids)"),ae=l(),z=a("li"),be=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),ye=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var De=i(v);T=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),_=d(ie),M=r(ie,"LI",{});var me=i(M);_e=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var O=i(R);Q=s(O,"This second option is useful when using "),D=r(O,"CODE",{});var qe=i(D);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),Te=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(O,"CODE",{});var Ae=i(A);ve=s(Ae,"model(inputs)"),Ae.forEach(t),pe=s(O,"."),O.forEach(t),x=d(p),j=r(p,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),E=r(p,"UL",{});var N=i(E);q=r(N,"LI",{});var P=i(q);ke=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var ze=i(V);ue=s(ze,"model(inputs_ids)"),ze.forEach(t),P.forEach(t),ae=d(N),z=r(N,"LI",{});var K=i(z);be=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ye=s(K," or "),W=r(K,"CODE",{});var Pe=i(W);S=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),K.forEach(t),te=d(N),I=r(N,"LI",{});var we=i(I);oe=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(we,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),we.forEach(t),N.forEach(t)},m(p,$){u(p,h,$),e(h,F),u(p,f,$),u(p,g,$),e(g,v),e(v,T),e(g,_),e(g,M),e(M,_e),u(p,Y,$),u(p,R,$),e(R,Q),e(R,D),e(D,Z),e(R,Te),e(R,A),e(A,ve),e(R,pe),u(p,x,$),u(p,j,$),e(j,ee),u(p,ne,$),u(p,E,$),e(E,q),e(q,ke),e(q,U),e(U,he),e(q,se),e(q,V),e(V,ue),e(E,ae),e(E,z),e(z,be),e(z,H),e(H,re),e(z,ye),e(z,W),e(W,S),e(E,te),e(E,I),e(I,oe),e(I,G),e(G,Ce)},d(p){p&&t(h),p&&t(f),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(j),p&&t(ne),p&&t(E)}}}function rp(J){let h,F,f,g,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,F),e(h,f),e(f,g),e(h,v)},d(T){T&&t(h)}}}function ip(J){let h,F,f,g,v,T,_,M,_e,Y,R,Q,D,Z,Te,A,ve,pe,x,j,ee,ne,E,q,ke,U,he,se,V,ue,ae,z,be,H,re,ye,W,S,te,I,oe,G,Ce,p,$,ie,De,me,O,qe,Ae,He,N,P,We,ze,K,Be,Pe,we,Ue,Fn,ma,fa,Yo,En,ga,_a,Rs,Ye,Ta,Gt,va,ka,Kt,ba,ya,Ms,ct,Rt,qn,Xt,Ca,zn,wa,Fs,Le,Jt,La,Je,$a,Zo,Ra,Ma,en,Fa,Ea,Qt,qa,za,Pa,pt,xa,tn,ja,Sa,on,Ia,Oa,Na,Pn,Da,Aa,Yt,Es,ht,Mt,xn,Zt,Ha,jn,Wa,qs,Oe,eo,Ba,Sn,Ua,Va,to,Ga,nn,Ka,Xa,Ja,sn,oo,zs,ut,Ft,In,no,Qa,On,Ya,Ps,$e,so,Za,Nn,er,tr,ao,or,an,nr,sr,ar,ro,rr,io,ir,lr,dr,xe,lo,cr,mt,pr,rn,hr,ur,Dn,mr,fr,gr,Et,_r,An,Tr,vr,co,xs,ft,qt,Hn,po,kr,Wn,br,js,Re,ho,yr,Bn,Cr,wr,uo,Lr,ln,$r,Rr,Mr,mo,Fr,fo,Er,qr,zr,je,go,Pr,gt,xr,dn,jr,Sr,Un,Ir,Or,Nr,zt,Dr,Vn,Ar,Hr,_o,Ss,_t,Pt,Gn,To,Wr,Kn,Br,Is,Me,vo,Ur,Fe,Vr,cn,Gr,Kr,Xn,Xr,Jr,Jn,Qr,Yr,Qn,Zr,ei,Yn,ti,oi,ni,ko,si,pn,ai,ri,ii,bo,li,yo,di,ci,pi,B,Co,hi,Tt,ui,hn,mi,fi,Zn,gi,_i,Ti,xt,vi,es,ki,bi,wo,yi,Lo,Ci,ts,wi,Li,$o,$i,Ro,Os,vt,jt,os,Mo,Ri,ns,Mi,Ns,de,Fo,Fi,ss,Ei,qi,Eo,zi,un,Pi,xi,ji,qo,Si,zo,Ii,Oi,Ni,St,Di,Se,Po,Ai,kt,Hi,mn,Wi,Bi,as,Ui,Vi,Gi,It,Ki,rs,Xi,Ji,xo,Ds,bt,Ot,is,jo,Qi,ls,Yi,As,ce,So,Zi,ds,el,tl,Io,ol,fn,nl,sl,al,Oo,rl,No,il,ll,dl,Nt,cl,Ie,Do,pl,yt,hl,gn,ul,ml,cs,fl,gl,_l,Dt,Tl,ps,vl,kl,Ao,Hs,Ct,At,hs,Ho,bl,us,yl,Ws,X,Wo,Cl,ms,wl,Ll,_n,Tn,$l,Rl,Ml,Ne,Fl,fs,El,ql,gs,zl,Pl,_s,xl,jl,Ts,Sl,Il,Ol,Bo,Nl,vn,Dl,Al,Hl,Uo,Wl,Vo,Bl,Ul,Vl,Ht,Gl,fe,Go,Kl,wt,Xl,kn,Jl,Ql,vs,Yl,Zl,ed,Wt,td,ks,od,nd,Ko,sd,Xo,Bs;return T=new dt({}),Z=new dt({}),Xt=new dt({}),Jt=new Ee({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new dt({}),eo=new Ee({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Ee({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new dt({}),so=new Ee({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_ctrl.py#L320",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Ee({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_ctrl.py#L353",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new $t({props:{$$slots:{default:[Yc]},$$scope:{ctx:J}}}),co=new Qe({props:{code:`from transformers import CTRLTokenizer, CTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),po=new dt({}),ho=new Ee({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_ctrl.py#L493",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),go=new Ee({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": LongTensor = None"},{name:"head_mask",val:": FloatTensor = None"},{name:"inputs_embeds",val:": FloatTensor = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_ctrl.py#L515",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new dt({}),vo=new Ee({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_ctrl.py#L609",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ee({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_ctrl.py#L619",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xt=new $t({props:{$$slots:{default:[ep]},$$scope:{ctx:J}}}),wo=new Qe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Mo=new dt({}),Fo=new Ee({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_tf_ctrl.py#L516",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new $t({props:{$$slots:{default:[tp]},$$scope:{ctx:J}}}),Po=new Ee({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_tf_ctrl.py#L521",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),jo=new dt({}),So=new Ee({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_tf_ctrl.py#L610",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nt=new $t({props:{$$slots:{default:[np]},$$scope:{ctx:J}}}),Do=new Ee({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_tf_ctrl.py#L631",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ho=new dt({}),Wo=new Ee({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_tf_ctrl.py#L727",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new $t({props:{$$slots:{default:[ap]},$$scope:{ctx:J}}}),Go=new Ee({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/ctrl/modeling_tf_ctrl.py#L742",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
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
`}}),{c(){h=a("meta"),F=l(),f=a("h1"),g=a("a"),v=a("span"),k(T.$$.fragment),_=l(),M=a("span"),_e=n("CTRL"),Y=l(),R=a("h2"),Q=a("a"),D=a("span"),k(Z.$$.fragment),Te=l(),A=a("span"),ve=n("Overview"),pe=l(),x=a("p"),j=n("CTRL model was proposed in "),ee=a("a"),ne=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),E=n(" by Nitish Shirish Keskar"),q=a("em"),ke=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),he=l(),se=a("p"),V=n("The abstract from the paper is the following:"),ue=l(),ae=a("p"),z=a("em"),be=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),re=a("p"),ye=n("Tips:"),W=l(),S=a("ul"),te=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=a("a"),G=n("original implementation"),Ce=n(` for
more information.`),p=l(),$=a("li"),ie=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),De=l(),me=a("li"),O=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),qe=a("em"),Ae=n("run_generation.py"),He=n(" example script."),N=l(),P=a("li"),We=n("The PyTorch models can take the "),ze=a("code"),K=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Pe=a("code"),we=n("past"),Ue=n(" as input. Using the "),Fn=a("code"),ma=n("past_key_values"),fa=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Yo=a("a"),En=a("code"),ga=n("forward"),_a=n(`
method for more information on the usage of this argument.`),Rs=l(),Ye=a("p"),Ta=n("This model was contributed by "),Gt=a("a"),va=n("keskarnitishr"),ka=n(`. The original code can be found
`),Kt=a("a"),ba=n("here"),ya=n("."),Ms=l(),ct=a("h2"),Rt=a("a"),qn=a("span"),k(Xt.$$.fragment),Ca=l(),zn=a("span"),wa=n("CTRLConfig"),Fs=l(),Le=a("div"),k(Jt.$$.fragment),La=l(),Je=a("p"),$a=n("This is the configuration class to store the configuration of a "),Zo=a("a"),Ra=n("CTRLModel"),Ma=n(" or a "),en=a("a"),Fa=n("TFCTRLModel"),Ea=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),qa=n("ctrl"),za=n(" architecture from SalesForce."),Pa=l(),pt=a("p"),xa=n("Configuration objects inherit from "),tn=a("a"),ja=n("PretrainedConfig"),Sa=n(` and can be used to control the model outputs. Read the
documentation from `),on=a("a"),Ia=n("PretrainedConfig"),Oa=n(" for more information."),Na=l(),Pn=a("p"),Da=n("Examples:"),Aa=l(),k(Yt.$$.fragment),Es=l(),ht=a("h2"),Mt=a("a"),xn=a("span"),k(Zt.$$.fragment),Ha=l(),jn=a("span"),Wa=n("CTRLTokenizer"),qs=l(),Oe=a("div"),k(eo.$$.fragment),Ba=l(),Sn=a("p"),Ua=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Va=l(),to=a("p"),Ga=n("This tokenizer inherits from "),nn=a("a"),Ka=n("PreTrainedTokenizer"),Xa=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ja=l(),sn=a("div"),k(oo.$$.fragment),zs=l(),ut=a("h2"),Ft=a("a"),In=a("span"),k(no.$$.fragment),Qa=l(),On=a("span"),Ya=n("CTRLModel"),Ps=l(),$e=a("div"),k(so.$$.fragment),Za=l(),Nn=a("p"),er=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),tr=l(),ao=a("p"),or=n("This model inherits from "),an=a("a"),nr=n("PreTrainedModel"),sr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar=l(),ro=a("p"),rr=n("This model is also a PyTorch "),io=a("a"),ir=n("torch.nn.Module"),lr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=l(),xe=a("div"),k(lo.$$.fragment),cr=l(),mt=a("p"),pr=n("The "),rn=a("a"),hr=n("CTRLModel"),ur=n(" forward method, overrides the "),Dn=a("code"),mr=n("__call__"),fr=n(" special method."),gr=l(),k(Et.$$.fragment),_r=l(),An=a("p"),Tr=n("Example:"),vr=l(),k(co.$$.fragment),xs=l(),ft=a("h2"),qt=a("a"),Hn=a("span"),k(po.$$.fragment),kr=l(),Wn=a("span"),br=n("CTRLLMHeadModel"),js=l(),Re=a("div"),k(ho.$$.fragment),yr=l(),Bn=a("p"),Cr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),wr=l(),uo=a("p"),Lr=n("This model inherits from "),ln=a("a"),$r=n("PreTrainedModel"),Rr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr=l(),mo=a("p"),Fr=n("This model is also a PyTorch "),fo=a("a"),Er=n("torch.nn.Module"),qr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=l(),je=a("div"),k(go.$$.fragment),Pr=l(),gt=a("p"),xr=n("The "),dn=a("a"),jr=n("CTRLLMHeadModel"),Sr=n(" forward method, overrides the "),Un=a("code"),Ir=n("__call__"),Or=n(" special method."),Nr=l(),k(zt.$$.fragment),Dr=l(),Vn=a("p"),Ar=n("Example:"),Hr=l(),k(_o.$$.fragment),Ss=l(),_t=a("h2"),Pt=a("a"),Gn=a("span"),k(To.$$.fragment),Wr=l(),Kn=a("span"),Br=n("CTRLForSequenceClassification"),Is=l(),Me=a("div"),k(vo.$$.fragment),Ur=l(),Fe=a("p"),Vr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),cn=a("a"),Gr=n("CTRLForSequenceClassification"),Kr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Xn=a("code"),Xr=n("pad_token_id"),Jr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Jn=a("code"),Qr=n("pad_token_id"),Yr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Qn=a("code"),Zr=n("inputs_embeds"),ei=n(" are passed instead of "),Yn=a("code"),ti=n("input_ids"),oi=n(`, it does the same (take the last
value in each row of the batch).`),ni=l(),ko=a("p"),si=n("This model inherits from "),pn=a("a"),ai=n("PreTrainedModel"),ri=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=l(),bo=a("p"),li=n("This model is also a PyTorch "),yo=a("a"),di=n("torch.nn.Module"),ci=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=l(),B=a("div"),k(Co.$$.fragment),hi=l(),Tt=a("p"),ui=n("The "),hn=a("a"),mi=n("CTRLForSequenceClassification"),fi=n(" forward method, overrides the "),Zn=a("code"),gi=n("__call__"),_i=n(" special method."),Ti=l(),k(xt.$$.fragment),vi=l(),es=a("p"),ki=n("Example of single-label classification:"),bi=l(),k(wo.$$.fragment),yi=l(),k(Lo.$$.fragment),Ci=l(),ts=a("p"),wi=n("Example of multi-label classification:"),Li=l(),k($o.$$.fragment),$i=l(),k(Ro.$$.fragment),Os=l(),vt=a("h2"),jt=a("a"),os=a("span"),k(Mo.$$.fragment),Ri=l(),ns=a("span"),Mi=n("TFCTRLModel"),Ns=l(),de=a("div"),k(Fo.$$.fragment),Fi=l(),ss=a("p"),Ei=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),qi=l(),Eo=a("p"),zi=n("This model inherits from "),un=a("a"),Pi=n("TFPreTrainedModel"),xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ji=l(),qo=a("p"),Si=n("This model is also a "),zo=a("a"),Ii=n("tf.keras.Model"),Oi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ni=l(),k(St.$$.fragment),Di=l(),Se=a("div"),k(Po.$$.fragment),Ai=l(),kt=a("p"),Hi=n("The "),mn=a("a"),Wi=n("TFCTRLModel"),Bi=n(" forward method, overrides the "),as=a("code"),Ui=n("__call__"),Vi=n(" special method."),Gi=l(),k(It.$$.fragment),Ki=l(),rs=a("p"),Xi=n("Example:"),Ji=l(),k(xo.$$.fragment),Ds=l(),bt=a("h2"),Ot=a("a"),is=a("span"),k(jo.$$.fragment),Qi=l(),ls=a("span"),Yi=n("TFCTRLLMHeadModel"),As=l(),ce=a("div"),k(So.$$.fragment),Zi=l(),ds=a("p"),el=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tl=l(),Io=a("p"),ol=n("This model inherits from "),fn=a("a"),nl=n("TFPreTrainedModel"),sl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),al=l(),Oo=a("p"),rl=n("This model is also a "),No=a("a"),il=n("tf.keras.Model"),ll=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dl=l(),k(Nt.$$.fragment),cl=l(),Ie=a("div"),k(Do.$$.fragment),pl=l(),yt=a("p"),hl=n("The "),gn=a("a"),ul=n("TFCTRLLMHeadModel"),ml=n(" forward method, overrides the "),cs=a("code"),fl=n("__call__"),gl=n(" special method."),_l=l(),k(Dt.$$.fragment),Tl=l(),ps=a("p"),vl=n("Example:"),kl=l(),k(Ao.$$.fragment),Hs=l(),Ct=a("h2"),At=a("a"),hs=a("span"),k(Ho.$$.fragment),bl=l(),us=a("span"),yl=n("TFCTRLForSequenceClassification"),Ws=l(),X=a("div"),k(Wo.$$.fragment),Cl=l(),ms=a("p"),wl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),Ll=l(),_n=a("p"),Tn=a("a"),$l=n("TFCTRLForSequenceClassification"),Rl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Ml=l(),Ne=a("p"),Fl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),fs=a("code"),El=n("pad_token_id"),ql=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),gs=a("code"),zl=n("pad_token_id"),Pl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),_s=a("code"),xl=n("inputs_embeds"),jl=n(" are passed instead of "),Ts=a("code"),Sl=n("input_ids"),Il=n(`, it does the same (take the last value in
each row of the batch).`),Ol=l(),Bo=a("p"),Nl=n("This model inherits from "),vn=a("a"),Dl=n("TFPreTrainedModel"),Al=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=l(),Uo=a("p"),Wl=n("This model is also a "),Vo=a("a"),Bl=n("tf.keras.Model"),Ul=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl=l(),k(Ht.$$.fragment),Gl=l(),fe=a("div"),k(Go.$$.fragment),Kl=l(),wt=a("p"),Xl=n("The "),kn=a("a"),Jl=n("TFCTRLForSequenceClassification"),Ql=n(" forward method, overrides the "),vs=a("code"),Yl=n("__call__"),Zl=n(" special method."),ed=l(),k(Wt.$$.fragment),td=l(),ks=a("p"),od=n("Example:"),nd=l(),k(Ko.$$.fragment),sd=l(),k(Xo.$$.fragment),this.h()},l(o){const m=Jc('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),f=r(o,"H1",{class:!0});var Jo=i(f);g=r(Jo,"A",{id:!0,class:!0,href:!0});var bs=i(g);v=r(bs,"SPAN",{});var ys=i(v);b(T.$$.fragment,ys),ys.forEach(t),bs.forEach(t),_=d(Jo),M=r(Jo,"SPAN",{});var Cs=i(M);_e=s(Cs,"CTRL"),Cs.forEach(t),Jo.forEach(t),Y=d(o),R=r(o,"H2",{class:!0});var Qo=i(R);Q=r(Qo,"A",{id:!0,class:!0,href:!0});var ws=i(Q);D=r(ws,"SPAN",{});var Ls=i(D);b(Z.$$.fragment,Ls),Ls.forEach(t),ws.forEach(t),Te=d(Qo),A=r(Qo,"SPAN",{});var $s=i(A);ve=s($s,"Overview"),$s.forEach(t),Qo.forEach(t),pe=d(o),x=r(o,"P",{});var Lt=i(x);j=s(Lt,"CTRL model was proposed in "),ee=r(Lt,"A",{href:!0,rel:!0});var rd=i(ee);ne=s(rd,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),rd.forEach(t),E=s(Lt," by Nitish Shirish Keskar"),q=r(Lt,"EM",{});var id=i(q);ke=s(id,", Bryan McCann"),id.forEach(t),U=s(Lt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Lt.forEach(t),he=d(o),se=r(o,"P",{});var ld=i(se);V=s(ld,"The abstract from the paper is the following:"),ld.forEach(t),ue=d(o),ae=r(o,"P",{});var dd=i(ae);z=r(dd,"EM",{});var cd=i(z);be=s(cd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),cd.forEach(t),dd.forEach(t),H=d(o),re=r(o,"P",{});var pd=i(re);ye=s(pd,"Tips:"),pd.forEach(t),W=d(o),S=r(o,"UL",{});var Bt=i(S);te=r(Bt,"LI",{});var Us=i(te);I=s(Us,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=r(Us,"A",{href:!0,rel:!0});var hd=i(oe);G=s(hd,"original implementation"),hd.forEach(t),Ce=s(Us,` for
more information.`),Us.forEach(t),p=d(Bt),$=r(Bt,"LI",{});var ud=i($);ie=s(ud,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ud.forEach(t),De=d(Bt),me=r(Bt,"LI",{});var Vs=i(me);O=s(Vs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),qe=r(Vs,"EM",{});var md=i(qe);Ae=s(md,"run_generation.py"),md.forEach(t),He=s(Vs," example script."),Vs.forEach(t),N=d(Bt),P=r(Bt,"LI",{});var Ze=i(P);We=s(Ze,"The PyTorch models can take the "),ze=r(Ze,"CODE",{});var fd=i(ze);K=s(fd,"past_key_values"),fd.forEach(t),Be=s(Ze,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Pe=r(Ze,"CODE",{});var gd=i(Pe);we=s(gd,"past"),gd.forEach(t),Ue=s(Ze," as input. Using the "),Fn=r(Ze,"CODE",{});var _d=i(Fn);ma=s(_d,"past_key_values"),_d.forEach(t),fa=s(Ze,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Yo=r(Ze,"A",{href:!0});var Td=i(Yo);En=r(Td,"CODE",{});var vd=i(En);ga=s(vd,"forward"),vd.forEach(t),Td.forEach(t),_a=s(Ze,`
method for more information on the usage of this argument.`),Ze.forEach(t),Bt.forEach(t),Rs=d(o),Ye=r(o,"P",{});var bn=i(Ye);Ta=s(bn,"This model was contributed by "),Gt=r(bn,"A",{href:!0,rel:!0});var kd=i(Gt);va=s(kd,"keskarnitishr"),kd.forEach(t),ka=s(bn,`. The original code can be found
`),Kt=r(bn,"A",{href:!0,rel:!0});var bd=i(Kt);ba=s(bd,"here"),bd.forEach(t),ya=s(bn,"."),bn.forEach(t),Ms=d(o),ct=r(o,"H2",{class:!0});var Gs=i(ct);Rt=r(Gs,"A",{id:!0,class:!0,href:!0});var yd=i(Rt);qn=r(yd,"SPAN",{});var Cd=i(qn);b(Xt.$$.fragment,Cd),Cd.forEach(t),yd.forEach(t),Ca=d(Gs),zn=r(Gs,"SPAN",{});var wd=i(zn);wa=s(wd,"CTRLConfig"),wd.forEach(t),Gs.forEach(t),Fs=d(o),Le=r(o,"DIV",{class:!0});var et=i(Le);b(Jt.$$.fragment,et),La=d(et),Je=r(et,"P",{});var Ut=i(Je);$a=s(Ut,"This is the configuration class to store the configuration of a "),Zo=r(Ut,"A",{href:!0});var Ld=i(Zo);Ra=s(Ld,"CTRLModel"),Ld.forEach(t),Ma=s(Ut," or a "),en=r(Ut,"A",{href:!0});var $d=i(en);Fa=s($d,"TFCTRLModel"),$d.forEach(t),Ea=s(Ut,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Ut,"A",{href:!0,rel:!0});var Rd=i(Qt);qa=s(Rd,"ctrl"),Rd.forEach(t),za=s(Ut," architecture from SalesForce."),Ut.forEach(t),Pa=d(et),pt=r(et,"P",{});var yn=i(pt);xa=s(yn,"Configuration objects inherit from "),tn=r(yn,"A",{href:!0});var Md=i(tn);ja=s(Md,"PretrainedConfig"),Md.forEach(t),Sa=s(yn,` and can be used to control the model outputs. Read the
documentation from `),on=r(yn,"A",{href:!0});var Fd=i(on);Ia=s(Fd,"PretrainedConfig"),Fd.forEach(t),Oa=s(yn," for more information."),yn.forEach(t),Na=d(et),Pn=r(et,"P",{});var Ed=i(Pn);Da=s(Ed,"Examples:"),Ed.forEach(t),Aa=d(et),b(Yt.$$.fragment,et),et.forEach(t),Es=d(o),ht=r(o,"H2",{class:!0});var Ks=i(ht);Mt=r(Ks,"A",{id:!0,class:!0,href:!0});var qd=i(Mt);xn=r(qd,"SPAN",{});var zd=i(xn);b(Zt.$$.fragment,zd),zd.forEach(t),qd.forEach(t),Ha=d(Ks),jn=r(Ks,"SPAN",{});var Pd=i(jn);Wa=s(Pd,"CTRLTokenizer"),Pd.forEach(t),Ks.forEach(t),qs=d(o),Oe=r(o,"DIV",{class:!0});var Vt=i(Oe);b(eo.$$.fragment,Vt),Ba=d(Vt),Sn=r(Vt,"P",{});var xd=i(Sn);Ua=s(xd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),xd.forEach(t),Va=d(Vt),to=r(Vt,"P",{});var Xs=i(to);Ga=s(Xs,"This tokenizer inherits from "),nn=r(Xs,"A",{href:!0});var jd=i(nn);Ka=s(jd,"PreTrainedTokenizer"),jd.forEach(t),Xa=s(Xs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xs.forEach(t),Ja=d(Vt),sn=r(Vt,"DIV",{class:!0});var Sd=i(sn);b(oo.$$.fragment,Sd),Sd.forEach(t),Vt.forEach(t),zs=d(o),ut=r(o,"H2",{class:!0});var Js=i(ut);Ft=r(Js,"A",{id:!0,class:!0,href:!0});var Id=i(Ft);In=r(Id,"SPAN",{});var Od=i(In);b(no.$$.fragment,Od),Od.forEach(t),Id.forEach(t),Qa=d(Js),On=r(Js,"SPAN",{});var Nd=i(On);Ya=s(Nd,"CTRLModel"),Nd.forEach(t),Js.forEach(t),Ps=d(o),$e=r(o,"DIV",{class:!0});var tt=i($e);b(so.$$.fragment,tt),Za=d(tt),Nn=r(tt,"P",{});var Dd=i(Nn);er=s(Dd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Dd.forEach(t),tr=d(tt),ao=r(tt,"P",{});var Qs=i(ao);or=s(Qs,"This model inherits from "),an=r(Qs,"A",{href:!0});var Ad=i(an);nr=s(Ad,"PreTrainedModel"),Ad.forEach(t),sr=s(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qs.forEach(t),ar=d(tt),ro=r(tt,"P",{});var Ys=i(ro);rr=s(Ys,"This model is also a PyTorch "),io=r(Ys,"A",{href:!0,rel:!0});var Hd=i(io);ir=s(Hd,"torch.nn.Module"),Hd.forEach(t),lr=s(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),dr=d(tt),xe=r(tt,"DIV",{class:!0});var ot=i(xe);b(lo.$$.fragment,ot),cr=d(ot),mt=r(ot,"P",{});var Cn=i(mt);pr=s(Cn,"The "),rn=r(Cn,"A",{href:!0});var Wd=i(rn);hr=s(Wd,"CTRLModel"),Wd.forEach(t),ur=s(Cn," forward method, overrides the "),Dn=r(Cn,"CODE",{});var Bd=i(Dn);mr=s(Bd,"__call__"),Bd.forEach(t),fr=s(Cn," special method."),Cn.forEach(t),gr=d(ot),b(Et.$$.fragment,ot),_r=d(ot),An=r(ot,"P",{});var Ud=i(An);Tr=s(Ud,"Example:"),Ud.forEach(t),vr=d(ot),b(co.$$.fragment,ot),ot.forEach(t),tt.forEach(t),xs=d(o),ft=r(o,"H2",{class:!0});var Zs=i(ft);qt=r(Zs,"A",{id:!0,class:!0,href:!0});var Vd=i(qt);Hn=r(Vd,"SPAN",{});var Gd=i(Hn);b(po.$$.fragment,Gd),Gd.forEach(t),Vd.forEach(t),kr=d(Zs),Wn=r(Zs,"SPAN",{});var Kd=i(Wn);br=s(Kd,"CTRLLMHeadModel"),Kd.forEach(t),Zs.forEach(t),js=d(o),Re=r(o,"DIV",{class:!0});var nt=i(Re);b(ho.$$.fragment,nt),yr=d(nt),Bn=r(nt,"P",{});var Xd=i(Bn);Cr=s(Xd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xd.forEach(t),wr=d(nt),uo=r(nt,"P",{});var ea=i(uo);Lr=s(ea,"This model inherits from "),ln=r(ea,"A",{href:!0});var Jd=i(ln);$r=s(Jd,"PreTrainedModel"),Jd.forEach(t),Rr=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),Mr=d(nt),mo=r(nt,"P",{});var ta=i(mo);Fr=s(ta,"This model is also a PyTorch "),fo=r(ta,"A",{href:!0,rel:!0});var Qd=i(fo);Er=s(Qd,"torch.nn.Module"),Qd.forEach(t),qr=s(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(t),zr=d(nt),je=r(nt,"DIV",{class:!0});var st=i(je);b(go.$$.fragment,st),Pr=d(st),gt=r(st,"P",{});var wn=i(gt);xr=s(wn,"The "),dn=r(wn,"A",{href:!0});var Yd=i(dn);jr=s(Yd,"CTRLLMHeadModel"),Yd.forEach(t),Sr=s(wn," forward method, overrides the "),Un=r(wn,"CODE",{});var Zd=i(Un);Ir=s(Zd,"__call__"),Zd.forEach(t),Or=s(wn," special method."),wn.forEach(t),Nr=d(st),b(zt.$$.fragment,st),Dr=d(st),Vn=r(st,"P",{});var ec=i(Vn);Ar=s(ec,"Example:"),ec.forEach(t),Hr=d(st),b(_o.$$.fragment,st),st.forEach(t),nt.forEach(t),Ss=d(o),_t=r(o,"H2",{class:!0});var oa=i(_t);Pt=r(oa,"A",{id:!0,class:!0,href:!0});var tc=i(Pt);Gn=r(tc,"SPAN",{});var oc=i(Gn);b(To.$$.fragment,oc),oc.forEach(t),tc.forEach(t),Wr=d(oa),Kn=r(oa,"SPAN",{});var nc=i(Kn);Br=s(nc,"CTRLForSequenceClassification"),nc.forEach(t),oa.forEach(t),Is=d(o),Me=r(o,"DIV",{class:!0});var at=i(Me);b(vo.$$.fragment,at),Ur=d(at),Fe=r(at,"P",{});var Ve=i(Fe);Vr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),cn=r(Ve,"A",{href:!0});var sc=i(cn);Gr=s(sc,"CTRLForSequenceClassification"),sc.forEach(t),Kr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Xn=r(Ve,"CODE",{});var ac=i(Xn);Xr=s(ac,"pad_token_id"),ac.forEach(t),Jr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Jn=r(Ve,"CODE",{});var rc=i(Jn);Qr=s(rc,"pad_token_id"),rc.forEach(t),Yr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Qn=r(Ve,"CODE",{});var ic=i(Qn);Zr=s(ic,"inputs_embeds"),ic.forEach(t),ei=s(Ve," are passed instead of "),Yn=r(Ve,"CODE",{});var lc=i(Yn);ti=s(lc,"input_ids"),lc.forEach(t),oi=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),ni=d(at),ko=r(at,"P",{});var na=i(ko);si=s(na,"This model inherits from "),pn=r(na,"A",{href:!0});var dc=i(pn);ai=s(dc,"PreTrainedModel"),dc.forEach(t),ri=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(t),ii=d(at),bo=r(at,"P",{});var sa=i(bo);li=s(sa,"This model is also a PyTorch "),yo=r(sa,"A",{href:!0,rel:!0});var cc=i(yo);di=s(cc,"torch.nn.Module"),cc.forEach(t),ci=s(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(t),pi=d(at),B=r(at,"DIV",{class:!0});var le=i(B);b(Co.$$.fragment,le),hi=d(le),Tt=r(le,"P",{});var Ln=i(Tt);ui=s(Ln,"The "),hn=r(Ln,"A",{href:!0});var pc=i(hn);mi=s(pc,"CTRLForSequenceClassification"),pc.forEach(t),fi=s(Ln," forward method, overrides the "),Zn=r(Ln,"CODE",{});var hc=i(Zn);gi=s(hc,"__call__"),hc.forEach(t),_i=s(Ln," special method."),Ln.forEach(t),Ti=d(le),b(xt.$$.fragment,le),vi=d(le),es=r(le,"P",{});var uc=i(es);ki=s(uc,"Example of single-label classification:"),uc.forEach(t),bi=d(le),b(wo.$$.fragment,le),yi=d(le),b(Lo.$$.fragment,le),Ci=d(le),ts=r(le,"P",{});var mc=i(ts);wi=s(mc,"Example of multi-label classification:"),mc.forEach(t),Li=d(le),b($o.$$.fragment,le),$i=d(le),b(Ro.$$.fragment,le),le.forEach(t),at.forEach(t),Os=d(o),vt=r(o,"H2",{class:!0});var aa=i(vt);jt=r(aa,"A",{id:!0,class:!0,href:!0});var fc=i(jt);os=r(fc,"SPAN",{});var gc=i(os);b(Mo.$$.fragment,gc),gc.forEach(t),fc.forEach(t),Ri=d(aa),ns=r(aa,"SPAN",{});var _c=i(ns);Mi=s(_c,"TFCTRLModel"),_c.forEach(t),aa.forEach(t),Ns=d(o),de=r(o,"DIV",{class:!0});var Ge=i(de);b(Fo.$$.fragment,Ge),Fi=d(Ge),ss=r(Ge,"P",{});var Tc=i(ss);Ei=s(Tc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Tc.forEach(t),qi=d(Ge),Eo=r(Ge,"P",{});var ra=i(Eo);zi=s(ra,"This model inherits from "),un=r(ra,"A",{href:!0});var vc=i(un);Pi=s(vc,"TFPreTrainedModel"),vc.forEach(t),xi=s(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),ji=d(Ge),qo=r(Ge,"P",{});var ia=i(qo);Si=s(ia,"This model is also a "),zo=r(ia,"A",{href:!0,rel:!0});var kc=i(zo);Ii=s(kc,"tf.keras.Model"),kc.forEach(t),Oi=s(ia,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ia.forEach(t),Ni=d(Ge),b(St.$$.fragment,Ge),Di=d(Ge),Se=r(Ge,"DIV",{class:!0});var rt=i(Se);b(Po.$$.fragment,rt),Ai=d(rt),kt=r(rt,"P",{});var $n=i(kt);Hi=s($n,"The "),mn=r($n,"A",{href:!0});var bc=i(mn);Wi=s(bc,"TFCTRLModel"),bc.forEach(t),Bi=s($n," forward method, overrides the "),as=r($n,"CODE",{});var yc=i(as);Ui=s(yc,"__call__"),yc.forEach(t),Vi=s($n," special method."),$n.forEach(t),Gi=d(rt),b(It.$$.fragment,rt),Ki=d(rt),rs=r(rt,"P",{});var Cc=i(rs);Xi=s(Cc,"Example:"),Cc.forEach(t),Ji=d(rt),b(xo.$$.fragment,rt),rt.forEach(t),Ge.forEach(t),Ds=d(o),bt=r(o,"H2",{class:!0});var la=i(bt);Ot=r(la,"A",{id:!0,class:!0,href:!0});var wc=i(Ot);is=r(wc,"SPAN",{});var Lc=i(is);b(jo.$$.fragment,Lc),Lc.forEach(t),wc.forEach(t),Qi=d(la),ls=r(la,"SPAN",{});var $c=i(ls);Yi=s($c,"TFCTRLLMHeadModel"),$c.forEach(t),la.forEach(t),As=d(o),ce=r(o,"DIV",{class:!0});var Ke=i(ce);b(So.$$.fragment,Ke),Zi=d(Ke),ds=r(Ke,"P",{});var Rc=i(ds);el=s(Rc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Rc.forEach(t),tl=d(Ke),Io=r(Ke,"P",{});var da=i(Io);ol=s(da,"This model inherits from "),fn=r(da,"A",{href:!0});var Mc=i(fn);nl=s(Mc,"TFPreTrainedModel"),Mc.forEach(t),sl=s(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(t),al=d(Ke),Oo=r(Ke,"P",{});var ca=i(Oo);rl=s(ca,"This model is also a "),No=r(ca,"A",{href:!0,rel:!0});var Fc=i(No);il=s(Fc,"tf.keras.Model"),Fc.forEach(t),ll=s(ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ca.forEach(t),dl=d(Ke),b(Nt.$$.fragment,Ke),cl=d(Ke),Ie=r(Ke,"DIV",{class:!0});var it=i(Ie);b(Do.$$.fragment,it),pl=d(it),yt=r(it,"P",{});var Rn=i(yt);hl=s(Rn,"The "),gn=r(Rn,"A",{href:!0});var Ec=i(gn);ul=s(Ec,"TFCTRLLMHeadModel"),Ec.forEach(t),ml=s(Rn," forward method, overrides the "),cs=r(Rn,"CODE",{});var qc=i(cs);fl=s(qc,"__call__"),qc.forEach(t),gl=s(Rn," special method."),Rn.forEach(t),_l=d(it),b(Dt.$$.fragment,it),Tl=d(it),ps=r(it,"P",{});var zc=i(ps);vl=s(zc,"Example:"),zc.forEach(t),kl=d(it),b(Ao.$$.fragment,it),it.forEach(t),Ke.forEach(t),Hs=d(o),Ct=r(o,"H2",{class:!0});var pa=i(Ct);At=r(pa,"A",{id:!0,class:!0,href:!0});var Pc=i(At);hs=r(Pc,"SPAN",{});var xc=i(hs);b(Ho.$$.fragment,xc),xc.forEach(t),Pc.forEach(t),bl=d(pa),us=r(pa,"SPAN",{});var jc=i(us);yl=s(jc,"TFCTRLForSequenceClassification"),jc.forEach(t),pa.forEach(t),Ws=d(o),X=r(o,"DIV",{class:!0});var ge=i(X);b(Wo.$$.fragment,ge),Cl=d(ge),ms=r(ge,"P",{});var Sc=i(ms);wl=s(Sc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),Sc.forEach(t),Ll=d(ge),_n=r(ge,"P",{});var ad=i(_n);Tn=r(ad,"A",{href:!0});var Ic=i(Tn);$l=s(Ic,"TFCTRLForSequenceClassification"),Ic.forEach(t),Rl=s(ad,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),ad.forEach(t),Ml=d(ge),Ne=r(ge,"P",{});var lt=i(Ne);Fl=s(lt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),fs=r(lt,"CODE",{});var Oc=i(fs);El=s(Oc,"pad_token_id"),Oc.forEach(t),ql=s(lt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),gs=r(lt,"CODE",{});var Nc=i(gs);zl=s(Nc,"pad_token_id"),Nc.forEach(t),Pl=s(lt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),_s=r(lt,"CODE",{});var Dc=i(_s);xl=s(Dc,"inputs_embeds"),Dc.forEach(t),jl=s(lt," are passed instead of "),Ts=r(lt,"CODE",{});var Ac=i(Ts);Sl=s(Ac,"input_ids"),Ac.forEach(t),Il=s(lt,`, it does the same (take the last value in
each row of the batch).`),lt.forEach(t),Ol=d(ge),Bo=r(ge,"P",{});var ha=i(Bo);Nl=s(ha,"This model inherits from "),vn=r(ha,"A",{href:!0});var Hc=i(vn);Dl=s(Hc,"TFPreTrainedModel"),Hc.forEach(t),Al=s(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(t),Hl=d(ge),Uo=r(ge,"P",{});var ua=i(Uo);Wl=s(ua,"This model is also a "),Vo=r(ua,"A",{href:!0,rel:!0});var Wc=i(Vo);Bl=s(Wc,"tf.keras.Model"),Wc.forEach(t),Ul=s(ua,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ua.forEach(t),Vl=d(ge),b(Ht.$$.fragment,ge),Gl=d(ge),fe=r(ge,"DIV",{class:!0});var Xe=i(fe);b(Go.$$.fragment,Xe),Kl=d(Xe),wt=r(Xe,"P",{});var Mn=i(wt);Xl=s(Mn,"The "),kn=r(Mn,"A",{href:!0});var Bc=i(kn);Jl=s(Bc,"TFCTRLForSequenceClassification"),Bc.forEach(t),Ql=s(Mn," forward method, overrides the "),vs=r(Mn,"CODE",{});var Uc=i(vs);Yl=s(Uc,"__call__"),Uc.forEach(t),Zl=s(Mn," special method."),Mn.forEach(t),ed=d(Xe),b(Wt.$$.fragment,Xe),td=d(Xe),ks=r(Xe,"P",{});var Vc=i(ks);od=s(Vc,"Example:"),Vc.forEach(t),nd=d(Xe),b(Ko.$$.fragment,Xe),sd=d(Xe),b(Xo.$$.fragment,Xe),Xe.forEach(t),ge.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(lp)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(f,"class","relative group"),c(Q,"id","overview"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#overview"),c(R,"class","relative group"),c(ee,"href","https://arxiv.org/abs/1909.05858"),c(ee,"rel","nofollow"),c(oe,"href","https://github.com/salesforce/ctrl"),c(oe,"rel","nofollow"),c(Yo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Rt,"id","transformers.CTRLConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLConfig"),c(ct,"class","relative group"),c(Zo,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLModel"),c(en,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(tn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(on,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Le,"class","docstring"),c(Mt,"id","transformers.CTRLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLTokenizer"),c(ht,"class","relative group"),c(nn,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(sn,"class","docstring"),c(Oe,"class","docstring"),c(Ft,"id","transformers.CTRLModel"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.CTRLModel"),c(ut,"class","relative group"),c(an,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(rn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLModel"),c(xe,"class","docstring"),c($e,"class","docstring"),c(qt,"id","transformers.CTRLLMHeadModel"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(ln,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(dn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(je,"class","docstring"),c(Re,"class","docstring"),c(Pt,"id","transformers.CTRLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.CTRLForSequenceClassification"),c(_t,"class","relative group"),c(cn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(pn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(hn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(B,"class","docstring"),c(Me,"class","docstring"),c(jt,"id","transformers.TFCTRLModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFCTRLModel"),c(vt,"class","relative group"),c(un,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zo,"rel","nofollow"),c(mn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Se,"class","docstring"),c(de,"class","docstring"),c(Ot,"id","transformers.TFCTRLLMHeadModel"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFCTRLLMHeadModel"),c(bt,"class","relative group"),c(fn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(No,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(No,"rel","nofollow"),c(gn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(Ie,"class","docstring"),c(ce,"class","docstring"),c(At,"id","transformers.TFCTRLForSequenceClassification"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFCTRLForSequenceClassification"),c(Ct,"class","relative group"),c(Tn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(vn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vo,"rel","nofollow"),c(kn,"href","/docs/transformers/v4.18.0/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(fe,"class","docstring"),c(X,"class","docstring")},m(o,m){e(document.head,h),u(o,F,m),u(o,f,m),e(f,g),e(g,v),y(T,v,null),e(f,_),e(f,M),e(M,_e),u(o,Y,m),u(o,R,m),e(R,Q),e(Q,D),y(Z,D,null),e(R,Te),e(R,A),e(A,ve),u(o,pe,m),u(o,x,m),e(x,j),e(x,ee),e(ee,ne),e(x,E),e(x,q),e(q,ke),e(x,U),u(o,he,m),u(o,se,m),e(se,V),u(o,ue,m),u(o,ae,m),e(ae,z),e(z,be),u(o,H,m),u(o,re,m),e(re,ye),u(o,W,m),u(o,S,m),e(S,te),e(te,I),e(te,oe),e(oe,G),e(te,Ce),e(S,p),e(S,$),e($,ie),e(S,De),e(S,me),e(me,O),e(me,qe),e(qe,Ae),e(me,He),e(S,N),e(S,P),e(P,We),e(P,ze),e(ze,K),e(P,Be),e(P,Pe),e(Pe,we),e(P,Ue),e(P,Fn),e(Fn,ma),e(P,fa),e(P,Yo),e(Yo,En),e(En,ga),e(P,_a),u(o,Rs,m),u(o,Ye,m),e(Ye,Ta),e(Ye,Gt),e(Gt,va),e(Ye,ka),e(Ye,Kt),e(Kt,ba),e(Ye,ya),u(o,Ms,m),u(o,ct,m),e(ct,Rt),e(Rt,qn),y(Xt,qn,null),e(ct,Ca),e(ct,zn),e(zn,wa),u(o,Fs,m),u(o,Le,m),y(Jt,Le,null),e(Le,La),e(Le,Je),e(Je,$a),e(Je,Zo),e(Zo,Ra),e(Je,Ma),e(Je,en),e(en,Fa),e(Je,Ea),e(Je,Qt),e(Qt,qa),e(Je,za),e(Le,Pa),e(Le,pt),e(pt,xa),e(pt,tn),e(tn,ja),e(pt,Sa),e(pt,on),e(on,Ia),e(pt,Oa),e(Le,Na),e(Le,Pn),e(Pn,Da),e(Le,Aa),y(Yt,Le,null),u(o,Es,m),u(o,ht,m),e(ht,Mt),e(Mt,xn),y(Zt,xn,null),e(ht,Ha),e(ht,jn),e(jn,Wa),u(o,qs,m),u(o,Oe,m),y(eo,Oe,null),e(Oe,Ba),e(Oe,Sn),e(Sn,Ua),e(Oe,Va),e(Oe,to),e(to,Ga),e(to,nn),e(nn,Ka),e(to,Xa),e(Oe,Ja),e(Oe,sn),y(oo,sn,null),u(o,zs,m),u(o,ut,m),e(ut,Ft),e(Ft,In),y(no,In,null),e(ut,Qa),e(ut,On),e(On,Ya),u(o,Ps,m),u(o,$e,m),y(so,$e,null),e($e,Za),e($e,Nn),e(Nn,er),e($e,tr),e($e,ao),e(ao,or),e(ao,an),e(an,nr),e(ao,sr),e($e,ar),e($e,ro),e(ro,rr),e(ro,io),e(io,ir),e(ro,lr),e($e,dr),e($e,xe),y(lo,xe,null),e(xe,cr),e(xe,mt),e(mt,pr),e(mt,rn),e(rn,hr),e(mt,ur),e(mt,Dn),e(Dn,mr),e(mt,fr),e(xe,gr),y(Et,xe,null),e(xe,_r),e(xe,An),e(An,Tr),e(xe,vr),y(co,xe,null),u(o,xs,m),u(o,ft,m),e(ft,qt),e(qt,Hn),y(po,Hn,null),e(ft,kr),e(ft,Wn),e(Wn,br),u(o,js,m),u(o,Re,m),y(ho,Re,null),e(Re,yr),e(Re,Bn),e(Bn,Cr),e(Re,wr),e(Re,uo),e(uo,Lr),e(uo,ln),e(ln,$r),e(uo,Rr),e(Re,Mr),e(Re,mo),e(mo,Fr),e(mo,fo),e(fo,Er),e(mo,qr),e(Re,zr),e(Re,je),y(go,je,null),e(je,Pr),e(je,gt),e(gt,xr),e(gt,dn),e(dn,jr),e(gt,Sr),e(gt,Un),e(Un,Ir),e(gt,Or),e(je,Nr),y(zt,je,null),e(je,Dr),e(je,Vn),e(Vn,Ar),e(je,Hr),y(_o,je,null),u(o,Ss,m),u(o,_t,m),e(_t,Pt),e(Pt,Gn),y(To,Gn,null),e(_t,Wr),e(_t,Kn),e(Kn,Br),u(o,Is,m),u(o,Me,m),y(vo,Me,null),e(Me,Ur),e(Me,Fe),e(Fe,Vr),e(Fe,cn),e(cn,Gr),e(Fe,Kr),e(Fe,Xn),e(Xn,Xr),e(Fe,Jr),e(Fe,Jn),e(Jn,Qr),e(Fe,Yr),e(Fe,Qn),e(Qn,Zr),e(Fe,ei),e(Fe,Yn),e(Yn,ti),e(Fe,oi),e(Me,ni),e(Me,ko),e(ko,si),e(ko,pn),e(pn,ai),e(ko,ri),e(Me,ii),e(Me,bo),e(bo,li),e(bo,yo),e(yo,di),e(bo,ci),e(Me,pi),e(Me,B),y(Co,B,null),e(B,hi),e(B,Tt),e(Tt,ui),e(Tt,hn),e(hn,mi),e(Tt,fi),e(Tt,Zn),e(Zn,gi),e(Tt,_i),e(B,Ti),y(xt,B,null),e(B,vi),e(B,es),e(es,ki),e(B,bi),y(wo,B,null),e(B,yi),y(Lo,B,null),e(B,Ci),e(B,ts),e(ts,wi),e(B,Li),y($o,B,null),e(B,$i),y(Ro,B,null),u(o,Os,m),u(o,vt,m),e(vt,jt),e(jt,os),y(Mo,os,null),e(vt,Ri),e(vt,ns),e(ns,Mi),u(o,Ns,m),u(o,de,m),y(Fo,de,null),e(de,Fi),e(de,ss),e(ss,Ei),e(de,qi),e(de,Eo),e(Eo,zi),e(Eo,un),e(un,Pi),e(Eo,xi),e(de,ji),e(de,qo),e(qo,Si),e(qo,zo),e(zo,Ii),e(qo,Oi),e(de,Ni),y(St,de,null),e(de,Di),e(de,Se),y(Po,Se,null),e(Se,Ai),e(Se,kt),e(kt,Hi),e(kt,mn),e(mn,Wi),e(kt,Bi),e(kt,as),e(as,Ui),e(kt,Vi),e(Se,Gi),y(It,Se,null),e(Se,Ki),e(Se,rs),e(rs,Xi),e(Se,Ji),y(xo,Se,null),u(o,Ds,m),u(o,bt,m),e(bt,Ot),e(Ot,is),y(jo,is,null),e(bt,Qi),e(bt,ls),e(ls,Yi),u(o,As,m),u(o,ce,m),y(So,ce,null),e(ce,Zi),e(ce,ds),e(ds,el),e(ce,tl),e(ce,Io),e(Io,ol),e(Io,fn),e(fn,nl),e(Io,sl),e(ce,al),e(ce,Oo),e(Oo,rl),e(Oo,No),e(No,il),e(Oo,ll),e(ce,dl),y(Nt,ce,null),e(ce,cl),e(ce,Ie),y(Do,Ie,null),e(Ie,pl),e(Ie,yt),e(yt,hl),e(yt,gn),e(gn,ul),e(yt,ml),e(yt,cs),e(cs,fl),e(yt,gl),e(Ie,_l),y(Dt,Ie,null),e(Ie,Tl),e(Ie,ps),e(ps,vl),e(Ie,kl),y(Ao,Ie,null),u(o,Hs,m),u(o,Ct,m),e(Ct,At),e(At,hs),y(Ho,hs,null),e(Ct,bl),e(Ct,us),e(us,yl),u(o,Ws,m),u(o,X,m),y(Wo,X,null),e(X,Cl),e(X,ms),e(ms,wl),e(X,Ll),e(X,_n),e(_n,Tn),e(Tn,$l),e(_n,Rl),e(X,Ml),e(X,Ne),e(Ne,Fl),e(Ne,fs),e(fs,El),e(Ne,ql),e(Ne,gs),e(gs,zl),e(Ne,Pl),e(Ne,_s),e(_s,xl),e(Ne,jl),e(Ne,Ts),e(Ts,Sl),e(Ne,Il),e(X,Ol),e(X,Bo),e(Bo,Nl),e(Bo,vn),e(vn,Dl),e(Bo,Al),e(X,Hl),e(X,Uo),e(Uo,Wl),e(Uo,Vo),e(Vo,Bl),e(Uo,Ul),e(X,Vl),y(Ht,X,null),e(X,Gl),e(X,fe),y(Go,fe,null),e(fe,Kl),e(fe,wt),e(wt,Xl),e(wt,kn),e(kn,Jl),e(wt,Ql),e(wt,vs),e(vs,Yl),e(wt,Zl),e(fe,ed),y(Wt,fe,null),e(fe,td),e(fe,ks),e(ks,od),e(fe,nd),y(Ko,fe,null),e(fe,sd),y(Xo,fe,null),Bs=!0},p(o,[m]){const Jo={};m&2&&(Jo.$$scope={dirty:m,ctx:o}),Et.$set(Jo);const bs={};m&2&&(bs.$$scope={dirty:m,ctx:o}),zt.$set(bs);const ys={};m&2&&(ys.$$scope={dirty:m,ctx:o}),xt.$set(ys);const Cs={};m&2&&(Cs.$$scope={dirty:m,ctx:o}),St.$set(Cs);const Qo={};m&2&&(Qo.$$scope={dirty:m,ctx:o}),It.$set(Qo);const ws={};m&2&&(ws.$$scope={dirty:m,ctx:o}),Nt.$set(ws);const Ls={};m&2&&(Ls.$$scope={dirty:m,ctx:o}),Dt.$set(Ls);const $s={};m&2&&($s.$$scope={dirty:m,ctx:o}),Ht.$set($s);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:o}),Wt.$set(Lt)},i(o){Bs||(C(T.$$.fragment,o),C(Z.$$.fragment,o),C(Xt.$$.fragment,o),C(Jt.$$.fragment,o),C(Yt.$$.fragment,o),C(Zt.$$.fragment,o),C(eo.$$.fragment,o),C(oo.$$.fragment,o),C(no.$$.fragment,o),C(so.$$.fragment,o),C(lo.$$.fragment,o),C(Et.$$.fragment,o),C(co.$$.fragment,o),C(po.$$.fragment,o),C(ho.$$.fragment,o),C(go.$$.fragment,o),C(zt.$$.fragment,o),C(_o.$$.fragment,o),C(To.$$.fragment,o),C(vo.$$.fragment,o),C(Co.$$.fragment,o),C(xt.$$.fragment,o),C(wo.$$.fragment,o),C(Lo.$$.fragment,o),C($o.$$.fragment,o),C(Ro.$$.fragment,o),C(Mo.$$.fragment,o),C(Fo.$$.fragment,o),C(St.$$.fragment,o),C(Po.$$.fragment,o),C(It.$$.fragment,o),C(xo.$$.fragment,o),C(jo.$$.fragment,o),C(So.$$.fragment,o),C(Nt.$$.fragment,o),C(Do.$$.fragment,o),C(Dt.$$.fragment,o),C(Ao.$$.fragment,o),C(Ho.$$.fragment,o),C(Wo.$$.fragment,o),C(Ht.$$.fragment,o),C(Go.$$.fragment,o),C(Wt.$$.fragment,o),C(Ko.$$.fragment,o),C(Xo.$$.fragment,o),Bs=!0)},o(o){w(T.$$.fragment,o),w(Z.$$.fragment,o),w(Xt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(lo.$$.fragment,o),w(Et.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(go.$$.fragment,o),w(zt.$$.fragment,o),w(_o.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(Co.$$.fragment,o),w(xt.$$.fragment,o),w(wo.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Ro.$$.fragment,o),w(Mo.$$.fragment,o),w(Fo.$$.fragment,o),w(St.$$.fragment,o),w(Po.$$.fragment,o),w(It.$$.fragment,o),w(xo.$$.fragment,o),w(jo.$$.fragment,o),w(So.$$.fragment,o),w(Nt.$$.fragment,o),w(Do.$$.fragment,o),w(Dt.$$.fragment,o),w(Ao.$$.fragment,o),w(Ho.$$.fragment,o),w(Wo.$$.fragment,o),w(Ht.$$.fragment,o),w(Go.$$.fragment,o),w(Wt.$$.fragment,o),w(Ko.$$.fragment,o),w(Xo.$$.fragment,o),Bs=!1},d(o){t(h),o&&t(F),o&&t(f),L(T),o&&t(Y),o&&t(R),L(Z),o&&t(pe),o&&t(x),o&&t(he),o&&t(se),o&&t(ue),o&&t(ae),o&&t(H),o&&t(re),o&&t(W),o&&t(S),o&&t(Rs),o&&t(Ye),o&&t(Ms),o&&t(ct),L(Xt),o&&t(Fs),o&&t(Le),L(Jt),L(Yt),o&&t(Es),o&&t(ht),L(Zt),o&&t(qs),o&&t(Oe),L(eo),L(oo),o&&t(zs),o&&t(ut),L(no),o&&t(Ps),o&&t($e),L(so),L(lo),L(Et),L(co),o&&t(xs),o&&t(ft),L(po),o&&t(js),o&&t(Re),L(ho),L(go),L(zt),L(_o),o&&t(Ss),o&&t(_t),L(To),o&&t(Is),o&&t(Me),L(vo),L(Co),L(xt),L(wo),L(Lo),L($o),L(Ro),o&&t(Os),o&&t(vt),L(Mo),o&&t(Ns),o&&t(de),L(Fo),L(St),L(Po),L(It),L(xo),o&&t(Ds),o&&t(bt),L(jo),o&&t(As),o&&t(ce),L(So),L(Nt),L(Do),L(Dt),L(Ao),o&&t(Hs),o&&t(Ct),L(Ho),o&&t(Ws),o&&t(X),L(Wo),L(Ht),L(Go),L(Wt),L(Ko),L(Xo)}}}const lp={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function dp(J){return Qc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fp extends Gc{constructor(h){super();Kc(this,h,dp,ip,Xc,{})}}export{fp as default,lp as metadata};
