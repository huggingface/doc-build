import{S as Sc,i as jc,s as Ic,e as a,k as l,w as C,t as n,R as Nc,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as u,y as L,q as $,o as R,B as M}from"../../chunks/vendor-9daddcfa.js";import{T as wt}from"../../chunks/Tip-c0a70391.js";import{D as Me}from"../../chunks/Docstring-ea6f8b76.js";import{C as Vt}from"../../chunks/CodeBlock-37b92346.js";import{I as it}from"../../chunks/IconCopyLink-a413fd1b.js";import"../../chunks/CopyButton-6099fd9d.js";function Dc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Ac(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Hc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Oc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,S,Z,oe,q,F,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,be;return{c(){p=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),y=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),q=a("ul"),F=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);b=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),E=r(re,"LI",{});var ue=i(E);fe=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),y=r(h,"P",{});var N=i(y);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Ee=i(A);Y=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),q=r(h,"UL",{});var D=i(q);F=r(D,"LI",{});var P=i(F);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var qe=i(V);pe=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var ye=i(I);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);be=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,b),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,E),e(E,fe),u(h,Q,k),u(h,y,k),e(y,J),e(y,A),e(A,Y),e(y,ge),e(y,H),e(H,_e),e(y,ce),u(h,x,k),u(h,S,k),e(S,Z),u(h,oe,k),u(h,q,k),e(q,F),e(F,Te),e(F,U),e(U,he),e(F,ne),e(F,V),e(V,pe),e(q,se),e(q,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,j),e(q,ee),e(q,I),e(I,te),e(I,G),e(G,be)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Q),h&&t(y),h&&t(x),h&&t(S),h&&t(oe),h&&t(q)}}}function Wc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Bc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,S,Z,oe,q,F,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,be;return{c(){p=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),y=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),q=a("ul"),F=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);b=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),E=r(re,"LI",{});var ue=i(E);fe=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),y=r(h,"P",{});var N=i(y);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Ee=i(A);Y=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),q=r(h,"UL",{});var D=i(q);F=r(D,"LI",{});var P=i(F);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var qe=i(V);pe=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var ye=i(I);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);be=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,b),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,E),e(E,fe),u(h,Q,k),u(h,y,k),e(y,J),e(y,A),e(A,Y),e(y,ge),e(y,H),e(H,_e),e(y,ce),u(h,x,k),u(h,S,k),e(S,Z),u(h,oe,k),u(h,q,k),e(q,F),e(F,Te),e(F,U),e(U,he),e(F,ne),e(F,V),e(V,pe),e(q,se),e(q,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,j),e(q,ee),e(q,I),e(I,te),e(I,G),e(G,be)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Q),h&&t(y),h&&t(x),h&&t(S),h&&t(oe),h&&t(q)}}}function Uc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Vc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,S,Z,oe,q,F,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,be;return{c(){p=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),y=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),q=a("ul"),F=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);b=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),E=r(re,"LI",{});var ue=i(E);fe=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),y=r(h,"P",{});var N=i(y);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Ee=i(A);Y=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),q=r(h,"UL",{});var D=i(q);F=r(D,"LI",{});var P=i(F);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var qe=i(V);pe=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var ye=i(I);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ue=i(G);be=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),ye.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,b),u(h,f,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,E),e(E,fe),u(h,Q,k),u(h,y,k),e(y,J),e(y,A),e(A,Y),e(y,ge),e(y,H),e(H,_e),e(y,ce),u(h,x,k),u(h,S,k),e(S,Z),u(h,oe,k),u(h,q,k),e(q,F),e(F,Te),e(F,U),e(U,he),e(F,ne),e(F,V),e(V,pe),e(q,se),e(q,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,j),e(q,ee),e(q,I),e(I,te),e(I,G),e(G,be)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(Q),h&&t(y),h&&t(x),h&&t(S),h&&t(oe),h&&t(q)}}}function Gc(B){let p,b,f,g,v;return{c(){p=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,b),e(p,f),e(f,g),e(p,v)},d(T){T&&t(p)}}}function Kc(B){let p,b,f,g,v,T,_,E,fe,Q,y,J,A,Y,ge,H,_e,ce,x,S,Z,oe,q,F,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,be,h,k,re,Ae,ue,N,Ee,He,Oe,D,P,We,qe,K,Be,Fe,ye,Ue,Xo,da,ca,ys,Je,ha,Gt,pa,ua,Kt,ma,fa,Cs,lt,Lt,$n,Xt,ga,Rn,_a,ws,Ce,Jt,Ta,Xe,va,Jo,ka,ba,Qo,ya,Ca,Qt,wa,La,$a,dt,Ra,Yo,Ma,Ea,Zo,qa,Fa,za,Mn,Pa,xa,Yt,Ls,ct,$t,En,Zt,Sa,qn,ja,$s,Ne,eo,Ia,Fn,Na,Da,to,Aa,en,Ha,Oa,Wa,tn,oo,Rs,ht,Rt,zn,no,Ba,Pn,Ua,Ms,we,so,Va,xn,Ga,Ka,ao,Xa,on,Ja,Qa,Ya,ro,Za,io,er,tr,or,ze,lo,nr,pt,sr,nn,ar,rr,Sn,ir,lr,dr,Mt,cr,jn,hr,pr,co,Es,ut,Et,In,ho,ur,Nn,mr,qs,Le,po,fr,Dn,gr,_r,uo,Tr,sn,vr,kr,br,mo,yr,fo,Cr,wr,Lr,Pe,go,$r,mt,Rr,an,Mr,Er,An,qr,Fr,zr,qt,Pr,Hn,xr,Sr,_o,Fs,ft,Ft,On,To,jr,Wn,Ir,zs,$e,vo,Nr,Re,Dr,rn,Ar,Hr,Bn,Or,Wr,Un,Br,Ur,Vn,Vr,Gr,Gn,Kr,Xr,Jr,ko,Qr,ln,Yr,Zr,ei,bo,ti,yo,oi,ni,si,ie,Co,ai,gt,ri,dn,ii,li,Kn,di,ci,hi,zt,pi,Xn,ui,mi,wo,fi,Jn,gi,_i,Lo,Ps,_t,Pt,Qn,$o,Ti,Yn,vi,xs,le,Ro,ki,Zn,bi,yi,Mo,Ci,cn,wi,Li,$i,Eo,Ri,qo,Mi,Ei,qi,xt,Fi,xe,Fo,zi,Tt,Pi,hn,xi,Si,es,ji,Ii,Ni,St,Di,ts,Ai,Hi,zo,Ss,vt,jt,os,Po,Oi,ns,Wi,js,de,xo,Bi,ss,Ui,Vi,So,Gi,pn,Ki,Xi,Ji,jo,Qi,Io,Yi,Zi,el,It,tl,Se,No,ol,kt,nl,un,sl,al,as,rl,il,ll,Nt,dl,rs,cl,hl,Do,Is,bt,Dt,is,Ao,pl,ls,ul,Ns,X,Ho,ml,ds,fl,gl,mn,fn,_l,Tl,vl,De,kl,cs,bl,yl,hs,Cl,wl,ps,Ll,$l,us,Rl,Ml,El,Oo,ql,gn,Fl,zl,Pl,Wo,xl,Bo,Sl,jl,Il,At,Nl,je,Uo,Dl,yt,Al,_n,Hl,Ol,ms,Wl,Bl,Ul,Ht,Vl,fs,Gl,Kl,Vo,Ds;return T=new it({}),Y=new it({}),Xt=new it({}),Jt=new Me({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new it({}),eo=new Me({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Me({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new it({}),so=new Me({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L321",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Mt=new wt({props:{$$slots:{default:[Dc]},$$scope:{ctx:B}}}),co=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ho=new it({}),po=new Me({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L494",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),qt=new wt({props:{$$slots:{default:[Ac]},$$scope:{ctx:B}}}),_o=new Vt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new it({}),vo=new Me({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_ctrl.py#L610",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),zt=new wt({props:{$$slots:{default:[Hc]},$$scope:{ctx:B}}}),wo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLForSequenceClassification
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLForSequenceClassification
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$o=new it({}),Ro=new Me({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L537",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xt=new wt({props:{$$slots:{default:[Oc]},$$scope:{ctx:B}}}),Fo=new Me({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L542",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),St=new wt({props:{$$slots:{default:[Wc]},$$scope:{ctx:B}}}),zo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Po=new it({}),xo=new Me({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L648",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),It=new wt({props:{$$slots:{default:[Bc]},$$scope:{ctx:B}}}),No=new Me({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L669",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),Nt=new wt({props:{$$slots:{default:[Uc]},$$scope:{ctx:B}}}),Do=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ao=new it({}),Ho=new Me({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L777",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),At=new wt({props:{$$slots:{default:[Vc]},$$scope:{ctx:B}}}),Uo=new Me({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/ctrl/modeling_tf_ctrl.py#L792",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),Ht=new wt({props:{$$slots:{default:[Gc]},$$scope:{ctx:B}}}),Vo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),b=l(),f=a("h1"),g=a("a"),v=a("span"),C(T.$$.fragment),_=l(),E=a("span"),fe=n("CTRL"),Q=l(),y=a("h2"),J=a("a"),A=a("span"),C(Y.$$.fragment),ge=l(),H=a("span"),_e=n("Overview"),ce=l(),x=a("p"),S=n("CTRL model was proposed in "),Z=a("a"),oe=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),q=n(" by Nitish Shirish Keskar"),F=a("em"),Te=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),he=l(),ne=a("p"),V=n("The abstract from the paper is the following:"),pe=l(),se=a("p"),z=a("em"),ve=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),O=l(),ae=a("p"),ke=n("Tips:"),W=l(),j=a("ul"),ee=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=a("a"),G=n("original implementation"),be=n(` for
more information.`),h=l(),k=a("li"),re=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Ee=a("em"),He=n("run_generation.py"),Oe=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),qe=a("em"),K=n("past"),Be=n(` as input, which is the previously computed key/value attention pairs. Using
this `),Fe=a("em"),ye=n("past"),Ue=n(` value prevents the model from re-computing pre-computed values in the context of text generation. See
`),Xo=a("a"),da=n("reusing the past in generative models"),ca=n(` for more information on the usage of
this argument.`),ys=l(),Je=a("p"),ha=n("This model was contributed by "),Gt=a("a"),pa=n("keskarnitishr"),ua=n(`. The original code can be found
`),Kt=a("a"),ma=n("here"),fa=n("."),Cs=l(),lt=a("h2"),Lt=a("a"),$n=a("span"),C(Xt.$$.fragment),ga=l(),Rn=a("span"),_a=n("CTRLConfig"),ws=l(),Ce=a("div"),C(Jt.$$.fragment),Ta=l(),Xe=a("p"),va=n("This is the configuration class to store the configuration of a "),Jo=a("a"),ka=n("CTRLModel"),ba=n(" or a "),Qo=a("a"),ya=n("TFCTRLModel"),Ca=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),wa=n("ctrl"),La=n(" architecture from SalesForce."),$a=l(),dt=a("p"),Ra=n("Configuration objects inherit from "),Yo=a("a"),Ma=n("PretrainedConfig"),Ea=n(` and can be used to control the model outputs. Read the
documentation from `),Zo=a("a"),qa=n("PretrainedConfig"),Fa=n(" for more information."),za=l(),Mn=a("p"),Pa=n("Examples:"),xa=l(),C(Yt.$$.fragment),Ls=l(),ct=a("h2"),$t=a("a"),En=a("span"),C(Zt.$$.fragment),Sa=l(),qn=a("span"),ja=n("CTRLTokenizer"),$s=l(),Ne=a("div"),C(eo.$$.fragment),Ia=l(),Fn=a("p"),Na=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Da=l(),to=a("p"),Aa=n("This tokenizer inherits from "),en=a("a"),Ha=n("PreTrainedTokenizer"),Oa=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Wa=l(),tn=a("div"),C(oo.$$.fragment),Rs=l(),ht=a("h2"),Rt=a("a"),zn=a("span"),C(no.$$.fragment),Ba=l(),Pn=a("span"),Ua=n("CTRLModel"),Ms=l(),we=a("div"),C(so.$$.fragment),Va=l(),xn=a("p"),Ga=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ka=l(),ao=a("p"),Xa=n("This model inherits from "),on=a("a"),Ja=n("PreTrainedModel"),Qa=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya=l(),ro=a("p"),Za=n("This model is also a PyTorch "),io=a("a"),er=n("torch.nn.Module"),tr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),or=l(),ze=a("div"),C(lo.$$.fragment),nr=l(),pt=a("p"),sr=n("The "),nn=a("a"),ar=n("CTRLModel"),rr=n(" forward method, overrides the "),Sn=a("code"),ir=n("__call__"),lr=n(" special method."),dr=l(),C(Mt.$$.fragment),cr=l(),jn=a("p"),hr=n("Example:"),pr=l(),C(co.$$.fragment),Es=l(),ut=a("h2"),Et=a("a"),In=a("span"),C(ho.$$.fragment),ur=l(),Nn=a("span"),mr=n("CTRLLMHeadModel"),qs=l(),Le=a("div"),C(po.$$.fragment),fr=l(),Dn=a("p"),gr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),_r=l(),uo=a("p"),Tr=n("This model inherits from "),sn=a("a"),vr=n("PreTrainedModel"),kr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),br=l(),mo=a("p"),yr=n("This model is also a PyTorch "),fo=a("a"),Cr=n("torch.nn.Module"),wr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lr=l(),Pe=a("div"),C(go.$$.fragment),$r=l(),mt=a("p"),Rr=n("The "),an=a("a"),Mr=n("CTRLLMHeadModel"),Er=n(" forward method, overrides the "),An=a("code"),qr=n("__call__"),Fr=n(" special method."),zr=l(),C(qt.$$.fragment),Pr=l(),Hn=a("p"),xr=n("Example:"),Sr=l(),C(_o.$$.fragment),Fs=l(),ft=a("h2"),Ft=a("a"),On=a("span"),C(To.$$.fragment),jr=l(),Wn=a("span"),Ir=n("CTRLForSequenceClassification"),zs=l(),$e=a("div"),C(vo.$$.fragment),Nr=l(),Re=a("p"),Dr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),rn=a("a"),Ar=n("CTRLForSequenceClassification"),Hr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Bn=a("code"),Or=n("pad_token_id"),Wr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Un=a("code"),Br=n("pad_token_id"),Ur=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Vn=a("code"),Vr=n("inputs_embeds"),Gr=n(" are passed instead of "),Gn=a("code"),Kr=n("input_ids"),Xr=n(`, it does the same (take the last
value in each row of the batch).`),Jr=l(),ko=a("p"),Qr=n("This model inherits from "),ln=a("a"),Yr=n("PreTrainedModel"),Zr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei=l(),bo=a("p"),ti=n("This model is also a PyTorch "),yo=a("a"),oi=n("torch.nn.Module"),ni=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si=l(),ie=a("div"),C(Co.$$.fragment),ai=l(),gt=a("p"),ri=n("The "),dn=a("a"),ii=n("CTRLForSequenceClassification"),li=n(" forward method, overrides the "),Kn=a("code"),di=n("__call__"),ci=n(" special method."),hi=l(),C(zt.$$.fragment),pi=l(),Xn=a("p"),ui=n("Example of single-label classification:"),mi=l(),C(wo.$$.fragment),fi=l(),Jn=a("p"),gi=n("Example of multi-label classification:"),_i=l(),C(Lo.$$.fragment),Ps=l(),_t=a("h2"),Pt=a("a"),Qn=a("span"),C($o.$$.fragment),Ti=l(),Yn=a("span"),vi=n("TFCTRLModel"),xs=l(),le=a("div"),C(Ro.$$.fragment),ki=l(),Zn=a("p"),bi=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),yi=l(),Mo=a("p"),Ci=n("This model inherits from "),cn=a("a"),wi=n("TFPreTrainedModel"),Li=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$i=l(),Eo=a("p"),Ri=n("This model is also a "),qo=a("a"),Mi=n("tf.keras.Model"),Ei=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qi=l(),C(xt.$$.fragment),Fi=l(),xe=a("div"),C(Fo.$$.fragment),zi=l(),Tt=a("p"),Pi=n("The "),hn=a("a"),xi=n("TFCTRLModel"),Si=n(" forward method, overrides the "),es=a("code"),ji=n("__call__"),Ii=n(" special method."),Ni=l(),C(St.$$.fragment),Di=l(),ts=a("p"),Ai=n("Example:"),Hi=l(),C(zo.$$.fragment),Ss=l(),vt=a("h2"),jt=a("a"),os=a("span"),C(Po.$$.fragment),Oi=l(),ns=a("span"),Wi=n("TFCTRLLMHeadModel"),js=l(),de=a("div"),C(xo.$$.fragment),Bi=l(),ss=a("p"),Ui=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Vi=l(),So=a("p"),Gi=n("This model inherits from "),pn=a("a"),Ki=n("TFPreTrainedModel"),Xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji=l(),jo=a("p"),Qi=n("This model is also a "),Io=a("a"),Yi=n("tf.keras.Model"),Zi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),el=l(),C(It.$$.fragment),tl=l(),Se=a("div"),C(No.$$.fragment),ol=l(),kt=a("p"),nl=n("The "),un=a("a"),sl=n("TFCTRLLMHeadModel"),al=n(" forward method, overrides the "),as=a("code"),rl=n("__call__"),il=n(" special method."),ll=l(),C(Nt.$$.fragment),dl=l(),rs=a("p"),cl=n("Example:"),hl=l(),C(Do.$$.fragment),Is=l(),bt=a("h2"),Dt=a("a"),is=a("span"),C(Ao.$$.fragment),pl=l(),ls=a("span"),ul=n("TFCTRLForSequenceClassification"),Ns=l(),X=a("div"),C(Ho.$$.fragment),ml=l(),ds=a("p"),fl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),gl=l(),mn=a("p"),fn=a("a"),_l=n("TFCTRLForSequenceClassification"),Tl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),vl=l(),De=a("p"),kl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),cs=a("code"),bl=n("pad_token_id"),yl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hs=a("code"),Cl=n("pad_token_id"),wl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ps=a("code"),Ll=n("inputs_embeds"),$l=n(" are passed instead of "),us=a("code"),Rl=n("input_ids"),Ml=n(`, it does the same (take the last value in
each row of the batch).`),El=l(),Oo=a("p"),ql=n("This model inherits from "),gn=a("a"),Fl=n("TFPreTrainedModel"),zl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pl=l(),Wo=a("p"),xl=n("This model is also a "),Bo=a("a"),Sl=n("tf.keras.Model"),jl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Il=l(),C(At.$$.fragment),Nl=l(),je=a("div"),C(Uo.$$.fragment),Dl=l(),yt=a("p"),Al=n("The "),_n=a("a"),Hl=n("TFCTRLForSequenceClassification"),Ol=n(" forward method, overrides the "),ms=a("code"),Wl=n("__call__"),Bl=n(" special method."),Ul=l(),C(Ht.$$.fragment),Vl=l(),fs=a("p"),Gl=n("Example:"),Kl=l(),C(Vo.$$.fragment),this.h()},l(o){const m=Nc('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),b=d(o),f=r(o,"H1",{class:!0});var Go=i(f);g=r(Go,"A",{id:!0,class:!0,href:!0});var gs=i(g);v=r(gs,"SPAN",{});var _s=i(v);w(T.$$.fragment,_s),_s.forEach(t),gs.forEach(t),_=d(Go),E=r(Go,"SPAN",{});var Ts=i(E);fe=s(Ts,"CTRL"),Ts.forEach(t),Go.forEach(t),Q=d(o),y=r(o,"H2",{class:!0});var Ko=i(y);J=r(Ko,"A",{id:!0,class:!0,href:!0});var vs=i(J);A=r(vs,"SPAN",{});var ks=i(A);w(Y.$$.fragment,ks),ks.forEach(t),vs.forEach(t),ge=d(Ko),H=r(Ko,"SPAN",{});var bs=i(H);_e=s(bs,"Overview"),bs.forEach(t),Ko.forEach(t),ce=d(o),x=r(o,"P",{});var Ct=i(x);S=s(Ct,"CTRL model was proposed in "),Z=r(Ct,"A",{href:!0,rel:!0});var Jl=i(Z);oe=s(Jl,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),Jl.forEach(t),q=s(Ct," by Nitish Shirish Keskar"),F=r(Ct,"EM",{});var Ql=i(F);Te=s(Ql,", Bryan McCann"),Ql.forEach(t),U=s(Ct,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Ct.forEach(t),he=d(o),ne=r(o,"P",{});var Yl=i(ne);V=s(Yl,"The abstract from the paper is the following:"),Yl.forEach(t),pe=d(o),se=r(o,"P",{});var Zl=i(se);z=r(Zl,"EM",{});var ed=i(z);ve=s(ed,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),ed.forEach(t),Zl.forEach(t),O=d(o),ae=r(o,"P",{});var td=i(ae);ke=s(td,"Tips:"),td.forEach(t),W=d(o),j=r(o,"UL",{});var Ot=i(j);ee=r(Ot,"LI",{});var As=i(ee);I=s(As,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=r(As,"A",{href:!0,rel:!0});var od=i(te);G=s(od,"original implementation"),od.forEach(t),be=s(As,` for
more information.`),As.forEach(t),h=d(Ot),k=r(Ot,"LI",{});var nd=i(k);re=s(nd,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),nd.forEach(t),Ae=d(Ot),ue=r(Ot,"LI",{});var Hs=i(ue);N=s(Hs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Ee=r(Hs,"EM",{});var sd=i(Ee);He=s(sd,"run_generation.py"),sd.forEach(t),Oe=s(Hs," example script."),Hs.forEach(t),D=d(Ot),P=r(Ot,"LI",{});var Wt=i(P);We=s(Wt,"The PyTorch models can take the "),qe=r(Wt,"EM",{});var ad=i(qe);K=s(ad,"past"),ad.forEach(t),Be=s(Wt,` as input, which is the previously computed key/value attention pairs. Using
this `),Fe=r(Wt,"EM",{});var rd=i(Fe);ye=s(rd,"past"),rd.forEach(t),Ue=s(Wt,` value prevents the model from re-computing pre-computed values in the context of text generation. See
`),Xo=r(Wt,"A",{href:!0});var id=i(Xo);da=s(id,"reusing the past in generative models"),id.forEach(t),ca=s(Wt,` for more information on the usage of
this argument.`),Wt.forEach(t),Ot.forEach(t),ys=d(o),Je=r(o,"P",{});var Tn=i(Je);ha=s(Tn,"This model was contributed by "),Gt=r(Tn,"A",{href:!0,rel:!0});var ld=i(Gt);pa=s(ld,"keskarnitishr"),ld.forEach(t),ua=s(Tn,`. The original code can be found
`),Kt=r(Tn,"A",{href:!0,rel:!0});var dd=i(Kt);ma=s(dd,"here"),dd.forEach(t),fa=s(Tn,"."),Tn.forEach(t),Cs=d(o),lt=r(o,"H2",{class:!0});var Os=i(lt);Lt=r(Os,"A",{id:!0,class:!0,href:!0});var cd=i(Lt);$n=r(cd,"SPAN",{});var hd=i($n);w(Xt.$$.fragment,hd),hd.forEach(t),cd.forEach(t),ga=d(Os),Rn=r(Os,"SPAN",{});var pd=i(Rn);_a=s(pd,"CTRLConfig"),pd.forEach(t),Os.forEach(t),ws=d(o),Ce=r(o,"DIV",{class:!0});var Qe=i(Ce);w(Jt.$$.fragment,Qe),Ta=d(Qe),Xe=r(Qe,"P",{});var Bt=i(Xe);va=s(Bt,"This is the configuration class to store the configuration of a "),Jo=r(Bt,"A",{href:!0});var ud=i(Jo);ka=s(ud,"CTRLModel"),ud.forEach(t),ba=s(Bt," or a "),Qo=r(Bt,"A",{href:!0});var md=i(Qo);ya=s(md,"TFCTRLModel"),md.forEach(t),Ca=s(Bt,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Bt,"A",{href:!0,rel:!0});var fd=i(Qt);wa=s(fd,"ctrl"),fd.forEach(t),La=s(Bt," architecture from SalesForce."),Bt.forEach(t),$a=d(Qe),dt=r(Qe,"P",{});var vn=i(dt);Ra=s(vn,"Configuration objects inherit from "),Yo=r(vn,"A",{href:!0});var gd=i(Yo);Ma=s(gd,"PretrainedConfig"),gd.forEach(t),Ea=s(vn,` and can be used to control the model outputs. Read the
documentation from `),Zo=r(vn,"A",{href:!0});var _d=i(Zo);qa=s(_d,"PretrainedConfig"),_d.forEach(t),Fa=s(vn," for more information."),vn.forEach(t),za=d(Qe),Mn=r(Qe,"P",{});var Td=i(Mn);Pa=s(Td,"Examples:"),Td.forEach(t),xa=d(Qe),w(Yt.$$.fragment,Qe),Qe.forEach(t),Ls=d(o),ct=r(o,"H2",{class:!0});var Ws=i(ct);$t=r(Ws,"A",{id:!0,class:!0,href:!0});var vd=i($t);En=r(vd,"SPAN",{});var kd=i(En);w(Zt.$$.fragment,kd),kd.forEach(t),vd.forEach(t),Sa=d(Ws),qn=r(Ws,"SPAN",{});var bd=i(qn);ja=s(bd,"CTRLTokenizer"),bd.forEach(t),Ws.forEach(t),$s=d(o),Ne=r(o,"DIV",{class:!0});var Ut=i(Ne);w(eo.$$.fragment,Ut),Ia=d(Ut),Fn=r(Ut,"P",{});var yd=i(Fn);Na=s(yd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),yd.forEach(t),Da=d(Ut),to=r(Ut,"P",{});var Bs=i(to);Aa=s(Bs,"This tokenizer inherits from "),en=r(Bs,"A",{href:!0});var Cd=i(en);Ha=s(Cd,"PreTrainedTokenizer"),Cd.forEach(t),Oa=s(Bs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bs.forEach(t),Wa=d(Ut),tn=r(Ut,"DIV",{class:!0});var wd=i(tn);w(oo.$$.fragment,wd),wd.forEach(t),Ut.forEach(t),Rs=d(o),ht=r(o,"H2",{class:!0});var Us=i(ht);Rt=r(Us,"A",{id:!0,class:!0,href:!0});var Ld=i(Rt);zn=r(Ld,"SPAN",{});var $d=i(zn);w(no.$$.fragment,$d),$d.forEach(t),Ld.forEach(t),Ba=d(Us),Pn=r(Us,"SPAN",{});var Rd=i(Pn);Ua=s(Rd,"CTRLModel"),Rd.forEach(t),Us.forEach(t),Ms=d(o),we=r(o,"DIV",{class:!0});var Ye=i(we);w(so.$$.fragment,Ye),Va=d(Ye),xn=r(Ye,"P",{});var Md=i(xn);Ga=s(Md,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Md.forEach(t),Ka=d(Ye),ao=r(Ye,"P",{});var Vs=i(ao);Xa=s(Vs,"This model inherits from "),on=r(Vs,"A",{href:!0});var Ed=i(on);Ja=s(Ed,"PreTrainedModel"),Ed.forEach(t),Qa=s(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs.forEach(t),Ya=d(Ye),ro=r(Ye,"P",{});var Gs=i(ro);Za=s(Gs,"This model is also a PyTorch "),io=r(Gs,"A",{href:!0,rel:!0});var qd=i(io);er=s(qd,"torch.nn.Module"),qd.forEach(t),tr=s(Gs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gs.forEach(t),or=d(Ye),ze=r(Ye,"DIV",{class:!0});var Ze=i(ze);w(lo.$$.fragment,Ze),nr=d(Ze),pt=r(Ze,"P",{});var kn=i(pt);sr=s(kn,"The "),nn=r(kn,"A",{href:!0});var Fd=i(nn);ar=s(Fd,"CTRLModel"),Fd.forEach(t),rr=s(kn," forward method, overrides the "),Sn=r(kn,"CODE",{});var zd=i(Sn);ir=s(zd,"__call__"),zd.forEach(t),lr=s(kn," special method."),kn.forEach(t),dr=d(Ze),w(Mt.$$.fragment,Ze),cr=d(Ze),jn=r(Ze,"P",{});var Pd=i(jn);hr=s(Pd,"Example:"),Pd.forEach(t),pr=d(Ze),w(co.$$.fragment,Ze),Ze.forEach(t),Ye.forEach(t),Es=d(o),ut=r(o,"H2",{class:!0});var Ks=i(ut);Et=r(Ks,"A",{id:!0,class:!0,href:!0});var xd=i(Et);In=r(xd,"SPAN",{});var Sd=i(In);w(ho.$$.fragment,Sd),Sd.forEach(t),xd.forEach(t),ur=d(Ks),Nn=r(Ks,"SPAN",{});var jd=i(Nn);mr=s(jd,"CTRLLMHeadModel"),jd.forEach(t),Ks.forEach(t),qs=d(o),Le=r(o,"DIV",{class:!0});var et=i(Le);w(po.$$.fragment,et),fr=d(et),Dn=r(et,"P",{});var Id=i(Dn);gr=s(Id,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Id.forEach(t),_r=d(et),uo=r(et,"P",{});var Xs=i(uo);Tr=s(Xs,"This model inherits from "),sn=r(Xs,"A",{href:!0});var Nd=i(sn);vr=s(Nd,"PreTrainedModel"),Nd.forEach(t),kr=s(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xs.forEach(t),br=d(et),mo=r(et,"P",{});var Js=i(mo);yr=s(Js,"This model is also a PyTorch "),fo=r(Js,"A",{href:!0,rel:!0});var Dd=i(fo);Cr=s(Dd,"torch.nn.Module"),Dd.forEach(t),wr=s(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(t),Lr=d(et),Pe=r(et,"DIV",{class:!0});var tt=i(Pe);w(go.$$.fragment,tt),$r=d(tt),mt=r(tt,"P",{});var bn=i(mt);Rr=s(bn,"The "),an=r(bn,"A",{href:!0});var Ad=i(an);Mr=s(Ad,"CTRLLMHeadModel"),Ad.forEach(t),Er=s(bn," forward method, overrides the "),An=r(bn,"CODE",{});var Hd=i(An);qr=s(Hd,"__call__"),Hd.forEach(t),Fr=s(bn," special method."),bn.forEach(t),zr=d(tt),w(qt.$$.fragment,tt),Pr=d(tt),Hn=r(tt,"P",{});var Od=i(Hn);xr=s(Od,"Example:"),Od.forEach(t),Sr=d(tt),w(_o.$$.fragment,tt),tt.forEach(t),et.forEach(t),Fs=d(o),ft=r(o,"H2",{class:!0});var Qs=i(ft);Ft=r(Qs,"A",{id:!0,class:!0,href:!0});var Wd=i(Ft);On=r(Wd,"SPAN",{});var Bd=i(On);w(To.$$.fragment,Bd),Bd.forEach(t),Wd.forEach(t),jr=d(Qs),Wn=r(Qs,"SPAN",{});var Ud=i(Wn);Ir=s(Ud,"CTRLForSequenceClassification"),Ud.forEach(t),Qs.forEach(t),zs=d(o),$e=r(o,"DIV",{class:!0});var ot=i($e);w(vo.$$.fragment,ot),Nr=d(ot),Re=r(ot,"P",{});var Ve=i(Re);Dr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),rn=r(Ve,"A",{href:!0});var Vd=i(rn);Ar=s(Vd,"CTRLForSequenceClassification"),Vd.forEach(t),Hr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Bn=r(Ve,"CODE",{});var Gd=i(Bn);Or=s(Gd,"pad_token_id"),Gd.forEach(t),Wr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Un=r(Ve,"CODE",{});var Kd=i(Un);Br=s(Kd,"pad_token_id"),Kd.forEach(t),Ur=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Vn=r(Ve,"CODE",{});var Xd=i(Vn);Vr=s(Xd,"inputs_embeds"),Xd.forEach(t),Gr=s(Ve," are passed instead of "),Gn=r(Ve,"CODE",{});var Jd=i(Gn);Kr=s(Jd,"input_ids"),Jd.forEach(t),Xr=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),Jr=d(ot),ko=r(ot,"P",{});var Ys=i(ko);Qr=s(Ys,"This model inherits from "),ln=r(Ys,"A",{href:!0});var Qd=i(ln);Yr=s(Qd,"PreTrainedModel"),Qd.forEach(t),Zr=s(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(t),ei=d(ot),bo=r(ot,"P",{});var Zs=i(bo);ti=s(Zs,"This model is also a PyTorch "),yo=r(Zs,"A",{href:!0,rel:!0});var Yd=i(yo);oi=s(Yd,"torch.nn.Module"),Yd.forEach(t),ni=s(Zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zs.forEach(t),si=d(ot),ie=r(ot,"DIV",{class:!0});var Ie=i(ie);w(Co.$$.fragment,Ie),ai=d(Ie),gt=r(Ie,"P",{});var yn=i(gt);ri=s(yn,"The "),dn=r(yn,"A",{href:!0});var Zd=i(dn);ii=s(Zd,"CTRLForSequenceClassification"),Zd.forEach(t),li=s(yn," forward method, overrides the "),Kn=r(yn,"CODE",{});var ec=i(Kn);di=s(ec,"__call__"),ec.forEach(t),ci=s(yn," special method."),yn.forEach(t),hi=d(Ie),w(zt.$$.fragment,Ie),pi=d(Ie),Xn=r(Ie,"P",{});var tc=i(Xn);ui=s(tc,"Example of single-label classification:"),tc.forEach(t),mi=d(Ie),w(wo.$$.fragment,Ie),fi=d(Ie),Jn=r(Ie,"P",{});var oc=i(Jn);gi=s(oc,"Example of multi-label classification:"),oc.forEach(t),_i=d(Ie),w(Lo.$$.fragment,Ie),Ie.forEach(t),ot.forEach(t),Ps=d(o),_t=r(o,"H2",{class:!0});var ea=i(_t);Pt=r(ea,"A",{id:!0,class:!0,href:!0});var nc=i(Pt);Qn=r(nc,"SPAN",{});var sc=i(Qn);w($o.$$.fragment,sc),sc.forEach(t),nc.forEach(t),Ti=d(ea),Yn=r(ea,"SPAN",{});var ac=i(Yn);vi=s(ac,"TFCTRLModel"),ac.forEach(t),ea.forEach(t),xs=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);w(Ro.$$.fragment,Ge),ki=d(Ge),Zn=r(Ge,"P",{});var rc=i(Zn);bi=s(rc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),rc.forEach(t),yi=d(Ge),Mo=r(Ge,"P",{});var ta=i(Mo);Ci=s(ta,"This model inherits from "),cn=r(ta,"A",{href:!0});var ic=i(cn);wi=s(ic,"TFPreTrainedModel"),ic.forEach(t),Li=s(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(t),$i=d(Ge),Eo=r(Ge,"P",{});var oa=i(Eo);Ri=s(oa,"This model is also a "),qo=r(oa,"A",{href:!0,rel:!0});var lc=i(qo);Mi=s(lc,"tf.keras.Model"),lc.forEach(t),Ei=s(oa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oa.forEach(t),qi=d(Ge),w(xt.$$.fragment,Ge),Fi=d(Ge),xe=r(Ge,"DIV",{class:!0});var nt=i(xe);w(Fo.$$.fragment,nt),zi=d(nt),Tt=r(nt,"P",{});var Cn=i(Tt);Pi=s(Cn,"The "),hn=r(Cn,"A",{href:!0});var dc=i(hn);xi=s(dc,"TFCTRLModel"),dc.forEach(t),Si=s(Cn," forward method, overrides the "),es=r(Cn,"CODE",{});var cc=i(es);ji=s(cc,"__call__"),cc.forEach(t),Ii=s(Cn," special method."),Cn.forEach(t),Ni=d(nt),w(St.$$.fragment,nt),Di=d(nt),ts=r(nt,"P",{});var hc=i(ts);Ai=s(hc,"Example:"),hc.forEach(t),Hi=d(nt),w(zo.$$.fragment,nt),nt.forEach(t),Ge.forEach(t),Ss=d(o),vt=r(o,"H2",{class:!0});var na=i(vt);jt=r(na,"A",{id:!0,class:!0,href:!0});var pc=i(jt);os=r(pc,"SPAN",{});var uc=i(os);w(Po.$$.fragment,uc),uc.forEach(t),pc.forEach(t),Oi=d(na),ns=r(na,"SPAN",{});var mc=i(ns);Wi=s(mc,"TFCTRLLMHeadModel"),mc.forEach(t),na.forEach(t),js=d(o),de=r(o,"DIV",{class:!0});var Ke=i(de);w(xo.$$.fragment,Ke),Bi=d(Ke),ss=r(Ke,"P",{});var fc=i(ss);Ui=s(fc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fc.forEach(t),Vi=d(Ke),So=r(Ke,"P",{});var sa=i(So);Gi=s(sa,"This model inherits from "),pn=r(sa,"A",{href:!0});var gc=i(pn);Ki=s(gc,"TFPreTrainedModel"),gc.forEach(t),Xi=s(sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa.forEach(t),Ji=d(Ke),jo=r(Ke,"P",{});var aa=i(jo);Qi=s(aa,"This model is also a "),Io=r(aa,"A",{href:!0,rel:!0});var _c=i(Io);Yi=s(_c,"tf.keras.Model"),_c.forEach(t),Zi=s(aa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aa.forEach(t),el=d(Ke),w(It.$$.fragment,Ke),tl=d(Ke),Se=r(Ke,"DIV",{class:!0});var st=i(Se);w(No.$$.fragment,st),ol=d(st),kt=r(st,"P",{});var wn=i(kt);nl=s(wn,"The "),un=r(wn,"A",{href:!0});var Tc=i(un);sl=s(Tc,"TFCTRLLMHeadModel"),Tc.forEach(t),al=s(wn," forward method, overrides the "),as=r(wn,"CODE",{});var vc=i(as);rl=s(vc,"__call__"),vc.forEach(t),il=s(wn," special method."),wn.forEach(t),ll=d(st),w(Nt.$$.fragment,st),dl=d(st),rs=r(st,"P",{});var kc=i(rs);cl=s(kc,"Example:"),kc.forEach(t),hl=d(st),w(Do.$$.fragment,st),st.forEach(t),Ke.forEach(t),Is=d(o),bt=r(o,"H2",{class:!0});var ra=i(bt);Dt=r(ra,"A",{id:!0,class:!0,href:!0});var bc=i(Dt);is=r(bc,"SPAN",{});var yc=i(is);w(Ao.$$.fragment,yc),yc.forEach(t),bc.forEach(t),pl=d(ra),ls=r(ra,"SPAN",{});var Cc=i(ls);ul=s(Cc,"TFCTRLForSequenceClassification"),Cc.forEach(t),ra.forEach(t),Ns=d(o),X=r(o,"DIV",{class:!0});var me=i(X);w(Ho.$$.fragment,me),ml=d(me),ds=r(me,"P",{});var wc=i(ds);fl=s(wc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),wc.forEach(t),gl=d(me),mn=r(me,"P",{});var Xl=i(mn);fn=r(Xl,"A",{href:!0});var Lc=i(fn);_l=s(Lc,"TFCTRLForSequenceClassification"),Lc.forEach(t),Tl=s(Xl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Xl.forEach(t),vl=d(me),De=r(me,"P",{});var at=i(De);kl=s(at,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),cs=r(at,"CODE",{});var $c=i(cs);bl=s($c,"pad_token_id"),$c.forEach(t),yl=s(at,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hs=r(at,"CODE",{});var Rc=i(hs);Cl=s(Rc,"pad_token_id"),Rc.forEach(t),wl=s(at,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ps=r(at,"CODE",{});var Mc=i(ps);Ll=s(Mc,"inputs_embeds"),Mc.forEach(t),$l=s(at," are passed instead of "),us=r(at,"CODE",{});var Ec=i(us);Rl=s(Ec,"input_ids"),Ec.forEach(t),Ml=s(at,`, it does the same (take the last value in
each row of the batch).`),at.forEach(t),El=d(me),Oo=r(me,"P",{});var ia=i(Oo);ql=s(ia,"This model inherits from "),gn=r(ia,"A",{href:!0});var qc=i(gn);Fl=s(qc,"TFPreTrainedModel"),qc.forEach(t),zl=s(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(t),Pl=d(me),Wo=r(me,"P",{});var la=i(Wo);xl=s(la,"This model is also a "),Bo=r(la,"A",{href:!0,rel:!0});var Fc=i(Bo);Sl=s(Fc,"tf.keras.Model"),Fc.forEach(t),jl=s(la,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),la.forEach(t),Il=d(me),w(At.$$.fragment,me),Nl=d(me),je=r(me,"DIV",{class:!0});var rt=i(je);w(Uo.$$.fragment,rt),Dl=d(rt),yt=r(rt,"P",{});var Ln=i(yt);Al=s(Ln,"The "),_n=r(Ln,"A",{href:!0});var zc=i(_n);Hl=s(zc,"TFCTRLForSequenceClassification"),zc.forEach(t),Ol=s(Ln," forward method, overrides the "),ms=r(Ln,"CODE",{});var Pc=i(ms);Wl=s(Pc,"__call__"),Pc.forEach(t),Bl=s(Ln," special method."),Ln.forEach(t),Ul=d(rt),w(Ht.$$.fragment,rt),Vl=d(rt),fs=r(rt,"P",{});var xc=i(fs);Gl=s(xc,"Example:"),xc.forEach(t),Kl=d(rt),w(Vo.$$.fragment,rt),rt.forEach(t),me.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Xc)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(f,"class","relative group"),c(J,"id","overview"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#overview"),c(y,"class","relative group"),c(Z,"href","https://arxiv.org/abs/1909.05858"),c(Z,"rel","nofollow"),c(te,"href","https://github.com/salesforce/ctrl"),c(te,"rel","nofollow"),c(Xo,"href","../quickstart#using-the-past"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Lt,"id","transformers.CTRLConfig"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.CTRLConfig"),c(lt,"class","relative group"),c(Jo,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLModel"),c(Qo,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(Yo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Zo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ce,"class","docstring"),c($t,"id","transformers.CTRLTokenizer"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.CTRLTokenizer"),c(ct,"class","relative group"),c(en,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(tn,"class","docstring"),c(Ne,"class","docstring"),c(Rt,"id","transformers.CTRLModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLModel"),c(ht,"class","relative group"),c(on,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(nn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLModel"),c(ze,"class","docstring"),c(we,"class","docstring"),c(Et,"id","transformers.CTRLLMHeadModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLLMHeadModel"),c(ut,"class","relative group"),c(sn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(an,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(Pe,"class","docstring"),c(Le,"class","docstring"),c(Ft,"id","transformers.CTRLForSequenceClassification"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.CTRLForSequenceClassification"),c(ft,"class","relative group"),c(rn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ln,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(dn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ie,"class","docstring"),c($e,"class","docstring"),c(Pt,"id","transformers.TFCTRLModel"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.TFCTRLModel"),c(_t,"class","relative group"),c(cn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qo,"rel","nofollow"),c(hn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLModel"),c(xe,"class","docstring"),c(le,"class","docstring"),c(jt,"id","transformers.TFCTRLLMHeadModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFCTRLLMHeadModel"),c(vt,"class","relative group"),c(pn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Io,"rel","nofollow"),c(un,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(Se,"class","docstring"),c(de,"class","docstring"),c(Dt,"id","transformers.TFCTRLForSequenceClassification"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFCTRLForSequenceClassification"),c(bt,"class","relative group"),c(fn,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(gn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bo,"rel","nofollow"),c(_n,"href","/docs/transformers/master/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(je,"class","docstring"),c(X,"class","docstring")},m(o,m){e(document.head,p),u(o,b,m),u(o,f,m),e(f,g),e(g,v),L(T,v,null),e(f,_),e(f,E),e(E,fe),u(o,Q,m),u(o,y,m),e(y,J),e(J,A),L(Y,A,null),e(y,ge),e(y,H),e(H,_e),u(o,ce,m),u(o,x,m),e(x,S),e(x,Z),e(Z,oe),e(x,q),e(x,F),e(F,Te),e(x,U),u(o,he,m),u(o,ne,m),e(ne,V),u(o,pe,m),u(o,se,m),e(se,z),e(z,ve),u(o,O,m),u(o,ae,m),e(ae,ke),u(o,W,m),u(o,j,m),e(j,ee),e(ee,I),e(ee,te),e(te,G),e(ee,be),e(j,h),e(j,k),e(k,re),e(j,Ae),e(j,ue),e(ue,N),e(ue,Ee),e(Ee,He),e(ue,Oe),e(j,D),e(j,P),e(P,We),e(P,qe),e(qe,K),e(P,Be),e(P,Fe),e(Fe,ye),e(P,Ue),e(P,Xo),e(Xo,da),e(P,ca),u(o,ys,m),u(o,Je,m),e(Je,ha),e(Je,Gt),e(Gt,pa),e(Je,ua),e(Je,Kt),e(Kt,ma),e(Je,fa),u(o,Cs,m),u(o,lt,m),e(lt,Lt),e(Lt,$n),L(Xt,$n,null),e(lt,ga),e(lt,Rn),e(Rn,_a),u(o,ws,m),u(o,Ce,m),L(Jt,Ce,null),e(Ce,Ta),e(Ce,Xe),e(Xe,va),e(Xe,Jo),e(Jo,ka),e(Xe,ba),e(Xe,Qo),e(Qo,ya),e(Xe,Ca),e(Xe,Qt),e(Qt,wa),e(Xe,La),e(Ce,$a),e(Ce,dt),e(dt,Ra),e(dt,Yo),e(Yo,Ma),e(dt,Ea),e(dt,Zo),e(Zo,qa),e(dt,Fa),e(Ce,za),e(Ce,Mn),e(Mn,Pa),e(Ce,xa),L(Yt,Ce,null),u(o,Ls,m),u(o,ct,m),e(ct,$t),e($t,En),L(Zt,En,null),e(ct,Sa),e(ct,qn),e(qn,ja),u(o,$s,m),u(o,Ne,m),L(eo,Ne,null),e(Ne,Ia),e(Ne,Fn),e(Fn,Na),e(Ne,Da),e(Ne,to),e(to,Aa),e(to,en),e(en,Ha),e(to,Oa),e(Ne,Wa),e(Ne,tn),L(oo,tn,null),u(o,Rs,m),u(o,ht,m),e(ht,Rt),e(Rt,zn),L(no,zn,null),e(ht,Ba),e(ht,Pn),e(Pn,Ua),u(o,Ms,m),u(o,we,m),L(so,we,null),e(we,Va),e(we,xn),e(xn,Ga),e(we,Ka),e(we,ao),e(ao,Xa),e(ao,on),e(on,Ja),e(ao,Qa),e(we,Ya),e(we,ro),e(ro,Za),e(ro,io),e(io,er),e(ro,tr),e(we,or),e(we,ze),L(lo,ze,null),e(ze,nr),e(ze,pt),e(pt,sr),e(pt,nn),e(nn,ar),e(pt,rr),e(pt,Sn),e(Sn,ir),e(pt,lr),e(ze,dr),L(Mt,ze,null),e(ze,cr),e(ze,jn),e(jn,hr),e(ze,pr),L(co,ze,null),u(o,Es,m),u(o,ut,m),e(ut,Et),e(Et,In),L(ho,In,null),e(ut,ur),e(ut,Nn),e(Nn,mr),u(o,qs,m),u(o,Le,m),L(po,Le,null),e(Le,fr),e(Le,Dn),e(Dn,gr),e(Le,_r),e(Le,uo),e(uo,Tr),e(uo,sn),e(sn,vr),e(uo,kr),e(Le,br),e(Le,mo),e(mo,yr),e(mo,fo),e(fo,Cr),e(mo,wr),e(Le,Lr),e(Le,Pe),L(go,Pe,null),e(Pe,$r),e(Pe,mt),e(mt,Rr),e(mt,an),e(an,Mr),e(mt,Er),e(mt,An),e(An,qr),e(mt,Fr),e(Pe,zr),L(qt,Pe,null),e(Pe,Pr),e(Pe,Hn),e(Hn,xr),e(Pe,Sr),L(_o,Pe,null),u(o,Fs,m),u(o,ft,m),e(ft,Ft),e(Ft,On),L(To,On,null),e(ft,jr),e(ft,Wn),e(Wn,Ir),u(o,zs,m),u(o,$e,m),L(vo,$e,null),e($e,Nr),e($e,Re),e(Re,Dr),e(Re,rn),e(rn,Ar),e(Re,Hr),e(Re,Bn),e(Bn,Or),e(Re,Wr),e(Re,Un),e(Un,Br),e(Re,Ur),e(Re,Vn),e(Vn,Vr),e(Re,Gr),e(Re,Gn),e(Gn,Kr),e(Re,Xr),e($e,Jr),e($e,ko),e(ko,Qr),e(ko,ln),e(ln,Yr),e(ko,Zr),e($e,ei),e($e,bo),e(bo,ti),e(bo,yo),e(yo,oi),e(bo,ni),e($e,si),e($e,ie),L(Co,ie,null),e(ie,ai),e(ie,gt),e(gt,ri),e(gt,dn),e(dn,ii),e(gt,li),e(gt,Kn),e(Kn,di),e(gt,ci),e(ie,hi),L(zt,ie,null),e(ie,pi),e(ie,Xn),e(Xn,ui),e(ie,mi),L(wo,ie,null),e(ie,fi),e(ie,Jn),e(Jn,gi),e(ie,_i),L(Lo,ie,null),u(o,Ps,m),u(o,_t,m),e(_t,Pt),e(Pt,Qn),L($o,Qn,null),e(_t,Ti),e(_t,Yn),e(Yn,vi),u(o,xs,m),u(o,le,m),L(Ro,le,null),e(le,ki),e(le,Zn),e(Zn,bi),e(le,yi),e(le,Mo),e(Mo,Ci),e(Mo,cn),e(cn,wi),e(Mo,Li),e(le,$i),e(le,Eo),e(Eo,Ri),e(Eo,qo),e(qo,Mi),e(Eo,Ei),e(le,qi),L(xt,le,null),e(le,Fi),e(le,xe),L(Fo,xe,null),e(xe,zi),e(xe,Tt),e(Tt,Pi),e(Tt,hn),e(hn,xi),e(Tt,Si),e(Tt,es),e(es,ji),e(Tt,Ii),e(xe,Ni),L(St,xe,null),e(xe,Di),e(xe,ts),e(ts,Ai),e(xe,Hi),L(zo,xe,null),u(o,Ss,m),u(o,vt,m),e(vt,jt),e(jt,os),L(Po,os,null),e(vt,Oi),e(vt,ns),e(ns,Wi),u(o,js,m),u(o,de,m),L(xo,de,null),e(de,Bi),e(de,ss),e(ss,Ui),e(de,Vi),e(de,So),e(So,Gi),e(So,pn),e(pn,Ki),e(So,Xi),e(de,Ji),e(de,jo),e(jo,Qi),e(jo,Io),e(Io,Yi),e(jo,Zi),e(de,el),L(It,de,null),e(de,tl),e(de,Se),L(No,Se,null),e(Se,ol),e(Se,kt),e(kt,nl),e(kt,un),e(un,sl),e(kt,al),e(kt,as),e(as,rl),e(kt,il),e(Se,ll),L(Nt,Se,null),e(Se,dl),e(Se,rs),e(rs,cl),e(Se,hl),L(Do,Se,null),u(o,Is,m),u(o,bt,m),e(bt,Dt),e(Dt,is),L(Ao,is,null),e(bt,pl),e(bt,ls),e(ls,ul),u(o,Ns,m),u(o,X,m),L(Ho,X,null),e(X,ml),e(X,ds),e(ds,fl),e(X,gl),e(X,mn),e(mn,fn),e(fn,_l),e(mn,Tl),e(X,vl),e(X,De),e(De,kl),e(De,cs),e(cs,bl),e(De,yl),e(De,hs),e(hs,Cl),e(De,wl),e(De,ps),e(ps,Ll),e(De,$l),e(De,us),e(us,Rl),e(De,Ml),e(X,El),e(X,Oo),e(Oo,ql),e(Oo,gn),e(gn,Fl),e(Oo,zl),e(X,Pl),e(X,Wo),e(Wo,xl),e(Wo,Bo),e(Bo,Sl),e(Wo,jl),e(X,Il),L(At,X,null),e(X,Nl),e(X,je),L(Uo,je,null),e(je,Dl),e(je,yt),e(yt,Al),e(yt,_n),e(_n,Hl),e(yt,Ol),e(yt,ms),e(ms,Wl),e(yt,Bl),e(je,Ul),L(Ht,je,null),e(je,Vl),e(je,fs),e(fs,Gl),e(je,Kl),L(Vo,je,null),Ds=!0},p(o,[m]){const Go={};m&2&&(Go.$$scope={dirty:m,ctx:o}),Mt.$set(Go);const gs={};m&2&&(gs.$$scope={dirty:m,ctx:o}),qt.$set(gs);const _s={};m&2&&(_s.$$scope={dirty:m,ctx:o}),zt.$set(_s);const Ts={};m&2&&(Ts.$$scope={dirty:m,ctx:o}),xt.$set(Ts);const Ko={};m&2&&(Ko.$$scope={dirty:m,ctx:o}),St.$set(Ko);const vs={};m&2&&(vs.$$scope={dirty:m,ctx:o}),It.$set(vs);const ks={};m&2&&(ks.$$scope={dirty:m,ctx:o}),Nt.$set(ks);const bs={};m&2&&(bs.$$scope={dirty:m,ctx:o}),At.$set(bs);const Ct={};m&2&&(Ct.$$scope={dirty:m,ctx:o}),Ht.$set(Ct)},i(o){Ds||($(T.$$.fragment,o),$(Y.$$.fragment,o),$(Xt.$$.fragment,o),$(Jt.$$.fragment,o),$(Yt.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(so.$$.fragment,o),$(lo.$$.fragment,o),$(Mt.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(go.$$.fragment,o),$(qt.$$.fragment,o),$(_o.$$.fragment,o),$(To.$$.fragment,o),$(vo.$$.fragment,o),$(Co.$$.fragment,o),$(zt.$$.fragment,o),$(wo.$$.fragment,o),$(Lo.$$.fragment,o),$($o.$$.fragment,o),$(Ro.$$.fragment,o),$(xt.$$.fragment,o),$(Fo.$$.fragment,o),$(St.$$.fragment,o),$(zo.$$.fragment,o),$(Po.$$.fragment,o),$(xo.$$.fragment,o),$(It.$$.fragment,o),$(No.$$.fragment,o),$(Nt.$$.fragment,o),$(Do.$$.fragment,o),$(Ao.$$.fragment,o),$(Ho.$$.fragment,o),$(At.$$.fragment,o),$(Uo.$$.fragment,o),$(Ht.$$.fragment,o),$(Vo.$$.fragment,o),Ds=!0)},o(o){R(T.$$.fragment,o),R(Y.$$.fragment,o),R(Xt.$$.fragment,o),R(Jt.$$.fragment,o),R(Yt.$$.fragment,o),R(Zt.$$.fragment,o),R(eo.$$.fragment,o),R(oo.$$.fragment,o),R(no.$$.fragment,o),R(so.$$.fragment,o),R(lo.$$.fragment,o),R(Mt.$$.fragment,o),R(co.$$.fragment,o),R(ho.$$.fragment,o),R(po.$$.fragment,o),R(go.$$.fragment,o),R(qt.$$.fragment,o),R(_o.$$.fragment,o),R(To.$$.fragment,o),R(vo.$$.fragment,o),R(Co.$$.fragment,o),R(zt.$$.fragment,o),R(wo.$$.fragment,o),R(Lo.$$.fragment,o),R($o.$$.fragment,o),R(Ro.$$.fragment,o),R(xt.$$.fragment,o),R(Fo.$$.fragment,o),R(St.$$.fragment,o),R(zo.$$.fragment,o),R(Po.$$.fragment,o),R(xo.$$.fragment,o),R(It.$$.fragment,o),R(No.$$.fragment,o),R(Nt.$$.fragment,o),R(Do.$$.fragment,o),R(Ao.$$.fragment,o),R(Ho.$$.fragment,o),R(At.$$.fragment,o),R(Uo.$$.fragment,o),R(Ht.$$.fragment,o),R(Vo.$$.fragment,o),Ds=!1},d(o){t(p),o&&t(b),o&&t(f),M(T),o&&t(Q),o&&t(y),M(Y),o&&t(ce),o&&t(x),o&&t(he),o&&t(ne),o&&t(pe),o&&t(se),o&&t(O),o&&t(ae),o&&t(W),o&&t(j),o&&t(ys),o&&t(Je),o&&t(Cs),o&&t(lt),M(Xt),o&&t(ws),o&&t(Ce),M(Jt),M(Yt),o&&t(Ls),o&&t(ct),M(Zt),o&&t($s),o&&t(Ne),M(eo),M(oo),o&&t(Rs),o&&t(ht),M(no),o&&t(Ms),o&&t(we),M(so),M(lo),M(Mt),M(co),o&&t(Es),o&&t(ut),M(ho),o&&t(qs),o&&t(Le),M(po),M(go),M(qt),M(_o),o&&t(Fs),o&&t(ft),M(To),o&&t(zs),o&&t($e),M(vo),M(Co),M(zt),M(wo),M(Lo),o&&t(Ps),o&&t(_t),M($o),o&&t(xs),o&&t(le),M(Ro),M(xt),M(Fo),M(St),M(zo),o&&t(Ss),o&&t(vt),M(Po),o&&t(js),o&&t(de),M(xo),M(It),M(No),M(Nt),M(Do),o&&t(Is),o&&t(bt),M(Ao),o&&t(Ns),o&&t(X),M(Ho),M(At),M(Uo),M(Ht),M(Vo)}}}const Xc={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function Jc(B,p,b){let{fw:f}=p;return B.$$set=g=>{"fw"in g&&b(0,f=g.fw)},[f]}class nh extends Sc{constructor(p){super();jc(this,p,Jc,Kc,Ic,{fw:0})}}export{nh as default,Xc as metadata};
