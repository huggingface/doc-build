import{S as Hc,i as Oc,s as Wc,e as a,k as l,w as C,t as n,M as Bc,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as u,y as L,q as $,o as R,B as M}from"../../chunks/vendor-4833417e.js";import{T as Lt}from"../../chunks/Tip-fffd6df1.js";import{D as Me}from"../../chunks/Docstring-4f315ed9.js";import{C as Vt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as lt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Uc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Vc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Gc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Kc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,j,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,S,ee,I,te,G,be;return{c(){p=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),y=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),j=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);b=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),E=r(re,"LI",{});var ue=i(E);fe=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),y=r(h,"P",{});var N=i(y);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Ee=i(A);Y=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var Oe=i(j);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Fe=i(V);pe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var qe=i(W);S=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var ye=i(I);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);be=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,b),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,E),e(E,fe),u(h,Q,k),u(h,y,k),e(y,J),e(y,A),e(A,Y),e(y,ge),e(y,H),e(H,_e),e(y,ce),u(h,x,k),u(h,j,k),e(j,Z),u(h,oe,k),u(h,F,k),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,S),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,be)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Q),h&&t(y),h&&t(x),h&&t(j),h&&t(oe),h&&t(F)}}}function Xc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Jc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,j,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,S,ee,I,te,G,be;return{c(){p=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),y=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),j=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);b=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),E=r(re,"LI",{});var ue=i(E);fe=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),y=r(h,"P",{});var N=i(y);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Ee=i(A);Y=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var Oe=i(j);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Fe=i(V);pe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var qe=i(W);S=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var ye=i(I);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);be=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,b),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,E),e(E,fe),u(h,Q,k),u(h,y,k),e(y,J),e(y,A),e(A,Y),e(y,ge),e(y,H),e(H,_e),e(y,ce),u(h,x,k),u(h,j,k),e(j,Z),u(h,oe,k),u(h,F,k),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,S),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,be)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Q),h&&t(y),h&&t(x),h&&t(j),h&&t(oe),h&&t(F)}}}function Qc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Yc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,j,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,S,ee,I,te,G,be;return{c(){p=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),y=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),j=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);b=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),E=r(re,"LI",{});var ue=i(E);fe=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),y=r(h,"P",{});var N=i(y);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Ee=i(A);Y=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),j=r(h,"P",{});var Oe=i(j);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Fe=i(V);pe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var qe=i(W);S=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var ye=i(I);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);be=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,b),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,E),e(E,fe),u(h,Q,k),u(h,y,k),e(y,J),e(y,A),e(A,Y),e(y,ge),e(y,H),e(H,_e),e(y,ce),u(h,x,k),u(h,j,k),e(j,Z),u(h,oe,k),u(h,F,k),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,S),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,be)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Q),h&&t(y),h&&t(x),h&&t(j),h&&t(oe),h&&t(F)}}}function Zc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function eh(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,j,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,S,ee,I,te,G,be,h,k,re,Ae,ue,N,Ee,He,Oe,D,P,We,Fe,K,Be,qe,ye,Ue,$n,ha,pa,Xo,Rn,ua,ma,ws,Je,fa,Gt,ga,_a,Kt,Ta,va,Ls,dt,$t,Mn,Xt,ka,En,ba,$s,Ce,Jt,ya,Xe,Ca,Jo,wa,La,Qo,$a,Ra,Qt,Ma,Ea,Fa,ct,qa,Yo,za,Pa,Zo,xa,ja,Sa,Fn,Ia,Na,Yt,Rs,ht,Rt,qn,Zt,Da,zn,Aa,Ms,Ne,eo,Ha,Pn,Oa,Wa,to,Ba,en,Ua,Va,Ga,tn,oo,Es,pt,Mt,xn,no,Ka,jn,Xa,Fs,we,so,Ja,Sn,Qa,Ya,ao,Za,on,er,tr,or,ro,nr,io,sr,ar,rr,ze,lo,ir,ut,lr,nn,dr,cr,In,hr,pr,ur,Et,mr,Nn,fr,gr,co,qs,mt,Ft,Dn,ho,_r,An,Tr,zs,Le,po,vr,Hn,kr,br,uo,yr,sn,Cr,wr,Lr,mo,$r,fo,Rr,Mr,Er,Pe,go,Fr,ft,qr,an,zr,Pr,On,xr,jr,Sr,qt,Ir,Wn,Nr,Dr,_o,Ps,gt,zt,Bn,To,Ar,Un,Hr,xs,$e,vo,Or,Re,Wr,rn,Br,Ur,Vn,Vr,Gr,Gn,Kr,Xr,Kn,Jr,Qr,Xn,Yr,Zr,ei,ko,ti,ln,oi,ni,si,bo,ai,yo,ri,ii,li,ie,Co,di,_t,ci,dn,hi,pi,Jn,ui,mi,fi,Pt,gi,Qn,_i,Ti,wo,vi,Yn,ki,bi,Lo,js,Tt,xt,Zn,$o,yi,es,Ci,Ss,le,Ro,wi,ts,Li,$i,Mo,Ri,cn,Mi,Ei,Fi,Eo,qi,Fo,zi,Pi,xi,jt,ji,xe,qo,Si,vt,Ii,hn,Ni,Di,os,Ai,Hi,Oi,St,Wi,ns,Bi,Ui,zo,Is,kt,It,ss,Po,Vi,as,Gi,Ns,de,xo,Ki,rs,Xi,Ji,jo,Qi,pn,Yi,Zi,el,So,tl,Io,ol,nl,sl,Nt,al,je,No,rl,bt,il,un,ll,dl,is,cl,hl,pl,Dt,ul,ls,ml,fl,Do,Ds,yt,At,ds,Ao,gl,cs,_l,As,X,Ho,Tl,hs,vl,kl,mn,fn,bl,yl,Cl,De,wl,ps,Ll,$l,us,Rl,Ml,ms,El,Fl,fs,ql,zl,Pl,Oo,xl,gn,jl,Sl,Il,Wo,Nl,Bo,Dl,Al,Hl,Ht,Ol,Se,Uo,Wl,Ct,Bl,_n,Ul,Vl,gs,Gl,Kl,Xl,Ot,Jl,_s,Ql,Yl,Vo,Hs;return T=new lt({}),Y=new lt({}),Xt=new lt({}),Jt=new Me({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLModel, CTRLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CTRL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CTRLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new lt({}),eo=new Me({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Me({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new lt({}),so=new Me({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L321",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Me({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L354",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig"
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
`}}),Et=new Lt({props:{$$slots:{default:[Uc]},$$scope:{ctx:B}}}),co=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ho=new lt({}),po=new Me({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L494",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),go=new Me({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L516",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig"
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
`}}),qt=new Lt({props:{$$slots:{default:[Vc]},$$scope:{ctx:B}}}),_o=new Vt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new lt({}),vo=new Me({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L610",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Me({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L620",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig"
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
`}}),Pt=new Lt({props:{$$slots:{default:[Gc]},$$scope:{ctx:B}}}),wo=new Vt({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

torch.manual_seed(0)
tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),Lo=new Vt({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

torch.manual_seed(0)
tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),$o=new lt({}),Ro=new Me({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L538",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jt=new Lt({props:{$$slots:{default:[Kc]},$$scope:{ctx:B}}}),qo=new Me({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L543",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig"
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
`}}),St=new Lt({props:{$$slots:{default:[Xc]},$$scope:{ctx:B}}}),zo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Po=new lt({}),xo=new Me({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L649",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nt=new Lt({props:{$$slots:{default:[Jc]},$$scope:{ctx:B}}}),No=new Me({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L670",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig"
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
`}}),Dt=new Lt({props:{$$slots:{default:[Qc]},$$scope:{ctx:B}}}),Do=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ao=new lt({}),Ho=new Me({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L784",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new Lt({props:{$$slots:{default:[Yc]},$$scope:{ctx:B}}}),Uo=new Me({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L799",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig"
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
`}}),Ot=new Lt({props:{$$slots:{default:[Zc]},$$scope:{ctx:B}}}),Vo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),b=l(),f=a("h1"),g=a("a"),v=a("span"),C(T.$$.fragment),_=l(),E=a("span"),fe=n("CTRL"),Q=l(),y=a("h2"),J=a("a"),A=a("span"),C(Y.$$.fragment),ge=l(),H=a("span"),_e=n("Overview"),ce=l(),x=a("p"),j=n("CTRL model was proposed in "),Z=a("a"),oe=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),Te=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),he=l(),ne=a("p"),V=n("The abstract from the paper is the following:"),pe=l(),se=a("p"),z=a("em"),ve=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),O=l(),ae=a("p"),ke=n("Tips:"),W=l(),S=a("ul"),ee=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=a("a"),G=n("original implementation"),be=n(` for
more information.`),h=l(),k=a("li"),re=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Ee=a("em"),He=n("run_generation.py"),Oe=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),Fe=a("code"),K=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),qe=a("code"),ye=n("past"),Ue=n(" as input. Using the "),$n=a("code"),ha=n("past_key_values"),pa=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Xo=a("a"),Rn=a("code"),ua=n("forward"),ma=n(`
method for more information on the usage of this argument.`),ws=l(),Je=a("p"),fa=n("This model was contributed by "),Gt=a("a"),ga=n("keskarnitishr"),_a=n(`. The original code can be found
`),Kt=a("a"),Ta=n("here"),va=n("."),Ls=l(),dt=a("h2"),$t=a("a"),Mn=a("span"),C(Xt.$$.fragment),ka=l(),En=a("span"),ba=n("CTRLConfig"),$s=l(),Ce=a("div"),C(Jt.$$.fragment),ya=l(),Xe=a("p"),Ca=n("This is the configuration class to store the configuration of a "),Jo=a("a"),wa=n("CTRLModel"),La=n(" or a "),Qo=a("a"),$a=n("TFCTRLModel"),Ra=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),Ma=n("ctrl"),Ea=n(" architecture from SalesForce."),Fa=l(),ct=a("p"),qa=n("Configuration objects inherit from "),Yo=a("a"),za=n("PretrainedConfig"),Pa=n(` and can be used to control the model outputs. Read the
documentation from `),Zo=a("a"),xa=n("PretrainedConfig"),ja=n(" for more information."),Sa=l(),Fn=a("p"),Ia=n("Examples:"),Na=l(),C(Yt.$$.fragment),Rs=l(),ht=a("h2"),Rt=a("a"),qn=a("span"),C(Zt.$$.fragment),Da=l(),zn=a("span"),Aa=n("CTRLTokenizer"),Ms=l(),Ne=a("div"),C(eo.$$.fragment),Ha=l(),Pn=a("p"),Oa=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Wa=l(),to=a("p"),Ba=n("This tokenizer inherits from "),en=a("a"),Ua=n("PreTrainedTokenizer"),Va=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ga=l(),tn=a("div"),C(oo.$$.fragment),Es=l(),pt=a("h2"),Mt=a("a"),xn=a("span"),C(no.$$.fragment),Ka=l(),jn=a("span"),Xa=n("CTRLModel"),Fs=l(),we=a("div"),C(so.$$.fragment),Ja=l(),Sn=a("p"),Qa=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ya=l(),ao=a("p"),Za=n("This model inherits from "),on=a("a"),er=n("PreTrainedModel"),tr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=l(),ro=a("p"),nr=n("This model is also a PyTorch "),io=a("a"),sr=n("torch.nn.Module"),ar=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rr=l(),ze=a("div"),C(lo.$$.fragment),ir=l(),ut=a("p"),lr=n("The "),nn=a("a"),dr=n("CTRLModel"),cr=n(" forward method, overrides the "),In=a("code"),hr=n("__call__"),pr=n(" special method."),ur=l(),C(Et.$$.fragment),mr=l(),Nn=a("p"),fr=n("Example:"),gr=l(),C(co.$$.fragment),qs=l(),mt=a("h2"),Ft=a("a"),Dn=a("span"),C(ho.$$.fragment),_r=l(),An=a("span"),Tr=n("CTRLLMHeadModel"),zs=l(),Le=a("div"),C(po.$$.fragment),vr=l(),Hn=a("p"),kr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),br=l(),uo=a("p"),yr=n("This model inherits from "),sn=a("a"),Cr=n("PreTrainedModel"),wr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=l(),mo=a("p"),$r=n("This model is also a PyTorch "),fo=a("a"),Rr=n("torch.nn.Module"),Mr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er=l(),Pe=a("div"),C(go.$$.fragment),Fr=l(),ft=a("p"),qr=n("The "),an=a("a"),zr=n("CTRLLMHeadModel"),Pr=n(" forward method, overrides the "),On=a("code"),xr=n("__call__"),jr=n(" special method."),Sr=l(),C(qt.$$.fragment),Ir=l(),Wn=a("p"),Nr=n("Example:"),Dr=l(),C(_o.$$.fragment),Ps=l(),gt=a("h2"),zt=a("a"),Bn=a("span"),C(To.$$.fragment),Ar=l(),Un=a("span"),Hr=n("CTRLForSequenceClassification"),xs=l(),$e=a("div"),C(vo.$$.fragment),Or=l(),Re=a("p"),Wr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),rn=a("a"),Br=n("CTRLForSequenceClassification"),Ur=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Vn=a("code"),Vr=n("pad_token_id"),Gr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Gn=a("code"),Kr=n("pad_token_id"),Xr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Kn=a("code"),Jr=n("inputs_embeds"),Qr=n(" are passed instead of "),Xn=a("code"),Yr=n("input_ids"),Zr=n(`, it does the same (take the last
value in each row of the batch).`),ei=l(),ko=a("p"),ti=n("This model inherits from "),ln=a("a"),oi=n("PreTrainedModel"),ni=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si=l(),bo=a("p"),ai=n("This model is also a PyTorch "),yo=a("a"),ri=n("torch.nn.Module"),ii=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),li=l(),ie=a("div"),C(Co.$$.fragment),di=l(),_t=a("p"),ci=n("The "),dn=a("a"),hi=n("CTRLForSequenceClassification"),pi=n(" forward method, overrides the "),Jn=a("code"),ui=n("__call__"),mi=n(" special method."),fi=l(),C(Pt.$$.fragment),gi=l(),Qn=a("p"),_i=n("Example of single-label classification:"),Ti=l(),C(wo.$$.fragment),vi=l(),Yn=a("p"),ki=n("Example of multi-label classification:"),bi=l(),C(Lo.$$.fragment),js=l(),Tt=a("h2"),xt=a("a"),Zn=a("span"),C($o.$$.fragment),yi=l(),es=a("span"),Ci=n("TFCTRLModel"),Ss=l(),le=a("div"),C(Ro.$$.fragment),wi=l(),ts=a("p"),Li=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),$i=l(),Mo=a("p"),Ri=n("This model inherits from "),cn=a("a"),Mi=n("TFPreTrainedModel"),Ei=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fi=l(),Eo=a("p"),qi=n("This model is also a "),Fo=a("a"),zi=n("tf.keras.Model"),Pi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xi=l(),C(jt.$$.fragment),ji=l(),xe=a("div"),C(qo.$$.fragment),Si=l(),vt=a("p"),Ii=n("The "),hn=a("a"),Ni=n("TFCTRLModel"),Di=n(" forward method, overrides the "),os=a("code"),Ai=n("__call__"),Hi=n(" special method."),Oi=l(),C(St.$$.fragment),Wi=l(),ns=a("p"),Bi=n("Example:"),Ui=l(),C(zo.$$.fragment),Is=l(),kt=a("h2"),It=a("a"),ss=a("span"),C(Po.$$.fragment),Vi=l(),as=a("span"),Gi=n("TFCTRLLMHeadModel"),Ns=l(),de=a("div"),C(xo.$$.fragment),Ki=l(),rs=a("p"),Xi=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ji=l(),jo=a("p"),Qi=n("This model inherits from "),pn=a("a"),Yi=n("TFPreTrainedModel"),Zi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el=l(),So=a("p"),tl=n("This model is also a "),Io=a("a"),ol=n("tf.keras.Model"),nl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sl=l(),C(Nt.$$.fragment),al=l(),je=a("div"),C(No.$$.fragment),rl=l(),bt=a("p"),il=n("The "),un=a("a"),ll=n("TFCTRLLMHeadModel"),dl=n(" forward method, overrides the "),is=a("code"),cl=n("__call__"),hl=n(" special method."),pl=l(),C(Dt.$$.fragment),ul=l(),ls=a("p"),ml=n("Example:"),fl=l(),C(Do.$$.fragment),Ds=l(),yt=a("h2"),At=a("a"),ds=a("span"),C(Ao.$$.fragment),gl=l(),cs=a("span"),_l=n("TFCTRLForSequenceClassification"),As=l(),X=a("div"),C(Ho.$$.fragment),Tl=l(),hs=a("p"),vl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),kl=l(),mn=a("p"),fn=a("a"),bl=n("TFCTRLForSequenceClassification"),yl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Cl=l(),De=a("p"),wl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ps=a("code"),Ll=n("pad_token_id"),$l=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),us=a("code"),Rl=n("pad_token_id"),Ml=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ms=a("code"),El=n("inputs_embeds"),Fl=n(" are passed instead of "),fs=a("code"),ql=n("input_ids"),zl=n(`, it does the same (take the last value in
each row of the batch).`),Pl=l(),Oo=a("p"),xl=n("This model inherits from "),gn=a("a"),jl=n("TFPreTrainedModel"),Sl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il=l(),Wo=a("p"),Nl=n("This model is also a "),Bo=a("a"),Dl=n("tf.keras.Model"),Al=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hl=l(),C(Ht.$$.fragment),Ol=l(),Se=a("div"),C(Uo.$$.fragment),Wl=l(),Ct=a("p"),Bl=n("The "),_n=a("a"),Ul=n("TFCTRLForSequenceClassification"),Vl=n(" forward method, overrides the "),gs=a("code"),Gl=n("__call__"),Kl=n(" special method."),Xl=l(),C(Ot.$$.fragment),Jl=l(),_s=a("p"),Ql=n("Example:"),Yl=l(),C(Vo.$$.fragment),this.h()},l(o){const m=Bc('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),b=d(o),f=r(o,"H1",{class:!0});var Go=i(f);g=r(Go,"A",{id:!0,class:!0,href:!0});var Ts=i(g);v=r(Ts,"SPAN",{});var vs=i(v);w(T.$$.fragment,vs),vs.forEach(t),Ts.forEach(t),_=d(Go),E=r(Go,"SPAN",{});var ks=i(E);fe=s(ks,"CTRL"),ks.forEach(t),Go.forEach(t),Q=d(o),y=r(o,"H2",{class:!0});var Ko=i(y);J=r(Ko,"A",{id:!0,class:!0,href:!0});var bs=i(J);A=r(bs,"SPAN",{});var ys=i(A);w(Y.$$.fragment,ys),ys.forEach(t),bs.forEach(t),ge=d(Ko),H=r(Ko,"SPAN",{});var Cs=i(H);_e=s(Cs,"Overview"),Cs.forEach(t),Ko.forEach(t),ce=d(o),x=r(o,"P",{});var wt=i(x);j=s(wt,"CTRL model was proposed in "),Z=r(wt,"A",{href:!0,rel:!0});var ed=i(Z);oe=s(ed,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),ed.forEach(t),F=s(wt," by Nitish Shirish Keskar"),q=r(wt,"EM",{});var td=i(q);Te=s(td,", Bryan McCann"),td.forEach(t),U=s(wt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),wt.forEach(t),he=d(o),ne=r(o,"P",{});var od=i(ne);V=s(od,"The abstract from the paper is the following:"),od.forEach(t),pe=d(o),se=r(o,"P",{});var nd=i(se);z=r(nd,"EM",{});var sd=i(z);ve=s(sd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),sd.forEach(t),nd.forEach(t),O=d(o),ae=r(o,"P",{});var ad=i(ae);ke=s(ad,"Tips:"),ad.forEach(t),W=d(o),S=r(o,"UL",{});var Wt=i(S);ee=r(Wt,"LI",{});var Os=i(ee);I=s(Os,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=r(Os,"A",{href:!0,rel:!0});var rd=i(te);G=s(rd,"original implementation"),rd.forEach(t),be=s(Os,` for
more information.`),Os.forEach(t),h=d(Wt),k=r(Wt,"LI",{});var id=i(k);re=s(id,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),id.forEach(t),Ae=d(Wt),ue=r(Wt,"LI",{});var Ws=i(ue);N=s(Ws,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Ee=r(Ws,"EM",{});var ld=i(Ee);He=s(ld,"run_generation.py"),ld.forEach(t),Oe=s(Ws," example script."),Ws.forEach(t),D=d(Wt),P=r(Wt,"LI",{});var Qe=i(P);We=s(Qe,"The PyTorch models can take the "),Fe=r(Qe,"CODE",{});var dd=i(Fe);K=s(dd,"past_key_values"),dd.forEach(t),Be=s(Qe,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),qe=r(Qe,"CODE",{});var cd=i(qe);ye=s(cd,"past"),cd.forEach(t),Ue=s(Qe," as input. Using the "),$n=r(Qe,"CODE",{});var hd=i($n);ha=s(hd,"past_key_values"),hd.forEach(t),pa=s(Qe,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Xo=r(Qe,"A",{href:!0});var pd=i(Xo);Rn=r(pd,"CODE",{});var ud=i(Rn);ua=s(ud,"forward"),ud.forEach(t),pd.forEach(t),ma=s(Qe,`
method for more information on the usage of this argument.`),Qe.forEach(t),Wt.forEach(t),ws=d(o),Je=r(o,"P",{});var Tn=i(Je);fa=s(Tn,"This model was contributed by "),Gt=r(Tn,"A",{href:!0,rel:!0});var md=i(Gt);ga=s(md,"keskarnitishr"),md.forEach(t),_a=s(Tn,`. The original code can be found
`),Kt=r(Tn,"A",{href:!0,rel:!0});var fd=i(Kt);Ta=s(fd,"here"),fd.forEach(t),va=s(Tn,"."),Tn.forEach(t),Ls=d(o),dt=r(o,"H2",{class:!0});var Bs=i(dt);$t=r(Bs,"A",{id:!0,class:!0,href:!0});var gd=i($t);Mn=r(gd,"SPAN",{});var _d=i(Mn);w(Xt.$$.fragment,_d),_d.forEach(t),gd.forEach(t),ka=d(Bs),En=r(Bs,"SPAN",{});var Td=i(En);ba=s(Td,"CTRLConfig"),Td.forEach(t),Bs.forEach(t),$s=d(o),Ce=r(o,"DIV",{class:!0});var Ye=i(Ce);w(Jt.$$.fragment,Ye),ya=d(Ye),Xe=r(Ye,"P",{});var Bt=i(Xe);Ca=s(Bt,"This is the configuration class to store the configuration of a "),Jo=r(Bt,"A",{href:!0});var vd=i(Jo);wa=s(vd,"CTRLModel"),vd.forEach(t),La=s(Bt," or a "),Qo=r(Bt,"A",{href:!0});var kd=i(Qo);$a=s(kd,"TFCTRLModel"),kd.forEach(t),Ra=s(Bt,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Bt,"A",{href:!0,rel:!0});var bd=i(Qt);Ma=s(bd,"ctrl"),bd.forEach(t),Ea=s(Bt," architecture from SalesForce."),Bt.forEach(t),Fa=d(Ye),ct=r(Ye,"P",{});var vn=i(ct);qa=s(vn,"Configuration objects inherit from "),Yo=r(vn,"A",{href:!0});var yd=i(Yo);za=s(yd,"PretrainedConfig"),yd.forEach(t),Pa=s(vn,` and can be used to control the model outputs. Read the
documentation from `),Zo=r(vn,"A",{href:!0});var Cd=i(Zo);xa=s(Cd,"PretrainedConfig"),Cd.forEach(t),ja=s(vn," for more information."),vn.forEach(t),Sa=d(Ye),Fn=r(Ye,"P",{});var wd=i(Fn);Ia=s(wd,"Examples:"),wd.forEach(t),Na=d(Ye),w(Yt.$$.fragment,Ye),Ye.forEach(t),Rs=d(o),ht=r(o,"H2",{class:!0});var Us=i(ht);Rt=r(Us,"A",{id:!0,class:!0,href:!0});var Ld=i(Rt);qn=r(Ld,"SPAN",{});var $d=i(qn);w(Zt.$$.fragment,$d),$d.forEach(t),Ld.forEach(t),Da=d(Us),zn=r(Us,"SPAN",{});var Rd=i(zn);Aa=s(Rd,"CTRLTokenizer"),Rd.forEach(t),Us.forEach(t),Ms=d(o),Ne=r(o,"DIV",{class:!0});var Ut=i(Ne);w(eo.$$.fragment,Ut),Ha=d(Ut),Pn=r(Ut,"P",{});var Md=i(Pn);Oa=s(Md,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Md.forEach(t),Wa=d(Ut),to=r(Ut,"P",{});var Vs=i(to);Ba=s(Vs,"This tokenizer inherits from "),en=r(Vs,"A",{href:!0});var Ed=i(en);Ua=s(Ed,"PreTrainedTokenizer"),Ed.forEach(t),Va=s(Vs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vs.forEach(t),Ga=d(Ut),tn=r(Ut,"DIV",{class:!0});var Fd=i(tn);w(oo.$$.fragment,Fd),Fd.forEach(t),Ut.forEach(t),Es=d(o),pt=r(o,"H2",{class:!0});var Gs=i(pt);Mt=r(Gs,"A",{id:!0,class:!0,href:!0});var qd=i(Mt);xn=r(qd,"SPAN",{});var zd=i(xn);w(no.$$.fragment,zd),zd.forEach(t),qd.forEach(t),Ka=d(Gs),jn=r(Gs,"SPAN",{});var Pd=i(jn);Xa=s(Pd,"CTRLModel"),Pd.forEach(t),Gs.forEach(t),Fs=d(o),we=r(o,"DIV",{class:!0});var Ze=i(we);w(so.$$.fragment,Ze),Ja=d(Ze),Sn=r(Ze,"P",{});var xd=i(Sn);Qa=s(xd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),xd.forEach(t),Ya=d(Ze),ao=r(Ze,"P",{});var Ks=i(ao);Za=s(Ks,"This model inherits from "),on=r(Ks,"A",{href:!0});var jd=i(on);er=s(jd,"PreTrainedModel"),jd.forEach(t),tr=s(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(t),or=d(Ze),ro=r(Ze,"P",{});var Xs=i(ro);nr=s(Xs,"This model is also a PyTorch "),io=r(Xs,"A",{href:!0,rel:!0});var Sd=i(io);sr=s(Sd,"torch.nn.Module"),Sd.forEach(t),ar=s(Xs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xs.forEach(t),rr=d(Ze),ze=r(Ze,"DIV",{class:!0});var et=i(ze);w(lo.$$.fragment,et),ir=d(et),ut=r(et,"P",{});var kn=i(ut);lr=s(kn,"The "),nn=r(kn,"A",{href:!0});var Id=i(nn);dr=s(Id,"CTRLModel"),Id.forEach(t),cr=s(kn," forward method, overrides the "),In=r(kn,"CODE",{});var Nd=i(In);hr=s(Nd,"__call__"),Nd.forEach(t),pr=s(kn," special method."),kn.forEach(t),ur=d(et),w(Et.$$.fragment,et),mr=d(et),Nn=r(et,"P",{});var Dd=i(Nn);fr=s(Dd,"Example:"),Dd.forEach(t),gr=d(et),w(co.$$.fragment,et),et.forEach(t),Ze.forEach(t),qs=d(o),mt=r(o,"H2",{class:!0});var Js=i(mt);Ft=r(Js,"A",{id:!0,class:!0,href:!0});var Ad=i(Ft);Dn=r(Ad,"SPAN",{});var Hd=i(Dn);w(ho.$$.fragment,Hd),Hd.forEach(t),Ad.forEach(t),_r=d(Js),An=r(Js,"SPAN",{});var Od=i(An);Tr=s(Od,"CTRLLMHeadModel"),Od.forEach(t),Js.forEach(t),zs=d(o),Le=r(o,"DIV",{class:!0});var tt=i(Le);w(po.$$.fragment,tt),vr=d(tt),Hn=r(tt,"P",{});var Wd=i(Hn);kr=s(Wd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Wd.forEach(t),br=d(tt),uo=r(tt,"P",{});var Qs=i(uo);yr=s(Qs,"This model inherits from "),sn=r(Qs,"A",{href:!0});var Bd=i(sn);Cr=s(Bd,"PreTrainedModel"),Bd.forEach(t),wr=s(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qs.forEach(t),Lr=d(tt),mo=r(tt,"P",{});var Ys=i(mo);$r=s(Ys,"This model is also a PyTorch "),fo=r(Ys,"A",{href:!0,rel:!0});var Ud=i(fo);Rr=s(Ud,"torch.nn.Module"),Ud.forEach(t),Mr=s(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),Er=d(tt),Pe=r(tt,"DIV",{class:!0});var ot=i(Pe);w(go.$$.fragment,ot),Fr=d(ot),ft=r(ot,"P",{});var bn=i(ft);qr=s(bn,"The "),an=r(bn,"A",{href:!0});var Vd=i(an);zr=s(Vd,"CTRLLMHeadModel"),Vd.forEach(t),Pr=s(bn," forward method, overrides the "),On=r(bn,"CODE",{});var Gd=i(On);xr=s(Gd,"__call__"),Gd.forEach(t),jr=s(bn," special method."),bn.forEach(t),Sr=d(ot),w(qt.$$.fragment,ot),Ir=d(ot),Wn=r(ot,"P",{});var Kd=i(Wn);Nr=s(Kd,"Example:"),Kd.forEach(t),Dr=d(ot),w(_o.$$.fragment,ot),ot.forEach(t),tt.forEach(t),Ps=d(o),gt=r(o,"H2",{class:!0});var Zs=i(gt);zt=r(Zs,"A",{id:!0,class:!0,href:!0});var Xd=i(zt);Bn=r(Xd,"SPAN",{});var Jd=i(Bn);w(To.$$.fragment,Jd),Jd.forEach(t),Xd.forEach(t),Ar=d(Zs),Un=r(Zs,"SPAN",{});var Qd=i(Un);Hr=s(Qd,"CTRLForSequenceClassification"),Qd.forEach(t),Zs.forEach(t),xs=d(o),$e=r(o,"DIV",{class:!0});var nt=i($e);w(vo.$$.fragment,nt),Or=d(nt),Re=r(nt,"P",{});var Ve=i(Re);Wr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),rn=r(Ve,"A",{href:!0});var Yd=i(rn);Br=s(Yd,"CTRLForSequenceClassification"),Yd.forEach(t),Ur=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Vn=r(Ve,"CODE",{});var Zd=i(Vn);Vr=s(Zd,"pad_token_id"),Zd.forEach(t),Gr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Gn=r(Ve,"CODE",{});var ec=i(Gn);Kr=s(ec,"pad_token_id"),ec.forEach(t),Xr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Kn=r(Ve,"CODE",{});var tc=i(Kn);Jr=s(tc,"inputs_embeds"),tc.forEach(t),Qr=s(Ve," are passed instead of "),Xn=r(Ve,"CODE",{});var oc=i(Xn);Yr=s(oc,"input_ids"),oc.forEach(t),Zr=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),ei=d(nt),ko=r(nt,"P",{});var ea=i(ko);ti=s(ea,"This model inherits from "),ln=r(ea,"A",{href:!0});var nc=i(ln);oi=s(nc,"PreTrainedModel"),nc.forEach(t),ni=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),si=d(nt),bo=r(nt,"P",{});var ta=i(bo);ai=s(ta,"This model is also a PyTorch "),yo=r(ta,"A",{href:!0,rel:!0});var sc=i(yo);ri=s(sc,"torch.nn.Module"),sc.forEach(t),ii=s(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(t),li=d(nt),ie=r(nt,"DIV",{class:!0});var Ie=i(ie);w(Co.$$.fragment,Ie),di=d(Ie),_t=r(Ie,"P",{});var yn=i(_t);ci=s(yn,"The "),dn=r(yn,"A",{href:!0});var ac=i(dn);hi=s(ac,"CTRLForSequenceClassification"),ac.forEach(t),pi=s(yn," forward method, overrides the "),Jn=r(yn,"CODE",{});var rc=i(Jn);ui=s(rc,"__call__"),rc.forEach(t),mi=s(yn," special method."),yn.forEach(t),fi=d(Ie),w(Pt.$$.fragment,Ie),gi=d(Ie),Qn=r(Ie,"P",{});var ic=i(Qn);_i=s(ic,"Example of single-label classification:"),ic.forEach(t),Ti=d(Ie),w(wo.$$.fragment,Ie),vi=d(Ie),Yn=r(Ie,"P",{});var lc=i(Yn);ki=s(lc,"Example of multi-label classification:"),lc.forEach(t),bi=d(Ie),w(Lo.$$.fragment,Ie),Ie.forEach(t),nt.forEach(t),js=d(o),Tt=r(o,"H2",{class:!0});var oa=i(Tt);xt=r(oa,"A",{id:!0,class:!0,href:!0});var dc=i(xt);Zn=r(dc,"SPAN",{});var cc=i(Zn);w($o.$$.fragment,cc),cc.forEach(t),dc.forEach(t),yi=d(oa),es=r(oa,"SPAN",{});var hc=i(es);Ci=s(hc,"TFCTRLModel"),hc.forEach(t),oa.forEach(t),Ss=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);w(Ro.$$.fragment,Ge),wi=d(Ge),ts=r(Ge,"P",{});var pc=i(ts);Li=s(pc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),pc.forEach(t),$i=d(Ge),Mo=r(Ge,"P",{});var na=i(Mo);Ri=s(na,"This model inherits from "),cn=r(na,"A",{href:!0});var uc=i(cn);Mi=s(uc,"TFPreTrainedModel"),uc.forEach(t),Ei=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(t),Fi=d(Ge),Eo=r(Ge,"P",{});var sa=i(Eo);qi=s(sa,"This model is also a "),Fo=r(sa,"A",{href:!0,rel:!0});var mc=i(Fo);zi=s(mc,"tf.keras.Model"),mc.forEach(t),Pi=s(sa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sa.forEach(t),xi=d(Ge),w(jt.$$.fragment,Ge),ji=d(Ge),xe=r(Ge,"DIV",{class:!0});var st=i(xe);w(qo.$$.fragment,st),Si=d(st),vt=r(st,"P",{});var Cn=i(vt);Ii=s(Cn,"The "),hn=r(Cn,"A",{href:!0});var fc=i(hn);Ni=s(fc,"TFCTRLModel"),fc.forEach(t),Di=s(Cn," forward method, overrides the "),os=r(Cn,"CODE",{});var gc=i(os);Ai=s(gc,"__call__"),gc.forEach(t),Hi=s(Cn," special method."),Cn.forEach(t),Oi=d(st),w(St.$$.fragment,st),Wi=d(st),ns=r(st,"P",{});var _c=i(ns);Bi=s(_c,"Example:"),_c.forEach(t),Ui=d(st),w(zo.$$.fragment,st),st.forEach(t),Ge.forEach(t),Is=d(o),kt=r(o,"H2",{class:!0});var aa=i(kt);It=r(aa,"A",{id:!0,class:!0,href:!0});var Tc=i(It);ss=r(Tc,"SPAN",{});var vc=i(ss);w(Po.$$.fragment,vc),vc.forEach(t),Tc.forEach(t),Vi=d(aa),as=r(aa,"SPAN",{});var kc=i(as);Gi=s(kc,"TFCTRLLMHeadModel"),kc.forEach(t),aa.forEach(t),Ns=d(o),de=r(o,"DIV",{class:!0});var Ke=i(de);w(xo.$$.fragment,Ke),Ki=d(Ke),rs=r(Ke,"P",{});var bc=i(rs);Xi=s(bc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),bc.forEach(t),Ji=d(Ke),jo=r(Ke,"P",{});var ra=i(jo);Qi=s(ra,"This model inherits from "),pn=r(ra,"A",{href:!0});var yc=i(pn);Yi=s(yc,"TFPreTrainedModel"),yc.forEach(t),Zi=s(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),el=d(Ke),So=r(Ke,"P",{});var ia=i(So);tl=s(ia,"This model is also a "),Io=r(ia,"A",{href:!0,rel:!0});var Cc=i(Io);ol=s(Cc,"tf.keras.Model"),Cc.forEach(t),nl=s(ia,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ia.forEach(t),sl=d(Ke),w(Nt.$$.fragment,Ke),al=d(Ke),je=r(Ke,"DIV",{class:!0});var at=i(je);w(No.$$.fragment,at),rl=d(at),bt=r(at,"P",{});var wn=i(bt);il=s(wn,"The "),un=r(wn,"A",{href:!0});var wc=i(un);ll=s(wc,"TFCTRLLMHeadModel"),wc.forEach(t),dl=s(wn," forward method, overrides the "),is=r(wn,"CODE",{});var Lc=i(is);cl=s(Lc,"__call__"),Lc.forEach(t),hl=s(wn," special method."),wn.forEach(t),pl=d(at),w(Dt.$$.fragment,at),ul=d(at),ls=r(at,"P",{});var $c=i(ls);ml=s($c,"Example:"),$c.forEach(t),fl=d(at),w(Do.$$.fragment,at),at.forEach(t),Ke.forEach(t),Ds=d(o),yt=r(o,"H2",{class:!0});var la=i(yt);At=r(la,"A",{id:!0,class:!0,href:!0});var Rc=i(At);ds=r(Rc,"SPAN",{});var Mc=i(ds);w(Ao.$$.fragment,Mc),Mc.forEach(t),Rc.forEach(t),gl=d(la),cs=r(la,"SPAN",{});var Ec=i(cs);_l=s(Ec,"TFCTRLForSequenceClassification"),Ec.forEach(t),la.forEach(t),As=d(o),X=r(o,"DIV",{class:!0});var me=i(X);w(Ho.$$.fragment,me),Tl=d(me),hs=r(me,"P",{});var Fc=i(hs);vl=s(Fc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),Fc.forEach(t),kl=d(me),mn=r(me,"P",{});var Zl=i(mn);fn=r(Zl,"A",{href:!0});var qc=i(fn);bl=s(qc,"TFCTRLForSequenceClassification"),qc.forEach(t),yl=s(Zl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Zl.forEach(t),Cl=d(me),De=r(me,"P",{});var rt=i(De);wl=s(rt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ps=r(rt,"CODE",{});var zc=i(ps);Ll=s(zc,"pad_token_id"),zc.forEach(t),$l=s(rt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),us=r(rt,"CODE",{});var Pc=i(us);Rl=s(Pc,"pad_token_id"),Pc.forEach(t),Ml=s(rt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ms=r(rt,"CODE",{});var xc=i(ms);El=s(xc,"inputs_embeds"),xc.forEach(t),Fl=s(rt," are passed instead of "),fs=r(rt,"CODE",{});var jc=i(fs);ql=s(jc,"input_ids"),jc.forEach(t),zl=s(rt,`, it does the same (take the last value in
each row of the batch).`),rt.forEach(t),Pl=d(me),Oo=r(me,"P",{});var da=i(Oo);xl=s(da,"This model inherits from "),gn=r(da,"A",{href:!0});var Sc=i(gn);jl=s(Sc,"TFPreTrainedModel"),Sc.forEach(t),Sl=s(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(t),Il=d(me),Wo=r(me,"P",{});var ca=i(Wo);Nl=s(ca,"This model is also a "),Bo=r(ca,"A",{href:!0,rel:!0});var Ic=i(Bo);Dl=s(Ic,"tf.keras.Model"),Ic.forEach(t),Al=s(ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ca.forEach(t),Hl=d(me),w(Ht.$$.fragment,me),Ol=d(me),Se=r(me,"DIV",{class:!0});var it=i(Se);w(Uo.$$.fragment,it),Wl=d(it),Ct=r(it,"P",{});var Ln=i(Ct);Bl=s(Ln,"The "),_n=r(Ln,"A",{href:!0});var Nc=i(_n);Ul=s(Nc,"TFCTRLForSequenceClassification"),Nc.forEach(t),Vl=s(Ln," forward method, overrides the "),gs=r(Ln,"CODE",{});var Dc=i(gs);Gl=s(Dc,"__call__"),Dc.forEach(t),Kl=s(Ln," special method."),Ln.forEach(t),Xl=d(it),w(Ot.$$.fragment,it),Jl=d(it),_s=r(it,"P",{});var Ac=i(_s);Ql=s(Ac,"Example:"),Ac.forEach(t),Yl=d(it),w(Vo.$$.fragment,it),it.forEach(t),me.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(th)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(f,"class","relative group"),c(J,"id","overview"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#overview"),c(y,"class","relative group"),c(Z,"href","https://arxiv.org/abs/1909.05858"),c(Z,"rel","nofollow"),c(te,"href","https://github.com/salesforce/ctrl"),c(te,"rel","nofollow"),c(Xo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c($t,"id","transformers.CTRLConfig"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.CTRLConfig"),c(dt,"class","relative group"),c(Jo,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLModel"),c(Qo,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(Yo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Zo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ce,"class","docstring"),c(Rt,"id","transformers.CTRLTokenizer"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLTokenizer"),c(ht,"class","relative group"),c(en,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(tn,"class","docstring"),c(Ne,"class","docstring"),c(Mt,"id","transformers.CTRLModel"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLModel"),c(pt,"class","relative group"),c(on,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(nn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLModel"),c(ze,"class","docstring"),c(we,"class","docstring"),c(Ft,"id","transformers.CTRLLMHeadModel"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.CTRLLMHeadModel"),c(mt,"class","relative group"),c(sn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(an,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(Pe,"class","docstring"),c(Le,"class","docstring"),c(zt,"id","transformers.CTRLForSequenceClassification"),c(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zt,"href","#transformers.CTRLForSequenceClassification"),c(gt,"class","relative group"),c(rn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ln,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(dn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ie,"class","docstring"),c($e,"class","docstring"),c(xt,"id","transformers.TFCTRLModel"),c(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xt,"href","#transformers.TFCTRLModel"),c(Tt,"class","relative group"),c(cn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fo,"rel","nofollow"),c(hn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLModel"),c(xe,"class","docstring"),c(le,"class","docstring"),c(It,"id","transformers.TFCTRLLMHeadModel"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFCTRLLMHeadModel"),c(kt,"class","relative group"),c(pn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Io,"rel","nofollow"),c(un,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(je,"class","docstring"),c(de,"class","docstring"),c(At,"id","transformers.TFCTRLForSequenceClassification"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFCTRLForSequenceClassification"),c(yt,"class","relative group"),c(fn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(gn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bo,"rel","nofollow"),c(_n,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(Se,"class","docstring"),c(X,"class","docstring")},m(o,m){e(document.head,p),u(o,b,m),u(o,f,m),e(f,g),e(g,v),L(T,v,null),e(f,_),e(f,E),e(E,fe),u(o,Q,m),u(o,y,m),e(y,J),e(J,A),L(Y,A,null),e(y,ge),e(y,H),e(H,_e),u(o,ce,m),u(o,x,m),e(x,j),e(x,Z),e(Z,oe),e(x,F),e(x,q),e(q,Te),e(x,U),u(o,he,m),u(o,ne,m),e(ne,V),u(o,pe,m),u(o,se,m),e(se,z),e(z,ve),u(o,O,m),u(o,ae,m),e(ae,ke),u(o,W,m),u(o,S,m),e(S,ee),e(ee,I),e(ee,te),e(te,G),e(ee,be),e(S,h),e(S,k),e(k,re),e(S,Ae),e(S,ue),e(ue,N),e(ue,Ee),e(Ee,He),e(ue,Oe),e(S,D),e(S,P),e(P,We),e(P,Fe),e(Fe,K),e(P,Be),e(P,qe),e(qe,ye),e(P,Ue),e(P,$n),e($n,ha),e(P,pa),e(P,Xo),e(Xo,Rn),e(Rn,ua),e(P,ma),u(o,ws,m),u(o,Je,m),e(Je,fa),e(Je,Gt),e(Gt,ga),e(Je,_a),e(Je,Kt),e(Kt,Ta),e(Je,va),u(o,Ls,m),u(o,dt,m),e(dt,$t),e($t,Mn),L(Xt,Mn,null),e(dt,ka),e(dt,En),e(En,ba),u(o,$s,m),u(o,Ce,m),L(Jt,Ce,null),e(Ce,ya),e(Ce,Xe),e(Xe,Ca),e(Xe,Jo),e(Jo,wa),e(Xe,La),e(Xe,Qo),e(Qo,$a),e(Xe,Ra),e(Xe,Qt),e(Qt,Ma),e(Xe,Ea),e(Ce,Fa),e(Ce,ct),e(ct,qa),e(ct,Yo),e(Yo,za),e(ct,Pa),e(ct,Zo),e(Zo,xa),e(ct,ja),e(Ce,Sa),e(Ce,Fn),e(Fn,Ia),e(Ce,Na),L(Yt,Ce,null),u(o,Rs,m),u(o,ht,m),e(ht,Rt),e(Rt,qn),L(Zt,qn,null),e(ht,Da),e(ht,zn),e(zn,Aa),u(o,Ms,m),u(o,Ne,m),L(eo,Ne,null),e(Ne,Ha),e(Ne,Pn),e(Pn,Oa),e(Ne,Wa),e(Ne,to),e(to,Ba),e(to,en),e(en,Ua),e(to,Va),e(Ne,Ga),e(Ne,tn),L(oo,tn,null),u(o,Es,m),u(o,pt,m),e(pt,Mt),e(Mt,xn),L(no,xn,null),e(pt,Ka),e(pt,jn),e(jn,Xa),u(o,Fs,m),u(o,we,m),L(so,we,null),e(we,Ja),e(we,Sn),e(Sn,Qa),e(we,Ya),e(we,ao),e(ao,Za),e(ao,on),e(on,er),e(ao,tr),e(we,or),e(we,ro),e(ro,nr),e(ro,io),e(io,sr),e(ro,ar),e(we,rr),e(we,ze),L(lo,ze,null),e(ze,ir),e(ze,ut),e(ut,lr),e(ut,nn),e(nn,dr),e(ut,cr),e(ut,In),e(In,hr),e(ut,pr),e(ze,ur),L(Et,ze,null),e(ze,mr),e(ze,Nn),e(Nn,fr),e(ze,gr),L(co,ze,null),u(o,qs,m),u(o,mt,m),e(mt,Ft),e(Ft,Dn),L(ho,Dn,null),e(mt,_r),e(mt,An),e(An,Tr),u(o,zs,m),u(o,Le,m),L(po,Le,null),e(Le,vr),e(Le,Hn),e(Hn,kr),e(Le,br),e(Le,uo),e(uo,yr),e(uo,sn),e(sn,Cr),e(uo,wr),e(Le,Lr),e(Le,mo),e(mo,$r),e(mo,fo),e(fo,Rr),e(mo,Mr),e(Le,Er),e(Le,Pe),L(go,Pe,null),e(Pe,Fr),e(Pe,ft),e(ft,qr),e(ft,an),e(an,zr),e(ft,Pr),e(ft,On),e(On,xr),e(ft,jr),e(Pe,Sr),L(qt,Pe,null),e(Pe,Ir),e(Pe,Wn),e(Wn,Nr),e(Pe,Dr),L(_o,Pe,null),u(o,Ps,m),u(o,gt,m),e(gt,zt),e(zt,Bn),L(To,Bn,null),e(gt,Ar),e(gt,Un),e(Un,Hr),u(o,xs,m),u(o,$e,m),L(vo,$e,null),e($e,Or),e($e,Re),e(Re,Wr),e(Re,rn),e(rn,Br),e(Re,Ur),e(Re,Vn),e(Vn,Vr),e(Re,Gr),e(Re,Gn),e(Gn,Kr),e(Re,Xr),e(Re,Kn),e(Kn,Jr),e(Re,Qr),e(Re,Xn),e(Xn,Yr),e(Re,Zr),e($e,ei),e($e,ko),e(ko,ti),e(ko,ln),e(ln,oi),e(ko,ni),e($e,si),e($e,bo),e(bo,ai),e(bo,yo),e(yo,ri),e(bo,ii),e($e,li),e($e,ie),L(Co,ie,null),e(ie,di),e(ie,_t),e(_t,ci),e(_t,dn),e(dn,hi),e(_t,pi),e(_t,Jn),e(Jn,ui),e(_t,mi),e(ie,fi),L(Pt,ie,null),e(ie,gi),e(ie,Qn),e(Qn,_i),e(ie,Ti),L(wo,ie,null),e(ie,vi),e(ie,Yn),e(Yn,ki),e(ie,bi),L(Lo,ie,null),u(o,js,m),u(o,Tt,m),e(Tt,xt),e(xt,Zn),L($o,Zn,null),e(Tt,yi),e(Tt,es),e(es,Ci),u(o,Ss,m),u(o,le,m),L(Ro,le,null),e(le,wi),e(le,ts),e(ts,Li),e(le,$i),e(le,Mo),e(Mo,Ri),e(Mo,cn),e(cn,Mi),e(Mo,Ei),e(le,Fi),e(le,Eo),e(Eo,qi),e(Eo,Fo),e(Fo,zi),e(Eo,Pi),e(le,xi),L(jt,le,null),e(le,ji),e(le,xe),L(qo,xe,null),e(xe,Si),e(xe,vt),e(vt,Ii),e(vt,hn),e(hn,Ni),e(vt,Di),e(vt,os),e(os,Ai),e(vt,Hi),e(xe,Oi),L(St,xe,null),e(xe,Wi),e(xe,ns),e(ns,Bi),e(xe,Ui),L(zo,xe,null),u(o,Is,m),u(o,kt,m),e(kt,It),e(It,ss),L(Po,ss,null),e(kt,Vi),e(kt,as),e(as,Gi),u(o,Ns,m),u(o,de,m),L(xo,de,null),e(de,Ki),e(de,rs),e(rs,Xi),e(de,Ji),e(de,jo),e(jo,Qi),e(jo,pn),e(pn,Yi),e(jo,Zi),e(de,el),e(de,So),e(So,tl),e(So,Io),e(Io,ol),e(So,nl),e(de,sl),L(Nt,de,null),e(de,al),e(de,je),L(No,je,null),e(je,rl),e(je,bt),e(bt,il),e(bt,un),e(un,ll),e(bt,dl),e(bt,is),e(is,cl),e(bt,hl),e(je,pl),L(Dt,je,null),e(je,ul),e(je,ls),e(ls,ml),e(je,fl),L(Do,je,null),u(o,Ds,m),u(o,yt,m),e(yt,At),e(At,ds),L(Ao,ds,null),e(yt,gl),e(yt,cs),e(cs,_l),u(o,As,m),u(o,X,m),L(Ho,X,null),e(X,Tl),e(X,hs),e(hs,vl),e(X,kl),e(X,mn),e(mn,fn),e(fn,bl),e(mn,yl),e(X,Cl),e(X,De),e(De,wl),e(De,ps),e(ps,Ll),e(De,$l),e(De,us),e(us,Rl),e(De,Ml),e(De,ms),e(ms,El),e(De,Fl),e(De,fs),e(fs,ql),e(De,zl),e(X,Pl),e(X,Oo),e(Oo,xl),e(Oo,gn),e(gn,jl),e(Oo,Sl),e(X,Il),e(X,Wo),e(Wo,Nl),e(Wo,Bo),e(Bo,Dl),e(Wo,Al),e(X,Hl),L(Ht,X,null),e(X,Ol),e(X,Se),L(Uo,Se,null),e(Se,Wl),e(Se,Ct),e(Ct,Bl),e(Ct,_n),e(_n,Ul),e(Ct,Vl),e(Ct,gs),e(gs,Gl),e(Ct,Kl),e(Se,Xl),L(Ot,Se,null),e(Se,Jl),e(Se,_s),e(_s,Ql),e(Se,Yl),L(Vo,Se,null),Hs=!0},p(o,[m]){const Go={};m&2&&(Go.$$scope={dirty:m,ctx:o}),Et.$set(Go);const Ts={};m&2&&(Ts.$$scope={dirty:m,ctx:o}),qt.$set(Ts);const vs={};m&2&&(vs.$$scope={dirty:m,ctx:o}),Pt.$set(vs);const ks={};m&2&&(ks.$$scope={dirty:m,ctx:o}),jt.$set(ks);const Ko={};m&2&&(Ko.$$scope={dirty:m,ctx:o}),St.$set(Ko);const bs={};m&2&&(bs.$$scope={dirty:m,ctx:o}),Nt.$set(bs);const ys={};m&2&&(ys.$$scope={dirty:m,ctx:o}),Dt.$set(ys);const Cs={};m&2&&(Cs.$$scope={dirty:m,ctx:o}),Ht.$set(Cs);const wt={};m&2&&(wt.$$scope={dirty:m,ctx:o}),Ot.$set(wt)},i(o){Hs||($(T.$$.fragment,o),$(Y.$$.fragment,o),$(Xt.$$.fragment,o),$(Jt.$$.fragment,o),$(Yt.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(so.$$.fragment,o),$(lo.$$.fragment,o),$(Et.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(go.$$.fragment,o),$(qt.$$.fragment,o),$(_o.$$.fragment,o),$(To.$$.fragment,o),$(vo.$$.fragment,o),$(Co.$$.fragment,o),$(Pt.$$.fragment,o),$(wo.$$.fragment,o),$(Lo.$$.fragment,o),$($o.$$.fragment,o),$(Ro.$$.fragment,o),$(jt.$$.fragment,o),$(qo.$$.fragment,o),$(St.$$.fragment,o),$(zo.$$.fragment,o),$(Po.$$.fragment,o),$(xo.$$.fragment,o),$(Nt.$$.fragment,o),$(No.$$.fragment,o),$(Dt.$$.fragment,o),$(Do.$$.fragment,o),$(Ao.$$.fragment,o),$(Ho.$$.fragment,o),$(Ht.$$.fragment,o),$(Uo.$$.fragment,o),$(Ot.$$.fragment,o),$(Vo.$$.fragment,o),Hs=!0)},o(o){R(T.$$.fragment,o),R(Y.$$.fragment,o),R(Xt.$$.fragment,o),R(Jt.$$.fragment,o),R(Yt.$$.fragment,o),R(Zt.$$.fragment,o),R(eo.$$.fragment,o),R(oo.$$.fragment,o),R(no.$$.fragment,o),R(so.$$.fragment,o),R(lo.$$.fragment,o),R(Et.$$.fragment,o),R(co.$$.fragment,o),R(ho.$$.fragment,o),R(po.$$.fragment,o),R(go.$$.fragment,o),R(qt.$$.fragment,o),R(_o.$$.fragment,o),R(To.$$.fragment,o),R(vo.$$.fragment,o),R(Co.$$.fragment,o),R(Pt.$$.fragment,o),R(wo.$$.fragment,o),R(Lo.$$.fragment,o),R($o.$$.fragment,o),R(Ro.$$.fragment,o),R(jt.$$.fragment,o),R(qo.$$.fragment,o),R(St.$$.fragment,o),R(zo.$$.fragment,o),R(Po.$$.fragment,o),R(xo.$$.fragment,o),R(Nt.$$.fragment,o),R(No.$$.fragment,o),R(Dt.$$.fragment,o),R(Do.$$.fragment,o),R(Ao.$$.fragment,o),R(Ho.$$.fragment,o),R(Ht.$$.fragment,o),R(Uo.$$.fragment,o),R(Ot.$$.fragment,o),R(Vo.$$.fragment,o),Hs=!1},d(o){t(p),o&&t(b),o&&t(f),M(T),o&&t(Q),o&&t(y),M(Y),o&&t(ce),o&&t(x),o&&t(he),o&&t(ne),o&&t(pe),o&&t(se),o&&t(O),o&&t(ae),o&&t(W),o&&t(S),o&&t(ws),o&&t(Je),o&&t(Ls),o&&t(dt),M(Xt),o&&t($s),o&&t(Ce),M(Jt),M(Yt),o&&t(Rs),o&&t(ht),M(Zt),o&&t(Ms),o&&t(Ne),M(eo),M(oo),o&&t(Es),o&&t(pt),M(no),o&&t(Fs),o&&t(we),M(so),M(lo),M(Et),M(co),o&&t(qs),o&&t(mt),M(ho),o&&t(zs),o&&t(Le),M(po),M(go),M(qt),M(_o),o&&t(Ps),o&&t(gt),M(To),o&&t(xs),o&&t($e),M(vo),M(Co),M(Pt),M(wo),M(Lo),o&&t(js),o&&t(Tt),M($o),o&&t(Ss),o&&t(le),M(Ro),M(jt),M(qo),M(St),M(zo),o&&t(Is),o&&t(kt),M(Po),o&&t(Ns),o&&t(de),M(xo),M(Nt),M(No),M(Dt),M(Do),o&&t(Ds),o&&t(yt),M(Ao),o&&t(As),o&&t(X),M(Ho),M(Ht),M(Uo),M(Ot),M(Vo)}}}const th={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function oh(B,p,b){let{fw:f}=p;return B.$$set=g=>{"fw"in g&&b(0,f=g.fw)},[f]}class dh extends Hc{constructor(p){super();Oc(this,p,oh,eh,Wc,{fw:0})}}export{dh as default,th as metadata};
