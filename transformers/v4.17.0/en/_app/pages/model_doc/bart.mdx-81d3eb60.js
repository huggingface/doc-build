import{S as ZT,i as YT,s as e1,e as n,k as d,w as m,t as r,M as t1,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as u,y as _,q as g,o as k,B as b}from"../../chunks/vendor-4833417e.js";import{T as De}from"../../chunks/Tip-fffd6df1.js";import{D as F}from"../../chunks/Docstring-4f315ed9.js";import{C as P}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as J}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function o1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("When used with "),v=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer will add a space before each word (even the first one).")},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"When used with "),v=a(y,"CODE",{});var B=s(v);w=i(B,"is_split_into_words=True"),B.forEach(t),x=i(y,", this tokenizer will add a space before each word (even the first one)."),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function n1(j){let p,q,v,w,x,T,y,B;return{c(){p=n("p"),q=r("When used with "),v=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer needs to be instantiated with "),T=n("code"),y=r("add_prefix_space=True"),B=r(".")},l(ne){p=a(ne,"P",{});var A=s(p);q=i(A,"When used with "),v=a(A,"CODE",{});var $=s(v);w=i($,"is_split_into_words=True"),$.forEach(t),x=i(A,", this tokenizer needs to be instantiated with "),T=a(A,"CODE",{});var le=s(T);y=i(le,"add_prefix_space=True"),le.forEach(t),B=i(A,"."),A.forEach(t)},m(ne,A){u(ne,p,A),e(p,q),e(p,v),e(v,w),e(p,x),e(p,T),e(T,y),e(p,B)},d(ne){ne&&t(p)}}}function a1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function s1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function r1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function i1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function d1(j){let p,q,v,w,x,T,y,B,ne,A,$,le,_e,Ke,ge,ke,Ze,Je,H,N,Le,ae,C,S,Ye,ce,pe,et,Q,tt,ot,D,Be,be,Xe,X,se,nt,at,V,st,ve,Ge;return{c(){p=n("p"),q=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),ne=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),le=r("This second option is useful when using "),_e=n("code"),Ke=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),Ze=r("model(inputs)"),Je=r("."),H=d(),N=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),C=n("ul"),S=n("li"),Ye=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),et=r(" only and nothing else: "),Q=n("code"),tt=r("model(input_ids)"),ot=d(),D=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Xe=r("model([input_ids, attention_mask])"),X=r(" or "),se=n("code"),nt=r("model([input_ids, attention_mask, token_type_ids])"),at=d(),V=n("li"),st=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=n("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=a(z,"P",{});var M=s(p);q=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),v=l(z),w=a(z,"UL",{});var U=s(w);x=a(U,"LI",{});var St=s(x);T=i(St,"having all inputs as keyword arguments (like PyTorch models), or"),St.forEach(t),y=l(U),B=a(U,"LI",{});var We=s(B);ne=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),U.forEach(t),A=l(z),$=a(z,"P",{});var re=s($);le=i(re,"This second option is useful when using "),_e=a(re,"CODE",{});var It=s(_e);Ke=i(It,"tf.keras.Model.fit"),It.forEach(t),ge=i(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(re,"CODE",{});var Re=s(ke);Ze=i(Re,"model(inputs)"),Re.forEach(t),Je=i(re,"."),re.forEach(t),H=l(z),N=a(z,"P",{});var Ot=s(N);Le=i(Ot,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ot.forEach(t),ae=l(z),C=a(z,"UL",{});var ie=s(C);S=a(ie,"LI",{});var he=s(S);Ye=i(he,"a single Tensor with "),ce=a(he,"CODE",{});var ye=s(ce);pe=i(ye,"input_ids"),ye.forEach(t),et=i(he," only and nothing else: "),Q=a(he,"CODE",{});var Fe=s(Q);tt=i(Fe,"model(input_ids)"),Fe.forEach(t),he.forEach(t),ot=l(ie),D=a(ie,"LI",{});var de=s(D);Be=i(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(de,"CODE",{});var Ue=s(be);Xe=i(Ue,"model([input_ids, attention_mask])"),Ue.forEach(t),X=i(de," or "),se=a(de,"CODE",{});var Nt=s(se);nt=i(Nt,"model([input_ids, attention_mask, token_type_ids])"),Nt.forEach(t),de.forEach(t),at=l(ie),V=a(ie,"LI",{});var He=s(V);st=i(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=a(He,"CODE",{});var Dt=s(ve);Ge=i(Dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Dt.forEach(t),He.forEach(t),ie.forEach(t)},m(z,M){u(z,p,M),e(p,q),u(z,v,M),u(z,w,M),e(w,x),e(x,T),e(w,y),e(w,B),e(B,ne),u(z,A,M),u(z,$,M),e($,le),e($,_e),e(_e,Ke),e($,ge),e($,ke),e(ke,Ze),e($,Je),u(z,H,M),u(z,N,M),e(N,Le),u(z,ae,M),u(z,C,M),e(C,S),e(S,Ye),e(S,ce),e(ce,pe),e(S,et),e(S,Q),e(Q,tt),e(C,ot),e(C,D),e(D,Be),e(D,be),e(be,Xe),e(D,X),e(D,se),e(se,nt),e(C,at),e(C,V),e(V,st),e(V,ve),e(ve,Ge)},d(z){z&&t(p),z&&t(v),z&&t(w),z&&t(A),z&&t($),z&&t(H),z&&t(N),z&&t(ae),z&&t(C)}}}function l1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function c1(j){let p,q,v,w,x,T,y,B,ne,A,$,le,_e,Ke,ge,ke,Ze,Je,H,N,Le,ae,C,S,Ye,ce,pe,et,Q,tt,ot,D,Be,be,Xe,X,se,nt,at,V,st,ve,Ge;return{c(){p=n("p"),q=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),ne=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),le=r("This second option is useful when using "),_e=n("code"),Ke=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),Ze=r("model(inputs)"),Je=r("."),H=d(),N=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),C=n("ul"),S=n("li"),Ye=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),et=r(" only and nothing else: "),Q=n("code"),tt=r("model(input_ids)"),ot=d(),D=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Xe=r("model([input_ids, attention_mask])"),X=r(" or "),se=n("code"),nt=r("model([input_ids, attention_mask, token_type_ids])"),at=d(),V=n("li"),st=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=n("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=a(z,"P",{});var M=s(p);q=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),v=l(z),w=a(z,"UL",{});var U=s(w);x=a(U,"LI",{});var St=s(x);T=i(St,"having all inputs as keyword arguments (like PyTorch models), or"),St.forEach(t),y=l(U),B=a(U,"LI",{});var We=s(B);ne=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),U.forEach(t),A=l(z),$=a(z,"P",{});var re=s($);le=i(re,"This second option is useful when using "),_e=a(re,"CODE",{});var It=s(_e);Ke=i(It,"tf.keras.Model.fit"),It.forEach(t),ge=i(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(re,"CODE",{});var Re=s(ke);Ze=i(Re,"model(inputs)"),Re.forEach(t),Je=i(re,"."),re.forEach(t),H=l(z),N=a(z,"P",{});var Ot=s(N);Le=i(Ot,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ot.forEach(t),ae=l(z),C=a(z,"UL",{});var ie=s(C);S=a(ie,"LI",{});var he=s(S);Ye=i(he,"a single Tensor with "),ce=a(he,"CODE",{});var ye=s(ce);pe=i(ye,"input_ids"),ye.forEach(t),et=i(he," only and nothing else: "),Q=a(he,"CODE",{});var Fe=s(Q);tt=i(Fe,"model(input_ids)"),Fe.forEach(t),he.forEach(t),ot=l(ie),D=a(ie,"LI",{});var de=s(D);Be=i(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(de,"CODE",{});var Ue=s(be);Xe=i(Ue,"model([input_ids, attention_mask])"),Ue.forEach(t),X=i(de," or "),se=a(de,"CODE",{});var Nt=s(se);nt=i(Nt,"model([input_ids, attention_mask, token_type_ids])"),Nt.forEach(t),de.forEach(t),at=l(ie),V=a(ie,"LI",{});var He=s(V);st=i(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=a(He,"CODE",{});var Dt=s(ve);Ge=i(Dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Dt.forEach(t),He.forEach(t),ie.forEach(t)},m(z,M){u(z,p,M),e(p,q),u(z,v,M),u(z,w,M),e(w,x),e(x,T),e(w,y),e(w,B),e(B,ne),u(z,A,M),u(z,$,M),e($,le),e($,_e),e(_e,Ke),e($,ge),e($,ke),e(ke,Ze),e($,Je),u(z,H,M),u(z,N,M),e(N,Le),u(z,ae,M),u(z,C,M),e(C,S),e(S,Ye),e(S,ce),e(ce,pe),e(S,et),e(S,Q),e(Q,tt),e(C,ot),e(C,D),e(D,Be),e(D,be),e(be,Xe),e(D,X),e(D,se),e(se,nt),e(C,at),e(C,V),e(V,st),e(V,ve),e(ve,Ge)},d(z){z&&t(p),z&&t(v),z&&t(w),z&&t(A),z&&t($),z&&t(H),z&&t(N),z&&t(ae),z&&t(C)}}}function p1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function h1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function u1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function m1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function f1(j){let p,q,v,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,q),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function _1(j){let p,q,v,w,x,T,y,B,ne,A,$,le,_e,Ke,ge,ke,Ze,Je,H,N,Le,ae,C,S,Ye,ce,pe,et,Q,tt,ot,D,Be,be,Xe,X,se,nt,at,V,st,ve,Ge,z,M,U,St,We,re,It,Re,Ot,ie,he,ye,Fe,de,Ue,Nt,He,Dt,yl,ht,un,Zc,mn,Yc,ep,tp,rt,op,Vs,np,ap,ei,sp,rp,fn,ip,dp,lp,To,_n,cp,pp,gn,hp,up,Tl,Lt,wo,ti,kn,mp,oi,fp,wl,$e,it,_p,ni,gp,kp,Js,bp,vp,Xs,yp,Tp,wp,Gt,xp,Ks,zp,qp,ai,Bp,Fp,$p,Wt,jp,si,Mp,Ep,ri,Pp,Cp,Ap,Zs,Ys,Sp,Ip,Op,Rt,Np,ii,Dp,Lp,di,Gp,Wp,xl,Ut,xo,li,bn,Rp,ci,Up,zl,ut,Hp,pi,Qp,Vp,hi,Jp,Xp,ql,vn,Bl,Ht,zo,ui,yn,Kp,mi,Zp,Fl,Te,Tn,Yp,Qt,eh,er,th,oh,wn,nh,ah,sh,Vt,rh,tr,ih,dh,or,lh,ch,ph,fi,hh,uh,xn,$l,Jt,qo,_i,zn,mh,gi,fh,jl,E,qn,_h,ki,gh,kh,bi,bh,vh,Bn,yh,Fn,Th,vi,wh,xh,zh,Bo,qh,$n,Bh,nr,Fh,$h,jh,mt,jn,Mh,yi,Eh,Ph,Mn,ar,Ch,Ti,Ah,Sh,sr,Ih,wi,Oh,Nh,Fo,En,Dh,xi,Lh,Gh,$o,Pn,Wh,zi,Rh,Uh,jo,Cn,Hh,An,Qh,qi,Vh,Jh,Ml,Xt,Mo,Bi,Sn,Xh,Fi,Kh,El,G,In,Zh,On,Yh,$i,eu,tu,ou,ji,nu,au,Nn,su,Dn,ru,Mi,iu,du,lu,Eo,cu,Ln,pu,rr,hu,uu,mu,Po,Gn,fu,Ei,_u,Pl,Kt,Co,Pi,Wn,gu,Ci,ku,Cl,Qe,Rn,bu,Un,vu,ir,yu,Tu,wu,Hn,xu,Qn,zu,qu,Bu,je,Vn,Fu,Zt,$u,dr,ju,Mu,Ai,Eu,Pu,Cu,Ao,Au,Si,Su,Iu,Jn,Al,Yt,So,Ii,Xn,Ou,Oi,Nu,Sl,Ve,Kn,Du,Zn,Lu,lr,Gu,Wu,Ru,Yn,Uu,ea,Hu,Qu,Vu,K,ta,Ju,eo,Xu,cr,Ku,Zu,Ni,Yu,em,tm,Io,om,Di,nm,am,oa,sm,Li,rm,im,na,Il,to,Oo,Gi,aa,dm,Wi,lm,Ol,we,sa,cm,Ri,pm,hm,ra,um,pr,mm,fm,_m,ia,gm,da,km,bm,vm,Z,la,ym,oo,Tm,hr,wm,xm,Ui,zm,qm,Bm,No,Fm,Hi,$m,jm,ca,Mm,Qi,Em,Pm,pa,Nl,no,Do,Vi,ha,Cm,Ji,Am,Dl,xe,ua,Sm,ao,Im,Xi,Om,Nm,Ki,Dm,Lm,Gm,ma,Wm,ur,Rm,Um,Hm,fa,Qm,_a,Vm,Jm,Xm,Me,ga,Km,so,Zm,mr,Ym,ef,Zi,tf,of,nf,Lo,af,Yi,sf,rf,ka,Ll,ro,Go,ed,ba,df,td,lf,Gl,io,va,cf,ft,ya,pf,od,hf,uf,Ta,Wl,lo,Wo,nd,wa,mf,ad,ff,Rl,ze,xa,_f,za,gf,fr,kf,bf,vf,qa,yf,Ba,Tf,wf,xf,Ro,zf,Ee,Fa,qf,co,Bf,_r,Ff,$f,sd,jf,Mf,Ef,Uo,Pf,rd,Cf,Af,$a,Ul,po,Ho,id,ja,Sf,dd,If,Hl,qe,Ma,Of,Ea,Nf,gr,Df,Lf,Gf,Pa,Wf,Ca,Rf,Uf,Hf,Qo,Qf,Y,Aa,Vf,ho,Jf,kr,Xf,Kf,ld,Zf,Yf,e_,Vo,t_,cd,o_,n_,Sa,a_,pd,s_,r_,Ia,Ql,uo,Jo,hd,Oa,i_,ud,d_,Vl,W,Na,l_,Da,c_,br,p_,h_,u_,La,m_,Ga,f_,__,g_,md,k_,b_,dt,fd,Wa,v_,y_,_d,Ra,T_,w_,gd,Ua,x_,z_,kd,Ha,q_,B_,Pe,Qa,F_,mo,$_,bd,j_,M_,vd,E_,P_,C_,Xo,A_,yd,S_,I_,Va,O_,_t,Ja,N_,Td,D_,L_,Xa,G_,gt,Ka,W_,wd,R_,U_,Za,Jl,fo,Ko,xd,Ya,H_,zd,Q_,Xl,R,es,V_,ts,J_,vr,X_,K_,Z_,os,Y_,ns,eg,tg,og,qd,ng,ag,lt,Bd,as,sg,rg,Fd,ss,ig,dg,$d,rs,lg,cg,jd,is,pg,hg,ee,ds,ug,_o,mg,Md,fg,_g,Ed,gg,kg,bg,Zo,vg,Pd,yg,Tg,ls,wg,Cd,xg,zg,cs,qg,kt,ps,Bg,Ad,Fg,$g,hs,jg,bt,us,Mg,Sd,Eg,Pg,ms,Kl,go,Yo,Id,fs,Cg,Od,Ag,Zl,I,_s,Sg,Nd,Ig,Og,gs,Ng,yr,Dg,Lg,Gg,ks,Wg,bs,Rg,Ug,Hg,Dd,Qg,Vg,ct,Ld,vs,Jg,Xg,Gd,ys,Kg,Zg,Wd,Ts,Yg,ek,Rd,ws,tk,ok,Ce,xs,nk,ko,ak,Ud,sk,rk,Hd,ik,dk,lk,en,ck,Qd,pk,hk,zs,uk,vt,qs,mk,Vd,fk,_k,Bs,gk,yt,Fs,kk,Jd,bk,vk,$s,Yl,bo,tn,Xd,js,yk,Kd,Tk,ec,O,Ms,wk,vo,xk,Zd,zk,qk,Yd,Bk,Fk,$k,Es,jk,Tr,Mk,Ek,Pk,Ps,Ck,Cs,Ak,Sk,Ik,el,Ok,Nk,pt,tl,As,Dk,Lk,ol,Ss,Gk,Wk,nl,Is,Rk,Uk,al,Os,Hk,Qk,Ae,Ns,Vk,yo,Jk,sl,Xk,Kk,rl,Zk,Yk,eb,on,tb,il,ob,nb,Ds,ab,Tt,Ls,sb,dl,rb,ib,Gs,db,wt,Ws,lb,ll,cb,pb,Rs,tc;return T=new J({}),ae=new J({}),Ue=new J({}),kn=new J({}),bn=new J({}),vn=new P({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors="pt")
generated_ids = model.generate(batch["input_ids"])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == [
    "UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria"
]`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [
    <span class="hljs-string">&quot;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&quot;</span>
]`}}),yn=new J({}),Tn=new F({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/configuration_bart.py#L36",parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).
num_labels &#x2014; (<code>int</code>, <em>optional</em>, defaults to 3):
The number of labels to use in <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),xn=new P({props:{code:`from transformers import BartModel, BartConfig

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartModel, BartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),zn=new J({}),qn=new F({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart.py#L101",parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}]}}),Bn=new P({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Bo=new De({props:{$$slots:{default:[o1]},$$scope:{ctx:j}}}),jn=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart.py#L303"}}),Pn=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new J({}),In=new F({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart_fast.py#L70",parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BartTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}]}}),Nn=new P({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Eo=new De({props:{$$slots:{default:[n1]},$$scope:{ctx:j}}}),Gn=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/tokenization_bart_fast.py#L282",parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wn=new J({}),Rn=new F({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1123",parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vn=new F({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1150",parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new De({props:{$$slots:{default:[a1]},$$scope:{ctx:j}}}),Jn=new P({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Xn=new J({}),Kn=new F({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1249",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ta=new F({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1288",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new De({props:{$$slots:{default:[s1]},$$scope:{ctx:j}}}),oa=new P({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),na=new P({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),aa=new J({}),sa=new F({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1418",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),la=new F({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1431",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new De({props:{$$slots:{default:[r1]},$$scope:{ctx:j}}}),ca=new P({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForSequenceClassification.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),pa=new P({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForSequenceClassification.from_pretrained("facebook/bart-large", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ha=new J({}),ua=new F({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1543",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ga=new F({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1555",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new De({props:{$$slots:{default:[i1]},$$scope:{ctx:j}}}),ka=new P({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForQuestionAnswering.from_pretrained("facebook/bart-large")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ba=new J({}),va=new F({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1671"}}),ya=new F({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_bart.py#L1702",parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ta=new P({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForCausalLM.from_pretrained("facebook/bart-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wa=new J({}),xa=new F({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_tf_bart.py#L1187",parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new De({props:{$$slots:{default:[d1]},$$scope:{ctx:j}}}),Fa=new F({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_tf_bart.py#L1202",parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Uo=new De({props:{$$slots:{default:[l1]},$$scope:{ctx:j}}}),$a=new P({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = TFBartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ja=new J({}),Ma=new F({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_tf_bart.py#L1296",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new De({props:{$$slots:{default:[c1]},$$scope:{ctx:j}}}),Aa=new F({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_tf_bart.py#L1331",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new De({props:{$$slots:{default:[p1]},$$scope:{ctx:j}}}),Sa=new P({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ia=new P({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="tf")["input_ids"]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Oa=new J({}),Na=new F({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1244",parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Qa=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new De({props:{$$slots:{default:[h1]},$$scope:{ctx:j}}}),Va=new P({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ja=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xa=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ka=new F({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Za=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ya=new J({}),es=new F({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1330",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ds=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new De({props:{$$slots:{default:[u1]},$$scope:{ctx:j}}}),ls=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),cs=new P({props:{code:`import jax
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="jax")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs, k=1)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs, k=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),ps=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),us=new F({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1334",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ms=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fs=new J({}),_s=new F({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1643",parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),xs=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new De({props:{$$slots:{default:[m1]},$$scope:{ctx:j}}}),zs=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qs=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Fs=new F({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),js=new J({}),Ms=new F({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1730",parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ns=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new De({props:{$$slots:{default:[f1]},$$scope:{ctx:j}}}),Ds=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Ls=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gs=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ws=new F({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("meta"),q=d(),v=n("h1"),w=n("a"),x=n("span"),m(T.$$.fragment),y=d(),B=n("span"),ne=r("BART"),A=d(),$=n("p"),le=n("strong"),_e=r("DISCLAIMER:"),Ke=r(" If you see something strange, file a "),ge=n("a"),ke=r("Github Issue"),Ze=r(` and assign
@patrickvonplaten`),Je=d(),H=n("h2"),N=n("a"),Le=n("span"),m(ae.$$.fragment),C=d(),S=n("span"),Ye=r("Overview"),ce=d(),pe=n("p"),et=r("The Bart model was proposed in "),Q=n("a"),tt=r(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),ot=r(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),D=d(),Be=n("p"),be=r("According to the abstract,"),Xe=d(),X=n("ul"),se=n("li"),nt=r(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),at=d(),V=n("li"),st=r(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ve=d(),Ge=n("li"),z=r(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=d(),U=n("p"),St=r("This model was contributed by "),We=n("a"),re=r("sshleifer"),It=r(". The Authors\u2019 code can be found "),Re=n("a"),Ot=r("here"),ie=r("."),he=d(),ye=n("h3"),Fe=n("a"),de=n("span"),m(Ue.$$.fragment),Nt=d(),He=n("span"),Dt=r("Examples"),yl=d(),ht=n("ul"),un=n("li"),Zc=r(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),mn=n("a"),Yc=r("examples/pytorch/summarization/"),ep=r("."),tp=d(),rt=n("li"),op=r("An example of how to train "),Vs=n("a"),np=r("BartForConditionalGeneration"),ap=r(" with a Hugging Face "),ei=n("code"),sp=r("datasets"),rp=r(`
object can be found in this `),fn=n("a"),ip=r("forum discussion"),dp=r("."),lp=d(),To=n("li"),_n=n("a"),cp=r("Distilled checkpoints"),pp=r(" are described in this "),gn=n("a"),hp=r("paper"),up=r("."),Tl=d(),Lt=n("h2"),wo=n("a"),ti=n("span"),m(kn.$$.fragment),mp=d(),oi=n("span"),fp=r("Implementation Notes"),wl=d(),$e=n("ul"),it=n("li"),_p=r("Bart doesn\u2019t use "),ni=n("code"),gp=r("token_type_ids"),kp=r(" for sequence classification. Use "),Js=n("a"),bp=r("BartTokenizer"),vp=r(` or
`),Xs=n("a"),yp=r("encode()"),Tp=r(" to get the proper splitting."),wp=d(),Gt=n("li"),xp=r("The forward pass of "),Ks=n("a"),zp=r("BartModel"),qp=r(" will create the "),ai=n("code"),Bp=r("decoder_input_ids"),Fp=r(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),$p=d(),Wt=n("li"),jp=r(`Model predictions are intended to be identical to the original implementation when
`),si=n("code"),Mp=r("forced_bos_token_id=0"),Ep=r(`. This only works, however, if the string you pass to
`),ri=n("code"),Pp=r("fairseq.encode"),Cp=r(" starts with a space."),Ap=d(),Zs=n("li"),Ys=n("a"),Sp=r("generate()"),Ip=r(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Op=d(),Rt=n("li"),Np=r("Models that load the "),ii=n("em"),Dp=r("facebook/bart-large-cnn"),Lp=r(" weights will not have a "),di=n("code"),Gp=r("mask_token_id"),Wp=r(`, or be able to perform
mask-filling tasks.`),xl=d(),Ut=n("h2"),xo=n("a"),li=n("span"),m(bn.$$.fragment),Rp=d(),ci=n("span"),Up=r("Mask Filling"),zl=d(),ut=n("p"),Hp=r("The "),pi=n("code"),Qp=r("facebook/bart-base"),Vp=r(" and "),hi=n("code"),Jp=r("facebook/bart-large"),Xp=r(" checkpoints can be used to fill multi-token masks."),ql=d(),m(vn.$$.fragment),Bl=d(),Ht=n("h2"),zo=n("a"),ui=n("span"),m(yn.$$.fragment),Kp=d(),mi=n("span"),Zp=r("BartConfig"),Fl=d(),Te=n("div"),m(Tn.$$.fragment),Yp=d(),Qt=n("p"),eh=r("This is the configuration class to store the configuration of a "),er=n("a"),th=r("BartModel"),oh=r(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),wn=n("a"),nh=r("facebook/bart-large"),ah=r(" architecture."),sh=d(),Vt=n("p"),rh=r("Configuration objects inherit from "),tr=n("a"),ih=r("PretrainedConfig"),dh=r(` and can be used to control the model outputs. Read the
documentation from `),or=n("a"),lh=r("PretrainedConfig"),ch=r(" for more information."),ph=d(),fi=n("p"),hh=r("Example:"),uh=d(),m(xn.$$.fragment),$l=d(),Jt=n("h2"),qo=n("a"),_i=n("span"),m(zn.$$.fragment),mh=d(),gi=n("span"),fh=r("BartTokenizer"),jl=d(),E=n("div"),m(qn.$$.fragment),_h=d(),ki=n("p"),gh=r("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),kh=d(),bi=n("p"),bh=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),vh=d(),m(Bn.$$.fragment),yh=d(),Fn=n("p"),Th=r("You can get around that behavior by passing "),vi=n("code"),wh=r("add_prefix_space=True"),xh=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),zh=d(),m(Bo.$$.fragment),qh=d(),$n=n("p"),Bh=r("This tokenizer inherits from "),nr=n("a"),Fh=r("PreTrainedTokenizer"),$h=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),jh=d(),mt=n("div"),m(jn.$$.fragment),Mh=d(),yi=n("p"),Eh=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Ph=d(),Mn=n("ul"),ar=n("li"),Ch=r("single sequence: "),Ti=n("code"),Ah=r("<s> X </s>"),Sh=d(),sr=n("li"),Ih=r("pair of sequences: "),wi=n("code"),Oh=r("<s> A </s></s> B </s>"),Nh=d(),Fo=n("div"),m(En.$$.fragment),Dh=d(),xi=n("p"),Lh=r("Converts a sequence of tokens (string) in a single string."),Gh=d(),$o=n("div"),m(Pn.$$.fragment),Wh=d(),zi=n("p"),Rh=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Uh=d(),jo=n("div"),m(Cn.$$.fragment),Hh=d(),An=n("p"),Qh=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qi=n("code"),Vh=r("prepare_for_model"),Jh=r(" method."),Ml=d(),Xt=n("h2"),Mo=n("a"),Bi=n("span"),m(Sn.$$.fragment),Xh=d(),Fi=n("span"),Kh=r("BartTokenizerFast"),El=d(),G=n("div"),m(In.$$.fragment),Zh=d(),On=n("p"),Yh=r("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),$i=n("em"),eu=r("tokenizers"),tu=r(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),ou=d(),ji=n("p"),nu=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),au=d(),m(Nn.$$.fragment),su=d(),Dn=n("p"),ru=r("You can get around that behavior by passing "),Mi=n("code"),iu=r("add_prefix_space=True"),du=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),lu=d(),m(Eo.$$.fragment),cu=d(),Ln=n("p"),pu=r("This tokenizer inherits from "),rr=n("a"),hu=r("PreTrainedTokenizerFast"),uu=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),mu=d(),Po=n("div"),m(Gn.$$.fragment),fu=d(),Ei=n("p"),_u=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Pl=d(),Kt=n("h2"),Co=n("a"),Pi=n("span"),m(Wn.$$.fragment),gu=d(),Ci=n("span"),ku=r("BartModel"),Cl=d(),Qe=n("div"),m(Rn.$$.fragment),bu=d(),Un=n("p"),vu=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ir=n("a"),yu=r("PreTrainedModel"),Tu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu=d(),Hn=n("p"),xu=r("This model is also a PyTorch "),Qn=n("a"),zu=r("torch.nn.Module"),qu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bu=d(),je=n("div"),m(Vn.$$.fragment),Fu=d(),Zt=n("p"),$u=r("The "),dr=n("a"),ju=r("BartModel"),Mu=r(" forward method, overrides the "),Ai=n("code"),Eu=r("__call__"),Pu=r(" special method."),Cu=d(),m(Ao.$$.fragment),Au=d(),Si=n("p"),Su=r("Example:"),Iu=d(),m(Jn.$$.fragment),Al=d(),Yt=n("h2"),So=n("a"),Ii=n("span"),m(Xn.$$.fragment),Ou=d(),Oi=n("span"),Nu=r("BartForConditionalGeneration"),Sl=d(),Ve=n("div"),m(Kn.$$.fragment),Du=d(),Zn=n("p"),Lu=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),lr=n("a"),Gu=r("PreTrainedModel"),Wu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru=d(),Yn=n("p"),Uu=r("This model is also a PyTorch "),ea=n("a"),Hu=r("torch.nn.Module"),Qu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vu=d(),K=n("div"),m(ta.$$.fragment),Ju=d(),eo=n("p"),Xu=r("The "),cr=n("a"),Ku=r("BartForConditionalGeneration"),Zu=r(" forward method, overrides the "),Ni=n("code"),Yu=r("__call__"),em=r(" special method."),tm=d(),m(Io.$$.fragment),om=d(),Di=n("p"),nm=r("Summarization example:"),am=d(),m(oa.$$.fragment),sm=d(),Li=n("p"),rm=r("Mask filling example:"),im=d(),m(na.$$.fragment),Il=d(),to=n("h2"),Oo=n("a"),Gi=n("span"),m(aa.$$.fragment),dm=d(),Wi=n("span"),lm=r("BartForSequenceClassification"),Ol=d(),we=n("div"),m(sa.$$.fragment),cm=d(),Ri=n("p"),pm=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),hm=d(),ra=n("p"),um=r("This model inherits from "),pr=n("a"),mm=r("PreTrainedModel"),fm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m=d(),ia=n("p"),gm=r("This model is also a PyTorch "),da=n("a"),km=r("torch.nn.Module"),bm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vm=d(),Z=n("div"),m(la.$$.fragment),ym=d(),oo=n("p"),Tm=r("The "),hr=n("a"),wm=r("BartForSequenceClassification"),xm=r(" forward method, overrides the "),Ui=n("code"),zm=r("__call__"),qm=r(" special method."),Bm=d(),m(No.$$.fragment),Fm=d(),Hi=n("p"),$m=r("Example of single-label classification:"),jm=d(),m(ca.$$.fragment),Mm=d(),Qi=n("p"),Em=r("Example of multi-label classification:"),Pm=d(),m(pa.$$.fragment),Nl=d(),no=n("h2"),Do=n("a"),Vi=n("span"),m(ha.$$.fragment),Cm=d(),Ji=n("span"),Am=r("BartForQuestionAnswering"),Dl=d(),xe=n("div"),m(ua.$$.fragment),Sm=d(),ao=n("p"),Im=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Xi=n("code"),Om=r("span start logits"),Nm=r(" and "),Ki=n("code"),Dm=r("span end logits"),Lm=r(")."),Gm=d(),ma=n("p"),Wm=r("This model inherits from "),ur=n("a"),Rm=r("PreTrainedModel"),Um=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=d(),fa=n("p"),Qm=r("This model is also a PyTorch "),_a=n("a"),Vm=r("torch.nn.Module"),Jm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xm=d(),Me=n("div"),m(ga.$$.fragment),Km=d(),so=n("p"),Zm=r("The "),mr=n("a"),Ym=r("BartForQuestionAnswering"),ef=r(" forward method, overrides the "),Zi=n("code"),tf=r("__call__"),of=r(" special method."),nf=d(),m(Lo.$$.fragment),af=d(),Yi=n("p"),sf=r("Example:"),rf=d(),m(ka.$$.fragment),Ll=d(),ro=n("h2"),Go=n("a"),ed=n("span"),m(ba.$$.fragment),df=d(),td=n("span"),lf=r("BartForCausalLM"),Gl=d(),io=n("div"),m(va.$$.fragment),cf=d(),ft=n("div"),m(ya.$$.fragment),pf=d(),od=n("p"),hf=r("Example:"),uf=d(),m(Ta.$$.fragment),Wl=d(),lo=n("h2"),Wo=n("a"),nd=n("span"),m(wa.$$.fragment),mf=d(),ad=n("span"),ff=r("TFBartModel"),Rl=d(),ze=n("div"),m(xa.$$.fragment),_f=d(),za=n("p"),gf=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fr=n("a"),kf=r("TFPreTrainedModel"),bf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vf=d(),qa=n("p"),yf=r("This model is also a "),Ba=n("a"),Tf=r("tf.keras.Model"),wf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xf=d(),m(Ro.$$.fragment),zf=d(),Ee=n("div"),m(Fa.$$.fragment),qf=d(),co=n("p"),Bf=r("The "),_r=n("a"),Ff=r("TFBartModel"),$f=r(" forward method, overrides the "),sd=n("code"),jf=r("__call__"),Mf=r(" special method."),Ef=d(),m(Uo.$$.fragment),Pf=d(),rd=n("p"),Cf=r("Example:"),Af=d(),m($a.$$.fragment),Ul=d(),po=n("h2"),Ho=n("a"),id=n("span"),m(ja.$$.fragment),Sf=d(),dd=n("span"),If=r("TFBartForConditionalGeneration"),Hl=d(),qe=n("div"),m(Ma.$$.fragment),Of=d(),Ea=n("p"),Nf=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),gr=n("a"),Df=r("TFPreTrainedModel"),Lf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf=d(),Pa=n("p"),Wf=r("This model is also a "),Ca=n("a"),Rf=r("tf.keras.Model"),Uf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hf=d(),m(Qo.$$.fragment),Qf=d(),Y=n("div"),m(Aa.$$.fragment),Vf=d(),ho=n("p"),Jf=r("The "),kr=n("a"),Xf=r("TFBartForConditionalGeneration"),Kf=r(" forward method, overrides the "),ld=n("code"),Zf=r("__call__"),Yf=r(" special method."),e_=d(),m(Vo.$$.fragment),t_=d(),cd=n("p"),o_=r("Summarization example:"),n_=d(),m(Sa.$$.fragment),a_=d(),pd=n("p"),s_=r("Mask filling example:"),r_=d(),m(Ia.$$.fragment),Ql=d(),uo=n("h2"),Jo=n("a"),hd=n("span"),m(Oa.$$.fragment),i_=d(),ud=n("span"),d_=r("FlaxBartModel"),Vl=d(),W=n("div"),m(Na.$$.fragment),l_=d(),Da=n("p"),c_=r(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),br=n("a"),p_=r("FlaxPreTrainedModel"),h_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u_=d(),La=n("p"),m_=r(`This model is also a Flax Linen
`),Ga=n("a"),f_=r("flax.nn.Module"),__=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),g_=d(),md=n("p"),k_=r("Finally, this model supports inherent JAX features such as:"),b_=d(),dt=n("ul"),fd=n("li"),Wa=n("a"),v_=r("Just-In-Time (JIT) compilation"),y_=d(),_d=n("li"),Ra=n("a"),T_=r("Automatic Differentiation"),w_=d(),gd=n("li"),Ua=n("a"),x_=r("Vectorization"),z_=d(),kd=n("li"),Ha=n("a"),q_=r("Parallelization"),B_=d(),Pe=n("div"),m(Qa.$$.fragment),F_=d(),mo=n("p"),$_=r("The "),bd=n("code"),j_=r("FlaxBartPreTrainedModel"),M_=r("forward method, overrides the "),vd=n("code"),E_=r("__call__"),P_=r(" special method."),C_=d(),m(Xo.$$.fragment),A_=d(),yd=n("p"),S_=r("Example:"),I_=d(),m(Va.$$.fragment),O_=d(),_t=n("div"),m(Ja.$$.fragment),N_=d(),Td=n("p"),D_=r("Example:"),L_=d(),m(Xa.$$.fragment),G_=d(),gt=n("div"),m(Ka.$$.fragment),W_=d(),wd=n("p"),R_=r("Example:"),U_=d(),m(Za.$$.fragment),Jl=d(),fo=n("h2"),Ko=n("a"),xd=n("span"),m(Ya.$$.fragment),H_=d(),zd=n("span"),Q_=r("FlaxBartForConditionalGeneration"),Xl=d(),R=n("div"),m(es.$$.fragment),V_=d(),ts=n("p"),J_=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),vr=n("a"),X_=r("FlaxPreTrainedModel"),K_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=d(),os=n("p"),Y_=r(`This model is also a Flax Linen
`),ns=n("a"),eg=r("flax.nn.Module"),tg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),og=d(),qd=n("p"),ng=r("Finally, this model supports inherent JAX features such as:"),ag=d(),lt=n("ul"),Bd=n("li"),as=n("a"),sg=r("Just-In-Time (JIT) compilation"),rg=d(),Fd=n("li"),ss=n("a"),ig=r("Automatic Differentiation"),dg=d(),$d=n("li"),rs=n("a"),lg=r("Vectorization"),cg=d(),jd=n("li"),is=n("a"),pg=r("Parallelization"),hg=d(),ee=n("div"),m(ds.$$.fragment),ug=d(),_o=n("p"),mg=r("The "),Md=n("code"),fg=r("FlaxBartPreTrainedModel"),_g=r("forward method, overrides the "),Ed=n("code"),gg=r("__call__"),kg=r(" special method."),bg=d(),m(Zo.$$.fragment),vg=d(),Pd=n("p"),yg=r("Summarization example:"),Tg=d(),m(ls.$$.fragment),wg=d(),Cd=n("p"),xg=r("Mask filling example:"),zg=d(),m(cs.$$.fragment),qg=d(),kt=n("div"),m(ps.$$.fragment),Bg=d(),Ad=n("p"),Fg=r("Example:"),$g=d(),m(hs.$$.fragment),jg=d(),bt=n("div"),m(us.$$.fragment),Mg=d(),Sd=n("p"),Eg=r("Example:"),Pg=d(),m(ms.$$.fragment),Kl=d(),go=n("h2"),Yo=n("a"),Id=n("span"),m(fs.$$.fragment),Cg=d(),Od=n("span"),Ag=r("FlaxBartForSequenceClassification"),Zl=d(),I=n("div"),m(_s.$$.fragment),Sg=d(),Nd=n("p"),Ig=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Og=d(),gs=n("p"),Ng=r("This model inherits from "),yr=n("a"),Dg=r("FlaxPreTrainedModel"),Lg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gg=d(),ks=n("p"),Wg=r(`This model is also a Flax Linen
`),bs=n("a"),Rg=r("flax.nn.Module"),Ug=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hg=d(),Dd=n("p"),Qg=r("Finally, this model supports inherent JAX features such as:"),Vg=d(),ct=n("ul"),Ld=n("li"),vs=n("a"),Jg=r("Just-In-Time (JIT) compilation"),Xg=d(),Gd=n("li"),ys=n("a"),Kg=r("Automatic Differentiation"),Zg=d(),Wd=n("li"),Ts=n("a"),Yg=r("Vectorization"),ek=d(),Rd=n("li"),ws=n("a"),tk=r("Parallelization"),ok=d(),Ce=n("div"),m(xs.$$.fragment),nk=d(),ko=n("p"),ak=r("The "),Ud=n("code"),sk=r("FlaxBartPreTrainedModel"),rk=r("forward method, overrides the "),Hd=n("code"),ik=r("__call__"),dk=r(" special method."),lk=d(),m(en.$$.fragment),ck=d(),Qd=n("p"),pk=r("Example:"),hk=d(),m(zs.$$.fragment),uk=d(),vt=n("div"),m(qs.$$.fragment),mk=d(),Vd=n("p"),fk=r("Example:"),_k=d(),m(Bs.$$.fragment),gk=d(),yt=n("div"),m(Fs.$$.fragment),kk=d(),Jd=n("p"),bk=r("Example:"),vk=d(),m($s.$$.fragment),Yl=d(),bo=n("h2"),tn=n("a"),Xd=n("span"),m(js.$$.fragment),yk=d(),Kd=n("span"),Tk=r("FlaxBartForQuestionAnswering"),ec=d(),O=n("div"),m(Ms.$$.fragment),wk=d(),vo=n("p"),xk=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zd=n("code"),zk=r("span start logits"),qk=r(" and "),Yd=n("code"),Bk=r("span end logits"),Fk=r(")."),$k=d(),Es=n("p"),jk=r("This model inherits from "),Tr=n("a"),Mk=r("FlaxPreTrainedModel"),Ek=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pk=d(),Ps=n("p"),Ck=r(`This model is also a Flax Linen
`),Cs=n("a"),Ak=r("flax.nn.Module"),Sk=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ik=d(),el=n("p"),Ok=r("Finally, this model supports inherent JAX features such as:"),Nk=d(),pt=n("ul"),tl=n("li"),As=n("a"),Dk=r("Just-In-Time (JIT) compilation"),Lk=d(),ol=n("li"),Ss=n("a"),Gk=r("Automatic Differentiation"),Wk=d(),nl=n("li"),Is=n("a"),Rk=r("Vectorization"),Uk=d(),al=n("li"),Os=n("a"),Hk=r("Parallelization"),Qk=d(),Ae=n("div"),m(Ns.$$.fragment),Vk=d(),yo=n("p"),Jk=r("The "),sl=n("code"),Xk=r("FlaxBartPreTrainedModel"),Kk=r("forward method, overrides the "),rl=n("code"),Zk=r("__call__"),Yk=r(" special method."),eb=d(),m(on.$$.fragment),tb=d(),il=n("p"),ob=r("Example:"),nb=d(),m(Ds.$$.fragment),ab=d(),Tt=n("div"),m(Ls.$$.fragment),sb=d(),dl=n("p"),rb=r("Example:"),ib=d(),m(Gs.$$.fragment),db=d(),wt=n("div"),m(Ws.$$.fragment),lb=d(),ll=n("p"),cb=r("Example:"),pb=d(),m(Rs.$$.fragment),this.h()},l(o){const h=t1('[data-svelte="svelte-1phssyn"]',document.head);p=a(h,"META",{name:!0,content:!0}),h.forEach(t),q=l(o),v=a(o,"H1",{class:!0});var Us=s(v);w=a(Us,"A",{id:!0,class:!0,href:!0});var cl=s(w);x=a(cl,"SPAN",{});var pl=s(x);f(T.$$.fragment,pl),pl.forEach(t),cl.forEach(t),y=l(Us),B=a(Us,"SPAN",{});var hl=s(B);ne=i(hl,"BART"),hl.forEach(t),Us.forEach(t),A=l(o),$=a(o,"P",{});var nn=s($);le=a(nn,"STRONG",{});var ul=s(le);_e=i(ul,"DISCLAIMER:"),ul.forEach(t),Ke=i(nn," If you see something strange, file a "),ge=a(nn,"A",{href:!0,rel:!0});var ml=s(ge);ke=i(ml,"Github Issue"),ml.forEach(t),Ze=i(nn,` and assign
@patrickvonplaten`),nn.forEach(t),Je=l(o),H=a(o,"H2",{class:!0});var Hs=s(H);N=a(Hs,"A",{id:!0,class:!0,href:!0});var fl=s(N);Le=a(fl,"SPAN",{});var _l=s(Le);f(ae.$$.fragment,_l),_l.forEach(t),fl.forEach(t),C=l(Hs),S=a(Hs,"SPAN",{});var gl=s(S);Ye=i(gl,"Overview"),gl.forEach(t),Hs.forEach(t),ce=l(o),pe=a(o,"P",{});var Qs=s(pe);et=i(Qs,"The Bart model was proposed in "),Q=a(Qs,"A",{href:!0,rel:!0});var kl=s(Q);tt=i(kl,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),kl.forEach(t),ot=i(Qs,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Qs.forEach(t),D=l(o),Be=a(o,"P",{});var bl=s(Be);be=i(bl,"According to the abstract,"),bl.forEach(t),Xe=l(o),X=a(o,"UL",{});var wr=s(X);se=a(wr,"LI",{});var fb=s(se);nt=i(fb,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),fb.forEach(t),at=l(wr),V=a(wr,"LI",{});var _b=s(V);st=i(_b,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),_b.forEach(t),ve=l(wr),Ge=a(wr,"LI",{});var gb=s(Ge);z=i(gb,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),gb.forEach(t),wr.forEach(t),M=l(o),U=a(o,"P",{});var xr=s(U);St=i(xr,"This model was contributed by "),We=a(xr,"A",{href:!0,rel:!0});var kb=s(We);re=i(kb,"sshleifer"),kb.forEach(t),It=i(xr,". The Authors\u2019 code can be found "),Re=a(xr,"A",{href:!0,rel:!0});var bb=s(Re);Ot=i(bb,"here"),bb.forEach(t),ie=i(xr,"."),xr.forEach(t),he=l(o),ye=a(o,"H3",{class:!0});var oc=s(ye);Fe=a(oc,"A",{id:!0,class:!0,href:!0});var vb=s(Fe);de=a(vb,"SPAN",{});var yb=s(de);f(Ue.$$.fragment,yb),yb.forEach(t),vb.forEach(t),Nt=l(oc),He=a(oc,"SPAN",{});var Tb=s(He);Dt=i(Tb,"Examples"),Tb.forEach(t),oc.forEach(t),yl=l(o),ht=a(o,"UL",{});var zr=s(ht);un=a(zr,"LI",{});var nc=s(un);Zc=i(nc,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),mn=a(nc,"A",{href:!0,rel:!0});var wb=s(mn);Yc=i(wb,"examples/pytorch/summarization/"),wb.forEach(t),ep=i(nc,"."),nc.forEach(t),tp=l(zr),rt=a(zr,"LI",{});var an=s(rt);op=i(an,"An example of how to train "),Vs=a(an,"A",{href:!0});var xb=s(Vs);np=i(xb,"BartForConditionalGeneration"),xb.forEach(t),ap=i(an," with a Hugging Face "),ei=a(an,"CODE",{});var zb=s(ei);sp=i(zb,"datasets"),zb.forEach(t),rp=i(an,`
object can be found in this `),fn=a(an,"A",{href:!0,rel:!0});var qb=s(fn);ip=i(qb,"forum discussion"),qb.forEach(t),dp=i(an,"."),an.forEach(t),lp=l(zr),To=a(zr,"LI",{});var vl=s(To);_n=a(vl,"A",{href:!0,rel:!0});var Bb=s(_n);cp=i(Bb,"Distilled checkpoints"),Bb.forEach(t),pp=i(vl," are described in this "),gn=a(vl,"A",{href:!0,rel:!0});var Fb=s(gn);hp=i(Fb,"paper"),Fb.forEach(t),up=i(vl,"."),vl.forEach(t),zr.forEach(t),Tl=l(o),Lt=a(o,"H2",{class:!0});var ac=s(Lt);wo=a(ac,"A",{id:!0,class:!0,href:!0});var $b=s(wo);ti=a($b,"SPAN",{});var jb=s(ti);f(kn.$$.fragment,jb),jb.forEach(t),$b.forEach(t),mp=l(ac),oi=a(ac,"SPAN",{});var Mb=s(oi);fp=i(Mb,"Implementation Notes"),Mb.forEach(t),ac.forEach(t),wl=l(o),$e=a(o,"UL",{});var xt=s($e);it=a(xt,"LI",{});var sn=s(it);_p=i(sn,"Bart doesn\u2019t use "),ni=a(sn,"CODE",{});var Eb=s(ni);gp=i(Eb,"token_type_ids"),Eb.forEach(t),kp=i(sn," for sequence classification. Use "),Js=a(sn,"A",{href:!0});var Pb=s(Js);bp=i(Pb,"BartTokenizer"),Pb.forEach(t),vp=i(sn,` or
`),Xs=a(sn,"A",{href:!0});var Cb=s(Xs);yp=i(Cb,"encode()"),Cb.forEach(t),Tp=i(sn," to get the proper splitting."),sn.forEach(t),wp=l(xt),Gt=a(xt,"LI",{});var qr=s(Gt);xp=i(qr,"The forward pass of "),Ks=a(qr,"A",{href:!0});var Ab=s(Ks);zp=i(Ab,"BartModel"),Ab.forEach(t),qp=i(qr," will create the "),ai=a(qr,"CODE",{});var Sb=s(ai);Bp=i(Sb,"decoder_input_ids"),Sb.forEach(t),Fp=i(qr,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),qr.forEach(t),$p=l(xt),Wt=a(xt,"LI",{});var Br=s(Wt);jp=i(Br,`Model predictions are intended to be identical to the original implementation when
`),si=a(Br,"CODE",{});var Ib=s(si);Mp=i(Ib,"forced_bos_token_id=0"),Ib.forEach(t),Ep=i(Br,`. This only works, however, if the string you pass to
`),ri=a(Br,"CODE",{});var Ob=s(ri);Pp=i(Ob,"fairseq.encode"),Ob.forEach(t),Cp=i(Br," starts with a space."),Br.forEach(t),Ap=l(xt),Zs=a(xt,"LI",{});var hb=s(Zs);Ys=a(hb,"A",{href:!0});var Nb=s(Ys);Sp=i(Nb,"generate()"),Nb.forEach(t),Ip=i(hb,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),hb.forEach(t),Op=l(xt),Rt=a(xt,"LI",{});var Fr=s(Rt);Np=i(Fr,"Models that load the "),ii=a(Fr,"EM",{});var Db=s(ii);Dp=i(Db,"facebook/bart-large-cnn"),Db.forEach(t),Lp=i(Fr," weights will not have a "),di=a(Fr,"CODE",{});var Lb=s(di);Gp=i(Lb,"mask_token_id"),Lb.forEach(t),Wp=i(Fr,`, or be able to perform
mask-filling tasks.`),Fr.forEach(t),xt.forEach(t),xl=l(o),Ut=a(o,"H2",{class:!0});var sc=s(Ut);xo=a(sc,"A",{id:!0,class:!0,href:!0});var Gb=s(xo);li=a(Gb,"SPAN",{});var Wb=s(li);f(bn.$$.fragment,Wb),Wb.forEach(t),Gb.forEach(t),Rp=l(sc),ci=a(sc,"SPAN",{});var Rb=s(ci);Up=i(Rb,"Mask Filling"),Rb.forEach(t),sc.forEach(t),zl=l(o),ut=a(o,"P",{});var $r=s(ut);Hp=i($r,"The "),pi=a($r,"CODE",{});var Ub=s(pi);Qp=i(Ub,"facebook/bart-base"),Ub.forEach(t),Vp=i($r," and "),hi=a($r,"CODE",{});var Hb=s(hi);Jp=i(Hb,"facebook/bart-large"),Hb.forEach(t),Xp=i($r," checkpoints can be used to fill multi-token masks."),$r.forEach(t),ql=l(o),f(vn.$$.fragment,o),Bl=l(o),Ht=a(o,"H2",{class:!0});var rc=s(Ht);zo=a(rc,"A",{id:!0,class:!0,href:!0});var Qb=s(zo);ui=a(Qb,"SPAN",{});var Vb=s(ui);f(yn.$$.fragment,Vb),Vb.forEach(t),Qb.forEach(t),Kp=l(rc),mi=a(rc,"SPAN",{});var Jb=s(mi);Zp=i(Jb,"BartConfig"),Jb.forEach(t),rc.forEach(t),Fl=l(o),Te=a(o,"DIV",{class:!0});var zt=s(Te);f(Tn.$$.fragment,zt),Yp=l(zt),Qt=a(zt,"P",{});var jr=s(Qt);eh=i(jr,"This is the configuration class to store the configuration of a "),er=a(jr,"A",{href:!0});var Xb=s(er);th=i(Xb,"BartModel"),Xb.forEach(t),oh=i(jr,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),wn=a(jr,"A",{href:!0,rel:!0});var Kb=s(wn);nh=i(Kb,"facebook/bart-large"),Kb.forEach(t),ah=i(jr," architecture."),jr.forEach(t),sh=l(zt),Vt=a(zt,"P",{});var Mr=s(Vt);rh=i(Mr,"Configuration objects inherit from "),tr=a(Mr,"A",{href:!0});var Zb=s(tr);ih=i(Zb,"PretrainedConfig"),Zb.forEach(t),dh=i(Mr,` and can be used to control the model outputs. Read the
documentation from `),or=a(Mr,"A",{href:!0});var Yb=s(or);lh=i(Yb,"PretrainedConfig"),Yb.forEach(t),ch=i(Mr," for more information."),Mr.forEach(t),ph=l(zt),fi=a(zt,"P",{});var ev=s(fi);hh=i(ev,"Example:"),ev.forEach(t),uh=l(zt),f(xn.$$.fragment,zt),zt.forEach(t),$l=l(o),Jt=a(o,"H2",{class:!0});var ic=s(Jt);qo=a(ic,"A",{id:!0,class:!0,href:!0});var tv=s(qo);_i=a(tv,"SPAN",{});var ov=s(_i);f(zn.$$.fragment,ov),ov.forEach(t),tv.forEach(t),mh=l(ic),gi=a(ic,"SPAN",{});var nv=s(gi);fh=i(nv,"BartTokenizer"),nv.forEach(t),ic.forEach(t),jl=l(o),E=a(o,"DIV",{class:!0});var L=s(E);f(qn.$$.fragment,L),_h=l(L),ki=a(L,"P",{});var av=s(ki);gh=i(av,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),av.forEach(t),kh=l(L),bi=a(L,"P",{});var sv=s(bi);bh=i(sv,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),sv.forEach(t),vh=l(L),f(Bn.$$.fragment,L),yh=l(L),Fn=a(L,"P",{});var dc=s(Fn);Th=i(dc,"You can get around that behavior by passing "),vi=a(dc,"CODE",{});var rv=s(vi);wh=i(rv,"add_prefix_space=True"),rv.forEach(t),xh=i(dc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dc.forEach(t),zh=l(L),f(Bo.$$.fragment,L),qh=l(L),$n=a(L,"P",{});var lc=s($n);Bh=i(lc,"This tokenizer inherits from "),nr=a(lc,"A",{href:!0});var iv=s(nr);Fh=i(iv,"PreTrainedTokenizer"),iv.forEach(t),$h=i(lc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),lc.forEach(t),jh=l(L),mt=a(L,"DIV",{class:!0});var Er=s(mt);f(jn.$$.fragment,Er),Mh=l(Er),yi=a(Er,"P",{});var dv=s(yi);Eh=i(dv,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),dv.forEach(t),Ph=l(Er),Mn=a(Er,"UL",{});var cc=s(Mn);ar=a(cc,"LI",{});var ub=s(ar);Ch=i(ub,"single sequence: "),Ti=a(ub,"CODE",{});var lv=s(Ti);Ah=i(lv,"<s> X </s>"),lv.forEach(t),ub.forEach(t),Sh=l(cc),sr=a(cc,"LI",{});var mb=s(sr);Ih=i(mb,"pair of sequences: "),wi=a(mb,"CODE",{});var cv=s(wi);Oh=i(cv,"<s> A </s></s> B </s>"),cv.forEach(t),mb.forEach(t),cc.forEach(t),Er.forEach(t),Nh=l(L),Fo=a(L,"DIV",{class:!0});var pc=s(Fo);f(En.$$.fragment,pc),Dh=l(pc),xi=a(pc,"P",{});var pv=s(xi);Lh=i(pv,"Converts a sequence of tokens (string) in a single string."),pv.forEach(t),pc.forEach(t),Gh=l(L),$o=a(L,"DIV",{class:!0});var hc=s($o);f(Pn.$$.fragment,hc),Wh=l(hc),zi=a(hc,"P",{});var hv=s(zi);Rh=i(hv,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),hv.forEach(t),hc.forEach(t),Uh=l(L),jo=a(L,"DIV",{class:!0});var uc=s(jo);f(Cn.$$.fragment,uc),Hh=l(uc),An=a(uc,"P",{});var mc=s(An);Qh=i(mc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qi=a(mc,"CODE",{});var uv=s(qi);Vh=i(uv,"prepare_for_model"),uv.forEach(t),Jh=i(mc," method."),mc.forEach(t),uc.forEach(t),L.forEach(t),Ml=l(o),Xt=a(o,"H2",{class:!0});var fc=s(Xt);Mo=a(fc,"A",{id:!0,class:!0,href:!0});var mv=s(Mo);Bi=a(mv,"SPAN",{});var fv=s(Bi);f(Sn.$$.fragment,fv),fv.forEach(t),mv.forEach(t),Xh=l(fc),Fi=a(fc,"SPAN",{});var _v=s(Fi);Kh=i(_v,"BartTokenizerFast"),_v.forEach(t),fc.forEach(t),El=l(o),G=a(o,"DIV",{class:!0});var ue=s(G);f(In.$$.fragment,ue),Zh=l(ue),On=a(ue,"P",{});var _c=s(On);Yh=i(_c,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),$i=a(_c,"EM",{});var gv=s($i);eu=i(gv,"tokenizers"),gv.forEach(t),tu=i(_c,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),_c.forEach(t),ou=l(ue),ji=a(ue,"P",{});var kv=s(ji);nu=i(kv,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),kv.forEach(t),au=l(ue),f(Nn.$$.fragment,ue),su=l(ue),Dn=a(ue,"P",{});var gc=s(Dn);ru=i(gc,"You can get around that behavior by passing "),Mi=a(gc,"CODE",{});var bv=s(Mi);iu=i(bv,"add_prefix_space=True"),bv.forEach(t),du=i(gc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),gc.forEach(t),lu=l(ue),f(Eo.$$.fragment,ue),cu=l(ue),Ln=a(ue,"P",{});var kc=s(Ln);pu=i(kc,"This tokenizer inherits from "),rr=a(kc,"A",{href:!0});var vv=s(rr);hu=i(vv,"PreTrainedTokenizerFast"),vv.forEach(t),uu=i(kc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),kc.forEach(t),mu=l(ue),Po=a(ue,"DIV",{class:!0});var bc=s(Po);f(Gn.$$.fragment,bc),fu=l(bc),Ei=a(bc,"P",{});var yv=s(Ei);_u=i(yv,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),yv.forEach(t),bc.forEach(t),ue.forEach(t),Pl=l(o),Kt=a(o,"H2",{class:!0});var vc=s(Kt);Co=a(vc,"A",{id:!0,class:!0,href:!0});var Tv=s(Co);Pi=a(Tv,"SPAN",{});var wv=s(Pi);f(Wn.$$.fragment,wv),wv.forEach(t),Tv.forEach(t),gu=l(vc),Ci=a(vc,"SPAN",{});var xv=s(Ci);ku=i(xv,"BartModel"),xv.forEach(t),vc.forEach(t),Cl=l(o),Qe=a(o,"DIV",{class:!0});var rn=s(Qe);f(Rn.$$.fragment,rn),bu=l(rn),Un=a(rn,"P",{});var yc=s(Un);vu=i(yc,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ir=a(yc,"A",{href:!0});var zv=s(ir);yu=i(zv,"PreTrainedModel"),zv.forEach(t),Tu=i(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),wu=l(rn),Hn=a(rn,"P",{});var Tc=s(Hn);xu=i(Tc,"This model is also a PyTorch "),Qn=a(Tc,"A",{href:!0,rel:!0});var qv=s(Qn);zu=i(qv,"torch.nn.Module"),qv.forEach(t),qu=i(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(t),Bu=l(rn),je=a(rn,"DIV",{class:!0});var qt=s(je);f(Vn.$$.fragment,qt),Fu=l(qt),Zt=a(qt,"P",{});var Pr=s(Zt);$u=i(Pr,"The "),dr=a(Pr,"A",{href:!0});var Bv=s(dr);ju=i(Bv,"BartModel"),Bv.forEach(t),Mu=i(Pr," forward method, overrides the "),Ai=a(Pr,"CODE",{});var Fv=s(Ai);Eu=i(Fv,"__call__"),Fv.forEach(t),Pu=i(Pr," special method."),Pr.forEach(t),Cu=l(qt),f(Ao.$$.fragment,qt),Au=l(qt),Si=a(qt,"P",{});var $v=s(Si);Su=i($v,"Example:"),$v.forEach(t),Iu=l(qt),f(Jn.$$.fragment,qt),qt.forEach(t),rn.forEach(t),Al=l(o),Yt=a(o,"H2",{class:!0});var wc=s(Yt);So=a(wc,"A",{id:!0,class:!0,href:!0});var jv=s(So);Ii=a(jv,"SPAN",{});var Mv=s(Ii);f(Xn.$$.fragment,Mv),Mv.forEach(t),jv.forEach(t),Ou=l(wc),Oi=a(wc,"SPAN",{});var Ev=s(Oi);Nu=i(Ev,"BartForConditionalGeneration"),Ev.forEach(t),wc.forEach(t),Sl=l(o),Ve=a(o,"DIV",{class:!0});var dn=s(Ve);f(Kn.$$.fragment,dn),Du=l(dn),Zn=a(dn,"P",{});var xc=s(Zn);Lu=i(xc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),lr=a(xc,"A",{href:!0});var Pv=s(lr);Gu=i(Pv,"PreTrainedModel"),Pv.forEach(t),Wu=i(xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc.forEach(t),Ru=l(dn),Yn=a(dn,"P",{});var zc=s(Yn);Uu=i(zc,"This model is also a PyTorch "),ea=a(zc,"A",{href:!0,rel:!0});var Cv=s(ea);Hu=i(Cv,"torch.nn.Module"),Cv.forEach(t),Qu=i(zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zc.forEach(t),Vu=l(dn),K=a(dn,"DIV",{class:!0});var Se=s(K);f(ta.$$.fragment,Se),Ju=l(Se),eo=a(Se,"P",{});var Cr=s(eo);Xu=i(Cr,"The "),cr=a(Cr,"A",{href:!0});var Av=s(cr);Ku=i(Av,"BartForConditionalGeneration"),Av.forEach(t),Zu=i(Cr," forward method, overrides the "),Ni=a(Cr,"CODE",{});var Sv=s(Ni);Yu=i(Sv,"__call__"),Sv.forEach(t),em=i(Cr," special method."),Cr.forEach(t),tm=l(Se),f(Io.$$.fragment,Se),om=l(Se),Di=a(Se,"P",{});var Iv=s(Di);nm=i(Iv,"Summarization example:"),Iv.forEach(t),am=l(Se),f(oa.$$.fragment,Se),sm=l(Se),Li=a(Se,"P",{});var Ov=s(Li);rm=i(Ov,"Mask filling example:"),Ov.forEach(t),im=l(Se),f(na.$$.fragment,Se),Se.forEach(t),dn.forEach(t),Il=l(o),to=a(o,"H2",{class:!0});var qc=s(to);Oo=a(qc,"A",{id:!0,class:!0,href:!0});var Nv=s(Oo);Gi=a(Nv,"SPAN",{});var Dv=s(Gi);f(aa.$$.fragment,Dv),Dv.forEach(t),Nv.forEach(t),dm=l(qc),Wi=a(qc,"SPAN",{});var Lv=s(Wi);lm=i(Lv,"BartForSequenceClassification"),Lv.forEach(t),qc.forEach(t),Ol=l(o),we=a(o,"DIV",{class:!0});var Bt=s(we);f(sa.$$.fragment,Bt),cm=l(Bt),Ri=a(Bt,"P",{});var Gv=s(Ri);pm=i(Gv,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Gv.forEach(t),hm=l(Bt),ra=a(Bt,"P",{});var Bc=s(ra);um=i(Bc,"This model inherits from "),pr=a(Bc,"A",{href:!0});var Wv=s(pr);mm=i(Wv,"PreTrainedModel"),Wv.forEach(t),fm=i(Bc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc.forEach(t),_m=l(Bt),ia=a(Bt,"P",{});var Fc=s(ia);gm=i(Fc,"This model is also a PyTorch "),da=a(Fc,"A",{href:!0,rel:!0});var Rv=s(da);km=i(Rv,"torch.nn.Module"),Rv.forEach(t),bm=i(Fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fc.forEach(t),vm=l(Bt),Z=a(Bt,"DIV",{class:!0});var Ie=s(Z);f(la.$$.fragment,Ie),ym=l(Ie),oo=a(Ie,"P",{});var Ar=s(oo);Tm=i(Ar,"The "),hr=a(Ar,"A",{href:!0});var Uv=s(hr);wm=i(Uv,"BartForSequenceClassification"),Uv.forEach(t),xm=i(Ar," forward method, overrides the "),Ui=a(Ar,"CODE",{});var Hv=s(Ui);zm=i(Hv,"__call__"),Hv.forEach(t),qm=i(Ar," special method."),Ar.forEach(t),Bm=l(Ie),f(No.$$.fragment,Ie),Fm=l(Ie),Hi=a(Ie,"P",{});var Qv=s(Hi);$m=i(Qv,"Example of single-label classification:"),Qv.forEach(t),jm=l(Ie),f(ca.$$.fragment,Ie),Mm=l(Ie),Qi=a(Ie,"P",{});var Vv=s(Qi);Em=i(Vv,"Example of multi-label classification:"),Vv.forEach(t),Pm=l(Ie),f(pa.$$.fragment,Ie),Ie.forEach(t),Bt.forEach(t),Nl=l(o),no=a(o,"H2",{class:!0});var $c=s(no);Do=a($c,"A",{id:!0,class:!0,href:!0});var Jv=s(Do);Vi=a(Jv,"SPAN",{});var Xv=s(Vi);f(ha.$$.fragment,Xv),Xv.forEach(t),Jv.forEach(t),Cm=l($c),Ji=a($c,"SPAN",{});var Kv=s(Ji);Am=i(Kv,"BartForQuestionAnswering"),Kv.forEach(t),$c.forEach(t),Dl=l(o),xe=a(o,"DIV",{class:!0});var Ft=s(xe);f(ua.$$.fragment,Ft),Sm=l(Ft),ao=a(Ft,"P",{});var Sr=s(ao);Im=i(Sr,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Xi=a(Sr,"CODE",{});var Zv=s(Xi);Om=i(Zv,"span start logits"),Zv.forEach(t),Nm=i(Sr," and "),Ki=a(Sr,"CODE",{});var Yv=s(Ki);Dm=i(Yv,"span end logits"),Yv.forEach(t),Lm=i(Sr,")."),Sr.forEach(t),Gm=l(Ft),ma=a(Ft,"P",{});var jc=s(ma);Wm=i(jc,"This model inherits from "),ur=a(jc,"A",{href:!0});var ey=s(ur);Rm=i(ey,"PreTrainedModel"),ey.forEach(t),Um=i(jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jc.forEach(t),Hm=l(Ft),fa=a(Ft,"P",{});var Mc=s(fa);Qm=i(Mc,"This model is also a PyTorch "),_a=a(Mc,"A",{href:!0,rel:!0});var ty=s(_a);Vm=i(ty,"torch.nn.Module"),ty.forEach(t),Jm=i(Mc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mc.forEach(t),Xm=l(Ft),Me=a(Ft,"DIV",{class:!0});var $t=s(Me);f(ga.$$.fragment,$t),Km=l($t),so=a($t,"P",{});var Ir=s(so);Zm=i(Ir,"The "),mr=a(Ir,"A",{href:!0});var oy=s(mr);Ym=i(oy,"BartForQuestionAnswering"),oy.forEach(t),ef=i(Ir," forward method, overrides the "),Zi=a(Ir,"CODE",{});var ny=s(Zi);tf=i(ny,"__call__"),ny.forEach(t),of=i(Ir," special method."),Ir.forEach(t),nf=l($t),f(Lo.$$.fragment,$t),af=l($t),Yi=a($t,"P",{});var ay=s(Yi);sf=i(ay,"Example:"),ay.forEach(t),rf=l($t),f(ka.$$.fragment,$t),$t.forEach(t),Ft.forEach(t),Ll=l(o),ro=a(o,"H2",{class:!0});var Ec=s(ro);Go=a(Ec,"A",{id:!0,class:!0,href:!0});var sy=s(Go);ed=a(sy,"SPAN",{});var ry=s(ed);f(ba.$$.fragment,ry),ry.forEach(t),sy.forEach(t),df=l(Ec),td=a(Ec,"SPAN",{});var iy=s(td);lf=i(iy,"BartForCausalLM"),iy.forEach(t),Ec.forEach(t),Gl=l(o),io=a(o,"DIV",{class:!0});var Pc=s(io);f(va.$$.fragment,Pc),cf=l(Pc),ft=a(Pc,"DIV",{class:!0});var Or=s(ft);f(ya.$$.fragment,Or),pf=l(Or),od=a(Or,"P",{});var dy=s(od);hf=i(dy,"Example:"),dy.forEach(t),uf=l(Or),f(Ta.$$.fragment,Or),Or.forEach(t),Pc.forEach(t),Wl=l(o),lo=a(o,"H2",{class:!0});var Cc=s(lo);Wo=a(Cc,"A",{id:!0,class:!0,href:!0});var ly=s(Wo);nd=a(ly,"SPAN",{});var cy=s(nd);f(wa.$$.fragment,cy),cy.forEach(t),ly.forEach(t),mf=l(Cc),ad=a(Cc,"SPAN",{});var py=s(ad);ff=i(py,"TFBartModel"),py.forEach(t),Cc.forEach(t),Rl=l(o),ze=a(o,"DIV",{class:!0});var jt=s(ze);f(xa.$$.fragment,jt),_f=l(jt),za=a(jt,"P",{});var Ac=s(za);gf=i(Ac,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fr=a(Ac,"A",{href:!0});var hy=s(fr);kf=i(hy,"TFPreTrainedModel"),hy.forEach(t),bf=i(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),vf=l(jt),qa=a(jt,"P",{});var Sc=s(qa);yf=i(Sc,"This model is also a "),Ba=a(Sc,"A",{href:!0,rel:!0});var uy=s(Ba);Tf=i(uy,"tf.keras.Model"),uy.forEach(t),wf=i(Sc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sc.forEach(t),xf=l(jt),f(Ro.$$.fragment,jt),zf=l(jt),Ee=a(jt,"DIV",{class:!0});var Mt=s(Ee);f(Fa.$$.fragment,Mt),qf=l(Mt),co=a(Mt,"P",{});var Nr=s(co);Bf=i(Nr,"The "),_r=a(Nr,"A",{href:!0});var my=s(_r);Ff=i(my,"TFBartModel"),my.forEach(t),$f=i(Nr," forward method, overrides the "),sd=a(Nr,"CODE",{});var fy=s(sd);jf=i(fy,"__call__"),fy.forEach(t),Mf=i(Nr," special method."),Nr.forEach(t),Ef=l(Mt),f(Uo.$$.fragment,Mt),Pf=l(Mt),rd=a(Mt,"P",{});var _y=s(rd);Cf=i(_y,"Example:"),_y.forEach(t),Af=l(Mt),f($a.$$.fragment,Mt),Mt.forEach(t),jt.forEach(t),Ul=l(o),po=a(o,"H2",{class:!0});var Ic=s(po);Ho=a(Ic,"A",{id:!0,class:!0,href:!0});var gy=s(Ho);id=a(gy,"SPAN",{});var ky=s(id);f(ja.$$.fragment,ky),ky.forEach(t),gy.forEach(t),Sf=l(Ic),dd=a(Ic,"SPAN",{});var by=s(dd);If=i(by,"TFBartForConditionalGeneration"),by.forEach(t),Ic.forEach(t),Hl=l(o),qe=a(o,"DIV",{class:!0});var Et=s(qe);f(Ma.$$.fragment,Et),Of=l(Et),Ea=a(Et,"P",{});var Oc=s(Ea);Nf=i(Oc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),gr=a(Oc,"A",{href:!0});var vy=s(gr);Df=i(vy,"TFPreTrainedModel"),vy.forEach(t),Lf=i(Oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oc.forEach(t),Gf=l(Et),Pa=a(Et,"P",{});var Nc=s(Pa);Wf=i(Nc,"This model is also a "),Ca=a(Nc,"A",{href:!0,rel:!0});var yy=s(Ca);Rf=i(yy,"tf.keras.Model"),yy.forEach(t),Uf=i(Nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nc.forEach(t),Hf=l(Et),f(Qo.$$.fragment,Et),Qf=l(Et),Y=a(Et,"DIV",{class:!0});var Oe=s(Y);f(Aa.$$.fragment,Oe),Vf=l(Oe),ho=a(Oe,"P",{});var Dr=s(ho);Jf=i(Dr,"The "),kr=a(Dr,"A",{href:!0});var Ty=s(kr);Xf=i(Ty,"TFBartForConditionalGeneration"),Ty.forEach(t),Kf=i(Dr," forward method, overrides the "),ld=a(Dr,"CODE",{});var wy=s(ld);Zf=i(wy,"__call__"),wy.forEach(t),Yf=i(Dr," special method."),Dr.forEach(t),e_=l(Oe),f(Vo.$$.fragment,Oe),t_=l(Oe),cd=a(Oe,"P",{});var xy=s(cd);o_=i(xy,"Summarization example:"),xy.forEach(t),n_=l(Oe),f(Sa.$$.fragment,Oe),a_=l(Oe),pd=a(Oe,"P",{});var zy=s(pd);s_=i(zy,"Mask filling example:"),zy.forEach(t),r_=l(Oe),f(Ia.$$.fragment,Oe),Oe.forEach(t),Et.forEach(t),Ql=l(o),uo=a(o,"H2",{class:!0});var Dc=s(uo);Jo=a(Dc,"A",{id:!0,class:!0,href:!0});var qy=s(Jo);hd=a(qy,"SPAN",{});var By=s(hd);f(Oa.$$.fragment,By),By.forEach(t),qy.forEach(t),i_=l(Dc),ud=a(Dc,"SPAN",{});var Fy=s(ud);d_=i(Fy,"FlaxBartModel"),Fy.forEach(t),Dc.forEach(t),Vl=l(o),W=a(o,"DIV",{class:!0});var me=s(W);f(Na.$$.fragment,me),l_=l(me),Da=a(me,"P",{});var Lc=s(Da);c_=i(Lc,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),br=a(Lc,"A",{href:!0});var $y=s(br);p_=i($y,"FlaxPreTrainedModel"),$y.forEach(t),h_=i(Lc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lc.forEach(t),u_=l(me),La=a(me,"P",{});var Gc=s(La);m_=i(Gc,`This model is also a Flax Linen
`),Ga=a(Gc,"A",{href:!0,rel:!0});var jy=s(Ga);f_=i(jy,"flax.nn.Module"),jy.forEach(t),__=i(Gc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gc.forEach(t),g_=l(me),md=a(me,"P",{});var My=s(md);k_=i(My,"Finally, this model supports inherent JAX features such as:"),My.forEach(t),b_=l(me),dt=a(me,"UL",{});var ln=s(dt);fd=a(ln,"LI",{});var Ey=s(fd);Wa=a(Ey,"A",{href:!0,rel:!0});var Py=s(Wa);v_=i(Py,"Just-In-Time (JIT) compilation"),Py.forEach(t),Ey.forEach(t),y_=l(ln),_d=a(ln,"LI",{});var Cy=s(_d);Ra=a(Cy,"A",{href:!0,rel:!0});var Ay=s(Ra);T_=i(Ay,"Automatic Differentiation"),Ay.forEach(t),Cy.forEach(t),w_=l(ln),gd=a(ln,"LI",{});var Sy=s(gd);Ua=a(Sy,"A",{href:!0,rel:!0});var Iy=s(Ua);x_=i(Iy,"Vectorization"),Iy.forEach(t),Sy.forEach(t),z_=l(ln),kd=a(ln,"LI",{});var Oy=s(kd);Ha=a(Oy,"A",{href:!0,rel:!0});var Ny=s(Ha);q_=i(Ny,"Parallelization"),Ny.forEach(t),Oy.forEach(t),ln.forEach(t),B_=l(me),Pe=a(me,"DIV",{class:!0});var Pt=s(Pe);f(Qa.$$.fragment,Pt),F_=l(Pt),mo=a(Pt,"P",{});var Lr=s(mo);$_=i(Lr,"The "),bd=a(Lr,"CODE",{});var Dy=s(bd);j_=i(Dy,"FlaxBartPreTrainedModel"),Dy.forEach(t),M_=i(Lr,"forward method, overrides the "),vd=a(Lr,"CODE",{});var Ly=s(vd);E_=i(Ly,"__call__"),Ly.forEach(t),P_=i(Lr," special method."),Lr.forEach(t),C_=l(Pt),f(Xo.$$.fragment,Pt),A_=l(Pt),yd=a(Pt,"P",{});var Gy=s(yd);S_=i(Gy,"Example:"),Gy.forEach(t),I_=l(Pt),f(Va.$$.fragment,Pt),Pt.forEach(t),O_=l(me),_t=a(me,"DIV",{class:!0});var Gr=s(_t);f(Ja.$$.fragment,Gr),N_=l(Gr),Td=a(Gr,"P",{});var Wy=s(Td);D_=i(Wy,"Example:"),Wy.forEach(t),L_=l(Gr),f(Xa.$$.fragment,Gr),Gr.forEach(t),G_=l(me),gt=a(me,"DIV",{class:!0});var Wr=s(gt);f(Ka.$$.fragment,Wr),W_=l(Wr),wd=a(Wr,"P",{});var Ry=s(wd);R_=i(Ry,"Example:"),Ry.forEach(t),U_=l(Wr),f(Za.$$.fragment,Wr),Wr.forEach(t),me.forEach(t),Jl=l(o),fo=a(o,"H2",{class:!0});var Wc=s(fo);Ko=a(Wc,"A",{id:!0,class:!0,href:!0});var Uy=s(Ko);xd=a(Uy,"SPAN",{});var Hy=s(xd);f(Ya.$$.fragment,Hy),Hy.forEach(t),Uy.forEach(t),H_=l(Wc),zd=a(Wc,"SPAN",{});var Qy=s(zd);Q_=i(Qy,"FlaxBartForConditionalGeneration"),Qy.forEach(t),Wc.forEach(t),Xl=l(o),R=a(o,"DIV",{class:!0});var fe=s(R);f(es.$$.fragment,fe),V_=l(fe),ts=a(fe,"P",{});var Rc=s(ts);J_=i(Rc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),vr=a(Rc,"A",{href:!0});var Vy=s(vr);X_=i(Vy,"FlaxPreTrainedModel"),Vy.forEach(t),K_=i(Rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rc.forEach(t),Z_=l(fe),os=a(fe,"P",{});var Uc=s(os);Y_=i(Uc,`This model is also a Flax Linen
`),ns=a(Uc,"A",{href:!0,rel:!0});var Jy=s(ns);eg=i(Jy,"flax.nn.Module"),Jy.forEach(t),tg=i(Uc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Uc.forEach(t),og=l(fe),qd=a(fe,"P",{});var Xy=s(qd);ng=i(Xy,"Finally, this model supports inherent JAX features such as:"),Xy.forEach(t),ag=l(fe),lt=a(fe,"UL",{});var cn=s(lt);Bd=a(cn,"LI",{});var Ky=s(Bd);as=a(Ky,"A",{href:!0,rel:!0});var Zy=s(as);sg=i(Zy,"Just-In-Time (JIT) compilation"),Zy.forEach(t),Ky.forEach(t),rg=l(cn),Fd=a(cn,"LI",{});var Yy=s(Fd);ss=a(Yy,"A",{href:!0,rel:!0});var eT=s(ss);ig=i(eT,"Automatic Differentiation"),eT.forEach(t),Yy.forEach(t),dg=l(cn),$d=a(cn,"LI",{});var tT=s($d);rs=a(tT,"A",{href:!0,rel:!0});var oT=s(rs);lg=i(oT,"Vectorization"),oT.forEach(t),tT.forEach(t),cg=l(cn),jd=a(cn,"LI",{});var nT=s(jd);is=a(nT,"A",{href:!0,rel:!0});var aT=s(is);pg=i(aT,"Parallelization"),aT.forEach(t),nT.forEach(t),cn.forEach(t),hg=l(fe),ee=a(fe,"DIV",{class:!0});var Ne=s(ee);f(ds.$$.fragment,Ne),ug=l(Ne),_o=a(Ne,"P",{});var Rr=s(_o);mg=i(Rr,"The "),Md=a(Rr,"CODE",{});var sT=s(Md);fg=i(sT,"FlaxBartPreTrainedModel"),sT.forEach(t),_g=i(Rr,"forward method, overrides the "),Ed=a(Rr,"CODE",{});var rT=s(Ed);gg=i(rT,"__call__"),rT.forEach(t),kg=i(Rr," special method."),Rr.forEach(t),bg=l(Ne),f(Zo.$$.fragment,Ne),vg=l(Ne),Pd=a(Ne,"P",{});var iT=s(Pd);yg=i(iT,"Summarization example:"),iT.forEach(t),Tg=l(Ne),f(ls.$$.fragment,Ne),wg=l(Ne),Cd=a(Ne,"P",{});var dT=s(Cd);xg=i(dT,"Mask filling example:"),dT.forEach(t),zg=l(Ne),f(cs.$$.fragment,Ne),Ne.forEach(t),qg=l(fe),kt=a(fe,"DIV",{class:!0});var Ur=s(kt);f(ps.$$.fragment,Ur),Bg=l(Ur),Ad=a(Ur,"P",{});var lT=s(Ad);Fg=i(lT,"Example:"),lT.forEach(t),$g=l(Ur),f(hs.$$.fragment,Ur),Ur.forEach(t),jg=l(fe),bt=a(fe,"DIV",{class:!0});var Hr=s(bt);f(us.$$.fragment,Hr),Mg=l(Hr),Sd=a(Hr,"P",{});var cT=s(Sd);Eg=i(cT,"Example:"),cT.forEach(t),Pg=l(Hr),f(ms.$$.fragment,Hr),Hr.forEach(t),fe.forEach(t),Kl=l(o),go=a(o,"H2",{class:!0});var Hc=s(go);Yo=a(Hc,"A",{id:!0,class:!0,href:!0});var pT=s(Yo);Id=a(pT,"SPAN",{});var hT=s(Id);f(fs.$$.fragment,hT),hT.forEach(t),pT.forEach(t),Cg=l(Hc),Od=a(Hc,"SPAN",{});var uT=s(Od);Ag=i(uT,"FlaxBartForSequenceClassification"),uT.forEach(t),Hc.forEach(t),Zl=l(o),I=a(o,"DIV",{class:!0});var te=s(I);f(_s.$$.fragment,te),Sg=l(te),Nd=a(te,"P",{});var mT=s(Nd);Ig=i(mT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),mT.forEach(t),Og=l(te),gs=a(te,"P",{});var Qc=s(gs);Ng=i(Qc,"This model inherits from "),yr=a(Qc,"A",{href:!0});var fT=s(yr);Dg=i(fT,"FlaxPreTrainedModel"),fT.forEach(t),Lg=i(Qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc.forEach(t),Gg=l(te),ks=a(te,"P",{});var Vc=s(ks);Wg=i(Vc,`This model is also a Flax Linen
`),bs=a(Vc,"A",{href:!0,rel:!0});var _T=s(bs);Rg=i(_T,"flax.nn.Module"),_T.forEach(t),Ug=i(Vc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vc.forEach(t),Hg=l(te),Dd=a(te,"P",{});var gT=s(Dd);Qg=i(gT,"Finally, this model supports inherent JAX features such as:"),gT.forEach(t),Vg=l(te),ct=a(te,"UL",{});var pn=s(ct);Ld=a(pn,"LI",{});var kT=s(Ld);vs=a(kT,"A",{href:!0,rel:!0});var bT=s(vs);Jg=i(bT,"Just-In-Time (JIT) compilation"),bT.forEach(t),kT.forEach(t),Xg=l(pn),Gd=a(pn,"LI",{});var vT=s(Gd);ys=a(vT,"A",{href:!0,rel:!0});var yT=s(ys);Kg=i(yT,"Automatic Differentiation"),yT.forEach(t),vT.forEach(t),Zg=l(pn),Wd=a(pn,"LI",{});var TT=s(Wd);Ts=a(TT,"A",{href:!0,rel:!0});var wT=s(Ts);Yg=i(wT,"Vectorization"),wT.forEach(t),TT.forEach(t),ek=l(pn),Rd=a(pn,"LI",{});var xT=s(Rd);ws=a(xT,"A",{href:!0,rel:!0});var zT=s(ws);tk=i(zT,"Parallelization"),zT.forEach(t),xT.forEach(t),pn.forEach(t),ok=l(te),Ce=a(te,"DIV",{class:!0});var Ct=s(Ce);f(xs.$$.fragment,Ct),nk=l(Ct),ko=a(Ct,"P",{});var Qr=s(ko);ak=i(Qr,"The "),Ud=a(Qr,"CODE",{});var qT=s(Ud);sk=i(qT,"FlaxBartPreTrainedModel"),qT.forEach(t),rk=i(Qr,"forward method, overrides the "),Hd=a(Qr,"CODE",{});var BT=s(Hd);ik=i(BT,"__call__"),BT.forEach(t),dk=i(Qr," special method."),Qr.forEach(t),lk=l(Ct),f(en.$$.fragment,Ct),ck=l(Ct),Qd=a(Ct,"P",{});var FT=s(Qd);pk=i(FT,"Example:"),FT.forEach(t),hk=l(Ct),f(zs.$$.fragment,Ct),Ct.forEach(t),uk=l(te),vt=a(te,"DIV",{class:!0});var Vr=s(vt);f(qs.$$.fragment,Vr),mk=l(Vr),Vd=a(Vr,"P",{});var $T=s(Vd);fk=i($T,"Example:"),$T.forEach(t),_k=l(Vr),f(Bs.$$.fragment,Vr),Vr.forEach(t),gk=l(te),yt=a(te,"DIV",{class:!0});var Jr=s(yt);f(Fs.$$.fragment,Jr),kk=l(Jr),Jd=a(Jr,"P",{});var jT=s(Jd);bk=i(jT,"Example:"),jT.forEach(t),vk=l(Jr),f($s.$$.fragment,Jr),Jr.forEach(t),te.forEach(t),Yl=l(o),bo=a(o,"H2",{class:!0});var Jc=s(bo);tn=a(Jc,"A",{id:!0,class:!0,href:!0});var MT=s(tn);Xd=a(MT,"SPAN",{});var ET=s(Xd);f(js.$$.fragment,ET),ET.forEach(t),MT.forEach(t),yk=l(Jc),Kd=a(Jc,"SPAN",{});var PT=s(Kd);Tk=i(PT,"FlaxBartForQuestionAnswering"),PT.forEach(t),Jc.forEach(t),ec=l(o),O=a(o,"DIV",{class:!0});var oe=s(O);f(Ms.$$.fragment,oe),wk=l(oe),vo=a(oe,"P",{});var Xr=s(vo);xk=i(Xr,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zd=a(Xr,"CODE",{});var CT=s(Zd);zk=i(CT,"span start logits"),CT.forEach(t),qk=i(Xr," and "),Yd=a(Xr,"CODE",{});var AT=s(Yd);Bk=i(AT,"span end logits"),AT.forEach(t),Fk=i(Xr,")."),Xr.forEach(t),$k=l(oe),Es=a(oe,"P",{});var Xc=s(Es);jk=i(Xc,"This model inherits from "),Tr=a(Xc,"A",{href:!0});var ST=s(Tr);Mk=i(ST,"FlaxPreTrainedModel"),ST.forEach(t),Ek=i(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc.forEach(t),Pk=l(oe),Ps=a(oe,"P",{});var Kc=s(Ps);Ck=i(Kc,`This model is also a Flax Linen
`),Cs=a(Kc,"A",{href:!0,rel:!0});var IT=s(Cs);Ak=i(IT,"flax.nn.Module"),IT.forEach(t),Sk=i(Kc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kc.forEach(t),Ik=l(oe),el=a(oe,"P",{});var OT=s(el);Ok=i(OT,"Finally, this model supports inherent JAX features such as:"),OT.forEach(t),Nk=l(oe),pt=a(oe,"UL",{});var hn=s(pt);tl=a(hn,"LI",{});var NT=s(tl);As=a(NT,"A",{href:!0,rel:!0});var DT=s(As);Dk=i(DT,"Just-In-Time (JIT) compilation"),DT.forEach(t),NT.forEach(t),Lk=l(hn),ol=a(hn,"LI",{});var LT=s(ol);Ss=a(LT,"A",{href:!0,rel:!0});var GT=s(Ss);Gk=i(GT,"Automatic Differentiation"),GT.forEach(t),LT.forEach(t),Wk=l(hn),nl=a(hn,"LI",{});var WT=s(nl);Is=a(WT,"A",{href:!0,rel:!0});var RT=s(Is);Rk=i(RT,"Vectorization"),RT.forEach(t),WT.forEach(t),Uk=l(hn),al=a(hn,"LI",{});var UT=s(al);Os=a(UT,"A",{href:!0,rel:!0});var HT=s(Os);Hk=i(HT,"Parallelization"),HT.forEach(t),UT.forEach(t),hn.forEach(t),Qk=l(oe),Ae=a(oe,"DIV",{class:!0});var At=s(Ae);f(Ns.$$.fragment,At),Vk=l(At),yo=a(At,"P",{});var Kr=s(yo);Jk=i(Kr,"The "),sl=a(Kr,"CODE",{});var QT=s(sl);Xk=i(QT,"FlaxBartPreTrainedModel"),QT.forEach(t),Kk=i(Kr,"forward method, overrides the "),rl=a(Kr,"CODE",{});var VT=s(rl);Zk=i(VT,"__call__"),VT.forEach(t),Yk=i(Kr," special method."),Kr.forEach(t),eb=l(At),f(on.$$.fragment,At),tb=l(At),il=a(At,"P",{});var JT=s(il);ob=i(JT,"Example:"),JT.forEach(t),nb=l(At),f(Ds.$$.fragment,At),At.forEach(t),ab=l(oe),Tt=a(oe,"DIV",{class:!0});var Zr=s(Tt);f(Ls.$$.fragment,Zr),sb=l(Zr),dl=a(Zr,"P",{});var XT=s(dl);rb=i(XT,"Example:"),XT.forEach(t),ib=l(Zr),f(Gs.$$.fragment,Zr),Zr.forEach(t),db=l(oe),wt=a(oe,"DIV",{class:!0});var Yr=s(wt);f(Ws.$$.fragment,Yr),lb=l(Yr),ll=a(Yr,"P",{});var KT=s(ll);cb=i(KT,"Example:"),KT.forEach(t),pb=l(Yr),f(Rs.$$.fragment,Yr),Yr.forEach(t),oe.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(g1)),c(w,"id","bart"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bart"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(H,"class","relative group"),c(Q,"href","https://arxiv.org/abs/1910.13461"),c(Q,"rel","nofollow"),c(We,"href","https://huggingface.co/sshleifer"),c(We,"rel","nofollow"),c(Re,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Re,"rel","nofollow"),c(Fe,"id","examples"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#examples"),c(ye,"class","relative group"),c(mn,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(mn,"rel","nofollow"),c(Vs,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(fn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(fn,"rel","nofollow"),c(_n,"href","https://huggingface.co/models?search=distilbart"),c(_n,"rel","nofollow"),c(gn,"href","https://arxiv.org/abs/2010.13002"),c(gn,"rel","nofollow"),c(wo,"id","implementation-notes"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#implementation-notes"),c(Lt,"class","relative group"),c(Js,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartTokenizer"),c(Xs,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),c(Ks,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartModel"),c(Ys,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(xo,"id","mask-filling"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#mask-filling"),c(Ut,"class","relative group"),c(zo,"id","transformers.BartConfig"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.BartConfig"),c(Ht,"class","relative group"),c(er,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartModel"),c(wn,"href","https://huggingface.co/facebook/bart-large"),c(wn,"rel","nofollow"),c(tr,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(or,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Te,"class","docstring"),c(qo,"id","transformers.BartTokenizer"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BartTokenizer"),c(Jt,"class","relative group"),c(nr,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(mt,"class","docstring"),c(Fo,"class","docstring"),c($o,"class","docstring"),c(jo,"class","docstring"),c(E,"class","docstring"),c(Mo,"id","transformers.BartTokenizerFast"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.BartTokenizerFast"),c(Xt,"class","relative group"),c(rr,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Po,"class","docstring"),c(G,"class","docstring"),c(Co,"id","transformers.BartModel"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BartModel"),c(Kt,"class","relative group"),c(ir,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qn,"rel","nofollow"),c(dr,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartModel"),c(je,"class","docstring"),c(Qe,"class","docstring"),c(So,"id","transformers.BartForConditionalGeneration"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.BartForConditionalGeneration"),c(Yt,"class","relative group"),c(lr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ea,"rel","nofollow"),c(cr,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(K,"class","docstring"),c(Ve,"class","docstring"),c(Oo,"id","transformers.BartForSequenceClassification"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.BartForSequenceClassification"),c(to,"class","relative group"),c(pr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(da,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(da,"rel","nofollow"),c(hr,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartForSequenceClassification"),c(Z,"class","docstring"),c(we,"class","docstring"),c(Do,"id","transformers.BartForQuestionAnswering"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.BartForQuestionAnswering"),c(no,"class","relative group"),c(ur,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(_a,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_a,"rel","nofollow"),c(mr,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(Me,"class","docstring"),c(xe,"class","docstring"),c(Go,"id","transformers.BartForCausalLM"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.BartForCausalLM"),c(ro,"class","relative group"),c(ft,"class","docstring"),c(io,"class","docstring"),c(Wo,"id","transformers.TFBartModel"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.TFBartModel"),c(lo,"class","relative group"),c(fr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ba,"rel","nofollow"),c(_r,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.TFBartModel"),c(Ee,"class","docstring"),c(ze,"class","docstring"),c(Ho,"id","transformers.TFBartForConditionalGeneration"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.TFBartForConditionalGeneration"),c(po,"class","relative group"),c(gr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ca,"rel","nofollow"),c(kr,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(Y,"class","docstring"),c(qe,"class","docstring"),c(Jo,"id","transformers.FlaxBartModel"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.FlaxBartModel"),c(uo,"class","relative group"),c(br,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ga,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ga,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ra,"rel","nofollow"),c(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ua,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ha,"rel","nofollow"),c(Pe,"class","docstring"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(W,"class","docstring"),c(Ko,"id","transformers.FlaxBartForConditionalGeneration"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBartForConditionalGeneration"),c(fo,"class","relative group"),c(vr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ns,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ns,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(as,"rel","nofollow"),c(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ss,"rel","nofollow"),c(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(rs,"rel","nofollow"),c(is,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(is,"rel","nofollow"),c(ee,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(R,"class","docstring"),c(Yo,"id","transformers.FlaxBartForSequenceClassification"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.FlaxBartForSequenceClassification"),c(go,"class","relative group"),c(yr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(bs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(bs,"rel","nofollow"),c(vs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(vs,"rel","nofollow"),c(ys,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ys,"rel","nofollow"),c(Ts,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ts,"rel","nofollow"),c(ws,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ws,"rel","nofollow"),c(Ce,"class","docstring"),c(vt,"class","docstring"),c(yt,"class","docstring"),c(I,"class","docstring"),c(tn,"id","transformers.FlaxBartForQuestionAnswering"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.FlaxBartForQuestionAnswering"),c(bo,"class","relative group"),c(Tr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Cs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Cs,"rel","nofollow"),c(As,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(As,"rel","nofollow"),c(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ss,"rel","nofollow"),c(Is,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Is,"rel","nofollow"),c(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Os,"rel","nofollow"),c(Ae,"class","docstring"),c(Tt,"class","docstring"),c(wt,"class","docstring"),c(O,"class","docstring")},m(o,h){e(document.head,p),u(o,q,h),u(o,v,h),e(v,w),e(w,x),_(T,x,null),e(v,y),e(v,B),e(B,ne),u(o,A,h),u(o,$,h),e($,le),e(le,_e),e($,Ke),e($,ge),e(ge,ke),e($,Ze),u(o,Je,h),u(o,H,h),e(H,N),e(N,Le),_(ae,Le,null),e(H,C),e(H,S),e(S,Ye),u(o,ce,h),u(o,pe,h),e(pe,et),e(pe,Q),e(Q,tt),e(pe,ot),u(o,D,h),u(o,Be,h),e(Be,be),u(o,Xe,h),u(o,X,h),e(X,se),e(se,nt),e(X,at),e(X,V),e(V,st),e(X,ve),e(X,Ge),e(Ge,z),u(o,M,h),u(o,U,h),e(U,St),e(U,We),e(We,re),e(U,It),e(U,Re),e(Re,Ot),e(U,ie),u(o,he,h),u(o,ye,h),e(ye,Fe),e(Fe,de),_(Ue,de,null),e(ye,Nt),e(ye,He),e(He,Dt),u(o,yl,h),u(o,ht,h),e(ht,un),e(un,Zc),e(un,mn),e(mn,Yc),e(un,ep),e(ht,tp),e(ht,rt),e(rt,op),e(rt,Vs),e(Vs,np),e(rt,ap),e(rt,ei),e(ei,sp),e(rt,rp),e(rt,fn),e(fn,ip),e(rt,dp),e(ht,lp),e(ht,To),e(To,_n),e(_n,cp),e(To,pp),e(To,gn),e(gn,hp),e(To,up),u(o,Tl,h),u(o,Lt,h),e(Lt,wo),e(wo,ti),_(kn,ti,null),e(Lt,mp),e(Lt,oi),e(oi,fp),u(o,wl,h),u(o,$e,h),e($e,it),e(it,_p),e(it,ni),e(ni,gp),e(it,kp),e(it,Js),e(Js,bp),e(it,vp),e(it,Xs),e(Xs,yp),e(it,Tp),e($e,wp),e($e,Gt),e(Gt,xp),e(Gt,Ks),e(Ks,zp),e(Gt,qp),e(Gt,ai),e(ai,Bp),e(Gt,Fp),e($e,$p),e($e,Wt),e(Wt,jp),e(Wt,si),e(si,Mp),e(Wt,Ep),e(Wt,ri),e(ri,Pp),e(Wt,Cp),e($e,Ap),e($e,Zs),e(Zs,Ys),e(Ys,Sp),e(Zs,Ip),e($e,Op),e($e,Rt),e(Rt,Np),e(Rt,ii),e(ii,Dp),e(Rt,Lp),e(Rt,di),e(di,Gp),e(Rt,Wp),u(o,xl,h),u(o,Ut,h),e(Ut,xo),e(xo,li),_(bn,li,null),e(Ut,Rp),e(Ut,ci),e(ci,Up),u(o,zl,h),u(o,ut,h),e(ut,Hp),e(ut,pi),e(pi,Qp),e(ut,Vp),e(ut,hi),e(hi,Jp),e(ut,Xp),u(o,ql,h),_(vn,o,h),u(o,Bl,h),u(o,Ht,h),e(Ht,zo),e(zo,ui),_(yn,ui,null),e(Ht,Kp),e(Ht,mi),e(mi,Zp),u(o,Fl,h),u(o,Te,h),_(Tn,Te,null),e(Te,Yp),e(Te,Qt),e(Qt,eh),e(Qt,er),e(er,th),e(Qt,oh),e(Qt,wn),e(wn,nh),e(Qt,ah),e(Te,sh),e(Te,Vt),e(Vt,rh),e(Vt,tr),e(tr,ih),e(Vt,dh),e(Vt,or),e(or,lh),e(Vt,ch),e(Te,ph),e(Te,fi),e(fi,hh),e(Te,uh),_(xn,Te,null),u(o,$l,h),u(o,Jt,h),e(Jt,qo),e(qo,_i),_(zn,_i,null),e(Jt,mh),e(Jt,gi),e(gi,fh),u(o,jl,h),u(o,E,h),_(qn,E,null),e(E,_h),e(E,ki),e(ki,gh),e(E,kh),e(E,bi),e(bi,bh),e(E,vh),_(Bn,E,null),e(E,yh),e(E,Fn),e(Fn,Th),e(Fn,vi),e(vi,wh),e(Fn,xh),e(E,zh),_(Bo,E,null),e(E,qh),e(E,$n),e($n,Bh),e($n,nr),e(nr,Fh),e($n,$h),e(E,jh),e(E,mt),_(jn,mt,null),e(mt,Mh),e(mt,yi),e(yi,Eh),e(mt,Ph),e(mt,Mn),e(Mn,ar),e(ar,Ch),e(ar,Ti),e(Ti,Ah),e(Mn,Sh),e(Mn,sr),e(sr,Ih),e(sr,wi),e(wi,Oh),e(E,Nh),e(E,Fo),_(En,Fo,null),e(Fo,Dh),e(Fo,xi),e(xi,Lh),e(E,Gh),e(E,$o),_(Pn,$o,null),e($o,Wh),e($o,zi),e(zi,Rh),e(E,Uh),e(E,jo),_(Cn,jo,null),e(jo,Hh),e(jo,An),e(An,Qh),e(An,qi),e(qi,Vh),e(An,Jh),u(o,Ml,h),u(o,Xt,h),e(Xt,Mo),e(Mo,Bi),_(Sn,Bi,null),e(Xt,Xh),e(Xt,Fi),e(Fi,Kh),u(o,El,h),u(o,G,h),_(In,G,null),e(G,Zh),e(G,On),e(On,Yh),e(On,$i),e($i,eu),e(On,tu),e(G,ou),e(G,ji),e(ji,nu),e(G,au),_(Nn,G,null),e(G,su),e(G,Dn),e(Dn,ru),e(Dn,Mi),e(Mi,iu),e(Dn,du),e(G,lu),_(Eo,G,null),e(G,cu),e(G,Ln),e(Ln,pu),e(Ln,rr),e(rr,hu),e(Ln,uu),e(G,mu),e(G,Po),_(Gn,Po,null),e(Po,fu),e(Po,Ei),e(Ei,_u),u(o,Pl,h),u(o,Kt,h),e(Kt,Co),e(Co,Pi),_(Wn,Pi,null),e(Kt,gu),e(Kt,Ci),e(Ci,ku),u(o,Cl,h),u(o,Qe,h),_(Rn,Qe,null),e(Qe,bu),e(Qe,Un),e(Un,vu),e(Un,ir),e(ir,yu),e(Un,Tu),e(Qe,wu),e(Qe,Hn),e(Hn,xu),e(Hn,Qn),e(Qn,zu),e(Hn,qu),e(Qe,Bu),e(Qe,je),_(Vn,je,null),e(je,Fu),e(je,Zt),e(Zt,$u),e(Zt,dr),e(dr,ju),e(Zt,Mu),e(Zt,Ai),e(Ai,Eu),e(Zt,Pu),e(je,Cu),_(Ao,je,null),e(je,Au),e(je,Si),e(Si,Su),e(je,Iu),_(Jn,je,null),u(o,Al,h),u(o,Yt,h),e(Yt,So),e(So,Ii),_(Xn,Ii,null),e(Yt,Ou),e(Yt,Oi),e(Oi,Nu),u(o,Sl,h),u(o,Ve,h),_(Kn,Ve,null),e(Ve,Du),e(Ve,Zn),e(Zn,Lu),e(Zn,lr),e(lr,Gu),e(Zn,Wu),e(Ve,Ru),e(Ve,Yn),e(Yn,Uu),e(Yn,ea),e(ea,Hu),e(Yn,Qu),e(Ve,Vu),e(Ve,K),_(ta,K,null),e(K,Ju),e(K,eo),e(eo,Xu),e(eo,cr),e(cr,Ku),e(eo,Zu),e(eo,Ni),e(Ni,Yu),e(eo,em),e(K,tm),_(Io,K,null),e(K,om),e(K,Di),e(Di,nm),e(K,am),_(oa,K,null),e(K,sm),e(K,Li),e(Li,rm),e(K,im),_(na,K,null),u(o,Il,h),u(o,to,h),e(to,Oo),e(Oo,Gi),_(aa,Gi,null),e(to,dm),e(to,Wi),e(Wi,lm),u(o,Ol,h),u(o,we,h),_(sa,we,null),e(we,cm),e(we,Ri),e(Ri,pm),e(we,hm),e(we,ra),e(ra,um),e(ra,pr),e(pr,mm),e(ra,fm),e(we,_m),e(we,ia),e(ia,gm),e(ia,da),e(da,km),e(ia,bm),e(we,vm),e(we,Z),_(la,Z,null),e(Z,ym),e(Z,oo),e(oo,Tm),e(oo,hr),e(hr,wm),e(oo,xm),e(oo,Ui),e(Ui,zm),e(oo,qm),e(Z,Bm),_(No,Z,null),e(Z,Fm),e(Z,Hi),e(Hi,$m),e(Z,jm),_(ca,Z,null),e(Z,Mm),e(Z,Qi),e(Qi,Em),e(Z,Pm),_(pa,Z,null),u(o,Nl,h),u(o,no,h),e(no,Do),e(Do,Vi),_(ha,Vi,null),e(no,Cm),e(no,Ji),e(Ji,Am),u(o,Dl,h),u(o,xe,h),_(ua,xe,null),e(xe,Sm),e(xe,ao),e(ao,Im),e(ao,Xi),e(Xi,Om),e(ao,Nm),e(ao,Ki),e(Ki,Dm),e(ao,Lm),e(xe,Gm),e(xe,ma),e(ma,Wm),e(ma,ur),e(ur,Rm),e(ma,Um),e(xe,Hm),e(xe,fa),e(fa,Qm),e(fa,_a),e(_a,Vm),e(fa,Jm),e(xe,Xm),e(xe,Me),_(ga,Me,null),e(Me,Km),e(Me,so),e(so,Zm),e(so,mr),e(mr,Ym),e(so,ef),e(so,Zi),e(Zi,tf),e(so,of),e(Me,nf),_(Lo,Me,null),e(Me,af),e(Me,Yi),e(Yi,sf),e(Me,rf),_(ka,Me,null),u(o,Ll,h),u(o,ro,h),e(ro,Go),e(Go,ed),_(ba,ed,null),e(ro,df),e(ro,td),e(td,lf),u(o,Gl,h),u(o,io,h),_(va,io,null),e(io,cf),e(io,ft),_(ya,ft,null),e(ft,pf),e(ft,od),e(od,hf),e(ft,uf),_(Ta,ft,null),u(o,Wl,h),u(o,lo,h),e(lo,Wo),e(Wo,nd),_(wa,nd,null),e(lo,mf),e(lo,ad),e(ad,ff),u(o,Rl,h),u(o,ze,h),_(xa,ze,null),e(ze,_f),e(ze,za),e(za,gf),e(za,fr),e(fr,kf),e(za,bf),e(ze,vf),e(ze,qa),e(qa,yf),e(qa,Ba),e(Ba,Tf),e(qa,wf),e(ze,xf),_(Ro,ze,null),e(ze,zf),e(ze,Ee),_(Fa,Ee,null),e(Ee,qf),e(Ee,co),e(co,Bf),e(co,_r),e(_r,Ff),e(co,$f),e(co,sd),e(sd,jf),e(co,Mf),e(Ee,Ef),_(Uo,Ee,null),e(Ee,Pf),e(Ee,rd),e(rd,Cf),e(Ee,Af),_($a,Ee,null),u(o,Ul,h),u(o,po,h),e(po,Ho),e(Ho,id),_(ja,id,null),e(po,Sf),e(po,dd),e(dd,If),u(o,Hl,h),u(o,qe,h),_(Ma,qe,null),e(qe,Of),e(qe,Ea),e(Ea,Nf),e(Ea,gr),e(gr,Df),e(Ea,Lf),e(qe,Gf),e(qe,Pa),e(Pa,Wf),e(Pa,Ca),e(Ca,Rf),e(Pa,Uf),e(qe,Hf),_(Qo,qe,null),e(qe,Qf),e(qe,Y),_(Aa,Y,null),e(Y,Vf),e(Y,ho),e(ho,Jf),e(ho,kr),e(kr,Xf),e(ho,Kf),e(ho,ld),e(ld,Zf),e(ho,Yf),e(Y,e_),_(Vo,Y,null),e(Y,t_),e(Y,cd),e(cd,o_),e(Y,n_),_(Sa,Y,null),e(Y,a_),e(Y,pd),e(pd,s_),e(Y,r_),_(Ia,Y,null),u(o,Ql,h),u(o,uo,h),e(uo,Jo),e(Jo,hd),_(Oa,hd,null),e(uo,i_),e(uo,ud),e(ud,d_),u(o,Vl,h),u(o,W,h),_(Na,W,null),e(W,l_),e(W,Da),e(Da,c_),e(Da,br),e(br,p_),e(Da,h_),e(W,u_),e(W,La),e(La,m_),e(La,Ga),e(Ga,f_),e(La,__),e(W,g_),e(W,md),e(md,k_),e(W,b_),e(W,dt),e(dt,fd),e(fd,Wa),e(Wa,v_),e(dt,y_),e(dt,_d),e(_d,Ra),e(Ra,T_),e(dt,w_),e(dt,gd),e(gd,Ua),e(Ua,x_),e(dt,z_),e(dt,kd),e(kd,Ha),e(Ha,q_),e(W,B_),e(W,Pe),_(Qa,Pe,null),e(Pe,F_),e(Pe,mo),e(mo,$_),e(mo,bd),e(bd,j_),e(mo,M_),e(mo,vd),e(vd,E_),e(mo,P_),e(Pe,C_),_(Xo,Pe,null),e(Pe,A_),e(Pe,yd),e(yd,S_),e(Pe,I_),_(Va,Pe,null),e(W,O_),e(W,_t),_(Ja,_t,null),e(_t,N_),e(_t,Td),e(Td,D_),e(_t,L_),_(Xa,_t,null),e(W,G_),e(W,gt),_(Ka,gt,null),e(gt,W_),e(gt,wd),e(wd,R_),e(gt,U_),_(Za,gt,null),u(o,Jl,h),u(o,fo,h),e(fo,Ko),e(Ko,xd),_(Ya,xd,null),e(fo,H_),e(fo,zd),e(zd,Q_),u(o,Xl,h),u(o,R,h),_(es,R,null),e(R,V_),e(R,ts),e(ts,J_),e(ts,vr),e(vr,X_),e(ts,K_),e(R,Z_),e(R,os),e(os,Y_),e(os,ns),e(ns,eg),e(os,tg),e(R,og),e(R,qd),e(qd,ng),e(R,ag),e(R,lt),e(lt,Bd),e(Bd,as),e(as,sg),e(lt,rg),e(lt,Fd),e(Fd,ss),e(ss,ig),e(lt,dg),e(lt,$d),e($d,rs),e(rs,lg),e(lt,cg),e(lt,jd),e(jd,is),e(is,pg),e(R,hg),e(R,ee),_(ds,ee,null),e(ee,ug),e(ee,_o),e(_o,mg),e(_o,Md),e(Md,fg),e(_o,_g),e(_o,Ed),e(Ed,gg),e(_o,kg),e(ee,bg),_(Zo,ee,null),e(ee,vg),e(ee,Pd),e(Pd,yg),e(ee,Tg),_(ls,ee,null),e(ee,wg),e(ee,Cd),e(Cd,xg),e(ee,zg),_(cs,ee,null),e(R,qg),e(R,kt),_(ps,kt,null),e(kt,Bg),e(kt,Ad),e(Ad,Fg),e(kt,$g),_(hs,kt,null),e(R,jg),e(R,bt),_(us,bt,null),e(bt,Mg),e(bt,Sd),e(Sd,Eg),e(bt,Pg),_(ms,bt,null),u(o,Kl,h),u(o,go,h),e(go,Yo),e(Yo,Id),_(fs,Id,null),e(go,Cg),e(go,Od),e(Od,Ag),u(o,Zl,h),u(o,I,h),_(_s,I,null),e(I,Sg),e(I,Nd),e(Nd,Ig),e(I,Og),e(I,gs),e(gs,Ng),e(gs,yr),e(yr,Dg),e(gs,Lg),e(I,Gg),e(I,ks),e(ks,Wg),e(ks,bs),e(bs,Rg),e(ks,Ug),e(I,Hg),e(I,Dd),e(Dd,Qg),e(I,Vg),e(I,ct),e(ct,Ld),e(Ld,vs),e(vs,Jg),e(ct,Xg),e(ct,Gd),e(Gd,ys),e(ys,Kg),e(ct,Zg),e(ct,Wd),e(Wd,Ts),e(Ts,Yg),e(ct,ek),e(ct,Rd),e(Rd,ws),e(ws,tk),e(I,ok),e(I,Ce),_(xs,Ce,null),e(Ce,nk),e(Ce,ko),e(ko,ak),e(ko,Ud),e(Ud,sk),e(ko,rk),e(ko,Hd),e(Hd,ik),e(ko,dk),e(Ce,lk),_(en,Ce,null),e(Ce,ck),e(Ce,Qd),e(Qd,pk),e(Ce,hk),_(zs,Ce,null),e(I,uk),e(I,vt),_(qs,vt,null),e(vt,mk),e(vt,Vd),e(Vd,fk),e(vt,_k),_(Bs,vt,null),e(I,gk),e(I,yt),_(Fs,yt,null),e(yt,kk),e(yt,Jd),e(Jd,bk),e(yt,vk),_($s,yt,null),u(o,Yl,h),u(o,bo,h),e(bo,tn),e(tn,Xd),_(js,Xd,null),e(bo,yk),e(bo,Kd),e(Kd,Tk),u(o,ec,h),u(o,O,h),_(Ms,O,null),e(O,wk),e(O,vo),e(vo,xk),e(vo,Zd),e(Zd,zk),e(vo,qk),e(vo,Yd),e(Yd,Bk),e(vo,Fk),e(O,$k),e(O,Es),e(Es,jk),e(Es,Tr),e(Tr,Mk),e(Es,Ek),e(O,Pk),e(O,Ps),e(Ps,Ck),e(Ps,Cs),e(Cs,Ak),e(Ps,Sk),e(O,Ik),e(O,el),e(el,Ok),e(O,Nk),e(O,pt),e(pt,tl),e(tl,As),e(As,Dk),e(pt,Lk),e(pt,ol),e(ol,Ss),e(Ss,Gk),e(pt,Wk),e(pt,nl),e(nl,Is),e(Is,Rk),e(pt,Uk),e(pt,al),e(al,Os),e(Os,Hk),e(O,Qk),e(O,Ae),_(Ns,Ae,null),e(Ae,Vk),e(Ae,yo),e(yo,Jk),e(yo,sl),e(sl,Xk),e(yo,Kk),e(yo,rl),e(rl,Zk),e(yo,Yk),e(Ae,eb),_(on,Ae,null),e(Ae,tb),e(Ae,il),e(il,ob),e(Ae,nb),_(Ds,Ae,null),e(O,ab),e(O,Tt),_(Ls,Tt,null),e(Tt,sb),e(Tt,dl),e(dl,rb),e(Tt,ib),_(Gs,Tt,null),e(O,db),e(O,wt),_(Ws,wt,null),e(wt,lb),e(wt,ll),e(ll,cb),e(wt,pb),_(Rs,wt,null),tc=!0},p(o,[h]){const Us={};h&2&&(Us.$$scope={dirty:h,ctx:o}),Bo.$set(Us);const cl={};h&2&&(cl.$$scope={dirty:h,ctx:o}),Eo.$set(cl);const pl={};h&2&&(pl.$$scope={dirty:h,ctx:o}),Ao.$set(pl);const hl={};h&2&&(hl.$$scope={dirty:h,ctx:o}),Io.$set(hl);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:o}),No.$set(nn);const ul={};h&2&&(ul.$$scope={dirty:h,ctx:o}),Lo.$set(ul);const ml={};h&2&&(ml.$$scope={dirty:h,ctx:o}),Ro.$set(ml);const Hs={};h&2&&(Hs.$$scope={dirty:h,ctx:o}),Uo.$set(Hs);const fl={};h&2&&(fl.$$scope={dirty:h,ctx:o}),Qo.$set(fl);const _l={};h&2&&(_l.$$scope={dirty:h,ctx:o}),Vo.$set(_l);const gl={};h&2&&(gl.$$scope={dirty:h,ctx:o}),Xo.$set(gl);const Qs={};h&2&&(Qs.$$scope={dirty:h,ctx:o}),Zo.$set(Qs);const kl={};h&2&&(kl.$$scope={dirty:h,ctx:o}),en.$set(kl);const bl={};h&2&&(bl.$$scope={dirty:h,ctx:o}),on.$set(bl)},i(o){tc||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(Ue.$$.fragment,o),g(kn.$$.fragment,o),g(bn.$$.fragment,o),g(vn.$$.fragment,o),g(yn.$$.fragment,o),g(Tn.$$.fragment,o),g(xn.$$.fragment,o),g(zn.$$.fragment,o),g(qn.$$.fragment,o),g(Bn.$$.fragment,o),g(Bo.$$.fragment,o),g(jn.$$.fragment,o),g(En.$$.fragment,o),g(Pn.$$.fragment,o),g(Cn.$$.fragment,o),g(Sn.$$.fragment,o),g(In.$$.fragment,o),g(Nn.$$.fragment,o),g(Eo.$$.fragment,o),g(Gn.$$.fragment,o),g(Wn.$$.fragment,o),g(Rn.$$.fragment,o),g(Vn.$$.fragment,o),g(Ao.$$.fragment,o),g(Jn.$$.fragment,o),g(Xn.$$.fragment,o),g(Kn.$$.fragment,o),g(ta.$$.fragment,o),g(Io.$$.fragment,o),g(oa.$$.fragment,o),g(na.$$.fragment,o),g(aa.$$.fragment,o),g(sa.$$.fragment,o),g(la.$$.fragment,o),g(No.$$.fragment,o),g(ca.$$.fragment,o),g(pa.$$.fragment,o),g(ha.$$.fragment,o),g(ua.$$.fragment,o),g(ga.$$.fragment,o),g(Lo.$$.fragment,o),g(ka.$$.fragment,o),g(ba.$$.fragment,o),g(va.$$.fragment,o),g(ya.$$.fragment,o),g(Ta.$$.fragment,o),g(wa.$$.fragment,o),g(xa.$$.fragment,o),g(Ro.$$.fragment,o),g(Fa.$$.fragment,o),g(Uo.$$.fragment,o),g($a.$$.fragment,o),g(ja.$$.fragment,o),g(Ma.$$.fragment,o),g(Qo.$$.fragment,o),g(Aa.$$.fragment,o),g(Vo.$$.fragment,o),g(Sa.$$.fragment,o),g(Ia.$$.fragment,o),g(Oa.$$.fragment,o),g(Na.$$.fragment,o),g(Qa.$$.fragment,o),g(Xo.$$.fragment,o),g(Va.$$.fragment,o),g(Ja.$$.fragment,o),g(Xa.$$.fragment,o),g(Ka.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(ds.$$.fragment,o),g(Zo.$$.fragment,o),g(ls.$$.fragment,o),g(cs.$$.fragment,o),g(ps.$$.fragment,o),g(hs.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(_s.$$.fragment,o),g(xs.$$.fragment,o),g(en.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g(Bs.$$.fragment,o),g(Fs.$$.fragment,o),g($s.$$.fragment,o),g(js.$$.fragment,o),g(Ms.$$.fragment,o),g(Ns.$$.fragment,o),g(on.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),g(Rs.$$.fragment,o),tc=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(Ue.$$.fragment,o),k(kn.$$.fragment,o),k(bn.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(xn.$$.fragment,o),k(zn.$$.fragment,o),k(qn.$$.fragment,o),k(Bn.$$.fragment,o),k(Bo.$$.fragment,o),k(jn.$$.fragment,o),k(En.$$.fragment,o),k(Pn.$$.fragment,o),k(Cn.$$.fragment,o),k(Sn.$$.fragment,o),k(In.$$.fragment,o),k(Nn.$$.fragment,o),k(Eo.$$.fragment,o),k(Gn.$$.fragment,o),k(Wn.$$.fragment,o),k(Rn.$$.fragment,o),k(Vn.$$.fragment,o),k(Ao.$$.fragment,o),k(Jn.$$.fragment,o),k(Xn.$$.fragment,o),k(Kn.$$.fragment,o),k(ta.$$.fragment,o),k(Io.$$.fragment,o),k(oa.$$.fragment,o),k(na.$$.fragment,o),k(aa.$$.fragment,o),k(sa.$$.fragment,o),k(la.$$.fragment,o),k(No.$$.fragment,o),k(ca.$$.fragment,o),k(pa.$$.fragment,o),k(ha.$$.fragment,o),k(ua.$$.fragment,o),k(ga.$$.fragment,o),k(Lo.$$.fragment,o),k(ka.$$.fragment,o),k(ba.$$.fragment,o),k(va.$$.fragment,o),k(ya.$$.fragment,o),k(Ta.$$.fragment,o),k(wa.$$.fragment,o),k(xa.$$.fragment,o),k(Ro.$$.fragment,o),k(Fa.$$.fragment,o),k(Uo.$$.fragment,o),k($a.$$.fragment,o),k(ja.$$.fragment,o),k(Ma.$$.fragment,o),k(Qo.$$.fragment,o),k(Aa.$$.fragment,o),k(Vo.$$.fragment,o),k(Sa.$$.fragment,o),k(Ia.$$.fragment,o),k(Oa.$$.fragment,o),k(Na.$$.fragment,o),k(Qa.$$.fragment,o),k(Xo.$$.fragment,o),k(Va.$$.fragment,o),k(Ja.$$.fragment,o),k(Xa.$$.fragment,o),k(Ka.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(es.$$.fragment,o),k(ds.$$.fragment,o),k(Zo.$$.fragment,o),k(ls.$$.fragment,o),k(cs.$$.fragment,o),k(ps.$$.fragment,o),k(hs.$$.fragment,o),k(us.$$.fragment,o),k(ms.$$.fragment,o),k(fs.$$.fragment,o),k(_s.$$.fragment,o),k(xs.$$.fragment,o),k(en.$$.fragment,o),k(zs.$$.fragment,o),k(qs.$$.fragment,o),k(Bs.$$.fragment,o),k(Fs.$$.fragment,o),k($s.$$.fragment,o),k(js.$$.fragment,o),k(Ms.$$.fragment,o),k(Ns.$$.fragment,o),k(on.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Gs.$$.fragment,o),k(Ws.$$.fragment,o),k(Rs.$$.fragment,o),tc=!1},d(o){t(p),o&&t(q),o&&t(v),b(T),o&&t(A),o&&t($),o&&t(Je),o&&t(H),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Be),o&&t(Xe),o&&t(X),o&&t(M),o&&t(U),o&&t(he),o&&t(ye),b(Ue),o&&t(yl),o&&t(ht),o&&t(Tl),o&&t(Lt),b(kn),o&&t(wl),o&&t($e),o&&t(xl),o&&t(Ut),b(bn),o&&t(zl),o&&t(ut),o&&t(ql),b(vn,o),o&&t(Bl),o&&t(Ht),b(yn),o&&t(Fl),o&&t(Te),b(Tn),b(xn),o&&t($l),o&&t(Jt),b(zn),o&&t(jl),o&&t(E),b(qn),b(Bn),b(Bo),b(jn),b(En),b(Pn),b(Cn),o&&t(Ml),o&&t(Xt),b(Sn),o&&t(El),o&&t(G),b(In),b(Nn),b(Eo),b(Gn),o&&t(Pl),o&&t(Kt),b(Wn),o&&t(Cl),o&&t(Qe),b(Rn),b(Vn),b(Ao),b(Jn),o&&t(Al),o&&t(Yt),b(Xn),o&&t(Sl),o&&t(Ve),b(Kn),b(ta),b(Io),b(oa),b(na),o&&t(Il),o&&t(to),b(aa),o&&t(Ol),o&&t(we),b(sa),b(la),b(No),b(ca),b(pa),o&&t(Nl),o&&t(no),b(ha),o&&t(Dl),o&&t(xe),b(ua),b(ga),b(Lo),b(ka),o&&t(Ll),o&&t(ro),b(ba),o&&t(Gl),o&&t(io),b(va),b(ya),b(Ta),o&&t(Wl),o&&t(lo),b(wa),o&&t(Rl),o&&t(ze),b(xa),b(Ro),b(Fa),b(Uo),b($a),o&&t(Ul),o&&t(po),b(ja),o&&t(Hl),o&&t(qe),b(Ma),b(Qo),b(Aa),b(Vo),b(Sa),b(Ia),o&&t(Ql),o&&t(uo),b(Oa),o&&t(Vl),o&&t(W),b(Na),b(Qa),b(Xo),b(Va),b(Ja),b(Xa),b(Ka),b(Za),o&&t(Jl),o&&t(fo),b(Ya),o&&t(Xl),o&&t(R),b(es),b(ds),b(Zo),b(ls),b(cs),b(ps),b(hs),b(us),b(ms),o&&t(Kl),o&&t(go),b(fs),o&&t(Zl),o&&t(I),b(_s),b(xs),b(en),b(zs),b(qs),b(Bs),b(Fs),b($s),o&&t(Yl),o&&t(bo),b(js),o&&t(ec),o&&t(O),b(Ms),b(Ns),b(on),b(Ds),b(Ls),b(Gs),b(Ws),b(Rs)}}}const g1={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"}],title:"BART"};function k1(j,p,q){let{fw:v}=p;return j.$$set=w=>{"fw"in w&&q(0,v=w.fw)},[v]}class z1 extends ZT{constructor(p){super();YT(this,p,k1,_1,e1,{fw:0})}}export{z1 as default,g1 as metadata};
