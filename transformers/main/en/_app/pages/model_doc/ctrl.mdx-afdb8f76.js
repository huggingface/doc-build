import{S as Uc,i as Vc,s as Gc,e as a,k as l,w as b,t as n,M as Kc,c as r,d as t,m as d,a as i,x as C,h as s,b as c,F as e,g as u,y,q as w,o as L,B as $,v as Xc}from"../../chunks/vendor-6b77c823.js";import{T as $t}from"../../chunks/Tip-39098574.js";import{D as Ee}from"../../chunks/Docstring-abef54e3.js";import{C as lt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";function Jc(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Qc(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Yc(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Zc(J){let p,E,f,g,v,T,_,M,ge,Y,R,Q,A,Z,_e,O,Te,he,x,j,ee,ne,F,q,ve,U,pe,se,V,ue,ae,z,ke,H,re,be,W,S,te,I,oe,G,Ce;return{c(){p=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),he=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),ue=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var me=i(M);ge=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ie.forEach(t),Y=d(h),R=r(h,"P",{});var N=i(R);Q=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Z=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),he=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var qe=i(V);ue=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var K=i(z);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(K," or "),W=r(K,"CODE",{});var ze=i(W);S=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),K.forEach(t),te=d(D),I=r(D,"LI",{});var ye=i(I);oe=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,E),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(h,Y,k),u(h,R,k),e(R,Q),e(R,A),e(A,Z),e(R,_e),e(R,O),e(O,Te),e(R,he),u(h,x,k),u(h,j,k),e(j,ee),u(h,ne,k),u(h,F,k),e(F,q),e(q,ve),e(q,U),e(U,pe),e(q,se),e(q,V),e(V,ue),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,be),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,Ce)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Y),h&&t(R),h&&t(x),h&&t(j),h&&t(ne),h&&t(F)}}}function eh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function th(J){let p,E,f,g,v,T,_,M,ge,Y,R,Q,A,Z,_e,O,Te,he,x,j,ee,ne,F,q,ve,U,pe,se,V,ue,ae,z,ke,H,re,be,W,S,te,I,oe,G,Ce;return{c(){p=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),he=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),ue=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var me=i(M);ge=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ie.forEach(t),Y=d(h),R=r(h,"P",{});var N=i(R);Q=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Z=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),he=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var qe=i(V);ue=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var K=i(z);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(K," or "),W=r(K,"CODE",{});var ze=i(W);S=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),K.forEach(t),te=d(D),I=r(D,"LI",{});var ye=i(I);oe=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,E),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(h,Y,k),u(h,R,k),e(R,Q),e(R,A),e(A,Z),e(R,_e),e(R,O),e(O,Te),e(R,he),u(h,x,k),u(h,j,k),e(j,ee),u(h,ne,k),u(h,F,k),e(F,q),e(q,ve),e(q,U),e(U,pe),e(q,se),e(q,V),e(V,ue),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,be),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,Ce)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Y),h&&t(R),h&&t(x),h&&t(j),h&&t(ne),h&&t(F)}}}function oh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function nh(J){let p,E,f,g,v,T,_,M,ge,Y,R,Q,A,Z,_e,O,Te,he,x,j,ee,ne,F,q,ve,U,pe,se,V,ue,ae,z,ke,H,re,be,W,S,te,I,oe,G,Ce;return{c(){p=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),Q=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),he=n("."),x=l(),j=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),V=a("code"),ue=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var me=i(M);ge=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ie.forEach(t),Y=d(h),R=r(h,"P",{});var N=i(R);Q=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Z=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),he=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var He=i(j);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),V=r(P,"CODE",{});var qe=i(V);ue=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var K=i(z);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(K,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(K," or "),W=r(K,"CODE",{});var ze=i(W);S=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),K.forEach(t),te=d(D),I=r(D,"LI",{});var ye=i(I);oe=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,E),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(h,Y,k),u(h,R,k),e(R,Q),e(R,A),e(A,Z),e(R,_e),e(R,O),e(O,Te),e(R,he),u(h,x,k),u(h,j,k),e(j,ee),u(h,ne,k),u(h,F,k),e(F,q),e(q,ve),e(q,U),e(U,pe),e(q,se),e(q,V),e(V,ue),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,be),e(z,W),e(W,S),e(F,te),e(F,I),e(I,oe),e(I,G),e(G,Ce)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Y),h&&t(R),h&&t(x),h&&t(j),h&&t(ne),h&&t(F)}}}function sh(J){let p,E,f,g,v;return{c(){p=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var M=i(f);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,E),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function ah(J){let p,E,f,g,v,T,_,M,ge,Y,R,Q,A,Z,_e,O,Te,he,x,j,ee,ne,F,q,ve,U,pe,se,V,ue,ae,z,ke,H,re,be,W,S,te,I,oe,G,Ce,h,k,ie,Ae,me,N,Fe,Oe,He,D,P,We,qe,K,Be,ze,ye,Ue,Mn,ua,ma,Qo,En,fa,ga,$s,Je,_a,Gt,Ta,va,Kt,ka,ba,Rs,ct,Rt,Fn,Xt,Ca,qn,ya,Ms,we,Jt,wa,Xe,La,Yo,$a,Ra,Zo,Ma,Ea,Qt,Fa,qa,za,ht,Pa,en,xa,ja,tn,Sa,Ia,Na,zn,Da,Aa,Yt,Es,pt,Mt,Pn,Zt,Oa,xn,Ha,Fs,Ne,eo,Wa,jn,Ba,Ua,to,Va,on,Ga,Ka,Xa,nn,oo,qs,ut,Et,Sn,no,Ja,In,Qa,zs,Le,so,Ya,Nn,Za,er,ao,tr,sn,or,nr,sr,ro,ar,io,rr,ir,lr,Pe,lo,dr,mt,cr,an,hr,pr,Dn,ur,mr,fr,Ft,gr,An,_r,Tr,co,Ps,ft,qt,On,ho,vr,Hn,kr,xs,$e,po,br,Wn,Cr,yr,uo,wr,rn,Lr,$r,Rr,mo,Mr,fo,Er,Fr,qr,xe,go,zr,gt,Pr,ln,xr,jr,Bn,Sr,Ir,Nr,zt,Dr,Un,Ar,Or,_o,js,_t,Pt,Vn,To,Hr,Gn,Wr,Ss,Re,vo,Br,Me,Ur,dn,Vr,Gr,Kn,Kr,Xr,Xn,Jr,Qr,Jn,Yr,Zr,Qn,ei,ti,oi,ko,ni,cn,si,ai,ri,bo,ii,Co,li,di,ci,B,yo,hi,Tt,pi,hn,ui,mi,Yn,fi,gi,_i,xt,Ti,Zn,vi,ki,wo,bi,Lo,Ci,es,yi,wi,$o,Li,Ro,Is,vt,jt,ts,Mo,$i,os,Ri,Ns,de,Eo,Mi,ns,Ei,Fi,Fo,qi,pn,zi,Pi,xi,qo,ji,zo,Si,Ii,Ni,St,Di,je,Po,Ai,kt,Oi,un,Hi,Wi,ss,Bi,Ui,Vi,It,Gi,as,Ki,Xi,xo,Ds,bt,Nt,rs,jo,Ji,is,Qi,As,ce,So,Yi,ls,Zi,el,Io,tl,mn,ol,nl,sl,No,al,Do,rl,il,ll,Dt,dl,Se,Ao,cl,Ct,hl,fn,pl,ul,ds,ml,fl,gl,At,_l,cs,Tl,vl,Oo,Os,yt,Ot,hs,Ho,kl,ps,bl,Hs,X,Wo,Cl,us,yl,wl,gn,_n,Ll,$l,Rl,De,Ml,ms,El,Fl,fs,ql,zl,gs,Pl,xl,_s,jl,Sl,Il,Bo,Nl,Tn,Dl,Al,Ol,Uo,Hl,Vo,Wl,Bl,Ul,Ht,Vl,Ie,Go,Gl,wt,Kl,vn,Xl,Jl,Ts,Ql,Yl,Zl,Wt,ed,vs,td,od,Ko,Ws;return T=new dt({}),Z=new dt({}),Xt=new dt({}),Jt=new Ee({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Yt=new lt({props:{code:`from transformers import CTRLModel, CTRLConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new dt({}),eo=new Ee({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Ee({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new dt({}),so=new Ee({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L320",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Ee({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L353",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ft=new $t({props:{$$slots:{default:[Jc]},$$scope:{ctx:J}}}),co=new lt({props:{code:`from transformers import CTRLTokenizer, CTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ho=new dt({}),po=new Ee({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L493",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),go=new Ee({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L515",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new $t({props:{$$slots:{default:[Qc]},$$scope:{ctx:J}}}),_o=new lt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new dt({}),vo=new Ee({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L609",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new Ee({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L619",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xt=new $t({props:{$$slots:{default:[Yc]},$$scope:{ctx:J}}}),wo=new lt({props:{code:`import torch
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
`}}),Lo=new lt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),$o=new lt({props:{code:`import torch
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
`}}),Ro=new lt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Mo=new dt({}),Eo=new Ee({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L517",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new $t({props:{$$slots:{default:[Zc]},$$scope:{ctx:J}}}),Po=new Ee({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L522",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
`}}),It=new $t({props:{$$slots:{default:[eh]},$$scope:{ctx:J}}}),xo=new lt({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),jo=new dt({}),So=new Ee({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L612",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dt=new $t({props:{$$slots:{default:[th]},$$scope:{ctx:J}}}),Ao=new Ee({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L633",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
`}}),At=new $t({props:{$$slots:{default:[oh]},$$scope:{ctx:J}}}),Oo=new lt({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ho=new dt({}),Wo=new Ee({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L730",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new $t({props:{$$slots:{default:[nh]},$$scope:{ctx:J}}}),Go=new Ee({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L745",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
`}}),Wt=new $t({props:{$$slots:{default:[sh]},$$scope:{ctx:J}}}),Ko=new lt({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),E=l(),f=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),M=a("span"),ge=n("CTRL"),Y=l(),R=a("h2"),Q=a("a"),A=a("span"),b(Z.$$.fragment),_e=l(),O=a("span"),Te=n("Overview"),he=l(),x=a("p"),j=n("CTRL model was proposed in "),ee=a("a"),ne=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),ve=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),pe=l(),se=a("p"),V=n("The abstract from the paper is the following:"),ue=l(),ae=a("p"),z=a("em"),ke=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),re=a("p"),be=n("Tips:"),W=l(),S=a("ul"),te=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=a("a"),G=n("original implementation"),Ce=n(` for
more information.`),h=l(),k=a("li"),ie=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),me=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Fe=a("em"),Oe=n("run_generation.py"),He=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),qe=a("code"),K=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),ze=a("code"),ye=n("past"),Ue=n(" as input. Using the "),Mn=a("code"),ua=n("past_key_values"),ma=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Qo=a("a"),En=a("code"),fa=n("forward"),ga=n(`
method for more information on the usage of this argument.`),$s=l(),Je=a("p"),_a=n("This model was contributed by "),Gt=a("a"),Ta=n("keskarnitishr"),va=n(`. The original code can be found
`),Kt=a("a"),ka=n("here"),ba=n("."),Rs=l(),ct=a("h2"),Rt=a("a"),Fn=a("span"),b(Xt.$$.fragment),Ca=l(),qn=a("span"),ya=n("CTRLConfig"),Ms=l(),we=a("div"),b(Jt.$$.fragment),wa=l(),Xe=a("p"),La=n("This is the configuration class to store the configuration of a "),Yo=a("a"),$a=n("CTRLModel"),Ra=n(" or a "),Zo=a("a"),Ma=n("TFCTRLModel"),Ea=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),Fa=n("ctrl"),qa=n(" architecture from SalesForce."),za=l(),ht=a("p"),Pa=n("Configuration objects inherit from "),en=a("a"),xa=n("PretrainedConfig"),ja=n(` and can be used to control the model outputs. Read the
documentation from `),tn=a("a"),Sa=n("PretrainedConfig"),Ia=n(" for more information."),Na=l(),zn=a("p"),Da=n("Examples:"),Aa=l(),b(Yt.$$.fragment),Es=l(),pt=a("h2"),Mt=a("a"),Pn=a("span"),b(Zt.$$.fragment),Oa=l(),xn=a("span"),Ha=n("CTRLTokenizer"),Fs=l(),Ne=a("div"),b(eo.$$.fragment),Wa=l(),jn=a("p"),Ba=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Ua=l(),to=a("p"),Va=n("This tokenizer inherits from "),on=a("a"),Ga=n("PreTrainedTokenizer"),Ka=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xa=l(),nn=a("div"),b(oo.$$.fragment),qs=l(),ut=a("h2"),Et=a("a"),Sn=a("span"),b(no.$$.fragment),Ja=l(),In=a("span"),Qa=n("CTRLModel"),zs=l(),Le=a("div"),b(so.$$.fragment),Ya=l(),Nn=a("p"),Za=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),er=l(),ao=a("p"),tr=n("This model inherits from "),sn=a("a"),or=n("PreTrainedModel"),nr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sr=l(),ro=a("p"),ar=n("This model is also a PyTorch "),io=a("a"),rr=n("torch.nn.Module"),ir=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lr=l(),Pe=a("div"),b(lo.$$.fragment),dr=l(),mt=a("p"),cr=n("The "),an=a("a"),hr=n("CTRLModel"),pr=n(" forward method, overrides the "),Dn=a("code"),ur=n("__call__"),mr=n(" special method."),fr=l(),b(Ft.$$.fragment),gr=l(),An=a("p"),_r=n("Example:"),Tr=l(),b(co.$$.fragment),Ps=l(),ft=a("h2"),qt=a("a"),On=a("span"),b(ho.$$.fragment),vr=l(),Hn=a("span"),kr=n("CTRLLMHeadModel"),xs=l(),$e=a("div"),b(po.$$.fragment),br=l(),Wn=a("p"),Cr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yr=l(),uo=a("p"),wr=n("This model inherits from "),rn=a("a"),Lr=n("PreTrainedModel"),$r=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=l(),mo=a("p"),Mr=n("This model is also a PyTorch "),fo=a("a"),Er=n("torch.nn.Module"),Fr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr=l(),xe=a("div"),b(go.$$.fragment),zr=l(),gt=a("p"),Pr=n("The "),ln=a("a"),xr=n("CTRLLMHeadModel"),jr=n(" forward method, overrides the "),Bn=a("code"),Sr=n("__call__"),Ir=n(" special method."),Nr=l(),b(zt.$$.fragment),Dr=l(),Un=a("p"),Ar=n("Example:"),Or=l(),b(_o.$$.fragment),js=l(),_t=a("h2"),Pt=a("a"),Vn=a("span"),b(To.$$.fragment),Hr=l(),Gn=a("span"),Wr=n("CTRLForSequenceClassification"),Ss=l(),Re=a("div"),b(vo.$$.fragment),Br=l(),Me=a("p"),Ur=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),dn=a("a"),Vr=n("CTRLForSequenceClassification"),Gr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Kn=a("code"),Kr=n("pad_token_id"),Xr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Xn=a("code"),Jr=n("pad_token_id"),Qr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Jn=a("code"),Yr=n("inputs_embeds"),Zr=n(" are passed instead of "),Qn=a("code"),ei=n("input_ids"),ti=n(`, it does the same (take the last
value in each row of the batch).`),oi=l(),ko=a("p"),ni=n("This model inherits from "),cn=a("a"),si=n("PreTrainedModel"),ai=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri=l(),bo=a("p"),ii=n("This model is also a PyTorch "),Co=a("a"),li=n("torch.nn.Module"),di=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ci=l(),B=a("div"),b(yo.$$.fragment),hi=l(),Tt=a("p"),pi=n("The "),hn=a("a"),ui=n("CTRLForSequenceClassification"),mi=n(" forward method, overrides the "),Yn=a("code"),fi=n("__call__"),gi=n(" special method."),_i=l(),b(xt.$$.fragment),Ti=l(),Zn=a("p"),vi=n("Example of single-label classification:"),ki=l(),b(wo.$$.fragment),bi=l(),b(Lo.$$.fragment),Ci=l(),es=a("p"),yi=n("Example of multi-label classification:"),wi=l(),b($o.$$.fragment),Li=l(),b(Ro.$$.fragment),Is=l(),vt=a("h2"),jt=a("a"),ts=a("span"),b(Mo.$$.fragment),$i=l(),os=a("span"),Ri=n("TFCTRLModel"),Ns=l(),de=a("div"),b(Eo.$$.fragment),Mi=l(),ns=a("p"),Ei=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Fi=l(),Fo=a("p"),qi=n("This model inherits from "),pn=a("a"),zi=n("TFPreTrainedModel"),Pi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xi=l(),qo=a("p"),ji=n("This model is also a "),zo=a("a"),Si=n("tf.keras.Model"),Ii=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ni=l(),b(St.$$.fragment),Di=l(),je=a("div"),b(Po.$$.fragment),Ai=l(),kt=a("p"),Oi=n("The "),un=a("a"),Hi=n("TFCTRLModel"),Wi=n(" forward method, overrides the "),ss=a("code"),Bi=n("__call__"),Ui=n(" special method."),Vi=l(),b(It.$$.fragment),Gi=l(),as=a("p"),Ki=n("Example:"),Xi=l(),b(xo.$$.fragment),Ds=l(),bt=a("h2"),Nt=a("a"),rs=a("span"),b(jo.$$.fragment),Ji=l(),is=a("span"),Qi=n("TFCTRLLMHeadModel"),As=l(),ce=a("div"),b(So.$$.fragment),Yi=l(),ls=a("p"),Zi=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),el=l(),Io=a("p"),tl=n("This model inherits from "),mn=a("a"),ol=n("TFPreTrainedModel"),nl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl=l(),No=a("p"),al=n("This model is also a "),Do=a("a"),rl=n("tf.keras.Model"),il=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ll=l(),b(Dt.$$.fragment),dl=l(),Se=a("div"),b(Ao.$$.fragment),cl=l(),Ct=a("p"),hl=n("The "),fn=a("a"),pl=n("TFCTRLLMHeadModel"),ul=n(" forward method, overrides the "),ds=a("code"),ml=n("__call__"),fl=n(" special method."),gl=l(),b(At.$$.fragment),_l=l(),cs=a("p"),Tl=n("Example:"),vl=l(),b(Oo.$$.fragment),Os=l(),yt=a("h2"),Ot=a("a"),hs=a("span"),b(Ho.$$.fragment),kl=l(),ps=a("span"),bl=n("TFCTRLForSequenceClassification"),Hs=l(),X=a("div"),b(Wo.$$.fragment),Cl=l(),us=a("p"),yl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),wl=l(),gn=a("p"),_n=a("a"),Ll=n("TFCTRLForSequenceClassification"),$l=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Rl=l(),De=a("p"),Ml=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ms=a("code"),El=n("pad_token_id"),Fl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),fs=a("code"),ql=n("pad_token_id"),zl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),gs=a("code"),Pl=n("inputs_embeds"),xl=n(" are passed instead of "),_s=a("code"),jl=n("input_ids"),Sl=n(`, it does the same (take the last value in
each row of the batch).`),Il=l(),Bo=a("p"),Nl=n("This model inherits from "),Tn=a("a"),Dl=n("TFPreTrainedModel"),Al=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol=l(),Uo=a("p"),Hl=n("This model is also a "),Vo=a("a"),Wl=n("tf.keras.Model"),Bl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ul=l(),b(Ht.$$.fragment),Vl=l(),Ie=a("div"),b(Go.$$.fragment),Gl=l(),wt=a("p"),Kl=n("The "),vn=a("a"),Xl=n("TFCTRLForSequenceClassification"),Jl=n(" forward method, overrides the "),Ts=a("code"),Ql=n("__call__"),Yl=n(" special method."),Zl=l(),b(Wt.$$.fragment),ed=l(),vs=a("p"),td=n("Example:"),od=l(),b(Ko.$$.fragment),this.h()},l(o){const m=Kc('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),E=d(o),f=r(o,"H1",{class:!0});var Xo=i(f);g=r(Xo,"A",{id:!0,class:!0,href:!0});var ks=i(g);v=r(ks,"SPAN",{});var bs=i(v);C(T.$$.fragment,bs),bs.forEach(t),ks.forEach(t),_=d(Xo),M=r(Xo,"SPAN",{});var Cs=i(M);ge=s(Cs,"CTRL"),Cs.forEach(t),Xo.forEach(t),Y=d(o),R=r(o,"H2",{class:!0});var Jo=i(R);Q=r(Jo,"A",{id:!0,class:!0,href:!0});var ys=i(Q);A=r(ys,"SPAN",{});var ws=i(A);C(Z.$$.fragment,ws),ws.forEach(t),ys.forEach(t),_e=d(Jo),O=r(Jo,"SPAN",{});var Ls=i(O);Te=s(Ls,"Overview"),Ls.forEach(t),Jo.forEach(t),he=d(o),x=r(o,"P",{});var Lt=i(x);j=s(Lt,"CTRL model was proposed in "),ee=r(Lt,"A",{href:!0,rel:!0});var sd=i(ee);ne=s(sd,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),sd.forEach(t),F=s(Lt," by Nitish Shirish Keskar"),q=r(Lt,"EM",{});var ad=i(q);ve=s(ad,", Bryan McCann"),ad.forEach(t),U=s(Lt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Lt.forEach(t),pe=d(o),se=r(o,"P",{});var rd=i(se);V=s(rd,"The abstract from the paper is the following:"),rd.forEach(t),ue=d(o),ae=r(o,"P",{});var id=i(ae);z=r(id,"EM",{});var ld=i(z);ke=s(ld,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),ld.forEach(t),id.forEach(t),H=d(o),re=r(o,"P",{});var dd=i(re);be=s(dd,"Tips:"),dd.forEach(t),W=d(o),S=r(o,"UL",{});var Bt=i(S);te=r(Bt,"LI",{});var Bs=i(te);I=s(Bs,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=r(Bs,"A",{href:!0,rel:!0});var cd=i(oe);G=s(cd,"original implementation"),cd.forEach(t),Ce=s(Bs,` for
more information.`),Bs.forEach(t),h=d(Bt),k=r(Bt,"LI",{});var hd=i(k);ie=s(hd,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),hd.forEach(t),Ae=d(Bt),me=r(Bt,"LI",{});var Us=i(me);N=s(Us,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Fe=r(Us,"EM",{});var pd=i(Fe);Oe=s(pd,"run_generation.py"),pd.forEach(t),He=s(Us," example script."),Us.forEach(t),D=d(Bt),P=r(Bt,"LI",{});var Qe=i(P);We=s(Qe,"The PyTorch models can take the "),qe=r(Qe,"CODE",{});var ud=i(qe);K=s(ud,"past_key_values"),ud.forEach(t),Be=s(Qe,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),ze=r(Qe,"CODE",{});var md=i(ze);ye=s(md,"past"),md.forEach(t),Ue=s(Qe," as input. Using the "),Mn=r(Qe,"CODE",{});var fd=i(Mn);ua=s(fd,"past_key_values"),fd.forEach(t),ma=s(Qe,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Qo=r(Qe,"A",{href:!0});var gd=i(Qo);En=r(gd,"CODE",{});var _d=i(En);fa=s(_d,"forward"),_d.forEach(t),gd.forEach(t),ga=s(Qe,`
method for more information on the usage of this argument.`),Qe.forEach(t),Bt.forEach(t),$s=d(o),Je=r(o,"P",{});var kn=i(Je);_a=s(kn,"This model was contributed by "),Gt=r(kn,"A",{href:!0,rel:!0});var Td=i(Gt);Ta=s(Td,"keskarnitishr"),Td.forEach(t),va=s(kn,`. The original code can be found
`),Kt=r(kn,"A",{href:!0,rel:!0});var vd=i(Kt);ka=s(vd,"here"),vd.forEach(t),ba=s(kn,"."),kn.forEach(t),Rs=d(o),ct=r(o,"H2",{class:!0});var Vs=i(ct);Rt=r(Vs,"A",{id:!0,class:!0,href:!0});var kd=i(Rt);Fn=r(kd,"SPAN",{});var bd=i(Fn);C(Xt.$$.fragment,bd),bd.forEach(t),kd.forEach(t),Ca=d(Vs),qn=r(Vs,"SPAN",{});var Cd=i(qn);ya=s(Cd,"CTRLConfig"),Cd.forEach(t),Vs.forEach(t),Ms=d(o),we=r(o,"DIV",{class:!0});var Ye=i(we);C(Jt.$$.fragment,Ye),wa=d(Ye),Xe=r(Ye,"P",{});var Ut=i(Xe);La=s(Ut,"This is the configuration class to store the configuration of a "),Yo=r(Ut,"A",{href:!0});var yd=i(Yo);$a=s(yd,"CTRLModel"),yd.forEach(t),Ra=s(Ut," or a "),Zo=r(Ut,"A",{href:!0});var wd=i(Zo);Ma=s(wd,"TFCTRLModel"),wd.forEach(t),Ea=s(Ut,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Ut,"A",{href:!0,rel:!0});var Ld=i(Qt);Fa=s(Ld,"ctrl"),Ld.forEach(t),qa=s(Ut," architecture from SalesForce."),Ut.forEach(t),za=d(Ye),ht=r(Ye,"P",{});var bn=i(ht);Pa=s(bn,"Configuration objects inherit from "),en=r(bn,"A",{href:!0});var $d=i(en);xa=s($d,"PretrainedConfig"),$d.forEach(t),ja=s(bn,` and can be used to control the model outputs. Read the
documentation from `),tn=r(bn,"A",{href:!0});var Rd=i(tn);Sa=s(Rd,"PretrainedConfig"),Rd.forEach(t),Ia=s(bn," for more information."),bn.forEach(t),Na=d(Ye),zn=r(Ye,"P",{});var Md=i(zn);Da=s(Md,"Examples:"),Md.forEach(t),Aa=d(Ye),C(Yt.$$.fragment,Ye),Ye.forEach(t),Es=d(o),pt=r(o,"H2",{class:!0});var Gs=i(pt);Mt=r(Gs,"A",{id:!0,class:!0,href:!0});var Ed=i(Mt);Pn=r(Ed,"SPAN",{});var Fd=i(Pn);C(Zt.$$.fragment,Fd),Fd.forEach(t),Ed.forEach(t),Oa=d(Gs),xn=r(Gs,"SPAN",{});var qd=i(xn);Ha=s(qd,"CTRLTokenizer"),qd.forEach(t),Gs.forEach(t),Fs=d(o),Ne=r(o,"DIV",{class:!0});var Vt=i(Ne);C(eo.$$.fragment,Vt),Wa=d(Vt),jn=r(Vt,"P",{});var zd=i(jn);Ba=s(zd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),zd.forEach(t),Ua=d(Vt),to=r(Vt,"P",{});var Ks=i(to);Va=s(Ks,"This tokenizer inherits from "),on=r(Ks,"A",{href:!0});var Pd=i(on);Ga=s(Pd,"PreTrainedTokenizer"),Pd.forEach(t),Ka=s(Ks,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ks.forEach(t),Xa=d(Vt),nn=r(Vt,"DIV",{class:!0});var xd=i(nn);C(oo.$$.fragment,xd),xd.forEach(t),Vt.forEach(t),qs=d(o),ut=r(o,"H2",{class:!0});var Xs=i(ut);Et=r(Xs,"A",{id:!0,class:!0,href:!0});var jd=i(Et);Sn=r(jd,"SPAN",{});var Sd=i(Sn);C(no.$$.fragment,Sd),Sd.forEach(t),jd.forEach(t),Ja=d(Xs),In=r(Xs,"SPAN",{});var Id=i(In);Qa=s(Id,"CTRLModel"),Id.forEach(t),Xs.forEach(t),zs=d(o),Le=r(o,"DIV",{class:!0});var Ze=i(Le);C(so.$$.fragment,Ze),Ya=d(Ze),Nn=r(Ze,"P",{});var Nd=i(Nn);Za=s(Nd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Nd.forEach(t),er=d(Ze),ao=r(Ze,"P",{});var Js=i(ao);tr=s(Js,"This model inherits from "),sn=r(Js,"A",{href:!0});var Dd=i(sn);or=s(Dd,"PreTrainedModel"),Dd.forEach(t),nr=s(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Js.forEach(t),sr=d(Ze),ro=r(Ze,"P",{});var Qs=i(ro);ar=s(Qs,"This model is also a PyTorch "),io=r(Qs,"A",{href:!0,rel:!0});var Ad=i(io);rr=s(Ad,"torch.nn.Module"),Ad.forEach(t),ir=s(Qs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qs.forEach(t),lr=d(Ze),Pe=r(Ze,"DIV",{class:!0});var et=i(Pe);C(lo.$$.fragment,et),dr=d(et),mt=r(et,"P",{});var Cn=i(mt);cr=s(Cn,"The "),an=r(Cn,"A",{href:!0});var Od=i(an);hr=s(Od,"CTRLModel"),Od.forEach(t),pr=s(Cn," forward method, overrides the "),Dn=r(Cn,"CODE",{});var Hd=i(Dn);ur=s(Hd,"__call__"),Hd.forEach(t),mr=s(Cn," special method."),Cn.forEach(t),fr=d(et),C(Ft.$$.fragment,et),gr=d(et),An=r(et,"P",{});var Wd=i(An);_r=s(Wd,"Example:"),Wd.forEach(t),Tr=d(et),C(co.$$.fragment,et),et.forEach(t),Ze.forEach(t),Ps=d(o),ft=r(o,"H2",{class:!0});var Ys=i(ft);qt=r(Ys,"A",{id:!0,class:!0,href:!0});var Bd=i(qt);On=r(Bd,"SPAN",{});var Ud=i(On);C(ho.$$.fragment,Ud),Ud.forEach(t),Bd.forEach(t),vr=d(Ys),Hn=r(Ys,"SPAN",{});var Vd=i(Hn);kr=s(Vd,"CTRLLMHeadModel"),Vd.forEach(t),Ys.forEach(t),xs=d(o),$e=r(o,"DIV",{class:!0});var tt=i($e);C(po.$$.fragment,tt),br=d(tt),Wn=r(tt,"P",{});var Gd=i(Wn);Cr=s(Gd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Gd.forEach(t),yr=d(tt),uo=r(tt,"P",{});var Zs=i(uo);wr=s(Zs,"This model inherits from "),rn=r(Zs,"A",{href:!0});var Kd=i(rn);Lr=s(Kd,"PreTrainedModel"),Kd.forEach(t),$r=s(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs.forEach(t),Rr=d(tt),mo=r(tt,"P",{});var ea=i(mo);Mr=s(ea,"This model is also a PyTorch "),fo=r(ea,"A",{href:!0,rel:!0});var Xd=i(fo);Er=s(Xd,"torch.nn.Module"),Xd.forEach(t),Fr=s(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(t),qr=d(tt),xe=r(tt,"DIV",{class:!0});var ot=i(xe);C(go.$$.fragment,ot),zr=d(ot),gt=r(ot,"P",{});var yn=i(gt);Pr=s(yn,"The "),ln=r(yn,"A",{href:!0});var Jd=i(ln);xr=s(Jd,"CTRLLMHeadModel"),Jd.forEach(t),jr=s(yn," forward method, overrides the "),Bn=r(yn,"CODE",{});var Qd=i(Bn);Sr=s(Qd,"__call__"),Qd.forEach(t),Ir=s(yn," special method."),yn.forEach(t),Nr=d(ot),C(zt.$$.fragment,ot),Dr=d(ot),Un=r(ot,"P",{});var Yd=i(Un);Ar=s(Yd,"Example:"),Yd.forEach(t),Or=d(ot),C(_o.$$.fragment,ot),ot.forEach(t),tt.forEach(t),js=d(o),_t=r(o,"H2",{class:!0});var ta=i(_t);Pt=r(ta,"A",{id:!0,class:!0,href:!0});var Zd=i(Pt);Vn=r(Zd,"SPAN",{});var ec=i(Vn);C(To.$$.fragment,ec),ec.forEach(t),Zd.forEach(t),Hr=d(ta),Gn=r(ta,"SPAN",{});var tc=i(Gn);Wr=s(tc,"CTRLForSequenceClassification"),tc.forEach(t),ta.forEach(t),Ss=d(o),Re=r(o,"DIV",{class:!0});var nt=i(Re);C(vo.$$.fragment,nt),Br=d(nt),Me=r(nt,"P",{});var Ve=i(Me);Ur=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),dn=r(Ve,"A",{href:!0});var oc=i(dn);Vr=s(oc,"CTRLForSequenceClassification"),oc.forEach(t),Gr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Kn=r(Ve,"CODE",{});var nc=i(Kn);Kr=s(nc,"pad_token_id"),nc.forEach(t),Xr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Xn=r(Ve,"CODE",{});var sc=i(Xn);Jr=s(sc,"pad_token_id"),sc.forEach(t),Qr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Jn=r(Ve,"CODE",{});var ac=i(Jn);Yr=s(ac,"inputs_embeds"),ac.forEach(t),Zr=s(Ve," are passed instead of "),Qn=r(Ve,"CODE",{});var rc=i(Qn);ei=s(rc,"input_ids"),rc.forEach(t),ti=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),oi=d(nt),ko=r(nt,"P",{});var oa=i(ko);ni=s(oa,"This model inherits from "),cn=r(oa,"A",{href:!0});var ic=i(cn);si=s(ic,"PreTrainedModel"),ic.forEach(t),ai=s(oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oa.forEach(t),ri=d(nt),bo=r(nt,"P",{});var na=i(bo);ii=s(na,"This model is also a PyTorch "),Co=r(na,"A",{href:!0,rel:!0});var lc=i(Co);li=s(lc,"torch.nn.Module"),lc.forEach(t),di=s(na,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),na.forEach(t),ci=d(nt),B=r(nt,"DIV",{class:!0});var le=i(B);C(yo.$$.fragment,le),hi=d(le),Tt=r(le,"P",{});var wn=i(Tt);pi=s(wn,"The "),hn=r(wn,"A",{href:!0});var dc=i(hn);ui=s(dc,"CTRLForSequenceClassification"),dc.forEach(t),mi=s(wn," forward method, overrides the "),Yn=r(wn,"CODE",{});var cc=i(Yn);fi=s(cc,"__call__"),cc.forEach(t),gi=s(wn," special method."),wn.forEach(t),_i=d(le),C(xt.$$.fragment,le),Ti=d(le),Zn=r(le,"P",{});var hc=i(Zn);vi=s(hc,"Example of single-label classification:"),hc.forEach(t),ki=d(le),C(wo.$$.fragment,le),bi=d(le),C(Lo.$$.fragment,le),Ci=d(le),es=r(le,"P",{});var pc=i(es);yi=s(pc,"Example of multi-label classification:"),pc.forEach(t),wi=d(le),C($o.$$.fragment,le),Li=d(le),C(Ro.$$.fragment,le),le.forEach(t),nt.forEach(t),Is=d(o),vt=r(o,"H2",{class:!0});var sa=i(vt);jt=r(sa,"A",{id:!0,class:!0,href:!0});var uc=i(jt);ts=r(uc,"SPAN",{});var mc=i(ts);C(Mo.$$.fragment,mc),mc.forEach(t),uc.forEach(t),$i=d(sa),os=r(sa,"SPAN",{});var fc=i(os);Ri=s(fc,"TFCTRLModel"),fc.forEach(t),sa.forEach(t),Ns=d(o),de=r(o,"DIV",{class:!0});var Ge=i(de);C(Eo.$$.fragment,Ge),Mi=d(Ge),ns=r(Ge,"P",{});var gc=i(ns);Ei=s(gc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),gc.forEach(t),Fi=d(Ge),Fo=r(Ge,"P",{});var aa=i(Fo);qi=s(aa,"This model inherits from "),pn=r(aa,"A",{href:!0});var _c=i(pn);zi=s(_c,"TFPreTrainedModel"),_c.forEach(t),Pi=s(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(t),xi=d(Ge),qo=r(Ge,"P",{});var ra=i(qo);ji=s(ra,"This model is also a "),zo=r(ra,"A",{href:!0,rel:!0});var Tc=i(zo);Si=s(Tc,"tf.keras.Model"),Tc.forEach(t),Ii=s(ra,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ra.forEach(t),Ni=d(Ge),C(St.$$.fragment,Ge),Di=d(Ge),je=r(Ge,"DIV",{class:!0});var st=i(je);C(Po.$$.fragment,st),Ai=d(st),kt=r(st,"P",{});var Ln=i(kt);Oi=s(Ln,"The "),un=r(Ln,"A",{href:!0});var vc=i(un);Hi=s(vc,"TFCTRLModel"),vc.forEach(t),Wi=s(Ln," forward method, overrides the "),ss=r(Ln,"CODE",{});var kc=i(ss);Bi=s(kc,"__call__"),kc.forEach(t),Ui=s(Ln," special method."),Ln.forEach(t),Vi=d(st),C(It.$$.fragment,st),Gi=d(st),as=r(st,"P",{});var bc=i(as);Ki=s(bc,"Example:"),bc.forEach(t),Xi=d(st),C(xo.$$.fragment,st),st.forEach(t),Ge.forEach(t),Ds=d(o),bt=r(o,"H2",{class:!0});var ia=i(bt);Nt=r(ia,"A",{id:!0,class:!0,href:!0});var Cc=i(Nt);rs=r(Cc,"SPAN",{});var yc=i(rs);C(jo.$$.fragment,yc),yc.forEach(t),Cc.forEach(t),Ji=d(ia),is=r(ia,"SPAN",{});var wc=i(is);Qi=s(wc,"TFCTRLLMHeadModel"),wc.forEach(t),ia.forEach(t),As=d(o),ce=r(o,"DIV",{class:!0});var Ke=i(ce);C(So.$$.fragment,Ke),Yi=d(Ke),ls=r(Ke,"P",{});var Lc=i(ls);Zi=s(Lc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Lc.forEach(t),el=d(Ke),Io=r(Ke,"P",{});var la=i(Io);tl=s(la,"This model inherits from "),mn=r(la,"A",{href:!0});var $c=i(mn);ol=s($c,"TFPreTrainedModel"),$c.forEach(t),nl=s(la,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),la.forEach(t),sl=d(Ke),No=r(Ke,"P",{});var da=i(No);al=s(da,"This model is also a "),Do=r(da,"A",{href:!0,rel:!0});var Rc=i(Do);rl=s(Rc,"tf.keras.Model"),Rc.forEach(t),il=s(da,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),da.forEach(t),ll=d(Ke),C(Dt.$$.fragment,Ke),dl=d(Ke),Se=r(Ke,"DIV",{class:!0});var at=i(Se);C(Ao.$$.fragment,at),cl=d(at),Ct=r(at,"P",{});var $n=i(Ct);hl=s($n,"The "),fn=r($n,"A",{href:!0});var Mc=i(fn);pl=s(Mc,"TFCTRLLMHeadModel"),Mc.forEach(t),ul=s($n," forward method, overrides the "),ds=r($n,"CODE",{});var Ec=i(ds);ml=s(Ec,"__call__"),Ec.forEach(t),fl=s($n," special method."),$n.forEach(t),gl=d(at),C(At.$$.fragment,at),_l=d(at),cs=r(at,"P",{});var Fc=i(cs);Tl=s(Fc,"Example:"),Fc.forEach(t),vl=d(at),C(Oo.$$.fragment,at),at.forEach(t),Ke.forEach(t),Os=d(o),yt=r(o,"H2",{class:!0});var ca=i(yt);Ot=r(ca,"A",{id:!0,class:!0,href:!0});var qc=i(Ot);hs=r(qc,"SPAN",{});var zc=i(hs);C(Ho.$$.fragment,zc),zc.forEach(t),qc.forEach(t),kl=d(ca),ps=r(ca,"SPAN",{});var Pc=i(ps);bl=s(Pc,"TFCTRLForSequenceClassification"),Pc.forEach(t),ca.forEach(t),Hs=d(o),X=r(o,"DIV",{class:!0});var fe=i(X);C(Wo.$$.fragment,fe),Cl=d(fe),us=r(fe,"P",{});var xc=i(us);yl=s(xc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),xc.forEach(t),wl=d(fe),gn=r(fe,"P",{});var nd=i(gn);_n=r(nd,"A",{href:!0});var jc=i(_n);Ll=s(jc,"TFCTRLForSequenceClassification"),jc.forEach(t),$l=s(nd,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),nd.forEach(t),Rl=d(fe),De=r(fe,"P",{});var rt=i(De);Ml=s(rt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ms=r(rt,"CODE",{});var Sc=i(ms);El=s(Sc,"pad_token_id"),Sc.forEach(t),Fl=s(rt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),fs=r(rt,"CODE",{});var Ic=i(fs);ql=s(Ic,"pad_token_id"),Ic.forEach(t),zl=s(rt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),gs=r(rt,"CODE",{});var Nc=i(gs);Pl=s(Nc,"inputs_embeds"),Nc.forEach(t),xl=s(rt," are passed instead of "),_s=r(rt,"CODE",{});var Dc=i(_s);jl=s(Dc,"input_ids"),Dc.forEach(t),Sl=s(rt,`, it does the same (take the last value in
each row of the batch).`),rt.forEach(t),Il=d(fe),Bo=r(fe,"P",{});var ha=i(Bo);Nl=s(ha,"This model inherits from "),Tn=r(ha,"A",{href:!0});var Ac=i(Tn);Dl=s(Ac,"TFPreTrainedModel"),Ac.forEach(t),Al=s(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(t),Ol=d(fe),Uo=r(fe,"P",{});var pa=i(Uo);Hl=s(pa,"This model is also a "),Vo=r(pa,"A",{href:!0,rel:!0});var Oc=i(Vo);Wl=s(Oc,"tf.keras.Model"),Oc.forEach(t),Bl=s(pa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pa.forEach(t),Ul=d(fe),C(Ht.$$.fragment,fe),Vl=d(fe),Ie=r(fe,"DIV",{class:!0});var it=i(Ie);C(Go.$$.fragment,it),Gl=d(it),wt=r(it,"P",{});var Rn=i(wt);Kl=s(Rn,"The "),vn=r(Rn,"A",{href:!0});var Hc=i(vn);Xl=s(Hc,"TFCTRLForSequenceClassification"),Hc.forEach(t),Jl=s(Rn," forward method, overrides the "),Ts=r(Rn,"CODE",{});var Wc=i(Ts);Ql=s(Wc,"__call__"),Wc.forEach(t),Yl=s(Rn," special method."),Rn.forEach(t),Zl=d(it),C(Wt.$$.fragment,it),ed=d(it),vs=r(it,"P",{});var Bc=i(vs);td=s(Bc,"Example:"),Bc.forEach(t),od=d(it),C(Ko.$$.fragment,it),it.forEach(t),fe.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(rh)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(f,"class","relative group"),c(Q,"id","overview"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#overview"),c(R,"class","relative group"),c(ee,"href","https://arxiv.org/abs/1909.05858"),c(ee,"rel","nofollow"),c(oe,"href","https://github.com/salesforce/ctrl"),c(oe,"rel","nofollow"),c(Qo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Rt,"id","transformers.CTRLConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLConfig"),c(ct,"class","relative group"),c(Yo,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),c(Zo,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(en,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(tn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(we,"class","docstring"),c(Mt,"id","transformers.CTRLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLTokenizer"),c(pt,"class","relative group"),c(on,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(nn,"class","docstring"),c(Ne,"class","docstring"),c(Et,"id","transformers.CTRLModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLModel"),c(ut,"class","relative group"),c(sn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(an,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),c(Pe,"class","docstring"),c(Le,"class","docstring"),c(qt,"id","transformers.CTRLLMHeadModel"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(rn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(ln,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(xe,"class","docstring"),c($e,"class","docstring"),c(Pt,"id","transformers.CTRLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.CTRLForSequenceClassification"),c(_t,"class","relative group"),c(dn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(cn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Co,"rel","nofollow"),c(hn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(B,"class","docstring"),c(Re,"class","docstring"),c(jt,"id","transformers.TFCTRLModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFCTRLModel"),c(vt,"class","relative group"),c(pn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zo,"rel","nofollow"),c(un,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),c(je,"class","docstring"),c(de,"class","docstring"),c(Nt,"id","transformers.TFCTRLLMHeadModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFCTRLLMHeadModel"),c(bt,"class","relative group"),c(mn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Do,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Do,"rel","nofollow"),c(fn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(Se,"class","docstring"),c(ce,"class","docstring"),c(Ot,"id","transformers.TFCTRLForSequenceClassification"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFCTRLForSequenceClassification"),c(yt,"class","relative group"),c(_n,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(Tn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vo,"rel","nofollow"),c(vn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(Ie,"class","docstring"),c(X,"class","docstring")},m(o,m){e(document.head,p),u(o,E,m),u(o,f,m),e(f,g),e(g,v),y(T,v,null),e(f,_),e(f,M),e(M,ge),u(o,Y,m),u(o,R,m),e(R,Q),e(Q,A),y(Z,A,null),e(R,_e),e(R,O),e(O,Te),u(o,he,m),u(o,x,m),e(x,j),e(x,ee),e(ee,ne),e(x,F),e(x,q),e(q,ve),e(x,U),u(o,pe,m),u(o,se,m),e(se,V),u(o,ue,m),u(o,ae,m),e(ae,z),e(z,ke),u(o,H,m),u(o,re,m),e(re,be),u(o,W,m),u(o,S,m),e(S,te),e(te,I),e(te,oe),e(oe,G),e(te,Ce),e(S,h),e(S,k),e(k,ie),e(S,Ae),e(S,me),e(me,N),e(me,Fe),e(Fe,Oe),e(me,He),e(S,D),e(S,P),e(P,We),e(P,qe),e(qe,K),e(P,Be),e(P,ze),e(ze,ye),e(P,Ue),e(P,Mn),e(Mn,ua),e(P,ma),e(P,Qo),e(Qo,En),e(En,fa),e(P,ga),u(o,$s,m),u(o,Je,m),e(Je,_a),e(Je,Gt),e(Gt,Ta),e(Je,va),e(Je,Kt),e(Kt,ka),e(Je,ba),u(o,Rs,m),u(o,ct,m),e(ct,Rt),e(Rt,Fn),y(Xt,Fn,null),e(ct,Ca),e(ct,qn),e(qn,ya),u(o,Ms,m),u(o,we,m),y(Jt,we,null),e(we,wa),e(we,Xe),e(Xe,La),e(Xe,Yo),e(Yo,$a),e(Xe,Ra),e(Xe,Zo),e(Zo,Ma),e(Xe,Ea),e(Xe,Qt),e(Qt,Fa),e(Xe,qa),e(we,za),e(we,ht),e(ht,Pa),e(ht,en),e(en,xa),e(ht,ja),e(ht,tn),e(tn,Sa),e(ht,Ia),e(we,Na),e(we,zn),e(zn,Da),e(we,Aa),y(Yt,we,null),u(o,Es,m),u(o,pt,m),e(pt,Mt),e(Mt,Pn),y(Zt,Pn,null),e(pt,Oa),e(pt,xn),e(xn,Ha),u(o,Fs,m),u(o,Ne,m),y(eo,Ne,null),e(Ne,Wa),e(Ne,jn),e(jn,Ba),e(Ne,Ua),e(Ne,to),e(to,Va),e(to,on),e(on,Ga),e(to,Ka),e(Ne,Xa),e(Ne,nn),y(oo,nn,null),u(o,qs,m),u(o,ut,m),e(ut,Et),e(Et,Sn),y(no,Sn,null),e(ut,Ja),e(ut,In),e(In,Qa),u(o,zs,m),u(o,Le,m),y(so,Le,null),e(Le,Ya),e(Le,Nn),e(Nn,Za),e(Le,er),e(Le,ao),e(ao,tr),e(ao,sn),e(sn,or),e(ao,nr),e(Le,sr),e(Le,ro),e(ro,ar),e(ro,io),e(io,rr),e(ro,ir),e(Le,lr),e(Le,Pe),y(lo,Pe,null),e(Pe,dr),e(Pe,mt),e(mt,cr),e(mt,an),e(an,hr),e(mt,pr),e(mt,Dn),e(Dn,ur),e(mt,mr),e(Pe,fr),y(Ft,Pe,null),e(Pe,gr),e(Pe,An),e(An,_r),e(Pe,Tr),y(co,Pe,null),u(o,Ps,m),u(o,ft,m),e(ft,qt),e(qt,On),y(ho,On,null),e(ft,vr),e(ft,Hn),e(Hn,kr),u(o,xs,m),u(o,$e,m),y(po,$e,null),e($e,br),e($e,Wn),e(Wn,Cr),e($e,yr),e($e,uo),e(uo,wr),e(uo,rn),e(rn,Lr),e(uo,$r),e($e,Rr),e($e,mo),e(mo,Mr),e(mo,fo),e(fo,Er),e(mo,Fr),e($e,qr),e($e,xe),y(go,xe,null),e(xe,zr),e(xe,gt),e(gt,Pr),e(gt,ln),e(ln,xr),e(gt,jr),e(gt,Bn),e(Bn,Sr),e(gt,Ir),e(xe,Nr),y(zt,xe,null),e(xe,Dr),e(xe,Un),e(Un,Ar),e(xe,Or),y(_o,xe,null),u(o,js,m),u(o,_t,m),e(_t,Pt),e(Pt,Vn),y(To,Vn,null),e(_t,Hr),e(_t,Gn),e(Gn,Wr),u(o,Ss,m),u(o,Re,m),y(vo,Re,null),e(Re,Br),e(Re,Me),e(Me,Ur),e(Me,dn),e(dn,Vr),e(Me,Gr),e(Me,Kn),e(Kn,Kr),e(Me,Xr),e(Me,Xn),e(Xn,Jr),e(Me,Qr),e(Me,Jn),e(Jn,Yr),e(Me,Zr),e(Me,Qn),e(Qn,ei),e(Me,ti),e(Re,oi),e(Re,ko),e(ko,ni),e(ko,cn),e(cn,si),e(ko,ai),e(Re,ri),e(Re,bo),e(bo,ii),e(bo,Co),e(Co,li),e(bo,di),e(Re,ci),e(Re,B),y(yo,B,null),e(B,hi),e(B,Tt),e(Tt,pi),e(Tt,hn),e(hn,ui),e(Tt,mi),e(Tt,Yn),e(Yn,fi),e(Tt,gi),e(B,_i),y(xt,B,null),e(B,Ti),e(B,Zn),e(Zn,vi),e(B,ki),y(wo,B,null),e(B,bi),y(Lo,B,null),e(B,Ci),e(B,es),e(es,yi),e(B,wi),y($o,B,null),e(B,Li),y(Ro,B,null),u(o,Is,m),u(o,vt,m),e(vt,jt),e(jt,ts),y(Mo,ts,null),e(vt,$i),e(vt,os),e(os,Ri),u(o,Ns,m),u(o,de,m),y(Eo,de,null),e(de,Mi),e(de,ns),e(ns,Ei),e(de,Fi),e(de,Fo),e(Fo,qi),e(Fo,pn),e(pn,zi),e(Fo,Pi),e(de,xi),e(de,qo),e(qo,ji),e(qo,zo),e(zo,Si),e(qo,Ii),e(de,Ni),y(St,de,null),e(de,Di),e(de,je),y(Po,je,null),e(je,Ai),e(je,kt),e(kt,Oi),e(kt,un),e(un,Hi),e(kt,Wi),e(kt,ss),e(ss,Bi),e(kt,Ui),e(je,Vi),y(It,je,null),e(je,Gi),e(je,as),e(as,Ki),e(je,Xi),y(xo,je,null),u(o,Ds,m),u(o,bt,m),e(bt,Nt),e(Nt,rs),y(jo,rs,null),e(bt,Ji),e(bt,is),e(is,Qi),u(o,As,m),u(o,ce,m),y(So,ce,null),e(ce,Yi),e(ce,ls),e(ls,Zi),e(ce,el),e(ce,Io),e(Io,tl),e(Io,mn),e(mn,ol),e(Io,nl),e(ce,sl),e(ce,No),e(No,al),e(No,Do),e(Do,rl),e(No,il),e(ce,ll),y(Dt,ce,null),e(ce,dl),e(ce,Se),y(Ao,Se,null),e(Se,cl),e(Se,Ct),e(Ct,hl),e(Ct,fn),e(fn,pl),e(Ct,ul),e(Ct,ds),e(ds,ml),e(Ct,fl),e(Se,gl),y(At,Se,null),e(Se,_l),e(Se,cs),e(cs,Tl),e(Se,vl),y(Oo,Se,null),u(o,Os,m),u(o,yt,m),e(yt,Ot),e(Ot,hs),y(Ho,hs,null),e(yt,kl),e(yt,ps),e(ps,bl),u(o,Hs,m),u(o,X,m),y(Wo,X,null),e(X,Cl),e(X,us),e(us,yl),e(X,wl),e(X,gn),e(gn,_n),e(_n,Ll),e(gn,$l),e(X,Rl),e(X,De),e(De,Ml),e(De,ms),e(ms,El),e(De,Fl),e(De,fs),e(fs,ql),e(De,zl),e(De,gs),e(gs,Pl),e(De,xl),e(De,_s),e(_s,jl),e(De,Sl),e(X,Il),e(X,Bo),e(Bo,Nl),e(Bo,Tn),e(Tn,Dl),e(Bo,Al),e(X,Ol),e(X,Uo),e(Uo,Hl),e(Uo,Vo),e(Vo,Wl),e(Uo,Bl),e(X,Ul),y(Ht,X,null),e(X,Vl),e(X,Ie),y(Go,Ie,null),e(Ie,Gl),e(Ie,wt),e(wt,Kl),e(wt,vn),e(vn,Xl),e(wt,Jl),e(wt,Ts),e(Ts,Ql),e(wt,Yl),e(Ie,Zl),y(Wt,Ie,null),e(Ie,ed),e(Ie,vs),e(vs,td),e(Ie,od),y(Ko,Ie,null),Ws=!0},p(o,[m]){const Xo={};m&2&&(Xo.$$scope={dirty:m,ctx:o}),Ft.$set(Xo);const ks={};m&2&&(ks.$$scope={dirty:m,ctx:o}),zt.$set(ks);const bs={};m&2&&(bs.$$scope={dirty:m,ctx:o}),xt.$set(bs);const Cs={};m&2&&(Cs.$$scope={dirty:m,ctx:o}),St.$set(Cs);const Jo={};m&2&&(Jo.$$scope={dirty:m,ctx:o}),It.$set(Jo);const ys={};m&2&&(ys.$$scope={dirty:m,ctx:o}),Dt.$set(ys);const ws={};m&2&&(ws.$$scope={dirty:m,ctx:o}),At.$set(ws);const Ls={};m&2&&(Ls.$$scope={dirty:m,ctx:o}),Ht.$set(Ls);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:o}),Wt.$set(Lt)},i(o){Ws||(w(T.$$.fragment,o),w(Z.$$.fragment,o),w(Xt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(lo.$$.fragment,o),w(Ft.$$.fragment,o),w(co.$$.fragment,o),w(ho.$$.fragment,o),w(po.$$.fragment,o),w(go.$$.fragment,o),w(zt.$$.fragment,o),w(_o.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(yo.$$.fragment,o),w(xt.$$.fragment,o),w(wo.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Ro.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(St.$$.fragment,o),w(Po.$$.fragment,o),w(It.$$.fragment,o),w(xo.$$.fragment,o),w(jo.$$.fragment,o),w(So.$$.fragment,o),w(Dt.$$.fragment,o),w(Ao.$$.fragment,o),w(At.$$.fragment,o),w(Oo.$$.fragment,o),w(Ho.$$.fragment,o),w(Wo.$$.fragment,o),w(Ht.$$.fragment,o),w(Go.$$.fragment,o),w(Wt.$$.fragment,o),w(Ko.$$.fragment,o),Ws=!0)},o(o){L(T.$$.fragment,o),L(Z.$$.fragment,o),L(Xt.$$.fragment,o),L(Jt.$$.fragment,o),L(Yt.$$.fragment,o),L(Zt.$$.fragment,o),L(eo.$$.fragment,o),L(oo.$$.fragment,o),L(no.$$.fragment,o),L(so.$$.fragment,o),L(lo.$$.fragment,o),L(Ft.$$.fragment,o),L(co.$$.fragment,o),L(ho.$$.fragment,o),L(po.$$.fragment,o),L(go.$$.fragment,o),L(zt.$$.fragment,o),L(_o.$$.fragment,o),L(To.$$.fragment,o),L(vo.$$.fragment,o),L(yo.$$.fragment,o),L(xt.$$.fragment,o),L(wo.$$.fragment,o),L(Lo.$$.fragment,o),L($o.$$.fragment,o),L(Ro.$$.fragment,o),L(Mo.$$.fragment,o),L(Eo.$$.fragment,o),L(St.$$.fragment,o),L(Po.$$.fragment,o),L(It.$$.fragment,o),L(xo.$$.fragment,o),L(jo.$$.fragment,o),L(So.$$.fragment,o),L(Dt.$$.fragment,o),L(Ao.$$.fragment,o),L(At.$$.fragment,o),L(Oo.$$.fragment,o),L(Ho.$$.fragment,o),L(Wo.$$.fragment,o),L(Ht.$$.fragment,o),L(Go.$$.fragment,o),L(Wt.$$.fragment,o),L(Ko.$$.fragment,o),Ws=!1},d(o){t(p),o&&t(E),o&&t(f),$(T),o&&t(Y),o&&t(R),$(Z),o&&t(he),o&&t(x),o&&t(pe),o&&t(se),o&&t(ue),o&&t(ae),o&&t(H),o&&t(re),o&&t(W),o&&t(S),o&&t($s),o&&t(Je),o&&t(Rs),o&&t(ct),$(Xt),o&&t(Ms),o&&t(we),$(Jt),$(Yt),o&&t(Es),o&&t(pt),$(Zt),o&&t(Fs),o&&t(Ne),$(eo),$(oo),o&&t(qs),o&&t(ut),$(no),o&&t(zs),o&&t(Le),$(so),$(lo),$(Ft),$(co),o&&t(Ps),o&&t(ft),$(ho),o&&t(xs),o&&t($e),$(po),$(go),$(zt),$(_o),o&&t(js),o&&t(_t),$(To),o&&t(Ss),o&&t(Re),$(vo),$(yo),$(xt),$(wo),$(Lo),$($o),$(Ro),o&&t(Is),o&&t(vt),$(Mo),o&&t(Ns),o&&t(de),$(Eo),$(St),$(Po),$(It),$(xo),o&&t(Ds),o&&t(bt),$(jo),o&&t(As),o&&t(ce),$(So),$(Dt),$(Ao),$(At),$(Oo),o&&t(Os),o&&t(yt),$(Ho),o&&t(Hs),o&&t(X),$(Wo),$(Ht),$(Go),$(Wt),$(Ko)}}}const rh={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function ih(J){return Xc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class uh extends Uc{constructor(p){super();Vc(this,p,ih,ah,Gc,{})}}export{uh as default,rh as metadata};
