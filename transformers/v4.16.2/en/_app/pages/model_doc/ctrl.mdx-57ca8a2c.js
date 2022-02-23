import{S as Pc,i as xc,s as Sc,e as a,k as l,w,t as n,L as jc,c as r,d as t,m as d,a as i,x as L,h as s,b as c,J as e,g as u,y as $,q as R,o as M,B as E}from"../../chunks/vendor-b1433968.js";import{T as wt}from"../../chunks/Tip-c3840994.js";import{D as Ie}from"../../chunks/Docstring-ff504c58.js";import{C as Vt}from"../../chunks/CodeBlock-5eeb61a8.js";import{I as it}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-40b92840.js";function Ic(B){let p,C,m,g,v;return{c(){p=a("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);C=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,C),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Nc(B){let p,C,m,g,v;return{c(){p=a("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);C=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,C),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Dc(B){let p,C,m,g,v;return{c(){p=a("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);C=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,C),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Ac(B){let p,C,m,g,v,T,_,y,me,Q,b,X,A,Y,ge,H,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,Ce;return{c(){p=a("p"),C=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),y=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),b=a("p"),X=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);C=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),y=r(re,"LI",{});var ue=i(y);me=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),b=r(h,"P",{});var N=i(b);X=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Ee=i(V);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var be=i(I);te=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(be,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),be.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,C),u(h,m,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,y),e(y,me),u(h,Q,k),u(h,b,k),e(b,X),e(b,A),e(A,Y),e(b,ge),e(b,H),e(H,_e),e(b,ce),u(h,x,k),u(h,S,k),e(S,Z),u(h,oe,k),u(h,F,k),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,j),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,Ce)},d(h){h&&t(p),h&&t(m),h&&t(g),h&&t(Q),h&&t(b),h&&t(x),h&&t(S),h&&t(oe),h&&t(F)}}}function Hc(B){let p,C,m,g,v;return{c(){p=a("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);C=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,C),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Oc(B){let p,C,m,g,v,T,_,y,me,Q,b,X,A,Y,ge,H,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,Ce;return{c(){p=a("p"),C=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),y=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),b=a("p"),X=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);C=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),y=r(re,"LI",{});var ue=i(y);me=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),b=r(h,"P",{});var N=i(b);X=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Ee=i(V);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var be=i(I);te=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(be,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),be.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,C),u(h,m,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,y),e(y,me),u(h,Q,k),u(h,b,k),e(b,X),e(b,A),e(A,Y),e(b,ge),e(b,H),e(H,_e),e(b,ce),u(h,x,k),u(h,S,k),e(S,Z),u(h,oe,k),u(h,F,k),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,j),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,Ce)},d(h){h&&t(p),h&&t(m),h&&t(g),h&&t(Q),h&&t(b),h&&t(x),h&&t(S),h&&t(oe),h&&t(F)}}}function Wc(B){let p,C,m,g,v;return{c(){p=a("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);C=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,C),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Bc(B){let p,C,m,g,v,T,_,y,me,Q,b,X,A,Y,ge,H,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,Ce;return{c(){p=a("p"),C=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),y=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),b=a("p"),X=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),Te=n("a single Tensor with "),U=a("code"),he=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),pe=n("model(inputs_ids)"),se=l(),z=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),ae=n("model([input_ids, attention_mask])"),ke=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var k=i(p);C=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(h),g=r(h,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),y=r(re,"LI",{});var ue=i(y);me=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(h),b=r(h,"P",{});var N=i(b);X=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var He=i(H);_e=s(He,"model(inputs)"),He.forEach(t),ce=s(N,"."),N.forEach(t),x=d(h),S=r(h,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=d(h),F=r(h,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);Te=s(P,"a single Tensor with "),U=r(P,"CODE",{});var We=i(U);he=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),V=r(P,"CODE",{});var Ee=i(V);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var K=i(z);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(K,"CODE",{});var Be=i(O);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),ke=s(K," or "),W=r(K,"CODE",{});var Fe=i(W);j=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),K.forEach(t),ee=d(D),I=r(D,"LI",{});var be=i(I);te=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(be,"CODE",{});var Ue=i(G);Ce=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),be.forEach(t),D.forEach(t)},m(h,k){u(h,p,k),e(p,C),u(h,m,k),u(h,g,k),e(g,v),e(v,T),e(g,_),e(g,y),e(y,me),u(h,Q,k),u(h,b,k),e(b,X),e(b,A),e(A,Y),e(b,ge),e(b,H),e(H,_e),e(b,ce),u(h,x,k),u(h,S,k),e(S,Z),u(h,oe,k),u(h,F,k),e(F,q),e(q,Te),e(q,U),e(U,he),e(q,ne),e(q,V),e(V,pe),e(F,se),e(F,z),e(z,ve),e(z,O),e(O,ae),e(z,ke),e(z,W),e(W,j),e(F,ee),e(F,I),e(I,te),e(I,G),e(G,Ce)},d(h){h&&t(p),h&&t(m),h&&t(g),h&&t(Q),h&&t(b),h&&t(x),h&&t(S),h&&t(oe),h&&t(F)}}}function Uc(B){let p,C,m,g,v;return{c(){p=a("p"),C=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var _=i(p);C=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var y=i(m);g=s(y,"Module"),y.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,p,_),e(p,C),e(p,m),e(m,g),e(p,v)},d(T){T&&t(p)}}}function Vc(B){let p,C,m,g,v,T,_,y,me,Q,b,X,A,Y,ge,H,_e,ce,x,S,Z,oe,F,q,Te,U,he,ne,V,pe,se,z,ve,O,ae,ke,W,j,ee,I,te,G,Ce,h,k,re,Ae,ue,N,Me,He,Oe,D,P,We,Ee,K,Be,Fe,be,Ue,Ko,la,da,Cs,Xe,ca,Gt,ha,pa,Kt,ua,fa,bs,lt,Lt,wn,Jt,ma,Ln,ga,ys,ye,Xt,_a,Je,Ta,Jo,va,ka,Xo,Ca,ba,Qt,ya,wa,La,dt,$a,Qo,Ra,Ma,Yo,Ea,Fa,qa,$n,za,Pa,Yt,ws,ct,$t,Rn,Zt,xa,Mn,Sa,Ls,Ne,eo,ja,En,Ia,Na,to,Da,Zo,Aa,Ha,Oa,Fn,$s,ht,Rt,qn,oo,Wa,zn,Ba,Rs,we,no,Ua,Pn,Va,Ga,so,Ka,en,Ja,Xa,Qa,ao,Ya,ro,Za,er,tr,qe,io,or,pt,nr,tn,sr,ar,xn,rr,ir,lr,Mt,dr,Sn,cr,hr,lo,Ms,ut,Et,jn,co,pr,In,ur,Es,Le,ho,fr,Nn,mr,gr,po,_r,on,Tr,vr,kr,uo,Cr,fo,br,yr,wr,ze,mo,Lr,ft,$r,nn,Rr,Mr,Dn,Er,Fr,qr,Ft,zr,An,Pr,xr,go,Fs,mt,qt,Hn,_o,Sr,On,jr,qs,$e,To,Ir,Re,Nr,sn,Dr,Ar,Wn,Hr,Or,Bn,Wr,Br,Un,Ur,Vr,Vn,Gr,Kr,Jr,vo,Xr,an,Qr,Yr,Zr,ko,ei,Co,ti,oi,ni,ie,bo,si,gt,ai,rn,ri,ii,Gn,li,di,ci,zt,hi,Kn,pi,ui,yo,fi,Jn,mi,gi,wo,zs,_t,Pt,Xn,Lo,_i,Qn,Ti,Ps,le,$o,vi,Yn,ki,Ci,Ro,bi,ln,yi,wi,Li,Mo,$i,Eo,Ri,Mi,Ei,xt,Fi,Pe,Fo,qi,Tt,zi,dn,Pi,xi,Zn,Si,ji,Ii,St,Ni,es,Di,Ai,qo,xs,vt,jt,ts,zo,Hi,os,Oi,Ss,de,Po,Wi,ns,Bi,Ui,xo,Vi,cn,Gi,Ki,Ji,So,Xi,jo,Qi,Yi,Zi,It,el,xe,Io,tl,kt,ol,hn,nl,sl,ss,al,rl,il,Nt,ll,as,dl,cl,No,js,Ct,Dt,rs,Do,hl,is,pl,Is,J,Ao,ul,ls,fl,ml,pn,un,gl,_l,Tl,De,vl,ds,kl,Cl,cs,bl,yl,hs,wl,Ll,ps,$l,Rl,Ml,Ho,El,fn,Fl,ql,zl,Oo,Pl,Wo,xl,Sl,jl,At,Il,Se,Bo,Nl,bt,Dl,mn,Al,Hl,us,Ol,Wl,Bl,Ht,Ul,fs,Vl,Gl,Uo,Ns;return T=new it({}),Y=new it({}),Jt=new it({}),Xt=new Ie({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new it({}),eo=new Ie({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new it({}),no=new Ie({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_ctrl.py#L321",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),io=new Ie({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_ctrl.py#L354",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mt=new wt({props:{$$slots:{default:[Ic]},$$scope:{ctx:B}}}),lo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),co=new it({}),ho=new Ie({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_ctrl.py#L494",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mo=new Ie({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_ctrl.py#L516",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ft=new wt({props:{$$slots:{default:[Nc]},$$scope:{ctx:B}}}),go=new Vt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_o=new it({}),To=new Ie({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_ctrl.py#L610",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bo=new Ie({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_ctrl.py#L620",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new wt({props:{$$slots:{default:[Dc]},$$scope:{ctx:B}}}),yo=new Vt({props:{code:`from transformers import CTRLTokenizer, CTRLForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lo=new it({}),$o=new Ie({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_tf_ctrl.py#L537",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xt=new wt({props:{$$slots:{default:[Ac]},$$scope:{ctx:B}}}),Fo=new Ie({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_tf_ctrl.py#L542",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),St=new wt({props:{$$slots:{default:[Hc]},$$scope:{ctx:B}}}),qo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),zo=new it({}),Po=new Ie({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_tf_ctrl.py#L648",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),It=new wt({props:{$$slots:{default:[Oc]},$$scope:{ctx:B}}}),Io=new Ie({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_tf_ctrl.py#L669",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nt=new wt({props:{$$slots:{default:[Wc]},$$scope:{ctx:B}}}),No=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Do=new it({}),Ao=new Ie({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_tf_ctrl.py#L777",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),At=new wt({props:{$$slots:{default:[Bc]},$$scope:{ctx:B}}}),Bo=new Ie({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/ctrl/modeling_tf_ctrl.py#L792",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ht=new wt({props:{$$slots:{default:[Uc]},$$scope:{ctx:B}}}),Uo=new Vt({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),C=l(),m=a("h1"),g=a("a"),v=a("span"),w(T.$$.fragment),_=l(),y=a("span"),me=n("CTRL"),Q=l(),b=a("h2"),X=a("a"),A=a("span"),w(Y.$$.fragment),ge=l(),H=a("span"),_e=n("Overview"),ce=l(),x=a("p"),S=n("CTRL model was proposed in "),Z=a("a"),oe=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),Te=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),he=l(),ne=a("p"),V=n("The abstract from the paper is the following:"),pe=l(),se=a("p"),z=a("em"),ve=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),O=l(),ae=a("p"),ke=n("Tips:"),W=l(),j=a("ul"),ee=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=a("a"),G=n("original implementation"),Ce=n(` for
more information.`),h=l(),k=a("li"),re=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Me=a("em"),He=n("run_generation.py"),Oe=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),Ee=a("em"),K=n("past"),Be=n(` as input, which is the previously computed key/value attention pairs. Using
this `),Fe=a("em"),be=n("past"),Ue=n(` value prevents the model from re-computing pre-computed values in the context of text generation. See
`),Ko=a("a"),la=n("reusing the past in generative models"),da=n(` for more information on the usage of
this argument.`),Cs=l(),Xe=a("p"),ca=n("This model was contributed by "),Gt=a("a"),ha=n("keskarnitishr"),pa=n(`. The original code can be found
`),Kt=a("a"),ua=n("here"),fa=n("."),bs=l(),lt=a("h2"),Lt=a("a"),wn=a("span"),w(Jt.$$.fragment),ma=l(),Ln=a("span"),ga=n("CTRLConfig"),ys=l(),ye=a("div"),w(Xt.$$.fragment),_a=l(),Je=a("p"),Ta=n("This is the configuration class to store the configuration of a "),Jo=a("a"),va=n("CTRLModel"),ka=n(" or a "),Xo=a("a"),Ca=n("TFCTRLModel"),ba=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),ya=n("ctrl"),wa=n(" architecture from SalesForce."),La=l(),dt=a("p"),$a=n("Configuration objects inherit from "),Qo=a("a"),Ra=n("PretrainedConfig"),Ma=n(` and can be used to control the model outputs. Read the
documentation from `),Yo=a("a"),Ea=n("PretrainedConfig"),Fa=n(" for more information."),qa=l(),$n=a("p"),za=n("Examples:"),Pa=l(),w(Yt.$$.fragment),ws=l(),ct=a("h2"),$t=a("a"),Rn=a("span"),w(Zt.$$.fragment),xa=l(),Mn=a("span"),Sa=n("CTRLTokenizer"),Ls=l(),Ne=a("div"),w(eo.$$.fragment),ja=l(),En=a("p"),Ia=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Na=l(),to=a("p"),Da=n("This tokenizer inherits from "),Zo=a("a"),Aa=n("PreTrainedTokenizer"),Ha=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Oa=l(),Fn=a("div"),$s=l(),ht=a("h2"),Rt=a("a"),qn=a("span"),w(oo.$$.fragment),Wa=l(),zn=a("span"),Ba=n("CTRLModel"),Rs=l(),we=a("div"),w(no.$$.fragment),Ua=l(),Pn=a("p"),Va=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ga=l(),so=a("p"),Ka=n("This model inherits from "),en=a("a"),Ja=n("PreTrainedModel"),Xa=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa=l(),ao=a("p"),Ya=n("This model is also a PyTorch "),ro=a("a"),Za=n("torch.nn.Module"),er=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tr=l(),qe=a("div"),w(io.$$.fragment),or=l(),pt=a("p"),nr=n("The "),tn=a("a"),sr=n("CTRLModel"),ar=n(" forward method, overrides the "),xn=a("code"),rr=n("__call__"),ir=n(" special method."),lr=l(),w(Mt.$$.fragment),dr=l(),Sn=a("p"),cr=n("Example:"),hr=l(),w(lo.$$.fragment),Ms=l(),ut=a("h2"),Et=a("a"),jn=a("span"),w(co.$$.fragment),pr=l(),In=a("span"),ur=n("CTRLLMHeadModel"),Es=l(),Le=a("div"),w(ho.$$.fragment),fr=l(),Nn=a("p"),mr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),gr=l(),po=a("p"),_r=n("This model inherits from "),on=a("a"),Tr=n("PreTrainedModel"),vr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kr=l(),uo=a("p"),Cr=n("This model is also a PyTorch "),fo=a("a"),br=n("torch.nn.Module"),yr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wr=l(),ze=a("div"),w(mo.$$.fragment),Lr=l(),ft=a("p"),$r=n("The "),nn=a("a"),Rr=n("CTRLLMHeadModel"),Mr=n(" forward method, overrides the "),Dn=a("code"),Er=n("__call__"),Fr=n(" special method."),qr=l(),w(Ft.$$.fragment),zr=l(),An=a("p"),Pr=n("Example:"),xr=l(),w(go.$$.fragment),Fs=l(),mt=a("h2"),qt=a("a"),Hn=a("span"),w(_o.$$.fragment),Sr=l(),On=a("span"),jr=n("CTRLForSequenceClassification"),qs=l(),$e=a("div"),w(To.$$.fragment),Ir=l(),Re=a("p"),Nr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),sn=a("a"),Dr=n("CTRLForSequenceClassification"),Ar=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Wn=a("code"),Hr=n("pad_token_id"),Or=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Bn=a("code"),Wr=n("pad_token_id"),Br=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Un=a("code"),Ur=n("inputs_embeds"),Vr=n(" are passed instead of "),Vn=a("code"),Gr=n("input_ids"),Kr=n(`, it does the same (take the last
value in each row of the batch).`),Jr=l(),vo=a("p"),Xr=n("This model inherits from "),an=a("a"),Qr=n("PreTrainedModel"),Yr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr=l(),ko=a("p"),ei=n("This model is also a PyTorch "),Co=a("a"),ti=n("torch.nn.Module"),oi=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ni=l(),ie=a("div"),w(bo.$$.fragment),si=l(),gt=a("p"),ai=n("The "),rn=a("a"),ri=n("CTRLForSequenceClassification"),ii=n(" forward method, overrides the "),Gn=a("code"),li=n("__call__"),di=n(" special method."),ci=l(),w(zt.$$.fragment),hi=l(),Kn=a("p"),pi=n("Example of single-label classification:"),ui=l(),w(yo.$$.fragment),fi=l(),Jn=a("p"),mi=n("Example of multi-label classification:"),gi=l(),w(wo.$$.fragment),zs=l(),_t=a("h2"),Pt=a("a"),Xn=a("span"),w(Lo.$$.fragment),_i=l(),Qn=a("span"),Ti=n("TFCTRLModel"),Ps=l(),le=a("div"),w($o.$$.fragment),vi=l(),Yn=a("p"),ki=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ci=l(),Ro=a("p"),bi=n("This model inherits from "),ln=a("a"),yi=n("TFPreTrainedModel"),wi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li=l(),Mo=a("p"),$i=n("This model is also a "),Eo=a("a"),Ri=n("tf.keras.Model"),Mi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ei=l(),w(xt.$$.fragment),Fi=l(),Pe=a("div"),w(Fo.$$.fragment),qi=l(),Tt=a("p"),zi=n("The "),dn=a("a"),Pi=n("TFCTRLModel"),xi=n(" forward method, overrides the "),Zn=a("code"),Si=n("__call__"),ji=n(" special method."),Ii=l(),w(St.$$.fragment),Ni=l(),es=a("p"),Di=n("Example:"),Ai=l(),w(qo.$$.fragment),xs=l(),vt=a("h2"),jt=a("a"),ts=a("span"),w(zo.$$.fragment),Hi=l(),os=a("span"),Oi=n("TFCTRLLMHeadModel"),Ss=l(),de=a("div"),w(Po.$$.fragment),Wi=l(),ns=a("p"),Bi=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ui=l(),xo=a("p"),Vi=n("This model inherits from "),cn=a("a"),Gi=n("TFPreTrainedModel"),Ki=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji=l(),So=a("p"),Xi=n("This model is also a "),jo=a("a"),Qi=n("tf.keras.Model"),Yi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zi=l(),w(It.$$.fragment),el=l(),xe=a("div"),w(Io.$$.fragment),tl=l(),kt=a("p"),ol=n("The "),hn=a("a"),nl=n("TFCTRLLMHeadModel"),sl=n(" forward method, overrides the "),ss=a("code"),al=n("__call__"),rl=n(" special method."),il=l(),w(Nt.$$.fragment),ll=l(),as=a("p"),dl=n("Example:"),cl=l(),w(No.$$.fragment),js=l(),Ct=a("h2"),Dt=a("a"),rs=a("span"),w(Do.$$.fragment),hl=l(),is=a("span"),pl=n("TFCTRLForSequenceClassification"),Is=l(),J=a("div"),w(Ao.$$.fragment),ul=l(),ls=a("p"),fl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),ml=l(),pn=a("p"),un=a("a"),gl=n("TFCTRLForSequenceClassification"),_l=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Tl=l(),De=a("p"),vl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ds=a("code"),kl=n("pad_token_id"),Cl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),cs=a("code"),bl=n("pad_token_id"),yl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),hs=a("code"),wl=n("inputs_embeds"),Ll=n(" are passed instead of "),ps=a("code"),$l=n("input_ids"),Rl=n(`, it does the same (take the last value in
each row of the batch).`),Ml=l(),Ho=a("p"),El=n("This model inherits from "),fn=a("a"),Fl=n("TFPreTrainedModel"),ql=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl=l(),Oo=a("p"),Pl=n("This model is also a "),Wo=a("a"),xl=n("tf.keras.Model"),Sl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl=l(),w(At.$$.fragment),Il=l(),Se=a("div"),w(Bo.$$.fragment),Nl=l(),bt=a("p"),Dl=n("The "),mn=a("a"),Al=n("TFCTRLForSequenceClassification"),Hl=n(" forward method, overrides the "),us=a("code"),Ol=n("__call__"),Wl=n(" special method."),Bl=l(),w(Ht.$$.fragment),Ul=l(),fs=a("p"),Vl=n("Example:"),Gl=l(),w(Uo.$$.fragment),this.h()},l(o){const f=jc('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),C=d(o),m=r(o,"H1",{class:!0});var Vo=i(m);g=r(Vo,"A",{id:!0,class:!0,href:!0});var ms=i(g);v=r(ms,"SPAN",{});var gs=i(v);L(T.$$.fragment,gs),gs.forEach(t),ms.forEach(t),_=d(Vo),y=r(Vo,"SPAN",{});var _s=i(y);me=s(_s,"CTRL"),_s.forEach(t),Vo.forEach(t),Q=d(o),b=r(o,"H2",{class:!0});var Go=i(b);X=r(Go,"A",{id:!0,class:!0,href:!0});var Ts=i(X);A=r(Ts,"SPAN",{});var vs=i(A);L(Y.$$.fragment,vs),vs.forEach(t),Ts.forEach(t),ge=d(Go),H=r(Go,"SPAN",{});var ks=i(H);_e=s(ks,"Overview"),ks.forEach(t),Go.forEach(t),ce=d(o),x=r(o,"P",{});var yt=i(x);S=s(yt,"CTRL model was proposed in "),Z=r(yt,"A",{href:!0,rel:!0});var Jl=i(Z);oe=s(Jl,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),Jl.forEach(t),F=s(yt," by Nitish Shirish Keskar"),q=r(yt,"EM",{});var Xl=i(q);Te=s(Xl,", Bryan McCann"),Xl.forEach(t),U=s(yt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),yt.forEach(t),he=d(o),ne=r(o,"P",{});var Ql=i(ne);V=s(Ql,"The abstract from the paper is the following:"),Ql.forEach(t),pe=d(o),se=r(o,"P",{});var Yl=i(se);z=r(Yl,"EM",{});var Zl=i(z);ve=s(Zl,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),Zl.forEach(t),Yl.forEach(t),O=d(o),ae=r(o,"P",{});var ed=i(ae);ke=s(ed,"Tips:"),ed.forEach(t),W=d(o),j=r(o,"UL",{});var Ot=i(j);ee=r(Ot,"LI",{});var Ds=i(ee);I=s(Ds,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=r(Ds,"A",{href:!0,rel:!0});var td=i(te);G=s(td,"original implementation"),td.forEach(t),Ce=s(Ds,` for
more information.`),Ds.forEach(t),h=d(Ot),k=r(Ot,"LI",{});var od=i(k);re=s(od,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),od.forEach(t),Ae=d(Ot),ue=r(Ot,"LI",{});var As=i(ue);N=s(As,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Me=r(As,"EM",{});var nd=i(Me);He=s(nd,"run_generation.py"),nd.forEach(t),Oe=s(As," example script."),As.forEach(t),D=d(Ot),P=r(Ot,"LI",{});var Wt=i(P);We=s(Wt,"The PyTorch models can take the "),Ee=r(Wt,"EM",{});var sd=i(Ee);K=s(sd,"past"),sd.forEach(t),Be=s(Wt,` as input, which is the previously computed key/value attention pairs. Using
this `),Fe=r(Wt,"EM",{});var ad=i(Fe);be=s(ad,"past"),ad.forEach(t),Ue=s(Wt,` value prevents the model from re-computing pre-computed values in the context of text generation. See
`),Ko=r(Wt,"A",{href:!0});var rd=i(Ko);la=s(rd,"reusing the past in generative models"),rd.forEach(t),da=s(Wt,` for more information on the usage of
this argument.`),Wt.forEach(t),Ot.forEach(t),Cs=d(o),Xe=r(o,"P",{});var gn=i(Xe);ca=s(gn,"This model was contributed by "),Gt=r(gn,"A",{href:!0,rel:!0});var id=i(Gt);ha=s(id,"keskarnitishr"),id.forEach(t),pa=s(gn,`. The original code can be found
`),Kt=r(gn,"A",{href:!0,rel:!0});var ld=i(Kt);ua=s(ld,"here"),ld.forEach(t),fa=s(gn,"."),gn.forEach(t),bs=d(o),lt=r(o,"H2",{class:!0});var Hs=i(lt);Lt=r(Hs,"A",{id:!0,class:!0,href:!0});var dd=i(Lt);wn=r(dd,"SPAN",{});var cd=i(wn);L(Jt.$$.fragment,cd),cd.forEach(t),dd.forEach(t),ma=d(Hs),Ln=r(Hs,"SPAN",{});var hd=i(Ln);ga=s(hd,"CTRLConfig"),hd.forEach(t),Hs.forEach(t),ys=d(o),ye=r(o,"DIV",{class:!0});var Qe=i(ye);L(Xt.$$.fragment,Qe),_a=d(Qe),Je=r(Qe,"P",{});var Bt=i(Je);Ta=s(Bt,"This is the configuration class to store the configuration of a "),Jo=r(Bt,"A",{href:!0});var pd=i(Jo);va=s(pd,"CTRLModel"),pd.forEach(t),ka=s(Bt," or a "),Xo=r(Bt,"A",{href:!0});var ud=i(Xo);Ca=s(ud,"TFCTRLModel"),ud.forEach(t),ba=s(Bt,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Bt,"A",{href:!0,rel:!0});var fd=i(Qt);ya=s(fd,"ctrl"),fd.forEach(t),wa=s(Bt," architecture from SalesForce."),Bt.forEach(t),La=d(Qe),dt=r(Qe,"P",{});var _n=i(dt);$a=s(_n,"Configuration objects inherit from "),Qo=r(_n,"A",{href:!0});var md=i(Qo);Ra=s(md,"PretrainedConfig"),md.forEach(t),Ma=s(_n,` and can be used to control the model outputs. Read the
documentation from `),Yo=r(_n,"A",{href:!0});var gd=i(Yo);Ea=s(gd,"PretrainedConfig"),gd.forEach(t),Fa=s(_n," for more information."),_n.forEach(t),qa=d(Qe),$n=r(Qe,"P",{});var _d=i($n);za=s(_d,"Examples:"),_d.forEach(t),Pa=d(Qe),L(Yt.$$.fragment,Qe),Qe.forEach(t),ws=d(o),ct=r(o,"H2",{class:!0});var Os=i(ct);$t=r(Os,"A",{id:!0,class:!0,href:!0});var Td=i($t);Rn=r(Td,"SPAN",{});var vd=i(Rn);L(Zt.$$.fragment,vd),vd.forEach(t),Td.forEach(t),xa=d(Os),Mn=r(Os,"SPAN",{});var kd=i(Mn);Sa=s(kd,"CTRLTokenizer"),kd.forEach(t),Os.forEach(t),Ls=d(o),Ne=r(o,"DIV",{class:!0});var Ut=i(Ne);L(eo.$$.fragment,Ut),ja=d(Ut),En=r(Ut,"P",{});var Cd=i(En);Ia=s(Cd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Cd.forEach(t),Na=d(Ut),to=r(Ut,"P",{});var Ws=i(to);Da=s(Ws,"This tokenizer inherits from "),Zo=r(Ws,"A",{href:!0});var bd=i(Zo);Aa=s(bd,"PreTrainedTokenizer"),bd.forEach(t),Ha=s(Ws,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ws.forEach(t),Oa=d(Ut),Fn=r(Ut,"DIV",{class:!0}),i(Fn).forEach(t),Ut.forEach(t),$s=d(o),ht=r(o,"H2",{class:!0});var Bs=i(ht);Rt=r(Bs,"A",{id:!0,class:!0,href:!0});var yd=i(Rt);qn=r(yd,"SPAN",{});var wd=i(qn);L(oo.$$.fragment,wd),wd.forEach(t),yd.forEach(t),Wa=d(Bs),zn=r(Bs,"SPAN",{});var Ld=i(zn);Ba=s(Ld,"CTRLModel"),Ld.forEach(t),Bs.forEach(t),Rs=d(o),we=r(o,"DIV",{class:!0});var Ye=i(we);L(no.$$.fragment,Ye),Ua=d(Ye),Pn=r(Ye,"P",{});var $d=i(Pn);Va=s($d,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),$d.forEach(t),Ga=d(Ye),so=r(Ye,"P",{});var Us=i(so);Ka=s(Us,"This model inherits from "),en=r(Us,"A",{href:!0});var Rd=i(en);Ja=s(Rd,"PreTrainedModel"),Rd.forEach(t),Xa=s(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us.forEach(t),Qa=d(Ye),ao=r(Ye,"P",{});var Vs=i(ao);Ya=s(Vs,"This model is also a PyTorch "),ro=r(Vs,"A",{href:!0,rel:!0});var Md=i(ro);Za=s(Md,"torch.nn.Module"),Md.forEach(t),er=s(Vs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vs.forEach(t),tr=d(Ye),qe=r(Ye,"DIV",{class:!0});var Ze=i(qe);L(io.$$.fragment,Ze),or=d(Ze),pt=r(Ze,"P",{});var Tn=i(pt);nr=s(Tn,"The "),tn=r(Tn,"A",{href:!0});var Ed=i(tn);sr=s(Ed,"CTRLModel"),Ed.forEach(t),ar=s(Tn," forward method, overrides the "),xn=r(Tn,"CODE",{});var Fd=i(xn);rr=s(Fd,"__call__"),Fd.forEach(t),ir=s(Tn," special method."),Tn.forEach(t),lr=d(Ze),L(Mt.$$.fragment,Ze),dr=d(Ze),Sn=r(Ze,"P",{});var qd=i(Sn);cr=s(qd,"Example:"),qd.forEach(t),hr=d(Ze),L(lo.$$.fragment,Ze),Ze.forEach(t),Ye.forEach(t),Ms=d(o),ut=r(o,"H2",{class:!0});var Gs=i(ut);Et=r(Gs,"A",{id:!0,class:!0,href:!0});var zd=i(Et);jn=r(zd,"SPAN",{});var Pd=i(jn);L(co.$$.fragment,Pd),Pd.forEach(t),zd.forEach(t),pr=d(Gs),In=r(Gs,"SPAN",{});var xd=i(In);ur=s(xd,"CTRLLMHeadModel"),xd.forEach(t),Gs.forEach(t),Es=d(o),Le=r(o,"DIV",{class:!0});var et=i(Le);L(ho.$$.fragment,et),fr=d(et),Nn=r(et,"P",{});var Sd=i(Nn);mr=s(Sd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Sd.forEach(t),gr=d(et),po=r(et,"P",{});var Ks=i(po);_r=s(Ks,"This model inherits from "),on=r(Ks,"A",{href:!0});var jd=i(on);Tr=s(jd,"PreTrainedModel"),jd.forEach(t),vr=s(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(t),kr=d(et),uo=r(et,"P",{});var Js=i(uo);Cr=s(Js,"This model is also a PyTorch "),fo=r(Js,"A",{href:!0,rel:!0});var Id=i(fo);br=s(Id,"torch.nn.Module"),Id.forEach(t),yr=s(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(t),wr=d(et),ze=r(et,"DIV",{class:!0});var tt=i(ze);L(mo.$$.fragment,tt),Lr=d(tt),ft=r(tt,"P",{});var vn=i(ft);$r=s(vn,"The "),nn=r(vn,"A",{href:!0});var Nd=i(nn);Rr=s(Nd,"CTRLLMHeadModel"),Nd.forEach(t),Mr=s(vn," forward method, overrides the "),Dn=r(vn,"CODE",{});var Dd=i(Dn);Er=s(Dd,"__call__"),Dd.forEach(t),Fr=s(vn," special method."),vn.forEach(t),qr=d(tt),L(Ft.$$.fragment,tt),zr=d(tt),An=r(tt,"P",{});var Ad=i(An);Pr=s(Ad,"Example:"),Ad.forEach(t),xr=d(tt),L(go.$$.fragment,tt),tt.forEach(t),et.forEach(t),Fs=d(o),mt=r(o,"H2",{class:!0});var Xs=i(mt);qt=r(Xs,"A",{id:!0,class:!0,href:!0});var Hd=i(qt);Hn=r(Hd,"SPAN",{});var Od=i(Hn);L(_o.$$.fragment,Od),Od.forEach(t),Hd.forEach(t),Sr=d(Xs),On=r(Xs,"SPAN",{});var Wd=i(On);jr=s(Wd,"CTRLForSequenceClassification"),Wd.forEach(t),Xs.forEach(t),qs=d(o),$e=r(o,"DIV",{class:!0});var ot=i($e);L(To.$$.fragment,ot),Ir=d(ot),Re=r(ot,"P",{});var Ve=i(Re);Nr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),sn=r(Ve,"A",{href:!0});var Bd=i(sn);Dr=s(Bd,"CTRLForSequenceClassification"),Bd.forEach(t),Ar=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Wn=r(Ve,"CODE",{});var Ud=i(Wn);Hr=s(Ud,"pad_token_id"),Ud.forEach(t),Or=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Bn=r(Ve,"CODE",{});var Vd=i(Bn);Wr=s(Vd,"pad_token_id"),Vd.forEach(t),Br=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Un=r(Ve,"CODE",{});var Gd=i(Un);Ur=s(Gd,"inputs_embeds"),Gd.forEach(t),Vr=s(Ve," are passed instead of "),Vn=r(Ve,"CODE",{});var Kd=i(Vn);Gr=s(Kd,"input_ids"),Kd.forEach(t),Kr=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),Jr=d(ot),vo=r(ot,"P",{});var Qs=i(vo);Xr=s(Qs,"This model inherits from "),an=r(Qs,"A",{href:!0});var Jd=i(an);Qr=s(Jd,"PreTrainedModel"),Jd.forEach(t),Yr=s(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qs.forEach(t),Zr=d(ot),ko=r(ot,"P",{});var Ys=i(ko);ei=s(Ys,"This model is also a PyTorch "),Co=r(Ys,"A",{href:!0,rel:!0});var Xd=i(Co);ti=s(Xd,"torch.nn.Module"),Xd.forEach(t),oi=s(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),ni=d(ot),ie=r(ot,"DIV",{class:!0});var je=i(ie);L(bo.$$.fragment,je),si=d(je),gt=r(je,"P",{});var kn=i(gt);ai=s(kn,"The "),rn=r(kn,"A",{href:!0});var Qd=i(rn);ri=s(Qd,"CTRLForSequenceClassification"),Qd.forEach(t),ii=s(kn," forward method, overrides the "),Gn=r(kn,"CODE",{});var Yd=i(Gn);li=s(Yd,"__call__"),Yd.forEach(t),di=s(kn," special method."),kn.forEach(t),ci=d(je),L(zt.$$.fragment,je),hi=d(je),Kn=r(je,"P",{});var Zd=i(Kn);pi=s(Zd,"Example of single-label classification:"),Zd.forEach(t),ui=d(je),L(yo.$$.fragment,je),fi=d(je),Jn=r(je,"P",{});var ec=i(Jn);mi=s(ec,"Example of multi-label classification:"),ec.forEach(t),gi=d(je),L(wo.$$.fragment,je),je.forEach(t),ot.forEach(t),zs=d(o),_t=r(o,"H2",{class:!0});var Zs=i(_t);Pt=r(Zs,"A",{id:!0,class:!0,href:!0});var tc=i(Pt);Xn=r(tc,"SPAN",{});var oc=i(Xn);L(Lo.$$.fragment,oc),oc.forEach(t),tc.forEach(t),_i=d(Zs),Qn=r(Zs,"SPAN",{});var nc=i(Qn);Ti=s(nc,"TFCTRLModel"),nc.forEach(t),Zs.forEach(t),Ps=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);L($o.$$.fragment,Ge),vi=d(Ge),Yn=r(Ge,"P",{});var sc=i(Yn);ki=s(sc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),sc.forEach(t),Ci=d(Ge),Ro=r(Ge,"P",{});var ea=i(Ro);bi=s(ea,"This model inherits from "),ln=r(ea,"A",{href:!0});var ac=i(ln);yi=s(ac,"TFPreTrainedModel"),ac.forEach(t),wi=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),Li=d(Ge),Mo=r(Ge,"P",{});var ta=i(Mo);$i=s(ta,"This model is also a "),Eo=r(ta,"A",{href:!0,rel:!0});var rc=i(Eo);Ri=s(rc,"tf.keras.Model"),rc.forEach(t),Mi=s(ta,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ta.forEach(t),Ei=d(Ge),L(xt.$$.fragment,Ge),Fi=d(Ge),Pe=r(Ge,"DIV",{class:!0});var nt=i(Pe);L(Fo.$$.fragment,nt),qi=d(nt),Tt=r(nt,"P",{});var Cn=i(Tt);zi=s(Cn,"The "),dn=r(Cn,"A",{href:!0});var ic=i(dn);Pi=s(ic,"TFCTRLModel"),ic.forEach(t),xi=s(Cn," forward method, overrides the "),Zn=r(Cn,"CODE",{});var lc=i(Zn);Si=s(lc,"__call__"),lc.forEach(t),ji=s(Cn," special method."),Cn.forEach(t),Ii=d(nt),L(St.$$.fragment,nt),Ni=d(nt),es=r(nt,"P",{});var dc=i(es);Di=s(dc,"Example:"),dc.forEach(t),Ai=d(nt),L(qo.$$.fragment,nt),nt.forEach(t),Ge.forEach(t),xs=d(o),vt=r(o,"H2",{class:!0});var oa=i(vt);jt=r(oa,"A",{id:!0,class:!0,href:!0});var cc=i(jt);ts=r(cc,"SPAN",{});var hc=i(ts);L(zo.$$.fragment,hc),hc.forEach(t),cc.forEach(t),Hi=d(oa),os=r(oa,"SPAN",{});var pc=i(os);Oi=s(pc,"TFCTRLLMHeadModel"),pc.forEach(t),oa.forEach(t),Ss=d(o),de=r(o,"DIV",{class:!0});var Ke=i(de);L(Po.$$.fragment,Ke),Wi=d(Ke),ns=r(Ke,"P",{});var uc=i(ns);Bi=s(uc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),uc.forEach(t),Ui=d(Ke),xo=r(Ke,"P",{});var na=i(xo);Vi=s(na,"This model inherits from "),cn=r(na,"A",{href:!0});var fc=i(cn);Gi=s(fc,"TFPreTrainedModel"),fc.forEach(t),Ki=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(t),Ji=d(Ke),So=r(Ke,"P",{});var sa=i(So);Xi=s(sa,"This model is also a "),jo=r(sa,"A",{href:!0,rel:!0});var mc=i(jo);Qi=s(mc,"tf.keras.Model"),mc.forEach(t),Yi=s(sa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sa.forEach(t),Zi=d(Ke),L(It.$$.fragment,Ke),el=d(Ke),xe=r(Ke,"DIV",{class:!0});var st=i(xe);L(Io.$$.fragment,st),tl=d(st),kt=r(st,"P",{});var bn=i(kt);ol=s(bn,"The "),hn=r(bn,"A",{href:!0});var gc=i(hn);nl=s(gc,"TFCTRLLMHeadModel"),gc.forEach(t),sl=s(bn," forward method, overrides the "),ss=r(bn,"CODE",{});var _c=i(ss);al=s(_c,"__call__"),_c.forEach(t),rl=s(bn," special method."),bn.forEach(t),il=d(st),L(Nt.$$.fragment,st),ll=d(st),as=r(st,"P",{});var Tc=i(as);dl=s(Tc,"Example:"),Tc.forEach(t),cl=d(st),L(No.$$.fragment,st),st.forEach(t),Ke.forEach(t),js=d(o),Ct=r(o,"H2",{class:!0});var aa=i(Ct);Dt=r(aa,"A",{id:!0,class:!0,href:!0});var vc=i(Dt);rs=r(vc,"SPAN",{});var kc=i(rs);L(Do.$$.fragment,kc),kc.forEach(t),vc.forEach(t),hl=d(aa),is=r(aa,"SPAN",{});var Cc=i(is);pl=s(Cc,"TFCTRLForSequenceClassification"),Cc.forEach(t),aa.forEach(t),Is=d(o),J=r(o,"DIV",{class:!0});var fe=i(J);L(Ao.$$.fragment,fe),ul=d(fe),ls=r(fe,"P",{});var bc=i(ls);fl=s(bc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),bc.forEach(t),ml=d(fe),pn=r(fe,"P",{});var Kl=i(pn);un=r(Kl,"A",{href:!0});var yc=i(un);gl=s(yc,"TFCTRLForSequenceClassification"),yc.forEach(t),_l=s(Kl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Kl.forEach(t),Tl=d(fe),De=r(fe,"P",{});var at=i(De);vl=s(at,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ds=r(at,"CODE",{});var wc=i(ds);kl=s(wc,"pad_token_id"),wc.forEach(t),Cl=s(at,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),cs=r(at,"CODE",{});var Lc=i(cs);bl=s(Lc,"pad_token_id"),Lc.forEach(t),yl=s(at,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),hs=r(at,"CODE",{});var $c=i(hs);wl=s($c,"inputs_embeds"),$c.forEach(t),Ll=s(at," are passed instead of "),ps=r(at,"CODE",{});var Rc=i(ps);$l=s(Rc,"input_ids"),Rc.forEach(t),Rl=s(at,`, it does the same (take the last value in
each row of the batch).`),at.forEach(t),Ml=d(fe),Ho=r(fe,"P",{});var ra=i(Ho);El=s(ra,"This model inherits from "),fn=r(ra,"A",{href:!0});var Mc=i(fn);Fl=s(Mc,"TFPreTrainedModel"),Mc.forEach(t),ql=s(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),zl=d(fe),Oo=r(fe,"P",{});var ia=i(Oo);Pl=s(ia,"This model is also a "),Wo=r(ia,"A",{href:!0,rel:!0});var Ec=i(Wo);xl=s(Ec,"tf.keras.Model"),Ec.forEach(t),Sl=s(ia,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ia.forEach(t),jl=d(fe),L(At.$$.fragment,fe),Il=d(fe),Se=r(fe,"DIV",{class:!0});var rt=i(Se);L(Bo.$$.fragment,rt),Nl=d(rt),bt=r(rt,"P",{});var yn=i(bt);Dl=s(yn,"The "),mn=r(yn,"A",{href:!0});var Fc=i(mn);Al=s(Fc,"TFCTRLForSequenceClassification"),Fc.forEach(t),Hl=s(yn," forward method, overrides the "),us=r(yn,"CODE",{});var qc=i(us);Ol=s(qc,"__call__"),qc.forEach(t),Wl=s(yn," special method."),yn.forEach(t),Bl=d(rt),L(Ht.$$.fragment,rt),Ul=d(rt),fs=r(rt,"P",{});var zc=i(fs);Vl=s(zc,"Example:"),zc.forEach(t),Gl=d(rt),L(Uo.$$.fragment,rt),rt.forEach(t),fe.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Gc)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(m,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(b,"class","relative group"),c(Z,"href","https://arxiv.org/abs/1909.05858"),c(Z,"rel","nofollow"),c(te,"href","https://github.com/salesforce/ctrl"),c(te,"rel","nofollow"),c(Ko,"href","../quickstart#using-the-past"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Lt,"id","transformers.CTRLConfig"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.CTRLConfig"),c(lt,"class","relative group"),c(Jo,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLModel"),c(Xo,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(Qo,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yo,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(ye,"class","docstring"),c($t,"id","transformers.CTRLTokenizer"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.CTRLTokenizer"),c(ct,"class","relative group"),c(Zo,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Fn,"class","docstring"),c(Ne,"class","docstring"),c(Rt,"id","transformers.CTRLModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLModel"),c(ht,"class","relative group"),c(en,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ro,"rel","nofollow"),c(tn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLModel"),c(qe,"class","docstring"),c(we,"class","docstring"),c(Et,"id","transformers.CTRLLMHeadModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLLMHeadModel"),c(ut,"class","relative group"),c(on,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(nn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(ze,"class","docstring"),c(Le,"class","docstring"),c(qt,"id","transformers.CTRLForSequenceClassification"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLForSequenceClassification"),c(mt,"class","relative group"),c(sn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(an,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Co,"rel","nofollow"),c(rn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ie,"class","docstring"),c($e,"class","docstring"),c(Pt,"id","transformers.TFCTRLModel"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.TFCTRLModel"),c(_t,"class","relative group"),c(ln,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Eo,"rel","nofollow"),c(dn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Pe,"class","docstring"),c(le,"class","docstring"),c(jt,"id","transformers.TFCTRLLMHeadModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFCTRLLMHeadModel"),c(vt,"class","relative group"),c(cn,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(jo,"rel","nofollow"),c(hn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(xe,"class","docstring"),c(de,"class","docstring"),c(Dt,"id","transformers.TFCTRLForSequenceClassification"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFCTRLForSequenceClassification"),c(Ct,"class","relative group"),c(un,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(fn,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(mn,"href","/docs/transformers/v4.16.2/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(Se,"class","docstring"),c(J,"class","docstring")},m(o,f){e(document.head,p),u(o,C,f),u(o,m,f),e(m,g),e(g,v),$(T,v,null),e(m,_),e(m,y),e(y,me),u(o,Q,f),u(o,b,f),e(b,X),e(X,A),$(Y,A,null),e(b,ge),e(b,H),e(H,_e),u(o,ce,f),u(o,x,f),e(x,S),e(x,Z),e(Z,oe),e(x,F),e(x,q),e(q,Te),e(x,U),u(o,he,f),u(o,ne,f),e(ne,V),u(o,pe,f),u(o,se,f),e(se,z),e(z,ve),u(o,O,f),u(o,ae,f),e(ae,ke),u(o,W,f),u(o,j,f),e(j,ee),e(ee,I),e(ee,te),e(te,G),e(ee,Ce),e(j,h),e(j,k),e(k,re),e(j,Ae),e(j,ue),e(ue,N),e(ue,Me),e(Me,He),e(ue,Oe),e(j,D),e(j,P),e(P,We),e(P,Ee),e(Ee,K),e(P,Be),e(P,Fe),e(Fe,be),e(P,Ue),e(P,Ko),e(Ko,la),e(P,da),u(o,Cs,f),u(o,Xe,f),e(Xe,ca),e(Xe,Gt),e(Gt,ha),e(Xe,pa),e(Xe,Kt),e(Kt,ua),e(Xe,fa),u(o,bs,f),u(o,lt,f),e(lt,Lt),e(Lt,wn),$(Jt,wn,null),e(lt,ma),e(lt,Ln),e(Ln,ga),u(o,ys,f),u(o,ye,f),$(Xt,ye,null),e(ye,_a),e(ye,Je),e(Je,Ta),e(Je,Jo),e(Jo,va),e(Je,ka),e(Je,Xo),e(Xo,Ca),e(Je,ba),e(Je,Qt),e(Qt,ya),e(Je,wa),e(ye,La),e(ye,dt),e(dt,$a),e(dt,Qo),e(Qo,Ra),e(dt,Ma),e(dt,Yo),e(Yo,Ea),e(dt,Fa),e(ye,qa),e(ye,$n),e($n,za),e(ye,Pa),$(Yt,ye,null),u(o,ws,f),u(o,ct,f),e(ct,$t),e($t,Rn),$(Zt,Rn,null),e(ct,xa),e(ct,Mn),e(Mn,Sa),u(o,Ls,f),u(o,Ne,f),$(eo,Ne,null),e(Ne,ja),e(Ne,En),e(En,Ia),e(Ne,Na),e(Ne,to),e(to,Da),e(to,Zo),e(Zo,Aa),e(to,Ha),e(Ne,Oa),e(Ne,Fn),u(o,$s,f),u(o,ht,f),e(ht,Rt),e(Rt,qn),$(oo,qn,null),e(ht,Wa),e(ht,zn),e(zn,Ba),u(o,Rs,f),u(o,we,f),$(no,we,null),e(we,Ua),e(we,Pn),e(Pn,Va),e(we,Ga),e(we,so),e(so,Ka),e(so,en),e(en,Ja),e(so,Xa),e(we,Qa),e(we,ao),e(ao,Ya),e(ao,ro),e(ro,Za),e(ao,er),e(we,tr),e(we,qe),$(io,qe,null),e(qe,or),e(qe,pt),e(pt,nr),e(pt,tn),e(tn,sr),e(pt,ar),e(pt,xn),e(xn,rr),e(pt,ir),e(qe,lr),$(Mt,qe,null),e(qe,dr),e(qe,Sn),e(Sn,cr),e(qe,hr),$(lo,qe,null),u(o,Ms,f),u(o,ut,f),e(ut,Et),e(Et,jn),$(co,jn,null),e(ut,pr),e(ut,In),e(In,ur),u(o,Es,f),u(o,Le,f),$(ho,Le,null),e(Le,fr),e(Le,Nn),e(Nn,mr),e(Le,gr),e(Le,po),e(po,_r),e(po,on),e(on,Tr),e(po,vr),e(Le,kr),e(Le,uo),e(uo,Cr),e(uo,fo),e(fo,br),e(uo,yr),e(Le,wr),e(Le,ze),$(mo,ze,null),e(ze,Lr),e(ze,ft),e(ft,$r),e(ft,nn),e(nn,Rr),e(ft,Mr),e(ft,Dn),e(Dn,Er),e(ft,Fr),e(ze,qr),$(Ft,ze,null),e(ze,zr),e(ze,An),e(An,Pr),e(ze,xr),$(go,ze,null),u(o,Fs,f),u(o,mt,f),e(mt,qt),e(qt,Hn),$(_o,Hn,null),e(mt,Sr),e(mt,On),e(On,jr),u(o,qs,f),u(o,$e,f),$(To,$e,null),e($e,Ir),e($e,Re),e(Re,Nr),e(Re,sn),e(sn,Dr),e(Re,Ar),e(Re,Wn),e(Wn,Hr),e(Re,Or),e(Re,Bn),e(Bn,Wr),e(Re,Br),e(Re,Un),e(Un,Ur),e(Re,Vr),e(Re,Vn),e(Vn,Gr),e(Re,Kr),e($e,Jr),e($e,vo),e(vo,Xr),e(vo,an),e(an,Qr),e(vo,Yr),e($e,Zr),e($e,ko),e(ko,ei),e(ko,Co),e(Co,ti),e(ko,oi),e($e,ni),e($e,ie),$(bo,ie,null),e(ie,si),e(ie,gt),e(gt,ai),e(gt,rn),e(rn,ri),e(gt,ii),e(gt,Gn),e(Gn,li),e(gt,di),e(ie,ci),$(zt,ie,null),e(ie,hi),e(ie,Kn),e(Kn,pi),e(ie,ui),$(yo,ie,null),e(ie,fi),e(ie,Jn),e(Jn,mi),e(ie,gi),$(wo,ie,null),u(o,zs,f),u(o,_t,f),e(_t,Pt),e(Pt,Xn),$(Lo,Xn,null),e(_t,_i),e(_t,Qn),e(Qn,Ti),u(o,Ps,f),u(o,le,f),$($o,le,null),e(le,vi),e(le,Yn),e(Yn,ki),e(le,Ci),e(le,Ro),e(Ro,bi),e(Ro,ln),e(ln,yi),e(Ro,wi),e(le,Li),e(le,Mo),e(Mo,$i),e(Mo,Eo),e(Eo,Ri),e(Mo,Mi),e(le,Ei),$(xt,le,null),e(le,Fi),e(le,Pe),$(Fo,Pe,null),e(Pe,qi),e(Pe,Tt),e(Tt,zi),e(Tt,dn),e(dn,Pi),e(Tt,xi),e(Tt,Zn),e(Zn,Si),e(Tt,ji),e(Pe,Ii),$(St,Pe,null),e(Pe,Ni),e(Pe,es),e(es,Di),e(Pe,Ai),$(qo,Pe,null),u(o,xs,f),u(o,vt,f),e(vt,jt),e(jt,ts),$(zo,ts,null),e(vt,Hi),e(vt,os),e(os,Oi),u(o,Ss,f),u(o,de,f),$(Po,de,null),e(de,Wi),e(de,ns),e(ns,Bi),e(de,Ui),e(de,xo),e(xo,Vi),e(xo,cn),e(cn,Gi),e(xo,Ki),e(de,Ji),e(de,So),e(So,Xi),e(So,jo),e(jo,Qi),e(So,Yi),e(de,Zi),$(It,de,null),e(de,el),e(de,xe),$(Io,xe,null),e(xe,tl),e(xe,kt),e(kt,ol),e(kt,hn),e(hn,nl),e(kt,sl),e(kt,ss),e(ss,al),e(kt,rl),e(xe,il),$(Nt,xe,null),e(xe,ll),e(xe,as),e(as,dl),e(xe,cl),$(No,xe,null),u(o,js,f),u(o,Ct,f),e(Ct,Dt),e(Dt,rs),$(Do,rs,null),e(Ct,hl),e(Ct,is),e(is,pl),u(o,Is,f),u(o,J,f),$(Ao,J,null),e(J,ul),e(J,ls),e(ls,fl),e(J,ml),e(J,pn),e(pn,un),e(un,gl),e(pn,_l),e(J,Tl),e(J,De),e(De,vl),e(De,ds),e(ds,kl),e(De,Cl),e(De,cs),e(cs,bl),e(De,yl),e(De,hs),e(hs,wl),e(De,Ll),e(De,ps),e(ps,$l),e(De,Rl),e(J,Ml),e(J,Ho),e(Ho,El),e(Ho,fn),e(fn,Fl),e(Ho,ql),e(J,zl),e(J,Oo),e(Oo,Pl),e(Oo,Wo),e(Wo,xl),e(Oo,Sl),e(J,jl),$(At,J,null),e(J,Il),e(J,Se),$(Bo,Se,null),e(Se,Nl),e(Se,bt),e(bt,Dl),e(bt,mn),e(mn,Al),e(bt,Hl),e(bt,us),e(us,Ol),e(bt,Wl),e(Se,Bl),$(Ht,Se,null),e(Se,Ul),e(Se,fs),e(fs,Vl),e(Se,Gl),$(Uo,Se,null),Ns=!0},p(o,[f]){const Vo={};f&2&&(Vo.$$scope={dirty:f,ctx:o}),Mt.$set(Vo);const ms={};f&2&&(ms.$$scope={dirty:f,ctx:o}),Ft.$set(ms);const gs={};f&2&&(gs.$$scope={dirty:f,ctx:o}),zt.$set(gs);const _s={};f&2&&(_s.$$scope={dirty:f,ctx:o}),xt.$set(_s);const Go={};f&2&&(Go.$$scope={dirty:f,ctx:o}),St.$set(Go);const Ts={};f&2&&(Ts.$$scope={dirty:f,ctx:o}),It.$set(Ts);const vs={};f&2&&(vs.$$scope={dirty:f,ctx:o}),Nt.$set(vs);const ks={};f&2&&(ks.$$scope={dirty:f,ctx:o}),At.$set(ks);const yt={};f&2&&(yt.$$scope={dirty:f,ctx:o}),Ht.$set(yt)},i(o){Ns||(R(T.$$.fragment,o),R(Y.$$.fragment,o),R(Jt.$$.fragment,o),R(Xt.$$.fragment,o),R(Yt.$$.fragment,o),R(Zt.$$.fragment,o),R(eo.$$.fragment,o),R(oo.$$.fragment,o),R(no.$$.fragment,o),R(io.$$.fragment,o),R(Mt.$$.fragment,o),R(lo.$$.fragment,o),R(co.$$.fragment,o),R(ho.$$.fragment,o),R(mo.$$.fragment,o),R(Ft.$$.fragment,o),R(go.$$.fragment,o),R(_o.$$.fragment,o),R(To.$$.fragment,o),R(bo.$$.fragment,o),R(zt.$$.fragment,o),R(yo.$$.fragment,o),R(wo.$$.fragment,o),R(Lo.$$.fragment,o),R($o.$$.fragment,o),R(xt.$$.fragment,o),R(Fo.$$.fragment,o),R(St.$$.fragment,o),R(qo.$$.fragment,o),R(zo.$$.fragment,o),R(Po.$$.fragment,o),R(It.$$.fragment,o),R(Io.$$.fragment,o),R(Nt.$$.fragment,o),R(No.$$.fragment,o),R(Do.$$.fragment,o),R(Ao.$$.fragment,o),R(At.$$.fragment,o),R(Bo.$$.fragment,o),R(Ht.$$.fragment,o),R(Uo.$$.fragment,o),Ns=!0)},o(o){M(T.$$.fragment,o),M(Y.$$.fragment,o),M(Jt.$$.fragment,o),M(Xt.$$.fragment,o),M(Yt.$$.fragment,o),M(Zt.$$.fragment,o),M(eo.$$.fragment,o),M(oo.$$.fragment,o),M(no.$$.fragment,o),M(io.$$.fragment,o),M(Mt.$$.fragment,o),M(lo.$$.fragment,o),M(co.$$.fragment,o),M(ho.$$.fragment,o),M(mo.$$.fragment,o),M(Ft.$$.fragment,o),M(go.$$.fragment,o),M(_o.$$.fragment,o),M(To.$$.fragment,o),M(bo.$$.fragment,o),M(zt.$$.fragment,o),M(yo.$$.fragment,o),M(wo.$$.fragment,o),M(Lo.$$.fragment,o),M($o.$$.fragment,o),M(xt.$$.fragment,o),M(Fo.$$.fragment,o),M(St.$$.fragment,o),M(qo.$$.fragment,o),M(zo.$$.fragment,o),M(Po.$$.fragment,o),M(It.$$.fragment,o),M(Io.$$.fragment,o),M(Nt.$$.fragment,o),M(No.$$.fragment,o),M(Do.$$.fragment,o),M(Ao.$$.fragment,o),M(At.$$.fragment,o),M(Bo.$$.fragment,o),M(Ht.$$.fragment,o),M(Uo.$$.fragment,o),Ns=!1},d(o){t(p),o&&t(C),o&&t(m),E(T),o&&t(Q),o&&t(b),E(Y),o&&t(ce),o&&t(x),o&&t(he),o&&t(ne),o&&t(pe),o&&t(se),o&&t(O),o&&t(ae),o&&t(W),o&&t(j),o&&t(Cs),o&&t(Xe),o&&t(bs),o&&t(lt),E(Jt),o&&t(ys),o&&t(ye),E(Xt),E(Yt),o&&t(ws),o&&t(ct),E(Zt),o&&t(Ls),o&&t(Ne),E(eo),o&&t($s),o&&t(ht),E(oo),o&&t(Rs),o&&t(we),E(no),E(io),E(Mt),E(lo),o&&t(Ms),o&&t(ut),E(co),o&&t(Es),o&&t(Le),E(ho),E(mo),E(Ft),E(go),o&&t(Fs),o&&t(mt),E(_o),o&&t(qs),o&&t($e),E(To),E(bo),E(zt),E(yo),E(wo),o&&t(zs),o&&t(_t),E(Lo),o&&t(Ps),o&&t(le),E($o),E(xt),E(Fo),E(St),E(qo),o&&t(xs),o&&t(vt),E(zo),o&&t(Ss),o&&t(de),E(Po),E(It),E(Io),E(Nt),E(No),o&&t(js),o&&t(Ct),E(Do),o&&t(Is),o&&t(J),E(Ao),E(At),E(Bo),E(Ht),E(Uo)}}}const Gc={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function Kc(B,p,C){let{fw:m}=p;return B.$$set=g=>{"fw"in g&&C(0,m=g.fw)},[m]}class th extends Pc{constructor(p){super();xc(this,p,Kc,Vc,Sc,{fw:0})}}export{th as default,Gc as metadata};
