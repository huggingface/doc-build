import{S as Dc,i as Ac,s as Oc,e as a,k as l,w,t as n,L as Hc,c as r,d as t,m as d,a as i,x as L,h as s,b as c,J as e,g as u,y as $,q as R,o as M,B as E}from"../../../chunks/vendor-9e2b328e.js";import{T as Lt}from"../../../chunks/Tip-76f97a76.js";import{D as Ie}from"../../../chunks/Docstring-50fd6873.js";import{C as Vt}from"../../../chunks/CodeBlock-b9ff96e9.js";import{I as lt}from"../../../chunks/IconCopyLink-fd0e58fd.js";import"../../../chunks/CopyButton-4b97cbf7.js";function Wc(B){let p,k,m,g,v;return{c(){p=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);k=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,k),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Bc(B){let p,k,m,g,v;return{c(){p=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);k=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,k),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Uc(B){let p,k,m,g,v;return{c(){p=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);k=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,k),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Vc(B){let p,k,m,g,v,T,_,y,me,Q,C,X,A,Y,ge,O,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,H,ae,be,W,j,ee,I,te,G,ke;return{c(){p=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),y=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),C=a("p"),X=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var b=i(p);k=s(b,"TF 2.0 models accepts two formats as inputs:"),b.forEach(t),m=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),y=r(re,"LI",{});var ue=i(y);me=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),C=r(h,"P",{});var N=i(C);X=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);_e=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var He=i(S);Z=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Ee=i(V);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var Ce=i(I);te=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Ue=i(G);ke=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(h,b){u(h,p,b),e(p,k),u(h,m,b),u(h,g,b),e(g,v),e(v,T),e(g,_),e(g,y),e(y,me),u(h,Q,b),u(h,C,b),e(C,X),e(C,A),e(A,Y),e(C,ge),e(C,O),e(O,_e),e(C,ce),u(h,x,b),u(h,S,b),e(S,Z),u(h,oe,b),u(h,F,b),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,H),e(H,ae),e(z,be),e(z,W),e(W,j),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,ke)},d(h){h&&t(p),h&&t(m),h&&t(g),h&&t(Q),h&&t(C),h&&t(x),h&&t(S),h&&t(oe),h&&t(F)}}}function Gc(B){let p,k,m,g,v;return{c(){p=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);k=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,k),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Kc(B){let p,k,m,g,v,T,_,y,me,Q,C,X,A,Y,ge,O,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,H,ae,be,W,j,ee,I,te,G,ke;return{c(){p=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),y=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),C=a("p"),X=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var b=i(p);k=s(b,"TF 2.0 models accepts two formats as inputs:"),b.forEach(t),m=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),y=r(re,"LI",{});var ue=i(y);me=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),C=r(h,"P",{});var N=i(C);X=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);_e=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var He=i(S);Z=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Ee=i(V);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var Ce=i(I);te=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Ue=i(G);ke=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(h,b){u(h,p,b),e(p,k),u(h,m,b),u(h,g,b),e(g,v),e(v,T),e(g,_),e(g,y),e(y,me),u(h,Q,b),u(h,C,b),e(C,X),e(C,A),e(A,Y),e(C,ge),e(C,O),e(O,_e),e(C,ce),u(h,x,b),u(h,S,b),e(S,Z),u(h,oe,b),u(h,F,b),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,H),e(H,ae),e(z,be),e(z,W),e(W,j),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,ke)},d(h){h&&t(p),h&&t(m),h&&t(g),h&&t(Q),h&&t(C),h&&t(x),h&&t(S),h&&t(oe),h&&t(F)}}}function Jc(B){let p,k,m,g,v;return{c(){p=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);k=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,k),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Xc(B){let p,k,m,g,v,T,_,y,me,Q,C,X,A,Y,ge,O,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,H,ae,be,W,j,ee,I,te,G,ke;return{c(){p=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),y=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),C=a("p"),X=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var b=i(p);k=s(b,"TF 2.0 models accepts two formats as inputs:"),b.forEach(t),m=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),y=r(re,"LI",{});var ue=i(y);me=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),C=r(h,"P",{});var N=i(C);X=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);_e=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var He=i(S);Z=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Ee=i(V);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var Ce=i(I);te=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Ue=i(G);ke=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(h,b){u(h,p,b),e(p,k),u(h,m,b),u(h,g,b),e(g,v),e(v,T),e(g,_),e(g,y),e(y,me),u(h,Q,b),u(h,C,b),e(C,X),e(C,A),e(A,Y),e(C,ge),e(C,O),e(O,_e),e(C,ce),u(h,x,b),u(h,S,b),e(S,Z),u(h,oe,b),u(h,F,b),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,H),e(H,ae),e(z,be),e(z,W),e(W,j),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,ke)},d(h){h&&t(p),h&&t(m),h&&t(g),h&&t(Q),h&&t(C),h&&t(x),h&&t(S),h&&t(oe),h&&t(F)}}}function Qc(B){let p,k,m,g,v;return{c(){p=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);k=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,k),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Yc(B){let p,k,m,g,v,T,_,y,me,Q,C,X,A,Y,ge,O,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,H,ae,be,W,j,ee,I,te,G,ke,h,b,re,Ae,ue,N,Me,Oe,He,D,P,We,Ee,K,Be,Fe,Ce,Ue,wn,ca,ha,Ko,Ln,pa,ua,ys,Xe,fa,Gt,ma,ga,Kt,_a,Ta,ws,dt,$t,$n,Jt,va,Rn,ba,Ls,ye,Xt,ka,Je,Ca,Jo,ya,wa,Xo,La,$a,Qt,Ra,Ma,Ea,ct,Fa,Qo,qa,za,Yo,Pa,xa,Sa,Mn,ja,Ia,Yt,$s,ht,Rt,En,Zt,Na,Fn,Da,Rs,Ne,eo,Aa,qn,Oa,Ha,to,Wa,Zo,Ba,Ua,Va,zn,Ms,pt,Mt,Pn,oo,Ga,xn,Ka,Es,we,no,Ja,Sn,Xa,Qa,so,Ya,en,Za,er,tr,ao,or,ro,nr,sr,ar,qe,io,rr,ut,ir,tn,lr,dr,jn,cr,hr,pr,Et,ur,In,fr,mr,lo,Fs,ft,Ft,Nn,co,gr,Dn,_r,qs,Le,ho,Tr,An,vr,br,po,kr,on,Cr,yr,wr,uo,Lr,fo,$r,Rr,Mr,ze,mo,Er,mt,Fr,nn,qr,zr,On,Pr,xr,Sr,qt,jr,Hn,Ir,Nr,go,zs,gt,zt,Wn,_o,Dr,Bn,Ar,Ps,$e,To,Or,Re,Hr,sn,Wr,Br,Un,Ur,Vr,Vn,Gr,Kr,Gn,Jr,Xr,Kn,Qr,Yr,Zr,vo,ei,an,ti,oi,ni,bo,si,ko,ai,ri,ii,ie,Co,li,_t,di,rn,ci,hi,Jn,pi,ui,fi,Pt,mi,Xn,gi,_i,yo,Ti,Qn,vi,bi,wo,xs,Tt,xt,Yn,Lo,ki,Zn,Ci,Ss,le,$o,yi,es,wi,Li,Ro,$i,ln,Ri,Mi,Ei,Mo,Fi,Eo,qi,zi,Pi,St,xi,Pe,Fo,Si,vt,ji,dn,Ii,Ni,ts,Di,Ai,Oi,jt,Hi,os,Wi,Bi,qo,js,bt,It,ns,zo,Ui,ss,Vi,Is,de,Po,Gi,as,Ki,Ji,xo,Xi,cn,Qi,Yi,Zi,So,el,jo,tl,ol,nl,Nt,sl,xe,Io,al,kt,rl,hn,il,ll,rs,dl,cl,hl,Dt,pl,is,ul,fl,No,Ns,Ct,At,ls,Do,ml,ds,gl,Ds,J,Ao,_l,cs,Tl,vl,pn,un,bl,kl,Cl,De,yl,hs,wl,Ll,ps,$l,Rl,us,Ml,El,fs,Fl,ql,zl,Oo,Pl,fn,xl,Sl,jl,Ho,Il,Wo,Nl,Dl,Al,Ot,Ol,Se,Bo,Hl,yt,Wl,mn,Bl,Ul,ms,Vl,Gl,Kl,Ht,Jl,gs,Xl,Ql,Uo,As;return T=new lt({}),Y=new lt({}),Jt=new lt({}),Xt=new Ie({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Yt=new Vt({props:{code:`from transformers import CTRLModel, CTRLConfig

# Initializing a CTRL configuration
configuration = CTRLConfig()

# Initializing a model from the configuration
model = CTRLModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLModel, CTRLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CTRL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CTRLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new lt({}),eo=new Ie({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new lt({}),no=new Ie({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_ctrl.py#L321",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),io=new Ie({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_ctrl.py#L354",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new Lt({props:{$$slots:{default:[Wc]},$$scope:{ctx:B}}}),lo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLModel
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),co=new lt({}),ho=new Ie({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_ctrl.py#L494",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mo=new Ie({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_ctrl.py#L516",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qt=new Lt({props:{$$slots:{default:[Bc]},$$scope:{ctx:B}}}),go=new Vt({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLLMHeadModel

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_o=new lt({}),To=new Ie({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_ctrl.py#L610",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ie({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_ctrl.py#L620",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new Lt({props:{$$slots:{default:[Uc]},$$scope:{ctx:B}}}),yo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLForSequenceClassification
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLForSequenceClassification
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lo=new lt({}),$o=new Ie({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_tf_ctrl.py#L537",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new Lt({props:{$$slots:{default:[Vc]},$$scope:{ctx:B}}}),Fo=new Ie({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_tf_ctrl.py#L542",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jt=new Lt({props:{$$slots:{default:[Gc]},$$scope:{ctx:B}}}),qo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),zo=new lt({}),Po=new Ie({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_tf_ctrl.py#L648",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nt=new Lt({props:{$$slots:{default:[Kc]},$$scope:{ctx:B}}}),Io=new Ie({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_tf_ctrl.py#L669",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new Lt({props:{$$slots:{default:[Jc]},$$scope:{ctx:B}}}),No=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Do=new lt({}),Ao=new Ie({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_tf_ctrl.py#L777",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ot=new Lt({props:{$$slots:{default:[Xc]},$$scope:{ctx:B}}}),Bo=new Ie({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/ctrl/modeling_tf_ctrl.py#L792",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ht=new Lt({props:{$$slots:{default:[Qc]},$$scope:{ctx:B}}}),Uo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),k=l(),m=a("h1"),g=a("a"),v=a("span"),w(T.$$.fragment),_=l(),y=a("span"),me=n("CTRL"),Q=l(),C=a("h2"),X=a("a"),A=a("span"),w(Y.$$.fragment),ge=l(),O=a("span"),_e=n("Overview"),ce=l(),x=a("p"),S=n("CTRL model was proposed in "),Z=a("a"),oe=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),Te=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),he=l(),ne=a("p"),V=n("The abstract from the paper is the following:"),pe=l(),se=a("p"),z=a("em"),ve=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),ae=a("p"),be=n("Tips:"),W=l(),j=a("ul"),ee=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=a("a"),G=n("original implementation"),ke=n(` for
more information.`),h=l(),b=a("li"),re=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Me=a("em"),Oe=n("run_generation.py"),He=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),Ee=a("code"),K=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Fe=a("code"),Ce=n("past"),Ue=n(" as input. Using the "),wn=a("code"),ca=n("past_key_values"),ha=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Ko=a("a"),Ln=a("code"),pa=n("forward"),ua=n(`
method for more information on the usage of this argument.`),ys=l(),Xe=a("p"),fa=n("This model was contributed by "),Gt=a("a"),ma=n("keskarnitishr"),ga=n(`. The original code can be found
`),Kt=a("a"),_a=n("here"),Ta=n("."),ws=l(),dt=a("h2"),$t=a("a"),$n=a("span"),w(Jt.$$.fragment),va=l(),Rn=a("span"),ba=n("CTRLConfig"),Ls=l(),ye=a("div"),w(Xt.$$.fragment),ka=l(),Je=a("p"),Ca=n("This is the configuration class to store the configuration of a "),Jo=a("a"),ya=n("CTRLModel"),wa=n(" or a "),Xo=a("a"),La=n("TFCTRLModel"),$a=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),Ra=n("ctrl"),Ma=n(" architecture from SalesForce."),Ea=l(),ct=a("p"),Fa=n("Configuration objects inherit from "),Qo=a("a"),qa=n("PretrainedConfig"),za=n(` and can be used to control the model outputs. Read the
documentation from `),Yo=a("a"),Pa=n("PretrainedConfig"),xa=n(" for more information."),Sa=l(),Mn=a("p"),ja=n("Examples:"),Ia=l(),w(Yt.$$.fragment),$s=l(),ht=a("h2"),Rt=a("a"),En=a("span"),w(Zt.$$.fragment),Na=l(),Fn=a("span"),Da=n("CTRLTokenizer"),Rs=l(),Ne=a("div"),w(eo.$$.fragment),Aa=l(),qn=a("p"),Oa=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Ha=l(),to=a("p"),Wa=n("This tokenizer inherits from "),Zo=a("a"),Ba=n("PreTrainedTokenizer"),Ua=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Va=l(),zn=a("div"),Ms=l(),pt=a("h2"),Mt=a("a"),Pn=a("span"),w(oo.$$.fragment),Ga=l(),xn=a("span"),Ka=n("CTRLModel"),Es=l(),we=a("div"),w(no.$$.fragment),Ja=l(),Sn=a("p"),Xa=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Qa=l(),so=a("p"),Ya=n("This model inherits from "),en=a("a"),Za=n("PreTrainedModel"),er=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tr=l(),ao=a("p"),or=n("This model is also a PyTorch "),ro=a("a"),nr=n("torch.nn.Module"),sr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ar=l(),qe=a("div"),w(io.$$.fragment),rr=l(),ut=a("p"),ir=n("The "),tn=a("a"),lr=n("CTRLModel"),dr=n(" forward method, overrides the "),jn=a("code"),cr=n("__call__"),hr=n(" special method."),pr=l(),w(Et.$$.fragment),ur=l(),In=a("p"),fr=n("Example:"),mr=l(),w(lo.$$.fragment),Fs=l(),ft=a("h2"),Ft=a("a"),Nn=a("span"),w(co.$$.fragment),gr=l(),Dn=a("span"),_r=n("CTRLLMHeadModel"),qs=l(),Le=a("div"),w(ho.$$.fragment),Tr=l(),An=a("p"),vr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),br=l(),po=a("p"),kr=n("This model inherits from "),on=a("a"),Cr=n("PreTrainedModel"),yr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=l(),uo=a("p"),Lr=n("This model is also a PyTorch "),fo=a("a"),$r=n("torch.nn.Module"),Rr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mr=l(),ze=a("div"),w(mo.$$.fragment),Er=l(),mt=a("p"),Fr=n("The "),nn=a("a"),qr=n("CTRLLMHeadModel"),zr=n(" forward method, overrides the "),On=a("code"),Pr=n("__call__"),xr=n(" special method."),Sr=l(),w(qt.$$.fragment),jr=l(),Hn=a("p"),Ir=n("Example:"),Nr=l(),w(go.$$.fragment),zs=l(),gt=a("h2"),zt=a("a"),Wn=a("span"),w(_o.$$.fragment),Dr=l(),Bn=a("span"),Ar=n("CTRLForSequenceClassification"),Ps=l(),$e=a("div"),w(To.$$.fragment),Or=l(),Re=a("p"),Hr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),sn=a("a"),Wr=n("CTRLForSequenceClassification"),Br=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Un=a("code"),Ur=n("pad_token_id"),Vr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Vn=a("code"),Gr=n("pad_token_id"),Kr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Gn=a("code"),Jr=n("inputs_embeds"),Xr=n(" are passed instead of "),Kn=a("code"),Qr=n("input_ids"),Yr=n(`, it does the same (take the last
value in each row of the batch).`),Zr=l(),vo=a("p"),ei=n("This model inherits from "),an=a("a"),ti=n("PreTrainedModel"),oi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=l(),bo=a("p"),si=n("This model is also a PyTorch "),ko=a("a"),ai=n("torch.nn.Module"),ri=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ii=l(),ie=a("div"),w(Co.$$.fragment),li=l(),_t=a("p"),di=n("The "),rn=a("a"),ci=n("CTRLForSequenceClassification"),hi=n(" forward method, overrides the "),Jn=a("code"),pi=n("__call__"),ui=n(" special method."),fi=l(),w(Pt.$$.fragment),mi=l(),Xn=a("p"),gi=n("Example of single-label classification:"),_i=l(),w(yo.$$.fragment),Ti=l(),Qn=a("p"),vi=n("Example of multi-label classification:"),bi=l(),w(wo.$$.fragment),xs=l(),Tt=a("h2"),xt=a("a"),Yn=a("span"),w(Lo.$$.fragment),ki=l(),Zn=a("span"),Ci=n("TFCTRLModel"),Ss=l(),le=a("div"),w($o.$$.fragment),yi=l(),es=a("p"),wi=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Li=l(),Ro=a("p"),$i=n("This model inherits from "),ln=a("a"),Ri=n("TFPreTrainedModel"),Mi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ei=l(),Mo=a("p"),Fi=n("This model is also a "),Eo=a("a"),qi=n("tf.keras.Model"),zi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pi=l(),w(St.$$.fragment),xi=l(),Pe=a("div"),w(Fo.$$.fragment),Si=l(),vt=a("p"),ji=n("The "),dn=a("a"),Ii=n("TFCTRLModel"),Ni=n(" forward method, overrides the "),ts=a("code"),Di=n("__call__"),Ai=n(" special method."),Oi=l(),w(jt.$$.fragment),Hi=l(),os=a("p"),Wi=n("Example:"),Bi=l(),w(qo.$$.fragment),js=l(),bt=a("h2"),It=a("a"),ns=a("span"),w(zo.$$.fragment),Ui=l(),ss=a("span"),Vi=n("TFCTRLLMHeadModel"),Is=l(),de=a("div"),w(Po.$$.fragment),Gi=l(),as=a("p"),Ki=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ji=l(),xo=a("p"),Xi=n("This model inherits from "),cn=a("a"),Qi=n("TFPreTrainedModel"),Yi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zi=l(),So=a("p"),el=n("This model is also a "),jo=a("a"),tl=n("tf.keras.Model"),ol=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nl=l(),w(Nt.$$.fragment),sl=l(),xe=a("div"),w(Io.$$.fragment),al=l(),kt=a("p"),rl=n("The "),hn=a("a"),il=n("TFCTRLLMHeadModel"),ll=n(" forward method, overrides the "),rs=a("code"),dl=n("__call__"),cl=n(" special method."),hl=l(),w(Dt.$$.fragment),pl=l(),is=a("p"),ul=n("Example:"),fl=l(),w(No.$$.fragment),Ns=l(),Ct=a("h2"),At=a("a"),ls=a("span"),w(Do.$$.fragment),ml=l(),ds=a("span"),gl=n("TFCTRLForSequenceClassification"),Ds=l(),J=a("div"),w(Ao.$$.fragment),_l=l(),cs=a("p"),Tl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),vl=l(),pn=a("p"),un=a("a"),bl=n("TFCTRLForSequenceClassification"),kl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Cl=l(),De=a("p"),yl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),hs=a("code"),wl=n("pad_token_id"),Ll=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ps=a("code"),$l=n("pad_token_id"),Rl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),us=a("code"),Ml=n("inputs_embeds"),El=n(" are passed instead of "),fs=a("code"),Fl=n("input_ids"),ql=n(`, it does the same (take the last value in
each row of the batch).`),zl=l(),Oo=a("p"),Pl=n("This model inherits from "),fn=a("a"),xl=n("TFPreTrainedModel"),Sl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl=l(),Ho=a("p"),Il=n("This model is also a "),Wo=a("a"),Nl=n("tf.keras.Model"),Dl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al=l(),w(Ot.$$.fragment),Ol=l(),Se=a("div"),w(Bo.$$.fragment),Hl=l(),yt=a("p"),Wl=n("The "),mn=a("a"),Bl=n("TFCTRLForSequenceClassification"),Ul=n(" forward method, overrides the "),ms=a("code"),Vl=n("__call__"),Gl=n(" special method."),Kl=l(),w(Ht.$$.fragment),Jl=l(),gs=a("p"),Xl=n("Example:"),Ql=l(),w(Uo.$$.fragment),this.h()},l(o){const f=Hc('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),k=d(o),m=r(o,"H1",{class:!0});var Vo=i(m);g=r(Vo,"A",{id:!0,class:!0,href:!0});var _s=i(g);v=r(_s,"SPAN",{});var Ts=i(v);L(T.$$.fragment,Ts),Ts.forEach(t),_s.forEach(t),_=d(Vo),y=r(Vo,"SPAN",{});var vs=i(y);me=s(vs,"CTRL"),vs.forEach(t),Vo.forEach(t),Q=d(o),C=r(o,"H2",{class:!0});var Go=i(C);X=r(Go,"A",{id:!0,class:!0,href:!0});var bs=i(X);A=r(bs,"SPAN",{});var ks=i(A);L(Y.$$.fragment,ks),ks.forEach(t),bs.forEach(t),ge=d(Go),O=r(Go,"SPAN",{});var Cs=i(O);_e=s(Cs,"Overview"),Cs.forEach(t),Go.forEach(t),ce=d(o),x=r(o,"P",{});var wt=i(x);S=s(wt,"CTRL model was proposed in "),Z=r(wt,"A",{href:!0,rel:!0});var Zl=i(Z);oe=s(Zl,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),Zl.forEach(t),F=s(wt," by Nitish Shirish Keskar"),q=r(wt,"EM",{});var ed=i(q);Te=s(ed,", Bryan McCann"),ed.forEach(t),U=s(wt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),wt.forEach(t),he=d(o),ne=r(o,"P",{});var td=i(ne);V=s(td,"The abstract from the paper is the following:"),td.forEach(t),pe=d(o),se=r(o,"P",{});var od=i(se);z=r(od,"EM",{});var nd=i(z);ve=s(nd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),nd.forEach(t),od.forEach(t),H=d(o),ae=r(o,"P",{});var sd=i(ae);be=s(sd,"Tips:"),sd.forEach(t),W=d(o),j=r(o,"UL",{});var Wt=i(j);ee=r(Wt,"LI",{});var Os=i(ee);I=s(Os,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=r(Os,"A",{href:!0,rel:!0});var ad=i(te);G=s(ad,"original implementation"),ad.forEach(t),ke=s(Os,` for
more information.`),Os.forEach(t),h=d(Wt),b=r(Wt,"LI",{});var rd=i(b);re=s(rd,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),rd.forEach(t),Ae=d(Wt),ue=r(Wt,"LI",{});var Hs=i(ue);N=s(Hs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Me=r(Hs,"EM",{});var id=i(Me);Oe=s(id,"run_generation.py"),id.forEach(t),He=s(Hs," example script."),Hs.forEach(t),D=d(Wt),P=r(Wt,"LI",{});var Qe=i(P);We=s(Qe,"The PyTorch models can take the "),Ee=r(Qe,"CODE",{});var ld=i(Ee);K=s(ld,"past_key_values"),ld.forEach(t),Be=s(Qe,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Fe=r(Qe,"CODE",{});var dd=i(Fe);Ce=s(dd,"past"),dd.forEach(t),Ue=s(Qe," as input. Using the "),wn=r(Qe,"CODE",{});var cd=i(wn);ca=s(cd,"past_key_values"),cd.forEach(t),ha=s(Qe,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Ko=r(Qe,"A",{href:!0});var hd=i(Ko);Ln=r(hd,"CODE",{});var pd=i(Ln);pa=s(pd,"forward"),pd.forEach(t),hd.forEach(t),ua=s(Qe,`
method for more information on the usage of this argument.`),Qe.forEach(t),Wt.forEach(t),ys=d(o),Xe=r(o,"P",{});var gn=i(Xe);fa=s(gn,"This model was contributed by "),Gt=r(gn,"A",{href:!0,rel:!0});var ud=i(Gt);ma=s(ud,"keskarnitishr"),ud.forEach(t),ga=s(gn,`. The original code can be found
`),Kt=r(gn,"A",{href:!0,rel:!0});var fd=i(Kt);_a=s(fd,"here"),fd.forEach(t),Ta=s(gn,"."),gn.forEach(t),ws=d(o),dt=r(o,"H2",{class:!0});var Ws=i(dt);$t=r(Ws,"A",{id:!0,class:!0,href:!0});var md=i($t);$n=r(md,"SPAN",{});var gd=i($n);L(Jt.$$.fragment,gd),gd.forEach(t),md.forEach(t),va=d(Ws),Rn=r(Ws,"SPAN",{});var _d=i(Rn);ba=s(_d,"CTRLConfig"),_d.forEach(t),Ws.forEach(t),Ls=d(o),ye=r(o,"DIV",{class:!0});var Ye=i(ye);L(Xt.$$.fragment,Ye),ka=d(Ye),Je=r(Ye,"P",{});var Bt=i(Je);Ca=s(Bt,"This is the configuration class to store the configuration of a "),Jo=r(Bt,"A",{href:!0});var Td=i(Jo);ya=s(Td,"CTRLModel"),Td.forEach(t),wa=s(Bt," or a "),Xo=r(Bt,"A",{href:!0});var vd=i(Xo);La=s(vd,"TFCTRLModel"),vd.forEach(t),$a=s(Bt,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Bt,"A",{href:!0,rel:!0});var bd=i(Qt);Ra=s(bd,"ctrl"),bd.forEach(t),Ma=s(Bt," architecture from SalesForce."),Bt.forEach(t),Ea=d(Ye),ct=r(Ye,"P",{});var _n=i(ct);Fa=s(_n,"Configuration objects inherit from "),Qo=r(_n,"A",{href:!0});var kd=i(Qo);qa=s(kd,"PretrainedConfig"),kd.forEach(t),za=s(_n,` and can be used to control the model outputs. Read the
documentation from `),Yo=r(_n,"A",{href:!0});var Cd=i(Yo);Pa=s(Cd,"PretrainedConfig"),Cd.forEach(t),xa=s(_n," for more information."),_n.forEach(t),Sa=d(Ye),Mn=r(Ye,"P",{});var yd=i(Mn);ja=s(yd,"Examples:"),yd.forEach(t),Ia=d(Ye),L(Yt.$$.fragment,Ye),Ye.forEach(t),$s=d(o),ht=r(o,"H2",{class:!0});var Bs=i(ht);Rt=r(Bs,"A",{id:!0,class:!0,href:!0});var wd=i(Rt);En=r(wd,"SPAN",{});var Ld=i(En);L(Zt.$$.fragment,Ld),Ld.forEach(t),wd.forEach(t),Na=d(Bs),Fn=r(Bs,"SPAN",{});var $d=i(Fn);Da=s($d,"CTRLTokenizer"),$d.forEach(t),Bs.forEach(t),Rs=d(o),Ne=r(o,"DIV",{class:!0});var Ut=i(Ne);L(eo.$$.fragment,Ut),Aa=d(Ut),qn=r(Ut,"P",{});var Rd=i(qn);Oa=s(Rd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Rd.forEach(t),Ha=d(Ut),to=r(Ut,"P",{});var Us=i(to);Wa=s(Us,"This tokenizer inherits from "),Zo=r(Us,"A",{href:!0});var Md=i(Zo);Ba=s(Md,"PreTrainedTokenizer"),Md.forEach(t),Ua=s(Us,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Us.forEach(t),Va=d(Ut),zn=r(Ut,"DIV",{class:!0}),i(zn).forEach(t),Ut.forEach(t),Ms=d(o),pt=r(o,"H2",{class:!0});var Vs=i(pt);Mt=r(Vs,"A",{id:!0,class:!0,href:!0});var Ed=i(Mt);Pn=r(Ed,"SPAN",{});var Fd=i(Pn);L(oo.$$.fragment,Fd),Fd.forEach(t),Ed.forEach(t),Ga=d(Vs),xn=r(Vs,"SPAN",{});var qd=i(xn);Ka=s(qd,"CTRLModel"),qd.forEach(t),Vs.forEach(t),Es=d(o),we=r(o,"DIV",{class:!0});var Ze=i(we);L(no.$$.fragment,Ze),Ja=d(Ze),Sn=r(Ze,"P",{});var zd=i(Sn);Xa=s(zd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),zd.forEach(t),Qa=d(Ze),so=r(Ze,"P",{});var Gs=i(so);Ya=s(Gs,"This model inherits from "),en=r(Gs,"A",{href:!0});var Pd=i(en);Za=s(Pd,"PreTrainedModel"),Pd.forEach(t),er=s(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gs.forEach(t),tr=d(Ze),ao=r(Ze,"P",{});var Ks=i(ao);or=s(Ks,"This model is also a PyTorch "),ro=r(Ks,"A",{href:!0,rel:!0});var xd=i(ro);nr=s(xd,"torch.nn.Module"),xd.forEach(t),sr=s(Ks,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ks.forEach(t),ar=d(Ze),qe=r(Ze,"DIV",{class:!0});var et=i(qe);L(io.$$.fragment,et),rr=d(et),ut=r(et,"P",{});var Tn=i(ut);ir=s(Tn,"The "),tn=r(Tn,"A",{href:!0});var Sd=i(tn);lr=s(Sd,"CTRLModel"),Sd.forEach(t),dr=s(Tn," forward method, overrides the "),jn=r(Tn,"CODE",{});var jd=i(jn);cr=s(jd,"__call__"),jd.forEach(t),hr=s(Tn," special method."),Tn.forEach(t),pr=d(et),L(Et.$$.fragment,et),ur=d(et),In=r(et,"P",{});var Id=i(In);fr=s(Id,"Example:"),Id.forEach(t),mr=d(et),L(lo.$$.fragment,et),et.forEach(t),Ze.forEach(t),Fs=d(o),ft=r(o,"H2",{class:!0});var Js=i(ft);Ft=r(Js,"A",{id:!0,class:!0,href:!0});var Nd=i(Ft);Nn=r(Nd,"SPAN",{});var Dd=i(Nn);L(co.$$.fragment,Dd),Dd.forEach(t),Nd.forEach(t),gr=d(Js),Dn=r(Js,"SPAN",{});var Ad=i(Dn);_r=s(Ad,"CTRLLMHeadModel"),Ad.forEach(t),Js.forEach(t),qs=d(o),Le=r(o,"DIV",{class:!0});var tt=i(Le);L(ho.$$.fragment,tt),Tr=d(tt),An=r(tt,"P",{});var Od=i(An);vr=s(Od,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Od.forEach(t),br=d(tt),po=r(tt,"P",{});var Xs=i(po);kr=s(Xs,"This model inherits from "),on=r(Xs,"A",{href:!0});var Hd=i(on);Cr=s(Hd,"PreTrainedModel"),Hd.forEach(t),yr=s(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xs.forEach(t),wr=d(tt),uo=r(tt,"P",{});var Qs=i(uo);Lr=s(Qs,"This model is also a PyTorch "),fo=r(Qs,"A",{href:!0,rel:!0});var Wd=i(fo);$r=s(Wd,"torch.nn.Module"),Wd.forEach(t),Rr=s(Qs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qs.forEach(t),Mr=d(tt),ze=r(tt,"DIV",{class:!0});var ot=i(ze);L(mo.$$.fragment,ot),Er=d(ot),mt=r(ot,"P",{});var vn=i(mt);Fr=s(vn,"The "),nn=r(vn,"A",{href:!0});var Bd=i(nn);qr=s(Bd,"CTRLLMHeadModel"),Bd.forEach(t),zr=s(vn," forward method, overrides the "),On=r(vn,"CODE",{});var Ud=i(On);Pr=s(Ud,"__call__"),Ud.forEach(t),xr=s(vn," special method."),vn.forEach(t),Sr=d(ot),L(qt.$$.fragment,ot),jr=d(ot),Hn=r(ot,"P",{});var Vd=i(Hn);Ir=s(Vd,"Example:"),Vd.forEach(t),Nr=d(ot),L(go.$$.fragment,ot),ot.forEach(t),tt.forEach(t),zs=d(o),gt=r(o,"H2",{class:!0});var Ys=i(gt);zt=r(Ys,"A",{id:!0,class:!0,href:!0});var Gd=i(zt);Wn=r(Gd,"SPAN",{});var Kd=i(Wn);L(_o.$$.fragment,Kd),Kd.forEach(t),Gd.forEach(t),Dr=d(Ys),Bn=r(Ys,"SPAN",{});var Jd=i(Bn);Ar=s(Jd,"CTRLForSequenceClassification"),Jd.forEach(t),Ys.forEach(t),Ps=d(o),$e=r(o,"DIV",{class:!0});var nt=i($e);L(To.$$.fragment,nt),Or=d(nt),Re=r(nt,"P",{});var Ve=i(Re);Hr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),sn=r(Ve,"A",{href:!0});var Xd=i(sn);Wr=s(Xd,"CTRLForSequenceClassification"),Xd.forEach(t),Br=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Un=r(Ve,"CODE",{});var Qd=i(Un);Ur=s(Qd,"pad_token_id"),Qd.forEach(t),Vr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Vn=r(Ve,"CODE",{});var Yd=i(Vn);Gr=s(Yd,"pad_token_id"),Yd.forEach(t),Kr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Gn=r(Ve,"CODE",{});var Zd=i(Gn);Jr=s(Zd,"inputs_embeds"),Zd.forEach(t),Xr=s(Ve," are passed instead of "),Kn=r(Ve,"CODE",{});var ec=i(Kn);Qr=s(ec,"input_ids"),ec.forEach(t),Yr=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),Zr=d(nt),vo=r(nt,"P",{});var Zs=i(vo);ei=s(Zs,"This model inherits from "),an=r(Zs,"A",{href:!0});var tc=i(an);ti=s(tc,"PreTrainedModel"),tc.forEach(t),oi=s(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs.forEach(t),ni=d(nt),bo=r(nt,"P",{});var ea=i(bo);si=s(ea,"This model is also a PyTorch "),ko=r(ea,"A",{href:!0,rel:!0});var oc=i(ko);ai=s(oc,"torch.nn.Module"),oc.forEach(t),ri=s(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(t),ii=d(nt),ie=r(nt,"DIV",{class:!0});var je=i(ie);L(Co.$$.fragment,je),li=d(je),_t=r(je,"P",{});var bn=i(_t);di=s(bn,"The "),rn=r(bn,"A",{href:!0});var nc=i(rn);ci=s(nc,"CTRLForSequenceClassification"),nc.forEach(t),hi=s(bn," forward method, overrides the "),Jn=r(bn,"CODE",{});var sc=i(Jn);pi=s(sc,"__call__"),sc.forEach(t),ui=s(bn," special method."),bn.forEach(t),fi=d(je),L(Pt.$$.fragment,je),mi=d(je),Xn=r(je,"P",{});var ac=i(Xn);gi=s(ac,"Example of single-label classification:"),ac.forEach(t),_i=d(je),L(yo.$$.fragment,je),Ti=d(je),Qn=r(je,"P",{});var rc=i(Qn);vi=s(rc,"Example of multi-label classification:"),rc.forEach(t),bi=d(je),L(wo.$$.fragment,je),je.forEach(t),nt.forEach(t),xs=d(o),Tt=r(o,"H2",{class:!0});var ta=i(Tt);xt=r(ta,"A",{id:!0,class:!0,href:!0});var ic=i(xt);Yn=r(ic,"SPAN",{});var lc=i(Yn);L(Lo.$$.fragment,lc),lc.forEach(t),ic.forEach(t),ki=d(ta),Zn=r(ta,"SPAN",{});var dc=i(Zn);Ci=s(dc,"TFCTRLModel"),dc.forEach(t),ta.forEach(t),Ss=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);L($o.$$.fragment,Ge),yi=d(Ge),es=r(Ge,"P",{});var cc=i(es);wi=s(cc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),cc.forEach(t),Li=d(Ge),Ro=r(Ge,"P",{});var oa=i(Ro);$i=s(oa,"This model inherits from "),ln=r(oa,"A",{href:!0});var hc=i(ln);Ri=s(hc,"TFPreTrainedModel"),hc.forEach(t),Mi=s(oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oa.forEach(t),Ei=d(Ge),Mo=r(Ge,"P",{});var na=i(Mo);Fi=s(na,"This model is also a "),Eo=r(na,"A",{href:!0,rel:!0});var pc=i(Eo);qi=s(pc,"tf.keras.Model"),pc.forEach(t),zi=s(na,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),na.forEach(t),Pi=d(Ge),L(St.$$.fragment,Ge),xi=d(Ge),Pe=r(Ge,"DIV",{class:!0});var st=i(Pe);L(Fo.$$.fragment,st),Si=d(st),vt=r(st,"P",{});var kn=i(vt);ji=s(kn,"The "),dn=r(kn,"A",{href:!0});var uc=i(dn);Ii=s(uc,"TFCTRLModel"),uc.forEach(t),Ni=s(kn," forward method, overrides the "),ts=r(kn,"CODE",{});var fc=i(ts);Di=s(fc,"__call__"),fc.forEach(t),Ai=s(kn," special method."),kn.forEach(t),Oi=d(st),L(jt.$$.fragment,st),Hi=d(st),os=r(st,"P",{});var mc=i(os);Wi=s(mc,"Example:"),mc.forEach(t),Bi=d(st),L(qo.$$.fragment,st),st.forEach(t),Ge.forEach(t),js=d(o),bt=r(o,"H2",{class:!0});var sa=i(bt);It=r(sa,"A",{id:!0,class:!0,href:!0});var gc=i(It);ns=r(gc,"SPAN",{});var _c=i(ns);L(zo.$$.fragment,_c),_c.forEach(t),gc.forEach(t),Ui=d(sa),ss=r(sa,"SPAN",{});var Tc=i(ss);Vi=s(Tc,"TFCTRLLMHeadModel"),Tc.forEach(t),sa.forEach(t),Is=d(o),de=r(o,"DIV",{class:!0});var Ke=i(de);L(Po.$$.fragment,Ke),Gi=d(Ke),as=r(Ke,"P",{});var vc=i(as);Ki=s(vc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),vc.forEach(t),Ji=d(Ke),xo=r(Ke,"P",{});var aa=i(xo);Xi=s(aa,"This model inherits from "),cn=r(aa,"A",{href:!0});var bc=i(cn);Qi=s(bc,"TFPreTrainedModel"),bc.forEach(t),Yi=s(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(t),Zi=d(Ke),So=r(Ke,"P",{});var ra=i(So);el=s(ra,"This model is also a "),jo=r(ra,"A",{href:!0,rel:!0});var kc=i(jo);tl=s(kc,"tf.keras.Model"),kc.forEach(t),ol=s(ra,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ra.forEach(t),nl=d(Ke),L(Nt.$$.fragment,Ke),sl=d(Ke),xe=r(Ke,"DIV",{class:!0});var at=i(xe);L(Io.$$.fragment,at),al=d(at),kt=r(at,"P",{});var Cn=i(kt);rl=s(Cn,"The "),hn=r(Cn,"A",{href:!0});var Cc=i(hn);il=s(Cc,"TFCTRLLMHeadModel"),Cc.forEach(t),ll=s(Cn," forward method, overrides the "),rs=r(Cn,"CODE",{});var yc=i(rs);dl=s(yc,"__call__"),yc.forEach(t),cl=s(Cn," special method."),Cn.forEach(t),hl=d(at),L(Dt.$$.fragment,at),pl=d(at),is=r(at,"P",{});var wc=i(is);ul=s(wc,"Example:"),wc.forEach(t),fl=d(at),L(No.$$.fragment,at),at.forEach(t),Ke.forEach(t),Ns=d(o),Ct=r(o,"H2",{class:!0});var ia=i(Ct);At=r(ia,"A",{id:!0,class:!0,href:!0});var Lc=i(At);ls=r(Lc,"SPAN",{});var $c=i(ls);L(Do.$$.fragment,$c),$c.forEach(t),Lc.forEach(t),ml=d(ia),ds=r(ia,"SPAN",{});var Rc=i(ds);gl=s(Rc,"TFCTRLForSequenceClassification"),Rc.forEach(t),ia.forEach(t),Ds=d(o),J=r(o,"DIV",{class:!0});var fe=i(J);L(Ao.$$.fragment,fe),_l=d(fe),cs=r(fe,"P",{});var Mc=i(cs);Tl=s(Mc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),Mc.forEach(t),vl=d(fe),pn=r(fe,"P",{});var Yl=i(pn);un=r(Yl,"A",{href:!0});var Ec=i(un);bl=s(Ec,"TFCTRLForSequenceClassification"),Ec.forEach(t),kl=s(Yl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Yl.forEach(t),Cl=d(fe),De=r(fe,"P",{});var rt=i(De);yl=s(rt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),hs=r(rt,"CODE",{});var Fc=i(hs);wl=s(Fc,"pad_token_id"),Fc.forEach(t),Ll=s(rt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ps=r(rt,"CODE",{});var qc=i(ps);$l=s(qc,"pad_token_id"),qc.forEach(t),Rl=s(rt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),us=r(rt,"CODE",{});var zc=i(us);Ml=s(zc,"inputs_embeds"),zc.forEach(t),El=s(rt," are passed instead of "),fs=r(rt,"CODE",{});var Pc=i(fs);Fl=s(Pc,"input_ids"),Pc.forEach(t),ql=s(rt,`, it does the same (take the last value in
each row of the batch).`),rt.forEach(t),zl=d(fe),Oo=r(fe,"P",{});var la=i(Oo);Pl=s(la,"This model inherits from "),fn=r(la,"A",{href:!0});var xc=i(fn);xl=s(xc,"TFPreTrainedModel"),xc.forEach(t),Sl=s(la,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),la.forEach(t),jl=d(fe),Ho=r(fe,"P",{});var da=i(Ho);Il=s(da,"This model is also a "),Wo=r(da,"A",{href:!0,rel:!0});var Sc=i(Wo);Nl=s(Sc,"tf.keras.Model"),Sc.forEach(t),Dl=s(da,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),da.forEach(t),Al=d(fe),L(Ot.$$.fragment,fe),Ol=d(fe),Se=r(fe,"DIV",{class:!0});var it=i(Se);L(Bo.$$.fragment,it),Hl=d(it),yt=r(it,"P",{});var yn=i(yt);Wl=s(yn,"The "),mn=r(yn,"A",{href:!0});var jc=i(mn);Bl=s(jc,"TFCTRLForSequenceClassification"),jc.forEach(t),Ul=s(yn," forward method, overrides the "),ms=r(yn,"CODE",{});var Ic=i(ms);Vl=s(Ic,"__call__"),Ic.forEach(t),Gl=s(yn," special method."),yn.forEach(t),Kl=d(it),L(Ht.$$.fragment,it),Jl=d(it),gs=r(it,"P",{});var Nc=i(gs);Xl=s(Nc,"Example:"),Nc.forEach(t),Ql=d(it),L(Uo.$$.fragment,it),it.forEach(t),fe.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Zc)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(m,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(C,"class","relative group"),c(Z,"href","https://arxiv.org/abs/1909.05858"),c(Z,"rel","nofollow"),c(te,"href","https://github.com/salesforce/ctrl"),c(te,"rel","nofollow"),c(Ko,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c($t,"id","transformers.CTRLConfig"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.CTRLConfig"),c(dt,"class","relative group"),c(Jo,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLModel"),c(Xo,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(Qo,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yo,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),c(ye,"class","docstring"),c(Rt,"id","transformers.CTRLTokenizer"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLTokenizer"),c(ht,"class","relative group"),c(Zo,"href","/docs/transformers/doc-build-test/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(zn,"class","docstring"),c(Ne,"class","docstring"),c(Mt,"id","transformers.CTRLModel"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLModel"),c(pt,"class","relative group"),c(en,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ro,"rel","nofollow"),c(tn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLModel"),c(qe,"class","docstring"),c(we,"class","docstring"),c(Ft,"id","transformers.CTRLLMHeadModel"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(on,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(nn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(ze,"class","docstring"),c(Le,"class","docstring"),c(zt,"id","transformers.CTRLForSequenceClassification"),c(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zt,"href","#transformers.CTRLForSequenceClassification"),c(gt,"class","relative group"),c(sn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(an,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ko,"rel","nofollow"),c(rn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ie,"class","docstring"),c($e,"class","docstring"),c(xt,"id","transformers.TFCTRLModel"),c(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xt,"href","#transformers.TFCTRLModel"),c(Tt,"class","relative group"),c(ln,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(Eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Eo,"rel","nofollow"),c(dn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Pe,"class","docstring"),c(le,"class","docstring"),c(It,"id","transformers.TFCTRLLMHeadModel"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFCTRLLMHeadModel"),c(bt,"class","relative group"),c(cn,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(jo,"rel","nofollow"),c(hn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(xe,"class","docstring"),c(de,"class","docstring"),c(At,"id","transformers.TFCTRLForSequenceClassification"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFCTRLForSequenceClassification"),c(Ct,"class","relative group"),c(un,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(fn,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(mn,"href","/docs/transformers/doc-build-test/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(Se,"class","docstring"),c(J,"class","docstring")},m(o,f){e(document.head,p),u(o,k,f),u(o,m,f),e(m,g),e(g,v),$(T,v,null),e(m,_),e(m,y),e(y,me),u(o,Q,f),u(o,C,f),e(C,X),e(X,A),$(Y,A,null),e(C,ge),e(C,O),e(O,_e),u(o,ce,f),u(o,x,f),e(x,S),e(x,Z),e(Z,oe),e(x,F),e(x,q),e(q,Te),e(x,U),u(o,he,f),u(o,ne,f),e(ne,V),u(o,pe,f),u(o,se,f),e(se,z),e(z,ve),u(o,H,f),u(o,ae,f),e(ae,be),u(o,W,f),u(o,j,f),e(j,ee),e(ee,I),e(ee,te),e(te,G),e(ee,ke),e(j,h),e(j,b),e(b,re),e(j,Ae),e(j,ue),e(ue,N),e(ue,Me),e(Me,Oe),e(ue,He),e(j,D),e(j,P),e(P,We),e(P,Ee),e(Ee,K),e(P,Be),e(P,Fe),e(Fe,Ce),e(P,Ue),e(P,wn),e(wn,ca),e(P,ha),e(P,Ko),e(Ko,Ln),e(Ln,pa),e(P,ua),u(o,ys,f),u(o,Xe,f),e(Xe,fa),e(Xe,Gt),e(Gt,ma),e(Xe,ga),e(Xe,Kt),e(Kt,_a),e(Xe,Ta),u(o,ws,f),u(o,dt,f),e(dt,$t),e($t,$n),$(Jt,$n,null),e(dt,va),e(dt,Rn),e(Rn,ba),u(o,Ls,f),u(o,ye,f),$(Xt,ye,null),e(ye,ka),e(ye,Je),e(Je,Ca),e(Je,Jo),e(Jo,ya),e(Je,wa),e(Je,Xo),e(Xo,La),e(Je,$a),e(Je,Qt),e(Qt,Ra),e(Je,Ma),e(ye,Ea),e(ye,ct),e(ct,Fa),e(ct,Qo),e(Qo,qa),e(ct,za),e(ct,Yo),e(Yo,Pa),e(ct,xa),e(ye,Sa),e(ye,Mn),e(Mn,ja),e(ye,Ia),$(Yt,ye,null),u(o,$s,f),u(o,ht,f),e(ht,Rt),e(Rt,En),$(Zt,En,null),e(ht,Na),e(ht,Fn),e(Fn,Da),u(o,Rs,f),u(o,Ne,f),$(eo,Ne,null),e(Ne,Aa),e(Ne,qn),e(qn,Oa),e(Ne,Ha),e(Ne,to),e(to,Wa),e(to,Zo),e(Zo,Ba),e(to,Ua),e(Ne,Va),e(Ne,zn),u(o,Ms,f),u(o,pt,f),e(pt,Mt),e(Mt,Pn),$(oo,Pn,null),e(pt,Ga),e(pt,xn),e(xn,Ka),u(o,Es,f),u(o,we,f),$(no,we,null),e(we,Ja),e(we,Sn),e(Sn,Xa),e(we,Qa),e(we,so),e(so,Ya),e(so,en),e(en,Za),e(so,er),e(we,tr),e(we,ao),e(ao,or),e(ao,ro),e(ro,nr),e(ao,sr),e(we,ar),e(we,qe),$(io,qe,null),e(qe,rr),e(qe,ut),e(ut,ir),e(ut,tn),e(tn,lr),e(ut,dr),e(ut,jn),e(jn,cr),e(ut,hr),e(qe,pr),$(Et,qe,null),e(qe,ur),e(qe,In),e(In,fr),e(qe,mr),$(lo,qe,null),u(o,Fs,f),u(o,ft,f),e(ft,Ft),e(Ft,Nn),$(co,Nn,null),e(ft,gr),e(ft,Dn),e(Dn,_r),u(o,qs,f),u(o,Le,f),$(ho,Le,null),e(Le,Tr),e(Le,An),e(An,vr),e(Le,br),e(Le,po),e(po,kr),e(po,on),e(on,Cr),e(po,yr),e(Le,wr),e(Le,uo),e(uo,Lr),e(uo,fo),e(fo,$r),e(uo,Rr),e(Le,Mr),e(Le,ze),$(mo,ze,null),e(ze,Er),e(ze,mt),e(mt,Fr),e(mt,nn),e(nn,qr),e(mt,zr),e(mt,On),e(On,Pr),e(mt,xr),e(ze,Sr),$(qt,ze,null),e(ze,jr),e(ze,Hn),e(Hn,Ir),e(ze,Nr),$(go,ze,null),u(o,zs,f),u(o,gt,f),e(gt,zt),e(zt,Wn),$(_o,Wn,null),e(gt,Dr),e(gt,Bn),e(Bn,Ar),u(o,Ps,f),u(o,$e,f),$(To,$e,null),e($e,Or),e($e,Re),e(Re,Hr),e(Re,sn),e(sn,Wr),e(Re,Br),e(Re,Un),e(Un,Ur),e(Re,Vr),e(Re,Vn),e(Vn,Gr),e(Re,Kr),e(Re,Gn),e(Gn,Jr),e(Re,Xr),e(Re,Kn),e(Kn,Qr),e(Re,Yr),e($e,Zr),e($e,vo),e(vo,ei),e(vo,an),e(an,ti),e(vo,oi),e($e,ni),e($e,bo),e(bo,si),e(bo,ko),e(ko,ai),e(bo,ri),e($e,ii),e($e,ie),$(Co,ie,null),e(ie,li),e(ie,_t),e(_t,di),e(_t,rn),e(rn,ci),e(_t,hi),e(_t,Jn),e(Jn,pi),e(_t,ui),e(ie,fi),$(Pt,ie,null),e(ie,mi),e(ie,Xn),e(Xn,gi),e(ie,_i),$(yo,ie,null),e(ie,Ti),e(ie,Qn),e(Qn,vi),e(ie,bi),$(wo,ie,null),u(o,xs,f),u(o,Tt,f),e(Tt,xt),e(xt,Yn),$(Lo,Yn,null),e(Tt,ki),e(Tt,Zn),e(Zn,Ci),u(o,Ss,f),u(o,le,f),$($o,le,null),e(le,yi),e(le,es),e(es,wi),e(le,Li),e(le,Ro),e(Ro,$i),e(Ro,ln),e(ln,Ri),e(Ro,Mi),e(le,Ei),e(le,Mo),e(Mo,Fi),e(Mo,Eo),e(Eo,qi),e(Mo,zi),e(le,Pi),$(St,le,null),e(le,xi),e(le,Pe),$(Fo,Pe,null),e(Pe,Si),e(Pe,vt),e(vt,ji),e(vt,dn),e(dn,Ii),e(vt,Ni),e(vt,ts),e(ts,Di),e(vt,Ai),e(Pe,Oi),$(jt,Pe,null),e(Pe,Hi),e(Pe,os),e(os,Wi),e(Pe,Bi),$(qo,Pe,null),u(o,js,f),u(o,bt,f),e(bt,It),e(It,ns),$(zo,ns,null),e(bt,Ui),e(bt,ss),e(ss,Vi),u(o,Is,f),u(o,de,f),$(Po,de,null),e(de,Gi),e(de,as),e(as,Ki),e(de,Ji),e(de,xo),e(xo,Xi),e(xo,cn),e(cn,Qi),e(xo,Yi),e(de,Zi),e(de,So),e(So,el),e(So,jo),e(jo,tl),e(So,ol),e(de,nl),$(Nt,de,null),e(de,sl),e(de,xe),$(Io,xe,null),e(xe,al),e(xe,kt),e(kt,rl),e(kt,hn),e(hn,il),e(kt,ll),e(kt,rs),e(rs,dl),e(kt,cl),e(xe,hl),$(Dt,xe,null),e(xe,pl),e(xe,is),e(is,ul),e(xe,fl),$(No,xe,null),u(o,Ns,f),u(o,Ct,f),e(Ct,At),e(At,ls),$(Do,ls,null),e(Ct,ml),e(Ct,ds),e(ds,gl),u(o,Ds,f),u(o,J,f),$(Ao,J,null),e(J,_l),e(J,cs),e(cs,Tl),e(J,vl),e(J,pn),e(pn,un),e(un,bl),e(pn,kl),e(J,Cl),e(J,De),e(De,yl),e(De,hs),e(hs,wl),e(De,Ll),e(De,ps),e(ps,$l),e(De,Rl),e(De,us),e(us,Ml),e(De,El),e(De,fs),e(fs,Fl),e(De,ql),e(J,zl),e(J,Oo),e(Oo,Pl),e(Oo,fn),e(fn,xl),e(Oo,Sl),e(J,jl),e(J,Ho),e(Ho,Il),e(Ho,Wo),e(Wo,Nl),e(Ho,Dl),e(J,Al),$(Ot,J,null),e(J,Ol),e(J,Se),$(Bo,Se,null),e(Se,Hl),e(Se,yt),e(yt,Wl),e(yt,mn),e(mn,Bl),e(yt,Ul),e(yt,ms),e(ms,Vl),e(yt,Gl),e(Se,Kl),$(Ht,Se,null),e(Se,Jl),e(Se,gs),e(gs,Xl),e(Se,Ql),$(Uo,Se,null),As=!0},p(o,[f]){const Vo={};f&2&&(Vo.$$scope={dirty:f,ctx:o}),Et.$set(Vo);const _s={};f&2&&(_s.$$scope={dirty:f,ctx:o}),qt.$set(_s);const Ts={};f&2&&(Ts.$$scope={dirty:f,ctx:o}),Pt.$set(Ts);const vs={};f&2&&(vs.$$scope={dirty:f,ctx:o}),St.$set(vs);const Go={};f&2&&(Go.$$scope={dirty:f,ctx:o}),jt.$set(Go);const bs={};f&2&&(bs.$$scope={dirty:f,ctx:o}),Nt.$set(bs);const ks={};f&2&&(ks.$$scope={dirty:f,ctx:o}),Dt.$set(ks);const Cs={};f&2&&(Cs.$$scope={dirty:f,ctx:o}),Ot.$set(Cs);const wt={};f&2&&(wt.$$scope={dirty:f,ctx:o}),Ht.$set(wt)},i(o){As||(R(T.$$.fragment,o),R(Y.$$.fragment,o),R(Jt.$$.fragment,o),R(Xt.$$.fragment,o),R(Yt.$$.fragment,o),R(Zt.$$.fragment,o),R(eo.$$.fragment,o),R(oo.$$.fragment,o),R(no.$$.fragment,o),R(io.$$.fragment,o),R(Et.$$.fragment,o),R(lo.$$.fragment,o),R(co.$$.fragment,o),R(ho.$$.fragment,o),R(mo.$$.fragment,o),R(qt.$$.fragment,o),R(go.$$.fragment,o),R(_o.$$.fragment,o),R(To.$$.fragment,o),R(Co.$$.fragment,o),R(Pt.$$.fragment,o),R(yo.$$.fragment,o),R(wo.$$.fragment,o),R(Lo.$$.fragment,o),R($o.$$.fragment,o),R(St.$$.fragment,o),R(Fo.$$.fragment,o),R(jt.$$.fragment,o),R(qo.$$.fragment,o),R(zo.$$.fragment,o),R(Po.$$.fragment,o),R(Nt.$$.fragment,o),R(Io.$$.fragment,o),R(Dt.$$.fragment,o),R(No.$$.fragment,o),R(Do.$$.fragment,o),R(Ao.$$.fragment,o),R(Ot.$$.fragment,o),R(Bo.$$.fragment,o),R(Ht.$$.fragment,o),R(Uo.$$.fragment,o),As=!0)},o(o){M(T.$$.fragment,o),M(Y.$$.fragment,o),M(Jt.$$.fragment,o),M(Xt.$$.fragment,o),M(Yt.$$.fragment,o),M(Zt.$$.fragment,o),M(eo.$$.fragment,o),M(oo.$$.fragment,o),M(no.$$.fragment,o),M(io.$$.fragment,o),M(Et.$$.fragment,o),M(lo.$$.fragment,o),M(co.$$.fragment,o),M(ho.$$.fragment,o),M(mo.$$.fragment,o),M(qt.$$.fragment,o),M(go.$$.fragment,o),M(_o.$$.fragment,o),M(To.$$.fragment,o),M(Co.$$.fragment,o),M(Pt.$$.fragment,o),M(yo.$$.fragment,o),M(wo.$$.fragment,o),M(Lo.$$.fragment,o),M($o.$$.fragment,o),M(St.$$.fragment,o),M(Fo.$$.fragment,o),M(jt.$$.fragment,o),M(qo.$$.fragment,o),M(zo.$$.fragment,o),M(Po.$$.fragment,o),M(Nt.$$.fragment,o),M(Io.$$.fragment,o),M(Dt.$$.fragment,o),M(No.$$.fragment,o),M(Do.$$.fragment,o),M(Ao.$$.fragment,o),M(Ot.$$.fragment,o),M(Bo.$$.fragment,o),M(Ht.$$.fragment,o),M(Uo.$$.fragment,o),As=!1},d(o){t(p),o&&t(k),o&&t(m),E(T),o&&t(Q),o&&t(C),E(Y),o&&t(ce),o&&t(x),o&&t(he),o&&t(ne),o&&t(pe),o&&t(se),o&&t(H),o&&t(ae),o&&t(W),o&&t(j),o&&t(ys),o&&t(Xe),o&&t(ws),o&&t(dt),E(Jt),o&&t(Ls),o&&t(ye),E(Xt),E(Yt),o&&t($s),o&&t(ht),E(Zt),o&&t(Rs),o&&t(Ne),E(eo),o&&t(Ms),o&&t(pt),E(oo),o&&t(Es),o&&t(we),E(no),E(io),E(Et),E(lo),o&&t(Fs),o&&t(ft),E(co),o&&t(qs),o&&t(Le),E(ho),E(mo),E(qt),E(go),o&&t(zs),o&&t(gt),E(_o),o&&t(Ps),o&&t($e),E(To),E(Co),E(Pt),E(yo),E(wo),o&&t(xs),o&&t(Tt),E(Lo),o&&t(Ss),o&&t(le),E($o),E(St),E(Fo),E(jt),E(qo),o&&t(js),o&&t(bt),E(zo),o&&t(Is),o&&t(de),E(Po),E(Nt),E(Io),E(Dt),E(No),o&&t(Ns),o&&t(Ct),E(Do),o&&t(Ds),o&&t(J),E(Ao),E(Ot),E(Bo),E(Ht),E(Uo)}}}const Zc={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function eh(B,p,k){let{fw:m}=p;return B.$$set=g=>{"fw"in g&&k(0,m=g.fw)},[m]}class ih extends Dc{constructor(p){super();Ac(this,p,eh,Yc,Oc,{fw:0})}}export{ih as default,Zc as metadata};
