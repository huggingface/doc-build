import{S as XT,i as KT,s as ZT,e as n,k as d,w as m,t as r,L as YT,c as a,d as t,m as l,a as s,x as f,h as i,b as c,J as e,g as u,y as _,q as g,o as k,B as b}from"../../chunks/vendor-9e2b328e.js";import{T as De}from"../../chunks/Tip-76f97a76.js";import{D as F}from"../../chunks/Docstring-50fd6873.js";import{C as P}from"../../chunks/CodeBlock-88e23343.js";import{I as J}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function ew(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("When used with "),y=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer will add a space before each word (even the first one).")},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"When used with "),y=a(v,"CODE",{});var B=s(y);w=i(B,"is_split_into_words=True"),B.forEach(t),x=i(v,", this tokenizer will add a space before each word (even the first one)."),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function tw(j){let p,q,y,w,x,T,v,B;return{c(){p=n("p"),q=r("When used with "),y=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer needs to be instantiated with "),T=n("code"),v=r("add_prefix_space=True"),B=r(".")},l(ne){p=a(ne,"P",{});var A=s(p);q=i(A,"When used with "),y=a(A,"CODE",{});var $=s(y);w=i($,"is_split_into_words=True"),$.forEach(t),x=i(A,", this tokenizer needs to be instantiated with "),T=a(A,"CODE",{});var le=s(T);v=i(le,"add_prefix_space=True"),le.forEach(t),B=i(A,"."),A.forEach(t)},m(ne,A){u(ne,p,A),e(p,q),e(p,y),e(y,w),e(p,x),e(p,T),e(T,v),e(p,B)},d(ne){ne&&t(p)}}}function ow(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function nw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function aw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function sw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function rw(j){let p,q,y,w,x,T,v,B,ne,A,$,le,_e,Ke,ge,ke,Ze,Je,H,N,Le,ae,C,S,Ye,ce,pe,et,Q,tt,ot,D,Be,be,Xe,X,se,nt,at,V,st,ye,Ge;return{c(){p=n("p"),q=r("TF 2.0 models accepts two formats as inputs:"),y=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),v=d(),B=n("li"),ne=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),le=r("This second option is useful when using "),_e=n("code"),Ke=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),Ze=r("model(inputs)"),Je=r("."),H=d(),N=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),C=n("ul"),S=n("li"),Ye=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),et=r(" only and nothing else: "),Q=n("code"),tt=r("model(input_ids)"),ot=d(),D=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Xe=r("model([input_ids, attention_mask])"),X=r(" or "),se=n("code"),nt=r("model([input_ids, attention_mask, token_type_ids])"),at=d(),V=n("li"),st=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=n("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=a(z,"P",{});var M=s(p);q=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),y=l(z),w=a(z,"UL",{});var U=s(w);x=a(U,"LI",{});var St=s(x);T=i(St,"having all inputs as keyword arguments (like PyTorch models), or"),St.forEach(t),v=l(U),B=a(U,"LI",{});var We=s(B);ne=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),U.forEach(t),A=l(z),$=a(z,"P",{});var re=s($);le=i(re,"This second option is useful when using "),_e=a(re,"CODE",{});var It=s(_e);Ke=i(It,"tf.keras.Model.fit"),It.forEach(t),ge=i(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(re,"CODE",{});var Re=s(ke);Ze=i(Re,"model(inputs)"),Re.forEach(t),Je=i(re,"."),re.forEach(t),H=l(z),N=a(z,"P",{});var Ot=s(N);Le=i(Ot,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ot.forEach(t),ae=l(z),C=a(z,"UL",{});var ie=s(C);S=a(ie,"LI",{});var he=s(S);Ye=i(he,"a single Tensor with "),ce=a(he,"CODE",{});var ve=s(ce);pe=i(ve,"input_ids"),ve.forEach(t),et=i(he," only and nothing else: "),Q=a(he,"CODE",{});var Fe=s(Q);tt=i(Fe,"model(input_ids)"),Fe.forEach(t),he.forEach(t),ot=l(ie),D=a(ie,"LI",{});var de=s(D);Be=i(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(de,"CODE",{});var Ue=s(be);Xe=i(Ue,"model([input_ids, attention_mask])"),Ue.forEach(t),X=i(de," or "),se=a(de,"CODE",{});var Nt=s(se);nt=i(Nt,"model([input_ids, attention_mask, token_type_ids])"),Nt.forEach(t),de.forEach(t),at=l(ie),V=a(ie,"LI",{});var He=s(V);st=i(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a(He,"CODE",{});var Dt=s(ye);Ge=i(Dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Dt.forEach(t),He.forEach(t),ie.forEach(t)},m(z,M){u(z,p,M),e(p,q),u(z,y,M),u(z,w,M),e(w,x),e(x,T),e(w,v),e(w,B),e(B,ne),u(z,A,M),u(z,$,M),e($,le),e($,_e),e(_e,Ke),e($,ge),e($,ke),e(ke,Ze),e($,Je),u(z,H,M),u(z,N,M),e(N,Le),u(z,ae,M),u(z,C,M),e(C,S),e(S,Ye),e(S,ce),e(ce,pe),e(S,et),e(S,Q),e(Q,tt),e(C,ot),e(C,D),e(D,Be),e(D,be),e(be,Xe),e(D,X),e(D,se),e(se,nt),e(C,at),e(C,V),e(V,st),e(V,ye),e(ye,Ge)},d(z){z&&t(p),z&&t(y),z&&t(w),z&&t(A),z&&t($),z&&t(H),z&&t(N),z&&t(ae),z&&t(C)}}}function iw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function dw(j){let p,q,y,w,x,T,v,B,ne,A,$,le,_e,Ke,ge,ke,Ze,Je,H,N,Le,ae,C,S,Ye,ce,pe,et,Q,tt,ot,D,Be,be,Xe,X,se,nt,at,V,st,ye,Ge;return{c(){p=n("p"),q=r("TF 2.0 models accepts two formats as inputs:"),y=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),v=d(),B=n("li"),ne=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),le=r("This second option is useful when using "),_e=n("code"),Ke=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),Ze=r("model(inputs)"),Je=r("."),H=d(),N=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),C=n("ul"),S=n("li"),Ye=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),et=r(" only and nothing else: "),Q=n("code"),tt=r("model(input_ids)"),ot=d(),D=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Xe=r("model([input_ids, attention_mask])"),X=r(" or "),se=n("code"),nt=r("model([input_ids, attention_mask, token_type_ids])"),at=d(),V=n("li"),st=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=n("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=a(z,"P",{});var M=s(p);q=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),y=l(z),w=a(z,"UL",{});var U=s(w);x=a(U,"LI",{});var St=s(x);T=i(St,"having all inputs as keyword arguments (like PyTorch models), or"),St.forEach(t),v=l(U),B=a(U,"LI",{});var We=s(B);ne=i(We,"having all inputs as a list, tuple or dict in the first positional arguments."),We.forEach(t),U.forEach(t),A=l(z),$=a(z,"P",{});var re=s($);le=i(re,"This second option is useful when using "),_e=a(re,"CODE",{});var It=s(_e);Ke=i(It,"tf.keras.Model.fit"),It.forEach(t),ge=i(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(re,"CODE",{});var Re=s(ke);Ze=i(Re,"model(inputs)"),Re.forEach(t),Je=i(re,"."),re.forEach(t),H=l(z),N=a(z,"P",{});var Ot=s(N);Le=i(Ot,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ot.forEach(t),ae=l(z),C=a(z,"UL",{});var ie=s(C);S=a(ie,"LI",{});var he=s(S);Ye=i(he,"a single Tensor with "),ce=a(he,"CODE",{});var ve=s(ce);pe=i(ve,"input_ids"),ve.forEach(t),et=i(he," only and nothing else: "),Q=a(he,"CODE",{});var Fe=s(Q);tt=i(Fe,"model(input_ids)"),Fe.forEach(t),he.forEach(t),ot=l(ie),D=a(ie,"LI",{});var de=s(D);Be=i(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(de,"CODE",{});var Ue=s(be);Xe=i(Ue,"model([input_ids, attention_mask])"),Ue.forEach(t),X=i(de," or "),se=a(de,"CODE",{});var Nt=s(se);nt=i(Nt,"model([input_ids, attention_mask, token_type_ids])"),Nt.forEach(t),de.forEach(t),at=l(ie),V=a(ie,"LI",{});var He=s(V);st=i(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a(He,"CODE",{});var Dt=s(ye);Ge=i(Dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Dt.forEach(t),He.forEach(t),ie.forEach(t)},m(z,M){u(z,p,M),e(p,q),u(z,y,M),u(z,w,M),e(w,x),e(x,T),e(w,v),e(w,B),e(B,ne),u(z,A,M),u(z,$,M),e($,le),e($,_e),e(_e,Ke),e($,ge),e($,ke),e(ke,Ze),e($,Je),u(z,H,M),u(z,N,M),e(N,Le),u(z,ae,M),u(z,C,M),e(C,S),e(S,Ye),e(S,ce),e(ce,pe),e(S,et),e(S,Q),e(Q,tt),e(C,ot),e(C,D),e(D,Be),e(D,be),e(be,Xe),e(D,X),e(D,se),e(se,nt),e(C,at),e(C,V),e(V,st),e(V,ye),e(ye,Ge)},d(z){z&&t(p),z&&t(y),z&&t(w),z&&t(A),z&&t($),z&&t(H),z&&t(N),z&&t(ae),z&&t(C)}}}function lw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function cw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function pw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function hw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function uw(j){let p,q,y,w,x;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);q=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,q),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function mw(j){let p,q,y,w,x,T,v,B,ne,A,$,le,_e,Ke,ge,ke,Ze,Je,H,N,Le,ae,C,S,Ye,ce,pe,et,Q,tt,ot,D,Be,be,Xe,X,se,nt,at,V,st,ye,Ge,z,M,U,St,We,re,It,Re,Ot,ie,he,ve,Fe,de,Ue,Nt,He,Dt,yl,ht,hn,Xc,un,Kc,Zc,Yc,rt,ep,Qs,tp,op,Yr,np,ap,mn,sp,rp,ip,vo,fn,dp,lp,_n,cp,pp,vl,Lt,To,ei,gn,hp,ti,up,Tl,$e,it,mp,oi,fp,_p,Vs,gp,kp,Js,bp,yp,vp,Gt,Tp,Xs,wp,xp,ni,zp,qp,Bp,Wt,Fp,ai,$p,jp,si,Mp,Ep,Pp,Ks,Zs,Cp,Ap,Sp,Rt,Ip,ri,Op,Np,ii,Dp,Lp,wl,Ut,wo,di,kn,Gp,li,Wp,xl,ut,Rp,ci,Up,Hp,pi,Qp,Vp,zl,bn,ql,Ht,xo,hi,yn,Jp,ui,Xp,Bl,Te,vn,Kp,Qt,Zp,Ys,Yp,eh,Tn,th,oh,nh,Vt,ah,er,sh,rh,tr,ih,dh,lh,mi,ch,ph,wn,Fl,Jt,zo,fi,xn,hh,_i,uh,$l,E,zn,mh,gi,fh,_h,ki,gh,kh,qn,bh,Bn,yh,bi,vh,Th,wh,qo,xh,Fn,zh,or,qh,Bh,Fh,mt,$n,$h,yi,jh,Mh,jn,nr,Eh,vi,Ph,Ch,ar,Ah,Ti,Sh,Ih,Bo,Mn,Oh,wi,Nh,Dh,Fo,En,Lh,xi,Gh,Wh,$o,Pn,Rh,Cn,Uh,zi,Hh,Qh,jl,Xt,jo,qi,An,Vh,Bi,Jh,Ml,G,Sn,Xh,In,Kh,Fi,Zh,Yh,eu,$i,tu,ou,On,nu,Nn,au,ji,su,ru,iu,Mo,du,Dn,lu,sr,cu,pu,hu,Eo,Ln,uu,Mi,mu,El,Kt,Po,Ei,Gn,fu,Pi,_u,Pl,Qe,Wn,gu,Rn,ku,rr,bu,yu,vu,Un,Tu,Hn,wu,xu,zu,je,Qn,qu,Zt,Bu,ir,Fu,$u,Ci,ju,Mu,Eu,Co,Pu,Ai,Cu,Au,Vn,Cl,Yt,Ao,Si,Jn,Su,Ii,Iu,Al,Ve,Xn,Ou,Kn,Nu,dr,Du,Lu,Gu,Zn,Wu,Yn,Ru,Uu,Hu,K,ea,Qu,eo,Vu,lr,Ju,Xu,Oi,Ku,Zu,Yu,So,em,Ni,tm,om,ta,nm,Di,am,sm,oa,Sl,to,Io,Li,na,rm,Gi,im,Il,we,aa,dm,Wi,lm,cm,sa,pm,cr,hm,um,mm,ra,fm,ia,_m,gm,km,Z,da,bm,oo,ym,pr,vm,Tm,Ri,wm,xm,zm,Oo,qm,Ui,Bm,Fm,la,$m,Hi,jm,Mm,ca,Ol,no,No,Qi,pa,Em,Vi,Pm,Nl,xe,ha,Cm,ao,Am,Ji,Sm,Im,Xi,Om,Nm,Dm,ua,Lm,hr,Gm,Wm,Rm,ma,Um,fa,Hm,Qm,Vm,Me,_a,Jm,so,Xm,ur,Km,Zm,Ki,Ym,ef,tf,Do,of,Zi,nf,af,ga,Dl,ro,Lo,Yi,ka,sf,ed,rf,Ll,ba,ft,ya,df,td,lf,cf,va,Gl,io,Go,od,Ta,pf,nd,hf,Wl,ze,wa,uf,xa,mf,mr,ff,_f,gf,za,kf,qa,bf,yf,vf,Wo,Tf,Ee,Ba,wf,lo,xf,fr,zf,qf,ad,Bf,Ff,$f,Ro,jf,sd,Mf,Ef,Fa,Rl,co,Uo,rd,$a,Pf,id,Cf,Ul,qe,ja,Af,Ma,Sf,_r,If,Of,Nf,Ea,Df,Pa,Lf,Gf,Wf,Ho,Rf,Y,Ca,Uf,po,Hf,gr,Qf,Vf,dd,Jf,Xf,Kf,Qo,Zf,ld,Yf,e_,Aa,t_,cd,o_,n_,Sa,Hl,ho,Vo,pd,Ia,a_,hd,s_,Ql,W,Oa,r_,Na,i_,kr,d_,l_,c_,Da,p_,La,h_,u_,m_,ud,f_,__,dt,md,Ga,g_,k_,fd,Wa,b_,y_,_d,Ra,v_,T_,gd,Ua,w_,x_,Pe,Ha,z_,uo,q_,kd,B_,F_,bd,$_,j_,M_,Jo,E_,yd,P_,C_,Qa,A_,_t,Va,S_,vd,I_,O_,Ja,N_,gt,Xa,D_,Td,L_,G_,Ka,Vl,mo,Xo,wd,Za,W_,xd,R_,Jl,R,Ya,U_,es,H_,br,Q_,V_,J_,ts,X_,os,K_,Z_,Y_,zd,eg,tg,lt,qd,ns,og,ng,Bd,as,ag,sg,Fd,ss,rg,ig,$d,rs,dg,lg,ee,is,cg,fo,pg,jd,hg,ug,Md,mg,fg,_g,Ko,gg,Ed,kg,bg,ds,yg,Pd,vg,Tg,ls,wg,kt,cs,xg,Cd,zg,qg,ps,Bg,bt,hs,Fg,Ad,$g,jg,us,Xl,_o,Zo,Sd,ms,Mg,Id,Eg,Kl,I,fs,Pg,Od,Cg,Ag,_s,Sg,yr,Ig,Og,Ng,gs,Dg,ks,Lg,Gg,Wg,Nd,Rg,Ug,ct,Dd,bs,Hg,Qg,Ld,ys,Vg,Jg,Gd,vs,Xg,Kg,Wd,Ts,Zg,Yg,Ce,ws,ek,go,tk,Rd,ok,nk,Ud,ak,sk,rk,Yo,ik,Hd,dk,lk,xs,ck,yt,zs,pk,Qd,hk,uk,qs,mk,vt,Bs,fk,Vd,_k,gk,Fs,Zl,ko,en,Jd,$s,kk,Xd,bk,Yl,O,js,yk,bo,vk,Kd,Tk,wk,Zd,xk,zk,qk,Ms,Bk,vr,Fk,$k,jk,Es,Mk,Ps,Ek,Pk,Ck,Yd,Ak,Sk,pt,el,Cs,Ik,Ok,tl,As,Nk,Dk,ol,Ss,Lk,Gk,nl,Is,Wk,Rk,Ae,Os,Uk,yo,Hk,al,Qk,Vk,sl,Jk,Xk,Kk,tn,Zk,rl,Yk,eb,Ns,tb,Tt,Ds,ob,il,nb,ab,Ls,sb,wt,Gs,rb,dl,ib,db,Ws,ec;return T=new J({}),ae=new J({}),Ue=new J({}),gn=new J({}),kn=new J({}),bn=new P({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors="pt")
generated_ids = model.generate(batch["input_ids"])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == [
    "UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria"
],`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [
    <span class="hljs-string">&quot;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&quot;</span>
]`}}),yn=new J({}),vn=new F({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/configuration_bart.py#L36",parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/master/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The number of labels to use in <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),wn=new P({props:{code:`from transformers import BartModel, BartConfig

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartModel, BartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),xn=new J({}),zn=new F({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L101",parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}]}}),qn=new P({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids'],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),qo=new De({props:{$$slots:{default:[ew]},$$scope:{ctx:j}}}),$n=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mn=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L303"}}),En=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pn=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),An=new J({}),Sn=new F({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart_fast.py#L70",parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}]}}),On=new P({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids'],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Mo=new De({props:{$$slots:{default:[tw]},$$scope:{ctx:j}}}),Ln=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart_fast.py#L282",parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new J({}),Wn=new F({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1123",parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qn=new F({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1150",parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new De({props:{$$slots:{default:[ow]},$$scope:{ctx:j}}}),Vn=new P({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Jn=new J({}),Xn=new F({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1249",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ea=new F({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1288",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new De({props:{$$slots:{default:[nw]},$$scope:{ctx:j}}}),ta=new P({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),oa=new P({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),na=new J({}),aa=new F({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1418",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),da=new F({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1431",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new De({props:{$$slots:{default:[aw]},$$scope:{ctx:j}}}),la=new P({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForSequenceClassification.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ca=new P({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForSequenceClassification.from_pretrained("facebook/bart-large", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),pa=new J({}),ha=new F({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1543",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_a=new F({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1555",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new De({props:{$$slots:{default:[sw]},$$scope:{ctx:j}}}),ga=new P({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
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
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ka=new J({}),ya=new F({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_bart.py#L1702",parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),va=new P({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = BartForCausalLM.from_pretrained("facebook/bart-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ta=new J({}),wa=new F({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_tf_bart.py#L1187",parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new De({props:{$$slots:{default:[rw]},$$scope:{ctx:j}}}),Ba=new F({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_tf_bart.py#L1202",parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new De({props:{$$slots:{default:[iw]},$$scope:{ctx:j}}}),Fa=new P({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = TFBartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),$a=new J({}),ja=new F({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_tf_bart.py#L1296",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ho=new De({props:{$$slots:{default:[dw]},$$scope:{ctx:j}}}),Ca=new F({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_tf_bart.py#L1331",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qo=new De({props:{$$slots:{default:[lw]},$$scope:{ctx:j}}}),Aa=new P({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Sa=new P({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="tf")["input_ids"]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ia=new J({}),Oa=new F({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1244",parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ha=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new De({props:{$$slots:{default:[cw]},$$scope:{ctx:j}}}),Qa=new P({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Va=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ja=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Xa=new F({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ka=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Za=new J({}),Ya=new F({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1330",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),is=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new De({props:{$$slots:{default:[pw]},$$scope:{ctx:j}}}),ds=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),ls=new P({props:{code:`import jax
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="jax")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs, k=1)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs, k=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),cs=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ps=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),hs=new F({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1334",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ms=new J({}),fs=new F({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1643",parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ws=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new De({props:{$$slots:{default:[hw]},$$scope:{ctx:j}}}),xs=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Bs=new F({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),$s=new J({}),js=new F({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1730",parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Os=new F({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new De({props:{$$slots:{default:[uw]},$$scope:{ctx:j}}}),Ns=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Ds=new F({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Gs=new F({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("meta"),q=d(),y=n("h1"),w=n("a"),x=n("span"),m(T.$$.fragment),v=d(),B=n("span"),ne=r("BART"),A=d(),$=n("p"),le=n("strong"),_e=r("DISCLAIMER:"),Ke=r(" If you see something strange, file a "),ge=n("a"),ke=r("Github Issue"),Ze=r(` and assign
@patrickvonplaten`),Je=d(),H=n("h2"),N=n("a"),Le=n("span"),m(ae.$$.fragment),C=d(),S=n("span"),Ye=r("Overview"),ce=d(),pe=n("p"),et=r("The Bart model was proposed in "),Q=n("a"),tt=r(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),ot=r(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),D=d(),Be=n("p"),be=r("According to the abstract,"),Xe=d(),X=n("ul"),se=n("li"),nt=r(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),at=d(),V=n("li"),st=r(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ye=d(),Ge=n("li"),z=r(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=d(),U=n("p"),St=r("This model was contributed by "),We=n("a"),re=r("sshleifer"),It=r(". The Authors\u2019 code can be found "),Re=n("a"),Ot=r("here"),ie=r("."),he=d(),ve=n("h3"),Fe=n("a"),de=n("span"),m(Ue.$$.fragment),Nt=d(),He=n("span"),Dt=r("Examples"),yl=d(),ht=n("ul"),hn=n("li"),Xc=r(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),un=n("a"),Kc=r("examples/pytorch/summarization/"),Zc=r("."),Yc=d(),rt=n("li"),ep=r("An example of how to train "),Qs=n("a"),tp=r("BartForConditionalGeneration"),op=r(" with a Hugging Face "),Yr=n("code"),np=r("datasets"),ap=r(`
object can be found in this `),mn=n("a"),sp=r("forum discussion"),rp=r("."),ip=d(),vo=n("li"),fn=n("a"),dp=r("Distilled checkpoints"),lp=r(" are described in this "),_n=n("a"),cp=r("paper"),pp=r("."),vl=d(),Lt=n("h2"),To=n("a"),ei=n("span"),m(gn.$$.fragment),hp=d(),ti=n("span"),up=r("Implementation Notes"),Tl=d(),$e=n("ul"),it=n("li"),mp=r("Bart doesn\u2019t use "),oi=n("code"),fp=r("token_type_ids"),_p=r(" for sequence classification. Use "),Vs=n("a"),gp=r("BartTokenizer"),kp=r(` or
`),Js=n("a"),bp=r("encode()"),yp=r(" to get the proper splitting."),vp=d(),Gt=n("li"),Tp=r("The forward pass of "),Xs=n("a"),wp=r("BartModel"),xp=r(" will create the "),ni=n("code"),zp=r("decoder_input_ids"),qp=r(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Bp=d(),Wt=n("li"),Fp=r(`Model predictions are intended to be identical to the original implementation when
`),ai=n("code"),$p=r("force_bos_token_to_be_generated=True"),jp=r(`. This only works, however, if the string you pass to
`),si=n("code"),Mp=r("fairseq.encode"),Ep=r(" starts with a space."),Pp=d(),Ks=n("li"),Zs=n("a"),Cp=r("generate()"),Ap=r(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Sp=d(),Rt=n("li"),Ip=r("Models that load the "),ri=n("em"),Op=r("facebook/bart-large-cnn"),Np=r(" weights will not have a "),ii=n("code"),Dp=r("mask_token_id"),Lp=r(`, or be able to perform
mask-filling tasks.`),wl=d(),Ut=n("h2"),wo=n("a"),di=n("span"),m(kn.$$.fragment),Gp=d(),li=n("span"),Wp=r("Mask Filling"),xl=d(),ut=n("p"),Rp=r("The "),ci=n("code"),Up=r("facebook/bart-base"),Hp=r(" and "),pi=n("code"),Qp=r("facebook/bart-large"),Vp=r(" checkpoints can be used to fill multi-token masks."),zl=d(),m(bn.$$.fragment),ql=d(),Ht=n("h2"),xo=n("a"),hi=n("span"),m(yn.$$.fragment),Jp=d(),ui=n("span"),Xp=r("BartConfig"),Bl=d(),Te=n("div"),m(vn.$$.fragment),Kp=d(),Qt=n("p"),Zp=r("This is the configuration class to store the configuration of a "),Ys=n("a"),Yp=r("BartModel"),eh=r(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Tn=n("a"),th=r("facebook/bart-large"),oh=r(" architecture."),nh=d(),Vt=n("p"),ah=r("Configuration objects inherit from "),er=n("a"),sh=r("PretrainedConfig"),rh=r(` and can be used to control the model outputs. Read the
documentation from `),tr=n("a"),ih=r("PretrainedConfig"),dh=r(" for more information."),lh=d(),mi=n("p"),ch=r("Example:"),ph=d(),m(wn.$$.fragment),Fl=d(),Jt=n("h2"),zo=n("a"),fi=n("span"),m(xn.$$.fragment),hh=d(),_i=n("span"),uh=r("BartTokenizer"),$l=d(),E=n("div"),m(zn.$$.fragment),mh=d(),gi=n("p"),fh=r("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),_h=d(),ki=n("p"),gh=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),kh=d(),m(qn.$$.fragment),bh=d(),Bn=n("p"),yh=r("You can get around that behavior by passing "),bi=n("code"),vh=r("add_prefix_space=True"),Th=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),wh=d(),m(qo.$$.fragment),xh=d(),Fn=n("p"),zh=r("This tokenizer inherits from "),or=n("a"),qh=r("PreTrainedTokenizer"),Bh=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fh=d(),mt=n("div"),m($n.$$.fragment),$h=d(),yi=n("p"),jh=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Mh=d(),jn=n("ul"),nr=n("li"),Eh=r("single sequence: "),vi=n("code"),Ph=r("<s> X </s>"),Ch=d(),ar=n("li"),Ah=r("pair of sequences: "),Ti=n("code"),Sh=r("<s> A </s></s> B </s>"),Ih=d(),Bo=n("div"),m(Mn.$$.fragment),Oh=d(),wi=n("p"),Nh=r("Converts a sequence of tokens (string) in a single string."),Dh=d(),Fo=n("div"),m(En.$$.fragment),Lh=d(),xi=n("p"),Gh=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Wh=d(),$o=n("div"),m(Pn.$$.fragment),Rh=d(),Cn=n("p"),Uh=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),zi=n("code"),Hh=r("prepare_for_model"),Qh=r(" method."),jl=d(),Xt=n("h2"),jo=n("a"),qi=n("span"),m(An.$$.fragment),Vh=d(),Bi=n("span"),Jh=r("BartTokenizerFast"),Ml=d(),G=n("div"),m(Sn.$$.fragment),Xh=d(),In=n("p"),Kh=r("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Fi=n("em"),Zh=r("tokenizers"),Yh=r(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),eu=d(),$i=n("p"),tu=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),ou=d(),m(On.$$.fragment),nu=d(),Nn=n("p"),au=r("You can get around that behavior by passing "),ji=n("code"),su=r("add_prefix_space=True"),ru=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),iu=d(),m(Mo.$$.fragment),du=d(),Dn=n("p"),lu=r("This tokenizer inherits from "),sr=n("a"),cu=r("PreTrainedTokenizerFast"),pu=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hu=d(),Eo=n("div"),m(Ln.$$.fragment),uu=d(),Mi=n("p"),mu=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),El=d(),Kt=n("h2"),Po=n("a"),Ei=n("span"),m(Gn.$$.fragment),fu=d(),Pi=n("span"),_u=r("BartModel"),Pl=d(),Qe=n("div"),m(Wn.$$.fragment),gu=d(),Rn=n("p"),ku=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rr=n("a"),bu=r("PreTrainedModel"),yu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu=d(),Un=n("p"),Tu=r("This model is also a PyTorch "),Hn=n("a"),wu=r("torch.nn.Module"),xu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu=d(),je=n("div"),m(Qn.$$.fragment),qu=d(),Zt=n("p"),Bu=r("The "),ir=n("a"),Fu=r("BartModel"),$u=r(" forward method, overrides the "),Ci=n("code"),ju=r("__call__"),Mu=r(" special method."),Eu=d(),m(Co.$$.fragment),Pu=d(),Ai=n("p"),Cu=r("Example:"),Au=d(),m(Vn.$$.fragment),Cl=d(),Yt=n("h2"),Ao=n("a"),Si=n("span"),m(Jn.$$.fragment),Su=d(),Ii=n("span"),Iu=r("BartForConditionalGeneration"),Al=d(),Ve=n("div"),m(Xn.$$.fragment),Ou=d(),Kn=n("p"),Nu=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),dr=n("a"),Du=r("PreTrainedModel"),Lu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu=d(),Zn=n("p"),Wu=r("This model is also a PyTorch "),Yn=n("a"),Ru=r("torch.nn.Module"),Uu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu=d(),K=n("div"),m(ea.$$.fragment),Qu=d(),eo=n("p"),Vu=r("The "),lr=n("a"),Ju=r("BartForConditionalGeneration"),Xu=r(" forward method, overrides the "),Oi=n("code"),Ku=r("__call__"),Zu=r(" special method."),Yu=d(),m(So.$$.fragment),em=d(),Ni=n("p"),tm=r("Summarization example:"),om=d(),m(ta.$$.fragment),nm=d(),Di=n("p"),am=r("Mask filling example:"),sm=d(),m(oa.$$.fragment),Sl=d(),to=n("h2"),Io=n("a"),Li=n("span"),m(na.$$.fragment),rm=d(),Gi=n("span"),im=r("BartForSequenceClassification"),Il=d(),we=n("div"),m(aa.$$.fragment),dm=d(),Wi=n("p"),lm=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),cm=d(),sa=n("p"),pm=r("This model inherits from "),cr=n("a"),hm=r("PreTrainedModel"),um=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mm=d(),ra=n("p"),fm=r("This model is also a PyTorch "),ia=n("a"),_m=r("torch.nn.Module"),gm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),km=d(),Z=n("div"),m(da.$$.fragment),bm=d(),oo=n("p"),ym=r("The "),pr=n("a"),vm=r("BartForSequenceClassification"),Tm=r(" forward method, overrides the "),Ri=n("code"),wm=r("__call__"),xm=r(" special method."),zm=d(),m(Oo.$$.fragment),qm=d(),Ui=n("p"),Bm=r("Example of single-label classification:"),Fm=d(),m(la.$$.fragment),$m=d(),Hi=n("p"),jm=r("Example of multi-label classification:"),Mm=d(),m(ca.$$.fragment),Ol=d(),no=n("h2"),No=n("a"),Qi=n("span"),m(pa.$$.fragment),Em=d(),Vi=n("span"),Pm=r("BartForQuestionAnswering"),Nl=d(),xe=n("div"),m(ha.$$.fragment),Cm=d(),ao=n("p"),Am=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ji=n("code"),Sm=r("span start logits"),Im=r(" and "),Xi=n("code"),Om=r("span end logits"),Nm=r(")."),Dm=d(),ua=n("p"),Lm=r("This model inherits from "),hr=n("a"),Gm=r("PreTrainedModel"),Wm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rm=d(),ma=n("p"),Um=r("This model is also a PyTorch "),fa=n("a"),Hm=r("torch.nn.Module"),Qm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vm=d(),Me=n("div"),m(_a.$$.fragment),Jm=d(),so=n("p"),Xm=r("The "),ur=n("a"),Km=r("BartForQuestionAnswering"),Zm=r(" forward method, overrides the "),Ki=n("code"),Ym=r("__call__"),ef=r(" special method."),tf=d(),m(Do.$$.fragment),of=d(),Zi=n("p"),nf=r("Example:"),af=d(),m(ga.$$.fragment),Dl=d(),ro=n("h2"),Lo=n("a"),Yi=n("span"),m(ka.$$.fragment),sf=d(),ed=n("span"),rf=r("BartForCausalLM"),Ll=d(),ba=n("div"),ft=n("div"),m(ya.$$.fragment),df=d(),td=n("p"),lf=r("Example:"),cf=d(),m(va.$$.fragment),Gl=d(),io=n("h2"),Go=n("a"),od=n("span"),m(Ta.$$.fragment),pf=d(),nd=n("span"),hf=r("TFBartModel"),Wl=d(),ze=n("div"),m(wa.$$.fragment),uf=d(),xa=n("p"),mf=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),mr=n("a"),ff=r("TFPreTrainedModel"),_f=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gf=d(),za=n("p"),kf=r("This model is also a "),qa=n("a"),bf=r("tf.keras.Model"),yf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf=d(),m(Wo.$$.fragment),Tf=d(),Ee=n("div"),m(Ba.$$.fragment),wf=d(),lo=n("p"),xf=r("The "),fr=n("a"),zf=r("TFBartModel"),qf=r(" forward method, overrides the "),ad=n("code"),Bf=r("__call__"),Ff=r(" special method."),$f=d(),m(Ro.$$.fragment),jf=d(),sd=n("p"),Mf=r("Example:"),Ef=d(),m(Fa.$$.fragment),Rl=d(),co=n("h2"),Uo=n("a"),rd=n("span"),m($a.$$.fragment),Pf=d(),id=n("span"),Cf=r("TFBartForConditionalGeneration"),Ul=d(),qe=n("div"),m(ja.$$.fragment),Af=d(),Ma=n("p"),Sf=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),_r=n("a"),If=r("TFPreTrainedModel"),Of=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nf=d(),Ea=n("p"),Df=r("This model is also a "),Pa=n("a"),Lf=r("tf.keras.Model"),Gf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wf=d(),m(Ho.$$.fragment),Rf=d(),Y=n("div"),m(Ca.$$.fragment),Uf=d(),po=n("p"),Hf=r("The "),gr=n("a"),Qf=r("TFBartForConditionalGeneration"),Vf=r(" forward method, overrides the "),dd=n("code"),Jf=r("__call__"),Xf=r(" special method."),Kf=d(),m(Qo.$$.fragment),Zf=d(),ld=n("p"),Yf=r("Summarization example:"),e_=d(),m(Aa.$$.fragment),t_=d(),cd=n("p"),o_=r("Mask filling example:"),n_=d(),m(Sa.$$.fragment),Hl=d(),ho=n("h2"),Vo=n("a"),pd=n("span"),m(Ia.$$.fragment),a_=d(),hd=n("span"),s_=r("FlaxBartModel"),Ql=d(),W=n("div"),m(Oa.$$.fragment),r_=d(),Na=n("p"),i_=r(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),kr=n("a"),d_=r("FlaxPreTrainedModel"),l_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c_=d(),Da=n("p"),p_=r(`This model is also a Flax Linen
`),La=n("a"),h_=r("flax.nn.Module"),u_=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),m_=d(),ud=n("p"),f_=r("Finally, this model supports inherent JAX features such as:"),__=d(),dt=n("ul"),md=n("li"),Ga=n("a"),g_=r("Just-In-Time (JIT) compilation"),k_=d(),fd=n("li"),Wa=n("a"),b_=r("Automatic Differentiation"),y_=d(),_d=n("li"),Ra=n("a"),v_=r("Vectorization"),T_=d(),gd=n("li"),Ua=n("a"),w_=r("Parallelization"),x_=d(),Pe=n("div"),m(Ha.$$.fragment),z_=d(),uo=n("p"),q_=r("The "),kd=n("code"),B_=r("FlaxBartPreTrainedModel"),F_=r("forward method, overrides the "),bd=n("code"),$_=r("__call__"),j_=r(" special method."),M_=d(),m(Jo.$$.fragment),E_=d(),yd=n("p"),P_=r("Example:"),C_=d(),m(Qa.$$.fragment),A_=d(),_t=n("div"),m(Va.$$.fragment),S_=d(),vd=n("p"),I_=r("Example:"),O_=d(),m(Ja.$$.fragment),N_=d(),gt=n("div"),m(Xa.$$.fragment),D_=d(),Td=n("p"),L_=r("Example:"),G_=d(),m(Ka.$$.fragment),Vl=d(),mo=n("h2"),Xo=n("a"),wd=n("span"),m(Za.$$.fragment),W_=d(),xd=n("span"),R_=r("FlaxBartForConditionalGeneration"),Jl=d(),R=n("div"),m(Ya.$$.fragment),U_=d(),es=n("p"),H_=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),br=n("a"),Q_=r("FlaxPreTrainedModel"),V_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J_=d(),ts=n("p"),X_=r(`This model is also a Flax Linen
`),os=n("a"),K_=r("flax.nn.Module"),Z_=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Y_=d(),zd=n("p"),eg=r("Finally, this model supports inherent JAX features such as:"),tg=d(),lt=n("ul"),qd=n("li"),ns=n("a"),og=r("Just-In-Time (JIT) compilation"),ng=d(),Bd=n("li"),as=n("a"),ag=r("Automatic Differentiation"),sg=d(),Fd=n("li"),ss=n("a"),rg=r("Vectorization"),ig=d(),$d=n("li"),rs=n("a"),dg=r("Parallelization"),lg=d(),ee=n("div"),m(is.$$.fragment),cg=d(),fo=n("p"),pg=r("The "),jd=n("code"),hg=r("FlaxBartPreTrainedModel"),ug=r("forward method, overrides the "),Md=n("code"),mg=r("__call__"),fg=r(" special method."),_g=d(),m(Ko.$$.fragment),gg=d(),Ed=n("p"),kg=r("Summarization example:"),bg=d(),m(ds.$$.fragment),yg=d(),Pd=n("p"),vg=r("Mask filling example:"),Tg=d(),m(ls.$$.fragment),wg=d(),kt=n("div"),m(cs.$$.fragment),xg=d(),Cd=n("p"),zg=r("Example:"),qg=d(),m(ps.$$.fragment),Bg=d(),bt=n("div"),m(hs.$$.fragment),Fg=d(),Ad=n("p"),$g=r("Example:"),jg=d(),m(us.$$.fragment),Xl=d(),_o=n("h2"),Zo=n("a"),Sd=n("span"),m(ms.$$.fragment),Mg=d(),Id=n("span"),Eg=r("FlaxBartForSequenceClassification"),Kl=d(),I=n("div"),m(fs.$$.fragment),Pg=d(),Od=n("p"),Cg=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Ag=d(),_s=n("p"),Sg=r("This model inherits from "),yr=n("a"),Ig=r("FlaxPreTrainedModel"),Og=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=d(),gs=n("p"),Dg=r(`This model is also a Flax Linen
`),ks=n("a"),Lg=r("flax.nn.Module"),Gg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wg=d(),Nd=n("p"),Rg=r("Finally, this model supports inherent JAX features such as:"),Ug=d(),ct=n("ul"),Dd=n("li"),bs=n("a"),Hg=r("Just-In-Time (JIT) compilation"),Qg=d(),Ld=n("li"),ys=n("a"),Vg=r("Automatic Differentiation"),Jg=d(),Gd=n("li"),vs=n("a"),Xg=r("Vectorization"),Kg=d(),Wd=n("li"),Ts=n("a"),Zg=r("Parallelization"),Yg=d(),Ce=n("div"),m(ws.$$.fragment),ek=d(),go=n("p"),tk=r("The "),Rd=n("code"),ok=r("FlaxBartPreTrainedModel"),nk=r("forward method, overrides the "),Ud=n("code"),ak=r("__call__"),sk=r(" special method."),rk=d(),m(Yo.$$.fragment),ik=d(),Hd=n("p"),dk=r("Example:"),lk=d(),m(xs.$$.fragment),ck=d(),yt=n("div"),m(zs.$$.fragment),pk=d(),Qd=n("p"),hk=r("Example:"),uk=d(),m(qs.$$.fragment),mk=d(),vt=n("div"),m(Bs.$$.fragment),fk=d(),Vd=n("p"),_k=r("Example:"),gk=d(),m(Fs.$$.fragment),Zl=d(),ko=n("h2"),en=n("a"),Jd=n("span"),m($s.$$.fragment),kk=d(),Xd=n("span"),bk=r("FlaxBartForQuestionAnswering"),Yl=d(),O=n("div"),m(js.$$.fragment),yk=d(),bo=n("p"),vk=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Kd=n("code"),Tk=r("span start logits"),wk=r(" and "),Zd=n("code"),xk=r("span end logits"),zk=r(")."),qk=d(),Ms=n("p"),Bk=r("This model inherits from "),vr=n("a"),Fk=r("FlaxPreTrainedModel"),$k=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk=d(),Es=n("p"),Mk=r(`This model is also a Flax Linen
`),Ps=n("a"),Ek=r("flax.nn.Module"),Pk=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ck=d(),Yd=n("p"),Ak=r("Finally, this model supports inherent JAX features such as:"),Sk=d(),pt=n("ul"),el=n("li"),Cs=n("a"),Ik=r("Just-In-Time (JIT) compilation"),Ok=d(),tl=n("li"),As=n("a"),Nk=r("Automatic Differentiation"),Dk=d(),ol=n("li"),Ss=n("a"),Lk=r("Vectorization"),Gk=d(),nl=n("li"),Is=n("a"),Wk=r("Parallelization"),Rk=d(),Ae=n("div"),m(Os.$$.fragment),Uk=d(),yo=n("p"),Hk=r("The "),al=n("code"),Qk=r("FlaxBartPreTrainedModel"),Vk=r("forward method, overrides the "),sl=n("code"),Jk=r("__call__"),Xk=r(" special method."),Kk=d(),m(tn.$$.fragment),Zk=d(),rl=n("p"),Yk=r("Example:"),eb=d(),m(Ns.$$.fragment),tb=d(),Tt=n("div"),m(Ds.$$.fragment),ob=d(),il=n("p"),nb=r("Example:"),ab=d(),m(Ls.$$.fragment),sb=d(),wt=n("div"),m(Gs.$$.fragment),rb=d(),dl=n("p"),ib=r("Example:"),db=d(),m(Ws.$$.fragment),this.h()},l(o){const h=YT('[data-svelte="svelte-1phssyn"]',document.head);p=a(h,"META",{name:!0,content:!0}),h.forEach(t),q=l(o),y=a(o,"H1",{class:!0});var Rs=s(y);w=a(Rs,"A",{id:!0,class:!0,href:!0});var ll=s(w);x=a(ll,"SPAN",{});var cl=s(x);f(T.$$.fragment,cl),cl.forEach(t),ll.forEach(t),v=l(Rs),B=a(Rs,"SPAN",{});var pl=s(B);ne=i(pl,"BART"),pl.forEach(t),Rs.forEach(t),A=l(o),$=a(o,"P",{});var on=s($);le=a(on,"STRONG",{});var hl=s(le);_e=i(hl,"DISCLAIMER:"),hl.forEach(t),Ke=i(on," If you see something strange, file a "),ge=a(on,"A",{href:!0,rel:!0});var ul=s(ge);ke=i(ul,"Github Issue"),ul.forEach(t),Ze=i(on,` and assign
@patrickvonplaten`),on.forEach(t),Je=l(o),H=a(o,"H2",{class:!0});var Us=s(H);N=a(Us,"A",{id:!0,class:!0,href:!0});var ml=s(N);Le=a(ml,"SPAN",{});var fl=s(Le);f(ae.$$.fragment,fl),fl.forEach(t),ml.forEach(t),C=l(Us),S=a(Us,"SPAN",{});var _l=s(S);Ye=i(_l,"Overview"),_l.forEach(t),Us.forEach(t),ce=l(o),pe=a(o,"P",{});var Hs=s(pe);et=i(Hs,"The Bart model was proposed in "),Q=a(Hs,"A",{href:!0,rel:!0});var gl=s(Q);tt=i(gl,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),gl.forEach(t),ot=i(Hs,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Hs.forEach(t),D=l(o),Be=a(o,"P",{});var kl=s(Be);be=i(kl,"According to the abstract,"),kl.forEach(t),Xe=l(o),X=a(o,"UL",{});var Tr=s(X);se=a(Tr,"LI",{});var hb=s(se);nt=i(hb,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),hb.forEach(t),at=l(Tr),V=a(Tr,"LI",{});var ub=s(V);st=i(ub,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ub.forEach(t),ye=l(Tr),Ge=a(Tr,"LI",{});var mb=s(Ge);z=i(mb,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),mb.forEach(t),Tr.forEach(t),M=l(o),U=a(o,"P",{});var wr=s(U);St=i(wr,"This model was contributed by "),We=a(wr,"A",{href:!0,rel:!0});var fb=s(We);re=i(fb,"sshleifer"),fb.forEach(t),It=i(wr,". The Authors\u2019 code can be found "),Re=a(wr,"A",{href:!0,rel:!0});var _b=s(Re);Ot=i(_b,"here"),_b.forEach(t),ie=i(wr,"."),wr.forEach(t),he=l(o),ve=a(o,"H3",{class:!0});var tc=s(ve);Fe=a(tc,"A",{id:!0,class:!0,href:!0});var gb=s(Fe);de=a(gb,"SPAN",{});var kb=s(de);f(Ue.$$.fragment,kb),kb.forEach(t),gb.forEach(t),Nt=l(tc),He=a(tc,"SPAN",{});var bb=s(He);Dt=i(bb,"Examples"),bb.forEach(t),tc.forEach(t),yl=l(o),ht=a(o,"UL",{});var xr=s(ht);hn=a(xr,"LI",{});var oc=s(hn);Xc=i(oc,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),un=a(oc,"A",{href:!0,rel:!0});var yb=s(un);Kc=i(yb,"examples/pytorch/summarization/"),yb.forEach(t),Zc=i(oc,"."),oc.forEach(t),Yc=l(xr),rt=a(xr,"LI",{});var nn=s(rt);ep=i(nn,"An example of how to train "),Qs=a(nn,"A",{href:!0});var vb=s(Qs);tp=i(vb,"BartForConditionalGeneration"),vb.forEach(t),op=i(nn," with a Hugging Face "),Yr=a(nn,"CODE",{});var Tb=s(Yr);np=i(Tb,"datasets"),Tb.forEach(t),ap=i(nn,`
object can be found in this `),mn=a(nn,"A",{href:!0,rel:!0});var wb=s(mn);sp=i(wb,"forum discussion"),wb.forEach(t),rp=i(nn,"."),nn.forEach(t),ip=l(xr),vo=a(xr,"LI",{});var bl=s(vo);fn=a(bl,"A",{href:!0,rel:!0});var xb=s(fn);dp=i(xb,"Distilled checkpoints"),xb.forEach(t),lp=i(bl," are described in this "),_n=a(bl,"A",{href:!0,rel:!0});var zb=s(_n);cp=i(zb,"paper"),zb.forEach(t),pp=i(bl,"."),bl.forEach(t),xr.forEach(t),vl=l(o),Lt=a(o,"H2",{class:!0});var nc=s(Lt);To=a(nc,"A",{id:!0,class:!0,href:!0});var qb=s(To);ei=a(qb,"SPAN",{});var Bb=s(ei);f(gn.$$.fragment,Bb),Bb.forEach(t),qb.forEach(t),hp=l(nc),ti=a(nc,"SPAN",{});var Fb=s(ti);up=i(Fb,"Implementation Notes"),Fb.forEach(t),nc.forEach(t),Tl=l(o),$e=a(o,"UL",{});var xt=s($e);it=a(xt,"LI",{});var an=s(it);mp=i(an,"Bart doesn\u2019t use "),oi=a(an,"CODE",{});var $b=s(oi);fp=i($b,"token_type_ids"),$b.forEach(t),_p=i(an," for sequence classification. Use "),Vs=a(an,"A",{href:!0});var jb=s(Vs);gp=i(jb,"BartTokenizer"),jb.forEach(t),kp=i(an,` or
`),Js=a(an,"A",{href:!0});var Mb=s(Js);bp=i(Mb,"encode()"),Mb.forEach(t),yp=i(an," to get the proper splitting."),an.forEach(t),vp=l(xt),Gt=a(xt,"LI",{});var zr=s(Gt);Tp=i(zr,"The forward pass of "),Xs=a(zr,"A",{href:!0});var Eb=s(Xs);wp=i(Eb,"BartModel"),Eb.forEach(t),xp=i(zr," will create the "),ni=a(zr,"CODE",{});var Pb=s(ni);zp=i(Pb,"decoder_input_ids"),Pb.forEach(t),qp=i(zr,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),zr.forEach(t),Bp=l(xt),Wt=a(xt,"LI",{});var qr=s(Wt);Fp=i(qr,`Model predictions are intended to be identical to the original implementation when
`),ai=a(qr,"CODE",{});var Cb=s(ai);$p=i(Cb,"force_bos_token_to_be_generated=True"),Cb.forEach(t),jp=i(qr,`. This only works, however, if the string you pass to
`),si=a(qr,"CODE",{});var Ab=s(si);Mp=i(Ab,"fairseq.encode"),Ab.forEach(t),Ep=i(qr," starts with a space."),qr.forEach(t),Pp=l(xt),Ks=a(xt,"LI",{});var lb=s(Ks);Zs=a(lb,"A",{href:!0});var Sb=s(Zs);Cp=i(Sb,"generate()"),Sb.forEach(t),Ap=i(lb,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),lb.forEach(t),Sp=l(xt),Rt=a(xt,"LI",{});var Br=s(Rt);Ip=i(Br,"Models that load the "),ri=a(Br,"EM",{});var Ib=s(ri);Op=i(Ib,"facebook/bart-large-cnn"),Ib.forEach(t),Np=i(Br," weights will not have a "),ii=a(Br,"CODE",{});var Ob=s(ii);Dp=i(Ob,"mask_token_id"),Ob.forEach(t),Lp=i(Br,`, or be able to perform
mask-filling tasks.`),Br.forEach(t),xt.forEach(t),wl=l(o),Ut=a(o,"H2",{class:!0});var ac=s(Ut);wo=a(ac,"A",{id:!0,class:!0,href:!0});var Nb=s(wo);di=a(Nb,"SPAN",{});var Db=s(di);f(kn.$$.fragment,Db),Db.forEach(t),Nb.forEach(t),Gp=l(ac),li=a(ac,"SPAN",{});var Lb=s(li);Wp=i(Lb,"Mask Filling"),Lb.forEach(t),ac.forEach(t),xl=l(o),ut=a(o,"P",{});var Fr=s(ut);Rp=i(Fr,"The "),ci=a(Fr,"CODE",{});var Gb=s(ci);Up=i(Gb,"facebook/bart-base"),Gb.forEach(t),Hp=i(Fr," and "),pi=a(Fr,"CODE",{});var Wb=s(pi);Qp=i(Wb,"facebook/bart-large"),Wb.forEach(t),Vp=i(Fr," checkpoints can be used to fill multi-token masks."),Fr.forEach(t),zl=l(o),f(bn.$$.fragment,o),ql=l(o),Ht=a(o,"H2",{class:!0});var sc=s(Ht);xo=a(sc,"A",{id:!0,class:!0,href:!0});var Rb=s(xo);hi=a(Rb,"SPAN",{});var Ub=s(hi);f(yn.$$.fragment,Ub),Ub.forEach(t),Rb.forEach(t),Jp=l(sc),ui=a(sc,"SPAN",{});var Hb=s(ui);Xp=i(Hb,"BartConfig"),Hb.forEach(t),sc.forEach(t),Bl=l(o),Te=a(o,"DIV",{class:!0});var zt=s(Te);f(vn.$$.fragment,zt),Kp=l(zt),Qt=a(zt,"P",{});var $r=s(Qt);Zp=i($r,"This is the configuration class to store the configuration of a "),Ys=a($r,"A",{href:!0});var Qb=s(Ys);Yp=i(Qb,"BartModel"),Qb.forEach(t),eh=i($r,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Tn=a($r,"A",{href:!0,rel:!0});var Vb=s(Tn);th=i(Vb,"facebook/bart-large"),Vb.forEach(t),oh=i($r," architecture."),$r.forEach(t),nh=l(zt),Vt=a(zt,"P",{});var jr=s(Vt);ah=i(jr,"Configuration objects inherit from "),er=a(jr,"A",{href:!0});var Jb=s(er);sh=i(Jb,"PretrainedConfig"),Jb.forEach(t),rh=i(jr,` and can be used to control the model outputs. Read the
documentation from `),tr=a(jr,"A",{href:!0});var Xb=s(tr);ih=i(Xb,"PretrainedConfig"),Xb.forEach(t),dh=i(jr," for more information."),jr.forEach(t),lh=l(zt),mi=a(zt,"P",{});var Kb=s(mi);ch=i(Kb,"Example:"),Kb.forEach(t),ph=l(zt),f(wn.$$.fragment,zt),zt.forEach(t),Fl=l(o),Jt=a(o,"H2",{class:!0});var rc=s(Jt);zo=a(rc,"A",{id:!0,class:!0,href:!0});var Zb=s(zo);fi=a(Zb,"SPAN",{});var Yb=s(fi);f(xn.$$.fragment,Yb),Yb.forEach(t),Zb.forEach(t),hh=l(rc),_i=a(rc,"SPAN",{});var ey=s(_i);uh=i(ey,"BartTokenizer"),ey.forEach(t),rc.forEach(t),$l=l(o),E=a(o,"DIV",{class:!0});var L=s(E);f(zn.$$.fragment,L),mh=l(L),gi=a(L,"P",{});var ty=s(gi);fh=i(ty,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),ty.forEach(t),_h=l(L),ki=a(L,"P",{});var oy=s(ki);gh=i(oy,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),oy.forEach(t),kh=l(L),f(qn.$$.fragment,L),bh=l(L),Bn=a(L,"P",{});var ic=s(Bn);yh=i(ic,"You can get around that behavior by passing "),bi=a(ic,"CODE",{});var ny=s(bi);vh=i(ny,"add_prefix_space=True"),ny.forEach(t),Th=i(ic,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),ic.forEach(t),wh=l(L),f(qo.$$.fragment,L),xh=l(L),Fn=a(L,"P",{});var dc=s(Fn);zh=i(dc,"This tokenizer inherits from "),or=a(dc,"A",{href:!0});var ay=s(or);qh=i(ay,"PreTrainedTokenizer"),ay.forEach(t),Bh=i(dc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),dc.forEach(t),Fh=l(L),mt=a(L,"DIV",{class:!0});var Mr=s(mt);f($n.$$.fragment,Mr),$h=l(Mr),yi=a(Mr,"P",{});var sy=s(yi);jh=i(sy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),sy.forEach(t),Mh=l(Mr),jn=a(Mr,"UL",{});var lc=s(jn);nr=a(lc,"LI",{});var cb=s(nr);Eh=i(cb,"single sequence: "),vi=a(cb,"CODE",{});var ry=s(vi);Ph=i(ry,"<s> X </s>"),ry.forEach(t),cb.forEach(t),Ch=l(lc),ar=a(lc,"LI",{});var pb=s(ar);Ah=i(pb,"pair of sequences: "),Ti=a(pb,"CODE",{});var iy=s(Ti);Sh=i(iy,"<s> A </s></s> B </s>"),iy.forEach(t),pb.forEach(t),lc.forEach(t),Mr.forEach(t),Ih=l(L),Bo=a(L,"DIV",{class:!0});var cc=s(Bo);f(Mn.$$.fragment,cc),Oh=l(cc),wi=a(cc,"P",{});var dy=s(wi);Nh=i(dy,"Converts a sequence of tokens (string) in a single string."),dy.forEach(t),cc.forEach(t),Dh=l(L),Fo=a(L,"DIV",{class:!0});var pc=s(Fo);f(En.$$.fragment,pc),Lh=l(pc),xi=a(pc,"P",{});var ly=s(xi);Gh=i(ly,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),ly.forEach(t),pc.forEach(t),Wh=l(L),$o=a(L,"DIV",{class:!0});var hc=s($o);f(Pn.$$.fragment,hc),Rh=l(hc),Cn=a(hc,"P",{});var uc=s(Cn);Uh=i(uc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),zi=a(uc,"CODE",{});var cy=s(zi);Hh=i(cy,"prepare_for_model"),cy.forEach(t),Qh=i(uc," method."),uc.forEach(t),hc.forEach(t),L.forEach(t),jl=l(o),Xt=a(o,"H2",{class:!0});var mc=s(Xt);jo=a(mc,"A",{id:!0,class:!0,href:!0});var py=s(jo);qi=a(py,"SPAN",{});var hy=s(qi);f(An.$$.fragment,hy),hy.forEach(t),py.forEach(t),Vh=l(mc),Bi=a(mc,"SPAN",{});var uy=s(Bi);Jh=i(uy,"BartTokenizerFast"),uy.forEach(t),mc.forEach(t),Ml=l(o),G=a(o,"DIV",{class:!0});var ue=s(G);f(Sn.$$.fragment,ue),Xh=l(ue),In=a(ue,"P",{});var fc=s(In);Kh=i(fc,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Fi=a(fc,"EM",{});var my=s(Fi);Zh=i(my,"tokenizers"),my.forEach(t),Yh=i(fc,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),fc.forEach(t),eu=l(ue),$i=a(ue,"P",{});var fy=s($i);tu=i(fy,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),fy.forEach(t),ou=l(ue),f(On.$$.fragment,ue),nu=l(ue),Nn=a(ue,"P",{});var _c=s(Nn);au=i(_c,"You can get around that behavior by passing "),ji=a(_c,"CODE",{});var _y=s(ji);su=i(_y,"add_prefix_space=True"),_y.forEach(t),ru=i(_c,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),_c.forEach(t),iu=l(ue),f(Mo.$$.fragment,ue),du=l(ue),Dn=a(ue,"P",{});var gc=s(Dn);lu=i(gc,"This tokenizer inherits from "),sr=a(gc,"A",{href:!0});var gy=s(sr);cu=i(gy,"PreTrainedTokenizerFast"),gy.forEach(t),pu=i(gc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),gc.forEach(t),hu=l(ue),Eo=a(ue,"DIV",{class:!0});var kc=s(Eo);f(Ln.$$.fragment,kc),uu=l(kc),Mi=a(kc,"P",{});var ky=s(Mi);mu=i(ky,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),ky.forEach(t),kc.forEach(t),ue.forEach(t),El=l(o),Kt=a(o,"H2",{class:!0});var bc=s(Kt);Po=a(bc,"A",{id:!0,class:!0,href:!0});var by=s(Po);Ei=a(by,"SPAN",{});var yy=s(Ei);f(Gn.$$.fragment,yy),yy.forEach(t),by.forEach(t),fu=l(bc),Pi=a(bc,"SPAN",{});var vy=s(Pi);_u=i(vy,"BartModel"),vy.forEach(t),bc.forEach(t),Pl=l(o),Qe=a(o,"DIV",{class:!0});var sn=s(Qe);f(Wn.$$.fragment,sn),gu=l(sn),Rn=a(sn,"P",{});var yc=s(Rn);ku=i(yc,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rr=a(yc,"A",{href:!0});var Ty=s(rr);bu=i(Ty,"PreTrainedModel"),Ty.forEach(t),yu=i(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),vu=l(sn),Un=a(sn,"P",{});var vc=s(Un);Tu=i(vc,"This model is also a PyTorch "),Hn=a(vc,"A",{href:!0,rel:!0});var wy=s(Hn);wu=i(wy,"torch.nn.Module"),wy.forEach(t),xu=i(vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc.forEach(t),zu=l(sn),je=a(sn,"DIV",{class:!0});var qt=s(je);f(Qn.$$.fragment,qt),qu=l(qt),Zt=a(qt,"P",{});var Er=s(Zt);Bu=i(Er,"The "),ir=a(Er,"A",{href:!0});var xy=s(ir);Fu=i(xy,"BartModel"),xy.forEach(t),$u=i(Er," forward method, overrides the "),Ci=a(Er,"CODE",{});var zy=s(Ci);ju=i(zy,"__call__"),zy.forEach(t),Mu=i(Er," special method."),Er.forEach(t),Eu=l(qt),f(Co.$$.fragment,qt),Pu=l(qt),Ai=a(qt,"P",{});var qy=s(Ai);Cu=i(qy,"Example:"),qy.forEach(t),Au=l(qt),f(Vn.$$.fragment,qt),qt.forEach(t),sn.forEach(t),Cl=l(o),Yt=a(o,"H2",{class:!0});var Tc=s(Yt);Ao=a(Tc,"A",{id:!0,class:!0,href:!0});var By=s(Ao);Si=a(By,"SPAN",{});var Fy=s(Si);f(Jn.$$.fragment,Fy),Fy.forEach(t),By.forEach(t),Su=l(Tc),Ii=a(Tc,"SPAN",{});var $y=s(Ii);Iu=i($y,"BartForConditionalGeneration"),$y.forEach(t),Tc.forEach(t),Al=l(o),Ve=a(o,"DIV",{class:!0});var rn=s(Ve);f(Xn.$$.fragment,rn),Ou=l(rn),Kn=a(rn,"P",{});var wc=s(Kn);Nu=i(wc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),dr=a(wc,"A",{href:!0});var jy=s(dr);Du=i(jy,"PreTrainedModel"),jy.forEach(t),Lu=i(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),Gu=l(rn),Zn=a(rn,"P",{});var xc=s(Zn);Wu=i(xc,"This model is also a PyTorch "),Yn=a(xc,"A",{href:!0,rel:!0});var My=s(Yn);Ru=i(My,"torch.nn.Module"),My.forEach(t),Uu=i(xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xc.forEach(t),Hu=l(rn),K=a(rn,"DIV",{class:!0});var Se=s(K);f(ea.$$.fragment,Se),Qu=l(Se),eo=a(Se,"P",{});var Pr=s(eo);Vu=i(Pr,"The "),lr=a(Pr,"A",{href:!0});var Ey=s(lr);Ju=i(Ey,"BartForConditionalGeneration"),Ey.forEach(t),Xu=i(Pr," forward method, overrides the "),Oi=a(Pr,"CODE",{});var Py=s(Oi);Ku=i(Py,"__call__"),Py.forEach(t),Zu=i(Pr," special method."),Pr.forEach(t),Yu=l(Se),f(So.$$.fragment,Se),em=l(Se),Ni=a(Se,"P",{});var Cy=s(Ni);tm=i(Cy,"Summarization example:"),Cy.forEach(t),om=l(Se),f(ta.$$.fragment,Se),nm=l(Se),Di=a(Se,"P",{});var Ay=s(Di);am=i(Ay,"Mask filling example:"),Ay.forEach(t),sm=l(Se),f(oa.$$.fragment,Se),Se.forEach(t),rn.forEach(t),Sl=l(o),to=a(o,"H2",{class:!0});var zc=s(to);Io=a(zc,"A",{id:!0,class:!0,href:!0});var Sy=s(Io);Li=a(Sy,"SPAN",{});var Iy=s(Li);f(na.$$.fragment,Iy),Iy.forEach(t),Sy.forEach(t),rm=l(zc),Gi=a(zc,"SPAN",{});var Oy=s(Gi);im=i(Oy,"BartForSequenceClassification"),Oy.forEach(t),zc.forEach(t),Il=l(o),we=a(o,"DIV",{class:!0});var Bt=s(we);f(aa.$$.fragment,Bt),dm=l(Bt),Wi=a(Bt,"P",{});var Ny=s(Wi);lm=i(Ny,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Ny.forEach(t),cm=l(Bt),sa=a(Bt,"P",{});var qc=s(sa);pm=i(qc,"This model inherits from "),cr=a(qc,"A",{href:!0});var Dy=s(cr);hm=i(Dy,"PreTrainedModel"),Dy.forEach(t),um=i(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),mm=l(Bt),ra=a(Bt,"P",{});var Bc=s(ra);fm=i(Bc,"This model is also a PyTorch "),ia=a(Bc,"A",{href:!0,rel:!0});var Ly=s(ia);_m=i(Ly,"torch.nn.Module"),Ly.forEach(t),gm=i(Bc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bc.forEach(t),km=l(Bt),Z=a(Bt,"DIV",{class:!0});var Ie=s(Z);f(da.$$.fragment,Ie),bm=l(Ie),oo=a(Ie,"P",{});var Cr=s(oo);ym=i(Cr,"The "),pr=a(Cr,"A",{href:!0});var Gy=s(pr);vm=i(Gy,"BartForSequenceClassification"),Gy.forEach(t),Tm=i(Cr," forward method, overrides the "),Ri=a(Cr,"CODE",{});var Wy=s(Ri);wm=i(Wy,"__call__"),Wy.forEach(t),xm=i(Cr," special method."),Cr.forEach(t),zm=l(Ie),f(Oo.$$.fragment,Ie),qm=l(Ie),Ui=a(Ie,"P",{});var Ry=s(Ui);Bm=i(Ry,"Example of single-label classification:"),Ry.forEach(t),Fm=l(Ie),f(la.$$.fragment,Ie),$m=l(Ie),Hi=a(Ie,"P",{});var Uy=s(Hi);jm=i(Uy,"Example of multi-label classification:"),Uy.forEach(t),Mm=l(Ie),f(ca.$$.fragment,Ie),Ie.forEach(t),Bt.forEach(t),Ol=l(o),no=a(o,"H2",{class:!0});var Fc=s(no);No=a(Fc,"A",{id:!0,class:!0,href:!0});var Hy=s(No);Qi=a(Hy,"SPAN",{});var Qy=s(Qi);f(pa.$$.fragment,Qy),Qy.forEach(t),Hy.forEach(t),Em=l(Fc),Vi=a(Fc,"SPAN",{});var Vy=s(Vi);Pm=i(Vy,"BartForQuestionAnswering"),Vy.forEach(t),Fc.forEach(t),Nl=l(o),xe=a(o,"DIV",{class:!0});var Ft=s(xe);f(ha.$$.fragment,Ft),Cm=l(Ft),ao=a(Ft,"P",{});var Ar=s(ao);Am=i(Ar,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ji=a(Ar,"CODE",{});var Jy=s(Ji);Sm=i(Jy,"span start logits"),Jy.forEach(t),Im=i(Ar," and "),Xi=a(Ar,"CODE",{});var Xy=s(Xi);Om=i(Xy,"span end logits"),Xy.forEach(t),Nm=i(Ar,")."),Ar.forEach(t),Dm=l(Ft),ua=a(Ft,"P",{});var $c=s(ua);Lm=i($c,"This model inherits from "),hr=a($c,"A",{href:!0});var Ky=s(hr);Gm=i(Ky,"PreTrainedModel"),Ky.forEach(t),Wm=i($c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c.forEach(t),Rm=l(Ft),ma=a(Ft,"P",{});var jc=s(ma);Um=i(jc,"This model is also a PyTorch "),fa=a(jc,"A",{href:!0,rel:!0});var Zy=s(fa);Hm=i(Zy,"torch.nn.Module"),Zy.forEach(t),Qm=i(jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jc.forEach(t),Vm=l(Ft),Me=a(Ft,"DIV",{class:!0});var $t=s(Me);f(_a.$$.fragment,$t),Jm=l($t),so=a($t,"P",{});var Sr=s(so);Xm=i(Sr,"The "),ur=a(Sr,"A",{href:!0});var Yy=s(ur);Km=i(Yy,"BartForQuestionAnswering"),Yy.forEach(t),Zm=i(Sr," forward method, overrides the "),Ki=a(Sr,"CODE",{});var ev=s(Ki);Ym=i(ev,"__call__"),ev.forEach(t),ef=i(Sr," special method."),Sr.forEach(t),tf=l($t),f(Do.$$.fragment,$t),of=l($t),Zi=a($t,"P",{});var tv=s(Zi);nf=i(tv,"Example:"),tv.forEach(t),af=l($t),f(ga.$$.fragment,$t),$t.forEach(t),Ft.forEach(t),Dl=l(o),ro=a(o,"H2",{class:!0});var Mc=s(ro);Lo=a(Mc,"A",{id:!0,class:!0,href:!0});var ov=s(Lo);Yi=a(ov,"SPAN",{});var nv=s(Yi);f(ka.$$.fragment,nv),nv.forEach(t),ov.forEach(t),sf=l(Mc),ed=a(Mc,"SPAN",{});var av=s(ed);rf=i(av,"BartForCausalLM"),av.forEach(t),Mc.forEach(t),Ll=l(o),ba=a(o,"DIV",{class:!0});var sv=s(ba);ft=a(sv,"DIV",{class:!0});var Ir=s(ft);f(ya.$$.fragment,Ir),df=l(Ir),td=a(Ir,"P",{});var rv=s(td);lf=i(rv,"Example:"),rv.forEach(t),cf=l(Ir),f(va.$$.fragment,Ir),Ir.forEach(t),sv.forEach(t),Gl=l(o),io=a(o,"H2",{class:!0});var Ec=s(io);Go=a(Ec,"A",{id:!0,class:!0,href:!0});var iv=s(Go);od=a(iv,"SPAN",{});var dv=s(od);f(Ta.$$.fragment,dv),dv.forEach(t),iv.forEach(t),pf=l(Ec),nd=a(Ec,"SPAN",{});var lv=s(nd);hf=i(lv,"TFBartModel"),lv.forEach(t),Ec.forEach(t),Wl=l(o),ze=a(o,"DIV",{class:!0});var jt=s(ze);f(wa.$$.fragment,jt),uf=l(jt),xa=a(jt,"P",{});var Pc=s(xa);mf=i(Pc,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),mr=a(Pc,"A",{href:!0});var cv=s(mr);ff=i(cv,"TFPreTrainedModel"),cv.forEach(t),_f=i(Pc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc.forEach(t),gf=l(jt),za=a(jt,"P",{});var Cc=s(za);kf=i(Cc,"This model is also a "),qa=a(Cc,"A",{href:!0,rel:!0});var pv=s(qa);bf=i(pv,"tf.keras.Model"),pv.forEach(t),yf=i(Cc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cc.forEach(t),vf=l(jt),f(Wo.$$.fragment,jt),Tf=l(jt),Ee=a(jt,"DIV",{class:!0});var Mt=s(Ee);f(Ba.$$.fragment,Mt),wf=l(Mt),lo=a(Mt,"P",{});var Or=s(lo);xf=i(Or,"The "),fr=a(Or,"A",{href:!0});var hv=s(fr);zf=i(hv,"TFBartModel"),hv.forEach(t),qf=i(Or," forward method, overrides the "),ad=a(Or,"CODE",{});var uv=s(ad);Bf=i(uv,"__call__"),uv.forEach(t),Ff=i(Or," special method."),Or.forEach(t),$f=l(Mt),f(Ro.$$.fragment,Mt),jf=l(Mt),sd=a(Mt,"P",{});var mv=s(sd);Mf=i(mv,"Example:"),mv.forEach(t),Ef=l(Mt),f(Fa.$$.fragment,Mt),Mt.forEach(t),jt.forEach(t),Rl=l(o),co=a(o,"H2",{class:!0});var Ac=s(co);Uo=a(Ac,"A",{id:!0,class:!0,href:!0});var fv=s(Uo);rd=a(fv,"SPAN",{});var _v=s(rd);f($a.$$.fragment,_v),_v.forEach(t),fv.forEach(t),Pf=l(Ac),id=a(Ac,"SPAN",{});var gv=s(id);Cf=i(gv,"TFBartForConditionalGeneration"),gv.forEach(t),Ac.forEach(t),Ul=l(o),qe=a(o,"DIV",{class:!0});var Et=s(qe);f(ja.$$.fragment,Et),Af=l(Et),Ma=a(Et,"P",{});var Sc=s(Ma);Sf=i(Sc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),_r=a(Sc,"A",{href:!0});var kv=s(_r);If=i(kv,"TFPreTrainedModel"),kv.forEach(t),Of=i(Sc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sc.forEach(t),Nf=l(Et),Ea=a(Et,"P",{});var Ic=s(Ea);Df=i(Ic,"This model is also a "),Pa=a(Ic,"A",{href:!0,rel:!0});var bv=s(Pa);Lf=i(bv,"tf.keras.Model"),bv.forEach(t),Gf=i(Ic,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ic.forEach(t),Wf=l(Et),f(Ho.$$.fragment,Et),Rf=l(Et),Y=a(Et,"DIV",{class:!0});var Oe=s(Y);f(Ca.$$.fragment,Oe),Uf=l(Oe),po=a(Oe,"P",{});var Nr=s(po);Hf=i(Nr,"The "),gr=a(Nr,"A",{href:!0});var yv=s(gr);Qf=i(yv,"TFBartForConditionalGeneration"),yv.forEach(t),Vf=i(Nr," forward method, overrides the "),dd=a(Nr,"CODE",{});var vv=s(dd);Jf=i(vv,"__call__"),vv.forEach(t),Xf=i(Nr," special method."),Nr.forEach(t),Kf=l(Oe),f(Qo.$$.fragment,Oe),Zf=l(Oe),ld=a(Oe,"P",{});var Tv=s(ld);Yf=i(Tv,"Summarization example:"),Tv.forEach(t),e_=l(Oe),f(Aa.$$.fragment,Oe),t_=l(Oe),cd=a(Oe,"P",{});var wv=s(cd);o_=i(wv,"Mask filling example:"),wv.forEach(t),n_=l(Oe),f(Sa.$$.fragment,Oe),Oe.forEach(t),Et.forEach(t),Hl=l(o),ho=a(o,"H2",{class:!0});var Oc=s(ho);Vo=a(Oc,"A",{id:!0,class:!0,href:!0});var xv=s(Vo);pd=a(xv,"SPAN",{});var zv=s(pd);f(Ia.$$.fragment,zv),zv.forEach(t),xv.forEach(t),a_=l(Oc),hd=a(Oc,"SPAN",{});var qv=s(hd);s_=i(qv,"FlaxBartModel"),qv.forEach(t),Oc.forEach(t),Ql=l(o),W=a(o,"DIV",{class:!0});var me=s(W);f(Oa.$$.fragment,me),r_=l(me),Na=a(me,"P",{});var Nc=s(Na);i_=i(Nc,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),kr=a(Nc,"A",{href:!0});var Bv=s(kr);d_=i(Bv,"FlaxPreTrainedModel"),Bv.forEach(t),l_=i(Nc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc.forEach(t),c_=l(me),Da=a(me,"P",{});var Dc=s(Da);p_=i(Dc,`This model is also a Flax Linen
`),La=a(Dc,"A",{href:!0,rel:!0});var Fv=s(La);h_=i(Fv,"flax.nn.Module"),Fv.forEach(t),u_=i(Dc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Dc.forEach(t),m_=l(me),ud=a(me,"P",{});var $v=s(ud);f_=i($v,"Finally, this model supports inherent JAX features such as:"),$v.forEach(t),__=l(me),dt=a(me,"UL",{});var dn=s(dt);md=a(dn,"LI",{});var jv=s(md);Ga=a(jv,"A",{href:!0,rel:!0});var Mv=s(Ga);g_=i(Mv,"Just-In-Time (JIT) compilation"),Mv.forEach(t),jv.forEach(t),k_=l(dn),fd=a(dn,"LI",{});var Ev=s(fd);Wa=a(Ev,"A",{href:!0,rel:!0});var Pv=s(Wa);b_=i(Pv,"Automatic Differentiation"),Pv.forEach(t),Ev.forEach(t),y_=l(dn),_d=a(dn,"LI",{});var Cv=s(_d);Ra=a(Cv,"A",{href:!0,rel:!0});var Av=s(Ra);v_=i(Av,"Vectorization"),Av.forEach(t),Cv.forEach(t),T_=l(dn),gd=a(dn,"LI",{});var Sv=s(gd);Ua=a(Sv,"A",{href:!0,rel:!0});var Iv=s(Ua);w_=i(Iv,"Parallelization"),Iv.forEach(t),Sv.forEach(t),dn.forEach(t),x_=l(me),Pe=a(me,"DIV",{class:!0});var Pt=s(Pe);f(Ha.$$.fragment,Pt),z_=l(Pt),uo=a(Pt,"P",{});var Dr=s(uo);q_=i(Dr,"The "),kd=a(Dr,"CODE",{});var Ov=s(kd);B_=i(Ov,"FlaxBartPreTrainedModel"),Ov.forEach(t),F_=i(Dr,"forward method, overrides the "),bd=a(Dr,"CODE",{});var Nv=s(bd);$_=i(Nv,"__call__"),Nv.forEach(t),j_=i(Dr," special method."),Dr.forEach(t),M_=l(Pt),f(Jo.$$.fragment,Pt),E_=l(Pt),yd=a(Pt,"P",{});var Dv=s(yd);P_=i(Dv,"Example:"),Dv.forEach(t),C_=l(Pt),f(Qa.$$.fragment,Pt),Pt.forEach(t),A_=l(me),_t=a(me,"DIV",{class:!0});var Lr=s(_t);f(Va.$$.fragment,Lr),S_=l(Lr),vd=a(Lr,"P",{});var Lv=s(vd);I_=i(Lv,"Example:"),Lv.forEach(t),O_=l(Lr),f(Ja.$$.fragment,Lr),Lr.forEach(t),N_=l(me),gt=a(me,"DIV",{class:!0});var Gr=s(gt);f(Xa.$$.fragment,Gr),D_=l(Gr),Td=a(Gr,"P",{});var Gv=s(Td);L_=i(Gv,"Example:"),Gv.forEach(t),G_=l(Gr),f(Ka.$$.fragment,Gr),Gr.forEach(t),me.forEach(t),Vl=l(o),mo=a(o,"H2",{class:!0});var Lc=s(mo);Xo=a(Lc,"A",{id:!0,class:!0,href:!0});var Wv=s(Xo);wd=a(Wv,"SPAN",{});var Rv=s(wd);f(Za.$$.fragment,Rv),Rv.forEach(t),Wv.forEach(t),W_=l(Lc),xd=a(Lc,"SPAN",{});var Uv=s(xd);R_=i(Uv,"FlaxBartForConditionalGeneration"),Uv.forEach(t),Lc.forEach(t),Jl=l(o),R=a(o,"DIV",{class:!0});var fe=s(R);f(Ya.$$.fragment,fe),U_=l(fe),es=a(fe,"P",{});var Gc=s(es);H_=i(Gc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),br=a(Gc,"A",{href:!0});var Hv=s(br);Q_=i(Hv,"FlaxPreTrainedModel"),Hv.forEach(t),V_=i(Gc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc.forEach(t),J_=l(fe),ts=a(fe,"P",{});var Wc=s(ts);X_=i(Wc,`This model is also a Flax Linen
`),os=a(Wc,"A",{href:!0,rel:!0});var Qv=s(os);K_=i(Qv,"flax.nn.Module"),Qv.forEach(t),Z_=i(Wc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wc.forEach(t),Y_=l(fe),zd=a(fe,"P",{});var Vv=s(zd);eg=i(Vv,"Finally, this model supports inherent JAX features such as:"),Vv.forEach(t),tg=l(fe),lt=a(fe,"UL",{});var ln=s(lt);qd=a(ln,"LI",{});var Jv=s(qd);ns=a(Jv,"A",{href:!0,rel:!0});var Xv=s(ns);og=i(Xv,"Just-In-Time (JIT) compilation"),Xv.forEach(t),Jv.forEach(t),ng=l(ln),Bd=a(ln,"LI",{});var Kv=s(Bd);as=a(Kv,"A",{href:!0,rel:!0});var Zv=s(as);ag=i(Zv,"Automatic Differentiation"),Zv.forEach(t),Kv.forEach(t),sg=l(ln),Fd=a(ln,"LI",{});var Yv=s(Fd);ss=a(Yv,"A",{href:!0,rel:!0});var eT=s(ss);rg=i(eT,"Vectorization"),eT.forEach(t),Yv.forEach(t),ig=l(ln),$d=a(ln,"LI",{});var tT=s($d);rs=a(tT,"A",{href:!0,rel:!0});var oT=s(rs);dg=i(oT,"Parallelization"),oT.forEach(t),tT.forEach(t),ln.forEach(t),lg=l(fe),ee=a(fe,"DIV",{class:!0});var Ne=s(ee);f(is.$$.fragment,Ne),cg=l(Ne),fo=a(Ne,"P",{});var Wr=s(fo);pg=i(Wr,"The "),jd=a(Wr,"CODE",{});var nT=s(jd);hg=i(nT,"FlaxBartPreTrainedModel"),nT.forEach(t),ug=i(Wr,"forward method, overrides the "),Md=a(Wr,"CODE",{});var aT=s(Md);mg=i(aT,"__call__"),aT.forEach(t),fg=i(Wr," special method."),Wr.forEach(t),_g=l(Ne),f(Ko.$$.fragment,Ne),gg=l(Ne),Ed=a(Ne,"P",{});var sT=s(Ed);kg=i(sT,"Summarization example:"),sT.forEach(t),bg=l(Ne),f(ds.$$.fragment,Ne),yg=l(Ne),Pd=a(Ne,"P",{});var rT=s(Pd);vg=i(rT,"Mask filling example:"),rT.forEach(t),Tg=l(Ne),f(ls.$$.fragment,Ne),Ne.forEach(t),wg=l(fe),kt=a(fe,"DIV",{class:!0});var Rr=s(kt);f(cs.$$.fragment,Rr),xg=l(Rr),Cd=a(Rr,"P",{});var iT=s(Cd);zg=i(iT,"Example:"),iT.forEach(t),qg=l(Rr),f(ps.$$.fragment,Rr),Rr.forEach(t),Bg=l(fe),bt=a(fe,"DIV",{class:!0});var Ur=s(bt);f(hs.$$.fragment,Ur),Fg=l(Ur),Ad=a(Ur,"P",{});var dT=s(Ad);$g=i(dT,"Example:"),dT.forEach(t),jg=l(Ur),f(us.$$.fragment,Ur),Ur.forEach(t),fe.forEach(t),Xl=l(o),_o=a(o,"H2",{class:!0});var Rc=s(_o);Zo=a(Rc,"A",{id:!0,class:!0,href:!0});var lT=s(Zo);Sd=a(lT,"SPAN",{});var cT=s(Sd);f(ms.$$.fragment,cT),cT.forEach(t),lT.forEach(t),Mg=l(Rc),Id=a(Rc,"SPAN",{});var pT=s(Id);Eg=i(pT,"FlaxBartForSequenceClassification"),pT.forEach(t),Rc.forEach(t),Kl=l(o),I=a(o,"DIV",{class:!0});var te=s(I);f(fs.$$.fragment,te),Pg=l(te),Od=a(te,"P",{});var hT=s(Od);Cg=i(hT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),hT.forEach(t),Ag=l(te),_s=a(te,"P",{});var Uc=s(_s);Sg=i(Uc,"This model inherits from "),yr=a(Uc,"A",{href:!0});var uT=s(yr);Ig=i(uT,"FlaxPreTrainedModel"),uT.forEach(t),Og=i(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Ng=l(te),gs=a(te,"P",{});var Hc=s(gs);Dg=i(Hc,`This model is also a Flax Linen
`),ks=a(Hc,"A",{href:!0,rel:!0});var mT=s(ks);Lg=i(mT,"flax.nn.Module"),mT.forEach(t),Gg=i(Hc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hc.forEach(t),Wg=l(te),Nd=a(te,"P",{});var fT=s(Nd);Rg=i(fT,"Finally, this model supports inherent JAX features such as:"),fT.forEach(t),Ug=l(te),ct=a(te,"UL",{});var cn=s(ct);Dd=a(cn,"LI",{});var _T=s(Dd);bs=a(_T,"A",{href:!0,rel:!0});var gT=s(bs);Hg=i(gT,"Just-In-Time (JIT) compilation"),gT.forEach(t),_T.forEach(t),Qg=l(cn),Ld=a(cn,"LI",{});var kT=s(Ld);ys=a(kT,"A",{href:!0,rel:!0});var bT=s(ys);Vg=i(bT,"Automatic Differentiation"),bT.forEach(t),kT.forEach(t),Jg=l(cn),Gd=a(cn,"LI",{});var yT=s(Gd);vs=a(yT,"A",{href:!0,rel:!0});var vT=s(vs);Xg=i(vT,"Vectorization"),vT.forEach(t),yT.forEach(t),Kg=l(cn),Wd=a(cn,"LI",{});var TT=s(Wd);Ts=a(TT,"A",{href:!0,rel:!0});var wT=s(Ts);Zg=i(wT,"Parallelization"),wT.forEach(t),TT.forEach(t),cn.forEach(t),Yg=l(te),Ce=a(te,"DIV",{class:!0});var Ct=s(Ce);f(ws.$$.fragment,Ct),ek=l(Ct),go=a(Ct,"P",{});var Hr=s(go);tk=i(Hr,"The "),Rd=a(Hr,"CODE",{});var xT=s(Rd);ok=i(xT,"FlaxBartPreTrainedModel"),xT.forEach(t),nk=i(Hr,"forward method, overrides the "),Ud=a(Hr,"CODE",{});var zT=s(Ud);ak=i(zT,"__call__"),zT.forEach(t),sk=i(Hr," special method."),Hr.forEach(t),rk=l(Ct),f(Yo.$$.fragment,Ct),ik=l(Ct),Hd=a(Ct,"P",{});var qT=s(Hd);dk=i(qT,"Example:"),qT.forEach(t),lk=l(Ct),f(xs.$$.fragment,Ct),Ct.forEach(t),ck=l(te),yt=a(te,"DIV",{class:!0});var Qr=s(yt);f(zs.$$.fragment,Qr),pk=l(Qr),Qd=a(Qr,"P",{});var BT=s(Qd);hk=i(BT,"Example:"),BT.forEach(t),uk=l(Qr),f(qs.$$.fragment,Qr),Qr.forEach(t),mk=l(te),vt=a(te,"DIV",{class:!0});var Vr=s(vt);f(Bs.$$.fragment,Vr),fk=l(Vr),Vd=a(Vr,"P",{});var FT=s(Vd);_k=i(FT,"Example:"),FT.forEach(t),gk=l(Vr),f(Fs.$$.fragment,Vr),Vr.forEach(t),te.forEach(t),Zl=l(o),ko=a(o,"H2",{class:!0});var Qc=s(ko);en=a(Qc,"A",{id:!0,class:!0,href:!0});var $T=s(en);Jd=a($T,"SPAN",{});var jT=s(Jd);f($s.$$.fragment,jT),jT.forEach(t),$T.forEach(t),kk=l(Qc),Xd=a(Qc,"SPAN",{});var MT=s(Xd);bk=i(MT,"FlaxBartForQuestionAnswering"),MT.forEach(t),Qc.forEach(t),Yl=l(o),O=a(o,"DIV",{class:!0});var oe=s(O);f(js.$$.fragment,oe),yk=l(oe),bo=a(oe,"P",{});var Jr=s(bo);vk=i(Jr,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Kd=a(Jr,"CODE",{});var ET=s(Kd);Tk=i(ET,"span start logits"),ET.forEach(t),wk=i(Jr," and "),Zd=a(Jr,"CODE",{});var PT=s(Zd);xk=i(PT,"span end logits"),PT.forEach(t),zk=i(Jr,")."),Jr.forEach(t),qk=l(oe),Ms=a(oe,"P",{});var Vc=s(Ms);Bk=i(Vc,"This model inherits from "),vr=a(Vc,"A",{href:!0});var CT=s(vr);Fk=i(CT,"FlaxPreTrainedModel"),CT.forEach(t),$k=i(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),jk=l(oe),Es=a(oe,"P",{});var Jc=s(Es);Mk=i(Jc,`This model is also a Flax Linen
`),Ps=a(Jc,"A",{href:!0,rel:!0});var AT=s(Ps);Ek=i(AT,"flax.nn.Module"),AT.forEach(t),Pk=i(Jc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jc.forEach(t),Ck=l(oe),Yd=a(oe,"P",{});var ST=s(Yd);Ak=i(ST,"Finally, this model supports inherent JAX features such as:"),ST.forEach(t),Sk=l(oe),pt=a(oe,"UL",{});var pn=s(pt);el=a(pn,"LI",{});var IT=s(el);Cs=a(IT,"A",{href:!0,rel:!0});var OT=s(Cs);Ik=i(OT,"Just-In-Time (JIT) compilation"),OT.forEach(t),IT.forEach(t),Ok=l(pn),tl=a(pn,"LI",{});var NT=s(tl);As=a(NT,"A",{href:!0,rel:!0});var DT=s(As);Nk=i(DT,"Automatic Differentiation"),DT.forEach(t),NT.forEach(t),Dk=l(pn),ol=a(pn,"LI",{});var LT=s(ol);Ss=a(LT,"A",{href:!0,rel:!0});var GT=s(Ss);Lk=i(GT,"Vectorization"),GT.forEach(t),LT.forEach(t),Gk=l(pn),nl=a(pn,"LI",{});var WT=s(nl);Is=a(WT,"A",{href:!0,rel:!0});var RT=s(Is);Wk=i(RT,"Parallelization"),RT.forEach(t),WT.forEach(t),pn.forEach(t),Rk=l(oe),Ae=a(oe,"DIV",{class:!0});var At=s(Ae);f(Os.$$.fragment,At),Uk=l(At),yo=a(At,"P",{});var Xr=s(yo);Hk=i(Xr,"The "),al=a(Xr,"CODE",{});var UT=s(al);Qk=i(UT,"FlaxBartPreTrainedModel"),UT.forEach(t),Vk=i(Xr,"forward method, overrides the "),sl=a(Xr,"CODE",{});var HT=s(sl);Jk=i(HT,"__call__"),HT.forEach(t),Xk=i(Xr," special method."),Xr.forEach(t),Kk=l(At),f(tn.$$.fragment,At),Zk=l(At),rl=a(At,"P",{});var QT=s(rl);Yk=i(QT,"Example:"),QT.forEach(t),eb=l(At),f(Ns.$$.fragment,At),At.forEach(t),tb=l(oe),Tt=a(oe,"DIV",{class:!0});var Kr=s(Tt);f(Ds.$$.fragment,Kr),ob=l(Kr),il=a(Kr,"P",{});var VT=s(il);nb=i(VT,"Example:"),VT.forEach(t),ab=l(Kr),f(Ls.$$.fragment,Kr),Kr.forEach(t),sb=l(oe),wt=a(oe,"DIV",{class:!0});var Zr=s(wt);f(Gs.$$.fragment,Zr),rb=l(Zr),dl=a(Zr,"P",{});var JT=s(dl);ib=i(JT,"Example:"),JT.forEach(t),db=l(Zr),f(Ws.$$.fragment,Zr),Zr.forEach(t),oe.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(fw)),c(w,"id","bart"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bart"),c(y,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(H,"class","relative group"),c(Q,"href","https://arxiv.org/abs/1910.13461"),c(Q,"rel","nofollow"),c(We,"href","https://huggingface.co/sshleifer"),c(We,"rel","nofollow"),c(Re,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Re,"rel","nofollow"),c(Fe,"id","examples"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#examples"),c(ve,"class","relative group"),c(un,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(un,"rel","nofollow"),c(Qs,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(mn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(mn,"rel","nofollow"),c(fn,"href","https://huggingface.co/models?search=distilbart"),c(fn,"rel","nofollow"),c(_n,"href","https://arxiv.org/abs/2010.13002"),c(_n,"rel","nofollow"),c(To,"id","implementation-notes"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#implementation-notes"),c(Lt,"class","relative group"),c(Vs,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer"),c(Js,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),c(Xs,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartModel"),c(Zs,"href","/docs/transformers/master/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(wo,"id","mask-filling"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#mask-filling"),c(Ut,"class","relative group"),c(xo,"id","transformers.BartConfig"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.BartConfig"),c(Ht,"class","relative group"),c(Ys,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartModel"),c(Tn,"href","https://huggingface.co/facebook/bart-large"),c(Tn,"rel","nofollow"),c(er,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(tr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Te,"class","docstring"),c(zo,"id","transformers.BartTokenizer"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.BartTokenizer"),c(Jt,"class","relative group"),c(or,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(mt,"class","docstring"),c(Bo,"class","docstring"),c(Fo,"class","docstring"),c($o,"class","docstring"),c(E,"class","docstring"),c(jo,"id","transformers.BartTokenizerFast"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BartTokenizerFast"),c(Xt,"class","relative group"),c(sr,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Eo,"class","docstring"),c(G,"class","docstring"),c(Po,"id","transformers.BartModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.BartModel"),c(Kt,"class","relative group"),c(rr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Hn,"rel","nofollow"),c(ir,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartModel"),c(je,"class","docstring"),c(Qe,"class","docstring"),c(Ao,"id","transformers.BartForConditionalGeneration"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.BartForConditionalGeneration"),c(Yt,"class","relative group"),c(dr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yn,"rel","nofollow"),c(lr,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(K,"class","docstring"),c(Ve,"class","docstring"),c(Io,"id","transformers.BartForSequenceClassification"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.BartForSequenceClassification"),c(to,"class","relative group"),c(cr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ia,"rel","nofollow"),c(pr,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForSequenceClassification"),c(Z,"class","docstring"),c(we,"class","docstring"),c(No,"id","transformers.BartForQuestionAnswering"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.BartForQuestionAnswering"),c(no,"class","relative group"),c(hr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fa,"rel","nofollow"),c(ur,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(Me,"class","docstring"),c(xe,"class","docstring"),c(Lo,"id","transformers.BartForCausalLM"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.BartForCausalLM"),c(ro,"class","relative group"),c(ft,"class","docstring"),c(ba,"class","docstring"),c(Go,"id","transformers.TFBartModel"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.TFBartModel"),c(io,"class","relative group"),c(mr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qa,"rel","nofollow"),c(fr,"href","/docs/transformers/master/en/model_doc/bart#transformers.TFBartModel"),c(Ee,"class","docstring"),c(ze,"class","docstring"),c(Uo,"id","transformers.TFBartForConditionalGeneration"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.TFBartForConditionalGeneration"),c(co,"class","relative group"),c(_r,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pa,"rel","nofollow"),c(gr,"href","/docs/transformers/master/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(Y,"class","docstring"),c(qe,"class","docstring"),c(Vo,"id","transformers.FlaxBartModel"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxBartModel"),c(ho,"class","relative group"),c(kr,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(La,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(La,"rel","nofollow"),c(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ga,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ra,"rel","nofollow"),c(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ua,"rel","nofollow"),c(Pe,"class","docstring"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(W,"class","docstring"),c(Xo,"id","transformers.FlaxBartForConditionalGeneration"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.FlaxBartForConditionalGeneration"),c(mo,"class","relative group"),c(br,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(os,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(os,"rel","nofollow"),c(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ns,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(as,"rel","nofollow"),c(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ss,"rel","nofollow"),c(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(rs,"rel","nofollow"),c(ee,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(R,"class","docstring"),c(Zo,"id","transformers.FlaxBartForSequenceClassification"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.FlaxBartForSequenceClassification"),c(_o,"class","relative group"),c(yr,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ks,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ks,"rel","nofollow"),c(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(bs,"rel","nofollow"),c(ys,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ys,"rel","nofollow"),c(vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(vs,"rel","nofollow"),c(Ts,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ts,"rel","nofollow"),c(Ce,"class","docstring"),c(yt,"class","docstring"),c(vt,"class","docstring"),c(I,"class","docstring"),c(en,"id","transformers.FlaxBartForQuestionAnswering"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.FlaxBartForQuestionAnswering"),c(ko,"class","relative group"),c(vr,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ps,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ps,"rel","nofollow"),c(Cs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Cs,"rel","nofollow"),c(As,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(As,"rel","nofollow"),c(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ss,"rel","nofollow"),c(Is,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Is,"rel","nofollow"),c(Ae,"class","docstring"),c(Tt,"class","docstring"),c(wt,"class","docstring"),c(O,"class","docstring")},m(o,h){e(document.head,p),u(o,q,h),u(o,y,h),e(y,w),e(w,x),_(T,x,null),e(y,v),e(y,B),e(B,ne),u(o,A,h),u(o,$,h),e($,le),e(le,_e),e($,Ke),e($,ge),e(ge,ke),e($,Ze),u(o,Je,h),u(o,H,h),e(H,N),e(N,Le),_(ae,Le,null),e(H,C),e(H,S),e(S,Ye),u(o,ce,h),u(o,pe,h),e(pe,et),e(pe,Q),e(Q,tt),e(pe,ot),u(o,D,h),u(o,Be,h),e(Be,be),u(o,Xe,h),u(o,X,h),e(X,se),e(se,nt),e(X,at),e(X,V),e(V,st),e(X,ye),e(X,Ge),e(Ge,z),u(o,M,h),u(o,U,h),e(U,St),e(U,We),e(We,re),e(U,It),e(U,Re),e(Re,Ot),e(U,ie),u(o,he,h),u(o,ve,h),e(ve,Fe),e(Fe,de),_(Ue,de,null),e(ve,Nt),e(ve,He),e(He,Dt),u(o,yl,h),u(o,ht,h),e(ht,hn),e(hn,Xc),e(hn,un),e(un,Kc),e(hn,Zc),e(ht,Yc),e(ht,rt),e(rt,ep),e(rt,Qs),e(Qs,tp),e(rt,op),e(rt,Yr),e(Yr,np),e(rt,ap),e(rt,mn),e(mn,sp),e(rt,rp),e(ht,ip),e(ht,vo),e(vo,fn),e(fn,dp),e(vo,lp),e(vo,_n),e(_n,cp),e(vo,pp),u(o,vl,h),u(o,Lt,h),e(Lt,To),e(To,ei),_(gn,ei,null),e(Lt,hp),e(Lt,ti),e(ti,up),u(o,Tl,h),u(o,$e,h),e($e,it),e(it,mp),e(it,oi),e(oi,fp),e(it,_p),e(it,Vs),e(Vs,gp),e(it,kp),e(it,Js),e(Js,bp),e(it,yp),e($e,vp),e($e,Gt),e(Gt,Tp),e(Gt,Xs),e(Xs,wp),e(Gt,xp),e(Gt,ni),e(ni,zp),e(Gt,qp),e($e,Bp),e($e,Wt),e(Wt,Fp),e(Wt,ai),e(ai,$p),e(Wt,jp),e(Wt,si),e(si,Mp),e(Wt,Ep),e($e,Pp),e($e,Ks),e(Ks,Zs),e(Zs,Cp),e(Ks,Ap),e($e,Sp),e($e,Rt),e(Rt,Ip),e(Rt,ri),e(ri,Op),e(Rt,Np),e(Rt,ii),e(ii,Dp),e(Rt,Lp),u(o,wl,h),u(o,Ut,h),e(Ut,wo),e(wo,di),_(kn,di,null),e(Ut,Gp),e(Ut,li),e(li,Wp),u(o,xl,h),u(o,ut,h),e(ut,Rp),e(ut,ci),e(ci,Up),e(ut,Hp),e(ut,pi),e(pi,Qp),e(ut,Vp),u(o,zl,h),_(bn,o,h),u(o,ql,h),u(o,Ht,h),e(Ht,xo),e(xo,hi),_(yn,hi,null),e(Ht,Jp),e(Ht,ui),e(ui,Xp),u(o,Bl,h),u(o,Te,h),_(vn,Te,null),e(Te,Kp),e(Te,Qt),e(Qt,Zp),e(Qt,Ys),e(Ys,Yp),e(Qt,eh),e(Qt,Tn),e(Tn,th),e(Qt,oh),e(Te,nh),e(Te,Vt),e(Vt,ah),e(Vt,er),e(er,sh),e(Vt,rh),e(Vt,tr),e(tr,ih),e(Vt,dh),e(Te,lh),e(Te,mi),e(mi,ch),e(Te,ph),_(wn,Te,null),u(o,Fl,h),u(o,Jt,h),e(Jt,zo),e(zo,fi),_(xn,fi,null),e(Jt,hh),e(Jt,_i),e(_i,uh),u(o,$l,h),u(o,E,h),_(zn,E,null),e(E,mh),e(E,gi),e(gi,fh),e(E,_h),e(E,ki),e(ki,gh),e(E,kh),_(qn,E,null),e(E,bh),e(E,Bn),e(Bn,yh),e(Bn,bi),e(bi,vh),e(Bn,Th),e(E,wh),_(qo,E,null),e(E,xh),e(E,Fn),e(Fn,zh),e(Fn,or),e(or,qh),e(Fn,Bh),e(E,Fh),e(E,mt),_($n,mt,null),e(mt,$h),e(mt,yi),e(yi,jh),e(mt,Mh),e(mt,jn),e(jn,nr),e(nr,Eh),e(nr,vi),e(vi,Ph),e(jn,Ch),e(jn,ar),e(ar,Ah),e(ar,Ti),e(Ti,Sh),e(E,Ih),e(E,Bo),_(Mn,Bo,null),e(Bo,Oh),e(Bo,wi),e(wi,Nh),e(E,Dh),e(E,Fo),_(En,Fo,null),e(Fo,Lh),e(Fo,xi),e(xi,Gh),e(E,Wh),e(E,$o),_(Pn,$o,null),e($o,Rh),e($o,Cn),e(Cn,Uh),e(Cn,zi),e(zi,Hh),e(Cn,Qh),u(o,jl,h),u(o,Xt,h),e(Xt,jo),e(jo,qi),_(An,qi,null),e(Xt,Vh),e(Xt,Bi),e(Bi,Jh),u(o,Ml,h),u(o,G,h),_(Sn,G,null),e(G,Xh),e(G,In),e(In,Kh),e(In,Fi),e(Fi,Zh),e(In,Yh),e(G,eu),e(G,$i),e($i,tu),e(G,ou),_(On,G,null),e(G,nu),e(G,Nn),e(Nn,au),e(Nn,ji),e(ji,su),e(Nn,ru),e(G,iu),_(Mo,G,null),e(G,du),e(G,Dn),e(Dn,lu),e(Dn,sr),e(sr,cu),e(Dn,pu),e(G,hu),e(G,Eo),_(Ln,Eo,null),e(Eo,uu),e(Eo,Mi),e(Mi,mu),u(o,El,h),u(o,Kt,h),e(Kt,Po),e(Po,Ei),_(Gn,Ei,null),e(Kt,fu),e(Kt,Pi),e(Pi,_u),u(o,Pl,h),u(o,Qe,h),_(Wn,Qe,null),e(Qe,gu),e(Qe,Rn),e(Rn,ku),e(Rn,rr),e(rr,bu),e(Rn,yu),e(Qe,vu),e(Qe,Un),e(Un,Tu),e(Un,Hn),e(Hn,wu),e(Un,xu),e(Qe,zu),e(Qe,je),_(Qn,je,null),e(je,qu),e(je,Zt),e(Zt,Bu),e(Zt,ir),e(ir,Fu),e(Zt,$u),e(Zt,Ci),e(Ci,ju),e(Zt,Mu),e(je,Eu),_(Co,je,null),e(je,Pu),e(je,Ai),e(Ai,Cu),e(je,Au),_(Vn,je,null),u(o,Cl,h),u(o,Yt,h),e(Yt,Ao),e(Ao,Si),_(Jn,Si,null),e(Yt,Su),e(Yt,Ii),e(Ii,Iu),u(o,Al,h),u(o,Ve,h),_(Xn,Ve,null),e(Ve,Ou),e(Ve,Kn),e(Kn,Nu),e(Kn,dr),e(dr,Du),e(Kn,Lu),e(Ve,Gu),e(Ve,Zn),e(Zn,Wu),e(Zn,Yn),e(Yn,Ru),e(Zn,Uu),e(Ve,Hu),e(Ve,K),_(ea,K,null),e(K,Qu),e(K,eo),e(eo,Vu),e(eo,lr),e(lr,Ju),e(eo,Xu),e(eo,Oi),e(Oi,Ku),e(eo,Zu),e(K,Yu),_(So,K,null),e(K,em),e(K,Ni),e(Ni,tm),e(K,om),_(ta,K,null),e(K,nm),e(K,Di),e(Di,am),e(K,sm),_(oa,K,null),u(o,Sl,h),u(o,to,h),e(to,Io),e(Io,Li),_(na,Li,null),e(to,rm),e(to,Gi),e(Gi,im),u(o,Il,h),u(o,we,h),_(aa,we,null),e(we,dm),e(we,Wi),e(Wi,lm),e(we,cm),e(we,sa),e(sa,pm),e(sa,cr),e(cr,hm),e(sa,um),e(we,mm),e(we,ra),e(ra,fm),e(ra,ia),e(ia,_m),e(ra,gm),e(we,km),e(we,Z),_(da,Z,null),e(Z,bm),e(Z,oo),e(oo,ym),e(oo,pr),e(pr,vm),e(oo,Tm),e(oo,Ri),e(Ri,wm),e(oo,xm),e(Z,zm),_(Oo,Z,null),e(Z,qm),e(Z,Ui),e(Ui,Bm),e(Z,Fm),_(la,Z,null),e(Z,$m),e(Z,Hi),e(Hi,jm),e(Z,Mm),_(ca,Z,null),u(o,Ol,h),u(o,no,h),e(no,No),e(No,Qi),_(pa,Qi,null),e(no,Em),e(no,Vi),e(Vi,Pm),u(o,Nl,h),u(o,xe,h),_(ha,xe,null),e(xe,Cm),e(xe,ao),e(ao,Am),e(ao,Ji),e(Ji,Sm),e(ao,Im),e(ao,Xi),e(Xi,Om),e(ao,Nm),e(xe,Dm),e(xe,ua),e(ua,Lm),e(ua,hr),e(hr,Gm),e(ua,Wm),e(xe,Rm),e(xe,ma),e(ma,Um),e(ma,fa),e(fa,Hm),e(ma,Qm),e(xe,Vm),e(xe,Me),_(_a,Me,null),e(Me,Jm),e(Me,so),e(so,Xm),e(so,ur),e(ur,Km),e(so,Zm),e(so,Ki),e(Ki,Ym),e(so,ef),e(Me,tf),_(Do,Me,null),e(Me,of),e(Me,Zi),e(Zi,nf),e(Me,af),_(ga,Me,null),u(o,Dl,h),u(o,ro,h),e(ro,Lo),e(Lo,Yi),_(ka,Yi,null),e(ro,sf),e(ro,ed),e(ed,rf),u(o,Ll,h),u(o,ba,h),e(ba,ft),_(ya,ft,null),e(ft,df),e(ft,td),e(td,lf),e(ft,cf),_(va,ft,null),u(o,Gl,h),u(o,io,h),e(io,Go),e(Go,od),_(Ta,od,null),e(io,pf),e(io,nd),e(nd,hf),u(o,Wl,h),u(o,ze,h),_(wa,ze,null),e(ze,uf),e(ze,xa),e(xa,mf),e(xa,mr),e(mr,ff),e(xa,_f),e(ze,gf),e(ze,za),e(za,kf),e(za,qa),e(qa,bf),e(za,yf),e(ze,vf),_(Wo,ze,null),e(ze,Tf),e(ze,Ee),_(Ba,Ee,null),e(Ee,wf),e(Ee,lo),e(lo,xf),e(lo,fr),e(fr,zf),e(lo,qf),e(lo,ad),e(ad,Bf),e(lo,Ff),e(Ee,$f),_(Ro,Ee,null),e(Ee,jf),e(Ee,sd),e(sd,Mf),e(Ee,Ef),_(Fa,Ee,null),u(o,Rl,h),u(o,co,h),e(co,Uo),e(Uo,rd),_($a,rd,null),e(co,Pf),e(co,id),e(id,Cf),u(o,Ul,h),u(o,qe,h),_(ja,qe,null),e(qe,Af),e(qe,Ma),e(Ma,Sf),e(Ma,_r),e(_r,If),e(Ma,Of),e(qe,Nf),e(qe,Ea),e(Ea,Df),e(Ea,Pa),e(Pa,Lf),e(Ea,Gf),e(qe,Wf),_(Ho,qe,null),e(qe,Rf),e(qe,Y),_(Ca,Y,null),e(Y,Uf),e(Y,po),e(po,Hf),e(po,gr),e(gr,Qf),e(po,Vf),e(po,dd),e(dd,Jf),e(po,Xf),e(Y,Kf),_(Qo,Y,null),e(Y,Zf),e(Y,ld),e(ld,Yf),e(Y,e_),_(Aa,Y,null),e(Y,t_),e(Y,cd),e(cd,o_),e(Y,n_),_(Sa,Y,null),u(o,Hl,h),u(o,ho,h),e(ho,Vo),e(Vo,pd),_(Ia,pd,null),e(ho,a_),e(ho,hd),e(hd,s_),u(o,Ql,h),u(o,W,h),_(Oa,W,null),e(W,r_),e(W,Na),e(Na,i_),e(Na,kr),e(kr,d_),e(Na,l_),e(W,c_),e(W,Da),e(Da,p_),e(Da,La),e(La,h_),e(Da,u_),e(W,m_),e(W,ud),e(ud,f_),e(W,__),e(W,dt),e(dt,md),e(md,Ga),e(Ga,g_),e(dt,k_),e(dt,fd),e(fd,Wa),e(Wa,b_),e(dt,y_),e(dt,_d),e(_d,Ra),e(Ra,v_),e(dt,T_),e(dt,gd),e(gd,Ua),e(Ua,w_),e(W,x_),e(W,Pe),_(Ha,Pe,null),e(Pe,z_),e(Pe,uo),e(uo,q_),e(uo,kd),e(kd,B_),e(uo,F_),e(uo,bd),e(bd,$_),e(uo,j_),e(Pe,M_),_(Jo,Pe,null),e(Pe,E_),e(Pe,yd),e(yd,P_),e(Pe,C_),_(Qa,Pe,null),e(W,A_),e(W,_t),_(Va,_t,null),e(_t,S_),e(_t,vd),e(vd,I_),e(_t,O_),_(Ja,_t,null),e(W,N_),e(W,gt),_(Xa,gt,null),e(gt,D_),e(gt,Td),e(Td,L_),e(gt,G_),_(Ka,gt,null),u(o,Vl,h),u(o,mo,h),e(mo,Xo),e(Xo,wd),_(Za,wd,null),e(mo,W_),e(mo,xd),e(xd,R_),u(o,Jl,h),u(o,R,h),_(Ya,R,null),e(R,U_),e(R,es),e(es,H_),e(es,br),e(br,Q_),e(es,V_),e(R,J_),e(R,ts),e(ts,X_),e(ts,os),e(os,K_),e(ts,Z_),e(R,Y_),e(R,zd),e(zd,eg),e(R,tg),e(R,lt),e(lt,qd),e(qd,ns),e(ns,og),e(lt,ng),e(lt,Bd),e(Bd,as),e(as,ag),e(lt,sg),e(lt,Fd),e(Fd,ss),e(ss,rg),e(lt,ig),e(lt,$d),e($d,rs),e(rs,dg),e(R,lg),e(R,ee),_(is,ee,null),e(ee,cg),e(ee,fo),e(fo,pg),e(fo,jd),e(jd,hg),e(fo,ug),e(fo,Md),e(Md,mg),e(fo,fg),e(ee,_g),_(Ko,ee,null),e(ee,gg),e(ee,Ed),e(Ed,kg),e(ee,bg),_(ds,ee,null),e(ee,yg),e(ee,Pd),e(Pd,vg),e(ee,Tg),_(ls,ee,null),e(R,wg),e(R,kt),_(cs,kt,null),e(kt,xg),e(kt,Cd),e(Cd,zg),e(kt,qg),_(ps,kt,null),e(R,Bg),e(R,bt),_(hs,bt,null),e(bt,Fg),e(bt,Ad),e(Ad,$g),e(bt,jg),_(us,bt,null),u(o,Xl,h),u(o,_o,h),e(_o,Zo),e(Zo,Sd),_(ms,Sd,null),e(_o,Mg),e(_o,Id),e(Id,Eg),u(o,Kl,h),u(o,I,h),_(fs,I,null),e(I,Pg),e(I,Od),e(Od,Cg),e(I,Ag),e(I,_s),e(_s,Sg),e(_s,yr),e(yr,Ig),e(_s,Og),e(I,Ng),e(I,gs),e(gs,Dg),e(gs,ks),e(ks,Lg),e(gs,Gg),e(I,Wg),e(I,Nd),e(Nd,Rg),e(I,Ug),e(I,ct),e(ct,Dd),e(Dd,bs),e(bs,Hg),e(ct,Qg),e(ct,Ld),e(Ld,ys),e(ys,Vg),e(ct,Jg),e(ct,Gd),e(Gd,vs),e(vs,Xg),e(ct,Kg),e(ct,Wd),e(Wd,Ts),e(Ts,Zg),e(I,Yg),e(I,Ce),_(ws,Ce,null),e(Ce,ek),e(Ce,go),e(go,tk),e(go,Rd),e(Rd,ok),e(go,nk),e(go,Ud),e(Ud,ak),e(go,sk),e(Ce,rk),_(Yo,Ce,null),e(Ce,ik),e(Ce,Hd),e(Hd,dk),e(Ce,lk),_(xs,Ce,null),e(I,ck),e(I,yt),_(zs,yt,null),e(yt,pk),e(yt,Qd),e(Qd,hk),e(yt,uk),_(qs,yt,null),e(I,mk),e(I,vt),_(Bs,vt,null),e(vt,fk),e(vt,Vd),e(Vd,_k),e(vt,gk),_(Fs,vt,null),u(o,Zl,h),u(o,ko,h),e(ko,en),e(en,Jd),_($s,Jd,null),e(ko,kk),e(ko,Xd),e(Xd,bk),u(o,Yl,h),u(o,O,h),_(js,O,null),e(O,yk),e(O,bo),e(bo,vk),e(bo,Kd),e(Kd,Tk),e(bo,wk),e(bo,Zd),e(Zd,xk),e(bo,zk),e(O,qk),e(O,Ms),e(Ms,Bk),e(Ms,vr),e(vr,Fk),e(Ms,$k),e(O,jk),e(O,Es),e(Es,Mk),e(Es,Ps),e(Ps,Ek),e(Es,Pk),e(O,Ck),e(O,Yd),e(Yd,Ak),e(O,Sk),e(O,pt),e(pt,el),e(el,Cs),e(Cs,Ik),e(pt,Ok),e(pt,tl),e(tl,As),e(As,Nk),e(pt,Dk),e(pt,ol),e(ol,Ss),e(Ss,Lk),e(pt,Gk),e(pt,nl),e(nl,Is),e(Is,Wk),e(O,Rk),e(O,Ae),_(Os,Ae,null),e(Ae,Uk),e(Ae,yo),e(yo,Hk),e(yo,al),e(al,Qk),e(yo,Vk),e(yo,sl),e(sl,Jk),e(yo,Xk),e(Ae,Kk),_(tn,Ae,null),e(Ae,Zk),e(Ae,rl),e(rl,Yk),e(Ae,eb),_(Ns,Ae,null),e(O,tb),e(O,Tt),_(Ds,Tt,null),e(Tt,ob),e(Tt,il),e(il,nb),e(Tt,ab),_(Ls,Tt,null),e(O,sb),e(O,wt),_(Gs,wt,null),e(wt,rb),e(wt,dl),e(dl,ib),e(wt,db),_(Ws,wt,null),ec=!0},p(o,[h]){const Rs={};h&2&&(Rs.$$scope={dirty:h,ctx:o}),qo.$set(Rs);const ll={};h&2&&(ll.$$scope={dirty:h,ctx:o}),Mo.$set(ll);const cl={};h&2&&(cl.$$scope={dirty:h,ctx:o}),Co.$set(cl);const pl={};h&2&&(pl.$$scope={dirty:h,ctx:o}),So.$set(pl);const on={};h&2&&(on.$$scope={dirty:h,ctx:o}),Oo.$set(on);const hl={};h&2&&(hl.$$scope={dirty:h,ctx:o}),Do.$set(hl);const ul={};h&2&&(ul.$$scope={dirty:h,ctx:o}),Wo.$set(ul);const Us={};h&2&&(Us.$$scope={dirty:h,ctx:o}),Ro.$set(Us);const ml={};h&2&&(ml.$$scope={dirty:h,ctx:o}),Ho.$set(ml);const fl={};h&2&&(fl.$$scope={dirty:h,ctx:o}),Qo.$set(fl);const _l={};h&2&&(_l.$$scope={dirty:h,ctx:o}),Jo.$set(_l);const Hs={};h&2&&(Hs.$$scope={dirty:h,ctx:o}),Ko.$set(Hs);const gl={};h&2&&(gl.$$scope={dirty:h,ctx:o}),Yo.$set(gl);const kl={};h&2&&(kl.$$scope={dirty:h,ctx:o}),tn.$set(kl)},i(o){ec||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(Ue.$$.fragment,o),g(gn.$$.fragment,o),g(kn.$$.fragment,o),g(bn.$$.fragment,o),g(yn.$$.fragment,o),g(vn.$$.fragment,o),g(wn.$$.fragment,o),g(xn.$$.fragment,o),g(zn.$$.fragment,o),g(qn.$$.fragment,o),g(qo.$$.fragment,o),g($n.$$.fragment,o),g(Mn.$$.fragment,o),g(En.$$.fragment,o),g(Pn.$$.fragment,o),g(An.$$.fragment,o),g(Sn.$$.fragment,o),g(On.$$.fragment,o),g(Mo.$$.fragment,o),g(Ln.$$.fragment,o),g(Gn.$$.fragment,o),g(Wn.$$.fragment,o),g(Qn.$$.fragment,o),g(Co.$$.fragment,o),g(Vn.$$.fragment,o),g(Jn.$$.fragment,o),g(Xn.$$.fragment,o),g(ea.$$.fragment,o),g(So.$$.fragment,o),g(ta.$$.fragment,o),g(oa.$$.fragment,o),g(na.$$.fragment,o),g(aa.$$.fragment,o),g(da.$$.fragment,o),g(Oo.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(pa.$$.fragment,o),g(ha.$$.fragment,o),g(_a.$$.fragment,o),g(Do.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(ya.$$.fragment,o),g(va.$$.fragment,o),g(Ta.$$.fragment,o),g(wa.$$.fragment,o),g(Wo.$$.fragment,o),g(Ba.$$.fragment,o),g(Ro.$$.fragment,o),g(Fa.$$.fragment,o),g($a.$$.fragment,o),g(ja.$$.fragment,o),g(Ho.$$.fragment,o),g(Ca.$$.fragment,o),g(Qo.$$.fragment,o),g(Aa.$$.fragment,o),g(Sa.$$.fragment,o),g(Ia.$$.fragment,o),g(Oa.$$.fragment,o),g(Ha.$$.fragment,o),g(Jo.$$.fragment,o),g(Qa.$$.fragment,o),g(Va.$$.fragment,o),g(Ja.$$.fragment,o),g(Xa.$$.fragment,o),g(Ka.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(is.$$.fragment,o),g(Ko.$$.fragment,o),g(ds.$$.fragment,o),g(ls.$$.fragment,o),g(cs.$$.fragment,o),g(ps.$$.fragment,o),g(hs.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(ws.$$.fragment,o),g(Yo.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g(Bs.$$.fragment,o),g(Fs.$$.fragment,o),g($s.$$.fragment,o),g(js.$$.fragment,o),g(Os.$$.fragment,o),g(tn.$$.fragment,o),g(Ns.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),ec=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(Ue.$$.fragment,o),k(gn.$$.fragment,o),k(kn.$$.fragment,o),k(bn.$$.fragment,o),k(yn.$$.fragment,o),k(vn.$$.fragment,o),k(wn.$$.fragment,o),k(xn.$$.fragment,o),k(zn.$$.fragment,o),k(qn.$$.fragment,o),k(qo.$$.fragment,o),k($n.$$.fragment,o),k(Mn.$$.fragment,o),k(En.$$.fragment,o),k(Pn.$$.fragment,o),k(An.$$.fragment,o),k(Sn.$$.fragment,o),k(On.$$.fragment,o),k(Mo.$$.fragment,o),k(Ln.$$.fragment,o),k(Gn.$$.fragment,o),k(Wn.$$.fragment,o),k(Qn.$$.fragment,o),k(Co.$$.fragment,o),k(Vn.$$.fragment,o),k(Jn.$$.fragment,o),k(Xn.$$.fragment,o),k(ea.$$.fragment,o),k(So.$$.fragment,o),k(ta.$$.fragment,o),k(oa.$$.fragment,o),k(na.$$.fragment,o),k(aa.$$.fragment,o),k(da.$$.fragment,o),k(Oo.$$.fragment,o),k(la.$$.fragment,o),k(ca.$$.fragment,o),k(pa.$$.fragment,o),k(ha.$$.fragment,o),k(_a.$$.fragment,o),k(Do.$$.fragment,o),k(ga.$$.fragment,o),k(ka.$$.fragment,o),k(ya.$$.fragment,o),k(va.$$.fragment,o),k(Ta.$$.fragment,o),k(wa.$$.fragment,o),k(Wo.$$.fragment,o),k(Ba.$$.fragment,o),k(Ro.$$.fragment,o),k(Fa.$$.fragment,o),k($a.$$.fragment,o),k(ja.$$.fragment,o),k(Ho.$$.fragment,o),k(Ca.$$.fragment,o),k(Qo.$$.fragment,o),k(Aa.$$.fragment,o),k(Sa.$$.fragment,o),k(Ia.$$.fragment,o),k(Oa.$$.fragment,o),k(Ha.$$.fragment,o),k(Jo.$$.fragment,o),k(Qa.$$.fragment,o),k(Va.$$.fragment,o),k(Ja.$$.fragment,o),k(Xa.$$.fragment,o),k(Ka.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(is.$$.fragment,o),k(Ko.$$.fragment,o),k(ds.$$.fragment,o),k(ls.$$.fragment,o),k(cs.$$.fragment,o),k(ps.$$.fragment,o),k(hs.$$.fragment,o),k(us.$$.fragment,o),k(ms.$$.fragment,o),k(fs.$$.fragment,o),k(ws.$$.fragment,o),k(Yo.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(qs.$$.fragment,o),k(Bs.$$.fragment,o),k(Fs.$$.fragment,o),k($s.$$.fragment,o),k(js.$$.fragment,o),k(Os.$$.fragment,o),k(tn.$$.fragment,o),k(Ns.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Gs.$$.fragment,o),k(Ws.$$.fragment,o),ec=!1},d(o){t(p),o&&t(q),o&&t(y),b(T),o&&t(A),o&&t($),o&&t(Je),o&&t(H),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Be),o&&t(Xe),o&&t(X),o&&t(M),o&&t(U),o&&t(he),o&&t(ve),b(Ue),o&&t(yl),o&&t(ht),o&&t(vl),o&&t(Lt),b(gn),o&&t(Tl),o&&t($e),o&&t(wl),o&&t(Ut),b(kn),o&&t(xl),o&&t(ut),o&&t(zl),b(bn,o),o&&t(ql),o&&t(Ht),b(yn),o&&t(Bl),o&&t(Te),b(vn),b(wn),o&&t(Fl),o&&t(Jt),b(xn),o&&t($l),o&&t(E),b(zn),b(qn),b(qo),b($n),b(Mn),b(En),b(Pn),o&&t(jl),o&&t(Xt),b(An),o&&t(Ml),o&&t(G),b(Sn),b(On),b(Mo),b(Ln),o&&t(El),o&&t(Kt),b(Gn),o&&t(Pl),o&&t(Qe),b(Wn),b(Qn),b(Co),b(Vn),o&&t(Cl),o&&t(Yt),b(Jn),o&&t(Al),o&&t(Ve),b(Xn),b(ea),b(So),b(ta),b(oa),o&&t(Sl),o&&t(to),b(na),o&&t(Il),o&&t(we),b(aa),b(da),b(Oo),b(la),b(ca),o&&t(Ol),o&&t(no),b(pa),o&&t(Nl),o&&t(xe),b(ha),b(_a),b(Do),b(ga),o&&t(Dl),o&&t(ro),b(ka),o&&t(Ll),o&&t(ba),b(ya),b(va),o&&t(Gl),o&&t(io),b(Ta),o&&t(Wl),o&&t(ze),b(wa),b(Wo),b(Ba),b(Ro),b(Fa),o&&t(Rl),o&&t(co),b($a),o&&t(Ul),o&&t(qe),b(ja),b(Ho),b(Ca),b(Qo),b(Aa),b(Sa),o&&t(Hl),o&&t(ho),b(Ia),o&&t(Ql),o&&t(W),b(Oa),b(Ha),b(Jo),b(Qa),b(Va),b(Ja),b(Xa),b(Ka),o&&t(Vl),o&&t(mo),b(Za),o&&t(Jl),o&&t(R),b(Ya),b(is),b(Ko),b(ds),b(ls),b(cs),b(ps),b(hs),b(us),o&&t(Xl),o&&t(_o),b(ms),o&&t(Kl),o&&t(I),b(fs),b(ws),b(Yo),b(xs),b(zs),b(qs),b(Bs),b(Fs),o&&t(Zl),o&&t(ko),b($s),o&&t(Yl),o&&t(O),b(js),b(Os),b(tn),b(Ns),b(Ds),b(Ls),b(Gs),b(Ws)}}}const fw={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"}],title:"BART"};function _w(j,p,q){let{fw:y}=p;return j.$$set=w=>{"fw"in w&&q(0,y=w.fw)},[y]}class ww extends XT{constructor(p){super();KT(this,p,_w,mw,ZT,{fw:0})}}export{ww as default,fw as metadata};
