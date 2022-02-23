import{S as wf,i as yf,s as Lf,e as n,k as l,w as b,t as r,L as kf,c as s,d as t,m as d,a,x as w,h as i,b as c,J as e,g as h,y,q as L,o as k,B as $}from"../../chunks/vendor-e859c359.js";import{T as xt}from"../../chunks/Tip-edc75249.js";import{D as de}from"../../chunks/Docstring-ade913b3.js";import{C as Rt}from"../../chunks/CodeBlock-ce4317c2.js";import{I as Ge}from"../../chunks/IconCopyLink-5fae3b20.js";import"../../chunks/CopyButton-77addb3d.js";function $f(V){let p,x,u,g,v;return{c(){p=n("p"),x=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),g=r("Module"),v=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){p=s(T,"P",{});var _=a(p);x=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(_,"CODE",{});var E=a(u);g=i(E,"Module"),E.forEach(t),v=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,p,_),e(p,x),e(p,u),e(u,g),e(p,v)},d(T){T&&t(p)}}}function xf(V){let p,x,u,g,v;return{c(){p=n("p"),x=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),g=r("Module"),v=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){p=s(T,"P",{});var _=a(p);x=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(_,"CODE",{});var E=a(u);g=i(E,"Module"),E.forEach(t),v=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,p,_),e(p,x),e(p,u),e(u,g),e(p,v)},d(T){T&&t(p)}}}function Xf(V){let p,x,u,g,v;return{c(){p=n("p"),x=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),g=r("Module"),v=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){p=s(T,"P",{});var _=a(p);x=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(_,"CODE",{});var E=a(u);g=i(E,"Module"),E.forEach(t),v=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,p,_),e(p,x),e(p,u),e(u,g),e(p,v)},d(T){T&&t(p)}}}function Mf(V){let p,x,u,g,v,T,_,E,we,Q,X,Y,A,Z,ye,D,Le,ue,I,S,ee,ne,F,C,se,U,ge,ae,W,ke,_e,z,$e,B,J,ce,R,xe,fe,O,Te,q,Xe;return{c(){p=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),v=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=n("li"),we=r("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),X=n("p"),Y=r("This second option is useful when using "),A=n("code"),Z=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),D=n("code"),Le=r("model(inputs)"),ue=r("."),I=l(),S=n("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ne=l(),F=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),ke=r("model(inputs_ids)"),_e=l(),z=n("li"),$e=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),J=r("model([input_ids, attention_mask])"),ce=r(" or "),R=n("code"),xe=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),O=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=n("code"),Xe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var M=a(p);x=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),u=d(f),g=s(f,"UL",{});var re=a(g);v=s(re,"LI",{});var ve=a(v);T=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),_=d(re),E=s(re,"LI",{});var We=a(E);we=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),re.forEach(t),Q=d(f),X=s(f,"P",{});var N=a(X);Y=i(N,"This second option is useful when using "),A=s(N,"CODE",{});var Ne=a(A);Z=i(Ne,"tf.keras.Model.fit"),Ne.forEach(t),ye=i(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ie=a(D);Le=i(ie,"model(inputs)"),ie.forEach(t),ue=i(N,"."),N.forEach(t),I=d(f),S=s(f,"P",{});var he=a(S);ee=i(he,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he.forEach(t),ne=d(f),F=s(f,"UL",{});var P=a(F);C=s(P,"LI",{});var j=a(C);se=i(j,"a single Tensor with "),U=s(j,"CODE",{});var Be=a(U);ge=i(Be,"input_ids"),Be.forEach(t),ae=i(j," only and nothing else: "),W=s(j,"CODE",{});var Fe=a(W);ke=i(Fe,"model(inputs_ids)"),Fe.forEach(t),j.forEach(t),_e=d(P),z=s(P,"LI",{});var G=a(z);$e=i(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(G,"CODE",{});var He=a(B);J=i(He,"model([input_ids, attention_mask])"),He.forEach(t),ce=i(G," or "),R=s(G,"CODE",{});var H=a(R);xe=i(H,"model([input_ids, attention_mask, token_type_ids])"),H.forEach(t),G.forEach(t),fe=d(P),O=s(P,"LI",{});var te=a(O);Te=i(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=s(te,"CODE",{});var Ve=a(q);Xe=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),te.forEach(t),P.forEach(t)},m(f,M){h(f,p,M),e(p,x),h(f,u,M),h(f,g,M),e(g,v),e(v,T),e(g,_),e(g,E),e(E,we),h(f,Q,M),h(f,X,M),e(X,Y),e(X,A),e(A,Z),e(X,ye),e(X,D),e(D,Le),e(X,ue),h(f,I,M),h(f,S,M),e(S,ee),h(f,ne,M),h(f,F,M),e(F,C),e(C,se),e(C,U),e(U,ge),e(C,ae),e(C,W),e(W,ke),e(F,_e),e(F,z),e(z,$e),e(z,B),e(B,J),e(z,ce),e(z,R),e(R,xe),e(F,fe),e(F,O),e(O,Te),e(O,q),e(q,Xe)},d(f){f&&t(p),f&&t(u),f&&t(g),f&&t(Q),f&&t(X),f&&t(I),f&&t(S),f&&t(ne),f&&t(F)}}}function Ef(V){let p,x,u,g,v;return{c(){p=n("p"),x=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),g=r("Module"),v=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){p=s(T,"P",{});var _=a(p);x=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(_,"CODE",{});var E=a(u);g=i(E,"Module"),E.forEach(t),v=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,p,_),e(p,x),e(p,u),e(u,g),e(p,v)},d(T){T&&t(p)}}}function Ff(V){let p,x,u,g,v,T,_,E,we,Q,X,Y,A,Z,ye,D,Le,ue,I,S,ee,ne,F,C,se,U,ge,ae,W,ke,_e,z,$e,B,J,ce,R,xe,fe,O,Te,q,Xe;return{c(){p=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),v=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=n("li"),we=r("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),X=n("p"),Y=r("This second option is useful when using "),A=n("code"),Z=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),D=n("code"),Le=r("model(inputs)"),ue=r("."),I=l(),S=n("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ne=l(),F=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),ke=r("model(inputs_ids)"),_e=l(),z=n("li"),$e=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),J=r("model([input_ids, attention_mask])"),ce=r(" or "),R=n("code"),xe=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),O=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=n("code"),Xe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var M=a(p);x=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),u=d(f),g=s(f,"UL",{});var re=a(g);v=s(re,"LI",{});var ve=a(v);T=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),_=d(re),E=s(re,"LI",{});var We=a(E);we=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),re.forEach(t),Q=d(f),X=s(f,"P",{});var N=a(X);Y=i(N,"This second option is useful when using "),A=s(N,"CODE",{});var Ne=a(A);Z=i(Ne,"tf.keras.Model.fit"),Ne.forEach(t),ye=i(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ie=a(D);Le=i(ie,"model(inputs)"),ie.forEach(t),ue=i(N,"."),N.forEach(t),I=d(f),S=s(f,"P",{});var he=a(S);ee=i(he,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he.forEach(t),ne=d(f),F=s(f,"UL",{});var P=a(F);C=s(P,"LI",{});var j=a(C);se=i(j,"a single Tensor with "),U=s(j,"CODE",{});var Be=a(U);ge=i(Be,"input_ids"),Be.forEach(t),ae=i(j," only and nothing else: "),W=s(j,"CODE",{});var Fe=a(W);ke=i(Fe,"model(inputs_ids)"),Fe.forEach(t),j.forEach(t),_e=d(P),z=s(P,"LI",{});var G=a(z);$e=i(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(G,"CODE",{});var He=a(B);J=i(He,"model([input_ids, attention_mask])"),He.forEach(t),ce=i(G," or "),R=s(G,"CODE",{});var H=a(R);xe=i(H,"model([input_ids, attention_mask, token_type_ids])"),H.forEach(t),G.forEach(t),fe=d(P),O=s(P,"LI",{});var te=a(O);Te=i(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=s(te,"CODE",{});var Ve=a(q);Xe=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),te.forEach(t),P.forEach(t)},m(f,M){h(f,p,M),e(p,x),h(f,u,M),h(f,g,M),e(g,v),e(v,T),e(g,_),e(g,E),e(E,we),h(f,Q,M),h(f,X,M),e(X,Y),e(X,A),e(A,Z),e(X,ye),e(X,D),e(D,Le),e(X,ue),h(f,I,M),h(f,S,M),e(S,ee),h(f,ne,M),h(f,F,M),e(F,C),e(C,se),e(C,U),e(U,ge),e(C,ae),e(C,W),e(W,ke),e(F,_e),e(F,z),e(z,$e),e(z,B),e(B,J),e(z,ce),e(z,R),e(R,xe),e(F,fe),e(F,O),e(O,Te),e(O,q),e(q,Xe)},d(f){f&&t(p),f&&t(u),f&&t(g),f&&t(Q),f&&t(X),f&&t(I),f&&t(S),f&&t(ne),f&&t(F)}}}function zf(V){let p,x,u,g,v;return{c(){p=n("p"),x=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),g=r("Module"),v=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){p=s(T,"P",{});var _=a(p);x=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(_,"CODE",{});var E=a(u);g=i(E,"Module"),E.forEach(t),v=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,p,_),e(p,x),e(p,u),e(u,g),e(p,v)},d(T){T&&t(p)}}}function Cf(V){let p,x,u,g,v,T,_,E,we,Q,X,Y,A,Z,ye,D,Le,ue,I,S,ee,ne,F,C,se,U,ge,ae,W,ke,_e,z,$e,B,J,ce,R,xe,fe,O,Te,q,Xe;return{c(){p=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),v=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=n("li"),we=r("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),X=n("p"),Y=r("This second option is useful when using "),A=n("code"),Z=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),D=n("code"),Le=r("model(inputs)"),ue=r("."),I=l(),S=n("p"),ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ne=l(),F=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),ke=r("model(inputs_ids)"),_e=l(),z=n("li"),$e=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),J=r("model([input_ids, attention_mask])"),ce=r(" or "),R=n("code"),xe=r("model([input_ids, attention_mask, token_type_ids])"),fe=l(),O=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=n("code"),Xe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var M=a(p);x=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),u=d(f),g=s(f,"UL",{});var re=a(g);v=s(re,"LI",{});var ve=a(v);T=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),_=d(re),E=s(re,"LI",{});var We=a(E);we=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),re.forEach(t),Q=d(f),X=s(f,"P",{});var N=a(X);Y=i(N,"This second option is useful when using "),A=s(N,"CODE",{});var Ne=a(A);Z=i(Ne,"tf.keras.Model.fit"),Ne.forEach(t),ye=i(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ie=a(D);Le=i(ie,"model(inputs)"),ie.forEach(t),ue=i(N,"."),N.forEach(t),I=d(f),S=s(f,"P",{});var he=a(S);ee=i(he,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he.forEach(t),ne=d(f),F=s(f,"UL",{});var P=a(F);C=s(P,"LI",{});var j=a(C);se=i(j,"a single Tensor with "),U=s(j,"CODE",{});var Be=a(U);ge=i(Be,"input_ids"),Be.forEach(t),ae=i(j," only and nothing else: "),W=s(j,"CODE",{});var Fe=a(W);ke=i(Fe,"model(inputs_ids)"),Fe.forEach(t),j.forEach(t),_e=d(P),z=s(P,"LI",{});var G=a(z);$e=i(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(G,"CODE",{});var He=a(B);J=i(He,"model([input_ids, attention_mask])"),He.forEach(t),ce=i(G," or "),R=s(G,"CODE",{});var H=a(R);xe=i(H,"model([input_ids, attention_mask, token_type_ids])"),H.forEach(t),G.forEach(t),fe=d(P),O=s(P,"LI",{});var te=a(O);Te=i(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),q=s(te,"CODE",{});var Ve=a(q);Xe=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),te.forEach(t),P.forEach(t)},m(f,M){h(f,p,M),e(p,x),h(f,u,M),h(f,g,M),e(g,v),e(v,T),e(g,_),e(g,E),e(E,we),h(f,Q,M),h(f,X,M),e(X,Y),e(X,A),e(A,Z),e(X,ye),e(X,D),e(D,Le),e(X,ue),h(f,I,M),h(f,S,M),e(S,ee),h(f,ne,M),h(f,F,M),e(F,C),e(C,se),e(C,U),e(U,ge),e(C,ae),e(C,W),e(W,ke),e(F,_e),e(F,z),e(z,$e),e(z,B),e(B,J),e(z,ce),e(z,R),e(R,xe),e(F,fe),e(F,O),e(O,Te),e(O,q),e(q,Xe)},d(f){f&&t(p),f&&t(u),f&&t(g),f&&t(Q),f&&t(X),f&&t(I),f&&t(S),f&&t(ne),f&&t(F)}}}function qf(V){let p,x,u,g,v;return{c(){p=n("p"),x=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),g=r("Module"),v=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){p=s(T,"P",{});var _=a(p);x=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(_,"CODE",{});var E=a(u);g=i(E,"Module"),E.forEach(t),v=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,p,_),e(p,x),e(p,u),e(u,g),e(p,v)},d(T){T&&t(p)}}}function Pf(V){let p,x,u,g,v,T,_,E,we,Q,X,Y,A,Z,ye,D,Le,ue,I,S,ee,ne,F,C,se,U,ge,ae,W,ke,_e,z,$e,B,J,ce,R,xe,fe,O,Te,q,Xe,f,M,re,ve,We,N,Ne,ie,he,P,j,Be,Fe,G,He,H,te,Ve,Ke,qa,en,Pa,ja,tn,Sa,Oa,Gt,Na,Ha,Aa,rt,Da,on,Ia,Wa,nn,Ba,Va,Ua,Cn,Ra,Ga,Kt,js,it,Xt,qn,Yt,Ka,Pn,Ya,Ss,Ae,Jt,Ja,Qt,Qa,Zt,Za,er,tr,eo,or,sn,nr,sr,ar,jn,Os,lt,Mt,Sn,to,rr,On,ir,Ns,dt,oo,lr,Nn,dr,Hs,ct,no,cr,Hn,fr,As,ft,so,hr,An,mr,Ds,ht,ao,pr,Dn,ur,Is,mt,Et,In,ro,gr,Wn,_r,Ws,Me,io,Tr,Bn,vr,br,lo,wr,an,yr,Lr,kr,co,$r,fo,xr,Xr,Mr,ze,ho,Er,pt,Fr,rn,zr,Cr,Vn,qr,Pr,jr,Ft,Sr,Un,Or,Nr,mo,Bs,ut,zt,Rn,po,Hr,Gn,Ar,Vs,Ee,uo,Dr,Kn,Ir,Wr,go,Br,ln,Vr,Ur,Rr,_o,Gr,To,Kr,Yr,Jr,Ce,vo,Qr,gt,Zr,dn,ei,ti,Yn,oi,ni,si,Ct,ai,Jn,ri,ii,bo,Us,_t,qt,Qn,wo,li,Zn,di,Rs,oe,yo,ci,es,fi,hi,cn,fn,mi,pi,ui,De,gi,ts,_i,Ti,os,vi,bi,ns,wi,yi,ss,Li,ki,$i,Lo,xi,hn,Xi,Mi,Ei,ko,Fi,$o,zi,Ci,qi,le,xo,Pi,Tt,ji,mn,Si,Oi,as,Ni,Hi,Ai,Pt,Di,rs,Ii,Wi,Xo,Bi,is,Vi,Ui,Mo,Gs,vt,jt,ls,Eo,Ri,ds,Gi,Ks,me,Fo,Ki,cs,Yi,Ji,zo,Qi,pn,Zi,el,tl,Co,ol,qo,nl,sl,al,St,rl,qe,Po,il,bt,ll,un,dl,cl,fs,fl,hl,ml,Ot,pl,hs,ul,gl,jo,Ys,wt,Nt,ms,So,_l,ps,Tl,Js,pe,Oo,vl,us,bl,wl,No,yl,gn,Ll,kl,$l,Ho,xl,Ao,Xl,Ml,El,Ht,Fl,Pe,Do,zl,yt,Cl,_n,ql,Pl,gs,jl,Sl,Ol,At,Nl,_s,Hl,Al,Io,Qs,Lt,Dt,Ts,Wo,Dl,vs,Il,Zs,K,Bo,Wl,bs,Bl,Vl,Tn,vn,Ul,Rl,Gl,Ie,Kl,ws,Yl,Jl,ys,Ql,Zl,Ls,ed,td,ks,od,nd,sd,Vo,ad,bn,rd,id,ld,Uo,dd,Ro,cd,fd,hd,It,md,je,Go,pd,kt,ud,wn,gd,_d,$s,Td,vd,bd,Wt,wd,xs,yd,Ld,Ko,ea,$t,Bt,Xs,Yo,kd,Ms,$d,ta,yn,oa,Ln,na;return T=new Ge({}),Z=new Ge({}),j=new Ge({}),te=new de({props:{name:"class transformers.TransfoXLConfig",anchor:"transformers.TransfoXLConfig",parameters:[{name:"vocab_size",val:" = 267735"},{name:"cutoffs",val:" = [20000, 40000, 200000]"},{name:"d_model",val:" = 1024"},{name:"d_embed",val:" = 1024"},{name:"n_head",val:" = 16"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 4096"},{name:"div_val",val:" = 4"},{name:"pre_lnorm",val:" = False"},{name:"n_layer",val:" = 18"},{name:"mem_len",val:" = 1600"},{name:"clamp_len",val:" = 1000"},{name:"same_length",val:" = True"},{name:"proj_share_all_but_first",val:" = True"},{name:"attn_type",val:" = 0"},{name:"sample_softmax",val:" = -1"},{name:"adaptive",val:" = True"},{name:"dropout",val:" = 0.1"},{name:"dropatt",val:" = 0.0"},{name:"untie_r",val:" = True"},{name:"init",val:" = 'normal'"},{name:"init_range",val:" = 0.01"},{name:"proj_init_std",val:" = 0.01"},{name:"init_std",val:" = 0.02"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"eos_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/configuration_transfo_xl.py#L29",parametersDescription:[{anchor:"transformers.TransfoXLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 267735) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLModel">TransfoXLModel</a> or
<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TFTransfoXLModel">TFTransfoXLModel</a>.`,name:"vocab_size"},{anchor:"transformers.TransfoXLConfig.cutoffs",description:`<strong>cutoffs</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[20000, 40000, 200000]</code>) &#x2014;
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
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"}]}}),Kt=new Rt({props:{code:`from transformers import TransfoXLConfig, TransfoXLModel

# Initializing a Transformer XL configuration
configuration = TransfoXLConfig()

# Initializing a model from the configuration
model = TransfoXLModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLConfig, TransfoXLModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Transformer XL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TransfoXLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Yt=new Ge({}),Jt=new de({props:{name:"class transformers.TransfoXLTokenizer",anchor:"transformers.TransfoXLTokenizer",parameters:[{name:"special",val:" = None"},{name:"min_freq",val:" = 0"},{name:"max_size",val:" = None"},{name:"lower_case",val:" = False"},{name:"delimiter",val:" = None"},{name:"vocab_file",val:" = None"},{name:"pretrained_vocab_file",val:": str = None"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '<eos>'"},{name:"additional_special_tokens",val:" = ['<formula>']"},{name:"language",val:" = 'en'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/tokenization_transfo_xl.py#L111",parametersDescription:[{anchor:"transformers.TransfoXLTokenizer.special",description:`<strong>special</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
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
The language of this tokenizer (used for mose preprocessing).`,name:"language"}]}}),to=new Ge({}),oo=new de({props:{name:"class transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": typing.List[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L606",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),no=new de({props:{name:"class transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput",anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput",parameters:[{name:"losses",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_scores",val:": FloatTensor = None"},{name:"mems",val:": typing.List[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L671",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.losses",description:`<strong>losses</strong> (<code>torch.FloatTensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling losses (not reduced).`,name:"losses"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.prediction_scores",description:`<strong>prediction_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).`,name:"prediction_scores"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),so=new de({props:{name:"class transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput",anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"mems",val:": typing.List[tensorflow.python.framework.ops.Tensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L702",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),ao=new de({props:{name:"class transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput",anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput",parameters:[{name:"prediction_scores",val:": Tensor = None"},{name:"mems",val:": typing.List[tensorflow.python.framework.ops.Tensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L733",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.losses",description:`<strong>losses</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling losses (not reduced).`,name:"losses"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.prediction_scores",description:`<strong>prediction_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).`,name:"prediction_scores"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),ro=new Ge({}),io=new de({props:{name:"class transformers.TransfoXLModel",anchor:"transformers.TransfoXLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L769",parametersDescription:[{anchor:"transformers.TransfoXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ho=new de({props:{name:"forward",anchor:"transformers.TransfoXLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L873",parametersDescription:[{anchor:"transformers.TransfoXLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"
>TransfoXLModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"
>TransfoXLModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ft=new xt({props:{$$slots:{default:[$f]},$$scope:{ctx:V}}}),mo=new Rt({props:{code:`from transformers import TransfoXLTokenizer, TransfoXLModel
import torch

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TransfoXLModel.from_pretrained('transfo-xl-wt103')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLModel.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),po=new Ge({}),uo=new de({props:{name:"class transformers.TransfoXLLMHeadModel",anchor:"transformers.TransfoXLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1011",parametersDescription:[{anchor:"transformers.TransfoXLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),vo=new de({props:{name:"forward",anchor:"transformers.TransfoXLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1055",parametersDescription:[{anchor:"transformers.TransfoXLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLLMHeadModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TransfoXLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput"
>TransfoXLLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>losses</strong> (<code>torch.FloatTensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling losses (not reduced).</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput"
>TransfoXLLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ct=new xt({props:{$$slots:{default:[xf]},$$scope:{ctx:V}}}),bo=new Rt({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLLMHeadModel

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TransfoXLLMHeadModel.from_pretrained('transfo-xl-wt103')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLLMHeadModel.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wo=new Ge({}),yo=new de({props:{name:"class transformers.TransfoXLForSequenceClassification",anchor:"transformers.TransfoXLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1167",parametersDescription:[{anchor:"transformers.TransfoXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),xo=new de({props:{name:"forward",anchor:"transformers.TransfoXLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1178",parametersDescription:[{anchor:"transformers.TransfoXLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>TransfoXLSequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>TransfoXLSequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new xt({props:{$$slots:{default:[Xf]},$$scope:{ctx:V}}}),Xo=new Rt({props:{code:`from transformers import TransfoXLTokenizer, TransfoXLForSequenceClassification
import torch

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TransfoXLForSequenceClassification.from_pretrained('transfo-xl-wt103')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mo=new Rt({props:{code:`from transformers import TransfoXLTokenizer, TransfoXLForSequenceClassification
import torch

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TransfoXLForSequenceClassification.from_pretrained('transfo-xl-wt103', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Eo=new Ge({}),Fo=new de({props:{name:"class transformers.TFTransfoXLModel",anchor:"transformers.TFTransfoXLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L879",parametersDescription:[{anchor:"transformers.TFTransfoXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),St=new xt({props:{$$slots:{default:[Mf]},$$scope:{ctx:V}}}),Po=new de({props:{name:"call",anchor:"transformers.TFTransfoXLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L884",parametersDescription:[{anchor:"transformers.TFTransfoXLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLModel.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput"
>TFTransfoXLModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput"
>TFTransfoXLModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ot=new xt({props:{$$slots:{default:[Ef]},$$scope:{ctx:V}}}),jo=new Rt({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLModel
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TFTransfoXLModel.from_pretrained('transfo-xl-wt103')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLModel.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),So=new Ge({}),Oo=new de({props:{name:"class transformers.TFTransfoXLLMHeadModel",anchor:"transformers.TFTransfoXLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L948",parametersDescription:[{anchor:"transformers.TFTransfoXLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ht=new xt({props:{$$slots:{default:[Ff]},$$scope:{ctx:V}}}),Do=new de({props:{name:"call",anchor:"transformers.TFTransfoXLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L976",parametersDescription:[{anchor:"transformers.TFTransfoXLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput"
>TFTransfoXLLMHeadModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>losses</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling losses (not reduced).</p>
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput"
>TFTransfoXLLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),At=new xt({props:{$$slots:{default:[zf]},$$scope:{ctx:V}}}),Io=new Rt({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLLMHeadModel
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TFTransfoXLLMHeadModel.from_pretrained('transfo-xl-wt103')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLLMHeadModel.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Wo=new Ge({}),Bo=new de({props:{name:"class transformers.TFTransfoXLForSequenceClassification",anchor:"transformers.TFTransfoXLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L1077",parametersDescription:[{anchor:"transformers.TFTransfoXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),It=new xt({props:{$$slots:{default:[Cf]},$$scope:{ctx:V}}}),Go=new de({props:{name:"call",anchor:"transformers.TFTransfoXLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L1092",parametersDescription:[{anchor:"transformers.TFTransfoXLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <code>TFTransfoXLSequenceClassifierOutputWithPast</code> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>TFTransfoXLSequenceClassifierOutputWithPast</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new xt({props:{$$slots:{default:[qf]},$$scope:{ctx:V}}}),Ko=new Rt({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLForSequenceClassification
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained('transfo-xl-wt103')
model = TFTransfoXLForSequenceClassification.from_pretrained('transfo-xl-wt103')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;transfo-xl-wt103&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Yo=new Ge({}),{c(){p=n("meta"),x=l(),u=n("h1"),g=n("a"),v=n("span"),b(T.$$.fragment),_=l(),E=n("span"),we=r("Transformer XL"),Q=l(),X=n("h2"),Y=n("a"),A=n("span"),b(Z.$$.fragment),ye=l(),D=n("span"),Le=r("Overview"),ue=l(),I=n("p"),S=r("The Transformer-XL model was proposed in "),ee=n("a"),ne=r("Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"),F=r(` by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan
Salakhutdinov. It\u2019s a causal (uni-directional) transformer with relative positioning (sinuso\xEFdal) embeddings which can
reuse previously computed hidden-states to attend to longer context (memory). This model also uses adaptive softmax
inputs and outputs (tied).`),C=l(),se=n("p"),U=r("The abstract from the paper is the following:"),ge=l(),ae=n("p"),W=n("em"),ke=r(`Transformers have a potential of learning longer-term dependency, but are limited by a fixed-length context in the
setting of language modeling. We propose a novel neural architecture Transformer-XL that enables learning dependency
beyond a fixed length without disrupting temporal coherence. It consists of a segment-level recurrence mechanism and a
novel positional encoding scheme. Our method not only enables capturing longer-term dependency, but also resolves the
context fragmentation problem. As a result, Transformer-XL learns dependency that is 80% longer than RNNs and 450%
longer than vanilla Transformers, achieves better performance on both short and long sequences, and is up to 1,800+
times faster than vanilla Transformers during evaluation. Notably, we improve the state-of-the-art results of
bpc/perplexity to 0.99 on enwiki8, 1.08 on text8, 18.3 on WikiText-103, 21.8 on One Billion Word, and 54.5 on Penn
Treebank (without finetuning). When trained only on WikiText-103, Transformer-XL manages to generate reasonably
coherent, novel text articles with thousands of tokens.`),_e=l(),z=n("p"),$e=r("Tips:"),B=l(),J=n("ul"),ce=n("li"),R=r(`Transformer-XL uses relative sinusoidal positional embeddings. Padding can be done on the left or on the right. The
original implementation trains on SQuAD with padding on the left, therefore the padding defaults are set to left.`),xe=l(),fe=n("li"),O=r("Transformer-XL is one of the few models that has no sequence length limit."),Te=l(),q=n("p"),Xe=r("This model was contributed by "),f=n("a"),M=r("thomwolf"),re=r(". The original code can be found "),ve=n("a"),We=r("here"),N=r("."),Ne=l(),ie=n("h2"),he=n("a"),P=n("span"),b(j.$$.fragment),Be=l(),Fe=n("span"),G=r("TransfoXLConfig"),He=l(),H=n("div"),b(te.$$.fragment),Ve=l(),Ke=n("p"),qa=r("This is the configuration class to store the configuration of a "),en=n("a"),Pa=r("TransfoXLModel"),ja=r(` or a
`),tn=n("a"),Sa=r("TFTransfoXLModel"),Oa=r(`. It is used to instantiate a Transformer-XL model according to the
specified arguments, defining the model architecture. Instantiating a configuration with the defaults will yield a
similar configuration to that of the `),Gt=n("a"),Na=r("Transformer XL"),Ha=r(" architecture."),Aa=l(),rt=n("p"),Da=r("Configuration objects inherit from "),on=n("a"),Ia=r("PretrainedConfig"),Wa=r(` and can be used to control the model
outputs. Read the documentation from `),nn=n("a"),Ba=r("PretrainedConfig"),Va=r(" for more information."),Ua=l(),Cn=n("p"),Ra=r("Examples:"),Ga=l(),b(Kt.$$.fragment),js=l(),it=n("h2"),Xt=n("a"),qn=n("span"),b(Yt.$$.fragment),Ka=l(),Pn=n("span"),Ya=r("TransfoXLTokenizer"),Ss=l(),Ae=n("div"),b(Jt.$$.fragment),Ja=l(),Qt=n("p"),Qa=r("Construct a Transformer-XL tokenizer adapted from Vocab class in "),Zt=n("a"),Za=r("the original code"),er=r(`. The Transformer-XL tokenizer is a word-level tokenizer (no
sub-word tokenization).`),tr=l(),eo=n("p"),or=r("This tokenizer inherits from "),sn=n("a"),nr=r("PreTrainedTokenizer"),sr=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),ar=l(),jn=n("div"),Os=l(),lt=n("h2"),Mt=n("a"),Sn=n("span"),b(to.$$.fragment),rr=l(),On=n("span"),ir=r("TransfoXL specific outputs"),Ns=l(),dt=n("div"),b(oo.$$.fragment),lr=l(),Nn=n("p"),dr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Hs=l(),ct=n("div"),b(no.$$.fragment),cr=l(),Hn=n("p"),fr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),As=l(),ft=n("div"),b(so.$$.fragment),hr=l(),An=n("p"),mr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Ds=l(),ht=n("div"),b(ao.$$.fragment),pr=l(),Dn=n("p"),ur=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Is=l(),mt=n("h2"),Et=n("a"),In=n("span"),b(ro.$$.fragment),gr=l(),Wn=n("span"),_r=r("TransfoXLModel"),Ws=l(),Me=n("div"),b(io.$$.fragment),Tr=l(),Bn=n("p"),vr=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),br=l(),lo=n("p"),wr=r("This model inherits from "),an=n("a"),yr=r("PreTrainedModel"),Lr=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),kr=l(),co=n("p"),$r=r("This model is also a PyTorch "),fo=n("a"),xr=r("torch.nn.Module"),Xr=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Mr=l(),ze=n("div"),b(ho.$$.fragment),Er=l(),pt=n("p"),Fr=r("The "),rn=n("a"),zr=r("TransfoXLModel"),Cr=r(" forward method, overrides the "),Vn=n("code"),qr=r("__call__"),Pr=r(" special method."),jr=l(),b(Ft.$$.fragment),Sr=l(),Un=n("p"),Or=r("Example:"),Nr=l(),b(mo.$$.fragment),Bs=l(),ut=n("h2"),zt=n("a"),Rn=n("span"),b(po.$$.fragment),Hr=l(),Gn=n("span"),Ar=r("TransfoXLLMHeadModel"),Vs=l(),Ee=n("div"),b(uo.$$.fragment),Dr=l(),Kn=n("p"),Ir=r(`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),Wr=l(),go=n("p"),Br=r("This model inherits from "),ln=n("a"),Vr=r("PreTrainedModel"),Ur=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Rr=l(),_o=n("p"),Gr=r("This model is also a PyTorch "),To=n("a"),Kr=r("torch.nn.Module"),Yr=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Jr=l(),Ce=n("div"),b(vo.$$.fragment),Qr=l(),gt=n("p"),Zr=r("The "),dn=n("a"),ei=r("TransfoXLLMHeadModel"),ti=r(" forward method, overrides the "),Yn=n("code"),oi=r("__call__"),ni=r(" special method."),si=l(),b(Ct.$$.fragment),ai=l(),Jn=n("p"),ri=r("Example:"),ii=l(),b(bo.$$.fragment),Us=l(),_t=n("h2"),qt=n("a"),Qn=n("span"),b(wo.$$.fragment),li=l(),Zn=n("span"),di=r("TransfoXLForSequenceClassification"),Rs=l(),oe=n("div"),b(yo.$$.fragment),ci=l(),es=n("p"),fi=r("The Transformer-XL Model transformer with a sequence classification head on top (linear layer)."),hi=l(),cn=n("p"),fn=n("a"),mi=r("TransfoXLForSequenceClassification"),pi=r(` uses the last token in order to do the classification, as
other causal models (e.g. GPT-1) do.`),ui=l(),De=n("p"),gi=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ts=n("code"),_i=r("pad_token_id"),Ti=r(` is defined in the configuration, it finds the last token that is not a padding token in each
row. If no `),os=n("code"),vi=r("pad_token_id"),bi=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),ns=n("code"),wi=r("inputs_embeds"),yi=r(" are passed instead of "),ss=n("code"),Li=r("input_ids"),ki=r(`, it does the same (take
the last value in each row of the batch).`),$i=l(),Lo=n("p"),xi=r("This model inherits from "),hn=n("a"),Xi=r("PreTrainedModel"),Mi=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ei=l(),ko=n("p"),Fi=r("This model is also a PyTorch "),$o=n("a"),zi=r("torch.nn.Module"),Ci=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),qi=l(),le=n("div"),b(xo.$$.fragment),Pi=l(),Tt=n("p"),ji=r("The "),mn=n("a"),Si=r("TransfoXLForSequenceClassification"),Oi=r(" forward method, overrides the "),as=n("code"),Ni=r("__call__"),Hi=r(" special method."),Ai=l(),b(Pt.$$.fragment),Di=l(),rs=n("p"),Ii=r("Example of single-label classification:"),Wi=l(),b(Xo.$$.fragment),Bi=l(),is=n("p"),Vi=r("Example of multi-label classification:"),Ui=l(),b(Mo.$$.fragment),Gs=l(),vt=n("h2"),jt=n("a"),ls=n("span"),b(Eo.$$.fragment),Ri=l(),ds=n("span"),Gi=r("TFTransfoXLModel"),Ks=l(),me=n("div"),b(Fo.$$.fragment),Ki=l(),cs=n("p"),Yi=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Ji=l(),zo=n("p"),Qi=r("This model inherits from "),pn=n("a"),Zi=r("TFPreTrainedModel"),el=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),tl=l(),Co=n("p"),ol=r("This model is also a "),qo=n("a"),nl=r("tf.keras.Model"),sl=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),al=l(),b(St.$$.fragment),rl=l(),qe=n("div"),b(Po.$$.fragment),il=l(),bt=n("p"),ll=r("The "),un=n("a"),dl=r("TFTransfoXLModel"),cl=r(" forward method, overrides the "),fs=n("code"),fl=r("__call__"),hl=r(" special method."),ml=l(),b(Ot.$$.fragment),pl=l(),hs=n("p"),ul=r("Example:"),gl=l(),b(jo.$$.fragment),Ys=l(),wt=n("h2"),Nt=n("a"),ms=n("span"),b(So.$$.fragment),_l=l(),ps=n("span"),Tl=r("TFTransfoXLLMHeadModel"),Js=l(),pe=n("div"),b(Oo.$$.fragment),vl=l(),us=n("p"),bl=r(`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),wl=l(),No=n("p"),yl=r("This model inherits from "),gn=n("a"),Ll=r("TFPreTrainedModel"),kl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),$l=l(),Ho=n("p"),xl=r("This model is also a "),Ao=n("a"),Xl=r("tf.keras.Model"),Ml=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),El=l(),b(Ht.$$.fragment),Fl=l(),Pe=n("div"),b(Do.$$.fragment),zl=l(),yt=n("p"),Cl=r("The "),_n=n("a"),ql=r("TFTransfoXLLMHeadModel"),Pl=r(" forward method, overrides the "),gs=n("code"),jl=r("__call__"),Sl=r(" special method."),Ol=l(),b(At.$$.fragment),Nl=l(),_s=n("p"),Hl=r("Example:"),Al=l(),b(Io.$$.fragment),Qs=l(),Lt=n("h2"),Dt=n("a"),Ts=n("span"),b(Wo.$$.fragment),Dl=l(),vs=n("span"),Il=r("TFTransfoXLForSequenceClassification"),Zs=l(),K=n("div"),b(Bo.$$.fragment),Wl=l(),bs=n("p"),Bl=r("The Transfo XL Model transformer with a sequence classification head on top (linear layer)."),Vl=l(),Tn=n("p"),vn=n("a"),Ul=r("TFTransfoXLForSequenceClassification"),Rl=r(` uses the last token in order to do the classification,
as other causal models (e.g. GPT-1,GPT-2) do.`),Gl=l(),Ie=n("p"),Kl=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ws=n("code"),Yl=r("pad_token_id"),Jl=r(` is defined in the configuration, it finds the last token that is not a padding token in each
row. If no `),ys=n("code"),Ql=r("pad_token_id"),Zl=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Ls=n("code"),ed=r("inputs_embeds"),td=r(" are passed instead of "),ks=n("code"),od=r("input_ids"),nd=r(`, it does the same (take
the last value in each row of the batch).`),sd=l(),Vo=n("p"),ad=r("This model inherits from "),bn=n("a"),rd=r("TFPreTrainedModel"),id=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ld=l(),Uo=n("p"),dd=r("This model is also a "),Ro=n("a"),cd=r("tf.keras.Model"),fd=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hd=l(),b(It.$$.fragment),md=l(),je=n("div"),b(Go.$$.fragment),pd=l(),kt=n("p"),ud=r("The "),wn=n("a"),gd=r("TFTransfoXLForSequenceClassification"),_d=r(" forward method, overrides the "),$s=n("code"),Td=r("__call__"),vd=r(" special method."),bd=l(),b(Wt.$$.fragment),wd=l(),xs=n("p"),yd=r("Example:"),Ld=l(),b(Ko.$$.fragment),ea=l(),$t=n("h2"),Bt=n("a"),Xs=n("span"),b(Yo.$$.fragment),kd=l(),Ms=n("span"),$d=r("Internal Layers"),ta=l(),yn=n("div"),oa=l(),Ln=n("div"),this.h()},l(o){const m=kf('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(t),x=d(o),u=s(o,"H1",{class:!0});var Jo=a(u);g=s(Jo,"A",{id:!0,class:!0,href:!0});var Es=a(g);v=s(Es,"SPAN",{});var Fs=a(v);w(T.$$.fragment,Fs),Fs.forEach(t),Es.forEach(t),_=d(Jo),E=s(Jo,"SPAN",{});var zs=a(E);we=i(zs,"Transformer XL"),zs.forEach(t),Jo.forEach(t),Q=d(o),X=s(o,"H2",{class:!0});var Qo=a(X);Y=s(Qo,"A",{id:!0,class:!0,href:!0});var Cs=a(Y);A=s(Cs,"SPAN",{});var qs=a(A);w(Z.$$.fragment,qs),qs.forEach(t),Cs.forEach(t),ye=d(Qo),D=s(Qo,"SPAN",{});var Ps=a(D);Le=i(Ps,"Overview"),Ps.forEach(t),Qo.forEach(t),ue=d(o),I=s(o,"P",{});var Zo=a(I);S=i(Zo,"The Transformer-XL model was proposed in "),ee=s(Zo,"A",{href:!0,rel:!0});var Md=a(ee);ne=i(Md,"Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"),Md.forEach(t),F=i(Zo,` by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan
Salakhutdinov. It\u2019s a causal (uni-directional) transformer with relative positioning (sinuso\xEFdal) embeddings which can
reuse previously computed hidden-states to attend to longer context (memory). This model also uses adaptive softmax
inputs and outputs (tied).`),Zo.forEach(t),C=d(o),se=s(o,"P",{});var Ed=a(se);U=i(Ed,"The abstract from the paper is the following:"),Ed.forEach(t),ge=d(o),ae=s(o,"P",{});var Fd=a(ae);W=s(Fd,"EM",{});var zd=a(W);ke=i(zd,`Transformers have a potential of learning longer-term dependency, but are limited by a fixed-length context in the
setting of language modeling. We propose a novel neural architecture Transformer-XL that enables learning dependency
beyond a fixed length without disrupting temporal coherence. It consists of a segment-level recurrence mechanism and a
novel positional encoding scheme. Our method not only enables capturing longer-term dependency, but also resolves the
context fragmentation problem. As a result, Transformer-XL learns dependency that is 80% longer than RNNs and 450%
longer than vanilla Transformers, achieves better performance on both short and long sequences, and is up to 1,800+
times faster than vanilla Transformers during evaluation. Notably, we improve the state-of-the-art results of
bpc/perplexity to 0.99 on enwiki8, 1.08 on text8, 18.3 on WikiText-103, 21.8 on One Billion Word, and 54.5 on Penn
Treebank (without finetuning). When trained only on WikiText-103, Transformer-XL manages to generate reasonably
coherent, novel text articles with thousands of tokens.`),zd.forEach(t),Fd.forEach(t),_e=d(o),z=s(o,"P",{});var Cd=a(z);$e=i(Cd,"Tips:"),Cd.forEach(t),B=d(o),J=s(o,"UL",{});var sa=a(J);ce=s(sa,"LI",{});var qd=a(ce);R=i(qd,`Transformer-XL uses relative sinusoidal positional embeddings. Padding can be done on the left or on the right. The
original implementation trains on SQuAD with padding on the left, therefore the padding defaults are set to left.`),qd.forEach(t),xe=d(sa),fe=s(sa,"LI",{});var Pd=a(fe);O=i(Pd,"Transformer-XL is one of the few models that has no sequence length limit."),Pd.forEach(t),sa.forEach(t),Te=d(o),q=s(o,"P",{});var kn=a(q);Xe=i(kn,"This model was contributed by "),f=s(kn,"A",{href:!0,rel:!0});var jd=a(f);M=i(jd,"thomwolf"),jd.forEach(t),re=i(kn,". The original code can be found "),ve=s(kn,"A",{href:!0,rel:!0});var Sd=a(ve);We=i(Sd,"here"),Sd.forEach(t),N=i(kn,"."),kn.forEach(t),Ne=d(o),ie=s(o,"H2",{class:!0});var aa=a(ie);he=s(aa,"A",{id:!0,class:!0,href:!0});var Od=a(he);P=s(Od,"SPAN",{});var Nd=a(P);w(j.$$.fragment,Nd),Nd.forEach(t),Od.forEach(t),Be=d(aa),Fe=s(aa,"SPAN",{});var Hd=a(Fe);G=i(Hd,"TransfoXLConfig"),Hd.forEach(t),aa.forEach(t),He=d(o),H=s(o,"DIV",{class:!0});var Ye=a(H);w(te.$$.fragment,Ye),Ve=d(Ye),Ke=s(Ye,"P",{});var Vt=a(Ke);qa=i(Vt,"This is the configuration class to store the configuration of a "),en=s(Vt,"A",{href:!0});var Ad=a(en);Pa=i(Ad,"TransfoXLModel"),Ad.forEach(t),ja=i(Vt,` or a
`),tn=s(Vt,"A",{href:!0});var Dd=a(tn);Sa=i(Dd,"TFTransfoXLModel"),Dd.forEach(t),Oa=i(Vt,`. It is used to instantiate a Transformer-XL model according to the
specified arguments, defining the model architecture. Instantiating a configuration with the defaults will yield a
similar configuration to that of the `),Gt=s(Vt,"A",{href:!0,rel:!0});var Id=a(Gt);Na=i(Id,"Transformer XL"),Id.forEach(t),Ha=i(Vt," architecture."),Vt.forEach(t),Aa=d(Ye),rt=s(Ye,"P",{});var $n=a(rt);Da=i($n,"Configuration objects inherit from "),on=s($n,"A",{href:!0});var Wd=a(on);Ia=i(Wd,"PretrainedConfig"),Wd.forEach(t),Wa=i($n,` and can be used to control the model
outputs. Read the documentation from `),nn=s($n,"A",{href:!0});var Bd=a(nn);Ba=i(Bd,"PretrainedConfig"),Bd.forEach(t),Va=i($n," for more information."),$n.forEach(t),Ua=d(Ye),Cn=s(Ye,"P",{});var Vd=a(Cn);Ra=i(Vd,"Examples:"),Vd.forEach(t),Ga=d(Ye),w(Kt.$$.fragment,Ye),Ye.forEach(t),js=d(o),it=s(o,"H2",{class:!0});var ra=a(it);Xt=s(ra,"A",{id:!0,class:!0,href:!0});var Ud=a(Xt);qn=s(Ud,"SPAN",{});var Rd=a(qn);w(Yt.$$.fragment,Rd),Rd.forEach(t),Ud.forEach(t),Ka=d(ra),Pn=s(ra,"SPAN",{});var Gd=a(Pn);Ya=i(Gd,"TransfoXLTokenizer"),Gd.forEach(t),ra.forEach(t),Ss=d(o),Ae=s(o,"DIV",{class:!0});var Ut=a(Ae);w(Jt.$$.fragment,Ut),Ja=d(Ut),Qt=s(Ut,"P",{});var ia=a(Qt);Qa=i(ia,"Construct a Transformer-XL tokenizer adapted from Vocab class in "),Zt=s(ia,"A",{href:!0,rel:!0});var Kd=a(Zt);Za=i(Kd,"the original code"),Kd.forEach(t),er=i(ia,`. The Transformer-XL tokenizer is a word-level tokenizer (no
sub-word tokenization).`),ia.forEach(t),tr=d(Ut),eo=s(Ut,"P",{});var la=a(eo);or=i(la,"This tokenizer inherits from "),sn=s(la,"A",{href:!0});var Yd=a(sn);nr=i(Yd,"PreTrainedTokenizer"),Yd.forEach(t),sr=i(la,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),la.forEach(t),ar=d(Ut),jn=s(Ut,"DIV",{class:!0}),a(jn).forEach(t),Ut.forEach(t),Os=d(o),lt=s(o,"H2",{class:!0});var da=a(lt);Mt=s(da,"A",{id:!0,class:!0,href:!0});var Jd=a(Mt);Sn=s(Jd,"SPAN",{});var Qd=a(Sn);w(to.$$.fragment,Qd),Qd.forEach(t),Jd.forEach(t),rr=d(da),On=s(da,"SPAN",{});var Zd=a(On);ir=i(Zd,"TransfoXL specific outputs"),Zd.forEach(t),da.forEach(t),Ns=d(o),dt=s(o,"DIV",{class:!0});var ca=a(dt);w(oo.$$.fragment,ca),lr=d(ca),Nn=s(ca,"P",{});var ec=a(Nn);dr=i(ec,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),ec.forEach(t),ca.forEach(t),Hs=d(o),ct=s(o,"DIV",{class:!0});var fa=a(ct);w(no.$$.fragment,fa),cr=d(fa),Hn=s(fa,"P",{});var tc=a(Hn);fr=i(tc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),tc.forEach(t),fa.forEach(t),As=d(o),ft=s(o,"DIV",{class:!0});var ha=a(ft);w(so.$$.fragment,ha),hr=d(ha),An=s(ha,"P",{});var oc=a(An);mr=i(oc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),oc.forEach(t),ha.forEach(t),Ds=d(o),ht=s(o,"DIV",{class:!0});var ma=a(ht);w(ao.$$.fragment,ma),pr=d(ma),Dn=s(ma,"P",{});var nc=a(Dn);ur=i(nc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),nc.forEach(t),ma.forEach(t),Is=d(o),mt=s(o,"H2",{class:!0});var pa=a(mt);Et=s(pa,"A",{id:!0,class:!0,href:!0});var sc=a(Et);In=s(sc,"SPAN",{});var ac=a(In);w(ro.$$.fragment,ac),ac.forEach(t),sc.forEach(t),gr=d(pa),Wn=s(pa,"SPAN",{});var rc=a(Wn);_r=i(rc,"TransfoXLModel"),rc.forEach(t),pa.forEach(t),Ws=d(o),Me=s(o,"DIV",{class:!0});var Je=a(Me);w(io.$$.fragment,Je),Tr=d(Je),Bn=s(Je,"P",{});var ic=a(Bn);vr=i(ic,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),ic.forEach(t),br=d(Je),lo=s(Je,"P",{});var ua=a(lo);wr=i(ua,"This model inherits from "),an=s(ua,"A",{href:!0});var lc=a(an);yr=i(lc,"PreTrainedModel"),lc.forEach(t),Lr=i(ua,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ua.forEach(t),kr=d(Je),co=s(Je,"P",{});var ga=a(co);$r=i(ga,"This model is also a PyTorch "),fo=s(ga,"A",{href:!0,rel:!0});var dc=a(fo);xr=i(dc,"torch.nn.Module"),dc.forEach(t),Xr=i(ga,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ga.forEach(t),Mr=d(Je),ze=s(Je,"DIV",{class:!0});var Qe=a(ze);w(ho.$$.fragment,Qe),Er=d(Qe),pt=s(Qe,"P",{});var xn=a(pt);Fr=i(xn,"The "),rn=s(xn,"A",{href:!0});var cc=a(rn);zr=i(cc,"TransfoXLModel"),cc.forEach(t),Cr=i(xn," forward method, overrides the "),Vn=s(xn,"CODE",{});var fc=a(Vn);qr=i(fc,"__call__"),fc.forEach(t),Pr=i(xn," special method."),xn.forEach(t),jr=d(Qe),w(Ft.$$.fragment,Qe),Sr=d(Qe),Un=s(Qe,"P",{});var hc=a(Un);Or=i(hc,"Example:"),hc.forEach(t),Nr=d(Qe),w(mo.$$.fragment,Qe),Qe.forEach(t),Je.forEach(t),Bs=d(o),ut=s(o,"H2",{class:!0});var _a=a(ut);zt=s(_a,"A",{id:!0,class:!0,href:!0});var mc=a(zt);Rn=s(mc,"SPAN",{});var pc=a(Rn);w(po.$$.fragment,pc),pc.forEach(t),mc.forEach(t),Hr=d(_a),Gn=s(_a,"SPAN",{});var uc=a(Gn);Ar=i(uc,"TransfoXLLMHeadModel"),uc.forEach(t),_a.forEach(t),Vs=d(o),Ee=s(o,"DIV",{class:!0});var Ze=a(Ee);w(uo.$$.fragment,Ze),Dr=d(Ze),Kn=s(Ze,"P",{});var gc=a(Kn);Ir=i(gc,`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),gc.forEach(t),Wr=d(Ze),go=s(Ze,"P",{});var Ta=a(go);Br=i(Ta,"This model inherits from "),ln=s(Ta,"A",{href:!0});var _c=a(ln);Vr=i(_c,"PreTrainedModel"),_c.forEach(t),Ur=i(Ta,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ta.forEach(t),Rr=d(Ze),_o=s(Ze,"P",{});var va=a(_o);Gr=i(va,"This model is also a PyTorch "),To=s(va,"A",{href:!0,rel:!0});var Tc=a(To);Kr=i(Tc,"torch.nn.Module"),Tc.forEach(t),Yr=i(va,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),va.forEach(t),Jr=d(Ze),Ce=s(Ze,"DIV",{class:!0});var et=a(Ce);w(vo.$$.fragment,et),Qr=d(et),gt=s(et,"P",{});var Xn=a(gt);Zr=i(Xn,"The "),dn=s(Xn,"A",{href:!0});var vc=a(dn);ei=i(vc,"TransfoXLLMHeadModel"),vc.forEach(t),ti=i(Xn," forward method, overrides the "),Yn=s(Xn,"CODE",{});var bc=a(Yn);oi=i(bc,"__call__"),bc.forEach(t),ni=i(Xn," special method."),Xn.forEach(t),si=d(et),w(Ct.$$.fragment,et),ai=d(et),Jn=s(et,"P",{});var wc=a(Jn);ri=i(wc,"Example:"),wc.forEach(t),ii=d(et),w(bo.$$.fragment,et),et.forEach(t),Ze.forEach(t),Us=d(o),_t=s(o,"H2",{class:!0});var ba=a(_t);qt=s(ba,"A",{id:!0,class:!0,href:!0});var yc=a(qt);Qn=s(yc,"SPAN",{});var Lc=a(Qn);w(wo.$$.fragment,Lc),Lc.forEach(t),yc.forEach(t),li=d(ba),Zn=s(ba,"SPAN",{});var kc=a(Zn);di=i(kc,"TransfoXLForSequenceClassification"),kc.forEach(t),ba.forEach(t),Rs=d(o),oe=s(o,"DIV",{class:!0});var Se=a(oe);w(yo.$$.fragment,Se),ci=d(Se),es=s(Se,"P",{});var $c=a(es);fi=i($c,"The Transformer-XL Model transformer with a sequence classification head on top (linear layer)."),$c.forEach(t),hi=d(Se),cn=s(Se,"P",{});var xd=a(cn);fn=s(xd,"A",{href:!0});var xc=a(fn);mi=i(xc,"TransfoXLForSequenceClassification"),xc.forEach(t),pi=i(xd,` uses the last token in order to do the classification, as
other causal models (e.g. GPT-1) do.`),xd.forEach(t),ui=d(Se),De=s(Se,"P",{});var tt=a(De);gi=i(tt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ts=s(tt,"CODE",{});var Xc=a(ts);_i=i(Xc,"pad_token_id"),Xc.forEach(t),Ti=i(tt,` is defined in the configuration, it finds the last token that is not a padding token in each
row. If no `),os=s(tt,"CODE",{});var Mc=a(os);vi=i(Mc,"pad_token_id"),Mc.forEach(t),bi=i(tt,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),ns=s(tt,"CODE",{});var Ec=a(ns);wi=i(Ec,"inputs_embeds"),Ec.forEach(t),yi=i(tt," are passed instead of "),ss=s(tt,"CODE",{});var Fc=a(ss);Li=i(Fc,"input_ids"),Fc.forEach(t),ki=i(tt,`, it does the same (take
the last value in each row of the batch).`),tt.forEach(t),$i=d(Se),Lo=s(Se,"P",{});var wa=a(Lo);xi=i(wa,"This model inherits from "),hn=s(wa,"A",{href:!0});var zc=a(hn);Xi=i(zc,"PreTrainedModel"),zc.forEach(t),Mi=i(wa,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),wa.forEach(t),Ei=d(Se),ko=s(Se,"P",{});var ya=a(ko);Fi=i(ya,"This model is also a PyTorch "),$o=s(ya,"A",{href:!0,rel:!0});var Cc=a($o);zi=i(Cc,"torch.nn.Module"),Cc.forEach(t),Ci=i(ya,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ya.forEach(t),qi=d(Se),le=s(Se,"DIV",{class:!0});var Oe=a(le);w(xo.$$.fragment,Oe),Pi=d(Oe),Tt=s(Oe,"P",{});var Mn=a(Tt);ji=i(Mn,"The "),mn=s(Mn,"A",{href:!0});var qc=a(mn);Si=i(qc,"TransfoXLForSequenceClassification"),qc.forEach(t),Oi=i(Mn," forward method, overrides the "),as=s(Mn,"CODE",{});var Pc=a(as);Ni=i(Pc,"__call__"),Pc.forEach(t),Hi=i(Mn," special method."),Mn.forEach(t),Ai=d(Oe),w(Pt.$$.fragment,Oe),Di=d(Oe),rs=s(Oe,"P",{});var jc=a(rs);Ii=i(jc,"Example of single-label classification:"),jc.forEach(t),Wi=d(Oe),w(Xo.$$.fragment,Oe),Bi=d(Oe),is=s(Oe,"P",{});var Sc=a(is);Vi=i(Sc,"Example of multi-label classification:"),Sc.forEach(t),Ui=d(Oe),w(Mo.$$.fragment,Oe),Oe.forEach(t),Se.forEach(t),Gs=d(o),vt=s(o,"H2",{class:!0});var La=a(vt);jt=s(La,"A",{id:!0,class:!0,href:!0});var Oc=a(jt);ls=s(Oc,"SPAN",{});var Nc=a(ls);w(Eo.$$.fragment,Nc),Nc.forEach(t),Oc.forEach(t),Ri=d(La),ds=s(La,"SPAN",{});var Hc=a(ds);Gi=i(Hc,"TFTransfoXLModel"),Hc.forEach(t),La.forEach(t),Ks=d(o),me=s(o,"DIV",{class:!0});var Ue=a(me);w(Fo.$$.fragment,Ue),Ki=d(Ue),cs=s(Ue,"P",{});var Ac=a(cs);Yi=i(Ac,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Ac.forEach(t),Ji=d(Ue),zo=s(Ue,"P",{});var ka=a(zo);Qi=i(ka,"This model inherits from "),pn=s(ka,"A",{href:!0});var Dc=a(pn);Zi=i(Dc,"TFPreTrainedModel"),Dc.forEach(t),el=i(ka,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ka.forEach(t),tl=d(Ue),Co=s(Ue,"P",{});var $a=a(Co);ol=i($a,"This model is also a "),qo=s($a,"A",{href:!0,rel:!0});var Ic=a(qo);nl=i(Ic,"tf.keras.Model"),Ic.forEach(t),sl=i($a,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),$a.forEach(t),al=d(Ue),w(St.$$.fragment,Ue),rl=d(Ue),qe=s(Ue,"DIV",{class:!0});var ot=a(qe);w(Po.$$.fragment,ot),il=d(ot),bt=s(ot,"P",{});var En=a(bt);ll=i(En,"The "),un=s(En,"A",{href:!0});var Wc=a(un);dl=i(Wc,"TFTransfoXLModel"),Wc.forEach(t),cl=i(En," forward method, overrides the "),fs=s(En,"CODE",{});var Bc=a(fs);fl=i(Bc,"__call__"),Bc.forEach(t),hl=i(En," special method."),En.forEach(t),ml=d(ot),w(Ot.$$.fragment,ot),pl=d(ot),hs=s(ot,"P",{});var Vc=a(hs);ul=i(Vc,"Example:"),Vc.forEach(t),gl=d(ot),w(jo.$$.fragment,ot),ot.forEach(t),Ue.forEach(t),Ys=d(o),wt=s(o,"H2",{class:!0});var xa=a(wt);Nt=s(xa,"A",{id:!0,class:!0,href:!0});var Uc=a(Nt);ms=s(Uc,"SPAN",{});var Rc=a(ms);w(So.$$.fragment,Rc),Rc.forEach(t),Uc.forEach(t),_l=d(xa),ps=s(xa,"SPAN",{});var Gc=a(ps);Tl=i(Gc,"TFTransfoXLLMHeadModel"),Gc.forEach(t),xa.forEach(t),Js=d(o),pe=s(o,"DIV",{class:!0});var Re=a(pe);w(Oo.$$.fragment,Re),vl=d(Re),us=s(Re,"P",{});var Kc=a(us);bl=i(Kc,`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),Kc.forEach(t),wl=d(Re),No=s(Re,"P",{});var Xa=a(No);yl=i(Xa,"This model inherits from "),gn=s(Xa,"A",{href:!0});var Yc=a(gn);Ll=i(Yc,"TFPreTrainedModel"),Yc.forEach(t),kl=i(Xa,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Xa.forEach(t),$l=d(Re),Ho=s(Re,"P",{});var Ma=a(Ho);xl=i(Ma,"This model is also a "),Ao=s(Ma,"A",{href:!0,rel:!0});var Jc=a(Ao);Xl=i(Jc,"tf.keras.Model"),Jc.forEach(t),Ml=i(Ma,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ma.forEach(t),El=d(Re),w(Ht.$$.fragment,Re),Fl=d(Re),Pe=s(Re,"DIV",{class:!0});var nt=a(Pe);w(Do.$$.fragment,nt),zl=d(nt),yt=s(nt,"P",{});var Fn=a(yt);Cl=i(Fn,"The "),_n=s(Fn,"A",{href:!0});var Qc=a(_n);ql=i(Qc,"TFTransfoXLLMHeadModel"),Qc.forEach(t),Pl=i(Fn," forward method, overrides the "),gs=s(Fn,"CODE",{});var Zc=a(gs);jl=i(Zc,"__call__"),Zc.forEach(t),Sl=i(Fn," special method."),Fn.forEach(t),Ol=d(nt),w(At.$$.fragment,nt),Nl=d(nt),_s=s(nt,"P",{});var ef=a(_s);Hl=i(ef,"Example:"),ef.forEach(t),Al=d(nt),w(Io.$$.fragment,nt),nt.forEach(t),Re.forEach(t),Qs=d(o),Lt=s(o,"H2",{class:!0});var Ea=a(Lt);Dt=s(Ea,"A",{id:!0,class:!0,href:!0});var tf=a(Dt);Ts=s(tf,"SPAN",{});var of=a(Ts);w(Wo.$$.fragment,of),of.forEach(t),tf.forEach(t),Dl=d(Ea),vs=s(Ea,"SPAN",{});var nf=a(vs);Il=i(nf,"TFTransfoXLForSequenceClassification"),nf.forEach(t),Ea.forEach(t),Zs=d(o),K=s(o,"DIV",{class:!0});var be=a(K);w(Bo.$$.fragment,be),Wl=d(be),bs=s(be,"P",{});var sf=a(bs);Bl=i(sf,"The Transfo XL Model transformer with a sequence classification head on top (linear layer)."),sf.forEach(t),Vl=d(be),Tn=s(be,"P",{});var Xd=a(Tn);vn=s(Xd,"A",{href:!0});var af=a(vn);Ul=i(af,"TFTransfoXLForSequenceClassification"),af.forEach(t),Rl=i(Xd,` uses the last token in order to do the classification,
as other causal models (e.g. GPT-1,GPT-2) do.`),Xd.forEach(t),Gl=d(be),Ie=s(be,"P",{});var st=a(Ie);Kl=i(st,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ws=s(st,"CODE",{});var rf=a(ws);Yl=i(rf,"pad_token_id"),rf.forEach(t),Jl=i(st,` is defined in the configuration, it finds the last token that is not a padding token in each
row. If no `),ys=s(st,"CODE",{});var lf=a(ys);Ql=i(lf,"pad_token_id"),lf.forEach(t),Zl=i(st,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Ls=s(st,"CODE",{});var df=a(Ls);ed=i(df,"inputs_embeds"),df.forEach(t),td=i(st," are passed instead of "),ks=s(st,"CODE",{});var cf=a(ks);od=i(cf,"input_ids"),cf.forEach(t),nd=i(st,`, it does the same (take
the last value in each row of the batch).`),st.forEach(t),sd=d(be),Vo=s(be,"P",{});var Fa=a(Vo);ad=i(Fa,"This model inherits from "),bn=s(Fa,"A",{href:!0});var ff=a(bn);rd=i(ff,"TFPreTrainedModel"),ff.forEach(t),id=i(Fa,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Fa.forEach(t),ld=d(be),Uo=s(be,"P",{});var za=a(Uo);dd=i(za,"This model is also a "),Ro=s(za,"A",{href:!0,rel:!0});var hf=a(Ro);cd=i(hf,"tf.keras.Model"),hf.forEach(t),fd=i(za,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),za.forEach(t),hd=d(be),w(It.$$.fragment,be),md=d(be),je=s(be,"DIV",{class:!0});var at=a(je);w(Go.$$.fragment,at),pd=d(at),kt=s(at,"P",{});var zn=a(kt);ud=i(zn,"The "),wn=s(zn,"A",{href:!0});var mf=a(wn);gd=i(mf,"TFTransfoXLForSequenceClassification"),mf.forEach(t),_d=i(zn," forward method, overrides the "),$s=s(zn,"CODE",{});var pf=a($s);Td=i(pf,"__call__"),pf.forEach(t),vd=i(zn," special method."),zn.forEach(t),bd=d(at),w(Wt.$$.fragment,at),wd=d(at),xs=s(at,"P",{});var uf=a(xs);yd=i(uf,"Example:"),uf.forEach(t),Ld=d(at),w(Ko.$$.fragment,at),at.forEach(t),be.forEach(t),ea=d(o),$t=s(o,"H2",{class:!0});var Ca=a($t);Bt=s(Ca,"A",{id:!0,class:!0,href:!0});var gf=a(Bt);Xs=s(gf,"SPAN",{});var _f=a(Xs);w(Yo.$$.fragment,_f),_f.forEach(t),gf.forEach(t),kd=d(Ca),Ms=s(Ca,"SPAN",{});var Tf=a(Ms);$d=i(Tf,"Internal Layers"),Tf.forEach(t),Ca.forEach(t),ta=d(o),yn=s(o,"DIV",{class:!0});var vf=a(yn);vf.forEach(t),oa=d(o),Ln=s(o,"DIV",{class:!0});var bf=a(Ln);bf.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(jf)),c(g,"id","transformer-xl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#transformer-xl"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(X,"class","relative group"),c(ee,"href","https://arxiv.org/abs/1901.02860"),c(ee,"rel","nofollow"),c(f,"href","https://huggingface.co/thomwolf"),c(f,"rel","nofollow"),c(ve,"href","https://github.com/kimiyoung/transformer-xl"),c(ve,"rel","nofollow"),c(he,"id","transformers.TransfoXLConfig"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.TransfoXLConfig"),c(ie,"class","relative group"),c(en,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLModel"),c(tn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TFTransfoXLModel"),c(Gt,"href","https://huggingface.co/transfo-xl-wt103"),c(Gt,"rel","nofollow"),c(on,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(nn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(H,"class","docstring"),c(Xt,"id","transformers.TransfoXLTokenizer"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.TransfoXLTokenizer"),c(it,"class","relative group"),c(Zt,"href","https://github.com/kimiyoung/transformer-xl"),c(Zt,"rel","nofollow"),c(sn,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(jn,"class","docstring"),c(Ae,"class","docstring"),c(Mt,"id","transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"),c(lt,"class","relative group"),c(dt,"class","docstring"),c(ct,"class","docstring"),c(ft,"class","docstring"),c(ht,"class","docstring"),c(Et,"id","transformers.TransfoXLModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.TransfoXLModel"),c(mt,"class","relative group"),c(an,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(rn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLModel"),c(ze,"class","docstring"),c(Me,"class","docstring"),c(zt,"id","transformers.TransfoXLLMHeadModel"),c(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zt,"href","#transformers.TransfoXLLMHeadModel"),c(ut,"class","relative group"),c(ln,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(To,"rel","nofollow"),c(dn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLLMHeadModel"),c(Ce,"class","docstring"),c(Ee,"class","docstring"),c(qt,"id","transformers.TransfoXLForSequenceClassification"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.TransfoXLForSequenceClassification"),c(_t,"class","relative group"),c(fn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLForSequenceClassification"),c(hn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c($o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($o,"rel","nofollow"),c(mn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TransfoXLForSequenceClassification"),c(le,"class","docstring"),c(oe,"class","docstring"),c(jt,"id","transformers.TFTransfoXLModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFTransfoXLModel"),c(vt,"class","relative group"),c(pn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qo,"rel","nofollow"),c(un,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TFTransfoXLModel"),c(qe,"class","docstring"),c(me,"class","docstring"),c(Nt,"id","transformers.TFTransfoXLLMHeadModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFTransfoXLLMHeadModel"),c(wt,"class","relative group"),c(gn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ao,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ao,"rel","nofollow"),c(_n,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TFTransfoXLLMHeadModel"),c(Pe,"class","docstring"),c(pe,"class","docstring"),c(Dt,"id","transformers.TFTransfoXLForSequenceClassification"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFTransfoXLForSequenceClassification"),c(Lt,"class","relative group"),c(vn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TFTransfoXLForSequenceClassification"),c(bn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ro,"rel","nofollow"),c(wn,"href","/docs/transformers/master/en/model_doc/transformerxl#transformers.TFTransfoXLForSequenceClassification"),c(je,"class","docstring"),c(K,"class","docstring"),c(Bt,"id","transformers.AdaptiveEmbedding"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.AdaptiveEmbedding"),c($t,"class","relative group"),c(yn,"class","docstring"),c(Ln,"class","docstring")},m(o,m){e(document.head,p),h(o,x,m),h(o,u,m),e(u,g),e(g,v),y(T,v,null),e(u,_),e(u,E),e(E,we),h(o,Q,m),h(o,X,m),e(X,Y),e(Y,A),y(Z,A,null),e(X,ye),e(X,D),e(D,Le),h(o,ue,m),h(o,I,m),e(I,S),e(I,ee),e(ee,ne),e(I,F),h(o,C,m),h(o,se,m),e(se,U),h(o,ge,m),h(o,ae,m),e(ae,W),e(W,ke),h(o,_e,m),h(o,z,m),e(z,$e),h(o,B,m),h(o,J,m),e(J,ce),e(ce,R),e(J,xe),e(J,fe),e(fe,O),h(o,Te,m),h(o,q,m),e(q,Xe),e(q,f),e(f,M),e(q,re),e(q,ve),e(ve,We),e(q,N),h(o,Ne,m),h(o,ie,m),e(ie,he),e(he,P),y(j,P,null),e(ie,Be),e(ie,Fe),e(Fe,G),h(o,He,m),h(o,H,m),y(te,H,null),e(H,Ve),e(H,Ke),e(Ke,qa),e(Ke,en),e(en,Pa),e(Ke,ja),e(Ke,tn),e(tn,Sa),e(Ke,Oa),e(Ke,Gt),e(Gt,Na),e(Ke,Ha),e(H,Aa),e(H,rt),e(rt,Da),e(rt,on),e(on,Ia),e(rt,Wa),e(rt,nn),e(nn,Ba),e(rt,Va),e(H,Ua),e(H,Cn),e(Cn,Ra),e(H,Ga),y(Kt,H,null),h(o,js,m),h(o,it,m),e(it,Xt),e(Xt,qn),y(Yt,qn,null),e(it,Ka),e(it,Pn),e(Pn,Ya),h(o,Ss,m),h(o,Ae,m),y(Jt,Ae,null),e(Ae,Ja),e(Ae,Qt),e(Qt,Qa),e(Qt,Zt),e(Zt,Za),e(Qt,er),e(Ae,tr),e(Ae,eo),e(eo,or),e(eo,sn),e(sn,nr),e(eo,sr),e(Ae,ar),e(Ae,jn),h(o,Os,m),h(o,lt,m),e(lt,Mt),e(Mt,Sn),y(to,Sn,null),e(lt,rr),e(lt,On),e(On,ir),h(o,Ns,m),h(o,dt,m),y(oo,dt,null),e(dt,lr),e(dt,Nn),e(Nn,dr),h(o,Hs,m),h(o,ct,m),y(no,ct,null),e(ct,cr),e(ct,Hn),e(Hn,fr),h(o,As,m),h(o,ft,m),y(so,ft,null),e(ft,hr),e(ft,An),e(An,mr),h(o,Ds,m),h(o,ht,m),y(ao,ht,null),e(ht,pr),e(ht,Dn),e(Dn,ur),h(o,Is,m),h(o,mt,m),e(mt,Et),e(Et,In),y(ro,In,null),e(mt,gr),e(mt,Wn),e(Wn,_r),h(o,Ws,m),h(o,Me,m),y(io,Me,null),e(Me,Tr),e(Me,Bn),e(Bn,vr),e(Me,br),e(Me,lo),e(lo,wr),e(lo,an),e(an,yr),e(lo,Lr),e(Me,kr),e(Me,co),e(co,$r),e(co,fo),e(fo,xr),e(co,Xr),e(Me,Mr),e(Me,ze),y(ho,ze,null),e(ze,Er),e(ze,pt),e(pt,Fr),e(pt,rn),e(rn,zr),e(pt,Cr),e(pt,Vn),e(Vn,qr),e(pt,Pr),e(ze,jr),y(Ft,ze,null),e(ze,Sr),e(ze,Un),e(Un,Or),e(ze,Nr),y(mo,ze,null),h(o,Bs,m),h(o,ut,m),e(ut,zt),e(zt,Rn),y(po,Rn,null),e(ut,Hr),e(ut,Gn),e(Gn,Ar),h(o,Vs,m),h(o,Ee,m),y(uo,Ee,null),e(Ee,Dr),e(Ee,Kn),e(Kn,Ir),e(Ee,Wr),e(Ee,go),e(go,Br),e(go,ln),e(ln,Vr),e(go,Ur),e(Ee,Rr),e(Ee,_o),e(_o,Gr),e(_o,To),e(To,Kr),e(_o,Yr),e(Ee,Jr),e(Ee,Ce),y(vo,Ce,null),e(Ce,Qr),e(Ce,gt),e(gt,Zr),e(gt,dn),e(dn,ei),e(gt,ti),e(gt,Yn),e(Yn,oi),e(gt,ni),e(Ce,si),y(Ct,Ce,null),e(Ce,ai),e(Ce,Jn),e(Jn,ri),e(Ce,ii),y(bo,Ce,null),h(o,Us,m),h(o,_t,m),e(_t,qt),e(qt,Qn),y(wo,Qn,null),e(_t,li),e(_t,Zn),e(Zn,di),h(o,Rs,m),h(o,oe,m),y(yo,oe,null),e(oe,ci),e(oe,es),e(es,fi),e(oe,hi),e(oe,cn),e(cn,fn),e(fn,mi),e(cn,pi),e(oe,ui),e(oe,De),e(De,gi),e(De,ts),e(ts,_i),e(De,Ti),e(De,os),e(os,vi),e(De,bi),e(De,ns),e(ns,wi),e(De,yi),e(De,ss),e(ss,Li),e(De,ki),e(oe,$i),e(oe,Lo),e(Lo,xi),e(Lo,hn),e(hn,Xi),e(Lo,Mi),e(oe,Ei),e(oe,ko),e(ko,Fi),e(ko,$o),e($o,zi),e(ko,Ci),e(oe,qi),e(oe,le),y(xo,le,null),e(le,Pi),e(le,Tt),e(Tt,ji),e(Tt,mn),e(mn,Si),e(Tt,Oi),e(Tt,as),e(as,Ni),e(Tt,Hi),e(le,Ai),y(Pt,le,null),e(le,Di),e(le,rs),e(rs,Ii),e(le,Wi),y(Xo,le,null),e(le,Bi),e(le,is),e(is,Vi),e(le,Ui),y(Mo,le,null),h(o,Gs,m),h(o,vt,m),e(vt,jt),e(jt,ls),y(Eo,ls,null),e(vt,Ri),e(vt,ds),e(ds,Gi),h(o,Ks,m),h(o,me,m),y(Fo,me,null),e(me,Ki),e(me,cs),e(cs,Yi),e(me,Ji),e(me,zo),e(zo,Qi),e(zo,pn),e(pn,Zi),e(zo,el),e(me,tl),e(me,Co),e(Co,ol),e(Co,qo),e(qo,nl),e(Co,sl),e(me,al),y(St,me,null),e(me,rl),e(me,qe),y(Po,qe,null),e(qe,il),e(qe,bt),e(bt,ll),e(bt,un),e(un,dl),e(bt,cl),e(bt,fs),e(fs,fl),e(bt,hl),e(qe,ml),y(Ot,qe,null),e(qe,pl),e(qe,hs),e(hs,ul),e(qe,gl),y(jo,qe,null),h(o,Ys,m),h(o,wt,m),e(wt,Nt),e(Nt,ms),y(So,ms,null),e(wt,_l),e(wt,ps),e(ps,Tl),h(o,Js,m),h(o,pe,m),y(Oo,pe,null),e(pe,vl),e(pe,us),e(us,bl),e(pe,wl),e(pe,No),e(No,yl),e(No,gn),e(gn,Ll),e(No,kl),e(pe,$l),e(pe,Ho),e(Ho,xl),e(Ho,Ao),e(Ao,Xl),e(Ho,Ml),e(pe,El),y(Ht,pe,null),e(pe,Fl),e(pe,Pe),y(Do,Pe,null),e(Pe,zl),e(Pe,yt),e(yt,Cl),e(yt,_n),e(_n,ql),e(yt,Pl),e(yt,gs),e(gs,jl),e(yt,Sl),e(Pe,Ol),y(At,Pe,null),e(Pe,Nl),e(Pe,_s),e(_s,Hl),e(Pe,Al),y(Io,Pe,null),h(o,Qs,m),h(o,Lt,m),e(Lt,Dt),e(Dt,Ts),y(Wo,Ts,null),e(Lt,Dl),e(Lt,vs),e(vs,Il),h(o,Zs,m),h(o,K,m),y(Bo,K,null),e(K,Wl),e(K,bs),e(bs,Bl),e(K,Vl),e(K,Tn),e(Tn,vn),e(vn,Ul),e(Tn,Rl),e(K,Gl),e(K,Ie),e(Ie,Kl),e(Ie,ws),e(ws,Yl),e(Ie,Jl),e(Ie,ys),e(ys,Ql),e(Ie,Zl),e(Ie,Ls),e(Ls,ed),e(Ie,td),e(Ie,ks),e(ks,od),e(Ie,nd),e(K,sd),e(K,Vo),e(Vo,ad),e(Vo,bn),e(bn,rd),e(Vo,id),e(K,ld),e(K,Uo),e(Uo,dd),e(Uo,Ro),e(Ro,cd),e(Uo,fd),e(K,hd),y(It,K,null),e(K,md),e(K,je),y(Go,je,null),e(je,pd),e(je,kt),e(kt,ud),e(kt,wn),e(wn,gd),e(kt,_d),e(kt,$s),e($s,Td),e(kt,vd),e(je,bd),y(Wt,je,null),e(je,wd),e(je,xs),e(xs,yd),e(je,Ld),y(Ko,je,null),h(o,ea,m),h(o,$t,m),e($t,Bt),e(Bt,Xs),y(Yo,Xs,null),e($t,kd),e($t,Ms),e(Ms,$d),h(o,ta,m),h(o,yn,m),h(o,oa,m),h(o,Ln,m),na=!0},p(o,[m]){const Jo={};m&2&&(Jo.$$scope={dirty:m,ctx:o}),Ft.$set(Jo);const Es={};m&2&&(Es.$$scope={dirty:m,ctx:o}),Ct.$set(Es);const Fs={};m&2&&(Fs.$$scope={dirty:m,ctx:o}),Pt.$set(Fs);const zs={};m&2&&(zs.$$scope={dirty:m,ctx:o}),St.$set(zs);const Qo={};m&2&&(Qo.$$scope={dirty:m,ctx:o}),Ot.$set(Qo);const Cs={};m&2&&(Cs.$$scope={dirty:m,ctx:o}),Ht.$set(Cs);const qs={};m&2&&(qs.$$scope={dirty:m,ctx:o}),At.$set(qs);const Ps={};m&2&&(Ps.$$scope={dirty:m,ctx:o}),It.$set(Ps);const Zo={};m&2&&(Zo.$$scope={dirty:m,ctx:o}),Wt.$set(Zo)},i(o){na||(L(T.$$.fragment,o),L(Z.$$.fragment,o),L(j.$$.fragment,o),L(te.$$.fragment,o),L(Kt.$$.fragment,o),L(Yt.$$.fragment,o),L(Jt.$$.fragment,o),L(to.$$.fragment,o),L(oo.$$.fragment,o),L(no.$$.fragment,o),L(so.$$.fragment,o),L(ao.$$.fragment,o),L(ro.$$.fragment,o),L(io.$$.fragment,o),L(ho.$$.fragment,o),L(Ft.$$.fragment,o),L(mo.$$.fragment,o),L(po.$$.fragment,o),L(uo.$$.fragment,o),L(vo.$$.fragment,o),L(Ct.$$.fragment,o),L(bo.$$.fragment,o),L(wo.$$.fragment,o),L(yo.$$.fragment,o),L(xo.$$.fragment,o),L(Pt.$$.fragment,o),L(Xo.$$.fragment,o),L(Mo.$$.fragment,o),L(Eo.$$.fragment,o),L(Fo.$$.fragment,o),L(St.$$.fragment,o),L(Po.$$.fragment,o),L(Ot.$$.fragment,o),L(jo.$$.fragment,o),L(So.$$.fragment,o),L(Oo.$$.fragment,o),L(Ht.$$.fragment,o),L(Do.$$.fragment,o),L(At.$$.fragment,o),L(Io.$$.fragment,o),L(Wo.$$.fragment,o),L(Bo.$$.fragment,o),L(It.$$.fragment,o),L(Go.$$.fragment,o),L(Wt.$$.fragment,o),L(Ko.$$.fragment,o),L(Yo.$$.fragment,o),na=!0)},o(o){k(T.$$.fragment,o),k(Z.$$.fragment,o),k(j.$$.fragment,o),k(te.$$.fragment,o),k(Kt.$$.fragment,o),k(Yt.$$.fragment,o),k(Jt.$$.fragment,o),k(to.$$.fragment,o),k(oo.$$.fragment,o),k(no.$$.fragment,o),k(so.$$.fragment,o),k(ao.$$.fragment,o),k(ro.$$.fragment,o),k(io.$$.fragment,o),k(ho.$$.fragment,o),k(Ft.$$.fragment,o),k(mo.$$.fragment,o),k(po.$$.fragment,o),k(uo.$$.fragment,o),k(vo.$$.fragment,o),k(Ct.$$.fragment,o),k(bo.$$.fragment,o),k(wo.$$.fragment,o),k(yo.$$.fragment,o),k(xo.$$.fragment,o),k(Pt.$$.fragment,o),k(Xo.$$.fragment,o),k(Mo.$$.fragment,o),k(Eo.$$.fragment,o),k(Fo.$$.fragment,o),k(St.$$.fragment,o),k(Po.$$.fragment,o),k(Ot.$$.fragment,o),k(jo.$$.fragment,o),k(So.$$.fragment,o),k(Oo.$$.fragment,o),k(Ht.$$.fragment,o),k(Do.$$.fragment,o),k(At.$$.fragment,o),k(Io.$$.fragment,o),k(Wo.$$.fragment,o),k(Bo.$$.fragment,o),k(It.$$.fragment,o),k(Go.$$.fragment,o),k(Wt.$$.fragment,o),k(Ko.$$.fragment,o),k(Yo.$$.fragment,o),na=!1},d(o){t(p),o&&t(x),o&&t(u),$(T),o&&t(Q),o&&t(X),$(Z),o&&t(ue),o&&t(I),o&&t(C),o&&t(se),o&&t(ge),o&&t(ae),o&&t(_e),o&&t(z),o&&t(B),o&&t(J),o&&t(Te),o&&t(q),o&&t(Ne),o&&t(ie),$(j),o&&t(He),o&&t(H),$(te),$(Kt),o&&t(js),o&&t(it),$(Yt),o&&t(Ss),o&&t(Ae),$(Jt),o&&t(Os),o&&t(lt),$(to),o&&t(Ns),o&&t(dt),$(oo),o&&t(Hs),o&&t(ct),$(no),o&&t(As),o&&t(ft),$(so),o&&t(Ds),o&&t(ht),$(ao),o&&t(Is),o&&t(mt),$(ro),o&&t(Ws),o&&t(Me),$(io),$(ho),$(Ft),$(mo),o&&t(Bs),o&&t(ut),$(po),o&&t(Vs),o&&t(Ee),$(uo),$(vo),$(Ct),$(bo),o&&t(Us),o&&t(_t),$(wo),o&&t(Rs),o&&t(oe),$(yo),$(xo),$(Pt),$(Xo),$(Mo),o&&t(Gs),o&&t(vt),$(Eo),o&&t(Ks),o&&t(me),$(Fo),$(St),$(Po),$(Ot),$(jo),o&&t(Ys),o&&t(wt),$(So),o&&t(Js),o&&t(pe),$(Oo),$(Ht),$(Do),$(At),$(Io),o&&t(Qs),o&&t(Lt),$(Wo),o&&t(Zs),o&&t(K),$(Bo),$(It),$(Go),$(Wt),$(Ko),o&&t(ea),o&&t($t),$(Yo),o&&t(ta),o&&t(yn),o&&t(oa),o&&t(Ln)}}}const jf={local:"transformer-xl",sections:[{local:"overview",title:"Overview"},{local:"transformers.TransfoXLConfig",title:"TransfoXLConfig"},{local:"transformers.TransfoXLTokenizer",title:"TransfoXLTokenizer"},{local:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",title:"TransfoXL specific outputs"},{local:"transformers.TransfoXLModel",title:"TransfoXLModel"},{local:"transformers.TransfoXLLMHeadModel",title:"TransfoXLLMHeadModel"},{local:"transformers.TransfoXLForSequenceClassification",title:"TransfoXLForSequenceClassification"},{local:"transformers.TFTransfoXLModel",title:"TFTransfoXLModel"},{local:"transformers.TFTransfoXLLMHeadModel",title:"TFTransfoXLLMHeadModel"},{local:"transformers.TFTransfoXLForSequenceClassification",title:"TFTransfoXLForSequenceClassification"},{local:"transformers.AdaptiveEmbedding",title:"Internal Layers"}],title:"Transformer XL"};function Sf(V,p,x){let{fw:u}=p;return V.$$set=g=>{"fw"in g&&x(0,u=g.fw)},[u]}class Wf extends wf{constructor(p){super();yf(this,p,Sf,Pf,Lf,{fw:0})}}export{Wf as default,jf as metadata};
